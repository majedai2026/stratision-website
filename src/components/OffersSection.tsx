import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Bot, PhoneCall, Workflow, Sparkles, X, ChevronRight, Zap, TrendingUp, Users, Clock } from "lucide-react";
import { STRATISION_OFFERS, STRATISION_PILLARS, OfferDetail } from "../data/stratisionData";

interface OffersSectionProps {
  onOpenBooking: () => void;
  onOpenBookingWithOffer?: (offerTitle: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({
  onOpenBooking,
}) => {
  const [activeModalOffer, setActiveModalOffer] = useState<OfferDetail | null>(null);

  return (
    <section id="offers-section" className="py-24 bg-[#080C15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center justify-center gap-2">
            <span>CORE SYSTEMS</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">ARCHITECTURAL OFFERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
            Core Implementation Systems.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Bespoke AI implementations engineered for measured operational returns. We deploy directly into your private cloud infrastructure with client ownership.
          </p>
        </div>

        {/* 3 Core Offer Cards (Easton Consulting Style with UI Previews) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STRATISION_OFFERS.map((offer, idx) => (
            <div
              key={offer.id}
              id={`offer-card-${idx}`}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div>
                {/* Visual UI Mockup Header inside card */}
                <div className="p-5 bg-slate-950 border-b border-slate-800 relative">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="text-slate-300 font-semibold">{offer.sampleUI.title}</span>
                    </div>
                    <span className="text-slate-400 bg-slate-900 px-2 py-0.5 border border-slate-800 text-[10px]">
                      DEMONSTRATION SAMPLE
                    </span>
                  </div>

                  {/* 3 simulated metric widgets */}
                  <div className="grid grid-cols-3 gap-2">
                    {offer.sampleUI.stats.map((stat, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-center">
                        <div className="text-sm sm:text-base font-bold font-mono text-white">
                          {stat.value}
                        </div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5 truncate">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offer Body */}
                <div className="p-6 space-y-4">
                  {/* Category Pill */}
                  <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-blue-400">
                    {offer.badge}
                  </div>

                  {/* Offer Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight group-hover:text-blue-400 transition-colors">
                    {offer.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-4">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModalOffer(offer)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-700"
                >
                  <span>See how it works</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* The AI Implementation Partner For Growing Businesses (3 Metric Pillars from Easton) */}
        <div className="mt-28 pt-16 border-t border-slate-800/80">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              SEC. 03 / WHY STRATISION
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              The AI Implementation Partner For Growing Businesses
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Design, deliver, and evolve production-ready AI systems. Automate operations. Scale revenue. Free your team to do what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: More output. Same team */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-blue-400 font-bold">OUTPUT / WEEK</span>
                <span>+380% GAIN</span>
              </div>
              
              {/* Visual chart bar */}
              <div className="space-y-2 py-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Legacy Human Admin</span>
                  <span className="font-mono text-slate-400">22 hrs/wk</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[30%] h-full bg-slate-600 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-[11px] text-blue-400 font-semibold pt-1">
                  <span>Stratision Autonomous AI</span>
                  <span className="font-mono text-blue-400">105 hrs/wk</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[92%] h-full bg-blue-500 rounded-full" />
                </div>
              </div>

              <h4 className="text-lg font-bold text-white tracking-tight pt-2">
                More output. Same team.
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                AI takes the repetitive, mundane work. Your people do what you hired them for — high-leverage client growth and critical decisions.
              </p>
            </div>

            {/* Pillar 2: Grow without hiring */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-blue-400 font-bold">OPERATING CAPACITY</span>
                <span>24/7 CONTINUOUS</span>
              </div>

              {/* Visual line graph curve */}
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                <div className="flex items-center justify-around text-xs font-mono text-slate-400 py-1">
                  <div>
                    <div className="text-white font-bold text-sm">$0</div>
                    <div className="text-[10px] text-slate-500">Recruitment</div>
                  </div>
                  <div className="text-slate-600">•</div>
                  <div>
                    <div className="text-white font-bold text-sm">0 Days</div>
                    <div className="text-[10px] text-slate-500">PTO / Sick</div>
                  </div>
                  <div className="text-slate-600">•</div>
                  <div>
                    <div className="text-blue-400 font-bold text-sm">100%</div>
                    <div className="text-[10px] text-slate-500">Consistency</div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white tracking-tight pt-2">
                Grow without hiring.
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                24/7 autonomous systems that scale as fast as your ambitions without linear payroll inflation or administrative burnout.
              </p>
            </div>

            {/* Pillar 3: Speed to production */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-blue-400 font-bold">DEPLOYMENT VELOCITY</span>
                <span>RAPID SPRINT</span>
              </div>

              {/* Timeline visual */}
              <div className="py-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="text-center">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mx-auto mb-1 border border-blue-500/30">1</div>
                  <span className="text-[10px]">Audit</span>
                </div>
                <div className="h-[1px] flex-1 bg-slate-700 mx-2 mb-3" />
                <div className="text-center">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mx-auto mb-1 border border-blue-500/30">2</div>
                  <span className="text-[10px]">Build</span>
                </div>
                <div className="h-[1px] flex-1 bg-slate-700 mx-2 mb-3" />
                <div className="text-center">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mx-auto mb-1 border border-emerald-500/30">✓</div>
                  <span className="text-[10px]">Live</span>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white tracking-tight pt-2">
                Speed to production.
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We value velocity. Working, production-grade systems deployed in your business with agility, continuously optimizing and evolving.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive "See How It Works" Detail Modal */}
      {activeModalOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalOffer(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                {activeModalOffer.badge}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeModalOffer.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalOffer.headline}
              </p>
            </div>

            {/* Key Deliverables & Technical Specs */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Included Deliverables:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalOffer.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Capabilities & Guardrails:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalOffer.capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-blue-400">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee callout */}
            <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/30 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-blue-400 font-bold">Performance Guarantee</span>
                <p className="text-xs text-slate-200">{activeModalOffer.guaranteeText}</p>
              </div>
              <div className="text-xs font-mono text-slate-400 shrink-0">{activeModalOffer.timeline}</div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveModalOffer(null)}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const offer = activeModalOffer;
                  setActiveModalOffer(null);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <span>Scope {activeModalOffer.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
