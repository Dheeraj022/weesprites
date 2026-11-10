"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, CheckCircle2, Loader2, Phone, Mail, User, MapPin, ArrowRight } from "lucide-react";
import { CtaButton } from "./cta-button";

const franchisePopupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "Please enter your city / location"),
  budget: z.string().optional(),
});

type FranchisePopupFormData = z.infer<typeof franchisePopupSchema>;

export function FranchisePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. Initial 2-second website visit timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2. 15-second inactivity timer (re-triggers when user is idle for 15 seconds)
  useEffect(() => {
    if (isSubmitted || isOpen) return;

    let inactivityTimer: NodeJS.Timeout;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsOpen(true);
      }, 15000);
    };

    // User activity event listeners
    const activityEvents = [
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart",
      "scroll",
      "wheel",
    ];

    // Initialize 15-second countdown
    resetInactivityTimer();

    activityEvents.forEach((event) => {
      window.addEventListener(event, resetInactivityTimer, { passive: true });
    });

    return () => {
      clearTimeout(inactivityTimer);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetInactivityTimer);
      });
    };
  }, [isOpen, isSubmitted]);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FranchisePopupFormData>({
    resolver: zodResolver(franchisePopupSchema),
  });

  const onSubmit = async (data: FranchisePopupFormData) => {
    setIsSubmitting(true);
    // Simulate lightweight API submission
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Franchise Popup Lead Submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    sessionStorage.setItem("weesprites_franchise_popup_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="franchise-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-brand-violet-dark/65 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg md:max-w-xl bg-white rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden border border-border-soft animate-scaleUp text-left max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Graphic Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] bg-brand-violet-dark overflow-hidden shrink-0">
          <Image
            src="/wee-sprites-banner.png"
            alt="WEE SPRITES Franchise Opportunity - Own a Preschool, Shape the Future"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Close button with high-contrast frosted backdrop */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors focus:outline-none backdrop-blur-md z-10 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-text-primary">
                Thank You for Your Interest!
              </h4>
              <p className="text-sm text-text-body max-w-sm mx-auto leading-relaxed">
                Our franchise development director will contact you within 24 business hours with our detailed Information Docket and investment model.
              </p>
              <div className="pt-2">
                <CtaButton variant="primary" size="sm" onClick={handleClose}>
                  Done & Continue Browsing
                </CtaButton>
              </div>
            </div>
          ) : (
            <div>
              <h3 id="franchise-popup-title" className="sr-only">
                Request Franchise Information
              </h3>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-violet/50 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. Rajesh Malhotra"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-0.5">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-text-primary mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-brand-violet/50 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-primary mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-brand-violet/50 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="rajesh@example.com"
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-0.5">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-text-primary mb-1">
                      Proposed City / Location *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-brand-violet/50 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        {...register("city")}
                        placeholder="e.g. South Delhi / Noida"
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                      />
                    </div>
                    {errors.city && (
                      <p className="text-[11px] text-rose-500 mt-0.5">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-primary mb-1">
                      Investment Budget (Optional)
                    </label>
                    <select
                      {...register("budget")}
                      defaultValue=""
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none bg-white"
                    >
                      <option value="">Select Investment Range</option>
                      <option value="₹15 Lakhs – ₹25 Lakhs">₹15 Lakhs – ₹25 Lakhs</option>
                      <option value="₹25 Lakhs – ₹40 Lakhs">₹25 Lakhs – ₹40 Lakhs</option>
                      <option value="₹40 Lakhs+">₹40 Lakhs+ (Flagship Model)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-full bg-brand-yellow text-text-primary font-black text-sm shadow-md hover:bg-brand-yellow-dark transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Franchise Information Docket</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-4 pt-3 border-t border-border-soft flex items-center justify-between text-[11px] text-text-secondary">
                <span>Want to explore details first?</span>
                <Link
                  href="/franchise"
                  onClick={handleClose}
                  className="font-bold text-brand-violet hover:underline flex items-center gap-1"
                >
                  View Full Franchise Page →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

