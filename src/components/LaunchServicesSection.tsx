import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Bot, PhoneCall, Workflow, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { CORE_LAUNCH_SERVICES } from "../data/stratisionData";

interface LaunchServicesSectionProps {
  onOpenBooking: () => void;
  onSelectService?: (serviceId: string) => void;
}

export const LaunchServicesSection: React.FC<LaunchServicesSectionProps> = ({
  onOpenBooking,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("service-workforce-learning");

  const serviceIcons: Record<string, React.ReactNode> = {
    "service-workforce-learning": <Bot className="w-5 h-5 text-blue-400" />,
    "service-receptionist": <PhoneCall className="w-5 h-5 text-blue-400" />,
    "service-workflow-automation": <Workflow className="w-5 h-5 text-blue-400" />,
  };

  const activeService =
    CORE_LAUNCH_SERVICES.find((s) => s.id === selectedServiceId) || CORE_LAUNCH_SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#080C15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              SEC. 03 / CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Three Turnkey Systems. <br />
              <span className="text-blue-400 font-extrabold">Immediate Commercial Velocity.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              Engineered specifically for mid-market and enterprise businesses seeking to eliminate repetitive labor, capture lost revenue, and train high-performing teams.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-mono tracking-wider uppercase flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Custom Solution Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Core Services Selector Tabs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CORE_LAUNCH_SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-6 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                  isSelected
                    ? "bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${isSelected ? "bg-blue-500/20 text-blue-400" : "bg-slate-800 text-slate-400"}`}>
                      {serviceIcons[service.id] || <Bot className="w-5 h-5 text-blue-400" />}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-400 font-semibold">{service.roi}</span>
                  <span className="text-slate-500">Explore →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Blueprint Card */}
        <div className="mt-8 p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Overview & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                    Service Architecture
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                    {activeService.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Target ICP and Capabilities */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Core Capabilities</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              {activeService.deliverables && (
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Target Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-blue-400">•</span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Timeline, Pricing Baseline & Action */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#050811] border border-slate-800 space-y-6">
              
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Deployment Velocity</span>
                <div className="text-xl font-bold text-white font-mono">{activeService.timeline}</div>
                <p className="text-xs text-slate-400">From kickoff discovery to live verified production rollout.</p>
              </div>

              <div className="space-y-1 pt-4 border-t border-slate-800">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Target ROI Outcome</span>
                <div className="text-lg font-bold text-blue-400 font-mono">{activeService.roi}</div>
                <p className="text-xs text-slate-400">{activeService.businessOutcome}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Enterprise Security & Data Isolation Standard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>100% Client-Owned Intellectual Property</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Scope {activeService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
