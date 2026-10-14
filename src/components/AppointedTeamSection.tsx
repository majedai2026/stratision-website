import React from "react";
import { motion } from "motion/react";

const TEAM_CAPABILITIES = [
  "Business strategy",
  "Marketing",
  "Paid advertising",
  "Sales",
  "Client acquisition",
  "Lead generation",
  "CRM & operational systems",
  "AI implementation",
  "Workflow automation",
  "Business intelligence",
];

export const AppointedTeamSection: React.FC = () => {
  return (
    <section
      id="appointed-team"
      className="relative bg-[#08111E] text-[#F9F8F4] py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] mb-7"
        >
          07 &nbsp;·&nbsp; CAPABILITY &amp; EXPERIENCE
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Headline, Intro, and Capabilities (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.1]"
            >
              Your{" "}
              <span className="text-[0.9em] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.01em]">
                appointed team.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl lg:text-[22px] text-[#C8D2E0] font-normal leading-relaxed max-w-2xl"
            >
              When you appoint Stratision, you are not hiring one consultant or buying one piece of software. You gain a team with experience across:
            </motion.p>

            {/* Capabilities Grid */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-b border-white/[0.09] py-6"
            >
              {TEAM_CAPABILITIES.map((cap, idx) => (
                <div
                  key={cap}
                  className="py-3 border-b border-white/[0.06] last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 flex items-center gap-3.5"
                >
                  <span className="text-xs font-mono text-[#8FA3B8]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base sm:text-[17px] font-medium text-[#F9F8F4]">
                    {cap}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Credibility Statements */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2"
            >
              <div className="p-6 bg-[#F9F8F4] text-[#08111E] rounded-[2px] border border-[#DDD9CE]">
                <div className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#08111E]">
                  10+ Years
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#526071] mt-2">
                  OF COMBINED EXPERIENCE
                </div>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/[0.09] rounded-[2px] flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#F9F8F4]">
                  British-founded.
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#8FA3B8] mt-2">
                  GLOBALLY CAPABLE · UK · MIDDLE EAST · USA
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Editorial Photography (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-[2px] border border-white/[0.1] bg-[#060D17]">
              <img
                src="/src/assets/images/appointed_team_session_1790787014473.jpg"
                alt="Stratision commercial and systems strategy workspace"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] object-cover"
              />
              <div className="p-5 sm:p-6 border-t border-white/[0.09] flex items-center justify-between text-[11px] font-mono text-[#8FA3B8] uppercase tracking-[0.16em]">
                <span>COMMERCIAL & SYSTEMS PRACTICE</span>
                <span>LONDON · UK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
