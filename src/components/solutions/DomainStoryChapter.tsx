import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, PhoneCall, BrainCircuit } from "lucide-react";

export const DomainStoryChapters: React.FC = () => {
  // Domain 01: Revenue & Sales Evolution Stage (0: Raw Enquiry, 1: Understand & Qualify, 2: Sales Handover)
  const [revStage, setRevStage] = useState<number>(0);

  // Domain 02: Marketing & Growth (0: Campaign Brief, 1: Insight Thesis, 2: Editorial Creative Ready)
  const [mktStage, setMktStage] = useState<number>(1);

  // Domain 03: Operations & Automation (0: Supplier Contract Received, 1: Exception Checked, 2: Approved & Recorded)
  const [opsStage, setOpsStage] = useState<number>(1);

  // Domain 04: Staff Training (0: Raw SOP Manual, 1: Interactive Scenario, 2: Verification Complete)
  const [trainStage, setTrainStage] = useState<number>(1);

  // Domain 05: Customer Operations (0: Inbound Call, 1: Intent & Routing, 2: Confirmed Diary Action)
  const [custStage, setCustStage] = useState<number>(1);

  // Domain 06: Decision Intelligence (0: Scattered Signals, 1: Reconciliation, 2: Executive Decision Memo)
  const [decStage, setDecStage] = useState<number>(1);

  return (
    <div className="w-full">
      
      {/* =========================================================================
          CHAPTER 01 — REVENUE & SALES
          Primary Visual: ONE LARGE CUSTOMER ENQUIRY (Sarah Mitchell)
          Transformation: UNDERSTAND → QUALIFY → FOLLOW UP → SALES
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                CHAPTER 01
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Revenue &amp; Sales
              </h2>
              <p className="text-2xl text-blue-300 font-medium tracking-tight pt-1">
                Capture. Qualify. Follow up.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Responding to new opportunities within minutes transforms qualification rates. Stratision designs revenue agents that evaluate incoming buyer intent, prepare context-aware responses, and deliver qualified buyers directly to your senior sales team.
            </p>

            <div className="pt-2">
              <Link
                to="/solutions/revenue-sales"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors group cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Explore Revenue &amp; Sales</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: One Large Customer Enquiry Evolving (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] p-8 sm:p-12 border border-white/[0.08] shadow-2xl space-y-6 min-h-[420px] flex flex-col justify-between">
              
              {/* Stage Selector Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-4 text-slate-400">
                  <button
                    onClick={() => setRevStage(0)}
                    className={`cursor-pointer transition-colors ${revStage === 0 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    01 // ENQUIRY
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setRevStage(1)}
                    className={`cursor-pointer transition-colors ${revStage === 1 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    02 // QUALIFY
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setRevStage(2)}
                    className={`cursor-pointer transition-colors ${revStage === 2 ? "text-emerald-400 font-bold" : "hover:text-white"}`}
                  >
                    03 // SALES HANDOVER
                  </button>
                </div>
                <span className="text-slate-500 hidden sm:inline">Sub-60s Execution</span>
              </div>

              {/* Dominant Visual Object */}
              <div className="flex-1 flex flex-col justify-center py-4">
                <AnimatePresence mode="wait">
                  {revStage === 0 && (
                    <motion.div
                      key="rev-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        SARAH MITCHELL · PRIME RESIDENTIAL SEARCH · 10:42 PM
                      </div>
                      <blockquote
                        className="text-2xl sm:text-4xl font-medium text-white tracking-tight leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        “I’m looking for a 3-bed property in Dubai Marina around £750k.”
                      </blockquote>
                      <p className="text-xs font-mono text-blue-400">
                        Zero latency ingestion · Web &amp; WhatsApp channel
                      </p>
                    </motion.div>
                  )}

                  {revStage === 1 && (
                    <motion.div
                      key="rev-1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-blue-400 uppercase font-bold">
                          INTENT EVALUATED &amp; QUALIFIED
                        </span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                          Score: 94 / 100
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-2">
                        <div className="border-l-2 border-blue-400 pl-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">Asset Target</span>
                          <div className="text-base font-bold text-white">3-Bed Residence</div>
                          <span className="text-xs text-slate-400">Dubai Marina</span>
                        </div>
                        <div className="border-l-2 border-blue-400 pl-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">Budget</span>
                          <div className="text-base font-bold text-white">£750,000</div>
                          <span className="text-xs text-slate-400">Cash / Verified</span>
                        </div>
                        <div className="border-l-2 border-blue-400 pl-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">Timeline</span>
                          <div className="text-base font-bold text-white">&lt; 60 Days</div>
                          <span className="text-xs text-slate-400">Immediate Viewing</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {revStage === 2 && (
                    <motion.div
                      key="rev-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>QUALIFIED SALES CALENDAR RESERVED</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        Appointment Confirmed: Thursday 11:30 AM
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Pre-briefed investment pack dispatched to Sarah Mitchell. Senior Property Partner notified via CRM with matched off-market Marina penthouses attached.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Flagship: Speed-to-Lead Agent™</span>
                <button
                  onClick={() => setRevStage((prev) => (prev + 1) % 3)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer font-mono"
                >
                  Advance Stage →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          CHAPTER 02 — MARKETING & GROWTH
          Primary Visual: ONE LARGE CAMPAIGN BRIEF & STRATEGY MEMO
          Transformation: RESEARCH → INSIGHT → CREATIVE → REVIEW → READY
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                CHAPTER 02
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Marketing &amp; Growth
              </h2>
              <p className="text-2xl text-blue-300 font-medium tracking-tight pt-1">
                Research. Create. Execute.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              High-value marketing demands deep market intelligence and editorial precision. Stratision builds automated research, creative asset drafting, and campaign review pipelines grounded in your firm’s brand voice and compliance boundaries.
            </p>

            <div className="pt-2">
              <Link
                to="/solutions/marketing-growth"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors group cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Explore Marketing &amp; Growth</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: One Large Campaign Brief & Editorial Asset Preview (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] p-8 sm:p-12 border border-white/[0.08] shadow-2xl space-y-6 min-h-[420px] flex flex-col justify-between">
              
              {/* Pipeline Sequence */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
                  <button
                    onClick={() => setMktStage(0)}
                    className={`cursor-pointer transition-colors ${mktStage === 0 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    BRIEF
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setMktStage(1)}
                    className={`cursor-pointer transition-colors ${mktStage === 1 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    INSIGHT
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setMktStage(2)}
                    className={`cursor-pointer transition-colors ${mktStage === 2 ? "text-emerald-400 font-bold" : "hover:text-white"}`}
                  >
                    EDITORIAL READY
                  </button>
                </div>
                <span className="text-slate-500 hidden sm:inline">Executive Thesis</span>
              </div>

              {/* Visual Object: Large Strategic Thesis Memo Preview */}
              <div className="flex-1 flex flex-col justify-center py-3">
                <AnimatePresence mode="wait">
                  {mktStage === 0 && (
                    <motion.div
                      key="mkt-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-3"
                    >
                      <span className="text-xs font-mono text-slate-400 uppercase">
                        CAMPAIGN INITIATION BRIEF · Q3 PRIVATE CAPITAL
                      </span>
                      <div className="text-xl font-bold text-white">
                        “Establish thought leadership in European cross-border infrastructure funds.”
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Ingesting 14 proprietary market reports, 20 regulatory filings, and macroeconomic interest rate forecasts to uncover unique thesis angles.
                      </p>
                    </motion.div>
                  )}

                  {mktStage === 1 && (
                    <motion.div
                      key="mkt-1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-mono text-blue-400 uppercase font-bold">
                        PRIMARY STRATEGIC INSIGHT DISCOVERED
                      </div>
                      <blockquote
                        className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-relaxed"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        “Secondary liquidity in mid-market infrastructure funds has compressed 42%, creating prime opportunities for sovereign balance sheets.”
                      </blockquote>
                      <div className="text-xs text-slate-400 border-l-2 border-blue-400 pl-3">
                        Validated across 8 institutional transactions · Attributed data sources
                      </div>
                    </motion.div>
                  )}

                  {mktStage === 2 && (
                    <motion.div
                      key="mkt-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>EXECUTIVE MEMORANDUM &amp; ASSETS READY</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                        <div className="text-base font-bold text-white">
                          The 2026 Sovereign Asset Allocation Memo
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Complete 1,800-word executive briefing, 4 investor briefing sheets, and omni-channel distribution drafts verified by internal legal boundaries.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Flagship: AI Marketing System™</span>
                <button
                  onClick={() => setMktStage((prev) => (prev + 1) % 3)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer font-mono"
                >
                  Advance Stage →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          CHAPTER 03 — OPERATIONS & AUTOMATION
          Primary Visual: LARGE OPERATIONAL DOCUMENT (Supplier Agreement / Reconciliation)
          Transformation: RECEIVED → CHECKED → EXCEPTION FOUND → APPROVED → RECORDED
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                CHAPTER 03
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Operations &amp; Automation
              </h2>
              <p className="text-2xl text-blue-300 font-medium tracking-tight pt-1">
                Automate the work between people.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Back-office operations often bottleneck around document reconciliation, contract validation, and multi-system data handoffs. Stratision replaces manual keying with autonomous document reasoning and auditable human approval gates.
            </p>

            <div className="pt-2">
              <Link
                to="/solutions/operations-automation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors group cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Explore Operations &amp; Automation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Large Operational Document Transformation (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] p-8 sm:p-12 border border-white/[0.08] shadow-2xl space-y-6 min-h-[420px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
                  <button
                    onClick={() => setOpsStage(0)}
                    className={`cursor-pointer transition-colors ${opsStage === 0 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    RECEIVED
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setOpsStage(1)}
                    className={`cursor-pointer transition-colors ${opsStage === 1 ? "text-amber-400 font-bold" : "hover:text-white"}`}
                  >
                    EXCEPTION FOUND
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setOpsStage(2)}
                    className={`cursor-pointer transition-colors ${opsStage === 2 ? "text-emerald-400 font-bold" : "hover:text-white"}`}
                  >
                    APPROVED
                  </button>
                </div>
                <span className="text-slate-500 hidden sm:inline">Zero Manual Keying</span>
              </div>

              {/* Large Document Object */}
              <div className="flex-1 flex flex-col justify-center py-3">
                <AnimatePresence mode="wait">
                  {opsStage === 0 && (
                    <motion.div
                      key="ops-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase">
                        <span>MASTER LOGISTICS AGREEMENT — SCHEDULE 4</span>
                        <span>PDF · 38 Pages</span>
                      </div>
                      <div className="text-xl font-bold text-white">
                        Multi-Depot Freight Carrier Settlement: £482,000
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Ingested automatically via ERP inbox. Validating line items against bill of lading records and pre-agreed fuel surcharges.
                      </p>
                    </motion.div>
                  )}

                  {opsStage === 1 && (
                    <motion.div
                      key="ops-1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 uppercase font-bold">
                          EXCEPTION ISOLATED · CLAUSE 8.4
                        </span>
                        <span className="text-xs font-mono text-slate-400">Line #14 Variance</span>
                      </div>
                      <blockquote
                        className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        “Carrier applied demurrage surcharge of £18,450. Contract Schedule 4 states port congestion penalties are waived during customs hold.”
                      </blockquote>
                      <div className="text-xs text-slate-300 border-l-2 border-amber-400 pl-3">
                        Discrepancy automatically flagged for Treasury review · £18,450 recovered
                      </div>
                    </motion.div>
                  )}

                  {opsStage === 2 && (
                    <motion.div
                      key="ops-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>CREDIT NOTE ISSUED &amp; APPROVED IN SAP</span>
                      </div>
                      <div className="text-xl font-bold text-white">
                        Reconciled Settlement: £463,550
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Adjusted payment batch queued for settlement. Full provenance trace, source contract citations, and sign-off timestamps recorded.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Deterministic Verification · Zero Telemetry</span>
                <button
                  onClick={() => setOpsStage((prev) => (prev + 1) % 3)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer font-mono"
                >
                  Advance Stage →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          CHAPTER 04 — STAFF TRAINING
          Primary Visual: ONE LARGE STAFF ONBOARDING / SOP DOCUMENT
          Transformation: BUSINESS KNOWLEDGE → TRAINING → SCENARIO → ASSESSMENT → COMPLETE
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                CHAPTER 04
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Staff Training
              </h2>
              <p className="text-2xl text-blue-300 font-medium tracking-tight pt-1">
                Train your team with the knowledge they need.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Static training manuals and compliance slide decks fail to prepare employees for real operational ambiguity. Stratision turns your company’s internal SOPs into interactive coaching environments where staff practice real scenarios and receive instant guidance.
            </p>

            <div className="pt-1">
              <span className="text-xs font-mono text-slate-400 block">
                Flagship system: Workforce Intelligence Platform™
              </span>
            </div>

            <div className="pt-2">
              <Link
                to="/solutions/staff-training"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors group cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Explore Staff Training</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Real SOP Scenario Simulation (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] p-8 sm:p-12 border border-white/[0.08] shadow-2xl space-y-6 min-h-[420px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
                  <button
                    onClick={() => setTrainStage(0)}
                    className={`cursor-pointer transition-colors ${trainStage === 0 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    KNOWLEDGE
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setTrainStage(1)}
                    className={`cursor-pointer transition-colors ${trainStage === 1 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    REAL SCENARIO
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setTrainStage(2)}
                    className={`cursor-pointer transition-colors ${trainStage === 2 ? "text-emerald-400 font-bold" : "hover:text-white"}`}
                  >
                    ASSESSED
                  </button>
                </div>
                <span className="text-slate-500 hidden sm:inline">Role-Based Coaching</span>
              </div>

              {/* Dominant Visual: Interactive Coaching Scenario */}
              <div className="flex-1 flex flex-col justify-center py-3">
                <AnimatePresence mode="wait">
                  {trainStage === 0 && (
                    <motion.div
                      key="train-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-mono text-slate-400 uppercase">
                        COMPANY SOP 14 · CLIENT ESCALATIONS &amp; CONTRACT TERMINATIONS
                      </div>
                      <div className="text-xl font-bold text-white">
                        Standard Operating Procedure Ingested
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Synthesising 80 pages of customer retention policy into an active decision graph for new account managers.
                      </p>
                    </motion.div>
                  )}

                  {trainStage === 1 && (
                    <motion.div
                      key="train-1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-mono text-blue-400 uppercase font-bold">
                        ACTIVE EMPLOYEE SCENARIO
                      </div>
                      <blockquote
                        className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        “A customer asks to cancel their contract before the agreed term.”
                      </blockquote>

                      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                        <div className="text-xs font-mono text-slate-300 font-bold uppercase">
                          WHAT SHOULD YOU DO?
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          The system guides the employee using company SOPs: Verify account term in CRM, offer a 60-day operational pause, and escalate to the Client Director if annual value exceeds £50k.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {trainStage === 2 && (
                    <motion.div
                      key="train-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>TRAINING COMPLETE · COMPETENCE VERIFIED</span>
                      </div>
                      <div className="text-xl font-bold text-white">
                        Account Manager Certification Verified
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Employee successfully navigated negotiation boundaries, adhered to SOP compliance steps, and achieved a 96% retention handling score.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Guided by Company SOPs</span>
                <button
                  onClick={() => setTrainStage((prev) => (prev + 1) % 3)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer font-mono"
                >
                  Advance Stage →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          CHAPTER 05 — CUSTOMER OPERATIONS
          Primary Visual: ONE LARGE CUSTOMER CONVERSATION
          Transformation: UNDERSTAND → ROUTE → ACTION
          Recognition for: Healthcare & Private Clinics, Professional Services, Property
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                CHAPTER 05
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Customer Operations
              </h2>
              <p className="text-2xl text-blue-300 font-medium tracking-tight pt-1">
                Handle the first interaction intelligently.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              High-touch service businesses cannot afford missed calls or robotic IVRs. Stratision engineers intelligent receptionists that answer immediately, evaluate caller needs with natural voice empathy, route urgent matters to staff, and book diary appointments.
            </p>

            <div className="pt-1 text-xs text-slate-400 space-y-1">
              <span className="block text-slate-300 font-medium">Built for licensed service environments:</span>
              <span className="block">Healthcare &amp; Private Clinics · Professional Services · Property</span>
            </div>

            <div className="pt-2">
              <Link
                to="/solutions/customer-operations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors group cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Explore Customer Operations</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Human Conversation Transformation (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] p-8 sm:p-12 border border-white/[0.08] shadow-2xl space-y-6 min-h-[420px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
                  <button
                    onClick={() => setCustStage(0)}
                    className={`cursor-pointer transition-colors ${custStage === 0 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    CALLER
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setCustStage(1)}
                    className={`cursor-pointer transition-colors ${custStage === 1 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    UNDERSTAND &amp; ROUTE
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setCustStage(2)}
                    className={`cursor-pointer transition-colors ${custStage === 2 ? "text-emerald-400 font-bold" : "hover:text-white"}`}
                  >
                    ACTION
                  </button>
                </div>
                <span className="text-slate-500 hidden sm:inline">Human Voice Standard</span>
              </div>

              {/* Dominant Visual: Authentic Caller Interaction */}
              <div className="flex-1 flex flex-col justify-center py-3">
                <AnimatePresence mode="wait">
                  {custStage === 0 && (
                    <motion.div
                      key="cust-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase">
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>INBOUND VOICE INTERACTION · 09:15 AM</span>
                      </div>
                      <blockquote
                        className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        “I'd like to book an appointment with the specialist.”
                      </blockquote>
                      <p className="text-xs text-slate-400">
                        Answered on first ring · Zero hold queue
                      </p>
                    </motion.div>
                  )}

                  {custStage === 1 && (
                    <motion.div
                      key="cust-1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-mono text-blue-400 uppercase font-bold">
                        INTENT PARSED &amp; CLINICAL SCHEDULE MATCHED
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-l-2 border-blue-400 pl-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">Consultant</span>
                          <div className="text-base font-bold text-white">Dr. Aris (Consultant)</div>
                          <span className="text-xs text-slate-400">Private Practice</span>
                        </div>
                        <div className="border-l-2 border-blue-400 pl-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase block">Next Slot</span>
                          <div className="text-base font-bold text-white">Friday 10:00 AM</div>
                          <span className="text-xs text-slate-400">45-min Clinical Intake</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">
                        Patient coordination scope · Strict administrative boundaries · No clinical diagnosis
                      </p>
                    </motion.div>
                  )}

                  {custStage === 2 && (
                    <motion.div
                      key="cust-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>APPOINTMENT SECURED &amp; STAFF NOTIFIED</span>
                      </div>
                      <div className="text-xl font-bold text-white">
                        Appointment Confirmed: Friday 10:00 AM
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        SMS confirmation with clinic directions dispatched to patient. Reception desk diary updated, medical intake questionnaire sent, and clinician schedule reserved.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Flagship: AI Receptionist™</span>
                <button
                  onClick={() => setCustStage((prev) => (prev + 1) % 3)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer font-mono"
                >
                  Advance Stage →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          CHAPTER 06 — DECISION INTELLIGENCE
          Primary Visual: LARGE SCATTERED BUSINESS SIGNALS CONSOLIDATING INTO AN EXECUTIVE BRIEF
          Transformation: SIGNALS → ANALYSIS → EXECUTIVE BRIEF → DECISION
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                CHAPTER 06
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Decision Intelligence
              </h2>
              <p className="text-2xl text-blue-300 font-medium tracking-tight pt-1">
                Turn business information into better decisions.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Executive leadership teams are inundated with dashboards, disconnected spreadsheets, and conflicting reports. Stratision builds decision engines that continuously reconcile operational data, diagnose root causes, and produce plain-language executive syntheses.
            </p>

            <div className="pt-2">
              <Link
                to="/solutions/decision-intelligence"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors group cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Explore Decision Intelligence</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Scattered Signals Transforming into Executive Memo (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] p-8 sm:p-12 border border-white/[0.08] shadow-2xl space-y-6 min-h-[420px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
                <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
                  <button
                    onClick={() => setDecStage(0)}
                    className={`cursor-pointer transition-colors ${decStage === 0 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    SIGNALS
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setDecStage(1)}
                    className={`cursor-pointer transition-colors ${decStage === 1 ? "text-blue-400 font-bold" : "hover:text-white"}`}
                  >
                    ANALYSIS
                  </button>
                  <span>→</span>
                  <button
                    onClick={() => setDecStage(2)}
                    className={`cursor-pointer transition-colors ${decStage === 2 ? "text-emerald-400 font-bold" : "hover:text-white"}`}
                  >
                    DECISION BRIEF
                  </button>
                </div>
                <span className="text-slate-500 hidden sm:inline">Continuous Synthesis</span>
              </div>

              {/* Dominant Visual: Executive Briefing Output */}
              <div className="flex-1 flex flex-col justify-center py-3">
                <AnimatePresence mode="wait">
                  {decStage === 0 && (
                    <motion.div
                      key="dec-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-mono text-slate-400 uppercase">
                        SCATTERED SIGNALS DETECTED ACROSS ENTERPRISE SILOS
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="font-mono text-blue-400 block font-bold">SALES</span>
                          <span className="text-slate-200">DACH conversion down 6.8%</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="font-mono text-blue-400 block font-bold">FINANCE</span>
                          <span className="text-slate-200">Invoice cycle now 47 days</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="font-mono text-blue-400 block font-bold">OPERATIONS</span>
                          <span className="text-slate-200">Carrier fulfillment 91.2%</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="font-mono text-blue-400 block font-bold">MARKETING</span>
                          <span className="text-slate-200">CAC up 14% on paid search</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {decStage === 1 && (
                    <motion.div
                      key="dec-1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="text-xs font-mono text-blue-400 uppercase font-bold">
                        CROSS-FUNCTIONAL ROOT CAUSE RECONCILED
                      </div>
                      <blockquote
                        className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        “Carrier port bottlenecks are delaying product handovers, leading customers to delay invoice approval until physical receipt.”
                      </blockquote>
                      <div className="text-xs text-slate-300 border-l-2 border-blue-400 pl-3">
                        Reconciled 14,000 ledger lines against logistics dispatch manifests.
                      </div>
                    </motion.div>
                  )}

                  {decStage === 2 && (
                    <motion.div
                      key="dec-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>EXECUTIVE ACTION BRIEF DELIVERED</span>
                      </div>
                      <div className="text-xl font-bold text-white">
                        Recommended Action: Renegotiate Q3 Carrier Delivery SLA
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        One-page synthesis sent to CEO and CFO with exact cash flow projection impact (+£340k working capital unlocked in 30 days).
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>One Visual Transformation · Not a Dashboard</span>
                <button
                  onClick={() => setDecStage((prev) => (prev + 1) % 3)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer font-mono"
                >
                  Advance Stage →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
