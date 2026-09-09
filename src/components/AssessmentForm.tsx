import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ShieldCheck, Loader2 } from "lucide-react";

interface AssessmentFormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role: string;
  industry: string;
  promptReason: string;
  frictionArea: string;
  currentAiAdoption: string;
  additionalNotes: string;
}

const INITIAL_FORM: AssessmentFormData = {
  firstName: "",
  lastName: "",
  workEmail: "",
  company: "",
  role: "",
  industry: "",
  promptReason: "",
  frictionArea: "",
  currentAiAdoption: "",
  additionalNotes: "",
};

const INDUSTRY_OPTIONS = [
  "Financial Services & Asset Management",
  "Healthcare & Life Sciences",
  "Legal & Professional Services",
  "Logistics, Supply Chain & Freight",
  "Manufacturing & Industrial Engineering",
  "Private Equity & Portfolio Operations",
  "Enterprise Software & Technology",
  "Energy, Utilities & Infrastructure",
  "Other Complex Operating Environment",
];

const AI_ADOPTION_OPTIONS = [
  "Not yet",
  "Experimenting",
  "Running pilots",
  "Using AI in selected workflows",
  "AI is already embedded across parts of the organisation",
];

export const AssessmentForm: React.FC = () => {
  const [formData, setFormData] = useState<AssessmentFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof AssessmentFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof AssessmentFormData, string>> = {};

    if (!formData.firstName.trim()) {
      errs.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      errs.lastName = "Last name is required.";
    }
    if (!formData.workEmail.trim()) {
      errs.workEmail = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = "Please enter a valid work email address.";
    }
    if (!formData.company.trim()) {
      errs.company = "Company name is required.";
    }
    if (!formData.role.trim()) {
      errs.role = "Role / Title is required.";
    }
    if (!formData.industry) {
      errs.industry = "Please select an industry.";
    }
    if (!formData.promptReason.trim()) {
      errs.promptReason = "Please describe what prompted you to explore AI now.";
    }
    if (!formData.currentAiAdoption) {
      errs.currentAiAdoption = "Please select your current AI adoption stage.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      const firstErrorField = document.querySelector<HTMLElement>("[aria-invalid='true']");
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/assessment/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        setServerError(
          errorData.error || "We couldn't submit your enquiry. Please try again."
        );
        return;
      }
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Network error during assessment submission:", err);
      setServerError("We couldn't submit your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof AssessmentFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div
        id="assessment-confirmation"
        className="w-full max-w-3xl mx-auto border border-white/15 bg-[#05070D] rounded-lg p-8 sm:p-12 text-left animate-in fade-in duration-300"
        role="region"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="p-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <CheckCircle className="w-5 h-5" />
          </span>
          <span className="font-mono text-xs text-blue-400 font-semibold tracking-widest uppercase">
            REQUEST RECEIVED
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] mb-4">
          Thank you. We&apos;ve received your enquiry.
        </h3>

        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-10">
          Your information has been submitted to Stratision. We&apos;ll review the context you&apos;ve provided and determine the appropriate next step.
        </p>

        {/* What happens next */}
        <div className="pt-8 border-t border-white/[0.08] space-y-6 mb-10">
          <div className="font-mono text-xs text-slate-400 font-semibold tracking-widest uppercase">
            WHAT HAPPENS NEXT
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-blue-400 font-semibold mt-0.5 shrink-0">
                01
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                We review the organisation and reason for enquiry.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-blue-400 font-semibold mt-0.5 shrink-0">
                02
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                A Stratision specialist follows up if an assessment conversation is appropriate.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-blue-400 font-semibold mt-0.5 shrink-0">
                03
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                We establish whether the Business Intelligence Assessment™ is the right starting point.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Notice */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="font-mono">
            No obligation. No predefined AI solution.
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Confidential Executive Review</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto text-left">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="border border-white/[0.08] bg-[#05070D] rounded-lg p-6 sm:p-10 lg:p-12 space-y-8"
        aria-label="Request Business Intelligence Assessment"
      >
        {serverError && (
          <div
            role="alert"
            className="p-4 rounded border border-rose-500/30 bg-rose-500/10 text-xs text-rose-300"
          >
            {serverError}
          </div>
        )}

        {/* Name Fields (2 Col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="assessment-firstName"
              className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
            >
              First name <span className="text-blue-400">*</span>
            </label>
            <input
              id="assessment-firstName"
              name="firstName"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Eleanor"
              className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none ${
                errors.firstName
                  ? "border-rose-500/80 focus:border-rose-400"
                  : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              }`}
            />
            {errors.firstName && (
              <p id="firstName-error" className="mt-1.5 text-xs text-rose-400">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="assessment-lastName"
              className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
            >
              Last name <span className="text-blue-400">*</span>
            </label>
            <input
              id="assessment-lastName"
              name="lastName"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Vance"
              className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none ${
                errors.lastName
                  ? "border-rose-500/80 focus:border-rose-400"
                  : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              }`}
            />
            {errors.lastName && (
              <p id="lastName-error" className="mt-1.5 text-xs text-rose-400">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Work Email & Company (2 Col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="assessment-workEmail"
              className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
            >
              Work email <span className="text-blue-400">*</span>
            </label>
            <input
              id="assessment-workEmail"
              name="workEmail"
              type="email"
              required
              aria-required="true"
              aria-invalid={!!errors.workEmail}
              aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="e.vance@organisation.com"
              className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none ${
                errors.workEmail
                  ? "border-rose-500/80 focus:border-rose-400"
                  : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              }`}
            />
            {errors.workEmail && (
              <p id="workEmail-error" className="mt-1.5 text-xs text-rose-400">
                {errors.workEmail}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="assessment-company"
              className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
            >
              Company <span className="text-blue-400">*</span>
            </label>
            <input
              id="assessment-company"
              name="company"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              value={formData.company}
              onChange={handleChange}
              placeholder="Enterprise / Holdings"
              className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none ${
                errors.company
                  ? "border-rose-500/80 focus:border-rose-400"
                  : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              }`}
            />
            {errors.company && (
              <p id="company-error" className="mt-1.5 text-xs text-rose-400">
                {errors.company}
              </p>
            )}
          </div>
        </div>

        {/* Role & Industry (2 Col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="assessment-role"
              className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
            >
              Role / Title <span className="text-blue-400">*</span>
            </label>
            <input
              id="assessment-role"
              name="role"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.role}
              aria-describedby={errors.role ? "role-error" : undefined}
              value={formData.role}
              onChange={handleChange}
              placeholder="Chief Operating Officer / VP Technology"
              className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none ${
                errors.role
                  ? "border-rose-500/80 focus:border-rose-400"
                  : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              }`}
            />
            {errors.role && (
              <p id="role-error" className="mt-1.5 text-xs text-rose-400">
                {errors.role}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="assessment-industry"
              className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
            >
              Industry <span className="text-blue-400">*</span>
            </label>
            <select
              id="assessment-industry"
              name="industry"
              required
              aria-required="true"
              aria-invalid={!!errors.industry}
              aria-describedby={errors.industry ? "industry-error" : undefined}
              value={formData.industry}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none cursor-pointer ${
                errors.industry
                  ? "border-rose-500/80 focus:border-rose-400"
                  : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              }`}
            >
              <option value="" disabled className="text-slate-500">
                Select your operating industry...
              </option>
              {INDUSTRY_OPTIONS.map((ind) => (
                <option key={ind} value={ind} className="bg-[#080A10] text-slate-200">
                  {ind}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p id="industry-error" className="mt-1.5 text-xs text-rose-400">
                {errors.industry}
              </p>
            )}
          </div>
        </div>

        {/* What prompted you to explore AI now? (required textarea) */}
        <div>
          <label
            htmlFor="assessment-promptReason"
            className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
          >
            What prompted you to explore AI now? <span className="text-blue-400">*</span>
          </label>
          <textarea
            id="assessment-promptReason"
            name="promptReason"
            rows={3}
            required
            aria-required="true"
            aria-invalid={!!errors.promptReason}
            aria-describedby={errors.promptReason ? "promptReason-error" : undefined}
            value={formData.promptReason}
            onChange={handleChange}
            placeholder="Describe the trigger — strategic planning, board inquiry, bottleneck in operations, or expanding workload..."
            className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none resize-y ${
              errors.promptReason
                ? "border-rose-500/80 focus:border-rose-400"
                : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
            }`}
          />
          {errors.promptReason && (
            <p id="promptReason-error" className="mt-1.5 text-xs text-rose-400">
              {errors.promptReason}
            </p>
          )}
        </div>

        {/* Where do you currently see the greatest operational friction? (optional textarea) */}
        <div>
          <label
            htmlFor="assessment-frictionArea"
            className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
          >
            Where do you currently see the greatest operational friction?{" "}
            <span className="text-slate-500 font-normal text-[11px] font-mono">(OPTIONAL)</span>
          </label>
          <textarea
            id="assessment-frictionArea"
            name="frictionArea"
            rows={2}
            value={formData.frictionArea}
            onChange={handleChange}
            placeholder="Specific handoffs, document extraction, manual synthesis, slow report cycles, or system fragmentation..."
            className="w-full px-4 py-3 rounded bg-[#080B14] border border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-sm text-white placeholder-slate-600 transition-all outline-none resize-y"
          />
        </div>

        {/* Current AI Adoption in organisation (required select) */}
        <div>
          <label
            htmlFor="assessment-currentAiAdoption"
            className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
          >
            Are you currently using AI within the organisation? <span className="text-blue-400">*</span>
          </label>
          <select
            id="assessment-currentAiAdoption"
            name="currentAiAdoption"
            required
            aria-required="true"
            aria-invalid={!!errors.currentAiAdoption}
            aria-describedby={errors.currentAiAdoption ? "currentAiAdoption-error" : undefined}
            value={formData.currentAiAdoption}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded bg-[#080B14] border text-sm text-white placeholder-slate-600 transition-all outline-none cursor-pointer ${
              errors.currentAiAdoption
                ? "border-rose-500/80 focus:border-rose-400"
                : "border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
            }`}
          >
            <option value="" disabled className="text-slate-500">
              Select current organizational stage...
            </option>
            {AI_ADOPTION_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#080A10] text-slate-200">
                {opt}
              </option>
            ))}
          </select>
          {errors.currentAiAdoption && (
            <p id="currentAiAdoption-error" className="mt-1.5 text-xs text-rose-400">
              {errors.currentAiAdoption}
            </p>
          )}
        </div>

        {/* Anything else we should understand before speaking? (optional textarea) */}
        <div>
          <label
            htmlFor="assessment-additionalNotes"
            className="block text-xs font-semibold text-slate-200 mb-2 uppercase tracking-wider"
          >
            Anything else we should understand before speaking?{" "}
            <span className="text-slate-500 font-normal text-[11px] font-mono">(OPTIONAL)</span>
          </label>
          <textarea
            id="assessment-additionalNotes"
            name="additionalNotes"
            rows={2}
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Security constraints, tenancy preferences, ongoing legacy migration, or timeline factors..."
            className="w-full px-4 py-3 rounded bg-[#080B14] border border-white/15 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-sm text-white placeholder-slate-600 transition-all outline-none resize-y"
          />
        </div>

        {/* CTA & Reassurance */}
        <div className="pt-4 border-t border-white/[0.08] space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-700" />
                <span>Processing Request...</span>
              </>
            ) : (
              <>
                <span>Request Business Intelligence Assessment™</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Confidential discussion with a senior Stratision specialist. No obligation.</span>
          </p>

          <p className="text-[11px] text-slate-500 leading-relaxed font-sans pt-2 border-t border-white/[0.04]">
            By submitting this form, you agree that Stratision may use the information provided to review and respond to your enquiry. See our{" "}
            <Link
              to="/privacy"
              className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};
