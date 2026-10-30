import React from "react";
import { cn } from "@/lib/utils";

export interface WaveDividerProps {
  fillColor?: string;
  position?: "top" | "bottom";
  flipX?: boolean;
  className?: string;
  height?: number;
}

export function WaveDivider({
  fillColor = "#F2E9FF",
  position = "bottom",
  flipX = false,
  className,
  height = 48,
}: WaveDividerProps) {
  const isTop = position === "top";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full overflow-hidden leading-none pointer-events-none select-none z-10",
        isTop ? "rotate-180 -mt-1" : "-mb-1",
        flipX && "-scale-x-100",
        className
      )}
      style={{ height: `${height}px` }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

