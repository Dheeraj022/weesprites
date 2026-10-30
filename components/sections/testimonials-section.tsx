"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Heart } from "lucide-react";
import { testimonialsContent, admissionsCtaContent } from "@/lib/content";
import { CtaButton } from "../ui/cta-button";
import { Reveal } from "../ui/reveal";

export interface TestimonialsSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function TestimonialsSection({ onOpenEnquiry }: TestimonialsSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const total = testimonialsContent.testimonials.length;

  const prev = () => setCurrentIdx((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrentIdx((i) => (i === total - 1 ? 0 : i + 1));
  const currentTestimonial = testimonialsContent.testimonials[currentIdx];

  return (
    <section id="admissions" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Testimonials (Pale Lilac) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl md:rounded-4xl bg-brand-violet-soft/70 p-6 md:p-8 border border-border-soft shadow-sm">
            <div>
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                  WHAT PARENTS SAY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mt-1.5">
                  {testimonialsContent.heading}
                </h3>
              </Reveal>

              {/* White Testimonial Quote Box */}
              <Reveal delay={0.15} className="mt-6">
                <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 shadow-sm border border-border-soft">
                  <div className="w-8 h-8 rounded-full bg-brand-violet-soft flex items-center justify-center text-brand-violet mb-3">
                    <Quote className="w-4 h-4 fill-brand-violet" />
                  </div>
                  <p className="text-sm md:text-base text-text-body italic leading-relaxed">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 pt-3 border-t border-border-soft/60 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs md:text-sm font-black text-text-primary">
                        {currentTestimonial.parentName}
                      </h4>
                      <p className="text-[11px] text-brand-violet font-semibold">
                        {currentTestimonial.relation} ({currentTestimonial.childProgram})
                      </p>
                    </div>
                    {currentTestimonial.isDraftPendingApproval && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-violet-soft text-brand-violet font-bold">
                        Draft Sample
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Carousel Navigation Buttons & Indicators */}
            <div className="mt-6 flex items-center justify-between pt-2">
              <div className="flex gap-2">
                {testimonialsContent.testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      currentIdx === i
                        ? "w-6 bg-brand-violet"
                        : "w-2 bg-brand-violet/25 hover:bg-brand-violet/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-violet hover:bg-brand-violet hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-violet hover:bg-brand-violet hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Admissions CTA (Light Yellow) */}
          <div className="lg:col-span-6 relative flex flex-col justify-between rounded-3xl md:rounded-4xl bg-brand-yellow-light/80 p-6 md:p-8 border border-brand-yellow-dark/30 shadow-sm overflow-hidden">
            {/* Top decorative doodle */}
            <div aria-hidden="true" className="absolute top-4 right-4 text-brand-yellow-dark pointer-events-none opacity-60">
              <Sparkles className="w-7 h-7" />
            </div>

            <div className="relative z-10 text-left">
              <Reveal delay={0.1}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet-dark">
                  ADMISSIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mt-1.5">
                  {admissionsCtaContent.heading}
                </h3>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-3 text-sm md:text-base text-text-body max-w-sm leading-relaxed">
                  {admissionsCtaContent.body}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
              <Reveal delay={0.25} className="w-full sm:w-auto">
                <CtaButton
                  variant="primary"
                  size="md"
                  onClick={() => onOpenEnquiry("admissions")}
                  className="w-full sm:w-auto shadow-md"
                >
                  {admissionsCtaContent.buttonLabel}
                </CtaButton>
              </Reveal>

              {/* Child photo */}
              <Reveal delay={0.3} className="shrink-0">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] overflow-hidden border-3 border-brand-violet shadow-sm bg-white">
                  <img
                    src={admissionsCtaContent.image}
                    alt={admissionsCtaContent.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
