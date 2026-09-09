import crypto from "crypto";
import { AssessmentRecord, ContactRecord } from "./persistence";

export interface NotificationResult {
  attempted: boolean;
  success: boolean;
  provider: string;
  error?: string;
  statusCode?: number;
}

export interface NotificationProvider {
  readonly name: string;
  isConfigured(): boolean;
  dispatch(record: AssessmentRecord): Promise<NotificationResult>;
  dispatchContact(record: ContactRecord): Promise<NotificationResult>;
}

/**
 * Webhook-based internal notification dispatcher.
 * Delivers structured notifications to an external Slack, Teams, or HTTP API receiver.
 */
export class WebhookNotificationProvider implements NotificationProvider {
  readonly name = "External Webhook Notification Dispatcher";

  isConfigured(): boolean {
    const webhookUrl =
      process.env.ASSESSMENT_NOTIFICATION_WEBHOOK_URL ||
      process.env.INTERNAL_NOTIFICATION_WEBHOOK_URL;
    return Boolean(webhookUrl && webhookUrl.trim().length > 0);
  }

  async dispatch(record: AssessmentRecord): Promise<NotificationResult> {
    const webhookUrl =
      process.env.ASSESSMENT_NOTIFICATION_WEBHOOK_URL ||
      process.env.INTERNAL_NOTIFICATION_WEBHOOK_URL;

    if (!webhookUrl || !webhookUrl.trim()) {
      return {
        attempted: false,
        success: false,
        provider: this.name,
        error: "Webhook URL is not configured in environment.",
      };
    }

    const isGoogleChat = webhookUrl.includes("chat.googleapis.com");
    let bodyString: string;

    if (isGoogleChat) {
      const lines = [
        `*STRATISION — NEW BIA™ ASSESSMENT ENQUIRY*`,
        `*Reference ID:* \`${record.referenceId}\``,
        `*Name:* ${record.firstName} ${record.lastName}`.trim(),
        `*Company:* ${record.company}`,
        `*Role:* ${record.role}`,
        `*Industry:* ${record.industry}`,
        `*Email:* ${record.workEmail}`,
        `*Exploration Trigger:* ${record.promptReason}`,
        record.operationalFriction ? `*Operational Friction:* ${record.operationalFriction}` : null,
        `*AI Adoption Stage:* ${record.aiAdoptionStage}`,
        record.additionalContext ? `*Additional Context:* ${record.additionalContext}` : null,
        `*Submitted:* ${record.createdAt}`,
      ].filter(Boolean);
      bodyString = JSON.stringify({ text: lines.join("\n") });
    } else {
      // Prepare clean minimal payload containing only necessary operational data
      const payload = {
        event: "BUSINESS_INTELLIGENCE_ASSESSMENT_SUBMITTED",
        timestamp: new Date().toISOString(),
        referenceId: record.referenceId,
        createdAt: record.createdAt,
        prospect: {
          name: `${record.firstName} ${record.lastName}`.trim(),
          workEmail: record.workEmail,
          company: record.company,
          role: record.role,
          industry: record.industry,
        },
        diagnosticContext: {
          explorationTrigger: record.promptReason,
          operationalFriction: record.operationalFriction || null,
          aiAdoptionStage: record.aiAdoptionStage,
          additionalContext: record.additionalContext || null,
        },
      };
      bodyString = JSON.stringify(payload);
    }
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "User-Agent": "Stratision-BIA-Intake/2.0",
      "X-Stratision-Reference-Id": record.referenceId,
    };

    // Optional cryptographic HMAC-SHA256 signature if shared secret is provisioned
    const secret = process.env.NOTIFICATION_WEBHOOK_SECRET;
    if (secret) {
      const signature = crypto.createHmac("sha256", secret).update(bodyString).digest("hex");
      headers["X-Stratision-Signature"] = `sha256=${signature}`;
    }

    // Retry-safe delivery: Up to 2 attempts with short timeout
    const maxAttempts = 2;
    let lastError: string | undefined;
    let lastStatusCode: number | undefined;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers,
          body: bodyString,
          signal: AbortSignal.timeout(4000), // 4 second connection/read deadline
        });

        lastStatusCode = response.status;

        if (response.ok) {
          return {
            attempted: true,
            success: true,
            provider: this.name,
            statusCode: response.status,
          };
        } else {
          const responseText = await response.text().catch(() => "");
          lastError = `HTTP ${response.status}: ${responseText.slice(0, 200)}`;
        }
      } catch (err: any) {
        lastError = err.message || "Network request failed";
      }

      // Backoff before retry
      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 250));
      }
    }

    return {
      attempted: true,
      success: false,
      provider: this.name,
      error: lastError,
      statusCode: lastStatusCode,
    };
  }

  async dispatchContact(record: ContactRecord): Promise<NotificationResult> {
    const webhookUrl =
      process.env.CONTACT_NOTIFICATION_WEBHOOK_URL ||
      process.env.INTERNAL_NOTIFICATION_WEBHOOK_URL ||
      process.env.ASSESSMENT_NOTIFICATION_WEBHOOK_URL;

    if (!webhookUrl || !webhookUrl.trim()) {
      return {
        attempted: false,
        success: false,
        provider: this.name,
        error: "Webhook URL is not configured in environment.",
      };
    }

    const isGoogleChat = webhookUrl.includes("chat.googleapis.com");
    let bodyString: string;

    if (isGoogleChat) {
      const lines = [
        `*STRATISION — NEW CONTACT ENQUIRY*`,
        `*Reference ID:* \`${record.referenceId}\``,
        `*Name:* ${record.firstName} ${record.lastName}`.trim(),
        `*Company:* ${record.company}`,
        `*Role:* ${record.role}`,
        `*Email:* ${record.workEmail}`,
        `*Topic:* ${record.topic}`,
        record.objective ? `*Objective:* ${record.objective}` : null,
        record.preferredNextStep ? `*Preferred Next Step:* ${record.preferredNextStep}` : null,
        `*Submitted:* ${record.createdAt}`,
      ].filter(Boolean);
      bodyString = JSON.stringify({ text: lines.join("\n") });
    } else {
      const payload = {
        event: "INITIAL_CONVERSATION_ENQUIRY_SUBMITTED",
        timestamp: new Date().toISOString(),
        referenceId: record.referenceId,
        createdAt: record.createdAt,
        prospect: {
          name: `${record.firstName} ${record.lastName}`.trim(),
          workEmail: record.workEmail,
          company: record.company,
          role: record.role,
        },
        enquiry: {
          topic: record.topic,
          objective: record.objective || null,
          preferredNextStep: record.preferredNextStep,
        },
      };
      bodyString = JSON.stringify(payload);
    }
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "User-Agent": "Stratision-Contact-Intake/1.0",
      "X-Stratision-Reference-Id": record.referenceId,
    };

    const secret = process.env.NOTIFICATION_WEBHOOK_SECRET;
    if (secret) {
      const signature = crypto.createHmac("sha256", secret).update(bodyString).digest("hex");
      headers["X-Stratision-Signature"] = `sha256=${signature}`;
    }

    const maxAttempts = 2;
    let lastError: string | undefined;
    let lastStatusCode: number | undefined;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers,
          body: bodyString,
          signal: AbortSignal.timeout(4000),
        });

        lastStatusCode = response.status;

        if (response.ok) {
          return {
            attempted: true,
            success: true,
            provider: this.name,
            statusCode: response.status,
          };
        } else {
          const responseText = await response.text().catch(() => "");
          lastError = `HTTP ${response.status}: ${responseText.slice(0, 200)}`;
        }
      } catch (err: any) {
        lastError = err.message || "Network request failed";
      }

      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 250));
      }
    }

    return {
      attempted: true,
      success: false,
      provider: this.name,
      error: lastError,
      statusCode: lastStatusCode,
    };
  }
}

// Global active notification provider
let activeNotificationProvider: NotificationProvider = new WebhookNotificationProvider();

export function getNotificationProvider(): NotificationProvider {
  return activeNotificationProvider;
}

export function setNotificationProviderForTesting(provider: NotificationProvider): void {
  activeNotificationProvider = provider;
}
