import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BRIEFING_PAGES, BRIEFING_METADATA } from "../data/briefingData";
import { BriefingPageRenderer } from "../components/BriefingPagesRenderer";
import { StratisionLogo } from "../components/StratisionLogo";
import {
  ChevronLeft,
  ChevronRight,
  Printer,
  ArrowLeft,
  ArrowRight,
  Layers,
  FileText,
  Download,
} from "lucide-react";

interface BriefingReaderPageProps {
  onOpenBooking: () => void;
}

export const BriefingReaderPage: React.FC<BriefingReaderPageProps> = ({ onOpenBooking }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"single" | "all">("single");
  const navigate = useNavigate();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === "single") {
        if (e.key === "ArrowRight" && currentPage < BRIEFING_METADATA.totalPages) {
          setCurrentPage((prev) => prev + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (e.key === "ArrowLeft" && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, viewMode]);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < BRIEFING_METADATA.totalPages) {
      setCurrentPage((p) => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans antialiased pt-24 pb-20 px-4 sm:px-6">
      {/* Top Reader Controls Bar - Restrained & Secondary to the Publication */}
      <div className="sticky top-20 z-40 max-w-4xl mx-auto mb-8 bg-[#080A10]/80 backdrop-blur-md border border-white/[0.06] rounded-xl px-4 sm:px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.35)] flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-3">
          <Link
            to="/briefing"
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5 font-medium py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to</span> Overview
          </Link>
          <span className="text-white/15 text-xs">|</span>
          <StratisionLogo size="sm" />
          <span className="text-white/15 text-xs hidden sm:inline">|</span>
          <span className="font-mono text-[11px] text-blue-400 font-medium tracking-wider hidden sm:inline">
            {BRIEFING_METADATA.docRef}
          </span>
        </div>

        {/* View Mode Toggle & Page Selector */}
        <div className="flex items-center gap-2">
          {viewMode === "single" ? (
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="p-1.5 rounded-md border border-white/[0.06] hover:bg-white/[0.04] disabled:opacity-25 disabled:cursor-not-allowed transition-colors text-slate-400 hover:text-slate-200"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {/* Page Dropdown */}
              <select
                value={currentPage}
                onChange={(e) => {
                  setCurrentPage(Number(e.target.value));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-[#0A0D15] text-slate-300 border border-white/[0.08] rounded-md px-2 py-1 text-xs font-mono focus:outline-none focus:border-blue-500/50 cursor-pointer"
                aria-label="Jump to page"
              >
                {BRIEFING_PAGES.map((p) => (
                  <option key={p.pageNumber} value={p.pageNumber}>
                    Page {p.pageNumber.toString().padStart(2, "0")} — {p.title}
                  </option>
                ))}
              </select>

              <button
                onClick={handleNext}
                disabled={currentPage === BRIEFING_METADATA.totalPages}
                className="p-1.5 rounded-md border border-white/[0.06] hover:bg-white/[0.04] disabled:opacity-25 disabled:cursor-not-allowed transition-colors text-slate-400 hover:text-slate-200"
                aria-label="Next page"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <span className="font-mono text-xs text-slate-400">
              Viewing All 18 Pages
            </span>
          )}

          <span className="text-white/15 text-xs hidden sm:inline">|</span>

          {/* Toggle View Mode */}
          <button
            onClick={() => setViewMode(viewMode === "single" ? "all" : "single")}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/[0.06] hover:bg-white/[0.04] text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{viewMode === "single" ? "Continuous View" : "Page by Page"}</span>
          </button>
        </div>

        {/* Print / Save & Assessment Action */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/[0.06] hover:bg-white/[0.04] text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400/80" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#080A10] font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3 h-3 text-slate-700" />
          </button>
        </div>
      </div>

      {/* Main Publication Container */}
      <main className="max-w-5xl mx-auto print:max-w-none">
        {viewMode === "single" ? (
          <div>
            <BriefingPageRenderer
              pageNumber={currentPage}
              onOpenBooking={onOpenBooking}
            />

            {/* In-page Next / Prev Bar */}
            <div className="max-w-4xl mx-auto flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs text-slate-400 font-mono print:hidden">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="flex items-center gap-1.5 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREVIOUS PAGE</span>
              </button>

              <span>
                PAGE {currentPage.toString().padStart(2, "0")} OF {BRIEFING_METADATA.totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === BRIEFING_METADATA.totalPages}
                className="flex items-center gap-1.5 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <span>NEXT PAGE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-12 print:space-y-0">
            {BRIEFING_PAGES.map((page) => (
              <div key={page.pageNumber} className="break-after-page print:break-after-page">
                <BriefingPageRenderer
                  pageNumber={page.pageNumber}
                  onOpenBooking={onOpenBooking}
                  isPrintView={true}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
