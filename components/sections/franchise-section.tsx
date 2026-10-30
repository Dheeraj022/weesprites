"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { franchiseContent } from "@/lib/content";
import { CtaButton } from "../ui/cta-button";
import { CurvedPhoto } from "../ui/curved-photo";
import { WaveDivider } from "../ui/wave-divider";
import { Reveal } from "../ui/reveal";
import { FloatingBlob } from "../ui/floating-blob";

export interface FranchiseSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function FranchiseSection({ onOpenEnquiry }: FranchiseSectionProps) {
  return (
    <section id="franchise" className="relative bg-brand-violet text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Ambient background blob motion */}
      <FloatingBlob color="yellow" size="lg" className="-top-8 -right-16 opacity-25" speed="slow" />
      <FloatingBlob color="lilac" size="xl" className="bottom-0 -left-20 opacity-20" speed="normal" />
      {/* Top Wave divider */}
      <div className="absolute top-0 left-0 right-0">
        <WaveDivider fillColor="#FFFFFF" position="top" height={45} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Copy, Highlights, CTA */}
          <div className="lg:col-span-7 text-left space-y-6">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4 text-brand-yellow" />
                <span className="text-xs md:text-sm font-black uppercase tracking-wider text-brand-yellow">
                  PRIMARY BUSINESS OPPORTUNITY
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Bring <span className="text-brand-yellow underline decoration-wavy decoration-brand-yellow/60">WEE SPRITES</span> to Your City
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                {franchiseContent.body}
              </p>
            </Reveal>

            {/* Franchise Partner Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {franchiseContent.highlights.map((item, idx) => (
                <Reveal key={item} delay={0.2 + idx * 0.05}>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-white/90">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <div className="pt-3">
                <CtaButton
                  variant="yellow"
                  size="lg"
                  onClick={() => onOpenEnquiry("franchise")}
                  className="shadow-xl"
                >
                  {franchiseContent.buttonLabel}
                </CtaButton>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Photo of Child with Paper Plane */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.2}>
              <div className="relative w-full max-w-[280px] sm:max-w-[340px]">
                <CurvedPhoto
                  src={franchiseContent.image}
                  alt={franchiseContent.imageAlt}
                  variant="blob2"
                  offsetBg="yellow"
                  aspectRatio="square"
                  className="w-full"
                  badge={
                    <div className="absolute -bottom-3 -left-2 md:-bottom-3 md:-left-4 bg-brand-yellow text-text-primary rounded-3xl p-3 shadow-card border-2 border-brand-violet-dark text-center select-none transform -rotate-3 hover:rotate-0 transition-transform">
                      <p className="text-xs md:text-sm font-black uppercase tracking-tight">
                        Shape Future
                      </p>
                      <p className="text-[11px] font-bold text-brand-violet">
                        Grow with Us
                      </p>
                    </div>
                  }
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fillColor="#FFFFFF" position="bottom" height={45} />
      </div>
    </section>
  );
}
