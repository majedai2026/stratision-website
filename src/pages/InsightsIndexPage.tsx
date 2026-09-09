import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { 
  INSIGHTS_ARTICLES, 
  INSIGHTS_TERRITORIES, 
  INDUSTRY_PERSPECTIVES_LINKS, 
  POINT_OF_VIEW_FEATURE 
} from "../data/insightsData";
import { InsightTerritory } from "../types";

interface InsightsIndexPageProps {
  onOpenBooking: () => void;
  onOpenBriefing?: () => void;
}

export const InsightsIndexPage: React.FC<InsightsIndexPageProps> = ({
  onOpenBooking,
}) => {
  const navigate = useNavigate();
  const [selectedTerritory, setSelectedTerritory] = useState<InsightTerritory | "All">("All");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.title = "Stratision Insights | Thinking Clearly About AI & Enterprise Systems";
    
    // Meta description update
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Perspectives on where AI creates genuine operational leverage, how organisations should approach deployment, and what it takes to build systems that work in the real world."
      );
    }
  }, []);

  const handleScrollToArticles = () => {
    const el = document.getElementById("insights-index-articles");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const featuredArticle = INSIGHTS_ARTICLES[0]; // "Most Businesses Don't Have an AI Problem. They Have a Workflow Problem."

  const filteredArticles = selectedTerritory === "All"
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter((art) => art.territory === selectedTerritory);

  return (
    <div className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans antialiased">
      {/* SECTION 01 — HERO */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 border-b border-white/[0.06] overflow-hidden">
        {/* Subtle architectural linework background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="insights-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#insights-grid)" />
          </svg>
        </div>

        {/* Ambient radial gradient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/[0.03] blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Quiet Editorial Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-medium">
                STRATISION INSIGHTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-white leading-[1.08] max-w-4xl">
              Thinking clearly about AI, business and the systems between them.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Perspectives on where AI creates genuine operational leverage, how organisations should approach deployment, and what it takes to build systems that work in the real world.
            </p>

            {/* Primary Interaction & Quiet Editorial Metadata */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={handleScrollToArticles}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[0_2px_14px_rgba(255,255,255,0.12)] group"
              >
                <span>Explore Insights</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Quiet Editorial Metadata — Restrained typography, hairline separation, no rounded capsule */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="tracking-wider">08 ESSAYS</span>
                <span className="text-white/20">/</span>
                <span className="tracking-wider">04 PERSPECTIVES</span>
                <span className="text-white/20">/</span>
                <span className="text-slate-500 tracking-wider">SYSTEMS & GOVERNANCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — FEATURED PERSPECTIVE (EDITORIAL COMPOSITION — NOT A SAAS CARD) */}
      <section className="py-20 sm:py-24 border-b border-white/[0.06] relative bg-[#06080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Metadata Bar */}
          <div className="flex items-center justify-between pb-4 mb-12 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-blue-400" />
              <span>FEATURED PERSPECTIVE // {featuredArticle.docRef}</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-slate-400">
              <span>{featuredArticle.territory.toUpperCase()}</span>
              <span className="text-white/20">/</span>
              <span>{featuredArticle.readTime.toUpperCase()}</span>
              <span className="text-white/20">/</span>
              <span>{featuredArticle.type.toUpperCase()}</span>
            </div>
          </div>

          {/* Asymmetric Editorial Lead Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Editorial Text Column */}
            <div className="lg:col-span-8">
              <div className="flex sm:hidden items-center gap-2 font-mono text-xs text-slate-400 mb-4">
                <span className="text-blue-400">{featuredArticle.territory}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <Link
                to={`/insights/${featuredArticle.slug}`}
                className="group block"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.12] mb-6 group-hover:text-blue-300 transition-colors">
                  {featuredArticle.title}
                </h2>
              </Link>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
                {featuredArticle.thesis}
              </p>

              {/* Editorial Pullquote Accent */}
              <div className="border-l border-blue-400/60 pl-5 sm:pl-6 py-1 mb-10">
                <p className="text-sm sm:text-base text-slate-300 font-normal italic leading-relaxed">
                  “The distance between AI capability and business workflow is where leverage lives.”
                </p>
                <span className="block font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-2">
                  Stratision Systems Principle
                </span>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  to={`/insights/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-white hover:text-blue-400 transition-colors group"
                >
                  <span>Read Full Perspective</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Architectural Visual Language Column */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-10">
              <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-4">
                SYSTEMS ARCHITECTURE SCHEMA
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/[0.02] border border-white/[0.06] text-xs font-mono space-y-2">
                  <div className="text-slate-400">// OPERATIONAL DIAGNOSTIC</div>
                  <div className="text-slate-200">LAYER 01: High-friction workflow intake</div>
                  <div className="text-blue-400">LAYER 02: Governed boundary validation</div>
                  <div className="text-slate-200">LAYER 03: Deterministic system execution</div>
                </div>

                <div className="relative h-44 w-full border border-white/[0.04] bg-black/30 flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-full p-4" viewBox="0 0 280 120" fill="none">
                    {/* Architectural Grid Lines */}
                    <line x1="20" y1="20" x2="260" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                    <line x1="20" y1="60" x2="260" y2="60" stroke="rgba(255,255,255,0.12)" />
                    <line x1="20" y1="100" x2="260" y2="100" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                    
                    <line x1="50" y1="10" x2="50" y2="110" stroke="rgba(255,255,255,0.08)" />
                    <line x1="140" y1="10" x2="140" y2="110" stroke="rgba(59,130,246,0.3)" />
                    <line x1="230" y1="10" x2="230" y2="110" stroke="rgba(255,255,255,0.08)" />

                    {/* Schematic Nodes */}
                    <rect x="35" y="48" width="30" height="24" fill="#080A10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <text x="50" y="63" textAnchor="middle" fill="#94A3B8" fontSize="8" className="font-mono">TASK</text>

                    <path d="M 65 60 L 120 60" stroke="#3B82F6" strokeWidth="1" />
                    <polygon points="120,57 126,60 120,63" fill="#3B82F6" />

                    <rect x="126" y="44" width="48" height="32" fill="#0E1726" stroke="#3B82F6" strokeWidth="1" />
                    <text x="150" y="63" textAnchor="middle" fill="#93C5FD" fontSize="8" className="font-mono">PIPELINE</text>

                    <path d="M 174 60 L 210 60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <polygon points="210,57 216,60 210,63" fill="#94A3B8" />

                    <rect x="216" y="48" width="36" height="24" fill="#080A10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <text x="234" y="63" textAnchor="middle" fill="#94A3B8" fontSize="8" className="font-mono">VALUE</text>
                  </svg>
                </div>

                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  Systems architecture focuses on the pipeline connecting operational friction to enterprise value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — LATEST THINKING (EDITORIAL PUBLICATION INDEX) */}
      <section id="insights-index-articles" className="py-20 sm:py-24 border-b border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Territory Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-white/[0.06] gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>03 // LATEST THINKING</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-[-0.03em] leading-[1.12]">
                The Editorial Index
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal leading-relaxed">
                Architectural essays, operational diagnostics, and governance principles.
              </p>
            </div>

            {/* Territory Filter — Understated Editorial Tabs with Hairline Indicator */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <button
                onClick={() => setSelectedTerritory("All")}
                className={`text-xs font-mono tracking-wider transition-colors pb-1 border-b cursor-pointer ${
                  selectedTerritory === "All"
                    ? "text-white border-blue-400 font-medium"
                    : "text-slate-400 hover:text-slate-200 border-transparent"
                }`}
              >
                ALL ({INSIGHTS_ARTICLES.length})
              </button>
              {INSIGHTS_TERRITORIES.slice(0, 3).map((territory) => (
                <button
                  key={territory.id}
                  onClick={() => setSelectedTerritory(territory.name)}
                  className={`text-xs font-mono tracking-wider transition-colors pb-1 border-b cursor-pointer ${
                    selectedTerritory === territory.name
                      ? "text-white border-blue-400 font-medium"
                      : "text-slate-400 hover:text-slate-200 border-transparent"
                  }`}
                >
                  {territory.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Article Index (Hairline Separators, Generous Spacing, No Cards) */}
          <div className="divide-y divide-white/[0.08]">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="group block py-7 sm:py-9 transition-all duration-200 hover:bg-white/[0.01]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  {/* Article Numeral */}
                  <div className="md:col-span-1 font-mono text-xs text-slate-500 group-hover:text-blue-400 transition-colors tracking-widest">
                    {article.number}
                  </div>

                  {/* Title & Metadata */}
                  <div className="md:col-span-6">
                    <div className="flex items-center gap-3 mb-1.5 font-mono text-xs text-slate-400">
                      <span className="text-blue-400 uppercase tracking-wide">
                        {article.territory}
                      </span>
                      <span className="text-white/20">•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors tracking-tight leading-snug">
                      {article.title}
                    </h3>
                  </div>

                  {/* Short Descriptor */}
                  <div className="md:col-span-4 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {article.shortDescriptor}
                  </div>

                  {/* Directional Indicator */}
                  <div className="md:col-span-1 flex justify-end">
                    <span className="text-slate-500 group-hover:text-white transition-all group-hover:translate-x-1.5 inline-block text-base">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — EXPLORE BY PERSPECTIVE (EDITORIAL INDEX — NO 4-CARD SAAS GRID) */}
      <section className="py-20 sm:py-24 border-b border-white/[0.06] bg-[#06080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>04 // EDITORIAL TERRITORIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-[-0.03em] leading-[1.12]">
              Explore by Perspective
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal leading-relaxed">
              Strategic lenses on systems, workflows, and governance — not software product categories.
            </p>
          </div>

          {/* Editorial Index of Territories — Large Typography, Hairline Separators, Generous Vertical Rhythm */}
          <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {/* 01: AI & Business */}
            <div
              onClick={() => {
                setSelectedTerritory("AI & Business");
                handleScrollToArticles();
              }}
              className="group py-8 sm:py-10 transition-all duration-200 cursor-pointer hover:bg-white/[0.01]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                <div className="lg:col-span-1 font-mono text-xs sm:text-sm text-blue-400/90 font-medium tracking-widest">
                  01
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors tracking-tight leading-tight">
                    AI & Business
                  </h3>
                </div>
                <div className="lg:col-span-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed group-hover:text-slate-200 transition-colors">
                  How should leaders think about AI?
                </div>
                <div className="lg:col-span-1 flex justify-end">
                  <span className="text-slate-500 group-hover:text-white transition-all group-hover:translate-x-2 inline-block text-xl">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* 02: Systems & Operations */}
            <div
              onClick={() => {
                setSelectedTerritory("Systems & Operations");
                handleScrollToArticles();
              }}
              className="group py-8 sm:py-10 transition-all duration-200 cursor-pointer hover:bg-white/[0.01]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                <div className="lg:col-span-1 font-mono text-xs sm:text-sm text-blue-400/90 font-medium tracking-widest">
                  02
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors tracking-tight leading-tight">
                    Systems & Operations
                  </h3>
                </div>
                <div className="lg:col-span-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed group-hover:text-slate-200 transition-colors">
                  Where should AI actually enter the workflow?
                </div>
                <div className="lg:col-span-1 flex justify-end">
                  <span className="text-slate-500 group-hover:text-white transition-all group-hover:translate-x-2 inline-block text-xl">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* 03: Governance & Leadership */}
            <div
              onClick={() => {
                setSelectedTerritory("Governance & Leadership");
                handleScrollToArticles();
              }}
              className="group py-8 sm:py-10 transition-all duration-200 cursor-pointer hover:bg-white/[0.01]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                <div className="lg:col-span-1 font-mono text-xs sm:text-sm text-blue-400/90 font-medium tracking-widest">
                  03
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors tracking-tight leading-tight">
                    Governance & Leadership
                  </h3>
                </div>
                <div className="lg:col-span-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed group-hover:text-slate-200 transition-colors">
                  How should organisations deploy AI responsibly and practically?
                </div>
                <div className="lg:col-span-1 flex justify-end">
                  <span className="text-slate-500 group-hover:text-white transition-all group-hover:translate-x-2 inline-block text-xl">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* 04: Industry Perspectives */}
            <Link
              to="/industries"
              className="group block py-8 sm:py-10 transition-all duration-200 hover:bg-white/[0.01]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                <div className="lg:col-span-1 font-mono text-xs sm:text-sm text-blue-400/90 font-medium tracking-widest">
                  04
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors tracking-tight leading-tight">
                    Industry Perspectives
                  </h3>
                </div>
                <div className="lg:col-span-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed group-hover:text-slate-200 transition-colors">
                  What changes when AI meets the realities of a particular industry?
                </div>
                <div className="lg:col-span-1 flex justify-end">
                  <span className="text-slate-500 group-hover:text-white transition-all group-hover:translate-x-2 inline-block text-xl">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05 — STRATISION POINT OF VIEW */}
      <section className="py-20 sm:py-24 border-b border-white/[0.06] relative bg-[#080A10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-medium">
                {POINT_OF_VIEW_FEATURE.eyebrow}
              </span>
            </div>

            {/* Core Thesis Statement */}
            <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.16] mb-6">
              “{POINT_OF_VIEW_FEATURE.thesis}”
            </blockquote>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
              {POINT_OF_VIEW_FEATURE.supporting}
            </p>

            <Link
              to={`/insights/${POINT_OF_VIEW_FEATURE.targetArticleSlug}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-white text-sm font-semibold transition-all group"
            >
              <span>Read the Point of View</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — FINAL CTA */}
      <section className="py-24 sm:py-28 relative bg-[#05070C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-mono text-xs text-blue-400 font-medium tracking-widest uppercase mb-4">
              START WITH THE BUSINESS. THEN DETERMINE WHAT TO BUILD.
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-tight mb-6">
              Start with the business. Then determine what to build.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
              The starting point is understanding how the organisation works, where friction exists, and where AI may create genuine operational leverage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.15)] group cursor-pointer"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all text-center cursor-pointer"
              >
                Book a Consultation →
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-8 font-mono tracking-widest">
              UNDERSTAND / ASSESS / PRIORITISE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
