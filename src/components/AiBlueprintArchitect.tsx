import React, { useState } from "react";
import { ArrowRight, Layers, Shield, Terminal, Clock, Check, Copy } from "lucide-react";
import { BlueprintResult } from "../types";

interface AiBlueprintArchitectProps {
  onOpenBookingWithBlueprint: (blueprint: BlueprintResult) => void;
  preSelectedPainPoint?: string;
}

// 01 // INDUSTRY DOMAINS
export interface IndustryOption {
  id: string;
  name: string;
  code: string;
  systemArchetype: string;
  integrations: string[];
}

export const INDUSTRY_OPTIONS: IndustryOption[] = [
  {
    id: "recruitment",
    name: "Recruitment & Staffing",
    code: "REC",
    systemArchetype: "Multi-Agent Inbound Intake & Candidate Triage State Machine",
    integrations: ["Bullhorn ATS", "HubSpot CRM", "WhatsApp Business API", "Vincere", "M365 / Google Calendar"],
  },
  {
    id: "professional",
    name: "Professional & Financial Services",
    code: "PRO",
    systemArchetype: "Document Intelligence & 3-Way Reconciliation Pipeline",
    integrations: ["SAP ERP", "NetSuite", "Enterprise CPQ", "Private Document Enclaves", "Core Billing APIs"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    code: "HLT",
    systemArchetype: "Clinical Intake & Deterministic Verification Gateway",
    integrations: ["EMR / EHR Endpoints", "Clinical Document Stores", "Client-Designated Clinical Environments", "Audit Repositories"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    code: "LOG",
    systemArchetype: "Continuous Freight Telemetry & Dispatch Reconciliation Engine",
    integrations: ["TMS Platforms", "WMS Databases", "Carrier EDI / Webhooks", "Custom ERP Connectors"],
  },
];

// 02 // SCALE OPTIONS
export interface ScaleOption {
  id: string;
  name: string;
  code: string;
  scopeDescription: string;
  deliveryRange: {
    p1: string;
    p2: string;
    p3: string;
  };
}

export const SCALE_OPTIONS: ScaleOption[] = [
  {
    id: "boutique",
    name: "1–25 Boutique",
    code: "S1",
    scopeDescription: "Single-department rapid staging focusing on primary commercial or delivery bottlenecks.",
    deliveryRange: {
      p1: "Phase 1 (Days 1–5): Forensic Triage & Schema Design",
      p2: "Phase 2 (Days 6–10): Private Agent Staging & Tool Wiring",
      p3: "Phase 3 (Days 11–14): System Integration & Client Handover",
    },
  },
  {
    id: "midmarket",
    name: "25–150 Mid-Market",
    code: "S2",
    scopeDescription: "Cross-departmental pipeline orchestration spanning commercial, operations, and leadership sync.",
    deliveryRange: {
      p1: "Phase 1 (Days 1–7): Forensic Audit & Schema Mapping",
      p2: "Phase 2 (Days 8–14): Private Staging & Agent Wiring",
      p3: "Phase 3 (Days 15–21): Live Integration & Client Handover",
    },
  },
  {
    id: "enterprise",
    name: "150+ Enterprise",
    code: "S3",
    scopeDescription: "Multi-tenant VPC deployment with formal security review gates and dedicated compliance audit logging.",
    deliveryRange: {
      p1: "Phase 1 (Days 1–10): Architectural Triage & Security Audit",
      p2: "Phase 2 (Days 11–20): Dedicated VPC Infrastructure Staging",
      p3: "Phase 3 (Days 21–28): Enterprise Integration & Governance Sign-off",
    },
  },
];

// 03 // BOTTLENECK OPTIONS
export interface BottleneckOption {
  id: string;
  name: string;
  code: string;
  primaryIntervention: string;
  guardrails: string[];
}

export const BOTTLENECK_OPTIONS: BottleneckOption[] = [
  {
    id: "latency",
    name: "Inbound Lead Qualification & Latency Decay",
    code: "B1",
    primaryIntervention: "Sub-60s multi-channel conversational intake executing deterministic parameter extraction and automated scheduling.",
    guardrails: [
      "Strict JSON schema validation on lead payloads",
      "Source-constrained knowledge boundaries for pricing & scope",
      "Human escalation queues for non-standard enterprise inquiries",
    ],
  },
  {
    id: "document",
    name: "Unstructured Document Reconciliation & Review",
    code: "B2",
    primaryIntervention: "Multi-agent document parsing pipeline executing deterministic extraction and automated 3-way reconciliation against ERP records.",
    guardrails: [
      "Deterministic 3-way matching thresholds for line items",
      "Strict citation linking to original source documents",
      "Automated routing of discrepancies to exception queues",
    ],
  },
  {
    id: "knowledge",
    name: "Tribal Knowledge Silos & Onboarding Ramps",
    code: "B3",
    primaryIntervention: "Private retrieval-augmented knowledge layer indexing verified standard operating procedures with source-document citation.",
    guardrails: [
      "Strict document attribution before response generation",
      "Model-provider training restrictions configured through applicable enterprise agreements",
      "Interactive scenario simulation with compliance verification",
    ],
  },
  {
    id: "reporting",
    name: "Cross-Departmental Reporting & Compliance Gaps",
    code: "B4",
    primaryIntervention: "Automated data synthesis aggregating operational metrics across all business units into structured executive briefings.",
    guardrails: [
      "Immutable transactional audit logging of all operational events",
      "Automated compliance rule validation against contract baselines",
      "Tiered executive approval thresholds for operational changes",
    ],
  },
];

// 04 // INFRASTRUCTURE & DATA BOUNDARY
export interface InfrastructureOption {
  id: string;
  name: string;
  code: string;
  boundaryDescription: string;
  infrastructureSpecs: string[];
}

export const INFRASTRUCTURE_OPTIONS: InfrastructureOption[] = [
  {
    id: "vpc",
    name: "Dedicated Private VPC (AWS / Azure)",
    code: "VPC",
    boundaryDescription: "Single-tenant isolated VPC deployment with dedicated private subnets and zero public IP routing.",
    infrastructureSpecs: [
      "Dedicated single-tenant VPC peering (AWS / Azure / GCP)",
      "Single-tenant vector database with zero multi-tenant memory",
      "Enterprise zero-retention model orchestration API contracts",
    ],
  },
  {
    id: "enclave",
    name: "Private Cloud Enclave (Client-Governed)",
    code: "ENC",
    boundaryDescription: "Air-gapped containerized agent runtime executed directly inside client-owned cloud or on-prem infrastructure.",
    infrastructureSpecs: [
      "Client-hosted container deployment with full local data residency",
      "Outbound data transmission can be restricted according to client deployment requirements",
      "Self-contained embeddings repository and local LLM runtime options",
    ],
  },
];

export const AiBlueprintArchitect: React.FC<AiBlueprintArchitectProps> = ({
  onOpenBookingWithBlueprint,
}) => {
  // State: Defaulting to Recruitment, Mid-Market, Latency, VPC
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("recruitment");
  const [selectedScaleId, setSelectedScaleId] = useState<string>("midmarket");
  const [selectedBottleneckId, setSelectedBottleneckId] = useState<string>("latency");
  const [selectedInfraId, setSelectedInfraId] = useState<string>("vpc");
  const [copiedSpec, setCopiedSpec] = useState<boolean>(false);

  const activeIndustry = INDUSTRY_OPTIONS.find((i) => i.id === selectedIndustryId) || INDUSTRY_OPTIONS[0];
  const activeScale = SCALE_OPTIONS.find((s) => s.id === selectedScaleId) || SCALE_OPTIONS[1];
  const activeBottleneck = BOTTLENECK_OPTIONS.find((b) => b.id === selectedBottleneckId) || BOTTLENECK_OPTIONS[0];
  const activeInfra = INFRASTRUCTURE_OPTIONS.find((inf) => inf.id === selectedInfraId) || INFRASTRUCTURE_OPTIONS[0];

  const specId = `SPEC-2026-${activeIndustry.code}-${activeScale.code}-${activeInfra.code}`;

  const handleBooking = () => {
    onOpenBookingWithBlueprint({
      architectureName: `Stratision Architecture: ${activeIndustry.systemArchetype}`,
      executiveSummary: `Configured systems blueprint for ${activeScale.name} in ${activeIndustry.name}. Primary intervention: ${activeBottleneck.name}. Deployment: ${activeInfra.name}.`,
      recommendedAgentSwarm: [
        {
          name: "Deterministic Orchestration Agent",
          role: activeBottleneck.primaryIntervention,
          techStack: `${activeInfra.name} + Typed Schema Gates`,
        },
        {
          name: "Integration Gateway Agent",
          role: `Synchronizes data bi-directionally across ${activeIndustry.integrations.slice(0, 2).join(", ")}`,
          techStack: "REST/GraphQL Webhook Orchestration",
        },
      ],
      projectedSavings: "Evaluated during architectural discovery",
      hoursSavedPerMonth: 0,
      roiTimeline: "Modelled phased delivery (indicative)",
      implementationMilestones: [
        { phase: "Phase 1", title: activeScale.deliveryRange.p1 },
        { phase: "Phase 2", title: activeScale.deliveryRange.p2 },
        { phase: "Phase 3", title: activeScale.deliveryRange.p3 },
      ],
    });
  };

  const handleCopySpec = () => {
    const text = `STRATISION ARCHITECTURE SPECIFICATION
Identifier: ${specId}
Industry: ${activeIndustry.name}
System Classification: ${activeIndustry.systemArchetype}
Scale Scope: ${activeScale.name} (${activeScale.scopeDescription})
Primary Bottleneck: ${activeBottleneck.name}
Intervention: ${activeBottleneck.primaryIntervention}
Target Integrations: ${activeIndustry.integrations.join(", ")}
Deployment Boundary: ${activeInfra.name} (${activeInfra.boundaryDescription})
Delivery Projection (Indicative):
- ${activeScale.deliveryRange.p1}
- ${activeScale.deliveryRange.p2}
- ${activeScale.deliveryRange.p3}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopiedSpec(true);
      setTimeout(() => setCopiedSpec(false), 2000);
    });
  };

  return (
    <section id="blueprint-architect" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>08 — SYSTEM SCOPING & CONFIGURATION</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">ARCHITECTURAL BLUEPRINT SPECIFIER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Enterprise System Scoping Console.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Parameterized Systems Scoping, Infrastructure Topology Mapping, and Phased Delivery Scoping.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>CONFIGURATOR CONSOLE</span>
              <span>ENTERPRISE SPECIFIER</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: THE DUAL-CHAMBER SYSTEMS SCOPING CONSOLE
            (Unified Dual-Chamber Grid: Chamber A Inputs / Chamber B Specification)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Console Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold text-white uppercase tracking-wider">
                ENTERPRISE SYSTEM SCOPING & ARCHITECTURE SPECIFIER
              </span>
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400"></span>
              <span>CONFIGURATION INTERFACE ACTIVE — PARAMETERS LIVE</span>
            </div>
          </div>

          {/* Dual-Chamber Geometry (Stacks on Mobile, Split on Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* CHAMBER A: OPERATIONAL PARAMETER SELECTOR (lg:col-span-5) */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-8 bg-[#070A12]">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400"></span>
                  <span>CHAMBER A // OPERATIONAL PARAMETERS</span>
                </span>
                <h3 className="text-base font-serif font-bold text-white mt-1">
                  Configure Enterprise Scenario
                </h3>
              </div>

              {/* 01 // INDUSTRY DOMAIN */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    01 // INDUSTRY DOMAIN
                  </label>
                  <span className="text-[10px] font-mono text-slate-500">SELECT 1</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {INDUSTRY_OPTIONS.map((ind) => {
                    const isSelected = selectedIndustryId === ind.id;
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => setSelectedIndustryId(ind.id)}
                        className={`p-3 text-left border transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0F172A] border-blue-500 text-white font-medium shadow-sm"
                            : "bg-[#0A0E1A] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span className="text-xs font-sans truncate">{ind.name}</span>
                        <span className={`text-[10px] font-mono shrink-0 ml-2 ${isSelected ? "text-blue-400 font-bold" : "text-slate-600"}`}>
                          [{isSelected ? "●" : " "}]
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 02 // ORGANISATIONAL SCALE */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    02 // ORGANISATIONAL SCALE
                  </label>
                  <span className="text-[10px] font-mono text-slate-500">HEADCOUNT</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {SCALE_OPTIONS.map((scale) => {
                    const isSelected = selectedScaleId === scale.id;
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => setSelectedScaleId(scale.id)}
                        className={`p-3 text-left border transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0F172A] border-blue-500 text-white font-medium shadow-sm"
                            : "bg-[#0A0E1A] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span className="text-xs font-sans truncate">{scale.name}</span>
                        <span className={`text-[10px] font-mono shrink-0 ml-1.5 ${isSelected ? "text-blue-400 font-bold" : "text-slate-600"}`}>
                          [{isSelected ? "●" : " "}]
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 03 // PRIMARY BOTTLENECK SURFACE */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    03 // PRIMARY BOTTLENECK SURFACE
                  </label>
                  <span className="text-[10px] font-mono text-slate-500">FOCUS</span>
                </div>
                <div className="space-y-2">
                  {BOTTLENECK_OPTIONS.map((b) => {
                    const isSelected = selectedBottleneckId === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBottleneckId(b.id)}
                        className={`w-full p-3 text-left border transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0F172A] border-blue-500 text-white font-medium shadow-sm"
                            : "bg-[#0A0E1A] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span className="text-xs font-sans">{b.name}</span>
                        <span className={`text-[10px] font-mono shrink-0 ml-2 ${isSelected ? "text-blue-400 font-bold" : "text-slate-600"}`}>
                          [{isSelected ? "●" : " "}]
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 04 // INFRASTRUCTURE & DATA BOUNDARY */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    04 // INFRASTRUCTURE & DATA BOUNDARY
                  </label>
                  <span className="text-[10px] font-mono text-slate-500">RESIDENCY</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {INFRASTRUCTURE_OPTIONS.map((inf) => {
                    const isSelected = selectedInfraId === inf.id;
                    return (
                      <button
                        key={inf.id}
                        type="button"
                        onClick={() => setSelectedInfraId(inf.id)}
                        className={`p-3 text-left border transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0F172A] border-blue-500 text-white font-medium shadow-sm"
                            : "bg-[#0A0E1A] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span className="text-xs font-sans truncate">{inf.name}</span>
                        <span className={`text-[10px] font-mono shrink-0 ml-1.5 ${isSelected ? "text-blue-400 font-bold" : "text-slate-600"}`}>
                          [{isSelected ? "●" : " "}]
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* CHAMBER B: ARCHITECTURE SPECIFICATION DOSSIER (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8 bg-[#090D18] flex flex-col justify-between">
              
              <div className="space-y-8">
                
                {/* Dossier Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400"></span>
                      <span>CHAMBER B // ARCHITECTURE SPECIFICATION DOSSIER</span>
                    </div>
                    <div className="text-xs font-mono text-slate-300">
                      SPECIFICATION ID: <span className="text-white font-bold">{specId}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopySpec}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-800 flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      {copiedSpec ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Spec Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-400" />
                          <span>Export Spec Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* System Classification */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    SYSTEM CLASSIFICATION:
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-snug">
                    {activeIndustry.systemArchetype}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {activeScale.scopeDescription}
                  </p>
                </div>

                {/* Recommended Infrastructure & Boundaries */}
                <div className="space-y-2.5 p-4 bg-[#070A12] border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-blue-400" />
                    <span>RECOMMENDED INFRASTRUCTURE & BOUNDARIES:</span>
                  </div>
                  <div className="space-y-1.5">
                    {activeInfra.infrastructureSpecs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-blue-400 font-bold shrink-0">↳</span>
                        <span className="leading-relaxed">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Intervention & Guardrails */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    PRIMARY INTERVENTION & ENGINEERING GUARDRAILS:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                    {activeBottleneck.primaryIntervention}
                  </p>
                  <div className="space-y-1.5 pt-2">
                    {activeBottleneck.guardrails.map((g, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                        <span className="text-emerald-400 font-bold shrink-0">•</span>
                        <span className="leading-relaxed">{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Integration Matrix */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    <Layers className="w-3 h-3 text-slate-400" />
                    <span>TARGET INTEGRATION MATRIX:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeIndustry.integrations.map((conn, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1"
                      >
                        ↳ {conn}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modelled Phased Delivery Projection (Indicative) */}
                <div className="space-y-2.5 p-4 bg-[#0A0E1A] border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>MODELLED PHASED DELIVERY PROJECTION:</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase">
                      INDICATIVE — SUBJECT TO DISCOVERY
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs font-mono text-slate-300">
                    <div>• {activeScale.deliveryRange.p1}</div>
                    <div>• {activeScale.deliveryRange.p2}</div>
                    <div>• {activeScale.deliveryRange.p3}</div>
                  </div>
                </div>

              </div>

              {/* Action Bay within Chamber B */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-slate-400">
                    SCOPING GOVERNANCE: <span className="text-slate-200">Client-Owned Bespoke Assets · Subject to Agreed Engagement Terms</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleBooking}
                    className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm shrink-0"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Architectural Governance & Provenance Footer */}
          <div className="p-4 bg-black border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>PARAMETERIZED SPECIFICATION · MODELLED PHASED TIMELINES (INDICATIVE)</span>
            </div>
            <div className="text-slate-500">
              CLIENT-OWNED BESPOKE ASSETS · DESIGNED TO MINIMIZE VENDOR LOCK-IN
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
