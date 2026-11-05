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
    <section id="why-choose" className="relative py-24 bg-white border-t border-sky-100 overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-sky-100/50 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            The TWS Healthcare Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            WHY CHOOSE TWS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Healthcare professionals need marketing strategies that understand their industry, audience, and services. At Team With Someone, we create focused marketing campaigns that help doctors, dietitians, and nutritionists reach potential patients and clients, generate relevant enquiries, and grow their practice.
          </p>
        </div>

        {/* 5 Pillars Layout in Light Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_TWS.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Stethoscope;

            return (
              <div
                key={pillar.number}
                className={`group relative rounded-3xl bg-sky-50/30 hover:bg-white border border-sky-100 hover:border-sky-300 p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-sky-200 group-hover:text-sky-500 transition-colors font-mono">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800 shadow-xs">
                      {pillar.tag}
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-sky-200 group-hover:scale-110 group-hover:border-sky-400 transition-all shadow-xs">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Metrics footer */}
                <div className="pt-4 border-t border-sky-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>{pillar.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
