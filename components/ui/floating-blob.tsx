"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FloatingBlobProps {
  color?: "yellow" | "lilac" | "violet" | "cream";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  speed?: "slow" | "normal" | "gentle";
}

export function FloatingBlob({
  color = "lilac",
  size = "md",
  className,
  speed = "slow",
}: FloatingBlobProps) {
  const colorMap = {
    yellow: "bg-brand-yellow-light/40",
    lilac: "bg-brand-lilac/40",
    violet: "bg-brand-violet-soft/60",
    cream: "bg-brand-cream/90",
  };

  const sizeMap = {
    sm: "w-32 h-32 md:w-44 md:h-44",
    md: "w-48 h-48 md:w-64 md:h-64",
    lg: "w-72 h-72 md:w-96 md:h-96",
    xl: "w-96 h-96 md:w-[32rem] md:h-[32rem]",
  };

  const animMap = {
    slow: "animate-blob-morph animate-float-slow",
    normal: "animate-blob-hero",
    gentle: "animate-float-gentle",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-2xl pointer-events-none -z-0 opacity-70 mix-blend-multiply",
        colorMap[color],
        sizeMap[size],
        animMap[speed],
        className
      )}
    />
  );
}

