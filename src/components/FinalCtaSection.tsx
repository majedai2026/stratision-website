import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
  onOpenBlueprint?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="final-cta"
      className="relative py-20 sm:py-48 lg:py-60 bg-[#06080F] border-t border-white/[0.08] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-10">
        
        {/* Large Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-6xl lg:text-[88px] font-bold text-white tracking-[-0.04em] leading-[1.04]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          What could AI do inside your business?
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-5xl lg:text-[76px] text-blue-300 font-bold tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Let's find out.
        </motion.p>

        {/* Primary Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pt-4 sm:pt-6"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-base sm:text-lg transition-all cursor-pointer shadow-[0_4px_32px_rgba(255,255,255,0.18)] hover:shadow-[0_6px_40px_rgba(255,255,255,0.28)] group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 text-[#080A10]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
