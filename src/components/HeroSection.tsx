import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreSystems: () => void;
}

const APPOINTED_MANDATE_FUNCTIONS = [
  {
    index: "01",
    title: "Strategy",
    subtitle: "Commercial direction & growth planning",
  },
  {
    index: "02",
    title: "Marketing & Advertising",
    subtitle: "Positioning, campaigns & paid acquisition",
  },
  {
    index: "03",
    title: "Sales & Acquisition",
    subtitle: "Enquiry capture, follow-up & conversion",
  },
  {
    index: "04",
    title: "Systems & CRM",
    subtitle: "Workflows, automation & infrastructure",
  },
  {
    index: "05",
    title: "Intelligence",
    subtitle: "Reporting, analysis & AI systems",
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreSystems,
}) => {
  return (
    <section
      id="hero"
      className="relative bg-[#08111E] text-[#F9F8F4] overflow-hidden border-b border-white/[0.08]"
    >
      {/* Subtle Architectural Watermark Numeral */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -bottom-12 right-12 font-serif text-[230px] leading-none text-white/[0.025] select-none pointer-events-none"
      >
        01
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 relative z-10 w-full">
        {/* =====================================================================
            01. EDITORIAL SPREAD (Dominant Headline + Appointed Mandate Panel)
        ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-start">
          {/* LEFT: Folio, Commanding Sans + Editorial Serif Italic Headline, Copy, CTAs (7 Cols) */}
          <div className="lg:col-span-7 pt-2">
            {/* Quiet Editorial Folio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-mono font-normal mb-7 sm:mb-9 tracking-[0.22em] text-[#8FA3B8] uppercase select-none"
            >
              01 &nbsp;·&nbsp; THE OPERATING MODEL
            </motion.div>

            {/* Primary Hero Headline: Modern Sans-Serif + Controlled Editorial Serif Italic Accent */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[62px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.12] m-0 p-0"
            >
              Why hire multiple
              <br />
              departments{" "}
              <span
                style={{
                  fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
                className="text-[0.92em] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.015em]"
              >
                when you
                <br />
                can appoint one team?
              </span>
            </motion.h1>

            {/* Supporting Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-9 space-y-4 max-w-xl"
            >
              <p className="text-[16.5px] sm:text-[18px] lg:text-[19px] text-[#E2E8F0] font-normal tracking-[-0.01em] leading-[1.5]">
                Marketing, sales, client acquisition, systems and intelligence — working together under one monthly retainer.
              </p>

              <p className="text-[13.5px] sm:text-[14px] text-[#8FA3B8] font-normal leading-[1.65]">
                Instead of hiring separate people to manage each function, appoint Stratision as the team behind your growth. Built around what your business actually needs.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 sm:mt-11"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                {/* Primary CTA */}
                <button
                  id="hero-start-conversation-btn"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto min-h-[52px] px-8 py-4 rounded-none bg-[#F9F8F4] hover:bg-white text-[#08111E] font-mono font-semibold text-[11px] sm:text-[11.5px] tracking-[0.16em] uppercase transition-colors duration-150 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>APPOINT YOUR TEAM</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 text-[#08111E]" />
                </button>

                {/* Secondary CTA */}
                <button
                  id="hero-explore-systems-btn"
                  onClick={onExploreSystems}
                  className="w-full sm:w-auto min-h-[52px] px-8 py-4 rounded-none bg-transparent hover:bg-white/[0.04] border border-white/[0.16] hover:border-white/[0.32] text-[#F9F8F4] font-mono font-medium text-[11px] sm:text-[11.5px] tracking-[0.16em] uppercase transition-colors duration-150 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>SEE HOW IT WORKS</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#8FA3B8] group-hover:text-[#F9F8F4] transition-transform duration-150 group-hover:translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: 01 · THE APPOINTED MANDATE (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-[#F9F8F4] text-[#08111E] rounded-none p-7 sm:p-9 lg:p-10 border border-[#DDD9CE] relative w-full">
              {/* Mandate Header */}
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#64748B] uppercase mb-2.5">
                01 &nbsp;·&nbsp; THE APPOINTED MANDATE
              </div>

              <h2 className="text-[21px] sm:text-[23px] font-semibold text-[#08111E] tracking-[-0.025em] pb-5 border-b border-[#08111E]/[0.09]">
                Five functions, one team.
              </h2>

              {/* Five Functions List */}
              <div className="divide-y divide-[#08111E]/[0.08] border-b border-[#08111E]/[0.08]">
                {APPOINTED_MANDATE_FUNCTIONS.map((fn) => (
                  <div
                    key={fn.index}
                    className="py-3.5 flex items-center gap-4"
                  >
                    <span className="w-6 h-6 rounded-full border border-[#08111E]/[0.15] flex items-center justify-center font-mono text-[10px] text-[#526071] shrink-0">
                      {fn.index}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-semibold text-[#08111E] tracking-[-0.01em] leading-snug">
                        {fn.title}
                      </div>
                      <div className="text-[12px] text-[#64748B] font-normal leading-snug mt-0.5">
                        {fn.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Mandate Summary Block */}
              <div className="mt-6 bg-[#08111E] text-[#F9F8F4] p-5 sm:p-6 rounded-none">
                <div className="text-[9.5px] font-mono tracking-[0.2em] text-[#8FA3B8] uppercase mb-2">
                  ONE MONTHLY RETAINER
                </div>
                <div className="text-[15px] sm:text-[16px] font-semibold tracking-[-0.015em] text-[#F9F8F4] leading-snug">
                  Stratision takes on what you appoint.
                </div>
                <p className="font-editorial-italic text-[13.5px] text-[#C8D2E0] mt-1.5 leading-relaxed">
                  Strategy first. Vision second. Intelligence third.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================================
            02. PROPOSAL-STYLE BASELINE RULE & ATTRIBUTION
        ===================================================================== */}
        <div className="mt-16 sm:mt-20 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-editorial-italic text-[13px] sm:text-[14px] text-[#8FA3B8] tracking-wide">
            British-founded &nbsp;·&nbsp; Business-first &nbsp;·&nbsp; Technology-enabled
          </p>
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#64748B]">
            UNITED KINGDOM &nbsp;·&nbsp; MIDDLE EAST &nbsp;·&nbsp; UNITED STATES
          </span>
        </div>
      </div>
    </section>
  );
};
