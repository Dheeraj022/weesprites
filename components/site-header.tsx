"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "./ui/cta-button";
import { MobileNav } from "./mobile-nav";

export interface SiteHeaderProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function SiteHeader({ onOpenEnquiry }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Dynamic scroll spy for navigation items
      const sections = siteConfig.navigation
        .map((item) => {
          const id = item.href.replace("#", "");
          const el = document.getElementById(id);
          return { label: item.label, el };
        })
        .filter((s): s is { label: string; el: HTMLElement } => s.el !== null);

      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const { label, el } = sections[i];
        if (el.offsetTop <= scrollPos) {
          setActiveItem(label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border-soft py-2.5 md:py-3"
            : "bg-white/95 backdrop-blur-sm py-3 md:py-4 border-b border-border-soft/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-2 lg:gap-3 xl:gap-6">
          {/* Logo */}
          <Link href="#hero" className="flex items-center group shrink-0">
            <div className="relative h-9 w-36 sm:h-9 sm:w-40 lg:h-9 lg:w-40 xl:h-11 xl:w-48 2xl:h-12 2xl:w-52">
              <Image
                src="/logo/logo.png"
                alt="WEE SPRITES Preschool & Day Care"
                fill
                priority
                className="object-contain object-left group-hover:scale-[1.02] transition-transform"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 shrink-0"
          >
            {siteConfig.navigation.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`whitespace-nowrap shrink-0 px-2 py-1 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-3.5 rounded-full text-[12px] xl:text-[13px] 2xl:text-sm font-bold tracking-tight xl:tracking-normal transition-all duration-200 select-none ${
                    isActive
                      ? "bg-brand-violet-soft text-brand-violet font-extrabold shadow-xs"
                      : "text-text-primary hover:text-brand-violet hover:bg-brand-violet-soft/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            <CtaButton
              variant="yellow"
              size="sm"
              onClick={() => onOpenEnquiry("franchise")}
              className="hidden sm:inline-flex text-[11px] lg:text-xs xl:text-sm font-extrabold text-brand-violet-dark shadow-sm px-3.5 py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-2.5"
            >
              Explore Franchise Opportunities
            </CtaButton>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 sm:p-2.5 rounded-2xl bg-brand-violet-soft text-brand-violet hover:bg-brand-lilac transition-colors shrink-0"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
}

