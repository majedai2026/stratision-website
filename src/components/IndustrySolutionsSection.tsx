import React, { useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";

interface IndustrySolutionsSectionProps {
  onOpenBooking: () => void;
  onOpenBookingWithOffer?: (offerTitle: string) => void;
}

export interface IndustrySectorSpec {
  id: string;
  environmentCode: string;
  industryName: string;
  systemTitle: string;
  operationalFriction: {
    summary: string;
    details: string;
  };
  engineeredArchitecture: {
    specification: string;
    integrationPoints: string;
  };
  workflowSpecification: {
    intake: string;
    processing: string;
    dispatch: string;
  };
  systemCapability: {
    anchorStatement: string;
    coreDeliverables: string[];
  };
}

export const INDUSTRY_SECTOR_SPECS: IndustrySectorSpec[] = [
  {
    id: "recruitment",
    environmentCode: "ENV // 01",
    industryName: "Recruitment & Staffing",
    systemTitle: "AI Receptionist & Inbound Lead Engine",
    operationalFriction: {
      summary: "High-value candidate placements and client job briefs lost to 4+ hour consultant callback delays.",
      details: "Inbound enquiries arrive unstructured across phone, email, and WhatsApp while consultants are in interviews. Off-hours inquiries decay before pre-qualification.",
    },
    engineeredArchitecture: {
      specification: "Deterministic multi-channel conversational pipeline deployed across Phone, WhatsApp, and Webchat.",
      integrationPoints: "Bi-directional database integration synchronizing candidate profiles and CV attributes directly into Bullhorn and Vincere ATS platforms.",
    },
    workflowSpecification: {
      intake: "Candidate dials agency or submits brief; conversational agent captures role parameters, salary expectations, and notice period in real time.",
      processing: "Deterministic processing extracts structured candidate attributes against defined requisition criteria.",
      dispatch: "Pre-qualified candidate profile is created in the ATS and interview slots are scheduled directly into consultant availability calendars.",
    },
    systemCapability: {
      anchorStatement: "Captures and pre-qualifies candidate briefs in under 60 seconds so your consultants only speak with verified, ready-to-place talent.",
      coreDeliverables: [
        "Sub-60s multi-channel qualification across voice, chat, and SMS",
        "Deterministic candidate pre-screening against required certifications & salary",
        "Automated calendar booking into recruiter availability slots",
        "Direct bi-directional sync into Bullhorn, HubSpot, Salesforce, or Vincere",
      ],
    },
  },
  {
    id: "workforce",
    environmentCode: "ENV // 02",
    industryName: "Training & Workforce Development",
    systemTitle: "Workforce Intelligence Platform",
    operationalFriction: {
      summary: "Critical corporate knowledge lost during employee turnover and extended onboarding ramps.",
      details: "Static training manuals and Notion documentation remain unread. Senior personnel lose recurring capacity repeating foundational compliance and operational SOPs.",
    },
    engineeredArchitecture: {
      specification: "Private retrieval-augmented intelligence layer indexing proprietary company documentation, compliance manuals, and top-performer methodologies.",
      integrationPoints: "Hosted within private infrastructure enclaves with strict source-document citation constraints and zero public data retention.",
    },
    workflowSpecification: {
      intake: "Continuous ingestion and indexing of operational SOPs, policy updates, and compliance standards into a private vector repository.",
      processing: "Interactive scenario simulator presents staff with role-specific edge cases, testing protocol adherence and instant query resolution.",
      dispatch: "Competency evaluation telemetry updates internal employee profiles and flags systematic departmental knowledge gaps to leadership.",
    },
    systemCapability: {
      anchorStatement: "Turns training and tribal knowledge into a permanently accessible corporate coach that cuts onboarding ramp time by 60%.",
      coreDeliverables: [
        "Private SOP & compliance document ingestion with zero data leakage",
        "Interactive roleplay & scenario simulator with instant constructive feedback",
        "Departmental competency gap visibility for operational leadership",
        "Strict source-document citation rules constraining response generation",
      ],
    },
  },
  {
    id: "professional-services",
    environmentCode: "ENV // 03",
    industryName: "Professional Services",
    systemTitle: "Document Intelligence & Workflow Automation Pipeline",
    operationalFriction: {
      summary: "Senior professionals losing 15–20 hours per week on manual document reconciliation and repetitive data entry.",
      details: "Fee-earners spend billable hours manually cross-referencing multi-page PDF agreements, vendor invoices, statements of work, and ERP line items.",
    },
    engineeredArchitecture: {
      specification: "Multi-agent document parsing pipeline executing deterministic 3-way reconciliation against transactional accounting and ERP databases.",
      integrationPoints: "Bi-directional synchronization with SAP, NetSuite, and practice management databases with human-in-the-loop exception approval portals.",
    },
    workflowSpecification: {
      intake: "Multi-page commercial contracts, statements of work, and vendor invoices ingested via secure API dropzones.",
      processing: "Deterministic extraction engine extracts structured clauses, liability terms, and line-item amounts, flagging discrepancies against historical ERP records.",
      dispatch: "Validated accounting entries and contract summaries are populated automatically, routing flagged edge cases to senior partners for one-click approval.",
    },
    systemCapability: {
      anchorStatement: "Eliminates repetitive manual admin and document processing so your professionals focus purely on high-margin advisory and billable client work.",
      coreDeliverables: [
        "High-fidelity clause and data extraction on unstructured PDF contracts and invoices",
        "Automated 3-way reconciliation between purchase orders, invoices, and ERP records",
        "Human-in-the-loop exception approval portal for flagged commercial anomalies",
        "Dedicated deployment in isolated private cloud enclaves with full audit logging",
      ],
    },
  },
];

export const IndustrySolutionsSection: React.FC<IndustrySolutionsSectionProps> = ({
  onOpenBooking,
  onOpenBookingWithOffer,
}) => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>("recruitment");

  const currentSector =
    INDUSTRY_SECTOR_SPECS.find((s) => s.id === selectedSectorId) || INDUSTRY_SECTOR_SPECS[0];

  return (
    <section id="industries-section" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>05 — SECTOR ARCHITECTURES</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">OPERATIONAL BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Industry Operating Environments.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Purpose-built systems engineering for high-friction industry workflows. Inspect the exact operational friction, engineered architecture, and workflow transformation for each domain.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>ARCHITECTURAL BRIEFING</span>
              <span>DOMAIN-SPECIFIC SPECIFICATION</span>
            </div>
          </div>
        </div>

        {/* Sector Selector Rail (Compact, Bordered, Editorial Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-800 bg-[#080C15]">
          {INDUSTRY_SECTOR_SPECS.map((sector, index) => {
            const isSelected = selectedSectorId === sector.id;

            return (
              <button
                key={sector.id}
                id={`sector-selector-${sector.id}`}
                onClick={() => setSelectedSectorId(sector.id)}
                className={`p-5 text-left transition-all cursor-pointer border-b md:border-b-0 ${
                  index !== INDUSTRY_SECTOR_SPECS.length - 1 ? "md:border-r border-slate-800" : ""
                } ${
                  isSelected
                    ? "bg-[#0B101D] border-l-4 md:border-l-0 md:border-t-2 border-blue-500"
                    : "bg-[#050811] hover:bg-[#080C15] opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`${isSelected ? "text-blue-400 font-bold" : "text-slate-500"}`}>
                    {sector.environmentCode}
                  </span>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 border ${
                    isSelected
                      ? "bg-blue-950/60 text-blue-300 border-blue-800/80 font-bold"
                      : "bg-black text-slate-600 border-slate-900"
                  }`}>
                    {isSelected ? "ACTIVE BRIEFING" : "INSPECT"}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-white tracking-tight">
                    {sector.industryName}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono line-clamp-1">
                    {sector.systemTitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            SPECIES 03: THE INSTITUTIONAL SYSTEMS ARCHITECTURE WORKSTATION
            (One Unified Technical & Strategic Specification Surface)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Workstation Specification Header */}
          <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span className="uppercase text-slate-300 font-bold tracking-wider">
                  SYSTEM SPECIFICATION: {currentSector.environmentCode}
                </span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400 uppercase">{currentSector.industryName}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                {currentSector.systemTitle}
              </h3>
            </div>

            <button
              onClick={() => {
                if (onOpenBookingWithOffer) {
                  onOpenBookingWithOffer(currentSector.systemTitle);
                } else {
                  onOpenBooking();
                }
              }}
              className="shrink-0 px-5 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all self-start sm:self-auto"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Main Specification Body (Structured Editorial / Architectural Document) */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Tier 1 & Tier 2: Friction Audit vs. Engineered Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-10 border-b border-slate-800/80">
              
              {/* 01. Operational Friction Audit */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-500"></span>
                  <span>01. OPERATIONAL FRICTION AUDIT</span>
                </div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-slate-100 leading-snug">
                  {currentSector.operationalFriction.summary}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {currentSector.operationalFriction.details}
                </p>
              </div>

              {/* 02. Engineered System Architecture */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400"></span>
                  <span>02. ENGINEERED SYSTEM ARCHITECTURE</span>
                </div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
                  {currentSector.engineeredArchitecture.specification}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentSector.engineeredArchitecture.integrationPoints}
                </p>
              </div>

            </div>

            {/* Tier 3: Operational Workflow Specification (Process Sequence without line diagrams) */}
            <div className="space-y-4 pb-10 border-b border-slate-800/80">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span>03. OPERATIONAL WORKFLOW SPECIFICATION</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                
                <div className="p-4 bg-black/40 border border-slate-800/80 space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                    STAGE 01 // INTAKE & INGESTION
                  </div>
                  <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                    {currentSector.workflowSpecification.intake}
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-slate-800/80 space-y-2">
                  <div className="text-[10px] text-blue-400 uppercase tracking-wider font-bold">
                    STAGE 02 // DETERMINISTIC PROCESSING
                  </div>
                  <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                    {currentSector.workflowSpecification.processing}
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-slate-800/80 space-y-2">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    STAGE 03 // DISPATCH & EXECUTION
                  </div>
                  <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                    {currentSector.workflowSpecification.dispatch}
                  </p>
                </div>

              </div>
            </div>

            {/* Tier 4: System Capability & Anchor Deliverables */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              
              {/* Primary Anchor Statement */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  04. SYSTEM CAPABILITY
                </div>
                <blockquote className="p-5 bg-black/60 border-l-2 border-blue-500 font-serif italic text-base sm:text-lg text-white leading-relaxed">
                  "{currentSector.systemCapability.anchorStatement}"
                </blockquote>
              </div>

              {/* Core Deliverable Specifications */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  ENGINEERED SPECIFICATIONS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {currentSector.systemCapability.coreDeliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-black/30 border border-slate-800/70 flex items-start gap-2.5 text-slate-300 font-sans"
                    >
                      <span className="text-blue-400 font-mono font-bold text-xs mt-0.5">↳</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Architectural Security & Deployment Footer (Bounded Governance Framing) */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>PRIVATE INFRASTRUCTURE ENCLAVES · ENTERPRISE GOVERNANCE ALIGNED</span>
            </div>
            <div className="text-slate-500">
              CLIENT-OWNED WORKFLOW IP · PRIVATE MODEL ORCHESTRATION
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
