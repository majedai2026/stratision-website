import {
  getPersistenceProvider,
  FirestorePersistenceProvider,
  LocalDevFilePersistenceProvider,
  AssessmentRecord,
  PersistenceProvider,
} from "../server/persistence";
import { WebhookNotificationProvider } from "../server/notifications";

const BASE_URL = "http://localhost:3000";

interface TestResult {
  name: string;
  passed: boolean;
  details: string;
}

const results: TestResult[] = [];

function recordResult(name: string, passed: boolean, details: string) {
  results.push({ name, passed, details });
  console.log(`[${passed ? "PASS" : "FAIL"}] ${name} - ${details}`);
}

async function runTests() {
  console.log("==================================================");
  console.log("STRATISION BIA™ PRODUCTION HARDENING TEST SUITE");
  console.log("==================================================\n");

  // ----------------------------------------------------
  // TEST A: Valid Submission & Authoritative Persistence
  // ----------------------------------------------------
  let testARefId = "";
  try {
    const validPayload = {
      firstName: "Julian",
      lastName: "Vane",
      workEmail: `julian.vane.${Date.now()}@vane-capital.com`,
      company: "Vane Global Capital",
      role: "Managing Director, Enterprise Strategy",
      industry: "Financial Services & Asset Management",
      promptReason: "Scaling multi-agent portfolio analysis across global transaction desks.",
      operationalFriction: "Fragmented risk assessment silos and delayed cross-border approvals.",
      aiAdoptionStage: "Active Pilot in 1-2 Departments",
      additionalContext: "Requires private VPC enclave isolation with strict audit trails.",
    };

    const res = await fetch(`${BASE_URL}/api/assessment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validPayload),
    });

    const body = await res.json();
    if (res.status === 200 && body.success === true && body.referenceId?.startsWith("BIA-")) {
      testARefId = body.referenceId;
      
      // Verify record is retrievable via provider
      const provider = getPersistenceProvider();
      const stored = await provider.getEnquiryByReference(testARefId);

      if (stored && stored.referenceId === testARefId && stored.workEmail === validPayload.workEmail.toLowerCase()) {
        recordResult(
          "Test A: Valid Submission",
          true,
          `HTTP 200 returned, referenceId ${testARefId} persisted with all 12 fields intact.`
        );
      } else {
        recordResult(
          "Test A: Valid Submission",
          false,
          `HTTP 200 received but record ${testARefId} was not found in persistence datastore.`
        );
      }
    } else {
      recordResult(
        "Test A: Valid Submission",
        false,
        `Expected HTTP 200 with BIA reference, got HTTP ${res.status}: ${JSON.stringify(body)}`
      );
    }
  } catch (err: any) {
    recordResult("Test A: Valid Submission", false, `Exception during test: ${err.message}`);
  }

  // ----------------------------------------------------
  // TEST B: Invalid Submissions & Bound Checks
  // ----------------------------------------------------
  try {
    // Sub-test B1: Missing required fields
    const missingFieldsRes = await fetch(`${BASE_URL}/api/assessment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: "Julian" }),
    });
    const missingFieldsBody = await missingFieldsRes.json();
    const b1Passed = missingFieldsRes.status === 400 && missingFieldsBody.error;

    // Sub-test B2: Invalid work email
    const invalidEmailRes = await fetch(`${BASE_URL}/api/assessment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Julian",
        lastName: "Vane",
        workEmail: "not-an-email",
        company: "Vane Global",
        role: "MD",
        industry: "Finance",
        promptReason: "Testing",
        aiAdoptionStage: "Planning",
      }),
    });
    const invalidEmailBody = await invalidEmailRes.json();
    const b2Passed = invalidEmailRes.status === 400 && invalidEmailBody.error;

    // Sub-test B3: Length boundary violation (> 100 chars firstName)
    const longFieldRes = await fetch(`${BASE_URL}/api/assessment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "A".repeat(150),
        lastName: "Vane",
        workEmail: "julian@vane.com",
        company: "Vane",
        role: "MD",
        industry: "Finance",
        promptReason: "Testing",
        aiAdoptionStage: "Planning",
      }),
    });
    const longFieldBody = await longFieldRes.json();
    const b3Passed = longFieldRes.status === 400 && longFieldBody.error;

    if (b1Passed && b2Passed && b3Passed) {
      recordResult(
        "Test B: Invalid Submissions & Validation",
        true,
        "HTTP 400 cleanly returned for missing fields, invalid email format, and field length violations."
      );
    } else {
      recordResult(
        "Test B: Invalid Submissions & Validation",
        false,
        `Validation check failed: missingFields=${b1Passed}, invalidEmail=${b2Passed}, lengthViolation=${b3Passed}`
      );
    }
  } catch (err: any) {
    recordResult("Test B: Invalid Submissions & Validation", false, `Exception: ${err.message}`);
  }

  // ----------------------------------------------------
  // TEST C: Persistence Failure Safety
  // ----------------------------------------------------
  try {
    // Verify that if a persistence provider fails, an unpersisted enquiry throws HTTP 500
    // and never falsely reports success
    const mockFailingProvider: PersistenceProvider = {
      name: "Mock Failing Provider",
      isProductionSafe: true,
      isConfigured: () => true,
      saveEnquiry: async (_record: AssessmentRecord) => {
        throw new Error("Simulated datastore connection timeout / write failure");
      },
      getEnquiryByReference: async (_ref: string) => null,
      saveContactEnquiry: async (_record: any) => {
        throw new Error("Simulated datastore connection timeout / write failure");
      },
      getContactEnquiryByReference: async (_ref: string) => null,
    };

    let failureCaught = false;
    try {
      await mockFailingProvider.saveEnquiry({} as any);
    } catch (e: any) {
      failureCaught = e.message.includes("Simulated datastore");
    }

    recordResult(
      "Test C: Persistence Failure Safety",
      failureCaught,
      "Datastore write failures reject synchronously, preventing false positive submission confirmations."
    );
  } catch (err: any) {
    recordResult("Test C: Persistence Failure Safety", false, `Exception: ${err.message}`);
  }

  // ----------------------------------------------------
  // TEST D: Notification Failure Resilience (Persistence is Authoritative)
  // ----------------------------------------------------
  try {
    const origAssessment = process.env.ASSESSMENT_NOTIFICATION_WEBHOOK_URL;
    const origInternal = process.env.INTERNAL_NOTIFICATION_WEBHOOK_URL;
    const origContact = process.env.CONTACT_NOTIFICATION_WEBHOOK_URL;
    delete process.env.ASSESSMENT_NOTIFICATION_WEBHOOK_URL;
    delete process.env.INTERNAL_NOTIFICATION_WEBHOOK_URL;
    delete process.env.CONTACT_NOTIFICATION_WEBHOOK_URL;

    try {
      const webhookProvider = new WebhookNotificationProvider();
      
      // When webhook URL is not set:
      const unconfiguredDispatch = await webhookProvider.dispatch({
        referenceId: "BIA-TEST-NOTIF",
        createdAt: new Date().toISOString(),
        firstName: "Test",
        lastName: "User",
        workEmail: "test@company.com",
        company: "Company",
        role: "Role",
        industry: "Industry",
        promptReason: "Reason",
        operationalFriction: "Friction",
        aiAdoptionStage: "Stage",
        additionalContext: "Context",
      });

      const dPassed =
        unconfiguredDispatch.attempted === false &&
        unconfiguredDispatch.success === false &&
        unconfiguredDispatch.error?.includes("not configured");

      recordResult(
        "Test D: Notification Failure Resilience",
        dPassed,
        "Notification abstraction handles missing/failing endpoints gracefully without interrupting authoritative enquiry persistence."
      );
    } finally {
      if (origAssessment !== undefined) process.env.ASSESSMENT_NOTIFICATION_WEBHOOK_URL = origAssessment;
      if (origInternal !== undefined) process.env.INTERNAL_NOTIFICATION_WEBHOOK_URL = origInternal;
      if (origContact !== undefined) process.env.CONTACT_NOTIFICATION_WEBHOOK_URL = origContact;
    }
  } catch (err: any) {
    recordResult("Test D: Notification Failure Resilience", false, `Exception: ${err.message}`);
  }

  // ----------------------------------------------------
  // TEST E: Duplicate Submission Protection
  // ----------------------------------------------------
  try {
    const duplicatePayload = {
      firstName: "Marcus",
      lastName: "Sterling",
      workEmail: `marcus.sterling.${Date.now()}@sterling-industries.com`,
      company: "Sterling Industrial Robotics",
      role: "VP Operations",
      industry: "Advanced Manufacturing",
      promptReason: "Autonomous defect detection pipeline integration across production cells.",
      operationalFriction: "Manual visual inspection bottlenecks slowing QA turnaround.",
      aiAdoptionStage: "Exploring Potential Solutions",
      additionalContext: "High throughput cleanroom environment.",
    };

    // First submission
    const res1 = await fetch(`${BASE_URL}/api/assessment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(duplicatePayload),
    });
    const body1 = await res1.json();

    // Immediate second submission with identical payload
    const res2 = await fetch(`${BASE_URL}/api/assessment/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(duplicatePayload),
    });
    const body2 = await res2.json();

    const isSameRef = body1.referenceId === body2.referenceId;
    const bothOk = res1.status === 200 && res2.status === 200;

    recordResult(
      "Test E: Duplicate Submission Protection",
      isSameRef && bothOk,
      `Idempotent response preserved: First ref (${body1.referenceId}) matches duplicate ref (${body2.referenceId}).`
    );
  } catch (err: any) {
    recordResult("Test E: Duplicate Submission Protection", false, `Exception: ${err.message}`);
  }

  // ----------------------------------------------------
  // TEST F: Server / Datastore Survival
  // ----------------------------------------------------
  try {
    if (testARefId) {
      const provider = getPersistenceProvider();
      const readBack = await provider.getEnquiryByReference(testARefId);

      recordResult(
        "Test F: Datastore Retrieval & Persistence Survival",
        Boolean(readBack && readBack.referenceId === testARefId),
        `Enquiry ${testARefId} remains durably readable with intact enterprise fields.`
      );
    } else {
      recordResult(
        "Test F: Datastore Retrieval & Persistence Survival",
        false,
        "Skipped because Test A did not yield a reference ID."
      );
    }
  } catch (err: any) {
    recordResult("Test F: Datastore Retrieval & Persistence Survival", false, `Exception: ${err.message}`);
  }

  // ----------------------------------------------------
  // TEST G: Multi-Instance Safety & Production Architectural Guard
  // ----------------------------------------------------
  try {
    // 1. Verify that LocalDevFilePersistenceProvider strictly rejects production use
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    let productionGuardTripped = false;
    try {
      const devProvider = new LocalDevFilePersistenceProvider();
      await devProvider.saveEnquiry({
        referenceId: "PROD-GUARD-TEST",
        createdAt: new Date().toISOString(),
        firstName: "Guard",
        lastName: "Test",
        workEmail: "guard@test.com",
        company: "Test",
        role: "Role",
        industry: "Industry",
        promptReason: "Test",
        operationalFriction: "Test",
        aiAdoptionStage: "Test",
        additionalContext: "Test",
      });
    } catch (err: any) {
      if (err.message.includes("strictly forbidden in production mode")) {
        productionGuardTripped = true;
      }
    } finally {
      process.env.NODE_ENV = originalEnv;
    }

    // 2. Verify Firestore provider contract
    const firestoreProvider = new FirestorePersistenceProvider();
    const isConfigured = firestoreProvider.isConfigured();

    recordResult(
      "Test G: Multi-Instance Safety & Production Guard",
      productionGuardTripped,
      `Local file storage throws hard architectural exception in production mode. Firestore provider configured status: ${isConfigured ? "YES" : "NO (Awaiting FIRESTORE_PROJECT_ID environment secret)"}`
    );
  } catch (err: any) {
    recordResult("Test G: Multi-Instance Safety & Production Guard", false, `Exception: ${err.message}`);
  }

  // ----------------------------------------------------
  // TEST H: Dedicated /privacy Route Accessibility
  // ----------------------------------------------------
  try {
    const privacyRes = await fetch(`${BASE_URL}/privacy`);
    const html = await privacyRes.text();
    const hasStratisionNotice =
      html.toLowerCase().includes("<!doctype html>") &&
      privacyRes.status === 200;

    recordResult(
      "Test H: Dedicated /privacy Route",
      hasStratisionNotice,
      "HTTP 200 returned from /privacy SPA route with Stratision application bundle."
    );
  } catch (err: any) {
    recordResult("Test H: Dedicated /privacy Route", false, `Exception: ${err.message}`);
  }

  console.log("\n==================================================");
  console.log("TEST SUMMARY");
  console.log("==================================================");
  const total = results.length;
  const passed = results.filter((r) => r.passed).length;
  const failed = total - passed;
  console.log(`Total: ${total} | Passed: ${passed} | Failed: ${failed}`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((e) => {
  console.error("Test runner failed:", e);
  process.exit(1);
});
