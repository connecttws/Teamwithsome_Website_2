"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import {
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { TESTIMONIALS, SITE_METADATA } from "@/data/siteData";

export default function CaseStudiesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-sky-50/60 to-white overflow-hidden border-b border-sky-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Verified Case Studies
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Healthcare Client Case Studies
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Discover how doctors, clinics, and nutritionists scaled from inconsistent patient walk-ins to predictable, high-intent daily inquiries.
          </p>
        </div>
      </section>

      {/* Case Studies Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {TESTIMONIALS.map((cs, idx) => (
            <div
              key={cs.id}
              className="rounded-3xl bg-white border border-sky-100 p-8 sm:p-12 shadow-sm relative overflow-hidden group hover:border-sky-300 hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full uppercase">
                      Case Study 0{idx + 1}
                    </span>
                    <div className="flex">
                      {[...Array(cs.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {cs.name} • {cs.practice}
                  </h2>

                  <div className="text-sm font-bold text-sky-700">
                    {cs.role} | {cs.location}
                  </div>

                  <blockquote className="text-base sm:text-lg text-slate-700 italic font-normal leading-relaxed border-l-2 border-sky-500 pl-4 py-1">
                    "{cs.quote}"
                  </blockquote>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-sky-50 text-slate-700 border border-sky-200 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-sky-50 to-blue-50/60 border border-sky-200 p-6 text-center shadow-xs">
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-2 font-bold">
                    Core Milestone Achieved
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-sky-600 font-mono mb-1">
                    {cs.metric}
                  </div>
                  <div className="text-xs text-emerald-700 font-bold mb-6">
                    {cs.metricLabel}
                  </div>

                  <a
                    href={SITE_METADATA.bookingCalendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsBookingModalOpen(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/20"
                  >
                    <span>Replicate These Results</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
