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
    <section className="relative py-20 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] border-t border-sky-200/80 overflow-hidden text-slate-900">
      {/* Top Ambient Shade: Sky Blue, Warm Yellow, and Soft Orange Only */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 left-[10%] w-[380px] h-[240px] bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[220px] bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 right-[10%] w-[360px] h-[240px] bg-orange-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Moving Border Wrap around the Entire ROI Calculator Box */}
        <div className="max-w-4xl mx-auto moving-border-card shadow-2xl shadow-sky-950/10">
          <div className="moving-border-inner card-beautiful p-8 sm:p-12">
            {/* Top header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-md shadow-sky-950/15">
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                Healthcare Lead &amp; ROI Estimator
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Estimate Your Practice Growth Potential
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-2 font-medium">
                See realistic enquiry and consultation projections based on healthcare performance data.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Controls */}
              <div className="lg:col-span-7 space-y-6">
                {/* Practice Type Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Select Your Healthcare Category:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setNiche("doctor")}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        niche === "doctor"
                          ? "bg-slate-900 text-white shadow-md border border-sky-400"
                          : "bg-white text-slate-700 hover:text-slate-900 border border-sky-200"
                      }`}
                    >
                      Doctor / Clinic
                    </button>
                    <button
                      type="button"
                      onClick={() => setNiche("dietitian")}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        niche === "dietitian"
                          ? "bg-slate-900 text-white shadow-md border border-amber-400"
                          : "bg-white text-slate-700 hover:text-slate-900 border border-sky-200"
                      }`}
                    >
                      Dietitian
                    </button>
                    <button
                      type="button"
                      onClick={() => setNiche("coach")}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        niche === "coach"
                          ? "bg-slate-900 text-white shadow-md border border-orange-400"
                          : "bg-white text-slate-700 hover:text-slate-900 border border-sky-200"
                      }`}
                    >
                      Wellness Coach
                    </button>
                  </div>
                </div>

                {/* Monthly Ad Budget Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Planned Monthly Ad Budget:
                    </label>
                    <span className="text-lg font-black text-sky-700 font-mono">
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
                    className="w-full h-2.5 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono font-medium">
                    <span>₹25,000</span>
                    <span>₹1,50,000</span>
                    <span>₹3,00,000+</span>
                  </div>
                </div>

                <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-200/90 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Includes targeted Meta (FB/IG) or Google Search campaign setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Custom qualification questionnaire to filter non-serious inquiries</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Sales closing mentorship to maximize consultation show-up rate</span>
                  </div>
                </div>
              </div>

              {/* Right Result Card */}
              <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-white via-sky-50 to-orange-50/40 border-2 border-sky-300 p-6 shadow-md text-center">
                <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-4">
                  Estimated Monthly Performance
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-white border border-sky-200 shadow-xs">
                    <div className="text-2xl font-black text-sky-700 font-mono">
                      {estimatedEnquiries} - {Math.round(estimatedEnquiries * 1.25)}
                    </div>
                    <div className="text-[11px] text-slate-600 mt-1 font-bold">Patient Enquiries</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-xs">
                    <div className="text-2xl font-black text-amber-600 font-mono">
                      {qualifiedConsultations}+
                    </div>
                    <div className="text-[11px] text-slate-600 mt-1 font-bold">Qualified Enquiries</div>
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-xl bg-white border border-orange-200 shadow-xs">
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">Estimated Revenue Potential</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-mono">
                    ₹{projectedRevenue.toLocaleString("en-IN")}+
                  </div>
                  <div className="text-[10px] text-orange-600 font-bold mt-1">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all cursor-pointer"
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
