import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Clock } from "lucide-react";

export interface StructuredDeliverable {
  title: string;
  output: string;
}

export interface ProtocolStage {
  stageNumber: string;
  stageCode: string;
  stageName: string;
  timelineLabel: string;
  objective: string;
  deliverables: StructuredDeliverable[];
  verificationGate: {
    gateNumber: string;
    title: string;
    prerequisite: string;
    signOff: string;
  };
}

export const PROTOCOL_STAGES: ProtocolStage[] = [
  {
    stageNumber: "01",
    stageCode: "STAGE 01 // FORENSIC AUDIT & TOPOLOGY DESIGN",
    stageName: "Forensic Workflow Discovery & Schema Specification",
    timelineLabel: "INDICATIVE TIMELINE: MODELLED DAYS 1–5",
    objective: "Map operational friction points, classify data boundaries, and freeze typed payload schemas prior to implementation.",
    deliverables: [
      {
        title: "ARCHITECTURAL DISCOVERY DOSSIER",
        output: "Comprehensive map of manual bottlenecks, payload schemas, and target integration endpoints.",
      },
      {
        title: "DATA CLASSIFICATION & BOUNDARY SPECIFICATION",
        output: "VPC subnet topology definition with applicable data-processing and retention requirements.",
      },
      {
        title: "TYPED JSON SCHEMA GATE DEFINITIONS",
        output: "Deterministic validation constraints for all multi-agent tool calls and transactional transitions.",
      },
    ],
    verificationGate: {
      gateNumber: "01",
      title: "ARCHITECTURAL SIGN-OFF & SCHEMA FREEZE",
      prerequisite: "Architecture blueprint review, boundary audit, and schema definition.",
      signOff: "Architecture approved → schema frozen → staging authorized.",
    },
  },
  {
    stageNumber: "02",
    stageCode: "STAGE 02 // PRIVATE STAGING & DETERMINISTIC ORCHESTRATION",
    stageName: "Isolated Pipeline Engineering & State Machine Validation",
    timelineLabel: "INDICATIVE TIMELINE: MODELLED DAYS 6–15",
    objective: "Deploy isolated execution pipelines, validate multi-agent state machines, and configure human-in-the-loop exception routing.",
    deliverables: [
      {
        title: "SINGLE-TENANT PRIVATE ENCLAVE STAGING",
        output: "Isolated environment configured according to agreed client infrastructure and data-boundary requirements.",
      },
      {
        title: "MULTI-AGENT STATE MACHINE PIPELINES",
        output: "Deterministic orchestration pipelines with strict schema validation and automated fallback routing.",
      },
      {
        title: "HUMAN ESCALATION & EXCEPTION QUEUES",
        output: "Operator intervention portals and exception triage workflows for unhandled payload states.",
      },
    ],
    verificationGate: {
      gateNumber: "02",
      title: "STAGING VALIDATION & ISOLATION CHECK",
      prerequisite: "End-to-end staging execution, guardrail verification, and exception-path testing.",
      signOff: "Boundary isolation validated → fallback logic verified → integration authorized.",
    },
  },
  {
    stageNumber: "03",
    stageCode: "STAGE 03 // ENTERPRISE INTEGRATION & CLIENT HANDOVER",
    stageName: "Bi-Directional Sync & Client Asset Assignment",
    timelineLabel: "INDICATIVE TIMELINE: MODELLED DAYS 16–21",
    objective: "Execute bi-directional transactional sync, integrate operational telemetry, and complete formal runbook and asset handover.",
    deliverables: [
      {
        title: "BI-DIRECTIONAL TRANSACTIONAL INTEGRATION",
        output: "Validated API and webhook synchronization with core enterprise systems (Bullhorn, SAP, NetSuite, Salesforce).",
      },
      {
        title: "STRUCTURED AUDIT & TELEMETRY LOGGING",
        output: "Structured operational telemetry and transaction audit records integrated across all active system states.",
      },
      {
        title: "BESPOKE ORCHESTRATION ASSETS & RUNBOOKS",
        output: "Delivery of custom orchestration assets and deployment runbooks according to agreed engagement terms.",
      },
    ],
    verificationGate: {
      gateNumber: "03",
      title: "OPERATIONAL ACCEPTANCE & RUNBOOK HANDOVER",
      prerequisite: "Integration validation, telemetry audit check, and technical documentation walkthrough.",
      signOff: "Acceptance sign-off complete → runbooks transferred → production staging authorized.",
    },
  },
];

interface ImplementationRoadmapSectionProps {
  onOpenBooking: () => void;
  onOpenBookingWithTier?: (tierName: string) => void;
}

export const ImplementationRoadmapSection: React.FC<ImplementationRoadmapSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="roadmap" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>09 — PHASED ENGINEERING PROTOCOL</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">DEPLOYMENT CADENCE & MILESTONE SCHEDULE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Phased Engineering Execution Protocol.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Structured 3-Stage Engineering Delivery: Forensic Audit, Private Staging, and Verified Client Handover.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>DELIVERY SPECIFICATION</span>
              <span>ENGAGEMENT PROTOCOL</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: THE PHASED ENGINEERING EXECUTION PROTOCOL
            (Continuous High-Density Institutional Milestone Specification Document)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Document Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 bg-blue-400"></span>
              <span className="font-bold text-white uppercase tracking-wider">
                ENGAGEMENT EXECUTION PROTOCOL
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>MILESTONE-GATED DELIVERY CADENCE</span>
            </div>
          </div>

          {/* 3 Chronological Milestone Stages */}
          <div className="divide-y divide-slate-800">
            {PROTOCOL_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 lg:p-10 bg-[#080C15] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Left Chamber: Stage Metadata, Title & Objective (lg:col-span-4) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400"></span>
                        <span>{stage.stageCode}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{stage.timelineLabel}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-snug">
                      {stage.stageName}
                    </h3>

                    <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        01 // OBJECTIVE
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {stage.objective}
                      </p>
                    </div>
                  </div>

                  {/* Right Chamber: Structured Deliverable Records & Verification Gate (lg:col-span-8) */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    {/* Deliverables: Structured Operational Records */}
                    <div className="space-y-3">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        02 // ENGINEERING DELIVERABLES
                      </div>
                      
                      <div className="space-y-2">
                        {stage.deliverables.map((deliv, dIdx) => (
                          <div 
                            key={dIdx} 
                            className="p-3 sm:p-3.5 bg-[#0A0E1A] border border-slate-800/90 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4"
                          >
                            <div className="text-xs font-mono font-bold text-slate-100 tracking-wide flex items-center gap-2 shrink-0">
                              <span className="text-blue-400 text-xs">↳</span>
                              <span>{deliv.title}</span>
                            </div>
                            <div className="text-xs font-sans text-slate-400 sm:text-right leading-relaxed">
                              {deliv.output}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Milestone Verification Gate: Structured Decision Checkpoint Box */}
                    <div className="bg-[#0B101D] border-l-2 border-l-blue-500 border border-slate-800 p-4 sm:p-5 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                        <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>03 // MILESTONE VERIFICATION GATE {stage.verificationGate.gateNumber}</span>
                        </div>
                        <span className="text-[9px] font-mono font-semibold uppercase px-2 py-0.5 bg-blue-950/60 text-blue-300 border border-blue-800/60 tracking-wider">
                          MANDATORY CHECKPOINT
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
                        <div className="md:col-span-6 space-y-1">
                          <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                            PREREQUISITE
                          </div>
                          <div className="text-slate-300 font-sans leading-relaxed">
                            {stage.verificationGate.prerequisite}
                          </div>
                        </div>

                        <div className="md:col-span-6 space-y-1 md:border-l md:border-slate-800/80 md:pl-3">
                          <div className="text-[10px] font-mono uppercase text-blue-400/90 font-semibold tracking-wider">
                            SIGN-OFF THRESHOLD
                          </div>
                          <div className="text-slate-200 font-mono text-[11px] leading-relaxed">
                            {stage.verificationGate.signOff}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Action Bay within Protocol Document */}
          <div className="p-6 sm:p-8 bg-[#090D18] border-t border-slate-800">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>COMMENCE STAGE 01 ARCHITECTURAL DISCOVERY</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Engagement timeline models calibrated during initial architectural triage.
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm shrink-0"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Architectural Governance & Provenance Footer */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>PHASED ENGINEERING PROTOCOL · MODELLED PHASED DELIVERY PROJECTION (INDICATIVE)</span>
            </div>
            <div className="text-slate-500">
              BESPOKE ASSETS DELIVERED ACCORDING TO AGREED TERMS · DESIGNED TO MINIMIZE VENDOR LOCK-IN
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
