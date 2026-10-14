import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
  onOpenBriefing?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section
      id="final-cta"
      className="relative py-28 sm:py-40 lg:py-56 bg-[#08111E] text-[#F9F8F4] overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Eyebrow */}
          <div className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8]">
            13 &nbsp;·&nbsp; NEXT STEP
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.1]">
            Ready to appoint{" "}
            <span className="text-[0.95em] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.01em]">
              your team?
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-[16.5px] sm:text-[18px] text-[#CBD5E1] font-normal max-w-xl mx-auto leading-relaxed">
            Tell us what you're trying to achieve, what's currently holding the business back, and where you want to go next.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            {/* Primary CTA */}
            <button
              id="final-cta-appoint-team-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[54px] px-9 py-4 rounded-none bg-[#F9F8F4] hover:bg-white text-[#08111E] font-mono font-semibold text-[11px] sm:text-[11.5px] tracking-[0.16em] uppercase transition-colors duration-150 cursor-pointer inline-flex items-center justify-center gap-3 group"
            >
              <span>APPOINT YOUR TEAM</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 text-[#08111E]" />
            </button>

            {/* Secondary CTA */}
            <button
              id="final-cta-strategy-call-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[54px] px-9 py-4 rounded-none bg-transparent hover:bg-white/[0.04] border border-white/[0.2] hover:border-white/[0.38] text-[#F9F8F4] font-mono font-medium text-[11px] sm:text-[11.5px] tracking-[0.16em] uppercase transition-colors duration-150 cursor-pointer inline-flex items-center justify-center gap-3 group"
            >
              <span>BOOK A STRATEGY CALL</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8FA3B8] group-hover:text-[#F9F8F4] transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Small Regional Line */}
          <div className="pt-6">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#8FA3B8]">
              UK · MIDDLE EAST · USA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
