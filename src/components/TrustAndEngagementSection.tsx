import React from "react";
import { motion } from "motion/react";

interface TrustAndEngagementSectionProps {
  onOpenBooking?: () => void;
  onOpenBriefing?: () => void;
}

interface GovernancePrinciple {
  num: string;
  title: string;
  copy: string;
}

const PRINCIPLES: GovernancePrinciple[] = [
  {
    num: "01",
    title: "PRIVATE",
    copy: "Your data stays yours.",
  },
  {
    num: "02",
    title: "CONTROLLED",
    copy: "You decide what AI can do.",
  },
  {
    num: "03",
    title: "REVIEWED",
    copy: "People approve important decisions.",
  },
  {
    num: "04",
    title: "ACCOUNTABLE",
    copy: "You can see what happened.",
  },
];

export const TrustAndEngagementSection: React.FC<TrustAndEngagementSectionProps> = () => {
  return (
    <section
      id="trust-engagement"
      className="relative py-20 sm:py-36 lg:py-52 bg-[#06080F] border-t border-white/[0.06] text-slate-100 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-12 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>GOVERNANCE & OVERSIGHT</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-[72px] font-bold text-white tracking-[-0.035em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            BUILT RESPONSIBLY.
          </h2>

          <p
            className="text-lg sm:text-2xl lg:text-3xl text-slate-300 font-normal mt-4 sm:mt-6 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            AI handles the work.
            <br />
            Your people stay in control.
          </p>
        </motion.div>

        {/* Four Large Editorial Principles with subtle horizontal dividers */}
        <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
          {PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={principle.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="py-6 sm:py-12 lg:py-16 flex flex-col md:flex-row md:items-baseline justify-between gap-2.5 sm:gap-3 md:gap-12 group cursor-default"
            >
              {/* Number and Principle Title */}
              <div className="flex items-baseline gap-3 sm:gap-6">
                <span className="text-xs sm:text-base font-mono text-blue-400 font-semibold tracking-widest">
                  {principle.num}
                </span>
                <span className="text-slate-600 font-mono text-xs sm:text-base">
                  —
                </span>
                <h3
                  className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white group-hover:text-blue-200 transition-colors tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {principle.title}
                </h3>
              </div>

              {/* Short Supporting Copy */}
              <p
                className="text-base sm:text-xl lg:text-2xl text-slate-300 font-normal leading-relaxed pl-7 sm:pl-12 md:pl-0 md:text-right"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {principle.copy}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
