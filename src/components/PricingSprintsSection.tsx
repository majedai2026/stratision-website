import React from "react";
import { PRICING_TIERS } from "../data/stratisionData";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface PricingSprintsSectionProps {
  onOpenBookingWithTier: (tierName: string) => void;
}

export const PricingSprintsSection: React.FC<PricingSprintsSectionProps> = ({
  onOpenBookingWithTier,
}) => {
  return (
    <section id="pricing-sprints" className="py-24 bg-[#080C15] border-t border-slate-800/80 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
            <span>10 — COMMERCIAL TIERS</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">SPRINT ENGAGEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
            Transparent Engagement Sprints. <br />
            <span className="text-slate-400 font-normal">Engineered ROI. Private Tenancy.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Choose the engagement model that matches your immediate AI maturity stage. Start with a focused 14-day diagnostic or deploy a production system with contractually benchmarked performance.
          </p>
        </div>

        {/* 3 Pricing / Sprint Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            return (
              <div
                key={tier.id}
                id={`pricing-card-${tier.id}`}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                  tier.popular
                    ? "bg-slate-900 border border-blue-500 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500"
                    : "bg-slate-900/40 border border-slate-800 hover:border-slate-700 shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-blue-600 text-white shadow-md">
                    Recommended Model
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Top Info */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                        {tier.timeline}
                      </span>
                      {tier.badge && !tier.popular && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-normal">
                      {tier.description}
                    </p>
                  </div>

                  {/* Pricing Model & Ideal For */}
                  <div className="p-4 rounded-xl bg-[#050811] border border-slate-800 text-xs space-y-1.5 font-mono">
                    <span className="text-slate-400 uppercase text-[10px] block">Commercial Scope:</span>
                    <div className="text-white font-semibold text-sm">{tier.priceModel}</div>
                    <p className="text-slate-400 text-[11px] pt-1 border-t border-slate-800/80 font-sans">
                      <span className="text-blue-400 font-medium font-mono">Target: </span>
                      {tier.idealFor}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Sprint Deliverables:
                    </span>
                    <div className="space-y-2 text-xs text-slate-300">
                      {tier.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenBookingWithTier(tier.name)}
                    className={`w-full py-3.5 rounded-full font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.popular
                        ? "bg-white hover:bg-slate-100 text-slate-950 shadow-xl"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white"
                    }`}
                  >
                    <span>Scope {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Enterprise Governance Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <span>All codebases, fine-tuned models, and pipelines are client-owned intellectual property.</span>
          </div>
          <span className="text-slate-300">Fixed-Price SOW • Private VPC Tenancy</span>
        </div>

      </div>
    </section>
  );
};
