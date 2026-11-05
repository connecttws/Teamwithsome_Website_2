import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer | Team With Someone",
  description: "Medical and performance marketing disclaimer for Team With Someone.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">Disclaimer</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: November 2026</p>

        <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          <h2 className="text-xl font-bold text-slate-900 pt-2">1. Marketing Results Disclaimer</h2>
          <p>
            Any case studies, testimonials, lead metrics, or growth figures presented on this website or in our marketing materials represent results achieved for specific healthcare practitioners and clinics. They do not constitute a literal guarantee of identical results for every practice. Healthcare campaign results depend on multiple real-world factors, including local geographic competition, clinic reputation, consultation pricing, seasonal demand, budget allocation, and clinic intake speed.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Non-Medical Practice Disclaimer</h2>
          <p>
            Team With Someone is a digital marketing, performance advertising, and lead generation consultancy. We are not a medical healthcare provider, clinic, or medical doctor. We do not provide medical diagnosis, treatment recommendations, or clinical advice. All healthcare and medical claims displayed in advertisements managed by us are provided and verified by the respective medical practitioner or clinic client.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. External Links &amp; Third-Party Platforms</h2>
          <p>
            This website may contain links to third-party websites or services (such as Meta, Google, Calendly, or WhatsApp) that are not owned or controlled by Team With Someone. We assume no responsibility for the content, privacy policies, or practices of any third-party websites.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
