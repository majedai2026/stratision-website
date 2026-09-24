import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StratisionLogo } from "../components/StratisionLogo";
import { BRIEFING_PAGES, BRIEFING_METADATA } from "../data/briefingData";
import {
  ToolsVsSystemsDiagram,
  FourAreasEditorialZones,
  ThreeStageProgressionDiagram,
  BuildOrBuyDiagram,
  CoverArchitecturalMotif,
} from "../components/BriefingDiagrams";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  CheckCircle2,
  Lock,
  Layers,
  ShieldCheck,
  Check,
  Printer,
  ChevronRight,
  X,
} from "lucide-react";

interface BriefingLandingPageProps {
  onOpenBooking: () => void;
  onOpenBriefing?: () => void;
}

export const BriefingLandingPage: React.FC<BriefingLandingPageProps> = ({
  onOpenBooking,
}) => {
  const navigate = useNavigate();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
  const [downloadForm, setDownloadForm] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleSubmitDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadForm.name || !downloadForm.email) return;
    setSubmitted(true);
    setTimeout(() => {
      // Direct user to reader or trigger print
      setIsDownloadModalOpen(false);
      window.open("/briefing/read", "_self");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans antialiased">
      {/* 01 — HERO SECTION */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
        {/* Subtle background ambient radial lighting (Desktop only) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/[0.04] blur-[140px] pointer-events-none rounded-full hidden md:block" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Metadata pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>STRATISION EXECUTIVE PUBLICATION // {BRIEFING_METADATA.docRef}</span>
          </div>

          {/* Hero Titles */}
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            THE EXECUTIVE GUIDE TO AI SYSTEMS
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed mb-4">
            Moving from AI experimentation to governed operational deployment.
          </p>

          <p className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-10">
            A briefing for business leaders
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <Link
              to="/briefing/read"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 shadow-[0_2px_20px_rgba(255,255,255,0.18)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Read the Executive Guide</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white font-medium text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Minimal Cover Line Motif */}
          <CoverArchitecturalMotif />

          {/* Document Specification Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-10 border-t border-white/[0.08] text-left">
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider">FORMAT</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">18-Page Executive Publication</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider">AUDIENCE</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">CEOs, COOs & Strategy Leads</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider">GOVERNANCE</div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">Private Deployment Options</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-wider">COMMERCIAL ACCESS</div>
              <div className="text-xs font-semibold text-blue-400 mt-0.5">Unrestricted Executive Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — THE CORE THESIS: BUSINESS FIRST */}
      <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#0A0D15]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
              EXECUTIVE BRIEFING EXCERPT // SECTION 02
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The question is no longer whether AI matters.
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              AI has already moved beyond experimentation. Employees are using it to write, research, analyse, summarise and communicate.
            </p>
            <p className="text-slate-400">
              Individual use is only one part of the opportunity. The larger opportunity comes when AI becomes part of how work actually moves through an organisation.
            </p>
            <p className="text-white font-medium">
              The executive question becomes: <span className="text-blue-300">“Where should AI be embedded into the way our organisation works?”</span>
            </p>
            <p className="text-sm font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
              That requires a different starting point. Not technology first. BUSINESS FIRST.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — VISUAL EXCERPT 1: AI TOOLS VS AI SYSTEMS */}
      <section className="py-20 sm:py-28 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
              ARCHITECTURAL EXCERPT // SECTION 03
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              AI Tools vs AI Systems
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              The difference is not simply the technology. It is where the technology sits in the workflow. A tool helps someone do a task. A system can become part of the process itself.
            </p>
          </div>

          {/* Render canonical diagram */}
          <ToolsVsSystemsDiagram />

          <div className="pt-4 flex items-center justify-between border-t border-white/[0.06] text-xs font-mono text-slate-400">
            <span>FULL ARCHITECTURAL DETAIL IN THE COMPLETE PUBLICATION</span>
            <Link to="/briefing/read" className="text-blue-400 hover:text-white flex items-center gap-1">
              <span>View Page 03 in Briefing</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — VISUAL EXCERPT 2: FOUR AREAS OF OPPORTUNITY */}
      <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#0A0D15]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
              CAPABILITY FRAMEWORK // SECTION 05
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Four Areas of Opportunity
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              These are not four products. They are four ways of looking for useful business opportunities across your existing operations.
            </p>
          </div>

          {/* Render canonical 4 areas */}
          <FourAreasEditorialZones />

          <div className="pt-4 flex items-center justify-between border-t border-white/[0.06] text-xs font-mono text-slate-400">
            <span>EXCERPT FROM PAGE 05</span>
            <Link to="/briefing/read" className="text-blue-400 hover:text-white flex items-center gap-1">
              <span>Read Full Chapter</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — VISUAL EXCERPT 3: START WITH THE BUSINESS & STRATEGIC SOURCING */}
      <section className="py-20 sm:py-28 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Progression */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                METHODOLOGY EXCERPT // SECTION 06
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Start with the business.
              </h2>
              <p className="text-sm text-slate-300">
                The technology should follow the workflow: Understand → Assess → Prioritise.
              </p>
            </div>
            <ThreeStageProgressionDiagram />
          </div>

          {/* Build or Buy */}
          <div className="space-y-6 pt-10 border-t border-white/[0.08]">
            <div className="space-y-2">
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                STRATEGIC SOURCING // SECTION 12
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Build or Buy?
              </h2>
              <p className="text-sm text-slate-300">
                “The right answer is the one that best fits the business — not automatically the one that involves building more.”
              </p>
            </div>
            <BuildOrBuyDiagram />
          </div>
        </div>
      </section>

      {/* 06 — 18-PAGE PUBLICATION OUTLINE */}
      <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#0A0D15]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
              COMPLETE PUBLICATION OUTLINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              18 Canonical Briefing Spreads
            </h2>
            <p className="text-sm text-slate-300">
              An architectural reference manual for executive decision-makers moving beyond prompts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRIEFING_PAGES.map((page) => (
              <Link
                key={page.pageNumber}
                to={`/briefing/read`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-4 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-blue-400">
                      PAGE {page.pageNumber.toString().padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase">
                      {page.sectionCode.split("//")[0]}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {page.title}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {page.subtitle || page.lead || ""}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-white">
                  <span>VIEW PAGE</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              to="/briefing/read"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all shadow-[0_2px_15px_rgba(255,255,255,0.15)]"
            >
              <span>Read All 18 Pages in Interactive Viewer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — EXECUTIVE ACCESS / DOWNLOAD ACCORDION & MODAL TRIGGER */}
      <section className="py-20 sm:py-28 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
              EXECUTIVE RESOURCE ACCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Access the Complete Briefing
            </h2>
            <p className="text-sm text-slate-300">
              Read online immediately in high-resolution, or request direct PDF delivery for your leadership team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/briefing/read"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all flex items-center justify-center gap-2.5 shadow-[0_2px_15px_rgba(255,255,255,0.15)]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Online Now</span>
            </Link>

            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download PDF Copy</span>
            </button>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-400 flex items-center justify-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> No marketing spam
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-blue-400" /> Zero obligation
            </span>
          </div>
        </div>
      </section>

      {/* 08 — FINAL CTA: BUSINESS INTELLIGENCE ASSESSMENT */}
      <section className="py-20 sm:py-28 bg-[#05070D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
              NEXT OPERATIONAL STEP
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Start with the business.
              <br />
              Then determine what to build.
            </h2>
            <p className="text-base text-slate-300 pt-2">
              If you’re exploring where AI could create meaningful leverage across your organisation, start with a conversation.
            </p>
          </div>

          <p className="text-xs text-slate-400 max-w-md mx-auto">
            We understand what you’re trying to achieve, where the friction sits, and determine the exact systems required before any engineering begins.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 shadow-[0_2px_20px_rgba(255,255,255,0.18)] group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-200 hover:text-white font-medium text-sm tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book a Consultation →</span>
            </button>
          </div>

          <div className="text-xs text-slate-400 font-mono pt-2">
            Confidential discussion with a senior Stratision specialist. No obligation.
          </div>
        </div>
      </section>

      {/* Minimal Executive Download Modal (Name, Work Email, Company only) */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#0D111A] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left">
            <button
              onClick={() => setIsDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg border border-white/5"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="font-mono text-xs text-blue-400 tracking-wider mb-2">
              EXECUTIVE ACCESS // PDF COPY
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              The Executive Guide to AI Systems
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Please provide your professional details to access the full publication dossier.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-blue-400 mx-auto" />
                <div className="text-sm font-semibold text-white">Access Granted</div>
                <p className="text-xs text-slate-400 font-mono">
                  Redirecting to the complete 18-page publication dossier...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitDownload} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={downloadForm.name}
                    onChange={(e) => setDownloadForm({ ...downloadForm, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={downloadForm.email}
                    onChange={(e) => setDownloadForm({ ...downloadForm, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    COMPANY / ORGANISATION
                  </label>
                  <input
                    type="text"
                    value={downloadForm.company}
                    onChange={(e) => setDownloadForm({ ...downloadForm, company: e.target.value })}
                    placeholder="e.g. Apex Global Advisory"
                    className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all cursor-pointer shadow-[0_2px_12px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
                  >
                    <span>Confirm & Read Dossier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center font-mono">
                  Direct access • No marketing lists • Client privacy respected
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
