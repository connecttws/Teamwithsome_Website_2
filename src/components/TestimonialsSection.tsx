"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
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
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-[#edf5fc] via-[#e5f0fa] to-[#dbeafe] border-t border-sky-200/70 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Verified Healthcare Client Results
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Real feedback from medical practitioners, nutritionists, and clinic owners who trust Team With Someone with their patient acquisition and digital growth.
          </p>
        </div>

        {/* Featured Testimonial Wrapped in Moving Border Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="moving-border-card rounded-3xl p-[2px] shadow-2xl shadow-sky-950/25">
            <div className="relative rounded-[22px] bg-gradient-to-br from-[#0c142b] via-[#091024] to-[#050814] p-8 sm:p-12 text-white overflow-hidden">
              {/* Subtle background glow inside card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <Quote className="absolute top-6 right-8 w-20 h-20 text-sky-500/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6">
                  {/* Avatar */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-800 border-2 border-sky-400/60 shrink-0 shadow-lg shadow-sky-950/40">
                    {current.avatarUrl ? (
                      <Image
                        src={current.avatarUrl}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-sky-600 to-blue-700 text-2xl font-black text-white">
                        {current.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left flex-1">
                    <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {current.name}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-300 mt-0.5">
                      {current.role} • {current.practice}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 font-medium">{current.location}</div>
                  </div>

                  {/* Metric Pill */}
                  <div className="p-3.5 px-5 rounded-2xl bg-gradient-to-br from-sky-950/90 to-blue-950/90 border border-sky-400/30 text-center shrink-0 shadow-lg shadow-sky-950/50">
                    <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono tracking-tight flex items-center justify-center gap-1">
                      <TrendingUp className="w-5 h-5 text-emerald-400 inline" />
                      {current.metric}
                    </div>
                    <div className="text-[11px] text-sky-200/90 mt-0.5 font-semibold uppercase tracking-wider">
                      {current.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal italic mb-6">
                  "{current.quote}"
                </blockquote>

                {/* Tags & Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-slate-800/90 text-cyan-200 border border-sky-500/30 font-semibold"
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
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-sky-600 border border-slate-700 hover:border-sky-400 text-slate-200 hover:text-white transition-all shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-mono font-bold text-cyan-300 px-2">
                      {activeIdx + 1} / {TESTIMONIALS.length}
                    </span>
                    <button
                      type="button"
                      onClick={nextTestimonial}
                      aria-label="Next Testimonial"
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-sky-600 border border-slate-700 hover:border-sky-400 text-slate-200 hover:text-white transition-all shadow-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Testimonials Grid Overview with Shaded Blue & Black Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-[#0c142b] via-[#091024] to-[#050814] text-white border-sky-400 shadow-xl shadow-sky-950/20 scale-[1.02]"
                    : "bg-gradient-to-br from-white via-[#f0f7ff] to-[#e4eefb] text-slate-800 border-sky-200/90 hover:border-sky-400 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-cyan-300" : "text-sky-700"}`}>
                    {item.metric}
                  </span>
                  <div className="flex">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className={`text-sm font-bold ${isActive ? "text-white" : "text-slate-900"}`}>
                  {item.name}
                </div>
                <div className={`text-xs ${isActive ? "text-slate-300" : "text-slate-500"} line-clamp-1`}>
                  {item.practice}
                </div>
                <p className={`text-xs mt-2 line-clamp-2 italic font-normal ${isActive ? "text-slate-300" : "text-slate-600"}`}>
                  "{item.quote}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
