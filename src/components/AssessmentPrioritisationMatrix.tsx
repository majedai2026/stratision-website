import React from "react";
import { CheckCircle2, Compass, Clock, Ban } from "lucide-react";

export const AssessmentPrioritisationMatrix: React.FC = () => {
  return (
    <div className="w-full my-12" aria-label="Conceptual Strategic Prioritisation Matrix">
      {/* Outer Matrix Container */}
      <div className="border border-white/[0.08] bg-[#05070D] rounded-lg p-6 sm:p-8 lg:p-10 relative">
        {/* Technical Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4 mb-8 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-white font-semibold tracking-wider">STRATEGIC MATRIX // VALUE VS FEASIBILITY</span>
          </div>
          <div className="text-slate-500 uppercase tracking-widest text-[10px]">
            ARCHITECTURAL FILTERING MODEL // NON-NUMERICAL
          </div>
        </div>

        {/* Matrix Layout with Axis Indicators */}
        <div className="relative">
          {/* Vertical Axis Indicator (Left) */}
          <div className="hidden md:flex absolute -left-7 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-2 font-mono text-[10px] text-slate-400 tracking-widest uppercase select-none">
            <span>LOW VALUE</span>
            <div className="w-12 h-[1px] bg-slate-700" />
            <span className="text-white font-semibold">BUSINESS VALUE</span>
            <div className="w-12 h-[1px] bg-slate-700" />
            <span>HIGH VALUE</span>
          </div>

          {/* 2x2 Grid Quadrants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Quadrant 2: Top-Left (CONSIDER) - High Value, Lower Feasibility */}
            <div className="border border-white/[0.08] bg-white/[0.015] p-6 sm:p-7 rounded relative flex flex-col justify-between group hover:border-white/20 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-semibold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    QUADRANT 02 // HIGH VALUE • LOWER FEASIBILITY
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-[-0.02em] mb-2">
                  CONSIDER
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                  Opportunities with high strategic leverage where existing data quality, integration hooks, or operational governance are not yet ready.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-slate-400 space-y-1.5">
                <div className="text-cyan-300 font-medium">Strategic Action:</div>
                <div>Establish data foundations, clarify workflows, or schedule for subsequent architectural phases.</div>
              </div>
            </div>

            {/* Quadrant 1: Top-Right (PRIORITY) - High Value, High Feasibility */}
            <div className="border border-blue-500/30 bg-blue-950/[0.12] p-6 sm:p-7 rounded relative flex flex-col justify-between shadow-[inset_0_0_24px_rgba(59,130,246,0.06)] group hover:border-blue-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] text-blue-400 tracking-widest uppercase font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    QUADRANT 01 // HIGH VALUE • HIGH FEASIBILITY
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-[-0.02em] mb-2">
                  PRIORITY
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal mb-4">
                  High-leverage business bottlenecks where clear documentation, accessible data, and straightforward integration converge.
                </p>
              </div>
              <div className="pt-4 border-t border-blue-500/20 font-mono text-[11px] text-slate-300 space-y-1.5">
                <div className="text-blue-300 font-medium">Strategic Action:</div>
                <div>Primary candidates for immediate system architecture, commercial selection, or bespoke design.</div>
              </div>
            </div>

            {/* Quadrant 4: Bottom-Left (DO NOT BUILD) - Low Value, Low Feasibility */}
            <div className="border border-white/[0.06] bg-black/40 p-6 sm:p-7 rounded relative flex flex-col justify-between group hover:border-white/15 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase font-semibold flex items-center gap-1.5">
                    <Ban className="w-3.5 h-3.5 text-rose-400/80" />
                    QUADRANT 04 // LOW VALUE • LOW FEASIBILITY
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-300 tracking-[-0.02em] mb-2">
                  DO NOT BUILD
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-4">
                  Complex problems with marginal operational benefit, speculative utility, or disproportionate maintenance burden.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-slate-500 space-y-1.5">
                <div className="text-slate-400 font-medium">Strategic Action:</div>
                <div>Deliberately exclude. Protect engineering capacity, capital, and leadership attention.</div>
              </div>
            </div>

            {/* Quadrant 3: Bottom-Right (DEFER) - Low Value, High Feasibility */}
            <div className="border border-white/[0.08] bg-white/[0.015] p-6 sm:p-7 rounded relative flex flex-col justify-between group hover:border-white/20 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    QUADRANT 03 // LOW VALUE • HIGH FEASIBILITY
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-[-0.02em] mb-2">
                  DEFER
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                  Simple tasks that are easily automated or plugged into off-the-shelf software, but yield low strategic or financial return.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-slate-400 space-y-1.5">
                <div className="text-slate-300 font-medium">Strategic Action:</div>
                <div>Address with low-cost commodity tools if necessary, or defer in favor of high-impact priorities.</div>
              </div>
            </div>

          </div>

          {/* Horizontal Axis Indicator (Bottom) */}
          <div className="flex items-center justify-center gap-3 pt-6 font-mono text-[10px] text-slate-400 tracking-widest uppercase select-none">
            <span>LOWER FEASIBILITY</span>
            <div className="w-16 h-[1px] bg-slate-700" />
            <span className="text-white font-semibold">TECHNICAL & ORGANISATIONAL FEASIBILITY</span>
            <div className="w-16 h-[1px] bg-slate-700" />
            <span>HIGHER FEASIBILITY</span>
          </div>
        </div>

        {/* Editorial Diagnostic Commentary */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-400 leading-relaxed">
          <div>
            <span className="text-white font-semibold block mb-1">Deliberate Exclusion as a Strategic Asset</span>
            Not every operational friction deserves an AI project. The most valuable outcome of the Assessment is often clarifying what an organisation should explicitly choose not to build, saving months of misdirected engineering effort.
          </div>
          <div>
            <span className="text-white font-semibold block mb-1">Conceptual Methodology Notice</span>
            This matrix illustrates Stratision's architectural filtering methodology. Assessments produce custom, contextual registers specific to each enterprise's operating model without fabricated numerical scoring.
          </div>
        </div>
      </div>
    </div>
  );
};
