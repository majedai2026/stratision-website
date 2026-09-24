import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface AssessmentBridgeSectionProps {
  onOpenBooking?: () => void;
}

export const AssessmentBridgeSection: React.FC<AssessmentBridgeSectionProps> = () => {
  const navigate = useNavigate();

  return (
    <section
      id="assessment"
      className="relative py-20 sm:py-48 lg:py-60 bg-[#F8F9FA] text-[#0A0D14] border-t border-b border-black/[0.06] scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span>BUSINESS INTELLIGENCE ASSESSMENT™</span>
        </motion.div>

        {/* Large Typography — Light Editorial Mode */}
        <div className="space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-6xl lg:text-[88px] font-bold text-[#0A0D14] tracking-[-0.04em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Don't know where AI fits?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-5xl lg:text-[76px] font-bold text-slate-400 tracking-[-0.035em] leading-[1.06]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Start with the business.
          </motion.p>
        </div>

        {/* Minimal Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal pt-1 sm:pt-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          A strategic assessment that identifies where AI can create meaningful value — and what should happen next.
        </motion.p>

        {/* One Clean CTA with Generous Space */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="pt-2 sm:pt-4"
        >
          <button
            onClick={() => {
              navigate("/assessment");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-3 px-8 py-4 rounded-full bg-[#0A0D14] text-white hover:bg-slate-800 transition-all font-semibold text-sm sm:text-base cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.12)] group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Explore the Assessment</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
