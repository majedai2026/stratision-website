export interface SolutionDomain {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  businessOutcome: string;
  flagshipSystemName: string;
  flagshipSystemSlug: string;
  capabilities: string[];
  workflowSequence: string[];
  industries: string[];
  primaryArtefact: {
    label: string;
    title: string;
    description: string;
    meta: string;
    steps: Array<{ step: string; detail: string; status?: string }>;
  };
}

export interface FlagshipSystem {
  id: string;
  slug: string;
  number: string;
  name: string;
  commercialName: string;
  tagline: string;
  summary: string;
  solutionDomainSlug: string;
  solutionDomainName: string;
  workflowSequence: string[];
  coreVisual: {
    badge: string;
    headline: string;
    summary: string;
    meta: string;
    nodes: Array<{ title: string; desc: string }>;
  };
  keyCapabilities: string[];
  governanceNote: string;
}

export const SOLUTION_DOMAINS: SolutionDomain[] = [
  {
    id: "revenue-sales",
    slug: "revenue-sales",
    number: "01",
    title: "Revenue & Sales",
    tagline: "Capture. Qualify. Follow up.",
    shortDescription: "Turn inbound demand into qualified opportunities and keep the sales process moving.",
    longDescription: "Capture high-intent interest instantly, qualify buyers against operational criteria, and coordinate sales follow-up without manual pipeline latency.",
    businessOutcome: "Capture → Qualify → Follow up → Sales Handover",
    flagshipSystemName: "Speed-to-Lead Agent™",
    flagshipSystemSlug: "speed-to-lead",
    capabilities: [
      "Sub-60s multi-channel capture across phone, web & messaging",
      "Operational buyer qualification against predefined criteria",
      "Direct diary availability matching & calendar reservations",
      "Enriched CRM dossiers with full interaction provenance"
    ],
    workflowSequence: ["INBOUND ENQUIRY", "UNDERSTAND", "QUALIFY", "FOLLOW UP", "SALES HANDOVER"],
    industries: ["Real Estate", "Professional Services", "Financial Services", "Private Healthcare & Clinics"],
    primaryArtefact: {
      label: "INBOUND OPPORTUNITY DOSSIER",
      title: "Commercial Lead Qualification Stream",
      description: "Inbound buyer request parsed, validated against budget thresholds, and instantly paired with senior broker availability.",
      meta: "Captured in 18s · Priority Score 96/100 · CRM Dispatched",
      steps: [
        { step: "01 Inbound Channel", detail: "Web enquiry received from Mayfair commercial investor", status: "Verified" },
        { step: "02 Qualification", detail: "Confirmed capital deployment window (<30 days, £1.8M budget)", status: "Pass" },
        { step: "03 Calendar Match", detail: "Matched Managing Partner Thursday 14:00 GMT consultation slot", status: "Reserved" },
        { step: "04 CRM Sync", detail: "Opportunity record created in CRM with conversation audit trail", status: "Complete" }
      ]
    }
  },
  {
    id: "marketing-growth",
    slug: "marketing-growth",
    number: "02",
    title: "Marketing & Growth",
    tagline: "Research. Create. Execute.",
    shortDescription: "Turn market intelligence into structured campaigns, content and action.",
    longDescription: "Transform commercial intelligence, competitor movements, and brand positioning into structured multi-channel campaigns with human sign-off.",
    businessOutcome: "Research → Insight → Plan → Creative → Review",
    flagshipSystemName: "AI Marketing System™",
    flagshipSystemSlug: "ai-marketing",
    capabilities: [
      "Real-time competitor & market signal intelligence",
      "Audience positioning & commercial thesis synthesis",
      "Multi-channel campaign asset production",
      "Mandatory editorial review & human brand sign-off"
    ],
    workflowSequence: ["CAMPAIGN BRIEF", "RESEARCH", "INSIGHT", "CREATIVE", "REVIEW & LAUNCH"],
    industries: ["Professional Services", "Financial Services", "Real Estate", "Specialist Consumer"],
    primaryArtefact: {
      label: "CAMPAIGN PRODUCTION SPECIFICATION",
      title: "Enterprise Strategy Launch Directive",
      description: "Synthesises 40+ competitor movements into verified market angles, copy briefs, and attributed distribution assets.",
      meta: "14 Verified Sources · 100% Brand Governed",
      steps: [
        { step: "01 Market Synthesis", detail: "Indexed regulatory filings & competitor announcements", status: "Synthesized" },
        { step: "02 Angle Selection", detail: "Formulated 3 high-contrast market differentiation theses", status: "Approved" },
        { step: "03 Asset Generation", detail: "Compiled executive briefing note, email sequence & presentation deck", status: "Generated" },
        { step: "04 Partner Sign-Off", detail: "Senior marketing director approved final distribution pack", status: "Signed" }
      ]
    }
  },
  {
    id: "operations-automation",
    slug: "operations-automation",
    number: "03",
    title: "Operations & Automation",
    tagline: "Automate the work between people.",
    shortDescription: "Connect repetitive workflows, documents, approvals and operational processes.",
    longDescription: "Bridge disconnected systems, ingest unstructured documents, and eliminate repetitive administrative handoffs with human-in-the-loop validation.",
    businessOutcome: "Request → Check → Approve → Execute → Record",
    flagshipSystemName: "Enterprise Agent Pipelines",
    flagshipSystemSlug: "speed-to-lead",
    capabilities: [
      "Multi-format document parsing (Invoices, RFPs, Contracts, Bills of Lading)",
      "Automated cross-system reconciliation & data verification",
      "Deterministic exception flagging for human review",
      "Tamper-evident operational audit logs"
    ],
    workflowSequence: ["REQUEST", "CHECK", "APPROVE", "EXECUTE", "RECORD"],
    industries: ["Logistics & Supply Chain", "Insurance", "Construction & Infrastructure", "Financial Services"],
    primaryArtefact: {
      label: "MULTI-PARTY RECONCILIATION AUDIT",
      title: "Automated Operational Document Pipeline",
      description: "Line-item matching between supplier invoice, bill of lading, and internal enterprise resource planning records.",
      meta: "Zero Manual Keying · Sub-Second Reconciliation",
      steps: [
        { step: "01 Ingestion", detail: "Unstructured 14-page supplier contract and freight schedule parsed", status: "Extracted" },
        { step: "02 Verification", detail: "3-way line-item cross-check against active purchase order #PO-8821", status: "Matched" },
        { step: "03 Exception Check", detail: "£14.20 freight discrepancy flagged for human procurement sign-off", status: "Flagged" },
        { step: "04 Settlement", detail: "Approved items automatically scheduled in treasury portal", status: "Queued" }
      ]
    }
  },
  {
    id: "staff-training",
    slug: "staff-training",
    number: "04",
    title: "Staff Training",
    tagline: "Train your team with the knowledge they need.",
    shortDescription: "Turn your business knowledge, SOPs and processes into practical staff training.",
    longDescription: "Convert company documentation, procedural manuals, and top-performer wisdom into interactive training, realistic customer practice, and verified retention.",
    businessOutcome: "Knowledge → Training → Scenario → Assessment → Reinforcement",
    flagshipSystemName: "Workforce Intelligence Platform™",
    flagshipSystemSlug: "workforce-intelligence",
    capabilities: [
      "Internal documentation & SOP ingestion into interactive modules",
      "Role-based conversational scenario practice with constructive feedback",
      "Objective assessment rubrics and competency gap tracking",
      "Faster onboarding velocity without senior executive interruption"
    ],
    workflowSequence: ["KNOWLEDGE", "TRAINING", "SCENARIO", "ASSESSMENT", "REINFORCEMENT"],
    industries: ["Healthcare & Private Clinics", "Real Estate", "Professional Services", "Customer Operations"],
    primaryArtefact: {
      label: "ROLE SIMULATION & TRAINING ENGINE",
      title: "Interactive Employee Scenario Practice",
      description: "New team members practice complex client situations in real time, guided by company operating procedures.",
      meta: "Zero Senior Staff Interruption · Continuous Readiness",
      steps: [
        { step: "01 SOP Ingestion", detail: "Company refund policy & client escalation standard operating procedures", status: "Active" },
        { step: "02 Realistic Scenario", detail: "Client requests immediate cancellation outside standard contractual terms", status: "Simulated" },
        { step: "03 Guided Response", detail: "Employee guided through retention protocol and compliant escalation steps", status: "Practiced" },
        { step: "04 Competency Check", detail: "Objective assessment scored at 96% with manager dashboard updated", status: "Certified" }
      ]
    }
  },
  {
    id: "customer-operations",
    slug: "customer-operations",
    number: "05",
    title: "Customer Operations",
    tagline: "Handle the first interaction intelligently.",
    shortDescription: "Automate customer conversations, enquiries, routing and follow-up while keeping people in control.",
    longDescription: "Provide an intelligent front door that greets clients, resolves frequent administrative questions, coordinates diaries, and escalates complex requests to staff.",
    businessOutcome: "Conversation → Understand → Route → Action",
    flagshipSystemName: "AI Receptionist™",
    flagshipSystemSlug: "ai-receptionist",
    capabilities: [
      "24/7 multi-channel front door for calls, web, and messaging",
      "Administrative intake, registration, and diary coordination",
      "Intelligent triage and priority dispatch to duty team members",
      "Strict governance protocols keeping humans in control of key decisions"
    ],
    workflowSequence: ["CONVERSATION", "UNDERSTAND", "ROUTE", "ACTION", "STAFF NOTIFICATION"],
    industries: ["Healthcare & Private Clinics", "Specialist Practices", "Real Estate", "Professional Services"],
    primaryArtefact: {
      label: "INTELLIGENT FRONT DOOR & INTAKE",
      title: "Administrative Coordination Desk",
      description: "Intelligent front-of-house coordination handling patient and client enquiries, registration, and diary availability around the clock.",
      meta: "100% Administrative Coordination · Zero Medical Advice",
      steps: [
        { step: "01 Incoming Contact", detail: "Patient requests private specialist consultation for Thursday afternoon", status: "Received" },
        { step: "02 Intent Matching", detail: "Identified consultation category and matched clinic diary availability", status: "Matched" },
        { step: "03 Registration Intake", detail: "Pre-appointment medical history pack dispatched for digital completion", status: "Dispatched" },
        { step: "04 Staff Handover", detail: "Clinic receptionist briefed with provisional diary hold awaiting final sign-off", status: "Briefed" }
      ]
    }
  },
  {
    id: "decision-intelligence",
    slug: "decision-intelligence",
    number: "06",
    title: "Decision Intelligence",
    tagline: "Turn business information into better decisions.",
    shortDescription: "Bring signals, information and reporting together so decision-makers can act with greater clarity.",
    longDescription: "Synthesize operational signals, financial performance, and disparate reporting into structured executive briefings with verified data lineage.",
    businessOutcome: "Business Signals → Analysis → Executive Brief → Decision",
    flagshipSystemName: "Executive Decision Support",
    flagshipSystemSlug: "decision-intelligence",
    capabilities: [
      "Cross-departmental operational reporting & signal synthesis",
      "Proactive anomaly and margin variance detection",
      "Executive decision memorandums with exact source provenance",
      "Deterministic human approval checkpoints before operational commitment"
    ],
    workflowSequence: ["BUSINESS SIGNALS", "ANALYSIS", "EXECUTIVE BRIEF", "DECISION", "ACTION AUDIT"],
    industries: ["Financial Services", "Insurance", "Logistics & Supply Chain", "Executive Leadership"],
    primaryArtefact: {
      label: "EXECUTIVE BRIEFING DOSSIER",
      title: "Capital Allocation & Variance Memorandum",
      description: "Unifies disparate ERP, billing, and departmental pipeline reports into a single executive memorandum with page-level citations.",
      meta: "Zero Third-Party Model Training · Audit-Ready Provenance",
      steps: [
        { step: "01 Signal Synthesis", detail: "Parsed quarterly revenue variances across 6 regional divisions", status: "Synthesized" },
        { step: "02 Margin Drift Check", detail: "Identified £180k operating cost divergence in European freight ops", status: "Isolated" },
        { step: "03 Executive Note", detail: "Synthesised root cause with page citations to underlying supplier agreements", status: "Compiled" },
        { step: "04 Board Review", detail: "Delivered to CFO briefing portal for informed decision committee review", status: "Delivered" }
      ]
    }
  }
];

export const FLAGSHIP_SYSTEMS: FlagshipSystem[] = [
  {
    id: "speed-to-lead",
    slug: "speed-to-lead",
    number: "01",
    name: "Speed-to-Lead",
    commercialName: "Sales & Lead Response",
    tagline: "Respond to new leads, ask the right questions, capture the details and help book the next conversation.",
    summary: "When someone contacts your business, the system responds quickly, understands what they need, collects the important information and passes the opportunity to your team.",
    solutionDomainSlug: "revenue-sales",
    solutionDomainName: "Sales & Lead Response",
    workflowSequence: ["NEW ENQUIRY", "FAST RESPONSE", "QUESTIONS ASKED", "NEXT STEP BOOKED"],
    coreVisual: {
      badge: "SYSTEM 01 // SALES & LEAD RESPONSE",
      headline: "Sarah Mitchell · Mayfair Freehold",
      summary: "“Looking for a 3-bed freehold residence around £1.5M with an immediate completion window.”",
      meta: "Captured in 18s · Buyer Details Verified · 100% Human Sales Control",
      nodes: [
        { title: "First Response", desc: "Instant response across website, WhatsApp, phone and messaging channels" },
        { title: "Questions Asked", desc: "Collects key requirements, purchase budget, and project timeframe" },
        { title: "Next Step Booked", desc: "Coordinates meeting availability and direct diary confirmation" },
        { title: "Team Handover", desc: "Delivers organized opportunity summary directly into your team's CRM" }
      ]
    },
    keyCapabilities: [
      "More enquiries answered with instant multi-channel response",
      "Fewer leads forgotten with automated pipeline capture",
      "Faster responses while customer purchase intent is highest",
      "Better-qualified opportunities and less manual chasing"
    ],
    governanceNote: "Pricing commitments, commercial negotiations, and final sales contracts remain exclusively under human authority."
  },
  {
    id: "ai-marketing",
    slug: "ai-marketing",
    number: "02",
    name: "AI Marketing System™",
    commercialName: "Marketing & Growth Engine",
    tagline: "From market signals to structured multi-channel campaigns.",
    summary: "Transform strategic market positioning, competitor movements, and customer demand into governed marketing campaigns with verified brand tone.",
    solutionDomainSlug: "marketing-growth",
    solutionDomainName: "Marketing & Growth",
    workflowSequence: ["STRATEGIC SIGNAL", "RESEARCH SYNTHESIS", "ASSET GENERATION", "HUMAN APPROVAL"],
    coreVisual: {
      badge: "SYSTEM 02 // AI MARKETING SYSTEM™",
      headline: "Q3 Market Positioning Campaign Directive",
      summary: "“Synthesised 40+ competitor pricing updates into 3 high-impact acquisition angles for institutional clients.”",
      meta: "14 Verified Sources · 100% Brand Governed · Partner Review Gate",
      nodes: [
        { title: "Market Research", desc: "Monitors competitor announcements, industry filings, and intent signals" },
        { title: "Strategy Formulation", desc: "Extracts high-leverage commercial angles grounded in proven positioning" },
        { title: "Asset Compilation", desc: "Generates multi-channel briefs, executive memos, and email sequences" },
        { title: "Editorial Sign-Off", desc: "Mandatory human review ensuring brand consistency and legal compliance" }
      ]
    },
    keyCapabilities: [
      "Continuous competitive and commercial trend synthesis",
      "Attributed source verification to prevent fabricated claims",
      "Multi-format creative production across executive and digital formats",
      "Rigorous editorial gatekeeping before distribution"
    ],
    governanceNote: "No campaign material is published without senior marketing director sign-off."
  },
  {
    id: "workforce-intelligence",
    slug: "workforce-intelligence",
    number: "03",
    name: "Workforce Intelligence Platform™",
    commercialName: "Staff Training & Onboarding",
    tagline: "Your knowledge → Your training → Your people.",
    summary: "Turn static operating manuals, SOPs, and expert knowledge into role-based training, realistic scenario practice, and verified competence for your team.",
    solutionDomainSlug: "staff-training",
    solutionDomainName: "Staff Training",
    workflowSequence: ["KNOWLEDGE INTAKE", "GUIDED TRAINING", "SCENARIO SIMULATION", "ASSESSMENT"],
    coreVisual: {
      badge: "SYSTEM 03 // WORKFORCE INTELLIGENCE PLATFORM™",
      headline: "Client Retention & Contract Policy Simulator",
      summary: "“Scenario: Client asks to cancel agreement early. Staff member guided through retention procedures and approved escalations.”",
      meta: "Zero Executive Interruption · Objective Retention Benchmark: 96%",
      nodes: [
        { title: "SOP Ingestion", desc: "Indexes company manuals, handbooks, and standard operating procedures" },
        { title: "Scenario Practice", desc: "Simulates realistic client conversations, objections, and edge cases" },
        { title: "Instant Feedback", desc: "Provides constructive guidance grounded directly in internal policy" },
        { title: "Manager Dashboard", desc: "Displays team readiness heatmaps and certification status" }
      ]
    },
    keyCapabilities: [
      "Transforms dense corporate documentation into interactive role practice",
      "Allows new hires to practice realistic customer scenarios without risk",
      "Provides objective assessment rubrics and skill verification",
      "Eliminates senior executive interruption for repetitive onboarding queries"
    ],
    governanceNote: "All training curriculum and scoring rubrics are approved by operational leadership."
  },
  {
    id: "ai-receptionist",
    slug: "ai-receptionist",
    number: "04",
    name: "AI Receptionist™",
    commercialName: "Intelligent Customer & Patient Coordination",
    tagline: "An intelligent front door for your business or clinic.",
    summary: "Answers enquiries, coordinates calendar bookings, and routes requests to the right staff member 24/7, maintaining a courteous, highly professional presence.",
    solutionDomainSlug: "customer-operations",
    solutionDomainName: "Customer Operations",
    workflowSequence: ["INCOMING ENQUIRY", "INTENT RESOLUTION", "DIARY AVAILABILITY", "STAFF DISPATCH"],
    coreVisual: {
      badge: "SYSTEM 04 // AI RECEPTIONIST™",
      headline: "Specialist Care Intake & Consultation Desk",
      summary: "“Good morning, I'd like to book an initial specialist consultation next Thursday afternoon if possible.”",
      meta: "100% Administrative Coordination · Zero Clinical Triage",
      nodes: [
        { title: "24/7 Front Door", desc: "Answers incoming voice calls, webchat, and WhatsApp instantly" },
        { title: "Administrative Intake", desc: "Gathers preliminary visit details and registration requirements" },
        { title: "Diary Matching", desc: "Matches appointment request with practitioner consulting availability" },
        { title: "Reception Notification", desc: "Briefs practice staff with complete context for final confirmation" }
      ]
    },
    keyCapabilities: [
      "Sub-second front-door call and message handling around the clock",
      "Administrative appointment coordination and calendar booking",
      "Accurate FAQs regarding location, parking, hours, and billing",
      "Strict boundaries ensuring clinical care remains with qualified practitioners"
    ],
    governanceNote: "Handles administrative enquiries, scheduling, and intake only; all medical triage and clinical decisions remain strictly with qualified practitioners."
  }
];

export const OPERATING_SECTORS = [
  {
    name: "Healthcare & Private Clinics",
    systemUse: "AI Receptionist + Patient Coordination",
    outcome: "Administrative enquiries, appointment coordination, registration intake, and practice team notifications. Zero clinical triage.",
    slug: "healthcare"
  },
  {
    name: "Real Estate & Development",
    systemUse: "Speed-to-Lead Agent™ + Valuation Intake",
    outcome: "Instant investor & tenant enquiry qualification, viewing reservation, and managing director calendar handover.",
    slug: "real-estate"
  },
  {
    name: "Professional Services & Law",
    systemUse: "Delivery Intelligence + Advisory Memorandum",
    outcome: "Historical pitchbook and opinion indexing, first-draft synthesis with page-level citations, and partner sign-off.",
    slug: "professional-services"
  },
  {
    name: "Financial Services & Investment",
    systemUse: "Document & Decision Intelligence",
    outcome: "Confidential data room ingestion, debt facility covenant reconciliations, and investment committee briefing dossiers.",
    slug: "financial-services"
  },
  {
    name: "Insurance & Underwriting",
    systemUse: "Submission Triage & Policy Ruleset",
    outcome: "Multi-tab policy submission parsing, risk appetite compliance check, and rated indication briefing.",
    slug: "insurance"
  },
  {
    name: "Logistics & Supply Chain",
    systemUse: "Operational Agent Pipelines",
    outcome: "Cross-border document parsing, bills of lading reconciliation, and deterministic exception dispatch.",
    slug: "logistics"
  }
];

export function getSolutionBySlug(slug: string): SolutionDomain | undefined {
  return SOLUTION_DOMAINS.find((s) => s.slug === slug);
}

export function getFlagshipSystemBySlug(slug: string): FlagshipSystem | undefined {
  return FLAGSHIP_SYSTEMS.find((f) => f.slug === slug);
}
