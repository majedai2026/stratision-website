import React from "react";
import { ArrowRight, ShieldCheck, FileCheck, Calendar, Clock, Lock, FileText, CheckCircle2 } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
  onOpenBlueprint?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenBooking,
  onOpenBlueprint,
}) => {
  return (
    <section id="engagement-dispatch" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>14 — INSTITUTIONAL ENGAGEMENT DISPATCH</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">EXECUTIVE ONBOARDING PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Institutional Engagement Dispatch & Onboarding Protocol.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              A Structured Technical Intake: Confidential Pre-Engagement Governance, Principal Systems Review, and Milestone Scoping Architecture.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>ENGAGEMENT SPECIFICATION</span>
              <span>ONBOARDING PROTOCOL</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: INSTITUTIONAL ENGAGEMENT DISPATCH & ONBOARDING PROTOCOL
            (Monolithic Continuous Enclosure: 4 Explicit Engagement Stages)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Document Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 bg-blue-400"></span>
              <span className="font-bold text-white uppercase tracking-wider">
                ENGAGEMENT SPECIFICATION: ONBOARDING-PROTOCOL-2026
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>STATUS: AUTHORIZED EXECUTIVE INTAKE SPECIFICATION</span>
            </div>
          </div>

          {/* STAGE 01 // Pre-Engagement Governance & Confidentiality */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400"></span>
                  <span>STAGE 01 // PRE-ENGAGEMENT GOVERNANCE & CONFIDENTIALITY TERMS</span>
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  Institutional protocols governing preliminary architectural exchanges and technical data scoping.
                </div>
              </div>
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                GOVERNANCE SPECIFICATION
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    CONFIDENTIALITY & MUTUAL NDA BOUNDARY
                  </span>
                  <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                    LEGAL GOVERNANCE
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                  <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                  <span>
                    Exploratory technical sessions are conducted under mutual confidentiality principles. Formal mutual NDA execution can be arranged prior to technical data exchange where required by client governance.
                  </span>
                </div>
              </div>

              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    PRINCIPAL ARCHITECT ASSIGNMENT
                  </span>
                  <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                    LEADERSHIP ALIGNMENT
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                  <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                  <span>
                    Architectural sessions are conducted with the appropriate Stratision systems architecture lead, according to engagement scope, focusing strictly on systems architecture and operational feasibility.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 02 // Proposed Architectural Review Structure */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400"></span>
                  <span>STAGE 02 // PROPOSED ARCHITECTURAL REVIEW STRUCTURE (INDICATIVE 45-MINUTE FORMAT)</span>
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  Structured 3-part forensic systems session designed for rapid technical and operational alignment.
                </div>
              </div>
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                INDICATIVE AGENDA
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      PART 01 // 00–15 MIN
                    </span>
                    <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                      DIAGNOSTIC
                    </span>
                  </div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-200">
                    FRICTION DECOMPOSITION
                  </h4>
                  <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                    <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                    <span>
                      Forensic mapping of current operational drag, manual reconciliation touchpoints, and systemic bottlenecks across departmental workflows.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      PART 02 // 15–30 MIN
                    </span>
                    <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                      ARCHITECTURE
                    </span>
                  </div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-200">
                    BOUNDARY & ISOLATION SCOPING
                  </h4>
                  <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                    <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                    <span>
                      Technical evaluation of target data boundaries, single-tenant VPC requirements, deterministic schema gate parameters, and legacy database relays.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      PART 03 // 30–45 MIN
                    </span>
                    <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                      SYNTHESIS
                    </span>
                  </div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-200">
                    MILESTONE & GOVERNANCE SYNTHESIS
                  </h4>
                  <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                    <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                    <span>
                      Structuring preliminary delivery phases, formal verification criteria, and appropriate commercial engagement models for executive consideration.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 03 // Indicative Technical Outputs */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400"></span>
                  <span>STAGE 03 // INDICATIVE TECHNICAL OUTPUTS (SUBJECT TO ENGAGEMENT SCOPE)</span>
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  Structured preliminary engineering artifacts generated following architectural review.
                </div>
              </div>
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                PROSPECTIVE ARTIFACTS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    INDICATIVE OUTPUT A
                  </span>
                  <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                    AUDIT SUMMARY
                  </span>
                </div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-200">
                  OPERATIONAL DRAG LEDGER
                </h4>
                <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                  <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                  <span>
                    Structured diagnostic summary of identified operational friction points, manual touchpoints, and baseline workflow latency.
                  </span>
                </div>
                <div className="pt-2 text-[10px] font-mono text-slate-500">
                  * Subject to diagnostic session findings
                </div>
              </div>

              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    INDICATIVE OUTPUT B
                  </span>
                  <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                    SCHEMATIC DRAFT
                  </span>
                </div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-200">
                  TARGET TOPOLOGY DRAFT
                </h4>
                <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                  <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                  <span>
                    Preliminary architectural schematic detailing target multi-agent boundaries, programmatic schema gates, and private VPC parameters.
                  </span>
                </div>
                <div className="pt-2 text-[10px] font-mono text-slate-500">
                  * Modelled architecture proposal
                </div>
              </div>

              <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    INDICATIVE OUTPUT C
                  </span>
                  <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                    DELIVERY ROADMAP
                  </span>
                </div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-200">
                  MILESTONE SCOPING ESTIMATE
                </h4>
                <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                  <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                  <span>
                    Indicative Phase I / II / III milestone delivery timeframes and governance parameters structured for procurement and executive review.
                  </span>
                </div>
                <div className="pt-2 text-[10px] font-mono text-slate-500">
                  * Subject to formal technical verification
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 04 // Executive Engagement Dispatch Console */}
          <div className="p-6 sm:p-8 lg:p-10 bg-[#090D18] space-y-6">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>STAGE 04 // EXECUTIVE ENGAGEMENT DISPATCH CONSOLE</span>
                </div>
                <div className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                  Initiate formal architectural intake to review specific departmental friction points, boundary parameters, and milestone scopes.
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Architectural sessions are conducted with the appropriate Stratision systems architecture lead according to engagement scope · Formal mutual NDA available upon request
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                {onOpenBlueprint && (
                  <button
                    type="button"
                    onClick={onOpenBlueprint}
                    className="w-full sm:w-auto px-5 py-3.5 bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-medium text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Preliminary Review Package</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
                >
                  <span>Schedule Systems Scoping (45 Min)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Architectural Governance & Provenance Footer */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>INSTITUTIONAL ONBOARDING SPECIFICATION · CONFIDENTIAL PRE-ENGAGEMENT GOVERNANCE</span>
            </div>
            <div className="text-slate-500">
              FORMAL MUTUAL NDA EXECUTION AVAILABLE PRIOR TO TECHNICAL DATA EXCHANGE UPON REQUEST
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
