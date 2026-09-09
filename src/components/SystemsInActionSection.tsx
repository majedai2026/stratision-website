import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, Database, Cpu, CheckCircle2 } from "lucide-react";

interface SystemsInActionSectionProps {
  onOpenBooking: () => void;
}

interface Scenario {
  id: string;
  industry: string;
  title: string;
  businessProblem: string;
  whatStratisionBuilds: string;
  howSystemWorks: string[];
  inputData: string;
  verifiedOutput: string;
  businessOutcome: string;
  governanceNote: string;
}

const MODELLED_SCENARIOS: Scenario[] = [
  {
    id: "logistics",
    industry: "GLOBAL LOGISTICS & FREIGHT",
    title: "Trade & Shipping Document Processing",
    businessProblem:
      "A freight forwarding company handles large volumes of customs declarations, shipping documents and supplier invoices. Manual checking can create delays and place unnecessary administrative pressure on the team.",
    whatStratisionBuilds:
      "An automated document workflow that reads incoming paperwork, checks key information against the company's rules and highlights anything that requires human review.",
    inputData: "Commercial Invoices, Bills of Lading, Shipping Manifests & Customs Forms",
    howSystemWorks: [
      "Documents are received securely across multiple languages and formats",
      "AI reads and checks key details against approved company rules and schedules",
      "Exceptions and discrepancies are highlighted for human review",
    ],
    verifiedOutput: "Approved documentation sent directly to the relevant customs system or internal team.",
    businessOutcome: "Less repetitive document handling, faster processing and a clearer process for managing exceptions.",
    governanceNote: "Every transaction is recorded with complete audit details in your company archive.",
  },
  {
    id: "private-equity",
    industry: "FINANCIAL SERVICES & ASSET MANAGEMENT",
    title: "Investment Diligence & Deal Analysis",
    businessProblem:
      "Investment teams can spend significant time reviewing large volumes of financial and legal documents before making important decisions.",
    whatStratisionBuilds:
      "An AI system that reviews large document sets, identifies important terms and figures, and prepares a structured briefing with references back to the original information.",
    inputData: "300+ Page Confidential Information Memoranda, Financial Audits & Historical Ledgers",
    howSystemWorks: [
      "AI reviews large document sets and identifies key terms and commitments",
      "Cross-references figures against audited financial records and source documents",
      "Prepares a structured summary highlighting notable points and discrepancies",
    ],
    verifiedOutput: "Executive briefing prepared for investment review with source references.",
    businessOutcome: "Faster access to important information and clearer evidence for investment review.",
    governanceNote: "All extracted figures link directly to original document page and line coordinates.",
  },
  {
    id: "underwriting",
    industry: "COMMERCIAL INSURANCE & UNDERWRITING",
    title: "Commercial Policy Review & Risk Assessment",
    businessProblem:
      "Underwriting teams handle large volumes of broker submissions and spend significant time reviewing documents before deciding whether to quote.",
    whatStratisionBuilds:
      "An AI-assisted review system that checks submissions against the organisation's underwriting rules, highlights missing information and prepares the relevant information for underwriter review.",
    inputData: "Broker Submissions, Structural Property Surveys & Historical Claims History",
    howSystemWorks: [
      "Reviews submissions against approved underwriting criteria and risk guidelines",
      "Identifies missing risk factors or documents needed for a complete review",
      "Prepares the submission summary for underwriter evaluation",
    ],
    verifiedOutput: "Complete submission summary prepared for underwriter review and decision.",
    businessOutcome: "Faster initial review, more consistent checks and less repetitive work for underwriting teams.",
    governanceNote: "Full risk evaluation and decision criteria recorded with time-stamped logs.",
  },
];

export const SystemsInActionSection: React.FC<SystemsInActionSectionProps> = ({ onOpenBooking }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);

  const scenario = MODELLED_SCENARIOS[selectedScenarioIndex];

  return (
    <section
      id="systems-in-action"
      className="relative py-20 md:py-28 bg-[#080A10] border-t border-white/[0.06] text-slate-100 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 block">
              04 — SYSTEMS IN ACTION
            </span>
            <h2
              className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-[1.12]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              See how Stratision solves real business problems.
            </h2>
            <p
              className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Examples of how we turn time-consuming business processes into intelligent, connected workflows.
            </p>
          </div>

          {/* Transparent Architectural Precedent Label */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-[11px] font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>MODELLED ARCHITECTURAL SCENARIO</span>
            </div>
          </div>
        </motion.div>

        {/* Scenario Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-white/[0.06] no-scrollbar">
          {MODELLED_SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => setSelectedScenarioIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer shrink-0 ${
                selectedScenarioIndex === idx
                  ? "bg-white text-[#080A10] shadow-md"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Dynamic Architectural Exhibit Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 rounded-3xl bg-[#090D17] border border-white/[0.08] p-6 sm:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Top Industry & Title Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-400 tracking-wider">
                  {scenario.industry}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {scenario.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-white/[0.03] px-4 py-2 rounded-xl border border-white/[0.06]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GOVERNANCE: IMMUTABLE AUDIT LOG</span>
              </div>
            </div>

            {/* Context: 1. Business Problem & 2. What Stratision Builds */}
            <div className="py-6 border-b border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-rose-400 tracking-wider block font-semibold">
                  01 — THE BUSINESS PROBLEM
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {scenario.businessProblem}
                </p>
              </div>
              <div className="lg:col-span-6 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-blue-400 tracking-wider block font-semibold">
                  02 — WHAT STRATISION BUILDS
                </span>
                <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                  {scenario.whatStratisionBuilds}
                </p>
              </div>
            </div>

            {/* Architecture Flow Diagram: Restrained Consultancy Schematic */}
            <div className="py-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                  03 — HOW IT WORKS
                </span>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                  AUTOMATED END-TO-END WORKFLOW
                </span>
              </div>

              {/* Dynamic Connecting Data Stream Line */}
              <div className="hidden md:block mb-4">
                <svg viewBox="0 0 900 24" className="w-full h-6" fill="none">
                  <line x1="60" y1="12" x2="840" y2="12" stroke="#1E293B" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Moving Animated Packet */}
                  <motion.circle
                    cx="60"
                    cy="12"
                    r="3.5"
                    fill="#60A5FA"
                    animate={{ cx: [60, 450, 840] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <circle cx="60" cy="12" r="3" fill="#3B82F6" />
                  <circle cx="450" cy="12" r="4" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1.5" />
                  <circle cx="840" cy="12" r="3.5" fill="#10B981" />
                </svg>
              </div>

              {/* 3 Pipeline Architectural Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                
                {/* Stage 1: Ingestion */}
                <div className="rounded-2xl bg-[#0B0F19] border border-white/[0.08] p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      STAGE 1 — INFORMATION RECEIVED
                    </span>
                    <Database className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {scenario.inputData}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Received securely within your organization's approved data boundary.
                  </p>
                </div>

                {/* Stage 2: Bespoke Processing Core */}
                <div className="rounded-2xl bg-[#0D1424] border border-blue-500/30 p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                      STAGE 2 — AI REVIEWS & CHECKS
                    </span>
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="space-y-2 text-xs text-slate-200">
                    {scenario.howSystemWorks.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono text-[10px]">{sIdx + 1}.</span>
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage 3: System-of-Record Action */}
                <div className="rounded-2xl bg-[#091717] border border-emerald-500/30 p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                      STAGE 3 — RESULT & ACTION
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {scenario.verifiedOutput}
                  </div>
                  <p className="text-xs text-slate-400 font-mono text-[11px]">
                    {scenario.governanceNote}
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Outcome & Scoping Action Banner */}
            <div className="pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  04 — BUSINESS BENEFIT
                </span>
                <p className="text-sm sm:text-base font-medium text-slate-200">
                  {scenario.businessOutcome}
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 group shadow-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Model Your Workflow</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

