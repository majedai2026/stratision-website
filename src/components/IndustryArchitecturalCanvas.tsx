import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { ModelledScenario } from "../data/industriesData";

interface IndustryArchitecturalCanvasProps {
  scenario: ModelledScenario;
}

export const IndustryArchitecturalCanvas: React.FC<IndustryArchitecturalCanvasProps> = ({ scenario }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const steps = [
    {
      key: "understand",
      data: scenario.steps.understand,
      icon: Search,
      primaryLabel: "READ",
      subLabel: "Read & Organise",
      xPos: 200,
      stageBadge: "STAGE 01",
    },
    {
      key: "orchestrate",
      data: scenario.steps.orchestrate,
      icon: Workflow,
      primaryLabel: "CONNECT",
      subLabel: "Connect the Steps",
      xPos: 380,
      stageBadge: "STAGE 02",
    },
    {
      key: "verify",
      data: scenario.steps.verify,
      icon: ShieldCheck,
      primaryLabel: "CHECK",
      subLabel: "Check the Result",
      xPos: 560,
      stageBadge: "STAGE 03",
    },
    {
      key: "action",
      data: scenario.steps.action,
      icon: CheckCircle2,
      primaryLabel: "COMPLETE",
      subLabel: "Complete the Task",
      xPos: 720,
      stageBadge: "STAGE 04",
    },
  ];

  // Auto-play through stages smoothly unless user manually paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  const currentPacketX = steps[activeStepIndex].xPos;

  return (
    <div className="space-y-12">
      {/* Top Header & Simulation Controls */}
      <div className="pb-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold">
              HOW THE SYSTEM OPERATES
            </span>
            <span className="text-slate-600 font-mono text-xs">/</span>
            <span className="text-[11px] font-mono uppercase text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE FLOW SIMULATION
            </span>
          </div>
          <h3
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {scenario.title}
          </h3>
        </div>

        {/* Play/Pause Control */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 self-start sm:self-auto">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors flex items-center gap-1.5 cursor-pointer"
            title={isAutoPlaying ? "Pause flow simulation" : "Resume flow simulation"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3 h-3 text-blue-400" />
                <span>PAUSE FLOW</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-blue-400" />
                <span>AUTO-PLAY</span>
              </>
            )}
          </button>
          <button
            onClick={() => {
              setActiveStepIndex(0);
              setIsAutoPlaying(true);
            }}
            className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
            title="Reset to Stage 01"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Primary Transformation Stage Flow with Animated Traveling Information Packet */}
      <div className="space-y-8">
        
        {/* Animated SVG Pipeline Line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="w-full h-16 py-1 select-none"
        >
          <svg className="w-full h-full" viewBox="0 0 760 52" fill="none">
            <defs>
              <linearGradient id="active-wire-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="70%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
              <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Wire */}
            <motion.line
              x1="20"
              y1="22"
              x2="740"
              y2="22"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            />

            {/* Active illuminated path up to current packet position */}
            <motion.line
              x1="20"
              y1="22"
              x2={currentPacketX}
              y2="22"
              stroke="url(#active-wire-gradient)"
              strokeWidth="2"
              animate={{ x2: currentPacketX }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Intake Node (x=20) */}
            <circle cx="20" cy="22" r="3" fill="#64748b" />
            <text x="20" y="44" fill="#64748b" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle">
              INPUT
            </text>

            {/* Step 01: Read & Organise (x=200) */}
            <g
              className="cursor-pointer"
              onClick={() => {
                setActiveStepIndex(0);
                setIsAutoPlaying(false);
              }}
            >
              <circle
                cx="200"
                cy="22"
                r={activeStepIndex === 0 ? "8" : "5"}
                fill={activeStepIndex >= 0 ? "#1e293b" : "#0f172a"}
                stroke={activeStepIndex === 0 ? "#60a5fa" : activeStepIndex > 0 ? "#3b82f6" : "rgba(255,255,255,0.2)"}
                strokeWidth={activeStepIndex === 0 ? "2" : "1.5"}
              />
              <text
                x="200"
                y="44"
                fill={activeStepIndex === 0 ? "#60a5fa" : activeStepIndex > 0 ? "#94a3b8" : "#64748b"}
                fontSize="8"
                fontWeight={activeStepIndex === 0 ? "700" : "500"}
                fontFamily="'Plus Jakarta Sans', sans-serif"
                textAnchor="middle"
              >
                01 READ & ORGANISE
              </text>
            </g>

            {/* Step 02: Connect the Steps (x=380) */}
            <g
              className="cursor-pointer"
              onClick={() => {
                setActiveStepIndex(1);
                setIsAutoPlaying(false);
              }}
            >
              <circle
                cx="380"
                cy="22"
                r={activeStepIndex === 1 ? "8" : "5"}
                fill={activeStepIndex >= 1 ? "#1e293b" : "#0f172a"}
                stroke={activeStepIndex === 1 ? "#60a5fa" : activeStepIndex > 1 ? "#3b82f6" : "rgba(255,255,255,0.2)"}
                strokeWidth={activeStepIndex === 1 ? "2" : "1.5"}
              />
              <text
                x="380"
                y="44"
                fill={activeStepIndex === 1 ? "#60a5fa" : activeStepIndex > 1 ? "#94a3b8" : "#64748b"}
                fontSize="8"
                fontWeight={activeStepIndex === 1 ? "700" : "500"}
                fontFamily="'Plus Jakarta Sans', sans-serif"
                textAnchor="middle"
              >
                02 CONNECT STEPS
              </text>
            </g>

            {/* Step 03: Check the Result (x=560) */}
            <g
              className="cursor-pointer"
              onClick={() => {
                setActiveStepIndex(2);
                setIsAutoPlaying(false);
              }}
            >
              <circle
                cx="560"
                cy="22"
                r={activeStepIndex === 2 ? "8" : "5"}
                fill={activeStepIndex >= 2 ? "#064e3b" : "#0f172a"}
                stroke={activeStepIndex === 2 ? "#34d399" : activeStepIndex > 2 ? "#10b981" : "rgba(255,255,255,0.2)"}
                strokeWidth={activeStepIndex === 2 ? "2" : "1.5"}
              />
              <text
                x="560"
                y="44"
                fill={activeStepIndex === 2 ? "#34d399" : activeStepIndex > 2 ? "#94a3b8" : "#64748b"}
                fontSize="8"
                fontWeight={activeStepIndex === 2 ? "700" : "500"}
                fontFamily="'Plus Jakarta Sans', sans-serif"
                textAnchor="middle"
              >
                03 CHECK RESULT
              </text>
            </g>

            {/* Step 04: Complete Task (x=720) */}
            <g
              className="cursor-pointer"
              onClick={() => {
                setActiveStepIndex(3);
                setIsAutoPlaying(false);
              }}
            >
              <circle
                cx="720"
                cy="22"
                r={activeStepIndex === 3 ? "8" : "5"}
                fill={activeStepIndex >= 3 ? "#064e3b" : "#0f172a"}
                stroke={activeStepIndex === 3 ? "#34d399" : "rgba(255,255,255,0.2)"}
                strokeWidth={activeStepIndex === 3 ? "2" : "1.5"}
              />
              <text
                x="720"
                y="44"
                fill={activeStepIndex === 3 ? "#34d399" : "#64748b"}
                fontSize="8"
                fontWeight={activeStepIndex === 3 ? "700" : "500"}
                fontFamily="'Plus Jakarta Sans', sans-serif"
                textAnchor="middle"
              >
                04 COMPLETE TASK
              </text>
            </g>

            {/* THE TRAVELING INFORMATION PACKET (Smooth gliding motion) */}
            <motion.g
              animate={{ x: currentPacketX }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Outer Pulse Ring */}
              <circle cx="0" cy="22" r="12" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.4" className="animate-ping" />
              {/* Packet Glow Capsule */}
              <circle cx="0" cy="22" r="6" fill="#3b82f6" filter="url(#packet-glow)" />
              <circle cx="0" cy="22" r="3" fill="#ffffff" />
            </motion.g>
          </svg>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
        
          {/* Inputs Column (4 Cols) with staggered reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-2 pb-4 border-b border-white/[0.06]">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                INPUT DOCUMENTS
              </span>
              <h4
                className="text-lg font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Documents & Files
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {scenario.inputDescription}
              </p>
            </div>

            {/* List of Inputs with hairline dividers and staggered reveals */}
            <div className="space-y-0 divide-y divide-white/[0.05]">
              {scenario.inputsList.map((inp, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.35, delay: idx * 0.08 }
                    }
                  }}
                  className="py-3.5 flex items-start gap-3 group"
                >
                  <span className="text-xs font-mono text-blue-400 font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-xs text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                    {inp}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stepper & Active Stage View (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.key}
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`text-left p-4 transition-all duration-200 cursor-pointer border-t-2 relative ${
                      isActive
                        ? "border-blue-500 text-white bg-white/[0.02]"
                        : "border-white/[0.1] text-slate-400 hover:text-slate-200 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-blue-400 font-bold">
                        STEP 0{idx + 1}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-tight text-white">
                      {step.primaryLabel}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-0.5">
                      {step.subLabel}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detail View with smooth transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 pt-4"
              >
                <div className="space-y-3 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono uppercase text-blue-400 font-bold">
                      STEP 0{activeStepIndex + 1}
                    </span>
                    <span className="text-slate-600 font-mono text-xs">/</span>
                    <span className="text-[11px] font-mono uppercase text-slate-400">
                      {steps[activeStepIndex].subLabel}
                    </span>
                  </div>

                  <h4
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {steps[activeStepIndex].data.label}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {steps[activeStepIndex].data.description}
                  </p>
                </div>

                {/* Executive Assurances */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                      SOURCE TRACEABILITY
                    </span>
                    <p className="text-xs text-slate-300 font-medium">
                      Important findings can be traced back to the original document and page.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                      GOVERNED DEPLOYMENT
                    </span>
                    <p className="text-xs text-slate-300 font-medium">
                      Data handling and model use are governed according to the terms of your engagement.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Deliverable & Business Outcome Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
        }}
        className="pt-10 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
      >
        <div className="md:col-span-4 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
            WHAT YOU RECEIVE
          </span>
          <h4
            className="text-lg font-bold text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Finished Deliverable
          </h4>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block font-semibold">
              OUTPUT
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {scenario.outputSummary}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block font-semibold">
              BUSINESS BENEFIT
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {scenario.businessOutcome}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Governance Footnote */}
      <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2.5">
          <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>{scenario.governanceNote}</span>
        </div>
      </div>
    </div>
  );
};


