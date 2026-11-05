"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import { Sparkles } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eaf2fb] via-[#e4eef9] to-[#edf5fc] text-slate-900 flex flex-col">
      <Navbar />

      <section className="relative pt-36 pb-12 bg-gradient-to-b from-[#eaf2fb] via-[#e2eefb] to-[#edf5fc] text-center border-b border-sky-200/80 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
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
