import React from "react";
import { motion } from "motion/react";
import { Lock } from "lucide-react";

/* -------------------------------------------------------------------------
   01. OPERATING REALITY VISUAL (Section 02)
   Clean, simple visual flow:
   DOCUMENTS, SPREADSHEETS, SYSTEMS -> PEOPLE -> MANUAL WORK -> DELAY
   Animates when entering viewport to tell the story of friction and delay.
------------------------------------------------------------------------- */
interface OperatingRealityVisualProps {
  industryShortName: string;
}

export const OperatingRealityVisual: React.FC<OperatingRealityVisualProps> = () => {
  return (
    <div className="w-full py-4 space-y-4 select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
        <span className="text-slate-400 font-medium">
          How work moves today
        </span>
        <span className="text-rose-400/90 font-medium">
          Where work slows down
        </span>
      </div>

      {/* SVG Diagram - Clean line-based illustration with storytelling reveal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative w-full h-[220px]"
      >
        <svg
          className="w-full h-full static-on-mobile"
          viewBox="0 0 540 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle gradient definition */}
          <defs>
            <linearGradient id="grad-friction-subtle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(244, 63, 94, 0.04)" />
              <stop offset="100%" stopColor="rgba(244, 63, 94, 0.14)" />
            </linearGradient>
          </defs>

          {/* Left: 3 Core Sources (DOCUMENTS, SPREADSHEETS, SYSTEMS) revealing one by one */}
          <motion.g
            variants={{
              hidden: { opacity: 0, x: -8 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.1 }
              }
            }}
          >
            <rect x="10" y="24" width="115" height="34" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="#0A0E18" />
            <text x="20" y="45" fill="#cbd5e1" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">DOCUMENTS</text>
          </motion.g>

          <motion.g
            variants={{
              hidden: { opacity: 0, x: -8 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.25 }
              }
            }}
          >
            <rect x="10" y="76" width="115" height="34" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="#0A0E18" />
            <text x="20" y="97" fill="#cbd5e1" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">SPREADSHEETS</text>
          </motion.g>

          <motion.g
            variants={{
              hidden: { opacity: 0, x: -8 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.4 }
              }
            }}
          >
            <rect x="10" y="128" width="115" height="34" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="#0A0E18" />
            <text x="20" y="149" fill="#cbd5e1" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">SYSTEMS & DATABASES</text>
          </motion.g>

          {/* Hand-off connecting paths into manual step - drawing across */}
          <motion.path
            d="M 125 41 L 210 88"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="3 3"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.55, ease: "easeOut" }
              }
            }}
          />
          <motion.path
            d="M 125 93 L 210 97"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="3 3"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
              }
            }}
          />
          <motion.path
            d="M 125 145 L 210 106"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="3 3"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.65, ease: "easeOut" }
              }
            }}
          />

          {/* Center: People & Manual Work appearing */}
          <motion.g
            variants={{
              hidden: { opacity: 0, scale: 0.96 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.45, delay: 0.85 }
              }
            }}
          >
            <rect x="210" y="60" width="135" height="74" rx="3" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1" fill="url(#grad-friction-subtle)" />
            <text x="222" y="84" fill="#ffffff" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              PEOPLE
            </text>
            <text x="222" y="100" fill="#f87171" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">
              • Manual work
            </text>
            <text x="222" y="115" fill="#cbd5e1" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif">
              • Copying & checking
            </text>
          </motion.g>

          {/* Flow line from manual check to delay */}
          <motion.line
            x1="345"
            y1="97"
            x2="395"
            y2="97"
            stroke="rgba(244,63,94,0.6)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.4, delay: 1.15, ease: "easeOut" }
              }
            }}
          />

          {/* Right: Bottleneck / Delay appearing */}
          <motion.g
            variants={{
              hidden: { opacity: 0, x: 8 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.45, delay: 1.35 }
              }
            }}
          >
            <rect x="395" y="60" width="135" height="74" rx="3" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="#0E131F" />
            <text x="408" y="84" fill="#ffffff" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              DELAY
            </text>
            <text x="408" y="100" fill="#f87171" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">
              • Slower response time
            </text>
            <text x="408" y="115" fill="#94a3b8" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif">
              • Capacity bottlenecks
            </text>
          </motion.g>
        </svg>
      </motion.div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
        <span>Information spread across systems</span>
        <span className="text-rose-400/90 font-medium">Manual work & delay</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------
   02. LEVERAGE TRANSFORMATION VISUAL (Section 03)
   Clean 3-Stage:
   THE PROBLEM -> WHAT STRATISION BUILDS -> THE BENEFIT
   Sequenced entry with intervention path motion.
------------------------------------------------------------------------- */
interface LeverageTransformationVisualProps {
  problem: string;
  aiRole: string;
  leverage: string;
  opportunityTitle: string;
  opportunityIndex: number;
}

export const LeverageTransformationVisual: React.FC<LeverageTransformationVisualProps> = ({
  problem,
  aiRole,
  leverage,
}) => {
  return (
    <div className="w-full space-y-6 select-none">
      {/* 3 Executive Stages revealing in sequence */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
      >
        {/* Stage 1: The Problem */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }
          }}
          className="lg:col-span-4 p-5 border-l-2 border-rose-500/80 bg-white/[0.01] space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-rose-400 font-semibold">
              The problem
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            {problem}
          </p>
        </motion.div>

        {/* Stage 2: What Stratision Builds (Center) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } }
          }}
          className="lg:col-span-4 p-5 border-l-2 border-blue-500 bg-blue-950/10 space-y-3 relative"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-blue-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              What Stratision builds
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
            {aiRole}
          </p>
          <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-xs text-blue-300">
            <span>Read</span>
            <span className="text-blue-400">→</span>
            <span>Connect</span>
            <span className="text-blue-400">→</span>
            <span>Check</span>
            <span className="text-blue-400">→</span>
            <span>Complete</span>
          </div>
        </motion.div>

        {/* Stage 3: The Benefit */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } }
          }}
          className="lg:col-span-4 p-5 border-l-2 border-emerald-500/80 bg-emerald-950/10 space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-emerald-400 font-semibold">
              The benefit
            </span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 font-semibold leading-relaxed">
            {leverage}
          </p>
          <div className="pt-2 text-xs text-emerald-400 font-medium">
            Faster decisions • Less manual work
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------
   03. FOUR CAPABILITY EDITORIAL AREAS (Section 04)
   Progressive scroll reveal with SVG line drawing:
   01 Workforce: Employee -> Knowledge -> Answer
   02 Operations: Task -> Check -> Complete
   03 Sales: Enquiry -> Review -> Response
   04 Knowledge: Information -> Insight -> Decision
------------------------------------------------------------------------- */
interface CapabilityOverviewProps {
  activeFamilyNumber: string;
  onSelectFamily: (familyNumber: string) => void;
}

export const CapabilityOverviewVisual: React.FC<CapabilityOverviewProps> = ({
  activeFamilyNumber,
  onSelectFamily,
}) => {
  const cards = [
    {
      num: "01",
      name: "WORKFORCE INTELLIGENCE",
      flow: ["Employee", "Knowledge", "Answer"],
      summary: "Helps teams find company knowledge, research and approved guidance quickly.",
    },
    {
      num: "02",
      name: "OPERATIONS & WORKFLOWS",
      flow: ["Task", "Check", "Complete"],
      summary: "Connects repetitive tasks and keeps work moving between systems.",
    },
    {
      num: "03",
      name: "SALES & CUSTOMER OPERATIONS",
      flow: ["Enquiry", "Review", "Response"],
      summary: "Helps teams respond to enquiries, qualify opportunities and support customers.",
    },
    {
      num: "04",
      name: "KNOWLEDGE & DECISION SUPPORT",
      flow: ["Information", "Insight", "Decision"],
      summary: "Turns company information into useful answers and clearer decisions.",
    },
  ];

  return (
    <div className="w-full py-4 border-b border-white/[0.08] select-none">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cards.map((c, idx) => {
          const isActive = activeFamilyNumber === c.num;
          return (
            <motion.button
              key={c.num}
              onClick={() => onSelectFamily(c.num)}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, delay: idx * 0.12, ease: "easeOut" }
                }
              }}
              className={`text-left p-5 transition-all duration-200 cursor-pointer border-t-2 ${
                isActive
                  ? "border-blue-500 bg-white/[0.03] text-white"
                  : "border-white/[0.1] bg-transparent text-slate-400 hover:text-slate-200 hover:border-white/30"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-blue-400">
                  {c.num}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isActive ? "bg-blue-400" : "bg-slate-700"
                  }`}
                />
              </div>

              <div
                className="text-sm font-bold tracking-tight uppercase mb-3 text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {c.name}
              </div>

              {/* Minimal Line Illustration with SVG stroke drawing */}
              <div className="py-2.5 px-3 bg-white/[0.02] border border-white/[0.06] rounded mb-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>{c.flow[0]}</span>
                  <span className="text-blue-400 font-semibold">→</span>
                  <span>{c.flow[1]}</span>
                  <span className="text-blue-400 font-semibold">→</span>
                  <span className="text-emerald-400 font-semibold">{c.flow[2]}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {c.summary}
              </p>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------
   04. GOVERNANCE & CONTROL VISUAL (Section 06)
   "How your information is protected and controlled"
   Step-by-step SVG motion reveal:
   YOUR DATA -> SECURITY DESIGN -> CHECKS & AUDIT -> YOUR TEAM
------------------------------------------------------------------------- */
interface GovernanceBoundaryVisualProps {
  industryShortName: string;
}

export const GovernanceBoundaryVisual: React.FC<GovernanceBoundaryVisualProps> = () => {
  return (
    <div className="w-full py-4 space-y-4 select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
        <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-emerald-400" />
          How your information is controlled
        </span>
        <span className="text-slate-400 font-medium">
          Governed & audited
        </span>
      </div>

      {/* SVG Simple Flow Visual with sequential entrance */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative w-full h-[200px]"
      >
        <svg
          className="w-full h-full static-on-mobile"
          viewBox="0 0 540 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Step 1: Your Information */}
          <motion.g
            variants={{
              hidden: { opacity: 0, x: -6 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } }
            }}
          >
            <rect x="10" y="50" width="95" height="70" rx="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="#0A0E18" />
            <text x="20" y="74" fill="#ffffff" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              YOUR DATA
            </text>
            <text x="20" y="90" fill="#94a3b8" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Contracts</text>
            <text x="20" y="102" fill="#94a3b8" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Financials</text>
          </motion.g>

          {/* Arrow 1 -> 2 */}
          <motion.path
            d="M 105 85 L 135 85"
            stroke="rgba(59,130,246,0.7)"
            strokeWidth="1.2"
            markerEnd="url(#gov-arrow)"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { duration: 0.35, delay: 0.35, ease: "easeOut" } }
            }}
          />

          {/* Step 2: Secure Environment */}
          <motion.g
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.55 } }
            }}
          >
            <rect x="140" y="40" width="115" height="90" rx="3" stroke="rgba(59,130,246,0.5)" strokeWidth="1" fill="#0D1627" />
            <text x="150" y="64" fill="#60a5fa" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              SECURITY DESIGN
            </text>
            <text x="150" y="80" fill="#cbd5e1" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Governed access</text>
            <text x="150" y="92" fill="#cbd5e1" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Engagement terms</text>
            <text x="150" y="112" fill="#34d399" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">✓ Protected boundaries</text>
          </motion.g>

          {/* Arrow 2 -> 3 */}
          <motion.path
            d="M 255 85 L 285 85"
            stroke="rgba(59,130,246,0.7)"
            strokeWidth="1.2"
            markerEnd="url(#gov-arrow)"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { duration: 0.35, delay: 0.8, ease: "easeOut" } }
            }}
          />

          {/* Step 3: Stratision Checks */}
          <motion.g
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.0 } }
            }}
          >
            <rect x="290" y="45" width="115" height="80" rx="3" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="#0A0E18" />
            <text x="300" y="68" fill="#ffffff" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              CHECKS & AUDIT
            </text>
            <text x="300" y="84" fill="#94a3b8" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Traced to source</text>
            <text x="300" y="96" fill="#94a3b8" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Clear record</text>
            <text x="300" y="108" fill="#94a3b8" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Rule checks</text>
          </motion.g>

          {/* Arrow 3 -> 4 */}
          <motion.path
            d="M 405 85 L 435 85"
            stroke="rgba(16,185,129,0.7)"
            strokeWidth="1.2"
            markerEnd="url(#gov-arrow-green)"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { duration: 0.35, delay: 1.25, ease: "easeOut" } }
            }}
          />

          {/* Step 4: Your Team in Control */}
          <motion.g
            variants={{
              hidden: { opacity: 0, x: 6 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.45 } }
            }}
          >
            <rect x="440" y="50" width="90" height="70" rx="3" stroke="rgba(16,185,129,0.5)" strokeWidth="1" fill="#0A1612" />
            <text x="448" y="74" fill="#34d399" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              YOUR TEAM
            </text>
            <text x="448" y="90" fill="#a7f3d0" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Human review</text>
            <text x="448" y="102" fill="#a7f3d0" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">• Sign-off power</text>
          </motion.g>

          <defs>
            <marker id="gov-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
              <path d="M 0 0 L 5 2.5 L 0 5 z" fill="rgba(59,130,246,0.8)" />
            </marker>
            <marker id="gov-arrow-green" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
              <path d="M 0 0 L 5 2.5 L 0 5 z" fill="rgba(16,185,129,0.8)" />
            </marker>
          </defs>
        </svg>
      </motion.div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
        <span>Security, privacy & governance</span>
        <span className="text-emerald-400 font-medium">People in control</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------
   05. CTA MOTIF VISUAL (Section 07)
   Restrained line motif: YOUR WORKFLOWS -> ASSESSMENT™ -> WORKING SYSTEM
   Draws progressively as CTA enters viewport, then remains visually calm.
------------------------------------------------------------------------- */
export const CtaMotifVisual: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      className="w-full max-w-xl mx-auto py-2 opacity-80 hidden md:block"
    >
      <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
        <span>Your workflows</span>
        <span className="text-slate-300 font-medium">Assessment</span>
        <span className="text-emerald-400 font-medium">Working system</span>
      </div>
      <div className="relative w-full h-2">
        <svg className="w-full h-full" viewBox="0 0 400 8" fill="none">
          <motion.line
            x1="0"
            y1="4"
            x2="400"
            y2="4"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          />
          <motion.circle
            cx="10"
            cy="4"
            r="3"
            fill="#f43f5e"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }
            }}
          />
          <motion.circle
            cx="200"
            cy="4"
            r="3"
            fill="#3b82f6"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 0.45 } }
            }}
          />
          <motion.circle
            cx="390"
            cy="4"
            r="3"
            fill="#10b981"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 0.8 } }
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
};


