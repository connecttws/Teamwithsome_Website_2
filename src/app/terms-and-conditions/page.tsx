import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Team With Someone",
  description: "Terms and conditions of service for healthcare digital marketing agency Team With Someone.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eaf2fb] via-[#e4eef9] to-[#edf5fc] text-slate-900 flex flex-col">
      <Navbar />

      <section className="pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="rounded-3xl bg-white/95 border-2 border-sky-200/80 p-8 sm:p-12 shadow-sm">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4">Terms &amp; Conditions</h1>
          <p className="text-sm text-sky-700 mb-8 font-bold">Last Updated: November 2026</p>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p>
              Welcome to <strong>Team With Someone (TWS)</strong>. By accessing our website or retaining our digital marketing services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Scope of Healthcare Digital Marketing Services</h2>
            <p>
              Team With Someone provides digital marketing, Meta Ads management, Google Ads management, SEO, content creation, and sales consultation mentorship for doctors, clinics, dietitians, and wellness brands. Specific deliverables are outlined in individual service agreements.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Medical Representation &amp; Disclaimers</h2>
            <p>
              Clients are solely responsible for ensuring that all medical advice, treatment descriptions, and credentials provided to Team With Someone for advertising purposes comply with applicable medical council guidelines and healthcare laws in their respective jurisdiction. Team With Someone does not practice medicine or prescribe healthcare treatments.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Ad Spend &amp; Third-Party Platform Policies</h2>
            <p>
              Clients maintain ownership of their Meta Business Manager and Google Ads accounts or provide ad spend directly to advertising platforms. While Team With Someone implements best practices to maintain compliance, platform approvals remain subject to Meta’s and Google’s automated review algorithms.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, all custom ad creatives, copywriting, and landing page designs created specifically for the client belong to the client, while underlying agency proprietary frameworks remain the property of Team With Someone.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of the courts of Gurugram, Haryana.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
