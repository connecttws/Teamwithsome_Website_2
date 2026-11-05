"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Share2,
  Video,
  MapPin,
  Search,
  Headphones,
} from "lucide-react";
import { SITE_METADATA } from "@/data/siteData";

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    {
      name: "Paid Advertising",
      desc: "Meta & Google Ads high-intent patient acquisition",
      href: "/services#paid-advertising",
      icon: TrendingUp,
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      name: "Local SEO",
      desc: "Google Maps 3-Pack & local clinic walk-in engine",
      href: "/services#local-seo",
      icon: MapPin,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      name: "SEO Services",
      desc: "Page 1 medical ranking & compounding organic reach",
      href: "/services#seo-services",
      icon: Search,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      name: "Social Media Management",
      desc: "Instagram, YouTube & LinkedIn clinical authority",
      href: "/services#social-media-management",
      icon: Share2,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      name: "Content Creation",
      desc: "Doctor reel shoots, hooks & high-retention video",
      href: "/services#content-creation",
      icon: Video,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      name: "Sales & Closing Mentorship",
      desc: "Consultation frameworks & high-ticket conversion",
      href: "/services#sales-mentorship",
      icon: Headphones,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-sm shadow-sky-950/5 py-3"
            : "bg-white/70 backdrop-blur-md py-4 sm:py-5 border-b border-sky-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-sky-200/80 p-1 flex items-center justify-center shadow-xs group-hover:border-sky-400 transition-colors">
                <Image
                  src={SITE_METADATA.logoUrl}
                  alt={SITE_METADATA.agencyName}
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
                  {SITE_METADATA.agencyName}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-sky-600 font-bold">
                  Health & Wellness Marketing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/90 border border-slate-200/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <Link
                href="/"
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-full transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-full transition-colors group"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px]">
                    <div className="bg-white border border-sky-100 rounded-2xl p-4 shadow-xl shadow-sky-900/10 backdrop-blur-xl grid grid-cols-2 gap-2">
                      <div className="col-span-2 px-3 py-1.5 border-b border-sky-50 flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                          Healthcare Growth Services
                        </span>
                        <Link
                          href="/services"
                          className="text-xs text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-1"
                        >
                          View All Services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {servicesList.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50/80 transition-colors group/item border border-transparent hover:border-sky-100"
                          >
                            <div className={`p-2 rounded-lg ${service.bg} shrink-0 mt-0.5 border border-sky-100/50`}>
                              <Icon className={`w-4 h-4 ${service.color}`} />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover/item:text-sky-600 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                {service.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-full transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/case-studies"
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-full transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-full transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/70 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
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
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-sm font-bold text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-sky-100 group-hover:scale-110 transition-transform" />
                <span>Schedule a Call</span>
                <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-sky-50 border border-sky-200 text-slate-700 hover:text-sky-600"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-white/98 backdrop-blur-xl pt-24 px-6 pb-8 overflow-y-auto border-b border-sky-100">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-900 py-2 border-b border-sky-100"
            >
              Home
            </Link>

            <div className="py-2 border-b border-sky-100">
              <div className="text-sm font-bold uppercase tracking-wider text-sky-700 mb-2">
                Services
              </div>
              <div className="flex flex-col gap-2 pl-2">
                {servicesList.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-700 hover:text-sky-600 text-sm py-1 flex items-center justify-between"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-900 py-2 border-b border-sky-100"
            >
              About Us
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-900 py-2 border-b border-sky-100"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-900 py-2 border-b border-sky-100"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-900 py-2 border-b border-sky-100"
            >
              Contact Us
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={SITE_METADATA.bookingCalendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold shadow-lg shadow-sky-500/25"
              >
                <PhoneCall className="w-5 h-5" />
                Schedule a Strategy Call
              </a>
              <p className="text-center text-xs text-slate-500">
                Specialized Digital Marketing for Doctors & Wellness Brands
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
