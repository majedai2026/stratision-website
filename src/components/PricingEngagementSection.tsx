import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, FileCheck, Layers, Landmark } from "lucide-react";

export interface CommercialModel {
  id: string;
  modelNumber: string;
  modelCode: string;
  title: string;
  subtitle: string;
  scope: string[];
  deliveryStructure: string[];
  milestoneHandover: string[];
  assetGovernanceTerms: string[];
  ctaLabel: string;
}

export const COMMERCIAL_MODELS: CommercialModel[] = [
  {
    id: "model-01",
    modelNumber: "01",
    modelCode: "MODEL 01 // BESPOKE SPRINT",
    title: "Single-Department Rapid Staging",
    subtitle: "Targeted architectural discovery and isolated pipeline staging for one high-friction operational bottleneck.",
    scope: [
      "1 Target operational friction bottleneck (e.g. Inbound Intake or Document Triage)",
      "Single-department operational and data boundary",
      "Forensic workflow discovery & typed payload schema specification",
    ],
    deliveryStructure: [
      "Phased Stage 01–02 Discovery & Staging Protocol",
      "Isolated private sandbox / staging deployment",
    ],
    milestoneHandover: [
      "Milestone Verification Gate 01 (Blueprint review & schema freeze sign-off)",
      "Staging deployment walkthrough & baseline engineering runbook",
    ],
    assetGovernanceTerms: [
      "Bespoke orchestration assets delivered according to agreed engagement terms.",
      "Designed to minimize vendor lock-in.",
    ],
    ctaLabel: "Schedule Sprint Scoping",
  },
  {
    id: "model-02",
    modelNumber: "02",
    modelCode: "MODEL 02 // PRODUCTION PIPELINE",
    title: "Cross-Functional Orchestration",
    subtitle: "Multi-agent deterministic pipeline engineering across core enterprise integrations and departmental boundaries.",
    scope: [
      "Multi-agent cross-functional orchestration pipeline",
      "3–5 Core enterprise integrations (as a defined scope characteristic)",
      "Multi-department data boundaries with automated exception routing",
    ],
    deliveryStructure: [
      "Complete Stage 01–03 Engineering Execution Protocol",
      "Dedicated single-tenant VPC or private enclave staging",
    ],
    milestoneHandover: [
      "Formal Verification Gates 01, 02, and 03 sign-off sequence",
      "Production integration walkthrough, operator training & runbook handover",
    ],
    assetGovernanceTerms: [
      "Bespoke orchestration assets and deployment documentation delivered according to agreed engagement terms.",
      "Designed to minimize vendor lock-in.",
    ],
    ctaLabel: "Schedule Pipeline Scoping",
  },
  {
    id: "model-03",
    modelNumber: "03",
    modelCode: "MODEL 03 // ENTERPRISE SYSTEMS PROGRAM",
    title: "Multi-Workstream Enterprise Orchestration",
    subtitle: "Enterprise-wide systems program across multiple operational divisions with dedicated client-governed infrastructure.",
    scope: [
      "Enterprise-wide systems program across multiple operational divisions",
      "Multi-workstream architecture across complex legacy and custom API mesh",
      "Enterprise telemetry, audit repositories, and governance controls",
    ],
    deliveryStructure: [
      "Staged multi-workstream execution protocol with parallel engineering tracks",
      "Dedicated VPC or private enclave topology configured according to agreed requirements",
    ],
    milestoneHandover: [
      "Phased workstream milestone verification gates & executive reviews",
      "Comprehensive runbook transfer, operational handover & optional support SLA",
    ],
    assetGovernanceTerms: [
      "Bespoke architecture and orchestration assets delivered according to agreed engagement terms.",
      "Designed to minimize vendor lock-in.",
    ],
    ctaLabel: "Schedule Program Scoping",
  },
];

export interface ComparisonDimension {
  dimension: string;
  traditionalConsulting: string;
  saasWrappers: string;
  stratisionFramework: string;
}

export const COMPARISON_DIMENSIONS: ComparisonDimension[] = [
  {
    dimension: "Commercial Structure",
    traditionalConsulting: "Billed on allocated hours and resource utilization.",
    saasWrappers: "Recurring subscription per user seat license.",
    stratisionFramework: "Milestone-gated SOW tied to verified delivery stages.",
  },
  {
    dimension: "Scope & Commitment",
    traditionalConsulting: "Variable, open-ended discovery and implementation scope.",
    saasWrappers: "Standardized feature set across shared multi-tenant releases.",
    stratisionFramework: "Fixed, scope-governed deliverables per phase.",
  },
  {
    dimension: "Code & Asset Terms",
    traditionalConsulting: "Retained by integrator or custom partner contractual terms.",
    saasWrappers: "Vendor-hosted proprietary platform with zero asset transfer.",
    stratisionFramework: "Bespoke orchestration assets delivered according to agreed terms.",
  },
  {
    dimension: "Deployment Boundary",
    traditionalConsulting: "Variable across client or partner-managed environments.",
    saasWrappers: "Multi-tenant vendor cloud with shared runtime custody.",
    stratisionFramework: "Dedicated client-governed infrastructure appropriate to agreed scope.",
  },
  {
    dimension: "Economic Alignment",
    traditionalConsulting: "Revenue correlated with hours expended on the account.",
    saasWrappers: "Revenue correlated with headcount seat expansion.",
    stratisionFramework: "Milestone payments tied to agreed engineering deliverables and verification gates.",
  },
];

interface PricingEngagementSectionProps {
  onOpenBooking: () => void;
  onOpenBookingWithTier?: (tierName: string) => void;
}

export const PricingEngagementSection: React.FC<PricingEngagementSectionProps> = ({
  onOpenBooking,
  onOpenBookingWithTier,
}) => {
  const handleSelectModel = (modelTitle: string) => {
    if (onOpenBookingWithTier) {
      onOpenBookingWithTier(modelTitle);
    } else {
      onOpenBooking();
    }
  };

  return (
    <section id="commercial-architecture" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>10 — COMMERCIAL ARCHITECTURE</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">CAPITAL ALLOCATION & ENGAGEMENT MODELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Institutional Commercial Engagement Framework.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Milestone-Gated Commercial Delivery: Defined Engineering Scopes, Bespoke Asset Assignment, and Scope-Governed Engagements.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>COMMERCIAL SPECIFICATION</span>
              <span>SCOPE GOVERNANCE</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: INSTITUTIONAL COMMERCIAL ENGAGEMENT FRAMEWORK
            (Single Continuous Architectural Enclosure: 3 Models + Fiduciary Matrix)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Document Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 bg-blue-400"></span>
              <span className="font-bold text-white uppercase tracking-wider">
                COMMERCIAL SPECIFICATION: ENGAGEMENT-FRAMEWORK-2026
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>STATUS: SCOPE-GOVERNED MILESTONE STRUCTURES</span>
            </div>
          </div>

          {/* 3 Commercial Engagement Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {COMMERCIAL_MODELS.map((model) => (
              <div
                key={model.id}
                className="p-6 sm:p-8 bg-[#080C15] flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  
                  {/* Model Header */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400"></span>
                      <span>{model.modelCode}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white tracking-tight leading-snug">
                      {model.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {model.subtitle}
                    </p>
                  </div>

                  {/* 01 // Commercial Scope */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      01 // COMMERCIAL SCOPE
                    </div>
                    <div className="space-y-1.5">
                      {model.scope.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-200">
                          <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 02 // Delivery Structure */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      02 // DELIVERY STRUCTURE
                    </div>
                    <div className="space-y-1.5">
                      {model.deliveryStructure.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                          <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 03 // Milestone & Handover */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      03 // MILESTONE & HANDOVER
                    </div>
                    <div className="space-y-1.5">
                      {model.milestoneHandover.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                          <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 04 // Asset & Governance Terms */}
                  <div className="p-4 bg-[#0A0E1A] border border-slate-800/90 space-y-2">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      04 // ASSET & GOVERNANCE TERMS
                    </div>
                    <div className="space-y-1 text-xs font-mono text-slate-300 leading-relaxed">
                      {model.assetGovernanceTerms.map((term, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 text-xs">■</span>
                          <span className="text-[11px]">{term}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Model CTA Action */}
                <div className="pt-6 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleSelectModel(model.title)}
                    className="w-full py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
                  >
                    <span>{model.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Subordinate Fiduciary Commercial Comparison Matrix */}
          <div className="border-t border-slate-800 bg-[#070A12] p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/80 pb-4">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  STRUCTURAL COMMERCIAL COMPARISON // ENGAGEMENT MODEL EVALUATION
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">
                  Comparative analysis of capital allocation mechanics, asset governance, and risk alignment across engagement structures.
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                FIDUCIARY EVALUATION
              </span>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                    <th className="py-3 px-4 font-semibold w-1/4">Commercial Dimension</th>
                    <th className="py-3 px-4 font-semibold w-1/4 text-slate-400">Time & Materials (Consulting)</th>
                    <th className="py-3 px-4 font-semibold w-1/4 text-slate-400">Per-Seat Software (SaaS)</th>
                    <th className="py-3 px-4 font-semibold w-1/4 text-blue-400 bg-blue-950/30 border-l border-r border-blue-900/40">Stratision Framework</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-sans text-slate-300">
                  {COMPARISON_DIMENSIONS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-medium text-slate-200 bg-slate-950/40">
                        {row.dimension}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">
                        {row.traditionalConsulting}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">
                        {row.saasWrappers}
                      </td>
                      <td className="py-3.5 px-4 text-slate-100 font-medium bg-blue-950/20 border-l border-r border-blue-900/40">
                        {row.stratisionFramework}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Provenance & Governance Footer */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>MILESTONE-GATED COMMERCIAL DELIVERY · SCOPE-GOVERNED ENGAGEMENT</span>
            </div>
            <div className="text-slate-500">
              BESPOKE ASSETS DELIVERED ACCORDING TO AGREED TERMS · DESIGNED TO MINIMIZE VENDOR LOCK-IN
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
