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
    <section id="how-we-work" className="relative py-24 bg-white border-t border-sky-100 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Predictable Healthcare Scaling
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How Do We Work?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our process makes healthcare digital marketing simple, strategic, and results-focused. At Team With Someone, we understand your business goals, develop customized advertising strategies, and manage campaigns to help doctors, dietitians, and nutritionists generate relevant enquiries and grow their practice.
          </p>
        </div>

        {/* 6 Step Process Grid in Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_WE_WORK.map((item) => {
            const Icon = iconMap[item.iconName] || Rocket;
            return (
              <div
                key={item.step}
                className="group relative rounded-3xl bg-white border border-sky-100 p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-sky-100 group-hover:text-sky-400 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 mb-2">
                    {item.number}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable */}
                <div className="pt-4 border-t border-sky-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Start Step 1: Schedule Your Practice Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
