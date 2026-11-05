"use client";

import React from "react";
import {
  Stethoscope,
  Target,
  Filter,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { WHY_CHOOSE_TWS } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Target,
  Filter,
  BarChart3,
  ShieldCheck,
};

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative py-24 bg-gradient-to-b from-[#0b1329] via-[#091024] to-[#080d1e] bg-dark-grid-pattern border-t border-sky-900/60 overflow-hidden text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-sky-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Blue & Black Contrast */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-lg shadow-sky-950/40">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            The TWS Healthcare Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            WHY CHOOSE TWS
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Healthcare professionals need marketing strategies that understand their industry, audience, and services. At Team With Someone, we create focused marketing campaigns that help doctors, dietitians, and nutritionists reach potential patients and clients, generate relevant enquiries, and grow their practice.
          </p>
        </div>

        {/* 5 Pillars Layout in Rich Shaded Black & Blue */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_TWS.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Stethoscope;
            const hasMovingBorder = idx === 0; // Feature pillar 01 with dynamic moving border

            const pillarInner = (
              <div className="flex flex-col justify-between h-full rounded-[23px] bg-gradient-to-br from-[#122045] via-[#0d162e] to-[#070b18] p-8 border border-sky-500/25 shadow-xl shadow-sky-950/40">
                {/* Top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-sky-400 group-hover:text-sky-300 transition-colors font-mono">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 shadow-xs">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 group-hover:scale-110 group-hover:border-sky-400 transition-all shadow-xs">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Metrics footer */}
                <div className="pt-4 border-t border-sky-900/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{pillar.metrics}</span>
                </div>
              </div>
            );

            return hasMovingBorder ? (
              <div
                key={pillar.number}
                className="moving-border-card group shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="moving-border-inner h-full">{pillarInner}</div>
              </div>
            ) : (
              <div
                key={pillar.number}
                className={`group relative rounded-3xl card-dark-shade hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {pillarInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
