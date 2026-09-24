import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";

interface ContactPageProps {
  onOpenBooking?: () => void;
}

const DISCUSSION_TOPICS = [
  "Exploring AI opportunities",
  "Automating a specific workflow",
  "Building an AI system",
  "Workforce / L&D",
  "Improving operations",
  "Something else",
];

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMode =
    searchParams.get("mode") === "booking" ||
    searchParams.get("book") === "true" ||
    searchParams.get("mode") === "calendar"
      ? "booking"
      : "enquiry";

  const [activeTab, setActiveTab] = useState<"enquiry" | "booking">(initialMode);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [topic, setTopic] = useState("");
  const [objective, setObjective] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [hasCopiedRef, setHasCopiedRef] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const rawBookingUrl =
    (import.meta as any).env?.VITE_BOOKING_CALENDAR_URL ||
    "https://calendly.com/majedai2026/30min";
  const bookingUrl = typeof rawBookingUrl === "string" ? rawBookingUrl.trim() : "https://calendly.com/majedai2026/30min";

  // Build the embed URL with dark mode styling parameters to blend seamlessly with Stratision
  const embedUrl = `${bookingUrl}${bookingUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=080a10&text_color=f8fafc&primary_color=3b82f6`;

  useEffect(() => {
    document.title = activeTab === "booking" ? "Book a Consultation | Stratision" : "Contact | Stratision";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Connect with Stratision to discuss your organisation, explore where AI creates operational leverage, or schedule a strategy consultation."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/contact`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const handleCopyReference = () => {
    if (submittedReference) {
      navigator.clipboard.writeText(submittedReference);
      setHasCopiedRef(true);
      setTimeout(() => setHasCopiedRef(false), 2000);
    }
  };

  const handleOpenBookingTabOrExternal = () => {
    setActiveTab("booking");
    trackEvent("calendar_opened", { source: "contact_page_cta" });
    const newParams = new URLSearchParams(searchParams);
    newParams.set("mode", "booking");
    setSearchParams(newParams, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (tab: "enquiry" | "booking") => {
    setActiveTab(tab);
    const newParams = new URLSearchParams(searchParams);
    if (tab === "booking") {
      newParams.set("mode", "booking");
      trackEvent("calendar_opened", { source: "contact_page_tab" });
    } else {
      newParams.delete("mode");
      newParams.delete("book");
    }
    setSearchParams(newParams, { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Basic client validation
    if (!firstName.trim() || !lastName.trim() || !workEmail.trim() || !company.trim() || !role.trim() || !topic) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail.trim())) {
      setSubmitError("Please enter a valid work email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          workEmail: workEmail.trim().toLowerCase(),
          company: company.trim(),
          role: role.trim(),
          topic,
          objective: objective.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSubmittedReference(data.referenceId);
      trackEvent("contact_submitted", { referenceId: data.referenceId });
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (err: any) {
      console.error("[Contact Error]", err);
      setSubmitError(err.message || "We were unable to submit your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white pt-24 pb-24 font-sans">
      
      {/* BREADCRUMB */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-slate-200 transition-colors">
            Stratision
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-300">Contact</span>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Let's talk about your business.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Tell us a little about what you're working through, where you see friction, or what you're exploring with AI. We'll review your enquiry and come back to you with the appropriate next step.
          </p>

          {/* Clean Executive Segmented Control */}
          <div className="pt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleTabChange("enquiry")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === "enquiry"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              Send an enquiry
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("booking")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "booking"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section ref={formRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === "booking" ? (
          /* CALENDLY DIRECT EMBED VIEW */
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-white/[0.08]">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Schedule a Strategy Consultation
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  A 30-minute introductory conversation conducted via Google Meet with a Stratision principal.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium shrink-0 self-start sm:self-auto"
              >
                <span>Open in separate window</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Calendly Inline Embed */}
            <div className="w-full rounded-2xl border border-white/[0.08] bg-[#05070D] overflow-hidden shadow-2xl relative">
              <iframe
                src={embedUrl}
                width="100%"
                height="750"
                frameBorder="0"
                title="Select a Date & Time - Strategy Consultation"
                className="w-full min-h-[720px] sm:min-h-[750px] border-0 bg-[#080A10]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <span>Select an available time slot. You will receive an immediate calendar invitation with Google Meet coordinates.</span>
              <button
                type="button"
                onClick={() => handleTabChange("enquiry")}
                className="text-slate-300 hover:text-white underline text-left sm:text-right cursor-pointer"
              >
                Prefer to send a written enquiry instead?
              </button>
            </div>
          </div>
        ) : (
          /* FORM / ENQUIRY VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Quiet Executive Context */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  What to expect
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mt-2.5">
                  Every enquiry is reviewed directly by our senior team. We take the time to understand your operational context before discussing any engagement.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.08] text-sm">
                <div>
                  <div className="font-medium text-white">Direct review</div>
                  <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    Your notes are reviewed by a senior specialist, not a sales representative.
                  </div>
                </div>

                <div>
                  <div className="font-medium text-white">Confidential</div>
                  <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    Your organisational details and workflows are treated with complete confidentiality.
                  </div>
                </div>

                <div>
                  <div className="font-medium text-white">Thoughtful next steps</div>
                  <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    If there is clear alignment, we’ll suggest an initial conversation or walk through relevant systems.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-xs text-slate-400 leading-relaxed">
                Prefer to choose a time on our calendar right now?{" "}
                <button
                  type="button"
                  onClick={handleOpenBookingTabOrExternal}
                  className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer"
                >
                  Book a consultation →
                </button>
              </div>
            </div>

            {/* Right Column: Clean Executive Form or Confirmation */}
            <div className="lg:col-span-8">
              {submittedReference ? (
                /* SUCCESS STATE */
                <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#05070D] space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Enquiry received</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Thank you. We’ve received your enquiry.
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      A member of the Stratision team will review your notes and come back to you with the appropriate next step.
                    </p>
                  </div>

                  {/* Reference ID Container */}
                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#080A10] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-slate-400">
                        Enquiry reference
                      </div>
                      <div className="text-base font-mono font-medium text-white tracking-wider mt-0.5">
                        {submittedReference}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyReference}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 transition-colors cursor-pointer shrink-0"
                    >
                      {hasCopiedRef ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy reference</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Direct Booking Follow-up */}
                  <div className="pt-6 border-t border-white/[0.08] space-y-3">
                    <div className="text-sm font-semibold text-white">
                      Prefer to arrange a time now?
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                      If you'd like to pick an introductory slot on our calendar right away, you can schedule a 30-minute consultation directly.
                    </p>
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={handleOpenBookingTabOrExternal}
                        className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs tracking-tight transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book a Consultation →</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* THE FORM */
                <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#05070D]">
                  {submitError && (
                    <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-200 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          First name *
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Jane"
                          maxLength={100}
                          className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Last name *
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Doe"
                          maxLength={100}
                          className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Work email *
                      </label>
                      <input
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="jane.doe@company.com"
                        maxLength={120}
                        className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Company & Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Corp"
                          maxLength={200}
                          className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Role / title *
                        </label>
                        <input
                          type="text"
                          required
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="Managing Director"
                          maxLength={200}
                          className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* What would you like to discuss? */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        What would you like to discuss? *
                      </label>
                      <select
                        required
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#080A10] text-slate-500">
                          Select a discussion topic...
                        </option>
                        {DISCUSSION_TOPICS.map((item) => (
                          <option key={item} value={item} className="bg-[#080A10] text-white">
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Objective (Optional Textarea) */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Tell us a little about what you're looking to achieve{" "}
                        <span className="text-slate-500 font-normal">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={objective}
                        onChange={(e) => setObjective(e.target.value)}
                        placeholder="e.g. Exploring where manual review workflows or customer queries could be automated."
                        maxLength={4000}
                        className="w-full bg-[#080A10] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-y"
                      />
                    </div>

                    {/* Privacy Notice */}
                    <div className="pt-1 text-xs text-slate-400 leading-relaxed">
                      By submitting this form, you agree that Stratision may use the information provided to review and respond to your enquiry. See our{" "}
                      <Link to="/privacy" className="text-slate-300 underline hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                      .
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-slate-100 disabled:opacity-50 text-slate-950 font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send enquiry</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}
            </div>

          </div>
        )}
      </section>

    </main>
  );
};

