"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { CtaButton } from "@/components/ui/cta-button";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const quickLinks = [
    {
      title: "Explore Programs",
      description: "Play Group, Pre-Nursery, Nursery, LKG, UKG & Day Care.",
      href: "/programs",
      icon: <GraduationCap className="w-5 h-5 text-brand-violet" />,
      tag: "Curriculum",
    },
    {
      title: "Admissions 2026–27",
      description: "Age criteria, step-by-step enrolment, and required documents.",
      href: "/admissions",
      icon: <BookOpen className="w-5 h-5 text-brand-violet" />,
      tag: "Enroll Now",
    },
    {
      title: "Franchise Opportunity",
      description: "Partner with WEE SPRITES. 360° setup, fast ROI & training.",
      href: "/franchise",
      icon: <Briefcase className="w-5 h-5 text-brand-violet" />,
      tag: "Business",
    },
    {
      title: "Campus Photo Gallery",
      description: "24-photo showcase of Annual Day, festivals, and activities.",
      href: "/gallery",
      icon: <ImageIcon className="w-5 h-5 text-brand-violet" />,
      tag: "Moments",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Header */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 flex flex-col justify-center relative overflow-hidden py-12 md:py-20">
        {/* Ambient background motion blobs */}
        <FloatingBlob color="yellow" size="xl" className="-top-20 -left-20 opacity-30" speed="slow" />
        <FloatingBlob color="lilac" size="xl" className="bottom-10 -right-20 opacity-35" speed="normal" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal delay={0.05}>
            {/* Playful badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-violet-soft border border-border-soft mb-6">
              <span className="text-xs sm:text-sm font-black text-brand-violet uppercase tracking-wider">
                PAGE NOT FOUND • 404 ERROR
              </span>
            </div>
          </Reveal>

          {/* Large Stylized 404 Illustration */}
          <Reveal delay={0.1}>
            <div className="relative inline-block mb-4 select-none">
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-7xl sm:text-8xl md:text-9xl font-black text-brand-violet tracking-tighter">
                <span>4</span>
                {/* Cute smiling circle for 0 */}
                <div className="w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 rounded-full bg-brand-yellow border-4 sm:border-6 border-brand-violet flex items-center justify-center transform hover:rotate-12 transition-transform shadow-floating">
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Smiling eyes */}
                    <div className="flex gap-3 sm:gap-4 mb-1">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-text-primary" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-text-primary" />
                    </div>
                    {/* Smile curve */}
                    <div className="w-6 h-3 sm:w-8 sm:h-4 border-b-3 sm:border-b-4 border-text-primary rounded-b-full" />
                  </div>
                </div>
                <span>4</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-2">
              Looks Like This Page Took a Playful Detour!
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-text-body max-w-xl mx-auto leading-relaxed">
              The page you are looking for might have been moved, renamed, or is currently enjoying recess in the playground. Let&apos;s guide you back to safety!
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
              <Link href="/">
                <CtaButton variant="primary" size="lg" className="shadow-lg">
                  <span>Back to Homepage</span>
                </CtaButton>
              </Link>

              <CtaButton
                variant="yellow"
                size="lg"
                onClick={() => handleOpenEnquiry("admissions")}
                className="shadow-lg"
              >
                <span>Book a Campus Visit</span>
              </CtaButton>
            </div>
          </Reveal>

          {/* Helpful Navigation Cards */}
          <Reveal delay={0.3}>
            <div className="mt-14 pt-10 border-t border-border-soft text-left">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-brand-violet">
                  Popular Pages You Might Be Looking For
                </h2>
                <span className="text-xs text-text-muted hidden sm:inline">
                  Click any card to navigate
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {quickLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group p-4 rounded-2xl bg-brand-cream/40 border border-border-soft hover:bg-white hover:border-brand-violet hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-border-soft flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-extrabold text-text-primary group-hover:text-brand-violet transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-bold text-brand-violet px-2 py-0.5 rounded-full bg-brand-violet-soft">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-text-body mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Direct Assistance Strip */}
          <Reveal delay={0.35}>
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-brand-violet-soft/70 border border-border-soft flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-violet text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  ?
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-text-primary">
                    Need immediate assistance from our admissions desk?
                  </p>
                  <p className="text-xs text-text-body">
                    Call our team at <a href={`tel:${siteConfig.phone}`} className="font-extrabold text-brand-violet hover:underline">{siteConfig.phone}</a> or email <a href={`mailto:${siteConfig.email}`} className="font-extrabold text-brand-violet hover:underline">{siteConfig.email}</a>.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="shrink-0 text-xs font-bold text-brand-violet hover:text-brand-violet-dark inline-flex items-center gap-1"
              >
                <span>Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

