import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { IndustriesHubPage } from "./pages/IndustriesHubPage";
import { IndustryDetailPage } from "./pages/IndustryDetailPage";
import { BriefingLandingPage } from "./pages/BriefingLandingPage";
import { BriefingReaderPage } from "./pages/BriefingReaderPage";
import { InsightsIndexPage } from "./pages/InsightsIndexPage";
import { InsightDetailPage } from "./pages/InsightDetailPage";
import { AssessmentPage } from "./pages/AssessmentPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { StrategyConsultantModal } from "./components/StrategyConsultantModal";
import { ExecutiveBriefingModal } from "./components/ExecutiveBriefingModal";
import { BlueprintResult } from "./types";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [selectedPainPointForBooking, setSelectedPainPointForBooking] = useState<string | undefined>(undefined);
  const [selectedTierForBooking, setSelectedTierForBooking] = useState<string | undefined>(undefined);
  const [selectedBlueprintForBooking, setSelectedBlueprintForBooking] = useState<BlueprintResult | null>(null);

  const handleOpenBooking = () => {
    const calendarUrl = (import.meta as any).env?.VITE_BOOKING_CALENDAR_URL;
    if (calendarUrl && typeof calendarUrl === "string" && calendarUrl.trim()) {
      window.open(calendarUrl.trim(), "_blank", "noopener,noreferrer");
      return;
    }
    setSelectedPainPointForBooking(undefined);
    setSelectedTierForBooking(undefined);
    setSelectedBlueprintForBooking(null);
    setIsBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans antialiased flex flex-col justify-between">
        {/* Sticky Floating Top Navigation */}
        <Navbar
          onOpenBooking={handleOpenBooking}
          onOpenBriefing={() => setIsBriefingModalOpen(true)}
        />

        {/* Application Page Routing */}
        <div className="flex-grow">
          <Routes>
            {/* Canonical Frozen Homepage */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onOpenBriefing={() => setIsBriefingModalOpen(true)}
                />
              }
            />

            {/* Industries Hub Page */}
            <Route
              path="/industries"
              element={
                <IndustriesHubPage
                  onOpenBooking={handleOpenBooking}
                  onOpenBriefing={() => setIsBriefingModalOpen(true)}
                />
              }
            />

            {/* Six Dedicated Industry Pages */}
            <Route
              path="/industries/:slug"
              element={
                <IndustryDetailPage
                  onOpenBooking={handleOpenBooking}
                  onOpenBriefing={() => setIsBriefingModalOpen(true)}
                />
              }
            />

            {/* Executive AI Systems Briefing Landing Page */}
            <Route
              path="/briefing"
              element={
                <BriefingLandingPage
                  onOpenBooking={handleOpenBooking}
                  onOpenBriefing={() => setIsBriefingModalOpen(true)}
                />
              }
            />

            {/* Complete 18-Page Publication Interactive Reader */}
            <Route
              path="/briefing/read"
              element={
                <BriefingReaderPage
                  onOpenBooking={handleOpenBooking}
                />
              }
            />

            {/* Stratision Insights Editorial Index */}
            <Route
              path="/insights"
              element={
                <InsightsIndexPage
                  onOpenBooking={handleOpenBooking}
                  onOpenBriefing={() => setIsBriefingModalOpen(true)}
                />
              }
            />

            {/* Stratision Insights Individual Article Route */}
            <Route
              path="/insights/:slug"
              element={
                <InsightDetailPage
                  onOpenBooking={handleOpenBooking}
                  onOpenBriefing={() => setIsBriefingModalOpen(true)}
                />
              }
            />

            {/* Business Intelligence Assessment™ Commercial Experience */}
            <Route
              path="/assessment"
              element={
                <AssessmentPage
                  onOpenBooking={handleOpenBooking}
                  onOpenBriefing={() => setIsBriefingModalOpen(true)}
                />
              }
            />

            {/* Primary Commercial Conversation Intake */}
            <Route
              path="/contact"
              element={<ContactPage onOpenBooking={handleOpenBooking} />}
            />

            {/* Dedicated Privacy Policy & Governance Notice Route */}
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Minimalist Consultancy Footer */}
        <Footer
          onOpenBooking={handleOpenBooking}
          onOpenBriefing={() => setIsBriefingModalOpen(true)}
        />

        {/* Progressive Disclosure Modal: Strategy Scoping Consultation Intake */}
        <StrategyConsultantModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          initialPainPoint={selectedPainPointForBooking}
          initialTier={selectedTierForBooking}
          initialBlueprint={selectedBlueprintForBooking}
        />

        {/* Progressive Disclosure Modal: 2-Page Print-Ready Executive Briefing Dossier */}
        <ExecutiveBriefingModal
          isOpen={isBriefingModalOpen}
          onClose={() => setIsBriefingModalOpen(false)}
          onOpenBooking={handleOpenBooking}
        />
      </div>
    </BrowserRouter>
  );
}
