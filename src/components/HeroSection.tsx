"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  TrendingUp,
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
    <section className="relative overflow-hidden bg-white bg-sky-grid-pattern pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background Decor Inspired by Meenakshi Landing Page with Crisp Sky-Blue & White Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Center Ambient Sky Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-b from-sky-200/50 via-sky-100/25 to-transparent rounded-full blur-3xl opacity-80" />

        {/* Top Left Green Gradient Sphere */}
        <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] bg-gradient-to-br from-emerald-100/60 via-transparent to-transparent rounded-full blur-3xl opacity-75" />

        {/* Top Right Orange/Amber Gradient Sphere */}
        <div className="absolute top-20 right-[-5%] w-[450px] h-[450px] bg-gradient-to-bl from-sky-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl opacity-75" />

        {/* Floating Abstract Shapes */}
        <div className="hidden lg:block absolute top-36 left-[8%] w-24 h-24 rounded-3xl border-2 border-sky-400/20 bg-sky-50/60 backdrop-blur-sm animate-[bounce_8s_infinite] shadow-sm rotate-6" />
        <div className="hidden lg:block absolute bottom-28 right-[8%] w-28 h-28 rounded-full border-2 border-emerald-400/20 bg-emerald-50/50 backdrop-blur-sm animate-[pulse_6s_infinite] shadow-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xs backdrop-blur-md mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-600"></span>
            </span>
            <span>{HERO_CONTENT.eyebrow}</span>
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-none mb-6">
            <span className="block">{HERO_CONTENT.h1}</span>
            <span className="block mt-2 text-2xl sm:text-4xl lg:text-5xl text-gradient-sky">
              Engineered for Doctors, Dietitians &amp; Clinics
            </span>
          </h1>

          {/* Lead Paragraph 1 */}
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal mb-4">
            {HERO_CONTENT.leadParagraph1}
          </p>

          {/* Lead Paragraph 2 */}
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            {HERO_CONTENT.leadParagraph2}
          </p>

          {/* 3 Conic Spinning Gradient Trust Badges (Inspired by Meenakshi Landing Page with White Backing) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full">
            {HERO_CONTENT.trustPoints.map((point) => (
              <div
                key={point}
                className="relative flex w-full sm:w-auto overflow-hidden rounded-full p-[1.5px] shadow-sm"
              >
                <div className="spin-conic-border-light opacity-80" />
                <div className="relative flex items-center justify-center gap-2 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-center text-xs sm:text-sm font-semibold text-slate-800 w-full hover:text-sky-600 transition-colors border border-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
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
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-5 h-5 text-white" />
              <span>Schedule a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/contact-us"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 px-8 py-4 text-base font-semibold text-slate-700 hover:text-sky-700 shadow-xs backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <Sparkles className="w-4 h-4 text-sky-500" />
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
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

        {/* Live Agency Performance Metrics Bar in Sky Blue & White */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border border-sky-100 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-sky-900/5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-sky-100">
              {HERO_CONTENT.keyMetrics.map((metric, idx) => (
                <div key={metric.label} className={idx > 0 ? "pt-4 md:pt-0" : ""}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient-sky font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
