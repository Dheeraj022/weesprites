"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "./ui/cta-button";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function MobileNav({ isOpen, onClose, onOpenEnquiry }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white animate-fadeIn"
    >
      {/* Header bar inside mobile nav */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-soft">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-violet text-brand-yellow flex items-center justify-center font-black text-sm">
            W
          </div>
          <span className="font-extrabold text-brand-violet text-lg">WEE SPRITES</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 rounded-full bg-brand-violet-soft text-brand-violet flex items-center justify-center hover:bg-brand-lilac transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav items list */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
        {siteConfig.navigation.map((item, idx) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between py-3 px-4 rounded-2xl text-base font-bold text-text-primary hover:bg-brand-violet-soft hover:text-brand-violet transition-colors"
          >
            <span>{item.label}</span>
            <ArrowRight className="w-4 h-4 text-brand-violet/40" />
          </Link>
        ))}

        <div className="pt-6 border-t border-border-soft space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenEnquiry("franchise");
            }}
            className="w-full py-3.5 px-4 rounded-full bg-brand-yellow text-text-primary font-bold text-sm shadow hover:bg-brand-yellow-dark transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Franchise Opportunities</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenEnquiry("admissions");
            }}
            className="w-full py-3.5 px-4 rounded-full bg-brand-violet text-white font-bold text-sm shadow hover:bg-brand-violet-dark transition-colors flex items-center justify-center gap-2"
          >
            <span>Enquire for Admissions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer contact info */}
      <div className="p-6 bg-brand-cream/60 border-t border-border-soft text-center text-xs text-text-body">
        <p className="font-semibold text-brand-violet">{siteConfig.descriptor}</p>
        <p className="mt-1">{siteConfig.address.city}, {siteConfig.address.state}</p>
      </div>
    </div>
  );
}

