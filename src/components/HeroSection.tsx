import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreSystems: () => void;
}

// Six core capabilities. Non-breaking spaces guarantee phrases never leave
// isolated orphan words on any viewport.
const CAPABILITIES = [
  "ANSWER YOUR\u00A0CALLS.",
  "HANDLE YOUR\u00A0MARKETING.",
  "CAPTURE NEW\u00A0LEADS.",
  "SAVE YOUR TEAM\u00A0TIME.",
  "TRAIN YOUR\u00A0STAFF.",
  "UNDERSTAND YOUR\u00A0BUSINESS.",
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreSystems,
}) => {
  const navigate = useNavigate();
  const [capabilityIndex, setCapabilityIndex] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.innerWidth < 768;
    if (mediaQuery.matches || isMobile) return;

    const interval = setInterval(() => {
      setCapabilityIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-[#090B10] text-[#F7F8FA] overflow-hidden border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:pl-6 xl:pr-8 pt-24 sm:pt-26 lg:pt-28 xl:pt-28 pb-14 sm:pb-16 lg:pb-18 xl:pb-20 relative z-10 w-full">
        {/* =====================================================================
            01. EDITORIAL IDENTIFIER (Quiet Publication Folio)
        ===================================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono mb-3 sm:mb-3.5 tracking-[0.15em] text-neutral-400 uppercase select-none"
        >
          <span className="text-neutral-300 font-semibold tracking-[0.16em]">
            STRATISION
          </span>
          <span className="text-white/20">/</span>
          <span className="text-neutral-400 tracking-[0.14em]">
            CUSTOM AI SYSTEMS FOR GROWING UK BUSINESSES
          </span>
        </motion.div>

        {/* =====================================================================
            02. BALANCED EDITORIAL SPREAD (Commanding Headline + Document Proof)
        ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.72fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.78fr)_minmax(0,1fr)] gap-10 lg:gap-11 xl:gap-12 items-center">
          {/* LEFT: Monumental Headline Statement, Human Proposition, CTAs */}
          <div>
            {/* Monumental Headline Stage: Exactly 2 Lines on Desktop */}
            <h1 className="m-0 p-0">
              {/* Static Anchor: Line 1 */}
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[66px] font-extrabold text-[#F7F8FA] tracking-[-0.035em] leading-[1.08] uppercase"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                AI SYSTEMS THAT
              </motion.span>

              {/* Dynamic Capability: Line 2 (Calibrated to Line-Height, Zero Excess Gap) */}
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block relative w-full mt-0.5 sm:mt-1"
              >
                {/*
                  CALIBRATED STAGE:
                  On desktop (lg+), sized to exactly one rendered line (64px/76px) matching
                  the visual height of the rotating text, eliminating artificial dead space
                  above the paragraph while guaranteeing zero layout shift.
                */}
                <span className="relative block h-[74px] sm:h-[90px] md:h-[102px] lg:h-[64px] xl:h-[76px] w-full select-none overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={capabilityIndex}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 right-0 block"
                    >
                      <span
                        className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] xl:text-[66px] font-extrabold text-[#F7F8FA] tracking-[-0.035em] leading-[1.08] uppercase block lg:whitespace-nowrap"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {CAPABILITIES[capabilityIndex]}
                      </span>
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.span>
            </h1>

            {/* Human Proposition — Connected Directly to the Headline */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-4.5 lg:mt-5"
            >
              <p
                className="text-[16px] sm:text-[17.5px] lg:text-[18px] text-neutral-300 font-normal leading-[1.62] max-w-[550px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                We build private, custom AI systems that answer client enquiries in seconds, process complex business documents, and automate repetitive operations — with human oversight built into every step.
              </p>
            </motion.div>

            {/* Restrained Physical Controls (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5.5 sm:mt-6.5 space-y-3"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Primary: Light physical surface */}
                <button
                  id="hero-start-conversation-btn"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-[2px] bg-[#F7F8FA] hover:bg-white text-[#090B10] font-medium text-[14.5px] sm:text-[15px] tracking-tight transition-colors duration-150 flex items-center justify-center gap-2.5 border border-white/90 shadow-sm cursor-pointer group"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 text-[#090B10]" />
                </button>

                {/* Secondary: Quiet dark outline surface */}
                <button
                  id="hero-explore-systems-btn"
                  onClick={onExploreSystems}
                  className="w-full sm:w-auto min-h-[48px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-[2px] bg-transparent hover:bg-white/[0.04] border border-white/[0.22] hover:border-white/[0.32] text-neutral-200 hover:text-white font-medium text-[14.5px] sm:text-[15px] tracking-tight transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer group"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span>Explore AI Systems</span>
                  <span className="text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform duration-150">
                    ↓
                  </span>
                </button>
              </div>

              {/* Reassurance Micro-Copy */}
              <p
                className="text-[12.5px] sm:text-[13px] text-neutral-400 font-normal leading-relaxed max-w-[520px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                A direct 20-minute discussion with an AI Systems Architect. No sales pitch. We’ll tell you frankly whether an AI system makes commercial sense for your business.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Authentic Physical Business Document (Quiet Proof Element) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-start lg:justify-end w-full"
          >
            {/*
              PHYSICAL BUSINESS ARTEFACT:
              Substantial A4-proportioned clinical correspondence document.
              Warm off-white paper stock (#FAF9F5), fine hairline edge (#E5E2D8),
              and realistic diffused paper shadow. Communicates tangible business proof
              with generous internal whitespace and restrained editorial typography.
            */}
            <div className="bg-[#FAF9F5] text-[#141619] rounded-[1px] p-5 sm:p-8 lg:p-8 xl:p-9 shadow-[0_28px_65px_-18px_rgba(0,0,0,0.6),0_8px_24px_rgba(0,0,0,0.22)] border border-[#E5E2D8] relative w-full max-w-lg lg:max-w-[460px] xl:max-w-[480px]">
              {/* Document Folio Header */}
              <div className="flex items-baseline justify-between border-b border-black/[0.07] pb-3.5 mb-5 text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                <span className="font-semibold text-neutral-800">OAKWOOD MEDICAL PRACTICE</span>
                <span>14:12 GMT</span>
              </div>

              {/* Document Body: Clean Editorial Hierarchy */}
              <div className="space-y-4">
                {/* 01. Inbound Patient Request */}
                <div className="space-y-1.5">
                  <div className="text-[9.5px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                    INBOUND PATIENT REQUEST · RECORD #84102
                  </div>
                  <p
                    className="text-[14.5px] sm:text-[15px] text-neutral-900 font-normal leading-[1.5] italic pt-0.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    “Hi, I’d like to book an appointment with Dr Patel this Thursday afternoon.”
                  </p>
                </div>

                {/* 02. Practice Schedule Applied */}
                <div className="pt-3.5 border-t border-black/[0.06] space-y-1.5">
                  <div className="text-[9.5px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                    PRACTICE SCHEDULE APPLIED
                  </div>
                  <div
                    className="text-[13.5px] sm:text-[14px] text-neutral-800 space-y-1 pt-0.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <p className="font-semibold text-neutral-900">
                      Dr S. Patel · Consulting Room 3
                    </p>
                    <p className="text-neutral-600">
                      Thursday, 14:30 GMT · 30-Minute Follow-Up
                    </p>
                  </div>
                </div>

                {/* 03. Completed Work */}
                <div className="pt-3.5 border-t border-black/[0.06] space-y-1.5">
                  <div className="text-[9.5px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                    COMPLETED WORK
                  </div>
                  <ul className="text-[12.5px] sm:text-[13px] text-neutral-700 space-y-1.5 font-mono pt-0.5">
                    <li className="flex items-center gap-2">
                      <span className="text-neutral-400">—</span>
                      <span>Practice diary reserved &amp; locked</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neutral-400">—</span>
                      <span>Confirmation dispatched to patient via SMS</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Document Footnote Verification */}
              <div className="flex items-center justify-between border-t border-black/[0.07] pt-3.5 mt-5 text-[9.5px] font-mono text-neutral-400">
                <span>DISPATCH MEMORANDUM</span>
                <span>REF DIS-84102</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
