import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Building2,
  Stethoscope,
  Truck,
  Home,
  Factory,
  Car,
  Users,
  Landmark,
  HardHat,
  UtensilsCrossed,
  GraduationCap,
  ShoppingBag,
  Check,
  ExternalLink,
  ChevronDown
} from "lucide-react";

interface IndustriesHubPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

interface SectorDossier {
  number: string;
  id: string;
  slug?: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  operationalReality: string;
  leakagePoints: string[];
  whatStratisionAutomates: {
    systemName: string;
    description: string;
  }[];
  humanOversightBoundary: string;
  connectedSystems: string[];
  systemCapabilities: {
    speedToLead: "core" | "secondary" | "none";
    aiReceptionist: "core" | "secondary" | "none";
    aiMarketing: "core" | "secondary" | "none";
    workforceTraining: "core" | "secondary" | "none";
    documentIntelligence: "core" | "secondary" | "none";
    workflowAutomation: "core" | "secondary" | "none";
  };
  artefact: {
    folio: string;
    timestamp: string;
    badge: string;
    title: string;
    subtitle: string;
    fields: { label: string; value: string; badge?: string }[];
    summary: string;
    status: string;
    verifiedBy: string;
  };
}

const SECTORS: SectorDossier[] = [
  {
    number: "01",
    id: "professional-services",
    slug: "professional-services",
    name: "Professional Services",
    shortName: "Professional Services",
    icon: Building2,
    tagline: "Accountancy, commercial law, corporate finance, and advisory practices.",
    operationalReality:
      "Senior fee-earners, audit managers, and legal partners spend 20–35% of their working hours manually cross-checking client spreadsheets, parsing 200+ page contracts, and drafting routine advisory letters rather than delivering high-value counsel.",
    leakagePoints: [
      "Substantial unbillable administrative overhead on routine compliance files and client intake",
      "Slow turnaround on inbound enquiry qualification, losing high-value advisory mandates",
      "Manual fatigue and oversight risks when cross-referencing audit ledgers against bank statements",
      "Senior partners spending billable hours hunting across historical firm precedents and filings"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Speed-to-Lead",
        description: "Sub-60-second qualification of inbound advisory requests, routing high-value prospects directly to the lead partner."
      },
      {
        systemName: "Document Intelligence",
        description: "Automated cross-examination of balance sheets, invoices, and bank statements with page-level source citations."
      },
      {
        systemName: "Workflow Automation",
        description: "Pre-audit document triage that flags variance anomalies and generates standardized engagement letters."
      },
      {
        systemName: "Knowledge Assistant",
        description: "Semantic search across historical firm precedents, filings, and contracts without manual keyword searches."
      },
      {
        systemName: "AI Receptionist",
        description: "Intelligent front-of-house call handling routing client calls to appropriate practice groups with briefing context."
      }
    ],
    humanOversightBoundary:
      "Zero autonomous advice. All generated documents, audit flags, and legal drafts remain recommendations requiring explicit sign-off by a qualified fee-earner. Every extracted citation links directly to its source PDF page.",
    connectedSystems: ["iManage", "Clio", "Xero", "Sage", "Practice Engine", "SharePoint", "Microsoft 365"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "core",
      aiMarketing: "secondary",
      workforceTraining: "secondary",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · ADVISORY CORE",
      timestamp: "11:42 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "PRE-AUDIT LEDGER RECONCILIATION DOSSIER",
      subtitle: "Corporate Practice: Commercial Year-End Audit File",
      fields: [
        { label: "Ledger Accounts Audited", value: "1,428 Transactions", badge: "100% Extracted" },
        { label: "VAT Return Reconciliation", value: "£412,890.00 Checked", badge: "Matched" },
        { label: "Variance Anomaly Detected", value: "Inv #8492 (£14,250.00)", badge: "Flagged for Partner" },
        { label: "Source Evidence Link", value: "Page 84, Bank Statement", badge: "Verified Citation" }
      ],
      summary:
        "All transactions cross-referenced against bank statements. Single unrecorded credit note flagged for senior audit manager sign-off.",
      status: "AWAITING AUDIT PARTNER SIGN-OFF",
      verifiedBy: "Lead Audit System • Confidence: 99.7%"
    }
  },
  {
    number: "02",
    id: "property-real-estate",
    slug: "real-estate-property",
    name: "Property & Real Estate",
    shortName: "Property & Real Estate",
    icon: Home,
    tagline: "Commercial asset managers, residential agencies, chartered surveyors, and developers.",
    operationalReality:
      "Property desks receive heavy volumes of inbound buyer, tenant, and investor enquiries across portals and messaging. Agents lose productive hours fielding repetitive qualification questions, coordinating viewings across diaries, and manually digging through static lease PDFs.",
    leakagePoints: [
      "Inbound buyer and tenant leads arriving outside business hours go cold before morning follow-up",
      "Agents spending up to 40% of their day manually screening buyer timelines, budgets, and proof of funds",
      "Repetitive telephone and viewing scheduling friction between vendors, agents, and applicants",
      "Unspotted commercial lease break options, rent reviews, and statutory safety certificate renewals"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Speed-to-Lead",
        description: "Sub-60-second qualification of inbound portal leads, verifying buying position and booking viewing slots automatically."
      },
      {
        systemName: "AI Receptionist",
        description: "24/7 telephone reception answering applicant questions, logging vendor inquiries, and dispatching viewing reminders."
      },
      {
        systemName: "Document Intelligence",
        description: "Extraction of commercial lease covenants, service charge caps, indexation dates, and EPC safety certifications."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated viewing confirmation sequences, feedback collection, and offer documentation preparation."
      },
      {
        systemName: "CRM Integration",
        description: "Bi-directional synchronization of buyer criteria, applicant notes, and status updates directly into the property CRM."
      }
    ],
    humanOversightBoundary:
      "All property valuations, offer acceptances, price reductions, and formal lease executions remain strictly authorized by human agents and surveyors.",
    connectedSystems: ["Re-Leased", "MRI Software", "Yardi", "Fixflo", "Alto", "Jupix", "Rightmove / Zoopla Feeds"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "core",
      aiMarketing: "secondary",
      workforceTraining: "secondary",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · ASSET CORE",
      timestamp: "16:04 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "COMMERCIAL LEASE AUDIT & BREAK-DATE NOTICE",
      subtitle: "Asset Portfolio: Multi-Tenant Commercial Building",
      fields: [
        { label: "Current Passing Rent", value: "£385,000.00 p.a.", badge: "Verified" },
        { label: "Tenant Break Clause", value: "24 Dec 2026 (6-Mo Notice)", badge: "Critical Date Flagged" },
        { label: "Service Charge Cap", value: "£14.50 / sq ft Indexed", badge: "Clause 14.2" },
        { label: "Statutory EICR Status", value: "Valid to Oct 2027", badge: "Compliant" }
      ],
      summary:
        "Full lease covenant schedule extracted and synced to property register. 90-day alert generated for upcoming tenant break-option window.",
      status: "SYNCHRONISED TO ASSET REGISTER",
      verifiedBy: "Lease Extraction Engine • Page Citations Intact"
    }
  },
  {
    number: "03",
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Private Clinics",
    shortName: "Healthcare",
    icon: Stethoscope,
    tagline: "Private medical practices, specialist clinics, dental groups, and diagnostic centres.",
    operationalReality:
      "Clinic receptionists field hundreds of incoming telephone calls daily while checking in arriving patients. Meanwhile, private specialists spend 2–3 hours each evening transcribing clinical notes and dictating patient referral letters into EHR systems.",
    leakagePoints: [
      "Inbound patient call abandonment during morning surges, leading to missed private consultations",
      "Unstructured GP and specialist referral letters waiting in inboxes for manual administrative triage",
      "Consultants overburdened by post-clinic typing, medical report dictation, and EHR data entry",
      "Under-utilised diagnostic rooms and theatre slots resulting from late cancellations"
    ],
    whatStratisionAutomates: [
      {
        systemName: "AI Receptionist",
        description: "24/7 intelligent patient telephone call answering, enquiry screening, and clinic diary slot allocation."
      },
      {
        systemName: "Document Intelligence",
        description: "Instant extraction and tagging of inbound GP referral PDFs, medical histories, and insurance pre-authorisations."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated drafting of structured consultation letters and patient summaries formatted for doctor review."
      },
      {
        systemName: "Knowledge Assistant",
        description: "Rapid retrieval of verified clinic preparation guidelines, consultant fee structures, and procedure protocols."
      }
    ],
    humanOversightBoundary:
      "Strict clinical governance: Zero autonomous diagnosis, medical advice, or clinical decisions. Systems operate purely within administrative intake and triage parameters. Every clinical letter requires doctor review and electronic signature.",
    connectedSystems: ["EMIS Health", "SystmOne", "Carebit", "Dentally", "Semble", "Medirecords", "VoIP PBX"],
    systemCapabilities: {
      speedToLead: "secondary",
      aiReceptionist: "core",
      aiMarketing: "none",
      workforceTraining: "secondary",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · CLINICAL INTAKE",
      timestamp: "14:12 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "PATIENT REFERRAL & CLINICAL TRIAGE DOSSIER",
      subtitle: "Specialist Inbound Referral → Orthopaedic Clinic",
      fields: [
        { label: "Patient Demographics", value: "Extracted & Verified", badge: "Governance Compliant" },
        { label: "Clinical Urgency Rating", value: "Priority Level 2 (Routine)", badge: "Rule Engine" },
        { label: "Consultant Diary Match", value: "Specialist Orthopaedic Desk", badge: "Thurs 10:30 Slot" },
        { label: "Medical History Summary", value: "Previous Arthroscopy 2022", badge: "Page 2 Citation" }
      ],
      summary:
        "Referral letter ingested in 4 seconds. Pre-consultation dossier assembled with relevant surgical history. Clinic room slot reserved pending doctor sign-off.",
      status: "READY FOR CONSULTANT REVIEW",
      verifiedBy: "Clinical Intake Core • Caldicott Confirmed"
    }
  },
  {
    number: "04",
    id: "logistics-transport",
    slug: "logistics-supply-chain",
    name: "Logistics & Transport",
    shortName: "Logistics & Transport",
    icon: Truck,
    tagline: "Freight forwarders, contract logistics, road haulage, and distribution operators.",
    operationalReality:
      "Operations desks are flooded with thousands of unstructured PDFs every week — Commercial Invoices, Bills of Lading, packing lists, and customs declarations. Staff waste hours manually re-keying data across disconnected transport management systems.",
    leakagePoints: [
      "Demurrage and customs inspection charges incurred through paperwork discrepancies and delays",
      "Slow turnaround on spot freight quotation requests losing contracts to competing carriers",
      "Manual cross-referencing of carrier invoices against contracted fuel and accessorial rates",
      "Customer service teams bogged down fielding repetitive 'where is my freight' inquiries"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Document Intelligence",
        description: "Instant extraction and reconciliation of multi-page Bills of Lading, Commercial Invoices, and packing lists."
      },
      {
        systemName: "AI Receptionist",
        description: "24/7 shipment tracking desk answering voice and email queries using live milestone data from the TMS."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated commodity code (HS/HTS) classification and customs documentation preparation for broker check."
      },
      {
        systemName: "Knowledge Assistant",
        description: "Instant retrieval of cross-border customs regulations, port tariff schedules, and incoterms guidelines."
      }
    ],
    humanOversightBoundary:
      "Customs declarations and clearance authorisations remain strictly the legal responsibility of licensed freight forwarders. The system handles ingestion, validation, and tariff matching; forwarders confirm submission.",
    connectedSystems: ["Cargowise", "Descartes", "SAP ERP", "Oracle SCM", "Mandata", "Custom EDI Feeds"],
    systemCapabilities: {
      speedToLead: "secondary",
      aiReceptionist: "core",
      aiMarketing: "none",
      workforceTraining: "secondary",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · FREIGHT CORE",
      timestamp: "09:28 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "CUSTOMS CLEARANCE & BILL OF LADING AUDIT",
      subtitle: "Consignment: 4x 40ft Containers — Port Entry → Distribution Hub",
      fields: [
        { label: "Commercial Invoice Total", value: "€184,520.00", badge: "Reconciled" },
        { label: "Tariff Classification", value: "HS 8409.91 (Engine Parts)", badge: "Verified vs Schedule" },
        { label: "Carrier Surcharge Check", value: "Bunker Surcharge £320.00", badge: "Contract Matched" },
        { label: "Discrepancy Check", value: "Zero Discrepancies", badge: "Clearance Ready" }
      ],
      summary:
        "Four container Bills of Lading cross-checked against commercial invoices and customs tariff schedule. Ready for single-click customs declaration.",
      status: "READY FOR CUSTOMS BROKER SIGN-OFF",
      verifiedBy: "Trade Document Core • TMS Synchronised"
    }
  },
  {
    number: "05",
    id: "manufacturing-engineering",
    slug: "manufacturing",
    name: "Manufacturing & Engineering",
    shortName: "Manufacturing & Engineering",
    icon: Factory,
    tagline: "Precision engineering, industrial fabrication, aerospace parts, and contract manufacturing.",
    operationalReality:
      "Senior estimators spend days manually calculating machine cycle times and material costs from dense CAD drawings. At the same time, quality assurance managers spend hours verifying Mill Test Certificates for ISO 9001 and AS9100 audits.",
    leakagePoints: [
      "Multi-day quotation turnaround times causing high-margin engineering tenders to be lost to competitors",
      "Quality teams spending hours manually cross-checking mill test certificates against ASTM/EN specs",
      "Machine breakdown tribal knowledge trapped with individual operators across shift handovers",
      "Significant administrative friction assembling complete traceability audit packs for customers"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Document Intelligence",
        description: "Rapid parsing of engineering drawing PDFs, dimensional tolerances, and material specifications."
      },
      {
        systemName: "Speed-to-Lead",
        description: "Preliminary Bill of Materials (BOM) costing and cycle-time calculation based on shop floor rates."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated validation of incoming Mill Test Certificates (MTCs) against mechanical and chemical standards."
      },
      {
        systemName: "Knowledge Assistant",
        description: "Instant shop-floor search across historical CNC alarm codes, maintenance logs, and approved SOPs."
      }
    ],
    humanOversightBoundary:
      "All formal quotes and manufacturing toolpaths are verified and approved by qualified manufacturing engineers before submission. Material grade substitutions remain human engineering decisions.",
    connectedSystems: ["Epicor", "Siemens Teamcenter", "Autodesk Vault", "SAP ERP", "Plex", "Shop Floor IoT"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "secondary",
      aiMarketing: "none",
      workforceTraining: "core",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · INDUSTRIAL CORE",
      timestamp: "10:15 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "RFQ SPECIFICATION & MATERIAL AUDIT DOSSIER",
      subtitle: "Customer Tender: Flange Assembly (Batch of 250 Units)",
      fields: [
        { label: "Material Specification", value: "316L Stainless (EN 10088-3)", badge: "Grade Confirmed" },
        { label: "Critical Tolerance Check", value: "±0.012mm Bore Diameter", badge: "5-Axis Capable" },
        { label: "Estimated Cycle Time", value: "38.5 Mins / Part", badge: "Shop Rate Applied" },
        { label: "Material Cert (MTC)", value: "Heat #8921B Verified", badge: "ISO 9001 Compliant" }
      ],
      summary:
        "Full RFQ drawing parsed in 8 minutes. Material costs, tooling allowances, and machine cycle times compiled into preliminary engineering quotation.",
      status: "AWAITING LEAD ESTIMATOR APPROVAL",
      verifiedBy: "Manufacturing Spec Core • Traceability Sealed"
    }
  },
  {
    number: "06",
    id: "automotive-dealerships",
    name: "Automotive & Dealerships",
    shortName: "Automotive & Dealerships",
    icon: Car,
    tagline: "Franchised dealer groups, prestige vehicle retailers, commercial fleets, and remarketing networks.",
    operationalReality:
      "Vehicle leads arrive 24/7 across AutoTrader, manufacturer portals, and website forms. Showroom sales executives are occupied with test drives and customer handovers, leaving high-intent digital leads uncontacted for hours. Service desks struggle with peak morning telephone calls.",
    leakagePoints: [
      "Out-of-hours portal leads going cold while competitors respond immediately with test-drive options",
      "Sales reps spending hours qualifying routine part-exchange details, finance preferences, and delivery timelines",
      "Service telephone queues leading to lost workshop revenue and frustrated servicing customers",
      "Uncoordinated finance paperwork and repetitive manual CRM re-keying between DMS and portals"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Speed-to-Lead",
        description: "Sub-60-second multi-channel response to vehicle enquiries, qualifying finance interest and scheduling test drives."
      },
      {
        systemName: "AI Receptionist",
        description: "24/7 voice and digital receptionist booking routine servicing, MOTs, and routing complex vehicle enquiries."
      },
      {
        systemName: "CRM Automation",
        description: "Automatic logging of lead preferences, trade-in valuations, and appointment bookings directly into the DMS."
      },
      {
        systemName: "AI Marketing Engine",
        description: "Proactive customer re-engagement triggered by PCP finance renewal windows and annual service anniversaries."
      }
    ],
    humanOversightBoundary:
      "Final vehicle valuations, finance underwriting approvals, and contract executions are governed exclusively by authorized dealership sales executives and F&I managers.",
    connectedSystems: ["CDK Drive", "Pinewood Pinnacle", "Keyloop", "AutoTrader API", "Salesforce Automotive Cloud", "WhatsApp Business"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "core",
      aiMarketing: "core",
      workforceTraining: "secondary",
      documentIntelligence: "secondary",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · DEALER NETWORK",
      timestamp: "19:42 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "SHOWROOM TEST DRIVE & LEAD QUALIFICATION",
      subtitle: "Inbound Vehicle Lead: AutoTrader Portal Enquiry",
      fields: [
        { label: "Response Latency", value: "34 Seconds", badge: "Sub-60s SLA" },
        { label: "Purchase Method", value: "PCP Finance (36 Mos)", badge: "Pre-Qualified" },
        { label: "Part-Exchange Status", value: "2021 Estate, 38k Miles", badge: "HPI Clear" },
        { label: "Test Drive Slot", value: "Saturday 11:30 AM", badge: "Calendar Reserved" }
      ],
      summary:
        "Digital lead qualified during evening showroom closure. Test drive scheduled and complete customer dossier synced to DMS for sales executive morning briefing.",
      status: "SHOWROOM APPOINTMENT CONFIRMED",
      verifiedBy: "Speed-to-Lead Engine • DMS Synchronised"
    }
  },
  {
    number: "07",
    id: "recruitment-staffing",
    name: "Recruitment & Staffing",
    shortName: "Recruitment & Staffing",
    icon: Users,
    tagline: "Executive search, contingent recruitment, healthcare staffing, and technical agency groups.",
    operationalReality:
      "Consultants spend over half their working day screening incoming CVs, chasing candidate availability, formatting resumes into agency templates, and coordinating multi-round interview calendars rather than building client relationships and closing placement fees.",
    leakagePoints: [
      "Top candidates applying to open vacancies are contacted too slowly and get placed elsewhere first",
      "Consultants spending 30–45 minutes per candidate manually reformatting CVs and checking right-to-work credentials",
      "Administrative friction coordinating interview availability between hiring managers and busy candidates",
      "Thousands of historical candidate records sitting dormant and unsearchable in legacy ATS databases"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Speed-to-Lead",
        description: "Instant candidate outreach upon application submission, conducting initial criteria screening and diary booking."
      },
      {
        systemName: "AI Receptionist",
        description: "Telephone handling for candidate availability checks, reference requests, and client vacancy inquiries."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated candidate CV parsing, anonymised profile generation, and right-to-work compliance tracking."
      },
      {
        systemName: "Workforce Intelligence",
        description: "Semantic talent search matching newly registered job requisitions against historical ATS candidate records."
      }
    ],
    humanOversightBoundary:
      "All candidate shortlist submissions, interview representations, client fee negotiations, and hiring decisions remain strictly in the hands of recruitment consultants.",
    connectedSystems: ["Bullhorn", "Vincere", "Jobadder", "LinkedIn Recruiter", "Broadbean", "Mercury CRM"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "core",
      aiMarketing: "secondary",
      workforceTraining: "core",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · TALENT INTAKE",
      timestamp: "12:05 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "CANDIDATE SCREENING & SHORTLIST DOSSIER",
      subtitle: "Requisition: Senior Cloud Infrastructure Lead",
      fields: [
        { label: "Application Intake", value: "Instant Match (Score: 94/100)", badge: "Criteria Verified" },
        { label: "Right-to-Work Status", value: "Verified Active", badge: "Compliance Check" },
        { label: "Notice Period / Salary", value: "1 Month / £85,000", badge: "Aligned to Spec" },
        { label: "Screening Interview", value: "Booked with Senior Consultant", badge: "Diary Confirmed" }
      ],
      summary:
        "Candidate submitted application at 12:04. Screening criteria verified, salary expectations confirmed, and initial 20-min recruiter call placed in calendar.",
      status: "READY FOR CONSULTANT SCREENING",
      verifiedBy: "Recruiter Intake Core • Bullhorn Synced"
    }
  },
  {
    number: "08",
    id: "financial-accountancy",
    slug: "financial-services-investment",
    name: "Financial & Accountancy Firms",
    shortName: "Financial & Accountancy",
    icon: Landmark,
    tagline: "Chartered accountants, tax advisors, audit practices, and wealth management consultancies.",
    operationalReality:
      "Accounting practices face severe administrative bottlenecks during tax season and year-end audits. Fee-earners spend countless hours chasing clients for missing source vouchers, reconciling bank statements against ledgers, and managing onboarding KYC checks.",
    leakagePoints: [
      "Weeks lost waiting for clients to provide missing receipts, invoices, and year-end payroll files",
      "Junior accountants manually cross-referencing ledger entries against PDF bank transaction downloads",
      "Slow client onboarding due to fragmented KYC/AML checks, engagement letters, and professional clearance",
      "Partners repeatedly answering identical recurring client queries regarding VAT thresholds and filing dates"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Document Intelligence",
        description: "Automated extraction and reconciliation of bank statements, supplier invoices, VAT returns, and payroll ledgers."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated client document chasing sequences, KYC tracking, and engagement letter dispatch."
      },
      {
        systemName: "Knowledge Assistant",
        description: "Verified internal retrieval of statutory tax regulations, revenue authority guidance, and firm working papers."
      },
      {
        systemName: "AI Receptionist",
        description: "Intelligent telephony routing client queries to dedicated portfolio managers and triaging tax intake."
      }
    ],
    humanOversightBoundary:
      "All statutory tax returns, audit opinions, and investment advisory notes require certified accountant or auditor review and sign-off.",
    connectedSystems: ["Xero", "Dext", "Sage", "CCH", "IRIS", "Practice Engine", "Karbon"],
    systemCapabilities: {
      speedToLead: "secondary",
      aiReceptionist: "core",
      aiMarketing: "none",
      workforceTraining: "secondary",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · AUDIT ENGINE",
      timestamp: "15:20 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "YEAR-END RECONCILIATION & KYC AUDIT DOSSIER",
      subtitle: "Corporate Practice: Annual Statutory Filing",
      fields: [
        { label: "Bank Feeds Reconciled", value: "3,890 Transactions", badge: "Matched" },
        { label: "Missing Vouchers Flagged", value: "4 Vouchers > £2,500", badge: "Auto-Chased" },
        { label: "AML / KYC Verification", value: "Director Passports & Proof of Address", badge: "Verified" },
        { label: "Audit Readiness Score", value: "98.4%", badge: "Working Papers Ready" }
      ],
      summary:
        "Full client bank transactions reconciled against sales and purchase ledgers. Automated request dispatched for 4 missing invoices.",
      status: "WORKING PAPERS COMPILED FOR PARTNER",
      verifiedBy: "Financial Audit Core • Xero Synced"
    }
  },
  {
    number: "09",
    id: "construction-property-services",
    slug: "infrastructure-construction",
    name: "Construction & Property Services",
    shortName: "Construction & Property Services",
    icon: HardHat,
    tagline: "Main contractors, MEP specialists, civil engineering firms, and commercial facilities contractors.",
    operationalReality:
      "Estimators and project managers are inundated with complex tender packages containing hundreds of drawings, architectural specifications, and bills of quantities. Site teams struggle with slow supplier quote turnaround and scattered submittal approvals.",
    leakagePoints: [
      "Estimators spending days manually reviewing 500-page tender specifications to identify scope exclusions",
      "Commercial and domestic project enquiries going cold while estimators are on active site visits",
      "Project managers spending evening hours drafting daily site logs, variation notices, and submittal packages",
      "Administrative friction tracking subcontractor safety tickets, insurances, and RAMS compliance"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Speed-to-Lead",
        description: "Instant intake and qualification of inbound project tenders and renovation requests, capturing scope and budget."
      },
      {
        systemName: "AI Receptionist",
        description: "Professional site office and headquarters call handling, routing urgent sub-contractor and client calls."
      },
      {
        systemName: "Document Intelligence",
        description: "Automated parsing of tender specifications, architectural addenda, supplier price lists, and safety RAMS."
      },
      {
        systemName: "Workflow Automation",
        description: "Subcontractor compliance tracking, automated daily site report compilation, and variation notice drafting."
      }
    ],
    humanOversightBoundary:
      "All project bids, structural specifications, health and safety sign-offs, and commercial variations require chartered engineer or project director approval.",
    connectedSystems: ["Procore", "Autodesk Construction Cloud", "BuilderTREND", "SimPRO", "Fieldwire"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "core",
      aiMarketing: "none",
      workforceTraining: "secondary",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · CONTRACTOR DESK",
      timestamp: "08:50 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "TENDER SPECIFICATION & COMPLIANCE DOSSIER",
      subtitle: "Commercial Tender: Multi-Storey Fitout Contract",
      fields: [
        { label: "Tender Package Parsed", value: "348 Spec Pages + 42 Drawings", badge: "Indexed" },
        { label: "Scope Exclusions Found", value: "Acoustic Baffles & Specialist Glazing", badge: "Highlighted" },
        { label: "Subcontractor RAMS Status", value: "14/14 Approved for Site", badge: "Compliant" },
        { label: "Preliminary Cost Model", value: "Compiled vs Standard Price Book", badge: "Ready for Estimator" }
      ],
      summary:
        "Tender package analyzed overnight. Critical specification deviations and scope carve-outs flagged for senior estimator commercial review.",
      status: "AWAITING SENIOR ESTIMATOR REVIEW",
      verifiedBy: "Construction Spec Engine • Procore Connected"
    }
  },
  {
    number: "10",
    id: "hospitality-guest-services",
    name: "Hospitality & Guest Services",
    shortName: "Hospitality & Guest Services",
    icon: UtensilsCrossed,
    tagline: "Boutique hotels, luxury resorts, serviced apartments, and fine-dining venue groups.",
    operationalReality:
      "Front-of-house teams balance checking in arriving guests with fielding hundreds of telephone calls regarding room availability, restaurant bookings, event hosting, and dietary requests. Out-of-hours event and wedding enquiries often wait days for sales manager follow-up.",
    leakagePoints: [
      "High-value private event and wedding enquiries arriving on weekends wait days for an event coordinator response",
      "Front-desk staff repeatedly interrupted by routine calls about check-in times, parking, and breakfast hours",
      "Lost direct room bookings when callers encounter busy lines or slow email response for multi-room reservations",
      "Inconsistent corporate account follow-up and review management across distributed hospitality properties"
    ],
    whatStratisionAutomates: [
      {
        systemName: "AI Receptionist",
        description: "24/7 voice and digital guest receptionist handling room reservations, amenity FAQs, and concierge requests."
      },
      {
        systemName: "Speed-to-Lead",
        description: "Immediate qualification and proposal generation for lucrative private dining, conference, and wedding enquiries."
      },
      {
        systemName: "Workflow Automation",
        description: "Guest pre-arrival intake (dietary needs, arrival times), automated room upgrade offers, and digital billing routing."
      },
      {
        systemName: "AI Marketing Engine",
        description: "Targeted guest re-engagement campaigns based on seasonal stay history and corporate booking cycles."
      }
    ],
    humanOversightBoundary:
      "Hospitality managers retain complete discretion over bespoke event pricing, VIP guest concessions, and service resolutions.",
    connectedSystems: ["Opera Cloud", "Mews", "Cloudbeds", "SevenRooms", "OpenTable", "Salesforce Hospitality"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "core",
      aiMarketing: "core",
      workforceTraining: "secondary",
      documentIntelligence: "secondary",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · GUEST OPS",
      timestamp: "21:15 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "PRIVATE EVENT & GROUP BOOKING DOSSIER",
      subtitle: "Inbound Private Dining & Conference Enquiry",
      fields: [
        { label: "Event Type", value: "Corporate Dinner (32 Guests)", badge: "Qualified" },
        { label: "Target Date & Room", value: "18 Nov · Garden Suite", badge: "Diary Available" },
        { label: "Minimum Spend Met", value: "£4,800 Allocation", badge: "Budget Aligned" },
        { label: "Coordinator Handover", value: "Draft Menu & Floorplan Assembled", badge: "Briefed" }
      ],
      summary:
        "High-value private dining enquiry captured outside sales desk hours. Date checked against diary and preliminary event proposal prepared for morning sign-off.",
      status: "PROPOSAL COMPILED FOR EVENT MANAGER",
      verifiedBy: "Hospitality Intake Core • PMS Synchronised"
    }
  },
  {
    number: "11",
    id: "education-training-ld",
    name: "Education, Training & Learning & Development",
    shortName: "Education & L&D",
    icon: GraduationCap,
    tagline: "Corporate L&D academies, commercial training providers, professional certification institutes, and executive education.",
    operationalReality:
      "L&D departments and commercial training organizations are crushed under administrative workflows: course admissions enquiries, prerequisite validation, learner onboarding, grading routine assessments, and supporting struggling learners with course material questions.",
    leakagePoints: [
      "Prospective learners inquiring about executive or professional courses drop off due to 24–48hr enquiry reply delays",
      "Training coordinators spending 40% of their week managing registrations, scheduling cohorts, and issuing certificates",
      "Instructors spending hours answering repetitive curriculum, timetable, and assignment formatting questions",
      "Employees receiving passive video or slide training with zero safe, realistic conversational role-play",
      "Corporate training manuals and compliance handbooks buried in static PDFs that employees rarely reference"
    ],
    whatStratisionAutomates: [
      {
        systemName: "AI Training Agent",
        description: "Interactive scenario simulation that coaches employees through realistic customer objections, technical troubleshooting, and leadership conversations."
      },
      {
        systemName: "Workforce Intelligence",
        description: "Continuous tracking of team skill competence, knowledge gaps, and objective certification readiness based on internal standards."
      },
      {
        systemName: "Knowledge Assistant",
        description: "24/7 learner-facing course tutor that answers curriculum questions with precise citations to approved course texts."
      },
      {
        systemName: "Lead Qualification (Speed-to-Lead)",
        description: "Sub-60-second response to course brochure downloads and enrolment enquiries, qualifying career goals and booking admissions calls."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated learner onboarding, prerequisite document verification, cohort scheduling, and digital credential distribution."
      },
      {
        systemName: "Document Intelligence",
        description: "Parsing learner submissions, extracting assignment rubrics, and preparing pre-evaluated drafts for tutor review."
      }
    ],
    humanOversightBoundary:
      "All course certifications, final grading assessments, and credential awards remain exclusively governed by certified human educators and academic directors.",
    connectedSystems: ["Canvas", "Moodle", "Blackboard", "Docebo", "Cornerstone", "HubSpot LMS", "Credly"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "secondary",
      aiMarketing: "secondary",
      workforceTraining: "core",
      documentIntelligence: "core",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · L&D CORE",
      timestamp: "14:50 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "LEARNER ENROLMENT & SCENARIO COMPETENCE DOSSIER",
      subtitle: "Executive Academy: Professional Certification Cohort",
      fields: [
        { label: "Enquiry Response Time", value: "48 Seconds", badge: "Fast Lead Intake" },
        { label: "Prerequisite Credentials", value: "Undergraduate Degree & 3 Yrs Exp", badge: "Verified" },
        { label: "Scenario Simulation Score", value: "Module 3 Negotiation: 92%", badge: "Competence Checked" },
        { label: "Accreditation Progress", value: "Ready for Tutor Final Review", badge: "Rubric Matched" }
      ],
      summary:
        "Prospective learner qualified and onboarded. Scenario simulation completed with verified rubrics. Dossier submitted to course director for credential sign-off.",
      status: "SUBMITTED FOR TUTOR CERTIFICATION",
      verifiedBy: "L&D Training Engine • LMS Connected"
    }
  },
  {
    number: "12",
    id: "retail-consumer",
    name: "Retail & Consumer Businesses",
    shortName: "Retail & Consumer",
    icon: ShoppingBag,
    tagline: "Omnichannel retailers, luxury goods brands, specialist e-commerce, and high-ticket consumer services.",
    operationalReality:
      "Retail customer service teams face massive inquiry surges across chat, social, email, and phone regarding order tracking, product specifications, returns, and bespoke orders. High-ticket consumer enquiries (furniture, jewelry, bespoke installs) require immediate personal follow-up to convert.",
    leakagePoints: [
      "Customers seeking consultations for bespoke furniture, jewelry, or home installs abandon if not contacted immediately",
      "Customer support desks flooded with 'Where is my order?' and return policy questions, driving up support headcount",
      "Potential buyers experiencing checkout hesitation receive generic emails rather than helpful assisted outreach",
      "Store and online agents struggling to retrieve exact material, sizing, or warranty specs during customer calls"
    ],
    whatStratisionAutomates: [
      {
        systemName: "Speed-to-Lead",
        description: "Sub-60-second qualification and specialist appointment booking for high-ticket retail and custom order consultations."
      },
      {
        systemName: "AI Receptionist",
        description: "24/7 order tracking, return processing, product availability checks, and branch routing across voice, webchat, and WhatsApp."
      },
      {
        systemName: "AI Marketing Engine",
        description: "Behavior-triggered personalized product recommendations, replenishment alerts, and customer re-activation sequences."
      },
      {
        systemName: "Workflow Automation",
        description: "Automated return merchandise authorization (RMA) workflows, carrier tracking sync, and customer resolution routing."
      }
    ],
    humanOversightBoundary:
      "Complex customer dispute escalations, bespoke manufacturing approvals, and refund authorizations remain with retail managers.",
    connectedSystems: ["Shopify Plus", "Magento", "Salesforce Commerce Cloud", "Zendesk", "Gorgias", "Klaviyo"],
    systemCapabilities: {
      speedToLead: "core",
      aiReceptionist: "core",
      aiMarketing: "core",
      workforceTraining: "secondary",
      documentIntelligence: "secondary",
      workflowAutomation: "core"
    },
    artefact: {
      folio: "ILLUSTRATIVE ARCHITECTURAL AUDIT · RETAIL OPS",
      timestamp: "18:22 GMT",
      badge: "ILLUSTRATIVE OPERATIONAL EXAMPLE",
      title: "HIGH-TICKET CONSULTATION & ORDER STATUS DOSSIER",
      subtitle: "Customer Service & Showroom Consultation Intake",
      fields: [
        { label: "Consultation Request", value: "Bespoke Joinery & Installation", badge: "High-Ticket Lead" },
        { label: "Customer Qualification", value: "Budget £15k–£20k · London Home", badge: "Pre-Qualified" },
        { label: "Design Appointment", value: "Confirmed for Tuesday 14:00", badge: "Showroom Booked" },
        { label: "Routine Enquiries Handled", value: "Order #8921 Tracked in 2s", badge: "Automated" }
      ],
      summary:
        "High-value bespoke design inquiry captured and pre-qualified within 40 seconds. Routine courier tracking query resolved instantly without agent intervention.",
      status: "DESIGN CONSULTATION BRIEFED TO SHOWROOM",
      verifiedBy: "Retail Intake Core • CRM & Helpdesk Synced"
    }
  }
];

export const IndustriesHubPage: React.FC<IndustriesHubPageProps> = ({
  onOpenBooking
}) => {
  const [selectedIndustryForMatrix, setSelectedIndustryForMatrix] = useState<string>("professional-services");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Industries & Operating Environments | Stratision AI Systems";
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -84;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#080A10] text-[#F7F8FA] min-h-screen">
      {/* =====================================================================
          01. EDITORIAL HERO (Strictly Aligned with Homepage Visual System)
      ===================================================================== */}
      <section
        id="industries-hero"
        className="relative bg-[#090B10] text-[#F7F8FA] overflow-hidden border-b border-white/[0.07] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:pl-6 xl:pr-8 relative z-10 w-full">
          {/* Editorial Folio Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono mb-3 sm:mb-3.5 tracking-[0.15em] text-neutral-400 uppercase select-none"
          >
            <span className="text-neutral-300 font-semibold tracking-[0.16em]">
              STRATISION
            </span>
            <span className="text-white/20">/</span>
            <span className="text-neutral-400 tracking-[0.14em]">
              INDUSTRIES
            </span>
          </motion.div>

          {/* Balanced Editorial Spread: Two-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.72fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.78fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Narrative & CTAs */}
            <div>
              <h1
                className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-extrabold text-[#F7F8FA] tracking-[-0.035em] leading-[1.08] uppercase m-0 p-0"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                AI SYSTEMS DESIGNED AROUND THE REALITIES OF YOUR INDUSTRY.
              </h1>

              <div className="mt-4 sm:mt-5">
                <p
                  className="text-[16px] sm:text-[17.5px] lg:text-[18px] text-neutral-300 font-normal leading-[1.62] max-w-[620px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Every commercial organisation has different workflows, regulatory constraints, and legacy systems. Stratision designs and deploys custom, private AI systems that eliminate operational friction and automate routine administrative overhead — with human oversight built into every step.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-6 sm:mt-7 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    onClick={onOpenBooking}
                    className="px-7 sm:px-8 py-4 rounded-[2px] bg-[#F7F8FA] hover:bg-white text-[#090B10] font-medium text-[14.5px] sm:text-[15px] tracking-tight transition-colors duration-150 flex items-center justify-center gap-2.5 border border-white/90 shadow-sm cursor-pointer group"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 text-[#090B10]" />
                  </button>

                  <button
                    onClick={() => scrollToSection("industry-index")}
                    className="px-7 sm:px-8 py-4 rounded-[2px] bg-transparent hover:bg-white/[0.04] border border-white/[0.22] hover:border-white/[0.32] text-neutral-200 hover:text-white font-medium text-[14.5px] sm:text-[15px] tracking-tight transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer group"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <span>View Industry Index</span>
                    <span className="text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform duration-150">
                      ↓
                    </span>
                  </button>
                </div>

                <p
                  className="text-[12.5px] sm:text-[13px] text-neutral-400 font-normal leading-relaxed max-w-[520px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  A direct 20-minute discussion with an AI Systems Architect. No sales pitch. We’ll tell you frankly whether an AI system makes commercial sense for your business.
                </p>
              </div>
            </div>

            {/* Right Column: Physical Business Document Proof Artefact */}
            <div className="flex justify-start lg:justify-end w-full">
              <div className="bg-[#FAF9F5] text-[#141619] rounded-[1px] p-7 sm:p-8 shadow-[0_28px_65px_-18px_rgba(0,0,0,0.6),0_8px_24px_rgba(0,0,0,0.22)] border border-[#E5E2D8] relative w-full max-w-lg lg:max-w-[460px]">
                {/* Folio Bar */}
                <div className="flex items-baseline justify-between border-b border-black/[0.08] pb-3 mb-4 text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span className="font-semibold text-neutral-800">SECTOR ARCHITECTURAL AUDIT</span>
                  <span>COMMERCIAL SPEC</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200 font-semibold inline-block mb-1.5">
                      OPERATIONAL FOCUS
                    </span>
                    <h4
                      className="text-base font-bold text-neutral-900 leading-snug"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Bespoke System Deployment Across 12 Operating Environments
                    </h4>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Stratision deploys dedicated, private AI systems into existing operational stacks. Zero generic tools; every integration addresses specific revenue leakage, document fatigue, and administrative bottlenecks.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-black/[0.06] text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                      <span className="text-neutral-500 font-mono text-[11px]">01 Professional Services</span>
                      <span className="font-semibold text-neutral-900 font-mono text-[11px]">Audit & Contract Triage</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                      <span className="text-neutral-500 font-mono text-[11px]">02 Property & Real Estate</span>
                      <span className="font-semibold text-neutral-900 font-mono text-[11px]">Speed-to-Lead & Leases</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                      <span className="text-neutral-500 font-mono text-[11px]">03 Healthcare & Clinics</span>
                      <span className="font-semibold text-neutral-900 font-mono text-[11px]">24/7 Triage & Dictation</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                      <span className="text-neutral-500 font-mono text-[11px]">04 Logistics & Transport</span>
                      <span className="font-semibold text-neutral-900 font-mono text-[11px]">Customs & B/L Reconciler</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-black/[0.04]">
                      <span className="text-neutral-500 font-mono text-[11px]">05 Manufacturing & Eng.</span>
                      <span className="font-semibold text-neutral-900 font-mono text-[11px]">RFQ Costing & MTC Audits</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-neutral-500 font-mono text-[11px]">06–12 Additional Sectors</span>
                      <span className="font-semibold text-neutral-900 font-mono text-[11px]">Auto, Staffing, L&D, Retail</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Human-in-the-Loop Governance
                    </span>
                    <span>Private Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02. EDITORIAL INDUSTRY INDEX (All 12 Operating Environments)
      ===================================================================== */}
      <section
        id="industry-index"
        className="px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-24 border-b border-white/[0.07]"
      >
        {/* Section Header */}
        <div className="space-y-3 mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-neutral-400 uppercase select-none">
            <span className="text-neutral-300 font-semibold tracking-[0.16em]">02</span>
            <span className="text-white/20">/</span>
            <span className="text-neutral-400 tracking-[0.14em]">OPERATING SECTOR INDEX</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Twelve Operating Environments
          </h2>
          <p
            className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Select an operating environment below to examine its operational reality, margin leakage points, and the bespoke systems Stratision engineers to resolve them.
          </p>
        </div>

        {/* Index Table: Divided strictly by clean hairline borders */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="py-8 sm:py-9 transition-colors duration-200 hover:bg-white/[0.015] group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Left Column: Number, Icon, Name, Tagline (5 cols) */}
                  <div className="lg:col-span-5 space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400">
                      <span className="font-semibold text-blue-400">{sector.number}</span>
                      <span className="text-white/20">/</span>
                      <span className="text-neutral-400 uppercase tracking-wider">Sector Dossier</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[2px] bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {sector.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-md">
                      {sector.tagline}
                    </p>
                  </div>

                  {/* Middle Column: Key Systems Applied (5 cols) */}
                  <div className="lg:col-span-5 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Relevant Stratision Systems
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.whatStratisionAutomates.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-[1px] bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300"
                        >
                          {item.systemName}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                      {sector.operationalReality.slice(0, 140)}...
                    </p>
                  </div>

                  {/* Right Column: Restrained Action Interaction (2 cols) */}
                  <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-4">
                    <button
                      onClick={() => scrollToSection(`dossier-${sector.id}`)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-colors cursor-pointer group/btn"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <span>Explore Dossier</span>
                      <span className="text-blue-400 group-hover/btn:translate-y-0.5 transition-transform duration-150">
                        ↓
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          03. SYSTEM CATALOGUE: WHAT WE BUILD (Apple-Clean Light Surface Interruption)
      ===================================================================== */}
      <section
        id="systems-coverage"
        className="bg-[#F8F9FA] text-[#111317] py-20 sm:py-24 border-y border-[#E5E7EB]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.16em] text-neutral-500 uppercase select-none mb-3">
              <span className="font-semibold text-neutral-800">03</span>
              <span>/</span>
              <span>SYSTEM CATALOGUE</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-900 tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              WHAT WE BUILD
            </h2>
            <p
              className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed font-normal"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Six practical AI systems designed around the work your business already does.
            </p>
          </div>

          {/* Unified Light Catalogue Surface */}
          <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] divide-y divide-[#EFEFEF] overflow-hidden">
            {/* 01 // SPEED-TO-LEAD */}
            <Link
              to="/systems/speed-to-lead"
              className="group p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAFAFA] transition-colors block"
            >
              <div className="lg:w-1/3 flex items-start gap-4">
                <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold shrink-0 pt-0.5">
                  01 //
                </span>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    SPEED-TO-LEAD
                  </h3>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-1.5">
                <p className="text-sm sm:text-[14.5px] text-neutral-700 leading-relaxed font-normal">
                  Turn new enquiries into qualified opportunities before they go cold.
                </p>
                <p className="text-xs font-mono text-neutral-400">
                  Website enquiries · WhatsApp · Email · CRM follow-up · Lead qualification
                </p>
              </div>

              <div className="lg:w-auto flex items-center justify-end shrink-0 pt-2 lg:pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 group-hover:text-blue-600 transition-colors">
                  <span>Explore system</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* 02 // AI MARKETING SYSTEM */}
            <Link
              to="/systems/ai-marketing"
              className="group p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAFAFA] transition-colors block"
            >
              <div className="lg:w-1/3 flex items-start gap-4">
                <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold shrink-0 pt-0.5">
                  02 //
                </span>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    AI MARKETING SYSTEM
                  </h3>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-1.5">
                <p className="text-sm sm:text-[14.5px] text-neutral-700 leading-relaxed font-normal">
                  Turn marketing activity into a system that learns what is actually producing enquiries.
                </p>
                <p className="text-xs font-mono text-neutral-400">
                  Campaign analysis · Creative testing · Lead attribution · Performance reporting · Budget intelligence
                </p>
              </div>

              <div className="lg:w-auto flex items-center justify-end shrink-0 pt-2 lg:pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 group-hover:text-blue-600 transition-colors">
                  <span>Explore system</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* 03 // WORKFORCE INTELLIGENCE */}
            <Link
              to="/systems/workforce-intelligence"
              className="group p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAFAFA] transition-colors block"
            >
              <div className="lg:w-1/3 flex items-start gap-4">
                <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold shrink-0 pt-0.5">
                  03 //
                </span>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    WORKFORCE INTELLIGENCE
                  </h3>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-1.5">
                <p className="text-sm sm:text-[14.5px] text-neutral-700 leading-relaxed font-normal">
                  Give your team instant access to the information, processes and knowledge they need to do better work.
                </p>
                <p className="text-xs font-mono text-neutral-400">
                  Internal knowledge · SOP retrieval · Operational support · Management intelligence · Workflow assistance
                </p>
              </div>

              <div className="lg:w-auto flex items-center justify-end shrink-0 pt-2 lg:pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 group-hover:text-blue-600 transition-colors">
                  <span>Explore system</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* 04 // AI RECEPTIONIST */}
            <Link
              to="/systems/ai-receptionist"
              className="group p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAFAFA] transition-colors block"
            >
              <div className="lg:w-1/3 flex items-start gap-4">
                <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold shrink-0 pt-0.5">
                  04 //
                </span>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    AI RECEPTIONIST
                  </h3>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-1.5">
                <p className="text-sm sm:text-[14.5px] text-neutral-700 leading-relaxed font-normal">
                  Answer calls, qualify enquiries and route customers without leaving your team tied to the phone.
                </p>
                <p className="text-xs font-mono text-neutral-400">
                  Inbound calls · Appointment booking · Lead qualification · Call routing · Out-of-hours enquiries
                </p>
              </div>

              <div className="lg:w-auto flex items-center justify-end shrink-0 pt-2 lg:pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 group-hover:text-blue-600 transition-colors">
                  <span>Explore system</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* 05 // AI TRAINING & LEARNING SYSTEMS */}
            <Link
              to="/systems/ai-training"
              className="group p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAFAFA] transition-colors block"
            >
              <div className="lg:w-1/3 flex items-start gap-4">
                <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold shrink-0 pt-0.5">
                  05 //
                </span>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    AI TRAINING & LEARNING SYSTEMS
                  </h3>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-1.5">
                <p className="text-sm sm:text-[14.5px] text-neutral-700 leading-relaxed font-normal">
                  Train, onboard and assess people without adding another layer of administration.
                </p>
                <p className="text-xs font-mono text-neutral-400">
                  Employee onboarding · L&D programmes · Assessment support · Compliance training · Certification preparation
                </p>
              </div>

              <div className="lg:w-auto flex items-center justify-end shrink-0 pt-2 lg:pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 group-hover:text-blue-600 transition-colors">
                  <span>Explore system</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* 06 // DOCUMENT & WORKFLOW INTELLIGENCE */}
            <Link
              to="/systems"
              className="group p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#FAFAFA] transition-colors block"
            >
              <div className="lg:w-1/3 flex items-start gap-4">
                <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold shrink-0 pt-0.5">
                  06 //
                </span>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    DOCUMENT & WORKFLOW INTELLIGENCE
                  </h3>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-1.5">
                <p className="text-sm sm:text-[14.5px] text-neutral-700 leading-relaxed font-normal">
                  Turn the documents and repetitive processes your team deals with every day into structured workflows.
                </p>
                <p className="text-xs font-mono text-neutral-400">
                  Document extraction · Invoice processing · Contract review · Data entry · Operational workflows
                </p>
              </div>

              <div className="lg:w-auto flex items-center justify-end shrink-0 pt-2 lg:pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 group-hover:text-blue-600 transition-colors">
                  <span>Explore system</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>

          {/* Restrained Footnote */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-neutral-500 font-normal">
            <span>One business may need one system. Another may need several connected together.</span>
            <span className="text-neutral-700 font-medium">Start with the operational problem. We design the system around it.</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04. EDITORIAL CROSS-MAPPING MATRIX (Clean Light Operational Surface)
      ===================================================================== */}
      <section
        id="industry-matrix"
        className="bg-[#F8F9FA] text-[#111317] py-20 sm:py-24 border-b border-[#E5E7EB]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.16em] text-neutral-500 uppercase select-none mb-3">
              <span className="font-semibold text-neutral-800">04</span>
              <span>/</span>
              <span>CROSS-MAPPING MATRIX</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-900 tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              SYSTEM RELEVANCE BY OPERATING ENVIRONMENT
            </h2>
            <div className="mt-3 space-y-1 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              <p>See which Stratision systems are most relevant to your operating environment.</p>
              <p className="text-sm sm:text-base text-neutral-500">
                Select your sector to explore the operational problems we address, the systems involved, and where they connect.
              </p>
            </div>
          </div>

          {/* Clean Light Operational Surface Container */}
          <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* DESKTOP TABLE VIEW (Hidden on small mobile) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E7EB] bg-[#FBFBFC] text-neutral-500 font-mono uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6 font-semibold text-neutral-700">Operating Environment</th>
                    <th className="py-4 px-3 text-center font-medium">Speed-to-Lead</th>
                    <th className="py-4 px-3 text-center font-medium">AI Receptionist</th>
                    <th className="py-4 px-3 text-center font-medium">AI Marketing</th>
                    <th className="py-4 px-3 text-center font-medium">Workforce / L&D</th>
                    <th className="py-4 px-3 text-center font-medium">Doc Intelligence</th>
                    <th className="py-4 px-3 text-center font-medium">Workflow Auto</th>
                    <th className="py-4 px-6 text-right font-medium">Dossier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFEFEF] text-neutral-700">
                  {SECTORS.map((sector) => {
                    const caps = sector.systemCapabilities;
                    const isSelected = selectedIndustryForMatrix === sector.id;

                    const renderBadge = (level: "core" | "secondary" | "none") => {
                      if (level === "core") {
                        return (
                          <span
                            title="Primary Core System"
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white text-[10px] font-bold select-none"
                          >
                            ●
                          </span>
                        );
                      }
                      if (level === "secondary") {
                        return (
                          <span
                            title="Integrated Secondary Capability"
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-neutral-300 text-neutral-400 text-[10px] select-none"
                          >
                            ○
                          </span>
                        );
                      }
                      return <span className="text-neutral-300 font-mono select-none">—</span>;
                    };

                    return (
                      <tr
                        key={`matrix-${sector.id}`}
                        onClick={() => setSelectedIndustryForMatrix(sector.id)}
                        className={`transition-colors duration-150 cursor-pointer ${
                          isSelected ? "bg-[#F7F8FA]" : "hover:bg-[#FAFAFA]"
                        }`}
                      >
                        <td className="py-4 px-6 font-medium text-neutral-900 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <span className="text-neutral-400 font-mono text-[11px]">{sector.number}</span>
                            <span className="font-semibold text-[13.5px]">{sector.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-3 text-center">{renderBadge(caps.speedToLead)}</td>
                        <td className="py-4 px-3 text-center">{renderBadge(caps.aiReceptionist)}</td>
                        <td className="py-4 px-3 text-center">{renderBadge(caps.aiMarketing)}</td>
                        <td className="py-4 px-3 text-center">{renderBadge(caps.workforceTraining)}</td>
                        <td className="py-4 px-3 text-center">{renderBadge(caps.documentIntelligence)}</td>
                        <td className="py-4 px-3 text-center">{renderBadge(caps.workflowAutomation)}</td>
                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection(`dossier-${sector.id}`);
                            }}
                            className="text-xs font-semibold text-neutral-600 hover:text-blue-600 inline-flex items-center gap-1 transition-colors cursor-pointer"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            <span>View dossier</span>
                            <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* MOBILE COMPACT CARDS VIEW (Polished, no broken horizontal overflow) */}
            <div className="block md:hidden divide-y divide-[#EFEFEF]">
              {SECTORS.map((sector) => {
                const caps = sector.systemCapabilities;
                const primarySystems: string[] = [];
                const secondarySystems: string[] = [];

                if (caps.speedToLead === "core") primarySystems.push("Speed-to-Lead");
                else if (caps.speedToLead === "secondary") secondarySystems.push("Speed-to-Lead");

                if (caps.aiReceptionist === "core") primarySystems.push("AI Receptionist");
                else if (caps.aiReceptionist === "secondary") secondarySystems.push("AI Receptionist");

                if (caps.aiMarketing === "core") primarySystems.push("AI Marketing");
                else if (caps.aiMarketing === "secondary") secondarySystems.push("AI Marketing");

                if (caps.workforceTraining === "core") primarySystems.push("Workforce / L&D");
                else if (caps.workforceTraining === "secondary") secondarySystems.push("Workforce / L&D");

                if (caps.documentIntelligence === "core") primarySystems.push("Doc Intelligence");
                else if (caps.documentIntelligence === "secondary") secondarySystems.push("Doc Intelligence");

                if (caps.workflowAutomation === "core") primarySystems.push("Workflow Auto");
                else if (caps.workflowAutomation === "secondary") secondarySystems.push("Workflow Auto");

                return (
                  <div
                    key={`mobile-matrix-${sector.id}`}
                    className="p-5 space-y-3.5 hover:bg-[#FAFAFA] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-neutral-400 font-semibold">
                          {sector.number}
                        </span>
                        <h4
                          className="text-sm font-bold text-neutral-900 tracking-tight"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {sector.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => scrollToSection(`dossier-${sector.id}`)}
                        className="text-xs font-semibold text-neutral-600 hover:text-blue-600 inline-flex items-center gap-1 shrink-0 transition-colors pt-0.5"
                      >
                        <span>View dossier</span>
                        <span>→</span>
                      </button>
                    </div>

                    {/* Primary Systems */}
                    {primarySystems.length > 0 && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                          Primary Systems
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {primarySystems.map((sys, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-[4px] bg-[#111317] text-white text-[11px] font-medium inline-flex items-center gap-1"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              {sys}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Secondary Systems */}
                    {secondarySystems.length > 0 && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                          Secondary Capabilities
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {secondarySystems.map((sys, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-[4px] bg-[#F1F3F5] text-neutral-700 text-[11px] font-normal border border-[#E5E7EB]"
                            >
                              {sys}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Matrix Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 font-normal px-1">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-neutral-900 text-white text-[9px] font-bold">
                  ●
                </span>
                <span className="font-medium text-neutral-800">Primary Core System</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-neutral-300 text-neutral-400 text-[9px]">
                  ○
                </span>
                <span>Integrated Secondary Capability</span>
              </span>
              <span className="flex items-center gap-2 text-neutral-400">
                <span className="font-mono">—</span>
                <span>Not Typically Required</span>
              </span>
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Click any sector to review its complete operational dossier
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05. IN-DEPTH INDUSTRY DOSSIERS & PHYSICAL PROOF SECTIONS (12 Dossiers)
      ===================================================================== */}
      <section id="industry-dossiers" className="divide-y divide-white/[0.08]">
        {SECTORS.map((sector) => {
          const Icon = sector.icon;
          const art = sector.artefact;
          return (
            <div
              key={`dossier-${sector.id}`}
              id={`dossier-${sector.id}`}
              className="py-20 sm:py-24 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
            >
              {/* Dossier Header */}
              <div className="space-y-3 mb-10 sm:mb-14">
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-neutral-400 uppercase select-none">
                  <span className="text-blue-400 font-semibold">{sector.number}</span>
                  <span className="text-white/20">/</span>
                  <span className="text-neutral-400 tracking-[0.14em]">OPERATIONAL DOSSIER</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[2px] bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {sector.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-400 pt-0.5">
                        {sector.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenBooking}
                      className="px-5 py-2.5 min-h-[44px] rounded-[2px] bg-[#F7F8FA] hover:bg-white text-[#090B10] font-semibold text-xs sm:text-sm tracking-tight transition-colors cursor-pointer flex items-center gap-2"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <span>Discuss a {sector.shortName} System</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {sector.slug && (
                      <Link
                        to={`/industries/${sector.slug}`}
                        className="px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-[2px] bg-transparent hover:bg-white/[0.04] border border-white/[0.18] text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Full Details ↗
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Dossier Content Grid: 2 Columns (Operational Analysis + Illustrative Document Artefact) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left: Operational Reality, Friction & Stratision System (7 cols) */}
                <div className="lg:col-span-7 space-y-8">
                  {/* The Operational Reality */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      The Operational Reality
                    </span>
                    <p
                      className="text-base text-neutral-300 leading-relaxed font-normal"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {sector.operationalReality}
                    </p>
                  </div>

                  {/* Where Time, Revenue or Administrative Capacity Is Lost */}
                  <div className="p-6 rounded-[2px] bg-white/[0.02] border border-white/[0.07] space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-red-300/90 block">
                      Where Capacity, Time & Revenue Are Lost
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-normal">
                      {sector.leakagePoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-red-400 font-mono text-xs mt-0.5 shrink-0">✕</span>
                          <span className="leading-relaxed text-neutral-300">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Which Stratision Systems Address These Problems */}
                  <div className="p-6 rounded-[2px] bg-white/[0.02] border border-white/[0.07] space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block">
                      Which Stratision Systems Address These Problems
                    </span>
                    <div className="space-y-3 text-xs sm:text-sm text-neutral-200 font-normal">
                      {sector.whatStratisionAutomates.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <span className="font-semibold text-white font-mono text-[11.5px] mr-1.5">
                              [{item.systemName}]
                            </span>
                            <span className="text-neutral-300">{item.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Human Oversight & Connected Tools */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Human Oversight Boundary */}
                    <div className="p-4 rounded-[2px] bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Human Oversight Retained</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {sector.humanOversightBoundary}
                      </p>
                    </div>

                    {/* Core Systems Connected */}
                    <div className="p-4 rounded-[2px] bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-300">
                        <Layers className="w-4 h-4 text-blue-400" />
                        <span>Integrated Software Stacks</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {sector.connectedSystems.map((sys, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-[1px] bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300"
                          >
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Authentic Illustrative Physical Business Proof Document (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="bg-[#FAF9F5] text-[#141619] rounded-[1px] p-7 sm:p-8 shadow-[0_24px_55px_-15px_rgba(0,0,0,0.6),0_6px_20px_rgba(0,0,0,0.2)] border border-[#E5E2D8] relative w-full">
                    {/* Header Folio */}
                    <div className="flex items-baseline justify-between border-b border-black/[0.08] pb-3 mb-4 text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                      <span className="font-semibold text-neutral-900">{art.folio}</span>
                      <span>{art.timestamp}</span>
                    </div>

                    {/* Document Identification */}
                    <div className="space-y-1 mb-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 border border-blue-200 font-semibold inline-block">
                        {art.badge}
                      </span>
                      <h4
                        className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug pt-1"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {art.title}
                      </h4>
                      <p className="text-xs text-neutral-600 font-mono">
                        {art.subtitle}
                      </p>
                    </div>

                    {/* Structured Extraction Fields */}
                    <div className="space-y-2.5 py-4 border-y border-black/[0.06] text-xs">
                      {art.fields.map((f, i) => (
                        <div key={i} className="flex justify-between items-center py-1">
                          <span className="text-neutral-500 font-mono text-[11px]">{f.label}</span>
                          <div className="text-right">
                            <span className="font-semibold text-neutral-900 font-mono text-[11px] block">
                              {f.value}
                            </span>
                            {f.badge && (
                              <span className="text-[9px] font-mono text-neutral-500 block">
                                [{f.badge}]
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Document Summary & Status */}
                    <div className="pt-4 space-y-3">
                      <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                        {art.summary}
                      </p>

                      <div className="p-3 bg-neutral-100 rounded-[1px] border border-neutral-200 flex items-center justify-between text-[10px] font-mono">
                        <span className="font-semibold text-neutral-800">
                          {art.status}
                        </span>
                        <span className="text-emerald-700 font-medium">
                          ✓ Verified
                        </span>
                      </div>

                      <div className="text-[10px] font-mono text-neutral-500 text-right">
                        {art.verifiedBy}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =====================================================================
          06. STRATEGIC CTA (Direct Architectural Continuity with Homepage)
      ===================================================================== */}
      <section
        id="industries-cta"
        className="relative py-28 sm:py-36 lg:py-44 bg-[#06080F] border-t border-white/[0.08] text-slate-100 scroll-mt-24 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 sm:space-y-10">
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-neutral-400 uppercase select-none">
            <span className="text-neutral-300 font-semibold tracking-[0.16em]">
              STRATISION
            </span>
            <span className="text-white/20">/</span>
            <span className="text-neutral-400 tracking-[0.14em]">
              ARCHITECTURAL SCOPING
            </span>
          </div>

          <h2
            className="text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-[-0.04em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What could an AI system do inside your business?
          </h2>

          <p
            className="text-3xl sm:text-5xl lg:text-[64px] text-blue-300 font-bold tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let's find out.
          </p>

          <p
            className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A direct 20-minute discussion with an AI Systems Architect. We examine your current tools, workflows, and commercial bottlenecks — then tell you frankly what an AI system would look like in practice.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-9 py-4.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-base transition-all cursor-pointer shadow-[0_4px_32px_rgba(255,255,255,0.18)] hover:shadow-[0_6px_40px_rgba(255,255,255,0.28)] flex items-center gap-2.5 group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#080A10]" />
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-normal">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Direct Architect Call
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              No Sales Reps
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              100% Client IP Ownership
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
