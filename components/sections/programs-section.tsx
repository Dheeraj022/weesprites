"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programsContent, ProgramItem } from "@/lib/content";
import { ProgramCard } from "./program-card";
import { Reveal } from "../ui/reveal";
import { CtaButton } from "../ui/cta-button";

export interface ProgramsSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function ProgramsSection({ onOpenEnquiry }: ProgramsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <section id="programs" className="py-16 md:py-24 bg-brand-cream/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div className="max-w-2xl text-left">
            <Reveal delay={0.05}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                OUR PROGRAMS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mt-2">
                {programsContent.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 text-sm md:text-base text-text-body">
                {programsContent.supportingText}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/programs">
                <CtaButton
                  variant="outline"
                  size="sm"
                  className="bg-white/80 border-brand-violet/30 text-brand-violet hover:bg-brand-violet hover:text-white"
                >
                  Explore Full Curriculum
                </CtaButton>
              </Link>
              <CtaButton
                variant="lilac"
                size="sm"
                onClick={() => onOpenEnquiry("admissions")}
                className="self-start md:self-auto shrink-0"
              >
                Enquire for Admissions
              </CtaButton>
            </div>
          </Reveal>
        </div>

        {/* 6 Cards Grid: 1 col on mobile, 2 on tablet, 3 on laptop, 6 on wide desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
          {programsContent.programs.map((prog, idx) => (
            <Reveal key={prog.id} delay={0.1 + idx * 0.06}>
              <ProgramCard
                program={prog}
                onSelect={(p) => {
                  setSelectedProgram(p);
                  onOpenEnquiry("admissions");
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

