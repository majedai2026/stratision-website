import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Database,
  Layers,
  Search,
  Eye,
  Lock,
  Workflow
} from "lucide-react";
import { ModelledScenario } from "../data/industriesData";

interface IndustryScenarioVisualProps {
  scenario: ModelledScenario;
}

export const IndustryScenarioVisual: React.FC<IndustryScenarioVisualProps> = ({ scenario }) => {
  const [activeStage, setActiveStage] = useState<"understand" | "orchestrate" | "verify" | "action">("understand");

  const stageKeys: ("understand" | "orchestrate" | "verify" | "action")[] = [
    "understand",
    "orchestrate",
    "verify",
    "action",
  ];

  const stageIcons = {
    understand: Search,
    orchestrate: Workflow,
    verify: ShieldCheck,
    action: CheckCircle2,
  };

  const stageColors = {
    understand: "blue",
    orchestrate: "blue",
    verify: "emerald",
    action: "emerald",
  };

  return (
    <div className="rounded-2xl bg-[#090C15] border border-white/[0.08] p-6 sm:p-8 lg:p-10 space-y-8">
      {/* Header with Provenance Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              {scenario.categoryBadge}
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              PHYSICAL TRANSFORMATION FLOW
            </span>
          </div>
          <h3
            className="text-xl sm:text-2xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {scenario.title}
          </h3>
        </div>
        <div className="text-xs text-slate-400 font-mono shrink-0">
          INPUT → UNDERSTAND → ORCHESTRATE → VERIFY → ACTION
        </div>
      </div>

      {/* Grid: Inputs List & Interactive Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Stage 1: Verified Inputs (4 Cols) */}
        <div className="lg:col-span-4 rounded-xl bg-[#0B0F19] border border-white/[0.06] p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
              STAGE 1 — UNSTRUCTURED INPUTS
            </span>
            <FileText className="w-4 h-4 text-slate-400" />
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {scenario.inputDescription}
          </p>
          <div className="space-y-2 pt-2">
            {scenario.inputsList.map((inp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]"
              >
                <span className="text-[10px] font-mono text-blue-400 mt-0.5">0{idx + 1}</span>
                <span className="leading-snug">{inp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stage 2-4: Interactive Physical Transformation Flow (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {stageKeys.map((key) => {
              const step = scenario.steps[key];
              const Icon = stageIcons[key];
              const isActive = activeStage === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveStage(key)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600/15 border-blue-500/40 text-white shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                      : "bg-[#0B0F19] border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-blue-400">
                      STEP {step.stepNumber}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                  </div>
                  <div className="text-xs font-semibold tracking-tight uppercase">
                    {step.stageName}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-[#0D1424] border border-blue-500/30 p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    PHASE {scenario.steps[activeStage].stepNumber} // {scenario.steps[activeStage].stageName}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  AUTOMATED BESPOKE ENGINE
                </span>
              </div>

              <h4
                className="text-base sm:text-lg font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {scenario.steps[activeStage].label}
              </h4>

              <p className="text-sm text-slate-200 leading-relaxed">
                {scenario.steps[activeStage].description}
              </p>

              {/* Visual Pipeline Bar */}
              <div className="pt-2">
                <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{
                      width:
                        activeStage === "understand"
                          ? "25%"
                          : activeStage === "orchestrate"
                          ? "50%"
                          : activeStage === "verify"
                          ? "75%"
                          : "100%",
                    }}
                  />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1.5 uppercase">
                  <span>Understand</span>
                  <span>Orchestrate</span>
                  <span>Verify</span>
                  <span>Action</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Output & Business Outcome Bar */}
      <div className="pt-6 border-t border-white/[0.07] grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
            VERIFIED DELIVERABLE & OUTPUT
          </span>
          <p className="text-xs sm:text-sm font-medium text-slate-200">
            {scenario.outputSummary}
          </p>
        </div>
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono uppercase text-blue-400 font-semibold tracking-wider">
            BUSINESS BENEFIT & LEVERAGE
          </span>
          <p className="text-xs sm:text-sm font-medium text-slate-200">
            {scenario.businessOutcome}
          </p>
        </div>
      </div>

      {/* Governance Footnote */}
      <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>{scenario.governanceNote}</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
          MODELLED SPECIFICATION
        </span>
      </div>
    </div>
  );
};
