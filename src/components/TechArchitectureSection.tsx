import React from "react";
import { ArrowRight, Terminal } from "lucide-react";

interface TechArchitectureSectionProps {
  onOpenBooking: () => void;
}

export interface GovernancePillar {
  pillarCode: string;
  title: string;
  subhead: string;
  specifications: string[];
  standards: string[];
}

export const GOVERNANCE_PILLARS: GovernancePillar[] = [
  {
    pillarCode: "01",
    title: "PRIVATE INFRASTRUCTURE & DATA BOUNDARIES",
    subhead: "Tenant Isolation & Boundary Controls",
    specifications: [
      "Deployments architected for client-designated private cloud environments or isolated VPC configurations (AWS, Azure, GCP).",
      "Single-tenant vector repository architectures designed to prevent multi-tenant cross-contamination.",
      "LLM orchestration configured with enterprise zero-retention API agreements to restrict vendor training on client data and prompt inputs.",
    ],
    standards: [
      "Dedicated VPC peering and private subnet isolation capabilities",
      "Commercial zero-retention data processing agreements (DPA/BAA)",
      "Isolated vector database instances with strict tenant boundaries",
    ],
  },
  {
    pillarCode: "02",
    title: "DETERMINISTIC EXECUTION & GUARDRAILS",
    subhead: "State Machine Validation & Fallback Controls",
    specifications: [
      "Multi-agent pipelines structured as finite state machines with strict schema validation at every transition gate.",
      "Source-constrained retrieval architectures requiring strict document attribution before response generation.",
      "Defined deterministic fallback paths and automated human escalation routing for out-of-boundary payloads.",
    ],
    standards: [
      "Typed JSON schema validation on all inputs, outputs, and tool calls",
      "Source-grounded retrieval constraints to minimize unstructured hallucinations",
      "Human-in-the-loop escalation queues for exceptions and edge cases",
    ],
  },
  {
    pillarCode: "03",
    title: "ENTERPRISE INTEGRATION & SYSTEM INTEROPERABILITY",
    subhead: "Bi-Directional Database Sync & Audit Logging",
    specifications: [
      "Native API and webhook orchestration connecting directly into core transactional systems (Bullhorn, Vincere, SAP, NetSuite, Salesforce).",
      "Rate-limited bi-directional synchronization protocols preventing transactional race conditions.",
      "Comprehensive transactional logging recording API payloads, retrieval metadata, and audit records.",
    ],
    standards: [
      "Secure REST/GraphQL endpoint orchestration with token-based authentication",
      "Event-driven webhook ingestion with automatic retry and rate-limiting",
      "Structured transactional audit logs for operational traceability",
    ],
  },
  {
    pillarCode: "04",
    title: "CLIENT IP, OWNERSHIP & DEPLOYMENT CONTROL",
    subhead: "Source Code Transfer & Sovereign Operation",
    specifications: [
      "Contractual assignment of all custom pipeline code, prompt templates, vector embeddings, and workflow mappings to the client.",
      "Systems engineered to execute independently within client infrastructure without required runtime dependency on Stratision proprietary hosting.",
      "Transparent architecture documentation enabling client engineering teams to maintain, audit, and extend deployed workflows.",
    ],
    standards: [
      "Complete custom orchestration source code and artifact delivery",
      "Independent runtime capability within client-governed environments",
      "Comprehensive systems architecture documentation and deployment runbooks",
    ],
  },
];

export const TechArchitectureSection: React.FC<TechArchitectureSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="technical-architecture" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>06 — TECHNICAL ARCHITECTURE</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">PRODUCTION ENGINEERING STANDARDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Production Engineering Standards.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Deterministic Systems Design, Private Boundary Controls, and Client-Controlled Deployment.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>ARCHITECTURAL BRIEFING</span>
              <span>GOVERNANCE SPECIFICATION</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 03: THE ENTERPRISE SOVEREIGNTY & GOVERNANCE QUAD
            (2x2 Precision Architecture Grid // 100% Static Architectural Authority)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Console Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold text-white uppercase tracking-wider">
                ENTERPRISE GOVERNANCE & ENGINEERING SPECIFICATION
              </span>
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">
              FOUR-PILLAR SOVEREIGNTY PROTOCOL
            </div>
          </div>

          {/* 2x2 Precision Architecture Grid (Stacks vertically on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Left Column: Pillars 01 & 03 */}
            <div className="divide-y divide-slate-800">
              
              {/* PILLAR 01 */}
              <div className="p-6 sm:p-8 space-y-6 bg-[#070A12]">
                <div className="space-y-1.5 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400"></span>
                      <span>01 // PRIVATE INFRASTRUCTURE & DATA BOUNDARIES</span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                    {GOVERNANCE_PILLARS[0].subhead}
                  </h3>
                </div>

                {/* Specifications */}
                <div className="space-y-3">
                  {GOVERNANCE_PILLARS[0].specifications.map((spec, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      • {spec}
                    </p>
                  ))}
                </div>

                {/* Architectural Standards */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    ARCHITECTURAL STANDARDS:
                  </div>
                  <div className="space-y-1.5">
                    {GOVERNANCE_PILLARS[0].standards.map((std, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                        <span className="text-blue-400 font-bold shrink-0">↳</span>
                        <span className="leading-relaxed">{std}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PILLAR 03 */}
              <div className="p-6 sm:p-8 space-y-6 bg-[#070A12]">
                <div className="space-y-1.5 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400"></span>
                      <span>03 // ENTERPRISE INTEGRATION & SYSTEM INTEROPERABILITY</span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                    {GOVERNANCE_PILLARS[2].subhead}
                  </h3>
                </div>

                {/* Specifications */}
                <div className="space-y-3">
                  {GOVERNANCE_PILLARS[2].specifications.map((spec, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      • {spec}
                    </p>
                  ))}
                </div>

                {/* Architectural Standards */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    ARCHITECTURAL STANDARDS:
                  </div>
                  <div className="space-y-1.5">
                    {GOVERNANCE_PILLARS[2].standards.map((std, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                        <span className="text-blue-400 font-bold shrink-0">↳</span>
                        <span className="leading-relaxed">{std}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Pillars 02 & 04 */}
            <div className="divide-y divide-slate-800">
              
              {/* PILLAR 02 */}
              <div className="p-6 sm:p-8 space-y-6 bg-[#090D18]">
                <div className="space-y-1.5 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300"></span>
                      <span>02 // DETERMINISTIC EXECUTION & GUARDRAILS</span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                    {GOVERNANCE_PILLARS[1].subhead}
                  </h3>
                </div>

                {/* Specifications */}
                <div className="space-y-3">
                  {GOVERNANCE_PILLARS[1].specifications.map((spec, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      • {spec}
                    </p>
                  ))}
                </div>

                {/* Architectural Standards */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    ARCHITECTURAL STANDARDS:
                  </div>
                  <div className="space-y-1.5">
                    {GOVERNANCE_PILLARS[1].standards.map((std, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                        <span className="text-blue-400 font-bold shrink-0">↳</span>
                        <span className="leading-relaxed">{std}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PILLAR 04 */}
              <div className="p-6 sm:p-8 space-y-6 bg-[#090D18]">
                <div className="space-y-1.5 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300"></span>
                      <span>04 // CLIENT IP, OWNERSHIP & DEPLOYMENT CONTROL</span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                    {GOVERNANCE_PILLARS[3].subhead}
                  </h3>
                </div>

                {/* Specifications */}
                <div className="space-y-3">
                  {GOVERNANCE_PILLARS[3].specifications.map((spec, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      • {spec}
                    </p>
                  ))}
                </div>

                {/* Architectural Standards */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    ARCHITECTURAL STANDARDS:
                  </div>
                  <div className="space-y-1.5">
                    {GOVERNANCE_PILLARS[3].standards.map((std, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                        <span className="text-blue-400 font-bold shrink-0">↳</span>
                        <span className="leading-relaxed">{std}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Architectural Security & Deployment Footer (Approved Bounded Governance Language) */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>ENTERPRISE GOVERNANCE ALIGNMENT · PRIVATE INFRASTRUCTURE OPTIONS</span>
            </div>
            <div className="text-slate-500">
              CLIENT-OWNED BESPOKE ASSETS · INDEPENDENT DEPLOYMENT CAPABILITY
            </div>
          </div>

        </div>

        {/* Strategic Call to Action */}
        <div className="p-6 sm:p-8 bg-[#080C15] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              ARCHITECTURE & GOVERNANCE REVIEW
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight font-serif">
              Review Architecture Specifications with Senior Systems Engineers
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              Evaluate VPC deployment boundaries, single-tenant vector stores, deterministic schema validation, and custom source-code assignment for your enterprise.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-sm"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
