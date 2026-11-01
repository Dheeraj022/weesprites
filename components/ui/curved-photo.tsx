"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CurvedPhotoProps {
  src: string;
  alt: string;
  variant?: "blob1" | "blob2" | "blob3" | "hero" | "rounded";
  offsetBg?: "yellow" | "lilac" | "violet" | "none";
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  badge?: React.ReactNode;
  animateBlob?: boolean;
}

export function CurvedPhoto({
  src,
  alt,
  variant = "hero",
  offsetBg = "yellow",
  aspectRatio,
  className,
  imageClassName,
  badge,
  animateBlob = true,
}: CurvedPhotoProps) {
  const shapeMap = {
    hero: "rounded-[48%_52%_68%_32%/42%_48%_52%_58%]",
    blob1: "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    blob2: "rounded-[40%_60%_70%_30%/40%_40%_60%_55%]",
    blob3: "rounded-[55%_45%_40%_60%/50%_60%_40%_50%]",
    rounded: "rounded-3xl",
  };

  const offsetShapeMap = {
    hero: "rounded-[46%_54%_65%_35%/40%_50%_50%_60%]",
    blob1: "rounded-[58%_42%_32%_68%/58%_32%_68%_42%]",
    blob2: "rounded-[42%_58%_68%_32%/42%_42%_58%_58%]",
    blob3: "rounded-[53%_47%_42%_58%/48%_58%_42%_52%]",
    rounded: "rounded-3xl",
  };

  const offsetBgColor = {
    yellow: "bg-brand-yellow",
    lilac: "bg-brand-lilac",
    violet: "bg-brand-violet",
    none: "transparent",
  };

  const isRounded = variant === "rounded";

  return (
    <div className={cn("group relative inline-block w-full select-none", className)}>
      {/* Decorative offset backing shape with organic morphing */}
      {offsetBg !== "none" && (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 translate-x-1 translate-y-1 sm:translate-x-2.5 sm:translate-y-2.5 md:translate-x-3 md:translate-y-3 scale-[1.01] pointer-events-none opacity-90 transition-transform duration-500",
            offsetShapeMap[variant],
            offsetBgColor[offsetBg],
            animateBlob && !isRounded && "animate-blob-morph-offset"
          )}
        />
      )}

      {/* Main photo container with border and organic shape */}
      <div
        className={cn(
          "relative overflow-hidden border-3 md:border-4 border-brand-violet bg-white shadow-soft transition-all duration-500 group-hover:scale-[1.02] w-full",
          shapeMap[variant],
          animateBlob && !isRounded && (variant === "hero" ? "animate-blob-hero" : "animate-blob-morph")
        )}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-105",
            imageClassName
          )}
        />
      </div>

      {/* Optional floating badge/pill overlapping the photo with floating animation */}
      {badge && (
        <div
          className={cn(
            "absolute inset-0 z-10 pointer-events-none",
            animateBlob ? "animate-float-gentle" : ""
          )}
        >
          {badge}
        </div>
      )}
    </div>
  );
}
