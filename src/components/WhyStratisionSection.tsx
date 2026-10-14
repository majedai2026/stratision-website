import React from "react";
import { motion } from "motion/react";

const COMMERCIAL_FOUNDATIONS = [
  { step: "01", label: "The market." },
  { step: "02", label: "The offer." },
  { step: "03", label: "The advertising." },
  { step: "04", label: "The enquiry." },
  { step: "05", label: "The sales conversation." },
  { step: "06", label: "The customer." },
];

export const WhyStratisionSection: React.FC = () => {
  return (
    <section
      id="why-stratision"
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
          10 &nbsp;·&nbsp; WHY STRATISION
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.1] max-w-5xl"
        >
          More than a marketing company.
          <br />
          <span className="text-[0.9em] font-editorial-italic font-normal text-[#475569] tracking-[-0.01em]">
            More than an AI agency.
          </span>
        </motion.h2>

        {/* Editorial Spread */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Narrative Statement (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-xl sm:text-2xl font-medium text-[#08111E] tracking-tight leading-snug">
              We understand what happens before the technology.
            </p>
            <p className="text-lg sm:text-xl text-[#475569] font-normal leading-relaxed">
              Then we build the systems around it.
            </p>
          </motion.div>

          {/* Right: The 6 Real-World Commercial Foundations (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMMERCIAL_FOUNDATIONS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 bg-white border border-[#08111E]/[0.09] rounded-[2px] flex items-baseline gap-4"
              >
                <span className="text-xs font-mono text-[#64748B] font-medium">
                  {item.step}
                </span>
                <span className="text-lg sm:text-xl font-bold text-[#08111E] tracking-[-0.02em]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-Width Editorial Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 sm:mt-20 overflow-hidden rounded-[2px] border border-[#08111E]/[0.09] bg-[#08111E]"
        >
          <img
            src="/src/assets/images/why_stratision_editorial_1790786999876.jpg"
            alt="Executive boardroom in London overlooking city architecture"
            referrerPolicy="no-referrer"
            className="w-full h-[300px] sm:h-[440px] lg:h-[520px] object-cover"
          />
        </motion.div>

        {/* Key Statement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 sm:mt-20 pt-10 border-t border-[#08111E]/[0.09]"
        >
          <p className="text-2xl sm:text-4xl lg:text-[42px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.14]">
            Technology should support the business.
            <br />
            <span className="text-[0.92em] font-editorial-italic font-normal text-[#475569] tracking-[-0.01em]">
              Not the other way around.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
