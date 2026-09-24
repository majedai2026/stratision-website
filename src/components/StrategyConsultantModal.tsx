import React, { useState, useEffect, useRef } from "react";
import { StratisionLogo } from "./StratisionLogo";
import { BlueprintResult } from "../types";
import { trackEvent } from "../utils/analytics";
import {
  X,
  CheckCircle2,
  Calendar,
  MessageSquare,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

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

  // Focusable input refs for accessible error focusing
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const companyInputRef = useRef<HTMLInputElement>(null);

  // View mode: 'form' | 'calendar'
  const [activeTab, setActiveTab] = useState<"form" | "calendar">("form");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    id: string;
    message: string;
  } | null>(null);

  const hasTrackedStartRef = useRef<boolean>(false);

  // Controlled form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    company?: string;
  }>({});
  const [challenge, setChallenge] = useState(
    initialPainPoint
      ? `Operational area: ${initialPainPoint}`
      : initialTier
      ? `Interested in ${initialTier}`
      : ""
  );

  // Calendar URL configuration
  const rawBookingUrl =
    (import.meta as any).env?.VITE_BOOKING_CALENDAR_URL ||
    "https://calendly.com/majedai2026/30min";
  const bookingUrl =
    typeof rawBookingUrl === "string"
      ? rawBookingUrl.trim()
      : "https://calendly.com/majedai2026/30min";
  const embedUrl = `${bookingUrl}${
    bookingUrl.includes("?") ? "&" : "?"
  }hide_gdpr_banner=1&background_color=080c15&text_color=f8fafc&primary_color=3b82f6`;

  // Focus management, Escape key listener, and body scroll lock
  useEffect(() => {
    if (isOpen) {
      hasTrackedStartRef.current = false;
      trackEvent("conversation_modal_opened", {
        source: initialPainPoint ? "pain_point" : initialTier ? "tier" : "homepage",
      });
      setErrorMessage(null);
      setFieldErrors({});
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
            'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
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

      setTimeout(() => {
        if (modalRef.current) {
          const firstInteractive = modalRef.current.querySelector<HTMLElement>(
            "input, button, textarea"
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

  const trackFormStartOnce = () => {
    if (!hasTrackedStartRef.current) {
      hasTrackedStartRef.current = true;
      trackEvent("conversation_form_started");
    }
  };

  const handleTabChange = (tab: "form" | "calendar") => {
    setActiveTab(tab);
    if (tab === "calendar") {
      trackEvent("calendar_opened", { source: "consultation_modal" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Controlled inline validation (eliminating browser-native popups)
    const errors: { name?: string; email?: string; company?: string } = {};

    if (!name.trim()) {
      errors.name = "Please enter your name.";
    }

    const emailTrimmed = email.trim();
    if (!emailTrimmed) {
      errors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      errors.email = "Please enter a valid work email address.";
    }

    if (!company.trim()) {
      errors.company = "Please enter your company or website.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      if (errors.name) {
        nameInputRef.current?.focus();
      } else if (errors.email) {
        emailInputRef.current?.focus();
      } else if (errors.company) {
        companyInputRef.current?.focus();
      }
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    trackEvent("conversation_submitted");

    try {
      const res = await fetch("/api/consultation/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: emailTrimmed,
          company: company.trim(),
          notes: challenge.trim(),
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success && (data.referenceId || data.bookingId)) {
        const refId = data.referenceId || data.bookingId;
        setBookingConfirmation({
          id: refId,
          message: data.message,
        });
        setIsSuccess(true);
        trackEvent("conversation_confirmed", { referenceId: refId });
      } else {
        const errorText =
          data?.error ||
          "Something went wrong and your request wasn't submitted. Please try again.";
        setErrorMessage(errorText);
        trackEvent("conversation_submission_failed", { reason: errorText });
      }
    } catch (error: any) {
      console.error("Booking error:", error);
      const errorText =
        "Something went wrong and your request wasn't submitted. Please try again.";
      setErrorMessage(errorText);
      trackEvent("conversation_submission_failed", { reason: error?.message || errorText });
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
        aria-labelledby="modal-conversation-title"
        className="bg-[#080C15] border border-slate-800 w-full max-w-xl rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl relative max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center pb-5 border-b border-slate-800/80">
          <StratisionLogo size="sm" showTagline={true} />
          <h3
            id="modal-conversation-title"
            className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Start a Conversation
          </h3>
          <p
            className="text-sm text-slate-300 mt-2 max-w-md mx-auto font-normal leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Speak directly with a lead architect about your operational bottlenecks and what an AI system would look like in practice.
          </p>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="mt-8 text-center space-y-6 py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h4
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                We've got it.
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your enquiry has been received and passed to the Stratision team.
              </p>
            </div>

            {/* Genuine Server-returned Reference Box */}
            {bookingConfirmation?.id && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-400 max-w-xs mx-auto">
                <span className="text-slate-400">Reference: </span>
                <span className="text-slate-100 font-semibold tracking-wider">
                  {bookingConfirmation.id}
                </span>
              </div>
            )}

            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              A member of the team will review the operational challenge you've described.
            </p>

            <div className="pt-3 space-y-3 max-w-sm mx-auto">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setActiveTab("calendar");
                }}
                className="w-full min-h-[44px] py-3.5 px-6 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule a conversation →</span>
              </button>

              <p className="text-xs text-slate-400">
                You can also wait for us to come back to you.
              </p>

              <div>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 cursor-pointer pt-1"
                >
                  Return to Website
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Mode Switcher: Send Details vs Direct Calendar Booking */}
            <div className="mt-5 flex items-center justify-center p-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono max-w-xs mx-auto">
              <button
                type="button"
                onClick={() => handleTabChange("form")}
                className={`flex-1 py-2 px-3 min-h-[40px] rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === "form"
                    ? "bg-white text-[#080A10] font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Details</span>
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("calendar")}
                className={`flex-1 py-2 px-3 min-h-[40px] rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === "calendar"
                    ? "bg-white text-[#080A10] font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Calendar</span>
              </button>
            </div>

            {/* TAB 1: Streamlined 4-Field Business Conversation Form */}
            {activeTab === "form" ? (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                {/* 1. Name */}
                <div>
                  <label htmlFor="modal-name-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="modal-name-input"
                    type="text"
                    value={name}
                    onFocus={trackFormStartOnce}
                    onChange={(e) => {
                      trackFormStartOnce();
                      setName(e.target.value);
                      if (fieldErrors.name) {
                        setFieldErrors((prev) => ({ ...prev, name: undefined }));
                      }
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "modal-name-error" : undefined}
                    className={`w-full bg-[#050811] min-h-[44px] border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                      fieldErrors.name
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-slate-800 focus:border-blue-500"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p id="modal-name-error" role="alert" className="text-xs text-red-400 mt-1.5 font-mono flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.name}</span>
                    </p>
                  )}
                </div>

                {/* 2. Work Email */}
                <div>
                  <label htmlFor="modal-email-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Work Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    ref={emailInputRef}
                    id="modal-email-input"
                    type="email"
                    value={email}
                    onFocus={trackFormStartOnce}
                    onChange={(e) => {
                      trackFormStartOnce();
                      setEmail(e.target.value);
                      if (fieldErrors.email) {
                        setFieldErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                    placeholder="sarah@company.co.uk"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "modal-email-error" : undefined}
                    className={`w-full bg-[#050811] min-h-[44px] border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                      fieldErrors.email
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-slate-800 focus:border-blue-500"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p id="modal-email-error" role="alert" className="text-xs text-red-400 mt-1.5 font-mono flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.email}</span>
                    </p>
                  )}
                </div>

                {/* 3. Company / Website */}
                <div>
                  <label htmlFor="modal-company-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Company / Website <span className="text-blue-400">*</span>
                  </label>
                  <input
                    ref={companyInputRef}
                    id="modal-company-input"
                    type="text"
                    value={company}
                    onFocus={trackFormStartOnce}
                    onChange={(e) => {
                      trackFormStartOnce();
                      setCompany(e.target.value);
                      if (fieldErrors.company) {
                        setFieldErrors((prev) => ({ ...prev, company: undefined }));
                      }
                    }}
                    placeholder="e.g. Apex Logistics Ltd (apexlogistics.co.uk)"
                    aria-invalid={!!fieldErrors.company}
                    aria-describedby={fieldErrors.company ? "modal-company-error" : undefined}
                    className={`w-full bg-[#050811] min-h-[44px] border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                      fieldErrors.company
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-slate-800 focus:border-blue-500"
                    }`}
                  />
                  {fieldErrors.company && (
                    <p id="modal-company-error" role="alert" className="text-xs text-red-400 mt-1.5 font-mono flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{fieldErrors.company}</span>
                    </p>
                  )}
                </div>

                {/* 4. Operational Challenge */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="modal-challenge-input" className="block text-xs font-medium text-slate-300">
                      What would you like AI to handle?
                    </label>
                    <span className="text-[11px] text-slate-500 font-mono">Optional</span>
                  </div>
                  <p className="text-[12px] text-slate-400 mb-2 font-normal leading-relaxed">
                    Optional — tell us where time, admin or missed opportunities are costing your business.
                  </p>
                  <textarea
                    id="modal-challenge-input"
                    rows={3}
                    value={challenge}
                    onFocus={trackFormStartOnce}
                    onChange={(e) => {
                      trackFormStartOnce();
                      setChallenge(e.target.value);
                    }}
                    placeholder="Tell us where time, admin or missed opportunities are costing your business..."
                    className="w-full bg-[#050811] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Primary Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[44px] py-3.5 px-6 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send My Enquiry →</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Strengthened Trust Microcopy Footer */}
                <div className="pt-3 text-center space-y-1.5 border-t border-slate-800/60 mt-4">
                  <p className="text-[12px] text-slate-300 font-medium">
                    Your information stays private.
                  </p>
                  <p className="text-[12px] text-slate-400">
                    Direct 20-minute discussion with an AI Systems Architect. No sales pitch.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab("calendar")}
                    className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer pt-0.5 inline-block"
                  >
                    Or pick a time directly on our calendar →
                  </button>
                </div>
              </form>
            ) : (
              /* TAB 2: Direct Calendar Booking */
              <div className="mt-5 space-y-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Live booking with Lead Architect:</span>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono inline-flex items-center min-h-[44px]"
                  >
                    Open in new tab ↗
                  </a>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#080c15] h-[480px]">
                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Direct Calendar Booking"
                    className="w-full h-full"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("form")}
                    className="text-xs text-slate-400 hover:text-white cursor-pointer inline-flex items-center gap-1.5 min-h-[44px]"
                  >
                    <span>← Prefer to send details first?</span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
