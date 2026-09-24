import React from "react";
import { motion } from "motion/react";

export const StratisionDifferenceSection: React.FC = () => {
  return (
    <section
      id="stratision-difference"
      className="relative py-20 sm:py-48 lg:py-64 bg-white text-[#0A0D14] overflow-hidden flex items-center justify-center text-center border-t border-b border-black/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 space-y-5 sm:space-y-8">
        
        {/* Eyebrow in pure neutral editorial slate */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span>THE STRATISION DIFFERENCE</span>
        </motion.div>

        {/* Big Statement 1 — Pure Black Display Type */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-6xl md:text-8xl lg:text-[104px] xl:text-[116px] font-bold text-[#0A0D14] tracking-[-0.045em] leading-[1.02]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          We don't sell AI.
        </motion.h2>

        {/* Big Statement 2 — Charcoal Muted Display Type */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-5xl md:text-7xl lg:text-[84px] xl:text-[96px] font-bold text-slate-400 tracking-[-0.04em] leading-[1.06] pt-1 sm:pt-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          We build the systems that make it useful.
        </motion.p>

      </div>
    </section>
  );
};
