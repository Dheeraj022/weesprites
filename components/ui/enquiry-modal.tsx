"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, CheckCircle2, Loader2, Sparkles, Phone, Mail, User, MapPin } from "lucide-react";
import { CtaButton } from "./cta-button";

const admissionsSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  program: z.string().min(1, "Please select an interested program"),
  childAge: z.string().optional(),
  message: z.string().optional(),
});

const franchiseSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "Please enter your city / location of interest"),
  investmentRange: z.string().optional(),
  message: z.string().optional(),
});

type AdmissionsFormData = z.infer<typeof admissionsSchema>;
type FranchiseFormData = z.infer<typeof franchiseSchema>;

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "admissions" | "franchise";
}

export function EnquiryModal({
  isOpen,
  onClose,
  defaultTab = "admissions",
}: EnquiryModalProps) {
  const [activeTab, setActiveTab] = useState<"admissions" | "franchise">(defaultTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedType, setSubmittedType] = useState<"admissions" | "franchise" | null>(null);

  useEffect(() => {
    setActiveTab(defaultTab);
    setSubmittedType(null);
  }, [defaultTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const {
    register: regAdmissions,
    handleSubmit: handleAdmissionsSubmit,
    reset: resetAdmissions,
    formState: { errors: errorsAdmissions },
  } = useForm<AdmissionsFormData>({
    resolver: zodResolver(admissionsSchema),
  });

  const {
    register: regFranchise,
    handleSubmit: handleFranchiseSubmit,
    reset: resetFranchise,
    formState: { errors: errorsFranchise },
  } = useForm<FranchiseFormData>({
    resolver: zodResolver(franchiseSchema),
  });

  const onAdmissionsSubmit = async (data: AdmissionsFormData) => {
    setIsSubmitting(true);
    // Simulated demo submission
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Admissions Enquiry Submitted (Demo):", data);
    setIsSubmitting(false);
    setSubmittedType("admissions");
    resetAdmissions();
  };

  const onFranchiseSubmit = async (data: FranchiseFormData) => {
    setIsSubmitting(true);
    // Simulated demo submission
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Franchise Enquiry Submitted (Demo):", data);
    setIsSubmitting(false);
    setSubmittedType("franchise");
    resetFranchise();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-violet-dark/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-violet-soft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Tabs */}
        <div className="bg-brand-violet-soft/60 p-4 border-b border-border-soft flex items-center justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab("admissions");
                setSubmittedType(null);
              }}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-extrabold transition-all ${
                activeTab === "admissions"
                  ? "bg-brand-violet text-white shadow"
                  : "bg-white text-text-primary hover:bg-brand-lilac"
              }`}
            >
              Admissions Enquiry
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("franchise");
                setSubmittedType(null);
              }}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-extrabold transition-all ${
                activeTab === "franchise"
                  ? "bg-brand-yellow-dark text-text-primary shadow"
                  : "bg-white text-text-primary hover:bg-brand-yellow-light"
              }`}
            >
              Franchise Opportunity
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white text-text-body flex items-center justify-center hover:bg-brand-violet hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submittedType ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-violet mb-2">
                Thank You for Reaching Out!
              </h3>
              <p className="text-text-body text-sm max-w-sm mb-6 leading-relaxed">
                {submittedType === "admissions"
                  ? "Our admissions coordinator will contact you shortly to arrange a campus visit and answer your queries."
                  : "Our franchise development team will contact you with the franchise information kit and next steps."}
              </p>
              <div className="p-3 bg-brand-violet-soft/60 rounded-xl text-xs text-brand-violet font-semibold mb-6">
                Demo Notice: Form submission simulated successfully.
              </div>
              <CtaButton
                variant="primary"
                onClick={() => {
                  setSubmittedType(null);
                  onClose();
                }}
              >
                Close Window
              </CtaButton>
            </div>
          ) : activeTab === "admissions" ? (
            <form onSubmit={handleAdmissionsSubmit(onAdmissionsSubmit)} className="space-y-4">
              <div className="text-left mb-4">
                <h3 id="modal-title" className="text-xl font-extrabold text-brand-violet">
                  Enquire for Preschool Admissions
                </h3>
                <p className="text-xs md:text-sm text-text-body mt-1">
                  Give your child the gift of joyful learning at WEE SPRITES.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-primary mb-1">
                  Parent / Guardian Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-brand-violet/50 absolute left-3 top-3" />
                  <input
                    type="text"
                    {...regAdmissions("parentName")}
                    placeholder="e.g. Priya Sharma"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                  />
                </div>
                {errorsAdmissions.parentName && (
                  <p className="text-xs text-red-600 mt-1">{errorsAdmissions.parentName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-violet/50 absolute left-3 top-3" />
                    <input
                      type="tel"
                      {...regAdmissions("phone")}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                    />
                  </div>
                  {errorsAdmissions.phone && (
                    <p className="text-xs text-red-600 mt-1">{errorsAdmissions.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-brand-violet/50 absolute left-3 top-3" />
                    <input
                      type="email"
                      {...regAdmissions("email")}
                      placeholder="parent@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                    />
                  </div>
                  {errorsAdmissions.email && (
                    <p className="text-xs text-red-600 mt-1">{errorsAdmissions.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Interested Program *
                  </label>
                  <select
                    {...regAdmissions("program")}
                    defaultValue=""
                    className="w-full px-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none bg-white"
                  >
                    <option value="" disabled>Select Program</option>
                    <option value="Play Group">Play Group (1.5 - 2.5 yrs)</option>
                    <option value="Pre-Nursery">Pre-Nursery (2.5 - 3.5 yrs)</option>
                    <option value="Nursery">Nursery (3.5 - 4.5 yrs)</option>
                    <option value="LKG">LKG (4.5 - 5.5 yrs)</option>
                    <option value="UKG">UKG (5.5 - 6.5 yrs)</option>
                    <option value="Evening Program">Evening Program (2 - 10 yrs)</option>
                  </select>
                  {errorsAdmissions.program && (
                    <p className="text-xs text-red-600 mt-1">{errorsAdmissions.program.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Child Age / Date of Birth
                  </label>
                  <input
                    type="text"
                    {...regAdmissions("childAge")}
                    placeholder="e.g. 3 years 2 months"
                    className="w-full px-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-primary mb-1">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={3}
                  {...regAdmissions("message")}
                  placeholder="Tell us what you are looking for in your child's preschool..."
                  className="w-full px-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-full bg-brand-violet text-white font-bold text-sm shadow hover:bg-brand-violet-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <span>Submit Admission Enquiry</span>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleFranchiseSubmit(onFranchiseSubmit)} className="space-y-4">
              <div className="text-left mb-4">
                <h3 className="text-xl font-extrabold text-brand-violet">
                  Partner with WEE SPRITES
                </h3>
                <p className="text-xs md:text-sm text-text-body mt-1">
                  Launch a high-impact, rewarding preschool franchise in your locality.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-primary mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-brand-violet/50 absolute left-3 top-3" />
                  <input
                    type="text"
                    {...regFranchise("fullName")}
                    placeholder="e.g. Amit Kapoor"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                  />
                </div>
                {errorsFranchise.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errorsFranchise.fullName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-violet/50 absolute left-3 top-3" />
                    <input
                      type="tel"
                      {...regFranchise("phone")}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                    />
                  </div>
                  {errorsFranchise.phone && (
                    <p className="text-xs text-red-600 mt-1">{errorsFranchise.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-brand-violet/50 absolute left-3 top-3" />
                    <input
                      type="email"
                      {...regFranchise("email")}
                      placeholder="partner@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                    />
                  </div>
                  {errorsFranchise.email && (
                    <p className="text-xs text-red-600 mt-1">{errorsFranchise.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Proposed City / Area *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-brand-violet/50 absolute left-3 top-3" />
                    <input
                      type="text"
                      {...regFranchise("city")}
                      placeholder="e.g. Pune, Wakad"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none"
                    />
                  </div>
                  {errorsFranchise.city && (
                    <p className="text-xs text-red-600 mt-1">{errorsFranchise.city.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1">
                    Investment Capacity
                  </label>
                  <select
                    {...regFranchise("investmentRange")}
                    defaultValue=""
                    className="w-full px-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none bg-white"
                  >
                    <option value="" disabled>Select Range</option>
                    <option value="15-25 Lakhs">₹15 – 25 Lakhs</option>
                    <option value="25-40 Lakhs">₹25 – 40 Lakhs</option>
                    <option value="40+ Lakhs">₹40+ Lakhs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-primary mb-1">
                  Prior Experience / Background
                </label>
                <textarea
                  rows={3}
                  {...regFranchise("message")}
                  placeholder="Share any educational or entrepreneurial experience you have..."
                  className="w-full px-3 py-2 text-sm border border-border-soft rounded-xl focus:border-brand-violet focus:ring-1 focus:ring-brand-violet outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-full bg-brand-yellow-dark text-text-primary font-bold text-sm shadow hover:bg-brand-yellow transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Opportunity Enquiry...</span>
                  </>
                ) : (
                  <span>Submit Franchise Enquiry</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

