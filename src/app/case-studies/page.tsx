"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import {
  Sparkles,
  Star,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";
import { TESTIMONIALS, SITE_METADATA } from "@/data/siteData";

export default function CaseStudiesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Verified Case Studies
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Healthcare Client Case Studies
          </h1>
          <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover how doctors, clinics, and nutritionists scaled from inconsistent patient walk-ins to predictable, high-intent daily inquiries.
          </p>
        </div>
      </section>

      {/* Case Studies Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {TESTIMONIALS.map((cs, idx) => (
            <div
              key={cs.id}
              className="moving-border-card rounded-3xl p-[2px] shadow-xl shadow-sky-950/10"
            >
              <div className="rounded-[22px] card-beautiful p-8 sm:p-12 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-sky-800 bg-sky-100 border border-sky-300 px-3.5 py-1 rounded-full uppercase">
                        Case Study 0{idx + 1}
                      </span>
                      <div className="flex">
                        {[...Array(cs.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {cs.name} • {cs.practice}
                    </h2>

                    <div className="text-sm font-bold text-sky-700">
                      {cs.role} | {cs.location}
                    </div>

                    <blockquote className="text-base sm:text-lg text-slate-800 italic font-normal leading-relaxed border-l-4 border-orange-500 pl-4 py-1">
                      "{cs.quote}"
                    </blockquote>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white text-slate-800 border border-sky-200 font-semibold shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="lg:col-span-4 rounded-2xl bg-white/95 border-2 border-orange-200/90 p-8 text-center shadow-md">
                    <div className="text-xs text-slate-600 uppercase tracking-wider mb-2 font-bold flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                      Core Milestone Achieved
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono mb-2 tracking-tight flex items-center justify-center gap-1">
                      <TrendingUp className="w-6 h-6 text-orange-500" />
                      <span className="text-gradient-sky">{cs.metric}</span>
                    </div>
                    <div className="text-xs text-orange-600 font-bold mb-6 uppercase tracking-wider">
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
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all w-full justify-center cursor-pointer"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      Replicate This Growth
                    </a>
                  </div>
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
