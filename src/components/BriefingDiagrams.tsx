import React from "react";

// PAGE 01: Minimal Cover Architectural Line Motif
export const CoverArchitecturalMotif: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto py-8">
      <svg
        viewBox="0 0 600 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-slate-500/40"
      >
        {/* Subtle coordinate grid lines */}
        <line x1="40" y1="80" x2="560" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="160" y1="20" x2="160" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="300" y1="10" x2="300" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="440" y1="20" x2="440" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />

        {/* Primary architectural geometry */}
        <circle cx="160" cy="80" r="28" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.8" />
        <circle cx="160" cy="80" r="3" fill="#60A5FA" />
        <circle cx="300" cy="80" r="44" stroke="#64748B" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="300" cy="80" r="4" fill="#94A3B8" />
        <circle cx="440" cy="80" r="28" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.8" />
        <circle cx="440" cy="80" r="3" fill="#60A5FA" />

        {/* Connecting precision vectors */}
        <path d="M 188 80 L 256 80" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M 344 80 L 412 80" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Bounded tangent markers */}
        <line x1="256" y1="74" x2="256" y2="86" stroke="#60A5FA" strokeWidth="1.5" />
        <line x1="344" y1="74" x2="344" y2="86" stroke="#60A5FA" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

// PAGE 02: Three Editorial Question Markers
export const ThreeQuestionsDiagram: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-6 pt-4 border-t border-b border-white/[0.08] py-8">
      <div className="space-y-3">
        <div className="font-mono text-xs text-blue-400 tracking-widest">DIAGNOSTIC QUESTION // 01</div>
        <div className="text-xl font-medium text-white tracking-tight">Where is work slow?</div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Where do employees spend disproportionate time on repetitive manual work and administrative cycles?
        </p>
      </div>

      <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6">
        <div className="font-mono text-xs text-blue-400 tracking-widest">DIAGNOSTIC QUESTION // 02</div>
        <div className="text-xl font-medium text-white tracking-tight">Where does information get stuck?</div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Where are people repeatedly moving data between documents, siloed business systems, and busy teams?
        </p>
      </div>

      <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6">
        <div className="font-mono text-xs text-blue-400 tracking-widest">DIAGNOSTIC QUESTION // 03</div>
        <div className="text-xl font-medium text-white tracking-tight">Where could better information change a decision?</div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Where would faster access to synthesized, verified information fundamentally improve how decisions are made?
        </p>
      </div>
    </div>
  );
};

// PAGE 03: AI Tools vs AI Systems (Major Two-Path Architectural Diagram, No Cards)
export const ToolsVsSystemsDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 space-y-12">
      {/* Path 1: AI Tool */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.1] pb-2">
          <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">PATHWAY A // INDIVIDUAL ASSISTANCE</span>
          <span className="text-xs font-semibold text-slate-300">AI TOOL</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {[
            { step: "01", label: "Employee", desc: "Identifies isolated task" },
            { step: "02", label: "Opens AI Tool", desc: "Separate browser window" },
            { step: "03", label: "Asks Question", desc: "Manual prompt entry" },
            { step: "04", label: "Receives Answer", desc: "Unverified text output" },
            { step: "05", label: "Copies Result", desc: "Clipboard transfer" },
            { step: "06", label: "Returns to Workflow", desc: "Manual paste & format" },
          ].map((item, idx) => (
            <div key={idx} className="relative pr-2">
              <div className="font-mono text-[10px] text-slate-400">{item.step}</div>
              <div className="text-sm font-medium text-slate-200 mt-1">{item.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
              {idx < 5 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Path 2: AI System */}
      <div className="space-y-4 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between border-b border-white/[0.1] pb-2">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">PATHWAY B // OPERATIONAL INFRASTRUCTURE</span>
          <span className="text-xs font-semibold text-blue-300">AI SYSTEM</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {[
            { step: "01", label: "Business Information", desc: "Native files & streams" },
            { step: "02", label: "AI Reads & Organises", desc: "Extracts & structures" },
            { step: "03", label: "Connects Steps", desc: "Cross-system workflows" },
            { step: "04", label: "Checks Result", desc: "Rule & citation audit" },
            { step: "05", label: "Human Approval", desc: "Authority sign-off point" },
            { step: "06", label: "Completed Task", desc: "System update & record" },
          ].map((item, idx) => (
            <div key={idx} className="relative pr-2">
              <div className="font-mono text-[10px] text-blue-400">{item.step}</div>
              <div className="text-sm font-medium text-white mt-1">{item.label}</div>
              <div className="text-xs text-slate-300 mt-0.5">{item.desc}</div>
              {idx < 5 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-blue-400 font-mono text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PAGE 04: Friction Accumulating Flow
export const FrictionAccumulationDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 border-t border-b border-white/[0.08] py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            num: "01",
            title: "Repetitive Work",
            desc: "People repeatedly reading, copying, sorting, and checking information across daily queues.",
          },
          {
            num: "02",
            title: "Information Hunts",
            desc: "Skilled employees spending hours searching through archives, drives, inboxes, and chat channels.",
          },
          {
            num: "03",
            title: "Manual Handoffs",
            desc: "Work stalled in transit between departments through manual emails, attachments, and spreadsheet tracking.",
          },
          {
            num: "04",
            title: "Information-Heavy Decisions",
            desc: "Executives and professionals reviewing multi-hundred page documents before taking significant decisions.",
          },
        ].map((item, idx) => (
          <div key={idx} className="space-y-3 relative">
            <div className="font-mono text-xs text-slate-400">{item.num} // FRICTION POINT</div>
            <div className="text-base font-semibold text-white tracking-tight">{item.title}</div>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PAGE 05: Four Areas of Opportunity (Editorial Zones, NO card grid)
export const FourAreasEditorialZones: React.FC = () => {
  return (
    <div className="w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-b border-white/[0.08] py-10">
      <div className="space-y-4">
        <div className="font-mono text-xs text-blue-400 tracking-widest">FAMILY 01 // WORKFORCE</div>
        <div className="text-lg font-semibold text-white">Workforce Intelligence</div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Help people find and use company knowledge more effectively.
        </p>
        <div className="font-mono text-xs text-slate-400 space-y-1 pt-1 border-t border-white/[0.06]">
          <div>• Internal knowledge archives</div>
          <div>• New employee onboarding</div>
          <div>• Approved operational guidance</div>
          <div>• Role-specific procedures</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-mono text-xs text-blue-400 tracking-widest">FAMILY 02 // PROCESSES</div>
        <div className="text-lg font-semibold text-white">Operations & Workflows</div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Connect repetitive work and keep business processes moving.
        </p>
        <div className="font-mono text-xs text-slate-400 space-y-1 pt-1 border-t border-white/[0.06]">
          <div>• High-volume document handling</div>
          <div>• Administrative workflows</div>
          <div>• Multi-stage approvals & checks</div>
          <div>• System-to-system information transfer</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-mono text-xs text-blue-400 tracking-widest">FAMILY 03 // COMMERCIAL</div>
        <div className="text-lg font-semibold text-white">Sales & Customer Operations</div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Help teams manage customer-facing work more efficiently.
        </p>
        <div className="font-mono text-xs text-slate-400 space-y-1 pt-1 border-t border-white/[0.06]">
          <div>• Inbound commercial enquiries</div>
          <div>• Opportunity qualification</div>
          <div>• Proposal follow-up coordination</div>
          <div>• Account information synthesis</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-mono text-xs text-blue-400 tracking-widest">FAMILY 04 // DECISION</div>
        <div className="text-lg font-semibold text-white">Knowledge & Decision Support</div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Help people work with large volumes of complex information.
        </p>
        <div className="font-mono text-xs text-slate-400 space-y-1 pt-1 border-t border-white/[0.06]">
          <div>• Complex document review & diligence</div>
          <div>• Management reporting preparation</div>
          <div>• Variance and exposure analysis</div>
          <div>• Structured decision briefings</div>
        </div>
      </div>
    </div>
  );
};

// PAGE 06: Start with the Business (Three-Stage Progression)
export const ThreeStageProgressionDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/[0.08] py-8">
      <div className="space-y-3">
        <div className="font-mono text-xs text-slate-400 tracking-widest">STAGE 01</div>
        <div className="text-lg font-semibold text-white">UNDERSTAND</div>
        <p className="text-xs text-slate-400">How does the organisation work today?</p>
        <div className="font-mono text-xs text-slate-300 space-y-1 pt-2 border-t border-white/[0.06]">
          <div>• People & roles</div>
          <div>• Active processes</div>
          <div>• Systems & software</div>
          <div>• Information stores</div>
          <div>• Decision authorities</div>
        </div>
      </div>

      <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6">
        <div className="font-mono text-xs text-blue-400 tracking-widest">STAGE 02</div>
        <div className="text-lg font-semibold text-white">ASSESS</div>
        <p className="text-xs text-slate-400">Where is there genuine friction?</p>
        <div className="font-mono text-xs text-slate-300 space-y-1 pt-2 border-t border-white/[0.06]">
          <div>• Repetition & clerical drag</div>
          <div>• Delays in turnaround</div>
          <div>• Manual data re-keying</div>
          <div>• Information gaps</div>
          <div>• Decision bottlenecks</div>
        </div>
      </div>

      <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6">
        <div className="font-mono text-xs text-blue-300 tracking-widest">STAGE 03</div>
        <div className="text-lg font-semibold text-white">PRIORITISE</div>
        <p className="text-xs text-slate-400">Where is AI actually worth deploying?</p>
        <div className="font-mono text-xs text-slate-300 space-y-1 pt-2 border-t border-white/[0.06]">
          <div>• Business value</div>
          <div>• Feasibility & clean data</div>
          <div>• System integration</div>
          <div>• Governance requirements</div>
          <div>• People & adoption readiness</div>
        </div>
      </div>
    </div>
  );
};

// PAGE 07: Assessment Architecture
export const AssessmentArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 space-y-4">
      <div className="font-mono text-xs text-slate-400 tracking-widest uppercase">THE FIVE DIAGNOSTIC PILLARS</div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
        {[
          { num: "01", title: "Business Overview", items: ["Strategic priorities", "Operating model", "Market pressures"] },
          { num: "02", title: "Executive Interview", items: ["Leadership perspective", "Strategic friction", "Risk boundaries"] },
          { num: "03", title: "Business Functions", items: ["Sales, Ops, Finance", "HR, Legal, L&D", "Client Service"] },
          { num: "04", title: "Technology", items: ["Current software", "Data repositories", "API connectivity"] },
          { num: "05", title: "AI Readiness", items: ["Leadership, People", "Data & Security", "Governance & Culture"] },
        ].map((col, idx) => (
          <div key={idx} className="border-t border-white/[0.1] pt-3 space-y-2">
            <div className="font-mono text-[11px] text-blue-400">{col.num}</div>
            <div className="text-sm font-semibold text-white">{col.title}</div>
            <div className="font-mono text-[11px] text-slate-400 space-y-1 pt-1">
              {col.items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PAGE 08: Prioritisation Matrix
export const PrioritisationMatrixDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 border-t border-b border-white/[0.08] py-8">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {[
          { key: "BUSINESS VALUE", question: "How meaningful is the problem?" },
          { key: "FREQUENCY", question: "How often does the work occur?" },
          { key: "CAPACITY", question: "How much employee effort is consumed?" },
          { key: "FEASIBILITY", question: "Can systems and data support it?" },
          { key: "GOVERNANCE", question: "Can it operate within controls?" },
          { key: "PRIORITY", question: "Does it justify action now?" },
        ].map((m, idx) => (
          <div key={idx} className="space-y-2 border-t border-white/[0.1] pt-3">
            <div className="font-mono text-[10px] text-blue-400 tracking-wider uppercase">{m.key}</div>
            <div className="text-xs text-slate-300 leading-snug">{m.question}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PAGE 09: Flagship Bespoke AI System Blueprint Flow
export const BespokeSystemBlueprintDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 space-y-6">
      {/* Input */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.1] pb-3 text-xs font-mono text-slate-400">
        <span className="text-blue-400">INPUT STREAMS:</span>
        <span>Documents • Spreadsheets • Emails • Business Systems • Knowledge Bases</span>
      </div>

      {/* 4 Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
        <div className="space-y-2 border-l-2 border-blue-500/80 pl-4 py-1">
          <div className="font-mono text-xs text-blue-400">01 — READ & ORGANISE</div>
          <div className="text-sm font-semibold text-white">Ingest & Structure</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Reads incoming information and organises what matters into validated formats.
          </p>
        </div>

        <div className="space-y-2 border-l-2 border-blue-400/60 pl-4 py-1">
          <div className="font-mono text-xs text-blue-400">02 — CONNECT THE STEPS</div>
          <div className="text-sm font-semibold text-white">Cross-Step Synthesis</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Brings relevant context together according to workflow rules and business logic.
          </p>
        </div>

        <div className="space-y-2 border-l-2 border-blue-400/40 pl-4 py-1">
          <div className="font-mono text-xs text-blue-400">03 — CHECK THE RESULT</div>
          <div className="text-sm font-semibold text-white">Verification & Traceability</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Checks information against rules and highlights items that require attention.
          </p>
        </div>

        <div className="space-y-2 border-l-2 border-blue-400/20 pl-4 py-1">
          <div className="font-mono text-xs text-blue-400">04 — COMPLETE THE TASK</div>
          <div className="text-sm font-semibold text-white">Action & System Update</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Prepares results for the appropriate executive sign-off or updates enterprise records.
          </p>
        </div>
      </div>
    </div>
  );
};

// PAGE 10: Human + System Relationship (AI Can vs People Can)
export const HumanSystemSplitDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-white/[0.08] py-8">
      <div className="space-y-4">
        <div className="font-mono text-xs text-slate-400 tracking-widest">SYSTEM CAPABILITY</div>
        <div className="text-base font-semibold text-white">AI CAN:</div>
        <ul className="space-y-2 text-xs text-slate-300 font-mono">
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Read information across formats</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Organise unstructured records</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Find relevant details and precedents</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Check against defined business rules</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Highlight anomalies and exceptions</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Prepare briefing drafts with citations</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Move information between agreed steps</li>
        </ul>
      </div>

      <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-8">
        <div className="font-mono text-xs text-blue-400 tracking-widest">HUMAN AUTHORITY</div>
        <div className="text-base font-semibold text-white">PEOPLE CAN:</div>
        <ul className="space-y-2 text-xs text-slate-300 font-mono">
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Review important findings</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Approve critical operational actions</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Make high-stakes business decisions</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Handle unprecedented exceptions</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Set business strategy and rules</li>
          <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Remain accountable for critical outcomes</li>
        </ul>
      </div>
    </div>
  );
};

// PAGE 11: Governance & Control Architecture
export const GovernanceControlDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 space-y-3">
      <div className="font-mono text-xs text-slate-400 tracking-widest uppercase">THE FIVE GOVERNANCE BOUNDARIES</div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
        {[
          { num: "01", title: "Private by Design", desc: "Designed around organisation security and data rules" },
          { num: "02", title: "Record of Sources", desc: "Important findings trace back to source documents" },
          { num: "03", title: "Controlled Access", desc: "Information served strictly according to roles" },
          { num: "04", title: "Human Approval", desc: "Important decisions remain subject to human review" },
          { num: "05", title: "Clear Records", desc: "System activity recorded for auditability and oversight" },
        ].map((g, idx) => (
          <div key={idx} className="border-t border-white/[0.1] pt-3 space-y-1.5">
            <div className="font-mono text-xs text-blue-400">{g.num}</div>
            <div className="text-xs font-semibold text-white">{g.title}</div>
            <p className="text-[11px] text-slate-400 leading-snug">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PAGE 12: Buy vs Configure vs Build Decision Path
export const BuildOrBuyDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-white/[0.08] py-8">
      <div className="space-y-3">
        <div className="font-mono text-xs text-slate-400 tracking-widest">OPTION 01</div>
        <div className="text-base font-semibold text-white">BUY</div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Use an existing product when it already solves the problem effectively.
        </p>
        <div className="font-mono text-xs text-slate-300 space-y-1 pt-2 border-t border-white/[0.06]">
          <div>• Workflow is common</div>
          <div>• Standard requirements</div>
          <div>• Off-the-shelf fit exists</div>
        </div>
      </div>

      <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6">
        <div className="font-mono text-xs text-slate-400 tracking-widest">OPTION 02</div>
        <div className="text-base font-semibold text-white">CONFIGURE</div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Adapt an existing platform when additional workflow or integration is required.
        </p>
        <div className="font-mono text-xs text-slate-300 space-y-1 pt-2 border-t border-white/[0.06]">
          <div>• Core capability exists</div>
          <div>• Controlled customisation</div>
          <div>• Standard platform extensions</div>
        </div>
      </div>

      <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-6">
        <div className="font-mono text-xs text-blue-400 tracking-widest">OPTION 03</div>
        <div className="text-base font-semibold text-white">BUILD</div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Create a bespoke system when workflows, rules or integrations are specific.
        </p>
        <div className="font-mono text-xs text-slate-300 space-y-1 pt-2 border-t border-white/[0.06]">
          <div>• Process is distinctive</div>
          <div>• Existing products do not fit</div>
          <div>• Multiple systems connect</div>
          <div>• Designed around your ways</div>
        </div>
      </div>
    </div>
  );
};

// PAGE 13: Four-Stage Journey (Assessment to Working System)
export const AssessmentToSystemDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-b border-white/[0.08] py-8">
      {[
        {
          num: "01",
          title: "Discover & Diagnose",
          focus: "Understand organisation and friction.",
          output: "Business Intelligence Assessment™ & Strategic AI Roadmap",
        },
        {
          num: "02",
          title: "Architect & Specify",
          focus: "Design system around workflows and rules.",
          output: "System Specification & Governance Blueprint",
        },
        {
          num: "03",
          title: "Deliver & Integrate",
          focus: "Engineer system and connect with business.",
          output: "Bespoke Production System & Operational Integration",
        },
        {
          num: "04",
          title: "Adopt & Evolve",
          focus: "Help teams adopt and continuously refine.",
          output: "Team Training, Operational Support & Ongoing Enhancement",
        },
      ].map((st, idx) => (
        <div key={idx} className="space-y-2 border-t border-white/[0.1] pt-3">
          <div className="font-mono text-xs text-blue-400">{st.num} // STAGE</div>
          <div className="text-sm font-semibold text-white">{st.title}</div>
          <div className="text-xs text-slate-400">{st.focus}</div>
          <div className="font-mono text-[11px] text-slate-300 pt-2 border-t border-white/[0.06]">
            Output: {st.output}
          </div>
        </div>
      ))}
    </div>
  );
};

// PAGE 14: What Good Deployment Looks Like
export const GoodDeploymentDiagram: React.FC = () => {
  return (
    <div className="w-full my-8 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-b border-white/[0.08] py-8">
      {[
        { title: "Fits the Workflow", desc: "The system works around how people already operate." },
        { title: "Uses the Right Information", desc: "Works directly with the information required for the task." },
        { title: "Connects to Existing Systems", desc: "Information moves cleanly between software already in use." },
        { title: "Has Clear Boundaries", desc: "People understand exactly what the system can and cannot do." },
        { title: "Keeps People Involved", desc: "Important decisions remain appropriately governed." },
        { title: "Can Evolve", desc: "System can improve as processes and requirements change." },
      ].map((item, idx) => (
        <div key={idx} className="space-y-1.5 border-t border-white/[0.1] pt-3">
          <div className="text-xs font-semibold text-white">{item.title}</div>
          <p className="text-xs text-slate-400">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

// PAGE 16: The Stratision Journey Progression
export const StratisionJourneyProgression: React.FC = () => {
  return (
    <div className="w-full my-8 py-4">
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-slate-300 border-t border-b border-white/[0.08] py-4">
        <span className="text-white font-semibold">BUSINESS</span>
        <span className="text-blue-400">→</span>
        <span className="text-white font-semibold">ASSESSMENT™</span>
        <span className="text-blue-400">→</span>
        <span className="text-white font-semibold">PRIORITY</span>
        <span className="text-blue-400">→</span>
        <span className="text-white font-semibold">ARCHITECTURE</span>
        <span className="text-blue-400">→</span>
        <span className="text-white font-semibold">WORKING SYSTEM</span>
        <span className="text-blue-400">→</span>
        <span className="text-white font-semibold">ADOPTION</span>
      </div>
    </div>
  );
};
