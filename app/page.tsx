"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { LearningApproachSection } from "@/components/sections/learning-approach-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { TeachersSection } from "@/components/sections/teachers-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FranchiseSection } from "@/components/sections/franchise-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Header / Navigation */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Hero Section */}
        <HeroSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. About Section + Trust Strip */}
        <AboutSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Programs Section (6 Cards) */}
        <ProgramsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Learning Approach */}
        <LearningApproachSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Why Choose WEE SPRITES (Violet Band) */}
        <WhyChooseUsSection />

        {/* 7. Facilities Section */}
        <FacilitiesSection />

        {/* 8. Our Teachers */}
        <TeachersSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Events and Gallery */}
        <GallerySection />

        {/* 10 & 11. Parent Testimonials + Admissions CTA Panels */}
        <TestimonialsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 12. Franchise Opportunity (Primary Business Goal) */}
        <FranchiseSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 13. FAQ Accordion */}
        <FaqSection />

        {/* 14. Contact / Location */}
        <ContactSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* 15. Footer */}
      <SiteFooter />

      {/* Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

