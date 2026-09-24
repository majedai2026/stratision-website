import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Database, FileSpreadsheet, Mail, User, Layers, Cpu, ArrowDown } from "lucide-react";

interface DiagramProps {
  type: string;
}

export const InsightsDiagram: React.FC<DiagramProps> = ({ type }) => {
  switch (type) {
    case "tool-vs-system":
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                SYSTEM ARCHITECTURE // COMPARISON SCHEMATIC
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                Point Tool Configuration vs. Autonomous System Pipeline
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">SCHEMATIC REF: SYS-ARCH-02</span>
          </div>

          <div className="space-y-8">
            {/* TOOL CONFIGURATION */}
            <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wide">
                  MODEL A // DESKTOP POINT TOOL (HUMAN AS CARRIER)
                </span>
                <span className="text-[11px] font-mono text-amber-400/90 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-800/40">
                  Unconnected Workflow
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pt-2">
                <div className="px-3 py-2 rounded-lg bg-[#141A28] border border-white/[0.08] text-slate-200 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>Employee</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#141A28] border border-white/[0.08] text-slate-200 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>AI Tool</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#141A28] border border-white/[0.08] text-slate-200">
                  <span>Answer</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#141A28] border border-white/[0.08] text-slate-200 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>Employee</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#141A28] border border-white/[0.08] text-slate-200">
                  <span>Workflow</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 italic">
                Notice: The human is the transport layer — copying, formatting, and navigating disconnected systems manually.
              </p>
            </div>

            {/* SYSTEM CONFIGURATION */}
            <div className="p-4 sm:p-5 rounded-xl bg-blue-950/[0.12] border border-blue-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold text-blue-300 uppercase tracking-wide">
                  MODEL B // STRATISION INTEGRATED SYSTEM PIPELINE
                </span>
                <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/40">
                  Sovereign & Governed
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pt-2">
                <div className="px-3 py-2 rounded-lg bg-[#0F1626] border border-blue-500/30 text-blue-200 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>Business Info</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#0F1626] border border-blue-500/30 text-blue-200 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>AI Enclave</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#0F1626] border border-blue-500/30 text-blue-200 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Connected Steps</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#0F1626] border border-blue-500/30 text-blue-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Automated Checks</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#0F1626] border border-blue-500/30 text-blue-200 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Human Judgement</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <div className="px-3 py-2 rounded-lg bg-[#0F1626] border border-blue-500/30 text-blue-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Completed Work</span>
                </div>
              </div>
              <p className="text-[11px] text-blue-200/70 mt-3 italic">
                Notice: The human operates at the apex of governance — evaluating exceptions, approving critical thresholds, and directing strategy.
              </p>
            </div>
          </div>
        </div>
      );

    case "information-handoffs":
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                SYSTEM SCHEMATIC // HANDOFF LATENCY
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                The Cumulative Friction in Enterprise Information Pathways
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">SCHEMATIC REF: LATENCY-FLOW-01</span>
          </div>

          <div className="relative py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-mono text-slate-400">STATION 01</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">Person → Email</div>
                <div className="text-[11px] text-slate-400 mt-2">Unstructured customer inquiry sits in team inbox.</div>
                <div className="mt-3 font-mono text-[10px] text-amber-400/90 bg-amber-950/20 px-2 py-0.5 rounded inline-block">
                  Avg queue: 4–18 hrs
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-mono text-slate-400">STATION 02</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">Email → Spreadsheet</div>
                <div className="text-[11px] text-slate-400 mt-2">Associate manually re-types rows into internal tracker.</div>
                <div className="mt-3 font-mono text-[10px] text-amber-400/90 bg-amber-950/20 px-2 py-0.5 rounded inline-block">
                  Avg queue: 2–6 hrs
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span className="text-[10px] font-mono text-slate-400">STATION 03</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">Document → System</div>
                <div className="text-[11px] text-slate-400 mt-2">Payload verified against ERP database constraints.</div>
                <div className="mt-3 font-mono text-[10px] text-amber-400/90 bg-amber-950/20 px-2 py-0.5 rounded inline-block">
                  Avg queue: 8–24 hrs
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <User className="w-4 h-4 text-indigo-400" />
                  <span className="text-[10px] font-mono text-slate-400">STATION 04</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">Dept → Dept</div>
                <div className="text-[11px] text-slate-400 mt-2">Escalation to senior analyst for final determination.</div>
                <div className="mt-3 font-mono text-[10px] text-amber-400/90 bg-amber-950/20 px-2 py-0.5 rounded inline-block">
                  Avg queue: 1–3 days
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-blue-950/[0.15] border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-blue-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>ACTIVE HUMAN REASONING TIME: &lt; 90 MINUTES</span>
              </div>
              <div className="text-slate-400 font-mono text-[11px]">
                ACCUMULATED QUEUE & LATENCY: 96+ HOURS (98.4% OF TOTAL CYCLE)
              </div>
            </div>
          </div>
        </div>
      );

    case "opportunity-areas":
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                ENTERPRISE TAXONOMY // OPERATIONAL ZONES
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                The Four Structural Opportunity Areas for Enterprise AI
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">SCHEMATIC REF: MAP-ZONES-04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.08] hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase">ZONE 01</span>
                <span className="text-[10px] font-mono text-slate-500">INTERNAL CAPABILITY</span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-1.5">Workforce Intelligence</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Helping teams instantly query institutional policies, technical manuals, internal procedures, and regulatory guidance with grounded source citations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.08] hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase">ZONE 02</span>
                <span className="text-[10px] font-mono text-slate-500">CORE INFRASTRUCTURE</span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-1.5">Operations & Workflows</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connecting repetitive operational steps, validating incoming documents, executing ledger reconciliations, and routing edge cases for manager approval.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.08] hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase">ZONE 03</span>
                <span className="text-[10px] font-mono text-slate-500">EXTERNAL VELOCITY</span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-1.5">Sales & Customer Operations</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-channel inbound request triage, structured qualification scoring, automated quotation drafting, and client communication pipeline execution.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.08] hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase">ZONE 04</span>
                <span className="text-[10px] font-mono text-slate-500">ANALYTICAL SYNTHESIS</span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-1.5">Knowledge & Decision Support</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Synthesizing massive unstructured context across contracts, portfolios, market intelligence, and assembling pre-validated briefing dossiers for committees.
              </p>
            </div>
          </div>
        </div>
      );

    case "build-buy-configure":
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                GOVERNANCE HEURISTIC // CAPITAL ALLOCATION
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                The Build vs. Buy vs. Configure Decision Matrix
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">MATRIX REF: CAP-ALLOC-03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-slate-400 font-semibold mb-2">01 // BUY</div>
                <div className="text-sm font-semibold text-white mb-2">Standard Commodity</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When an existing commercial SaaS product solves the problem thoroughly and the task offers no competitive differentiation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                Action: Off-the-shelf license
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-blue-400 font-semibold mb-2">02 // CONFIGURE</div>
                <div className="text-sm font-semibold text-white mb-2">Platform Extension</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When an established enterprise platform (ERP, CRM) offers native features that can be parameterized without altering workflow logic.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-blue-400/80">
                Action: Native platform rule setup
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/[0.2] border border-blue-500/30 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-indigo-400 font-semibold mb-2">03 // BUILD</div>
                <div className="text-sm font-semibold text-white mb-2">Core Differentiator</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When the workflow represents your proprietary competitive moat, requires private boundaries, or coordinates complex multi-system handoffs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-indigo-300">
                Action: Bespoke sovereign system
              </div>
            </div>
          </div>
        </div>
      );

    case "adoption-vs-deployment":
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                MATURITY MODEL // 8 STAGES OF OPERATIONAL EMBEDDING
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                From Grassroots Experimentation to Production System Deployment
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">MODEL REF: MATURITY-8X</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
              <span className="text-[10px] text-slate-500">01</span>
              <div className="text-slate-300 font-semibold mt-1">Experimentation</div>
              <div className="text-[10px] text-slate-500 mt-1 font-sans">Initial ad-hoc testing</div>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
              <span className="text-[10px] text-slate-500">02</span>
              <div className="text-slate-300 font-semibold mt-1">Informal Usage</div>
              <div className="text-[10px] text-slate-500 mt-1 font-sans">Discretionary prompts</div>
            </div>
            <div className="p-3 rounded-lg bg-[#111726] border border-blue-500/20">
              <span className="text-[10px] text-blue-400">03</span>
              <div className="text-blue-200 font-semibold mt-1">Repeatability</div>
              <div className="text-[10px] text-slate-400 mt-1 font-sans">Formalized SOP templates</div>
            </div>
            <div className="p-3 rounded-lg bg-[#111726] border border-blue-500/20">
              <span className="text-[10px] text-blue-400">04</span>
              <div className="text-blue-200 font-semibold mt-1">Workflow Integration</div>
              <div className="text-[10px] text-slate-400 mt-1 font-sans">Direct database APIs</div>
            </div>
            <div className="p-3 rounded-lg bg-[#111726] border border-blue-500/30">
              <span className="text-[10px] text-cyan-400">05</span>
              <div className="text-cyan-200 font-semibold mt-1">Governance</div>
              <div className="text-[10px] text-slate-400 mt-1 font-sans">Access & audit boundaries</div>
            </div>
            <div className="p-3 rounded-lg bg-[#111726] border border-blue-500/30">
              <span className="text-[10px] text-cyan-400">06</span>
              <div className="text-cyan-200 font-semibold mt-1">Ownership</div>
              <div className="text-[10px] text-slate-400 mt-1 font-sans">Designated stewards</div>
            </div>
            <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-400/40">
              <span className="text-[10px] text-emerald-400">07</span>
              <div className="text-white font-semibold mt-1">Measurement</div>
              <div className="text-[10px] text-emerald-300 mt-1 font-sans">Cycle & unit economics</div>
            </div>
            <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-400/40">
              <span className="text-[10px] text-emerald-400">08</span>
              <div className="text-white font-semibold mt-1">Continuous Tuning</div>
              <div className="text-[10px] text-emerald-300 mt-1 font-sans">Exception learning loops</div>
            </div>
          </div>
        </div>
      );

    case "governance-boundaries":
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                SYSTEM ARCHITECTURE // SEVEN BOUNDARY CHECKPOINTS
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                The Structural Perimeter of a Governed AI Deployment
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">SCHEMATIC REF: GOV-PERIM-07</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="font-mono text-[10px] text-blue-400 font-semibold">01 // ACCESS</span>
              <div className="text-white font-semibold mt-1">Role-Based Access (RBAC)</div>
              <p className="text-[11px] text-slate-400 mt-1">Strict identity perimeter regulating which operators may trigger or review transactions.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="font-mono text-[10px] text-blue-400 font-semibold">02 // INGESTION</span>
              <div className="text-white font-semibold mt-1">Data Ingestion Boundaries</div>
              <p className="text-[11px] text-slate-400 mt-1">Explicit source repositories permitted into the vector context window; zero public model exposure.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="font-mono text-[10px] text-blue-400 font-semibold">03 // GATES</span>
              <div className="text-white font-semibold mt-1">Human Approval Thresholds</div>
              <p className="text-[11px] text-slate-400 mt-1">Deterministic confidence thresholds; transactions halting automatically for human sign-off.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="font-mono text-[10px] text-blue-400 font-semibold">04 // GROUNDING</span>
              <div className="text-white font-semibold mt-1">Authoritative Citations</div>
              <p className="text-[11px] text-slate-400 mt-1">Every machine assertion mapped back to specific document clauses and database keys.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="font-mono text-[10px] text-blue-400 font-semibold">05 // ACTIONS</span>
              <div className="text-white font-semibold mt-1">Permitted API Actions</div>
              <p className="text-[11px] text-slate-400 mt-1">Strict whitelist of write-operations the system may perform in downstream enterprise software.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="font-mono text-[10px] text-blue-400 font-semibold">06 // AUDIT</span>
              <div className="text-white font-semibold mt-1">Immutable Decision Trail</div>
              <p className="text-[11px] text-slate-400 mt-1">Full transaction provenance logged for regulatory inspection and operational post-mortems.</p>
            </div>
          </div>
        </div>
      );

    case "executive-funnel":
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                EXECUTION PROTOCOL // POST-PILOT STRATEGY
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                The Disciplined Transition: Understand → Assess → Prioritise
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">FUNNEL REF: POST-PILOT-03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-blue-400 font-semibold">
                <span>STAGE 01</span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-2">Understand the Business</h5>
              <p className="text-slate-400 leading-relaxed text-xs">
                Map actual workflows, measure queue latency, identify where humans perform manual copy-pasting, and isolate the true operational friction.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-cyan-400 font-semibold">
                <span>STAGE 02</span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-2">Assess Feasibility</h5>
              <p className="text-slate-400 leading-relaxed text-xs">
                Determine regulatory requirements, verify data hygiene, and evaluate whether off-the-shelf software or bespoke systems are required.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/[0.2] border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-emerald-400 font-semibold">
                <span>STAGE 03</span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-2">Prioritise & Build</h5>
              <p className="text-slate-300 leading-relaxed text-xs">
                Sunset unproductive experiments and concentrate capital into one or two sovereign systems that transform core operating margins.
              </p>
            </div>
          </div>
        </div>
      );

    case "workflow-friction":
    default:
      return (
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-blue-400 tracking-wider uppercase font-semibold">
                WORKFLOW TOPOLOGY // THE OPERATIONAL GAP
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">
                The Disconnect Between Desktop AI Models and Core Enterprise State
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">SCHEMATIC REF: GAP-TOPOLOGY-01</span>
          </div>

          <div className="p-5 rounded-xl bg-black/40 border border-white/[0.08] space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#0F1420] border border-white/[0.06]">
                <div className="text-slate-400 text-[10px]">COMMODITISED LAYER</div>
                <div className="text-slate-200 font-semibold mt-1">Desktop LLM Access</div>
                <div className="text-[11px] text-slate-400 font-sans mt-1">Ad-hoc text generation & summarisation</div>
              </div>
              <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/30 text-amber-200">
                <div className="text-amber-400/90 text-[10px]">THE OPERATIONAL GAP</div>
                <div className="font-semibold mt-1">Manual Human Glue</div>
                <div className="text-[11px] text-amber-200/80 font-sans mt-1">Copying, formatting & cross-system routing</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0F1420] border border-white/[0.06]">
                <div className="text-slate-400 text-[10px]">SYSTEMS OF RECORD</div>
                <div className="text-slate-200 font-semibold mt-1">Enterprise Databases & ERP</div>
                <div className="text-[11px] text-slate-400 font-sans mt-1">Where transactions and approvals actually live</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed pt-2">
              Giving employees faster typing capabilities does not eliminate the hours spent moving data between disconnected tools. Real ROI occurs when intelligence spans the gap directly.
            </p>
          </div>
        </div>
      );
  }
};
