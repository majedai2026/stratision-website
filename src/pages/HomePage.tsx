import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { TheStrategicDilemmaSection } from "../components/TheStrategicDilemmaSection";
import { ComparisonSection } from "../components/ComparisonSection";
import { StratisionLadderSection } from "../components/StratisionLadderSection";
import { StartWithOneProblemSection } from "../components/StartWithOneProblemSection";
import { HowWeWorkSection } from "../components/HowWeWorkSection";
import { AppointedTeamSection } from "../components/AppointedTeamSection";
import { InsideStratisionSection } from "../components/InsideStratisionSection";
import { RetainerIncludedSection } from "../components/RetainerIncludedSection";
import { BuildFeesSection } from "../components/BuildFeesSection";
import { WhyStratisionSection } from "../components/WhyStratisionSection";
import { StrategyVisionIntelligenceSection } from "../components/StrategyVisionIntelligenceSection";
import { GlobalCapabilitySection } from "../components/GlobalCapabilitySection";
import { FinalCtaSection } from "../components/FinalCtaSection";
import { BlueprintResult } from "../types";

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
  onSelectPainPointForBooking?: (title: string) => void;
  onSelectTierForBooking?: (tierName: string) => void;
  onSelectBlueprintForBooking?: (blueprint: BlueprintResult) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenBriefing,
}) => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Stratision | Strategy. Vision. Intelligence.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Why hire multiple departments when you can appoint one team? Stratision combines strategy, marketing, advertising, sales, CRM, systems and intelligence under one monthly retainer."
      );
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -84;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleSeeHowItWorks = () => {
    const el = document.getElementById("the-problem");
    if (el) {
      const yOffset = -84;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 01. HERO — Why Hire Multiple Departments When You Can Appoint One Team? */}
      <HeroSection
        onOpenBooking={onOpenBooking}
        onExploreSystems={handleSeeHowItWorks}
      />

      {/* 02. THE PROBLEM — Growing a Business Shouldn't Mean Building an Entire Department */}
      <TheStrategicDilemmaSection onOpenBooking={onOpenBooking} />

      {/* 03. THE COMPARISON — What Are You Actually Hiring? */}
      <ComparisonSection />

      {/* 04. STRATISION LADDER — We Don't Build Everything on Day One */}
      <StratisionLadderSection />

      {/* 05. START WITH ONE PROBLEM — Pragmatic Entry Sequence */}
      <StartWithOneProblemSection />

      {/* 06. HOW WE WORK — Problem First. Technology Second. */}
      <HowWeWorkSection onOpenBooking={onOpenBooking} />

      {/* 07. YOUR APPOINTED TEAM — Experience Across Functions */}
      <AppointedTeamSection />

      {/* INSIDE STRATISION — What Does That Team Actually Do? */}
      <InsideStratisionSection
        onOpenBooking={onOpenBooking}
        onExploreLadder={handleSeeHowItWorks}
      />

      {/* 08. WHAT'S INCLUDED IN THE RETAINER — One Team. One Monthly Retainer. */}
      <RetainerIncludedSection />

      {/* 09. BUILD FEES — Your Team Is The Retainer. Your Systems Are Built As Needed. */}
      <BuildFeesSection />

      {/* 10. WHY STRATISION — More Than A Marketing Company. More Than An AI Agency. */}
      <WhyStratisionSection />

      {/* 11. STRATEGY / VISION / INTELLIGENCE — Brand Statement */}
      <StrategyVisionIntelligenceSection />

      {/* 12. GLOBAL CAPABILITY — Built in Britain. Built for Business. */}
      <GlobalCapabilitySection />

      {/* 13. FINAL CTA — Ready to Appoint Your Team? */}
      <FinalCtaSection
        onOpenBooking={onOpenBooking}
        onOpenBriefing={onOpenBriefing}
      />
    </>
  );
};
