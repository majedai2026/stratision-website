import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StratisionLogo } from "./StratisionLogo";
import { ArrowUp, ShieldCheck, Lock, FileText, X } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenBriefing }) => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId: string) => {
    const targetId = sectionId === "sovereignty-trust" || sectionId === "trust" ? "trust-engagement" : sectionId;
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -104;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -104;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070D] border-t border-white/[0.06] text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Purpose (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <StratisionLogo size="md" showDescriptor={true} onClick={handleLogoClick} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Stratision is a bespoke AI systems consultancy. We identify high-friction operational workflows and engineer custom autonomous systems that integrate with the way your business actually runs.
            </p>
            <div className="flex items-center gap-5 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Client-Governed IP & Asset Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-blue-400" />
                Private Deployment Options
              </span>
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className="text-xs font-semibold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick("what-we-build")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  What We Build
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("how-we-work")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How We Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("systems-in-action")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Systems in Action
                </button>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-white text-slate-300 transition-colors cursor-pointer block"
                >
                  Industries & Environments
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="hover:text-white text-slate-300 transition-colors cursor-pointer block"
                >
                  Insights
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("trust-engagement")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sovereignty & Governance
                </button>
              </li>
            </ul>
          </div>

          {/* Engagement & Executive Assets (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4
              className="text-xs font-semibold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Executive Engagements
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/briefing"
                  className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>The Executive Guide to AI Systems</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  Start a Conversation →
                </Link>
              </li>
              <li>
                <Link
                  to="/assessment"
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Business Intelligence Assessment™ Methodology
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Data Handling & Governance Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Stratision Systems Architecture. All rights reserved. Strategy • Vision • Intelligence.
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Governance Notice
            </button>
            <span>Client-Governed Boundary</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy & Governance Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0E121C] border border-white/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Data Handling & Governance Notice
              </h3>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                <strong>Client Data Protection:</strong> Stratision enforces agreed data-handling requirements across all commercial API gateways. Client operational data is never used to train public foundation models.
              </p>
              <p>
                <strong>Private Enclave Deployment:</strong> All bespoke multi-agent systems are engineered to deploy natively inside the client's designated cloud tenancy (AWS, Azure, or GCP).
              </p>
              <p>
                <strong>Confidential Intake:</strong> All communications, technical scoping discussions, and architecture diagrams shared during discovery are protected under mutual non-disclosure standards.
              </p>
              <p>
                <strong>Intellectual Property:</strong> Bespoke source code and system integration assets are governed and owned by the client organisation in accordance with agreed engagement terms.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="px-5 py-2 rounded-full bg-white text-[#080A10] font-semibold text-xs cursor-pointer hover:bg-slate-200"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
