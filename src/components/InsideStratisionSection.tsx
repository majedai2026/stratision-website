import React from "react";
import { motion } from "motion/react";
import studioImage from "../assets/images/commercial_creative_studio_1791061526727.jpg";

interface InsideStratisionSectionProps {
  onOpenBooking?: () => void;
  onExploreLadder?: () => void;
}

export const InsideStratisionSection: React.FC<InsideStratisionSectionProps> = () => {
  return (
    <section
      id="inside-stratision"
      className="relative bg-[#08111E] text-[#F9F8F4] py-20 sm:py-32 lg:py-44 border-b border-white/[0.08] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 lg:space-y-36">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER — GLOBAL CONTAINER ALIGNMENT & FULL EDITORIAL SCALE */}
        {/* ========================================================================= */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] mb-7"
          >
            INSIDE STRATISION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.1]"
          >
            What we build around your business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-[22px] text-[#C8D2E0] font-normal leading-relaxed max-w-3xl mt-6 sm:mt-8"
          >
            From creating demand to capturing, qualifying and converting it, Stratision brings strategy, marketing and intelligent systems together around the way your business actually works.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* PART 01 — MARKETING (Text Left / Visual Right, 12-Column Grid) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 sm:pt-16 border-t border-white/[0.08]">
          {/* Left: Editorial Narrative (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            <span className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] block">
              01 · CREATE DEMAND
            </span>

            <h3 className="text-2xl sm:text-4xl lg:text-[46px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.12]">
              Marketing that looks like your business.
            </h3>

            <p className="text-lg sm:text-xl lg:text-[22px] text-[#C8D2E0] leading-relaxed font-normal">
              Strategy, creative, advertising and content built around your audience, offer and market.
            </p>

            {/* Core Commercial Credibility Statement */}
            <div className="py-4 border-y border-white/[0.08] space-y-1.5">
              <p className="text-base sm:text-lg font-medium text-[#F9F8F4]">
                We understand what makes people buy.
              </p>
              <p className="text-base sm:text-lg font-editorial-italic font-normal text-[#DCE4EC]">
                Not just what makes content look good.
              </p>
              <p className="text-sm sm:text-[15px] text-[#94A3B8] pt-1">
                We build around the audience, the offer and what actually converts.
              </p>
            </div>

            <p className="text-[15px] sm:text-base text-[#8FA3B8] leading-relaxed">
              Our marketing work combines commercial strategy, creative production, paid acquisition and continuous testing. The objective is simple: produce work that feels native to the brand and gives the market a reason to respond.
            </p>
          </motion.div>

          {/* Right: Restrained Client Campaign Piece (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 w-full"
          >
            <div className="w-full bg-[#FFFFFF] text-[#08111E] p-6 sm:p-8 lg:p-9 shadow-[0_8px_32px_rgba(0,0,0,0.18)] border border-slate-200/90 space-y-6">
              {/* Refined Brand Identity Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 text-xs">
                <div className="space-y-0.5">
                  <span className="font-mono text-[11px] tracking-widest uppercase font-semibold text-[#08111E] block">
                    HAWTHORNE &amp; REED
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-slate-500 block">
                    Architectural Joinery &amp; Natural Stone · Cotswolds &amp; London
                  </span>
                </div>
                <span className="font-mono text-[9.5px] text-slate-400 uppercase tracking-wider">
                  ILLUSTRATIVE CLIENT EXAMPLE
                </span>
              </div>

              {/* Cohesive Campaign Composition */}
              <div className="space-y-4">
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={studioImage}
                    alt="Authentic British commercial creative work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2.5 pt-0.5">
                  <div className="text-[16px] sm:text-[17px] font-semibold text-[#08111E] leading-snug">
                    “Direct from the quarry, specified for prime residential estates.”
                  </div>
                  
                  {/* Quiet Editorial Discipline Strip */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600 font-mono">
                    <div>
                      <span className="text-slate-400 block text-[9.5px] uppercase">Positioning</span>
                      <span>Trade Authority</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9.5px] uppercase">Acquisition</span>
                      <span>Search &amp; Direct</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9.5px] uppercase">Platform</span>
                      <span>Specification Web</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Understated Result Line */}
              <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Creative Strategy · Digital Platform · Acquisition</span>
                <span className="text-slate-400">REPRESENTATIVE BUILD</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* PART 02 — AI RECEPTION (Visual Left / Text Right, 12-Column Grid) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 sm:pt-16 border-t border-white/[0.08]">
          {/* Left: Quiet, Bespoke Interaction Layer (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 w-full order-2 lg:order-1"
          >
            <div className="w-full bg-[#FFFFFF] text-[#08111E] p-6 sm:p-8 lg:p-9 shadow-[0_8px_32px_rgba(0,0,0,0.18)] border border-slate-200/90 space-y-5">
              {/* Minimal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono text-slate-400">
                <span>CLIENT ENQUIRY INTERFACE</span>
                <span>INBOUND</span>
              </div>

              {/* Interaction Dialogue */}
              <div className="space-y-3.5">
                <div className="space-y-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-slate-400 block">
                    Customer enquiry
                  </span>
                  <div className="bg-[#F8FAFC] border border-slate-200/80 p-3.5 text-[13.5px] text-[#08111E] font-medium leading-relaxed">
                    “Hi, I'd like to get a quote for a new driveway.”
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-slate-500 font-medium block">
                    AI response
                  </span>
                  <div className="bg-white border border-slate-200 p-3.5 text-[13.5px] text-[#1E293B] leading-relaxed">
                    “Absolutely. I can help with that. Which area is the property in?”
                  </div>
                </div>
              </div>

              {/* Minimal Qualification Metadata */}
              <div className="border-t border-slate-200 pt-3.5 grid grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="font-mono text-[9.5px] text-slate-400 block uppercase">Location</span>
                  <span className="font-medium text-[#08111E] text-[13px]">Surrey</span>
                </div>
                <div className="border-x border-slate-200 px-3">
                  <span className="font-mono text-[9.5px] text-slate-400 block uppercase">Project</span>
                  <span className="font-medium text-[#08111E] text-[13px]">Resin driveway</span>
                </div>
                <div>
                  <span className="font-mono text-[9.5px] text-slate-400 block uppercase">Timeline</span>
                  <span className="font-medium text-[#08111E] text-[13px]">4–6 weeks</span>
                </div>
              </div>

              {/* Qualified Status Outcome */}
              <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#08111E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>QUALIFIED</span>
                </div>
                <span className="font-mono text-[10.5px] text-slate-500">
                  Sales team notified
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 sm:space-y-7 order-1 lg:order-2"
          >
            <span className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] block">
              02 · CAPTURE &amp; QUALIFY
            </span>

            <h3 className="text-2xl sm:text-4xl lg:text-[46px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.12]">
              Every enquiry gets an answer.
            </h3>

            <p className="text-lg sm:text-xl lg:text-[22px] text-[#C8D2E0] leading-relaxed font-normal">
              An automated receptionist responds, qualifies and routes enquiries while your team gets on with the business.
            </p>

            <p className="text-[15px] sm:text-base text-[#8FA3B8] leading-relaxed">
              The system works around the way your business actually receives enquiries — website, forms, messages or calls — so opportunities don't sit waiting for someone to respond.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* PART 03 — SPEED TO LEAD (Full-Width Editorial Timeline Across Global Grid) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8 sm:space-y-10 pt-12 sm:pt-16 border-t border-white/[0.08]"
        >
          <div className="max-w-4xl space-y-3">
            <span className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] block">
              03 · SPEED TO LEAD
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-[46px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.12]">
              The first few minutes matter.
            </h3>
            <p className="text-lg sm:text-xl lg:text-[22px] text-[#C8D2E0] leading-relaxed font-normal max-w-3xl">
              When a new enquiry arrives, the system can respond, qualify and move it forward immediately.
            </p>
          </div>

          {/* Continuous Editorial Timeline Spanning Full 7xl Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-6">
            {/* Step 1 */}
            <div className="border-t border-white/[0.14] pt-5 space-y-2">
              <span className="font-mono text-xs text-[#8FA3B8] block">10:42:03</span>
              <div className="font-mono text-[13px] font-semibold text-[#F9F8F4] tracking-wider uppercase">
                ENQUIRY RECEIVED
              </div>
              <p className="text-xs sm:text-[13px] text-[#8FA3B8]">Inbound enquiry arrives</p>
            </div>

            {/* Step 2 — Subtle Commercial Speed Emphasis (1 second delta) */}
            <div className="border-t border-white/[0.35] pt-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#F9F8F4] font-semibold block">10:42:04</span>
                <span className="font-mono text-[10.5px] text-[#F9F8F4] bg-white/[0.08] px-2 py-0.5">1s</span>
              </div>
              <div className="font-mono text-[13px] font-semibold text-[#F9F8F4] tracking-wider uppercase">
                RESPONSE SENT
              </div>
              <p className="text-xs sm:text-[13px] text-[#DCE4EC]">Initial reply sent immediately</p>
            </div>

            {/* Step 3 */}
            <div className="border-t border-white/[0.14] pt-5 space-y-2">
              <span className="font-mono text-xs text-[#8FA3B8] block">10:42:17</span>
              <div className="font-mono text-[13px] font-semibold text-[#F9F8F4] tracking-wider uppercase">
                LEAD QUALIFIED
              </div>
              <p className="text-xs sm:text-[13px] text-[#8FA3B8]">Scope and location confirmed</p>
            </div>

            {/* Step 4 */}
            <div className="border-t border-white/[0.14] pt-5 space-y-2">
              <span className="font-mono text-xs text-[#8FA3B8] block">10:43:01</span>
              <div className="font-mono text-[13px] font-semibold text-[#F9F8F4] tracking-wider uppercase">
                SALES NOTIFIED
              </div>
              <p className="text-xs sm:text-[13px] text-[#8FA3B8]">Briefing sent to director</p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* PART 04 — CUSTOM CRM (Visual Left / Text Right, 12-Column Grid) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 sm:pt-16 border-t border-white/[0.08]">
          {/* Left: Restrained Custom CRM Interface (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 w-full"
          >
            <div className="w-full bg-[#FFFFFF] text-[#08111E] p-6 sm:p-8 lg:p-9 shadow-[0_8px_32px_rgba(0,0,0,0.18)] border border-slate-200/90 space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 text-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                  CUSTOM PIPELINE ARCHITECTURE
                </span>
                <span className="font-mono text-[9.5px] text-slate-400">
                  EXAMPLE OPERATING MODEL
                </span>
              </div>

              {/* Pipeline Columns Strip */}
              <div className="flex items-center justify-between text-[10.5px] font-mono text-slate-400 pb-2.5 border-b border-slate-100 uppercase tracking-wider">
                <span>NEW</span>
                <span className="text-[#08111E] font-semibold">QUALIFIED</span>
                <span>APPOINTMENT</span>
                <span>PROPOSAL</span>
                <span>WON</span>
              </div>

              {/* Believable Example Records with Generous Whitespace */}
              <div className="space-y-2.5 py-1">
                <div className="bg-slate-50 p-3.5 border border-slate-200/70 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#08111E] block text-[13.5px]">James H.</span>
                    <span className="font-mono text-[10.5px] text-slate-500">Qualified</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-medium text-[#08111E] text-[13px]">£18,500</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 border border-slate-200/70 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#08111E] block text-[13.5px]">Sarah M.</span>
                    <span className="font-mono text-[10.5px] text-slate-500">Appointment</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-medium text-[#08111E] text-[13px]">£7,200</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 border border-slate-200/70 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#08111E] block text-[13.5px]">Daniel R.</span>
                    <span className="font-mono text-[10.5px] text-slate-500">Proposal</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-medium text-[#08111E] text-[13px]">£24,000</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Designed Around Company Milestones</span>
                <span className="text-slate-400">REPRESENTATIVE BUILD</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            <span className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8] block">
              04 · SYSTEMISE
            </span>

            <h3 className="text-2xl sm:text-4xl lg:text-[46px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.12]">
              Your CRM should fit the business.
            </h3>

            <p className="text-lg sm:text-xl lg:text-[22px] text-[#C8D2E0] leading-relaxed font-normal">
              We build systems around your sales process, rather than asking your team to adapt to someone else's.
            </p>

            <p className="text-[15px] sm:text-base text-[#8FA3B8] leading-relaxed">
              From lead capture to follow-up, reporting and pipeline management, the system becomes the operational layer connecting everything that happens before and after the sale.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* THE CLOSING STATEMENT — EMOTIONAL PAYOFF AT GLOBAL SCALE */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="pt-16 sm:pt-24 lg:pt-28 border-t border-white/[0.08] space-y-10"
        >
          {/* Dominant Statement & Understated Italic Voice */}
          <div className="max-w-4xl space-y-3">
            <h4 className="text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#F9F8F4] tracking-[-0.03em] leading-[1.1]">
              Technology makes the process faster.
            </h4>
            <p className="text-3xl sm:text-5xl lg:text-[56px] font-editorial-italic font-normal text-[#DCE4EC] tracking-[-0.01em] leading-[1.1]">
              Experience makes it work.
            </p>
          </div>

          {/* Understated Quiet Signature */}
          <div className="pt-6 border-t border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] sm:text-xs font-mono text-[#8FA3B8] uppercase tracking-[0.22em]">
              <span>Strategy</span>
              <span className="text-white/20">·</span>
              <span>Marketing</span>
              <span className="text-white/20">·</span>
              <span>Advertising</span>
              <span className="text-white/20">·</span>
              <span>Sales</span>
              <span className="text-white/20">·</span>
              <span>Systems</span>
              <span className="text-white/20">·</span>
              <span>Intelligence</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
