import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string | React.ReactNode;
  highlightedText?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  heading,
  highlightedText,
  description,
  align = "left",
  className,
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col mb-8 md:mb-12",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs md:text-sm font-extrabold uppercase tracking-wider mb-2 select-none",
            isDark ? "text-brand-yellow" : "text-brand-violet/85"
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-text-primary"
        )}
      >
        {heading}
        {highlightedText && (
          <span className="text-brand-yellow-dark ml-2 inline-block">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3 md:mt-4 text-base md:text-lg max-w-2xl leading-relaxed font-normal",
            isDark ? "text-white/80" : "text-text-body"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

