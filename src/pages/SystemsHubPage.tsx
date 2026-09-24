import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import { FLAGSHIP_SYSTEMS } from "../data/solutionsData";

interface SystemsHubPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const SystemsHubPage: React.FC<SystemsHubPageProps> = ({
  onOpenBooking,
  onOpenBriefing
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Systems — Flagship AI Architectures | Stratision";
  }, []);

  const handleStartConversation = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 text-slate-100 selection:bg-blue-600/30 selection:text-white">
      
      {/* Editorial Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 sm:pb-28 border-b border-white/[0.08]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-normal">
          <Link to="/" className="hover:text-slate-200 transition-colors">
            Stratision
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300">Systems</span>
        </nav>

        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>FLAGSHIP ARCHITECTURES</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-[-0.035em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Production AI systems built for commercial leverage.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
            Four flagship implementations demonstrating how Stratision transforms unstructured corporate workflows into reliable, human-governed operational engines.
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={handleStartConversation}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-[0_2px_16px_rgba(255,255,255,0.12)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Discuss Your System</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <Link
              to="/solutions"
              className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.12] font-semibold text-sm transition-colors cursor-pointer flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Explore All 6 Solution Domains</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Systems Cards */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="space-y-16">
          {FLAGSHIP_SYSTEMS.map((system) => (
            <div
              key={system.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#090C18] border border-white/[0.12] shadow-2xl space-y-8 group hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-400 font-bold tracking-widest">
                      SYSTEM {system.number}
                    </span>
                    <span className="text-xs font-mono text-slate-500">//</span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {system.solutionDomainName}
                    </span>
                  </div>

                  <h2
                    className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {system.name}
                  </h2>

                  <p className="text-base text-blue-300 font-medium">
                    {system.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed pt-2">
                    {system.summary}
                  </p>
                </div>

                <Link
                  to={`/systems/${system.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs transition-all shadow-md shrink-0 self-start"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Execution Pipeline */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                  OPERATIONAL PIPELINE SEQUENCE
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {system.workflowSequence.map((seq, sIdx) => (
                    <div
                      key={seq}
                      className="p-4 rounded-xl bg-[#0F1426] border border-white/[0.08] text-center space-y-1"
                    >
                      <div className="text-[10px] font-mono text-blue-400 font-bold">STAGE 0{sIdx + 1}</div>
                      <div className="text-xs sm:text-sm font-bold text-white tracking-tight">{seq}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Visual Facet */}
              <div className="p-6 rounded-2xl bg-[#0F1426] border border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                    {system.coreVisual.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{system.coreVisual.meta}</span>
                </div>
                <div className="text-base font-bold text-white">{system.coreVisual.headline}</div>
                <div className="text-xs sm:text-sm text-slate-300 italic">{system.coreVisual.summary}</div>
              </div>

              {/* Governance Footnote */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{system.governanceNote}</span>
                <Link
                  to={`/solutions/${system.solutionDomainSlug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors shrink-0 pl-4"
                >
                  Domain: {system.solutionDomainName} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Editorial CTA */}
      <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-[#090C18] border border-white/[0.12] space-y-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl">
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Have a bespoke system in mind?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Stratision builds custom AI architectures tailored to your exact operational requirements.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleStartConversation}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-base transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-[0_2px_20px_rgba(255,255,255,0.18)] group"
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
