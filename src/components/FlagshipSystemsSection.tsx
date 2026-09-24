import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck, Play, Pause, FileText, UserCheck, ChevronRight } from "lucide-react";

interface FlagshipSystemsSectionProps {
  onOpenBooking: () => void;
}

export const FlagshipSystemsSection: React.FC<FlagshipSystemsSectionProps> = ({ onOpenBooking }) => {
  // Speed-to-Lead state (0: Enquiry, 1: Intent Understood, 2: Qualified, 3: Response Ready, 4: Sales Handover)
  const [speedStage, setSpeedStage] = useState<number>(0);
  const [speedAutoPlay, setSpeedAutoPlay] = useState<boolean>(true);

  // Marketing state (0: Brief, 1: Insight, 2: Creative, 3: Review, 4: Ready)
  const [mktStage, setMktStage] = useState<number>(2);

  // Workforce state (0: Manual, 1: Knowledge, 2: Guidance, 3: Decision)
  const [wfStage, setWfStage] = useState<number>(2);

  // Receptionist state (0: Caller, 1: Understood, 2: Routing, 3: Connected)
  const [recStage, setRecStage] = useState<number>(1);

  // Auto-play for Speed-to-Lead (Desktop only)
  useEffect(() => {
    if (!speedAutoPlay) return;
    if (typeof window !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      setSpeedAutoPlay(false);
      return;
    }
    const interval = setInterval(() => {
      setSpeedStage((prev) => (prev + 1) % 5);
    }, 4500);
    return () => clearInterval(interval);
  }, [speedAutoPlay]);

  return (
    <section
      id="flagship-systems"
      className="relative py-32 md:py-44 lg:py-52 bg-[#06080F] border-t border-white/[0.06] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Lead */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-16 sm:mb-28 lg:mb-32"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>FLAGSHIP SYSTEMS</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-[76px] font-bold text-white tracking-[-0.04em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Four systems built for daily operations.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mt-4 sm:mt-5 leading-relaxed font-normal max-w-2xl">
            Engineered for core business workflows — handling inbound sales enquiries, marketing budget decisions, staff training, and customer call coordination.
          </p>
        </motion.div>


        {/* =========================================================================
            FLAGSHIP 01 — SPEED-TO-LEAD AGENT™
            Composition: Text on Left (5 Cols), Large Visual on Right (7 Cols)
            Object is the Hero: Giant Customer Enquiry (Sarah Mitchell)
        ========================================================================= */}
        <div className="py-16 sm:py-24 lg:py-28 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left: Editorial Context (5 Cols) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-7">
              <div className="space-y-2.5 sm:space-y-3">
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block">
                  SYSTEM 01
                </span>
                <h3
                  className="text-2xl sm:text-4xl lg:text-[52px] font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Speed-to-Lead Agent™
                </h3>
                <p className="text-lg sm:text-2xl text-blue-300 font-medium tracking-tight">
                  Every enquiry deserves an instant, intelligent response.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Enquiries lose value when they sit in an inbox for hours. AI answers incoming buyers in seconds, confirms their requirements, and books qualified appointments for your team.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={onOpenBooking}
                  className="min-h-[48px] px-5 py-2.5 rounded-full bg-white text-[#06080F] hover:bg-slate-100 font-semibold text-sm inline-flex items-center gap-2 transition-all cursor-pointer group"
                >
                  <span>Discuss Speed-to-Lead</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => setSpeedAutoPlay(!speedAutoPlay)}
                  className="min-h-[44px] px-3 py-2 rounded-lg inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {speedAutoPlay ? (
                    <>
                      <Pause className="w-3 h-3 text-blue-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-blue-400" />
                      <span>Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Giant Enquiry Object (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0C1022] via-[#090C18] to-[#060810] p-5 sm:p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/[0.08] min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
                
                {/* Object Content — Starts directly with the Enquiry without tabs! */}
                <div className="py-6 flex-1 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    
                    {/* STAGE 0: The Raw Enquiry (Hero Object) */}
                    {speedStage === 0 && (
                      <motion.div
                        key="s-0"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.08] pb-3">
                            <span className="text-neutral-700 font-bold uppercase tracking-wider flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                              PORTAL INTAKE · SARAH MITCHELL
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">RECORD</span>
                              <span className="text-xs font-mono font-semibold text-neutral-800">#STL-8821 · 10:42 GMT</span>
                            </div>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Customer Inbound Enquiry</span>
                            <blockquote
                              className="text-2xl sm:text-3xl lg:text-[34px] font-medium text-[#0A0D14] tracking-tight leading-[1.25]"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              “I'm looking for a 3-bed property in Dubai Marina around £750k.”
                            </blockquote>
                          </div>

                          <div className="pt-3.5 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-neutral-500 gap-2">
                            <span>Ingested via Web Portal · Latency: &lt; 180ms</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">SUB-SECOND PARSING ACTIVE</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 1: Intent Understood */}
                    {speedStage === 1 && (
                      <motion.div
                        key="s-1"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-black/[0.09] space-y-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.08] pb-3">
                            <span className="text-neutral-700 font-bold uppercase tracking-wider">
                              EXTRACTED PARAMETERS · SARAH MITCHELL
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">PROCESSING</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">240MS · PARSED</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                            <div className="p-4 sm:p-5 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Acquisition Target</span>
                              <div className="text-xl font-bold text-[#0A0D14]">Residential Buy</div>
                              <span className="text-xs text-neutral-600 block">3-Bed Residence</span>
                            </div>

                            <div className="p-4 sm:p-5 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Target Location</span>
                              <div className="text-xl font-bold text-[#0A0D14]">Dubai Marina</div>
                              <span className="text-xs text-neutral-600 block">Waterfront Freehold</span>
                            </div>

                            <div className="p-4 sm:p-5 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Capital Allocation</span>
                              <div className="text-xl font-bold text-[#0A0D14]">£750,000</div>
                              <span className="text-xs text-neutral-600 block">Timeline &lt; 60 Days</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Ruleset: EMEA Residential v4</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">98.4% PARAMETER CERTAINTY</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 2: Qualified */}
                    {speedStage === 2 && (
                      <motion.div
                        key="s-2"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.08] pb-3">
                            <span className="text-neutral-700 font-bold uppercase tracking-wider">
                              COMMERCIAL QUALIFICATION RECORD
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">STATUS</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">TIER-1 PRIORITY</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                            <div className="sm:col-span-7 space-y-2">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Qualification Assessment</span>
                              <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0D14] tracking-tight">
                                High Intent Buyer
                              </div>
                              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                                Target budget verified · Matches 2 active portfolio assets · Liquid capital ready for immediate completion.
                              </p>
                            </div>

                            <div className="sm:col-span-5 p-5 rounded-xl bg-[#FAF9F5] border border-black/[0.08] space-y-2.5 shadow-sm">
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-neutral-500 uppercase">Readiness Score</span>
                                <span className="font-bold text-neutral-900 text-sm">94 / 100</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-mono border-t border-black/[0.06] pt-2">
                                <span className="text-neutral-500 uppercase">Off-Market Match</span>
                                <span className="font-bold text-neutral-900">2 Assets</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-mono border-t border-black/[0.06] pt-2">
                                <span className="text-neutral-500 uppercase">Action Path</span>
                                <span className="font-bold text-emerald-800">Broker Handover</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Qualified in 14 seconds</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">CONSULTATION RECOMMENDED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 3: Response Ready */}
                    {speedStage === 3 && (
                      <motion.div
                        key="s-3"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-black/[0.09] space-y-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.08] pb-3">
                            <span className="text-neutral-700 font-bold uppercase tracking-wider">
                              OUTBOUND CLIENT MEMORANDUM & PROSPECTUS
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">DISPATCH SPEED</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">28 SECONDS</span>
                            </div>
                          </div>

                          <div className="p-5 sm:p-6 rounded-xl bg-[#FFFFFF] border border-black/[0.08] text-base sm:text-lg text-[#0A0D14] leading-relaxed font-normal shadow-sm space-y-3">
                            <p>
                              “Dear Sarah, we have curated two off-market 3-bedroom residences in Dubai Marina within your £750k allocation. I have attached the confidential prospectus and reserved viewing windows with our Senior Broker.”
                            </p>
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] flex items-center justify-between text-xs font-mono text-neutral-600">
                              <span>ATTACHMENT: MARINA-PROSPECTUS-V2.PDF</span>
                              <span className="text-neutral-800 font-semibold">4.8 MB · CONFIDENTIAL</span>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Available slots: Tomorrow 10:00 AM · 14:30 PM</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">DISPATCHED VIA TLS</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 4: Sales Handover */}
                    {speedStage === 4 && (
                      <motion.div
                        key="s-4"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.08] pb-3">
                            <span className="text-neutral-700 font-bold uppercase tracking-wider flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                              SENIOR NEGOTIATOR HANDOVER
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">CALENDAR</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">CONFIRMED</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14] tracking-tight">
                              Senior Broker Richard Cole Briefed
                            </div>
                            <p className="text-base text-neutral-600 leading-relaxed font-normal">
                              HubSpot deal record created with £750k pipeline value. Client requirements dossier attached and 10:00 AM consultation reserved on director calendar.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">CRM Deal</span>
                              <span className="font-semibold text-neutral-800">HubSpot #9841</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Consultation</span>
                              <span className="font-semibold text-neutral-800">10:00 AM Tomorrow</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Lead Decay</span>
                              <span className="font-semibold text-emerald-800">Zero Seconds</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Total cycle time: 42 seconds</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">100% RELATIONSHIP RETAINED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom Physical Stepper */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {["Enquiry", "Understood", "Qualified", "Response", "Handover"].map((label, idx) => (
                      <button
                        key={label}
                        onClick={() => {
                          setSpeedAutoPlay(false);
                          setSpeedStage(idx);
                        }}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                          speedStage === idx
                            ? "bg-white text-slate-900 font-bold"
                            : "text-slate-400 hover:text-white bg-white/[0.03]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">
                    ILLUSTRATIVE DEMONSTRATION
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* =========================================================================
            FLAGSHIP 02 — AI MARKETING SYSTEM™
            Composition: Large Visual on Left (7 Cols), Text on Right (5 Cols)
            Object is the Hero: The Campaign Brief & Large Creative Deliverable
        ========================================================================= */}
        <div className="py-16 sm:py-24 lg:py-28 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left: Dominant Campaign Canvas (7 Cols) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0C1022] via-[#090C18] to-[#060810] p-5 sm:p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/[0.08] min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
                
                {/* Visual Transformation Stream */}
                <div className="py-6 flex-1 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    
                    {/* STAGE 0: The Campaign Brief */}
                    {mktStage === 0 && (
                      <motion.div
                        key="mkt-0"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.08] pb-3">
                            <span className="text-neutral-700 font-bold uppercase tracking-wider">
                              EXECUTIVE CAMPAIGN MANDATE
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">REF</span>
                              <span className="text-xs font-mono font-semibold text-neutral-800">#MKT-892 · Q3 MANDATE</span>
                            </div>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Investment Committee Direct Mandate</span>
                            <blockquote
                              className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#0A0D14] tracking-tight leading-snug"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              “Position the firm's private equity practice around mid-market secondary liquidity, addressing LP governance concerns.”
                            </blockquote>
                          </div>

                          <div className="pt-3.5 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-neutral-500 gap-2">
                            <span>Target: 420 Institutional Allocators & Family Offices</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">INTELLIGENCE PIPELINE INITIALIZED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 1: Insight */}
                    {mktStage === 1 && (
                      <motion.div
                        key="mkt-1"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.08] pb-3">
                            <span className="text-neutral-700 font-bold uppercase tracking-wider">
                              RESEARCH & AUDIENCE INSIGHT
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">CORPUS</span>
                              <span className="text-xs font-mono font-semibold text-neutral-800">18 WHITEPAPERS</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Synthesised Allocator Friction</span>
                            <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14] tracking-tight">
                              Primary Friction: Valuation Opacity & Covenant Ambiguity
                            </div>
                            <p className="text-base text-neutral-600 leading-relaxed font-normal pt-1">
                              Analysis of 18 institutional whitepapers indicates LPs require explicit covenant auditability before approving secondary fund transfers. Content must read with institutional rigor and partner-grade depth.
                            </p>
                          </div>

                          <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Tone Profile: Institutional Advisory · Zero Marketing Hyperbole</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">STRATEGY CALIBRATED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 2: Dominant Creative Deliverables (2-3 Attractive Visual Previews) */}
                    {mktStage === 2 && (
                      <motion.div
                        key="mkt-2"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                            <span className="uppercase tracking-widest text-neutral-700 font-bold">
                              CALIBRATED CREATIVE DELIVERABLES
                            </span>
                            <span className="text-neutral-500 text-[11px]">PARTNER GRADE · 2 ARTEFACTS</span>
                          </div>

                          {/* 2 Visual Asset Previews */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Asset 01: Executive Advisory Memorandum */}
                            <div className="p-5 sm:p-6 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-2.5 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                                ASSET 01 · ADVISORY MEMO
                              </span>
                              <div className="text-base sm:text-lg font-bold text-[#0A0D14] tracking-tight leading-snug">
                                Navigating Mid-Market Secondary Liquidity
                              </div>
                              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                                “As liquidity timelines lengthen, allocators adopt structured secondary vehicles with heightened emphasis on covenant transparency...”
                              </p>
                              <div className="pt-2 text-[10px] font-mono text-neutral-500 flex items-center justify-between border-t border-black/[0.06]">
                                <span>3,400 words</span>
                                <span className="text-emerald-800 font-semibold">Voice: Certified</span>
                              </div>
                            </div>

                            {/* Asset 02: Institutional Briefing Deck */}
                            <div className="p-5 sm:p-6 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-2.5 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                                ASSET 02 · LP BRIEFING DECK
                              </span>
                              <div className="text-base sm:text-lg font-bold text-[#0A0D14] tracking-tight leading-snug">
                                Secondary Allocation Framework 2026
                              </div>
                              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                                12 executive presentation slides with data charts mapping debt maturities, liquidity discounts, and GP-led structures.
                              </p>
                              <div className="pt-2 text-[10px] font-mono text-neutral-500 flex items-center justify-between border-t border-black/[0.06]">
                                <span>12 Keynote Slides</span>
                                <span className="text-emerald-800 font-semibold">Brand: Aligned</span>
                              </div>
                            </div>
                          </div>

                          {/* Asset 03: Executive Summary Bar */}
                          <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-black/[0.07] flex items-center justify-between text-xs">
                            <span className="font-mono text-neutral-500">ASSET 03: Partner Commentary One-Pager</span>
                            <span className="text-neutral-800 font-semibold">Prepared for Bloomberg / FT Op-Ed</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 3: Human Review (Prominent Sign-Off Moment) */}
                    {mktStage === 3 && (
                      <motion.div
                        key="mkt-3"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                            <span className="uppercase tracking-widest text-emerald-800 font-bold flex items-center gap-2">
                              <UserCheck className="w-4 h-4 text-emerald-700" />
                              MANDATORY HUMAN REVIEW GATE
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">GOVERNANCE</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">PARTNER ACCREDITED</span>
                            </div>
                          </div>

                          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-black/[0.08] space-y-3 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300/80 flex items-center justify-center">
                                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                                </div>
                                <div>
                                  <div className="text-base sm:text-lg font-bold text-[#0A0D14]">Signed Off by Practice Partner</div>
                                  <span className="text-xs font-mono text-neutral-500">Richard Cole · Managing Partner</span>
                                </div>
                              </div>
                              <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200/80 font-semibold hidden sm:inline-block">
                                APPROVED FOR RELEASE
                              </span>
                            </div>
                            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                              All regulatory assertions verified against firm disclosure policies. Zero autonomous syndication without senior executive sign-off.
                            </p>
                            <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                              <span>Audit Signature: #STRAT-SIGN-8849</span>
                              <span className="text-neutral-700">Timestamp: 11:24 GMT</span>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Human governance preserved at every stage</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">AUDIT ARCHIVE SAVED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 4: Ready to Execute */}
                    {mktStage === 4 && (
                      <motion.div
                        key="mkt-4"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                            <span className="uppercase tracking-widest text-neutral-700 font-bold">
                              CAMPAIGN SUITE READY
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">STATUS</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">EXECUTION READY</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14] tracking-tight">
                              Multi-Touch Campaign Scheduled
                            </div>
                            <p className="text-base text-neutral-600 leading-relaxed font-normal">
                              Executive Memorandum, LP Briefing Deck, and 4-Part Partner Nurture queued for investor distribution across verified allocator directories.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Private LP Dispatch</span>
                              <span className="font-semibold text-neutral-800">180 Allocators</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Editorial Suite</span>
                              <span className="font-semibold text-neutral-800">FT / Bloomberg</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Compliance Log</span>
                              <span className="font-semibold text-emerald-800">Full Provenance</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Zero unmonitored syndication</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">DEPLOYMENT QUEUED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom Stepper */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {["Brief", "Insight", "Creative", "Review", "Ready"].map((lbl, i) => (
                      <button
                        key={lbl}
                        onClick={() => setMktStage(i)}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                          mktStage === i
                            ? "bg-white text-slate-900 font-bold"
                            : "text-slate-400 hover:text-white bg-white/[0.03]"
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">
                    ILLUSTRATIVE DEMONSTRATION
                  </span>
                </div>

              </div>
            </div>

            {/* Right: Editorial Context (5 Cols) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-7 order-1 lg:order-2">
              <div className="space-y-2.5 sm:space-y-3">
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block">
                  SYSTEM 02
                </span>
                <h3
                  className="text-2xl sm:text-4xl lg:text-[52px] font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  AI Marketing System™
                </h3>
                <p className="text-lg sm:text-2xl text-blue-300 font-medium tracking-tight">
                  Focus marketing budget on campaigns that convert.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Marketing teams spend days drafting content that rarely converts. AI tracks market trends, writes campaigns in your brand voice, and prepares them for partner sign-off.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="min-h-[48px] px-5 py-2.5 rounded-full bg-white text-[#06080F] hover:bg-slate-100 font-semibold text-sm inline-flex items-center gap-2 transition-all cursor-pointer group"
                >
                  <span>Discuss AI Marketing</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* =========================================================================
            FLAGSHIP 03 — STAFF TRAINING (WORKFORCE INTELLIGENCE PLATFORM™)
            Composition: VISUAL DOMINANT ACROSS THE CENTRE WITH TEXT ABOVE & BELOW!
            Primary Commercial Idea: YOUR KNOWLEDGE → YOUR TRAINING → YOUR PEOPLE
        ========================================================================= */}
        <div className="py-16 sm:py-28 lg:py-36 border-t border-white/[0.08]">
          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
            
            {/* Center Text Above */}
            <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block">
                SYSTEM 03 · STAFF TRAINING
              </span>
              <h3
                className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Workforce Intelligence Platform™
              </h3>
              <p className="text-lg sm:text-2xl text-blue-300 font-medium tracking-tight">
                Your knowledge → Your training → Your people.
              </p>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                Train and onboard your team using your company's own procedures, policies, and operational standards.
              </p>
            </div>

            {/* Giant Centered Visual Canvas */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0C1022] via-[#090C18] to-[#060810] p-5 sm:p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/[0.08] min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
              
              <div className="py-6 flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  
                  {/* STAGE 0: Staff Onboarding & Policy Manual */}
                  {wfStage === 0 && (
                    <motion.div
                      key="wf-0"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                        <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                          <span className="text-neutral-700 uppercase tracking-widest font-bold flex items-center gap-2">
                            <FileText className="w-4 h-4 text-neutral-800" />
                            STAFF ONBOARDING SPECIFICATION
                          </span>
                          <div className="text-right">
                            <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">SPECIFICATION</span>
                            <span className="text-xs font-mono font-semibold text-neutral-800">48 PAGES · AUDITED</span>
                          </div>
                        </div>

                        <div className="space-y-2 pt-1">
                          <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14] tracking-tight">
                            Commercial Governance & Staff Onboarding Manual (v4.2)
                          </div>
                          <p className="text-base text-neutral-600 leading-relaxed font-normal">
                            Converts your company's operational rules, signing authorities, client handling standards, and escalation protocols into guided onboarding journeys.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                            <span className="text-neutral-500 block text-[10px] uppercase">Target Roles</span>
                            <span className="font-semibold text-neutral-800">Commercial & Support</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                            <span className="text-neutral-500 block text-[10px] uppercase">Governance</span>
                            <span className="font-semibold text-neutral-800">ISO-Aligned SOPs</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                            <span className="text-neutral-500 block text-[10px] uppercase">Velocity</span>
                            <span className="font-semibold text-emerald-800">Accelerated Ramp</span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span>Procedural manual structured for active employee practice</span>
                          <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">ACTIVE BLUEPRINT</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 1: Structured Knowledge to Practical Training */}
                  {wfStage === 1 && (
                    <motion.div
                      key="wf-1"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="p-7 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                        <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                          <span className="text-neutral-700 uppercase tracking-widest font-bold">
                            STRUCTURED KNOWLEDGE → PRACTICAL TRAINING
                          </span>
                          <div className="text-right">
                            <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">INDEX</span>
                            <span className="text-xs font-mono font-semibold text-neutral-800">PROVENANCE LINKED</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14] tracking-tight">
                            Operational Rules Converted into Interactive Learning Paths
                          </div>
                          <p className="text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                            Instead of dense PDFs that employees rarely read, your operational procedures become structured practice modules, interactive walk-throughs, and role-specific standards.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1.5 shadow-sm">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block font-bold">Core Knowledge · SOP 3.4</span>
                            <div className="text-base font-bold text-[#0A0D14]">Contract SOPs & Retention Rules</div>
                            <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                              Notice periods, discount recovery rules, and discretionary retention allowances.
                            </p>
                            <div className="pt-2 text-[10px] font-mono text-neutral-400 border-t border-black/[0.06]">
                              Provenance: Commercial Policy Manual · Page 23
                            </div>
                          </div>

                          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1.5 shadow-sm">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block font-bold">Practice Path · Protocol 2.1</span>
                            <div className="text-base font-bold text-[#0A0D14]">Interactive Scenario Modules</div>
                            <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                              Step-by-step role simulations for handling contract revisions and client retention.
                            </p>
                            <div className="pt-2 text-[10px] font-mono text-neutral-400 border-t border-black/[0.06]">
                              Provenance: Client Retention Standards · Page 41
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span>Zero abstract theory · 100% company-specific procedures</span>
                          <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">ACTIVE INDEX</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 2: Realistic Scenario & Guided Decision */}
                  {wfStage === 2 && (
                    <motion.div
                      key="wf-2"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                        <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                          <span className="text-neutral-700 uppercase tracking-widest font-bold">
                            REALISTIC SCENARIO & SYSTEM GUIDANCE
                          </span>
                          <div className="text-right">
                            <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">COMPLIANCE</span>
                            <span className="text-xs font-mono font-semibold text-emerald-800">100% POLICY MATCH</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Practice Scenario:</span>
                          <blockquote
                            className="text-xl sm:text-2xl font-medium text-[#0A0D14] tracking-tight leading-snug"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            “A customer asks to cancel their contract before the agreed term due to budget changes.”
                          </blockquote>
                        </div>

                        <div className="p-5 sm:p-6 rounded-xl bg-[#FAF9F5] border border-black/[0.08] space-y-3 shadow-sm">
                          <div className="flex items-center justify-between text-xs font-mono border-b border-black/[0.06] pb-2">
                            <span className="font-bold text-[#0A0D14] text-sm">System Guidance (Company SOP 3.4)</span>
                            <span className="text-neutral-600 font-semibold">Clause 3.4</span>
                          </div>
                          <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                            Guide employee through empathetic de-escalation, review contract tenure, present approved 60-day pause alternative, and isolate escalation boundaries before fee enforcement.
                          </p>
                          <div className="pt-2 text-xs font-mono text-neutral-500 border-t border-black/[0.06] flex items-center justify-between">
                            <span>Source: Customer Service Standards v4.2 · Page 23</span>
                            <span className="text-emerald-800 font-semibold">Approved Protocol</span>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span>Employee learns to navigate sensitive situations safely</span>
                          <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">POLICY COMPLIANT</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 3: Assessment & Ongoing Reinforcement */}
                  {wfStage === 3 && (
                    <motion.div
                      key="wf-3"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="p-7 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                        <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                          <span className="text-neutral-700 uppercase tracking-widest font-bold">
                            ASSESSMENT & CONTINUOUS REINFORCEMENT
                          </span>
                          <div className="text-right">
                            <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">STATUS</span>
                            <span className="text-xs font-mono font-semibold text-emerald-800">VERIFIED RETENTION</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14] tracking-tight">
                            Better Prepared Teams with Verified Retention
                          </div>
                          <p className="text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                            Team members complete guided scenario assessments with instant feedback. Knowledge gaps are surfaced and reinforced continuously, ensuring consistent service quality and compliance.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                          <div className="p-3 rounded-lg bg-[#FFFFFF] border border-black/[0.07] text-xs font-mono text-center">
                            <span className="text-neutral-500 block text-[10px] uppercase">Scenario</span>
                            <span className="font-semibold text-emerald-800">✓ 100% Passed</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#FFFFFF] border border-black/[0.07] text-xs font-mono text-center">
                            <span className="text-neutral-500 block text-[10px] uppercase">Comprehension</span>
                            <span className="font-semibold text-neutral-800">Retention Confirmed</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#FFFFFF] border border-black/[0.07] text-xs font-mono text-center">
                            <span className="text-neutral-500 block text-[10px] uppercase">Next Cycle</span>
                            <span className="font-semibold text-neutral-700">14-Day Refresher</span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span>Safe practice environment before real client interactions</span>
                          <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">ACCREDITATION LOGGED</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Bottom Stepper */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {["Onboarding", "Knowledge", "Scenario", "Assessment"].map((lbl, idx) => (
                    <button
                      key={lbl}
                      onClick={() => setWfStage(idx)}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                        wfStage === idx
                          ? "bg-white text-slate-900 font-bold"
                          : "text-slate-400 hover:text-white bg-white/[0.03]"
                      }`}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>

                <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">
                  PRACTICAL STAFF TRAINING
                </span>
              </div>

            </div>

            {/* Center Text Below & CTA */}
            <div className="text-center pt-4 space-y-3">
              <p className="text-xs sm:text-sm text-slate-400">
                “This helps businesses train and onboard their staff using their own real-world policies and procedures.”
              </p>
              <div>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer group"
                >
                  <span>Discuss Staff Training Platform</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* =========================================================================
            FLAGSHIP 04 — AI RECEPTIONIST™
            Composition: Visual on Left (7 Cols), Text on Right (5 Cols)
            Object is the Hero: Large Conversational Soundstage & Large Dialogue
        ========================================================================= */}
        <div className="py-16 sm:py-24 lg:py-28 border-t border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            {/* Left: Dominant Conversational Scene (7 Cols) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0C1022] via-[#090C18] to-[#060810] p-5 sm:p-10 lg:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/[0.08] min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
                
                {/* Visual Narrative */}
                <div className="py-6 flex-1 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    
                    {/* STAGE 0: The Inbound Customer Call */}
                    {recStage === 0 && (
                      <motion.div
                        key="rec-0"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                            <span className="text-neutral-700 uppercase tracking-widest font-bold flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                              INBOUND CALL INTAKE
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">TELEPHONY</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">0.0s LATENCY · ACTIVE</span>
                            </div>
                          </div>

                          <div className="space-y-2 pt-1">
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block font-semibold">CUSTOMER:</span>
                            <blockquote
                              className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#0A0D14] tracking-tight leading-snug"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              “Hi, I need to book an appointment with the specialist.”
                            </blockquote>
                          </div>

                          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/[0.07] flex items-center justify-between text-xs font-mono text-neutral-600">
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                              Natural conversational voice stream
                            </span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">REAL-TIME INTAKE</span>
                          </div>

                          <div className="pt-2 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Zero hold music · Instant acoustic comprehension</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">SUB-SECOND PARSING</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 1: System Understands */}
                    {recStage === 1 && (
                      <motion.div
                        key="rec-1"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                            <span className="text-neutral-700 uppercase tracking-widest font-bold">
                              SYSTEM UNDERSTANDS
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">EXTRACTED</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">100% INTENT CONFIDENCE</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider font-semibold">Intent</span>
                              <span className="text-lg font-bold text-[#0A0D14] block">Appointment</span>
                              <span className="text-xs text-neutral-600 block">Consultation booking</span>
                            </div>
                            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider font-semibold">Provider</span>
                              <span className="text-lg font-bold text-[#0A0D14] block">Specialist</span>
                              <span className="text-xs text-neutral-600 block">Senior clinician diary</span>
                            </div>
                            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-black/[0.08] space-y-1 shadow-sm">
                              <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider font-semibold">Preference</span>
                              <span className="text-lg font-bold text-[#0A0D14] block">Thursday Afternoon</span>
                              <span className="text-xs text-neutral-600 block">Target window</span>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-black/[0.08] text-sm text-[#0A0D14] leading-relaxed shadow-sm font-normal">
                            “Certainly. I can check our specialist's diary for this Thursday afternoon. One moment while I query available consulting windows.”
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Calendar availability queried in 180ms</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">DIARY MATCHED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 2: Available & Confirmed */}
                    {recStage === 2 && (
                      <motion.div
                        key="rec-2"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                            <span className="text-neutral-700 uppercase tracking-widest font-bold flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                              APPOINTMENT CONFIRMED
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">STATUS</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">CONFIRMED</span>
                            </div>
                          </div>

                          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-black/[0.08] space-y-3 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block font-semibold">AVAILABLE WINDOW:</span>
                                <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14]">Thursday at 14:30</div>
                              </div>
                              <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/80 font-bold">
                                CONFIRMED
                              </span>
                            </div>

                            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                              “We have 14:30 available this Thursday with Dr. Cole. I have reserved that slot and sent confirmation details directly to your mobile.”
                            </p>

                            <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                              <span>Booking Reference: #CLINIC-8820</span>
                              <span className="text-neutral-800 font-semibold">SMS Confirmation: Sent</span>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Zero hold time · Total conversational booking: 24 seconds</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">SCHEDULE LOCKED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 3: Staff Notified */}
                    {recStage === 3 && (
                      <motion.div
                        key="rec-3"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-black/[0.09] space-y-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.08)] text-[#0A0D14]">
                          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 text-xs font-mono">
                            <span className="text-neutral-700 uppercase tracking-widest font-bold flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                              STAFF NOTIFIED & DIARY SYNCHRONISED
                            </span>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">PRACTICE TEAM</span>
                              <span className="text-xs font-mono font-semibold text-emerald-800">ALERT DISPATCHED</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-2xl sm:text-3xl font-bold text-[#0A0D14] tracking-tight">
                              Practice Reception & Specialist Notified
                            </div>
                            <p className="text-base text-neutral-600 leading-relaxed font-normal">
                              Patient appointment dossier added to practice management calendar with pre-filled consultation notes. Reception desk briefed with zero administrative delay.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Specialist Calendar</span>
                              <span className="font-semibold text-neutral-800">Thursday 14:30 Locked</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Reception Desk</span>
                              <span className="font-semibold text-neutral-800">Patient Dossier Synced</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FAF9F5] border border-black/[0.07] text-xs font-mono text-center">
                              <span className="text-neutral-500 block text-[10px] uppercase">Patient Experience</span>
                              <span className="font-semibold text-emerald-800">100% Warm Touch</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                            <span>Zero dropped calls · 100% appointment retention</span>
                            <span className="text-neutral-800 font-semibold uppercase tracking-wider text-[10px]">PRACTICE READY</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom Stepper */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {["Customer", "Understood", "Confirmed", "Staff Notified"].map((lbl, idx) => (
                      <button
                        key={lbl}
                        onClick={() => setRecStage(idx)}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                          recStage === idx
                            ? "bg-white text-slate-900 font-bold"
                            : "text-slate-400 hover:text-white bg-white/[0.03]"
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">
                    ILLUSTRATIVE DEMONSTRATION
                  </span>
                </div>

              </div>
            </div>

            {/* Right: Editorial Context (5 Cols) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-7 order-1 lg:order-2">
              <div className="space-y-2.5 sm:space-y-3">
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase block">
                  SYSTEM 04
                </span>
                <h3
                  className="text-2xl sm:text-4xl lg:text-[52px] font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  AI Receptionist™
                </h3>
                <p className="text-lg sm:text-2xl text-blue-300 font-medium tracking-tight">
                  Every caller speaks with an intelligent assistant.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Customers hang up when calls go to voicemail or complicated phone menus. AI answers immediately, takes down details accurately, and books appointments directly into your calendar.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="min-h-[48px] px-5 py-2.5 rounded-full bg-white text-[#06080F] hover:bg-slate-100 font-semibold text-sm inline-flex items-center gap-2 transition-all cursor-pointer group"
                >
                  <span>Discuss AI Receptionist</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
