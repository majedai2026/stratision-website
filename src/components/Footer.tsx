import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StratisionLogo } from "./StratisionLogo";
import { ArrowUp, X } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
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
    <footer className="bg-[#060D17] border-t border-white/[0.08] text-[#8FA3B8] text-xs relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand & Philosophy (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <StratisionLogo size="md" showDescriptor={false} onClick={handleLogoClick} />
            <p className="font-editorial-italic text-xl sm:text-2xl font-normal text-[#F9F8F4] tracking-[-0.01em] pt-1">
              Strategy. Vision. Intelligence.
            </p>
            <p className="text-xs text-[#8FA3B8] pt-1">
              British-founded. Business-first. Technology-enabled.
            </p>
          </div>

          {/* Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8D2E0]">
              <li>
                <button
                  onClick={() => handleNavClick("how-we-work")}
                  className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
                >
                  Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("what-we-do")}
                  className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("the-ladder")}
                  className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
                >
                  The Ladder
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("why-stratision")}
                  className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
                >
                  Why Stratision
                </button>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="hover:text-[#F9F8F4] transition-colors cursor-pointer block"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#F9F8F4] transition-colors cursor-pointer block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8]">
              Social
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8D2E0]">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F9F8F4] transition-colors block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F9F8F4] transition-colors block"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Legal (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-normal uppercase tracking-[0.22em] text-[#8FA3B8]">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8D2E0]">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#F9F8F4] transition-colors block"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
                >
                  Terms
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} Stratision. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>British-founded. Business-first. Technology-enabled.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#8FA3B8] hover:text-[#F9F8F4] transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {isTermsModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#08111E] border border-white/[0.12] rounded-[2px] max-w-xl w-full p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.1]">
              <h3 className="text-lg font-bold text-[#F9F8F4] tracking-[-0.02em]">
                Terms of Engagement & Website Use
              </h3>
              <button
                onClick={() => setIsTermsModalOpen(false)}
                className="p-1 rounded-[2px] text-[#8FA3B8] hover:text-[#F9F8F4] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#C8D2E0] leading-relaxed">
              <p>
                <strong>Retainer & Scope:</strong> Monthly retainers cover the agreed ongoing team and functions appointed by the client. Bespoke system builds, CRM implementations, and custom infrastructure are scoped and agreed separately prior to commencement.
              </p>
              <p>
                <strong>Confidentiality:</strong> All business information, commercial strategy, and operational workflows shared with Stratision are treated with strict commercial confidentiality.
              </p>
              <p>
                <strong>Intellectual Property:</strong> Custom systems and infrastructure built under separate implementation agreements are governed in accordance with the client's signed statement of work.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.1] flex justify-end">
              <button
                onClick={() => setIsTermsModalOpen(false)}
                className="px-5 py-2 rounded-[2px] bg-[#F9F8F4] text-[#08111E] font-semibold text-xs uppercase tracking-[0.08em] cursor-pointer hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
