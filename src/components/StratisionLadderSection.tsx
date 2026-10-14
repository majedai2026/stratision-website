import React, { useState } from "react";
import { motion } from "motion/react";

interface LadderStep {
  step: string;
  name: string;
  summary: string;
  examples: string[];
}

const LADDER_STEPS: LadderStep[] = [
  {
    step: "STEP 01",
    name: "Generate",
    summary: "Create more opportunities for the business.",
    examples: [
      "Paid advertising",
      "Marketing",
      "Campaigns",
      "Acquisition strategy",
      "Lead generation",
    ],
  },
  {
    step: "STEP 02",
    name: "Capture",
    summary: "Make sure opportunities are captured properly.",
    examples: [
      "Enquiry capture",
      "Lead routing",
      "Forms",
      "Follow-up infrastructure",
    ],
  },
  {
    step: "STEP 03",
    name: "Convert",
    summary: "Improve how opportunities become conversations and customers.",
    examples: [
      "Sales processes",
      "Follow-up",
      "Qualification",
      "Conversion optimisation",
    ],
  },
  {
    step: "STEP 04",
    name: "Systemise",
    summary: "Build systems around what is already working.",
    examples: [
      "CRM",
      "Automation",
      "Workflows",
      "Internal processes",
      "AI-assisted operations",
    ],
  },
  {
    step: "STEP 05",
    name: "Intelligence",
    summary: "Use data, AI and technology to continuously improve the business.",
    examples: [
      "Reporting",
      "Analytics",
      "AI systems",
      "Business intelligence",
      "Optimisation",
    ],
  },
];

export const StratisionLadderSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="the-ladder"
      className="relative bg-[#F9F8F4] text-[#08111E] py-20 sm:py-32 lg:py-44 border-b border-[#08111E]/[0.08] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#526071] mb-7"
        >
          04 &nbsp;·&nbsp; THE STRATISION LADDER
        </motion.div>

        {/* Headline & Subheading */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.08]"
          >
            We don't build everything on day one.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl lg:text-[26px] text-[#475569] font-normal tracking-tight mt-3 sm:mt-4"
          >
            We build{" "}
            <span className="font-editorial-italic text-[#08111E]">
              what your business needs next.
            </span>
          </motion.p>
        </div>

        {/* Desktop Interactive Stepped Progression Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mt-14 mb-8">
          {LADDER_STEPS.map((item, idx) => {
            const isActive = idx === activeIndex;
            const isCompletedOrActive = idx <= activeIndex;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-5 rounded-[2px] border transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#08111E] text-[#F9F8F4] border-[#08111E]"
                    : isCompletedOrActive
                    ? "bg-white text-[#08111E] border-[#08111E]/20 hover:border-[#08111E]/40"
                    : "bg-white/50 text-[#64748B] border-[#08111E]/10 hover:border-[#08111E]/25 hover:text-[#08111E]"
                }`}
              >
                <div
                  className={`text-[10px] font-mono uppercase tracking-[0.16em] ${
                    isActive ? "text-[#8FA3B8]" : "text-[#64748B]"
                  }`}
                >
                  {item.step}
                </div>
                <div className="text-lg font-bold tracking-[-0.02em] mt-1.5">
                  {item.name}
                </div>
                <div className="mt-4 w-full h-px bg-[#08111E]/10 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#F9F8F4]"
                        : isCompletedOrActive
                        ? "w-full bg-[#08111E]"
                        : "w-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Complete 5-Step Architectural Progression */}
        <div className="mt-12 lg:mt-6 divide-y divide-[#08111E]/[0.09] border-t border-b border-[#08111E]/[0.09]">
          {LADDER_STEPS.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={() => setActiveIndex(idx)}
                className={`py-8 sm:py-10 lg:py-11 px-4 sm:px-6 transition-colors duration-200 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start ${
                  isSelected ? "bg-white" : "hover:bg-white/60"
                }`}
              >
                {/* Step Number & Title (4 Cols) */}
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="text-xs font-mono font-medium uppercase tracking-[0.16em] text-[#64748B]">
                    {item.step}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#08111E] tracking-[-0.025em]">
                    {item.name}
                  </h3>
                </div>

                {/* Summary (4 Cols) */}
                <div className="lg:col-span-4">
                  <p className="text-base sm:text-lg text-[#08111E] font-medium leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Examples (4 Cols) */}
                <div className="lg:col-span-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748B] mb-2.5">
                    EXAMPLES
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 text-sm text-[#475569]">
                    {item.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2.5">
                        <span className="text-[#8FA3B8] font-mono">—</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 sm:mt-20 bg-[#08111E] text-[#F9F8F4] p-8 sm:p-12 lg:p-14 rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6">
            <p className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#F9F8F4] tracking-[-0.025em] leading-snug">
              We don't sell you a system and{" "}
              <span className="text-[0.9em] font-editorial-italic font-normal text-[#CBD5E1] tracking-[-0.01em]">
                leave you to figure it out.
              </span>
            </p>
          </div>
          <div className="lg:col-span-6 lg:border-l lg:border-white/[0.12] lg:pl-10 space-y-2.5">
            <p className="text-lg sm:text-xl font-medium text-[#F9F8F4] tracking-tight">
              We solve the next problem.
            </p>
            <p className="text-lg sm:text-xl font-medium text-[#C8D2E0] tracking-tight">
              We prove it works.
            </p>
            <p className="text-lg sm:text-xl font-medium text-[#8FA3B8] tracking-tight">
              Then we build from there.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
