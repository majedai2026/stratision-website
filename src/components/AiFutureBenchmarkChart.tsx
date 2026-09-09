import React, { useState } from "react";
import { TrendingUp, BarChart3, Layers, ArrowRight, Check } from "lucide-react";

export interface StageBar {
  stage: string;
  year: string;
  title: string;
  subtitle: string;
  businessImpactScore: number; // 0-100
  marketAdoptionPct: number;
  status: "past" | "trap" | "current_sweetspot" | "frontier";
  statusBadge: string;
  summary: string;
  roiProfile: string;
  riskOrAdvantage: string;
  features: string[];
}

export const AI_EVOLUTION_STAGES: StageBar[] = [
  {
    stage: "STAGE 01",
    year: "2022 – 2023",
    title: "Novelty & Browser Chatbots",
    subtitle: "Informal prompting in open tabs (ChatGPT, Claude)",
    businessImpactScore: 18,
    marketAdoptionPct: 46,
    status: "past",
    statusBadge: "Low Leverage",
    summary: "Employees copy-pasting text into isolated browser windows. Zero company context, disconnected from ERP/CRM, and high security leakage risks.",
    roiProfile: "Negligible ROI (< 1.2x)",
    riskOrAdvantage: "High data leakage risk & zero workflow automation.",
    features: [
      "Manual prompt engineering",
      "No internal database integration",
      "Zero deterministic output verification",
    ],
  },
  {
    stage: "STAGE 02",
    year: "2023 – 2024",
    title: "Point Solutions & SaaS Sprawl",
    subtitle: "Fragmented single-feature AI subscriptions",
    businessImpactScore: 35,
    marketAdoptionPct: 36,
    status: "trap",
    statusBadge: "Common Trap",
    summary: "Companies subscribed to 8+ disconnected AI point tools. High monthly SaaS bills with low employee adoption and no centralized data governance.",
    roiProfile: "Fragmented ROI (1.3x - 1.6x)",
    riskOrAdvantage: "Tool fatigue, subscription bloat & low team adoption.",
    features: [
      "Brittle third-party wrapper bots",
      "Siloed logins & disconnected data",
      "Ongoing subscription overhead",
    ],
  },
  {
    stage: "STAGE 03",
    year: "TODAY / 2025–2026",
    title: "Custom Integrated AI Systems",
    subtitle: "Bespoke multi-agent pipelines & private VPCs",
    businessImpactScore: 88,
    marketAdoptionPct: 14,
    status: "current_sweetspot",
    statusBadge: "STRATISION DEPLOYMENT TARGET",
    summary: "Custom agent pipelines trained on internal SOPs and bi-directionally integrated with your ERP, CRM, and communication channels. Stratision core focus.",
    roiProfile: "Targeted 3.5x – 6.0x ROI",
    riskOrAdvantage: "100% Client-Owned IP, SOC2 isolation & deterministic payback.",
    features: [
      "Deep ERP & CRM bi-directional sync",
      "24/7 Autonomous voice & document workflows",
      "Zero-hallucination validation firewalls",
    ],
  },
  {
    stage: "STAGE 04",
    year: "2027+",
    title: "Autonomous Enterprise Swarms",
    subtitle: "Self-optimizing corporate intelligence ecosystems",
    businessImpactScore: 100,
    marketAdoptionPct: 4,
    status: "frontier",
    statusBadge: "Emerging Frontier",
    summary: "Continuous self-refining agent swarms executing multi-department operational execution, predictive supply forecasting, and dynamic pricing autonomy.",
    roiProfile: "Compounding Operating Leverage",
    riskOrAdvantage: "Permanent competitive moat for early Stage 3 adopters.",
    features: [
      "Autonomous cross-department orchestration",
      "Self-calibrating organizational SOPs",
      "Continuous market predictive modeling",
    ],
  },
];

export interface DepartmentBenchmark {
  dept: string;
  industryAverage: number;
  stratisionAutonomous: number;
  highlightMetric: string;
  bottleneck: string;
}

export const DEPT_BENCHMARKS: DepartmentBenchmark[] = [
  {
    dept: "Sales & Inbound Lead Capture",
    industryAverage: 20,
    stratisionAutonomous: 95,
    highlightMetric: "+340% Lead Booking",
    bottleneck: "Delayed human follow-ups lose 38%+ of after-hours leads",
  },
  {
    dept: "Document Extraction & ERP Reconciliations",
    industryAverage: 15,
    stratisionAutonomous: 98,
    highlightMetric: "74% Admin Labor Saved",
    bottleneck: "Manual PDF copying into SAP/NetSuite creates costly backlogs",
  },
  {
    dept: "Workforce Training & SOP Retention",
    industryAverage: 12,
    stratisionAutonomous: 90,
    highlightMetric: "60% Faster Ramp Time",
    bottleneck: "Static training PDFs forgotten within 14 days of onboarding",
  },
  {
    dept: "Customer Support & Routine Inquiries",
    industryAverage: 25,
    stratisionAutonomous: 88,
    highlightMetric: "Sub-10s Resolution",
    bottleneck: "Repetitive Tier-1 tickets overload staff and cause turnover",
  },
];

interface AiFutureBenchmarkChartProps {
  onOpenBooking: () => void;
  onOpenBlueprint: () => void;
}

export const AiFutureBenchmarkChart: React.FC<AiFutureBenchmarkChartProps> = ({
  onOpenBooking,
}) => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(2);
  const [activeView, setActiveView] = useState<"stages" | "departments">("stages");

  const activeStage = AI_EVOLUTION_STAGES[selectedStageIndex];

  return (
    <div className="w-full bg-[#050811] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span>INDUSTRY INFLECTION // ADOPTION BENCHMARK</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif">
            Where Are We With AI in Business?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
            Most businesses assume AI is an informal chatbot in a browser tab. In reality, modern enterprise leverage lies at the inflection point of <strong className="text-white">Custom Integrated Systems</strong>.
          </p>
        </div>

        {/* Mode Switcher - Square Editorial Tabs */}
        <div className="flex items-center bg-black/80 p-1 border border-slate-800 self-start lg:self-center shrink-0">
          <button
            onClick={() => setActiveView("stages")}
            className={`px-4 py-2 text-xs font-mono tracking-tight transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === "stages"
                ? "bg-slate-800 text-white font-semibold border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Evolution Stages</span>
          </button>
          <button
            onClick={() => setActiveView("departments")}
            className={`px-4 py-2 text-xs font-mono tracking-tight transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === "departments"
                ? "bg-slate-800 text-white font-semibold border border-slate-700"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Department Impact</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Evolution Stages Bar Chart */}
      {activeView === "stages" && (
        <div className="mt-8 space-y-8">
          
          {/* Visual Bar Graph - Square & Hairline Geometry */}
          <div className="space-y-3">
            {AI_EVOLUTION_STAGES.map((stage, idx) => {
              const isSelected = selectedStageIndex === idx;
              const isCurrentSweetspot = stage.status === "current_sweetspot";

              return (
                <div
                  key={idx}
                  id={`evolution-bar-stage-${idx}`}
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`p-4 sm:p-5 border transition-all cursor-pointer relative ${
                    isSelected
                      ? isCurrentSweetspot
                        ? "bg-slate-900 border-blue-500 shadow-md ring-1 ring-blue-500"
                        : "bg-slate-900 border-slate-600 shadow-md"
                      : "bg-[#070A12] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-slate-400 px-2 py-0.5 bg-black border border-slate-800">
                        {stage.stage}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {stage.title}
                      </span>
                      <span className="text-xs text-slate-400 font-mono hidden md:inline">
                        ({stage.year})
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span
                        className={`px-2 py-0.5 text-[10px] uppercase font-mono border ${
                          isCurrentSweetspot
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/40 font-bold"
                            : stage.status === "trap"
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                            : stage.status === "frontier"
                            ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                            : "bg-slate-800 text-slate-400 border-slate-700"
                        }`}
                      >
                        {stage.statusBadge}
                      </span>
                      <span className="text-slate-300 font-mono hidden sm:inline text-[11px]">
                        {stage.roiProfile}
                      </span>
                    </div>
                  </div>

                  {/* Clean Hairline Progress Meter */}
                  <div className="space-y-1.5">
                    <div className="w-full h-2.5 bg-slate-950 border border-slate-800 flex">
                      <div
                        style={{ width: `${stage.businessImpactScore}%` }}
                        className={`h-full transition-all duration-500 ${
                          isCurrentSweetspot
                            ? "bg-blue-500"
                            : stage.status === "frontier"
                            ? "bg-purple-500"
                            : stage.status === "trap"
                            ? "bg-amber-600"
                            : "bg-slate-700"
                        }`}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>{stage.subtitle}</span>
                      <span>Operating Leverage Score: <strong className="text-white">{stage.businessImpactScore}%</strong></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Selected Stage Breakdown Card */}
          <div className="p-6 sm:p-7 bg-[#080C15] border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                [STAGE ARCHIVE // {activeStage.stage}: {activeStage.title}]
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activeStage.summary}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {activeStage.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-5 bg-black/60 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400">[INDICATIVE YIELD]</span>
                <div className="text-base font-bold text-white mt-0.5 font-mono">{activeStage.roiProfile}</div>
                <p className="text-xs text-slate-400 mt-1 font-normal">{activeStage.riskOrAdvantage}</p>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Deploy Stage 03 Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* VIEW 2: Department Impact Comparison */}
      {activeView === "departments" && (
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DEPT_BENCHMARKS.map((dept, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#080C15] border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white tracking-tight">{dept.dept}</h4>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20">
                    [INDICATIVE: {dept.highlightMetric}]
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Industry Baseline ({dept.industryAverage}%)</span>
                    <span className="text-blue-400 font-bold">Stratision Autonomous ({dept.stratisionAutonomous}%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-950 border border-slate-800 flex">
                    <div
                      style={{ width: `${dept.industryAverage}%` }}
                      className="h-full bg-slate-700"
                    />
                    <div
                      style={{ width: `${dept.stratisionAutonomous - dept.industryAverage}%` }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  <strong className="text-slate-300">Operational Bottleneck: </strong>
                  {dept.bottleneck}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-blue-400 font-semibold">[THE STRATISION OPERATING STANDARD]</div>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">We build bespoke systems that lift operations directly from manual baselines into autonomous execution.</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer"
            >
              Book SOW Diagnostic
            </button>
          </div>
        </div>
      )}

      {/* Bottom Technical Note */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div>
          [ADVISORY]: 82% of businesses remain stuck in Stage 1 & 2. Stratision deploys Stage 3 systems with guaranteed technical payback.
        </div>
        <div className="text-slate-300">
          100% Client-Owned Private VPC Codebases
        </div>
      </div>

    </div>
  );
};
