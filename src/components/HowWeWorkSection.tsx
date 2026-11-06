"use client";

import React from "react";
import {
  Compass,
  Lightbulb,
  Palette,
  Rocket,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { HOW_WE_WORK, SITE_METADATA } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Lightbulb,
  Palette,
  Rocket,
  TrendingUp,
  Award,
};

interface HowWeWorkSectionProps {
  onOpenBookingModal?: () => void;
}

export default function HowWeWorkSection({ onOpenBookingModal }: HowWeWorkSectionProps) {
  return (
    <section id="how-we-work" className="relative py-24 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] border-t border-sky-200/80 overflow-hidden text-slate-900">
      {/* Top Ambient Shade: Sky Blue, Warm Yellow, and Soft Orange Only */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 left-[10%] w-[380px] h-[240px] bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[220px] bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 right-[10%] w-[360px] h-[240px] bg-orange-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Predictable Healthcare Scaling
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            How Do We Work?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Our structured 6-step marketing process makes healthcare digital marketing simple, predictable, and results-focused.
          </p>
        </div>

        {/* 6 Step Process Grid with Beautiful Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_WE_WORK.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Rocket;
            const hasMovingBorder = idx === 0 || idx === 3;

            const cardContent = (
              <div className="flex flex-col justify-between h-full rounded-[23px] card-beautiful p-8">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-sky-500/80 font-mono">
                      {item.step}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 shadow-xs">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-800 mb-2">
                    {item.number}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable */}
                <div className="pt-4 border-t border-sky-200/80 flex items-center gap-2 text-xs font-bold text-orange-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-orange-500" />
                  <span>{item.deliverable}</span>
                </div>
              </div>
            );

            return hasMovingBorder ? (
              <div
                key={item.step}
                className="moving-border-card group shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="moving-border-inner h-full">{cardContent}</div>
              </div>
            ) : (
              <div
                key={item.step}
                className="group relative rounded-3xl transition-all duration-300 hover:-translate-y-1"
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Step-by-Step Bottom Action */}
        <div className="mt-14 text-center">
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-white font-bold text-sm shadow-xl shadow-sky-600/25 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Start Step 01 With Our Strategists</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
