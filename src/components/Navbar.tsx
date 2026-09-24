import React, { useState, useEffect, useRef } from "react";
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
  const [systemsDropdownOpen, setSystemsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSystemsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setSystemsDropdownOpen(false);
    const targetId = sectionId === "sovereignty-trust" || sectionId === "trust" ? "trust-engagement" : sectionId;
    
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -84;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -84;
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
    setSystemsDropdownOpen(false);
    onOpenBooking();
  };

  const isSolutionsActive = location.pathname.startsWith("/solutions");
  const isSystemsActive = location.pathname.startsWith("/systems");
  const isIndustriesActive = location.pathname.startsWith("/industries");
  const isInsightsActive = location.pathname.startsWith("/insights");

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3.5 sm:px-6 lg:px-8 pt-3 sm:pt-4"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-full ${
          scrolled
            ? "bg-[#080A10]/95 backdrop-blur-xl border border-white/10 px-4 sm:px-7 py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-[#080A10]/70 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none px-3.5 sm:px-4 py-2.5 sm:py-3 border border-white/[0.08] sm:border-transparent"
        } flex items-center justify-between`}
      >
        {/* Stratision Brand Mark */}
        <div className="flex items-center shrink-0">
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
          {/* Solutions Direct Link */}
          <Link
            to="/solutions"
            className={`transition-colors cursor-pointer flex items-center gap-1 ${
              isSolutionsActive ? "text-blue-400 font-semibold" : "hover:text-white"
            }`}
          >
            <span>Solutions</span>
          </Link>

          {/* Systems Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSystemsDropdownOpen(!systemsDropdownOpen)}
              className={`hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 py-1 ${
                isSystemsActive ? "text-blue-400 font-semibold" : ""
              }`}
            >
              <span>Systems</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${systemsDropdownOpen ? "rotate-180 text-blue-400" : "text-slate-400"}`} />
            </button>

            {systemsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2.5 w-72 rounded-2xl bg-[#090C16]/95 backdrop-blur-2xl border border-white/10 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 px-3 py-1.5">
                  Flagship Systems
                </div>
                <Link
                  to="/systems/speed-to-lead"
                  onClick={() => setSystemsDropdownOpen(false)}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Speed-to-Lead Agent™</span>
                </Link>
                <Link
                  to="/systems/ai-marketing"
                  onClick={() => setSystemsDropdownOpen(false)}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>AI Marketing System™</span>
                </Link>
                <Link
                  to="/systems/workforce-intelligence"
                  onClick={() => setSystemsDropdownOpen(false)}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Workforce Intelligence Platform™</span>
                </Link>
                <Link
                  to="/systems/ai-receptionist"
                  onClick={() => setSystemsDropdownOpen(false)}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>AI Receptionist™</span>
                </Link>

                <div className="my-2 border-t border-white/[0.08]" />

                <Link
                  to="/systems"
                  onClick={() => setSystemsDropdownOpen(false)}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Explore All Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/industries"
            className={`transition-colors cursor-pointer flex items-center gap-1 ${
              isIndustriesActive ? "text-blue-400 font-semibold" : "hover:text-white"
            }`}
          >
            <span>Industries</span>
          </Link>

          <button
            onClick={() => handleNavClick("how-we-work")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            How We Work
          </button>

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
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
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

        {/* Mobile Actions (Visible on < lg) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={handleStartConversationClick}
            className="min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs sm:text-[13px] tracking-tight transition-all duration-150 cursor-pointer flex items-center gap-1.5 shadow-[0_2px_10px_rgba(255,255,255,0.12)] shrink-0"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Start<span className="hidden sm:inline"> a Conversation</span></span>
            <ArrowRight className="w-3 h-3 text-[#080A10]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-full text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 cursor-pointer transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] sm:top-[76px] bg-[#080A10]/98 backdrop-blur-2xl z-40 lg:hidden px-5 sm:px-6 py-6 sm:py-8 flex flex-col justify-between border-t border-white/10 animate-in fade-in duration-200 overflow-y-auto">
          <div className="space-y-4">
            {/* Solutions Link Mobile */}
            <Link
              to="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-lg font-semibold text-white hover:text-blue-400 transition-colors py-2 min-h-[44px] flex items-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Solutions
            </Link>

            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-2 font-mono">
                FLAGSHIP SYSTEMS
              </span>
              <div className="pl-3 space-y-1.5 border-l border-white/10">
                <Link
                  to="/systems/speed-to-lead"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-sm font-medium text-slate-200 hover:text-white transition-colors py-1.5 min-h-[40px] flex items-center"
                >
                  Speed-to-Lead Agent™
                </Link>
                <Link
                  to="/systems/ai-marketing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-sm font-medium text-slate-200 hover:text-white transition-colors py-1.5 min-h-[40px] flex items-center"
                >
                  AI Marketing System™
                </Link>
                <Link
                  to="/systems/workforce-intelligence"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-sm font-medium text-slate-200 hover:text-white transition-colors py-1.5 min-h-[40px] flex items-center"
                >
                  Workforce Intelligence Platform™
                </Link>
                <Link
                  to="/systems/ai-receptionist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-sm font-medium text-slate-200 hover:text-white transition-colors py-1.5 min-h-[40px] flex items-center"
                >
                  AI Receptionist™
                </Link>
                <Link
                  to="/systems"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors py-2 flex items-center"
                >
                  Explore All Systems →
                </Link>
              </div>
            </div>

            {/* Industries Link Mobile */}
            <Link
              to="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-lg font-semibold text-white hover:text-blue-400 transition-colors py-2 min-h-[44px] flex items-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Industries
            </Link>

            <button
              onClick={() => handleNavClick("how-we-work")}
              className="block w-full text-left text-lg font-semibold text-white hover:text-blue-400 transition-colors py-2 min-h-[44px] flex items-center cursor-pointer"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              How We Work
            </button>

            {/* Insights Link Mobile */}
            <Link
              to="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-lg font-semibold text-white hover:text-blue-400 transition-colors py-2 min-h-[44px] flex items-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Insights
            </Link>

            <button
              onClick={() => handleNavClick("trust-engagement")}
              className="block w-full text-left text-lg font-semibold text-white hover:text-blue-400 transition-colors py-2 min-h-[44px] flex items-center cursor-pointer"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sovereignty & Trust
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
            <button
              onClick={handleStartConversationClick}
              className="w-full min-h-[48px] py-3.5 rounded-full bg-white text-[#080A10] font-semibold text-[15px] flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:bg-slate-100 transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-500 font-normal">
              Bespoke enterprise AI systems • Strategy • Vision • Intelligence
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
