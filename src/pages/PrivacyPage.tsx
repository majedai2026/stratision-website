import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, FileText, Database, Server, Mail, AlertCircle } from "lucide-react";

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.title = "Privacy Policy & Data Handling Statement | Stratision";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Stratision data handling, privacy governance, and confidential intake policies for the Business Intelligence Assessment™ and client scoping enquiries."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans antialiased">
      {/* Header / Breadcrumb Bar */}
      <header className="pt-28 sm:pt-32 pb-12 border-b border-white/[0.06] bg-[#06080D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              <span>Stratision</span>
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-slate-400">Legal & Governance</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-500 font-mono">BIA-PRIV-01</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Data Handling & Privacy Statement</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Privacy Policy & Assessment Governance
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            This statement sets out how Stratision collects, handles, stores, and evaluates professional and strategic data submitted through the Business Intelligence Assessment™ (BIA™) and executive scoping channels.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span>Last Updated: September 2026</span>
            <span className="text-white/20">•</span>
            <span>Document Revision: 2.1</span>
            <span className="text-white/20">•</span>
            <span>Classification: Public Regulatory Notice</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">

          {/* Section 1: Scope & Purpose */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                1. Scope of This Policy
              </h2>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed space-y-3 font-sans">
              <p>
                Stratision provides strategic architecture, feasibility diagnostics, and multi-agent systems engineering for enterprise organisations. This privacy policy applies to personal data and professional operational context collected via the Business Intelligence Assessment™ (BIA™) intake form on this website, as well as related consultation intake requests.
              </p>
              <p>
                For client organisations engaging Stratision under master services agreements, data governance, intellectual property rights, and private cloud enclave isolation are governed by formal bilateral contracts and non-disclosure agreements.
              </p>
            </div>
          </section>

          {/* Section 2: Information Collected */}
          <section className="space-y-4 pt-8 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <Database className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                2. Information Collected Through BIA™ Enquiries
              </h2>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-sans">
              <p>
                When you complete and submit a Business Intelligence Assessment™ enquiry, Stratision collects only the business information necessary to review your strategic context and determine feasibility:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wide">
                    Professional Contact Data
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>First name and last name</li>
                    <li>Corporate work email address</li>
                    <li>Company or organisation name</li>
                    <li>Job title / executive role</li>
                    <li>Industry sector classification</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wide">
                    Operational Strategic Context
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Primary operational friction area</li>
                    <li>Core motivation / trigger for AI exploration</li>
                    <li>Current organizational AI adoption stage</li>
                    <li>Voluntary additional context or constraints</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-400 pt-2">
                <strong>Technical Metadata:</strong> When submitting an enquiry, our servers process the incoming request timestamp and originating client network address for the sole purpose of rate limiting, abuse prevention, and duplicate submission suppression.
              </p>
            </div>
          </section>

          {/* Section 3: Why and How Information Is Used */}
          <section className="space-y-4 pt-8 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                3. Why It Is Collected & How It Is Used
              </h2>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed space-y-3 font-sans">
              <p>
                Stratision uses the information provided strictly for legitimate business evaluation purposes:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside pl-1">
                <li>
                  <strong className="text-white">Technical Scoping:</strong> To evaluate your operational friction against our multi-agent architecture patterns and determine whether a 6-week production sprint is viable.
                </li>
                <li>
                  <strong className="text-white">Direct Communication:</strong> To have an executive solutions specialist contact you via your work email to schedule an initial confidential scoping session.
                </li>
                <li>
                  <strong className="text-white">Audit & Record Keeping:</strong> To reference your submitted strategic requirements during the diagnostic call using your assigned reference identifier.
                </li>
              </ul>
              <div className="p-4 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 text-xs text-blue-300/90 leading-relaxed mt-4">
                <strong>Zero Commercial Model Training Guarantee:</strong> Stratision never sells, rents, licenses, or monetizes client or enquiry information. Strategic contexts submitted through BIA™ are never fed into public foundation models or used to train general AI systems.
              </div>
            </div>
          </section>

          {/* Section 4: Storage, Processing & Cloud Infrastructure */}
          <section className="space-y-4 pt-8 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <Server className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                4. Storage, Infrastructure & Security
              </h2>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed space-y-3 font-sans">
              <p>
                All assessment requests are submitted over encrypted Transport Layer Security (TLS 1.3). Upon receipt by the Stratision API gateway:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside pl-1">
                <li>
                  <strong>Production Managed Datastore:</strong> Enquiries in production environments are persisted in Google Cloud managed datastores (Google Cloud Firestore) with encrypted at-rest and in-transit storage.
                </li>
                <li>
                  <strong>Access Segregation:</strong> Access to the datastore is restricted strictly to authorized Stratision technical partners and systems personnel via authenticated, least-privilege cloud IAM policies.
                </li>
                <li>
                  <strong>Internal Notification Gateway:</strong> Successful submissions may trigger encrypted server-to-server webhook dispatches to internal triage systems to alert assigned sector specialists.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Access & Third-Party Processors */}
          <section className="space-y-4 pt-8 border-t border-white/[0.06]">
            <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              5. Who May Have Access
            </h2>
            <div className="text-slate-300 text-sm leading-relaxed space-y-3 font-sans">
              <p>
                Access to submitted assessment dossiers is limited to:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside pl-1">
                <li>
                  Stratision designated practice leads and solutions architects reviewing your specific sector enquiry.
                </li>
                <li>
                  Cloud infrastructure hosting providers (e.g., Google Cloud Platform) acting solely as contracted cloud infrastructure data processors bound by enterprise security and confidentiality terms.
                </li>
              </ul>
              <p>
                We do not transfer enquiry data to third-party marketing networks, affiliate brokers, or external analytics vendors.
              </p>
            </div>
          </section>

          {/* Section 6: Retention Approach & Legal Disclosures */}
          <section className="space-y-4 pt-8 border-t border-white/[0.06]">
            <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              6. Retention Approach & Bounded Legal Disclosures
            </h2>
            <div className="text-slate-300 text-sm leading-relaxed space-y-4 font-sans">
              <p>
                Stratision maintains an operational retention approach intended to support meaningful strategic engagement:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside pl-1">
                <li>
                  Assessment enquiry records are retained for the duration of the preliminary scoping and qualification lifecycle (typically up to 12 months) to allow ongoing architecture review.
                </li>
                <li>
                  If an enquiry does not proceed to an active engagement or commercial agreement, records are periodically reviewed and archived.
                </li>
              </ul>

              {/* Bounded Legal Input Flag */}
              <div className="p-4 rounded-xl bg-amber-500/[0.05] border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Notice Concerning Statutory Retention & Jurisdiction Specifics</span>
                </div>
                <p>
                  Stratision operates as an enterprise consultancy. Specific statutory retention schedules, international data transfer agreements (such as EU Standard Contractual Clauses), and formal corporate registration numbers vary by governing enterprise engagement agreement and are formalized within bilateral client contracts.
                </p>
                <p className="text-slate-400">
                  To ensure complete transparency: specific statutory legal claims, third-party sub-processor registries, and jurisdiction-specific statutory appointments will be updated as our formal corporate legal filings are finalized with external counsel.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Visitor Rights & Contacting Stratision */}
          <section className="space-y-4 pt-8 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <Mail className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                7. Your Rights & Contacting Stratision
              </h2>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed space-y-3 font-sans">
              <p>
                Depending on your location, you may have rights under applicable privacy legislation (such as the UK GDPR, EU GDPR, or regional privacy regulations) to:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside pl-1">
                <li>Request access to the personal data Stratision holds about you.</li>
                <li>Request rectification of any incomplete or inaccurate information.</li>
                <li>Request deletion of your submitted assessment enquiry.</li>
                <li>Object to or restrict the processing of your enquiry.</li>
              </ul>
              <p className="pt-2">
                To exercise any of these rights, or if you have questions regarding our data handling procedures, please contact our data governance lead quoting your BIA reference ID:
              </p>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Data Governance & Privacy Enquiries</div>
                  <div className="text-sm font-semibold text-white mt-1">privacy@stratision.com</div>
                </div>
                <a
                  href="mailto:privacy@stratision.com?subject=Stratision%20Privacy%20Enquiry"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  Send Inquiry
                </a>
              </div>
            </div>
          </section>

          {/* Section 8: Cross-Reference to Governance Notice */}
          <section className="pt-8 border-t border-white/[0.06] text-xs text-slate-400 leading-relaxed font-sans">
            <p>
              For enterprise clients exploring production system architecture, please also consult our{" "}
              <Link to="/#governance" className="text-blue-400 hover:underline">
                Data Handling & Governance Notice
              </Link>
              , which outlines our technical safeguards for private VPC enclave deployments and strict API firewall boundaries.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};
