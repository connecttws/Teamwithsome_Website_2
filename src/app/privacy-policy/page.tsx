import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_METADATA } from "@/data/siteData";

export const metadata = {
  title: "Privacy Policy | Team With Someone",
  description: "Privacy policy and healthcare marketing client confidentiality terms for Team With Someone.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: November 2026</p>

        <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          <p>
            At <strong>Team With Someone (TWS)</strong>, accessible from {SITE_METADATA.siteUrl}, one of our primary priorities is the privacy of our visitors and healthcare clients. This Privacy Policy document details the types of information that are collected and recorded by Team With Someone and how we use it.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Healthcare Practitioner &amp; Client Confidentiality</h2>
          <p>
            We adhere strictly to professional confidentiality. Any clinic data, patient inquiry logs, consultation notes, or proprietary client metrics shared with us during the course of performance marketing campaigns remain strictly private and will never be sold, leased, or disclosed to third parties.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Information We Collect</h2>
          <p>
            When you reach out to us via our strategy consultation forms, schedule a call via Calendly, or contact us through WhatsApp, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Your full name and professional designation (Doctor, Dietitian, Clinic Owner)</li>
            <li>Email address and phone / WhatsApp number</li>
            <li>Healthcare practice website, social media handles, or Google Business profile</li>
            <li>Campaign budget expectations and consultation requirements</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. How We Use Your Information</h2>
          <p>We use the collected information in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>Design and deliver customized healthcare digital marketing strategies</li>
            <li>Communicate with you regarding campaign updates, lead audits, and review calls</li>
            <li>Analyze website performance and optimize conversion flows</li>
            <li>Prevent fraudulent advertising or compliance violations</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Meta &amp; Google Advertising Data</h2>
          <p>
            When managing Meta (Facebook/Instagram) or Google Ads campaigns on your behalf, advertising data is processed in accordance with Meta’s Advertising Policies and Google Ads Policies, ensuring full compliance with healthcare privacy restrictions.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact Us</h2>
          <p>
            If you have questions about our Privacy Policy, please reach out to our privacy officer at{" "}
            <a href={`mailto:${SITE_METADATA.email}`} className="text-sky-600 underline font-semibold">
              {SITE_METADATA.email}
            </a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
