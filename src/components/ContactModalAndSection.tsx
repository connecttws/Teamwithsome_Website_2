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
    <div className="bg-white border border-sky-200 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-sky-900/10 relative">
      {isModal && onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-sky-50 text-slate-500 hover:text-slate-800 border border-sky-100"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Inquiry Received Successfully!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 font-normal">
            Thank you, {formData.name}. Our healthcare marketing team will review your practice requirements and reach out via WhatsApp/Phone within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SITE_METADATA.bookingCalendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-sky-500/25"
            >
              <CalendarCheck className="w-4 h-4" />
              Pick Exact Time on Calendly
            </a>
            {isModal && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-sky-50 border border-sky-200 text-slate-700 hover:text-sky-700 text-sm font-semibold"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Healthcare Practice Consultation
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Schedule Your Free Practice Strategy Call
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Share your current practice goals. We'll map out a structured lead generation and Meta/Google ad plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Dr. Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-sky-50/40 border border-sky-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-sky-50/40 border border-sky-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="doctor@clinic.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-sky-50/40 border border-sky-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Healthcare Specialty *
              </label>
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-sky-50/40 border border-sky-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-sky-500"
              >
                <option value="Doctor / Medical Clinic">Doctor / Medical Clinic</option>
                <option value="Dietitian & Nutritionist">Dietitian & Nutritionist</option>
                <option value="Health & Wellness Coach">Health & Wellness Coach</option>
                <option value="Hospital / Healthcare Network">Hospital / Healthcare Network</option>
                <option value="Dental / Dermatology Clinic">Dental / Dermatology Clinic</option>
                <option value="Physiotherapy / Rehab Center">Physiotherapy / Rehab Center</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Estimated Monthly Ad Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-sky-50/40 border border-sky-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-sky-500"
              >
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                <option value="₹2,50,000+">₹2,50,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Website or Instagram Profile (Optional)
              </label>
              <input
                type="text"
                placeholder="instagram.com/yourhandle or website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-sky-50/40 border border-sky-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Primary Growth Challenge or Goal
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Need more OPD patients for dermatology treatments, or scaling online weight loss nutrition coaching..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-sky-50/40 border border-sky-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all disabled:opacity-50"
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

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strict privacy. We never share healthcare data or spam your inbox.</span>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
        <div className="relative w-full max-w-xl my-8">{formContent}</div>
      </div>
    );
  }

  return (
    <section id="contact" className="relative py-24 bg-white border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Agency Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold tracking-wider uppercase shadow-xs">
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              Direct Communication
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let's Scale Your Healthcare Practice
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Whether you want to fill your clinic calendar with verified OPD patients or scale an online nutrition coaching practice, our team is ready to design your performance funnel.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct WhatsApp / Phone</div>
                  <div className="text-sm font-bold text-slate-900">{SITE_METADATA.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct Inquiries</div>
                  <div className="text-sm font-bold text-slate-900">{SITE_METADATA.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-slate-700">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Agency Headquarters</div>
                  <div className="text-sm font-bold text-slate-900">{SITE_METADATA.address}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100">
              <a
                href={SITE_METADATA.bookingCalendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                Prefer instant self-scheduling? Open Calendly Booking <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">{formContent}</div>
        </div>
      </div>
    </section>
  );
}
