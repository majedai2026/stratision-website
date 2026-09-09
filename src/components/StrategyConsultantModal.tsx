import React, { useState, useEffect, useRef } from "react";
import { StratisionLogo } from "./StratisionLogo";
import { BlueprintResult } from "../types";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Building2,
  Sparkles,
  RefreshCw,
  Mail,
  User,
  Clock,
  Briefcase,
} from "lucide-react";
import confetti from "canvas-confetti";

interface StrategyConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPainPoint?: string;
  initialTier?: string;
  initialBlueprint?: BlueprintResult | null;
}

export const StrategyConsultantModal: React.FC<StrategyConsultantModalProps> = ({
  isOpen,
  onClose,
  initialPainPoint,
  initialTier,
  initialBlueprint,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    id: string;
    message: string;
  } | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("Managing Director / C-Suite");
  const [industry, setIndustry] = useState("Professional & Financial Services");
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>(
    initialPainPoint ? [initialPainPoint] : ["Tribal Knowledge Silos & Unsearchable Data"]
  );
  const [timeline, setTimeline] = useState("Immediate (Priority SOW Sprint)");
  const [notes, setNotes] = useState(
    initialTier ? `Interested in discussing ${initialTier}.` : ""
  );

  // Focus management, Escape key listener, and body scroll lock
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

      // Auto-focus first input or close button
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

  if (!isOpen) return null;

  const painPointOptions = [
    "Workforce Intelligence Platform™ (Knowledge Ingestion & Gap Intelligence)",
    "AI Operations (Document Extraction & ERP/CRM Synchronization)",
    "AI Commercial Systems (Inbound Triage, AI Receptionist & Proposals)",
    "AI Knowledge & Decision Intelligence (Contract, CIM & Risk Synthesis)",
    "Tribal Knowledge Silos & Onboarding Latency",
    "Manual Reporting & Cross-System Operational Friction",
  ];

  const togglePainPoint = (point: string) => {
    if (selectedPainPoints.includes(point)) {
      setSelectedPainPoints(selectedPainPoints.filter((p) => p !== point));
    } else {
      setSelectedPainPoints([...selectedPainPoints, point]);
    }
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/consultation/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          industry,
          painPoints: selectedPainPoints,
          timeline,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setBookingConfirmation({
          id: data.bookingId,
          message: data.message,
        });
        setStep(3);
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch (err) {}
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="strategy-consultation-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
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
        aria-labelledby="modal-strategy-title"
        className="bg-[#080C15] border border-slate-800 w-full max-w-2xl rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center pb-4 border-b border-slate-800">
          <StratisionLogo size="sm" showTagline={true} />
          <h3 id="modal-strategy-title" className="text-xl sm:text-2xl font-bold text-white mt-4 tracking-tight">
            Request Business Intelligence Assessment™
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto font-normal">
            Confidential strategic discovery and workflow scoping with a Senior Systems Architect.
          </p>
        </div>

        {/* Step Progress Indicators */}
        {step < 3 && (
          <div className="mt-4 flex items-center justify-center gap-3 text-xs font-mono">
            <div className={`flex items-center gap-1.5 ${step === 1 ? "text-blue-400 font-semibold" : "text-slate-500"}`}>
              <span className="w-5 h-5 rounded-full bg-slate-900 border border-blue-500/40 flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Scope & Systems</span>
            </div>
            <span className="text-slate-700">───</span>
            <div className={`flex items-center gap-1.5 ${step === 2 ? "text-blue-400 font-semibold" : "text-slate-500"}`}>
              <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px]">
                2
              </span>
              <span>Your Details</span>
            </div>
          </div>
        )}

        {/* Step 1: Bottleneck & Scope */}
        {step === 1 && (
          <div className="mt-6 space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                Industry Domain
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-[#050811] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
              >
                <option value="Professional & Financial Services">Professional & Financial Services</option>
                <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                <option value="Enterprise SaaS & Technology">Enterprise SaaS & Technology</option>
                <option value="E-Commerce & High-Volume Retail">E-Commerce & High-Volume Retail</option>
                <option value="Coaching, Education & Consulting">Coaching, Education & Consulting</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                Target Systems of Interest ({selectedPainPoints.length})
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {painPointOptions.map((opt, i) => {
                  const isChecked = selectedPainPoints.includes(opt);
                  return (
                    <div
                      key={i}
                      onClick={() => togglePainPoint(opt)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-blue-600/15 border-blue-500 text-white font-medium shadow-md"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="rounded border-slate-700 text-blue-500"
                        />
                        <span>{opt}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all"
              >
                <span>Continue to Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Executive Details */}
        {step === 2 && (
          <form onSubmit={handleSubmitBooking} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-[#050811] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="s.jenkins@enterprise.com"
                  className="w-full bg-[#050811] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Global"
                  className="w-full bg-[#050811] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Executive Role
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#050811] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                Target Implementation Timeline
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full bg-[#050811] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
              >
                <option value="Immediate (Priority SOW Sprint)">Immediate (Priority SOW Sprint)</option>
                <option value="Q3 Roadmap (30-60 Days)">Q3 Roadmap (30-60 Days)</option>
                <option value="Exploratory Evaluation">Exploratory Evaluation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                Operational Context / Tools in Use
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Current software stack (Salesforce, SAP, Notion, HubSpot) or specific goals..."
                className="w-full bg-[#050811] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-mono cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Assessment Request...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Assessment Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="mt-8 text-center space-y-6 py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white tracking-tight">
                Briefing Requested Successfully
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {bookingConfirmation?.message || "Our Principal AI Architect is reviewing your operational profile and will send calendar coordinates within 4 business hours."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 max-w-sm mx-auto">
              <div>Booking Reference: <span className="text-slate-200">{bookingConfirmation?.id || "STRAT-CONF-782"}</span></div>
              <div className="mt-1 text-emerald-400">SOC2 Confidentiality Standard Applied</div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs transition-all cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
