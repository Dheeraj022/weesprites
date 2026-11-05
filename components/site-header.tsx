"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "./ui/cta-button";
import { MobileNav } from "./mobile-nav";

export interface SiteHeaderProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function SiteHeader({ onOpenEnquiry }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    if (pathname === "/about") {
      setActiveItem("About Us");
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    if (pathname === "/programs" || pathname === "/programme") {
      setActiveItem("Programs");
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    if (pathname === "/admissions" || pathname === "/admission") {
      setActiveItem("Admissions");
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    if (pathname === "/franchise") {
      setActiveItem("Franchise Opportunity");
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    if (pathname === "/gallery") {
      setActiveItem("Gallery");
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    if (pathname === "/contact" || pathname === "/contact-us") {
      setActiveItem("Contact");
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Dynamic scroll spy for navigation items on home page
      const sections = siteConfig.navigation
        .filter((item) => item.href.includes("#") || item.href === "/")
        .map((item) => {
          const id = item.href === "/" ? "hero" : item.href.replace("/#", "").replace("#", "");
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
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border-soft py-1 sm:py-1.5 md:py-2"
            : "bg-white/95 backdrop-blur-sm py-2 sm:py-2.5 md:py-3.5 border-b border-border-soft/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-2 lg:gap-3 xl:gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0" aria-label="WEE SPRITES Preschool Home">
            <div className="relative h-[84px] w-[84px] sm:h-[88px] sm:w-[88px] md:h-20 md:w-20 lg:h-[88px] lg:w-[88px] xl:h-[96px] xl:w-[96px] 2xl:h-[104px] 2xl:w-[104px]">
              <Image
                src="/weespritesoriginalogo.png"
                alt="WEE SPRITES Preschool & Day Care"
                fill
                priority
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center justify-center gap-1 xl:gap-3.5 shrink-0"
          >
            {siteConfig.navigation.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`whitespace-nowrap shrink-0 px-1.5 py-1 xl:px-2.5 text-sm lg:text-[14px] xl:text-base font-extrabold tracking-tight transition-colors duration-200 select-none ${
                    isActive
                      ? "text-brand-violet font-black"
                      : "text-text-primary hover:text-brand-violet"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            <Link href="/franchise">
              <CtaButton
                variant="yellow"
                size="sm"
                className="hidden sm:inline-flex text-[11px] lg:text-xs xl:text-sm font-extrabold text-brand-violet-dark shadow-sm px-3.5 py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-2.5"
              >
                Explore Franchise Opportunities
              </CtaButton>
            </Link>

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

