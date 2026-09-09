import React, { useState } from "react";
import { ArrowRight, Layers, Cpu, ShieldCheck, Terminal, Search, BarChart3, Wrench, RefreshCw, Check } from "lucide-react";

interface MethodologySectionProps {
  onOpenBooking: () => void;
}

export interface MethodologyStage {
  number: string;
  name: string;
  phaseLabel: string;
  tagline: string;
  objective: string;
  icon: React.ElementType;
  keyActions: string[];
  deliverables: string[];
  operationalArtifact: string;
}

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    number: "01",
    name: "DISCOVER",
    phaseLabel: "PHASE 01 // DISCOVERY",
    tagline: "Forensic workflow audit & friction mapping",
    objective: "We interview department leads and map existing operational flows to identify manual bottlenecks, cycle times, and calculate recoverable administrative hours before scoping code.",
    icon: Search,
    keyActions: [
      "Operational interviews with functional department leads",
      "Current-state software stack and API permission audit",
      "Process cycle time and manual friction point mapping",
      "Security classification and compliance constraint review",
    ],
    deliverables: [
      "Departmental Operational Friction Map",
      "Data Access & API Security Specification",
      "Stakeholder Interview Synthesis",
    ],
    operationalArtifact: "Operational Audit Report v1.0",
  },
  {
    number: "02",
    name: "DIAGNOSE",
    phaseLabel: "PHASE 02 // DIAGNOSTIC",
    tagline: "ROI quantification & payback modeling",
    objective: "We model financial viability, quantify recoverable labor capacity, and establish deterministic payback benchmarks for leadership sign-off.",
    icon: BarChart3,
    keyActions: [
      "Quantification of administrative labor and cognitive bottlenecks",
      "Deterministic financial ROI and capacity recovery modeling",
      "Technical feasibility and integration risk assessment",
      "Prioritisation matrix scoring highest-ROI deployment targets",
    ],
    deliverables: [
      "Deterministic Financial ROI Model",
      "Payback Period & Capacity Recovery Scorecard",
      "Prioritised Implementation Matrix",
    ],
    operationalArtifact: "Financial ROI Model & Scorecard",
  },
  {
    number: "03",
    name: "ARCHITECT",
    phaseLabel: "PHASE 03 // ARCHITECTURE",
    tagline: "System blueprint & data governance design",
    objective: "We engineer the complete system architecture, define deterministic validation guardrails, and specify private VPC container boundaries.",
    icon: Layers,
    keyActions: [
      "Multi-agent workflow orchestration and state machine design",
      "Data pipeline schema and zero-data-retention guardrails",
      "Human-in-the-loop exception handling and review protocols",
      "SOC2-compliant private cloud enclave specification",
    ],
    deliverables: [
      "Complete System Architecture Blueprint",
      "Data Governance & Validation Guardrails",
      "Fixed-Price SOW & Engineering Milestones",
    ],
    operationalArtifact: "Architecture Blueprint & SOW",
  },
  {
    number: "04",
    name: "DELIVER",
    phaseLabel: "PHASE 04 // ENGINEERING",
    tagline: "Custom engineering & production deployment",
    objective: "We write clean, typed TypeScript and Python pipelines, integrate enterprise software, and deploy directly into your private staging and production environments.",
    icon: Cpu,
    keyActions: [
      "Bespoke multi-agent pipeline and fine-tuned model engineering",
      "Bi-directional connectors for CRM, ERP, and internal databases",
      "Deterministic validation firewalls and automated stress testing",
      "Private cloud deployment with client-isolated data residency",
    ],
    deliverables: [
      "Client-Owned Custom AI Pipeline Codebase",
      "Live Bi-Directional CRM / ERP Connectors",
      "Human-in-the-Loop Review & Approval Console",
    ],
    operationalArtifact: "Production System Deployment v1.0",
  },
  {
    number: "05",
    name: "ADOPT",
    phaseLabel: "PHASE 05 // ADOPTION",
    tagline: "Workforce calibration & SOP certification",
    objective: "Most AI projects fail at adoption, not build. We deploy the Workforce Intelligence Platform to train your staff and calibrate live SOPs from day one.",
    icon: Wrench,
    keyActions: [
      "Zero-downtime production cutover into live communication channels",
      "Deployment of interactive Workforce Intelligence Platform",
      "Live staff scenario simulations and prompt supervision workshops",
      "Executive telemetry and health dashboard activation",
    ],
    deliverables: [
      "Certified Workforce with Interactive AI Coach",
      "Executive Telemetry & Health Dashboard",
      "Full IP Handover & Comprehensive Documentation",
    ],
    operationalArtifact: "Workforce Certification & Handover",
  },
  {
    number: "06",
    name: "OPTIMISE",
    phaseLabel: "PHASE 06 // OPTIMISATION",
    tagline: "Continuous telemetry monitoring & swarm scaling",
    objective: "We maintain 24/7 telemetry monitoring, perform quarterly prompt and model fine-tuning, and expand agent swarms to adjacent business units.",
    icon: RefreshCw,
    keyActions: [
      "24/7 accuracy, latency, and error telemetry tracking",
      "Quarterly model evaluations and automated prompt regression tests",
      "Multi-agent swarm expansion into adjacent departments",
      "Quarterly executive ROI audits and capacity reporting",
    ],
    deliverables: [
      "Technical SLA & Dedicated Engineering Squad",
      "Quarterly Model Upgrades & Performance Audits",
      "Departmental Agent Swarm Expansion Roadmap",
    ],
    operationalArtifact: "Continuous SLA & Swarm Roadmap",
  },
];

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenBooking }) => {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);
  const activeStage = METHODOLOGY_STAGES[selectedStageIdx];
  const StageIcon = activeStage.icon;

  return (
    <section id="process-section" className="py-24 bg-[#070A12] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
            <span>03 — METHODOLOGY</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">DELIVERY PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
            The Six-Stage Delivery Board.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Every Stratision engagement progresses through a structured, six-stage operating discipline with deterministic artifacts produced at each stage.
          </p>
        </div>

        {/* 6-Column Engagement Operating Board */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {METHODOLOGY_STAGES.map((stage, idx) => {
            const isSelected = selectedStageIdx === idx;
            const Icon = stage.icon;

            return (
              <button
                key={stage.number}
                id={`methodology-col-${idx}`}
                onClick={() => setSelectedStageIdx(idx)}
                className={`p-4 border text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? "bg-slate-900 border-slate-400 shadow-md"
                    : "bg-[#050811] border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-white" : "text-slate-500"}`}>
                    STAGE {stage.number}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-blue-400" : "text-slate-500"}`} />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono tracking-wider uppercase font-bold text-white">
                    {stage.name}
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
                    {stage.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? "text-blue-400 font-semibold" : "text-slate-500"}>
                    {isSelected ? "Active View" : "Select Stage"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Operating Instrument Inspector */}
        <div className="p-8 sm:p-10 bg-[#050811] border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                <StageIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>{activeStage.phaseLabel}</span>
                <span className="text-slate-600">//</span>
                <span className="text-slate-400">ARTIFACT: {activeStage.operationalArtifact}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-serif">
                {activeStage.number} — {activeStage.name}: {activeStage.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activeStage.objective}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="shrink-0 px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
            >
              <span>Scope Stage {activeStage.number}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2 Column Breakdown: Key Actions vs Concrete Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Column 1: Key Actions */}
            <div className="p-6 bg-[#080C15] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Operating Actions Executed:</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-300">
                {activeStage.keyActions.map((action, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-[10px] font-mono text-slate-500 shrink-0 mt-0.5">0{i + 1}</span>
                    <span className="leading-relaxed text-slate-300">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Deliverables */}
            <div className="p-6 bg-[#080C15] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Deliverables Produced:</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-300">
                {activeStage.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-slate-200 font-medium">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Institutional Guarantee Bar */}
          <div className="p-4 bg-[#080C15] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span>Client-owned IP • Private Repository Deployment • Dedicated Enclave Isolation</span>
            </div>
            <span className="text-slate-300 font-mono">TECHNICAL SPECIFICATION</span>
          </div>

        </div>

      </div>
    </section>
  );
};
