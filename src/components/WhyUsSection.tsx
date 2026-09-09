import React from "react";
import { Check, X, ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { COMPARISON_TABLE } from "../data/stratisionData";

interface WhyUsSectionProps {
  onOpenBooking: () => void;
  onOpenBlueprint: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenBooking, onOpenBlueprint }) => {
  return (
    <section id="why-stratision" className="py-24 bg-[#080C15] border-t border-slate-800/80 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Comparison Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>SEC. 05 / MARKET COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why not just hire, buy, or consult?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Most businesses try to solve AI transformation in one of four ways. Here is how Stratision compares across velocity, IP ownership, and guaranteed commercial ROI.
          </p>
        </div>

        {/* Comparison Table Matrix */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 sm:p-5 font-mono uppercase text-slate-400 text-xs tracking-wider w-2/5">
                  WHAT YOU NEED
                </th>
                <th className="p-4 sm:p-5 font-mono uppercase text-blue-400 text-xs tracking-wider bg-blue-950/30 border-x border-blue-500/30">
                  <div className="flex items-center gap-1.5 font-bold">
                    <span>STRATISION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-mono uppercase text-slate-400 text-xs tracking-wider">
                  BIG CONSULTANCY
                </th>
                <th className="p-4 sm:p-5 font-mono uppercase text-slate-400 text-xs tracking-wider">
                  CHEAP AI AGENCY
                </th>
                <th className="p-4 sm:p-5 font-mono uppercase text-slate-400 text-xs tracking-wider">
                  IN-HOUSE HIRE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {COMPARISON_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-slate-200">
                    {row.feature}
                  </td>
                  
                  {/* Stratision Column (Highlighted) */}
                  <td className="p-4 sm:p-5 font-semibold text-white bg-blue-950/20 border-x border-blue-500/20">
                    {typeof row.stratision === "boolean" ? (
                      <div className="flex items-center gap-1.5 text-blue-400">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono">Included</span>
                      </div>
                    ) : (
                      <span className="text-blue-400 text-xs">{row.stratision}</span>
                    )}
                  </td>

                  {/* Big Consultancy */}
                  <td className="p-4 sm:p-5 text-slate-400 text-xs">
                    {typeof row.bigConsultancy === "boolean" ? (
                      row.bigConsultancy ? (
                        <Check className="w-4 h-4 text-slate-300" />
                      ) : (
                        <X className="w-4 h-4 text-rose-500/80" />
                      )
                    ) : (
                      <span>{row.bigConsultancy}</span>
                    )}
                  </td>

                  {/* Cheap AI Agency */}
                  <td className="p-4 sm:p-5 text-slate-400 text-xs">
                    {typeof row.cheapAgency === "boolean" ? (
                      row.cheapAgency ? (
                        <Check className="w-4 h-4 text-slate-300" />
                      ) : (
                        <X className="w-4 h-4 text-rose-500/80" />
                      )
                    ) : (
                      <span>{row.cheapAgency}</span>
                    )}
                  </td>

                  {/* In-House Hire */}
                  <td className="p-4 sm:p-5 text-slate-400 text-xs">
                    {typeof row.inHouseHire === "boolean" ? (
                      row.inHouseHire ? (
                        <Check className="w-4 h-4 text-slate-300" />
                      ) : (
                        <X className="w-4 h-4 text-rose-500/80" />
                      )
                    ) : (
                      <span>{row.inHouseHire}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Value Prop Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#050811] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white tracking-tight">
              Ready to bypass agency bloat and in-house hiring bottlenecks?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Get senior systems architects and custom code running in your staging environment.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-md"
            >
              <span>Schedule Evaluation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
