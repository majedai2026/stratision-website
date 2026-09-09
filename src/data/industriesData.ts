import {
  TrendingUp,
  Shield,
  Truck,
  Briefcase,
  Building2,
  HardHat,
  FileCheck,
  Cpu,
  Layers,
  Search,
  CheckCircle2,
  Workflow,
  Users,
  Database,
  Lock,
  ArrowRight,
  Sparkles,
  BarChart3,
  Scale,
  Clock,
  Compass,
  FileText
} from "lucide-react";

export interface IndustryLeveragePoint {
  title: string;
  problem: string;
  whatAiDoes: string;
  leverageOutcome: string;
}

export interface CapabilityMapping {
  familyNumber: string;
  familyName: string;
  systemTitle: string;
  description: string;
}

export interface ModelledStep {
  stepNumber: string;
  stageName: string;
  label: string;
  description: string;
}

export interface ModelledScenario {
  title: string;
  categoryBadge: string;
  inputDescription: string;
  inputsList: string[];
  steps: {
    understand: ModelledStep;
    orchestrate: ModelledStep;
    verify: ModelledStep;
    action: ModelledStep;
  };
  outputSummary: string;
  businessOutcome: string;
  governanceNote: string;
}

export interface GovernancePillar {
  title: string;
  description: string;
}

export interface IndustryData {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortName: string;
  headline: string;
  heroSummary: string;
  metaTitle: string;
  metaDescription: string;
  strategicTags: string[];
  overviewContext: string;
  operatingRealities: {
    title: string;
    description: string;
  }[];
  leveragePoints: IndustryLeveragePoint[];
  capabilityMappings: CapabilityMapping[];
  modelledScenario: ModelledScenario;
  governanceConsiderations: GovernancePillar[];
}

export const INDUSTRIES_LIST: IndustryData[] = [
  {
    id: "financial-services",
    slug: "financial-services-investment",
    number: "01",
    name: "Financial Services & Investment",
    shortName: "Financial Services",
    headline: "Bespoke AI systems for deal reviews, financial analysis, and portfolio operations.",
    heroSummary:
      "Investment and finance teams spend countless hours reviewing 300+ page deal documents, checking financial spreadsheets, and tracking loan terms before transaction deadlines. Stratision builds private systems that accelerate deal evaluation and portfolio reporting while keeping your information strictly confidential.",
    metaTitle: "AI in Financial Services & Investment Management | Stratision",
    metaDescription:
      "Bespoke AI systems for private equity, asset management, and investment diligence. Verified page citations, financial checks, and private deployment options.",
    strategicTags: [
      "Private Deal Room Security",
      "Financial Information Checks",
      "Exact Page Citations",
      "Investment Committee Briefings"
    ],
    overviewContext:
      "In private equity, venture capital, and asset management, deal speed and analytical accuracy directly govern commercial success. Yet investment teams spend significant senior capacity manually cross-referencing pitch decks against audited financials, checking debt covenants, and compiling quarterly portfolio reports.",
    operatingRealities: [
      {
        title: "Dense, Multi-Hundred Page Deal Documents",
        description:
          "Information memoranda, earnings reports, and loan agreements arrive under tight deadlines, requiring thorough verification under intense time pressure."
      },
      {
        title: "Information Spread Across Separate Records",
        description:
          "Management figures frequently conflict with underlying ledgers, trial balances, or tax filings, demanding hours of tedious manual cross-referencing."
      },
      {
        title: "Risk of Overlooking Key Contract Terms",
        description:
          "Overlooked change-of-control clauses, restrictive loan covenants, or post-closing commitments can directly impact transaction economics."
      },
      {
        title: "Repetitive Quarterly Portfolio Reporting",
        description:
          "Portfolio monitoring teams spend weeks every quarter extracting financial numbers from diverse portfolio company spreadsheets and PDF decks."
      }
    ],
    leveragePoints: [
      {
        title: "Investment Diligence & Deal Analysis",
        problem:
          "Investment associates spend significant time per deal reviewing multi-hundred page documents, re-keying historical numbers, and searching for contract terms.",
        whatAiDoes:
          "Reviews key deal terms, checks financial information against audited accounts, and highlights anomalies for team review.",
        leverageOutcome:
          "Helps teams review initial deal materials more efficiently, delivering clear briefings where every extracted metric links directly to its source page."
      },
      {
        title: "Portfolio Company Reporting",
        problem:
          "Portfolio companies submit quarterly financials in completely different formats, requiring manual reformatting before updates can be drafted.",
        whatAiDoes:
          "Reads diverse financial packages, standardizes accounting lines to your format, and flags unexpected margin or working capital variances.",
        leverageOutcome:
          "Provides immediate visibility into portfolio health without manual data entry overhead."
      },
      {
        title: "Loan & Agreement Monitoring",
        problem:
          "Complex loan agreements contain intricate financial terms and ratios that are difficult to track across multiple active facilities.",
        whatAiDoes:
          "Monitors compliance obligations, parses compliance certificates, and highlights prospective covenant issues based on recent financial updates.",
        leverageOutcome:
          "Helps teams manage compliance obligations and provides proactive alerts before deadlines."
      },
      {
        title: "Investor Reporting & Questions",
        problem:
          "Investor relations teams field repeated, highly specific ad-hoc questions from Limited Partners requiring searches across multiple fund vintages.",
        whatAiDoes:
          "Gives IR teams fast, secure search across fund agreements, historical quarterly letters, and approved performance statistics.",
        leverageOutcome:
          "Supports rapid, consistent responses to institutional investors backed by approved historical disclosures."
      }
    ],
    capabilityMappings: [
      {
        familyNumber: "01",
        familyName: "Workforce Intelligence",
        systemTitle: "Research & Company Knowledge",
        description:
          "Gives investment professionals prompt access to historical investment memos, sector research archives, and approved valuation guidance."
      },
      {
        familyNumber: "02",
        familyName: "Operations & Workflows",
        systemTitle: "Automated Diligence Review",
        description:
          "Reviews deal-room packages, categorizes confidential files, checks key commercial terms, and verifies balance sheet consistency."
      },
      {
        familyNumber: "03",
        familyName: "Sales & Customer Operations",
        systemTitle: "Investor Communications Core",
        description:
          "Drafts standardized quarterly investor reports and supports IR teams with verified answers from historical fund records."
      },
      {
        familyNumber: "04",
        familyName: "Knowledge & Decision Support",
        systemTitle: "Investment Committee Briefing",
        description:
          "Prepares structured investment briefings linking every finding and financial comparison directly back to verified source pages."
      }
    ],
    modelledScenario: {
      title: "Investment Diligence & Financial Verification",
      categoryBadge: "HOW THE SYSTEM OPERATES",
      inputDescription:
        "Information memoranda, earnings reports, audited balance sheets, and loan agreements.",
      inputsList: [
        "Confidential Information Memorandum (PDF)",
        "Historical 3-Year Audited Balance Sheets",
        "Senior Credit Facility & Loan Agreements",
        "Customer Concentration & Revenue Ledger"
      ],
      steps: {
        understand: {
          stepNumber: "01",
          stageName: "READ & ORGANISE",
          label: "Document Reading & Clause Extraction",
          description:
            "Securely reads through multi-hundred-page deal materials, organizing financial tables, key covenants, and revenue metrics."
        },
        orchestrate: {
          stepNumber: "02",
          stageName: "CONNECT THE STEPS",
          label: "Cross-Checking & Variance Review",
          description:
            "Cross-references reported management figures against audited accounts and compares terms against your investment criteria."
        },
        verify: {
          stepNumber: "03",
          stageName: "CHECK THE RESULT",
          label: "Source Reference & Discrepancy Flag",
          description:
            "Validates every extracted metric and flags any variance between management presentations and tax filings for team review."
        },
        action: {
          stepNumber: "04",
          stageName: "COMPLETE THE TASK",
          label: "Investment Briefing & Deal Summary",
          description:
            "Prepares a structured investment briefing where every figure and key finding links directly to its source document and page."
        }
      },
      outputSummary:
        "Investment Committee briefing with source references and important issues highlighted.",
      businessOutcome:
        "Helps teams review large volumes of information more efficiently, giving investment committees clear evidence for decision-making.",
      governanceNote:
        "Data handling and model use are governed according to the terms of your engagement. Deployment is designed around your organisation's security requirements."
    },
    governanceConsiderations: [
      {
        title: "Private by Design",
        description:
          "Designed around your organisation's security and data requirements to ensure sensitive transaction materials remain protected."
      },
      {
        title: "Clear Record of Sources",
        description:
          "Important findings, calculated ratios, and contract excerpts can be traced directly back to their original document and page."
      },
      {
        title: "Controlled Access",
        description:
          "Information can be made available according to defined roles, deal assignments, and clearance permissions."
      },
      {
        title: "Human Approval",
        description:
          "Important decisions remain subject to human review. AI prepares structured analysis while investment leaders remain responsible for important decisions."
      },
      {
        title: "Clear Records",
        description:
          "Important system activity, rule checks, and document reviews are recorded for auditability and accountability."
      }
    ]
  },
  {
    id: "insurance",
    slug: "insurance",
    number: "02",
    name: "Insurance & Underwriting",
    shortName: "Insurance",
    headline: "AI-assisted underwriting, claims processing, and policy review workflows.",
    heroSummary:
      "Commercial insurers and underwriting agencies process massive volumes of broker submissions, inspection surveys, and claims evidence daily. Stratision builds intelligent review workflows that check packages against underwriting rules, identify missing information, and prepare complete files for underwriter decision.",
    metaTitle: "AI in Insurance & Commercial Underwriting | Stratision",
    metaDescription:
      "Automated commercial underwriting triage, claims document intelligence, and policy review systems engineered around your company's risk guidelines.",
    strategicTags: [
      "Rule-Governed Underwriting Guidelines",
      "Broker Submission Triage",
      "Claims Document Intelligence",
      "Audit-Ready Records"
    ],
    overviewContext:
      "Underwriting profitability depends on balancing rapid quote turnaround with strict risk discipline. In commercial lines, underwriters spend significant time reviewing broker emails, parsing building surveys, and searching for missing hazard disclosures before risk assessment can begin.",
    operatingRealities: [
      {
        title: "Unstructured Broker Submission Bundles",
        description:
          "Brokers submit applications with varying formats, missing loss runs, unstandardized property surveys, and fragmented email attachments.",
      },
      {
        title: "Tight Quote Turnaround Windows",
        description:
          "Brokers award business to the fastest accurate quotes. Delays in underwriting review lead directly to lost premium opportunities.",
      },
      {
        title: "Complex Underlying Underwriting Rules",
        description:
          "Evaluating flood zones, construction classes, and prior claims history requires tedious cross-checks against company appetite guides.",
      },
      {
        title: "Claims Document Processing Overload",
        description:
          "Claims adjusters handle high volumes of police reports, medical bills, and repair estimates, creating administrative bottlenecks during peak events.",
      },
    ],
    leveragePoints: [
      {
        title: "Commercial Submission Triage & Completeness Check",
        problem:
          "Underwriters spend substantial time reviewing incomplete submissions, having to email brokers back and forth for basic missing loss runs or property details.",
        whatAiDoes:
          "Reads incoming broker submissions, checks completeness against underwriting requirements, and drafts clarification requests for missing details.",
        leverageOutcome:
          "Supports faster initial triage, helping underwriters focus their time on complete, qualified submissions.",
      },
      {
        title: "Property & Casualty Risk Evaluation Support",
        problem:
          "Extracting structural parameters, square footage, occupancy hazards, and protection codes from multi-page engineer surveys is slow and error-prone.",
        whatAiDoes:
          "Reviews property surveys, extracts key risk factors, and cross-references risk characteristics against company underwriting guidelines.",
        leverageOutcome:
          "Enables underwriters to quote more qualified risks while maintaining disciplined adherence to authorized exposure limits.",
      },
      {
        title: "First Notice of Loss & Claims Intake",
        problem:
          "Claims evidence arrives in diverse formats, leading to delayed claim assignments and prolonged policyholder wait times.",
        whatAiDoes:
          "Organizes incoming incident reports, extracts policy numbers and loss details, and routes cases directly to the appropriate claims handler.",
        leverageOutcome:
          "Speeds up claims assignment, lowers administrative handling costs, and improves customer satisfaction during claim events.",
      },
      {
        title: "Policy Endorsement & Schedule Reconciliation",
        problem:
          "Mid-term policy modifications and schedule endorsements require tedious manual checks against binder terms and carrier schedules.",
        whatAiDoes:
          "Compares endorsement requests against active policy files, highlighting modifications in premium, coverage limits, or named insureds.",
        leverageOutcome:
          "Supports consistency across policy documentation and helps prevent unendorsed coverage leakage.",
      },
    ],
    capabilityMappings: [
      {
        familyNumber: "01",
        familyName: "Workforce Intelligence",
        systemTitle: "Underwriting Guidelines Knowledge Engine",
        description:
          "Provides underwriting teams with prompt, verified information on company risk appetite, jurisdictional exclusions, and pricing guidelines.",
      },
      {
        familyNumber: "02",
        familyName: "Operations & Workflows",
        systemTitle: "Broker Submission & Ingestion Pipeline",
        description:
          "Extracts data from broker emails, SOVs, and loss runs, checking submission completeness and updating core policy administration systems.",
      },
      {
        familyNumber: "03",
        familyName: "Sales & Customer Operations",
        systemTitle: "Broker Communication & Status Assistant",
        description:
          "Drafts professional clarification requests for missing paperwork and keeps brokers updated on quote progress.",
      },
      {
        familyNumber: "04",
        familyName: "Knowledge & Decision Support",
        systemTitle: "Risk Assessment & Pricing Prep Dossier",
        description:
          "Compiles risk summaries, prior loss histories, and guideline comparisons for senior underwriter sign-off.",
      },
    ],
    modelledScenario: {
      title: "Commercial Property Policy Review & Underwriting Triage",
      categoryBadge: "HOW THE SYSTEM OPERATES",
      inputDescription:
        "Broker submissions, Statement of Values (SOV), property surveys, and 5-year loss runs.",
      inputsList: [
        "Broker Submission Email & ACORD Forms",
        "Multi-Location Statement of Values (Excel)",
        "Commercial Building Inspection Survey (PDF)",
        "Historical 5-Year Loss Run Summary",
      ],
      steps: {
        understand: {
          stepNumber: "01",
          stageName: "READ & ORGANISE",
          label: "Submission Reading & Data Extraction",
          description:
            "Extracts property locations, construction classes, square footage, prior claims, and requested limits from diverse file attachments.",
        },
        orchestrate: {
          stepNumber: "02",
          stageName: "CONNECT THE STEPS",
          label: "Guideline Comparison & Exposure Check",
          description:
            "Evaluates location hazard scores against company underwriting limits and verifies whether prior loss ratios fall within target appetite.",
        },
        verify: {
          stepNumber: "03",
          stageName: "CHECK THE RESULT",
          label: "Completeness & Authority Validation",
          description:
            "Flags missing loss details or high-value locations that require special reinsurance terms or senior leadership sign-off.",
        },
        action: {
          stepNumber: "04",
          stageName: "COMPLETE THE TASK",
          label: "Underwriter Review Summary & Rating Prep",
          description:
            "Prepares a formatted underwriting summary with proposed rating terms and draft clarification requests for the broker.",
        },
      },
      outputSummary:
        "Underwriter-ready risk evaluation briefing with verified exposure calculations and draft terms.",
      businessOutcome:
        "Helps teams review submissions and prepare quotes more efficiently, allowing underwriting teams to respond to commercial opportunities.",
      governanceNote:
        "Data handling and model use are governed according to the terms of your engagement. Final quote binding requires human underwriter authorization.",
    },
    governanceConsiderations: [
      {
        title: "Private by Design",
        description:
          "Designed around your organisation's security requirements, keeping policyholder and claimant records confidential.",
      },
      {
        title: "Clear Record of Sources",
        description:
          "Every extraction, guideline check, and risk factor links directly back to original survey and submission documents.",
      },
      {
        title: "Controlled Access",
        description:
          "Access to commercial lines files and claims data can be controlled according to staff roles and regional licensing.",
      },
      {
        title: "Human Approval",
        description:
          "Important underwriting decisions remain subject to human review. AI assists with reading and checks, while licensed underwriters remain responsible for underwriting decisions.",
      },
      {
        title: "Clear Records",
        description:
          "Every rule evaluation and risk assessment is recorded with clear timestamps for compliance and reinsurance review."
      }
    ]
  },
  {
    id: "logistics",
    slug: "logistics-supply-chain",
    number: "03",
    name: "Logistics & Supply Chain",
    shortName: "Logistics",
    headline: "Automated document review, customs processing, and exception management.",
    heroSummary:
      "Global freight forwarders, carriers, and 3PLs manage complex paper trails across thousands of customs declarations, shipping manifests, and vendor invoices. Stratision builds automated document workflows that cross-check paperwork against tariff rules, validate duty figures, and sync directly with operational tracking systems.",
    metaTitle: "AI in Logistics & Supply Chain Operations | Stratision",
    metaDescription:
      "Automate trade document processing, customs tariff classification, and freight invoice reconciliation with bespoke AI systems connected to your TMS and ERP.",
    strategicTags: [
      "Customs Tariff Schedule Matching",
      "Multilingual Document Reading",
      "Freight Invoice Verification",
      "Direct System Synchronization"
    ],
    overviewContext:
      "In global logistics, a single missing document or misclassified tariff code can cause costly port detention, administrative fines, and customer dissatisfaction. Operations teams spend immense time re-keying data between commercial invoices, bills of lading, and carrier portals.",
    operatingRealities: [
      {
        title: "Massive Volumes of Unstandardized Documents",
        description:
          "Commercial invoices, packing lists, and delivery receipts arrive in multiple languages, handwritten annotations, and non-standard layouts."
      },
      {
        title: "Complex Customs Tariff Classification",
        description:
          "Matching product descriptions to exact Harmonized System (HS) codes requires deep domain knowledge and is vulnerable to costly human error."
      },
      {
        title: "Discrepancies Between Quotes & Freight Invoices",
        description:
          "Carriers apply variable accessorial fees, fuel surcharges, and demurrage penalties that are rarely checked systematically before payment."
      },
      {
        title: "Slow Exception Communication",
        description:
          "When shipments are held at customs or delayed in transit, customer service teams scramble across multiple systems to find status updates."
      }
    ],
    leveragePoints: [
      {
        title: "Trade & Customs Documentation Processing",
        problem:
          "Manual customs entry preparation takes significant time per shipment, causing administrative backlogs and potential clearance delays.",
        whatAiDoes:
          "Extracts item descriptions, quantities, and values from commercial invoices, cross-referencing against verified tariff schedules and customs clearance formats.",
        leverageOutcome:
          "Helps teams process shipping documentation more efficiently, helping reduce clearance delays and supporting operations teams.",
      },
      {
        title: "Freight Invoice & Fee Audit",
        problem:
          "Carriers issue thousands of freight bills with unexpected accessorial charges, which are routinely approved due to lack of auditing capacity.",
        whatAiDoes:
          "Cross-checks carrier invoices against original rate agreements, contracted fuel surcharges, and proof-of-delivery records to highlight billing variances.",
        leverageOutcome:
          "Helps identify uncontracted carrier overcharges and supports billing accuracy across transport modes.",
      },
      {
        title: "Shipment Exception Triage & Customer Updates",
        problem:
          "Tracking exception notices across multiple ocean carriers, airlines, and rail portals requires constant manual monitoring.",
        whatAiDoes:
          "Monitors incoming carrier status emails and alerts, identifies delayed containers, and prepares proactive customer notifications with updated ETAs.",
        leverageOutcome:
          "Improves customer communication and helps reduce the volume of routine inbound status inquiries.",
      },
      {
        title: "Supplier Onboarding & Compliance Verification",
        problem:
          "Verifying carrier insurance certificates, safety ratings, and operating authorities involves manual checking across government registries.",
        whatAiDoes:
          "Extracts policy expiration dates, verifies active safety ratings, and flags expiring certificates before load assignments.",
        leverageOutcome:
          "Supports carrier compliance standards and helps manage operational liability.",
      }
    ],
    capabilityMappings: [
      {
        familyNumber: "01",
        familyName: "Workforce Intelligence",
        systemTitle: "Logistics Regulations & Operating Rules",
        description:
          "Provides operations teams with prompt guidance on hazardous materials regulations, country-specific customs requirements, and approved carrier procedures.",
      },
      {
        familyNumber: "02",
        familyName: "Operations & Workflows",
        systemTitle: "Customs & Trade Document Pipeline",
        description:
          "Reads, organizes, and checks commercial invoices, bills of lading, and packing lists with direct sync to TMS and accounting.",
      },
      {
        familyNumber: "03",
        familyName: "Sales & Customer Operations",
        systemTitle: "Shipment Tracking & Customer Alerts",
        description:
          "Monitors shipment milestones, drafts proactive delay notifications, and provides prompt answers to customer tracking requests.",
      },
      {
        familyNumber: "04",
        familyName: "Knowledge & Decision Support",
        systemTitle: "Freight Audit & Carrier Performance Tracking",
        description:
          "Consolidates freight spend data, audits billing accuracy, and evaluates carrier on-time performance across trade lanes.",
      }
    ],
    modelledScenario: {
      title: "Trade & Shipping Document Processing & Customs Clearance",
      categoryBadge: "HOW THE SYSTEM OPERATES",
      inputDescription:
        "Commercial invoices, bills of lading, packing lists, and customs tariff schedules.",
      inputsList: [
        "Multilingual Commercial Invoice (PDF)",
        "Ocean Bill of Lading (B/L)",
        "Packing List & Weight Certificate",
        "Official Harmonized Tariff Schedule (HTS)"
      ],
      steps: {
        understand: {
          stepNumber: "01",
          stageName: "READ & ORGANISE",
          label: "Document Reading & Data Extraction",
          description:
            "Reads shipping paperwork across diverse languages and formats, organizing item descriptions, declared values, weights, and consignee details."
        },
        orchestrate: {
          stepNumber: "02",
          stageName: "CONNECT THE STEPS",
          label: "Tariff Matching & Value Checking",
          description:
            "Matches item descriptions to authorized Harmonized Tariff codes and validates invoice totals against purchase orders and bills of lading."
        },
        verify: {
          stepNumber: "03",
          stageName: "CHECK THE RESULT",
          label: "Duty Calculation & Discrepancy Check",
          description:
            "Checks calculated duty rates against applicable trade agreements and flags tariff discrepancies or missing origin certificates for team review."
        },
        action: {
          stepNumber: "04",
          stageName: "COMPLETE THE TASK",
          label: "Customs Submission & System Sync",
          description:
            "Prepares the validated clearance package for customs filing systems and updates tracking milestones in company operations software."
        }
      },
      outputSummary:
        "Verified customs clearance package with source references and itemized tariff calculations.",
      businessOutcome:
        "Reduces manual data re-keying with structured verification, helping avoid clearance delays and supporting operational throughput.",
      governanceNote:
        "Data handling and model use are governed according to the terms of your engagement. Tariff decisions remain subject to specialist review."
    },
    governanceConsiderations: [
      {
        title: "Private by Design",
        description:
          "Designed around your organisation's security requirements, ensuring trade and customer data remain protected."
      },
      {
        title: "Clear Record of Sources",
        description:
          "Every tariff classification, duty calculation, and extracted line item links directly back to original commercial invoices and manifests."
      },
      {
        title: "Controlled Access",
        description:
          "Information can be made available according to defined roles, trade lanes, and operational permissions."
      },
      {
        title: "Human Approval",
        description:
          "Important clearance decisions and tariff classifications remain subject to human review by licensed customs specialists."
      },
      {
        title: "Clear Records",
        description:
          "All trade filings, document extractions, and verification checks are recorded for compliance and audit review."
      }
    ]
  },
  {
    id: "professional-services",
    slug: "professional-services",
    number: "04",
    name: "Professional Services & Advisory",
    shortName: "Professional Services",
    headline: "Knowledge systems, proposal intelligence, and engagement delivery workflows.",
    heroSummary:
      "Management consultancies, accounting firms, and legal advisory practices generate vast intellectual capital that remains buried across past deliverables, email threads, and fragmented intranet drives. Stratision builds private knowledge and workflow systems that give partners and teams immediate access to firm methodology, accelerate proposal drafting, and streamline client delivery.",
    metaTitle: "AI for Professional Services, Consulting & Advisory Firms | Stratision",
    metaDescription:
      "Bespoke institutional knowledge systems, RFP proposal intelligence, and engagement delivery workflows engineered for advisory practices.",
    strategicTags: [
      "Client Confidentiality & Privacy Walls",
      "RFP & Proposal Drafting",
      "Firm Knowledge Archive",
      "Quality & Methodology Checks"
    ],
    overviewContext:
      "In professional services, billing rates depend on specialized expertise, but profitability is often eroded by junior teams 'reinventing the wheel' on every client proposal, pitch deck, and analysis. Critical institutional knowledge frequently walks out the door when senior talent departs.",
    operatingRealities: [
      {
        title: "Fragmented Precedent Archives",
        description:
          "Valuable project methodologies, benchmark data, and past deliverables remain scattered across private laptops, SharePoint folders, and email chains."
      },
      {
        title: "Time-Intensive RFP & Pitch Preparation",
        description:
          "Partners and senior managers spend dozens of non-billable hours assembling proposal drafts, case studies, and compliance certifications."
      },
      {
        title: "Complex Conflict Checking & Engagement Onboarding",
        description:
          "Vetting new client engagements against past advisory work, ethical boundaries, and industry restrictions is slow and manual."
      },
      {
        title: "Inconsistent Quality Across Distributed Teams",
        description:
          "Ensuring consistent quality standards and adherence to firm methodology across multiple office locations requires intensive partner review time."
      }
    ],
    leveragePoints: [
      {
        title: "Proposal Intelligence & RFP Response Drafting",
        problem:
          "Drafting 80-page RFP responses requires senior consultants to manually locate past relevant case studies, credentials, and methodology frameworks.",
        whatAiDoes:
          "Reads client RFP questions, searches your approved credential archives, and drafts tailored proposal sections incorporating the firm's verified frameworks.",
        leverageOutcome:
          "Helps teams prepare RFP responses more efficiently, allowing partners to respond to high-value bids with consistent quality.",
      },
      {
        title: "Precedent Search & Collective Knowledge",
        problem:
          "Consultants spend hours asking colleagues on chat channels whether the firm has previously completed similar client work.",
        whatAiDoes:
          "Provides a private, citation-backed knowledge assistant that indexes sanitized past deliverables, benchmark databases, and methodology guides.",
        leverageOutcome:
          "Gives project teams direct access to the firm's collective intelligence, accelerating research and avoiding duplicate effort.",
      },
      {
        title: "Advisory Deliverable QA & Compliance Review",
        problem:
          "Ensuring complex client deliverables comply with brand standards, methodology rules, and regulatory disclaimers takes valuable partner review time.",
        whatAiDoes:
          "Reviews report drafts against firm formatting guidelines, fact-checks references against underlying data models, and verifies required disclaimers.",
        leverageOutcome:
          "Enhances deliverable consistency and frees senior partners to focus on high-level client advisory relationship management.",
      },
      {
        title: "Client Onboarding & Engagement Setup",
        problem:
          "Setting up new client matters involves repetitive data collection, contract drafting, and billing code coordination across multiple systems.",
        whatAiDoes:
          "Extracts engagement terms from signed engagement letters, configures project workspaces, and populates billing and time-tracking systems.",
        leverageOutcome:
          "Supports clean engagement launch, faster initial billing setup, and reduced administrative friction for project leads.",
      }
    ],
    capabilityMappings: [
      {
        familyNumber: "01",
        familyName: "Workforce Intelligence",
        systemTitle: "Firm Methodology & Precedent Knowledge",
        description:
          "Enables practitioners to query verified case archives, client benchmark datasets, and approved diagnostic frameworks directly.",
      },
      {
        familyNumber: "02",
        familyName: "Operations & Workflows",
        systemTitle: "Engagement Setup & Deliverable QA",
        description:
          "Automates new client matter configuration, project timeline setup, and deliverable compliance checks.",
      },
      {
        familyNumber: "03",
        familyName: "Sales & Customer Operations",
        systemTitle: "RFP Response & Proposal Drafting",
        description:
          "Synthesizes tailored proposal decks and RFP answer drafts from approved firm credentials and methodology templates.",
      },
      {
        familyNumber: "04",
        familyName: "Knowledge & Decision Support",
        systemTitle: "Client Advisory Intelligence & Benchmarks",
        description:
          "Aggregates sanitized industry benchmark data to provide structured analytical support for client deliverables.",
      }
    ],
    modelledScenario: {
      title: "RFP Intelligence & Client Engagement Proposal Preparation",
      categoryBadge: "HOW THE SYSTEM OPERATES",
      inputDescription:
        "Client RFP documents, firm credential libraries, past proposal archives, and rate schedules.",
      inputsList: [
        "Client Request for Proposal (PDF)",
        "Firm Approved Methodologies & Diagnostic Frameworks",
        "Sanitized Past Engagement Case Studies",
        "Partner Rate Schedules & Staffing Models"
      ],
      steps: {
        understand: {
          stepNumber: "01",
          stageName: "READ & ORGANISE",
          label: "RFP Requirements Review",
          description:
            "Extracts key client objectives, scope questions, required compliance certifications, and submission deadlines from the RFP."
        },
        orchestrate: {
          stepNumber: "02",
          stageName: "CONNECT THE STEPS",
          label: "Credential Matching & Framework Synthesis",
          description:
            "Matches RFP requirements to the firm's most relevant past project credentials and synthesizes proposed project phases based on approved methodologies."
        },
        verify: {
          stepNumber: "03",
          stageName: "CHECK THE RESULT",
          label: "Compliance & Rate Card Validation",
          description:
            "Validates that proposed staffing and rate terms match partner guidelines and ensures all mandatory RFP compliance questions are answered."
        },
        action: {
          stepNumber: "04",
          stageName: "COMPLETE THE TASK",
          label: "Proposal Draft & Partner Review Dossier",
          description:
            "Generates a structured proposal draft with tailored methodology diagrams and verified case references ready for lead partner review."
        }
      },
      outputSummary:
        "Structured proposal draft and executive briefing with source references and methodology cross-checks.",
      businessOutcome:
        "Helps teams prepare proposal drafts more efficiently, supporting narrative quality and allowing partners to pursue more opportunities.",
      governanceNote:
        "Data handling and model use are governed according to the terms of your engagement. Final proposals and fee commitments require partner authorization."
    },
    governanceConsiderations: [
      {
        title: "Private by Design",
        description:
          "Designed around your organisation's security requirements with ethical walls to keep confidential client materials separate."
      },
      {
        title: "Clear Record of Sources",
        description:
          "Every case study citation, benchmark figure, and methodology extract links directly back to approved firm credentials."
      },
      {
        title: "Controlled Access",
        description:
          "Information can be made available according to practice areas, offices, and specific engagement assignments."
      },
      {
        title: "Human Approval",
        description:
          "Important client deliverables, fee quotes, and final proposals remain subject to partner review and approval."
      },
      {
        title: "Clear Records",
        description:
          "System activity and proposal drafting versions are recorded for internal quality control and management review."
      }
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate-property",
    number: "05",
    name: "Real Estate & Property Management",
    shortName: "Real Estate",
    headline: "Portfolio intelligence, lease abstracting, and tenant operations workflows.",
    heroSummary:
      "Commercial landlords, property asset managers, and REITs manage extensive portfolios governed by multi-year lease agreements, maintenance ticket flows, and tenant communications. Stratision builds intelligent systems that abstract commercial leases, automate property financial reconciliation, and triage tenant operational requests.",
    metaTitle: "AI for Real Estate & Commercial Property Management | Stratision",
    metaDescription:
      "Bespoke AI systems for commercial lease abstracting, tenant maintenance routing, and property portfolio intelligence.",
    strategicTags: [
      "Commercial Lease Abstracting",
      "Rent Roll & Ledger Verification",
      "Tenant Maintenance Triage",
      "Asset Due Diligence Reviews"
    ],
    overviewContext:
      "In commercial real estate, asset value is directly tied to lease governance, tenant retention, and operational expenditure control. Yet asset managers frequently discover vital lease renewal options or co-tenancy clauses only after critical contract deadlines have passed.",
    operatingRealities: [
      {
        title: "Complex, Non-Standardized Commercial Leases",
        description:
          "Each tenant lease contains unique terms for base rent escalations, CAM reconciliations, renewal options, and restoration obligations."
      },
      {
        title: "High-Volume Tenant Maintenance Communications",
        description:
          "Property managers handle hundreds of daily service requests across HVAC, plumbing, and security, creating coordination delays."
      },
      {
        title: "Dispersed Property Financial Records",
        description:
          "Reconciling monthly rent rolls against operating expense statements and bank deposits involves repetitive manual accounting work."
      },
      {
        title: "Time-Consuming Acquisition Diligence",
        description:
          "Evaluating a potential building acquisition requires reviewing dozens of historical tenant files, inspection reports, and service contracts."
      }
    ],
    leveragePoints: [
      {
        title: "Commercial Lease Abstracting & Option Tracking",
        problem:
          "Abstracting 100-page commercial leases into property management software takes hours per lease and risks missing key escalation or termination dates.",
        whatAiDoes:
          "Extracts tenant terms, renewal windows, CAM caps, insurance requirements, and assignment rights, populating core asset databases.",
        leverageOutcome:
          "Helps teams abstract leases more efficiently and reduces the risk of missed renewal options or uncollected escalation revenue.",
      },
      {
        title: "Tenant Work-Order & Service Request Triage",
        problem:
          "Service requests arrive via phone, email, and portals, requiring property managers to manually classify urgency and assign approved contractors.",
        whatAiDoes:
          "Categorizes incoming tenant maintenance requests, assesses urgency against lease SLA terms, and routes tasks to designated vendor contractors.",
        leverageOutcome:
          "Improves tenant response times, reduces management overhead, and helps ensure service requests are handled according to lease commitments.",
      },
      {
        title: "CAM & Operating Expense Reconciliation",
        problem:
          "Year-end common area maintenance (CAM) reconciliations require complex calculations of tenant pro-rata shares across utility and maintenance invoices.",
        whatAiDoes:
          "Cross-references property operational expenses against tenant lease terms, calculating exact pro-rata shares and generating itemized reconciliation statements.",
        leverageOutcome:
          "Accelerates year-end CAM billing cycles, helping recover operational expenses accurately and on schedule.",
      },
      {
        title: "Property Acquisition Due Diligence Review",
        problem:
          "Acquisition teams have only 30 days of diligence to verify rent rolls, lease covenants, and capital expenditure needs for multi-tenant properties.",
        whatAiDoes:
          "Audits data-room lease files against the seller's stated rent roll, highlighting lease expiration cliffs, co-tenancy risks, and tenant credit anomalies.",
        leverageOutcome:
          "Provides investment committees with deep visibility into property cash flow risks before closing."
      }
    ],
    capabilityMappings: [
      {
        familyNumber: "01",
        familyName: "Workforce Intelligence",
        systemTitle: "Property Operations & Vendor Rules",
        description:
          "Gives on-site property managers prompt access to building operating procedures, warranty terms, and approved contractor contact lists.",
      },
      {
        familyNumber: "02",
        familyName: "Operations & Workflows",
        systemTitle: "Lease Reading & Abstracting Pipeline",
        description:
          "Parses executed leases and amendments, extracts financial schedules, and synchronizes data with Yardi, MRI, or internal ERPs."
      },
      {
        familyNumber: "03",
        familyName: "Sales & Customer Operations",
        systemTitle: "Tenant Portal & Maintenance Coordination",
        description:
          "Handles tenant inquiries, schedules maintenance visits, and keeps building occupants updated on service requests."
      },
      {
        familyNumber: "04",
        familyName: "Knowledge & Decision Support",
        systemTitle: "Portfolio Performance & Asset Review",
        description:
          "Monitors portfolio lease expiration timelines, tracks upcoming renewal options, and models property net operating income (NOI)."
      }
    ],
    modelledScenario: {
      title: "Commercial Lease Abstracting & Option Governance",
      categoryBadge: "HOW THE SYSTEM OPERATES",
      inputDescription:
        "Executed commercial leases, lease amendments, rent rolls, and operating expense ledgers.",
      inputsList: [
        "Commercial Retail & Office Lease (PDF)",
        "Executed Lease Amendments & Guaranty Agreements",
        "Current Monthly Property Rent Roll",
        "Historical Common Area Maintenance (CAM) Ledger"
      ],
      steps: {
        understand: {
          stepNumber: "01",
          stageName: "READ & ORGANISE",
          label: "Lease Reading & Clause Extraction",
          description:
            "Extracts base rent schedules, escalation formulas, tenant renewal options, co-tenancy covenants, and insurance requirements from executed files."
        },
        orchestrate: {
          stepNumber: "02",
          stageName: "CONNECT THE STEPS",
          label: "Rent Roll Checking & Timeline Mapping",
          description:
            "Cross-checks extracted rent amounts and square footage against the active property rent roll and maps upcoming renewal notification windows."
        },
        verify: {
          stepNumber: "03",
          stageName: "CHECK THE RESULT",
          label: "Covenant & Discrepancy Verification",
          description:
            "Highlights anomalies between billed rent and lease escalation clauses, and flags critical notice deadlines falling within the next 180 days."
        },
        action: {
          stepNumber: "04",
          stageName: "COMPLETE THE TASK",
          label: "System Synchronization & Asset Dashboard",
          description:
            "Populates structured lease abstracts into property management software and prepares an asset manager notification briefing."
        }
      },
      outputSummary:
        "Standardized lease abstract with verified page citations and key renewal dates highlighted.",
      businessOutcome:
        "Reduces manual lease data entry, helps prevent uncollected rent escalations, and helps ensure critical lease options are identified in advance.",
      governanceNote:
        "Data handling and model use are governed according to the terms of your engagement. Lease abstract approvals remain with human asset managers."
    },
    governanceConsiderations: [
      {
        title: "Private by Design",
        description:
          "Designed around your organisation's security requirements, keeping tenant financial disclosures protected."
      },
      {
        title: "Clear Record of Sources",
        description:
          "Every extracted lease covenant, rent amount, and notice period links directly back to the original legal document and page."
      },
      {
        title: "Controlled Access",
        description:
          "Information can be made available according to properties, asset management teams, and staff responsibilities."
      },
      {
        title: "Human Approval",
        description:
          "Important lease abstract finalizations and legal notices remain subject to human asset manager review."
      },
      {
        title: "Clear Records",
        description:
          "Lease abstracts, variance checks, and system updates are recorded for property auditability."
      }
    ]
  },
  {
    id: "infrastructure",
    slug: "infrastructure-construction",
    number: "06",
    name: "Infrastructure & Construction",
    shortName: "Infrastructure",
    headline: "Project documentation, subcontractor compliance, and risk review workflows.",
    heroSummary:
      "Capital project owners, general contractors, and engineering firms manage massive volumes of technical specifications, subcontractor submittals, variation notices, and safety compliance records. Stratision engineers intelligent review workflows that cross-check submittals against project specifications, flag scope deviations, and streamline project coordination.",
    metaTitle: "AI in Infrastructure & Construction Capital Projects | Stratision",
    metaDescription:
      "Bespoke AI systems for engineering submittal review, contractor compliance verification, and variation notice triage on major capital projects.",
    strategicTags: [
      "Engineering Spec & Submittal Checks",
      "Subcontractor Compliance Tracking",
      "Variation Order & Change Request Triage",
      "Clear Project Audit Records"
    ],
    overviewContext:
      "On major capital projects, project delays and margin erosion frequently stem from slow submittal reviews, unmanaged variation requests, and disjointed communication between the job site and project engineering leadership.",
    operatingRealities: [
      {
        title: "Voluminous Technical Project Specifications",
        description:
          "Engineering specifications run thousands of pages, making it difficult to verify whether subcontractor material submittals match contract requirements."
      },
      {
        title: "Subcontractor Compliance & Insurance Tracking",
        description:
          "Managing active safety certifications, liability insurance, and prevailing wage documentation across dozens of subcontractors is a constant administrative burden."
      },
      {
        title: "Proliferation of Unresolved Change Orders",
        description:
          "Job site variation notices and change requests often accumulate without timely review, causing cost disputes and schedule delays."
      },
      {
        title: "Dispersed Daily Site Logs & Field Reports",
        description:
          "Valuable observational data in daily site superintendent reports remains trapped in PDF scans, preventing proactive risk identification."
      }
    ],
    leveragePoints: [
      {
        title: "Subcontractor Submittal & Specification Review",
        problem:
          "Project engineers spend significant time manually comparing subcontractor product submittals against multi-thousand-page project specifications.",
        whatAiDoes:
          "Extracts technical parameters from subcontractor cut-sheets, cross-references against engineering specifications, and flags deviations.",
        leverageOutcome:
          "Helps teams review submittals more efficiently, helping prevent procurement delays and supporting adherence to engineering standards.",
      },
      {
        title: "Subcontractor Compliance & Insurance Verification",
        problem:
          "Subcontractors arrive on site with expired insurance certificates or missing safety affidavits, risking project stoppage or safety liability.",
        whatAiDoes:
          "Monitors incoming Certificates of Insurance (COIs), verifies coverage limits against subcontract terms, and issues automated renewal notices.",
        leverageOutcome:
          "Supports contractor compliance verification before site access, helping reduce commercial and legal exposure for the general contractor.",
      },
      {
        title: "Variation Request & Change Order Triage",
        problem:
          "Subcontractor change orders arrive with vague justifications, requiring extensive research into contract drawings and past meeting minutes.",
        whatAiDoes:
          "Cross-references change requests against contract scope boundaries, past RFI logs, and schedule milestones to assess validity.",
        leverageOutcome:
          "Accelerates change order review, helps avoid contentious disputes, and supports project contingency governance.",
      },
      {
        title: "Daily Site Log Synthesis & Delay Risk Flagging",
        problem:
          "Superintendents file daily logs that contain early indicators of weather delays or subcontractor clashes, but project executives lack time to read every report.",
        whatAiDoes:
          "Synthesizes daily site notes, weather data, and manpower counts across trades to highlight emerging schedule bottlenecks.",
        leverageOutcome:
          "Provides project directors with early warning of prospective delays before they impact critical path milestones."
      }
    ],
    capabilityMappings: [
      {
        familyNumber: "01",
        familyName: "Workforce Intelligence",
        systemTitle: "Project Specs & Safety Knowledge Base",
        description:
          "Gives project engineers and site supervisors direct access to approved project specs, building codes, and safety protocols.",
      },
      {
        familyNumber: "02",
        familyName: "Operations & Workflows",
        systemTitle: "Submittal Review Pipeline",
        description:
          "Parses incoming subcontractor submittals, compares technical data against project requirements, and updates Procore, Autodesk, or internal systems.",
      },
      {
        familyNumber: "03",
        familyName: "Sales & Customer Operations",
        systemTitle: "Owner Reporting & RFI Coordination",
        description:
          "Prepares monthly executive progress reports for project owners and coordinates request-for-information (RFI) routing.",
      },
      {
        familyNumber: "04",
        familyName: "Knowledge & Decision Support",
        systemTitle: "Project Risk & Change Order Review",
        description:
          "Evaluates scope change claims, tracks budget variances, and analyzes schedule risk factors across all active work packages.",
      }
    ],
    modelledScenario: {
      title: "Capital Project Submittal Review & Specification Compliance",
      categoryBadge: "HOW THE SYSTEM OPERATES",
      inputDescription:
        "Master technical specifications, subcontractor cut-sheets, RFI logs, and drawing sets.",
      inputsList: [
        "Division 03-09 Technical Specifications (PDF)",
        "Subcontractor Equipment & Material Submittal",
        "Architectural & Structural Drawing Set",
        "Active Project RFI & Clarification Register"
      ],
      steps: {
        understand: {
          stepNumber: "01",
          stageName: "READ & ORGANISE",
          label: "Spec & Submittal Extraction",
          description:
            "Extracts material properties, performance standards, ASTM compliance requirements, and submittal cut-sheet specifications."
        },
        orchestrate: {
          stepNumber: "02",
          stageName: "CONNECT THE STEPS",
          label: "Cross-Comparison & Deviation Review",
          description:
            "Compares submittal data directly against specification tolerances and checks whether drawing revisions impact the proposed materials."
        },
        verify: {
          stepNumber: "03",
          stageName: "CHECK THE RESULT",
          label: "Engineering Threshold & Safety Check",
          description:
            "Flags any material substitutions, warranty shortfalls, or dimensional discrepancies for lead structural engineer review."
        },
        action: {
          stepNumber: "04",
          stageName: "COMPLETE THE TASK",
          label: "Annotated Review Pack & System Sync",
          description:
            "Generates an annotated submittal review pack with recommended approval status and updates project management software."
        }
      },
      outputSummary:
        "Annotated engineering submittal review package with specification cross-references and flagged deviations.",
      businessOutcome:
        "Helps teams review submittal packages more efficiently, highlights material deviations, and maintains clear records across capital project packages.",
      governanceNote:
        "Data handling and model use are governed according to the terms of your engagement. Submittal stamps and approvals remain with licensed engineers."
    },
    governanceConsiderations: [
      {
        title: "Private by Design",
        description:
          "Designed around your organisation's security requirements, keeping proprietary drawings and procurement bids protected."
      },
      {
        title: "Clear Record of Sources",
        description:
          "Every specification check, tolerance comparison, and material extraction links directly back to project drawings and contract specs."
      },
      {
        title: "Controlled Access",
        description:
          "Information can be made available according to project teams, subcontractor packages, and security clearances."
      },
      {
        title: "Human Approval",
        description:
          "Important engineering sign-offs, submittal approvals, and change order authorizations remain the responsibility of licensed engineers."
      },
      {
        title: "Clear Records",
        description:
          "All submittal evaluations, compliance checks, and engineer notes are recorded for project accountability."
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return INDUSTRIES_LIST.find((ind) => ind.slug === slug);
}
