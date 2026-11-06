"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Award,
  CheckCircle2,
} from "lucide-react";
import { HERO_CONTENT, SITE_METADATA } from "@/data/siteData";

interface HeroSectionProps {
  onOpenBookingModal?: () => void;
}

export default function HeroSection({ onOpenBookingModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] bg-sky-grid-pattern pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-sky-200/80">
      {/* Top Ambient Shade: Orange, Yellow, Sky Blue Only */}
      <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden pointer-events-none z-0">
        {/* Sky Blue Ambient Shade */}
        <div className="absolute -top-24 left-[10%] w-[420px] h-[280px] bg-sky-400/25 rounded-full blur-3xl" />
        {/* Warm Yellow Ambient Shade */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[380px] h-[260px] bg-amber-300/25 rounded-full blur-3xl" />
        {/* Soft Orange Ambient Shade */}
        <div className="absolute -top-20 right-[10%] w-[400px] h-[280px] bg-orange-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Badge with Moving Border Line */}
          <div className="inline-block relative p-[1.5px] rounded-full overflow-hidden mb-6 shadow-md shadow-sky-950/15">
            <div className="spin-conic-border-blue opacity-95" />
            <div className="relative flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-bold tracking-wide uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-400"></span>
              </span>
              <span className="text-sky-300">{HERO_CONTENT.eyebrow}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </div>
          </div>

          {/* H1 Title - SEO Optimized & Clear Meaning */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight sm:leading-none mb-6">
            <span className="block">{HERO_CONTENT.h1}</span>
            <span className="block mt-2 text-2xl sm:text-4xl lg:text-5xl text-gradient-sky">
              Engineered for Doctors, Dietitians &amp; Clinics
            </span>
          </h1>

          {/* Lead Paragraph 1 - Clear, High-Impact & Concise */}
          <p className="text-base sm:text-xl text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium mb-4">
            {HERO_CONTENT.leadParagraph1}
          </p>

          {/* Lead Paragraph 2 */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {HERO_CONTENT.leadParagraph2}
          </p>

          {/* 3 Conic Spinning Gradient Trust Badges with Beautiful Glass Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full">
            {HERO_CONTENT.trustPoints.map((point) => (
              <div
                key={point}
                className="relative flex w-full sm:w-auto overflow-hidden rounded-full p-[1.5px] shadow-sm shadow-sky-900/10"
              >
                <div className="spin-conic-border-blue opacity-90" />
                <div className="relative flex items-center justify-center gap-2.5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-center text-xs sm:text-sm font-bold text-slate-900 w-full hover:text-sky-700 transition-colors border border-sky-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{point}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <a
              href={SITE_METADATA.bookingCalendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onOpenBookingModal) {
                  e.preventDefault();
                  onOpenBookingModal();
                }
              }}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-sky-600/30 transition-all hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 text-white" />
              <span>Schedule a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/contact-us"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 text-base font-bold shadow-lg shadow-slate-900/20 backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get in Touch</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Trust Guarantees with Orange, Yellow, Sky Blue Accents */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-800 font-bold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>100% Medical Ad Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-sky-600" />
              <span>Dedicated Healthcare Strategist</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Zero Lock-in Contracts</span>
            </div>
          </div>
        </div>

        {/* Live Agency Performance Metrics Bar with Moving Border Beam & Beautiful Card */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="moving-border-card shadow-2xl shadow-sky-950/10">
            <div className="moving-border-inner card-beautiful p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-sky-200">
                {HERO_CONTENT.keyMetrics.map((metric, idx) => (
                  <div key={metric.label} className={idx > 0 ? "pt-4 md:pt-0" : ""}>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-mono flex items-center justify-center gap-1">
                      <span className="text-gradient-sky">{metric.value}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 mt-1 font-bold">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
