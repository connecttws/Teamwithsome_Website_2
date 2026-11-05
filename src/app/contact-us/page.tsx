"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import { Sparkles } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="relative pt-36 pb-12 bg-gradient-to-b from-sky-50/60 to-white text-center border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Get In Touch With TWS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contact Our Healthcare Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
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
