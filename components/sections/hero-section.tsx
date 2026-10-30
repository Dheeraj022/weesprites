"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Heart, ChevronLeft, ChevronRight, Briefcase, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides, HeroSlide } from "@/lib/content";
import { CtaButton } from "../ui/cta-button";
import { CurvedPhoto } from "../ui/curved-photo";
import { DottedPath } from "../ui/dotted-path";
import { WaveDivider } from "../ui/wave-divider";
import { FloatingBlob } from "../ui/floating-blob";

export interface HeroSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide: HeroSlide = heroSlides[currentIdx];

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Automatic slide rotation every 7 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-violet-soft/30 to-brand-violet-soft/60 pt-6 md:pt-10 pb-16 md:pb-24 select-none"
    >
      {/* Ambient animated floating blobs */}
      <FloatingBlob color="yellow" size="lg" className="-top-16 -left-16" speed="slow" />
      <FloatingBlob color="lilac" size="xl" className="top-12 -right-20" speed="normal" />

      {/* Decorative background doodles */}
      <div
        aria-hidden="true"
        className="absolute top-6 left-8 text-brand-violet/20 pointer-events-none hidden md:block"
      >
        <Heart className="w-8 h-8 fill-brand-violet/10 stroke-brand-violet/40 -rotate-12" />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-10 right-12 pointer-events-none hidden lg:block"
      >
        {/* Cute hand-drawn sun doodle */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="text-brand-yellow-dark animate-spin-slow"
          style={{ animationDuration: "30s" }}
        >
          <circle cx="50" cy="50" r="22" fill="#FFD83D" stroke="#F4B900" strokeWidth="3" />
          <circle cx="43" cy="46" r="2.5" fill="#32145F" />
          <circle cx="57" cy="46" r="2.5" fill="#32145F" />
          <path d="M43 54 Q50 60 57 54" stroke="#32145F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M50 15 L50 22 M50 78 L50 85 M15 50 L22 50 M78 50 L85 50 M25 25 L31 31 M69 69 L75 75 M75 25 L69 31 M25 75 L31 69" stroke="#F4B900" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Slide Switcher Tabs */}
        <div className="flex items-center justify-center sm:justify-start mb-6">
          <div className="inline-flex p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-border-soft shadow-xs gap-1">
            {heroSlides.map((s, idx) => {
              const active = idx === currentIdx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-extrabold transition-all duration-300 ${
                    active
                      ? "bg-brand-violet text-white shadow-sm"
                      : "text-text-body hover:text-brand-violet hover:bg-brand-violet-soft/70"
                  }`}
                >
                  {s.id === "admissions" ? (
                    <GraduationCap className={`w-4 h-4 ${active ? "text-brand-yellow" : "text-brand-violet"}`} />
                  ) : (
                    <Briefcase className={`w-4 h-4 ${active ? "text-brand-yellow" : "text-brand-violet"}`} />
                  )}
                  <span>{s.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Slide Content with Framer Motion AnimatePresence */}
        <div className="relative min-h-[460px] sm:min-h-[420px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-6 xl:col-span-7 text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-violet-soft border border-border-soft">
                  <Sparkles className="w-4 h-4 text-brand-violet" />
                  <span className="text-xs md:text-sm font-extrabold text-brand-violet tracking-wide uppercase">
                    {slide.eyebrow}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-brand-violet">
                  {slide.headlineFirst}{" "}
                  <span className="text-brand-yellow-dark block sm:inline">
                    {slide.headlineSecond}
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-text-body max-w-xl font-normal leading-relaxed">
                  {slide.supportingText}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <CtaButton
                    variant={slide.primaryCta.variant}
                    size="lg"
                    onClick={() => onOpenEnquiry(slide.primaryCta.action)}
                    className="shadow-lg hover:shadow-xl font-extrabold"
                  >
                    {slide.primaryCta.label}
                  </CtaButton>

                  <CtaButton
                    variant={slide.secondaryCta.variant}
                    size="lg"
                    onClick={() => onOpenEnquiry(slide.secondaryCta.action)}
                    className="shadow-lg hover:shadow-xl font-bold"
                  >
                    {slide.secondaryCta.label}
                  </CtaButton>
                </div>

                {/* Dotted flight path doodle with paper plane */}
                <div className="relative pt-4 hidden sm:block">
                  <DottedPath variant="flight" className="absolute -top-2 left-60" />
                  <div className="absolute top-2 left-88 transform rotate-12 text-brand-violet">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#E8D7FF" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image with Organic Mask and Floating Badge */}
              <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px]">
                  <CurvedPhoto
                    src={slide.heroImage}
                    alt={slide.heroAlt}
                    variant={slide.variant}
                    offsetBg="yellow"
                    className="w-full"
                    badge={
                      <div className="absolute -bottom-2 -right-2 md:bottom-2 md:-right-2 bg-brand-yellow rounded-3xl p-3 md:p-4 shadow-card border-2 border-brand-violet-dark text-center select-none transform rotate-3 hover:rotate-0 transition-transform">
                        {slide.badge.items.map((item, i) => (
                          <p
                            key={i}
                            className="text-xs md:text-sm font-black text-brand-violet uppercase tracking-tight leading-tight"
                          >
                            {item}
                          </p>
                        ))}
                        <div className="flex justify-center mt-1">
                          {slide.badge.icon === "Heart" ? (
                            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5 text-brand-violet fill-brand-violet" />
                          )}
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls: Arrows & Indicator Dots */}
        <div className="mt-8 pt-4 flex items-center justify-between sm:justify-center gap-4 relative z-20">
          {/* Previous Slide Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-brand-violet shadow-sm hover:shadow border border-border-soft flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIdx
                    ? "w-8 bg-brand-violet"
                    : "w-2.5 bg-brand-violet/30 hover:bg-brand-violet/60"
                }`}
              />
            ))}
          </div>

          {/* Next Slide Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-brand-violet shadow-sm hover:shadow border border-border-soft flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Organic wavy bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fillColor="#FFFFFF" position="bottom" height={52} />
      </div>
    </section>
  );
}
