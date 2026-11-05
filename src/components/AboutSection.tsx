"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Building2,
  Salad,
  Flame,
  Sparkles,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { ABOUT_US_SECTION, SITE_METADATA } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Building2,
  Salad,
  Flame,
  Sparkles,
};

interface AboutSectionProps {
  onOpenBookingModal?: () => void;
}

export default function AboutSection({ onOpenBookingModal }: AboutSectionProps) {
  return (
    <section id="about-us" className="relative py-24 bg-gradient-to-b from-[#e6eff9] via-[#f0f6fc] to-[#e4eefb] border-t border-sky-200/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main About Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/10">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              {ABOUT_US_SECTION.h2}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {ABOUT_US_SECTION.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white font-bold text-sm shadow-lg shadow-sky-600/30 hover:shadow-sky-600/50 hover:-translate-y-0.5 transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                Schedule a Practice Consultation
              </a>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-colors shadow-md"
              >
                Read Full Story <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>
          </div>

          {/* Right Visual Image & Stats Card with Moving Border */}
          <div className="lg:col-span-5 relative">
            <div className="moving-border-card shadow-2xl shadow-sky-950/15">
              <div className="moving-border-inner relative rounded-[23px] overflow-hidden border border-sky-300 bg-white">
                <Image
                  src="/Dedicated-team.jpg"
                  alt="Team With Someone Dedicated Healthcare Team"
                  width={600}
                  height={400}
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-900/95 border border-sky-500/40 backdrop-blur-md shadow-xl text-white">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {ABOUT_US_SECTION.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-xl sm:text-2xl font-black text-sky-400 font-mono">{s.value}</div>
                        <div className="text-xs text-slate-300 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Specialize In */}
        <div className="pt-12 border-t border-sky-200/80">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Domain Expertise
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
              Industries We Specialize In
            </h3>
            <p className="text-sm sm:text-base text-slate-700 font-normal">
              As a digital marketing agency for healthcare, Team With Someone works with professionals across the healthcare and wellness industry. We understand that doctors, clinics, dietitians, and wellness businesses have different audiences and marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_SECTION.industriesWeSpecializeIn.map((ind) => {
              const Icon = iconMap[ind.iconName] || Stethoscope;
              return (
                <div
                  key={ind.title}
                  className="rounded-3xl card-black-shine p-7 backdrop-blur-xl hover:shadow-xl hover:shadow-sky-500/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-sky-400 shadow-sm">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                        {ind.subtitle}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                      {ind.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sky-200/80">
                    <div className="flex flex-wrap gap-1.5">
                      {ind.solutions.map((sol, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-300 font-semibold shadow-xs"
                        >
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
