"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import {
  TrendingUp,
  Share2,
  Video,
  MapPin,
  Search,
  Headphones,
  CheckCircle,
  Sparkles,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { CORE_SERVICES, SITE_METADATA } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Share2,
  Video,
  MapPin,
  Search,
  Headphones,
};

export default function ServicesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eaf2fb] via-[#e4eef9] to-[#edf5fc] text-slate-900 flex flex-col">
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#eaf2fb] via-[#e2eefb] to-[#edf5fc] overflow-hidden border-b border-sky-200/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Healthcare Performance Portfolio
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Healthcare Digital Marketing Services
          </h1>
          <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            Engineered exclusively for doctors, medical practices, dietitians, and wellness clinics. We replace guesswork with predictable patient inquiry funnels.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {CORE_SERVICES.map((srv) => (
              <a
                key={srv.id}
                href={`#${srv.slug}`}
                className="px-4 py-2 rounded-full bg-white/95 border-2 border-sky-200 text-xs font-bold text-slate-800 hover:text-sky-700 hover:border-sky-500 shadow-sm transition-all"
              >
                {srv.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName] || TrendingUp;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="moving-border-card rounded-3xl p-[2px] shadow-xl shadow-sky-950/10"
              >
                <div className="rounded-[22px] bg-gradient-to-br from-white via-[#f4f8fe] to-[#e6f0fa] p-8 sm:p-12 relative overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-2xl bg-slate-900 text-cyan-300 shadow-md">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300">
                          {service.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                        {service.h3Title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold mb-3">
                        {service.shortDesc}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        {service.description}
                      </p>

                      <div className="border-t border-sky-200/80 pt-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                          What's Included:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {service.whatsIncluded.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={SITE_METADATA.bookingCalendlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsBookingModalOpen(true);
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-blue-500 transition-all cursor-pointer"
                        >
                          <CalendarCheck className="w-4 h-4" />
                          Book Strategy for {service.title}
                        </a>
                      </div>
                    </div>

                    {/* Dark Highlights Card for Contrast */}
                    <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="rounded-2xl bg-gradient-to-br from-[#0c142b] via-[#091024] to-[#050814] text-white border border-sky-400/30 p-6 sm:p-8 space-y-6 shadow-xl shadow-sky-950/30">
                        <div>
                          <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            Specialized Practice Deliverables
                          </div>
                          <ul className="space-y-2.5">
                            {service.keyHighlights.map((hl, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-slate-800 pt-4">
                          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                            Ideal Healthcare Practice Types:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {service.idealFor.map((item, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800/80 border border-sky-500/30 text-cyan-200 font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA with Moving Border */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="moving-border-card rounded-3xl p-[2px] shadow-2xl">
            <div className="rounded-[22px] bg-gradient-to-br from-[#0c142b] via-[#091024] to-[#050814] text-white p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
                  Ready to Build a High-Intent Patient Funnel?
                </h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto font-normal text-sm sm:text-base">
                  Book a complimentary 30-minute healthcare marketing strategy session with our senior campaign strategists.
                </p>
                <a
                  href={SITE_METADATA.bookingCalendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black shadow-xl shadow-sky-500/30 transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Schedule Your Practice Strategy Session</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModalAndSection
        isModal={true}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
