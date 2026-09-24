import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Users,
  Database,
  Workflow,
  Clock,
  Check,
  ArrowDown
} from "lucide-react";

interface AiTrainingSystemPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const AiTrainingSystemPage: React.FC<AiTrainingSystemPageProps> = ({
  onOpenBooking
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Training & Learning Systems | Stratision Operations";
  }, []);

  return (
    <div className="bg-[#080A10] text-[#F7F8FA] min-h-screen selection:bg-blue-600/30 selection:text-white">
      {/* =====================================================================
          01. DARK EDITORIAL: HERO
      ===================================================================== */}
      <section
        id="ai-training-hero"
        className="relative bg-[#080A10] text-[#F7F8FA] overflow-hidden border-b border-white/[0.07] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:pl-6 xl:pr-8 relative z-10 w-full">
          {/* Monospace Folio Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono mb-5 tracking-[0.15em] text-neutral-400 uppercase select-none">
            <Link to="/" className="hover:text-neutral-200 transition-colors">
              STRATISION
            </Link>
            <span className="text-white/20">/</span>
            <Link to="/systems" className="hover:text-neutral-200 transition-colors">
              SYSTEMS
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-blue-400 font-semibold tracking-[0.16em]">
              AI TRAINING & LEARNING
            </span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-blue-400 mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>OPERATIONAL LEARNING & WORKFORCE ONBOARDING</span>
            </div>

            <h1
              className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-extrabold text-[#F7F8FA] tracking-[-0.035em] leading-[1.05] uppercase m-0 p-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Train people faster without adding another layer of administration.
            </h1>

            <div className="mt-5 sm:mt-6 space-y-4 max-w-3xl">
              <p
                className="text-[18px] sm:text-[20px] text-blue-200/90 font-medium leading-[1.4]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                AI prepares the work. Your people make the decisions.
              </p>
              <p
                className="text-[15px] sm:text-[16.5px] text-neutral-300 font-normal leading-[1.65]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Turn your existing training content, SOPs, and course materials into an operational learning system. We engineer quiet, dedicated platforms that sit directly across your current LMS, HRIS, and documentation repositories — enabling realistic scenario simulations, verified competency assessments, and automated learning operations with strict human instructor sign-off.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="px-7 sm:px-8 py-4 rounded-[8px] bg-[#F7F8FA] hover:bg-white text-[#090B10] font-semibold text-[14.5px] sm:text-[15px] tracking-tight transition-all duration-150 flex items-center justify-center gap-2.5 border border-white/90 shadow-sm cursor-pointer group"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 text-[#090B10]" />
              </button>

              <Link
                to="/industries#dossier-education-training-ld"
                className="px-7 sm:px-8 py-4 rounded-[8px] bg-transparent hover:bg-white/[0.04] border border-white/[0.2] hover:border-white/[0.3] text-neutral-200 hover:text-white font-medium text-[14.5px] sm:text-[15px] tracking-tight transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer group"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>View Education & L&D Dossier</span>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02. WHITE OPERATIONAL PROOF: CALM, APPLE-CLEAN LEARNING DASHBOARD
      ===================================================================== */}
      <section className="bg-[#F8F9FA] text-[#111317] py-20 sm:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Intro */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.16em] text-neutral-500 uppercase select-none mb-3">
              <span className="font-semibold text-neutral-800">LIVE OPERATIONAL DEMONSTRATION</span>
              <span>/</span>
              <span>LEARNING OPERATIONS DESK</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Your people being trained, assessed, and onboarded through a beautifully organized system.
            </h2>
            <p
              className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A clean operational interface showing live learner progression, AI pre-evaluations, and items requiring certified human sign-off.
            </p>
          </div>

          {/* Operational Dashboard Surface */}
          <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-6 sm:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-10">
            {/* Top Operational Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F0F2F5] gap-4">
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-400 font-medium block">
                  SYSTEM OVERVIEW
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Enterprise Academy Operations
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-[4px] bg-[#F1F3F5] text-neutral-600 font-medium">
                    Active Cohort
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-neutral-500 font-mono">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">Active Learners</span>
                  <span className="text-neutral-900 font-semibold text-sm">48 In Progress</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase">System State</span>
                  <span className="text-emerald-700 font-semibold text-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Synchronized
                  </span>
                </div>
              </div>
            </div>

            {/* Metric Tiles (Restrained, no neon, no gradients) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-[8px] bg-[#FBFBFC] border border-[#EFEFEF] space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">
                  Today · Pending Action
                </div>
                <div className="text-3xl font-bold text-neutral-900 tracking-tight font-mono">
                  12
                </div>
                <div className="text-xs text-neutral-600 pt-1">
                  Assessments awaiting instructor review
                </div>
              </div>

              <div className="p-5 rounded-[8px] bg-[#FBFBFC] border border-[#EFEFEF] space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">
                  Learner Attention
                </div>
                <div className="text-3xl font-bold text-neutral-900 tracking-tight font-mono">
                  08
                </div>
                <div className="text-xs text-neutral-600 pt-1">
                  Learners flagged for guided tutor support
                </div>
              </div>

              <div className="p-5 rounded-[8px] bg-[#FBFBFC] border border-[#EFEFEF] space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium">
                  Pathway Completion
                </div>
                <div className="text-3xl font-bold text-neutral-900 tracking-tight font-mono">
                  04
                </div>
                <div className="text-xs text-neutral-600 pt-1">
                  Learners completed full certification pathway
                </div>
              </div>
            </div>

            {/* Split: Recent Activity Tickets + Training Pathways */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              {/* Left Column: Recent Activity (Tickets / Tasks) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#F0F2F5]">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                    Operational Tasks & Submissions
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Live Feed
                  </span>
                </div>

                {/* Ticket Item 1 */}
                <div className="p-4 rounded-[8px] border border-[#EBECEF] hover:border-[#D9DCE1] transition-colors bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900 text-sm">Sarah Jenkins</span>
                      <span className="text-neutral-400 text-xs">·</span>
                      <span className="text-xs text-neutral-600">Compliance Assessment</span>
                    </div>
                    <p className="text-xs text-neutral-500">
                      Customer Escalation Handling · Simulation 04
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#EBF5FF] text-[#0066CC] text-[10.5px] font-mono font-semibold tracking-wide uppercase border border-[#CCE4FF]">
                      AI REVIEW COMPLETE
                    </span>
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#FFF8E6] text-[#B25E00] text-[10.5px] font-mono font-semibold tracking-wide uppercase border border-[#FFE8B3]">
                      HUMAN REVIEW REQUIRED
                    </span>
                  </div>
                </div>

                {/* Ticket Item 2 */}
                <div className="p-4 rounded-[8px] border border-[#EBECEF] hover:border-[#D9DCE1] transition-colors bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900 text-sm">James Wilson</span>
                      <span className="text-neutral-400 text-xs">·</span>
                      <span className="text-xs text-neutral-600">New Starter Programme</span>
                    </div>
                    <p className="text-xs text-neutral-500">
                      Module 4 of 6 (Operational Systems) · 78% complete
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#F4F5F7] text-neutral-600 text-[10.5px] font-mono font-semibold tracking-wide uppercase border border-[#E5E7EB]">
                      IN PROGRESS
                    </span>
                  </div>
                </div>

                {/* Ticket Item 3 */}
                <div className="p-4 rounded-[8px] border border-[#EBECEF] hover:border-[#D9DCE1] transition-colors bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900 text-sm">Amelia Carter</span>
                      <span className="text-neutral-400 text-xs">·</span>
                      <span className="text-xs text-neutral-600">Leadership Certification</span>
                    </div>
                    <p className="text-xs text-neutral-500">
                      Executive Case Study Submission · Ready for Sign-Off
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#FFF8E6] text-[#B25E00] text-[10.5px] font-mono font-semibold tracking-wide uppercase border border-[#FFE8B3]">
                      HUMAN REVIEW REQUIRED
                    </span>
                  </div>
                </div>

                {/* Ticket Item 4 */}
                <div className="p-4 rounded-[8px] border border-[#EBECEF] hover:border-[#D9DCE1] transition-colors bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900 text-sm">Marcus Brody</span>
                      <span className="text-neutral-400 text-xs">·</span>
                      <span className="text-xs text-neutral-600">Operations Onboarding</span>
                    </div>
                    <p className="text-xs text-neutral-500">
                      Warehouse Safety SOP · Certified by Lead Assessor
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#E8F8F0] text-[#0A7A42] text-[10.5px] font-mono font-semibold tracking-wide uppercase border border-[#C6EFD9]">
                      COMPLETED
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Training Pathways Progress */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#F0F2F5]">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                    Active Training Pathways
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Cohort Average
                  </span>
                </div>

                <div className="p-5 rounded-[8px] bg-[#FBFBFC] border border-[#EFEFEF] space-y-4">
                  {/* Pathway 1 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-900">Commercial Sales Academy</span>
                      <span className="font-mono text-neutral-600">82%</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neutral-800 h-1.5 rounded-full" style={{ width: "82%" }} />
                    </div>
                    <span className="text-[11px] text-neutral-500 block">18 participants · 2 assessments pending</span>
                  </div>

                  {/* Pathway 2 */}
                  <div className="space-y-1.5 pt-2 border-t border-[#EBECEF]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-900">Operations Onboarding 2026</span>
                      <span className="font-mono text-neutral-600">64%</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neutral-800 h-1.5 rounded-full" style={{ width: "64%" }} />
                    </div>
                    <span className="text-[11px] text-neutral-500 block">16 new starters · Module 3 in progress</span>
                  </div>

                  {/* Pathway 3 */}
                  <div className="space-y-1.5 pt-2 border-t border-[#EBECEF]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-neutral-900">Regulatory Compliance Annual</span>
                      <span className="font-mono text-neutral-600">91%</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neutral-800 h-1.5 rounded-full" style={{ width: "91%" }} />
                    </div>
                    <span className="text-[11px] text-neutral-500 block">14 participants · Ready for final sign-off</span>
                  </div>
                </div>

                <div className="p-4 rounded-[8px] bg-white border border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-neutral-600">
                  <span>HRIS / LMS Synchronization</span>
                  <span className="text-emerald-700 font-medium">Automatic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03. DARK EDITORIAL: THE STRUCTURAL BOTTLENECK
      ===================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-24 border-b border-white/[0.07]">
        <div className="space-y-3 mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-neutral-400 uppercase select-none">
            <span className="text-neutral-300 font-semibold tracking-[0.16em]">01</span>
            <span className="text-white/20">/</span>
            <span className="text-neutral-400 tracking-[0.14em]">OPERATIONAL REALITY</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Where training operations lose momentum.
          </h2>
          <p
            className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Whether onboarding dozens of new hires or managing commercial academy cohorts, organizations invariably face three structural frictions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-[8px] bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
              <span>FRICTION 01</span>
              <span className="text-neutral-600">//</span>
              <span>ADMINISTRATIVE DELAYS</span>
            </div>
            <h3
              className="text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Enrolment & Onboarding Latency
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Prospective learners or new hires wait days while administrators manually verify prerequisites, send registration paperwork, answer syllabus questions, and set up calendar cohorts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-[8px] bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
              <span>FRICTION 02</span>
              <span className="text-neutral-600">//</span>
              <span>PASSIVE CONTENT</span>
            </div>
            <h3
              className="text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Passive Slides Without Safe Practice
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Traditional compliance and onboarding rely on slides and video modules with generic multiple-choice quizzes. Staff rarely practice realistic conversations before facing live customers or complex operational tasks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-[8px] bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
              <span>FRICTION 03</span>
              <span className="text-neutral-600">//</span>
              <span>MARKING QUEUES</span>
            </div>
            <h3
              className="text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Instructor Marking Bottlenecks
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Senior trainers and assessors spend hours manually evaluating routine written exercises, leaving less time for personal coaching, high-value mentorship, and executive instruction.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04. WHITE PHYSICAL BUSINESS DOCUMENT: CLEAN CORPORATE RECORD
      ===================================================================== */}
      <section className="bg-[#F8F9FA] text-[#111317] py-20 sm:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.16em] text-neutral-500 uppercase select-none mb-3">
              <span className="font-semibold text-neutral-800">PHYSICAL ARTEFACT</span>
              <span>/</span>
              <span>COMPETENCY VERIFICATION DOSSIER</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A real record an L&D department can actually use.
            </h2>
            <p
              className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Every scenario simulation and written assessment is compiled into an audit-ready training record, complete with rubric mapping and draft feedback ready for instructor sign-off.
            </p>
          </div>

          {/* Physical Document Representation */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#FFFFFF] text-[#111317] rounded-[10px] p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#E5E7EB] space-y-6">
              {/* Document Header Bar */}
              <div className="flex items-baseline justify-between border-b border-[#E5E7EB] pb-4 text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                <span className="font-semibold text-neutral-900">ENTERPRISE ACADEMY · COMPETENCY REVIEW</span>
                <span>DOC REF: LND-2026-0841</span>
              </div>

              {/* Core Learner Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Learner</div>
                  <div className="text-base font-bold text-neutral-900">Sarah Jenkins</div>
                  <div className="text-xs text-neutral-500">ID: EMP-9402 · Commercial Operations</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Programme & Assessment</div>
                  <div className="text-base font-bold text-neutral-900">Operations Excellence</div>
                  <div className="text-xs text-neutral-500">Task: Customer Escalation Handling</div>
                </div>
              </div>

              {/* Status Summary Box */}
              <div className="p-4 rounded-[6px] bg-[#F9FAFB] border border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">AI Pre-Review</span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                    Complete (Rubric Matched)
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Instructor Review</span>
                  <span className="font-semibold text-[#B25E00] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    Pending Human Sign-Off
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Recommended Outcome</span>
                  <span className="font-semibold text-neutral-900 mt-0.5 block">
                    Ready for Certification
                  </span>
                </div>
              </div>

              {/* Pre-Evaluated Evidence */}
              <div className="space-y-3 pt-2 text-xs text-neutral-700 border-t border-[#E5E7EB]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block font-medium">
                  Summary Evaluation Drafted by System
                </span>
                <p className="leading-relaxed">
                  Candidate successfully handled the simulated difficult escalation scenario within company policy guidelines. De-escalation technique met Section 4.2 standards; retention proposal aligned with authorised discount schedules (£250 discretionary limit respected).
                </p>
              </div>

              {/* Human Instructor Sign-Off Footnote */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
                <span className="flex items-center gap-1.5 text-neutral-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Final Assessment Authority: Certified Lead Instructor
                </span>
                <span>Canvas LMS Record Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05. DARK EDITORIAL: THE FOUR WORKFLOW CAPABILITIES
      ===================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-24 border-b border-white/[0.07]">
        <div className="space-y-3 mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-neutral-400 uppercase select-none">
            <span className="text-neutral-300 font-semibold tracking-[0.16em]">02</span>
            <span className="text-white/20">/</span>
            <span className="text-neutral-400 tracking-[0.14em]">SYSTEM SPECIFICATIONS</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            How the system supports your learning team.
          </h2>
          <p
            className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            We do not replace your LMS or trainers. We provide a calm operational layer that removes the administrative grind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Pillar 1 */}
          <div className="p-8 sm:p-10 rounded-[8px] bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-blue-400 font-bold">CAPABILITY 01</span>
              <span>SCENARIO ROLE-PLAY</span>
            </div>
            <h3
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Interactive Scenario Simulation
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Simulates realistic client conversations, difficult objections, compliance incidents, and technical triage. Learners speak or type in natural dialogue and receive constructive guidance grounded directly in company policy.
            </p>
            <div className="space-y-2 text-xs text-neutral-300 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Customer objection handling & sales negotiation practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>HR disciplinary & management difficult conversation practice</span>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 sm:p-10 rounded-[8px] bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-blue-400 font-bold">CAPABILITY 02</span>
              <span>KNOWLEDGE RETRIEVAL</span>
            </div>
            <h3
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Curriculum & Syllabus Knowledge Assistant
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              A private, grounded assistant for learners that answers questions 24/7 with exact page-level citations to approved course materials, textbooks, and company handbooks. Zero hallucination; zero unverified answers.
            </p>
            <div className="space-y-2 text-xs text-neutral-300 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant citation-backed answers to complex technical questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero model retraining on external data; strict internal grounding</span>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 sm:p-10 rounded-[8px] bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-blue-400 font-bold">CAPABILITY 03</span>
              <span>ASSESSMENT SUPPORT</span>
            </div>
            <h3
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Assessment Pre-Evaluation & Rubric Scoring
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Ingests written assignments, case study submissions, and technical exercises. Maps student work directly against accredited grading rubrics and prepares detailed, constructive feedback for human instructor approval.
            </p>
            <div className="space-y-2 text-xs text-neutral-300 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standardized rubric alignment across multi-marker teams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Human instructor retains 100% final grading and accreditation authority</span>
              </div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 sm:p-10 rounded-[8px] bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-blue-400 font-bold">CAPABILITY 04</span>
              <span>OPERATIONS & ENROLMENT</span>
            </div>
            <h3
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Admissions & Onboarding Operations
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Speed-to-lead qualification for course brochure downloads and admissions enquiries. Verifies prerequisite qualifications, collects registration documents, schedules cohorts, and issues digital certificates upon completion.
            </p>
            <div className="space-y-2 text-xs text-neutral-300 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-60s qualification and admissions consultation booking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automated prerequisite and ID verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          06. WHITE OPERATIONAL WORKFLOW: ELEGANT HUMAN-IN-THE-LOOP
      ===================================================================== */}
      <section className="bg-[#F8F9FA] text-[#111317] py-20 sm:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.16em] text-neutral-500 uppercase select-none mb-3">
              <span className="font-semibold text-neutral-800">OPERATIONAL GOVERNANCE</span>
              <span>/</span>
              <span>TWO-STAGE SIGN-OFF PIPELINE</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              AI does the preparation. Your people make the decisions.
            </h2>
            <p
              className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed font-normal"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A clean operational workflow engineered to eliminate administrative overhead while ensuring complete educator control over every credential.
            </p>
          </div>

          {/* Clean Workflow Representation (Apple-Clean, No flowchart spaghetti) */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
            {/* Step 1: AI Pre-Review */}
            <div className="bg-white rounded-[10px] p-8 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.03)] space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5]">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
                    STAGE 01
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#EBF5FF] text-[#0066CC] font-medium">
                    Automated Assistance
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-neutral-900 tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  AI Pre-Review
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  The system analyzes student work, matches arguments against the grading rubric, and drafts comprehensive feedback notes.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Submission ingested & verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Grading rubric mapped & cited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Detailed feedback dossier drafted</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0F2F5] text-[11px] font-mono text-neutral-400">
                Turnaround: Under 60 seconds
              </div>
            </div>

            {/* Step 2: Human Sign-Off */}
            <div className="bg-white rounded-[10px] p-8 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.03)] space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5]">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-800 font-semibold">
                    STAGE 02
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-[4px] bg-[#FFF8E6] text-[#B25E00] font-medium">
                    Certified Authority
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-neutral-900 tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Human Sign-Off
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  The certified instructor reviews the prepared brief, edits or personalises comments, and authorizes the final grade or credential.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instructor reviews prepared brief</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Final grading decision confirmed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Accreditation authority fully retained</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0F2F5] text-[11px] font-mono text-emerald-700 font-medium">
                100% Human Governed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          07. DARK EDITORIAL: ENTERPRISE INTEGRATION
      ===================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-24 border-b border-white/[0.07]">
        <div className="space-y-3 mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-neutral-400 uppercase select-none">
            <span className="text-neutral-300 font-semibold tracking-[0.16em]">03</span>
            <span className="text-white/20">/</span>
            <span className="text-neutral-400 tracking-[0.14em]">INTEGRATION CONTEXT</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Sits across your current systems.
          </h2>
          <p
            className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Stratision connects natively with your existing learning software, HR tools, and document stores. No ripping and replacing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Box 1 */}
          <div className="p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <BookOpen className="w-4 h-4" />
              <span>LMS PLATFORMS</span>
            </div>
            <div className="font-semibold text-white text-base">Canvas, Moodle, Docebo, Cornerstone</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Bi-directional sync of student enrolment, progress tracking, assignment submissions, and gradebook updates.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <Users className="w-4 h-4" />
              <span>HRIS PLATFORMS</span>
            </div>
            <div className="font-semibold text-white text-base">Workday, BambooHR, HiBob, Personio</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Automated onboarding triggers, role-based competency mapping, and employee compliance verification.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <Database className="w-4 h-4" />
              <span>KNOWLEDGE REPOSITORIES</span>
            </div>
            <div className="font-semibold text-white text-base">SharePoint, Notion, Confluence, PDFs</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Real-time vector indexing of company SOPs, technical manuals, regulatory guidelines, and course curricula.
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <Workflow className="w-4 h-4" />
              <span>DELIVERY CHANNELS</span>
            </div>
            <div className="font-semibold text-white text-base">Microsoft Teams, Slack, Web Portal</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Scenario simulations and knowledge queries delivered directly where employees already communicate.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          08. OTHER FLAGSHIP ARCHITECTURES
      ===================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-24 border-b border-white/[0.07]">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
            OTHER FLAGSHIP ARCHITECTURES
          </span>
          <Link
            to="/systems"
            className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
          >
            <span>View All Systems</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link
            to="/systems/speed-to-lead"
            className="p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
          >
            <div className="text-[11px] font-mono text-blue-400 font-bold">SYSTEM 01</div>
            <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
              Speed-to-Lead Agent™
            </div>
            <div className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
              Sub-60-second qualification and direct calendar handover across phone, chat, and messaging.
            </div>
          </Link>

          <Link
            to="/systems/ai-marketing"
            className="p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
          >
            <div className="text-[11px] font-mono text-blue-400 font-bold">SYSTEM 02</div>
            <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
              AI Marketing System™
            </div>
            <div className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
              Transform market intelligence and operational data into governed, strategic marketing output.
            </div>
          </Link>

          <Link
            to="/systems/ai-receptionist"
            className="p-6 rounded-[8px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
          >
            <div className="text-[11px] font-mono text-blue-400 font-bold">SYSTEM 04</div>
            <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
              AI Receptionist™
            </div>
            <div className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
              An intelligent front door handling calls, patient intake, and calendar bookings 24/7.
            </div>
          </Link>
        </div>
      </section>

      {/* =====================================================================
          09. UNIFIED STRATEGIC CONSULTATION CALLOUT
      ===================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 sm:py-32">
        <div className="p-8 sm:p-14 lg:p-18 rounded-[12px] bg-white/[0.02] border border-white/[0.12] space-y-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-neutral-400 uppercase select-none">
              <span className="text-neutral-300 font-semibold tracking-[0.16em]">OPERATIONAL CONSULTATION</span>
              <span className="text-white/20">/</span>
              <span className="text-neutral-400 tracking-[0.14em]">20-MINUTE REVIEW</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What could an AI training system do inside your organization? Let's find out.
            </h2>
            <p
              className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A direct 20-minute discussion with an AI Systems Architect. We evaluate your current LMS, HR stack, training curriculum, and learner volume.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-[8px] bg-[#F7F8FA] hover:bg-white text-[#090B10] font-semibold text-[15px] sm:text-[16px] tracking-tight transition-all duration-150 flex items-center gap-2.5 border border-white/90 shadow-sm cursor-pointer group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 text-[#090B10]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
