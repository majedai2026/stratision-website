import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const PROBLEM_SEQUENCE = [
  {
    problem: "Not enough opportunities",
    response: "We work on acquisition.",
  },
  {
    problem: "Too many enquiries going cold",
    response: "We improve capture and follow-up.",
  },
  {
    problem: "Your sales process isn't consistent",
    response: "We improve the process.",
  },
  {
    problem: "Your team is drowning in admin",
    response: "We build workflows.",
  },
  {
    problem: "Your business has outgrown spreadsheets",
    response: "We build the infrastructure.",
  },
  {
    problem: "You need better visibility",
    response: "We build the intelligence layer.",
  },
];

export const StartWithOneProblemSection: React.FC = () => {
  return (
    <section
      id="start-with-one-problem"
      className="relative bg-[#08111E] text-[#F9F8F4] py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] mb-7"
        >
          05 &nbsp;·&nbsp; PRAGMATIC ENTRY
        </motion.div>

        {/* Headline & Subheading */}
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.1]"
          >
            Start with{" "}
            <span className="text-[0.9em] font-serif italic font-normal text-[#CBD5E1] tracking-[-0.01em]">
              one problem.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 sm:mt-6 space-y-2 text-lg sm:text-xl lg:text-[22px] text-[#C8D2E0] font-normal leading-relaxed"
          >
            <p>You don't need to hand us your entire business.</p>
            <p className="text-[#F9F8F4] font-medium">
              Start with the problem costing you the most.
            </p>
          </motion.div>
        </div>

        {/* Clean Sequence */}
        <div className="mt-14 sm:mt-20">
          {PROBLEM_SEQUENCE.map((item, idx) => (
            <React.Fragment key={item.problem}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-6 sm:py-7 px-6 sm:px-8 bg-white/[0.02] border border-white/[0.09] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-8"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs font-mono text-[#8FA3B8] font-medium">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#F9F8F4] tracking-[-0.02em]">
                    {item.problem}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-[#C8D2E0] font-normal pl-7 sm:pl-0 sm:text-right shrink-0">
                  {item.response}
                </p>
              </motion.div>

              {idx < PROBLEM_SEQUENCE.length - 1 && (
                <div className="py-2.5 flex justify-center text-[#8FA3B8]/50" aria-hidden="true">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Closing Principles */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.09] grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-lg sm:text-xl font-semibold text-[#F9F8F4] tracking-[-0.02em]">
            One problem at a time.
          </div>
          <div className="text-lg sm:text-xl font-semibold text-[#C8D2E0] tracking-[-0.02em]">
            One system at a time.
          </div>
          <div className="text-lg sm:text-xl font-normal text-[#CBD5E1] tracking-[-0.01em]">
            Built around what we have{" "}
            <span className="font-serif italic text-[#F9F8F4]">
              already proven works.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
