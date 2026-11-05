"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryContent, GalleryItem } from "@/lib/content";
import { Reveal } from "../ui/reveal";
import { CtaButton } from "../ui/cta-button";

export function GallerySection() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const displayedItems = galleryContent.items.slice(0, 5);
  const currentIndex = activePhoto
    ? galleryContent.items.findIndex((i) => i.id === activePhoto.id)
    : 0;

  const openLightbox = (item: GalleryItem) => setActivePhoto(item);
  const closeLightbox = () => setActivePhoto(null);

  const showPrev = () => {
    const newIdx =
      (currentIndex - 1 + galleryContent.items.length) % galleryContent.items.length;
    setActivePhoto(galleryContent.items[newIdx]);
  };

  const showNext = () => {
    const newIdx = (currentIndex + 1) % galleryContent.items.length;
    setActivePhoto(galleryContent.items[newIdx]);
  };

  useEffect(() => {
    if (!activePhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, currentIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div className="max-w-2xl text-left">
            <Reveal delay={0.05}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                EVENTS AND GALLERY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mt-2">
                {galleryContent.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 text-sm md:text-base text-text-body">
                {galleryContent.supportingText}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Link href="/gallery">
              <CtaButton
                variant="lilac"
                size="sm"
                className="self-start md:self-auto shrink-0 font-bold"
              >
                {galleryContent.ctaLabel} →
              </CtaButton>
            </Link>
          </Reveal>
        </div>

        {/* 5 Gallery Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {displayedItems.map((item, idx) => (
            <Reveal key={item.id} delay={0.1 + idx * 0.06}>
              <div
                onClick={() => openLightbox(item)}
                className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-brand-violet-soft/60 cursor-pointer shadow-sm hover:shadow-floating hover:-translate-y-2 transition-all duration-500 ease-out border border-border-soft"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover overlay with zoom icon only (no text overlay) */}
                <div className="absolute inset-0 bg-brand-violet-dark/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/95 text-brand-violet shadow-lg backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Pure image viewer without text */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-violet-dark/85 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Container - Images only, no text */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/10] max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/95 flex items-center justify-center">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
