"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import { Sparkles, Clock, ArrowRight, BookOpen } from "lucide-react";

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
    <main className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] text-slate-900 flex flex-col">
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] overflow-hidden border-b border-sky-200/80">
        {/* Top Ambient Shade: Sky Blue, Warm Yellow, and Soft Orange Only */}
        <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-20 left-[10%] w-[380px] h-[240px] bg-sky-400/20 rounded-full blur-3xl" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[220px] bg-amber-300/20 rounded-full blur-3xl" />
          <div className="absolute -top-16 right-[10%] w-[360px] h-[240px] bg-orange-400/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/15">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Healthcare Marketing Insights
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Guides, Case Studies &amp; Strategy
          </h1>
          <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Actionable performance marketing knowledge written specifically for healthcare practitioners, clinics, dietitians, and wellness brands.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl card-beautiful p-8 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-sky-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{post.date}</span>
                  <span className="font-bold text-sky-700 group-hover:text-orange-600 flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
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
