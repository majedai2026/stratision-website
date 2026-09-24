import React, { useState } from "react";
import { ArrowRight, ClipboardList, AlertTriangle, Cpu, Layers } from "lucide-react";

interface PainPointsSectionProps {
  onOpenBooking: () => void;
  onOpenBlueprintWithPainPoint?: (painPointTitle: string) => void;
  activePainPointId?: string;
}

export interface LineItem {
  code: string;
  title: string;
  pathology: string;
  intervention: string;
  integrations: string[];
}

export interface DepartmentCohort {
  id: string;
  code: string;
  name: string;
  summary: string;
  classification: string;
  lineItems: LineItem[];
}

export const DEPARTMENT_COHORTS: DepartmentCohort[] = [
  {
    id: "commercial",
    code: "01",
    name: "COMMERCIAL & REVENUE OPERATIONS",
    summary: "Lead qualification, pipeline velocity & proposal overheads",
    classification: "LEAD DECAY, PROPOSAL SCOPING OVERHEAD & PIPELINE VISIBILITY",
    lineItems: [
      {
        code: "01.1",
        title: "INBOUND QUALIFICATION LATENCY & LEAD DECAY",
        pathology:
          "High-intent inbound inquiries arriving off-hours or during consultant meetings sit unaddressed for hours. Response latency degrades qualification rates and allows prospects to engage competitors before discovery calls occur.",
        intervention:
          "Multi-channel conversational intake pipeline executing deterministic parameter extraction (budget, timeline, scope) in sub-60 seconds, scheduling calendar slots directly for verified leads.",
        integrations: [
          "Bullhorn ATS",
          "HubSpot CRM",
          "Salesforce",
          "WhatsApp Business API",
          "Microsoft 365 / Google Calendar",
        ],
      },
      {
        code: "01.2",
        title: "PROPOSAL COMPILATION & SCOPING OVERHEAD",
        pathology:
          "Senior commercial personnel spend billable hours manually compiling bespoke scopes of work, extracting historical rate cards, and re-keying standard commercial terms across PDF documents.",
        intervention:
          "Parameterized scope-generation engine that ingests structured discovery notes and populates standardized, compliance-checked client proposals with approved rate structures.",
        integrations: [
          "Enterprise CPQ Systems",
          "Google Docs / Microsoft Word API",
          "Private Document Enclaves",
        ],
      },
      {
        code: "01.3",
        title: "CRM HYGIENE & FORECAST RECONCILIATION",
        pathology:
          "Account executives irregularly update CRM deal stages. Pipeline visibility suffers from missing meeting summaries, lost correspondence context, and unlogged client touchpoints.",
        intervention:
          "Passive meeting and correspondence ingestion engine that summarizes interactions, extracts next steps, and updates CRM pipeline deal stages without manual data entry.",
        integrations: [
          "Microsoft Exchange / Gmail API",
          "Fireflies / Zoom Transcription Webhooks",
          "Core CRM Repositories",
        ],
      },
    ],
  },
  {
    id: "delivery",
    code: "02",
    name: "SERVICE DELIVERY & OPERATIONS",
    summary: "Document processing, knowledge retrieval & onboarding ramps",
    classification: "DOCUMENT RECONCILIATION, KNOWLEDGE RETRIEVAL & CLIENT ONBOARDING",
    lineItems: [
      {
        code: "02.1",
        title: "UNSTRUCTURED DOCUMENT RECONCILIATION",
        pathology:
          "Operational staff spend recurring hours manually cross-referencing vendor invoices, complex statements of work, and supplier receipts against internal ERP database records, creating payment and delivery bottlenecks.",
        intervention:
          "Multi-agent document parsing pipeline executing deterministic extraction and automated 3-way reconciliation against ERP line items, routing discrepancies to exception queues for one-click approval.",
        integrations: [
          "SAP ERP",
          "NetSuite",
          "Vincere Database",
          "Secure API Dropzones",
          "Practice Management Records",
        ],
      },
      {
        code: "02.2",
        title: "TRIBAL KNOWLEDGE FRAGMENTATION & ONBOARDING RAMPS",
        pathology:
          "Critical operational methodologies and compliance protocols are trapped in unread Notion pages or senior staff memories, extending new hire onboarding ramps and repeating foundational mistakes.",
        intervention:
          "Private retrieval-augmented knowledge layer indexing verified standard operating procedures (SOPs) with strict source-document citation constraints, testing competency via interactive scenario roleplay.",
        integrations: [
          "Private Vector Repositories",
          "Internal Document Enclaves",
          "Confluence",
          "Notion",
          "Policy Databases",
        ],
      },
      {
        code: "02.3",
        title: "MANUAL CLIENT ONBOARDING & DATA GATHERING",
        pathology:
          "Client onboarding relies on fragmented email threads, manual KYC/document requests, and manual tracking spreadsheets, causing multi-week operational kickoff delays and client friction.",
        intervention:
          "Automated intake state machine with structured document collection portals, deterministic validation checks, and automatic kickoff notifications.",
        integrations: [
          "Client Portals",
          "Cloud Storage APIs",
          "Practice Management Systems",
          "Webhook Gateways",
        ],
      },
    ],
  },
  {
    id: "governance",
    code: "03",
    name: "EXECUTIVE GOVERNANCE & OVERSIGHT",
    summary: "Reporting latency, cross-silo visibility & compliance telemetry",
    classification: "CROSS-DEPARTMENTAL VISIBILITY, COMPLIANCE AUDITING & EXECUTIVE CAPACITY",
    lineItems: [
      {
        code: "03.1",
        title: "CROSS-DEPARTMENTAL REPORTING LATENCY",
        pathology:
          "Leadership teams spend the first week of every month manually pulling data from disparate CRM, ERP, and project tracking tools to compile operational performance reports.",
        intervention:
          "Automated cross-departmental data synthesis pipeline aggregating telemetry across all business units into structured weekly executive briefing dossiers.",
        integrations: [
          "Data Warehouses (Snowflake / BigQuery)",
          "Core ERPs",
          "Executive Slack / Email Gateways",
        ],
      },
      {
        code: "03.2",
        title: "REGULATORY & CONTRACTUAL COMPLIANCE AUDIT BLIND SPOTS",
        pathology:
          "Compliance reviews occur reactively or periodically, leaving long operational windows where deviations from regulatory or contractual standards go undetected.",
        intervention:
          "Continuous operational telemetry monitoring contract terms, security protocol adherence, and audit trails against defined compliance baselines.",
        integrations: [
          "SIEM / Audit Logs",
          "Contract Repositories",
          "Enterprise Security Gateways",
        ],
      },
      {
        code: "03.3",
        title: "EXECUTIVE CAPACITY DRAIN ON ADMINISTRATIVE COORDINATION",
        pathology:
          "Managing Directors and C-suite leaders spend recurring capacity resolving operational exceptions, reviewing routine approvals, and coordinating basic cross-functional handoffs.",
        intervention:
          "Tiered escalation triage engine that autonomously resolves standard threshold workflows while packaging non-standard exceptions with full context for one-click approval.",
        integrations: [
          "Executive Messaging Channels",
          "Human-in-the-Loop Approval Portals",
          "Workflow Orchestrators",
        ],
      },
    ],
  },
];

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenBooking }) => {
  const [activeCohortId, setActiveCohortId] = useState<string>("commercial");

  const activeCohort =
    DEPARTMENT_COHORTS.find((c) => c.id === activeCohortId) || DEPARTMENT_COHORTS[0];

  return (
    <section id="problem-matrix" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>07 — OPERATIONAL BOTTLENECK AUDIT</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">DEPARTMENTAL DIAGNOSTIC LEDGER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Enterprise Operational Bottleneck Audit.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Forensic Mapping of Operational Friction Points to Deterministic Systems Interventions.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>FORENSIC AUDIT DOSSIER</span>
              <span>ORGANISATIONAL PATHOLOGY</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: THE DEPARTMENTAL DIAGNOSTIC LEDGER
            (Institutional Forensic Audit Ledger & Line-Item Pathology Matrix)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Console Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <ClipboardList className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold text-white uppercase tracking-wider">
                DEPARTMENTAL FRICTION AUDIT & INTERVENTION DOSSIER
              </span>
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">
              THREE-COHORT OPERATIONAL MATRIX
            </div>
          </div>

          {/* Departmental Cohort Selector Rail */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-800 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-[#060913]">
            {DEPARTMENT_COHORTS.map((cohort) => {
              const isActive = activeCohort.id === cohort.id;
              return (
                <button
                  key={cohort.id}
                  id={`cohort-btn-${cohort.id}`}
                  onClick={() => setActiveCohortId(cohort.id)}
                  className={`p-5 sm:p-6 text-left transition-all cursor-pointer relative ${
                    isActive
                      ? "bg-[#0B101D] text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                  }`}
                >
                  {/* Top Active Architectural Indicator */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500" />
                  )}

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                          isActive ? "text-blue-400" : "text-slate-400"
                        }`}
                      >
                        COHORT // {cohort.code}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                          ACTIVE AUDIT
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-white tracking-tight">
                      {cohort.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans line-clamp-1">
                      {cohort.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Ledger Excerpt Sheet */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-10 bg-[#070A12]">
            
            {/* Dossier Header Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400"></span>
                  <span>DOSSIER EXCERPT // COHORT {activeCohort.code}: {activeCohort.name}</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  CLASSIFICATION: {activeCohort.classification}
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider shrink-0 bg-slate-900 px-3 py-1.5 border border-slate-800">
                3 CRITICAL LINE ITEMS IDENTIFIED
              </div>
            </div>

            {/* Line Items List */}
            <div className="space-y-10">
              {activeCohort.lineItems.map((item, idx) => (
                <div
                  key={item.code}
                  className="space-y-6 pb-10 border-b border-slate-800/80 last:border-b-0 last:pb-0"
                >
                  {/* Line Item Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-800 text-slate-200 border border-slate-700">
                        LINE ITEM // {item.code}
                      </span>
                      <h4 className="text-sm sm:text-base font-serif font-bold text-white tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* 2-Column Pathology & Intervention Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Operational Pathology */}
                    <div className="lg:col-span-5 space-y-2 p-5 bg-[#0A0E1A] border border-slate-800/80">
                      <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-rose-400">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>OPERATIONAL PATHOLOGY</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {item.pathology}
                      </p>
                    </div>

                    {/* Right: Engineered System Intervention & Surfaces */}
                    <div className="lg:col-span-7 space-y-4 p-5 bg-[#090D18] border border-slate-800/80">
                      
                      {/* Intervention */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>ENGINEERED SYSTEM INTERVENTION</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                          {item.intervention}
                        </p>
                      </div>

                      {/* Target Integration Surfaces */}
                      <div className="pt-3 border-t border-slate-800/80 space-y-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          <Layers className="w-3 h-3 text-slate-400" />
                          <span>TARGET INTEGRATION SURFACE:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.integrations.map((surface, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-mono text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1"
                            >
                              ↳ {surface}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Architectural Security & Audit Footer */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>GRANULAR PATHOLOGY MAPPING · DETERMINISTIC SYSTEM INTERVENTIONS</span>
            </div>
            <div className="text-slate-500">
              ENTERPRISE INTEGRATION SURFACES · PRIVATE MODEL ORCHESTRATION
            </div>
          </div>

        </div>

        {/* Strategic Call to Action */}
        <div className="p-6 sm:p-8 bg-[#080C15] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              OPERATIONAL FRICTION AUDIT
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight font-serif">
              Audit Operational Bottlenecks in Your Enterprise
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              Schedule an operational bottleneck audit with senior systems engineers to isolate manual decay points and blueprint deterministic replacements for your commercial, delivery, or governance teams.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-sm"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
