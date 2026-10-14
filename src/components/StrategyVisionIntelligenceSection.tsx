import React from "react";
import { motion } from "motion/react";

const PILLARS = [
  {
    index: "01",
    word: "Strategy.",
    meaning: "Know what should happen next.",
  },
  {
    index: "02",
    word: "Vision.",
    meaning: "Know where the business is going.",
  },
  {
    index: "03",
    word: "Intelligence.",
    meaning: "Use information and technology to move faster.",
  },
];

export const StrategyVisionIntelligenceSection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative bg-[#08111E] text-[#F9F8F4] py-28 sm:py-40 lg:py-56 border-b border-white/[0.08] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] mb-14 sm:mb-20"
        >
          11 &nbsp;·&nbsp; PHILOSOPHY
        </motion.div>

        {/* Three Monumental Statements */}
        <div className="divide-y divide-white/[0.09] border-t border-b border-white/[0.09]">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline"
            >
              <div className="lg:col-span-7 flex items-baseline gap-6">
                <span className="text-xs font-mono text-[#8FA3B8]">
                  {pillar.index}
                </span>
                <h2 className="text-4xl sm:text-6xl lg:text-[74px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-none">
                  {pillar.word}
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="font-editorial-italic text-lg sm:text-xl lg:text-[22px] text-[#CBD5E1] font-normal tracking-[-0.01em] leading-snug">
                  {pillar.meaning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Identity Line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-20 sm:mt-28 text-center sm:text-left"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F9F8F4] tracking-[-0.025em]">
            This is{" "}
            <span className="text-[0.9em] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.01em]">
              Stratision.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
