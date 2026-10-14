import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StratisionLogo } from "./StratisionLogo";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const yOffset = -84;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -84;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAppointTeamClick = () => {
    setMobileMenuOpen(false);
    onOpenBooking();
  };

  const isInsightsActive = location.pathname.startsWith("/insights");

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        scrolled
          ? "bg-[#08111E]/95 backdrop-blur-md border-white/[0.1]"
          : "bg-[#08111E]/90 backdrop-blur-sm border-white/[0.08]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-[72px] sm:h-[76px] flex items-center justify-between">
        {/* Stratision Brand Mark */}
        <div className="flex items-center shrink-0">
          <StratisionLogo size="md" showDescriptor={false} align="left" onClick={handleLogoClick} />
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-9 text-[13.5px] font-medium text-[#CBD5E1] tracking-[-0.01em]"
        >
          <button
            onClick={() => handleNavClick("how-we-work")}
            className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
          >
            Approach
          </button>

          <button
            onClick={() => handleNavClick("what-we-do")}
            className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
          >
            What We Do
          </button>

          <button
            onClick={() => handleNavClick("the-ladder")}
            className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
          >
            The Ladder
          </button>

          <button
            onClick={() => handleNavClick("why-stratision")}
            className="hover:text-[#F9F8F4] transition-colors cursor-pointer"
          >
            Why Stratision
          </button>

          <Link
            to="/insights"
            className={`transition-colors cursor-pointer ${
              isInsightsActive ? "text-[#F9F8F4] font-semibold" : "hover:text-[#F9F8F4]"
            }`}
          >
            Insights
          </Link>
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="nav-start-conversation"
            onClick={handleAppointTeamClick}
            className="px-6 py-3 rounded-none bg-[#F9F8F4] hover:bg-white text-[#08111E] font-mono font-semibold text-[11px] tracking-[0.16em] uppercase transition-colors duration-150 cursor-pointer flex items-center gap-2.5 group"
          >
            <span>APPOINT YOUR TEAM</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Actions (Visible on < lg) */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            onClick={handleAppointTeamClick}
            className="min-h-[40px] px-3.5 sm:px-4 py-2 rounded-none bg-[#F9F8F4] hover:bg-white text-[#08111E] font-mono font-semibold text-[10.5px] sm:text-[11px] tracking-[0.12em] uppercase transition-colors duration-150 cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <span>Appoint<span className="hidden sm:inline"> Your Team</span></span>
            <ArrowRight className="w-3 h-3 text-[#08111E]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-none text-[#F9F8F4] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] cursor-pointer transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] sm:top-[76px] bg-[#08111E] z-40 lg:hidden px-5 sm:px-6 py-6 sm:py-8 flex flex-col justify-between border-t border-white/[0.08] overflow-y-auto">
          <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
            <button
              onClick={() => handleNavClick("how-we-work")}
              className="block w-full text-left text-xl font-semibold tracking-tight text-[#F9F8F4] hover:text-[#C8D2E0] transition-colors py-4 flex items-center cursor-pointer"
            >
              Approach
            </button>

            <button
              onClick={() => handleNavClick("what-we-do")}
              className="block w-full text-left text-xl font-semibold tracking-tight text-[#F9F8F4] hover:text-[#C8D2E0] transition-colors py-4 flex items-center cursor-pointer"
            >
              What We Do
            </button>

            <button
              onClick={() => handleNavClick("the-ladder")}
              className="block w-full text-left text-xl font-semibold tracking-tight text-[#F9F8F4] hover:text-[#C8D2E0] transition-colors py-4 flex items-center cursor-pointer"
            >
              The Ladder
            </button>

            <button
              onClick={() => handleNavClick("why-stratision")}
              className="block w-full text-left text-xl font-semibold tracking-tight text-[#F9F8F4] hover:text-[#C8D2E0] transition-colors py-4 flex items-center cursor-pointer"
            >
              Why Stratision
            </button>

            <Link
              to="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-xl font-semibold tracking-tight text-[#F9F8F4] hover:text-[#C8D2E0] transition-colors py-4 flex items-center"
            >
              Insights
            </Link>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={handleAppointTeamClick}
              className="w-full min-h-[48px] py-3.5 rounded-none bg-[#F9F8F4] text-[#08111E] font-mono font-semibold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 cursor-pointer hover:bg-white transition-colors"
            >
              <span>APPOINT YOUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs font-editorial-italic text-[#8FA3B8]">
              British-founded · Business-first · Technology-enabled
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
