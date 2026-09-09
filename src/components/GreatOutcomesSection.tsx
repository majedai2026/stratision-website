import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Check, 
  Database, 
  FileText, 
  Play, 
  Pause,
  MessageSquare,
  BarChart3,
  Zap,
  CheckCircle2
} from "lucide-react";

interface GreatOutcomesSectionProps {
  onOpenBooking: () => void;
}

type OutcomeTab = "revenue" | "productivity" | "knowledge" | "cx" | "decisions";

interface OutcomeConfig {
  id: OutcomeTab;
  code: string;
  label: string;
  serviceName: string;
  headline: string;
  subhead: string;
  speciesName: string;
  provenance: string;
}

const OUTCOMES: OutcomeConfig[] = [
  {
    id: "revenue",
    code: "01",
    label: "Revenue",
    serviceName: "AI RECEPTIONIST & INBOUND CAPTURE",
    headline: "Autonomous Opportunity Qualification & Routing",
    subhead: "Systematic capture across primary inbound communication channels. Watch an incoming opportunity transition through deterministic qualification and calendar dispatch without manual administrative lag.",
    speciesName: "OPERATIONAL INTAKE LEDGER",
    provenance: "SYNTHETIC DEMONSTRATION",
  },
  {
    id: "productivity",
    code: "02",
    label: "Productivity",
    serviceName: "WORKFLOW AUTOMATION & REPETITIVE EXECUTION",
    headline: "Autonomous Task Execution & Queue Drain",
    subhead: "Structured operational workflows executed continuously. Watch cognitive backlog items enter, undergo automated validation, and clear from active queues without linear payroll expansion.",
    speciesName: "REAL-TIME WORK QUEUE",
    provenance: "SYNTHETIC DEMONSTRATION",
  },
  {
    id: "knowledge",
    code: "03",
    label: "Knowledge",
    serviceName: "WORKFORCE INTELLIGENCE PLATFORM™",
    headline: "Institutional Knowledge Indexing & Grounded Retrieval",
    subhead: "Transform fragmented documentation and operational procedures into an indexed, retrievable architecture with verifiable source citations and zero hallucinated output.",
    speciesName: "RETRIEVAL WORKSPACE & CITATION TRACE",
    provenance: "SYNTHETIC DEMONSTRATION",
  },
  {
    id: "cx",
    code: "04",
    label: "Customer Experience",
    serviceName: "MULTI-CHANNEL TRIAGE & RESOLUTION",
    headline: "Deterministic Enquiry Handling & Resolution",
    subhead: "Structured multi-channel response orchestration across business-approved communication channels with strict database constraint validation.",
    speciesName: "INTERACTION TRACE & RESOLUTION LOG",
    provenance: "SYNTHETIC DEMONSTRATION",
  },
  {
    id: "decisions",
    code: "05",
    label: "Decision Making",
    serviceName: "OPERATIONAL INTELLIGENCE & SIGNAL SYNTHESIS",
    headline: "Unstructured Signal Synthesis to Action Matrix",
    subhead: "Synthesise high-frequency operational signals across fragmented systems into structured, prioritised executive action items with complete deterministic auditability.",
    speciesName: "EXECUTIVE INTELLIGENCE MATRIX",
    provenance: "SYNTHETIC DEMONSTRATION",
  },
];

export const GreatOutcomesSection: React.FC<GreatOutcomesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<OutcomeTab>("revenue");
  
  // =========================================================================
  // 1. REVENUE (Inbound Pipeline Lifecycle Simulation)
  // Structural States: INBOUND -> QUALIFYING -> ENRICHING -> DISPATCHED
  // =========================================================================
  const [revenueStep, setRevenueStep] = useState<number>(1); // 0: INBOUND, 1: QUALIFYING, 2: ENRICHING, 3: DISPATCHED
  const [isAutoRevenue, setIsAutoRevenue] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoRevenue || activeTab !== "revenue") return;
    const timer = setInterval(() => {
      setRevenueStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 2800);
    return () => clearInterval(timer);
  }, [isAutoRevenue, activeTab]);

  // =========================================================================
  // 2. PRODUCTIVITY (Work Queue Draining Simulation)
  // Structural States: PENDING -> PROCESSING -> RESOLVED
  // =========================================================================
  const [queueItems, setQueueItems] = useState([
    { id: "WORK ITEM 01", category: "REPETITIVE COGNITIVE TASK", stage: "PROCESSING", progress: 65 },
    { id: "WORK ITEM 02", category: "REPETITIVE COGNITIVE TASK", stage: "PENDING", progress: 0 },
    { id: "WORK ITEM 03", category: "REPETITIVE COGNITIVE TASK", stage: "PENDING", progress: 0 },
    { id: "WORK ITEM 04", category: "REPETITIVE COGNITIVE TASK", stage: "PENDING", progress: 0 },
  ]);
  const [isQueueActive, setIsQueueActive] = useState<boolean>(true);

  useEffect(() => {
    if (!isQueueActive || activeTab !== "productivity") return;
    const interval = setInterval(() => {
      setQueueItems((prev) => {
        if (prev.length === 0) return prev;
        const current = prev[0];
        if (current.progress < 100) {
          return [
            { ...current, progress: Math.min(100, current.progress + 25) },
            ...prev.slice(1),
          ];
        } else {
          // Task completes: drain top item and reflow queue
          const rotated = prev.slice(1);
          const nextIndex = Math.floor(Math.random() * 80) + 10;
          const newId = `WORK ITEM ${nextIndex < 10 ? '0' : ''}${nextIndex}`;
          return [
            ...rotated,
            { id: newId, category: "REPETITIVE COGNITIVE TASK", stage: "PENDING", progress: 0 },
          ];
        }
      });
    }, 650);
    return () => clearInterval(interval);
  }, [isQueueActive, activeTab]);

  // =========================================================================
  // 3. KNOWLEDGE (Indexing & Grounded Retrieval Workspace)
  // Structural Path: KNOWLEDGE SOURCE -> INDEXED -> RETRIEVABLE -> RESPONSE
  // =========================================================================
  const [selectedKnowledgeRow, setSelectedKnowledgeRow] = useState<number>(0);
  const KNOWLEDGE_RECORDS = [
    {
      sourceLabel: "KNOWLEDGE SOURCE // 01",
      sectionLabel: "SECTION // OPERATIONAL POLICY",
      sourceExcerpt: "Standard operational procedures require all inbound requests exceeding baseline parameters to be routed through structured secondary validation.",
      retrievedContext: "System identifies rule parameters: Baseline constraints active • Secondary validation protocol matched.",
      groundedSynthesis: "Requests exceeding standard parameters are automatically isolated and routed through secondary validation rules.",
    },
    {
      sourceLabel: "KNOWLEDGE SOURCE // 02",
      sectionLabel: "SECTION // GOVERNANCE STANDARD",
      sourceExcerpt: "Functional leadership maintains autonomous sign-off within standard operating boundaries; exceptions initiate structured multi-stakeholder notification.",
      retrievedContext: "System identifies authority constraints: Standard operational boundary confirmed • Multi-stakeholder routing active.",
      groundedSynthesis: "Standard actions proceed autonomously within defined operational boundaries; out-of-scope actions trigger structured stakeholder review.",
    },
    {
      sourceLabel: "KNOWLEDGE SOURCE // 03",
      sectionLabel: "SECTION // ARCHITECTURE PROTOCOL",
      sourceExcerpt: "All enterprise context repositories and vector stores are deployed within isolated client boundaries with zero public model exposure.",
      retrievedContext: "System identifies infrastructure boundary: Private VPC deployment verified • Zero external training confirmed.",
      groundedSynthesis: "System operates exclusively within private VPC boundaries, preserving complete operational isolation and data sovereignty.",
    },
  ];

  // =========================================================================
  // 4. CUSTOMER EXPERIENCE (Interaction Resolution Pipeline)
  // Structural Flow: ENQUIRY -> REASONING & RETRIEVAL -> RESPONSE -> RESOLVED
  // =========================================================================
  const [channelView, setChannelView] = useState<"INBOUND ENQUIRY" | "MESSAGING" | "PORTAL">("INBOUND ENQUIRY");

  // =========================================================================
  // 5. DECISION MAKING (Signal to Structured Action Matrix)
  // Structural Flow: UNSTRUCTURED SIGNALS -> STRUCTURED INFO -> PRIORITISED ACTION
  // =========================================================================
  const [activeSignalIndex, setActiveSignalIndex] = useState<number>(0);
  const SIGNALS_MATRIX = [
    {
      code: "SIGNAL // 01",
      streamLabel: "OPERATIONAL EXCEPTION STREAM",
      rawInput: "High-frequency operational notifications indicate repeated threshold exceedances across upstream vendor delivery dependencies.",
      structuredClassification: "OPERATIONAL VARIANCE / CONSTRAINT",
      priorityLevel: "HIGH PRIORITY",
      recommendedAction: "Activate secondary pre-configured operating protocol; hold automated downstream batch execution pending constraint resolution.",
      verificationPath: "Constraint parameters verified • Executive notification logged • Deterministic audit trail established",
    },
    {
      code: "SIGNAL // 02",
      streamLabel: "COMMERCIAL INTAKE STREAM",
      rawInput: "Sudden concentrated surge in inbound discovery demand detected across core enterprise capability tier.",
      structuredClassification: "RESOURCE ALLOCATION / PIPELINE",
      priorityLevel: "ELEVATED",
      recommendedAction: "Dynamically reallocate solution delivery bandwidth to active intake pipeline; initiate dedicated provisioning workflow.",
      verificationPath: "Capacity utilisation model verified • Workflow allocation logged • Deterministic audit trail established",
    },
  ];

  return (
    <section id="great-outcomes" className="py-24 bg-[#050811] text-slate-100 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>03 — OPERATIONAL OUTCOMES</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">FIVE INTERFACE SPECIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Engineered Outcomes. <br />
              <span className="text-slate-400 font-normal">Physical State Transformations.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              We design software architectures that replace manual coordination with structured, reliable system execution. Explore five distinct interface patterns below.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer transition-all shadow-sm"
            >
              <span>Scope Your Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5 Outcome Selectors - Architectural Square Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 border-b border-slate-800 pb-4 mb-8">
          {OUTCOMES.map((item) => {
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`outcome-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? "bg-[#080C15] border-blue-500 shadow-md ring-1 ring-blue-500/50"
                    : "bg-[#070A12] border-slate-800/80 hover:border-slate-700 hover:bg-[#080C15]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? "text-blue-400 font-bold" : "text-slate-500"}>
                    STAGE // {item.code}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    {item.label}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                    {item.speciesName}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Outcome Container */}
        {OUTCOMES.map((currentOutcome) => {
          if (currentOutcome.id !== activeTab) return null;

          return (
            <div key={currentOutcome.id} className="space-y-6">
              
              {/* Context Bar */}
              <div className="p-6 bg-[#080C15] border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-400 font-semibold">
                    <span>{currentOutcome.serviceName}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{currentOutcome.provenance}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-serif">
                    {currentOutcome.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {currentOutcome.subhead}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400 px-3 py-1.5 bg-black border border-slate-800">
                    PATTERN: {currentOutcome.speciesName}
                  </span>
                </div>
              </div>

              {/* =========================================================================
                  SPECIES 1: REVENUE (Operational Intake Ledger)
                  Structural States: INBOUND -> QUALIFYING -> ENRICHING -> DISPATCHED
                 ========================================================================= */}
              {activeTab === "revenue" && (
                <div className="border border-slate-800 bg-[#080C15] overflow-hidden">
                  
                  {/* Console Header */}
                  <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-white font-bold">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        AI RECEPTIONIST // OPERATIONAL INTAKE LEDGER
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500 uppercase">STATE PROGRESSION:</span>
                      <div className="flex border border-slate-800 bg-black">
                        {["INBOUND", "QUALIFYING", "ENRICHING", "DISPATCHED"].map((st, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setRevenueStep(idx);
                              setIsAutoRevenue(false);
                            }}
                            className={`px-3 py-1 text-[10px] font-mono cursor-pointer transition-colors ${
                              revenueStep === idx
                                ? "bg-blue-600 text-white font-bold"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Operational Ledger Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse font-sans">
                      <thead>
                        <tr className="border-b border-slate-800 bg-black/60 font-mono text-[11px] text-slate-400">
                          <th className="p-4">PIPELINE RECORD</th>
                          <th className="p-4">CHANNEL SOURCE</th>
                          <th className="p-4">QUALIFICATION CRITERIA</th>
                          <th className="p-4">SYSTEM ACTION</th>
                          <th className="p-4 text-right">STAGE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                        
                        {/* Primary Animated Record */}
                        <tr className="bg-blue-950/20 hover:bg-blue-950/30 transition-colors">
                          <td className="p-4 font-mono font-bold text-white">
                            <div>OPPORTUNITY // ACTIVE</div>
                            <div className="text-[10px] text-slate-500 font-normal">INTAKE RECORD</div>
                          </td>
                          <td className="p-4 font-sans text-slate-300">
                            <div className="font-bold text-slate-200">INBOUND COMMUNICATION</div>
                            <div className="text-[11px] text-slate-400 font-mono">PRIMARY PIPELINE</div>
                          </td>
                          <td className="p-4 font-mono">
                            {revenueStep === 0 && <span className="text-slate-500">Awaiting parsing...</span>}
                            {revenueStep === 1 && <span className="text-amber-400">Evaluating criteria...</span>}
                            {revenueStep >= 2 && (
                              <span className="text-emerald-400 font-bold flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> CRITERIA MATCHED
                              </span>
                            )}
                          </td>
                          <td className="p-4 font-sans text-slate-300">
                            {revenueStep === 0 && "Inbound request received via primary communication channel."}
                            {revenueStep === 1 && "Verifying system integration requirements against technical criteria."}
                            {revenueStep === 2 && "Attaching qualification brief; cross-referencing account architecture."}
                            {revenueStep === 3 && "Calendar invitation dispatched; CRM synchronisation completed."}
                          </td>
                          <td className="p-4 text-right">
                            {revenueStep === 0 && (
                              <span className="px-2.5 py-1 bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                                INBOUND
                              </span>
                            )}
                            {revenueStep === 1 && (
                              <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 text-[10px] border border-amber-500/30">
                                QUALIFYING
                              </span>
                            )}
                            {revenueStep === 2 && (
                              <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-[10px] border border-blue-500/30">
                                ENRICHING
                              </span>
                            )}
                            {revenueStep === 3 && (
                              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/30 font-bold">
                                DISPATCHED
                              </span>
                            )}
                          </td>
                        </tr>

                        {/* Structural Stable Surrounding Records */}
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-4 font-mono text-slate-400">
                            <div>OPPORTUNITY // 02</div>
                            <div className="text-[10px] text-slate-600 font-normal">INTAKE RECORD</div>
                          </td>
                          <td className="p-4 font-sans text-slate-400">
                            <div className="font-bold text-slate-300">INBOUND COMMUNICATION</div>
                            <div className="text-[11px] text-slate-500 font-mono">PRIMARY PIPELINE</div>
                          </td>
                          <td className="p-4 font-mono text-emerald-400">
                            <span className="flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> CRITERIA MATCHED
                            </span>
                          </td>
                          <td className="p-4 font-sans text-slate-400">
                            Scoping document generated; routed to account lead.
                          </td>
                          <td className="p-4 text-right">
                            <span className="px-2.5 py-1 bg-slate-900 text-slate-400 text-[10px] border border-slate-800">
                              RESOLVED
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-slate-900/40">
                          <td className="p-4 font-mono text-slate-400">
                            <div>OPPORTUNITY // 01</div>
                            <div className="text-[10px] text-slate-600 font-normal">INTAKE RECORD</div>
                          </td>
                          <td className="p-4 font-sans text-slate-400">
                            <div className="font-bold text-slate-300">INBOUND COMMUNICATION</div>
                            <div className="text-[11px] text-slate-500 font-mono">PRIMARY PIPELINE</div>
                          </td>
                          <td className="p-4 font-mono text-emerald-400">
                            <span className="flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> CRITERIA MATCHED
                            </span>
                          </td>
                          <td className="p-4 font-sans text-slate-400">
                            Technical scope confirmed; discovery session scheduled.
                          </td>
                          <td className="p-4 text-right">
                            <span className="px-2.5 py-1 bg-slate-900 text-slate-400 text-[10px] border border-slate-800">
                              RESOLVED
                            </span>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                  {/* Architectural Footer Note */}
                  <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
                    <div>
                      OPERATIONAL OUTCOME: Continuous inbound lead qualification without administrative latency.
                    </div>
                    <div className="text-slate-300">
                      SERVICE: AI RECEPTIONIST PIPELINE
                    </div>
                  </div>

                </div>
              )}

              {/* =========================================================================
                  SPECIES 2: PRODUCTIVITY (Real-Time Work Queue & Backlog Execution)
                  Structural States: PENDING -> PROCESSING -> RESOLVED
                 ========================================================================= */}
              {activeTab === "productivity" && (
                <div className="border border-slate-800 bg-[#080C15] overflow-hidden">
                  
                  {/* Console Header */}
                  <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-white font-bold">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                        WORKFLOW AUTOMATION // EXECUTION QUEUE
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsQueueActive(!isQueueActive)}
                        className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-mono flex items-center gap-1.5 cursor-pointer border border-slate-700"
                      >
                        {isQueueActive ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
                        <span>{isQueueActive ? "PAUSE QUEUE" : "RESUME QUEUE"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Active Queue Stack */}
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>EXECUTION QUEUE (PRIORITY ORDER)</span>
                      <span>SYSTEM STATUS: RUNNING</span>
                    </div>

                    {queueItems.map((item, idx) => (
                      <div
                        key={item.id}
                        className={`p-4 border transition-all duration-300 ${
                          idx === 0
                            ? "bg-slate-900 border-blue-500 shadow-md"
                            : "bg-[#070A12] border-slate-800/80 opacity-70"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-3 font-mono">
                            <span className="text-xs font-bold text-slate-400 px-2 py-0.5 bg-black border border-slate-800">
                              {item.id}
                            </span>
                            <span className="text-sm font-bold text-white font-mono">
                              {item.category}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-xs font-mono">
                            <span className={`px-2.5 py-0.5 text-[10px] font-bold ${
                              idx === 0 ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-slate-800 text-slate-400"
                            }`}>
                              {idx === 0 ? "PROCESSING" : "PENDING"}
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar for Top Task */}
                        {idx === 0 ? (
                          <div className="space-y-1 mt-3">
                            <div className="w-full h-1.5 bg-slate-950 border border-slate-800 flex overflow-hidden">
                              <div
                                style={{ width: `${item.progress}%` }}
                                className="h-full bg-blue-500 transition-all duration-300"
                              />
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-slate-400">
                              <span>Executing deterministic business logic constraints...</span>
                              <span className="text-blue-400 font-bold">{item.progress}%</span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {/* Summary Bar */}
                  <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <div>
                      OPERATIONAL OUTCOME: Drains cognitive backlogs automatically without linear human bottlenecking.
                    </div>
                    <div className="text-slate-300">
                      SERVICE: WORKFLOW AUTOMATION ENGINE
                    </div>
                  </div>

                </div>
              )}

              {/* =========================================================================
                  SPECIES 3: KNOWLEDGE (Indexing & Grounded Retrieval Workspace)
                  Structural Path: KNOWLEDGE SOURCE -> INDEXED -> RETRIEVABLE -> RESPONSE
                 ========================================================================= */}
              {activeTab === "knowledge" && (
                <div className="border border-slate-800 bg-[#080C15] overflow-hidden">
                  
                  {/* Console Header */}
                  <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-white font-bold">
                        <Database className="w-4 h-4 text-blue-400" />
                        WORKFORCE INTELLIGENCE PLATFORM™ // REPOSITORY TRACE
                      </span>
                    </div>

                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> GROUNDED CITATION PROTOCOL ACTIVE
                    </span>
                  </div>

                  {/* Split Workspace */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
                    
                    {/* Left: Topic Selector */}
                    <div className="lg:col-span-5 p-5 space-y-4 bg-black/40">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        INDEXED REPOSITORY RECORDS
                      </div>

                      <div className="space-y-2">
                        {KNOWLEDGE_RECORDS.map((rec, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedKnowledgeRow(idx)}
                            className={`w-full p-3.5 text-left border transition-all cursor-pointer flex flex-col gap-1.5 ${
                              selectedKnowledgeRow === idx
                                ? "bg-slate-900 border-blue-500 shadow-md ring-1 ring-blue-500/40"
                                : "bg-[#070A12] border-slate-800 hover:border-slate-700 text-slate-400"
                            }`}
                          >
                            <div className="flex items-center justify-between text-[10px] font-mono">
                              <span className={selectedKnowledgeRow === idx ? "text-blue-400 font-bold" : "text-slate-500"}>
                                {rec.sourceLabel}
                              </span>
                              <span className="text-slate-500 font-mono">INDEXED</span>
                            </div>
                            <div className="text-xs font-mono font-semibold text-white leading-snug">
                              {rec.sectionLabel}
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="p-3 bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
                        <div className="text-slate-300 font-bold">STRUCTURAL RETRIEVAL GUARANTEE:</div>
                        <div>Output generation is strictly bounded to matched source document paragraphs, eliminating ungrounded extrapolation.</div>
                      </div>
                    </div>

                    {/* Right: Source Citation & Synthesis Trace */}
                    <div className="lg:col-span-7 p-6 space-y-5">
                      
                      {/* Document Reference Header */}
                      <div className="space-y-1 pb-4 border-b border-slate-800">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-400">VERIFIED SOURCE:</span>
                          <span className="text-emerald-400 font-bold font-mono">MATCHED & RETRIEVED</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
                          <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{KNOWLEDGE_RECORDS[selectedKnowledgeRow].sourceLabel}</span>
                        </div>
                        <div className="text-xs font-mono text-slate-400">
                          {KNOWLEDGE_RECORDS[selectedKnowledgeRow].sectionLabel}
                        </div>
                      </div>

                      {/* Source Citation Clause */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          EXTRACTED SOURCE EXCERPT:
                        </div>
                        <div className="p-4 bg-slate-950 border-l-2 border-blue-400 text-xs text-slate-300 font-sans leading-relaxed">
                          "{KNOWLEDGE_RECORDS[selectedKnowledgeRow].sourceExcerpt}"
                        </div>
                      </div>

                      {/* Retrieved Context Indicator */}
                      <div className="p-3 bg-black border border-slate-800 text-xs font-mono text-slate-400">
                        {KNOWLEDGE_RECORDS[selectedKnowledgeRow].retrievedContext}
                      </div>

                      {/* Synthesised Output */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                          GROUNDED OPERATIONAL RESPONSE:
                        </div>
                        <div className="p-4 bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white font-sans leading-relaxed">
                          {KNOWLEDGE_RECORDS[selectedKnowledgeRow].groundedSynthesis}
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Footer */}
                  <div className="p-4 bg-black border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>DEPLOYMENT ISOLATION: PRIVATE CLIENT VPC INFRASTRUCTURE</span>
                    <span className="text-slate-300">SERVICE: WORKFORCE INTELLIGENCE PLATFORM™</span>
                  </div>

                </div>
              )}

              {/* =========================================================================
                  SPECIES 4: CUSTOMER EXPERIENCE (Interaction Trace & Resolution Log)
                  Structural Flow: ENQUIRY -> REASONING & RETRIEVAL -> RESPONSE -> RESOLVED
                 ========================================================================= */}
              {activeTab === "cx" && (
                <div className="border border-slate-800 bg-[#080C15] overflow-hidden">
                  
                  {/* Console Header */}
                  <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-white font-bold">
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        MULTI-CHANNEL TRIAGE & RESOLUTION LOG
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500 uppercase">CHANNEL VIEW:</span>
                      <div className="flex border border-slate-800 bg-black">
                        {(["INBOUND ENQUIRY", "MESSAGING", "PORTAL"] as const).map((ch) => (
                          <button
                            key={ch}
                            onClick={() => setChannelView(ch)}
                            className={`px-3 py-1 text-[10px] font-mono uppercase cursor-pointer transition-colors ${
                              channelView === ch
                                ? "bg-blue-600 text-white font-bold"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {ch}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Physical Sequential Interaction Log */}
                  <div className="p-6 space-y-4 max-w-3xl mx-auto">
                    
                    {/* Stage 1: Enquiry Received */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        <span>1. ENQUIRY RECEIVED VIA {channelView}</span>
                      </div>
                      <div className="p-4 bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 font-mono leading-relaxed">
                        "Inbound enquiry received regarding operational execution status and delivery confirmation."
                      </div>
                    </div>

                    {/* Stage 2: Reasoning & Database Retrieval */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-blue-400 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>2. SYSTEM REASONING & DATABASE RETRIEVAL</span>
                      </div>
                      <div className="p-3 bg-black border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                        <div>• Customer identity verified against account contact directory.</div>
                        <div>• Queried operational database for active record status.</div>
                        <div>• Execution status retrieved; parameters validated against business constraints.</div>
                      </div>
                    </div>

                    {/* Stage 3: Grounded Response */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>3. VERIFIED RESPONSE DISPATCHED</span>
                      </div>
                      <div className="p-4 bg-blue-950/30 border border-blue-500/40 text-xs sm:text-sm text-white font-mono leading-relaxed">
                        "Active operational record confirmed on schedule within defined parameters. Status verified against operational database."
                      </div>
                    </div>

                  </div>

                  {/* Footer */}
                  <div className="p-4 bg-black border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>STATUS: RESOLVED (DATABASE CONSTRAINED)</span>
                    <span className="text-slate-300">SERVICE: 24/7 CUSTOMER TRIAGE PIPELINE</span>
                  </div>

                </div>
              )}

              {/* =========================================================================
                  SPECIES 5: DECISION MAKING (Executive Intelligence & Signal Matrix)
                  Structural Flow: UNSTRUCTURED SIGNALS -> STRUCTURED INFO -> PRIORITISED ACTION
                 ========================================================================= */}
              {activeTab === "decisions" && (
                <div className="border border-slate-800 bg-[#080C15] overflow-hidden">
                  
                  {/* Console Header */}
                  <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-white font-bold">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                        EXECUTIVE INTELLIGENCE MATRIX // SIGNAL SYNTHESIS
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500 uppercase">OPERATIONAL STREAM:</span>
                      <div className="flex border border-slate-800 bg-black">
                        {SIGNALS_MATRIX.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveSignalIndex(idx)}
                            className={`px-3 py-1 text-[10px] font-mono cursor-pointer transition-colors ${
                              activeSignalIndex === idx
                                ? "bg-blue-600 text-white font-bold"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {item.code}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Two-Column Matrix Transformation */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
                    
                    {/* Left: Unstructured Operational Noise */}
                    <div className="lg:col-span-5 p-6 space-y-4 bg-black/40">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-amber-400 font-bold uppercase">1. UNSTRUCTURED OPERATIONAL NOISE</span>
                        <span className="text-slate-500 font-mono">INPUT STREAM</span>
                      </div>

                      <div className="p-4 bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
                        {SIGNALS_MATRIX[activeSignalIndex].rawInput}
                      </div>

                      <div className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                        <div className="flex justify-between">
                          <span>STREAM:</span>
                          <span className="text-slate-300 font-bold">{SIGNALS_MATRIX[activeSignalIndex].streamLabel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CLASSIFICATION:</span>
                          <span className="text-white font-bold">{SIGNALS_MATRIX[activeSignalIndex].structuredClassification}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PRIORITY STATUS:</span>
                          <span className="text-amber-400 font-bold">{SIGNALS_MATRIX[activeSignalIndex].priorityLevel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Prioritised Executive Action */}
                    <div className="lg:col-span-7 p-6 space-y-5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-blue-400 font-bold uppercase">2. PRIORITISED EXECUTIVE ACTION</span>
                        <span className="text-emerald-400 font-mono">READY FOR SIGN-OFF</span>
                      </div>

                      {/* Action Card */}
                      <div className="p-5 bg-slate-900 border border-blue-500/40 space-y-2">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          RECOMMENDED OPERATIONAL INTERVENTION:
                        </div>
                        <p className="text-sm sm:text-base font-bold text-white font-sans leading-relaxed">
                          {SIGNALS_MATRIX[activeSignalIndex].recommendedAction}
                        </p>
                      </div>

                      {/* Audit Verification */}
                      <div className="p-4 bg-slate-950 border border-slate-800 space-y-1 text-xs font-mono">
                        <div className="text-slate-400 font-bold">DETERMINISTIC VERIFICATION PATH:</div>
                        <div className="text-slate-300">
                          {SIGNALS_MATRIX[activeSignalIndex].verificationPath}
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Footer */}
                  <div className="p-4 bg-black border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>TRANSFORMATION: UNSTRUCTURED SIGNAL TO STRUCTURED EXECUTIVE ACTION</span>
                    <span className="text-slate-300">SERVICE: OPERATIONAL INTELLIGENCE MATRIX</span>
                  </div>

                </div>
              )}

            </div>
          );
        })}

      </div>
    </section>
  );
};
