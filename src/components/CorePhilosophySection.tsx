import React from "react";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Cpu, Target, Compass } from "lucide-react";

interface CorePhilosophySectionProps {
  onOpenBooking: () => void;
}

export const CorePhilosophySection: React.FC<CorePhilosophySectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="core-philosophy" className="py-24 bg-[#080C15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
            STRATISION THESIS & PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            We Don't Sell AI. <br />
            <span className="text-blue-400">We Solve Commercial Problems.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The market is flooded with tool vendors peddling technology for technology's sake. At Stratision, we operate with strict engineering discipline: technology is merely the mechanism; guaranteed business output is the mandate.
          </p>
        </div>

        {/* 2 Fundamental Guiding Tests */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Test 1: The Apple Test */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Guiding Principle 01</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/30">
                  Clarity of Intent
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">The Apple Test</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-serif italic">
                "If you cannot explain what a system does without mentioning AI, you do not understand what it does."
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                We never pitch "neural architectures" or "LLM chains" to executive boards. We pitch 85% faster invoice reconciliation, zero missed inbound customer calls, and deterministic regulatory compliance.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Tested on every client initiative before a line of code is written.</span>
            </div>
          </div>

          {/* Test 2: The McKinsey Test */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Guiding Principle 02</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/30">
                  Economic Rigor
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">The McKinsey Test</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-serif italic">
                "Every single capability must tie directly to measurable P&L impact."
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                AI without financial attribution is vanity. Every Stratision engagement defines strict pre- and post-deployment baselines across labor hours reclaimed, conversion lift, error suppression, and margin expansion.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Target className="w-4 h-4 text-blue-400" />
              <span>Enforced via our auditable guaranteed ROI payback standard.</span>
            </div>
          </div>

        </div>

        {/* Business-First vs Technology-First Comparison Table */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="mb-6 space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Why 95% of Enterprise AI Initiatives Fail
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              The fundamental divide between generic tool vendors and strategic engineering partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* The Failed Way */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>The Technology-First Trap (Generic Agencies)</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Starts with tools: "Let's build a GPT wrapper or fine-tune an LLM."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Generic ChatGPT trainings that employees abandon within 14 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>No integration with legacy ERP/CRM systems, creating more fragmented data silos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Zero ROI tracking or accountability for operational throughput.</span>
                </li>
              </ul>
            </div>

            {/* The Stratision Way */}
            <div className="space-y-4 md:border-l md:border-slate-800 md:pl-8">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>The Stratision Business-First Framework</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Starts with operational friction: where are billable hours burning and deals stalling?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Bespoke AI Workforce Learning Systems™ built for specific departmental workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Deterministic API integrations into HubSpot, Salesforce, Xero, NetSuite, and PostgreSQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Executive dashboards with auditable, dollar-denominated ROI tracking.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Ready to transition from experimental AI dabbling to institutional competitive advantage?
            </div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold tracking-wide flex items-center gap-1.5 cursor-pointer transition-all shadow-md"
            >
              <span>Schedule Strategic Discovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
