import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

interface TheStrategicDilemmaSectionProps {
  onOpenBooking?: () => void;
}

const FRAGMENTED_ROLES = [
  { step: "01", text: "You need marketing." },
  { step: "02", text: "Then advertising." },
  { step: "03", text: "Then sales." },
  { step: "04", text: "Then someone to manage your CRM." },
  { step: "05", text: "Then someone to automate processes." },
  { step: "06", text: "Then someone to make all of it work together." },
];

export const TheStrategicDilemmaSection: React.FC<TheStrategicDilemmaSectionProps> = () => {
  return (
    <section
      id="the-problem"
      className="relative bg-[#F9F8F4] text-[#08111E] py-20 sm:py-32 lg:py-44 scroll-mt-24 border-b border-[#08111E]/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#526071] mb-7"
        >
          02 &nbsp;·&nbsp; THE PROBLEM
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.1] max-w-5xl"
        >
          Growing a business shouldn't mean{" "}
          <span className="text-[0.9em] font-editorial-italic font-normal text-[#475569] tracking-[-0.01em]">
            building an entire department.
          </span>
        </motion.h2>

        {/* Intro sentence */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl lg:text-[22px] text-[#334155] font-normal tracking-tight mt-8 sm:mt-10 max-w-2xl leading-relaxed"
        >
          As a business grows, more problems appear.
        </motion.p>

        {/* Visual Split: Separate Functions vs One Team */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: The Accumulating Functions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-[#08111E]/[0.09] border-t border-b border-[#08111E]/[0.09]">
              {FRAGMENTED_ROLES.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="py-4 sm:py-5 flex items-baseline gap-5 sm:gap-7"
                >
                  <span className="text-xs font-mono text-[#64748B] font-medium shrink-0">
                    {item.step}
                  </span>
                  <p className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#08111E] tracking-tight">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed mt-6 sm:mt-8"
            >
              Hiring each function separately becomes expensive and difficult to manage.
            </motion.p>
          </div>

          {/* Right: The Alternative — One Unified Team (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 bg-[#08111E] text-[#F9F8F4] p-8 sm:p-10 lg:p-12 rounded-none flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8FA3B8]">
                THE ALTERNATIVE
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#F9F8F4] tracking-[-0.025em] leading-[1.12]">
                You don't always need more employees.
              </h3>

              <p className="text-xl sm:text-2xl text-[#CBD5E1] font-normal leading-snug">
                You need <span className="font-editorial-italic text-[#F9F8F4]">the right team</span> working together.
              </p>

              {/* Minimal visual convergence diagram */}
              <div className="pt-5 border-t border-white/[0.1] space-y-3">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#C8D2E0] uppercase tracking-wider">
                  <div className="py-2.5 px-3 bg-white/[0.03] border border-white/[0.08]">Strategy</div>
                  <div className="py-2.5 px-3 bg-white/[0.03] border border-white/[0.08]">Marketing</div>
                  <div className="py-2.5 px-3 bg-white/[0.03] border border-white/[0.08]">Advertising</div>
                  <div className="py-2.5 px-3 bg-white/[0.03] border border-white/[0.08]">Sales & CRM</div>
                  <div className="py-2.5 px-3 bg-white/[0.03] border border-white/[0.08]">Systems</div>
                  <div className="py-2.5 px-3 bg-white/[0.03] border border-white/[0.08]">Intelligence</div>
                </div>
                <div className="flex items-center justify-center py-1 text-[#8FA3B8]">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div className="py-3 px-4 bg-[#F9F8F4] text-[#08111E] text-center font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                  STRATISION · ONE APPOINTED TEAM
                </div>
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-white/[0.1]">
              <p className="text-xs sm:text-sm font-mono font-medium uppercase tracking-[0.16em] text-[#F9F8F4]">
                THAT'S WHERE STRATISION COMES IN.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
