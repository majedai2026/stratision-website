import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Truck,
  Briefcase,
  Building2,
  HardHat,
  ArrowUpRight
} from "lucide-react";
import { INDUSTRIES_LIST } from "../data/industriesData";

interface IndustriesHubPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

// Minimal architectural SVG diagram representations for each sector
const IndustryArchitecturalDiagram: React.FC<{ slug: string }> = ({ slug }) => {
  if (slug === "financial-services-investment") {
    return (
      <svg className="w-full h-full text-slate-500/30" viewBox="0 0 320 200" fill="none" stroke="currentColor">
        <rect x="20" y="20" width="100" height="70" rx="2" strokeWidth="1" strokeDasharray="3 3" />
        <text x="30" y="40" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">CIM_INGEST.DCM</text>
        <line x1="30" y1="52" x2="90" y2="52" strokeWidth="1" />
        <line x1="30" y1="62" x2="80" y2="62" strokeWidth="1" />
        <line x1="30" y1="72" x2="100" y2="72" strokeWidth="1" />

        <rect x="20" y="110" width="100" height="70" rx="2" strokeWidth="1" strokeDasharray="3 3" />
        <text x="30" y="130" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">AUDITED_GL.XLS</text>
        <line x1="30" y1="142" x2="100" y2="142" strokeWidth="1" />
        <line x1="30" y1="152" x2="70" y2="152" strokeWidth="1" />
        <line x1="30" y1="162" x2="90" y2="162" strokeWidth="1" />

        <path d="M 120 55 L 170 100" strokeWidth="1" stroke="currentColor" />
        <path d="M 120 145 L 170 100" strokeWidth="1" stroke="currentColor" />

        <circle cx="170" cy="100" r="14" strokeWidth="1" />
        <text x="163" y="103" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">REC</text>

        <line x1="184" y1="100" x2="220" y2="100" strokeWidth="1" />

        <rect x="220" y="55" width="85" height="90" rx="2" strokeWidth="1.2" stroke="#3b82f6" />
        <text x="228" y="75" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">COMMITTEE</text>
        <text x="228" y="86" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">DOSSIER</text>
        <line x1="228" y1="98" x2="285" y2="98" strokeWidth="1" stroke="#3b82f6" />
        <line x1="228" y1="108" x2="270" y2="108" strokeWidth="1" stroke="#3b82f6" />
        <line x1="228" y1="118" x2="290" y2="118" strokeWidth="1" stroke="#3b82f6" />
        <line x1="228" y1="128" x2="260" y2="128" strokeWidth="1" stroke="#3b82f6" />
      </svg>
    );
  }

  if (slug === "insurance") {
    return (
      <svg className="w-full h-full text-slate-500/30" viewBox="0 0 320 200" fill="none" stroke="currentColor">
        <rect x="20" y="30" width="80" height="140" rx="2" strokeWidth="1" strokeDasharray="2 2" />
        <text x="28" y="50" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">SUBMISSIONS</text>
        <circle cx="35" cy="70" r="3" fill="currentColor" />
        <line x1="45" y1="70" x2="85" y2="70" strokeWidth="1" />
        <circle cx="35" cy="95" r="3" fill="currentColor" />
        <line x1="45" y1="95" x2="80" y2="95" strokeWidth="1" />
        <circle cx="35" cy="120" r="3" fill="currentColor" />
        <line x1="45" y1="120" x2="90" y2="120" strokeWidth="1" />
        <circle cx="35" cy="145" r="3" fill="currentColor" />
        <line x1="45" y1="145" x2="75" y2="145" strokeWidth="1" />

        <line x1="100" y1="100" x2="145" y2="100" strokeWidth="1" />
        <rect x="145" y="65" width="70" height="70" rx="2" strokeWidth="1" />
        <text x="152" y="90" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">RULESET</text>
        <text x="152" y="102" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">APPETITE</text>
        <text x="152" y="114" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">CHECK</text>

        <line x1="215" y1="100" x2="250" y2="100" strokeWidth="1" stroke="#3b82f6" />
        <rect x="250" y="50" width="60" height="100" rx="2" strokeWidth="1.2" stroke="#3b82f6" />
        <text x="258" y="70" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">RATED</text>
        <text x="258" y="82" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">INDIC.</text>
        <line x1="258" y1="96" x2="295" y2="96" strokeWidth="1" stroke="#3b82f6" />
        <line x1="258" y1="110" x2="290" y2="110" strokeWidth="1" stroke="#3b82f6" />
      </svg>
    );
  }

  if (slug === "logistics-supply-chain") {
    return (
      <svg className="w-full h-full text-slate-500/30" viewBox="0 0 320 200" fill="none" stroke="currentColor">
        <circle cx="50" cy="60" r="16" strokeWidth="1" />
        <text x="42" y="63" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">B/L</text>
        <circle cx="50" cy="140" r="16" strokeWidth="1" />
        <text x="42" y="143" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">INV</text>

        <line x1="66" y1="60" x2="130" y2="90" strokeWidth="1" />
        <line x1="66" y1="140" x2="130" y2="110" strokeWidth="1" />

        <rect x="130" y="75" width="75" height="50" rx="2" strokeWidth="1" />
        <text x="138" y="96" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">TARIFF_HTS</text>
        <text x="138" y="108" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">RECONCILER</text>

        <line x1="205" y1="100" x2="245" y2="100" strokeWidth="1" stroke="#3b82f6" />
        <rect x="245" y="60" width="60" height="80" rx="2" strokeWidth="1.2" stroke="#3b82f6" />
        <text x="252" y="80" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">CUSTOMS</text>
        <text x="252" y="92" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">CLEAR</text>
        <line x1="252" y1="108" x2="292" y2="108" strokeWidth="1" stroke="#3b82f6" />
      </svg>
    );
  }

  // Default architectural topology for other sectors
  return (
    <svg className="w-full h-full text-slate-500/30" viewBox="0 0 320 200" fill="none" stroke="currentColor">
      <circle cx="40" cy="50" r="8" strokeWidth="1" />
      <circle cx="40" cy="100" r="8" strokeWidth="1" />
      <circle cx="40" cy="150" r="8" strokeWidth="1" />
      <line x1="48" y1="50" x2="120" y2="90" strokeWidth="1" />
      <line x1="48" y1="100" x2="120" y2="100" strokeWidth="1" />
      <line x1="48" y1="150" x2="120" y2="110" strokeWidth="1" />
      <rect x="120" y="70" width="80" height="60" rx="2" strokeWidth="1" />
      <text x="128" y="95" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">KNOWLEDGE</text>
      <text x="128" y="108" fill="currentColor" fontSize="8" fontFamily="monospace" stroke="none">ORCHESTRATION</text>
      <line x1="200" y1="100" x2="245" y2="100" strokeWidth="1" stroke="#3b82f6" />
      <rect x="245" y="55" width="60" height="90" rx="2" strokeWidth="1.2" stroke="#3b82f6" />
      <text x="252" y="80" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">ACTION</text>
      <text x="252" y="92" fill="#60a5fa" fontSize="8" fontFamily="monospace" stroke="none">OUTCOME</text>
      <line x1="252" y1="105" x2="290" y2="105" strokeWidth="1" stroke="#3b82f6" />
      <line x1="252" y1="118" x2="280" y2="118" strokeWidth="1" stroke="#3b82f6" />
    </svg>
  );
};

export const IndustriesHubPage: React.FC<IndustriesHubPageProps> = ({
  onOpenBooking,
  onOpenBriefing,
}) => {
  const navigate = useNavigate();
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Industries & Operating Environments | Stratision AI Systems";
  }, []);

  const scrollToIndustries = () => {
    const el = document.getElementById("industries-index");
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* 01 — HERO SECTION (Editorial, Generous Whitespace, No Card) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 sm:pb-28 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              INDUSTRIES
            </span>
            <span className="text-slate-600 font-mono text-xs">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              STRATEGIC OPERATING ENVIRONMENTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            AI systems designed around the realities of your industry.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Every organisation has different workflows, systems, constraints and priorities. Stratision applies the same business-first methodology to each environment — identifying where AI can create genuine operational leverage before determining what should be built.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
          >
            <button
              onClick={() => navigate("/contact")}
              className="px-7 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 shadow-[0_2px_20px_rgba(255,255,255,0.18)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToIndustries}
              className="px-7 py-4 text-slate-300 hover:text-white font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>View Industry Index</span>
              <ChevronRight className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <div className="pt-8 flex flex-wrap items-center gap-8 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Bespoke Systems Architecture
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Private Deployment Options
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Direct Core System Integration
            </span>
          </div>
        </div>
      </section>

      {/* 02 — THE EDITORIAL INDUSTRY INDEX (No Cards, Pure Typography & Hairlines) */}
      <section id="industries-index" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 sm:py-28">
        
        {/* Editorial Section Header */}
        <div className="space-y-4 mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              02 // INDUSTRY VERTICALS
            </span>
            <span className="text-slate-600 font-mono text-xs">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              STRATEGIC OPERATING SECTORS
            </span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Explore how Stratision creates leverage in your sector
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Select an operating environment below to review operational realities, leverage opportunities, capability family mappings, and modelled architectural scenarios.
          </p>
        </div>

        {/* Large Editorial Vertical Index (Divided strictly by horizontal hairlines) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {INDUSTRIES_LIST.map((ind, index) => {
            const isHovered = hoveredIndustry === ind.id;
            return (
              <div
                key={ind.id}
                onMouseEnter={() => setHoveredIndustry(ind.id)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className="py-12 sm:py-16 transition-all duration-300 group relative"
              >
                {/* Restrained Accent Line on Left that extends on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start pl-2 sm:pl-4">
                  
                  {/* Left Column: Number & Large Title (5 Cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs sm:text-sm font-mono text-blue-400 font-bold tracking-widest block transition-colors duration-200 group-hover:text-blue-300">
                      {ind.number} // INDUSTRY VERTICAL
                    </span>

                    <h3
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] transition-transform duration-300 group-hover:translate-x-1.5"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {ind.name}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                      {ind.headline}
                    </p>
                  </div>

                  {/* Middle Column: Relevant Operational Areas as Clean Typography (4 Cols) */}
                  <div className="lg:col-span-4 space-y-4 lg:pt-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                      RELEVANT LEVERAGE AREAS
                    </span>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                      {ind.leveragePoints.slice(0, 4).map((lp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">↳</span>
                          <span className="text-slate-200">{lp.title}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Architectural Link */}
                    <div className="pt-4">
                      <Link
                        to={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-2.5 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        <span>Explore {ind.shortName}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Systems Line Drawing (3 Cols) */}
                  <div className="hidden lg:block lg:col-span-3 h-40 relative opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <IndustryArchitecturalDiagram slug={ind.slug} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 03 — STRATEGIC CTA (Minimal, Large Whitespace, No Card) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 sm:pt-24 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              STRATEGIC ENGAGEMENT
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Find where AI can create genuine leverage across your organisation.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We begin by examining your operations, identifying where AI creates genuine leverage, and prioritising the exact systems required before any engineering begins.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-bold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-3 shadow-[0_2px_20px_rgba(255,255,255,0.2)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={onOpenBooking}
              className="px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-200 hover:text-white font-medium text-sm tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Book a Consultation →</span>
            </button>
          </div>

          <p className="text-xs font-mono text-slate-500 pt-2">
            Confidential discussion with a Senior Systems Architect • No sales reps • Zero obligation
          </p>
        </div>
      </section>
    </div>
  );
};
