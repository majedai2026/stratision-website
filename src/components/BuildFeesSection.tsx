import React from "react";
import { motion } from "motion/react";

export const BuildFeesSection: React.FC = () => {
  return (
    <section
      id="build-fees"
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
          09 &nbsp;·&nbsp; COMMERCIAL CLARITY
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.1] max-w-5xl"
        >
          Your team is the retainer.
          <br />
          <span className="text-[0.9em] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.01em]">
            Your systems are built as needed.
          </span>
        </motion.h2>

        {/* Explanation & Visual Equations */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Clear Explanation (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6 text-lg sm:text-xl text-[#C8D2E0] font-normal leading-relaxed"
          >
            <p>
              The monthly retainer covers the ongoing team and functions you appoint Stratision to handle.
            </p>
            <p>
              Bespoke systems, CRM builds, custom automation and larger implementations may carry separate build fees.
            </p>
            <p className="text-[#F9F8F4] font-medium pt-2">
              This keeps the relationship simple.
            </p>
          </motion.div>

          {/* Right: Clean Structural Equation Blocks (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Equation 1: Ongoing Team */}
            <div className="p-7 sm:p-9 bg-white/[0.03] border border-white/[0.1] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8FA3B8] mb-2">
                  ONGOING TEAM
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#F9F8F4] tracking-[-0.025em]">
                  Ongoing Team
                </div>
              </div>

              <div className="text-[#8FA3B8] font-mono text-xl hidden sm:block">=</div>

              <div className="sm:text-right">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8FA3B8] mb-2 sm:hidden">
                  EQUALS
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8FA3B8] mb-2 hidden sm:block">
                  COMMERCIAL MODEL
                </div>
                <div className="font-editorial-italic text-xl sm:text-2xl font-normal text-[#CBD5E1] tracking-[-0.01em]">
                  Monthly Retainer
                </div>
              </div>
            </div>

            {/* Equation 2: Bespoke System */}
            <div className="p-7 sm:p-9 bg-[#F9F8F4] text-[#08111E] border border-[#DDD9CE] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#526071] mb-2">
                  BESPOKE SYSTEM
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#08111E] tracking-[-0.025em]">
                  Bespoke System
                </div>
              </div>

              <div className="text-[#64748B] font-mono text-xl hidden sm:block">=</div>

              <div className="sm:text-right">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#526071] mb-2 sm:hidden">
                  EQUALS
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#526071] mb-2 hidden sm:block">
                  COMMERCIAL MODEL
                </div>
                <div className="font-editorial-italic text-xl sm:text-2xl font-normal text-[#475569] tracking-[-0.01em]">
                  Separate Implementation Fee
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
