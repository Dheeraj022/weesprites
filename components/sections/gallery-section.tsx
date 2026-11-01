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

                {/* Hover overlay with title & zoom icon */}
                <div className="absolute inset-0 bg-brand-violet-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-brand-yellow tracking-wider">
                        {item.category}
                      </p>
                      <h4 className="text-xs font-black leading-tight mt-0.5 text-white">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white shrink-0 ml-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-brand-cream/80 border-b border-border-soft">
              <div>
                <span className="text-xs font-bold uppercase text-brand-violet tracking-wider">
                  {activePhoto.category} • Photo {currentIndex + 1} of {galleryContent.items.length}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-text-primary">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close photo preview"
                className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-text-body hover:bg-brand-violet hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image with Navigation Arrows */}
            <div className="relative flex-1 bg-black/90 flex items-center justify-center min-h-[300px] sm:min-h-[460px] overflow-hidden group">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="max-h-[62vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-brand-violet shadow-md flex items-center justify-center transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-brand-violet shadow-md flex items-center justify-center transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Thumbnail strip */}
            <div className="p-3 sm:p-4 bg-white border-t border-border-soft flex flex-col gap-2.5">
              <p className="text-xs sm:text-sm text-text-body">
                {activePhoto.alt}
              </p>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin">
                {galleryContent.items.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePhoto(item)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      idx === currentIndex
                        ? "border-brand-violet scale-105 shadow-sm"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
