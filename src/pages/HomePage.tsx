import React, { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { TheStrategicDilemmaSection } from "../components/TheStrategicDilemmaSection";
import { WhatWeBuildSection } from "../components/WhatWeBuildSection";
import { FlagshipSystemsSection } from "../components/FlagshipSystemsSection";
import { StratisionDifferenceSection } from "../components/StratisionDifferenceSection";
import { ExampleArchitecturesSection } from "../components/ExampleArchitecturesSection";
import { HowWeWorkSection } from "../components/HowWeWorkSection";
import { RealWorkProofSection } from "../components/RealWorkProofSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { AssessmentBridgeSection } from "../components/AssessmentBridgeSection";
import { TrustAndEngagementSection } from "../components/TrustAndEngagementSection";
import { FinalCtaSection } from "../components/FinalCtaSection";

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenBriefing: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenBriefing,
}) => {
  useEffect(() => {
    document.title = "Stratision | Bespoke AI Systems & Strategy";
    // Check if there is a hash in URL to scroll to
    if (window.location.hash) {
      const rawId = window.location.hash.replace("#", "");
      const id =
        rawId === "sovereignty-trust" || rawId === "trust"
          ? "trust-engagement"
          : rawId === "bespoke-systems"
          ? "proof-architectures"
          : rawId;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -84;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const id =
      sectionId === "sovereignty-trust" || sectionId === "trust"
        ? "trust-engagement"
        : sectionId === "bespoke-systems"
        ? "proof-architectures"
        : sectionId;
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -84;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main id="main-content">
      {/* 01. Hero (Spacious, Typography-Led, Rotating Capabilities) */}
      <HeroSection
        onOpenBooking={onOpenBooking}
        onExploreSystems={() => scrollToSection("flagship-systems")}
      />

      {/* 02. The Problem (AI is everywhere. Useful AI is not. SCATTERED ↓ CONNECTED) */}
      <TheStrategicDilemmaSection onOpenBooking={onOpenBooking} />

      {/* 03. What We Build (Interactive Visual Systems Showcase) */}
      <WhatWeBuildSection onOpenBooking={onOpenBooking} />

      {/* 04. Flagship Systems (Editorial Visual System Demonstrations with Business Artefacts) */}
      <FlagshipSystemsSection onOpenBooking={onOpenBooking} />

      {/* 05. Stratision Difference (We don't sell AI. We build the systems that make it useful.) */}
      <StratisionDifferenceSection />

      {/* 06. Proof / Deployments (Systems We Can Build / Example Architectures) */}
      <ExampleArchitecturesSection onOpenBooking={onOpenBooking} />

      {/* 07. Visual Industry Experience (Business Environment Showcase) */}
      <IndustriesSection />

      {/* 08. How We Work (Continuous Visual Journey: 01 to 04) */}
      <HowWeWorkSection onOpenBooking={onOpenBooking} />

      {/* 09. Proof (Built for Real Business Work) */}
      <RealWorkProofSection onOpenBooking={onOpenBooking} />

      {/* 10. Business Intelligence Assessment™ (Calm Strategic Entry) */}
      <AssessmentBridgeSection onOpenBooking={onOpenBooking} />

      {/* 10. Governance & Trust (Built responsibly. 5 Statements) */}
      <TrustAndEngagementSection
        onOpenBooking={onOpenBooking}
        onOpenBriefing={onOpenBriefing}
      />

      {/* 11. Final Call to Action (What could AI do inside your business? Let's find out.) */}
      <FinalCtaSection onOpenBooking={onOpenBooking} />
    </main>
  );
};
