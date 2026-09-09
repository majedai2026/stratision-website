import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowDownRight, Terminal } from "lucide-react";

interface MostCompaniesComparisonSectionProps {
  onOpenBooking: () => void;
}

export interface ComparisonPhase {
  phaseNumber: string;
  conventional: {
    action: string;
    description: string;
    consequence: string;
  };
  stratision: {
    action: string;
    description: string;
    outcome: string;
  };
}

export const COMPARISON_PHASES: ComparisonPhase[] = [
  {
    phaseNumber: "01",
    conventional: {
      action: "BUY",
      description: "Acquiring generic tool licenses without prior workflow analysis or bottleneck mapping.",
      consequence: "Subscription sprawl without identified friction points.",
    },
    stratision: {
      action: "UNDERSTAND",
      description: "Forensic workflow audit isolating manual administrative cycles and repetitive tasks.",
      outcome: "Identified operational bottlenecks preceding any software scoping.",
    },
  },
  {
    phaseNumber: "02",
    conventional: {
      action: "DEPLOY",
      description: "Isolated browser tools severed from ERP, CRM, and transactional systems.",
      consequence: "Manual copy-paste latency and fragmented data silos.",
    },
    stratision: {
      action: "ASSESS",
      description: "Evaluation of system integration points and internal security constraints.",
      outcome: "Bi-directional database integration pathways mapped.",
    },
  },
  {
    phaseNumber: "03",
    conventional: {
      action: "HOPE",
      description: "Relying on organic employee experimentation without structured delivery targets.",
      consequence: "Vague adoption expectations with zero accountability.",
    },
    stratision: {
      action: "PRIORITISE",
      description: "Departmental ranking based on calculated recoverable capacity and cycle times.",
      outcome: "Economic business case established prior to engineering execution.",
    },
  },
  {
    phaseNumber: "04",
    conventional: {
      action: "LOW ADOPTION",
      description: "Staff encounter workflow friction or errors, quietly reverting to manual spreadsheets.",
      consequence: "Silent abandonment of unintegrated software tools.",
    },
    stratision: {
      action: "IMPLEMENT",
      description: "Turnkey deployment directly into daily workflows alongside team operating procedures.",
      outcome: "Direct operational usage embedded within existing workflows.",
    },
  },
  {
    phaseNumber: "05",
    conventional: {
      action: "POOR ROI",
      description: "Recurring software overhead with unmeasured operational yield.",
      consequence: "Sunk operational expenditure without capacity expansion.",
    },
    stratision: {
      action: "OPTIMISE",
      description: "Ongoing telemetry monitoring and iterative system maintenance protocols.",
      outcome: "Continuous operational refinement and capacity yield.",
    },
  },
];

export const MostCompaniesComparisonSection: React.FC<MostCompaniesComparisonSectionProps> = ({ onOpenBooking }) => {
  // activeStep determines the active diagnostic stage (0 to 4 for phases 01 to 05)
  const [activeStep, setActiveStep] = useState<number>(2); // Default to midpoint hero frame (01 & 02 resolved, 03 active)
  const [isAutoCycle, setIsAutoCycle] = useState<boolean>(true);

  // Unhurried physical progression cycle (every 5.2s)
  useEffect(() => {
    if (!isAutoCycle) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 5200);
    return () => clearInterval(timer);
  }, [isAutoCycle]);

  return (
    <section id="comparison-interface" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>04 — STRATEGIC DIAGNOSTIC</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">OPERATING BOARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Why Most AI Initiatives Stagnate. <br />
              <span className="text-slate-400 font-normal">And How Stratision Engineers Systemic Adoption.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Conventional approaches treat artificial intelligence as a software seat purchase. Stratision approaches AI as an institutional systems engineering discipline—integrating private, deterministic pipelines directly into operational workflows.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>STRATISION SYSTEMS EVALUATION</span>
              <span>FIVE-STAGE OPERATIONAL PROTOCOL</span>
            </div>
          </div>
        </div>

        {/* High-Level Overview Sequence Summary (3-Second Executive Contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-slate-800 bg-[#080C15] p-5 font-mono text-xs">
          <div className="space-y-2 p-4 bg-black/40 border border-slate-800/80">
            <div className="text-[10px] text-slate-400 font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-rose-500/80"></span>
              <span>CONVENTIONAL PATHWAY (DISCONNECTED TOOLS)</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-slate-300 font-semibold text-xs pt-1">
              <span className="text-slate-200">BUY</span>
              <span className="text-slate-600">→</span>
              <span className="text-slate-200">DEPLOY</span>
              <span className="text-slate-600">→</span>
              <span className="text-slate-200">HOPE</span>
              <span className="text-slate-600">→</span>
              <span className="text-rose-400">LOW ADOPTION</span>
              <span className="text-slate-600">→</span>
              <span className="text-rose-400">POOR ROI</span>
            </div>
          </div>

          <div className="space-y-2 p-4 bg-black/40 border border-slate-800/80">
            <div className="text-[10px] text-slate-400 font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>STRATISION PROTOCOL (ENGINEERED INTERVENTION)</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-white font-semibold text-xs pt-1">
              <span className="text-blue-400">UNDERSTAND</span>
              <span className="text-slate-600">→</span>
              <span className="text-blue-400">ASSESS</span>
              <span className="text-slate-600">→</span>
              <span className="text-blue-400">PRIORITISE</span>
              <span className="text-slate-600">→</span>
              <span className="text-blue-400">IMPLEMENT</span>
              <span className="text-slate-600">→</span>
              <span className="text-blue-400">OPTIMISE</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 02: THE REBALANCING OPERATING BOARD (REFINED VARIABLE DENSITY)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] overflow-hidden shadow-2xl">
          
          {/* Diagnostic Console Header Bar */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="font-bold text-white uppercase tracking-wider">
                STRATEGIC DIAGNOSTIC BOARD
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 uppercase">PHASE:</span>
              <div className="flex border border-slate-800 bg-black">
                {COMPARISON_PHASES.map((st, idx) => (
                  <button
                    key={st.phaseNumber}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsAutoCycle(false);
                    }}
                    className={`px-3 py-1 text-[10px] font-mono cursor-pointer transition-colors ${
                      activeStep === idx
                        ? "bg-blue-600 text-white font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {st.phaseNumber}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 
            OPERATING WORK SURFACE:
            Variable density based on phase state:
            - Resolved (idx < activeStep): Compact, dense, high-contrast accumulated engagement history.
            - Active (idx === activeStep): Deep, expansive dual-chamber strategic work surface.
            - Pending (idx > activeStep): Quiet, compact waiting work units.
          */}
          <div className="divide-y divide-slate-800">
            {COMPARISON_PHASES.map((phase, idx) => {
              const isResolved = idx < activeStep;
              const isActive = idx === activeStep;

              // -------------------------------------------------------------
              // 1. ACTIVE STATE — EXPANSIVE STRATEGIC WORK SURFACE
              // -------------------------------------------------------------
              if (isActive) {
                return (
                  <div
                    key={phase.phaseNumber}
                    className="p-6 sm:p-8 bg-[#090D18] border-l-4 border-blue-500 transition-all space-y-6"
                  >
                    {/* Active Stage Notation */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                          {phase.phaseNumber}
                        </span>
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="text-slate-400 font-semibold">
                            {phase.conventional.action}
                          </span>
                          <span className="text-slate-600">→</span>
                          <span className="text-blue-400 font-bold">
                            {phase.stratision.action}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400"></span>
                        <span className="text-slate-300">ACTIVE DIAGNOSTIC</span>
                      </div>
                    </div>

                    {/* Unified Strategic Work Surface */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-1">
                      
                      {/* Left Chamber: Conventional Condition */}
                      <div className="p-5 sm:p-6 bg-black/40 border border-slate-800/90 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                          <div className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                            CONVENTIONAL CONDITION
                          </div>
                          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700 tracking-wider">
                            {phase.conventional.action}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                            {phase.conventional.description}
                          </p>

                          <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-xs font-mono text-slate-400">
                            <ArrowDownRight className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                            <span>{phase.conventional.consequence}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Chamber: Stratision Engineered Response */}
                      <div className="p-5 sm:p-6 bg-[#070B16] border border-blue-900/40 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                          <div className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase">
                            STRATISION PROTOCOL
                          </div>
                          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/40 tracking-wider">
                            {phase.stratision.action}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs sm:text-sm text-white font-sans leading-relaxed font-normal">
                            {phase.stratision.description}
                          </p>

                          <div className="pt-3 border-t border-slate-800/60 flex items-start gap-2 text-xs font-mono text-slate-200">
                            <span className="text-blue-400 font-bold shrink-0">→</span>
                            <span>{phase.stratision.outcome}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              }

              // -------------------------------------------------------------
              // 2. RESOLVED STATE — COMPACT ACCUMULATED ENGAGEMENT HISTORY
              // -------------------------------------------------------------
              if (isResolved) {
                return (
                  <div
                    key={phase.phaseNumber}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsAutoCycle(false);
                    }}
                    className="p-4 sm:p-5 bg-[#070A12] hover:bg-[#0A0E1A] cursor-pointer transition-colors border-l-4 border-slate-700"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs font-mono">
                      
                      {/* Identification & Conventional Summary */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <span className="text-sm font-serif font-bold text-slate-500">
                          {phase.phaseNumber}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-800 font-bold text-[11px]">
                            {phase.conventional.action}
                          </span>
                          <span className="text-slate-400 font-sans text-xs hidden sm:inline">
                            {phase.conventional.consequence}
                          </span>
                        </div>
                      </div>

                      {/* Stratision Resolution Tag & Outcome */}
                      <div className="flex items-center gap-3 border-t lg:border-t-0 border-slate-800/60 pt-2 lg:pt-0">
                        <span className="text-slate-600 font-bold hidden sm:inline">→</span>
                        <span className="px-2 py-0.5 bg-blue-950/60 text-blue-300 border border-blue-900/60 font-bold text-[11px]">
                          {phase.stratision.action}
                        </span>
                        <span className="text-slate-300 font-sans text-xs">
                          {phase.stratision.outcome}
                        </span>
                      </div>

                    </div>
                  </div>
                );
              }

              // -------------------------------------------------------------
              // 3. PENDING STATE — COMPACT WAITING WORK UNIT
              // -------------------------------------------------------------
              return (
                <div
                  key={phase.phaseNumber}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoCycle(false);
                  }}
                  className="p-3.5 sm:p-4 bg-[#050811] hover:bg-[#080C15] cursor-pointer transition-colors border-l-4 border-transparent opacity-60 hover:opacity-100"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-500">
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-serif font-bold text-slate-600">
                        {phase.phaseNumber}
                      </span>
                      <span className="px-2 py-0.5 bg-black text-slate-500 border border-slate-900 text-[10px]">
                        {phase.conventional.action}
                      </span>
                      <span className="text-slate-600">···→</span>
                      <span className="px-2 py-0.5 bg-black text-slate-500 border border-slate-900 text-[10px]">
                        {phase.stratision.action}
                      </span>
                    </div>

                    <div className="text-[10px] uppercase text-slate-600">
                      QUEUED
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Bar: Structural Endpoints */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-rose-500"></span>
              <span>CONVENTIONAL: FAILURE SEQUENCE TERMINATES AT POOR ROI</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>STRATISION: PROTOCOL EXTENDS THROUGH CONTINUOUS OPTIMISATION</span>
            </div>
          </div>

        </div>

        {/* Strategic Call to Action / Assessment Bar */}
        <div className="p-6 sm:p-8 bg-[#080C15] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              DIAGNOSTIC CONSULTATION
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight font-serif">
              Evaluate Your Organization's Operational Automation Feasibility
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              Schedule a forensic workflow audit with senior systems engineers. We isolate repetitive administrative bottlenecks, calculate deterministic payback, and architect private multi-agent pipelines.
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
