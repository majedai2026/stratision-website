import React from "react";

export const AssessmentHeroVisual: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-12" aria-label="Business Intelligence Assessment Architectural Diagnostic Flow">
      {/* Outer Technical Frame */}
      <div className="border border-white/[0.08] bg-[#05070D]/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg relative overflow-hidden">
        {/* Top Architectural Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4 mb-6 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-white font-medium tracking-wider">DIAGNOSTIC ARCHITECTURE // BIA-FLOW-01</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-slate-500">
            <span>AXIS: OPERATIONAL TOPOLOGY</span>
            <span>SPEC: v1.0</span>
            <span>MODE: DISCOVERY</span>
          </div>
        </div>

        {/* Desktop / Tablet Large SVG Architectural Canvas */}
        <div className="hidden md:block w-full overflow-x-auto">
          <svg
            viewBox="0 0 880 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full min-w-[700px] h-auto text-slate-400 select-none"
            aria-hidden="true"
          >
            {/* Coordinate Grid Background */}
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
              </pattern>
              <linearGradient id="flow-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            <rect width="880" height="180" fill="url(#hero-grid)" />

            {/* Horizontal Continuous Coordinate Baseline */}
            <line x1="40" y1="90" x2="840" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Animated Flow Vector */}
            <line
              x1="60"
              y1="90"
              x2="820"
              y2="90"
              stroke="url(#flow-line-grad)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className="motion-safe:animate-[dash_15s_linear_infinite]"
            />

            {/* Stage 1: Business */}
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="100" height="90" rx="4" fill="#0A0D16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="0" y1="24" x2="100" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <text x="12" y="16" fill="#60A5FA" fontSize="9" className="font-mono" fontWeight="600">01 // CONTEXT</text>
              <text x="12" y="48" fill="#FFFFFF" fontSize="13" fontWeight="600">Business</text>
              <text x="12" y="66" fill="#94A3B8" fontSize="10">Operating reality</text>
              <text x="12" y="79" fill="#64748B" fontSize="9">Value creation</text>
              <circle cx="50" cy="90" r="3" fill="#3B82F6" />
            </g>

            {/* Connector Arrow 1 */}
            <path d="M 160 90 L 190 90" stroke="#3B82F6" strokeWidth="1" />
            <polygon points="190,87 196,90 190,93" fill="#3B82F6" />

            {/* Stage 2: People / Processes / Systems */}
            <g transform="translate(196, 35)">
              <rect x="0" y="0" width="130" height="110" rx="4" fill="#0D111E" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
              <line x1="0" y1="24" x2="130" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <text x="12" y="16" fill="#60A5FA" fontSize="9" className="font-mono" fontWeight="600">02 // TOPOLOGY</text>
              <text x="12" y="46" fill="#FFFFFF" fontSize="13" fontWeight="600">People • Ops</text>
              <text x="12" y="63" fill="#94A3B8" fontSize="10">Roles & Judgement</text>
              <text x="12" y="78" fill="#94A3B8" fontSize="10">Process Handoffs</text>
              <text x="12" y="93" fill="#64748B" fontSize="9">Current Systems</text>
            </g>

            {/* Connector Arrow 2 */}
            <path d="M 326 90 L 356 90" stroke="#3B82F6" strokeWidth="1" />
            <polygon points="356,87 362,90 356,93" fill="#3B82F6" />

            {/* Stage 3: Information */}
            <g transform="translate(362, 45)">
              <rect x="0" y="0" width="115" height="90" rx="4" fill="#0A0D16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="0" y1="24" x2="115" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <text x="12" y="16" fill="#60A5FA" fontSize="9" className="font-mono" fontWeight="600">03 // FLOW</text>
              <text x="12" y="48" fill="#FFFFFF" fontSize="13" fontWeight="600">Information</text>
              <text x="12" y="66" fill="#94A3B8" fontSize="10">Structure & silos</text>
              <text x="12" y="79" fill="#64748B" fontSize="9">Accessibility gaps</text>
            </g>

            {/* Connector Arrow 3 */}
            <path d="M 477 90 L 507 90" stroke="#3B82F6" strokeWidth="1" />
            <polygon points="507,87 513,90 507,93" fill="#3B82F6" />

            {/* Stage 4: AI Readiness */}
            <g transform="translate(513, 45)">
              <rect x="0" y="0" width="115" height="90" rx="4" fill="#0A0D16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="0" y1="24" x2="115" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <text x="12" y="16" fill="#60A5FA" fontSize="9" className="font-mono" fontWeight="600">04 // MATURITY</text>
              <text x="12" y="48" fill="#FFFFFF" fontSize="13" fontWeight="600">AI Readiness</text>
              <text x="12" y="66" fill="#94A3B8" fontSize="10">Governance & Data</text>
              <text x="12" y="79" fill="#64748B" fontSize="9">Security boundaries</text>
            </g>

            {/* Connector Arrow 4 */}
            <path d="M 628 90 L 658 90" stroke="#3B82F6" strokeWidth="1" />
            <polygon points="658,87 664,90 658,93" fill="#3B82F6" />

            {/* Stage 5: Opportunities */}
            <g transform="translate(664, 45)">
              <rect x="0" y="0" width="105" height="90" rx="4" fill="#0A0D16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="0" y1="24" x2="105" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <text x="12" y="16" fill="#60A5FA" fontSize="9" className="font-mono" fontWeight="600">05 // SURFACE</text>
              <text x="12" y="48" fill="#FFFFFF" fontSize="13" fontWeight="600">Opportunities</text>
              <text x="12" y="66" fill="#94A3B8" fontSize="10">Friction analysis</text>
              <text x="12" y="79" fill="#64748B" fontSize="9">Leverage points</text>
            </g>

            {/* Connector Arrow 5 */}
            <path d="M 769 90 L 789 90" stroke="#3B82F6" strokeWidth="1" />
            <polygon points="789,87 795,90 789,93" fill="#3B82F6" />

            {/* Stage 6: Priorities */}
            <g transform="translate(795, 35)">
              <rect x="0" y="0" width="75" height="110" rx="4" fill="#0E1626" stroke="#3B82F6" strokeWidth="1.5" />
              <line x1="0" y1="24" x2="75" y2="24" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
              <text x="10" y="16" fill="#93C5FD" fontSize="8" className="font-mono" fontWeight="600">06 // ACTION</text>
              <text x="10" y="46" fill="#FFFFFF" fontSize="12" fontWeight="700">Priorities</text>
              <text x="10" y="64" fill="#93C5FD" fontSize="9" className="font-mono">BUY</text>
              <text x="10" y="78" fill="#93C5FD" fontSize="9" className="font-mono">CONFIGURE</text>
              <text x="10" y="92" fill="#93C5FD" fontSize="9" className="font-mono">BUILD</text>
              <text x="10" y="103" fill="#64748B" fontSize="8" className="font-mono">DEFER</text>
            </g>
          </svg>
        </div>

        {/* Mobile Responsive Vertical Sequence */}
        <div className="block md:hidden space-y-3 font-mono text-xs">
          {[
            { step: "01", title: "Business", sub: "Operating reality & value creation" },
            { step: "02", title: "People / Processes / Systems", sub: "Roles, handoffs & operational tech" },
            { step: "03", title: "Information", sub: "Structure, accessibility & silos" },
            { step: "04", title: "AI Readiness", sub: "Data hygiene, security & governance" },
            { step: "05", title: "Opportunities", sub: "Friction analysis & leverage surfaces" },
            { step: "06", title: "Priorities", sub: "Buy / Configure / Build / Defer" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded border border-white/[0.08] bg-[#0A0D16]"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-blue-400 font-semibold">{item.step}</span>
                <span className="text-white font-medium">{item.title}</span>
              </div>
              <span className="text-[10px] text-slate-500 hidden sm:inline">{item.sub}</span>
            </div>
          ))}
        </div>

        {/* Bottom Annotation Footnote */}
        <div className="mt-4 pt-3 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <span>CONCEPTUAL DIAGNOSTIC SEQUENCE // START WITH THE BUSINESS</span>
          <span className="text-slate-400">CLARITY BEFORE TECHNOLOGY IMPLEMENTATION</span>
        </div>
      </div>
    </div>
  );
};
