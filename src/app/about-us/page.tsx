"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import {
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { ABOUT_US_SECTION, SITE_METADATA } from "@/data/siteData";

export default function AboutUsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const team = [
    {
      name: "Ittalvi Pathak",
      role: "Operations & Healthcare Client Success",
      image: "/Ittalvi.png",
      desc: "Ensures seamless execution and high accountability for every healthcare brand we partner with.",
    },
    {
      name: "Ayush Nagar",
      role: "Head of Healthcare Performance & Ads",
      image: "/Ayush.png",
      desc: "Specializes in Meta & Google algorithmic ad pacing, high-intent medical targeting, and CPL control.",
    },
    {
      name: "Ankush",
      role: "High-Ticket Sales & Closing Strategist",
      desc: "Mentors clinic front desks and intake coordinators on converting consultations into enrolled patients.",
    },
    {
      name: "Santu",
      role: "Creative Director (Reels & Healthcare Hooks)",
      desc: "Crafts high-retention reel edits, hooks, and clinical storytelling that stop the scroll.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] text-slate-900 flex flex-col">
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#dbeafe] via-[#e8f2fc] to-[#f0f7ff] overflow-hidden border-b border-sky-200/80">
        {/* Top Ambient Shade: Sky Blue, Warm Yellow, and Soft Orange Only */}
        <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-20 left-[10%] w-[380px] h-[240px] bg-sky-400/20 rounded-full blur-3xl" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] h-[220px] bg-amber-300/20 rounded-full blur-3xl" />
          <div className="absolute -top-16 right-[10%] w-[360px] h-[240px] bg-orange-400/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-md shadow-sky-950/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Our Mission &amp; Story
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            About Team With Someone
          </h1>
          <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            A digital marketing agency focused on helping doctors, clinics, dietitians, nutritionists, and wellness professionals grow their businesses online.
          </p>
        </div>
      </section>

      {/* Story & Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Established in 2021 with 5+ Years of Healthcare Marketing Experience
              </h2>
              {ABOUT_US_SECTION.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={SITE_METADATA.bookingCalendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsBookingModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Schedule a Strategy Call
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="moving-border-card rounded-3xl p-[2px] shadow-2xl">
                <div className="rounded-[22px] overflow-hidden bg-white border border-sky-300">
                  <Image
                    src="/philosophy.webp"
                    alt="Team With Someone Agency Philosophy"
                    width={600}
                    height={400}
                    className="w-full h-[360px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Key Agency Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-3xl card-beautiful">
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 w-fit mb-4 shadow-xs">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Medical Ethics &amp; Ad Compliance</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Healthcare ads require strict compliance with Meta and Google healthcare policies. We build ethical, compliant campaigns with zero account ban risks.
              </p>
            </div>

            <div className="p-8 rounded-3xl card-beautiful">
              <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 w-fit mb-4 shadow-xs">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Intent-Driven Patient Lead Quality</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                We don't optimize for empty likes or irrelevant clicks. Every campaign is engineered with custom qualification questionnaires to deliver high-intent inquiries.
              </p>
            </div>

            <div className="p-8 rounded-3xl card-beautiful">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 w-fit mb-4 shadow-xs">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Sales &amp; Closing Mentorship</h3>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Generating leads is half the battle. We train your clinic staff and front-desk team on consultation scripts and follow-up practices that turn inquiries into paying patients.
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="border-t border-sky-300/60 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                Meet the Healthcare Growth Specialists
              </h3>
              <p className="text-slate-700 text-sm mt-2 font-medium">
                Dedicated professionals obsessed with healthcare marketing, patient psychology, and algorithmic ad scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl card-beautiful p-6 text-center group hover:shadow-xl transition-all"
                >
                  <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-sky-50 border-2 border-sky-300 mb-4 shadow-sm">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-sky-100 text-sky-800 font-black text-2xl">
                        {member.name[0]}
                      </div>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs text-sky-700 font-bold mt-0.5 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModalAndSection
        isModal={true}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
