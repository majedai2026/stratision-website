import React, { useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import { INSIGHTS_ARTICLES } from "../data/insightsData";
import { InsightsDiagram } from "../components/InsightsDiagrams";

interface InsightDetailPageProps {
  onOpenBooking: () => void;
  onOpenBriefing?: () => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({
  onOpenBooking,
}) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const articleIndex = INSIGHTS_ARTICLES.findIndex((a) => a.slug === slug);
  const article = articleIndex !== -1 ? INSIGHTS_ARTICLES[articleIndex] : null;

  const prevArticle = articleIndex > 0 ? INSIGHTS_ARTICLES[articleIndex - 1] : null;
  const nextArticle = articleIndex < INSIGHTS_ARTICLES.length - 1 ? INSIGHTS_ARTICLES[articleIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (article) {
      document.title = `${article.title} | Stratision Insights`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", article.seoDescription);
      }
    }
  }, [article, slug]);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <article className="min-h-screen bg-[#080A10] text-slate-100 selection:bg-blue-600/30 selection:text-white font-sans antialiased">
      {/* Top Breadcrumb & Metadata Bar */}
      <header className="pt-28 sm:pt-32 pb-10 border-b border-white/[0.06] bg-[#06080D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link to="/insights" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              <span>Insights</span>
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-slate-400">{article.category}</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-500">{article.number}</span>
          </nav>

          {/* Category & Metadata */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 mb-6 font-medium">
            <span className="text-blue-400 font-semibold">
              {article.category}
            </span>
            <span className="text-white/20">/</span>
            <span>{article.docRef}</span>
            <span className="text-white/20">/</span>
            <span>{article.readTime}</span>
            <span className="text-white/20">/</span>
            <span>{article.type}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
            {article.title}
          </h1>

          {/* Editorial Thesis / Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
            {article.thesis}
          </p>

          {/* Editorial Intro — Restrained Hairline Left Rule */}
          <div className="pl-5 sm:pl-6 border-l border-blue-400/80 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {article.editorialIntro}
          </div>
        </div>
      </header>

      {/* Main Essay Body Container */}
      <main className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* SECTION 1: THE QUESTION */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-blue-400" />
              <span>01 // THE QUESTION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-[1.15]">
              {article.question.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {article.question.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* SECTION 2: THE REALITY */}
          <section className="space-y-4 pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-blue-400" />
              <span>02 // THE REALITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-[1.15]">
              {article.reality.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {article.reality.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Quiet Editorial Callout List — No Chunky Rounded Cards */}
            {article.reality.callouts && (
              <div className="mt-8 border-l border-white/20 pl-4 sm:pl-6 space-y-3.5">
                <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
                  OPERATIONAL FRICTION MANIFESTATIONS
                </div>
                {article.reality.callouts.map((c, i) => (
                  <div
                    key={i}
                    className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400/80 mt-1.5 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* SECTION 3: THE ARGUMENT (WITH PURPOSEFUL ARCHITECTURAL DIAGRAM) */}
          <section className="space-y-4 pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-blue-400" />
              <span>03 // THE ARGUMENT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-[1.15]">
              {article.argument.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {article.argument.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Purposeful Architectural Diagram */}
            {article.argument.diagramType && (
              <div className="mt-8">
                <InsightsDiagram type={article.argument.diagramType} />
              </div>
            )}
          </section>

          {/* SECTION 4: THE IMPLICATION */}
          <section className="space-y-4 pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-blue-400" />
              <span>04 // THE IMPLICATION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-[1.15]">
              {article.implication.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {article.implication.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Open Editorial Takeaways — Hairline Separators, No Rounded Box */}
            {article.implication.keyTakeaways && (
              <div className="mt-8 pt-6 pb-6 border-t border-b border-white/[0.08] space-y-4">
                <div className="font-mono text-xs text-blue-400 font-medium uppercase tracking-widest">
                  EXECUTIVE TAKEAWAYS
                </div>
                <div className="space-y-3">
                  {article.implication.keyTakeaways.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* SECTION 5: THE QUESTIONS TO ASK */}
          <section className="space-y-4 pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-medium tracking-widest uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>05 // THE QUESTIONS TO ASK</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-[1.15]">
              {article.questionsToAsk.title}
            </h2>

            <p className="text-sm text-slate-400 font-normal">
              Practical diagnostics for executive committees, COOs, and technology leaders:
            </p>

            {/* Open Numbered Diagnostic List — Hairline Borders, No Cards */}
            <div className="mt-6 divide-y divide-white/[0.06] border-t border-b border-white/[0.06]">
              {article.questionsToAsk.questions.map((q, i) => (
                <div key={i} className="py-4 sm:py-5 flex items-start gap-4">
                  <span className="font-mono text-xs text-blue-400 font-medium mt-0.5 tracking-wider">
                    0{i + 1}
                  </span>
                  <span className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: CLOSING THOUGHT */}
          <section className="pt-12 border-t border-white/[0.08]">
            <div className="py-8 text-center max-w-2xl mx-auto space-y-4">
              <div className="font-mono text-xs text-blue-400 font-medium tracking-widest uppercase">
                {article.closingThought.title}
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-[-0.03em] leading-snug">
                “{article.closingThought.principle}”
              </blockquote>

              {article.closingThought.context && (
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  {article.closingThought.context}
                </p>
              )}
            </div>
          </section>

          {/* SECTION 7: BUSINESS INTELLIGENCE ASSESSMENT™ CTA */}
          <section className="pt-12 border-t border-white/[0.08]">
            <div className="py-8 sm:py-10 border-t border-b border-white/[0.08]">
              <div className="max-w-2xl">
                <div className="font-mono text-xs text-blue-400 font-medium tracking-widest uppercase mb-2">
                  NEXT STRATEGIC STEP
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] mb-3">
                  Start with the business. Then determine what to build.
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                  Understand how the organisation works, identify where AI may create genuine operational leverage, and establish what should be built — if anything.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#080A10] font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md group"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all cursor-pointer"
                  >
                    Book a Consultation →
                  </button>

                  <Link
                    to="/insights"
                    className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-medium transition-all"
                  >
                    View All Insights
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* PREVIOUS & NEXT ARTICLE NAVIGATION */}
          <nav aria-label="Article navigation" className="pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevArticle ? (
              <Link
                to={`/insights/${prevArticle.slug}`}
                className="py-4 border-b sm:border-b-0 sm:border-r border-white/[0.06] pr-4 text-left group block"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-1.5">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  <span>PREVIOUS PERSPECTIVE</span>
                </div>
                <div className="text-sm text-slate-200 group-hover:text-blue-300 font-normal transition-colors line-clamp-2">
                  {prevArticle.title}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextArticle && (
              <Link
                to={`/insights/${nextArticle.slug}`}
                className="py-4 text-right group block sm:col-start-2"
              >
                <div className="flex items-center justify-end gap-1.5 text-[11px] font-mono text-slate-400 mb-1.5">
                  <span>NEXT PERSPECTIVE</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm text-slate-200 group-hover:text-blue-300 font-normal transition-colors line-clamp-2">
                  {nextArticle.title}
                </div>
              </Link>
            )}
          </nav>
        </div>
      </main>
    </article>
  );
};
