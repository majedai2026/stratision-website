import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Database, Cpu, CheckCircle } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreSystems: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreSystems,
}) => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080A10] text-slate-100 flex flex-col justify-center"
    >
      {/* Background Subtle Gradient Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main 2-Column Split Hero (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Clarity Editorial Authority (7 Cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>01 — BESPOKE ARTIFICIAL INTELLIGENCE</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.035em] leading-[1.08]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Bespoke AI systems built around how your business actually runs.
            </h1>

            {/* Supporting Proposition */}
            <p
              className="text-lg sm:text-xl text-slate-300 font-normal leading-[1.6] max-w-2xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              We identify operational friction, assess where AI creates genuine value, and engineer bespoke systems that integrate natively with the way your business runs.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-start-conversation-btn"
                onClick={() => navigate("/contact")}
                className="px-7 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-[15px] tracking-tight transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(255,255,255,0.18)] cursor-pointer group"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                id="hero-explore-systems-btn"
                onClick={onExploreSystems}
                className="px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.2] text-slate-200 hover:text-white font-medium text-[15px] tracking-tight transition-all duration-200 flex items-center justify-center cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Explore Systems</span>
              </button>
            </div>

            {/* Subtle Reassurance Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Private Deployment Options</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Client-Governed IP & Asset Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Agreed Data-Handling Controls</span>
              </div>
            </div>

          </div>

          {/* Right Column: Living Vector/Motion System Canvas (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>

        </div>

      </div>
    </section>
  );
};
