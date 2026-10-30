"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DottedPathProps {
  variant?: "flight" | "curve-left" | "curve-right" | "wave";
  className?: string;
  strokeColor?: string;
}

export function DottedPath({
  variant = "flight",
  className,
  strokeColor = "#6127B8",
}: DottedPathProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none select-none z-0", className)}
    >
      {variant === "flight" && (
        <svg
          width="140"
          height="120"
          viewBox="0 0 140 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 100 C 40 100, 20 40, 60 50 C 90 60, 80 10, 130 15"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            className="animate-dash"
          />
          <circle cx="10" cy="100" r="3.5" fill="#F4B900" />
          <circle cx="60" cy="50" r="3.5" fill="#F4B900" />
          <circle cx="130" cy="15" r="4" fill="#6127B8" />
        </svg>
      )}

      {variant === "curve-left" && (
        <svg
          width="180"
          height="140"
          viewBox="0 0 180 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M160 10 C 100 20, 30 50, 40 110 C 45 130, 80 135, 100 120"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 8"
          />
          <circle cx="160" cy="10" r="3" fill="#F4B900" />
          <circle cx="100" cy="120" r="3.5" fill="#F4B900" />
        </svg>
      )}

      {variant === "curve-right" && (
        <svg
          width="200"
          height="160"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20 C 80 10, 160 40, 170 100 C 175 130, 130 150, 90 140"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 8"
          />
          <circle cx="20" cy="20" r="3.5" fill="#F4B900" />
          <circle cx="90" cy="140" r="3.5" fill="#F4B900" />
        </svg>
      )}

      {variant === "wave" && (
        <svg
          width="220"
          height="60"
          viewBox="0 0 220 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 30 Q 55 5, 110 30 T 215 30"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 7"
          />
          <circle cx="5" cy="30" r="3" fill="#F4B900" />
          <circle cx="110" cy="30" r="3" fill="#F4B900" />
          <circle cx="215" cy="30" r="3" fill="#F4B900" />
        </svg>
      )}
    </div>
  );
}

