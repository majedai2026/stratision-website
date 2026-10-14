import React from "react";
import { motion } from "motion/react";

const REGIONS = [
  {
    code: "01",
    region: "UK",
    detail: "London & United Kingdom",
  },
  {
    code: "02",
    region: "Middle East",
    detail: "UAE & GCC Commercial Centres",
  },
  {
    code: "03",
    region: "USA",
    detail: "North American Enterprises",
  },
];

export const GlobalCapabilitySection: React.FC = () => {
  return (
    <section
      id="global-capability"
      className="relative bg-[#F9F8F4] text-[#08111E] py-20 sm:py-32 lg:py-44 border-b border-[#08111E]/[0.08] scroll-mt-24"
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
          12 &nbsp;·&nbsp; GLOBAL CAPABILITY
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Headline, Copy & Regional Indicators (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.1]"
            >
              Built in Britain.
              <br />
              <span className="text-[0.9em] font-editorial-italic font-normal text-[#475569] tracking-[-0.01em]">
                Built for business.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 max-w-2xl text-lg sm:text-xl text-[#334155] font-normal leading-relaxed"
            >
              <p>
                Stratision is built in Britain and works with businesses across the UK, Middle East and USA.
              </p>
              <p>
                We combine practical business experience with modern marketing, sales and technology.
              </p>
            </motion.div>

            {/* Subtle Visual Representation of UK / MIDDLE EAST / USA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {REGIONS.map((item) => (
                <div
                  key={item.region}
                  className="p-6 bg-white border border-[#08111E]/[0.09] rounded-[2px] flex flex-col justify-between"
                >
                  <div className="text-[10px] font-mono text-[#64748B] font-medium uppercase tracking-[0.16em] mb-4">
                    {item.code}
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[#08111E] tracking-[-0.025em]">
                      {item.region}
                    </div>
                    <div className="text-xs text-[#64748B] mt-1 font-normal">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Understated Architectural Photography (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-[2px] border border-[#08111E]/[0.09] bg-[#08111E]">
              <img
                src="/src/assets/images/british_commercial_architecture_1790787025032.jpg"
                alt="Contemporary British commercial architecture in London"
                referrerPolicy="no-referrer"
                className="w-full h-[340px] sm:h-[440px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
