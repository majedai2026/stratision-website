import React from "react";
import { motion } from "motion/react";

const TRADITIONAL_OPTIONS = [
  {
    index: "01",
    title: "Traditional marketing company",
    positiveLabel: "Covers:",
    positives: ["Marketing", "Advertising", "Campaign management"],
    negativeLabel: "Usually does not cover:",
    negatives: [
      "Sales infrastructure",
      "CRM",
      "Operational systems",
      "AI implementation",
      "Ongoing business workflows",
    ],
  },
  {
    index: "02",
    title: "Traditional AI agency",
    positiveLabel: "Covers:",
    positives: ["AI tools", "Automation", "Integrations", "Bespoke technology"],
    negativeLabel: "Usually does not cover:",
    negatives: [
      "Marketing strategy",
      "Advertising",
      "Sales",
      "Client acquisition",
      "Commercial strategy",
    ],
  },
  {
    index: "03",
    title: "Building it internally",
    positiveLabel: "Covers:",
    positives: ["Dedicated employees", "Internal knowledge", "Direct control"],
    negativeLabel: "But requires:",
    negatives: [
      "Recruitment",
      "Salaries",
      "Training",
      "Management",
      "Multiple specialists",
      "Multiple points of failure",
    ],
  },
];

const STRATISION_COVERS = [
  "Strategy",
  "Marketing",
  "Advertising",
  "Client acquisition",
  "Sales",
  "Lead generation",
  "CRM",
  "AI systems",
  "Automation",
  "Intelligence",
  "Continuous improvement",
  "One appointed team",
];

export const ComparisonSection: React.FC = () => {
  return (
    <section
      id="comparison"
      className="relative bg-[#08111E] text-[#F9F8F4] py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] mb-7"
        >
          03 &nbsp;·&nbsp; THE COMPARISON
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.1] max-w-3xl"
        >
          What are you{" "}
          <span className="text-[0.9em] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.01em]">
            actually hiring?
          </span>
        </motion.h2>

        {/* 4-Column Comparison Grid (Stacked on Mobile) */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {/* Columns 1–3: Traditional Approaches */}
          {TRADITIONAL_OPTIONS.map((option, idx) => (
            <motion.div
              key={option.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="bg-white/[0.02] border border-white/[0.09] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-[#8FA3B8] uppercase tracking-[0.16em] mb-3">
                  {option.index}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#F9F8F4] tracking-[-0.02em] leading-snug min-h-[3.25rem]">
                  {option.title}
                </h3>

                {/* Positives */}
                <div className="mt-6 pt-5 border-t border-white/[0.09]">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#8FA3B8] mb-3">
                    {option.positiveLabel}
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#E2E8F0]">
                    {option.positives.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="font-mono text-[#C8D2E0] shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Negatives */}
                <div className="mt-6 pt-5 border-t border-white/[0.09]">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B] mb-3">
                    {option.negativeLabel}
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#8FA3B8]">
                    {option.negatives.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="font-mono text-[#64748B] shrink-0">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Column 4: STRATISION — Visually Distinct Warm Ivory Surface */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F9F8F4] text-[#08111E] border border-[#DDD9CE] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#526071] uppercase tracking-[0.16em] mb-3">
                <span>04</span>
                <span className="text-[#08111E] font-semibold">THE APPOINTED MODEL</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#08111E] tracking-[-0.025em] leading-snug min-h-[3.25rem]">
                Stratision
              </h3>

              <div className="mt-6 pt-5 border-t border-[#08111E]/[0.1]">
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#526071] mb-3">
                  Unified coverage:
                </div>
                <ul className="space-y-2.5 text-sm font-medium text-[#08111E]">
                  {STRATISION_COVERS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="font-mono text-[#08111E] font-semibold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.09] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F9F8F4] tracking-[-0.025em] leading-tight">
            One team. Multiple functions.{" "}
            <span className="text-[0.9em] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.01em]">
              One retainer.
            </span>
          </div>
          <p className="text-sm text-[#8FA3B8] font-normal">
            Instead of building multiple departments internally, appoint one team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
