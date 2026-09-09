import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";

interface WhatWeBuildSectionProps {
  onOpenBooking: () => void;
}

export const WhatWeBuildSection: React.FC<WhatWeBuildSectionProps> = ({ onOpenBooking }) => {
  const [selectedFamily, setSelectedFamily] = useState<number>(0);

  const capabilities = [
    {
      id: "workforce",
      number: "01",
      title: "Workforce Intelligence",
      flagship: "Workforce Intelligence Platform™",
      summary: "Give employees instant access to the operational knowledge, procedures, and training they need.",
      problem:
        "Important knowledge is often scattered across documents, systems and individual employees. This can slow onboarding, create repeated questions and make it harder for teams to work consistently.",
      systemDescription:
        "A company-specific AI knowledge system built around your approved manuals, procedures and training materials. Employees can ask questions and quickly find the information they need.",
      leverage:
        "Faster access to company knowledge, easier onboarding and more consistent ways of working.",
      keyCapabilities: [
        "Uses your approved manuals, policies and procedural guides.",
        "Helps employees find answers to day-to-day operational questions, with references back to the relevant source.",
        "Highlights knowledge and training gaps to help leadership improve team readiness.",
        "Provides role-specific onboarding paths built around approved company practices.",
      ],
      deliverable: "Bespoke AI Knowledge System",
    },
    {
      id: "operations",
      number: "02",
      title: "Operations & Workflows",
      flagship: "Workflow Automation & Core Operations",
      summary: "Automate repetitive work, connect disconnected systems, and keep important tasks moving.",
      problem:
        "High-volume routine tasks—such as matching supplier invoices, verifying shipping documents, and updating records across separate software systems—consume hours of skilled employee time and create avoidable delays.",
      systemDescription:
        "Tailored automated workflows that extract information from incoming documents, verify figures against your business rules, update your accounting and management systems directly, and flag only unusual exceptions for manager review.",
      leverage:
        "Removes manual data entry, cuts turnaround times from days to minutes, and frees operational staff to focus on higher-value client and supplier management.",
      keyCapabilities: [
        "Automated extraction and verification of commercial invoices, contracts, and shipping files",
        "Direct synchronization between your ERP, CRM, and internal databases without manual re-keying",
        "Clear approval rules that automatically route exceptions to the responsible manager",
        "Complete activity logs providing full operational visibility and compliance tracking",
      ],
      deliverable: "Bespoke Workflow Automation & Direct System-of-Record Integration",
    },
    {
      id: "commercial",
      number: "03",
      title: "Sales & Customer Operations",
      flagship: "Enquiry Triage & Commercial Operations",
      summary: "Capture enquiries, qualify opportunities, respond faster, and support clients around the clock.",
      problem:
        "Valuable incoming sales leads, client inquiries, and quotation requests often wait hours or days for responses. Busy teams struggle with inconsistent lead follow-ups and time-consuming manual CRM updates.",
      systemDescription:
        "Intelligent commercial systems engineered around your exact qualification criteria, pricing guidelines, and brand standards. They promptly qualify incoming enquiries, generate initial proposals within approved guardrails, and schedule meetings with the right team members.",
      leverage:
        "Delivers instant responses to high-value prospects, ensures consistent commercial qualification, and keeps pipeline records current without adding administrative burden.",
      keyCapabilities: [
        "Prompt qualification and intelligent routing of inbound enquiries across web, email, and voice",
        "Assisted proposal and quote preparation adhering strictly to your pricing parameters",
        "Automated executive scheduling coordinating multiple stakeholder availability",
        "Automatic pipeline updates keeping CRM deal records and client history accurate",
      ],
      deliverable: "Bespoke Commercial Core & Bidirectional CRM Architecture",
    },
    {
      id: "intelligence",
      number: "04",
      title: "Knowledge & Decision Support",
      flagship: "Executive Analysis & Decision Support",
      summary: "Turn your company's information into clear, reliable insights leadership can actually use.",
      problem:
        "Executives and investment committees often spend days combing through 300+ page contracts, regulatory filings, financial audits, or investment dossiers to identify covenant risks, hidden liabilities, or reporting discrepancies.",
      systemDescription:
        "Private analytical engines that review and cross-reference extensive document archives. They extract key terms, compare financial figures, and produce structured executive briefings where every finding is directly linked to the original page and paragraph.",
      leverage:
        "Reduces complex review cycles from days to hours, ensuring strategic decisions are backed by verifiable evidence with zero unverified speculation.",
      keyCapabilities: [
        "Comprehensive cross-document analysis across extensive contracts, filings, and audit decks",
        "Direct page and paragraph references linking every summary point back to source documents",
        "Automated identification of contractual risks, unusual terms, and financial discrepancies",
        "Structured executive briefing dossiers formatted for executive committee review",
      ],
      deliverable: "Private Decision Engine & Evidentiary Verification Framework",
    },
  ];

  const current = capabilities[selectedFamily];

  return (
    <section
      id="what-we-build"
      className="relative py-20 md:py-28 bg-[#080A10] border-t border-white/[0.06] text-slate-100 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start max-w-4xl mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 block">
            03 — WHAT WE BUILD
          </span>
          <h2
            className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-[1.12]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Four capability families. Determined by the business problem.
          </h2>
          <p
            className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The system is determined by the business problem — not the other way around. We do not sell off-the-shelf software subscriptions. Each capability is engineered bespoke around your organisation's workflows, anchored by our flagship Workforce Intelligence Platform™.
          </p>
        </motion.div>

        {/* Editorial 4-Column Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-white/[0.08]">
          {capabilities.map((cap, idx) => {
            const isSelected = selectedFamily === idx;
            const isFlagship = cap.id === "workforce";
            return (
              <div
                key={cap.id}
                onClick={() => setSelectedFamily(idx)}
                className={`p-7 lg:p-8 cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                  idx < 3 ? "lg:border-r border-b lg:border-b-0 border-white/[0.08]" : ""
                } ${isSelected ? "bg-[#0C1019]" : "hover:bg-white/[0.02]"}`}
              >
                {/* Active Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isSelected ? "bg-blue-500" : "bg-transparent"
                  }`}
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-blue-400">
                      {cap.number}
                    </span>
                    {isFlagship ? (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-semibold">
                        FLAGSHIP ENGAGEMENT
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        CAPABILITY
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      className="text-lg font-bold text-white tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {cap.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    {cap.summary}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <span className={`text-xs font-semibold tracking-tight transition-colors ${
                    isSelected ? "text-blue-400" : "text-slate-500"
                  }`}>
                    {isSelected ? "Active Architecture" : "View Architecture"}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${
                    isSelected ? "text-blue-400 translate-x-0.5 -translate-y-0.5" : "text-slate-500"
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Consultancy Architecture Exhibition (Problem -> System -> Leverage) */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-[#090D17] border border-white/[0.08] p-7 sm:p-10 shadow-xl"
            >
              {/* Header of the Selected Family */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                      CAPABILITY {current.number} — BESPOKE CONSULTANCY ENGAGEMENT
                    </span>
                    {current.id === "workforce" && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                        FLAGSHIP SYSTEM
                      </span>
                    )}
                  </div>
                  <h4
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {current.flagship}
                  </h4>
                  {current.id === "workforce" && (
                    <p className="text-xs text-blue-300/90 font-mono mt-1">
                      Built around your people, processes and company knowledge.
                    </p>
                  )}
                </div>
                <div className="text-left md:text-right shrink-0">
                  <span className="text-xs font-mono text-slate-400 block">DELIVERABLE</span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {current.deliverable}
                  </span>
                </div>
              </div>

              {/* 3 Strategic Columns: Business Problem -> Bespoke System -> Business Benefit */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 border-b border-white/[0.06]">
                {/* 1. Problem */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase text-rose-400 tracking-wider font-semibold block">
                    01 — THE BUSINESS PROBLEM
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {current.problem}
                  </p>
                </div>

                {/* 2. System */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase text-blue-400 tracking-wider font-semibold block">
                    02 — WHAT STRATISION BUILDS
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {current.systemDescription}
                  </p>
                </div>

                {/* 3. Leverage */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider font-semibold block">
                    03 — BUSINESS BENEFIT & OUTCOME
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {current.leverage}
                  </p>
                </div>
              </div>

              {/* Scope & Strategic Consultation Action */}
              <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Key System Capabilities */}
                <div className="space-y-2.5 max-w-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    ENGINEERED CAPABILITY MATRIX
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                    {current.keyCapabilities.map((capItem, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2 h-2 text-blue-400" />
                        </div>
                        <span className="leading-snug">{capItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="shrink-0">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <span>Discuss {current.flagship}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

