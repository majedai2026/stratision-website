import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Lock, FileText, ArrowRight, Server, Key, Eye } from "lucide-react";

interface TrustAndEngagementSectionProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const TrustAndEngagementSection: React.FC<TrustAndEngagementSectionProps> = ({
  onOpenBooking,
  onOpenBriefing,
}) => {
  const navigate = useNavigate();
  const trustPillars = [
    {
      title: "Private by Design",
      description: "Systems are designed around your organisation's security, data and deployment requirements.",
      icon: Server,
    },
    {
      title: "Clear Ownership",
      description: "Your data, agreed business assets and custom workflows are governed according to the terms of your engagement.",
      icon: Key,
    },
    {
      title: "Controlled Access",
      description: "Information can be made available according to roles, permissions and business requirements.",
      icon: Lock,
    },
    {
      title: "Human Approval for Key Decisions",
      description: "Important financial, commercial or operational decisions can include human approval where required.",
      icon: Eye,
    },
    {
      title: "Direct Senior Engineering Involvement",
      description: "You work directly with senior specialists throughout the engagement, from initial scoping through delivery and ongoing improvement.",
      icon: Shield,
    },
  ];

  return (
    <section
      id="trust-engagement"
      className="relative py-20 md:py-28 bg-[#080A10] border-t border-white/[0.06] text-slate-100 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start max-w-3xl mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 block">
            06 — SOVEREIGNTY & ENGAGEMENT
          </span>
          <h2
            className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-[1.12]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Built for organizations where governance and control are essential.
          </h2>
          <p
            className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Your AI systems should work within the way your organisation manages its data, security and people. We design each engagement around those requirements from the outset.
          </p>
        </motion.div>

        {/* Clean Editorial Arrangement with Thin Dividers */}
        <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08] mb-14">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="py-5 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.015] px-4 transition-colors"
              >
                <div className="flex items-start md:items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed md:max-w-xl md:text-right">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Executive Asset Banner (Quiet, Professional) */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-7 rounded-2xl bg-[#0B0E17] border border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                EXECUTIVE ASSET
              </span>
            </div>
            <h4
              className="text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Executive AI Systems Briefing
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Read our executive briefing on AI deployment, security, data handling and responsible governance.
            </p>
          </div>

          <button
            onClick={onOpenBriefing}
            className="px-6 py-2.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 font-semibold text-xs tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>Read Executive Briefing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Final Conversion Stage: Calm, Architectural, Beautiful */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto py-10"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 inline-block font-mono">
            STRATEGIC ENTRY POINT
          </span>
          
          <h3
            className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-[-0.03em] leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Start with the business. Then determine what to build.
          </h3>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-5 leading-relaxed">
            We begin by examining your operations, identifying where AI creates genuine leverage, and prioritising the exact systems required before any engineering begins.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-[15px] tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(255,255,255,0.18)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.2] text-slate-200 hover:text-white font-medium text-[15px] tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Book a Consultation →</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span>Confidential discussion with a Senior Systems Architect</span>
            <span className="hidden sm:inline">•</span>
            <span>No sales reps or generic scripts</span>
            <span className="hidden sm:inline">•</span>
            <span>Zero obligation</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
