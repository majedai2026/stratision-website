import React, { useState } from "react";
import { ArrowRight, Sliders, Check } from "lucide-react";

interface RoiCalculatorSectionProps {
  onOpenBooking: () => void;
}

interface IndustryPreset {
  name: string;
  teamSize: number;
  repetitiveHours: number;
  monthlyEnquiries: number;
  avgHandlingMinutes: number;
  hourlyRate: number;
  leakageRate: number;
}

const INDUSTRY_PRESETS: Record<string, IndustryPreset> = {
  "Professional Services": {
    name: "Professional Services",
    teamSize: 40,
    repetitiveHours: 14,
    monthlyEnquiries: 850,
    avgHandlingMinutes: 25,
    hourlyRate: 85,
    leakageRate: 15,
  },
  "Recruitment & Staffing": {
    name: "Recruitment & Staffing",
    teamSize: 25,
    repetitiveHours: 18,
    monthlyEnquiries: 3200,
    avgHandlingMinutes: 18,
    hourlyRate: 65,
    leakageRate: 22,
  },
  "Logistics & Operations": {
    name: "Logistics & Operations",
    teamSize: 60,
    repetitiveHours: 12,
    monthlyEnquiries: 5400,
    avgHandlingMinutes: 15,
    hourlyRate: 50,
    leakageRate: 18,
  },
  "Healthcare & Admin": {
    name: "Healthcare & Admin",
    teamSize: 35,
    repetitiveHours: 16,
    monthlyEnquiries: 2100,
    avgHandlingMinutes: 20,
    hourlyRate: 70,
    leakageRate: 12,
  },
};

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenBooking }) => {
  const [selectedPreset, setSelectedPreset] = useState<string>("Professional Services");
  const [teamSize, setTeamSize] = useState<number>(40);
  const [repetitiveHours, setRepetitiveHours] = useState<number>(14);
  const [monthlyEnquiries, setMonthlyEnquiries] = useState<number>(850);
  const [avgHandlingMinutes, setAvgHandlingMinutes] = useState<number>(25);
  const [hourlyRate, setHourlyRate] = useState<number>(85);
  const [automationRate, setAutomationRate] = useState<number>(75);

  const applyPreset = (presetKey: string) => {
    setSelectedPreset(presetKey);
    const preset = INDUSTRY_PRESETS[presetKey];
    if (preset) {
      setTeamSize(preset.teamSize);
      setRepetitiveHours(preset.repetitiveHours);
      setMonthlyEnquiries(preset.monthlyEnquiries);
      setAvgHandlingMinutes(preset.avgHandlingMinutes);
      setHourlyRate(preset.hourlyRate);
    }
  };

  // 1. Staff Repetitive Hours saved
  const weeklyStaffHoursFriction = teamSize * repetitiveHours;
  const weeklyStaffHoursRecovered = Math.round(weeklyStaffHoursFriction * (automationRate / 100));
  const annualStaffHoursRecovered = weeklyStaffHoursRecovered * 50;

  // 2. Inbound Handling Hours saved
  const monthlyHandlingHoursTotal = (monthlyEnquiries * avgHandlingMinutes) / 60;
  const monthlyHandlingHoursRecovered = Math.round(monthlyHandlingHoursTotal * (automationRate / 100));
  const annualHandlingHoursRecovered = monthlyHandlingHoursRecovered * 12;

  // Total Hours & Financial Opportunity
  const totalAnnualHoursRecovered = annualStaffHoursRecovered + annualHandlingHoursRecovered;
  const totalMonthlyHoursRecovered = Math.round(totalAnnualHoursRecovered / 12);
  const indicativeAnnualOpportunity = totalAnnualHoursRecovered * hourlyRate;
  const indicativeMonthlyCapacity = Math.round(indicativeAnnualOpportunity / 12);
  const equivalentFTECapacity = Number((totalAnnualHoursRecovered / 1850).toFixed(1));

  // Benchmark payback model
  const estimatedSprintInvestment = teamSize <= 25 ? 28000 : teamSize <= 75 ? 58000 : 95000;
  const paybackMonths = Number((estimatedSprintInvestment / (indicativeAnnualOpportunity / 12)).toFixed(1));
  const roiMultiple = Number((indicativeAnnualOpportunity / estimatedSprintInvestment).toFixed(1));

  return (
    <section id="roi-calculator" className="py-24 bg-[#F8F7F4] text-[#0E131F] border-b border-stone-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header - Museum Quality Warm Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-stone-300 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-700 font-semibold flex items-center gap-2">
              <span>02 — CAPACITY MODEL</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-600 font-normal">OPERATIONAL DIAGNOSTIC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#070A12] leading-tight font-serif">
              Quantify Your Recoverable Capacity.
            </h2>
            <p className="text-base text-stone-700 font-normal leading-relaxed max-w-2xl">
              An operational diagnostic instrument. Calibrate team parameters to derive recoverable workforce hours, latent headcount capacity, and deterministic capital return.
            </p>
          </div>

          {/* Industry Preset Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span className="text-xs font-mono text-stone-700 uppercase tracking-wider">Presets:</span>
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(INDUSTRY_PRESETS).map((key) => (
                <button
                  key={key}
                  onClick={() => applyPreset(key)}
                  className={`px-3 py-1 text-xs font-mono transition-all cursor-pointer border ${
                    selectedPreset === key
                      ? "bg-[#070A12] text-white border-[#070A12] font-semibold"
                      : "bg-white text-stone-700 border-stone-300 hover:border-stone-400 hover:text-stone-900"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Master Diagnostic Instrument Board */}
        <div className="bg-white border border-stone-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Input Controls (Left 6 Cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-stone-300 space-y-7">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-blue-700" />
                <span>Operational Input Parameters</span>
              </span>
              <span className="text-[10px] font-mono text-stone-600 uppercase">Interactive Instrument</span>
            </div>

            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-700 font-mono uppercase">
                  1. Knowledge Worker Team Size:
                </span>
                <span className="font-mono font-bold text-[#070A12] bg-stone-100 px-2.5 py-0.5 border border-stone-300">
                  {teamSize} Staff
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => {
                  setTeamSize(Number(e.target.value));
                  setSelectedPreset("Custom");
                }}
                className="w-full h-1 bg-stone-200 appearance-none cursor-pointer accent-[#070A12]"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>5 staff</span>
                <span>125 staff</span>
                <span>250+ staff</span>
              </div>
            </div>

            {/* Slider 2: Repetitive Admin Hours Lost */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-700 font-mono uppercase">
                  2. Repetitive Friction / Person / Week:
                </span>
                <span className="font-mono font-bold text-[#070A12] bg-stone-100 px-2.5 py-0.5 border border-stone-300">
                  {repetitiveHours} hrs / wk
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="25"
                step="1"
                value={repetitiveHours}
                onChange={(e) => {
                  setRepetitiveHours(Number(e.target.value));
                  setSelectedPreset("Custom");
                }}
                className="w-full h-1 bg-stone-200 appearance-none cursor-pointer accent-[#070A12]"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>3 hrs (Light)</span>
                <span>14 hrs (Average)</span>
                <span>25 hrs (Severe)</span>
              </div>
            </div>

            {/* Slider 3: Monthly Inbound Volume */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-700 font-mono uppercase">
                  3. Monthly Inquiries / Transactions:
                </span>
                <span className="font-mono font-bold text-[#070A12] bg-stone-100 px-2.5 py-0.5 border border-stone-300">
                  {monthlyEnquiries.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={monthlyEnquiries}
                onChange={(e) => {
                  setMonthlyEnquiries(Number(e.target.value));
                  setSelectedPreset("Custom");
                }}
                className="w-full h-1 bg-stone-200 appearance-none cursor-pointer accent-[#070A12]"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>100 / mo</span>
                <span>5,000 / mo</span>
                <span>10,000+ / mo</span>
              </div>
            </div>

            {/* Slider 4: Blended Hourly Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-700 font-mono uppercase">
                  4. Blended Employee Hourly Labor Cost:
                </span>
                <span className="font-mono font-bold text-[#070A12] bg-stone-100 px-2.5 py-0.5 border border-stone-300">
                  ${hourlyRate} / hr
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="200"
                step="5"
                value={hourlyRate}
                onChange={(e) => {
                  setHourlyRate(Number(e.target.value));
                  setSelectedPreset("Custom");
                }}
                className="w-full h-1 bg-stone-200 appearance-none cursor-pointer accent-[#070A12]"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>$30 / hr</span>
                <span>$85 / hr</span>
                <span>$200 / hr</span>
              </div>
            </div>

            {/* Slider 5: Automation Target */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-700 font-mono uppercase">
                  5. Target Autonomous Resolution Rate:
                </span>
                <span className="font-mono font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 border border-blue-200">
                  {automationRate}% Autonomous
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="90"
                step="5"
                value={automationRate}
                onChange={(e) => setAutomationRate(Number(e.target.value))}
                className="w-full h-1 bg-stone-200 appearance-none cursor-pointer accent-blue-700"
              />
              <div className="flex justify-between text-[10px] text-stone-600 font-mono">
                <span>40% (Conservative)</span>
                <span>75% (Stratision Standard)</span>
                <span>90% (Max Autonomous)</span>
              </div>
            </div>

          </div>

          {/* Diagnostic Conclusion Panel (Right 6 Cols) */}
          <div className="lg:col-span-6 bg-[#070A12] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  Diagnostic Conclusion
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 uppercase">
                  Calculated Result
                </span>
              </div>

              {/* Primary Conclusion Hero Display */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                    RECOVERABLE CAPACITY
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">Calculated Result</span>
                </div>
                <div className="text-5xl sm:text-6xl font-bold font-mono tracking-tight text-white leading-none">
                  {totalAnnualHoursRecovered.toLocaleString()} <span className="text-2xl font-serif font-normal text-slate-400">hrs / yr</span>
                </div>
                <p className="text-xs font-mono text-slate-400 pt-1">
                  Yielding approximately <strong className="text-white">{totalMonthlyHoursRecovered.toLocaleString()} hours</strong> of recoverable operational focus each month.
                </p>
              </div>

              {/* 4 Supporting Financial & Operational Outputs */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                
                <div className="p-4 bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Financial Opportunity</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    ${indicativeAnnualOpportunity.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">${indicativeMonthlyCapacity.toLocaleString()}/mo value</span>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Equivalent FTE Capacity</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">
                    +{equivalentFTECapacity} FTEs
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Equivalent capacity unlocked</span>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Payback Calculation</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                    {paybackMonths} Months
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Estimated sprint payback</span>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Modelled ROI Multiple</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    {roiMultiple}x Multiple
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Modelled Year-1 Return</span>
                </div>

              </div>

              {/* Categorization & Provenance note */}
              <div className="p-3 bg-black/60 border border-slate-800 text-[11px] text-slate-400 font-mono leading-relaxed">
                <span className="text-blue-400 font-semibold">Provenance Note:</span> Derived deterministically from your stated staff count ({teamSize}), friction hours ({repetitiveHours}h/wk), and hourly labor costs (${hourlyRate}/hr).
              </div>

              {/* Expandable Assumptions & Calculation Methodology Drawer */}
              <details className="group border border-slate-800 bg-slate-950 p-4 text-xs font-mono transition-all">
                <summary className="flex items-center justify-between cursor-pointer text-slate-300 font-bold hover:text-white uppercase tracking-wider select-none">
                  <span>Assumptions & Calculation Methodology</span>
                  <span className="text-[10px] text-blue-400 font-normal group-open:hidden">[Click to Inspect Model]</span>
                  <span className="text-[10px] text-slate-500 font-normal hidden group-open:inline">[Collapse Model]</span>
                </summary>
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-3 text-slate-300 font-normal leading-relaxed text-[11px]">
                  <div>
                    <strong className="text-white block font-semibold">1. Standard Operating Calendar & FTE Baselines:</strong>
                    Assumes a standard 50-week operating year (accounting for 2 weeks holiday/statutory closures) and 1,850 productive working hours per Full-Time Equivalent (FTE).
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">2. Staff Friction Equation:</strong>
                    Annual Staff Hours = Team Size × Repetitive Friction Hrs/Wk × (Automation Rate ÷ 100) × 50 operating weeks
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">3. Inbound Transaction Equation:</strong>
                    Annual Inbound Hours = ((Monthly Volume × Avg Handling Min) ÷ 60) × (Automation Rate ÷ 100) × 12 months
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">4. Financial Valuation & Headcount Capacity:</strong>
                    Financial Opportunity = Total Annual Hours × Blended Hourly Rate
                    <br />
                    Equivalent FTE Capacity = Total Annual Hours ÷ 1,850 standard working hours
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">5. Payback & ROI Multiple:</strong>
                    Assumes turnkey sprint engineering baseline investment scaled to organization size. Payback is computed as Fixed Investment divided by Monthly Recovered Capacity.
                  </div>
                </div>
              </details>

            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
