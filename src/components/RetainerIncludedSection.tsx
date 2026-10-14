import React, { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface RetainerCategory {
  id: string;
  index: string;
  title: string;
  summary: string;
  items: string[];
}

const RETAINER_CATEGORIES: RetainerCategory[] = [
  {
    id: "strategy",
    index: "01",
    title: "Strategy",
    summary: "Commercial direction and clear decision-making before spend or build.",
    items: [
      "Business strategy",
      "Growth planning",
      "Acquisition strategy",
    ],
  },
  {
    id: "marketing",
    index: "02",
    title: "Marketing",
    summary: "How your business is positioned, communicated and presented to the market.",
    items: [
      "Positioning",
      "Campaign strategy",
      "Creative direction",
      "Content strategy",
    ],
  },
  {
    id: "advertising",
    index: "03",
    title: "Advertising",
    summary: "Targeted paid campaigns designed to generate commercial opportunities.",
    items: [
      "Meta advertising",
      "Google advertising",
      "Paid acquisition",
      "Campaign optimisation",
    ],
  },
  {
    id: "sales",
    index: "04",
    title: "Sales",
    summary: "Turning enquiries into structured conversations and paying customers.",
    items: [
      "Sales process",
      "Follow-up strategy",
      "Conversion optimisation",
      "Client acquisition",
    ],
  },
  {
    id: "systems",
    index: "05",
    title: "Systems",
    summary: "The operational backbone that keeps the business running cleanly.",
    items: [
      "CRM",
      "Workflows",
      "Automation",
      "Operational infrastructure",
    ],
  },
  {
    id: "intelligence",
    index: "06",
    title: "Intelligence",
    summary: "Clear visibility and smart systems that help the business move faster.",
    items: [
      "Reporting",
      "Analysis",
      "AI systems",
      "Business intelligence",
      "Continuous optimisation",
    ],
  },
];

export const RetainerIncludedSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>([
    "strategy",
    "marketing",
    "advertising",
    "sales",
    "systems",
    "intelligence",
  ]);

  const toggleItem = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="what-we-do"
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
          08 &nbsp;·&nbsp; WHAT WE DO
        </motion.div>

        {/* Headline & Subheading */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#08111E] tracking-[-0.03em] leading-[1.1]"
          >
            One team.{" "}
            <span className="text-[0.9em] font-editorial-italic font-normal text-[#475569] tracking-[-0.01em]">
              One monthly retainer.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl text-[#475569] font-normal tracking-tight mt-5 sm:mt-6"
          >
            Choose what you want us to handle. We build from there.
          </motion.p>
        </div>

        {/* Interactive / Expandable Service System */}
        <div className="mt-14 sm:mt-20 divide-y divide-[#08111E]/[0.09] border-t border-b border-[#08111E]/[0.09]">
          {RETAINER_CATEGORIES.map((category, idx) => {
            const isOpen = expandedIds.includes(category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="py-6 sm:py-8"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(category.id)}
                  className="w-full text-left flex items-center justify-between gap-6 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-5 sm:gap-8">
                    <span className="text-xs font-mono text-[#64748B] font-medium">
                      {category.index}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#08111E] tracking-[-0.025em] group-hover:text-[#475569] transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-[2px] border border-[#08111E]/15 flex items-center justify-center text-[#475569] group-hover:border-[#08111E]/40 group-hover:text-[#08111E] transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-6 pl-9 sm:pl-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <p className="lg:col-span-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                      {category.summary}
                    </p>
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.items.map((service) => (
                        <div
                          key={service}
                          className="py-3 px-4 bg-white border border-[#08111E]/[0.09] rounded-[2px] text-sm sm:text-base font-medium text-[#08111E] flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-[#08111E] shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Important Clarification */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 sm:mt-18 pt-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
        >
          <p className="text-2xl sm:text-3xl font-semibold text-[#08111E] tracking-[-0.025em]">
            You don't need{" "}
            <span className="text-[0.92em] font-serif italic font-normal text-[#475569] tracking-[-0.01em]">
              every function.
            </span>
          </p>
          <p className="text-base sm:text-lg text-[#475569] font-normal">
            Your engagement is built around what your business actually needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
