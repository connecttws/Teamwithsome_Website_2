"use client";

import React, { useState } from "react";
import {
  Calculator,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import { SITE_METADATA } from "@/data/siteData";

interface RoiCalculatorProps {
  onOpenBookingModal?: () => void;
}

export default function RoiCalculator({ onOpenBookingModal }: RoiCalculatorProps) {
  const [budget, setBudget] = useState<number>(50000); // INR
  const [niche, setNiche] = useState<"doctor" | "dietitian" | "coach">("doctor");

  // Calculations based on typical healthcare Meta/Google performance benchmarks
  const costPerEnquiry = niche === "doctor" ? 350 : niche === "dietitian" ? 220 : 180;
  const estimatedEnquiries = Math.round(budget / costPerEnquiry);
  const qualifiedRate = niche === "doctor" ? 0.45 : 0.55;
  const qualifiedConsultations = Math.round(estimatedEnquiries * qualifiedRate);
  const avgTreatmentValue = niche === "doctor" ? 4500 : niche === "dietitian" ? 6000 : 8000;
  const projectedRevenue = Math.round(qualifiedConsultations * 0.4 * avgTreatmentValue);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#e8f2fc] via-[#f1f6fc] to-[#e4eefb] border-t border-sky-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Moving Border Wrap around the Entire ROI Calculator Box */}
        <div className="max-w-4xl mx-auto moving-border-card shadow-2xl shadow-sky-950/20">
          <div className="moving-border-inner bg-gradient-to-br from-[#0c152c] via-[#091024] to-[#060a17] p-8 sm:p-12 text-white border border-sky-500/30">
            {/* Top header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 border border-sky-400 text-sky-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-md shadow-sky-950/40">
                <Calculator className="w-3.5 h-3.5 text-sky-400" />
                Healthcare Lead &amp; ROI Estimator
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Estimate Your Practice Growth Potential
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
                See realistic enquiry and consultation projections based on our healthcare advertising benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Controls */}
              <div className="lg:col-span-7 space-y-6">
                {/* Practice Type Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select Your Healthcare Category:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setNiche("doctor")}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        niche === "doctor"
                          ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30 border border-sky-400"
                          : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700"
                      }`}
                    >
                      Doctor / Clinic
                    </button>
                    <button
                      type="button"
                      onClick={() => setNiche("dietitian")}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        niche === "dietitian"
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/30 border border-emerald-400"
                          : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700"
                      }`}
                    >
                      Dietitian
                    </button>
                    <button
                      type="button"
                      onClick={() => setNiche("coach")}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        niche === "coach"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30 border border-indigo-400"
                          : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700"
                      }`}
                    >
                      Wellness Coach
                    </button>
                  </div>
                </div>

                {/* Monthly Ad Budget Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Planned Monthly Ad Budget:
                    </label>
                    <span className="text-lg font-black text-sky-400 font-mono">
                      ₹{budget.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={25000}
                    max={300000}
                    step={5000}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono font-medium">
                    <span>₹25,000</span>
                    <span>₹1,50,000</span>
                    <span>₹3,00,000+</span>
                  </div>
                </div>

                <div className="bg-slate-900/70 rounded-2xl p-4 border border-sky-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes targeted Meta (FB/IG) or Google Search campaign setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom qualification questionnaire to filter non-serious inquiries</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sales closing mentorship to maximize consultation show-up rate</span>
                  </div>
                </div>
              </div>

              {/* Right Result Card in Shaded Slate-Blue */}
              <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#111d3c] to-[#0a1122] border border-sky-500/30 p-6 shadow-xl text-center">
                <div className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-4">
                  Estimated Monthly Performance
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/20 shadow-xs">
                    <div className="text-2xl font-black text-sky-400 font-mono">
                      {estimatedEnquiries} - {Math.round(estimatedEnquiries * 1.25)}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 font-medium">Patient Inquiries</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 shadow-xs">
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      {qualifiedConsultations}+
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 font-medium">Qualified Consultations</div>
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-xl bg-slate-900/95 border border-sky-400/30 shadow-xs">
                  <div className="text-xs text-slate-300 font-medium">Estimated Practice Revenue Potential</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1 font-mono">
                    ₹{projectedRevenue.toLocaleString("en-IN")}+
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-1">
                    Based on realistic healthcare close rates
                  </div>
                </div>

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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 text-white font-bold text-sm shadow-lg shadow-sky-600/30 hover:shadow-sky-600/50 transition-all"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Get Your Practice Roadmap</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
