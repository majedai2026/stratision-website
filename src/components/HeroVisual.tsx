import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, CheckCircle2, RefreshCw, Cpu, Database, ArrowRight } from "lucide-react";

interface WorkflowStep {
  id: string;
  label: string;
  source: string;
  sourceType: string;
  reasoning: string;
  guardrail: string;
  action: string;
  actionDestination: string;
  latency: string;
}

const WORKFLOW_PRESETS: WorkflowStep[] = [
  {
    id: "logistics",
    label: "Cross-Border Cargo Freight",
    source: "Waybill PDF #WB-8491 + Port Sensor Stream",
    sourceType: "UNSTRUCTURED TELEMETRY",
    reasoning: "Customs tariff matching & multi-modal route synthesis",
    guardrail: "Deterministic tariff validation against HS schedule",
    action: "Automated SAP clearance dispatch & carrier alert",
    actionDestination: "PORT PORTAL + SAP ERP",
    latency: "MODELLED",
  },
  {
    id: "finance",
    label: "Private Equity Portfolio Triage",
    source: "248-Page CIM Document + Ledger CSV",
    sourceType: "CONFIDENTIAL DOSSIER",
    reasoning: "Covenant clause extraction & EBITDA reconciliation",
    guardrail: "Strict citation verification with source references",
    action: "Deterministic risk memorandum synced to deal room",
    actionDestination: "SECURE DEAL ROOM",
    latency: "MODELLED",
  },
  {
    id: "underwriting",
    label: "Commercial Insurance Adjudication",
    source: "Broker Submission Pack + Claim History",
    sourceType: "POLICY BROKER PACKET",
    reasoning: "Actuarial guideline verification & loss heuristic audit",
    guardrail: "Delegated underwriting authority gate check",
    action: "Bound policy quote issued within underwriter guardrails",
    actionDestination: "UNDERWRITING CORE",
    latency: "MODELLED",
  },
];

export const HeroVisual: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [activeStage, setActiveStage] = useState<number>(0);

  // Active state cycling simulating continuous system data progression:
  // 0: INPUT -> 1: UNDERSTAND -> 2: ORCHESTRATE -> 3: VERIFY -> 4: ACTION
  useEffect(() => {
    const stageTimer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 1400);
    return () => clearInterval(stageTimer);
  }, []);

  // Cycle scenario presets gently
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePresetIndex((prev) => (prev + 1) % WORKFLOW_PRESETS.length);
      setCycleCount((c) => c + 1);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = WORKFLOW_PRESETS[activePresetIndex];

  const pipelineStages = [
    { label: "INPUT", sub: "Ingest" },
    { label: "UNDERSTAND", sub: "Parse" },
    { label: "ORCHESTRATE", sub: "Route" },
    { label: "VERIFY", sub: "Validate" },
    { label: "ACTION", sub: "Commit" },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-[#090C14] border border-white/[0.1] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden">
      {/* Precision hairline header accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Stage Header & Preset Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-300 font-mono">
            MODELLED ARCHITECTURAL FLOW // SIMULATION
          </span>
        </div>

        {/* Scenario Switcher */}
        <div className="flex items-center gap-1.5 bg-[#06080E] p-1 rounded-lg border border-white/[0.08]">
          {WORKFLOW_PRESETS.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePresetIndex(idx);
                setCycleCount((c) => c + 1);
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-200 cursor-pointer font-mono ${
                activePresetIndex === idx
                  ? "bg-blue-600/25 text-blue-300 border border-blue-500/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 border border-transparent"
              }`}
            >
              {preset.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Flow Stage Indicator: INPUT -> UNDERSTAND -> ORCHESTRATE -> VERIFY -> ACTION */}
      <div className="mt-5 mb-5 pt-1">
        <div className="grid grid-cols-5 gap-1 text-center">
          {pipelineStages.map((stg, sIdx) => {
            const isCurrent = activeStage === sIdx;
            const isPassed = activeStage > sIdx;
            return (
              <div key={stg.label} className="flex flex-col items-center">
                <div
                  className={`text-[9px] font-mono font-semibold tracking-wider transition-colors duration-300 ${
                    isCurrent ? "text-blue-400" : isPassed ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {stg.label}
                </div>
                <div className="w-full mt-1.5 h-[2px] rounded-full bg-white/[0.06] overflow-hidden relative">
                  {isCurrent && (
                    <motion.div
                      layoutId="active-stage-indicator"
                      className="absolute inset-0 bg-blue-400"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {isPassed && <div className="absolute inset-0 bg-blue-500/40" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic SVG Data Packet Spine */}
        <div className="mt-2 w-full">
          <svg viewBox="0 0 540 22" className="w-full h-5" fill="none">
            <line x1="20" y1="11" x2="520" y2="11" stroke="#1E293B" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Seamless animated packet */}
            <motion.circle
              cx="20"
              cy="11"
              r="3.5"
              fill="#60A5FA"
              animate={{ cx: [20, 145, 270, 395, 520] }}
              transition={{
                duration: 5.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Pipeline Stage Nodes */}
            <circle cx="20" cy="11" r="2.5" fill="#3B82F6" />
            <circle cx="145" cy="11" r="2.5" fill="#3B82F6" />
            <circle cx="270" cy="11" r="3" fill="#60A5FA" />
            <circle cx="395" cy="11" r="2.5" fill="#10B981" />
            <circle cx="520" cy="11" r="3" fill="#10B981" />
          </svg>
        </div>
      </div>

      {/* 3-Core Nodes Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 relative">
        
        {/* Stage 1: Ingestion */}
        <div
          className={`rounded-xl border p-4 flex flex-col justify-between transition-all duration-300 ${
            activeStage <= 1
              ? "bg-[#111726] border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.08)]"
              : "bg-[#0E1320] border-white/[0.07]"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase flex items-center gap-1.5 font-mono">
                <Database className="w-3 h-3 text-slate-400" />
                01. INGESTION
              </span>
              <span className="text-[9px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                CLIENT VPC
              </span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`source-${current.id}-${cycleCount}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="space-y-1.5"
              >
                <div className="text-[13px] font-semibold text-slate-200 leading-snug">
                  {current.source}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {current.sourceType}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
            <span className="text-slate-500 font-mono">STREAM</span>
            <span className="font-mono text-slate-300">ACTIVE</span>
          </div>
        </div>

        {/* Stage 2: Orchestration & Reasoning Core */}
        <div
          className={`rounded-xl border p-4 flex flex-col justify-between transition-all duration-300 relative ${
            activeStage === 2 || activeStage === 3
              ? "bg-[#12192A] border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              : "bg-[#0E1320] border-white/[0.07]"
          }`}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-500 text-slate-950 font-bold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
            Stratision Core
          </div>

          <div>
            <div className="flex items-center justify-between mb-3 mt-1">
              <span className="text-[10px] font-semibold text-blue-400 tracking-wider uppercase flex items-center gap-1.5 font-mono">
                <Cpu className="w-3 h-3 text-blue-400" />
                02. ORCHESTRATE
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="w-2.5 h-2.5 text-blue-400" />
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`reason-${current.id}-${cycleCount}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="space-y-1.5"
              >
                <div className="text-[13px] font-semibold text-white leading-snug">
                  {current.reasoning}
                </div>
                <div className="text-[10px] text-slate-300 flex items-center gap-1 font-mono">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{current.guardrail}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
            <span className="text-slate-500 font-mono">TELEMETRY</span>
            <span className="font-mono text-blue-400 font-semibold">{current.latency}</span>
          </div>
        </div>

        {/* Stage 3: Verified Action */}
        <div
          className={`rounded-xl border p-4 flex flex-col justify-between transition-all duration-300 ${
            activeStage === 4
              ? "bg-[#0E1F1A] border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.12)]"
              : "bg-[#0E1320] border-white/[0.07]"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                03. ACTION
              </span>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                AUDITED
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`action-${current.id}-${cycleCount}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="space-y-1.5"
              >
                <div className="text-[13px] font-semibold text-slate-200 leading-snug">
                  {current.action}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  TARGET: {current.actionDestination}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
            <span className="text-slate-500 font-mono">INTEGRITY</span>
            <span className="font-mono text-emerald-400 font-medium">VERIFIED INTEGRITY // PASSED</span>
          </div>
        </div>

      </div>

      {/* Real-Time Telemetry Bar (Monospace) */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[10px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            EXECUTION TELEMETRY: DEMONSTRATION
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">FLOW: ACTIVE</span>
        </div>
        <div className="text-slate-500">
          CYCLE #{1048 + cycleCount}
        </div>
      </div>
    </div>
  );
};
