import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

interface BespokeSystemsSectionProps {
  onOpenBooking: () => void;
}

interface Capability {
  number: string;
  name: string;
  shortDescription: string;
  extendedDetail: string;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    name: "CONNECT",
    shortDescription: "Unify fragmented software, databases and communication channels.",
    extendedDetail: "Bridge disconnected systems, internal ERPs and CRMs into a single operational nervous system.",
  },
  {
    number: "02",
    name: "AUTOMATE",
    shortDescription: "Remove manual administrative steps between teams and departments.",
    extendedDetail: "Eliminate repetitive copy-pasting, data verification, and status updates with deterministic exception routing.",
  },
  {
    number: "03",
    name: "INTELLIGENTLY ORGANISE",
    shortDescription: "Turn scattered company files and documentation into instant answers.",
    extendedDetail: "Structure unstructured files, technical specifications, and historical records into accessible institutional intelligence.",
  },
  {
    number: "04",
    name: "BUILD",
    shortDescription: "Engineer custom AI systems tailored to non-standard business models.",
    extendedDetail: "Develop proprietary AI agents and bespoke infrastructure governed and owned entirely by your organisation.",
  },
];

export const BespokeSystemsSection: React.FC<BespokeSystemsSectionProps> = ({ onOpenBooking }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="bespoke-systems"
      className="relative py-28 md:py-36 bg-[#080A10] border-t border-white/[0.06] text-slate-100 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>BESPOKE ENGINEERING</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.035em] leading-[1.1]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            When the right solution doesn't exist.
          </h2>

          <p
            className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed font-normal"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Not every business problem fits a predefined system. We design and build around the ones that don't.
          </p>
        </motion.div>

        {/* 4 Large Capabilities: Creative Consultancy Capability Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CAPABILITIES.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={cap.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative p-8 sm:p-10 rounded-2xl border border-white/[0.08] hover:border-blue-500/40 bg-[#0A0D18] hover:bg-[#0C101E] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      Capability {cap.number}
                    </span>
                    <span className="text-2xl font-light text-slate-500 group-hover:text-blue-400 transition-colors">
                      {cap.number}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-6 mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {cap.name}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {cap.shortDescription}
                  </p>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs sm:text-sm text-slate-400 pt-3 leading-relaxed border-t border-white/[0.06] mt-4 overflow-hidden"
                      >
                        {cap.extendedDetail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                    Explore Capability
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/[0.08] group-hover:border-blue-500/40 group-hover:bg-blue-500/10 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-all">
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
