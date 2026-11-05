"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import MetaAdsDeepDiveSection from "@/components/MetaAdsDeepDiveSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import AboutSection from "@/components/AboutSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import RoiCalculator from "@/components/RoiCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactModalAndSection from "@/components/ContactModalAndSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Top Navbar */}
      <Navbar onOpenBookingModal={handleOpenBooking} />

      {/* Hero Section */}
      <HeroSection onOpenBookingModal={handleOpenBooking} />

      {/* Our Healthcare Digital Marketing Services (H2) */}
      <ServicesSection onOpenBookingModal={handleOpenBooking} />

      {/* WHY CHOOSE TWS (H2) */}
      <WhyChooseSection />

      {/* Generate Quality Leads for Your Healthcare Practice with Meta Ads (H2) */}
      <MetaAdsDeepDiveSection onOpenBookingModal={handleOpenBooking} />

      {/* WHO WE HELP (H2) */}
      <WhoWeHelpSection onOpenBookingModal={handleOpenBooking} />

      {/* About Us (H2) & Industries We Specialize In */}
      <AboutSection onOpenBookingModal={handleOpenBooking} />

      {/* How Do We Work? (H2) */}
      <HowWeWorkSection onOpenBookingModal={handleOpenBooking} />

      {/* Interactive Practice ROI & Lead Calculator */}
      <RoiCalculator onOpenBookingModal={handleOpenBooking} />

      {/* TESTIMONIALS (H2) */}
      <TestimonialsSection />

      {/* FREQUENTLY ASKED QUESTIONS (H2) */}
      <FaqSection />

      {/* Contact & Consultation Section */}
      <ContactModalAndSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking / Consultation Modal */}
      <ContactModalAndSection
        isModal={true}
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />
    </main>
  );
}
