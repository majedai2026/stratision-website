import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HowWeWorkSectionProps {
  onOpenBooking: () => void;
}

const STEPS = [
  {
    step: "01",
    title: "SHOW US THE PROBLEM",
    explanation: "Tell us what is slowing your business down.",
  },
  {
    step: "02",
    title: "MAP THE WORK",
    explanation: "We look at the people, processes and information involved.",
  },
  {
    step: "03",
    title: "BUILD THE SYSTEM",
    explanation: "We build a private AI system around the way your business actually works.",
  },
  {
    step: "04",
    title: "STAY IN CONTROL",
    explanation: "Your team keeps final approval and decision-making. AI handles the repetitive work.",
  },
];

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="how-we-work"
      className="relative py-20 sm:py-36 lg:py-44 bg-[#06080F] border-t border-white/[0.06] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>HOW WE WORK</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.035em] leading-[1.05]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            From problem to working system.
          </h2>
          <p className="text-base sm:text-xl text-slate-300 mt-4 sm:mt-5 font-normal leading-relaxed">
            What happens when you work with Stratision — from your first conversation to a live system.
          </p>
        </motion.div>

        {/* 4 Steps: Clean Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/[0.12] pt-6 space-y-3"
            >
              {/* Large Number */}
              <div className="font-mono text-3xl sm:text-4xl font-bold text-blue-400">
                {item.step}
              </div>

              {/* Short Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.title}
              </h3>

              {/* One Concise Explanation */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {item.explanation}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Understated Supporting Statement & Direct CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <p
            className="text-base sm:text-xl font-medium text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Built around your business. Controlled by your people.
          </p>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-[0_2px_16px_rgba(255,255,255,0.12)] group shrink-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
