import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Check } from "lucide-react";

interface TheStrategicDilemmaSectionProps {
  onOpenBooking?: () => void;
}

export const TheStrategicDilemmaSection: React.FC<TheStrategicDilemmaSectionProps> = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // Dedicated continuous progress value (0 to 1) directly tied to native page scroll
  const progress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = trackRef.current.offsetHeight;
      const stickyHeight = stickyRef.current
        ? stickyRef.current.offsetHeight
        : window.innerHeight * 0.85;

      // Safe top clearance matching the desktop sticky top offset
      const topOffset = window.innerWidth >= 1024 ? 112 : window.innerWidth >= 640 ? 96 : 80;

      // Total travel distance while the stage remains pinned
      const maxScroll = trackHeight - stickyHeight;

      if (maxScroll <= 0) {
        progress.set(0);
        return;
      }

      // Exact normalized progress: 0 when sticky starts, 1 when track ends
      const scrolled = topOffset - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / maxScroll));
      progress.set(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [progress]);

  // =========================================================================
  // STRICTLY SEQUENTIAL SCROLL TIMELINE (ENTER → HOLD → EXIT → EMPTY GAP)
  //
  // 0.000 -> 0.120: SCENE 01 — THE REQUEST (Active from scroll pixel 0)
  // 0.120 -> 0.145: EMPTY GAP 1 (QUIET STAGE)
  // 0.145 -> 0.275: SCENE 02 — UNDERSTAND
  // 0.275 -> 0.300: EMPTY GAP 2 (QUIET STAGE)
  // 0.300 -> 0.430: SCENE 03 — KNOW THE BUSINESS
  // 0.430 -> 0.455: EMPTY GAP 3 (QUIET STAGE)
  // 0.455 -> 0.600: SCENE 04 — TAKE ACTION
  // 0.600 -> 0.625: EMPTY GAP 4 (QUIET STAGE)
  // 0.625 -> 0.755: SCENE 05 — YOUR TEAM (HUMAN HANDOVER)
  // 0.755 -> 0.780: EMPTY GAP 5 (QUIET PAUSE)
  // 0.780 -> 0.880: THE BIG IDEA (THIS IS WHAT WE BUILD → SYSTEMS THAT GET BUSINESS WORK DONE)
  // 0.880 -> 0.905: EMPTY GAP 6 (RESTRAINED TRANSITION)
  // 0.905 -> 1.000: THE BRIDGE INTO SOLUTIONS (ONE PRINCIPLE. MANY KINDS OF WORK.)
  //
  // CRITICAL RULE: Zero crossfade. Outgoing scene hits opacity: 0 and
  // visibility: hidden BEFORE incoming enters.
  // =========================================================================

  // SCENE 01: THE REQUEST (0.000 -> 0.120) — Visibly moves immediately as scroll begins
  const s1Opacity = useTransform(progress, [0.000, 0.080, 0.120], [1.0, 1.0, 0.0]);
  const s1Y = useTransform(progress, [0.000, 0.080, 0.120], [0, -10, -28]);
  const s1Scale = useTransform(progress, [0.000, 0.080, 0.120], [1.0, 0.985, 0.95]);
  const s1Visibility = useTransform(progress, (p) => (p <= 0.120 ? "visible" : "hidden"));
  const s1Pointer = useTransform(progress, (p) => (p <= 0.120 ? "auto" : "none"));
  const s1ZIndex = useTransform(progress, (p) => (p <= 0.120 ? 20 : 0));

  // SCENE 02: UNDERSTAND (0.145 -> 0.275)
  const s2Opacity = useTransform(progress, [0.145, 0.175, 0.235, 0.275], [0.0, 1.0, 1.0, 0.0]);
  const s2Y = useTransform(progress, [0.145, 0.175, 0.235, 0.275], [20, 0, -6, -26]);
  const s2Scale = useTransform(progress, [0.145, 0.175, 0.235, 0.275], [0.97, 1.0, 1.0, 0.96]);
  const s2Visibility = useTransform(progress, (p) => (p >= 0.145 && p <= 0.275 ? "visible" : "hidden"));
  const s2Pointer = useTransform(progress, (p) => (p >= 0.145 && p <= 0.275 ? "auto" : "none"));
  const s2ZIndex = useTransform(progress, (p) => (p >= 0.145 && p <= 0.275 ? 20 : 0));

  // SCENE 03: KNOW THE BUSINESS (0.300 -> 0.430)
  const s3Opacity = useTransform(progress, [0.300, 0.330, 0.390, 0.430], [0.0, 1.0, 1.0, 0.0]);
  const s3Y = useTransform(progress, [0.300, 0.330, 0.390, 0.430], [20, 0, -6, -26]);
  const s3Scale = useTransform(progress, [0.300, 0.330, 0.390, 0.430], [0.97, 1.0, 1.0, 0.96]);
  const s3Visibility = useTransform(progress, (p) => (p >= 0.300 && p <= 0.430 ? "visible" : "hidden"));
  const s3Pointer = useTransform(progress, (p) => (p >= 0.300 && p <= 0.430 ? "auto" : "none"));
  const s3ZIndex = useTransform(progress, (p) => (p >= 0.300 && p <= 0.430 ? 20 : 0));

  // SCENE 04: TAKE ACTION (0.455 -> 0.600)
  const s4Opacity = useTransform(progress, [0.455, 0.485, 0.565, 0.600], [0.0, 1.0, 1.0, 0.0]);
  const s4Y = useTransform(progress, [0.455, 0.485, 0.565, 0.600], [20, 0, 0, -26]);
  const s4Scale = useTransform(progress, [0.455, 0.485, 0.565, 0.600], [0.97, 1.0, 1.0, 0.96]);
  const s4Visibility = useTransform(progress, (p) => (p >= 0.455 && p <= 0.600 ? "visible" : "hidden"));
  const s4Pointer = useTransform(progress, (p) => (p >= 0.455 && p <= 0.600 ? "auto" : "none"));
  const s4ZIndex = useTransform(progress, (p) => (p >= 0.455 && p <= 0.600 ? 20 : 0));

  // Sequentially revealed checkmarks in Scene 04
  const s4Item1Opacity = useTransform(progress, [0.485, 0.505], [0.0, 1.0]);
  const s4Item1Y = useTransform(progress, [0.485, 0.505], [6, 0]);

  const s4Item2Opacity = useTransform(progress, [0.505, 0.525], [0.0, 1.0]);
  const s4Item2Y = useTransform(progress, [0.505, 0.525], [6, 0]);

  const s4Item3Opacity = useTransform(progress, [0.525, 0.545], [0.0, 1.0]);
  const s4Item3Y = useTransform(progress, [0.525, 0.545], [6, 0]);

  const s4Item4Opacity = useTransform(progress, [0.545, 0.565], [0.0, 1.0]);
  const s4Item4Y = useTransform(progress, [0.545, 0.565], [6, 0]);

  // SCENE 05: YOUR TEAM (0.625 -> 0.755)
  const s5Opacity = useTransform(progress, [0.625, 0.655, 0.715, 0.755], [0.0, 1.0, 1.0, 0.0]);
  const s5Y = useTransform(progress, [0.625, 0.655, 0.715, 0.755], [20, 0, -6, -26]);
  const s5Scale = useTransform(progress, [0.625, 0.655, 0.715, 0.755], [0.97, 1.0, 1.0, 0.96]);
  const s5Visibility = useTransform(progress, (p) => (p >= 0.625 && p <= 0.755 ? "visible" : "hidden"));
  const s5Pointer = useTransform(progress, (p) => (p >= 0.625 && p <= 0.755 ? "auto" : "none"));
  const s5ZIndex = useTransform(progress, (p) => (p >= 0.625 && p <= 0.755 ? 20 : 0));

  // CONCEPTUAL CONCLUSION (0.780 -> 0.880)
  const conclusionContainerOpacity = useTransform(progress, [0.780, 0.795, 0.855, 0.880], [0.0, 1.0, 1.0, 0.0]);
  const conclusionContainerY = useTransform(progress, [0.855, 0.880], [0, -20]);
  const conclusionContainerScale = useTransform(progress, [0.855, 0.880], [1.0, 0.97]);
  const conclusionVisibility = useTransform(progress, (p) => (p >= 0.780 && p <= 0.880 ? "visible" : "hidden"));
  const conclusionPointer = useTransform(progress, (p) => (p >= 0.780 && p <= 0.880 ? "auto" : "none"));
  const conclusionZIndex = useTransform(progress, (p) => (p >= 0.780 && p <= 0.880 ? 20 : 0));

  // Step 1: "THIS IS WHAT WE BUILD."
  const buildOpacity = useTransform(progress, [0.780, 0.805], [0.0, 1.0]);
  const buildY = useTransform(progress, [0.780, 0.805], [14, 0]);

  // Step 2: "SYSTEMS THAT GET BUSINESS WORK DONE."
  const systemsOpacity = useTransform(progress, [0.805, 0.835], [0.0, 1.0]);
  const systemsY = useTransform(progress, [0.805, 0.835], [18, 0]);

  const systemsSubOpacity = useTransform(progress, [0.825, 0.850], [0.0, 1.0]);
  const systemsSubY = useTransform(progress, [0.825, 0.850], [10, 0]);

  // BRIDGE INTO THE SIX SOLUTION DOMAINS (0.905 -> 1.000)
  const archVisibility = useTransform(progress, (p) => (p >= 0.905 ? "visible" : "hidden"));
  const archPointer = useTransform(progress, (p) => (p >= 0.905 ? "auto" : "none"));
  const archZIndex = useTransform(progress, (p) => (p >= 0.905 ? 20 : 0));

  const archHeaderOpacity = useTransform(progress, [0.905, 0.925], [0.0, 1.0]);
  const archHeaderY = useTransform(progress, [0.905, 0.925], [16, 0]);

  // Progressive reveal of the 6 solution domains
  const d1Opacity = useTransform(progress, [0.920, 0.935], [0.0, 1.0]);
  const d1Y = useTransform(progress, [0.920, 0.935], [8, 0]);

  const d2Opacity = useTransform(progress, [0.935, 0.950], [0.0, 1.0]);
  const d2Y = useTransform(progress, [0.935, 0.950], [8, 0]);

  const d3Opacity = useTransform(progress, [0.950, 0.965], [0.0, 1.0]);
  const d3Y = useTransform(progress, [0.950, 0.965], [8, 0]);

  const d4Opacity = useTransform(progress, [0.965, 0.978], [0.0, 1.0]);
  const d4Y = useTransform(progress, [0.965, 0.978], [8, 0]);

  const d5Opacity = useTransform(progress, [0.978, 0.990], [0.0, 1.0]);
  const d5Y = useTransform(progress, [0.978, 0.990], [8, 0]);

  const d6Opacity = useTransform(progress, [0.990, 1.000], [0.0, 1.0]);
  const d6Y = useTransform(progress, [0.990, 1.000], [8, 0]);

  return (
    <section
      ref={sectionRef}
      id="the-problem"
      className="relative bg-[#FBFBFC] text-[#0A0D14] scroll-mt-24 border-b border-black/[0.06]"
    >
      {/* =========================================================================
          SECTION INTRO (Generous Whitespace, Strategic Restraint, Pure Light Canvas)
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-32 lg:pt-36 pb-10 sm:pb-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0D14]/70 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A0D14]" />
          <span>01 / FROM REQUEST TO RESULT</span>
        </div>

        {/* Section Headline */}
        <h2
          className="text-3xl sm:text-5xl lg:text-[68px] font-bold text-[#0A0D14] tracking-[-0.035em] leading-[1.04] uppercase"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          WORK ENTERS YOUR BUSINESS EVERY DAY.
          <br className="hidden sm:inline" />
          {" "}THEN SOMEONE HAS TO DEAL WITH IT.
        </h2>

        {/* Supporting Copy */}
        <div
          className="text-base sm:text-xl lg:text-2xl text-slate-600 mt-6 tracking-tight font-normal max-w-3xl leading-relaxed space-y-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <p className="text-slate-800">
            A customer question. A document to check. An appointment to arrange. A staff question.
          </p>
          <p className="text-slate-600 pt-1">
            Stratision builds systems that understand what is needed, use the right business context, and handle what happens next.
          </p>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP & TABLET CINEMATIC STAGE (sm and up)
          Bounded scroll track (~240vh) with natural, responsive progression.
          Guaranteed navbar clearance (top-24 sm:top-24 lg:top-28).
          Native scroll drives continuous local animation.
      ========================================================================= */}
      <div ref={trackRef} className="hidden sm:block relative w-full h-[240vh] lg:h-[250vh]">
        {/* Pinned Viewport Frame with Guaranteed Navbar Clearance */}
        <div
          ref={stickyRef}
          className="sticky top-20 sm:top-24 lg:top-28 h-[calc(100vh-6rem)] sm:h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-8.5rem)] min-h-[520px] max-h-[820px] w-full flex items-center justify-center overflow-hidden select-none px-4 sm:px-6"
        >
          {/* -------------------------------------------------------------------
              SCENE 01: THE REQUEST (0.000 -> 0.120)
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
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
                  01 / THE REQUEST
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  IT STARTS WITH A REQUEST.
                </h3>
              </div>

              {/* Physical Communication Artefact */}
              <div className="bg-[#FFFFFF] text-[#141619] p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-black/[0.09] rotate-[-0.5deg]">
                <div className="flex items-center justify-between border-b border-black/[0.1] pb-2.5 mb-3.5 sm:pb-3 sm:mb-5 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>CLINIC INTAKE DESK</span>
                  <span>MARCUS VANCE · PATIENT #84102</span>
                  <span>14:12 GMT</span>
                </div>

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

                <div className="flex items-center justify-between border-t border-black/[0.08] pt-2.5 mt-3.5 sm:pt-3.5 sm:mt-5 text-[9px] sm:text-[9.5px] font-mono text-neutral-500">
                  <span>COMMUNICATION: PATIENT PORTAL</span>
                  <span>STATUS: RECEIVED</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 text-center font-normal pt-1 tracking-wide">
                A normal request. A real piece of business work.
              </p>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              SCENE 02: UNDERSTAND (0.145 -> 0.275)
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
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
                  02 / UNDERSTAND
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  FIRST, IT FIGURES OUT WHAT THEY NEED.
                </h3>
              </div>

              <div className="bg-[#FFFFFF] text-[#141619] p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-black/[0.09]">
                <div className="flex items-center justify-between border-b border-black/[0.08] pb-2.5 mb-3.5 sm:pb-3 sm:mb-5 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>REQUEST INTERPRETATION</span>
                  <span>INTAKE CONTEXT</span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-5 py-1">
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      DOCTOR
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-[#0A0D14] tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      DR PATEL
                    </p>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      PATIENT
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-[#0A0D14] tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      EXISTING PATIENT
                    </p>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      TIME REQUESTED
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-[#0A0D14] tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      THURSDAY AFTERNOON
                    </p>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      APPOINTMENT TYPE
                    </span>
                    <p
                      className="text-sm sm:text-base lg:text-lg font-semibold text-[#0A0D14] tracking-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      FOLLOW-UP APPOINTMENT
                    </p>
                  </div>
                </div>

                <div className="border-t border-black/[0.08] pt-3 sm:pt-4 mt-3.5 sm:mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                      NEXT:
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0A0D14]">
                      FIND A SUITABLE APPOINTMENT
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[9.5px] font-mono text-neutral-400 uppercase">
                    UNDERSTANDING COMPLETE
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 text-center font-normal pt-1 tracking-wide">
                The system understands the request before doing anything.
              </p>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              SCENE 03: KNOW THE BUSINESS (0.300 -> 0.430)
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
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
                  03 / KNOW THE BUSINESS
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  THEN IT CHECKS HOW YOUR BUSINESS WORKS.
                </h3>
              </div>

              <div className="bg-[#FAF9F5] text-[#141618] p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-black/[0.09] rotate-[0.5deg]">
                <div className="flex items-center justify-between border-b border-black/[0.1] pb-2.5 mb-3 sm:pb-3 sm:mb-4 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>CLINIC PRACTICE PROTOCOL</span>
                  <span>SECTION 4.2 · DIARY RULES</span>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5">
                  <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-2 sm:pb-3">
                    <div>
                      <div className="text-sm sm:text-lg font-bold text-neutral-900 tracking-tight font-serif uppercase">
                        DR PATEL · THURSDAY CLINIC
                      </div>
                      <div className="text-xs text-neutral-600 font-sans mt-0.5">
                        Patient Consultation Hours
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-neutral-800 uppercase">
                        FOLLOW-UP
                      </div>
                      <div className="text-xs font-mono text-neutral-600">
                        30 MINUTES
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-3.5 bg-amber-50/90 border-l-2 border-amber-600 my-1.5 sm:my-2">
                    <span className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-wider text-amber-900 block mb-0.5 font-bold">
                      BUSINESS RULE:
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-neutral-900 leading-snug">
                      Follow-up appointments require 30 minutes.
                    </p>
                  </div>

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

              <p className="text-xs sm:text-sm text-slate-500 text-center font-normal pt-1 tracking-wide">
                Your rules. Your information. Your way of working.
              </p>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              SCENE 04: TAKE ACTION (0.455 -> 0.600)
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
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
                  04 / TAKE ACTION
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  THEN IT GETS THE WORK DONE.
                </h3>
              </div>

              <div className="bg-[#FFFFFF] text-[#141619] p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-black/[0.09]">
                <div className="flex items-center justify-between border-b border-black/[0.08] pb-2.5 mb-3 sm:pb-3 sm:mb-4 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>OPERATIONAL OUTCOME</span>
                  <span>DISPATCH EXECUTION</span>
                </div>

                <div className="py-1 sm:py-2 border-b border-black/[0.08] mb-3 sm:mb-4">
                  <div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0D14] tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    14:30 AVAILABLE
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 py-1 text-xs sm:text-sm lg:text-base font-medium text-[#0A0D14]">
                  <motion.div
                    style={{ opacity: s4Item1Opacity, y: s4Item1Y }}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span>Appointment held</span>
                  </motion.div>

                  <motion.div
                    style={{ opacity: s4Item2Opacity, y: s4Item2Y }}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span>Confirmation prepared</span>
                  </motion.div>

                  <motion.div
                    style={{ opacity: s4Item3Opacity, y: s4Item3Y }}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span>Calendar updated</span>
                  </motion.div>

                  <motion.div
                    style={{ opacity: s4Item4Opacity, y: s4Item4Y }}
                    className="flex items-center gap-2.5 sm:gap-3"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span>Staff notified</span>
                  </motion.div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 text-center font-normal pt-1 tracking-wide">
                The work is completed, not simply passed along.
              </p>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              SCENE 05: YOUR TEAM (0.625 -> 0.755)
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
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4"
          >
            <div className="w-full max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4">
              <div className="text-center space-y-1 sm:space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
                  05 / YOUR TEAM
                </div>
                <h3
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  YOUR TEAM GETS THE RESULT.
                </h3>
              </div>

              <div className="bg-[#FAF9F6] text-[#141619] p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] border border-black/[0.09]">
                <div className="flex items-center justify-between border-b border-black/[0.1] pb-2.5 mb-3 sm:pb-3 sm:mb-4 text-[9px] sm:text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase">
                  <span>PATIENT APPOINTMENT</span>
                  <span>COMPLETED OUTCOME</span>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  <div
                    className="text-lg sm:text-2xl font-bold text-neutral-900 tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    DR PATEL
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-xs font-mono text-neutral-800 border-t border-black/[0.06] pt-2.5 sm:pt-3">
                    <div>
                      <span className="text-neutral-500 block text-[9px] sm:text-[9.5px]">TIMING</span>
                      <span className="font-semibold text-neutral-900">THURSDAY · 14:30</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[9px] sm:text-[9.5px]">CONSULTATION</span>
                      <span className="font-semibold text-neutral-900">FOLLOW-UP APPOINTMENT</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[9px] sm:text-[9.5px]">DISPATCH</span>
                      <span className="font-semibold text-neutral-900">CONFIRMATION SENT</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-3 text-center space-y-0.5 sm:space-y-1">
                <div className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                  NOT ANOTHER TASK.
                </div>
                <div
                  className="text-base sm:text-xl lg:text-2xl font-extrabold text-[#0A0D14] uppercase tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  A COMPLETED PIECE OF WORK.
                </div>
              </div>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              CONCEPTUAL CONCLUSION (0.780 -> 0.880)
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
              <motion.div
                style={{
                  opacity: buildOpacity,
                  y: buildY,
                }}
                className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-[0.25em] font-semibold"
              >
                THIS IS WHAT WE BUILD.
              </motion.div>

              <motion.div
                style={{
                  opacity: systemsOpacity,
                  y: systemsY,
                }}
                className="space-y-3 sm:space-y-4"
              >
                <h3
                  className="text-3xl sm:text-5xl lg:text-[76px] font-extrabold text-[#0A0D14] tracking-[-0.035em] uppercase leading-[0.98]"
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
                  className="text-sm sm:text-lg lg:text-xl text-slate-600 font-normal max-w-xl mx-auto pt-1 sm:pt-2 leading-relaxed"
                >
                  From the first request to the final result.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* -------------------------------------------------------------------
              SOLUTION ARCHITECTURE & PROGRESSIVE SIX DOMAINS INDEX (0.905 -> 1.000)
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
              <motion.div
                style={{
                  opacity: archHeaderOpacity,
                  y: archHeaderY,
                }}
                className="space-y-2 sm:space-y-3"
              >
                <h3
                  className="text-2xl sm:text-4xl lg:text-[50px] font-extrabold text-[#0A0D14] tracking-[-0.035em] uppercase leading-[1.02]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  ONE PRINCIPLE.
                  <br />
                  MANY KINDS OF WORK.
                </h3>

                <p
                  className="text-xs sm:text-base lg:text-lg text-slate-600 font-normal max-w-xl mx-auto leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  The same approach can be applied wherever work enters your business.
                </p>
              </motion.div>

              <div className="w-full max-w-2xl mx-auto text-left pt-2">
                <motion.div
                  style={{ opacity: d1Opacity, y: d1Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-black/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-medium">
                    01
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#0A0D14] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    REVENUE &amp; SALES
                  </span>
                </motion.div>

                <motion.div
                  style={{ opacity: d2Opacity, y: d2Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-black/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-medium">
                    02
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#0A0D14] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    MARKETING &amp; GROWTH
                  </span>
                </motion.div>

                <motion.div
                  style={{ opacity: d3Opacity, y: d3Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-black/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-medium">
                    03
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#0A0D14] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    OPERATIONS
                  </span>
                </motion.div>

                <motion.div
                  style={{ opacity: d4Opacity, y: d4Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-black/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-medium">
                    04
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#0A0D14] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    STAFF TRAINING
                  </span>
                </motion.div>

                <motion.div
                  style={{ opacity: d5Opacity, y: d5Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-black/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-medium">
                    05
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#0A0D14] tracking-tight uppercase"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    CUSTOMER OPERATIONS
                  </span>
                </motion.div>

                <motion.div
                  style={{ opacity: d6Opacity, y: d6Y }}
                  className="flex items-baseline py-2 sm:py-3 border-b border-black/[0.08]"
                >
                  <span className="w-10 sm:w-14 shrink-0 text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-medium">
                    06
                  </span>
                  <span
                    className="text-base sm:text-xl lg:text-2xl font-bold text-[#0A0D14] tracking-tight uppercase"
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

      {/* =========================================================================
          MOBILE EDITORIAL SEQUENCE (block sm:hidden)
          Deliberate vertical editorial flow optimized for touch screens.
          No sticky trapping or oversized spacer. Generous margins and natural scroll.
      ========================================================================= */}
      <div className="block sm:hidden px-5 pb-20 space-y-14">
        {/* MOBILE SCENE 01: THE REQUEST */}
        <div className="space-y-3 pt-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
              01 / THE REQUEST
            </div>
            <h3
              className="text-xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              IT STARTS WITH A REQUEST.
            </h3>
          </div>

          <div className="bg-[#FFFFFF] text-[#141619] p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-black/[0.09]">
            <div className="flex items-center justify-between border-b border-black/[0.1] pb-2 mb-3 text-[9px] font-mono text-neutral-500 uppercase">
              <span>CLINIC INTAKE DESK</span>
              <span>14:12 GMT</span>
            </div>

            <div className="space-y-1 my-1">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Customer Message
              </div>
              <blockquote
                className="text-base text-neutral-900 font-normal leading-snug tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                “Hi, I’d like to see Dr Patel this Thursday afternoon. I’m an existing patient.”
              </blockquote>
            </div>

            <div className="flex items-center justify-between border-t border-black/[0.08] pt-2 mt-3 text-[9px] font-mono text-neutral-500">
              <span>PORTAL INTAKE</span>
              <span>RECEIVED</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-normal tracking-wide">
            A normal request. A real piece of business work.
          </p>
        </div>

        {/* MOBILE SCENE 02: UNDERSTAND */}
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
              02 / UNDERSTAND
            </div>
            <h3
              className="text-xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              FIRST, IT FIGURES OUT WHAT THEY NEED.
            </h3>
          </div>

          <div className="bg-[#FFFFFF] text-[#141619] p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-black/[0.09]">
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-2 mb-3 text-[9px] font-mono text-neutral-500 uppercase">
              <span>REQUEST INTERPRETATION</span>
              <span>CONTEXT</span>
            </div>

            <div className="space-y-2.5 py-1">
              <div className="flex justify-between items-baseline border-b border-black/[0.05] pb-1.5">
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-neutral-500">
                  DOCTOR
                </span>
                <span className="text-sm font-semibold text-[#0A0D14]">DR PATEL</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-black/[0.05] pb-1.5">
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-neutral-500">
                  PATIENT
                </span>
                <span className="text-sm font-semibold text-[#0A0D14]">EXISTING PATIENT</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-black/[0.05] pb-1.5">
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-neutral-500">
                  TIME REQUESTED
                </span>
                <span className="text-sm font-semibold text-[#0A0D14]">THURSDAY AFTERNOON</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-neutral-500">
                  APPOINTMENT TYPE
                </span>
                <span className="text-sm font-semibold text-[#0A0D14]">FOLLOW-UP</span>
              </div>
            </div>

            <div className="border-t border-black/[0.08] pt-2.5 mt-3 flex items-center justify-between">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-neutral-500">
                NEXT:
              </span>
              <span className="text-xs font-semibold text-[#0A0D14]">
                FIND A SUITABLE APPOINTMENT
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-normal tracking-wide">
            The system understands the request before doing anything.
          </p>
        </div>

        {/* MOBILE SCENE 03: KNOW THE BUSINESS */}
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
              03 / KNOW THE BUSINESS
            </div>
            <h3
              className="text-xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              THEN IT CHECKS HOW YOUR BUSINESS WORKS.
            </h3>
          </div>

          <div className="bg-[#FAF9F5] text-[#141618] p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-black/[0.09]">
            <div className="flex items-center justify-between border-b border-black/[0.1] pb-2 mb-3 text-[9px] font-mono text-neutral-500 uppercase">
              <span>PRACTICE PROTOCOL</span>
              <span>SECTION 4.2</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-2">
                <div className="text-sm font-bold text-neutral-900 font-serif uppercase">
                  DR PATEL · THURSDAY
                </div>
                <div className="text-xs font-mono font-bold text-neutral-800">
                  30 MINS
                </div>
              </div>

              <div className="p-2.5 bg-amber-50/90 border-l-2 border-amber-600">
                <span className="text-[9px] font-mono uppercase tracking-wider text-amber-900 block mb-0.5 font-bold">
                  BUSINESS RULE:
                </span>
                <p className="text-xs font-medium text-neutral-900 leading-snug">
                  Follow-up appointments require 30 minutes.
                </p>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-neutral-500">
                  MATCHING WINDOW
                </span>
                <span className="text-xs font-mono font-bold text-neutral-900 bg-neutral-200/80 px-2 py-0.5">
                  AVAILABLE: 14:30
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-normal tracking-wide">
            Your rules. Your information. Your way of working.
          </p>
        </div>

        {/* MOBILE SCENE 04: TAKE ACTION */}
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
              04 / TAKE ACTION
            </div>
            <h3
              className="text-xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              THEN IT GETS THE WORK DONE.
            </h3>
          </div>

          <div className="bg-[#FFFFFF] text-[#141619] p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-black/[0.09]">
            <div className="flex items-center justify-between border-b border-black/[0.08] pb-2 mb-3 text-[9px] font-mono text-neutral-500 uppercase">
              <span>OPERATIONAL OUTCOME</span>
              <span>EXECUTED</span>
            </div>

            <div className="py-1 border-b border-black/[0.08] mb-3">
              <div
                className="text-2xl font-bold text-[#0A0D14] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                14:30 AVAILABLE
              </div>
            </div>

            <div className="space-y-2 py-1 text-xs font-medium text-[#0A0D14]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
                <span>Appointment held</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
                <span>Confirmation prepared</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
                <span>Calendar updated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
                <span>Staff notified</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-normal tracking-wide">
            The work is completed, not simply passed along.
          </p>
        </div>

        {/* MOBILE SCENE 05: YOUR TEAM */}
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-[#0A0D14]/60 uppercase font-semibold">
              05 / YOUR TEAM
            </div>
            <h3
              className="text-xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              YOUR TEAM GETS THE RESULT.
            </h3>
          </div>

          <div className="bg-[#FAF9F6] text-[#141619] p-5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-black/[0.09]">
            <div className="flex items-center justify-between border-b border-black/[0.1] pb-2 mb-3 text-[9px] font-mono text-neutral-500 uppercase">
              <span>PATIENT APPOINTMENT</span>
              <span>COMPLETED</span>
            </div>

            <div className="space-y-2">
              <div
                className="text-lg font-bold text-neutral-900 tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                DR PATEL
              </div>

              <div className="space-y-1 text-xs font-mono text-neutral-800 border-t border-black/[0.06] pt-2">
                <div>
                  <span className="text-neutral-500 text-[9px]">TIMING: </span>
                  <span className="font-semibold">THURSDAY · 14:30</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[9px]">TYPE: </span>
                  <span className="font-semibold">FOLLOW-UP APPOINTMENT</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[9px]">STATUS: </span>
                  <span className="font-semibold">CONFIRMATION SENT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center space-y-0.5">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
              NOT ANOTHER TASK.
            </div>
            <div
              className="text-base font-extrabold text-[#0A0D14] uppercase tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A COMPLETED PIECE OF WORK.
            </div>
          </div>
        </div>

        {/* MOBILE CONCLUSION */}
        <div className="pt-8 border-t border-black/[0.08] text-center space-y-3">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
            THIS IS WHAT WE BUILD.
          </div>
          <h3
            className="text-2xl font-extrabold text-[#0A0D14] tracking-tight uppercase leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            SYSTEMS THAT
            <br />
            GET BUSINESS WORK DONE.
          </h3>
          <p
            className="text-xs text-slate-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            From the first request to the final result.
          </p>
        </div>

        {/* MOBILE SOLUTION INDEX */}
        <div className="pt-8 border-t border-black/[0.08] space-y-4">
          <div className="text-center space-y-1">
            <h4
              className="text-xl font-extrabold text-[#0A0D14] tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              ONE PRINCIPLE.
              <br />
              MANY KINDS OF WORK.
            </h4>
            <p
              className="text-xs text-slate-600"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The same approach can be applied wherever work enters your business.
            </p>
          </div>

          <div className="divide-y divide-black/[0.08] pt-2">
            <div className="py-2.5 flex items-baseline gap-3">
              <span className="text-xs font-mono text-slate-400">01</span>
              <span className="text-sm font-bold uppercase text-[#0A0D14]">REVENUE &amp; SALES</span>
            </div>
            <div className="py-2.5 flex items-baseline gap-3">
              <span className="text-xs font-mono text-slate-400">02</span>
              <span className="text-sm font-bold uppercase text-[#0A0D14]">MARKETING &amp; GROWTH</span>
            </div>
            <div className="py-2.5 flex items-baseline gap-3">
              <span className="text-xs font-mono text-slate-400">03</span>
              <span className="text-sm font-bold uppercase text-[#0A0D14]">OPERATIONS</span>
            </div>
            <div className="py-2.5 flex items-baseline gap-3">
              <span className="text-xs font-mono text-slate-400">04</span>
              <span className="text-sm font-bold uppercase text-[#0A0D14]">STAFF TRAINING</span>
            </div>
            <div className="py-2.5 flex items-baseline gap-3">
              <span className="text-xs font-mono text-slate-400">05</span>
              <span className="text-sm font-bold uppercase text-[#0A0D14]">CUSTOMER OPERATIONS</span>
            </div>
            <div className="py-2.5 flex items-baseline gap-3">
              <span className="text-xs font-mono text-slate-400">06</span>
              <span className="text-sm font-bold uppercase text-[#0A0D14]">DECISION INTELLIGENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
