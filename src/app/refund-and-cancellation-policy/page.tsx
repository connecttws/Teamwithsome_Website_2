import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_METADATA } from "@/data/siteData";

export const metadata = {
  title: "Refund & Cancellation Policy | Team With Someone",
  description: "Refund and cancellation policy for healthcare digital marketing agency Team With Someone.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eaf2fb] via-[#e4eef9] to-[#edf5fc] text-slate-900 flex flex-col">
      <Navbar />

      <section className="pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="rounded-3xl bg-white/95 border-2 border-sky-200/80 p-8 sm:p-12 shadow-sm">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-sm text-sky-700 mb-8 font-bold">Last Updated: November 2026</p>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p>
              At <strong>Team With Someone (TWS)</strong>, we are committed to delivering high-performance, results-focused digital marketing and lead generation services for healthcare practitioners, clinics, and wellness professionals.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Monthly Retainer Cancellations</h2>
            <p>
              Our ongoing marketing management retainers are billed on a monthly cycle with no long-term restrictive lock-ins unless specified in a custom retainer agreement. Clients may cancel or pause their upcoming monthly retainer by providing 14 days written notice prior to the start of the next billing cycle.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Setup Fees &amp; Creative Production</h2>
            <p>
              Due to the upfront allocation of dedicated agency resources—including doctor reel video editing, ad copywriting, custom landing page development, and audience research—onboarding setup fees are non-refundable once work has commenced.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Direct Ad Spend</h2>
            <p>
              Ad spend paid directly to Meta (Facebook/Instagram) or Google Ads is processed by those platforms and is strictly non-refundable by Team With Someone.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Dispute Resolution &amp; Contact</h2>
            <p>
              We strive for 100% client satisfaction and clear communication. If you have any concerns regarding your service package or invoice, please contact our management team directly at{" "}
              <a href={`mailto:${SITE_METADATA.email}`} className="text-sky-600 underline font-semibold">
                {SITE_METADATA.email}
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
