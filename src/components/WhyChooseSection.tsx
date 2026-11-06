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
    <section id="why-choose" className="relative py-24 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] border-t border-sky-200/80 overflow-hidden text-slate-900">
      {/* Top Ambient Shade: Sky Blue, Warm Yellow, and Soft Orange Only */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 left-[10%] w-[380px] h-[240px] bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[220px] bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 right-[10%] w-[360px] h-[240px] bg-orange-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Clear & SEO Meaningful */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            The TWS Healthcare Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-5">
            WHY CHOOSE TWS
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Healthcare professionals need marketing strategies tailored to their clinical niche and patient psychology. At Team With Someone, we engineer focused campaigns that deliver high-intent enquiries and scalable practice growth.
          </p>
        </div>

        {/* 5 Pillars Layout in Beautiful Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_TWS.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Stethoscope;
            const hasMovingBorder = idx === 0;

            const pillarInner = (
              <div className="flex flex-col justify-between h-full rounded-[23px] card-beautiful p-8">
                {/* Top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-sky-600 font-mono">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-sky-300 border border-slate-800 shadow-xs">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 shadow-xs">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Metrics footer */}
                <div className="pt-4 border-t border-sky-200/80 flex items-center gap-2 text-xs font-bold text-orange-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-orange-500" />
                  <span>{pillar.metrics}</span>
                </div>
              </div>
            );

            return hasMovingBorder ? (
              <div
                key={pillar.number}
                className="moving-border-card group shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="moving-border-inner h-full">{pillarInner}</div>
              </div>
            ) : (
              <div
                key={pillar.number}
                className={`group relative rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
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
