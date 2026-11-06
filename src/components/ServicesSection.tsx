"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Share2,
  Video,
  MapPin,
  Search,
  Headphones,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
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

interface ServicesSectionProps {
  onOpenBookingModal?: () => void;
}

export default function ServicesSection({ onOpenBookingModal }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "paid-advertising", label: "Meta & Google Ads" },
    { id: "local-seo", label: "Local SEO & Maps" },
    { id: "seo-services", label: "SEO Services" },
    { id: "social-media-management", label: "Social Media" },
    { id: "content-creation-video", label: "Content & Video" },
    { id: "sales-closing-mentorship", label: "Sales Mentorship" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? CORE_SERVICES
      : CORE_SERVICES.filter((s) => s.slug === activeCategory);

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] border-t border-sky-200/80 overflow-hidden">
      {/* Top Ambient Shade: Sky Blue, Warm Yellow, and Soft Orange Only */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 left-[10%] w-[380px] h-[240px] bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[220px] bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 right-[10%] w-[360px] h-[240px] bg-orange-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Clear, Meaningful & SEO-Driven */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/15">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Healthcare Performance Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Healthcare Digital Marketing Services
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Strategic digital marketing services for healthcare designed to help doctors, clinics, and nutritionists reach high-intent patients and generate qualified enquiries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 border border-sky-400"
                  : "bg-white/90 text-slate-700 hover:text-sky-600 hover:bg-white border border-sky-200/80 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Beautiful Glass Cards & Moving Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || TrendingUp;
            const hasMovingBorder = idx === 0 || idx === 1;

            const cardInner = (
              <div className="flex flex-col justify-between h-full rounded-[23px] card-beautiful p-6 sm:p-8">
                <div>
                  {/* Top Bar with Icon & Dark Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 shadow-xs">
                      <Icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-sky-300 border border-slate-800 shadow-xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title (H3) */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {service.h3Title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* What's Included */}
                  <div className="border-t border-sky-200/80 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {service.whatsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="border-t border-sky-200/80 pt-4 mt-auto">
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
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/10 transition-all group/btn cursor-pointer"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-amber-300" />
                  </a>
                </div>
              </div>
            );

            return hasMovingBorder ? (
              <div
                key={service.id}
                id={service.slug}
                className="moving-border-card group shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="moving-border-inner h-full">{cardInner}</div>
              </div>
            ) : (
              <div
                key={service.id}
                id={service.slug}
                className="group relative rounded-3xl transition-all duration-300 hover:-translate-y-1"
              >
                {cardInner}
              </div>
            );
          })}
        </div>

        {/* Global CTA Box with Beautiful Card & Moving Border */}
        <div className="mt-16 moving-border-card shadow-2xl shadow-sky-950/10">
          <div className="moving-border-inner card-beautiful p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-300">
                Custom Healthcare Strategy
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-3">
                Need a Customized Digital Marketing Plan for Your Practice?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mb-8 font-normal max-w-2xl mx-auto">
                Every healthcare specialty requires distinct compliance and conversion strategies. Let's build a structured marketing roadmap tailored to your consultation goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all cursor-pointer"
                >
                  <span>Book Healthcare Marketing Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  <span>Speak with an Ad Strategist</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
