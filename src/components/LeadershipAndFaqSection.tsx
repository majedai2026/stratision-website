import React from "react";
import { ArrowRight, ShieldCheck, FileCheck, CheckCircle2, Lock, GitBranch, Cpu } from "lucide-react";

export interface InquiryCategory {
  id: string;
  categoryNumber: string;
  title: string;
  inquiries: {
    question: string;
    answer: string;
  }[];
}

export const INQUIRY_CATEGORIES: InquiryCategory[] = [
  {
    id: "cat-01",
    categoryNumber: "01",
    title: "01 // ARCHITECTURAL DETERMINISM",
    inquiries: [
      {
        question: "How do you prevent hallucination from corrupting enterprise systems of record?",
        answer: "Probabilistic language models are strictly bounded by typed JSON schema validation gates. Models perform parsing, extraction, and drafting, but cannot directly execute database commits or external API mutations without passing programmatic validation rules.",
      },
      {
        question: "How are edge cases and ambiguous payload states handled?",
        answer: "Any transaction failing confidence thresholds, missing required schema attributes, or encountering unexpected payload shapes is automatically routed to an operator exception queue with full audit context, preventing silent pipeline failures.",
      },
    ],
  },
  {
    id: "cat-02",
    categoryNumber: "02",
    title: "02 // CODE & ASSET GOVERNANCE",
    inquiries: [
      {
        question: "Who owns the bespoke orchestration code and architecture assets?",
        answer: "Bespoke orchestration assets, workflow schemas, and custom connectors are delivered according to agreed engagement terms. Systems are architected to minimize vendor lock-in, enabling internal client engineering teams to maintain and govern their assets.",
      },
      {
        question: "How are upstream model API deprecations and vendor changes managed?",
        answer: "Pipeline architectures decouple prompt logic from execution runtimes through modular gateway adapters. This abstraction allows underlying model providers to be upgraded or switched with minimal disruption to core business logic.",
      },
    ],
  },
  {
    id: "cat-03",
    categoryNumber: "03",
    title: "03 // INFRASTRUCTURE & DATA BOUNDARIES",
    inquiries: [
      {
        question: "Where does execution runtime and data custody reside?",
        answer: "Production execution is designed to operate within client-governed infrastructure or private environments according to the agreed engagement scope and data-boundary requirements.",
      },
      {
        question: "How do pipelines interface with complex legacy or on-premise environments?",
        answer: "Custom webhook relays, authenticated API connectors, and secure database adapters bridge modern multi-agent orchestration pipelines directly into legacy ERP, CRM, ATS, and core relational databases without requiring core system replacements.",
      },
    ],
  },
  {
    id: "cat-04",
    categoryNumber: "04",
    title: "04 // OPERATIONAL CONTINUITY & SUPPORT",
    inquiries: [
      {
        question: "What operational support structure exists post-handover?",
        answer: "Following formal milestone handover and verification sign-off, client teams receive detailed runbooks and architectural documentation for independent operation. Optional ongoing SLA support and maintenance agreements are available for continuous monitoring.",
      },
      {
        question: "What security controls and audit standards govern pipeline execution?",
        answer: "Architectures are engineered according to principle-of-least-privilege IAM controls, encrypted payload transit, ephemeral memory processing, and structured operational telemetry and transaction audit logging configured according to agreed requirements.",
      },
    ],
  },
];

interface LeadershipAndFaqSectionProps {
  onOpenBooking: () => void;
  onOpenBlueprint?: () => void;
}

export const LeadershipAndFaqSection: React.FC<LeadershipAndFaqSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="leadership" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>12 — ARCHITECTURAL THESIS & EXECUTIVE INQUIRY</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">FOUNDER MANDATE & GOVERNANCE SPECIFICATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Founder Architectural Thesis & Fiduciary Inquiry Depository.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Foundational Systems Philosophy, Institutional Operating Principles, and Direct Technical Disclosures for Board-Level Inquiries.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>FOUNDER MANDATE</span>
              <span>GOVERNANCE SPECIFICATION</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: FOUNDER ARCHITECTURAL THESIS & FIDUCIARY INQUIRY DEPOSITORY
            (Monolithic Continuous Enclosure: Founder Manifesto + 4-Quadrant Uncollapsed Inquiries)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Document Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 bg-blue-400"></span>
              <span className="font-bold text-white uppercase tracking-wider">
                EXECUTIVE INQUIRY REPOSITORY: GOVERNANCE-SPEC-2026
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>STATUS: UNCOLLAPSED GOVERNANCE & TECHNICAL SPECIFICATIONS</span>
            </div>
          </div>

          {/* Upper Chamber: The Founder Architectural Thesis */}
          <div className="p-6 sm:p-8 lg:p-12 bg-[#080C15] border-b border-slate-800 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400"></span>
                  <span>THE FOUNDER ARCHITECTURAL THESIS // ENGINEERING OPERATING PRINCIPLES</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                  Why Enterprise Workflows Must Be Engineered as Deterministic Systems.
                </h3>
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-800 tracking-wider shrink-0">
                PRINCIPAL SYSTEMS ARCHITECT MANDATE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Founder Context Column */}
              <div className="lg:col-span-4 space-y-4 p-5 bg-[#0A0E1A] border border-slate-800/90">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center font-serif font-bold text-white text-base">
                    M
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-serif">Majed</div>
                    <div className="text-[11px] text-blue-400 font-mono">Founder & Principal Systems Architect</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400 space-y-1 leading-relaxed">
                  <div>STRATISION ENGINEERING DIVISION</div>
                  <div className="text-slate-500">LONDON, UNITED KINGDOM</div>
                  <div className="pt-2 text-[10px] text-slate-400 uppercase tracking-wider">
                    FOCUS: MULTI-AGENT ORCHESTRATION & DATA BOUNDARY GOVERNANCE
                  </div>
                </div>
              </div>

              {/* Thesis Body Column */}
              <div className="lg:col-span-8 space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p className="text-white font-serif text-base sm:text-lg leading-snug">
                  High-friction enterprise workflows should be treated as engineered systems rather than collections of disconnected AI tools.
                </p>
                <p>
                  When organizations attempt to automate critical operations by stitching together generic SaaS wrappers or relying on unstructured LLM outputs, they introduce systemic fragility: hallucinations in production data, unpredictable execution paths, and opaque third-party dependencies.
                </p>
                
                <div className="p-4 bg-[#070A12] border border-slate-800/90 space-y-2 font-mono text-xs">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    CORE OPERATING PRINCIPLES:
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 shrink-0">01.</span>
                      <span>Deterministic boundaries must wrap probabilistic models at every interface.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 shrink-0">02.</span>
                      <span>Consequential system actions require programmatic schema validation before execution.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 shrink-0">03.</span>
                      <span>Structured human escalation for ambiguous or exceptional states.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 shrink-0">04.</span>
                      <span>Client-governed infrastructure deployment where required by scope.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 shrink-0">05.</span>
                      <span>Milestone-gated engineering delivery rather than undifferentiated consulting activity.</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  We build bespoke orchestration assets delivered according to agreed engagement terms—designed to give your organization full architectural clarity and long-term operational resilience.
                </p>
              </div>

            </div>
          </div>

          {/* Lower Chamber: Executive Inquiry Depository (4 Uncollapsed Quadrants) */}
          <div className="p-6 sm:p-8 lg:p-12 bg-[#070A12] space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-800/80">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  EXECUTIVE INQUIRY DEPOSITORY // UNCOLLAPSED TECHNICAL & FIDUCIARY DISCLOSURES
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">
                  Direct architectural and governance specifications addressing board-level operational inquiries.
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                UNCOLLAPSED SPECIFICATION
              </span>
            </div>

            {/* 2x2 Uncollapsed Inquiry Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {INQUIRY_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-6 bg-[#080C15] border border-slate-800 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Domain Category Header */}
                    <div className="pb-3 border-b border-slate-800/80 flex items-center justify-between">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400"></span>
                        <span>{cat.title}</span>
                      </div>
                    </div>

                    {/* Inquiry Items List */}
                    <div className="space-y-6">
                      {cat.inquiries.map((inq, iIdx) => (
                        <div key={iIdx} className="space-y-2">
                          <div className="text-xs sm:text-sm font-sans font-semibold text-white leading-snug">
                            {inq.question}
                          </div>
                          <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed bg-[#0A0E1A] p-3.5 border border-slate-800/80">
                            <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                            <span>{inq.answer}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Bay within Ledger */}
          <div className="p-6 sm:p-8 bg-[#090D18] border-t border-slate-800">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>START A CONVERSATION</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Review specific operational friction points, boundary parameters, and milestone scopes with our principal architects.
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm shrink-0"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Architectural Governance & Provenance Footer */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>FIDUCIARY SPECIFICATION · UNCOLLAPSED TECHNICAL DISCLOSURES</span>
            </div>
            <div className="text-slate-500">
              BESPOKE ORCHESTRATION ASSETS DELIVERED ACCORDING TO AGREED TERMS · DESIGNED TO MINIMIZE VENDOR LOCK-IN
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
