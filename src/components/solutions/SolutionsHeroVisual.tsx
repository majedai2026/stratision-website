import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";

export const SolutionsHeroVisual: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Dedicated spatial transformation stage driven by scroll position
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // =========================================================================
  // STRICTLY SEQUENTIAL SCROLL TIMELINE (ENTER → HOLD → EXIT → EMPTY GAP)
  //
  // 0.000 -> 0.120: SCENE 01 — THE REQUEST
  // 0.120 -> 0.140: EMPTY GAP 1 (QUIET STAGE)
  // 0.140 -> 0.280: SCENE 02 — UNDERSTAND
  // 0.280 -> 0.300: EMPTY GAP 2 (QUIET STAGE)
  // 0.300 -> 0.440: SCENE 03 — KNOW THE BUSINESS
  // 0.440 -> 0.460: EMPTY GAP 3 (QUIET STAGE)
  // 0.460 -> 0.600: SCENE 04 — TAKE ACTION
  // 0.600 -> 0.620: EMPTY GAP 4 (QUIET STAGE)
  // 0.620 -> 0.760: SCENE 05 — YOUR TEAM (HUMAN HANDOVER)
  // 0.760 -> 0.790: EMPTY GAP 5 (QUIET PAUSE)
  // 0.790 -> 0.910: THE BIG IDEA (THIS IS WHAT WE BUILD → SYSTEMS THAT GET BUSINESS WORK DONE)
  // 0.910 -> 0.930: EMPTY GAP 6 (RESTRAINED TRANSITION)
  // 0.930 -> 1.000: THE BRIDGE INTO SOLUTIONS (ONE PRINCIPLE. MANY KINDS OF WORK.)
  //
  // CRITICAL RULE: Zero crossfade between narrative headlines or artefacts.
  // Outgoing scene hits opacity: 0 and visibility: hidden BEFORE incoming enters.
  // =========================================================================

  // SCENE 01: THE REQUEST (0.000 -> 0.120)
  const s1Opacity = useTransform(scrollYProgress, [0.000, 0.090, 0.120], [1.0, 1.0, 0.0]);
  const s1Y = useTransform(scrollYProgress, [0.000, 0.090, 0.120], [0, 0, -16]);
  const s1Scale = useTransform(scrollYProgress, [0.000, 0.090, 0.120], [1.0, 1.0, 0.98]);
  const s1Visibility = useTransform(scrollYProgress, (p) => (p <= 0.120 ? "visible" : "hidden"));
  const s1Pointer = useTransform(scrollYProgress, (p) => (p <= 0.120 ? "auto" : "none"));
  const s1ZIndex = useTransform(scrollYProgress, (p) => (p <= 0.120 ? 20 : 0));

  // SCENE 02: UNDERSTAND (0.140 -> 0.280)
  const s2Opacity = useTransform(scrollYProgress, [0.140, 0.170, 0.250, 0.280], [0.0, 1.0, 1.0, 0.0]);
  const s2Y = useTransform(scrollYProgress, [0.140, 0.170, 0.250, 0.280], [16, 0, 0, -16]);
  const s2Scale = useTransform(scrollYProgress, [0.140, 0.170, 0.250, 0.280], [0.98, 1.0, 1.0, 0.98]);
  const s2Visibility = useTransform(scrollYProgress, (p) => (p >= 0.140 && p <= 0.280 ? "visible" : "hidden"));
  const s2Pointer = useTransform(scrollYProgress, (p) => (p >= 0.140 && p <= 0.280 ? "auto" : "none"));
  const s2ZIndex = useTransform(scrollYProgress, (p) => (p >= 0.140 && p <= 0.280 ? 20 : 0));

  // SCENE 03: KNOW THE BUSINESS (0.300 -> 0.440)
  const s3Opacity = useTransform(scrollYProgress, [0.300, 0.330, 0.410, 0.440], [0.0, 1.0, 1.0, 0.0]);
  const s3Y = useTransform(scrollYProgress, [0.300, 0.330, 0.410, 0.440], [16, 0, 0, -16]);
  const s3Scale = useTransform(scrollYProgress, [0.300, 0.330, 0.410, 0.440], [0.98, 1.0, 1.0, 0.98]);
  const s3Visibility = useTransform(scrollYProgress, (p) => (p >= 0.300 && p <= 0.440 ? "visible" : "hidden"));
  const s3Pointer = useTransform(scrollYProgress, (p) => (p >= 0.300 && p <= 0.440 ? "auto" : "none"));
  const s3ZIndex = useTransform(scrollYProgress, (p) => (p >= 0.300 && p <= 0.440 ? 20 : 0));

  // SCENE 04: TAKE ACTION (0.460 -> 0.600)
  const s4Opacity = useTransform(scrollYProgress, [0.460, 0.490, 0.570, 0.600], [0.0, 1.0, 1.0, 0.0]);
  const s4Y = useTransform(scrollYProgress, [0.460, 0.490, 0.570, 0.600], [16, 0, 0, -16]);
  const s4Scale = useTransform(scrollYProgress, [0.460, 0.490, 0.570, 0.600], [0.98, 1.0, 1.0, 0.98]);
  const s4Visibility = useTransform(scrollYProgress, (p) => (p >= 0.460 && p <= 0.600 ? "visible" : "hidden"));
  const s4Pointer = useTransform(scrollYProgress, (p) => (p >= 0.460 && p <= 0.600 ? "auto" : "none"));
  const s4ZIndex = useTransform(scrollYProgress, (p) => (p >= 0.460 && p <= 0.600 ? 20 : 0));

  // SCENE 05: YOUR TEAM (0.620 -> 0.760)
  const s5Opacity = useTransform(scrollYProgress, [0.620, 0.650, 0.730, 0.760], [0.0, 1.0, 1.0, 0.0]);
  const s5Y = useTransform(scrollYProgress, [0.620, 0.650, 0.730, 0.760], [16, 0, 0, -16]);
  const s5Scale = useTransform(scrollYProgress, [0.620, 0.650, 0.730, 0.760], [0.98, 1.0, 1.0, 0.98]);
  const s5Visibility = useTransform(scrollYProgress, (p) => (p >= 0.620 && p <= 0.760 ? "visible" : "hidden"));
  const s5Pointer = useTransform(scrollYProgress, (p) => (p >= 0.620 && p <= 0.760 ? "auto" : "none"));
  const s5ZIndex = useTransform(scrollYProgress, (p) => (p >= 0.620 && p <= 0.760 ? 20 : 0));

  // =========================================================================
  // THE NEW CINEMATIC ENDING SEQUENCE
  //
  // 0.760 -> 0.785: EMPTY CANVAS 1 (Quiet Pause after Scene 05)
  // 0.785 -> 0.812: "THIS IS WHAT WE BUILD." enters & holds alone
  // 0.812 -> 0.865: "SYSTEMS THAT GET BUSINESS WORK DONE." enters, holds strongly
  // 0.865 -> 0.885: Climax exits cleanly (fades out & translates up)
  // 0.885 -> 0.908: EMPTY CANVAS 2 (Generous Visual Pause)
  // 0.908 -> 1.000: SOLUTION ARCHITECTURE & PROGRESSIVE SIX DOMAINS INDEX
  // =========================================================================

  // CONCEPTUAL CONCLUSION (0.785 -> 0.885)
  const conclusionContainerOpacity = useTransform(scrollYProgress, [0.785, 0.800, 0.865, 0.885], [0.0, 1.0, 1.0, 0.0]);
  const conclusionContainerY = useTransform(scrollYProgress, [0.865, 0.885], [0, -18]);
  const conclusionContainerScale = useTransform(scrollYProgress, [0.865, 0.885], [1.0, 0.98]);
  const conclusionVisibility = useTransform(scrollYProgress, (p) => (p >= 0.785 && p <= 0.885 ? "visible" : "hidden"));
  const conclusionPointer = useTransform(scrollYProgress, (p) => (p >= 0.785 && p <= 0.885 ? "auto" : "none"));
  const conclusionZIndex = useTransform(scrollYProgress, (p) => (p >= 0.785 && p <= 0.885 ? 20 : 0));

  // Step 1: "THIS IS WHAT WE BUILD." enters first and holds
  const buildOpacity = useTransform(scrollYProgress, [0.785, 0.800], [0.0, 1.0]);
  const buildY = useTransform(scrollYProgress, [0.785, 0.800], [14, 0]);

  // Step 2: "SYSTEMS THAT GET BUSINESS WORK DONE." enters with supporting line
  const systemsOpacity = useTransform(scrollYProgress, [0.812, 0.828], [0.0, 1.0]);
  const systemsY = useTransform(scrollYProgress, [0.812, 0.828], [18, 0]);
  const systemsSubOpacity = useTransform(scrollYProgress, [0.820, 0.835], [0.0, 1.0]);
  const systemsSubY = useTransform(scrollYProgress, [0.820, 0.835], [12, 0]);

  // SOLUTION ARCHITECTURE & SIX DOMAINS INDEX (0.908 -> 1.000)
  const archVisibility = useTransform(scrollYProgress, (p) => (p >= 0.908 ? "visible" : "hidden"));
  const archPointer = useTransform(scrollYProgress, (p) => (p >= 0.908 ? "auto" : "none"));
  const archZIndex = useTransform(scrollYProgress, (p) => (p >= 0.908 ? 20 : 0));

  // Title: ONE PRINCIPLE. MANY KINDS OF WORK.
  const archHeaderOpacity = useTransform(scrollYProgress, [0.908, 0.924], [0.0, 1.0]);
  const archHeaderY = useTransform(scrollYProgress, [0.908, 0.924], [18, 0]);

  // Progressive reveal of the 6 domain editorial rows
  // 01 REVENUE & SALES
  const d1Opacity = useTransform(scrollYProgress, [0.922, 0.932], [0.0, 1.0]);
  const d1Y = useTransform(scrollYProgress, [0.922, 0.932], [10, 0]);

  // 02 MARKETING & GROWTH
  const d2Opacity = useTransform(scrollYProgress, [0.932, 0.942], [0.0, 1.0]);
  const d2Y = useTransform(scrollYProgress, [0.932, 0.942], [10, 0]);

  // 03 OPERATIONS & AUTOMATION
  const d3Opacity = useTransform(scrollYProgress, [0.942, 0.952], [0.0, 1.0]);
  const d3Y = useTransform(scrollYProgress, [0.942, 0.952], [10, 0]);

  // 04 STAFF TRAINING
  const d4Opacity = useTransform(scrollYProgress, [0.952, 0.962], [0.0, 1.0]);
  const d4Y = useTransform(scrollYProgress, [0.952, 0.962], [10, 0]);

  // 05 CUSTOMER OPERATIONS
  const d5Opacity = useTransform(scrollYProgress, [0.962, 0.972], [0.0, 1.0]);
  const d5Y = useTransform(scrollYProgress, [0.962, 0.972], [10, 0]);

  // 06 DECISION INTELLIGENCE
  const d6Opacity = useTransform(scrollYProgress, [0.972, 0.982], [0.0, 1.0]);
  const d6Y = useTransform(scrollYProgress, [0.972, 0.982], [10, 0]);

  return (
    <div className="w-full relative">
      {/* =========================================================================
          SECTION INTRO: 01 / FROM REQUEST TO RESULT
          Generous, restrained editorial layout.
      ========================================================================= */}
      <div className="max-w-4xl pt-4 pb-12 sm:pb-16 lg:pb-20">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-slate-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span>01 / FROM REQUEST TO RESULT</span>
        </div>

        <h2
          className="text-3xl sm:text-5xl lg:text-[68px] font-bold text-white tracking-[-0.035em] leading-[1.04] uppercase"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          WORK ENTERS YOUR BUSINESS EVERY DAY.
          <br className="hidden sm:inline" />
          {" "}THEN SOMEONE HAS TO DEAL WITH IT.
        </h2>

        <div
          className="text-base sm:text-xl lg:text-2xl text-slate-400 mt-6 tracking-tight font-normal max-w-3xl leading-relaxed space-y-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <p className="text-slate-300">
            A customer asks a question.
            <br />
            A document needs checking.
            <br />
            An appointment needs arranging.
            <br />
            A member of staff needs an answer.
          </p>
          <p className="text-slate-400 pt-1">
            Stratision builds systems that handle what happens next.
          </p>
        </div>
      </div>

      {/* =========================================================================
          CINEMATIC STAGE (Mobile & Desktop Unified)
          Deep scroll track (~840vh) driving camera-like sticky viewport.
          Guaranteed navbar safe-zone (top-20 sm:top-24 lg:top-28).
          Strictly one scene on stage at a time with empty gaps between scenes.
      ========================================================================= */}
      <div ref={trackRef} className="relative w-full h-[840vh]">
        
        {/* Pinned Viewport Frame with Guaranteed Navbar Clearance */}
        <div className="sticky top-20 sm:top-24 lg:top-28 h-[calc(100vh-5.5rem)] sm:h-[calc(100vh-7rem)] lg:h-[calc(100vh-8.5rem)] min-h-[520px] max-h-[820px] w-full flex items-center justify-center overflow-hidden select-none px-2 sm:px-6">

          {/* -------------------------------------------------------------------
              SCENE 01: THE REQUEST
              Eyebrow: 01 / THE REQUEST
              Headline: IT STARTS WITH A REQUEST.
          ------------------------------------------------------------------- */}
          <motion.div
            style={{
              opacity: s1Opacity,
              y: s1Y,
              scale: s1Scale,
              visibility: s1Visibility,
              pointerEvents: s1Pointer,
              zIndex: s1ZIndex,
            }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              {/* Scene Eyebrow & Large Clear Headline */}
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  01 / THE REQUEST
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  IT STARTS WITH A REQUEST.
                </h3>
              </div>

              {/* Physical Communication Artefact */}
              <div className="bg-[#F5F4EF] text-[#141619] p-5 sm:p-8 lg:p-9 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_12px_24px_-6px_rgba(0,0,0,0.3)] border border-black/[0.08] rotate-[-0.5deg]">
                {/* Header folio */}
                <div className="flex items-center justify-between border-b border-black/[0.1] pb-2.5 mb-3.5 sm:pb-3 sm:mb-5 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>CLINIC INTAKE DESK</span>
                  <span className="hidden sm:inline">MARCUS VANCE · PATIENT #84102</span>
                  <span>14:12 GMT</span>
                </div>

                {/* Primary Request Statement */}
                <div className="space-y-1.5 sm:space-y-2 my-1">
                  <div className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    Customer Message
                  </div>
                  <blockquote
                    className="text-base sm:text-xl lg:text-2xl text-neutral-900 font-normal leading-snug tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    “Hi, I’d like to see Dr Patel this Thursday afternoon. I’m an existing patient.”
                  </blockquote>
                </div>

                {/* Footer detail */}
                <div className="flex items-center justify-between border-t border-black/[0.08] pt-2.5 mt-3.5 sm:pt-3.5 sm:mt-5 text-[9px] sm:text-[9.5px] font-mono text-neutral-500">
                  <span>COMMUNICATION: PATIENT PORTAL</span>
                  <span>STATUS: RECEIVED</span>
                </div>
              </div>

              {/* Small Supporting Line */}
              <p className="text-xs sm:text-sm text-slate-400 text-center font-normal pt-1 tracking-wide">
                A normal request. A real piece of business work.
              </p>
            </div>
          </motion.div>


          {/* -------------------------------------------------------------------
              SCENE 02: UNDERSTAND
              Eyebrow: 02 / UNDERSTAND
              Headline: FIRST, IT FIGURES OUT WHAT THEY NEED.
          ------------------------------------------------------------------- */}
          <motion.div
            style={{
              opacity: s2Opacity,
              y: s2Y,
              scale: s2Scale,
              visibility: s2Visibility,
              pointerEvents: s2Pointer,
              zIndex: s2ZIndex,
            }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              {/* Scene Eyebrow & Headline */}
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  02 / UNDERSTAND
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  FIRST, IT FIGURES OUT WHAT THEY NEED.
                </h3>
              </div>

              {/* Structured Understanding Document */}
              <div className="bg-[#121620] text-slate-200 p-5 sm:p-8 lg:p-9 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-white/[0.08]">
                {/* Header rule */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 mb-3.5 sm:pb-3 sm:mb-5 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-slate-400 uppercase">
                  <span>REQUEST INTERPRETATION</span>
                  <span>INTAKE CONTEXT</span>
                </div>

                {/* Extracted Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 py-1">
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      DOCTOR
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      DR PATEL
                    </p>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      PATIENT
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Existing patient
                    </p>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      TIME REQUESTED
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Thursday afternoon
                    </p>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      APPOINTMENT TYPE
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Follow-up appointment
                    </p>
                  </div>
                </div>

                {/* Next Action Statement */}
                <div className="border-t border-white/[0.08] pt-3 sm:pt-4 mt-3.5 sm:mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      NEXT:
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Find a suitable appointment.
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[9.5px] font-mono text-slate-400 uppercase hidden sm:inline">
                    UNDERSTANDING COMPLETE
                  </span>
                </div>
              </div>

              {/* Small Supporting Line */}
              <p className="text-xs sm:text-sm text-slate-400 text-center font-normal pt-1 tracking-wide">
                The system understands the request before doing anything.
              </p>
            </div>
          </motion.div>


          {/* -------------------------------------------------------------------
              SCENE 03: KNOW THE BUSINESS
              Eyebrow: 03 / KNOW THE BUSINESS
              Headline: THEN IT CHECKS HOW YOUR BUSINESS WORKS.
          ------------------------------------------------------------------- */}
          <motion.div
            style={{
              opacity: s3Opacity,
              y: s3Y,
              scale: s3Scale,
              visibility: s3Visibility,
              pointerEvents: s3Pointer,
              zIndex: s3ZIndex,
            }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              {/* Scene Eyebrow & Headline */}
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  03 / KNOW THE BUSINESS
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  THEN IT CHECKS HOW YOUR BUSINESS WORKS.
                </h3>
              </div>

              {/* Operating Knowledge Document */}
              <div className="bg-[#F5F4EF] text-[#141618] p-5 sm:p-8 lg:p-9 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-black/[0.08] rotate-[0.5deg]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-black/[0.1] pb-2.5 mb-3 sm:pb-3 sm:mb-4 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>CLINIC PRACTICE PROTOCOL</span>
                  <span>SECTION 4.2 · DIARY RULES</span>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5">
                  {/* Physician Profile & Schedule */}
                  <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-2 sm:pb-3">
                    <div>
                      <div className="text-sm sm:text-lg font-bold text-neutral-900 tracking-tight font-serif uppercase">
                        DR PATEL
                      </div>
                      <div className="text-xs text-neutral-600 font-sans mt-0.5">
                        Thursday clinic
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-neutral-800 uppercase">
                        FOLLOW-UP
                      </div>
                      <div className="text-xs font-mono text-neutral-600">
                        30 minutes
                      </div>
                    </div>
                  </div>

                  {/* Highlighted Business Rule */}
                  <div className="p-3 sm:p-3.5 bg-amber-50/90 border-l-2 border-amber-600 my-1.5 sm:my-2">
                    <span className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-wider text-amber-900 block mb-0.5 font-bold">
                      BUSINESS RULE
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-neutral-900 leading-snug">
                      Follow-up appointments require 30 minutes.
                    </p>
                  </div>

                  {/* Available Match */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                      MATCHING TIME WINDOW
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-neutral-900 bg-neutral-200/80 px-2 sm:px-2.5 py-0.5 sm:py-1">
                      AVAILABLE: 14:30
                    </span>
                  </div>
                </div>
              </div>

              {/* Small Supporting Line */}
              <p className="text-xs sm:text-sm text-slate-400 text-center font-normal pt-1 tracking-wide">
                Your rules. Your information. Your way of working.
              </p>
            </div>
          </motion.div>


          {/* -------------------------------------------------------------------
              SCENE 04: TAKE ACTION
              Eyebrow: 04 / TAKE ACTION
              Headline: THEN IT GETS THE WORK DONE.
          ------------------------------------------------------------------- */}
          <motion.div
            style={{
              opacity: s4Opacity,
              y: s4Y,
              scale: s4Scale,
              visibility: s4Visibility,
              pointerEvents: s4Pointer,
              zIndex: s4ZIndex,
            }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              {/* Scene Eyebrow & Headline */}
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  04 / TAKE ACTION
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  THEN IT GETS THE WORK DONE.
                </h3>
              </div>

              {/* Action Execution Artefact */}
              <div className="bg-[#10141D] text-slate-200 p-5 sm:p-8 lg:p-9 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-white/[0.08]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 mb-3 sm:pb-3 sm:mb-4 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-slate-400 uppercase">
                  <span>OPERATIONAL OUTCOME</span>
                  <span>DISPATCH EXECUTION</span>
                </div>

                {/* Confirmed Slot */}
                <div className="py-1 sm:py-2 border-b border-white/[0.08] mb-3 sm:mb-4">
                  <div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    14:30 AVAILABLE
                  </div>
                </div>

                {/* 4 Executed Actions */}
                <div className="space-y-2 sm:space-y-3 py-1 text-xs sm:text-sm lg:text-base font-medium text-white">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-200" />
                    </div>
                    <span>Appointment held.</span>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-200" />
                    </div>
                    <span>Confirmation prepared.</span>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-200" />
                    </div>
                    <span>Calendar updated.</span>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-200" />
                    </div>
                    <span>Staff notified.</span>
                  </div>
                </div>
              </div>

              {/* Supporting Line */}
              <p className="text-xs sm:text-sm text-slate-400 text-center font-normal pt-1 tracking-wide">
                The work is completed, not simply passed along.
              </p>
            </div>
          </motion.div>


          {/* -------------------------------------------------------------------
              SCENE 05: YOUR TEAM (HUMAN HANDOVER)
              Eyebrow: 05 / YOUR TEAM
              Headline: YOUR TEAM GETS THE RESULT.
          ------------------------------------------------------------------- */}
          <motion.div
            style={{
              opacity: s5Opacity,
              y: s5Y,
              scale: s5Scale,
              visibility: s5Visibility,
              pointerEvents: s5Pointer,
              zIndex: s5ZIndex,
            }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-2 sm:px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              {/* Scene Eyebrow & Headline */}
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  05 / YOUR TEAM
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  YOUR TEAM GETS THE RESULT.
                </h3>
              </div>

              {/* Completed Handover Artefact */}
              <div className="bg-[#FAF9F6] text-[#141619] p-5 sm:p-8 lg:p-9 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-black/[0.08]">
                <div className="flex items-center justify-between border-b border-black/[0.1] pb-2.5 mb-3 sm:pb-3 sm:mb-4 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>PATIENT APPOINTMENT</span>
                  <span>COMPLETED OUTCOME</span>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  <div
                    className="text-lg sm:text-2xl font-bold text-neutral-900 tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Dr Patel
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-xs font-mono text-neutral-800 border-t border-black/[0.06] pt-2.5 sm:pt-3">
                    <div>
                      <span className="text-neutral-500 block text-[9px] sm:text-[9.5px]">TIMING</span>
                      <span className="font-semibold text-neutral-900">Thursday · 14:30</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[9px] sm:text-[9.5px]">CONSULTATION</span>
                      <span className="font-semibold text-neutral-900">Follow-up appointment</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[9px] sm:text-[9.5px]">DISPATCH</span>
                      <span className="font-semibold text-neutral-900">Confirmation sent.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Key Statement: NOT ANOTHER TASK. A COMPLETED PIECE OF WORK. */}
              <div className="pt-2 sm:pt-3 text-center space-y-0.5 sm:space-y-1">
                <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                  NOT ANOTHER TASK.
                </div>
                <div
                  className="text-base sm:text-xl lg:text-2xl font-extrabold text-white uppercase tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  A COMPLETED PIECE OF WORK.
                </div>
              </div>
            </div>
          </motion.div>


          {/* -------------------------------------------------------------------
              CONCEPTUAL CONCLUSION (0.785 -> 0.885)
              Held with supreme visual weight and authority.
              Step 1: "THIS IS WHAT WE BUILD." enters & holds alone.
              Step 2: "SYSTEMS THAT GET BUSINESS WORK DONE." enters with supporting line.
              Climax holds, then cleanly exits into empty pause.
          ------------------------------------------------------------------- */}
          <motion.div
            style={{
              opacity: conclusionContainerOpacity,
              y: conclusionContainerY,
              scale: conclusionContainerScale,
              visibility: conclusionVisibility,
              pointerEvents: conclusionPointer,
              zIndex: conclusionZIndex,
            }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4"
          >
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              {/* Step 1: THIS IS WHAT WE BUILD. */}
              <motion.div
                style={{
                  opacity: buildOpacity,
                  y: buildY,
                }}
                className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-[0.25em] font-semibold"
              >
                THIS IS WHAT WE BUILD.
              </motion.div>

              {/* Step 2: SYSTEMS THAT GET BUSINESS WORK DONE. */}
              <motion.div
                style={{
                  opacity: systemsOpacity,
                  y: systemsY,
                }}
                className="space-y-3 sm:space-y-4"
              >
                <h3
                  className="text-3xl sm:text-5xl lg:text-[76px] font-extrabold text-[#F8FAFC] tracking-[-0.035em] uppercase leading-[0.98]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  SYSTEMS THAT
                  <br />
                  GET BUSINESS WORK DONE.
                </h3>

                <motion.p
                  style={{
                    opacity: systemsSubOpacity,
                    y: systemsSubY,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                  className="text-sm sm:text-lg lg:text-xl text-slate-300 font-normal max-w-xl mx-auto pt-1 sm:pt-2 leading-relaxed"
                >
                  From the first request to the final result.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>


          {/* -------------------------------------------------------------------
              SOLUTION ARCHITECTURE & PROGRESSIVE SIX DOMAINS INDEX (0.908 -> 1.000)
              Enters only AFTER generous empty pause (0.885 -> 0.908).
              Headline: ONE PRINCIPLE. MANY KINDS OF WORK.
              Supporting line: The same approach can be applied wherever work enters your business.
              Six large, quiet typographic rows revealed progressively.
              No cards, borders, glowing UI, or SaaS components.
          ------------------------------------------------------------------- */}
          <motion.div
            style={{
              visibility: archVisibility,
              pointerEvents: archPointer,
              zIndex: archZIndex,
            }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6"
          >
            <div className="w-full max-w-3xl space-y-6 sm:space-y-8">
              {/* Header */}
              <motion.div
                style={{
                  opacity: archHeaderOpacity,
                  y: archHeaderY,
                }}
                className="space-y-2 sm:space-y-3"
              >
                <h3
                  className="text-2xl sm:text-4xl lg:text-[50px] font-extrabold text-[#F8FAFC] tracking-[-0.035em] uppercase leading-[1.02]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  ONE PRINCIPLE.
                  <br />
                  MANY KINDS OF WORK.
                </h3>

                <p
                  className="text-xs sm:text-base lg:text-lg text-slate-300 font-normal max-w-xl mx-auto leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  The same approach can be applied wherever work enters your business.
                </p>
              </motion.div>

              {/* Six Domains Editorial Index (Quiet typographic rows, revealed progressively) */}
              <div className="w-full max-w-2xl mx-auto text-left pt-2">
                {/* 01 REVENUE & SALES */}
                <motion.div
                  style={{ opacity: d1Opacity, y: d1Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-white/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-500 font-medium">
                    01
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    REVENUE &amp; SALES
                  </span>
                </motion.div>

                {/* 02 MARKETING & GROWTH */}
                <motion.div
                  style={{ opacity: d2Opacity, y: d2Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-white/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-500 font-medium">
                    02
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    MARKETING &amp; GROWTH
                  </span>
                </motion.div>

                {/* 03 OPERATIONS & AUTOMATION */}
                <motion.div
                  style={{ opacity: d3Opacity, y: d3Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-white/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-500 font-medium">
                    03
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    OPERATIONS &amp; AUTOMATION
                  </span>
                </motion.div>

                {/* 04 STAFF TRAINING */}
                <motion.div
                  style={{ opacity: d4Opacity, y: d4Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-white/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-500 font-medium">
                    04
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    STAFF TRAINING
                  </span>
                </motion.div>

                {/* 05 CUSTOMER OPERATIONS */}
                <motion.div
                  style={{ opacity: d5Opacity, y: d5Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-white/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-500 font-medium">
                    05
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    CUSTOMER OPERATIONS
                  </span>
                </motion.div>

                {/* 06 DECISION INTELLIGENCE */}
                <motion.div
                  style={{ opacity: d6Opacity, y: d6Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-white/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-500 font-medium">
                    06
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    DECISION INTELLIGENCE
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
