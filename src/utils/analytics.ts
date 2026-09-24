/**
 * Safe, privacy-preserving event instrumentation for Stratision commercial conversion analytics.
 * 
 * Strict Governance Rules:
 * - NO personal data (PII) is tracked (names, emails, company names, messages are strictly excluded).
 * - Zero external dependencies or bloatware libraries.
 * - Automatically bridges to window.dataLayer (GTM) or window.gtag (GA4) when provisioned.
 * - Emits standard DOM CustomEvents for testing, verification, and custom tag managers.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type StratisionCommercialEvent =
  | "conversation_modal_opened"
  | "conversation_form_started"
  | "conversation_submitted"
  | "conversation_submission_failed"
  | "conversation_confirmed"
  | "calendar_opened"
  | "BIA_started"
  | "BIA_completed"
  | "contact_submitted";

interface SafeEventProperties {
  referenceId?: string;
  source?: string;
  topic?: string;
  step?: string;
  reason?: string;
  [key: string]: any;
}

// Strictly strip any accidental PII keys
const PII_KEYS = new Set([
  "name",
  "firstname",
  "lastname",
  "email",
  "workemail",
  "company",
  "phone",
  "notes",
  "challenge",
  "objective",
  "message",
]);

function sanitizeProperties(props?: SafeEventProperties): Record<string, any> {
  if (!props) return {};
  const clean: Record<string, any> = {};
  for (const [key, value] of Object.entries(props)) {
    if (!PII_KEYS.has(key.toLowerCase())) {
      clean[key] = value;
    }
  }
  return clean;
}

export function trackEvent(event: StratisionCommercialEvent, properties?: SafeEventProperties): void {
  try {
    const cleanProps = sanitizeProperties(properties);
    const eventPayload = {
      event,
      timestamp: new Date().toISOString(),
      ...cleanProps,
    };

    // 1. Dispatch custom DOM event for verification & telemetry listeners
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.dispatchEvent(new CustomEvent("stratision_analytics", { detail: eventPayload }));
    }

    // 2. Forward to Google Tag Manager dataLayer if provisioned
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(eventPayload);
    }

    // 3. Forward to Google Analytics 4 (gtag) if provisioned
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, cleanProps);
    }

    // 4. Debug logger in development mode
    if (Boolean((import.meta as any).env?.DEV)) {
      console.log(`[Analytics Event] ${event}`, cleanProps);
    }
  } catch (err) {
    console.debug("[Analytics Warning] Failed to dispatch tracking event:", err);
  }
}
