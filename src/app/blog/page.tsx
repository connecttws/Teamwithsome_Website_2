"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const posts = [
    {
      id: "patient-positioning",
      title: "Understanding Patient Needs & Practice Positioning in 2026",
      summary:
        "Learn the strategic approach for doctors to identify patient anxieties, communicate medical expertise empathetically, and position their private practice as the premier regional choice.",
      category: "Practice Strategy",
      date: "Nov 02, 2026",
      readTime: "6 min read",
    },
    {
      id: "local-seo-gmb",
      title: "Local SEO & Google Business Profile: The Clinic Walk-in Game Changer",
      summary:
        "Discover how optimizing your Google My Business listing, generating authentic patient reviews, and geo-targeting local search rankings can create a continuous flow of local clinic walk-ins.",
      category: "Local SEO",
      date: "Oct 28, 2026",
      readTime: "8 min read",
    },
    {
      id: "seo-for-doctors",
      title: "SEO for Doctors: Building Long-Term Digital Practice Equity",
      summary:
        "Understand the mechanics of healthcare SEO: ranking for high-intent medical condition searches, medical content compliance (E-E-A-T), and building digital practice assets that drive appointments.",
      category: "Healthcare SEO",
      date: "Oct 22, 2026",
      readTime: "7 min read",
    },
    {
      id: "meta-ads-compliance",
      title: "Meta Ads for Doctors & Dietitians: Avoiding Ad Rejections & Scaling Inquiries",
      summary:
        "Meta enforces strict healthcare advertising guidelines. Here is the exact blueprint we use to navigate medical ad policy, craft compliant video hooks, and keep CPL low.",
      category: "Paid Advertising",
      date: "Oct 15, 2026",
      readTime: "9 min read",
    },
    {
      id: "high-ticket-consultation-closing",
      title: "Sales Mentorship: How Clinic Teams Turn 50% More Inquiries into Show-ups",
      summary:
        "Why most clinic front desks fail with digital leads, and the structured consultation scripts that overcome patient price objections and build trust over WhatsApp and phone.",
      category: "Sales Mentorship",
      date: "Oct 10, 2026",
      readTime: "5 min read",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-sky-50/60 to-white overflow-hidden border-b border-sky-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            Healthcare Marketing Insights
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Guides, Case Studies &amp; Strategy
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Actionable performance marketing knowledge written specifically for healthcare practitioners, clinics, dietitians, and wellness brands.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl bg-white border border-sky-100 p-7 hover:border-sky-300 hover:shadow-xl transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors tracking-tight leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    {post.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsBookingModalOpen(true)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    <span>Discuss Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ContactModalAndSection
        isModal={true}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
