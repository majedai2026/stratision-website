import React from "react";

export const AssessmentSignatureVisual: React.FC = () => {
  return (
    <div className="w-full my-12" aria-label="Stratision Architectural Decision-Path Schematic">
      <div className="border border-white/[0.08] bg-[#05070D] rounded-lg p-6 sm:p-10 relative overflow-hidden">
        {/* Schematic System Label */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4 mb-10 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-white font-semibold tracking-wider">
              ARCHITECTURAL DECISION-PATH // BIA-SYSTEM-MAP-01
            </span>
          </div>
          <div className="text-slate-500 uppercase tracking-widest text-[10px]">
            NON-BIAS STRATEGIC CONVERGENCE
          </div>
        </div>

        {/* Central Vertical Diagnostic Path */}
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Node 1: Business */}
          <div className="w-full max-w-md border border-white/20 bg-[#0A0D16] p-4 sm:p-5 rounded text-center relative shadow-sm">
            <div className="font-mono text-[10px] text-blue-400 font-semibold tracking-widest uppercase mb-1">
              NODE 01 // FOUNDATION
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-[-0.02em]">
              BUSINESS
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Operating reality, value creation, revenue drivers & departmental boundaries
            </div>
          </div>

          {/* Connector 1 */}
          <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-white/20 to-blue-500/80 my-1 relative">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>

          {/* Node 2: Assessment */}
          <div className="w-full max-w-md border border-blue-500/40 bg-blue-950/20 p-4 sm:p-5 rounded text-center relative shadow-[0_0_20px_rgba(59,130,246,0.08)]">
            <div className="font-mono text-[10px] text-blue-400 font-semibold tracking-widest uppercase mb-1">
              NODE 02 // DIAGNOSTIC INTERVENTION
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-[-0.02em]">
              ASSESSMENT
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Structured examination of workflows, roles, handoffs, systems & information flows
            </div>
          </div>

          {/* Connector 2 */}
          <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-blue-500/80 to-white/20 my-1 relative">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>

          {/* Node 3: Friction */}
          <div className="w-full max-w-md border border-white/20 bg-[#0A0D16] p-4 sm:p-5 rounded text-center relative">
            <div className="font-mono text-[10px] text-slate-400 font-semibold tracking-widest uppercase mb-1">
              NODE 03 // DIAGNOSTIC FINDINGS
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-[-0.02em]">
              FRICTION
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Repetitive manual work, process latency, information gaps & decision bottlenecks
            </div>
          </div>

          {/* Connector 3 */}
          <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-white/20 to-blue-500/80 my-1 relative">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>

          {/* Node 4: Opportunity */}
          <div className="w-full max-w-md border border-white/20 bg-[#0A0D16] p-4 sm:p-5 rounded text-center relative">
            <div className="font-mono text-[10px] text-blue-400 font-semibold tracking-widest uppercase mb-1">
              NODE 04 // LEVERAGE IDENTIFICATION
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-[-0.02em]">
              OPPORTUNITY
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Candidate operational surfaces where automation, synthesis or AI may create measurable yield
            </div>
          </div>

          {/* Connector 4 */}
          <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-white/20 to-blue-500/80 my-1 relative">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>

          {/* Node 5: Priority */}
          <div className="w-full max-w-md border border-blue-500/50 bg-[#0D1424] p-4 sm:p-5 rounded text-center relative shadow-sm">
            <div className="font-mono text-[10px] text-blue-300 font-semibold tracking-widest uppercase mb-1">
              NODE 05 // STRATEGIC FILTERING
            </div>
            <div className="text-base sm:text-lg font-bold text-white tracking-[-0.02em]">
              PRIORITY
            </div>
            <div className="text-xs text-slate-300 mt-1">
              Evaluation across Business Value, Frequency, Capacity, Feasibility & Governance
            </div>
          </div>

          {/* Split Connector (Branching out to 4 pathways) */}
          <div className="w-full max-w-2xl py-4 sm:py-6">
            <svg
              viewBox="0 0 600 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-slate-600 select-none"
              aria-hidden="true"
            >
              {/* Central Trunk */}
              <line x1="300" y1="0" x2="300" y2="25" stroke="#3B82F6" strokeWidth="1.5" />
              {/* Horizontal Distribution Rail */}
              <line x1="75" y1="25" x2="525" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              
              {/* Dropdown Stems to 4 Nodes */}
              <line x1="75" y1="25" x2="75" y2="60" stroke="#64748B" strokeWidth="1" />
              <circle cx="75" cy="25" r="2.5" fill="#64748B" />
              
              <line x1="225" y1="25" x2="225" y2="60" stroke="#3B82F6" strokeWidth="1" />
              <circle cx="225" cy="25" r="2.5" fill="#3B82F6" />
              
              <line x1="375" y1="25" x2="375" y2="60" stroke="#60A5FA" strokeWidth="1" />
              <circle cx="375" cy="25" r="2.5" fill="#60A5FA" />
              
              <line x1="525" y1="25" x2="525" y2="60" stroke="#94A3B8" strokeWidth="1" />
              <circle cx="525" cy="25" r="2.5" fill="#94A3B8" />
            </svg>
          </div>

          {/* Four Legitimate Paths (Node 06) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 my-2">
            
            {/* Path A: BUY */}
            <div className="border border-white/10 bg-[#080B14] p-4 sm:p-5 rounded flex flex-col justify-between group hover:border-white/20 transition-colors">
              <div>
                <div className="font-mono text-[10px] text-slate-400 font-semibold tracking-widest uppercase mb-1">
                  PATH A // COMMODITY
                </div>
                <div className="text-base font-bold text-white mb-1.5 tracking-tight">
                  BUY
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Adopt established commercial SaaS when the workflow is standard and offers no proprietary advantage.
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-slate-400">
                RECOMMENDATION: Off-the-shelf software
              </div>
            </div>

            {/* Path B: CONFIGURE */}
            <div className="border border-white/10 bg-[#080B14] p-4 sm:p-5 rounded flex flex-col justify-between group hover:border-white/20 transition-colors">
              <div>
                <div className="font-mono text-[10px] text-slate-400 font-semibold tracking-widest uppercase mb-1">
                  PATH B // PLATFORM
                </div>
                <div className="text-base font-bold text-white mb-1.5 tracking-tight">
                  CONFIGURE
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Extend existing ERP, CRM, or document pipelines with native automation and platform AI features.
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-slate-400">
                RECOMMENDATION: Deepen existing stack
              </div>
            </div>

            {/* Path C: BUILD */}
            <div className="border border-white/10 bg-[#080B14] p-4 sm:p-5 rounded flex flex-col justify-between group hover:border-white/20 transition-colors">
              <div>
                <div className="font-mono text-[10px] text-slate-400 font-semibold tracking-widest uppercase mb-1">
                  PATH C // BESPOKE
                </div>
                <div className="text-base font-bold text-white mb-1.5 tracking-tight">
                  BUILD
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineer custom, sovereign AI systems where proprietary workflows create core competitive differentiation.
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-slate-400">
                RECOMMENDATION: Tailored AI architecture
              </div>
            </div>

            {/* Path D: DON'T PROCEED */}
            <div className="border border-white/10 bg-[#080B14] p-4 sm:p-5 rounded flex flex-col justify-between group hover:border-white/20 transition-colors">
              <div>
                <div className="font-mono text-[10px] text-slate-400 font-semibold tracking-widest uppercase mb-1">
                  PATH D // DISCIPLINE
                </div>
                <div className="text-base font-bold text-white mb-1.5 tracking-tight">
                  DON&apos;T PROCEED
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Resolve via workflow simplification or process discipline. Technology is not the answer for every friction point.
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-slate-400">
                RECOMMENDATION: Operational redesign
              </div>
            </div>

          </div>

          {/* Re-convergence Connector */}
          <div className="w-full max-w-2xl py-4 sm:py-6">
            <svg
              viewBox="0 0 600 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-slate-600 select-none"
              aria-hidden="true"
            >
              {/* 4 Stems Converging Down */}
              <line x1="75" y1="0" x2="75" y2="35" stroke="#64748B" strokeWidth="1" />
              <line x1="225" y1="0" x2="225" y2="35" stroke="#3B82F6" strokeWidth="1" />
              <line x1="375" y1="0" x2="375" y2="35" stroke="#60A5FA" strokeWidth="1" />
              <line x1="525" y1="0" x2="525" y2="35" stroke="#94A3B8" strokeWidth="1" />
              
              {/* Convergence Rail */}
              <line x1="75" y1="35" x2="525" y2="35" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              
              {/* Center Drop to Decision */}
              <line x1="300" y1="35" x2="300" y2="60" stroke="#3B82F6" strokeWidth="1.5" />
              <circle cx="300" cy="35" r="3" fill="#3B82F6" />
            </svg>
          </div>

          {/* Node 7: Decision */}
          <div className="w-full max-w-md border border-white/30 bg-[#0D1422] p-5 rounded text-center relative shadow-md">
            <div className="font-mono text-[10px] text-blue-400 font-semibold tracking-widest uppercase mb-1">
              NODE 07 // STRATEGIC OUTCOME
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-[-0.02em]">
              DECISION
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Clear executive direction on whether to buy, configure, build, or deliberately refrain — backed by business architecture
            </div>
          </div>

        </div>

        {/* Bottom Technical Verification */}
        <div className="mt-10 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <span>DIAGNOSIS COMES BEFORE TECHNOLOGY SELECTION</span>
          <span className="text-slate-400">UNBIASED ARCHITECTURAL GOVERNANCE</span>
        </div>
      </div>
    </div>
  );
};
