import React, { useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Cpu,
  Layers,
  Sparkles,
  Lock
} from "lucide-react";
import { getFlagshipSystemBySlug, FlagshipSystem, FLAGSHIP_SYSTEMS } from "../data/solutionsData";

interface SystemDetailPageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const SystemDetailPage: React.FC<SystemDetailPageProps> = ({
  onOpenBooking,
  onOpenBriefing
}) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const system: FlagshipSystem | undefined = slug ? getFlagshipSystemBySlug(slug) : undefined;
  const isSpeedToLead = slug === "speed-to-lead";

  useEffect(() => {
    window.scrollTo(0, 0);
    if (system) {
      if (isSpeedToLead) {
        document.title = "Respond to every new enquiry before it goes cold | Stratision";
      } else {
        document.title = `${system.name} — Flagship System Specification | Stratision`;
      }
    }
  }, [slug, system, isSpeedToLead]);

  if (!system) {
    return <Navigate to="/systems" replace />;
  }

  const handleStartConversation = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dedicated commercial presentation for Speed-to-Lead
  if (isSpeedToLead) {
    return (
      <div className="pt-28 sm:pt-36 pb-24 text-slate-100 selection:bg-blue-600/30 selection:text-white">
        
        {/* 01 — EDITORIAL HERO */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 sm:pb-28 border-b border-white/[0.08]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-normal">
            <Link to="/" className="hover:text-slate-200 transition-colors">
              Stratision
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/systems" className="hover:text-slate-200 transition-colors">
              Systems
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-300">Sales & Lead Response</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>AI SYSTEM / SALES & LEAD RESPONSE</span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-[-0.035em] leading-[1.04]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Respond to every new enquiry before it goes cold.
            </h1>

            <p className="text-xl sm:text-2xl text-blue-300 font-medium leading-snug">
              Respond to new leads, ask the right questions, capture the details and help book the next conversation — without your team having to chase every enquiry.
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
              When someone contacts your business, the system responds quickly, understands what they need, collects the important information and passes the opportunity to your team. It can work across your website, WhatsApp, email and CRM.
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

              <Link
                to={`/solutions/${system.solutionDomainSlug}`}
                className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.12] font-semibold text-sm transition-colors cursor-pointer flex items-center gap-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>For Sales & Lead Response</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* 02 — HOW IT WORKS: 6 PRACTICAL STAGES */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-3">
              01 / HOW IT WORKS
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              From new enquiry to qualified conversation.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Someone contacts your business, the AI responds in seconds, understands what they need, captures the details, and prepares the next conversation for your team.
            </p>
          </div>

          {/* Practical 6-Stage Journey */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stage 01 */}
            <div className="p-7 rounded-2xl bg-[#090C18] border border-white/[0.08] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold">STAGE 01</span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">INCOMING ENQUIRY</span>
                </div>
                <h3
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  A customer gets in touch
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Website forms, WhatsApp, email, social enquiries or other connected channels.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                Sub-60-second immediate pickup
              </div>
            </div>

            {/* Stage 02 */}
            <div className="p-7 rounded-2xl bg-[#090C18] border border-white/[0.08] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold">STAGE 02</span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">FAST RESPONSE</span>
                </div>
                <h3
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  They get a response
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  The system responds quickly, even when your team is busy or outside normal working hours.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                24/7 availability across all channels
              </div>
            </div>

            {/* Stage 03 */}
            <div className="p-7 rounded-2xl bg-[#090C18] border border-white/[0.08] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold">STAGE 03</span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">INFORMATION GATHERING</span>
                </div>
                <h3
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  The right questions are asked
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  It collects the information your team needs to understand what the enquiry is about and whether it is a genuine opportunity.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                Tailored questions matching your service
              </div>
            </div>

            {/* Stage 04 */}
            <div className="p-7 rounded-2xl bg-[#090C18] border border-white/[0.08] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold">STAGE 04</span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">RECORD & SYNC</span>
                </div>
                <h3
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  The opportunity is captured
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  The customer's details and conversation are recorded and passed into the relevant CRM or workflow.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                Clean notes and organized CRM record
              </div>
            </div>

            {/* Stage 05 */}
            <div className="p-7 rounded-2xl bg-[#090C18] border border-white/[0.08] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold">STAGE 05</span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">DIARY COORDINATION</span>
                </div>
                <h3
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  The next step is booked
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Where appropriate, the system can offer available times and help arrange a call or meeting with your team.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                Direct calendar invitation and reminders
              </div>
            </div>

            {/* Stage 06 */}
            <div className="p-7 rounded-2xl bg-[#090C18] border border-white/[0.08] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold">STAGE 06</span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">HUMAN SALES</span>
                </div>
                <h3
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Your team takes over
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Your people remain in control of the relationship and handle the actual sales conversation.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                100% human relationship and commercial decisions
              </div>
            </div>
          </div>

          {/* Operational Demonstration Card */}
          <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#090C18] border border-white/[0.12] shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="space-y-1">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                  LIVE SYSTEM EXAMPLE // REAL ESTATE & PROPERTY
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Sarah Mitchell · Mayfair Freehold
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 shrink-0">
                Captured in 18s · Buyer Criteria Verified · Sales Team Briefed
              </span>
            </div>

            <p className="text-base text-slate-300 leading-relaxed font-normal max-w-3xl italic">
              “Looking for a 3-bed freehold residence around £1.5M with an immediate completion window.”
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#0F1426] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-400 font-bold">STEP 01</span>
                  <span className="text-xs font-bold text-white">First Response</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Immediate warm response on WhatsApp within 18 seconds of the web enquiry.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1426] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-400 font-bold">STEP 02</span>
                  <span className="text-xs font-bold text-white">Questions Asked</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Confirms budget readiness, mortgage in principle, and required move-in timeline.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1426] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-400 font-bold">STEP 03</span>
                  <span className="text-xs font-bold text-white">Viewing Booked</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Coordinates diary availability and confirms viewing appointment for Thursday 2pm.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1426] border border-white/[0.08] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-400 font-bold">STEP 04</span>
                  <span className="text-xs font-bold text-white">Team Briefed</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Complete summary and notes placed straight into CRM for the senior agent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — COMMERCIAL BENEFITS (WHAT YOUR TEAM GETS) */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
          <div className="max-w-3xl mb-14 sm:mb-18">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-3">
              02 / BUSINESS BENEFITS
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What your team gets out of it.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Your team should not have to manually chase every new enquiry. Stratision makes sure new opportunities are responded to, captured and moved forward quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">01</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">RESPONSE SPEED</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                More enquiries answered
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Every lead receives an instant, professional response across phone, webchat, WhatsApp, or email — day, night, or weekend.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">02</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">REVENUE RETENTION</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Fewer leads forgotten
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                No enquiry sits in an inbox unread. Leads are captured, verified, and logged into your system before prospects look elsewhere.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">03</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">PIPELINE VELOCITY</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Faster responses
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Reaching a buyer within 60 seconds increases conversion rates dramatically. The system engages leads while their purchase intent is peak.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">04</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">LEAD QUALITY</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Better-qualified opportunities
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                The system asks your essential qualifying questions so your sales team steps into conversations with full context and verified criteria.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">05</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">WORKLOAD REDUCTION</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Less manual follow-up
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Automate the repetitive initial greeting, scheduling back-and-forth, and CRM note-taking so your staff aren't bogged down in admin.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">06</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">SALES CAPACITY</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                More time to actually sell
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Your salespeople spend their working day on high-value calls, client meetings, and closing deals instead of chasing unresponsive leads.
              </p>
            </div>
          </div>
        </section>

        {/* 04 — HUMAN GOVERNANCE & CONTROL */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#090C18] border border-white/[0.1] space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>CLEAR BOUNDARIES & HUMAN CONTROL</span>
            </div>

            <h3
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              AI handles the first response. Your people make the sales decisions.
            </h3>

            <p className="text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
              AI handles the repetitive first response and information gathering, while people remain responsible for the actual sales relationship, commercial terms, pricing commitments, and important decisions. The system never makes promises or commitments outside your approved rules.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                People Own the Relationship
              </span>
              <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                No Unauthorised Pricing Commitments
              </span>
              <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                Instant Team Handover
              </span>
              <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                Zero Training on Your Private Customer Data
              </span>
            </div>
          </div>
        </section>

        {/* 05 — OTHER SYSTEMS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
              EXPLORE OTHER STRATISION SYSTEMS
            </span>
            <Link
              to="/systems"
              className="text-xs text-blue-400 hover:text-blue-300 font-medium"
            >
              View All Systems →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FLAGSHIP_SYSTEMS.filter((f) => f.id !== "speed-to-lead").slice(0, 3).map((f) => (
              <Link
                key={f.id}
                to={`/systems/${f.slug}`}
                className="p-6 rounded-2xl bg-[#090C18] border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
              >
                <div className="text-[11px] font-mono text-blue-400 font-bold">SYSTEM {f.number}</div>
                <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {f.name}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {f.tagline}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 06 — FINAL EDITORIAL CTA */}
        <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-[#090C18] border border-white/[0.12] space-y-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-2xl">
              <h2
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Respond to every lead today.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Stratision builds, integrates, and supports this system directly inside your existing email, website, WhatsApp and CRM workflows.
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
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 text-slate-100 selection:bg-blue-600/30 selection:text-white">
      
      {/* 01 — EDITORIAL HERO */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 sm:pb-28 border-b border-white/[0.08]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-normal">
          <Link to="/" className="hover:text-slate-200 transition-colors">
            Stratision
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/systems" className="hover:text-slate-200 transition-colors">
            Systems
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300">{system.name}</span>
        </nav>

        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>FLAGSHIP SYSTEM {system.number} // {system.solutionDomainName.toUpperCase()}</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-[-0.035em] leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {system.name}
          </h1>

          <p className="text-xl sm:text-2xl text-blue-300 font-medium leading-snug">
            {system.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
            {system.summary}
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

            <Link
              to={`/solutions/${system.solutionDomainSlug}`}
              className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.12] font-semibold text-sm transition-colors cursor-pointer flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Domain: {system.solutionDomainName}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02 — PRIMARY VISUAL OBJECT (System Operational Facet) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-3">
            01 // LIVE OPERATIONAL OBJECT
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Operational Execution
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Every Stratision flagship system executes deterministic tasks with verified intermediate checkpoints and transparent audit logs.
          </p>
        </div>

        {/* Big Visual Object */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090C18] border border-white/[0.12] shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                {system.coreVisual.badge}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {system.coreVisual.headline}
              </h3>
            </div>

            <span className="text-xs font-mono text-slate-400 shrink-0">
              {system.coreVisual.meta}
            </span>
          </div>

          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-3xl italic">
            {system.coreVisual.summary}
          </p>

          {/* 4-Stage Operational Sequence */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-semibold">
              EXECUTION PIPELINE SEQUENCE
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {system.workflowSequence.map((node, nIdx) => (
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

          {/* Detailed Functional Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {system.coreVisual.nodes.map((node, idx) => (
              <div
                key={node.title}
                className="p-5 rounded-2xl bg-[#0F1426] border border-white/[0.08] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-400 font-bold">STEP 0{idx + 1}</span>
                  <span className="text-xs font-bold text-white">{node.title}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — KEY SYSTEM CAPABILITIES */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold mb-3">
            02 // SPECIFICATIONS
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Key architectural capabilities.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Engineered to integrate with existing client data silos, APIs, and communication channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {system.keyCapabilities.map((cap, idx) => (
            <div
              key={cap}
              className="p-8 rounded-2xl bg-[#090C18] border border-white/[0.08] space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold">0{idx + 1}</span>
                <span className="text-xs font-mono text-slate-500">//</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">SPECIFICATION</span>
              </div>
              <h3
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {cap}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Strict deterministic guardrails prevent unprompted deviations or unauthorised transactional actions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — GOVERNANCE & CONTROL BOUNDARY */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090C18] border border-white/[0.1] space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>OPERATIONAL GOVERNANCE RULESET</span>
          </div>

          <h3
            className="text-2xl sm:text-4xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            System Boundaries & Authority
          </h3>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
            {system.governanceNote}
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Zero Model Training on Client Data
            </span>
            <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Human Escalation Mandatory
            </span>
            <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              Full Execution Provenance
            </span>
          </div>
        </div>
      </section>

      {/* 05 — OTHER FLAGSHIPS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
            OTHER FLAGSHIP ARCHITECTURES
          </span>
          <Link
            to="/systems"
            className="text-xs text-blue-400 hover:text-blue-300 font-medium"
          >
            View All Systems →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FLAGSHIP_SYSTEMS.filter((f) => f.id !== system.id).slice(0, 3).map((f) => (
            <Link
              key={f.id}
              to={`/systems/${f.slug}`}
              className="p-6 rounded-2xl bg-[#090C18] border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
            >
              <div className="text-[11px] font-mono text-blue-400 font-bold">SYSTEM {f.number}</div>
              <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                {f.name}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {f.tagline}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 06 — FINAL EDITORIAL CTA */}
      <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-10 sm:p-16 lg:p-20 rounded-3xl bg-[#090C18] border border-white/[0.12] space-y-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl">
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Deploy {system.name}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Stratision builds, integrates, and deploys this system directly inside your operating stack.
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
