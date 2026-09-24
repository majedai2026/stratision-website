import React, { useState } from "react";
import { ArrowRight, PhoneCall, Users, FileText } from "lucide-react";

interface SystemsShowcaseSectionProps {
  onOpenBooking: () => void;
}

interface ShowcaseSystem {
  id: "recruitment" | "workforce" | "professional";
  navLabel: string;
  systemCode: string;
  title: string;
  description: string;
  provenanceType: string;
  queueTitle: string;
  queueCount: string;
  queueItems: Array<{ primary: string; channel: string; detail: string; status: string }>;
  evalLogTitle: string;
  latencySpec: string;
  evalLogLines: string[];
  metrics: Array<{ value: string; label: string; provenance: string }>;
}

const SHOWCASE_SYSTEMS: Record<string, ShowcaseSystem> = {
  recruitment: {
    id: "recruitment",
    navLabel: "01 // Recruitment Inbound",
    systemCode: "SYSTEM 01 // RECRUITMENT & STAFFING",
    title: "Candidate Qualification & Calendar Dispatch Engine",
    description: "Multi-channel qualification across voice, web, and messaging with bi-directional ATS synchronisation.",
    provenanceType: "SYNTHETIC DEMONSTRATION",
    queueTitle: "INBOUND QUEUE",
    queueCount: "3 Active in Queue",
    queueItems: [
      { primary: "James M. • Senior Cloud Eng", channel: "WhatsApp", detail: "Pre-Qualified • £110k Target", status: "Verified" },
      { primary: "Sarah T. • Product Lead", channel: "Webchat", detail: "Calendar Dispatched • 11:00 AM", status: "Booked" },
      { primary: "David K. • Full Stack Lead", channel: "Voice", detail: "Transcribed • Synced to ATS", status: "Synced" },
    ],
    evalLogTitle: "DETERMINISTIC EVALUATION TRACE",
    latencySpec: "SPECIFICATION: < 1.0s",
    evalLogLines: [
      "Inbound Profile: Senior Cloud Architect (AWS / Kubernetes)",
      "Notice Period: 2 Weeks (Matches Client Mandate)",
      "Right to Work: UK Verified (Pass)",
      "Salary Expectation: £110,000 (Within £105k-£120k Band)",
      "Routing: Dispatched to Senior Consultant Calendar (#CAL-991)",
    ],
    metrics: [
      { value: "3,840", label: "Synthetic Sample Triaged", provenance: "Synthetic Demonstration" },
      { value: "54s", label: "Average Triage Latency", provenance: "Technical Specification" },
      { value: "94.2%", label: "Placement Match Target", provenance: "Modelled Scenario" },
    ],
  },
  workforce: {
    id: "workforce",
    navLabel: "02 // Corporate Knowledge",
    systemCode: "SYSTEM 02 // WORKFORCE INTELLIGENCE",
    title: "Active Corporate Knowledge Coach & Role Simulator",
    description: "Ingests enterprise SOPs, simulates complex customer scenarios, and tracks competency gap analytics.",
    provenanceType: "SYNTHETIC DEMONSTRATION",
    queueTitle: "INGESTED SOP REPOSITORY",
    queueCount: "3 Active Repositories",
    queueItems: [
      { primary: "Enterprise Escalation Matrix v4.2", channel: "SOP Doc", detail: "84 scenario vectors active", status: "Indexed" },
      { primary: "Financial Compliance & AML Guide", channel: "Policy", detail: "142 regulatory citation rules", status: "Indexed" },
      { primary: "Key Account Objection Handling SOP", channel: "Playbook", detail: "Interactive simulation ready", status: "Indexed" },
    ],
    evalLogTitle: "SIMULATION EVALUATION TRACE",
    latencySpec: "SPECIFICATION: CITATION-GROUNDED",
    evalLogLines: [
      "Simulated Client: 'We need a 30% reduction or we terminate.'",
      "Trainee Response: 'Let us align billing milestones to Q4 targets rather than cutting scope.'",
      "Evaluation: Adherence to Value-Preservation SOP (Pass)",
      "Citation: Master Commercial Agreement §3.4 Referenced",
      "Competency Score: 96% Protocol Alignment Logged to LMS",
    ],
    metrics: [
      { value: "184", label: "Active Learners in Cohort", provenance: "Synthetic Demonstration" },
      { value: "60%", label: "Target Ramp Reduction", provenance: "Modelled Scenario" },
      { value: "91.8%", label: "Knowledge Retention Rate", provenance: "Modelled Scenario" },
    ],
  },
  professional: {
    id: "professional",
    navLabel: "03 // Reconciliation Pipeline",
    systemCode: "SYSTEM 03 // PROFESSIONAL SERVICES",
    title: "Multi-Modal Document Extraction & 3-Way Reconciliation",
    description: "Automated extraction on PDF contracts, invoices, and bank records with deterministic ERP cross-verification.",
    provenanceType: "SYNTHETIC DEMONSTRATION",
    queueTitle: "DOCUMENT STREAM",
    queueCount: "3 Stream Records",
    queueItems: [
      { primary: "Invoice #INV-8891 • Global Logistics", channel: "PDF", detail: "$64,200.00 • 3-Way Verified", status: "Matched" },
      { primary: "Vendor Agreement Addendum", channel: "DOCX", detail: "14 liability clauses mapped", status: "Extracted" },
      { primary: "Cross-Border Customs Manifest", channel: "PDF", detail: "Reconciled with SAP Ledger", status: "Posted" },
    ],
    evalLogTitle: "3-WAY RECONCILIATION AUDIT TRACE",
    latencySpec: "SPECIFICATION: 99.9% EXTRACTION",
    evalLogLines: [
      "Document: Commercial Invoice #INV-8891 (£34,800.00)",
      "PO Verification: Purchase Order #PO-99120 Matched (Line items verified)",
      "Goods Receipt: GRN-4019 Verified via Warehouse Log",
      "Tax Calculation: VAT Breakdown Reconciled against HMRC Schedule",
      "ERP Action: Journal Entry #JE-1902 posted to SAP Ledger",
    ],
    metrics: [
      { value: "14,890", label: "Sample Batch Ingested", provenance: "Synthetic Demonstration" },
      { value: "99.9%", label: "Extraction Accuracy Spec", provenance: "Technical Specification" },
      { value: "18 hrs", label: "Weekly Hours Saved / Staff", provenance: "Modelled Scenario" },
    ],
  },
};

export const SystemsShowcaseSection: React.FC<SystemsShowcaseSectionProps> = ({ onOpenBooking }) => {
  const [activeSystemTab, setActiveSystemTab] = useState<"recruitment" | "workforce" | "professional">("recruitment");

  const system = SHOWCASE_SYSTEMS[activeSystemTab];

  return (
    <section id="systems-showcase" className="py-24 bg-[#050811] text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
            <span>06 — DEMONSTRATION ENVIRONMENT</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">SYNTHETIC OPERATING WORKFLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
            Systems We've Built.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Deterministic AI systems engineered for private client VPCs — demonstrated below via a persistent operating console simulating candidate qualification, corporate knowledge, and document reconciliation.
          </p>
        </div>

        {/* Console Environment System Selector */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          {(["recruitment", "workforce", "professional"] as const).map((key) => {
            const item = SHOWCASE_SYSTEMS[key];
            const isSelected = activeSystemTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSystemTab(key)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? "bg-slate-800 text-white font-semibold border-slate-600"
                    : "bg-black/60 text-slate-400 hover:text-white border-slate-800"
                }`}
              >
                {key === "recruitment" && <PhoneCall className="w-3.5 h-3.5" />}
                {key === "workforce" && <Users className="w-3.5 h-3.5" />}
                {key === "professional" && <FileText className="w-3.5 h-3.5" />}
                <span>{item.navLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ONE PERSISTENT OPERATING CONSOLE FRAME */}
        <div className="p-8 sm:p-10 bg-[#080C15] border border-slate-800 shadow-2xl space-y-6">
          
          {/* Console Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase font-medium">
                {system.systemCode}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5 font-serif">
                {system.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {system.description}
              </p>
            </div>
            <div className="text-[10px] font-mono text-slate-400 bg-black px-3 py-1.5 border border-slate-800 uppercase self-start lg:self-center">
              SYSTEM PROVENANCE: {system.provenanceType}
            </div>
          </div>

          {/* Persistent Console Two-Column Interior */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Inbound / Active Stream Records */}
            <div className="lg:col-span-4 p-5 bg-black border border-slate-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span>{system.queueTitle}</span>
                  <span className="text-slate-400">{system.queueCount}</span>
                </div>
                <div className="space-y-2 text-xs">
                  {system.queueItems.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-900/80 border border-slate-800 text-slate-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white truncate mr-2">{item.primary}</span>
                        <span className="text-[10px] text-slate-400 font-mono shrink-0">{item.channel}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>{item.detail}</span>
                        <span className="text-slate-300 text-[10px]">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-500 border-t border-slate-900">
                CONTAINER: CLIENT PRIVATE CLOUD
              </div>
            </div>

            {/* Right Column: Execution Log & Output Metrics */}
            <div className="lg:col-span-8 p-5 bg-black border border-slate-800 space-y-4 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                  <span>{system.evalLogTitle}</span>
                  <span className="text-slate-400 text-[10px]">{system.latencySpec}</span>
                </div>

                {/* Terminal Execution Record */}
                <div className="font-mono text-xs space-y-1.5 text-slate-300 bg-[#070A12] p-4 border border-slate-800/80">
                  {system.evalLogLines.map((line, idx) => (
                    <div key={idx} className="leading-relaxed">
                      <span className="text-slate-600 mr-2">[{idx + 1}]</span>
                      <span className={idx === system.evalLogLines.length - 1 ? "text-slate-200 font-semibold" : "text-slate-400"}>
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Metric Points with Clean Provenance */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {system.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 border border-slate-800 text-center space-y-0.5">
                    <div className="text-lg font-bold font-mono text-white">{m.value}</div>
                    <div className="text-[10px] font-mono text-slate-400 leading-tight">{m.label}</div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase pt-0.5">{m.provenance}</div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* Action Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-[#080C15] border border-slate-800 gap-4">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-white tracking-tight font-serif">
              Want an operating environment custom-engineered for your workflow?
            </h4>
            <p className="text-xs text-slate-400">
              We scope, build, and deploy custom pipelines directly into your private cloud infrastructure.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
