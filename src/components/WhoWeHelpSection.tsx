"use client";

import React from "react";
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
    <section id="who-we-help" className="relative py-24 bg-gradient-to-b from-[#eaf2fb] via-[#f4f9ff] to-[#e6eff9] border-t border-sky-200/80 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/10">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Healthcare Niches
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            WHO WE HELP
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            We provide specialized digital marketing services for healthcare professionals who want to expand their reach, attract relevant enquiries, and grow their practice.
          </p>
        </div>

        {/* 3-Card Grid with Shaded Blue & Black Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WHO_WE_HELP.map((niche, idx) => {
            const NicheIcon = iconMap[niche.iconName] || Stethoscope;
            const hasMovingBorder = idx === 0;

            const cardContent = (
              <div className="flex flex-col justify-between h-full rounded-[23px] bg-gradient-to-b from-white via-[#f0f7ff] to-[#e4eefb] p-8 border border-slate-900/10 shadow-lg shadow-sky-950/5">
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-sky-400 shadow-sm group-hover:scale-110 transition-transform">
                      <NicheIcon className="w-6 h-6 text-sky-400" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-300">
                      {niche.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-sky-600 transition-colors">
                    {niche.title}
                  </h3>
                  <div className="text-xs text-sky-700 font-bold mb-4">
                    {niche.subtitle}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6">
                    {niche.description}
                  </p>

                  {/* Our Marketing Solutions */}
                  <div className="border-t border-sky-200/80 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-sky-600" />
                      Our Marketing Solutions:
                    </div>
                    <ul className="space-y-2">
                      {niche.marketingSolutions.map((sol, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practice Growth Benefits with Dark Contrast Container */}
                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white mb-6 shadow-md">
                    <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-2">
                      Key Practice Impact
                    </div>
                    <ul className="space-y-1.5">
                      {niche.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-sky-400 font-bold">•</span>
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
                    className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/10 transition-all group/btn"
                  >
                    <span>Grow Your {niche.title.split(" ")[0]} Practice</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-sky-300" />
                  </a>
                </div>
              </div>
            );

            return hasMovingBorder ? (
              <div
                key={niche.id}
                className="moving-border-card group shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="moving-border-inner h-full">{cardContent}</div>
              </div>
            ) : (
              <div
                key={niche.id}
                className="group relative rounded-3xl card-black-shine hover:shadow-xl hover:shadow-sky-500/15 hover:-translate-y-1 transition-all duration-300"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
