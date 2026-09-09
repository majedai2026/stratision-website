import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StratisionLogo } from "./StratisionLogo";
import { ArrowRight, Menu, X, FileText, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenBriefing }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
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
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -104;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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

  const handleStartConversationClick = () => {
    setMobileMenuOpen(false);
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isIndustriesActive = location.pathname.startsWith("/industries");
  const isInsightsActive = location.pathname.startsWith("/insights");

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-full ${
          scrolled
            ? "bg-[#080A10]/90 backdrop-blur-xl border border-white/10 px-5 sm:px-7 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent px-2 sm:px-4 py-3 border border-transparent"
        } flex items-center justify-between`}
      >
        {/* Stratision Brand Mark */}
        <div className="flex items-center">
          <StratisionLogo
            size="md"
            onClick={handleLogoClick}
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-slate-300"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <button
            onClick={() => handleNavClick("what-we-build")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            What We Build
          </button>
          <button
            onClick={() => handleNavClick("how-we-work")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            How We Work
          </button>
          <button
            onClick={() => handleNavClick("systems-in-action")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Systems in Action
          </button>

          {/* Industries Link */}
          <Link
            to="/industries"
            className={`transition-colors cursor-pointer flex items-center gap-1 ${
              isIndustriesActive ? "text-blue-400 font-semibold" : "hover:text-white"
            }`}
          >
            <span>Industries</span>
          </Link>

          {/* Insights Link */}
          <Link
            to="/insights"
            className={`transition-colors cursor-pointer flex items-center gap-1 ${
              isInsightsActive ? "text-blue-400 font-semibold" : "hover:text-white"
            }`}
          >
            <span>Insights</span>
          </Link>

          <button
            onClick={() => handleNavClick("trust-engagement")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Sovereignty & Trust
          </button>
          
          <Link
            to="/briefing"
            className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
              location.pathname.startsWith("/briefing")
                ? "text-blue-400 font-semibold"
                : "text-slate-400 hover:text-blue-400"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Executive Briefing</span>
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-start-conversation"
            onClick={handleStartConversationClick}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-[13px] tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-[0_2px_12px_rgba(255,255,255,0.15)] group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={handleStartConversationClick}
            className="sm:hidden px-3.5 py-1.5 rounded-full bg-white text-[#080A10] font-semibold text-[12px] cursor-pointer"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Conversation
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full text-slate-300 hover:text-white bg-white/5 border border-white/10"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] bg-[#080A10]/98 backdrop-blur-2xl z-40 lg:hidden px-6 py-10 flex flex-col justify-between border-t border-white/10 animate-in fade-in duration-200">
          <div className="space-y-5">
            <button
              onClick={() => handleNavClick("what-we-build")}
              className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors py-1.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What We Build
            </button>
            <button
              onClick={() => handleNavClick("how-we-work")}
              className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors py-1.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              How We Work
            </button>
            <button
              onClick={() => handleNavClick("systems-in-action")}
              className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors py-1.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Systems in Action
            </button>
            
            {/* Industries Link Mobile */}
            <Link
              to="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors py-1.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Industries & Operating Environments
            </Link>

            {/* Insights Link Mobile */}
            <Link
              to="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-xl font-semibold text-blue-400 hover:text-white transition-colors py-1.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Insights
            </Link>

            <button
              onClick={() => handleNavClick("trust-engagement")}
              className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors py-1.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sovereignty & Trust
            </button>
            
            <Link
              to="/briefing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-slate-300 hover:text-white transition-colors py-2 pt-4 border-t border-white/10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Executive Briefing</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10">
            <button
              onClick={handleStartConversationClick}
              className="w-full min-h-[50px] py-3.5 rounded-xl bg-white text-[#080A10] font-semibold text-[15px] flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Bespoke enterprise AI systems • Strategy • Vision • Intelligence
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
