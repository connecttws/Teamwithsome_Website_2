"use client";

import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Apple,
  HeartPulse,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { WHO_WE_HELP, SITE_METADATA } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Apple,
  HeartPulse,
};

interface WhoWeHelpSectionProps {
  onOpenBookingModal?: () => void;
}

export default function WhoWeHelpSection({ onOpenBookingModal }: WhoWeHelpSectionProps) {
  return (
    <section id="who-we-help" className="relative py-24 bg-white border-t border-sky-100 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Healthcare Niches
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            WHO WE HELP
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We provide specialized digital marketing services for healthcare professionals who want to expand their reach, attract relevant enquiries, and grow their practice.
          </p>
        </div>

        {/* 3-Card Grid in White & Sky Blue */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WHO_WE_HELP.map((niche) => {
            const NicheIcon = iconMap[niche.iconName] || Stethoscope;
            return (
              <div
                key={niche.id}
                className="group relative rounded-3xl bg-white border border-sky-100 p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 group-hover:scale-110 transition-transform">
                      <NicheIcon className="w-6 h-6 text-sky-600" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800">
                      {niche.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-sky-600 transition-colors">
                    {niche.title}
                  </h3>
                  <div className="text-xs text-sky-700 font-semibold mb-4">
                    {niche.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {niche.description}
                  </p>

                  {/* Our Marketing Solutions */}
                  <div className="border-t border-sky-100 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-sky-600" />
                      Our Marketing Solutions:
                    </div>
                    <ul className="space-y-2">
                      {niche.marketingSolutions.map((sol, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practice Growth Benefits */}
                  <div className="bg-sky-50/60 rounded-2xl p-4 border border-sky-100 mb-6">
                    <div className="text-[11px] font-bold text-sky-900 uppercase tracking-wider mb-2">
                      Key Practice Impact
                    </div>
                    <ul className="space-y-1.5">
                      {niche.benefits.map((b, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-sky-600 font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-2">
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
                    className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-sky-50/80 hover:bg-sky-100 border border-sky-200 text-xs sm:text-sm font-bold text-sky-800 hover:text-sky-900 transition-all group/btn"
                  >
                    <span>Grow Your {niche.title.split(" ")[0]} Practice</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-sky-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
