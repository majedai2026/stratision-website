import React from "react";
import { ArrowRight, ShieldCheck, Database, GitBranch, Layers } from "lucide-react";

export interface SystemPrecedent {
  id: string;
  precedentNumber: string;
  precedentCode: string;
  domainTitle: string;
  domainSubtitle: string;
  topologyContext: string[];
  antecedentFriction: string[];
  proposedTopology: string[];
  structuralArtifacts: string[];
  modelledShift: string;
}

export const SYSTEM_PRECEDENTS: SystemPrecedent[] = [
  {
    id: "precedent-01",
    precedentNumber: "01",
    precedentCode: "PRECEDENT 01 // EXECUTIVE SEARCH & RETAINED PLACEMENT",
    domainTitle: "Enterprise Recruitment & Search Operations",
    domainSubtitle: "Targeted workflow automation across candidate ingestion, brief matching, and CRM synchronization.",
    topologyContext: [
      "Bullhorn ATS Integration",
      "Exchange API / Inbound Parser",
      "Candidate Dossier Extraction Enclave",
      "Dedicated Single-Tenant Boundary",
    ],
    antecedentFriction: [
      "Manual candidate resume parsing and document formatting requiring substantial administrative labor.",
      "High fee-earner friction on routine outbound brief discovery and manual CRM status logging.",
      "Unstructured candidate data fragmented across individual consultant inboxes and local drives.",
    ],
    proposedTopology: [
      "Deterministic payload extraction and schema-validated candidate profile synthesis.",
      "Source-grounded brief matching with automated candidate dossier drafting in Bullhorn.",
      "Isolated document enclave operating within agreed client data-boundary requirements.",
    ],
    structuralArtifacts: [
      "Bullhorn Bi-Directional Sync Engine",
      "Typed Candidate Scoring Gate",
      "Private Ingestion Enclave",
    ],
    modelledShift: "Modelled effect: partner capacity is redirected from administrative data entry toward high-conviction candidate engagement.",
  },
  {
    id: "precedent-02",
    precedentNumber: "02",
    precedentCode: "PRECEDENT 02 // MULTI-ENTITY FINANCIAL SERVICES & ADVISORY",
    domainTitle: "Professional Services & Practice Management",
    domainSubtitle: "Multi-ledger transaction reconciliation, milestone billing sync, and typed journal schema validation.",
    topologyContext: [
      "NetSuite ERP Integration",
      "Salesforce CRM Milestone Webhooks",
      "Multi-Currency Invoicing Engine",
      "Dedicated Private Cloud Enclave",
    ],
    antecedentFriction: [
      "Manual cross-ledger reconciliation creating extended month-end reporting latency.",
      "Disconnected project billing triggers requiring routine manual verification against contract SOWs.",
      "Error exposure during manual re-keying of multi-currency transactions across operating subsidiaries.",
    ],
    proposedTopology: [
      "Automated multi-ledger reconciliation with deterministic journal entry generation.",
      "Real-time milestone trigger sync between Salesforce CRM and NetSuite billing schedules.",
      "Strict typed JSON schema validation for all incoming and outgoing ledger transactions.",
    ],
    structuralArtifacts: [
      "NetSuite Journal Posting Gate",
      "Human-in-the-Loop Exception Queue",
      "Structured Operational Telemetry",
    ],
    modelledShift: "Modelled effect: month-end reconciliation latency is reduced through structured exception routing.",
  },
  {
    id: "precedent-03",
    precedentNumber: "03",
    precedentCode: "PRECEDENT 03 // CLINICAL PATHWAY ORCHESTRATION & INTAKE",
    domainTitle: "Healthcare & Life Sciences Practice Operations",
    domainSubtitle: "Structured clinical referral ingestion, FHIR payload extraction, and specialist routing.",
    topologyContext: [
      "HL7 / FHIR Protocol Gateway",
      "Secure PACS / EMR Interfaces",
      "Patient Intake Intake Webhooks",
      "Dedicated Isolation Boundary",
    ],
    antecedentFriction: [
      "Manual intake of multi-page medical referral documents with unstructured clinical summaries.",
      "Delayed referral-to-consultation scheduling due to manual triage queues and administrative handoffs.",
      "Patient records fragmented across external EMR silos and isolated administrative departments.",
    ],
    proposedTopology: [
      "Automated FHIR-compliant schema extraction and triage categorization based on clinical protocols.",
      "Automated routing to on-call specialist calendars and intake coordinator dashboards.",
      "Ephemeral processing enclaves operating under strict patient-data isolation boundaries.",
    ],
    structuralArtifacts: [
      "FHIR-Compliant Schema Gateway",
      "Clinical Triage Classification Agent",
      "Specialist Scheduling Webhook Mesh",
    ],
    modelledShift: "Modelled effect: referral triage is structured into prioritised clinical queues, with urgency handled through defined classification rules.",
  },
];

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="evidence" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>11 — SYSTEM ARCHITECTURE PRECEDENTS</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">OPERATIONAL TOPOLOGY RECORDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Operational System Precedents & Topology Records.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Structural Architectural Precedents: Manual Enterprise Bottlenecks Re-Engineered into Deterministic Multi-Agent Orchestration Pipelines.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>SYSTEM PRECEDENTS</span>
              <span>TOPOLOGY AUDIT</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: THE OPERATIONAL TOPOLOGY LEDGER (SYSTEM PRECEDENTS)
            (Single Continuous Architectural Enclosure: 3 Chronological Precedent Records)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Document Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 bg-blue-400"></span>
              <span className="font-bold text-white uppercase tracking-wider">
                SYSTEM PRECEDENT REPOSITORY: PRECEDENT-RECORD-2026
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>STATUS: ILLUSTRATIVE ARCHITECTURAL PRECEDENTS</span>
            </div>
          </div>

          {/* 3 Chronological Precedent Blocks */}
          <div className="divide-y divide-slate-800">
            {SYSTEM_PRECEDENTS.map((precedent) => (
              <div
                key={precedent.id}
                className="p-6 sm:p-8 lg:p-10 bg-[#080C15] space-y-6"
              >
                {/* Precedent Header & Provenance Tag */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400"></span>
                      <span>{precedent.precedentCode}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                      {precedent.domainTitle}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono font-semibold uppercase px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-800 tracking-wider shrink-0">
                    PROVENANCE: ILLUSTRATIVE ARCHITECTURAL PRECEDENT
                  </span>
                </div>

                {/* System Topology Context Bar */}
                <div className="p-3 bg-[#0A0E1A] border border-slate-800/90 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400 uppercase tracking-wider text-[10px] shrink-0 font-bold">
                    <Database className="w-3.5 h-3.5 text-blue-400" />
                    <span>SYSTEM TOPOLOGY CONTEXT:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-300 text-[11px]">
                    {precedent.topologyContext.map((ctx, cIdx) => (
                      <React.Fragment key={cIdx}>
                        <span>{ctx}</span>
                        {cIdx < precedent.topologyContext.length - 1 && (
                          <span className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* 2-Column Side-by-Side Transformation Sub-Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Left Column: Antecedent Operational State */}
                  <div className="p-5 bg-[#070A12] border border-slate-800/90 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800/80 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      <span className="w-1.5 h-1.5 bg-slate-500"></span>
                      <span>ANTECEDENT OPERATIONAL STATE (MANUAL FRICTION)</span>
                    </div>
                    <div className="space-y-2.5">
                      {precedent.antecedentFriction.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                          <span className="text-slate-500 font-mono shrink-0 mt-0.5">↳</span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Proposed Orchestrated Topology */}
                  <div className="p-5 bg-[#090E1C] border border-blue-900/40 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800/80 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                      <span className="w-1.5 h-1.5 bg-blue-400"></span>
                      <span>PROPOSED ORCHESTRATED TOPOLOGY (SYSTEM RUNTIME)</span>
                    </div>
                    <div className="space-y-2.5">
                      {precedent.proposedTopology.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 text-xs font-sans text-slate-200">
                          <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Chamber: Structural System Artifacts Delivered & Operational Shift */}
                <div className="p-4 bg-[#0A0E1A] border border-slate-800/90 space-y-3">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                      <span>STRUCTURAL SYSTEM ARTIFACTS:</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {precedent.structuralArtifacts.map((art, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-200 font-mono text-[11px] flex items-center gap-1.5"
                        >
                          <span className="text-blue-400">↳</span>
                          <span>{art}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 pt-1 text-xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 shrink-0">
                      MODELLED OPERATIONAL SHIFT:
                    </span>
                    <span className="text-slate-300 font-sans leading-relaxed">
                      {precedent.modelledShift}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Action Bay within Ledger */}
          <div className="p-6 sm:p-8 bg-[#090D18] border-t border-slate-800">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>MODEL AN OPERATIONAL ARCHITECTURE BLUEPRINT</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Parameterize systems topology and multi-agent boundary requirements for your enterprise.
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm shrink-0"
              >
                <span>Schedule Systems Scoping Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Architectural Governance & Provenance Footer */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>ARCHITECTURAL SYSTEM PRECEDENTS · MODELLED TOPOLOGY RECORDS</span>
            </div>
            <div className="text-slate-500">
              ARCHITECTURAL SYSTEM PRECEDENTS · MODELLED TOPOLOGY RECORDS · DESIGNED UNDER STRICT DATA-BOUNDARY PRINCIPLES
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
