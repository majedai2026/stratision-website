import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WhatWeBuildSectionProps {
  onOpenBooking?: () => void;
}

interface Capability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
}

interface SystemArtifactData {
  label: string;
  reference: string;
  subject: string;
  context: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  outcome: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "revenue",
    number: "01",
    title: "Sales & Client Intake",
    tagline: "Qualify high-value enquiries immediately.",
    description: "Sales teams lose deals when enquiries sit in inboxes. AI answers incoming buyers, confirms their budget, and passes qualified leads to your team.",
  },
  {
    id: "marketing",
    number: "02",
    title: "Marketing & Growth",
    tagline: "Focus budget on the campaigns that convert.",
    description: "Businesses waste marketing spend on channels that do not bring profit. AI compares channel performance and moves budget to what works.",
  },
  {
    id: "operations",
    number: "03",
    title: "Finance & Operations",
    tagline: "Check invoices and approve payments with zero errors.",
    description: "Finance teams waste hours manually checking supplier invoices. AI matches invoices against purchase orders and prepares the payment run.",
  },
  {
    id: "workforce",
    number: "04",
    title: "Staff Training & Onboarding",
    tagline: "Get new team members up to speed faster.",
    description: "Training new employees takes senior staff away from daily work. AI turns company guidelines into practical practice scenarios and tracks progress.",
  },
  {
    id: "customer-ops",
    number: "05",
    title: "Customer Enquiries & Booking",
    tagline: "Never miss a booking or client enquiry.",
    description: "Offices lose valuable appointments when phone lines are busy. AI answers callers, checks staff availability, and books appointments directly.",
  },
  {
    id: "decision",
    number: "06",
    title: "Executive Business Reviews",
    tagline: "Compare business options before making major decisions.",
    description: "Senior leadership teams spend weeks gathering numbers for board decisions. AI compares the options, highlights risks, and prepares clear summaries.",
  },
];

const SYSTEM_ARTIFACTS: SystemArtifactData[] = [
  {
    label: "CLIENT QUALIFICATION RECORD",
    reference: "Ref: SR-0841",
    subject: "Sarah Mitchell",
    context: "Property purchase enquiry",
    metric1: { value: "£1.5M", label: "Budget confirmed" },
    metric2: { value: "3-bed", label: "Property matched" },
    outcome: "Suitable property found and enquiry passed to the broker.",
  },
  {
    label: "MARKETING BUDGET REVIEW",
    reference: "Ref: CPB-2026",
    subject: "Autumn Campaign",
    context: "Lead generation review",
    metric1: { value: "2.4x", label: "Higher return found" },
    metric2: { value: "£15,000", label: "Budget reallocated" },
    outcome: "Budget moved to the best performing marketing channel.",
  },
  {
    label: "INVOICE CHECK",
    reference: "Ref: INV-4821",
    subject: "Meridian Industrial",
    context: "Supplier payment review",
    metric1: { value: "£18,420", label: "Invoice verified" },
    metric2: { value: "100%", label: "Purchase order matched" },
    outcome: "Invoice matched against order and approved for payment.",
  },
  {
    label: "STAFF ONBOARDING CHECK",
    reference: "Ref: TR-0412",
    subject: "James Carter",
    context: "Customer service training",
    metric1: { value: "100%", label: "Policy test score" },
    metric2: { value: "4 / 4", label: "Scenarios passed" },
    outcome: "Training verified and employee approved for client work.",
  },
  {
    label: "APPOINTMENT BOOKING",
    reference: "Ref: COR-9941",
    subject: "Sarah Mitchell",
    context: "Client consultation",
    metric1: { value: "Thu 14:30", label: "Appointment booked" },
    metric2: { value: "0", label: "No scheduling conflicts" },
    outcome: "Appointment booked and details sent to the team.",
  },
  {
    label: "EXPANSION REVIEW",
    reference: "Ref: EDB-2026",
    subject: "Regional Expansion",
    context: "New office review",
    metric1: { value: "+18%", label: "Higher return projected" },
    metric2: { value: "11 Months", label: "Time to open" },
    outcome: "Options compared and board review prepared.",
  },
];

interface BusinessArtifactProps {
  capabilityIdx: number;
}

const BusinessArtifact: React.FC<BusinessArtifactProps> = ({ capabilityIdx }) => {
  const artifact = SYSTEM_ARTIFACTS[capabilityIdx] || SYSTEM_ARTIFACTS[0];

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* 1 & 2: Small document label & Reference */}
      <div className="flex items-center justify-between">
        <span
          className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-[#141619]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {artifact.label}
        </span>
        <span className="text-[11px] font-mono text-neutral-400">
          {artifact.reference}
        </span>
      </div>

      {/* 3, 4, 5: Large subject + Context + Two Large Metrics */}
      <div className="my-auto py-5 sm:py-10 space-y-2">
        <h4
          className="text-[26px] sm:text-[34px] lg:text-[38px] font-bold text-[#141619] tracking-tight leading-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {artifact.subject}
        </h4>
        <p
          className="text-[14px] sm:text-[15px] text-neutral-500 font-medium"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {artifact.context}
        </p>

        {/* TWO LARGE KEY FACTS / OUTCOMES - DOMINATING THE CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 pt-5 sm:pt-8">
          <div>
            <div
              className="text-[26px] sm:text-[36px] font-bold text-[#141619] tracking-tight leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {artifact.metric1.value}
            </div>
            <div
              className="text-[12.5px] sm:text-[13px] text-neutral-500 font-medium mt-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {artifact.metric1.label}
            </div>
          </div>
          <div>
            <div
              className="text-[26px] sm:text-[36px] font-bold text-[#141619] tracking-tight leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {artifact.metric2.value}
            </div>
            <div
              className="text-[12.5px] sm:text-[13px] text-neutral-500 font-medium mt-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {artifact.metric2.label}
            </div>
          </div>
        </div>
      </div>

      {/* 6: AI OUTCOME → Short result */}
      <div className="pt-6 border-t border-black/[0.08] text-[13px] sm:text-[14px] font-medium text-neutral-800 flex items-baseline gap-2">
        <span className="font-semibold text-neutral-900 font-mono text-[11px] sm:text-xs uppercase tracking-wider shrink-0">
          AI OUTCOME →
        </span>
        <span className="text-neutral-700">{artifact.outcome}</span>
      </div>
    </div>
  );
};

export const WhatWeBuildSection: React.FC<WhatWeBuildSectionProps> = ({ onOpenBooking: _onOpenBooking }) => {
  const [selectedCapability, setSelectedCapability] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check for prefers-reduced-motion and mobile screens
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const isMobile = window.innerWidth < 768;
      setPrefersReducedMotion(mediaQuery.matches || isMobile);
      if (mediaQuery.matches || isMobile) {
        setIsAutoPlaying(false);
      }

      const handleChange = (e: MediaQueryListEvent) => {
        const mobile = window.innerWidth < 768;
        setPrefersReducedMotion(e.matches || mobile);
        if (e.matches || mobile) setIsAutoPlaying(false);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Autonomous Slideshow: Advance every 2.8 seconds on desktop only
  useEffect(() => {
    if (!isAutoPlaying) return;
    if (typeof window !== "undefined" && (window.innerWidth < 768 || prefersReducedMotion)) {
      setIsAutoPlaying(false);
      return;
    }

    const interval = setInterval(() => {
      setSelectedCapability((prev) => (prev + 1) % CAPABILITIES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isAutoPlaying, prefersReducedMotion]);

  // Handle user manually selecting a capability (pauses autoplay)
  const handleSelectCapability = (idx: number) => {
    setIsAutoPlaying(false);
    setSelectedCapability(idx);
  };

  return (
    <section
      id="ai-systems"
      ref={sectionRef}
      className="relative py-24 sm:py-36 lg:py-44 bg-[#080B14] border-t border-white/[0.06] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>AI SYSTEMS</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Custom architectures built for your business.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl font-normal leading-relaxed">
            We don't build generic chatbots or novelty tools. We build practical AI systems that qualify incoming sales leads, evaluate marketing spend, check supplier invoices, onboard new staff, and coordinate client bookings.
          </p>
        </div>

        {/* Mobile Horizontal Pill Selector */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-6 px-0.5 no-scrollbar">
          {CAPABILITIES.map((cap, idx) => {
            const isSelected = selectedCapability === idx;
            return (
              <button
                key={cap.id}
                onClick={() => handleSelectCapability(idx)}
                className={`shrink-0 min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-white text-[#080B14] shadow-md"
                    : "bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white border border-white/[0.08]"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span className="font-mono text-[11px] opacity-70">{cap.number}</span>
                <span>{cap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left: Understated Typography Navigation */}
          <div className="hidden lg:block lg:col-span-4 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {CAPABILITIES.map((cap, idx) => {
              const isSelected = selectedCapability === idx;

              return (
                <button
                  key={cap.id}
                  onClick={() => handleSelectCapability(idx)}
                  className={`w-full text-left py-4 sm:py-5 px-3.5 -mx-1 sm:mx-0 rounded-[2px] cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white/[0.07] pl-4 sm:pl-5 border-l-2 border-blue-400 text-white shadow-sm"
                      : "hover:bg-white/[0.02] text-slate-400 border-l-2 border-transparent"
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-[12px] font-mono font-medium tracking-[0.05em] transition-colors duration-200 ${
                          isSelected ? "text-blue-400 font-semibold" : "text-slate-500"
                        }`}
                      >
                        {cap.number}
                      </span>
                      <h3
                        className={`text-[16px] sm:text-[17px] font-semibold tracking-[-0.015em] transition-colors duration-200 ${
                          isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {cap.title}
                      </h3>
                    </div>
                    <p
                      className={`text-[11px] sm:text-[12px] font-normal transition-colors duration-200 tracking-normal ${
                        isSelected ? "text-slate-300" : "text-slate-400"
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {cap.tagline}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isSelected ? "text-blue-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: PHYSICAL BUSINESS DOCUMENT SITTING DIRECTLY AGAINST THE DARK BACKGROUND */}
          <div className="lg:col-span-8 w-full flex flex-col justify-start">
            <div className="relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`artifact-${selectedCapability}`}
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="bg-[#FAF9F5] text-[#141619] rounded-[1px] p-5 sm:p-10 lg:p-14 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.65),0_1px_3px_rgba(0,0,0,0.12)] border border-[#E5E2D8] relative w-full min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
                    <BusinessArtifact capabilityIdx={selectedCapability} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
