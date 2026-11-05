"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import { SITE_METADATA, FOOTER_LINKS } from "@/data/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-sky-100 text-slate-600 text-sm overflow-hidden">
      {/* Subtle background ambient sky glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-sky-200/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-sky-200 p-1 flex items-center justify-center shadow-xs">
                <Image
                  src={SITE_METADATA.logoUrl}
                  alt={SITE_METADATA.agencyName}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-900 tracking-tight">
                  {SITE_METADATA.agencyName}
                </span>
                <span className="text-[10px] tracking-wider uppercase text-sky-700 font-bold">
                  Health &amp; Wellness Marketing
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Team With Someone is a digital marketing agency for health and wellness, helping doctors, dietitians, and nutritionists grow their online presence with targeted Meta Ads, Google Ads, SEO, and performance funnels.
            </p>

            {/* Social Icons (Instagram, LinkedIn, Facebook - Real SVG Icons attached to URLs) */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Follow Our Healthcare Insights
              </div>
              <div className="flex items-center gap-3">
                {/* Instagram Icon */}
                <a
                  href={SITE_METADATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Team With Someone on Instagram"
                  className="w-10 h-10 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent transition-all shadow-xs group"
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href={SITE_METADATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Team With Someone on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#0077b5] hover:border-transparent transition-all shadow-xs group"
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Facebook Icon */}
                <a
                  href={SITE_METADATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Team With Someone on Facebook"
                  className="w-10 h-10 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#1877f2] hover:border-transparent transition-all shadow-xs group"
                >
                  <svg
                    className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Core Services
            </div>
            <ul className="space-y-2">
              {FOOTER_LINKS.coreServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-600 hover:text-sky-600 transition-colors text-xs sm:text-sm block py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Legal Pages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation &amp; Policies
            </div>
            <ul className="space-y-2">
              {FOOTER_LINKS.navigation.map((nav) => (
                <li key={nav.name}>
                  <Link
                    href={nav.href}
                    className="text-slate-600 hover:text-sky-600 transition-colors text-xs sm:text-sm block py-0.5"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>DLF Cyber City, Sector 24, Gurugram, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-sky-600 transition-colors">
                  {SITE_METADATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-sky-600 transition-colors">
                  {SITE_METADATA.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_METADATA.bookingCalendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                Book 1-on-1 Strategy Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {SITE_METADATA.agencyName} (TWS). All rights reserved. Specialized Healthcare Performance Agency.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-sky-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-sky-600 transition-colors">
              Terms
            </Link>
            <Link href="/refund-and-cancellation-policy" className="hover:text-sky-600 transition-colors">
              Refunds
            </Link>
            <Link href="/disclaimer" className="hover:text-sky-600 transition-colors">
              Disclaimer
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 text-slate-700 hover:text-sky-600 transition-colors flex items-center gap-1.5 shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
