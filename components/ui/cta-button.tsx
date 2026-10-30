"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "yellow" | "lilac" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  badgeArrow?: boolean;
  arrowClassName?: string;
  children: React.ReactNode;
}

export const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      showArrow = true,
      badgeArrow = false,
      arrowClassName,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-2 select-none group cursor-pointer text-center";

    const variantStyles = {
      primary:
        "bg-brand-violet text-white shadow-md hover:bg-brand-violet-dark hover:shadow-lg hover:-translate-y-0.5",
      yellow:
        "bg-brand-yellow text-text-primary shadow-md hover:bg-brand-yellow-dark hover:shadow-lg hover:-translate-y-0.5",
      lilac:
        "bg-brand-violet-soft text-brand-violet hover:bg-brand-lilac hover:text-brand-violet-dark",
      outline:
        "border-2 border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-white",
      white:
        "bg-white text-brand-violet shadow-md hover:bg-brand-cream hover:shadow-lg hover:-translate-y-0.5",
    };

    const sizeStyles = {
      sm: badgeArrow ? "pl-3.5 pr-1.5 py-1.5 text-xs md:text-sm whitespace-nowrap" : "px-3.5 py-2 text-xs md:text-sm gap-1.5 whitespace-nowrap",
      md: badgeArrow ? "pl-4 pr-2 py-2 sm:pl-5 sm:pr-2.5 sm:py-2.5 md:pl-6 md:pr-2.5 md:py-2.5 text-xs sm:text-sm md:text-base whitespace-normal sm:whitespace-nowrap" : "px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base gap-2 whitespace-normal sm:whitespace-nowrap",
      lg: badgeArrow ? "pl-4 pr-2 py-2.5 sm:pl-6 sm:pr-3 sm:py-3 md:pl-8 md:pr-3.5 md:py-3.5 text-sm sm:text-base md:text-lg whitespace-normal sm:whitespace-nowrap" : "px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg gap-2 whitespace-normal sm:whitespace-nowrap",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const arrowIcon = showArrow && (
      badgeArrow ? (
        <span
          className={cn(
            "rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 shadow-xs ml-2",
            variant === "yellow" ? "bg-brand-violet text-white" : "bg-white text-brand-violet",
            size === "sm" ? "w-5 h-5" : size === "lg" ? "w-8 h-8" : "w-6 h-6 md:w-7 md:h-7"
          )}
        >
          <ArrowRight
            className={cn(
              size === "sm" ? "w-3 h-3 stroke-[2.5]" : size === "lg" ? "w-4 h-4 stroke-[2.5]" : "w-3.5 h-3.5 stroke-[2.5]",
              arrowClassName
            )}
          />
        </span>
      ) : (
        <ArrowRight
          className={cn(
            "w-4 h-4 md:w-4.5 md:h-4.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0",
            arrowClassName
          )}
        />
      )
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          <span>{children}</span>
          {arrowIcon}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} onClick={onClick} {...props}>
        <span>{children}</span>
        {arrowIcon}
      </button>
    );
  }
);

CtaButton.displayName = "CtaButton";

