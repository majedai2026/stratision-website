import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface SimplifiedRecord {
  documentType: string;
  reference: string;
  subject: string;
  subjectContext: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  outcome: string;
}

interface IndustryEnvironment {
  id: string;
  number: string;
  name: string;
  shortName: string;
  stakes: string;
  governanceStandard: string;
  records: SimplifiedRecord[];
}

const ENVIRONMENTS: IndustryEnvironment[] = [
  {
    id: "real-estate",
    number: "01",
    name: "Real Estate & Property Management",
    shortName: "Real Estate",
    stakes:
      "Estate managers handle tenant requests, lease renewals, and urgent repairs across properties.",
    governanceStandard:
      "Surveyors approve all lease notices, major building works, and capital payments.",
    records: [
      {
        documentType: "LEASE REVIEW",
        reference: "Ref: LE-18-BSQ",
        subject: "18 Berkeley Square",
        subjectContext: "Commercial property lease",
        metric1: { value: "90 Days", label: "Notice period ending" },
        metric2: { value: "£385,000", label: "Annual rent confirmed" },
        outcome: "Lease terms reviewed and renewal offer prepared.",
      },
      {
        documentType: "EMERGENCY REPAIR",
        reference: "Ref: WO-842",
        subject: "Cavendish House",
        subjectContext: "Air conditioning failure",
        metric1: { value: "45 Mins", label: "Contractor arrival time" },
        metric2: { value: "Apex Ltd", label: "Approved contractor" },
        outcome: "Emergency repair booked and tenants notified.",
      },
    ],
  },
  {
    id: "financial-services",
    number: "02",
    name: "Financial Services & Investment",
    shortName: "Financial Services",
    stakes:
      "Investment teams spend days reviewing company records, checking debt limits, and preparing committee memos.",
    governanceStandard:
      "All findings cite source pages; final investment decisions remain strictly human.",
    records: [
      {
        documentType: "LOAN AGREEMENT CHECK",
        reference: "Ref: FAC-COV-401",
        subject: "Sovereign Holdings",
        subjectContext: "£65M loan agreement",
        metric1: { value: "3.82x", label: "Debt level within limit" },
        metric2: { value: "4.65x", label: "Interest payments covered" },
        outcome: "Loan terms checked and compliance report sent.",
      },
      {
        documentType: "DEAL ROOM REVIEW",
        reference: "Ref: DD-ANL-882",
        subject: "Project Falcon",
        subjectContext: "Business acquisition",
        metric1: { value: "£1.6M", label: "Hidden liability found" },
        metric2: { value: "4.16x", label: "Debt level too high" },
        outcome: "Important risk found and review prepared.",
      },
    ],
  },
  {
    id: "insurance-underwriting",
    number: "03",
    name: "Insurance & Underwriting",
    shortName: "Insurance",
    stakes:
      "Insurers review commercial policy requests, check past claims histories, and ensure pricing matches guidelines.",
    governanceStandard:
      "Senior underwriters retain final approval on all policies and pricing.",
    records: [
      {
        documentType: "INSURANCE RISK REVIEW",
        reference: "Ref: LMS-4902",
        subject: "Meridian Logistics",
        subjectContext: "Commercial property policy",
        metric1: { value: "£42M", label: "Insured value" },
        metric2: { value: "0.18%", label: "Target price met" },
        outcome: "Target price verified and policy proposal prepared.",
      },
      {
        documentType: "CLAIMS HISTORY CHECK",
        reference: "Ref: LR-SYN-2026",
        subject: "5-Year Claims History",
        subjectContext: "Previous insurer records",
        metric1: { value: "0", label: "Claims over £100,000" },
        metric2: { value: "5 Years", label: "History checked" },
        outcome: "Claims history verified and pricing model updated.",
      },
    ],
  },
  {
    id: "logistics-supply-chain",
    number: "04",
    name: "Logistics & Supply Chain",
    shortName: "Logistics & Supply Chain",
    stakes:
      "Freight managers check customs paperwork, monitor port delays, and avoid expensive late storage penalties.",
    governanceStandard:
      "Customs filings follow official regulations; route changes require manager approval.",
    records: [
      {
        documentType: "CUSTOMS CHECK",
        reference: "Ref: BOL-81920",
        subject: "CMA CGM Cargo Ship",
        subjectContext: "Rotterdam to Southampton shipment",
        metric1: { value: "18 Pallets", label: "Cargo matched" },
        metric2: { value: "Approved", label: "Customs form cleared" },
        outcome: "Customs paperwork cleared and delivery driver booked.",
      },
      {
        documentType: "PORT DELAY ALERT",
        reference: "Ref: EXP-SH-091",
        subject: "Southampton Port",
        subjectContext: "Port congestion delay",
        metric1: { value: "18 Hours", label: "Gate delay detected" },
        metric2: { value: "£4,200", label: "Late fee avoided" },
        outcome: "Cargo switched to rail and late fee avoided.",
      },
    ],
  },
  {
    id: "professional-services",
    number: "05",
    name: "Professional Services & Advisory",
    shortName: "Professional Services",
    stakes:
      "Advisory firms search through decades of past deals to find key contract risks and draft partner advice.",
    governanceStandard:
      "Partners review and sign all advice before it is sent to clients.",
    records: [
      {
        documentType: "ADVISORY RECORD",
        reference: "Ref: PRC-ADV-104",
        subject: "FTSE 100 Restructuring",
        subjectContext: "Debt agreement review",
        metric1: { value: "14 Years", label: "Past deals searched" },
        metric2: { value: "Project Meridian", label: "Matching deal found" },
        outcome: "Past deals compared and key clause found.",
      },
      {
        documentType: "CONTRACT REVIEW",
        reference: "Ref: MEM-DFT-2026",
        subject: "Capital Structure Strategy",
        subjectContext: "Debt agreement review",
        metric1: { value: "Clause §14.2", label: "Contract risk flagged" },
        metric2: { value: "100%", label: "Contract clauses cited" },
        outcome: "Contract risk found and memo prepared for the partner.",
      },
    ],
  },
  {
    id: "infrastructure-construction",
    number: "06",
    name: "Infrastructure & Construction",
    shortName: "Infrastructure",
    stakes:
      "Construction teams check building drawings for conflicts before work starts and verify contractor safety records.",
    governanceStandard:
      "Project directors and surveyors sign off all drawing changes and payments.",
    records: [
      {
        documentType: "BUILDING DRAWING CHECK",
        reference: "Ref: TND-MWP-3B",
        subject: "St. Jude Development",
        subjectContext: "Commercial construction",
        metric1: { value: "Level 4", label: "Design clash found" },
        metric2: { value: "£48,000", label: "Rework cost avoided" },
        outcome: "Design clash found before work started and engineer alerted.",
      },
      {
        documentType: "SAFETY DOCUMENT CHECK",
        reference: "Ref: HSE-AUD-77",
        subject: "Titan Groundworks",
        subjectContext: "Subcontractor safety checks",
        metric1: { value: "14", label: "Safety records verified" },
        metric2: { value: "£10M", label: "Insurance active" },
        outcome: "Safety records checked before work started and site access approved.",
      },
    ],
  },
];

export const IndustriesSection: React.FC = () => {
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
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasCompleted, prefersReducedMotion]);

  // Slideshow timer: 3.5s per environment, holds permanently on last item (desktop only)
  useEffect(() => {
    if (!isAutoPlaying || hasCompleted) return;
    if (typeof window !== "undefined" && (window.innerWidth < 768 || prefersReducedMotion)) {
      setIsAutoPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setSelectedIdx((prev) => {
        if (prev < ENVIRONMENTS.length - 1) {
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

  // Manual selection overrides and pauses autoplay
  const handleManualSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setHasCompleted(true);
    setSelectedIdx(idx);
  };

  const activeEnv = ENVIRONMENTS[selectedIdx];

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative py-20 sm:py-36 lg:py-44 bg-[#06080F] border-t border-white/[0.06] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>OPERATING ENVIRONMENTS</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-[76px] font-bold text-white tracking-[-0.035em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            AI built around how your industry actually works.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mt-4 sm:mt-5 max-w-2xl font-normal leading-relaxed">
            Every sector has its own rules, contracts, and daily paperwork. We build AI around how your business actually operates.
          </p>
        </div>

        {/* Minimalist Industry Selector */}
        <div className="border-t border-b border-white/[0.08] py-3.5 mb-14 overflow-x-auto px-0.5 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {ENVIRONMENTS.map((ind, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleManualSelect(idx)}
                  className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-white text-[#06080F] font-bold shadow-sm"
                      : "text-slate-400 hover:text-white bg-transparent hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={isSelected ? "text-blue-600 font-bold" : "text-slate-500"}>
                    {ind.number}
                  </span>
                  <span>{ind.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STREAMLINED OPERATING ENVIRONMENT WITH 2-SECOND READABLE ARTEFACTS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEnv.id}
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
            className="space-y-8 sm:space-y-12"
          >
            
            {/* Operating Environment Header & Context */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/[0.08]">
              <div className="space-y-3 sm:space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                  <span>ENVIRONMENT {activeEnv.number}</span>
                  <span className="text-slate-600">·</span>
                  <span>OPERATIONAL RECORD SUITE</span>
                </div>
                <h3
                  className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {activeEnv.name}
                </h3>
                <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed pt-1">
                  {activeEnv.stakes}
                </p>
              </div>

              <Link
                to={`/industries/${activeEnv.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors text-sm font-semibold shrink-0 group shadow-md"
              >
                <span>Explore Industry Dossier</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* TWO STREAMLINED OPERATIONAL DOSSIERS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {activeEnv.records.map((record, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-[#0A0E17] text-slate-100 rounded-[2px] p-5 sm:p-8 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] border border-white/[0.1] flex flex-col justify-between min-h-[360px] sm:min-h-[420px]"
                >
                  {/* 1 & 2: Small document label & Reference */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                    <span
                      className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-blue-400 font-mono"
                    >
                      {record.documentType}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {record.reference}
                    </span>
                  </div>

                  {/* 3, 4, 5: Subject + Context + Two Key Metrics */}
                  <div className="my-auto py-6 sm:py-10 space-y-2">
                    <h4
                      className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-white tracking-tight leading-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {record.subject}
                    </h4>
                    <p
                      className="text-[13px] sm:text-[14px] text-slate-400 font-medium"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {record.subjectContext}
                    </p>

                    {/* Two Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 pt-6 sm:pt-10">
                      <div>
                        <div
                          className="text-[24px] sm:text-[32px] font-bold text-white tracking-tight leading-none"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {record.metric1.value}
                        </div>
                        <div
                          className="text-[11px] sm:text-[12px] text-slate-400 font-mono uppercase tracking-wider mt-1.5 sm:mt-2"
                        >
                          {record.metric1.label}
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-[24px] sm:text-[32px] font-bold text-white tracking-tight leading-none"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {record.metric2.value}
                        </div>
                        <div
                          className="text-[11px] sm:text-[12px] text-slate-400 font-mono uppercase tracking-wider mt-1.5 sm:mt-2"
                        >
                          {record.metric2.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 6: AI OUTCOME → Result */}
                  <div className="pt-5 sm:pt-6 border-t border-white/[0.08] text-[12.5px] sm:text-[14px] font-medium flex items-baseline gap-2">
                    <span className="font-semibold text-blue-400 font-mono text-[11px] sm:text-xs uppercase tracking-wider shrink-0">
                      AI OUTCOME →
                    </span>
                    <span className="text-slate-300">{record.outcome}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Statutory Governance Confirmation */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-4">
              <div className="flex items-start sm:items-center gap-2.5 max-w-3xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                <span>{activeEnv.governanceStandard}</span>
              </div>

              <span className="text-[11px] font-mono text-slate-500 shrink-0">
                ENTERPRISE OPERATIONAL ARTEFACTS
              </span>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
