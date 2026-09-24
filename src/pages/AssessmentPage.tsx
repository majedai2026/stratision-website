import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowDown, ChevronRight, FileText } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import { AssessmentHeroVisual } from "../components/AssessmentHeroVisual";
import { AssessmentPrioritisationMatrix } from "../components/AssessmentPrioritisationMatrix";
import { AssessmentSignatureVisual } from "../components/AssessmentSignatureVisual";

interface AssessmentPageProps {
  onOpenBooking?: () => void;
  onOpenBriefing?: () => void;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({ onOpenBooking, onOpenBriefing }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Business Intelligence Assessment™ | Stratision";
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Understand where AI may create genuine operational leverage across your organisation with Stratision's Business Intelligence Assessment™."
    );

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/assessment`);

    window.scrollTo({ top: 0, behavior: "smooth" });
    trackEvent("BIA_started");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white pt-24 pb-24 font-sans">
      
      {/* 01 & 02: BREADCRUMB & METADATA NOTATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">
            STRATISION
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 font-semibold">
            BUSINESS INTELLIGENCE ASSESSMENT™
          </span>
        </nav>
      </div>

      {/* ==================================================
          03 — HERO SECTION
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 lg:pb-24 border-b border-white/[0.06]">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            CONSULTANCY METHODOLOGY // LATER-STAGE DIAGNOSTIC
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.1] mb-6">
            Before you build with AI, understand the business.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-10">
            The Business Intelligence Assessment™ is Stratision's proprietary diagnostic methodology. Deployed with qualified clients following an initial strategy conversation, it examines how your organisation works — where friction exists, how information moves, where decisions slow down, and where AI creates genuine operational leverage.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-[0_2px_12px_rgba(255,255,255,0.15)] group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 bg-white/[0.02]"
              >
                <span>Book a Consultation →</span>
              </button>
            )}

            <button
              onClick={() => scrollToSection("what-we-examine")}
              className="px-5 py-3.5 text-slate-400 hover:text-slate-200 font-mono text-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>See What We Examine</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Hero Architectural Diagnostic Schematic */}
        <AssessmentHeroVisual />
      </section>

      {/* ==================================================
          04 — WHY START WITH THE BUSINESS
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Foundation Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold">
              DIAGNOSTIC PHILOSOPHY // 01
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white leading-tight">
              The technology should follow the workflow.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Organisations often begin their AI journey with a technology question: Which model should we use? Which platform should we buy? What can we automate?
            </p>
            <p className="text-base text-slate-400 leading-relaxed font-normal">
              The more useful questions come first.
            </p>
          </div>

          {/* Right Column: The Core Five Inquiries & Visual Progression */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* The Five Inquiries */}
            <div className="border-l-2 border-blue-500/40 pl-6 sm:pl-8 space-y-5">
              {[
                "Where does work slow down?",
                "Where is information difficult to find?",
                "Where do people repeat the same work?",
                "Where do handoffs create friction?",
                "Where could better information improve a decision?",
              ].map((q, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-blue-400 font-semibold mt-1">
                    0{idx + 1}
                  </span>
                  <span className="text-lg sm:text-xl font-medium text-white tracking-tight">
                    {q}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-base text-slate-300 font-medium pt-2">
              The Assessment starts there.
            </div>

            {/* Visual Progression: Business Reality → Friction → Opportunity → Priority → Decision */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="font-mono text-[11px] text-slate-400 tracking-widest uppercase mb-4">
                METHODOLOGICAL PROGRESSION
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
                {[
                  { step: "01", label: "Business Reality", desc: "How work happens" },
                  { step: "02", label: "Friction", desc: "Where delays occur" },
                  { step: "03", label: "Opportunity", desc: "Leverage surfaces" },
                  { step: "04", label: "Priority", desc: "Value vs. feasibility" },
                  { step: "05", label: "Decision", desc: "Definitive action" },
                ].map((item, i) => (
                  <div key={i} className="border border-white/[0.08] bg-[#05070D] p-3 rounded">
                    <div className="text-blue-400 font-semibold text-[10px]">{item.step}</div>
                    <div className="text-white font-medium text-xs mt-1">{item.label}</div>
                    <div className="text-slate-500 text-[10px] mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          05 — WHAT WE EXAMINE
          ================================================== */}
      <section
        id="what-we-examine"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-b border-white/[0.06]"
      >
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold mb-3">
            THE SIX OPERATIONAL VECTORS // 02
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight">
            What we examine.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-4">
            A comprehensive, multi-layered examination across the six fundamental operational layers of the enterprise.
          </p>
        </div>

        {/* Editorial Numbered Index (Strictly NOT Cards, Hairlines & Generous Spacing) */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {[
            {
              num: "01",
              name: "Business",
              desc: "How the organisation operates, where value is created and where important work happens.",
              detail: "Strategic business priorities, departmental responsibilities, and operational revenue drivers.",
            },
            {
              num: "02",
              name: "People",
              desc: "Roles, responsibilities, judgement, capability and how employees interact with existing processes.",
              detail: "Human cognitive load, expertise distribution, approval gates, and institutional knowledge preservation.",
            },
            {
              num: "03",
              name: "Processes",
              desc: "How work moves from beginning to completion, including repetition, delays and manual handoffs.",
              detail: "Workflow routing, administrative overhead, queue latency, and multi-team synchronisation.",
            },
            {
              num: "04",
              name: "Systems",
              desc: "The technology already supporting the organisation and where systems connect or remain separate.",
              detail: "Core ERP, CRM, document management tools, custom databases, and API connectivity boundaries.",
            },
            {
              num: "05",
              name: "Information",
              desc: "Where important information lives, how it is structured, how people find it and where gaps exist.",
              detail: "Unstructured documents, proprietary datasets, semantic search friction, and siloed records.",
            },
            {
              num: "06",
              name: "AI Readiness",
              desc: "Leadership, people, data, documentation, security, governance, integration and culture.",
              detail: "Tenancy boundaries, compliance obligations, data hygiene, and organizational readiness for change.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline group"
            >
              <div className="md:col-span-2 font-mono text-xs sm:text-sm text-blue-400 font-semibold tracking-wider">
                {item.num} —
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em]">
                  {item.name}
                </h3>
              </div>
              <div className="md:col-span-7 space-y-2">
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          06 — THE ASSESSMENT (Understand. Assess. Prioritise.)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold mb-3">
            METHODOLOGY FRAMEWORK // 03
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight">
            Understand. Assess. Prioritise.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-4">
            A disciplined three-stage progression that bridges operational reality to executive investment clarity.
          </p>
        </div>

        {/* Connected Architectural Progression (NOT Three Rounded Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 border-t border-white/[0.08] pt-12">
          
          {/* Stage 01: UNDERSTAND */}
          <div className="space-y-6 relative">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
              <span className="font-mono text-sm text-blue-400 font-semibold">01</span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">STAGE // DISCOVERY</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-[-0.02em] mb-2">
                UNDERSTAND
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                We establish how the organisation works.
              </p>
            </div>
            <ul className="space-y-3 pt-2 font-mono text-xs text-slate-300 border-l border-white/[0.1] pl-4">
              {[
                "People",
                "Processes",
                "Systems",
                "Information",
                "Decisions",
              ].map((it, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                  <span className="text-slate-200">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stage 02: ASSESS */}
          <div className="space-y-6 relative border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-10">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
              <span className="font-mono text-sm text-blue-400 font-semibold">02</span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">STAGE // ANALYSIS</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-[-0.02em] mb-2">
                ASSESS
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                We identify where friction and opportunity exist.
              </p>
            </div>
            <ul className="space-y-3 pt-2 font-mono text-xs text-slate-300 border-l border-white/[0.1] pl-4">
              {[
                "Repetitive work",
                "Delays",
                "Manual work",
                "Information gaps",
                "Handoffs",
                "Decision bottlenecks",
              ].map((it, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                  <span className="text-slate-200">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stage 03: PRIORITISE */}
          <div className="space-y-6 relative border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-10">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
              <span className="font-mono text-sm text-blue-400 font-semibold">03</span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">STAGE // STRATEGY</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-[-0.02em] mb-2">
                PRIORITISE
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                We determine which opportunities deserve attention.
              </p>
            </div>
            <ul className="space-y-3 pt-2 font-mono text-xs text-slate-300 border-l border-blue-500/40 pl-4">
              {[
                "Business value",
                "Frequency",
                "Capacity",
                "Feasibility",
                "Governance",
                "Priority",
              ].map((it, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-slate-200">{it}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ==================================================
          07 — FROM ASSESSMENT TO PRIORITY
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold mb-3">
            FILTERING METHODOLOGY // 04
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight">
            Not a list of AI ideas. A prioritised view of the business.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-4">
            Most organisations do not suffer from a lack of AI concepts; they suffer from unprioritised execution. The Assessment applies rigorous architectural dimensions to isolate where capital and effort produce genuine operational return.
          </p>
        </div>

        {/* Prioritisation Matrix Component */}
        <AssessmentPrioritisationMatrix />
      </section>

      {/* ==================================================
          08 — WHAT THE ASSESSMENT PRODUCES
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold mb-3">
            DELIVERABLES & ARTIFACTS // 05
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight">
            Clarity before construction.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-4">
            Five executive-grade strategic deliverables engineered to provide unequivocal clarity on where technology belongs and where it should not go.
          </p>
        </div>

        {/* Editorial Sequence of Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t border-b border-white/[0.08] py-12">
          {[
            {
              step: "01",
              title: "Business Overview",
              desc: "A synthesized architectural baseline of how the organisation generates value, mapping departmental workflows and existing system landscape.",
            },
            {
              step: "02",
              title: "Opportunity Register",
              desc: "A granular catalog of operational friction points, administrative delays, information silos, and candidate intervention surfaces.",
            },
            {
              step: "03",
              title: "Prioritisation Matrix",
              desc: "Every candidate mapped across Business Value and Technical Feasibility, categorised into Priority, Consider, Defer, or Do Not Build.",
            },
            {
              step: "04",
              title: "AI Readiness View",
              desc: "An objective appraisal of organisational readiness across data infrastructure, governance, security boundaries, and team capability.",
            },
            {
              step: "05",
              title: "Executive Roadmap",
              desc: "A phased strategic timeline defining whether to buy, configure, or build, establishing dependencies, governance milestones, and resource requirements.",
            },
          ].map((del, i) => (
            <div key={i} className="space-y-3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6 first:border-l-0 first:pl-0">
              <div className="font-mono text-xs text-blue-400 font-semibold">{del.step} // ARTIFACT</div>
              <h3 className="text-lg font-bold text-white tracking-tight">{del.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">{del.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 p-6 sm:p-8 rounded border border-white/[0.08] bg-[#05070D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-lg sm:text-xl font-medium text-white tracking-tight leading-relaxed">
              The outcome is not &ldquo;more AI&rdquo;. It is greater clarity about where AI belongs.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs transition-colors shrink-0 cursor-pointer"
          >
            Discuss an Assessment →
          </button>
        </div>
      </section>

      {/* ==================================================
          13 — SIGNATURE VISUAL & 09 — AFTER THE ASSESSMENT
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold mb-3">
            ARCHITECTURAL PATHWAY // 06
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight">
            The Assessment is the beginning of the conversation, not a commitment to build.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mt-4">
            Stratision maintains strict technological neutrality. The purpose of the diagnostic is to reveal the correct course of action — whether that means buying established software, configuring existing platforms, engineering bespoke architecture, or choosing not to build.
          </p>
        </div>

        {/* Major Architectural Decision-Path Illustration */}
        <AssessmentSignatureVisual />
      </section>

      {/* ==================================================
          10 — WHO IT IS FOR
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold">
              ORGANISATIONAL PROFILE // 07
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white leading-tight">
              For organisations asking what AI should actually mean for the way they work.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Designed for leadership teams who reject promotional AI rhetoric and require architectural precision before deploying capital.
            </p>

            <div className="pt-4">
              <Link
                to="/briefing"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Read the Executive Guide to AI Systems</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Concise Editorial List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {[
                "Executive teams evaluating AI strategy",
                "Organisations moving beyond experimentation",
                "Businesses with significant manual workflows",
                "Teams managing information-heavy processes",
                "Organisations considering bespoke AI systems",
                "Leaders unsure where AI investment should begin",
              ].map((item, idx) => (
                <div key={idx} className="py-5 flex items-center justify-between gap-4 group">
                  <span className="text-base sm:text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                  <span className="font-mono text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          08 — COMMERCIAL JOURNEY & ENGAGEMENT PROGRESSION
          ================================================== */}
      <section
        id="commercial-journey"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
      >
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-blue-400 tracking-widest uppercase font-semibold mb-3">
            COMMERCIAL JOURNEY // 08
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight mb-4">
            How the Assessment fits into our client engagements.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We don’t believe in asking organisations to complete exhaustive diagnostic surveys before speaking with us. The preferred first step is always a direct, low-friction human conversation.
          </p>
        </div>

        {/* Linear Stage Architecture */}
        <div className="border border-white/[0.08] rounded-xl bg-[#05070D] p-6 sm:p-10 mb-16">
          <div className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-8 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <span>ENGAGEMENT ARCHITECTURE</span>
            <span className="text-blue-400">5-PHASE COMMERCIAL PROGRESSION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              {
                step: "PHASE 01",
                title: "Initial Conversation",
                tag: "START HERE",
                tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
                desc: "A confidential discussion with a senior Stratision specialist to understand your operating environment, bottlenecks, and strategic objectives.",
                ctaLabel: "Start a Conversation →",
                ctaAction: () => navigate("/contact"),
              },
              {
                step: "PHASE 02",
                title: "Qualified Opportunity",
                tag: "ALIGNMENT",
                tagColor: "text-slate-400 border-white/10 bg-white/[0.02]",
                desc: "We confirm organisational readiness, executive sponsorship, departmental scope, and strategic viability before scheduling diagnostic fieldwork.",
              },
              {
                step: "PHASE 03",
                title: "Business Intelligence Assessment™",
                tag: "DIAGNOSTIC",
                tagColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
                desc: "Our structured methodology examines people, processes, systems, information, and AI readiness to identify genuine leverage surfaces.",
              },
              {
                step: "PHASE 04",
                title: "Findings & Architecture",
                tag: "DELIVERABLES",
                tagColor: "text-slate-400 border-white/10 bg-white/[0.02]",
                desc: "Delivery of the Opportunity Register, Prioritisation Matrix, and Architecture Roadmap establishing build, buy, or configure decisions.",
              },
              {
                step: "PHASE 05",
                title: "Build & Deploy",
                tag: "ENGINEERING",
                tagColor: "text-slate-400 border-white/10 bg-white/[0.02]",
                desc: "Engineering production AI systems deployed inside private enterprise boundaries, with rigorous governance and performance monitoring.",
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6 first:border-l-0 first:pl-0 ${
                  idx === 0 ? "md:bg-blue-500/[0.02] md:-my-4 md:py-4 md:px-4 md:rounded-lg md:border-l-0 md:border md:border-blue-500/20" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-blue-400/90 font-semibold">{phase.step}</span>
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded border uppercase tracking-wider ${phase.tagColor}`}>
                      {phase.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {phase.desc}
                  </p>
                </div>

                {phase.ctaLabel && (
                  <div className="pt-4 mt-4 border-t border-white/[0.06]">
                    <button
                      onClick={phase.ctaAction}
                      className="text-xs font-semibold text-white hover:text-blue-300 flex items-center gap-1.5 transition-colors cursor-pointer group"
                    >
                      <span>{phase.ctaLabel}</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final Conversion Unit */}
        <div className="border border-white/[0.08] rounded-2xl bg-gradient-to-b from-[#0B0F19] to-[#05070D] p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/[0.02] text-slate-300 text-xs font-mono uppercase tracking-wider">
            FIRST STEP // HUMAN CONVERSATION
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Start with a conversation. Then determine what to build.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Discuss your organisation's workflows, operational bottlenecks, and AI objectives with a senior Stratision specialist. We’ll establish whether the Business Intelligence Assessment™ is the appropriate next step.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_2px_16px_rgba(255,255,255,0.18)] group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-200 hover:text-white font-medium text-sm tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Consultation →</span>
              </button>
            )}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono">
            <span>Direct conversation with senior specialist</span>
            <span>•</span>
            <span>No sales pressure</span>
            <span>•</span>
            <span>Strict confidentiality</span>
          </div>
        </div>
      </section>

    </main>
  );
};
