import fs from "fs";
import path from "path";
import { Firestore } from "@google-cloud/firestore";

/**
 * Business Intelligence Assessment (BIA™) Canonical Record Shape.
 * Exactly 12 fields as approved for the diagnostic assessment architecture.
 */
export interface AssessmentRecord {
  referenceId: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role: string;
  industry: string;
  promptReason: string;
  operationalFriction: string;
  aiAdoptionStage: string;
  additionalContext: string;
}

/**
 * Stratision Commercial Initial Conversation Enquiry Record Shape.
 * Focused on opening a serious consultancy conversation without premature diagnostic friction.
 */
export interface ContactRecord {
  referenceId: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role: string;
  topic: string;
  objective?: string;
  preferredNextStep: string;
}

/**
 * Abstraction layer separating HTTP route handling from physical datastore implementations.
 */
export interface PersistenceProvider {
  readonly name: string;
  readonly isProductionSafe: boolean;
  isConfigured(): boolean;
  saveEnquiry(record: AssessmentRecord): Promise<void>;
  getEnquiryByReference(referenceId: string): Promise<AssessmentRecord | null>;
  saveContactEnquiry(record: ContactRecord): Promise<void>;
  getContactEnquiryByReference(referenceId: string): Promise<ContactRecord | null>;
}

/**
 * Production-grade persistence provider targeting Google Cloud Firestore.
 * Suitable for multi-instance, horizontally scaled Cloud Run deployments.
 */
export class FirestorePersistenceProvider implements PersistenceProvider {
  readonly name = "Google Cloud Firestore";
  readonly isProductionSafe = true;
  private client: Firestore | null = null;
  private readonly collectionName = "assessment_enquiries";
  private readonly contactCollectionName = "contact_enquiries";

  private getResolvedProjectId(): string | undefined {
    return (
      process.env.FIRESTORE_PROJECT_ID ||
      process.env.GOOGLE_CLOUD_PROJECT ||
      process.env.GCLOUD_PROJECT ||
      process.env.FIREBASE_PROJECT_ID ||
      process.env.GCP_PROJECT ||
      (process.env.NODE_ENV === "production" ? "stratision-production-507912" : undefined)
    );
  }

  isConfigured(): boolean {
    const projectId = this.getResolvedProjectId();
    const serviceAccount =
      process.env.FIREBASE_SERVICE_ACCOUNT_KEY ||
      process.env.GOOGLE_APPLICATION_CREDENTIALS;

    // A valid project identifier or credential source must be configured
    return Boolean(projectId || serviceAccount);
  }

  private getClient(): Firestore {
    if (this.client) {
      return this.client;
    }

    const projectId = this.getResolvedProjectId();
    const databaseId = process.env.FIRESTORE_DATABASE_ID || "(default)";
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

    const options: any = {
      databaseId,
    };

    if (projectId) {
      options.projectId = projectId;
    }

    if (serviceAccountKey) {
      try {
        options.credentials = JSON.parse(serviceAccountKey);
      } catch (err: any) {
        console.error("[Firestore] Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY JSON:", err.message);
        throw new Error("Invalid FIREBASE_SERVICE_ACCOUNT_KEY JSON format.");
      }
    }

    try {
      this.client = new Firestore(options);
      return this.client;
    } catch (err: any) {
      console.error("[Firestore] Initialization error:", err);
      throw new Error(`Failed to instantiate Firestore client: ${err.message}`);
    }
  }

  async saveEnquiry(record: AssessmentRecord): Promise<void> {
    if (!this.isConfigured()) {
      throw new Error(
        "Production persistence datastore (Google Cloud Firestore) is NOT CONFIGURED in environment. Missing project ID or credentials."
      );
    }

    const db = this.getClient();
    // Document ID matches the cryptographically unique referenceId for idempotency and fast O(1) lookup
    await db.collection(this.collectionName).doc(record.referenceId).set(record);
  }

  async getEnquiryByReference(referenceId: string): Promise<AssessmentRecord | null> {
    if (!this.isConfigured()) {
      return null;
    }

    const db = this.getClient();
    const doc = await db.collection(this.collectionName).doc(referenceId).get();
    if (!doc.exists) {
      return null;
    }

    return doc.data() as AssessmentRecord;
  }

  async saveContactEnquiry(record: ContactRecord): Promise<void> {
    if (!this.isConfigured()) {
      throw new Error(
        "Production persistence datastore (Google Cloud Firestore) is NOT CONFIGURED in environment. Missing project ID or credentials."
      );
    }

    const db = this.getClient();
    await db.collection(this.contactCollectionName).doc(record.referenceId).set(record);
  }

  async getContactEnquiryByReference(referenceId: string): Promise<ContactRecord | null> {
    if (!this.isConfigured()) {
      return null;
    }

    const db = this.getClient();
    const doc = await db.collection(this.contactCollectionName).doc(referenceId).get();
    if (!doc.exists) {
      return null;
    }

    return doc.data() as ContactRecord;
  }
}

/**
 * Isolated local development persistence provider.
 * Writes to an explicit development file and is STRICTLY FORBIDDEN in production mode.
 */
export class LocalDevFilePersistenceProvider implements PersistenceProvider {
  readonly name = "Local Development File Storage";
  readonly isProductionSafe = false;
  private readonly filePath: string;
  private readonly contactFilePath: string;

  constructor(customFilePath?: string, customContactFilePath?: string) {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    this.filePath = customFilePath || path.join(dataDir, "assessment_enquiries.dev.json");
    this.contactFilePath = customContactFilePath || path.join(dataDir, "contact_enquiries.dev.json");
  }

  isConfigured(): boolean {
    return true;
  }

  async saveEnquiry(record: AssessmentRecord): Promise<void> {
    // CRITICAL SAFETY GUARD: Prevent accidental local file persistence in production
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "CRITICAL ARCHITECTURAL VIOLATION: Local filesystem persistence is strictly forbidden in production mode. Production requires a managed persistent datastore."
      );
    }

    let records: AssessmentRecord[] = [];
    try {
      if (fs.existsSync(this.filePath)) {
        const raw = fs.readFileSync(this.filePath, "utf-8");
        records = JSON.parse(raw);
      }
    } catch (err) {
      console.error("[DevPersistence] Error reading development store:", err);
    }

    records.push(record);

    // Atomic write via temporary file
    const tempFile = `${this.filePath}.tmp.${Date.now()}.${Math.random().toString(36).slice(2, 7)}`;
    fs.writeFileSync(tempFile, JSON.stringify(records, null, 2), "utf-8");
    fs.renameSync(tempFile, this.filePath);
  }

  async getEnquiryByReference(referenceId: string): Promise<AssessmentRecord | null> {
    try {
      if (fs.existsSync(this.filePath)) {
        const raw = fs.readFileSync(this.filePath, "utf-8");
        const records: AssessmentRecord[] = JSON.parse(raw);
        return records.find((r) => r.referenceId === referenceId) || null;
      }
    } catch (err) {
      console.error("[DevPersistence] Error reading development store:", err);
    }
    return null;
  }

  async saveContactEnquiry(record: ContactRecord): Promise<void> {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "CRITICAL ARCHITECTURAL VIOLATION: Local filesystem persistence is strictly forbidden in production mode. Production requires a managed persistent datastore."
      );
    }

    let records: ContactRecord[] = [];
    try {
      if (fs.existsSync(this.contactFilePath)) {
        const raw = fs.readFileSync(this.contactFilePath, "utf-8");
        records = JSON.parse(raw);
      }
    } catch (err) {
      console.error("[DevPersistence] Error reading development contact store:", err);
    }

    records.push(record);

    const tempFile = `${this.contactFilePath}.tmp.${Date.now()}.${Math.random().toString(36).slice(2, 7)}`;
    fs.writeFileSync(tempFile, JSON.stringify(records, null, 2), "utf-8");
    fs.renameSync(tempFile, this.contactFilePath);
  }

  async getContactEnquiryByReference(referenceId: string): Promise<ContactRecord | null> {
    try {
      if (fs.existsSync(this.contactFilePath)) {
        const raw = fs.readFileSync(this.contactFilePath, "utf-8");
        const records: ContactRecord[] = JSON.parse(raw);
        return records.find((r) => r.referenceId === referenceId) || null;
      }
    } catch (err) {
      console.error("[DevPersistence] Error reading development contact store:", err);
    }
    return null;
  }
}

// Global active provider singleton
let activeProvider: PersistenceProvider | null = null;

/**
 * Resolves the appropriate persistence provider based on environment and configuration.
 * In production (NODE_ENV=production), Google Cloud Firestore is mandatory.
 */
export function getPersistenceProvider(): PersistenceProvider {
  if (activeProvider) {
    return activeProvider;
  }

  const firestoreProvider = new FirestorePersistenceProvider();
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    // In production, the managed datastore provider is always selected.
    // If credentials/project ID are absent, it will fail safely and loudly on write
    // instead of silently storing records in an ephemeral container filesystem.
    activeProvider = firestoreProvider;
    if (!firestoreProvider.isConfigured()) {
      console.warn(
        "[PERSISTENCE AUDIT] Production mode active (NODE_ENV=production), but managed Google Cloud Firestore is NOT CONFIGURED. Submissions will fail safely with HTTP 500 until FIRESTORE_PROJECT_ID is provided."
      );
    } else {
      console.log("[PERSISTENCE AUDIT] Managed Google Cloud Firestore provider active for production.");
    }
  } else {
    // In development mode:
    // If explicit service account credentials are provided, dev can connect to remote Firestore.
    // Otherwise, use isolated local development file persistence so local development and testing
    // are not blocked by the sandbox service account lacking remote GCP permissions.
    const hasExplicitCredentials = Boolean(
      process.env.FIREBASE_SERVICE_ACCOUNT_KEY || process.env.GOOGLE_APPLICATION_CREDENTIALS
    );

    if (hasExplicitCredentials && firestoreProvider.isConfigured()) {
      console.log("[PERSISTENCE AUDIT] Development mode using configured Firestore provider with credentials.");
      activeProvider = firestoreProvider;
    } else {
      console.log(
        "[PERSISTENCE AUDIT] Development mode: using isolated local dev persistence (data/assessment_enquiries.dev.json)."
      );
      activeProvider = new LocalDevFilePersistenceProvider();
    }
  }

  return activeProvider;
}

/**
 * Helper for testing failure states and mock providers.
 */
export function setPersistenceProviderForTesting(provider: PersistenceProvider | null): void {
  activeProvider = provider;
}
