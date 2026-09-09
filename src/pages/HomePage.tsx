import React, { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { TheStrategicDilemmaSection } from "../components/TheStrategicDilemmaSection";
import { WhatWeBuildSection } from "../components/WhatWeBuildSection";
import { SystemsInActionSection } from "../components/SystemsInActionSection";
import { HowWeWorkSection } from "../components/HowWeWorkSection";
import { TrustAndEngagementSection } from "../components/TrustAndEngagementSection";

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
      const id = rawId === "sovereignty-trust" || rawId === "trust" ? "trust-engagement" : rawId;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -104;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const id = sectionId === "sovereignty-trust" || sectionId === "trust" ? "trust-engagement" : sectionId;
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -104;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main id="main-content">
      {/* BEAT 01: Hero & Living Vector System Pipeline */}
      <HeroSection
        onOpenBooking={onOpenBooking}
        onExploreSystems={() => scrollToSection("systems-in-action")}
      />

      {/* BEAT 02: The Strategic Dilemma (Generic Software vs. Bespoke Systems) */}
      <TheStrategicDilemmaSection onOpenBooking={onOpenBooking} />

      {/* BEAT 03: What We Build (3 Core Capability Families) */}
      <WhatWeBuildSection onOpenBooking={onOpenBooking} />

      {/* BEAT 04: Systems in Action (3 Modelled Architectural Scenarios) */}
      <SystemsInActionSection onOpenBooking={onOpenBooking} />

      {/* BEAT 05: How We Work (4-Stage Engagement Protocol) */}
      <HowWeWorkSection onOpenBooking={onOpenBooking} />

      {/* BEAT 06: Sovereignty, Trust & Engagement Dispatch */}
      <TrustAndEngagementSection
        onOpenBooking={onOpenBooking}
        onOpenBriefing={onOpenBriefing}
      />
    </main>
  );
};
