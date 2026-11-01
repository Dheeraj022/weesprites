"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { whyChooseContent } from "@/lib/content";
import { CurvedPhoto } from "../ui/curved-photo";
import { WaveDivider } from "../ui/wave-divider";
import { Reveal } from "../ui/reveal";

export function WhyChooseUsSection() {
  return (
    <section className="relative bg-brand-violet text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Top Wave divider */}
      <div className="absolute top-0 left-0 right-0">
        <WaveDivider fillColor="#FFFFFF" position="top" height={45} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Benefit Bullets */}
          <div className="lg:col-span-7 text-left space-y-6">
            <Reveal delay={0.05}>
              <span className="text-xs md:text-sm font-black uppercase tracking-wider text-brand-yellow">
                WHY CHOOSE WEE SPRITES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 leading-tight">
                {whyChooseContent.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm md:text-base text-white/85 max-w-xl leading-relaxed">
                {whyChooseContent.supportingText}
              </p>
            </Reveal>

            {/* 6 checkmark benefits in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {whyChooseContent.benefits.map((benefit, idx) => (
                <Reveal key={benefit} delay={0.15 + idx * 0.05}>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow text-brand-violet-dark flex items-center justify-center shrink-0 shadow-sm font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white/95">
                      {benefit}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Child Photo with Cloud Pill */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.2}>
              <div className="relative w-full max-w-[280px] sm:max-w-[340px]">
                <CurvedPhoto
                  src={whyChooseContent.image}
                  alt={whyChooseContent.imageAlt}
                  variant="blob3"
                  offsetBg="yellow"
                  aspectRatio="square"
                  className="w-full"
                  badge={
                    <div className="absolute bottom-1 right-1 sm:-bottom-3 sm:-right-2 md:bottom-2 md:-right-4 pointer-events-auto w-max min-w-[90px] sm:min-w-[105px] bg-brand-yellow text-text-primary rounded-2xl sm:rounded-3xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-card border-2 border-brand-violet-dark text-center select-none transform rotate-3 hover:rotate-0 transition-transform">
                      <p className="text-xs sm:text-sm font-black uppercase tracking-tight whitespace-nowrap">
                        Curiosity
                      </p>
                      <p className="text-xs sm:text-sm font-black uppercase tracking-tight whitespace-nowrap">
                        Creativity
                      </p>
                      <p className="text-xs sm:text-sm font-black uppercase tracking-tight whitespace-nowrap">
                        Confidence
                      </p>
                    </div>
                  }
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Wave divider into next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fillColor="#FFFFFF" position="bottom" height={45} />
      </div>
    </section>
  );
}
