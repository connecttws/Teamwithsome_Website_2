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
    <section id="about-us" className="relative py-24 bg-gradient-to-b from-white via-sky-50/40 to-white border-t border-sky-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main About Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              {ABOUT_US_SECTION.h2}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                Schedule a Practice Consultation
              </a>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-sky-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-colors shadow-xs"
              >
                Read Full Story <ArrowRight className="w-4 h-4 text-sky-600" />
              </Link>
            </div>
          </div>

          {/* Right Visual Image & Stats Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-sky-200 shadow-xl bg-white">
              <Image
                src="/Dedicated-team.jpg"
                alt="Team With Someone Dedicated Healthcare Team"
                width={600}
                height={400}
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-sky-100 backdrop-blur-md shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {ABOUT_US_SECTION.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-xl sm:text-2xl font-black text-sky-600 font-mono">{s.value}</div>
                      <div className="text-xs text-slate-600 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Specialize In in Light Theme */}
        <div className="pt-12 border-t border-sky-100">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Domain Expertise
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
              Industries We Specialize In
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              As a digital marketing agency for healthcare, Team With Someone works with professionals across the healthcare and wellness industry. We understand that doctors, clinics, dietitians, and wellness businesses have different audiences and marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_SECTION.industriesWeSpecializeIn.map((ind) => {
              const Icon = iconMap[ind.iconName] || Stethoscope;
              return (
                <div
                  key={ind.title}
                  className="rounded-3xl bg-white border border-sky-100 p-7 backdrop-blur-xl hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200">
                        <Icon className="w-5 h-5 text-sky-600" />
                      </div>
                      <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                        {ind.subtitle}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                      {ind.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sky-100">
                    <div className="flex flex-wrap gap-1.5">
                      {ind.solutions.map((sol, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800 font-medium"
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
