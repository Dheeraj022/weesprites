"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, Smile, GraduationCap } from "lucide-react";
import { aboutContent, trustPoints } from "@/lib/content";
import { CtaButton } from "../ui/cta-button";
import { CurvedPhoto } from "../ui/curved-photo";
import { Reveal } from "../ui/reveal";
import { FloatingBlob } from "../ui/floating-blob";

export interface AboutSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function AboutSection({ onOpenEnquiry }: AboutSectionProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Heart: <Heart className="w-5 h-5 text-brand-violet" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    Smile: <Smile className="w-5 h-5 text-brand-yellow-dark" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-brand-violet" />,
  };

  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Ambient background blob motion */}
      <FloatingBlob color="lilac" size="lg" className="-top-10 -left-12 opacity-60" speed="normal" />
      <FloatingBlob color="yellow" size="md" className="bottom-4 right-10 opacity-50" speed="slow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photo with Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.1}>
              <div className="relative w-full max-w-[340px] sm:max-w-[420px]">
                <CurvedPhoto
                  src={aboutContent.image}
                  alt={aboutContent.imageAlt}
                  variant="blob2"
                  offsetBg="yellow"
                  aspectRatio="4/3"
                  className="w-full"
                  badge={
                    <div className="absolute top-1 left-1 sm:-top-4 sm:-left-3 md:-top-5 md:-left-4 pointer-events-auto w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full bg-brand-violet text-white p-2 sm:p-2.5 shadow-card flex flex-col items-center justify-center text-center border-2 border-brand-yellow transform -rotate-6 hover:rotate-0 transition-transform shrink-0">
                      <span className="text-[11px] md:text-xs font-black leading-tight whitespace-nowrap">
                        Childhood Today
                      </span>
                      <span className="text-[9px] md:text-[10px] font-semibold text-brand-yellow-light mt-0.5 whitespace-nowrap">
                        Confidence Tomorrow
                      </span>
                    </div>
                  }
                />
              </div>
            </Reveal>
          </div>

          {/* Center Column: About Copy & Action */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <Reveal delay={0.15}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                {aboutContent.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary mt-2 leading-tight">
                {aboutContent.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {aboutContent.body}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="pt-2">
                <Link href="/about">
                  <CtaButton
                    variant="yellow"
                    size="md"
                  >
                    {aboutContent.buttonLabel}
                  </CtaButton>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Key Values / Trust Points */}
          <div className="lg:col-span-3 space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border-soft lg:pl-6">
            {trustPoints.map((point, idx) => (
              <Reveal key={point.title} delay={0.15 + idx * 0.08}>
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-brand-cream/60 hover:bg-brand-violet-soft/50 transition-colors border border-border-soft/60">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-border-soft">
                    {iconMap[point.icon]}
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-black text-text-primary">
                      {point.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-text-body mt-0.5 leading-snug">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
