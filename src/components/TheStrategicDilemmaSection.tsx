import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Calculator, AlertCircle, ArrowDown } from "lucide-react";

interface TheStrategicDilemmaSectionProps {
  onOpenBooking?: () => void;
}

export const TheStrategicDilemmaSection: React.FC<TheStrategicDilemmaSectionProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();
  // Operational Inaction Calculator State
  const [employees, setEmployees] = useState<number>(35);
  const [hoursLostPerWeek, setHoursLostPerWeek] = useState<number>(12);
  const [hourlyCost, setHourlyCost] = useState<number>(75);

  // Dynamic calculations
  const totalWeeklyHoursLost = employees * hoursLostPerWeek;
  const annualHoursLost = totalWeeklyHoursLost * 50;
  const annualOperationalCost = annualHoursLost * hourlyCost;
  const fteCapacityEquivalent = Number((annualHoursLost / 1850).toFixed(1));

  // Formatter for currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="strategic-dilemma"
      className="relative py-20 md:py-28 bg-[#080A10] border-t border-white/[0.06] text-slate-100 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Eyebrow & Main Strategic Dilemma Assertion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start max-w-4xl mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 block">
            02 — THE STRATEGIC DILEMMA
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-white tracking-[-0.03em] leading-[1.1]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            "Most businesses don't need another AI tool."
          </h2>
          <p
            className="text-xl sm:text-2xl text-slate-200 mt-4 leading-snug font-medium"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            They need the right systems connected to the way their business actually runs.
          </p>
        </motion.div>

        {/* Visual Architectural Contrast (Open, Non-Card Editorial Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Generic Software */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded">
                  GENERIC SOFTWARE
                </span>
                <span className="text-xs text-slate-400 font-mono">SEPARATE TOOLS</span>
              </div>

              <div className="space-y-4 pt-1">
                <div className="border-l-2 border-rose-500/30 pl-4 space-y-1">
                  <div className="text-base font-semibold text-slate-200">Fragmented tools & apps</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Disconnected software leaves data scattered across separate tools.
                  </p>
                </div>
                <div className="border-l-2 border-rose-500/30 pl-4 space-y-1">
                  <div className="text-base font-semibold text-slate-200">Multiple disparate interfaces</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Employees switch between multiple applications to complete a single task.
                  </p>
                </div>
                <div className="border-l-2 border-rose-500/30 pl-4 space-y-1">
                  <div className="text-base font-semibold text-slate-200">Manual human handoffs</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Teams spend hours manually copying and pasting information between spreadsheets.
                  </p>
                </div>
                <div className="border-l-2 border-rose-500/30 pl-4 space-y-1">
                  <div className="text-base font-semibold text-rose-300">Business adapts to software</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The business is forced to work around the limitations of off-the-shelf software.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Transition Spine Indicator */}
            <div className="lg:col-span-2 flex lg:flex-col items-center justify-center py-4 lg:py-0">
              <div className="hidden lg:flex flex-col items-center gap-2 text-slate-400">
                <div className="w-[1px] h-14 bg-gradient-to-b from-rose-500/40 via-slate-700 to-blue-500/40" />
                <ArrowDown className="w-4 h-4 text-blue-400 animate-bounce" />
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider text-center">
                  RESOLUTION
                </span>
                <div className="w-[1px] h-14 bg-gradient-to-b from-blue-500/40 to-emerald-500/40" />
              </div>
              <div className="lg:hidden w-full h-[1px] bg-white/[0.08]" />
            </div>

            {/* Right Column: Stratision Operational Architecture */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">
                  STRATISION
                </span>
                <span className="text-xs text-emerald-400 font-mono">BESPOKE SYSTEMS</span>
              </div>

              <div className="space-y-4 pt-1">
                <div className="border-l-2 border-blue-500 pl-4 space-y-1">
                  <div className="text-base font-semibold text-white">One connected system</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A tailored system designed around your core business processes.
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4 space-y-1">
                  <div className="text-base font-semibold text-white">Connected workflows</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Direct, secure connection with your ERP, CRM and internal databases.
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4 space-y-1">
                  <div className="text-base font-semibold text-white">Automated handoffs</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automated checks and clear exception routing remove repetitive manual work.
                  </p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4 space-y-1">
                  <div className="text-base font-semibold text-emerald-400">Software adapts to the business</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Custom systems and workflows governed according to the terms of your engagement.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Hairline Divider */}
        <div className="w-full h-[1px] bg-white/[0.06] mb-16" />

        {/* Strategic Diagnostic: The Business Intelligence Assessment™ & Cost of Inaction */}
        <motion.div
          id="inaction-calculator"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Diagnostic Header (Consultancy Tone, Not SaaS Dashboard) */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block font-mono">
                STRATEGIC DIAGNOSTIC — BUSINESS INTELLIGENCE ASSESSMENT™
              </span>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                We determine where AI is actually worth deploying.
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                We do not ask you what AI tool you want. Through our Business Intelligence Assessment™, we examine business performance, departmental workflows, technical readiness and operational friction to identify and prioritise where systems create genuine value.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono shrink-0">
              UNDERSTAND → ASSESS → PRIORITISE
            </span>
          </div>

          {/* Diagnostic Methodology Pillars */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-blue-400">01. UNDERSTAND</span>
              <div className="text-sm font-semibold text-white">Operational & Workflow Audit</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Examine day-to-day operations across departments to identify where employee time is taken up by manual data entry and repetitive tasks.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-blue-400">02. ASSESS</span>
              <div className="text-sm font-semibold text-white">Technical & AI Readiness Audit</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review core business systems, data quality and access permissions to determine where AI systems can connect effectively.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-blue-400">03. PRIORITISE</span>
              <div className="text-sm font-semibold text-white">Strategic Roadmap & Interventions</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prioritise where AI will deliver genuine business value, delivering an executive specification before any engineering begins.
              </p>
            </div>
          </div>

          {/* Calculator Section Label */}
          <div className="pt-10 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                CAPACITY FRICTION MODEL — COST OF INACTION
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">
                Model the cost of manual operational drag across your team
              </h4>
            </div>
            <span className="text-xs text-slate-400 font-mono shrink-0">
              ILLUSTRATIVE OPERATIONAL MODEL
            </span>
          </div>

          {/* Diagnostic Grid: Sliders on Left, Dominant Output on Right */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Inputs (7 Cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: People Involved */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>People involved in manual workflows</span>
                  <span className="text-white font-mono text-sm">{employees} people</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>5 team members</span>
                  <span>100</span>
                  <span>200+</span>
                </div>
              </div>

              {/* Slider 2: Hours Lost Per Week */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Hours lost per person each week</span>
                  <span className="text-white font-mono text-sm">{hoursLostPerWeek} hrs/week</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  step="1"
                  value={hoursLostPerWeek}
                  onChange={(e) => setHoursLostPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>4 hrs</span>
                  <span>15 hrs</span>
                  <span>25 hrs</span>
                </div>
              </div>

              {/* Slider 3: Average Loaded Hourly Cost */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Average loaded hourly cost (salary + overhead)</span>
                  <span className="text-white font-mono text-sm">${hourlyCost}/hr</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="180"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$40/hr</span>
                  <span>$100/hr</span>
                  <span>$180/hr</span>
                </div>
              </div>

            </div>

            {/* Right Output: Dominant Visually Prominent Output (5 Cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0B0E17] border border-white/[0.09] space-y-6">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  ESTIMATED ANNUAL OPERATIONAL COST
                </span>
                <div
                  className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-none"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {formatCurrency(annualOperationalCost)}
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Estimated payroll expense absorbed by repetitive administrative work and manual document handling.
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  ESTIMATED CAPACITY LOST
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-blue-400 font-mono">
                    ~{fteCapacityEquivalent} FTEs
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    ({annualHoursLost.toLocaleString()} total annual hours)
                  </span>
                </div>
              </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2.5 font-mono">
                    Low friction • Initial scoping conversation
                  </p>
                </div>
            </div>

          </div>

          {/* Transparent Assumptions Disclaimer */}
          <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-slate-500">
            <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>
              Illustrative operational model based on a 50-week operational year (1,850 working hours/FTE). Actual leverage is determined during discovery.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
