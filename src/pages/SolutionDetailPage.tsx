import React, { useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Lock,
  Layers,
  Sparkles
} from "lucide-react";
import { getSolutionBySlug, SolutionDomain, SOLUTION_DOMAINS } from "../data/solutionsData";

interface SolutionDetailPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({
  onOpenBooking,
  onOpenBriefing
}) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const solution: SolutionDomain | undefined = slug ? getSolutionBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (solution) {
      document.title = `${solution.title} — AI Architecture & Systems | Stratision`;
    }
  }, [slug, solution]);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const handleStartConversation = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 text-slate-100 selection:bg-blue-600/30 selection:text-white">
      
      {/* 01 — EDITORIAL HERO (Generous Whitespace, Strategic Clarity) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 sm:pb-28 border-b border-white/[0.08]">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-normal">
          <Link to="/" className="hover:text-slate-200 transition-colors">
            Stratision
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/solutions" className="hover:text-slate-200 transition-colors">
            Solutions
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300">{solution.title}</span>
        </nav>

        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>DOMAIN {solution.number} // {solution.tagline.toUpperCase()}</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-[-0.035em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {solution.title}
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 font-medium leading-snug">
            {solution.shortDescription}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
            {solution.longDescription}
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={handleStartConversation}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-[0_2px_16px_rgba(255,255,255,0.12)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {solution.flagshipSystemSlug && (
              <Link
                to={`/systems/${solution.flagshipSystemSlug}`}
                className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.12] font-semibold text-sm transition-colors cursor-pointer flex items-center gap-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Flagship: {solution.flagshipSystemName}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 02 — PRIMARY VISUAL OBJECT (Realistic Business Deliverable) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-3">
            01 // PRODUCTION ARTIFACT
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The Primary Business Object
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Stratision systems do not produce vague outputs or generic text. Every system produces structured, verifiable business assets tailored to internal governance standards.
          </p>
        </div>

        {/* Large Visual Deliverable */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090C18] border border-white/[0.12] shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                {solution.primaryArtefact.label}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {solution.primaryArtefact.title}
              </h3>
            </div>

            <span className="text-xs font-mono text-slate-400 shrink-0">
              {solution.primaryArtefact.meta}
            </span>
          </div>

          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
            {solution.primaryArtefact.description}
          </p>

          {/* Workflow Sequence */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-semibold">
              EXECUTION PIPELINE
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {solution.workflowSequence.map((node, nIdx) => (
                <div
                  key={node}
                  className="p-4 rounded-xl bg-[#0F1426] border border-white/[0.08] text-center space-y-1 shadow-sm"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[10px] font-mono text-blue-400 font-bold">0{nIdx + 1}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight block">{node}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Execution Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {solution.primaryArtefact.steps.map((s) => (
              <div
                key={s.step}
                className="p-5 rounded-2xl bg-[#0F1426] border border-white/[0.08] space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-300 font-bold">{s.step}</span>
                    {s.status && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {s.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-200 pt-2 font-normal leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03 — SYSTEMS & CAPABILITIES (What We Build) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-3">
            02 // CORE CAPABILITIES
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Capabilities engineered into this domain.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Bespoke engineering designed around the exact operational demands of your organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.capabilities.map((cap, idx) => (
            <div
              key={cap}
              className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">0{idx + 1}</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">CAPABILITY</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {cap}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Built directly into your internal infrastructure with zero vendor lock-in and complete source code ownership.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — INDUSTRY APPLICATIONS (Where This System Is Deployed) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-3">
            03 // INDUSTRY APPLICATIONS
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Operational deployments across sectors.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Proven architectures adapted to the regulatory, workflow, and compliance constraints of each operating context.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solution.industries.map((ind) => (
            <div
              key={ind}
              className="p-6 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-2 hover:border-white/20 transition-colors"
            >
              <Building2 className="w-5 h-5 text-blue-400 mb-2" />
              <div className="text-base font-bold text-white tracking-tight">{ind}</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Active deployments matching industry compliance and operating velocity standards.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — GOVERNANCE & CONTROL BOUNDARY */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090C18] border border-white/[0.1] space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>GOVERNANCE & BOUNDARIES</span>
          </div>

          <h3
            className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Human oversight is non-negotiable.
          </h3>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
            Stratision systems operate within deterministic boundaries. Commercial decisions, pricing approvals, and sensitive client commitments remain strictly under human authority. Client data is never used to train public models.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Client-Owned IP & Code
            </span>
            <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Deterministic Exception Routing
            </span>
            <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Audit-Ready Execution Traces
            </span>
          </div>
        </div>
      </section>

      {/* 06 — ADJACENT SOLUTIONS NAVIGATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
            EXPLORE ADJACENT SOLUTION DOMAINS
          </span>
          <Link
            to="/solutions"
            className="text-xs text-blue-400 hover:text-blue-300 font-medium"
          >
            View All Domains →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SOLUTION_DOMAINS.filter((s) => s.id !== solution.id).slice(0, 3).map((adj) => (
            <Link
              key={adj.id}
              to={`/solutions/${adj.slug}`}
              className="p-6 rounded-2xl bg-[#090C18] border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
            >
              <div className="text-[11px] font-mono text-blue-400 font-bold">DOMAIN {adj.number}</div>
              <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                {adj.title}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {adj.shortDescription}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 07 — FINAL EDITORIAL CTA */}
      <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-[#090C18] border border-white/[0.12] space-y-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl">
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ready to architect this system?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Book a strategic architecture session to review your workflows and evaluate deployment feasibility.
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
