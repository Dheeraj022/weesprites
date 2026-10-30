"use client";

import React from "react";
import Image from "next/image";
import { teachersContent } from "@/lib/content";
import { CtaButton } from "../ui/cta-button";
import { Reveal } from "../ui/reveal";
import { DottedPath } from "../ui/dotted-path";

export interface TeachersSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function TeachersSection({ onOpenEnquiry }: TeachersSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-brand-violet-soft/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Staff Team Photo */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal delay={0.1}>
              <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden bg-white p-2 shadow-card border-2 border-brand-violet/20 hover:border-brand-violet transition-colors">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-brand-violet-soft/40">
                  <Image
                    src="/images/teachers-team.jpg"
                    alt={teachersContent.imageAlt}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs md:text-sm font-extrabold text-brand-violet">
                    Dedicated Educators & Leadership Team
                  </p>
                  <p className="text-[11px] text-text-body mt-0.5">
                    WEE SPRITES Preschool & Day Care Annual Celebration
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="lg:col-span-6 text-left space-y-5 relative">
            <DottedPath variant="curve-left" className="absolute -top-10 -right-6 hidden sm:block" />

            <Reveal delay={0.1}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                OUR TEACHERS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mt-2 leading-tight">
                {teachersContent.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm md:text-base text-text-body leading-relaxed max-w-lg">
                {teachersContent.body}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-2">
                <CtaButton
                  variant="yellow"
                  size="md"
                  onClick={() => onOpenEnquiry("admissions")}
                >
                  {teachersContent.ctaLabel}
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
