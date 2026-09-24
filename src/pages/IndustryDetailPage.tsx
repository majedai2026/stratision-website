import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FileText
} from "lucide-react";
import { getIndustryBySlug, IndustryData } from "../data/industriesData";
import { IndustryArchitecturalCanvas } from "../components/IndustryArchitecturalCanvas";
import {
  OperatingRealityVisual,
  LeverageTransformationVisual,
  CapabilityOverviewVisual,
  GovernanceBoundaryVisual,
  CtaMotifVisual,
} from "../components/IndustryVisualSystems";

interface IndustryDetailPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  onOpenBooking,
  onOpenBriefing,
}) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const industry: IndustryData | undefined = slug ? getIndustryBySlug(slug) : undefined;

  // Interaction states for sections
  const [activeLeverageIndex, setActiveLeverageIndex] = useState<number>(0);
  const [expandedCapabilityFamily, setExpandedCapabilityFamily] = useState<string>("01");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (industry) {
      document.title = `${industry.name} — AI Systems & Architecture | Stratision`;
    }
  }, [slug, industry]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Group capability mappings by family number
  const capabilityFamilies = [
    {
      number: "01",
      name: "WORKFORCE INTELLIGENCE",
      items: industry.capabilityMappings.filter((m) => m.familyNumber === "01"),
    },
    {
      number: "02",
      name: "OPERATIONS & WORKFLOWS",
      items: industry.capabilityMappings.filter((m) => m.familyNumber === "02"),
    },
    {
      number: "03",
      name: "SALES & CUSTOMER OPERATIONS",
      items: industry.capabilityMappings.filter((m) => m.familyNumber === "03"),
    },
    {
      number: "04",
      name: "KNOWLEDGE & DECISION SUPPORT",
      items: industry.capabilityMappings.filter((m) => m.familyNumber === "04"),
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* 01 — INDUSTRY HERO (Editorial & Generous Whitespace, No Card) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 sm:pb-28 border-b border-white/[0.08]">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-normal">
          <Link to="/" className="hover:text-slate-200 transition-colors">
            Stratision
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/industries" className="hover:text-slate-200 transition-colors">
            Industries
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300">{industry.shortName}</span>
        </nav>

        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-400/80">{industry.number}</span>
            <span>INDUSTRY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            {industry.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl"
          >
            {industry.heroSummary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
          >
            <button
              onClick={onOpenBooking}
              className="px-7 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 shadow-[0_2px_20px_rgba(255,255,255,0.18)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Request Business Intelligence Assessment™</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenBriefing}
              className="px-6 py-4 text-slate-300 hover:text-white font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Download Executive Briefing</span>
            </button>
          </motion.div>

          {/* Trust Attributes */}
          <div className="pt-8 flex flex-wrap items-center gap-8 text-xs text-slate-400 font-normal">
            {industry.strategicTags.map((attr, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {attr}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — THE OPERATING REALITY (Editorial 2-Column Composition with Visual) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Headline & Framing & Visual (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-blue-400/80">02</span>
                <span>BUSINESS CHALLENGES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
                Where work slows down and friction builds
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2 font-normal">
                {industry.overviewContext}
              </p>
            </div>

            {/* As-Is Work Flow Illustration */}
            <div className="pt-4 border-t border-white/[0.06]">
              <OperatingRealityVisual industryShortName={industry.shortName} />
            </div>
          </div>

          {/* Right Column: Four Numbered Operational Bottlenecks Separated by Hairlines (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {industry.operatingRealities.map((pp, idx) => (
              <div key={idx} className="py-8 sm:py-10 space-y-3 group">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="font-semibold text-blue-400">0{idx + 1}</span>
                  <span className="text-slate-600">·</span>
                  <span className="font-medium text-slate-300">Operational challenge</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {pp.title}
                </h3>

                <p
                  className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {pp.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03 — WHERE AI CAN HELP (3-Stage Sequence) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-400/80">03</span>
            <span>WHERE AI CAN HELP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            How AI helps across high-value workflows
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal">
            Stratision maps each operational challenge directly to what the system does and the business benefit delivered.
          </p>
        </div>

        {/* Opportunity Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-12 border-b border-white/[0.08]">
          {industry.leveragePoints.map((lp, idx) => {
            const isActive = activeLeverageIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveLeverageIndex(idx)}
                className={`text-left p-4 sm:p-5 transition-all duration-200 cursor-pointer border-t-2 ${
                  isActive
                    ? "border-blue-500 text-white bg-white/[0.02]"
                    : "border-white/[0.1] text-slate-400 hover:text-slate-200 hover:border-white/30"
                }`}
              >
                <span className="text-xs font-medium text-blue-400 block mb-1">
                  Workflow 0{idx + 1}
                </span>
                <span
                  className="text-xs sm:text-sm font-bold block"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {lp.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Leverage Sequence View */}
        <AnimatePresence mode="wait">
          {industry.leveragePoints[activeLeverageIndex] && (
            <motion.div
              key={activeLeverageIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="py-12 sm:py-16 space-y-10"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-blue-400 block">
                  Workflow 0{activeLeverageIndex + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  {industry.leveragePoints[activeLeverageIndex].title}
                </h3>
              </div>

              {/* Dynamic 3-Stage Leverage Transformation Visual */}
              <LeverageTransformationVisual
                problem={industry.leveragePoints[activeLeverageIndex].problem}
                aiRole={industry.leveragePoints[activeLeverageIndex].whatAiDoes}
                leverage={industry.leveragePoints[activeLeverageIndex].leverageOutcome}
                opportunityTitle={industry.leveragePoints[activeLeverageIndex].title}
                opportunityIndex={activeLeverageIndex + 1}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 04 — CAPABILITY ARCHITECTURE (Clean 4 Areas + Simplified Items) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-400/80">04</span>
            <span>SYSTEM CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Systems Stratision builds for {industry.shortName}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal">
            Every system we build sits within one of our four core capability areas, designed to connect smoothly with your existing tools and databases.
          </p>
        </div>

        {/* Clean 4 Capability Area Overview Visual */}
        <CapabilityOverviewVisual
          activeFamilyNumber={expandedCapabilityFamily}
          onSelectFamily={(num) => setExpandedCapabilityFamily(num)}
        />

        {/* Clean Typographic Accordion Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {capabilityFamilies.map((fam) => {
            const isExpanded = expandedCapabilityFamily === fam.number;
            return (
              <div key={fam.number} className="py-8 sm:py-10 transition-all duration-300">
                <button
                  onClick={() => setExpandedCapabilityFamily(isExpanded ? "" : fam.number)}
                  className="w-full flex items-start sm:items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="font-semibold text-blue-400">{fam.number}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-300">Core capability</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                      {fam.name}
                    </h3>
                  </div>

                  <div className="p-2 text-slate-400 group-hover:text-white transition-colors shrink-0 mt-2 sm:mt-0">
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Systems (Clean Editorial Layout) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-8 space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.05]">
                        {fam.items.map((sys, idx) => (
                          <div key={idx} className="space-y-2">
                            <h4
                              className="text-lg font-bold text-white tracking-tight"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              {sys.systemTitle}
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {sys.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 05 — MODELLED ARCHITECTURAL SCENARIO (Direct On Canvas) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-400/80">05</span>
            <span>HOW THE SYSTEM OPERATES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            System Blueprint: {industry.modelledScenario.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal">
            See how documents and records move through reading, connecting steps, checking results, and completing the finished task.
          </p>
        </div>

        {/* Interactive Architecture Stage Visual */}
        <IndustryArchitecturalCanvas scenario={industry.modelledScenario} />
      </section>

      {/* 06 — GOVERNANCE & CONTROL */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Headline & Control Visual (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-blue-400/80">06</span>
                <span>GOVERNANCE & CONTROL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
                How your information is protected and controlled
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2 font-normal">
                Systems are designed around the governance requirements of each organisation. Data handling and model use are governed according to the terms of your engagement, deployment is designed around your organisation's security requirements, and important decisions remain subject to human approval.
              </p>
            </div>

            {/* Governance Control Visual */}
            <div className="pt-4 border-t border-white/[0.06]">
              <GovernanceBoundaryVisual industryShortName={industry.shortName} />
            </div>
          </div>

          {/* Right Column: Numbered Governance Principles Separated by Hairlines (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {industry.governanceConsiderations.map((gov, idx) => (
              <div key={idx} className="py-8 sm:py-10 space-y-3 group">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="font-semibold text-blue-400">0{idx + 1}</span>
                  <span className="text-slate-600">·</span>
                  <span className="font-medium text-slate-300">Governance principle</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {gov.title}
                </h3>

                <p
                  className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {gov.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 07 — STRATEGIC CTA (Minimal, Large Typography, Architectural Motif) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 sm:pt-28 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-400/80">07</span>
            <span>STRATEGIC ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Find where AI can help your organisation.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            If you’re exploring where AI could create meaningful improvements across your organisation, start with a conversation tailored to {industry.shortName}.
          </p>

          <CtaMotifVisual />

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-bold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 shadow-[0_2px_20px_rgba(255,255,255,0.2)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-200 hover:text-white font-medium text-sm tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Book a Consultation →</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-2 font-normal">
            Confidential discussion with a Senior Systems Architect • Tailored to {industry.shortName} operations
          </p>
        </div>
      </section>
    </div>
  );
};
