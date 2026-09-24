import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface ExampleArchitecturesSectionProps {
  onOpenBooking?: () => void;
}

interface CaseStudyDetail {
  id: string;
  number: string;
  industry: string;
  title: string;
  narrative: string;
  operationalImpact: string[];
  governance: string;
  documentTitle: string;
  reference: string;
  subject: string;
  subjectContext: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  outcome: string;
}

const CASE_STUDIES: CaseStudyDetail[] = [
  {
    id: "real-estate",
    number: "01",
    industry: "REAL ESTATE",
    title: "Client Intake & Qualification System",
    narrative:
      "Agencies lose high-value buyers when acquisition enquiries wait in inboxes. AI qualifies incoming briefs, confirms criteria, and alerts senior agents.",
    operationalImpact: [
      "Answers buyer and investor enquiries in seconds",
      "Confirms capital allocation and property criteria",
      "Prepares qualified dossiers for senior negotiators",
    ],
    governance: "Senior negotiators handle all pricing discussions, viewings, and negotiations.",
    documentTitle: "ACQUISITION DOSSIER",
    reference: "Ref: CIR-0842",
    subject: "Kensington Freehold",
    subjectContext: "Commercial property enquiry",
    metric1: { value: "£3.8M", label: "Budget confirmed" },
    metric2: { value: "Off-market", label: "Requirement matched" },
    outcome: "Freehold criteria matched and dossier prepared for the senior partner.",
  },
  {
    id: "professional-services",
    number: "02",
    industry: "PROFESSIONAL SERVICES",
    title: "Research & Advice System",
    narrative:
      "Advisory teams spend hours searching through old deals and documents. AI finds the relevant examples and prepares the key points for review.",
    operationalImpact: [
      "Searches firm deal history and past memos in seconds",
      "Finds the exact clauses and past examples that matter",
      "Drafts the initial memo ready for partner sign-off",
    ],
    governance: "No client advice leaves the firm without partner review and signature.",
    documentTitle: "ADVISORY RECORD",
    reference: "Ref: ADV-119",
    subject: "FTSE 100 Restructuring",
    subjectContext: "Debt agreement review",
    metric1: { value: "Project Meridian", label: "Past deal matched" },
    metric2: { value: "Clause §14.2", label: "Contract risk flagged" },
    outcome: "Past deals compared and key clause found.",
  },
  {
    id: "financial-services",
    number: "03",
    industry: "FINANCIAL SERVICES",
    title: "Investment & Deal Review System",
    narrative:
      "Investment teams can spend days reviewing hundreds of pages before making a decision. AI reviews the information, finds important risks, and prepares the key points for the team.",
    operationalImpact: [
      "Reviews 400+ pages of deal documents in minutes",
      "Flags hidden liabilities and debt risks early",
      "Prepares a clear summary for the investment team",
    ],
    governance: "All findings link to source pages; all investment decisions remain strictly human.",
    documentTitle: "DEAL ROOM REVIEW",
    reference: "Ref: ICM-094",
    subject: "Project Falcon",
    subjectContext: "Business acquisition",
    metric1: { value: "£1.6M", label: "Hidden liability found" },
    metric2: { value: "4.16x", label: "Debt level too high" },
    outcome: "Important risk found and review prepared.",
  },
  {
    id: "healthcare",
    number: "04",
    industry: "HEALTHCARE & PRIVATE CLINICS",
    title: "Patient Consultation & Booking System",
    narrative:
      "Clinics lose appointments when calls are missed or staff are busy. AI handles enquiries, books appointments, and keeps the clinic updated.",
    operationalImpact: [
      "Zero missed calls when phone lines are busy",
      "Checks doctor schedules and books appointments directly",
      "Sends appointment packs and details automatically",
    ],
    governance: "AI handles bookings only; all clinical advice and diagnosis remain exclusively with doctors.",
    documentTitle: "CLINIC APPOINTMENT",
    reference: "Ref: CIR-9921",
    subject: "Cardiology Consultation",
    subjectContext: "Private clinic booking",
    metric1: { value: "Thu 14:30", label: "Appointment booked" },
    metric2: { value: "0", label: "No scheduling conflicts" },
    outcome: "Appointment booked and details sent to the clinic.",
  },
];

export const ExampleArchitecturesSection: React.FC<ExampleArchitecturesSectionProps> = ({
  onOpenBooking,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef<boolean>(false);

  // Check prefers-reduced-motion and mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const isMobile = window.innerWidth < 768;
      setPrefersReducedMotion(mediaQuery.matches || isMobile);

      const handleChange = (e: MediaQueryListEvent) => {
        const mobile = window.innerWidth < 768;
        setPrefersReducedMotion(e.matches || mobile);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // IntersectionObserver: trigger autonomous progression once when section enters viewport (desktop only)
  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;
    if (typeof window !== "undefined" && (window.innerWidth < 768 || prefersReducedMotion)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current && !hasCompleted) {
          hasTriggeredRef.current = true;
          setIsAutoPlaying(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasCompleted, prefersReducedMotion]);

  // Slideshow progression: 3.5s per case study, holds permanently on last item (desktop only)
  useEffect(() => {
    if (!isAutoPlaying || hasCompleted) return;
    if (typeof window !== "undefined" && (window.innerWidth < 768 || prefersReducedMotion)) {
      setIsAutoPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setSelectedIdx((prev) => {
        if (prev < CASE_STUDIES.length - 1) {
          return prev + 1;
        } else {
          setIsAutoPlaying(false);
          setHasCompleted(true);
          return prev;
        }
      });
    }, 3500);

    return () => clearTimeout(timer);
  }, [isAutoPlaying, selectedIdx, hasCompleted, prefersReducedMotion]);

  // Manual tab click overrides autoplay
  const handleManualSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setHasCompleted(true);
    setSelectedIdx(idx);
  };

  const activeStudy = CASE_STUDIES[selectedIdx];

  return (
    <section
      id="example-architectures"
      ref={sectionRef}
      className="relative py-20 sm:py-36 lg:py-44 bg-[#080B14] border-t border-white/[0.06] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>CASE STUDIES</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Real operational architectures.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl font-normal leading-relaxed">
            Every organisation has specific operational bottlenecks. Here is how custom AI systems handle client intake, advisory research, debt risk auditing, and appointment bookings in practice.
          </p>
        </div>

        {/* Minimalist Industry Switcher */}
        <div className="border-t border-b border-white/[0.08] py-3.5 mb-10 sm:mb-12 overflow-x-auto px-0.5 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {CASE_STUDIES.map((study, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={study.id}
                  onClick={() => handleManualSelect(idx)}
                  className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-white text-[#06080F] font-bold shadow-sm"
                      : "text-slate-400 hover:text-white bg-transparent hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={isSelected ? "text-blue-600 font-bold" : "text-slate-500"}>
                    {study.number}
                  </span>
                  <span>{study.industry}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CASE STUDY PRESENTATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 8 }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0 }
            }
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -8 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.2 : 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start pt-2"
          >
            {/* Left: Editorial Narrative & System Scope */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
                  <span>CASE STUDY {activeStudy.number}</span>
                  <span className="text-slate-600">·</span>
                  <span>{activeStudy.industry}</span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {activeStudy.title}
                </h3>
              </div>

              <p
                className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {activeStudy.narrative}
              </p>

              {/* Concrete Operational Deliverables */}
              <div className="space-y-3 border-t border-white/[0.08] pt-6">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-[0.14em] font-medium">
                  OPERATIONAL DELIVERABLES
                </div>
                <ul className="space-y-2.5">
                  {activeStudy.operationalImpact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Human Governance Guardrail */}
              <div className="border-t border-white/[0.08] pt-6 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-[0.14em] font-medium">
                  GOVERNANCE GUARDRAIL
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{activeStudy.governance}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: STREAMLINED ARCHITECTURAL SPECIFICATION LEDGER */}
            <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
              <div className="bg-[#0A0E17] text-slate-100 rounded-[2px] p-5 sm:p-10 lg:p-14 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] border border-white/[0.1] w-full max-w-xl flex flex-col justify-between min-h-[360px] sm:min-h-[440px]">
                
                {/* 1 & 2: Architectural Ledger Folio Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 sm:pb-4">
                  <span
                    className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-blue-400 font-mono"
                  >
                    {activeStudy.documentTitle}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {activeStudy.reference}
                  </span>
                </div>

                {/* 3, 4, 5: Subject + Context + Two Key Metrics */}
                <div className="my-auto py-6 sm:py-10 space-y-2">
                  <h4
                    className="text-[22px] sm:text-[30px] lg:text-[38px] font-bold text-white tracking-tight leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {activeStudy.subject}
                  </h4>
                  <p
                    className="text-[13px] sm:text-[15px] text-slate-400 font-medium"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {activeStudy.subjectContext}
                  </p>

                  {/* Two Key Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 pt-6 sm:pt-10">
                    <div>
                      <div
                        className="text-[24px] sm:text-[36px] font-bold text-white tracking-tight leading-none"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {activeStudy.metric1.value}
                      </div>
                      <div
                        className="text-[11px] sm:text-[12px] text-slate-400 font-mono uppercase tracking-wider mt-1.5 sm:mt-2"
                      >
                        {activeStudy.metric1.label}
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-[24px] sm:text-[36px] font-bold text-white tracking-tight leading-none"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {activeStudy.metric2.value}
                      </div>
                      <div
                        className="text-[11px] sm:text-[12px] text-slate-400 font-mono uppercase tracking-wider mt-1.5 sm:mt-2"
                      >
                        {activeStudy.metric2.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6: System Outcome Resolution */}
                <div className="pt-5 sm:pt-6 border-t border-white/[0.08] text-[12.5px] sm:text-[14px] font-medium flex items-baseline gap-2">
                  <span className="font-semibold text-blue-400 font-mono text-[11px] sm:text-xs uppercase tracking-wider shrink-0">
                    AI OUTCOME →
                  </span>
                  <span className="text-slate-300">{activeStudy.outcome}</span>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
