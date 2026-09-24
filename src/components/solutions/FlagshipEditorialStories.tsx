import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FLAGSHIP_SYSTEMS } from "../../data/solutionsData";

export const FlagshipEditorialStories: React.FC = () => {
  return (
    <div className="w-full space-y-24 sm:space-y-36">
      {FLAGSHIP_SYSTEMS.map((sys, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={sys.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              isReversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Context & Outcome Column (5 Cols) */}
            <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
              <div className="space-y-2">
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
                  FLAGSHIP SYSTEM 0{index + 1}
                </span>
                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {sys.name}
                </h3>
                <p className="text-xl text-blue-300 font-medium tracking-tight">
                  {sys.tagline}
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {sys.summary}
              </p>

              {/* Clear Business Outcome Statement */}
              <div className="pt-2 border-l-2 border-emerald-400 pl-4 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Business Outcome
                </span>
                <div className="text-base font-semibold text-white">
                  {sys.coreVisual.summary}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/systems/${sys.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors group cursor-pointer"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span>Explore {sys.name} Architecture</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Large Visual Dominant Object (7 Cols) */}
            <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
              <div className="rounded-3xl bg-gradient-to-b from-[#0C1022] to-[#070912] p-8 sm:p-12 border border-white/[0.08] shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                    {sys.coreVisual.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {sys.coreVisual.meta}
                  </span>
                </div>

                <div className="space-y-4 py-2">
                  <div
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {sys.coreVisual.headline}
                  </div>

                  {/* Nodes Sequence */}
                  <div className="space-y-3 pt-2">
                    {sys.coreVisual.nodes.map((node, nIdx) => (
                      <div
                        key={node.title}
                        className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <strong className="text-white font-semibold">{node.title}:</strong>{" "}
                          <span className="text-slate-300">{node.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-xs text-slate-400 flex items-center justify-between">
                  <span>{sys.governanceNote}</span>
                  <span className="font-mono text-slate-500 hidden sm:inline">PROVEN DEPLOYMENT</span>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
