"use client";

import React, { useState } from "react";
import {
  CalendarCheck,
  Send,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { SITE_METADATA } from "@/data/siteData";

interface ContactSectionProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ContactModalAndSection({
  isModal = false,
  isOpen = false,
  onClose,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "Doctor / Medical Clinic",
    budget: "₹50,000 - ₹1,00,000",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const formContent = (
    <div className="moving-border-card rounded-3xl p-[2px] shadow-2xl shadow-sky-950/25">
      <div className="relative rounded-[22px] bg-gradient-to-br from-[#0c142b] via-[#091024] to-[#050814] text-white p-6 sm:p-10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors z-20 cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="relative z-10">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 shadow-lg shadow-emerald-950/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Inquiry Received Successfully!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 font-normal">
                Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Our healthcare marketing team will review your practice requirements and reach out via WhatsApp/Phone within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={SITE_METADATA.bookingCalendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/30 transition-all"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Pick Exact Time on Calendly
                </a>
                {isModal && onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
                  >
                    Close Window
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Direct Healthcare Practice Consultation
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Schedule Your Free Practice Strategy Call
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Share your current practice goals. We'll map out a structured lead generation and Meta/Google ad plan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="doctor@clinic.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Healthcare Specialty *
                  </label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Doctor / Medical Clinic" className="bg-slate-900 text-white">Doctor / Medical Clinic</option>
                    <option value="Dietitian & Nutritionist" className="bg-slate-900 text-white">Dietitian & Nutritionist</option>
                    <option value="Health & Wellness Coach" className="bg-slate-900 text-white">Health & Wellness Coach</option>
                    <option value="Hospital / Healthcare Network" className="bg-slate-900 text-white">Hospital / Healthcare Network</option>
                    <option value="Dental / Dermatology Clinic" className="bg-slate-900 text-white">Dental / Dermatology Clinic</option>
                    <option value="Physiotherapy / Rehab Center" className="bg-slate-900 text-white">Physiotherapy / Rehab Center</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Estimated Monthly Ad Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="₹25,000 - ₹50,000" className="bg-slate-900 text-white">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000" className="bg-slate-900 text-white">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,50,000" className="bg-slate-900 text-white">₹1,00,000 - ₹2,50,000</option>
                    <option value="₹2,50,000+" className="bg-slate-900 text-white">₹2,50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Website or Instagram Profile (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="instagram.com/yourhandle or website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Your Primary Growth Challenge or Goal
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need more OPD patients for dermatology treatments, or scaling online weight loss nutrition coaching..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm shadow-xl shadow-sky-500/30 transition-all disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span>Preparing Your Strategy...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Request Strategy Call</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict privacy. We never share healthcare data or spam your inbox.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (isModal) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-xl my-8">{formContent}</div>
      </div>
    );
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#f0f7ff] via-[#e2edfa] to-[#d6e6f8] border-t border-sky-200/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Agency Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wider uppercase shadow-md shadow-sky-950/20">
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              Direct Communication
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Let's Scale Your Healthcare Practice
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              Whether you want to fill your clinic calendar with verified OPD patients or scale an online nutrition coaching practice, our team is ready to design your performance funnel.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white via-[#f4f8fe] to-[#e8f2fc] border-2 border-sky-200 shadow-sm">
                <div className="p-3 rounded-xl bg-slate-900 text-cyan-300 shadow-md">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Direct WhatsApp / Phone</div>
                  <div className="text-sm font-bold text-slate-900">{SITE_METADATA.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white via-[#f4f8fe] to-[#e8f2fc] border-2 border-sky-200 shadow-sm">
                <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Direct Inquiries</div>
                  <div className="text-sm font-bold text-slate-900">{SITE_METADATA.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white via-[#f4f8fe] to-[#e8f2fc] border-2 border-sky-200 shadow-sm">
                <div className="p-3 rounded-xl bg-slate-900 text-blue-400 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Agency Headquarters</div>
                  <div className="text-sm font-bold text-slate-900">{SITE_METADATA.address}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-300/70">
              <a
                href={SITE_METADATA.bookingCalendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900 transition-colors"
              >
                <CalendarCheck className="w-4 h-4 text-cyan-600" />
                Prefer instant self-scheduling? Open Calendly Booking <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Form with Moving Border Card */}
          <div className="lg:col-span-7">{formContent}</div>
        </div>
      </div>
    </section>
  );
}
