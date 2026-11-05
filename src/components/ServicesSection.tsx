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
    <section id="services" className="relative py-24 bg-gradient-to-b from-white via-sky-50/40 to-white border-t border-sky-100 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-sky-600" />
            Healthcare Performance Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Healthcare Digital Marketing Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our digital marketing services for healthcare are designed to help healthcare professionals reach the right audience, promote their services, and generate relevant enquiries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20"
                  : "bg-white text-slate-600 hover:text-sky-600 border border-sky-100 hover:border-sky-300 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (6 Core Services in Sky-Blue & White) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || TrendingUp;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-sky-100 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3.5 rounded-2xl border transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${service.color}10`,
                        borderColor: `${service.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title (H3) */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-600 transition-colors">
                    {service.h3Title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* What's Included */}
                  <div className="border-t border-sky-100 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {service.whatsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="border-t border-sky-100 pt-4 mt-auto">
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
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-sky-50/70 hover:bg-sky-100/80 border border-sky-200 text-xs sm:text-sm font-bold text-sky-800 hover:text-sky-900 transition-all group/btn"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-sky-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Box in White & Sky Blue */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 border border-sky-200 p-8 sm:p-10 text-center relative overflow-hidden shadow-lg shadow-sky-900/5">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Need a Customized Digital Marketing Plan for Your Practice?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-6 font-normal">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all"
              >
                <span>Book Healthcare Marketing Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-sky-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all"
              >
                <span>Speak with an Ad Strategist</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
