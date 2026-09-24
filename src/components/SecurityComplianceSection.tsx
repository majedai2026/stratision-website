import React from "react";
import { ArrowRight, ShieldCheck, Database, Lock, Server, FileText, CheckCircle2 } from "lucide-react";

export interface SecurityControlItem {
  id: string;
  controlId: string;
  title: string;
  category: string;
  specification: string;
  provenanceNote: string;
}

export interface SecurityZone {
  id: string;
  zoneNumber: string;
  zoneTitle: string;
  zoneSubtitle: string;
  controls: SecurityControlItem[];
}

export const SECURITY_ZONES: SecurityZone[] = [
  {
    id: "zone-01",
    zoneNumber: "01",
    zoneTitle: "ZONE 01 // PHYSICAL & LOGICAL PERIMETER CONTROLS",
    zoneSubtitle: "Infrastructure Tenancy, Memory Isolation & Egress Boundaries",
    controls: [
      {
        id: "ctrl-sec-01",
        controlId: "CTRL-SEC-01",
        title: "TENANCY & NETWORK ISOLATION",
        category: "Infrastructure Tenancy Boundary",
        specification: "Architected to deploy within client-governed VPCs (AWS, Azure, GCP) or dedicated private enclaves; isolated tenancy and networking configured according to the agreed infrastructure requirements.",
        provenanceNote: "Configured per client cloud infrastructure and scope requirements",
      },
      {
        id: "ctrl-sec-02",
        controlId: "CTRL-SEC-02",
        title: "TRANSIENT MEMORY EXECUTION POLICY",
        category: "In-Memory Payload Lifecycle",
        specification: "Multi-agent orchestration pipelines are designed to process operational payloads in ephemeral container memory; configured without persistent intermediary disk caching of sensitive payloads where specified.",
        provenanceNote: "Configured per workflow specification and client data-handling rules",
      },
      {
        id: "ctrl-sec-03",
        controlId: "CTRL-SEC-03",
        title: "MODEL EGRESS & DATA-BOUNDARY CONTROLS",
        category: "Model Gateway Routing",
        specification: "Model gateway adapters are designed to interface with provider endpoints and agreements that support applicable data-retention requirements, configured to prevent client operational data from being utilized for upstream model training where supported by provider agreements.",
        provenanceNote: "Subject to provider API agreements and client enterprise licensing",
      },
    ],
  },
  {
    id: "zone-02",
    zoneNumber: "02",
    zoneTitle: "ZONE 02 // CRYPTOGRAPHIC, IDENTITY & ACCESS CONTROLS",
    zoneSubtitle: "Transport Encryption, Key Management & Programmatic Schema Barriers",
    controls: [
      {
        id: "ctrl-sec-04",
        controlId: "CTRL-SEC-04",
        title: "CRYPTOGRAPHIC TRANSIT & KMS CONTROLS",
        category: "Cryptographic Architecture",
        specification: "Transport and key-management controls configured according to the client security architecture and engagement requirements, supporting TLS transport encryption and client-managed Key Management Services (KMS) where required.",
        provenanceNote: "Configured according to agreed client security architecture and KMS protocols",
      },
      {
        id: "ctrl-sec-05",
        controlId: "CTRL-SEC-05",
        title: "ACCESS SCOPING & WEBHOOK AUTHENTICATION",
        category: "Identity & Access Governance",
        specification: "Engineered around Principle of Least Privilege (PoLP) IAM roles; webhook authentication mechanisms such as HMAC-SHA256 signature verification can be configured for applicable inbound event endpoints according to the client identity, integration, and security requirements.",
        provenanceNote: "Configured according to the applicable client identity provider, integration architecture, and webhook security requirements.",
      },
      {
        id: "ctrl-sec-06",
        controlId: "CTRL-SEC-06",
        title: "DETERMINISTIC PRE-EXECUTION GATES",
        category: "Programmatic Schema Validation",
        specification: "Strict typed JSON schema validation blocks unverified or malformed data prior to initiating downstream transactional or database commitments, preventing malformed payload injection into systems of record.",
        provenanceNote: "Built-in core architectural engineering capability",
      },
    ],
  },
  {
    id: "zone-03",
    zoneNumber: "03",
    zoneTitle: "ZONE 03 // REGULATORY ALIGNMENT & AUDIT TELEMETRY",
    zoneSubtitle: "Data Protection Support, Human Oversight & Observability Streams",
    controls: [
      {
        id: "ctrl-reg-01",
        controlId: "CTRL-REG-01",
        title: "DATA PROTECTION BY DESIGN SUPPORT",
        category: "Privacy & Data Subject Rights",
        specification: "Architected to support Data Protection by Design principles; designed to support applicable compliance obligations and facilitate data subject rights (access, rectification, erasure) within client-governed databases, subject to client legal and security review.",
        provenanceNote: "Designed to support client compliance obligations; subject to client legal governance",
      },
      {
        id: "ctrl-reg-02",
        controlId: "CTRL-REG-02",
        title: "HUMAN OVERSIGHT & ESCALATION CONTROLS",
        category: "AI Governance & Exception Gates",
        specification: "Human oversight mechanisms designed to support applicable AI governance and human-oversight requirements; mandatory human review routing for high-consequence states, ambiguous payloads, and low-confidence classifications.",
        provenanceNote: "Built-in core architectural engineering capability",
      },
      {
        id: "ctrl-reg-03",
        controlId: "CTRL-REG-03",
        title: "OPERATIONAL AUDIT & TELEMETRY STREAMS",
        category: "Observability & SIEM Integration",
        specification: "Designed to export structured operational telemetry and timestamped transaction logs to client-selected observability or SIEM infrastructure (such as Datadog, Splunk, or CloudWatch) where supported by the engagement architecture.",
        provenanceNote: "Configured according to agreed client telemetry requirements",
      },
    ],
  },
];

interface SecurityComplianceSectionProps {
  onOpenBooking?: () => void;
}

export const SecurityComplianceSection: React.FC<SecurityComplianceSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="security" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <span>13 — ENTERPRISE SECURITY & GOVERNANCE</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">REGULATORY CONTROL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Enterprise Security, Compliance & Regulatory Control Matrix.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Procurement-Grade Control Specifications: Cryptographic Standards, Identity Isolation, Data Boundary Protocols, and Regulatory Framework Alignment.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end text-right font-mono text-[11px] text-slate-500 space-y-0.5">
              <span>CISO SPECIFICATION</span>
              <span>CONTROL MATRIX</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPECIES 01: ENTERPRISE SECURITY, COMPLIANCE & REGULATORY ATTESTATION MATRIX
            (Monolithic Continuous Enclosure: 3 Explicit Security & Governance Zones)
           ========================================================================= */}
        <div className="border border-slate-800 bg-[#080C15] shadow-2xl overflow-hidden">
          
          {/* Document Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 bg-blue-400"></span>
              <span className="font-bold text-white uppercase tracking-wider">
                CISO GOVERNANCE REPOSITORY: CONTROL-SPEC-2026
              </span>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400"></span>
              <span>STATUS: PROCUREMENT-GRADE CONTROL SPECIFICATIONS</span>
            </div>
          </div>

          {/* 3 Institutional Security Zones */}
          <div className="divide-y divide-slate-800">
            {SECURITY_ZONES.map((zone) => (
              <div key={zone.id} className="p-6 sm:p-8 lg:p-10 space-y-6">
                
                {/* Zone Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-800/80">
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400"></span>
                      <span>{zone.zoneTitle}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-sans">
                      {zone.zoneSubtitle}
                    </div>
                  </div>
                  <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                    CONTROLS CONFIGURED TO SCOPE
                  </span>
                </div>

                {/* Zone Controls List */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {zone.controls.map((ctrl) => (
                    <div
                      key={ctrl.id}
                      className="p-5 bg-[#070A12] border border-slate-800/90 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                          <span className="text-xs font-mono font-bold text-white tracking-wider">
                            {ctrl.controlId}
                          </span>
                          <span className="text-[9px] font-mono uppercase text-blue-400 tracking-wider">
                            {ctrl.category}
                          </span>
                        </div>

                        <h4 className="text-xs font-mono font-bold uppercase text-slate-200 tracking-wide">
                          {ctrl.title}
                        </h4>

                        <div className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                          <span className="text-blue-400 font-mono shrink-0 mt-0.5">↳</span>
                          <span>{ctrl.specification}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-slate-600"></span>
                        <span>{ctrl.provenanceNote}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Action Bay: Technical Procurement & CISO Dossier */}
          <div className="p-6 sm:p-8 bg-[#090D18] border-t border-slate-800">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>REQUEST SECURITY & GOVERNANCE DOSSIER</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Review specific data boundary parameters, network topology requirements, and compliance criteria with our team.
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
              <span>CISO PROCUREMENT SPECIFICATION · ARCHITECTURAL CONTROL MATRIX</span>
            </div>
            <div className="text-slate-500">
              CONTROLS CONFIGURED ACCORDING TO AGREED SCOPE, CLIENT INFRASTRUCTURE & APPLICABLE GOVERNANCE REQUIREMENTS
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
