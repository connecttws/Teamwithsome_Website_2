"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import { Sparkles } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] text-slate-900 flex flex-col">
      <Navbar />

      <section className="relative pt-36 pb-12 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] text-center border-b border-sky-200/80 overflow-hidden">
        {/* Top Ambient Shade: Sky Blue, Warm Yellow, and Soft Orange Only */}
        <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-16 left-[15%] w-[350px] h-[200px] bg-sky-400/20 rounded-full blur-3xl" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[180px] bg-amber-300/20 rounded-full blur-3xl" />
          <div className="absolute -top-16 right-[15%] w-[320px] h-[200px] bg-orange-400/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Get In Touch With TWS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Contact Our Healthcare Team
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            Ready to attract more patients and scale your healthcare brand? Let's discuss your marketing strategy today.
          </p>
        </div>
      </section>

      <div className="flex-1">
        <ContactModalAndSection />
      </div>

      <Footer />
    </main>
  );
}
