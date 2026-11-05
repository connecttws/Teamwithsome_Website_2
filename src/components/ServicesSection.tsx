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
      : CORE_SERVICES.filter((srv) => srv.id === activeCategory);

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#eaf2fb] via-[#f1f6fc] to-[#e4eef9] border-t border-sky-200/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/10">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            Healthcare Performance Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Healthcare Digital Marketing Services
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Our digital marketing services for healthcare are designed to help healthcare professionals reach the right audience, promote their services, and generate relevant enquiries.
          </p>
        </div>

        {/* Category Filter Pills with Black & Blue Accent */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/25 border border-sky-500"
                  : "bg-white text-slate-700 hover:text-sky-600 hover:bg-sky-50 border border-slate-300/80 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Shaded Cards & Moving Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || TrendingUp;
            const hasMovingBorder = idx === 0 || idx === 1; // Top featured cards have dynamic moving border lines!

            const cardInner = (
              <div className="flex flex-col justify-between h-full rounded-[23px] bg-gradient-to-b from-white via-[#f4f9ff] to-[#eaf3fe] p-6 sm:p-8 border border-slate-900/10 shadow-lg shadow-sky-950/5">
                <div>
                  {/* Top Bar with Icon & Dark Contrast Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3.5 rounded-2xl border transition-transform group-hover:scale-110 shadow-xs"
                      style={{
                        backgroundColor: `${service.color}15`,
                        borderColor: `${service.color}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-sky-300 border border-slate-800 shadow-xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title (H3) */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {service.h3Title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* What's Included */}
                  <div className="border-t border-sky-200/80 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {service.whatsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/10 transition-all group/btn"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-sky-300" />
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
                className="group relative rounded-3xl card-black-shine hover:shadow-xl hover:shadow-sky-500/15 hover:-translate-y-1 transition-all duration-300"
              >
                {cardInner}
              </div>
            );
          })}
        </div>

        {/* Global CTA Box with Dark Midnight Navy / Black Shade & Moving Border */}
        <div className="mt-16 moving-border-card shadow-2xl shadow-sky-950/20">
          <div className="moving-border-inner bg-gradient-to-r from-[#0b1329] via-[#0f1d3d] to-[#080d1e] p-8 sm:p-12 text-center relative overflow-hidden text-white border border-sky-500/30">
            <div className="max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                Custom Healthcare Strategy
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 mb-3">
                Need a Customized Digital Marketing Plan for Your Practice?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-8 font-normal max-w-2xl mx-auto">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all"
                >
                  <span>Book Healthcare Marketing Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold text-sm transition-all"
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
