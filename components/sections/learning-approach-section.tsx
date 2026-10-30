"use client";

import React from "react";
import Image from "next/image";
import { Palette, Wrench, Users } from "lucide-react";
import { learningApproachContent } from "@/lib/content";
import { CtaButton } from "../ui/cta-button";
import { Reveal } from "../ui/reveal";
import { DottedPath } from "../ui/dotted-path";
import { FloatingBlob } from "../ui/floating-blob";
import { cn } from "@/lib/utils";

export interface LearningApproachSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function LearningApproachSection({ onOpenEnquiry }: LearningApproachSectionProps) {
  const iconList = [
    <Palette key="1" className="w-5 h-5 text-rose-500" />,
    <Wrench key="2" className="w-5 h-5 text-teal-600" />,
    <Users key="3" className="w-5 h-5 text-brand-violet" />,
  ];

  const offsetBgColors = ["bg-brand-yellow", "bg-brand-lilac", "bg-brand-yellow"];
  const animationDelays = ["0s", "2.8s", "5.4s"];
  const offsetDelays = ["0.5s", "3.3s", "5.9s"];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Ambient animated floating blobs in background */}
      <FloatingBlob color="yellow" size="lg" className="-top-12 -left-16 opacity-35" speed="slow" />
      <FloatingBlob color="lilac" size="xl" className="top-1/4 -right-24 opacity-40" speed="normal" />
      <FloatingBlob color="violet" size="md" className="-bottom-16 left-1/3 opacity-30" speed="gentle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-4 text-left space-y-5">
            <Reveal delay={0.05}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary mt-2 leading-tight">
                {learningApproachContent.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                {learningApproachContent.supportingText}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-2">
                <CtaButton
                  variant="yellow"
                  size="md"
                  onClick={() => onOpenEnquiry("admissions")}
                >
                  Discover Our Approach
                </CtaButton>
              </div>
            </Reveal>

            {/* Cute flower doodle */}
            <div className="pt-4 text-rose-400 hidden sm:block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" fill="#FFF5BD" />
                <path d="M12 2C13 5 15 5 15 7C15 9 13 9 12 12C11 9 9 9 9 7C9 5 11 2 12 2Z" fill="#F4B900" />
                <path d="M22 12C19 13 19 15 17 15C15 15 15 13 12 12C15 11 15 9 17 9C19 9 19 11 22 12Z" fill="#FFD83D" />
                <path d="M12 22C11 19 9 19 9 17C9 15 11 15 12 12C13 15 15 15 15 17C15 19 13 22 12 22Z" fill="#F4B900" />
                <path d="M2 12C5 11 5 9 7 9C9 9 9 11 12 12C9 13 9 15 7 15C5 15 5 13 2 12Z" fill="#FFD83D" />
              </svg>
            </div>
          </div>

          {/* Right 3 Photo Cards with Continuous Blob Motion */}
          <div className="lg:col-span-8 relative">
            <DottedPath variant="curve-right" className="absolute -top-12 -left-8 hidden md:block" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {learningApproachContent.pillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={0.1 + idx * 0.1}>
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    {/* Organic curved photo frame with continuous moving blob motion */}
                    <div className="relative aspect-[4/3] w-full max-w-[280px] sm:max-w-none mb-2">
                      {/* Offset backing organic blob with morphing animation */}
                      <div
                        aria-hidden="true"
                        style={{
                          animationDelay: offsetDelays[idx],
                          animationDuration: "9s",
                        }}
                        className={cn(
                          "absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[40%_60%_70%_30%/40%_40%_60%_55%] pointer-events-none opacity-85 animate-blob-morph-offset transition-transform duration-500 group-hover:translate-x-3.5 group-hover:translate-y-3.5",
                          offsetBgColors[idx]
                        )}
                      />

                      {/* Main organic photo container with continuous blob morphing */}
                      <div
                        style={{
                          animationDelay: animationDelays[idx],
                          animationDuration: "9s",
                        }}
                        className="relative w-full h-full overflow-hidden border-3 md:border-4 border-brand-violet bg-white shadow-soft animate-blob-morph group-hover:scale-105 transition-all duration-500"
                      >
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Badge / Title */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-brand-cream border border-border-soft group-hover:scale-110 transition-transform duration-300">
                        {iconList[idx]}
                      </div>
                      <h3 className="text-sm md:text-base font-extrabold text-text-primary group-hover:text-brand-violet transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-xs text-text-body leading-relaxed px-2">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
