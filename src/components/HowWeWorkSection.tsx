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
    <section id="how-we-work" className="relative py-24 bg-gradient-to-b from-[#e4eefb] via-[#f1f6fc] to-[#e8f2fc] border-t border-sky-200/80 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/10">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Predictable Healthcare Scaling
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How Do We Work?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Our process makes healthcare digital marketing simple, strategic, and results-focused. At Team With Someone, we understand your business goals, develop customized advertising strategies, and manage campaigns to help doctors, dietitians, and nutritionists generate relevant enquiries and grow their practice.
          </p>
        </div>

        {/* 6 Step Process Grid with Moving Border Beam on Step 01 and 04 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_WE_WORK.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Rocket;
            const hasMovingBorder = idx === 0 || idx === 3;

            const cardContent = (
              <div className="flex flex-col justify-between h-full rounded-[23px] bg-gradient-to-b from-white via-[#f0f7ff] to-[#e4eefb] p-8 border border-slate-900/10 shadow-lg shadow-sky-950/5">
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-sky-300 group-hover:text-sky-500 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-sky-400 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 mb-2">
                    {item.number}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable */}
                <div className="pt-4 border-t border-sky-200/80 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
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
                className="group relative rounded-3xl card-black-shine hover:shadow-xl hover:shadow-sky-500/15 hover:-translate-y-1 transition-all duration-300"
              >
                {cardContent}
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white font-bold text-base shadow-xl shadow-sky-600/30 hover:shadow-sky-600/50 hover:-translate-y-0.5 transition-all"
          >
            <span>Start Step 1: Schedule Your Practice Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
