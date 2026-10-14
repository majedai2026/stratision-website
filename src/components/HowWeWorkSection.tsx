import React from "react";
import { motion } from "motion/react";

interface HowWeWorkSectionProps {
  onOpenBooking?: () => void;
}

const DIAGNOSTIC_QUESTIONS = [
  "Where are enquiries coming from?",
  "What happens when someone enquires?",
  "Where is time being wasted?",
  "Where are opportunities being lost?",
];

const WORK_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "We look at how your business currently generates, handles and converts work.",
  },
  {
    number: "02",
    title: "Prioritise",
    description: "We identify what needs attention first.",
  },
  {
    number: "03",
    title: "Build",
    description: "We implement the marketing, sales or operational systems needed.",
  },
  {
    number: "04",
    title: "Prove",
    description: "We make sure it works in the real world.",
  },
  {
    number: "05",
    title: "Expand",
    description: "Once proven, we build the next layer.",
  },
];

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = () => {
  return (
    <section
      id="how-we-work"
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
          06 &nbsp;·&nbsp; APPROACH
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.1] max-w-4xl"
        >
          Problem first.{" "}
          <span className="text-[0.9em] font-editorial-italic font-normal text-[#475569] tracking-[-0.01em]">
            Technology second.
          </span>
        </motion.h2>

        {/* Intro Narrative & Diagnostic Questions */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <p className="text-xl sm:text-2xl font-medium text-[#08111E] tracking-tight leading-snug">
              Most agencies start with tools.
            </p>
            <p className="text-xl sm:text-2xl font-normal text-[#475569] tracking-tight leading-snug">
              We start with your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {DIAGNOSTIC_QUESTIONS.map((question, idx) => (
              <div
                key={question}
                className="p-6 bg-white border border-[#08111E]/[0.09] rounded-[2px]"
              >
                <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-[0.16em] mb-2">
                  DIAGNOSTIC 0{idx + 1}
                </div>
                <p className="text-base sm:text-lg font-medium text-[#08111E] leading-snug">
                  {question}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 5-Stage Process */}
        <div className="mt-16 sm:mt-24">
          <div className="text-[11px] font-mono font-medium uppercase tracking-[0.18em] text-[#526071] mb-6">
            THE OPERATING SEQUENCE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
            {WORK_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-white border border-[#08111E]/[0.09] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-medium text-[#64748B] mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#08111E] tracking-[-0.02em] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-[#08111E]/[0.09]"
        >
          <p className="text-2xl sm:text-4xl lg:text-[42px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.14]">
            Your business doesn't need more software.
            <br />
            <span className="text-[0.92em] font-editorial-italic font-normal text-[#475569] tracking-[-0.01em]">
              It needs better systems.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
