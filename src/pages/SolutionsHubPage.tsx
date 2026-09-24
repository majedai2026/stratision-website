import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SolutionsHeroVisual } from "../components/solutions/SolutionsHeroVisual";
import { DomainStoryChapters } from "../components/solutions/DomainStoryChapter";
import { FlagshipEditorialStories } from "../components/solutions/FlagshipEditorialStories";

interface SolutionsHubPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const SolutionsHubPage: React.FC<SolutionsHubPageProps> = ({
  onOpenBooking,
  onOpenBriefing: _onOpenBriefing
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Solutions — AI Systems & Architecture | Stratision";
  }, []);

  const handleStartConversation = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-28 text-slate-100 bg-[#080A10] selection:bg-blue-600/30 selection:text-white">
      
      {/* =========================================================================
          01 — EDITORIAL HERO (Generous Whitespace, Strategic Restraint)
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 sm:pb-24">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-normal">
          <Link to="/" className="hover:text-slate-200 transition-colors">
            Stratision
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300">Solutions</span>
        </nav>

        <div className="max-w-4xl lg:max-w-5xl space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>SOLUTIONS</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-white tracking-[-0.035em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            AI systems built around the work that matters.
          </h1>

          {/* Supporting Copy (Concise, Editorial) */}
          <p
            className="text-lg sm:text-xl lg:text-[22px] text-slate-300 font-normal leading-[1.65] max-w-3xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Stratision designs and builds bespoke AI systems around the workflows, teams and decisions that drive your business.
          </p>

          {/* Action Triggers */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={handleStartConversation}
              className="px-7 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-[15px] tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(255,255,255,0.18)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <Link
              to="/systems"
              className="px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.12] hover:border-white/[0.2] font-medium text-[15px] tracking-tight transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Explore Flagship Systems</span>
              <ChevronRight className="w-4 h-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          HERO VISUAL: SPATIAL COMPOSITION OF SIX ARTEFACTS CONVERGING INTO SYSTEMS
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-28 sm:pb-36">
        <SolutionsHeroVisual />
      </section>


      {/* =========================================================================
          02 — SOLUTION DOMAINS (THE SIX EDITORIAL CHAPTERS)
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-28 sm:pb-40">
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>SOLUTION DOMAINS</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Six chapters of bespoke AI capability.
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed font-normal">
            Every organisation has distinct operational bottlenecks. Stratision designs systems directly around the core disciplines of high-value business execution.
          </p>
        </div>

        {/* 6 Recomposed Chapters */}
        <DomainStoryChapters />
      </section>


      {/* =========================================================================
          03 — FLAGSHIP SYSTEMS (LARGE EDITORIAL PRODUCT STORIES)
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-28 sm:pb-40 border-t border-white/[0.08] pt-24 sm:pt-32">
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>FLAGSHIP SYSTEMS</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Systems built for real work.
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed font-normal">
            Four production-engineered architectures operating across customer, marketing, workforce, and revenue touchpoints.
          </p>
        </div>

        {/* Editorial Stories for the 4 Flagships */}
        <FlagshipEditorialStories />
      </section>


      {/* =========================================================================
          04 — BUILT FOR REAL OPERATING ENVIRONMENTS (TYPOGRAPHY AS THE VISUAL)
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-28 sm:pb-36 border-t border-white/[0.08] pt-24 sm:pt-32">
        <div className="space-y-12">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>BUILT FOR REAL OPERATING ENVIRONMENTS</span>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Designed for regulated, high-touch, and operationally rigorous industries.
            </p>
          </div>

          {/* Large Typographic Visual Block */}
          <div
            className="flex flex-wrap items-baseline gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.2]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="text-white/40 hover:text-white transition-colors duration-200">REAL ESTATE</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 hover:text-white transition-colors duration-200">FINANCIAL SERVICES</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 hover:text-white transition-colors duration-200">INSURANCE</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 hover:text-white transition-colors duration-200">LOGISTICS</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 hover:text-white transition-colors duration-200">PROFESSIONAL SERVICES</span>
            <span className="text-white/20">·</span>
            <span className="text-white hover:text-blue-300 transition-colors duration-200">HEALTHCARE</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 hover:text-white transition-colors duration-200">INFRASTRUCTURE</span>
          </div>

          {/* Healthcare Subtle Supporting Line */}
          <div className="pt-6 border-t border-white/[0.08] max-w-3xl space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white tracking-tight">
                Healthcare &amp; Private Clinics:
              </span>
              <span className="text-xs font-mono text-blue-400">
                AI Receptionist + Patient Coordination
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Administrative intake · Appointment coordination · Staff routing · Follow-up · Strict operational boundaries with zero clinical decision-making.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          05 — SYSTEM DESIGN (METHODOLOGY — ONE CONTINUOUS ELEGANT LINE)
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-28 sm:pb-36 border-t border-white/[0.08] pt-24 sm:pt-32">
        <div className="space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>SYSTEM DESIGN</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              How systems are engineered.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We examine how work moves through your business, identify where AI creates genuine leverage, and build the system directly into your existing infrastructure.
            </p>
          </div>

          {/* Continuous Elegant Line / Path */}
          <div className="py-6 border-y border-white/[0.08]">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8">
              {[
                { step: "01", name: "EXPLORE", desc: "Audit high-friction workflows and quantify operational leverage." },
                { step: "02", name: "ARCHITECT", desc: "Specify model pipelines, data boundaries and human gates." },
                { step: "03", name: "BUILD", desc: "Implement bespoke models, tool integrations and UI artefacts." },
                { step: "04", name: "DEPLOY", desc: "Private cloud rollout with real-time logging and team training." },
                { step: "05", name: "EVOLVE", desc: "Continuous performance tuning and boundary maintenance." }
              ].map((item, idx) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-blue-400 font-bold">{item.step}</span>
                    {idx < 4 && <span className="text-slate-600 hidden sm:inline">→</span>}
                  </div>
                  <div
                    className="text-lg sm:text-xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.name}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          06 — BUSINESS INTELLIGENCE ASSESSMENT™ (RESTRAINED STRATEGIC ENTRY)
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-28 sm:pb-36 border-t border-white/[0.08] pt-24 sm:pt-32">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>ASSESSMENT</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The right system starts with the right problem.
          </h2>

          <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            Before engineering begins, we identify the exact processes where bespoke AI creates defensible enterprise value. The Business Intelligence Assessment™ provides a clear blueprint for deployment.
          </p>

          <div className="pt-2">
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors group cursor-pointer"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Take the Business Intelligence Assessment™</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          07 — FINAL EDITORIAL CTA (CONSISTENT WITH HOMEPAGE BENCHMARK)
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] border border-white/[0.12] p-10 sm:p-16 lg:p-20 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What could AI do inside your business?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Let's identify where it can create the most meaningful difference.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleStartConversation}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-base tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-[0_4px_20px_rgba(255,255,255,0.18)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
