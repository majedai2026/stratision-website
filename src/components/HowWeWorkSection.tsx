import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";

interface HowWeWorkSectionProps {
  onOpenBooking: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();
  const steps = [
    {
      number: "01",
      layer: "DISCOVER",
      title: "Discover & Diagnose",
      summary: "Understand the organisation before deciding what technology should be built.",
      description:
        "Through our Business Intelligence Assessment™, we review operational workflows, team friction, existing systems and AI opportunities to identify where technology can create genuine value.",
      deliverable: "Business Intelligence Assessment™ & Strategic AI Roadmap",
    },
    {
      number: "02",
      layer: "ARCHITECT",
      title: "Architect & Specify",
      summary: "Design the system around your real processes, systems and business rules.",
      description:
        "We produce a complete system specification: workflow maps, data security boundaries, integration requirements and approval checkpoints tailored specifically to your operation.",
      deliverable: "System Specification & Governance Blueprint",
    },
    {
      number: "03",
      layer: "DELIVER",
      title: "Deliver & Integrate",
      summary: "Bespoke engineering connected directly into your existing business systems.",
      description:
        "Our senior engineering team builds the system within your designated security environment, connecting directly with your ERP, CRM, databases and core operational software.",
      deliverable: "Bespoke Production System & Direct Operational Integration",
    },
    {
      number: "04",
      layer: "ADOPT & EVOLVE",
      title: "Adopt & Evolve",
      summary: "Ensuring effective team adoption and continuous system improvement.",
      description:
        "We do not build software and walk away. We ensure your team is fully trained on the new workflows, providing ongoing operational support, performance tuning and system enhancements.",
      deliverable: "Team Training, Operational Support & Ongoing Enhancement",
    },
  ];

  return (
    <section
      id="how-we-work"
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
            05 — HOW WE WORK
          </span>
          <h2
            className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-[1.12]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A four-stage engagement protocol. Clear from the outset.
          </h2>
          <p
            className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            We do not produce theoretical slide decks. Every engagement follows a structured sequence with clear milestone deliverables.
          </p>
        </motion.div>

        {/* Editorial Four-Stage Layout with Fine Dividers (No Roadmap/Cards Look) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-white/[0.08]">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`p-7 lg:p-8 flex flex-col justify-between transition-colors hover:bg-white/[0.02] relative ${
                idx < 3 ? "lg:border-r border-b lg:border-b-0 border-white/[0.08]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <span className="text-xs font-mono font-bold text-blue-400">
                    PHASE {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-semibold">
                    {step.layer}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-white tracking-tight mt-2 mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-slate-200 leading-snug mb-3">
                  {step.summary}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Notation */}
              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <span className="text-[9px] font-mono uppercase text-slate-400 block mb-1">
                  DELIVERABLE
                </span>
                <div className="text-xs font-medium text-slate-200 font-mono">
                  {step.deliverable}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-14 rounded-2xl bg-[#0B0E17] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                COMMERCIAL ENGAGEMENT COMMITMENT
              </span>
            </div>
            <p className="text-sm text-slate-300">
              Every engagement starts with a direct conversation. If we determine AI cannot deliver clear, measurable business leverage to your operation, we state so immediately.
            </p>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 group shadow-sm"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
