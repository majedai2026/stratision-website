import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { StratisionLogo } from "./StratisionLogo";
import {
  X,
  Printer,
  FileText,
  ChevronRight,
  Shield,
  Layers,
  Lock,
  Cpu,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";

interface ExecutiveBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ExecutiveBriefingModal: React.FC<ExecutiveBriefingModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const [activePage, setActivePage] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Focus management, Escape listener, and body scroll lock
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }

        // Trap focus inside modal
        if (e.key === "Tab" && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      // Auto-focus first interactive element
      setTimeout(() => {
        if (modalRef.current) {
          const firstInteractive = modalRef.current.querySelector<HTMLElement>(
            "button, input, select, textarea"
          );
          if (firstInteractive) {
            firstInteractive.focus();
          }
        }
      }, 50);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
        if (previouslyFocusedElementRef.current) {
          previouslyFocusedElementRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summaryText = `STRATISION // EXECUTIVE SYSTEMS BRIEFING (DOC-REF: STRAT-EXEC-2026-V1)
Bespoke Multi-Agent Systems Engineering for the Sovereign Enterprise

1. THE ENGINEERING THESIS:
• Deterministic validation gates around probabilistic models before consequential state changes.
• Pre-execution verification and structured execution audit logs.
• Human-in-the-loop escalation routing for ambiguous states.
• Configured in client-governed environments (VPC/dedicated enclaves) with client-governed data boundaries.
• Milestone-gated engineering delivery with formal verification criteria.

2. SIX-PILLAR DECISION FRAMEWORK:
• Architecture: Containerized multi-agent pipelines with schema validation gates.
• Security & Governance: Role-based IAM (PoLP), client-governed VPC boundaries, zero model training on client IP.
• IP & Ownership: Bespoke codebases and integration architecture delivered under agreed engagement terms.
• Delivery: 3-stage milestone engineering (01 Discovery → 02 Build → 03 Verification & Handover).
• Commercials: Fixed-scope milestone models (Foundation Sprint, Production System, Enterprise Enclave).
• Precedents: Modelled architectural precedents demonstrating high-throughput triage, document clearance, and ledger reconciliation.

Action: Schedule a 45-Minute Principal Systems Scoping Session under Mutual NDA at stratision.com`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* PRINT-ONLY STYLES INJECTION */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #executive-briefing-print-root,
          #executive-briefing-print-root * {
            visibility: visible;
          }
          #executive-briefing-print-root {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            background: #ffffff !important;
            color: #0f172a !important;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-after: always;
            break-after: page;
          }
          .print-border {
            border-color: #cbd5e1 !important;
          }
          .print-bg-subtle {
            background-color: #f8fafc !important;
          }
          .print-text-dark {
            color: #0f172a !important;
          }
          .print-text-muted {
            color: #475569 !important;
          }
        }
      `}</style>

      {/* MODAL BACKDROP */}
      <div
        id="executive-briefing-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="briefing-modal-title"
          className="bg-[#050811] border border-slate-800 w-full max-w-5xl rounded-xl text-slate-100 shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden"
        >
          {/* MODAL CONTROL HEADER (NO-PRINT) */}
          <div className="no-print flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-[#070b16] shrink-0">
            <div className="flex items-center gap-3">
              <StratisionLogo size="sm" showTagline={false} />
              <span className="text-slate-500">|</span>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span id="briefing-modal-title" className="text-xs font-mono tracking-wider uppercase text-slate-200 font-semibold">
                  Executive Systems Briefing
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-950/60 text-blue-300 border border-blue-800/60">
                  DOC-REF: STRAT-EXEC-2026-V1
                </span>
              </div>
            </div>

            {/* ACTION TOOLBAR */}
            <div className="flex items-center gap-2">
              {/* Pagination controls for digital viewing */}
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-sm p-0.5 text-xs font-mono mr-2">
                <button
                  onClick={() => setActivePage(1)}
                  className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                    activePage === 1
                      ? "bg-slate-800 text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  aria-label="View Page 1"
                >
                  Page 01
                </button>
                <button
                  onClick={() => setActivePage(2)}
                  className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                    activePage === 2
                      ? "bg-slate-800 text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  aria-label="View Page 2"
                >
                  Page 02
                </button>
              </div>

              {/* Full 18-Page Guide Link */}
              <Link
                to="/briefing"
                onClick={onClose}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
                title="Open comprehensive 18-page publication"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Full 18-Page Guide</span>
              </Link>

              {/* Copy Summary */}
              <button
                onClick={handleCopySummary}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                title="Copy plaintext executive summary"
                aria-label="Copy summary to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Brief"}</span>
              </button>

              {/* Print / Save PDF Button */}
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium font-mono transition-colors cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="Print or save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Print / Save PDF</span>
                <span className="xs:hidden">Print</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close executive briefing"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SCROLLABLE DOCUMENT VIEWER CONTAINER */}
          <div className="overflow-y-auto p-4 sm:p-8 space-y-8 max-h-[calc(92vh-60px)]">
            
            {/* PRINT-ROOT WRAPPER (TARGETED BY @MEDIA PRINT) */}
            <div id="executive-briefing-print-root" className="max-w-4xl mx-auto space-y-8">

              {/* ========================================================================= */}
              {/* PAGE 01: THE EXECUTIVE THESIS                                             */}
              {/* ========================================================================= */}
              <div className={`p-6 sm:p-10 bg-[#080d1a] border border-slate-800/80 rounded-lg shadow-xl print-bg-subtle print-border ${activePage === 2 ? 'hidden sm:block' : 'block'} page-break`}>
                
                {/* Institutional Document Header */}
                <div className="border-b border-slate-800 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400 print-text-muted">
                  <div className="flex items-center gap-3">
                    <StratisionLogo size="sm" showTagline={false} />
                    <span className="text-slate-600 print-text-muted">|</span>
                    <span className="text-slate-300 font-semibold uppercase tracking-wider print-text-dark">Executive Systems Briefing</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span>DOC-REF: <strong className="text-slate-200 print-text-dark">STRAT-EXEC-2026-V1</strong></span>
                    <span className="hidden sm:inline text-slate-600">|</span>
                    <span className="text-slate-400 print-text-muted">CLASSIFICATION: BOARD CIRCULATION</span>
                  </div>
                </div>

                {/* Document Title & Category Definition */}
                <div className="mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold block mb-2">
                    Executive Overview & Engineering Thesis
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight leading-tight mb-3 print-text-dark">
                    Bespoke Multi-Agent Systems Engineering
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light print-text-muted max-w-3xl">
                    Stratision engineers custom, deterministic multi-agent operating pipelines that execute complex operational workflows within client-governed environments, designed to eliminate manual bottlenecks without multi-tenant software bloat.
                  </p>
                </div>

                {/* 1. The Enterprise Problem */}
                <div className="mb-8 p-5 bg-slate-900/60 border border-slate-800 rounded-sm print-bg-subtle print-border">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3 flex items-center gap-2 print-text-dark">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                    01. Strategic Context: Operational & Architectural Limitations
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 print-text-muted">
                    <div className="space-y-1">
                      <strong className="text-slate-100 block font-semibold print-text-dark">Fragmented SaaS Bloat</strong>
                      <p className="text-slate-400 print-text-muted leading-relaxed">
                        Forces proprietary workflows into rigid third-party schemas, creating disconnected data silos and compounding per-seat subscription overhead.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-slate-100 block font-semibold print-text-dark">Unconstrained AI Wrappers</strong>
                      <p className="text-slate-400 print-text-muted leading-relaxed">
                        Probabilistic chat interfaces without deterministic validation introduce hallucination risk, compliance ambiguity, and execution failures.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-slate-100 block font-semibold print-text-dark">Open-Ended IT Advisory</strong>
                      <p className="text-slate-400 print-text-muted leading-relaxed">
                        Traditional consulting firms rely on indefinite time-and-materials billing, prioritizing advisory slide decks over verified, production software assets.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. The Stratision Engineering Thesis */}
                <div className="mb-8 space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2 print-text-dark">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    02. The Stratision Engineering Thesis
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 print-text-muted">
                    <div className="p-3 bg-slate-900/40 border border-slate-800/80 rounded-sm print-bg-subtle print-border">
                      <strong className="text-slate-100 block mb-1 font-semibold print-text-dark">01. Deterministic Validation Boundaries</strong>
                      <p className="text-slate-400 print-text-muted leading-relaxed">
                        Probabilistic language models are strictly bound to unstructured ingestion. All state mutations and external integrations require strict schema validation gates before execution.
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/40 border border-slate-800/80 rounded-sm print-bg-subtle print-border">
                      <strong className="text-slate-100 block mb-1 font-semibold print-text-dark">02. Programmatic Pre-Execution Verification</strong>
                      <p className="text-slate-400 print-text-muted leading-relaxed">
                        Payloads and routing decisions are programmatically verified against explicit business rules, generating structured execution logs for operational traceability.
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/40 border border-slate-800/80 rounded-sm print-bg-subtle print-border">
                      <strong className="text-slate-100 block mb-1 font-semibold print-text-dark">03. Governed Human Escalation Routing</strong>
                      <p className="text-slate-400 print-text-muted leading-relaxed">
                        Ambiguous edge cases, schema exceptions, or confidence deviations below agreed thresholds automatically route to human-in-the-loop review consoles.
                      </p>
                    </div>
                    <div className="p-3 bg-slate-900/40 border border-slate-800/80 rounded-sm print-bg-subtle print-border">
                      <strong className="text-slate-100 block mb-1 font-semibold print-text-dark">04. Client-Governed Infrastructure</strong>
                      <p className="text-slate-400 print-text-muted leading-relaxed">
                        Deployed in dedicated single-tenant enclaves or client-governed VPCs with client-controlled data boundaries. Configured to prevent client IP from training foundational models.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Canonical Orchestration Pipeline */}
                <div className="mb-8 p-4 bg-slate-950/80 border border-slate-800 rounded-sm print-bg-subtle print-border">
                  <h3 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 print-text-muted">
                    03. Canonical Orchestration Pipeline
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs font-mono">
                    <div className="w-full sm:w-1/5 p-2 bg-slate-900 border border-slate-800 rounded-xs print-bg-subtle print-border">
                      <span className="text-[10px] text-blue-400 block mb-0.5">STAGE 01</span>
                      <strong className="text-slate-200 text-[11px] print-text-dark">Friction Diagnosis</strong>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block shrink-0" />
                    <div className="w-full sm:w-1/5 p-2 bg-slate-900 border border-slate-800 rounded-xs print-bg-subtle print-border">
                      <span className="text-[10px] text-blue-400 block mb-0.5">STAGE 02</span>
                      <strong className="text-slate-200 text-[11px] print-text-dark">System Design</strong>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block shrink-0" />
                    <div className="w-full sm:w-1/5 p-2 bg-slate-900 border border-slate-800 rounded-xs print-bg-subtle print-border">
                      <span className="text-[10px] text-blue-400 block mb-0.5">STAGE 03</span>
                      <strong className="text-slate-200 text-[11px] print-text-dark">Deterministic Engine</strong>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block shrink-0" />
                    <div className="w-full sm:w-1/5 p-2 bg-slate-900 border border-slate-800 rounded-xs print-bg-subtle print-border">
                      <span className="text-[10px] text-blue-400 block mb-0.5">STAGE 04</span>
                      <strong className="text-slate-200 text-[11px] print-text-dark">VPC Deployment</strong>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:block shrink-0" />
                    <div className="w-full sm:w-1/5 p-2 bg-slate-900 border border-slate-800 rounded-xs print-bg-subtle print-border">
                      <span className="text-[10px] text-blue-400 block mb-0.5">STAGE 05</span>
                      <strong className="text-slate-200 text-[11px] print-text-dark">Verified Handover</strong>
                    </div>
                  </div>
                </div>

                {/* 4. Core Institutional Pillars (Summary Quad) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-center print-border">
                  <div className="p-2.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block print-text-muted">ARCHITECTURE</span>
                    <strong className="text-xs text-slate-200 font-semibold print-text-dark">Bespoke Systems</strong>
                  </div>
                  <div className="p-2.5 border-l border-slate-800/80 print-border">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block print-text-muted">PERIMETER</span>
                    <strong className="text-xs text-slate-200 font-semibold print-text-dark">Client-Governed VPC</strong>
                  </div>
                  <div className="p-2.5 border-l border-slate-800/80 print-border">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block print-text-muted">OWNERSHIP</span>
                    <strong className="text-xs text-slate-200 font-semibold print-text-dark">Agreed IP Terms</strong>
                  </div>
                  <div className="p-2.5 border-l border-slate-800/80 print-border">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block print-text-muted">DELIVERY</span>
                    <strong className="text-xs text-slate-200 font-semibold print-text-dark">Milestone Gated</strong>
                  </div>
                </div>

                {/* Digital Page Marker */}
                <div className="mt-6 text-right text-[10px] font-mono text-slate-500 print-text-muted">
                  Page 01 of 02 • Stratision Systems Corporation
                </div>
              </div>

              {/* ========================================================================= */}
              {/* PAGE 02: EXECUTIVE DECISION FRAMEWORK & COMMERCIALS                       */}
              {/* ========================================================================= */}
              <div className={`p-6 sm:p-10 bg-[#080d1a] border border-slate-800/80 rounded-lg shadow-xl print-bg-subtle print-border ${activePage === 1 ? 'hidden sm:block' : 'block'}`}>
                
                {/* Header Page 02 */}
                <div className="border-b border-slate-800 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400 print-text-muted">
                  <div className="flex items-center gap-3">
                    <StratisionLogo size="sm" showTagline={false} />
                    <span className="text-slate-600 print-text-muted">|</span>
                    <span className="text-slate-300 font-semibold uppercase tracking-wider print-text-dark">Executive Decision Framework</span>
                  </div>
                  <div className="text-[11px]">
                    <span>DOC-REF: <strong className="text-slate-200 print-text-dark">STRAT-EXEC-2026-V1</strong></span>
                  </div>
                </div>

                {/* Section Title */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold block mb-1">
                    Institutional Governance & Implementation Matrix
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-white tracking-tight print-text-dark">
                    Executive Evaluation & Commercial Architecture
                  </h2>
                </div>

                {/* 1. Six-Pillar Executive Decision Matrix */}
                <div className="mb-8 overflow-x-auto border border-slate-800 rounded-sm print-border">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-slate-900/90 text-slate-300 font-mono text-[11px] border-b border-slate-800 uppercase tracking-wider print-bg-subtle print-text-dark print-border">
                      <tr>
                        <th className="p-3 w-1/4">Evaluation Dimension</th>
                        <th className="p-3 w-3/4">Architectural Specification & Fiduciary Boundary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70 text-slate-300 print-text-muted print-border">
                      <tr>
                        <td className="p-3 font-semibold text-slate-100 bg-slate-950/40 print-bg-subtle print-text-dark">
                          01. Architecture
                        </td>
                        <td className="p-3 leading-relaxed">
                          Containerized execution pipelines, webhook relays, and strict schema validation gates before any state mutation or external API dispatch.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-100 bg-slate-950/40 print-bg-subtle print-text-dark">
                          02. Security & Governance
                        </td>
                        <td className="p-3 leading-relaxed">
                          Configured in client-governed environments (VPC/dedicated enclaves) with client-governed data boundaries, role-based IAM (PoLP), structured execution audit logs, and applicable compliance support.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-100 bg-slate-950/40 print-bg-subtle print-text-dark">
                          03. IP & Code Ownership
                        </td>
                        <td className="p-3 leading-relaxed">
                          Bespoke assets and integration architecture delivered according to agreed engagement terms, designed to minimise vendor lock-in.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-100 bg-slate-950/40 print-bg-subtle print-text-dark">
                          04. Delivery Protocol
                        </td>
                        <td className="p-3 leading-relaxed">
                          Milestone-gated engineering in 3 stages: <strong>01 Discovery & Architecture</strong> → <strong>02 Production Build</strong> → <strong>03 Verification & Handover</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-100 bg-slate-950/40 print-bg-subtle print-text-dark">
                          05. Commercial Terms
                        </td>
                        <td className="p-3 leading-relaxed">
                          Fixed-scope milestone contracts (Foundation Sprint, Production System, Enterprise Enclave) providing capital predictability with zero open-ended hourly billing.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-100 bg-slate-950/40 print-bg-subtle print-text-dark">
                          06. System Precedents
                        </td>
                        <td className="p-3 leading-relaxed">
                          Modelled architectural precedents demonstrating high-throughput intake triage, ephemeral document clearance, and automated cross-ledger reconciliation.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 2. Commercial Engagement Reference & Modelled Precedents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-sm print-bg-subtle print-border">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-2 print-text-dark">
                      Commercial Framework Summary
                    </h3>
                    <ul className="text-xs text-slate-300 space-y-2 print-text-muted">
                      <li>
                        <strong className="text-slate-100 print-text-dark">Foundation Sprint (2–4 Wks):</strong> Core workflow architecture, deterministic prototype, security review baseline.
                      </li>
                      <li>
                        <strong className="text-slate-100 print-text-dark">Production System (6–10 Wks):</strong> End-to-end multi-agent pipeline, CRM/ERP integration, exception console, VPC deployment.
                      </li>
                      <li>
                        <strong className="text-slate-100 print-text-dark">Enterprise Enclave (Custom):</strong> Multi-department orchestration, custom enclave architecture, continuous SLA support.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-sm print-bg-subtle print-border">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-2 print-text-dark">
                      Modelled Architectural Precedents
                    </h3>
                    <ul className="text-xs text-slate-300 space-y-2 print-text-muted">
                      <li>
                        <strong className="text-slate-100 print-text-dark">Multi-Channel Intake:</strong> Unstructured communication ingestion, schema normalization, and validated CRM routing.
                      </li>
                      <li>
                        <strong className="text-slate-100 print-text-dark">Sovereign Document Clearance:</strong> Ephemeral parsing, automated policy checks, and human escalation queues.
                      </li>
                      <li>
                        <strong className="text-slate-100 print-text-dark">Ledger Reconciliation:</strong> Multi-source statement matching, programmatic variance checks, and audit trail generation.
                      </li>
                    </ul>
                    <span className="text-[10px] text-slate-500 block mt-2 print-text-muted italic">
                      *Modelled architectural precedents; exact implementation parameters vary by client scope.
                    </span>
                  </div>
                </div>

                {/* 3. Final Action: Executive Intake Protocol */}
                <div className="p-5 bg-gradient-to-b from-slate-900 to-[#070B14] border border-blue-900/50 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 print-bg-subtle print-border">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                      ENGAGEMENT DISPATCH PROTOCOL
                    </span>
                    <strong className="text-sm text-slate-100 font-semibold block print-text-dark">
                      Schedule a 45-Minute Principal Systems Scoping Session
                    </strong>
                    <p className="text-xs text-slate-400 print-text-muted mt-0.5">
                      Structured architectural review conducted under mutual non-disclosure protection.
                    </p>
                  </div>

                  <div className="no-print shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        onClose();
                        onOpenBooking();
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span>Schedule Scoping Session</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Digital Page Marker */}
                <div className="mt-6 text-right text-[10px] font-mono text-slate-500 print-text-muted">
                  Page 02 of 02 • Stratision Systems Corporation • All Rights Reserved
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
