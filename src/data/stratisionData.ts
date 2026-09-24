import {
  BusinessProblem,
  CoreLaunchService,
  BusinessMaturityLevel,
  TransformationPhase,
  CaseStudy,
  PricingTier,
} from "../types";

export interface OfferDetail {
  id: string;
  badge: string;
  title: string;
  headline: string;
  tagline: string;
  description: string;
  metricHighlight: string;
  metricLabel: string;
  guaranteeText: string;
  deliverables: string[];
  capabilities: string[];
  timeline: string;
  category: string;
  sampleUI: {
    title: string;
    status: string;
    stats: Array<{ label: string; value: string }>;
  };
}

export interface MetricTickerItem {
  value: string;
  label: string;
}

export interface ComparisonRow {
  feature: string;
  stratision: boolean | string;
  bigConsultancy: boolean | string;
  cheapAgency: boolean | string;
  inHouseHire: boolean | string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const METRIC_TICKER: MetricTickerItem[] = [
  { value: "100%", label: "Client-Owned Code" },
  { value: "18,000+", label: "Hours Modelled" },
  { value: "$2.4M+", label: "Recoverable OPEX" },
  { value: "24/7", label: "Autonomous Operations" },
  { value: "Fast-Track", label: "Deployment Velocity" },
  { value: "50+", label: "Pipelines Engineered" },
];

export const ROTATING_HEADLINES = [
  "your team actually uses",
  "save you 40+ hours a week",
  "free you to run your business",
  "reduce your operating costs",
  "deliver measurable operational ROI",
];

export const STRATISION_OFFERS: OfferDetail[] = [
  {
    id: "offer-inbound-outbound",
    badge: "SALES & REVENUE PIPELINE",
    title: "24/7 AI Inbound & Voice Engine",
    headline: "We Will Build You a Fully Managed AI Inbound Engine Where You Capture Every High-Value Opportunity 24/7.",
    tagline: "Sub-60-second voice and chat qualification with automated calendar booking.",
    description: "Done-for-you lead qualification, calendar booking, and CRM logging across Phone, Webchat, WhatsApp, and SMS. Your reps only get on calls with pre-qualified buyers who actually show up.",
    metricHighlight: "3.4x",
    metricLabel: "Modelled Meeting Conversion Lift",
    guaranteeText: "Contractually benchmarked performance milestones agreed prior to sprint commencement.",
    timeline: "Fast-Track SOW Sprint",
    category: "Sales & Pipeline",
    deliverables: [
      "Custom conversational voice and webchat assistant",
      "Deterministic CRM sync (HubSpot, Salesforce, Zoho)",
      "Instant calendar booking & reminder SMS sequence",
      "Live call recording, transcription & intent capture",
    ],
    capabilities: [
      "Sub-60 second response time across all channels",
      "Understands complex domain FAQs and pricing constraints",
      "Warm transfer protocols to human on-call staff",
      "Automated post-call summary and deal-stage updates",
    ],
    sampleUI: {
      title: "Inbound Voice & Lead Triage",
      status: "Operational",
      stats: [
        { label: "Calls Handled", value: "1,248" },
        { label: "Booked Rate", value: "38.4%" },
        { label: "Avg Latency", value: "850ms" },
      ],
    },
  },
  {
    id: "offer-workforce-learning",
    badge: "WORKFORCE CAPABILITY & SOPS",
    title: "Workforce Intelligence Platform",
    headline: "We Build an AI System of Your Top Performers & SOPs. It Trains Your Workforce, Tests Scenarios & Cuts Onboarding by 60%.",
    tagline: "Transform static PDFs and manuals into interactive, role-based corporate coaches.",
    description: "Your training manuals, sales scripts, and operational SOPs turned into an interactive AI coach available 24/7. Tests staff retention with realistic customer scenarios and gives leadership real-time competency analytics.",
    metricHighlight: "88%",
    metricLabel: "Knowledge Retention Target",
    guaranteeText: "Targeted 60% reduction in new hire onboarding ramp time.",
    timeline: "Dedicated Rollout Sprint",
    category: "Knowledge & HR",
    deliverables: [
      "Enterprise SOP ingestion engine (PDFs, Notion, Google Docs)",
      "Interactive voice & text scenario test simulator",
      "Manager oversight dashboard with skill gap heatmaps",
      "Automated role certification & compliance testing",
    ],
    capabilities: [
      "Simulates challenging customer objections and escalations",
      "Deterministic scoring rubrics with instant constructive feedback",
      "Auto-syncs when internal SOPs or product specs change",
      "Grounded source document citations with strict threshold filters",
    ],
    sampleUI: {
      title: "Staff Competency Engine",
      status: "Active Learning",
      stats: [
        { label: "Certified Staff", value: "184" },
        { label: "Retention Score", value: "92%" },
        { label: "Ramp Time", value: "-60%" },
      ],
    },
  },
  {
    id: "offer-enterprise-workflows",
    badge: "OPERATIONAL AUTOMATION",
    title: "Autonomous Enterprise Agent Pipelines",
    headline: "We Build Custom AI Agent Pipelines Engineered to Recover Administrative Capacity and Reduce Operational Overhead.",
    tagline: "Eliminate manual data transcription, document extraction, and cross-ERP reconciliation.",
    description: "Connects your invoices, contracts, ERP (SAP, NetSuite), CRM, and billing repositories into deterministic multi-agent workflows with human-in-the-loop validation controls.",
    metricHighlight: "74%",
    metricLabel: "Reduction in Administrative Labor",
    guaranteeText: "Milestone-based delivery focused on measurable cost reduction and high-margin operational capacity creation.",
    timeline: "Custom Engineering Sprint",
    category: "Operations & Finance",
    deliverables: [
      "Multi-modal document parsing (Invoices, RFPs, POs, Bills of Lading)",
      "Bi-directional ERP/CRM sync connectors",
      "Human-in-the-loop exception review portal",
      "Tamper-evident audit logging & execution traces",
    ],
    capabilities: [
      "High-precision extraction on unstructured PDF documents",
      "Automated 3-way invoice and purchase order matching",
      "Anomaly detection and instant exception flagging",
      "Runs on client-isolated private cloud VPC infrastructure",
    ],
    sampleUI: {
      title: "ERP Document Extraction",
      status: "Processing Batch",
      stats: [
        { label: "Docs Processed", value: "14,890" },
        { label: "Accuracy", value: "99.9%" },
        { label: "Hours Saved", value: "480h/mo" },
      ],
    },
  },
];

export const STRATISION_PILLARS = [
  {
    title: "More output. Same team.",
    description: "AI takes the repetitive cognitive labor. Your people do what you hired them for — high-leverage strategy and client relationships.",
    metric: "4.8x Process Velocity",
    badge: "CAPACITY",
    icon: "layers",
  },
  {
    title: "Grow without hiring.",
    description: "24/7 autonomous systems that scale seamlessly with your revenue ambitions without linear payroll inflation.",
    metric: "Controlled Headcount Growth",
    badge: "SCALE",
    icon: "trending-up",
  },
  {
    title: "Speed to production.",
    description: "We move with elite agility. Production-ready systems engineered and deployed directly into your live infrastructure in rapid sprint cycles.",
    metric: "Rapid SOW Sprints",
    badge: "VELOCITY",
    icon: "zap",
  },
];

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    feature: "Custom AI Builds Tailored to Your Stack",
    stratision: true,
    bigConsultancy: "Generic Presentations",
    cheapAgency: "Wrapper Bots",
    inHouseHire: "Slow 6-Month Ramp",
  },
  {
    feature: "Turnkey Production Deployment",
    stratision: true,
    bigConsultancy: false,
    cheapAgency: "Unreliable",
    inHouseHire: false,
  },
  {
    feature: "Client-Owned Code & Private IP",
    stratision: true,
    bigConsultancy: false,
    cheapAgency: "Vendor Locked",
    inHouseHire: true,
  },
  {
    feature: "Performance Framework & Milestone SLAs",
    stratision: true,
    bigConsultancy: false,
    cheapAgency: false,
    inHouseHire: false,
  },
  {
    feature: "Workforce Training & Capability Building",
    stratision: true,
    bigConsultancy: "Expensive Add-on",
    cheapAgency: false,
    inHouseHire: "Limited",
  },
  {
    feature: "Enterprise-Grade Security (VPC & Zero Retention)",
    stratision: true,
    bigConsultancy: true,
    cheapAgency: false,
    inHouseHire: "Varies",
  },
  {
    feature: "Transparent, Fixed-Price Sprint Model",
    stratision: true,
    bigConsultancy: "$250k+ Retainers",
    cheapAgency: "Hidden hourly costs",
    inHouseHire: "$180k+ Salary + Equity",
  },
  {
    feature: "Post-Launch Monitoring & Evolution",
    stratision: true,
    bigConsultancy: "Billed extra",
    cheapAgency: false,
    inHouseHire: true,
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does working with Stratision actually start?",
    answer: "We begin with a focused Strategic Diagnostic or rapid Pilot Sprint. In Phase 01, we audit your existing workflows, identify the 2-3 highest-ROI bottlenecks, and deliver an auditable architecture blueprint. Next, we build and deploy verified production code directly in your staging and live environments.",
  },
  {
    id: "faq-2",
    question: "How quickly can we expect to see tangible results?",
    answer: "Our phased deployment methodology gets production systems live with rapid velocity. You will start capturing after-hours leads or automating document reconciliations from day one of deployment.",
  },
  {
    id: "faq-3",
    question: "What is your performance framework policy?",
    answer: "We establish quantifiable baseline metrics prior to writing code (such as hours/month saved, inbound lead response speed, or measured operational cost reductions). Engagements proceed on defined milestones tied directly to SOW delivery.",
  },
  {
    id: "faq-4",
    question: "Who owns the code, data, and intellectual property?",
    answer: "The client owns all code and configuration. Every prompt, custom fine-tuned model, and agent pipeline is deployed directly into your own cloud accounts (AWS, GCP, Azure, or private server) with zero vendor lock-in.",
  },
  {
    id: "faq-5",
    question: "How is this different from hiring an in-house AI engineer or generic agency?",
    answer: "An in-house hire takes 3-6 months to recruit, costs $180k-$250k+ in compensation, and rarely understands commercial business strategy. Generic agencies sell generic chatbots built with brittle third-party tools. Stratision delivers a full squad of senior AI architects, systems engineers, and workflow strategists from day one.",
  },
  {
    id: "faq-6",
    question: "How do you protect our proprietary business data?",
    answer: "We adhere to enterprise-grade data isolation. We enforce zero-data retention agreements with model providers, SOC2-compliant logging, and client-dedicated private VPC containers. Your data is never used to train public models.",
  },
];

export const BUSINESS_PROBLEMS_LIBRARY: BusinessProblem[] = [
  {
    id: "prob-sales-1",
    department: "Sales",
    title: "Inbound Lead Response Latency & After-Hours Drop-off",
    symptoms: [
      "Inbound web/form leads wait 2-24 hours for a sales rep response.",
      "Weekend and after-hours inquiries convert at < 8% due to response delay.",
      "Manual meeting scheduling friction causes 35%+ drop-off before first call.",
    ],
    rootCause: "Human availability bottleneck and manual lead distribution workflows without instant autonomous qualification.",
    solution: "24/7 AI Receptionist & Voice/Chat Inbound Engine that qualifies intent, answers FAQs, and books confirmed calendar slots in under 90 seconds.",
    roi: "Target 24/7 Lead Capture • 3.2x Modelled Lead-to-Meeting Conversion",
  },
  {
    id: "prob-sales-2",
    department: "Sales",
    title: "Account Executive Administrative Drag & Low Selling Time",
    symptoms: [
      "Sales reps spend < 30% of their week actively speaking to high-intent buyers.",
      "Manual CRM logging, proposal drafting, and follow-up emails consume 15+ hrs/week.",
      "Inconsistent pipeline updates create executive revenue blindspots.",
    ],
    rootCause: "Unconnected sales tooling requiring manual data entry and lack of automated post-call meeting synthesis.",
    solution: "AI Lead Enrichment & Meeting Synthesis Agent that automatically updates CRM stages, drafts tailored follow-ups, and flags deal risk.",
    roi: "65% Less Admin • 10+ Reclaimed Selling Hours / Rep / Week",
  },
  {
    id: "prob-cs-1",
    department: "Customer Service",
    title: "Repetitive Tier-1 Ticket Backlog & Agent Burnout",
    symptoms: [
      "Support queues overwhelmed with repetitive order status, reset, and FAQ tickets.",
      "First Response Time (FRT) exceeds 4 hours during peak operational hours.",
      "High support staff turnover due to repetitive cognitive fatigue.",
    ],
    rootCause: "Lack of autonomous self-serve layer integrated directly into backend order and customer databases.",
    solution: "Autonomous Customer Experience Agent with deterministic API access and warm human escalation protocols.",
    roi: "72% Autonomous Resolution Target • Sub-10s First Response • 94% CSAT Target",
  },
  {
    id: "prob-ops-1",
    department: "Operations",
    title: "Manual Multi-Document Data Extraction & ERP Syncing",
    symptoms: [
      "Staff manually copy-paste unstructured PDF invoices, bills of lading, and contracts.",
      "Human transcription error rates result in costly reconciliation delays.",
      "Inter-departmental approval handoffs take days instead of minutes.",
    ],
    rootCause: "Legacy siloed enterprise systems unable to parse unstructured documents into structured API payloads.",
    solution: "Enterprise Workflow & Document Extraction Agent pipeline with multi-modal parsing and automated ERP reconciliation.",
    roi: "74% Admin Labor Hours Modelled • High Extraction Precision",
  },
  {
    id: "prob-ld-1",
    department: "HR & L&D",
    title: "Knowledge Retention Decay & Expensive Static Training",
    symptoms: [
      "Employees forget 70% of one-off compliance or onboarding training within 14 days.",
      "Tribal knowledge leaves the company when key personnel resign.",
      "New hire time-to-productivity takes 3-6 months due to fragmented documentation.",
    ],
    rootCause: "Passive one-way training delivery without continuous AI scenario testing or spaced repetition reinforcement.",
    solution: "Workforce Intelligence Platform providing interactive role coaching, automated scenario testing, and manager oversight.",
    roi: "88% Target Knowledge Retention • 60% Faster Onboarding Velocity",
  },
  {
    id: "prob-fin-1",
    department: "Finance",
    title: "Invoice Processing Bottlenecks & Late AP/AR Cycles",
    symptoms: [
      "Delayed month-end close due to manual 3-way invoice and purchase order matching.",
      "Missed early payment discounts and occasional duplicate vendor payments.",
      "Finance leadership lacks real-time predictive cashflow forecasting.",
    ],
    rootCause: "Manual accounting verification workflows across legacy ERPs without automated anomaly detection.",
    solution: "Automated AP/AR Reconciliation Agent with deterministic line-item validation and cashflow forecast modeling.",
    roi: "80% Faster Invoice Cycles • Automated Anomaly Verification",
  },
  {
    id: "prob-lead-1",
    department: "Leadership",
    title: "Static Retrospective Reporting & Delayed Strategic Decisions",
    symptoms: [
      "Executive decisions rely on backward-looking monthly reports compiled manually in Excel.",
      "Emerging customer churn and operational bottlenecks are detected weeks too late.",
      "Shadow AI usage across employees creates unmonitored security and IP hazards.",
    ],
    rootCause: "Absence of real-time operational metrics and lack of enterprise-wide AI governance standards.",
    solution: "Executive Business Intelligence Engine with predictive alerting, unified cognitive search, and SOC2 AI governance policies.",
    roi: "Real-Time Visibility • Dedicated Private Cloud Tenancy",
  },
];

export const CORE_LAUNCH_SERVICES: CoreLaunchService[] = [
  {
    id: "service-workforce-learning",
    title: "Workforce Intelligence Platform",
    badge: "Strategic Platform",
    tagline: "Interactive corporate learning, onboarding, and continuous knowledge retention",
    description: "An enterprise AI platform that ingests your company's SOPs, manuals, and sales scripts to train employees, test knowledge retention with real-world scenarios, and provide executive visibility.",
    capabilities: [
      "Role-specific conversational AI tutoring and scenario testing",
      "Automated compliance, policy, and internal certification workflows",
      "Real-time manager dashboard tracking skill gaps and team competency",
      "Dynamic auto-sync with evolving internal documentation and SOPs",
    ],
    businessOutcome: "Transforms static PDF training into an interactive, high-retention corporate learning engine that cuts onboarding time by 60%.",
    timeline: "2-4 Weeks Deployment",
    roi: "88% Knowledge Retention • 60% Faster Onboarding",
    targetICP: "Mid-market & enterprise teams with 50-1,000+ knowledge workers",
    deliverables: [
      "Custom fine-tuned cognitive learning assistant",
      "Automated role-based evaluation & certification module",
      "Executive & Team Lead analytics dashboard",
      "Seamless integration with Notion, Slack, Google Drive, or LMS",
    ],
    priceRange: "$15,000 - $35,000 Pilot Implementation",
  },
  {
    id: "service-receptionist",
    title: "24/7 AI Receptionist & Voice Engine",
    badge: "Immediate ROI Sprint",
    tagline: "Never miss another inbound inquiry, high-value lead, or support request",
    description: "Multi-channel autonomous voice and chat engine that answers customer calls 24/7, qualifies buying intent, handles routine inquiries, and books appointments directly into your calendar.",
    capabilities: [
      "Natural voice and chat conversation across Phone, Web, WhatsApp, and SMS",
      "Deterministic CRM sync (HubSpot, Salesforce, Zoho, Google Workspace)",
      "Automated calendar booking and urgent human escalation routing",
      "Multi-lingual real-time transcription and summary logging",
    ],
    businessOutcome: "Eliminates missed opportunities outside business hours and slashes response times to under 90 seconds.",
    timeline: "Fast-Track Rollout",
    roi: "Sub-90s Response Time • Target Lead Capture",
    targetICP: "High-inbound service businesses, professional practices, and B2B sales teams",
    deliverables: [
      "Dedicated phone number & Webchat voice widget",
      "CRM & Calendar integration with automated lead scoring",
      "Custom business knowledge base & conversation guardrails",
      "Executive call recording & transcription dashboard",
    ],
    priceRange: "$4,500 - $9,500 Sprint",
  },
  {
    id: "service-workflow-automation",
    title: "Enterprise Workflow & Document Automation",
    badge: "Core Operations Engine",
    tagline: "Eliminate repetitive manual administration across your internal software stack",
    description: "Connects your CRM, ERP, billing systems, email, and document repositories into automated, self-auditing pipelines with human-in-the-loop validation controls.",
    capabilities: [
      "Multi-document unstructured data extraction (Invoices, RFPs, POs, Contracts)",
      "Automated data reconciliation across Salesforce, SAP, Jira, and SQL",
      "Exception triage and intelligent human approval notifications",
      "Tamper-proof audit logging and deterministic compliance guardrails",
    ],
    businessOutcome: "Reclaims 70%+ of administrative labor hours while boosting operational execution accuracy to 99.9%.",
    timeline: "Phased SOW Sprint",
    roi: "74% Admin Hours Saved • 4.8x Process Velocity",
    targetICP: "Operations-heavy enterprises, logistics, healthcare, and finance firms",
    deliverables: [
      "Custom multi-modal document extraction pipelines",
      "Bi-directional ERP/CRM data synchronization connectors",
      "Human-in-the-loop review interface for exceptions",
      "SOC2-compliant audit logging & monitoring",
    ],
    priceRange: "$18,500 - $45,000 Implementation",
  },
];

export const BUSINESS_MATURITY_LEVELS: BusinessMaturityLevel[] = [
  {
    level: 1,
    name: "Reactive",
    scoreRange: "1.0 - 1.9",
    minScore: 1.0,
    maxScore: 1.9,
    description: "Work is manual, inconsistent, and heavily dependent on individual staff memory. Zero automation; high risk of key-person dependency and administrative leakage.",
    characteristics: "Manual spreadsheets, delayed customer replies, static documents, zero AI adoption.",
    action: "Focus on Phase 1 quick wins: AI Receptionist and basic CRM automation.",
  },
  {
    level: 2,
    name: "Managed",
    scoreRange: "2.0 - 2.9",
    minScore: 2.0,
    maxScore: 2.9,
    description: "Basic software exists but tools operate in silos. Repetitive manual data copying consumes 30%+ of team capacity with fragmented knowledge.",
    characteristics: "Standard tools in use (Salesforce, Slack, Google) but disconnected; tribal knowledge silos.",
    action: "Standardize core workflows and deploy internal knowledge assistants.",
  },
  {
    level: 3,
    name: "Standardised",
    scoreRange: "3.0 - 3.9",
    minScore: 3.0,
    maxScore: 3.9,
    description: "Core processes are documented and repeatable with structured automation across key sales and operational pipelines.",
    characteristics: "Automated lead triage, structured SOPs, early AI adoption in sales and customer service.",
    action: "Deploy interactive workforce learning and multi-system cognitive automations.",
  },
  {
    level: 4,
    name: "Optimised",
    scoreRange: "4.0 - 4.9",
    minScore: 4.0,
    maxScore: 4.9,
    description: "Data-driven decision making, strong automation coverage (70%+), and clear operational visibility across the leadership team.",
    characteristics: "Real-time executive visibility, predictive analytics, automated document reconciliation.",
    action: "Scale agent swarms and integrate continuous self-optimizing pipelines.",
  },
  {
    level: 5,
    name: "Intelligent Enterprise",
    scoreRange: "5.0",
    minScore: 5.0,
    maxScore: 5.0,
    description: "AI is embedded into operations, decisions are predictive, and continuous optimization is deeply ingrained in the organizational culture.",
    characteristics: "Autonomous multi-agent ecosystems, private fine-tuned models, exponential operating leverage.",
    action: "Continuous innovation retainers and competitive moat expansion.",
  },
];

export const TRANSFORMATION_PHASES: TransformationPhase[] = [
  {
    phase: "01 Design",
    timeframe: "Discovery Sprint",
    title: "Diagnostic, Mapping & Architecture",
    objective: "We map your workflows, interview your team, and identify where AI creates genuine ROI versus where it's generic noise.",
    initiatives: [
      "Stakeholder Interviews & Deep Operational Audit",
      "Current-State Cost & Time Loss Analysis",
      "Pain Point & Opportunity Matrix",
      "System Architecture Blueprint & ROI Modeling",
      "Sign-off on Deliverables, Timelines & Expected Metrics",
    ],
    expectedOutcome: "A clear, auditable specification of the exact systems your business needs before a single line of code is written.",
  },
  {
    phase: "02 Deliver",
    timeframe: "Build & Deploy Sprint",
    title: "Custom Engineering & Production Deployment",
    objective: "We build the AI systems scoped in the design phase and deploy them directly into your live infrastructure.",
    initiatives: [
      "Core AI Engine & Fine-Tuned Model Configuration",
      "Native Integrations (Salesforce, SAP, Notion, Slack, CRM)",
      "Multi-Modal Document & Voice Pipelines",
      "Rigorous QA, Latency & Hallucination Stress Testing",
      "Team Handover, SOP Calibration & Staff Training",
    ],
    expectedOutcome: "Not a prototype, not a slide deck. A production system your team uses daily.",
  },
  {
    phase: "03 Evolve",
    timeframe: "Continuous Evolution",
    title: "Ongoing Optimization & Capability Expansion",
    objective: "Most AI projects fail at adoption, not build. We ensure your team actually uses the system and continuously improve it.",
    initiatives: [
      "Real-Time Health & Accuracy Telemetry Monitoring",
      "Quarterly Model Evaluation & Prompt Optimization",
      "Departmental Agent Swarm Expansion",
      "Workforce Competency Reviews & SOP Upgrades",
      "24/7 Dedicated Technical Support SLA",
    ],
    expectedOutcome: "Compounding operational velocity, zero technical obsolescence, and continuous competitive moat expansion.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "logistics-enterprise",
    clientIndustry: "Supply Chain & Logistics",
    companyScale: "420 Employees • $85M Annual Revenue",
    challenge: "Over 4,000 monthly bills of lading and freight invoices were manually processed by 14 coordinators in Excel, leading to payment disputes, carrier friction, and 48-hour processing delays.",
    solution: "Modelled Stratision Enterprise Document Automation pipeline integrated with SAP and carrier EDI systems with deterministic line-item validation.",
    metrics: {
      primaryGain: "78% Labor Reduction",
      primaryLabel: "Modelled 11 FTE Capacity",
      secondaryGain: "$490,000 / yr",
      secondaryLabel: "Modelled OPEX Recovery",
      paybackTime: "2.4 Months",
    },
    testimonial: {
      quote: "Stratision didn't sell us futuristic theory. They engineered an extraction pipeline architecture that targets eliminating the invoice backlog in 3 weeks.",
      author: "Marcus Vance",
      title: "VP of Global Supply Chain Operations",
    },
  },
  {
    id: "wealth-management",
    clientIndustry: "Financial & Wealth Advisory",
    companyScale: "180 Advisors • $2.4B AUM",
    challenge: "Advisors were losing 18 hours per week manually synthesizing client meeting notes, researching siloed compliance guidelines, and preparing portfolio review documentation.",
    solution: "Engineered Private Enclave AI Knowledge Assistant and automated meeting synthesis pipeline with agreed data-handling requirements and privacy guardrails.",
    metrics: {
      primaryGain: "14 hrs/wk Saved",
      primaryLabel: "Modelled per Senior Advisor",
      secondaryGain: "3.4x Faster",
      secondaryLabel: "Target Review Turnaround",
      paybackTime: "1.8 Months",
    },
    testimonial: {
      quote: "Advisors walk into client reviews armed with instant, synthesized portfolio intelligence with zero client data leakage.",
      author: "Elena Rostova",
      title: "Chief Operating Officer",
    },
  },
  {
    id: "healthcare-services",
    clientIndustry: "Healthcare Group & Clinics",
    companyScale: "35 Regional Clinics • 650 Staff",
    challenge: "Clinic reception desks were missing 38% of after-hours appointment inquiries, while medical staff turnover created constant training and SOP compliance overhead.",
    solution: "Engineered 24/7 Voice & Chat AI Receptionist alongside the Workforce Intelligence Platform for rapid clinical SOP certification.",
    metrics: {
      primaryGain: "99.4% Call Capture",
      primaryLabel: "Target Inbound Triage",
      secondaryGain: "62% Faster",
      secondaryLabel: "Modelled SOP Onboarding",
      paybackTime: "3.1 Months",
    },
    testimonial: {
      quote: "Patient booking conversion targets increased significantly while the Workforce Intelligence Platform calibrated nursing staff on new clinical protocols.",
      author: "Dr. David Chen",
      title: "Managing Director & Clinical Lead",
    },
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-discovery",
    name: "Discovery & Strategic Diagnostic",
    timeline: "Phase 01 Diagnostic",
    badge: "Strategic Starting Point",
    idealFor: "Leadership teams seeking an auditable, quantified AI roadmap before committing capital.",
    priceModel: "$4,500 - $8,500 Fixed SOW",
    description: "A comprehensive operational diagnostic across your key business functions to identify highest-ROI friction points, architecture blueprints, and financial payback models.",
    deliverables: [
      "Full Business Intelligence Assessment across key operational departments",
      "Executive AI Readiness & Maturity Scorecard",
      "Detailed financial ROI model with quantified cost-benefit calculations",
      "Custom multi-agent system architecture blueprint & risk audit",
      "Executive board presentation & 90-day implementation roadmap",
    ],
    guarantee: "Deterministic engineering deliverables and auditable ROI model with fixed scope.",
    popular: false,
  },
  {
    id: "tier-pilot",
    name: "Production AI Pilot Sprint",
    timeline: "Phase 02 Production Sprint",
    badge: "Most Popular Engagement",
    idealFor: "Companies ready to deploy an operational AI system directly into production with live ROI.",
    priceModel: "$18,500 - $35,000 Fixed Sprint",
    description: "End-to-end engineering, testing, and production deployment of 1-2 core systems (such as AI Receptionist or Enterprise Document Automation) integrated into your software stack.",
    deliverables: [
      "Production deployment of 1-2 custom AI systems or agent workflows",
      "Live bi-directional integration with your CRM, ERP, or internal databases",
      "Deterministic safety firewalls, SOC2 isolation & 0-hallucination guardrails",
      "Staff onboarding, executive reporting dashboard & operational handover",
      "30 days of post-deployment optimization & SLA monitoring",
    ],
    guarantee: "100% client-owned intellectual property and code repository.",
    popular: true,
  },
  {
    id: "tier-retainer",
    name: "Enterprise Transformation Retainer",
    timeline: "Continuous Evolution",
    badge: "Continuous Partnership",
    idealFor: "Enterprises scaling multiple AI systems across departments with continuous innovation.",
    priceModel: "$8,500 - $18,000 / month",
    description: "Dedicated Principal AI Architects and systems engineers who continuously optimize your systems, deploy new departmental agents, and maintain your Workforce Intelligence Platform.",
    deliverables: [
      "Continuous system optimization, model evaluation, and prompt fine-tuning",
      "Deployment of 1 new departmental agent system per quarter",
      "Ongoing Workforce Intelligence Platform content curation & SOP updates",
      "Quarterly executive strategy & ROI reviews with leadership",
      "Priority 24/7 technical SLA & dedicated engineering squad",
    ],
    guarantee: "Monthly retainer model with defined quarterly deliverables and SLA framework.",
    popular: false,
  },
];
