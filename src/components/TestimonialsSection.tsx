"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="relative py-24 bg-white border-t border-sky-100 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Verified Healthcare Client Results
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real feedback from medical practitioners, nutritionists, and clinic owners who trust Team With Someone with their patient acquisition and digital growth.
          </p>
        </div>

        {/* Featured Testimonial Hero Card in Light Mode */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-white via-sky-50/20 to-white border border-sky-200 p-8 sm:p-12 backdrop-blur-xl shadow-xl shadow-sky-900/5 relative mb-12">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-sky-100 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-sky-50 border-2 border-sky-300 shrink-0 shadow-sm">
              {current.avatarUrl ? (
                <Image
                  src={current.avatarUrl}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-sky-100 text-xl font-bold text-sky-700">
                  {current.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {current.name}
              </h3>
              <div className="text-sm font-bold text-sky-700 mt-0.5">
                {current.role} • {current.practice}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{current.location}</div>
            </div>

            {/* Metric pill */}
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-center shrink-0">
              <div className="text-xl sm:text-2xl font-black text-sky-700 font-mono">
                {current.metric}
              </div>
              <div className="text-[11px] text-slate-600 mt-0.5 font-semibold">
                {current.metricLabel}
              </div>
            </div>
          </div>

          <blockquote className="text-base sm:text-xl text-slate-700 leading-relaxed font-normal italic mb-6">
            "{current.quote}"
          </blockquote>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-sky-100">
            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-white text-slate-700 border border-sky-200 font-medium shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 text-slate-700 hover:text-sky-700 transition-colors shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono font-bold text-sky-800 px-2">
                {activeIdx + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="p-2.5 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 text-slate-700 hover:text-sky-700 transition-colors shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Small Testimonials Grid Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                activeIdx === idx
                  ? "bg-white border-sky-500 shadow-md shadow-sky-900/10"
                  : "bg-sky-50/40 border-sky-100 hover:border-sky-300"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-sky-700 font-mono">{item.metric}</span>
                <div className="flex">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-sm font-bold text-slate-900">{item.name}</div>
              <div className="text-xs text-slate-500 line-clamp-1">{item.practice}</div>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2 italic font-normal">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
