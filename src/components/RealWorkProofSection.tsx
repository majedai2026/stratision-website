import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface RealWorkProofSectionProps {
  onOpenBooking: () => void;
}

interface WorkflowExample {
  id: string;
  num: string;
  industry: string;
  subhead: string;
  problem: string;
  aiHandles: string;
  result: string;
}

const WORKFLOW_EXAMPLES: WorkflowExample[] = [
  {
    id: "property",
    num: "01",
    industry: "PROPERTY",
    subhead: "CLIENT ENQUIRY",
    problem: "A new client enquiry arrives outside working hours.",
    aiHandles: "Checks the requirements and qualifies the enquiry.",
    result: "The broker receives a ready-to-review opportunity.",
  },
  {
    id: "operations",
    num: "02",
    industry: "OPERATIONS",
    subhead: "INVOICE DISCREPANCY",
    problem: "A supplier invoice does not match the agreed terms.",
    aiHandles: "Checks the invoice against the agreement and supporting records.",
    result: "The difference is found before payment.",
  },
  {
    id: "healthcare",
    num: "03",
    industry: "HEALTHCARE",
    subhead: "APPOINTMENT SCHEDULING",
    problem: "A patient requests an appointment.",
    aiHandles: "Checks the practice rules and available diary slots.",
    result: "The appointment is prepared for the front desk.",
  },
];

export const RealWorkProofSection: React.FC<RealWorkProofSectionProps> = ({ onOpenBooking }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = WORKFLOW_EXAMPLES[activeIdx];

  return (
    <section
      id="real-business-work"
      className="relative py-20 sm:py-36 lg:py-44 bg-[#05070C] border-t border-white/[0.06] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Large Section Heading & Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>OPERATIONAL WORKFLOW</span>
            </div>

            {/* Large Section Heading */}
            <h2
              className="text-3xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-[-0.035em] leading-[1.05]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              BUILT FOR REAL
              <br />
              BUSINESS WORK
            </h2>

            {/* Supporting Copy */}
            <p
              className="text-lg sm:text-2xl text-slate-200 mt-4 sm:mt-5 font-normal tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              AI should produce something useful.
            </p>

            <p className="text-sm sm:text-base text-slate-400 mt-3 font-normal leading-relaxed max-w-md">
              Practical systems designed around how businesses actually operate — taking repetitive work off your team's hands while keeping humans in full control.
            </p>
          </motion.div>

          {/* RIGHT: Large Vertical Operational Workflow (Pure Editorial Typography & Thin Rules) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {/* Header Folio of Active Example */}
            <div className="flex items-baseline justify-between border-b border-white/[0.12] pb-4 mb-6 sm:mb-10 text-xs font-mono tracking-wider">
              <div className="flex items-center gap-2.5">
                <span className="text-blue-400 font-bold">{current.num} //</span>
                <span className="text-white font-semibold">{current.industry}</span>
              </div>
              <span className="text-slate-400 uppercase tracking-widest">{current.subhead}</span>
            </div>

            {/* Sequential Operating Stages */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="space-y-6 sm:space-y-10"
              >
                {/* 01. Problem */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    <span className="text-slate-500">01</span>
                    <span className="text-slate-600">—</span>
                    <span>PROBLEM</span>
                  </div>
                  <p
                    className="text-lg sm:text-2xl lg:text-[26px] text-slate-200 font-normal tracking-tight leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {current.problem}
                  </p>
                </div>

                {/* Directional Divider */}
                <div className="flex items-center gap-3 pl-1 text-slate-600 font-mono text-sm">
                  <span>↓</span>
                  <div className="h-px w-12 bg-white/[0.08]" />
                </div>

                {/* 02. AI Handles It (Stratision Blue Accent) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                    <span className="text-blue-400">02</span>
                    <span className="text-blue-400/60">—</span>
                    <span>AI HANDLES IT</span>
                  </div>
                  <p
                    className="text-lg sm:text-2xl lg:text-[26px] text-blue-300 font-medium tracking-tight leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {current.aiHandles}
                  </p>
                </div>

                {/* Directional Divider */}
                <div className="flex items-center gap-3 pl-1 text-slate-600 font-mono text-sm">
                  <span>↓</span>
                  <div className="h-px w-12 bg-white/[0.08]" />
                </div>

                {/* 03. Result (Restrained Emerald Accent) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    <span className="text-emerald-400">03</span>
                    <span className="text-emerald-400/60">—</span>
                    <span>RESULT</span>
                  </div>
                  <p
                    className="text-lg sm:text-2xl lg:text-[26px] text-emerald-300 font-medium tracking-tight leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {current.result}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Editorial Example Selector (NOT tabs, NOT cards) */}
            <div className="mt-10 sm:mt-16 pt-6 border-t border-white/[0.1] flex flex-wrap items-center gap-4 sm:gap-10 text-xs sm:text-sm font-mono tracking-wider">
              {WORKFLOW_EXAMPLES.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`group flex items-center gap-2 py-2 min-h-[44px] transition-colors duration-150 cursor-pointer ${
                      isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <span
                      className={
                        isActive
                          ? "text-blue-400 font-bold"
                          : "text-slate-600 group-hover:text-slate-400"
                      }
                    >
                      {item.num}
                    </span>
                    <span
                      className={`tracking-widest uppercase ${
                        isActive
                          ? "font-semibold border-b-2 border-blue-400 pb-0.5"
                          : "font-normal"
                      }`}
                    >
                      {item.industry}
                    </span>
                  </button>
                );
              })}
            </div>

          </motion.div>

        </div>

        {/* Universal CTA (Positioned naturally beneath the section) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <p
            className="text-base sm:text-lg text-slate-300 font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Autonomous operational workflows configured for your organisation.
          </p>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-[0_2px_16px_rgba(255,255,255,0.12)] group shrink-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
