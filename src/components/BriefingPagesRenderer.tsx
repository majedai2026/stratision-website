import React from "react";
import { BRIEFING_PAGES, BriefingPageData } from "../data/briefingData";
import { StratisionLogo } from "./StratisionLogo";
import { ArrowRight, CheckSquare, Square } from "lucide-react";
import {
  CoverArchitecturalMotif,
  ThreeQuestionsDiagram,
  ToolsVsSystemsDiagram,
  FrictionAccumulationDiagram,
  FourAreasEditorialZones,
  ThreeStageProgressionDiagram,
  AssessmentArchitectureDiagram,
  PrioritisationMatrixDiagram,
  BespokeSystemBlueprintDiagram,
  HumanSystemSplitDiagram,
  GovernanceControlDiagram,
  BuildOrBuyDiagram,
  AssessmentToSystemDiagram,
  GoodDeploymentDiagram,
  StratisionJourneyProgression,
} from "./BriefingDiagrams";

interface BriefingPageRendererProps {
  pageNumber: number;
  onOpenBooking?: () => void;
  isPrintView?: boolean;
}

export const BriefingPageRenderer: React.FC<BriefingPageRendererProps> = ({
  pageNumber,
  onOpenBooking,
  isPrintView = false,
}) => {
  const page = BRIEFING_PAGES.find((p) => p.pageNumber === pageNumber) || BRIEFING_PAGES[0];

  return (
    <article
      id={`briefing-page-${page.pageNumber}`}
      aria-label={`Executive Briefing Page ${page.pageNumber}: ${page.title}`}
      className={`relative w-full max-w-4xl mx-auto bg-[#080A10] text-slate-100 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
        isPrintView ? "my-0 p-12 min-h-[1050px] print:border-none print:shadow-none print:p-8" : "my-8 p-8 sm:p-14 min-h-[920px]"
      } flex flex-col justify-between overflow-hidden transition-all`}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Header Metadata Ribbon */}
      <header className="w-full flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-blue-400 tracking-wider">
            {page.sectionCode}
          </span>
          <span className="text-slate-400 text-xs">/</span>
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
            {page.category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-slate-400 tracking-widest">
            STRATISION EXECUTIVE BRIEFING
          </span>
          <span className="font-mono text-xs text-white font-medium px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08]">
            {page.pageNumber.toString().padStart(2, "0")} / 18
          </span>
        </div>
      </header>

      {/* Main Page Content Body */}
      <div className="flex-grow flex flex-col justify-center py-2 space-y-6">
        {/* PAGE 01: COVER */}
        {page.pageNumber === 1 && (
          <div className="space-y-10 text-center py-10 flex flex-col items-center justify-center">
            <div className="font-mono text-xs text-blue-400 tracking-[0.3em] uppercase">
              STRATISION EXECUTIVE PUBLICATION
            </div>

            <div className="space-y-4 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                THE EXECUTIVE GUIDE TO AI SYSTEMS
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed pt-2">
                Moving from AI experimentation to governed operational deployment.
              </p>
            </div>

            <CoverArchitecturalMotif />

            <div className="space-y-3 pt-4 border-t border-white/[0.08] w-full max-w-md flex flex-col items-center">
              <StratisionLogo size="sm" />
              <div className="text-xs text-slate-400 font-mono">A briefing for business leaders</div>
            </div>
          </div>
        )}

        {/* PAGE 02: THE EXECUTIVE QUESTION */}
        {page.pageNumber === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                THE QUESTION IS NO LONGER WHETHER AI MATTERS.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed pt-1">
                AI has already moved beyond experimentation. Employees are using it to write, research, analyse, summarise and communicate.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>Individual use is only one part of the opportunity.</p>
              <p>The larger opportunity comes when AI becomes part of how work actually moves through an organisation.</p>
              <p className="text-base font-semibold text-white pt-1">
                The executive question becomes: “Where should AI be embedded into the way our organisation works?”
              </p>
              <p className="font-mono text-xs text-blue-400">
                That requires a different starting point. Not technology first. BUSINESS FIRST.
              </p>
            </div>

            <ThreeQuestionsDiagram />

            <div className="text-sm font-medium text-slate-300 italic border-l-2 border-blue-400 pl-4 py-1">
              “The objective is not to introduce AI everywhere. It is to find the places where it can create genuine leverage.”
            </div>
          </div>
        )}

        {/* PAGE 03: AI TOOLS VS AI SYSTEMS */}
        {page.pageNumber === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI TOOLS VS AI SYSTEMS
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                The difference is not simply the technology. It is where the technology sits in the workflow.
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              A tool helps someone do a task. A system can become part of the process itself.
            </p>

            <ToolsVsSystemsDiagram />

            <div className="text-sm font-medium text-slate-300 italic border-l-2 border-blue-400 pl-4 py-1">
              “When an AI system connects with business data and operating software, leverage accrues to the entire enterprise.”
            </div>
          </div>
        )}

        {/* PAGE 04: WHERE THE OPPORTUNITY ACTUALLY IS */}
        {page.pageNumber === 4 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                WHERE THE OPPORTUNITY ACTUALLY IS
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                AI does not need to transform everything. The strongest opportunities are often found in ordinary business processes.
              </p>
            </div>

            <FrictionAccumulationDiagram />

            <div className="space-y-3 text-sm text-slate-300 leading-relaxed pt-2">
              <p>These problems appear across almost every organisation.</p>
              <p className="text-slate-400">
                The specific solution depends on: The workflow. The people involved. The information available. The systems already in place. The organisation's requirements.
              </p>
            </div>
          </div>
        )}

        {/* PAGE 05: FOUR AREAS OF OPPORTUNITY */}
        {page.pageNumber === 5 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                FOUR AREAS OF OPPORTUNITY
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                These are not four products. They are four ways of looking for useful business opportunities.
              </p>
            </div>

            <FourAreasEditorialZones />

            <div className="text-xs font-mono text-slate-400">
              Technology follows the business need. These four domains pinpoint where leverage exists.
            </div>
          </div>
        )}

        {/* PAGE 06: START WITH THE BUSINESS */}
        {page.pageNumber === 6 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                START WITH THE BUSINESS
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                THE TECHNOLOGY SHOULD FOLLOW THE WORKFLOW.
              </p>
            </div>

            <ThreeStageProgressionDiagram />

            <div className="text-lg font-semibold text-white italic border-l-2 border-blue-400 pl-4 py-2">
              “Do not start with what AI can do. Start with what the business needs.”
            </div>
          </div>
        )}

        {/* PAGE 07: THE BUSINESS INTELLIGENCE ASSESSMENT™ */}
        {page.pageNumber === 7 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                THE BUSINESS INTELLIGENCE ASSESSMENT™
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                BEFORE BUILDING, UNDERSTAND.
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              The Business Intelligence Assessment™ is Stratision's structured diagnostic for identifying where AI may create genuine operational leverage. It examines the organisation before recommending technology.
            </p>

            <AssessmentArchitectureDiagram />

            <div className="text-sm font-medium text-slate-300 italic border-l-2 border-blue-400 pl-4 py-1">
              “The assessment is designed to answer one question: Where should AI actually be deployed — and where should it not?”
            </div>
          </div>
        )}

        {/* PAGE 08: FROM PROBLEM TO PRIORITY */}
        {page.pageNumber === 8 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                FROM PROBLEM TO PRIORITY
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                NOT EVERY AI OPPORTUNITY DESERVES TO BE BUILT.
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              A useful opportunity needs more than an interesting idea.
            </p>

            <PrioritisationMatrixDiagram />

            <div className="text-sm font-medium text-slate-300 italic border-l-2 border-blue-400 pl-4 py-1">
              “The result is not a list of AI ideas. It is a prioritised view of where AI may create the most meaningful leverage.”
            </div>
          </div>
        )}

        {/* PAGE 09: WHAT A BESPOKE AI SYSTEM LOOKS LIKE */}
        {page.pageNumber === 9 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                WHAT A BESPOKE AI SYSTEM LOOKS LIKE
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                FROM INFORMATION TO COMPLETED WORK.
              </p>
            </div>

            <BespokeSystemBlueprintDiagram />

            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              The exact workflow depends on the organisation. The architecture is designed around the real process rather than forcing the business into an off-the-shelf workflow.
            </p>
          </div>
        )}

        {/* PAGE 10: PEOPLE REMAIN PART OF THE SYSTEM */}
        {page.pageNumber === 10 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                PEOPLE REMAIN PART OF THE SYSTEM
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                AUTOMATION DOES NOT MEAN REMOVING JUDGEMENT.
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Some business processes can be automated extensively. Others require people to review, approve or make the final decision. The right design depends on the consequences of the task.
            </p>

            <HumanSystemSplitDiagram />

            <div className="text-sm font-medium text-slate-300 italic border-l-2 border-blue-400 pl-4 py-1">
              “The goal is not to remove people from the process. It is to give people better systems to work with.”
            </div>
          </div>
        )}

        {/* PAGE 11: GOVERNANCE & CONTROL */}
        {page.pageNumber === 11 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                GOVERNANCE & CONTROL
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                AI systems need boundaries. Introducing AI into an organisation raises practical questions about information, access, responsibility and oversight.
              </p>
            </div>

            <p className="text-xs text-slate-400">
              These should be considered before deployment, not afterwards.
            </p>

            <GovernanceControlDiagram />

            <div className="text-sm font-medium text-slate-300 italic border-l-2 border-blue-400 pl-4 py-1">
              “Governance should be part of the system design from the beginning.”
            </div>
          </div>
        )}

        {/* PAGE 12: BUILD OR BUY? */}
        {page.pageNumber === 12 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                BUILD OR BUY?
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                NOT EVERY PROBLEM REQUIRES A BESPOKE SYSTEM.
              </p>
            </div>

            <BuildOrBuyDiagram />

            <div className="text-base font-semibold text-white italic border-l-2 border-blue-400 pl-4 py-2">
              “The right answer is the one that best fits the business — not automatically the one that involves building more.”
            </div>
          </div>
        )}

        {/* PAGE 13: FROM ASSESSMENT TO WORKING SYSTEM */}
        {page.pageNumber === 13 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                FROM ASSESSMENT TO WORKING SYSTEM
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                A CLEAR PATH FROM OPPORTUNITY TO DEPLOYMENT.
              </p>
            </div>

            <AssessmentToSystemDiagram />

            <p className="text-xs text-slate-400 font-mono">
              Engineered with transparency, operational clarity, and direct enterprise integration.
            </p>
          </div>
        )}

        {/* PAGE 14: WHAT GOOD AI DEPLOYMENT LOOKS LIKE */}
        {page.pageNumber === 14 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                WHAT GOOD AI DEPLOYMENT LOOKS LIKE
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                A SUCCESSFUL AI SYSTEM SHOULD FIT INTO THE BUSINESS.
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              It should not create another destination employees have to remember to visit.
            </p>

            <GoodDeploymentDiagram />

            <div className="text-base font-semibold text-white italic border-l-2 border-blue-400 pl-4 py-2">
              “Does the system make the organisation easier to operate — or does it create another layer of work?”
            </div>
          </div>
        )}

        {/* PAGE 15: EXECUTIVE AI READINESS CHECKLIST */}
        {page.pageNumber === 15 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                EXECUTIVE AI READINESS CHECKLIST
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                BEFORE YOUR ORGANISATION BUILDS ANYTHING, ASK:
              </p>
            </div>

            <div className="space-y-5 text-xs text-slate-300 pt-2">
              {page.checklistGroups?.map((grp, idx) => (
                <div key={idx} className="border-t border-white/[0.08] pt-3 space-y-2">
                  <div className="font-mono text-xs text-blue-400 font-semibold tracking-wider">
                    {grp.category}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {grp.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 py-0.5">
                        <span className="font-mono text-slate-400">□</span>
                        <span className="text-slate-300 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 16: THE STRATISION APPROACH */}
        {page.pageNumber === 16 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                THE STRATISION APPROACH
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                START WITH THE BUSINESS. THEN DETERMINE WHAT TO BUILD.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>Stratision does not begin with a catalogue of AI products.</p>
              <p>We begin by understanding how the organisation operates.</p>
              <p>We identify where friction exists.</p>
              <p>We assess where AI can create genuine leverage.</p>
              <p>We prioritise the opportunities worth pursuing.</p>
              <p>Then we design and engineer the system around the business.</p>
            </div>

            <StratisionJourneyProgression />

            <div className="text-base font-semibold text-white italic border-l-2 border-blue-400 pl-4 py-2">
              “The future won't be defined by how many AI tools a business uses. It will be defined by how intelligently AI is built into the way the business works.”
            </div>
          </div>
        )}

        {/* PAGE 17: ABOUT STRATISION */}
        {page.pageNumber === 17 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                ABOUT STRATISION
              </h2>
              <p className="text-base text-blue-400 font-mono text-sm">
                AI SYSTEMS DESIGNED AROUND HOW ORGANISATIONS ACTUALLY WORK.
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Stratision is a bespoke AI systems consultancy. We identify high-friction business workflows, assess where AI can create genuine leverage, and engineer systems around the way organisations operate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-b border-white/[0.08] py-8">
              {[
                { title: "STRATEGY", desc: "Understanding where AI belongs." },
                { title: "SYSTEMS", desc: "Designing what should be built." },
                { title: "ENGINEERING", desc: "Connecting the system to the business." },
                { title: "ADOPTION", desc: "Helping people use and evolve it." },
              ].map((pill, idx) => (
                <div key={idx} className="space-y-1.5 border-t border-white/[0.1] pt-3">
                  <div className="font-mono text-xs text-blue-400 tracking-wider">{pill.title}</div>
                  <p className="text-xs text-slate-300">{pill.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-base font-semibold text-white italic border-l-2 border-blue-400 pl-4 py-2">
              “We solve business problems. Technology is simply the method.”
            </div>
          </div>
        )}

        {/* PAGE 18: FINAL CTA */}
        {page.pageNumber === 18 && (
          <div className="space-y-8 text-center py-8 flex flex-col items-center justify-center">
            <div className="space-y-3 max-w-xl">
              <div className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                COMMERCIAL ENGAGEMENT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                START WITH THE BUSINESS.
                <br />
                THEN DETERMINE WHAT TO BUILD.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
              The Business Intelligence Assessment™ is the starting point for organisations that want to understand where AI can create genuine operational leverage.
            </p>

            <p className="text-xs text-slate-400 max-w-md">
              We examine how your organisation works, identify the areas where AI may be valuable, and establish what should be built — if anything.
            </p>

            <div className="pt-4 flex flex-col items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-3 shadow-[0_2px_20px_rgba(255,255,255,0.18)] group"
              >
                <span>Request Business Intelligence Assessment™</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="text-xs text-slate-400 font-mono">
                Confidential discussion with a senior Stratision specialist. No obligation.
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08] w-full max-w-sm flex flex-col items-center">
              <StratisionLogo size="sm" />
            </div>
          </div>
        )}
      </div>

      {/* Footer Metadata Ribbon */}
      <footer className="w-full flex items-center justify-between border-t border-white/[0.08] pt-4 mt-8 font-mono text-[11px] text-slate-400">
        <div>
          {page.footnote || "Stratision // Systems Architecture & Governance Group"}
        </div>
        <div>
          PAGE {page.pageNumber.toString().padStart(2, "0")} OF 18
        </div>
      </footer>
    </article>
  );
};
