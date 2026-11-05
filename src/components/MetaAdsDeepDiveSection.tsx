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
    <section id="meta-ads" className="relative py-24 bg-gradient-to-b from-[#080d1e] via-[#0f1d3d] to-[#eaf2fb] overflow-hidden text-slate-900">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 border border-sky-400 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/30">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Performance Meta Advertising
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            {META_ADS_SECTION.h2}
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-3">
            {META_ADS_SECTION.introParagraph1}
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {META_ADS_SECTION.introParagraph2}
          </p>
        </div>

        {/* Visual Funnel Representation with Moving Border Beam */}
        <div className="mb-20 moving-border-card shadow-2xl shadow-sky-950/40">
          <div className="moving-border-inner bg-gradient-to-br from-[#0c152e] via-[#0a1124] to-[#060a17] p-6 sm:p-10 border border-sky-500/30">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                The TWS Healthcare Conversion Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                How We Turn Cold Social Users into Booked Appointments
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              <div className="rounded-2xl bg-slate-900/80 border border-sky-500/20 p-5 text-center relative group hover:border-sky-400 transition-colors shadow-lg">
                <div className="text-xs font-mono font-bold text-sky-400 mb-1">STAGE 01</div>
                <div className="text-base font-bold text-white mb-2">Targeted Healthcare Audience</div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Hyper-filtered demographics, geographic proximity to your clinic, &amp; medical symptom intent.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/80 border border-sky-500/20 p-5 text-center relative group hover:border-sky-400 transition-colors shadow-lg">
                <div className="text-xs font-mono font-bold text-blue-400 mb-1">STAGE 02</div>
                <div className="text-base font-bold text-white mb-2">High-Authority Medical Ad</div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Educational doctor reel, verified patient case study, or problem-solving carousel.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/80 border border-sky-500/20 p-5 text-center relative group hover:border-sky-400 transition-colors shadow-lg">
                <div className="text-xs font-mono font-bold text-indigo-400 mb-1">STAGE 03</div>
                <div className="text-base font-bold text-white mb-2">Anti-Junk Qualification Form</div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Filters out casual browsers, collecting condition details, treatment budget &amp; timeline.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-emerald-950/90 to-slate-900 border border-emerald-500/50 p-5 text-center relative group shadow-xl shadow-emerald-950/40">
                <div className="text-xs font-mono font-bold text-emerald-400 mb-1">STAGE 04</div>
                <div className="text-base font-bold text-white mb-2">Verified Patient Appointment</div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  Instant WhatsApp confirmation &amp; direct calendar synchronization for your clinic team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 What We Do Cards with Shaded Blue & Black Contrast */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What We Do: Complete Meta Ads Management
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {META_ADS_SECTION.whatWeDo.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            const hasMovingBorder = idx === 0 || idx === 3;

            const cardContent = (
              <div className="flex flex-col justify-between h-full rounded-[23px] bg-gradient-to-b from-white via-[#f0f7ff] to-[#e4eefb] p-7 border border-slate-900/10 shadow-lg shadow-sky-950/5">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-slate-900 text-sky-400 border border-slate-800 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-sky-300 border border-slate-800">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );

            return hasMovingBorder ? (
              <div
                key={item.title}
                className="moving-border-card group shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="moving-border-inner h-full">{cardContent}</div>
              </div>
            ) : (
              <div
                key={item.title}
                className="group relative rounded-3xl card-black-shine hover:shadow-xl hover:shadow-sky-500/15 hover:-translate-y-1 transition-all duration-300"
              >
                {cardContent}
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white font-bold text-base shadow-xl shadow-sky-600/30 hover:shadow-sky-600/50 hover:-translate-y-0.5 transition-all"
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
