"use client";

import React from "react";
import {
  Users,
  Sparkles,
  PenTool,
  UserCheck,
  Layout,
  Activity,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { META_ADS_SECTION, SITE_METADATA } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Sparkles,
  PenTool,
  UserCheck,
  Layout,
  Activity,
};

interface MetaAdsDeepDiveSectionProps {
  onOpenBookingModal?: () => void;
}

export default function MetaAdsDeepDiveSection({
  onOpenBookingModal,
}: MetaAdsDeepDiveSectionProps) {
  return (
    <section id="meta-ads" className="relative py-24 bg-gradient-to-b from-white via-sky-50/40 to-white border-t border-sky-100 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Performance Meta Advertising
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
            {META_ADS_SECTION.h2}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-3">
            {META_ADS_SECTION.introParagraph1}
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-light">
            {META_ADS_SECTION.introParagraph2}
          </p>
        </div>

        {/* Visual Funnel Representation in Sky Blue & White */}
        <div className="mb-20 rounded-3xl bg-white border border-sky-100 p-6 sm:p-10 backdrop-blur-xl shadow-xl shadow-sky-900/5">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              The TWS Healthcare Conversion Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              How We Turn Cold Social Users into Booked Appointments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="rounded-2xl bg-sky-50/50 border border-sky-100 p-5 text-center relative group hover:border-sky-300 transition-colors">
              <div className="text-xs font-mono font-bold text-sky-700 mb-1">STAGE 01</div>
              <div className="text-base font-bold text-slate-900 mb-2">Targeted Healthcare Audience</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Hyper-filtered demographics, geographic proximity to your clinic, &amp; medical symptom intent.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50/50 border border-sky-100 p-5 text-center relative group hover:border-sky-300 transition-colors">
              <div className="text-xs font-mono font-bold text-blue-700 mb-1">STAGE 02</div>
              <div className="text-base font-bold text-slate-900 mb-2">High-Authority Medical Ad</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Educational doctor reel, verified patient case study, or problem-solving carousel.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50/50 border border-sky-100 p-5 text-center relative group hover:border-sky-300 transition-colors">
              <div className="text-xs font-mono font-bold text-indigo-700 mb-1">STAGE 03</div>
              <div className="text-base font-bold text-slate-900 mb-2">Anti-Junk Qualification Form</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Filters out casual browsers, collecting condition details, treatment budget &amp; timeline.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5 text-center relative group shadow-sm">
              <div className="text-xs font-mono font-bold text-emerald-700 mb-1">STAGE 04</div>
              <div className="text-base font-bold text-slate-900 mb-2">Verified Patient Appointment</div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Instant WhatsApp confirmation &amp; direct calendar synchronization for your clinic team.
              </p>
            </div>
          </div>
        </div>

        {/* 6 What We Do Cards */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What We Do: Complete Meta Ads Management
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {META_ADS_SECTION.whatWeDo.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-white border border-sky-100 p-7 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Launch Quality Meta Ads for Your Practice</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
