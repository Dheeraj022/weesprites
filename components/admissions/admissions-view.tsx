"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ChevronRight,
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Heart,
  Smile,
  Compass,
  ArrowRight,
  HelpCircle,
  MapPin,
  Loader2,
  Award,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { CtaButton } from "@/components/ui/cta-button";
import { CurvedPhoto } from "@/components/ui/curved-photo";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { siteConfig } from "@/lib/site-config";

const admissionsPageSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  childName: z.string().min(2, "Child's name must be at least 2 characters"),
  childAge: z.string().min(1, "Please select child's age group / birth date"),
  program: z.string().min(1, "Please select a program of interest"),
  preferredTourDate: z.string().optional(),
  message: z.string().optional(),
});

type AdmissionsPageFormData = z.infer<typeof admissionsPageSchema>;

export function AdmissionsView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionsPageFormData>({
    resolver: zodResolver(admissionsPageSchema),
  });

  const onSubmit = async (data: AdmissionsPageFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Direct Admissions Application Submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const admissionSteps = [
    {
      step: "01",
      title: "Online Enquiry or Call",
      desc: "Fill our simple application form online or call our counselor. We will share curriculum details and answer all your preliminary questions.",
      icon: <FileText className="w-6 h-6 text-brand-violet" />,
      accent: "border-brand-violet/30 bg-brand-violet-soft/40",
    },
    {
      step: "02",
      title: "Campus Tour & Discovery",
      desc: "Visit our campus to experience our naturally lit classrooms, indoor soft-play area, safety installations, and meet our early childhood educators.",
      icon: <Compass className="w-6 h-6 text-brand-yellow-dark" />,
      accent: "border-brand-yellow/40 bg-brand-yellow-light/40",
    },
    {
      step: "03",
      title: "Gentle Informal Interaction",
      desc: "A warm, pressure-free session with our director. Absolutely no stressful interviews or tests — we simply get to know your child's comfort and habits.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      accent: "border-rose-200 bg-rose-50/60",
    },
    {
      step: "04",
      title: "Welcome Kit & Settling-in",
      desc: "Complete registration paperwork, receive the student welcome kit, and start with our gradual 1-week settling-in transition schedule.",
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      accent: "border-emerald-200 bg-emerald-50/60",
    },
  ];

  const eligibilityCriteria = [
    { program: "Play Group", age: "1.5 – 2.5 Years", timings: "09:00 AM – 11:30 AM", ratio: "1 : 6" },
    { program: "Pre-Nursery", age: "2.5 – 3.5 Years", timings: "09:00 AM – 12:00 PM", ratio: "1 : 8" },
    { program: "Nursery", age: "3.5 – 4.5 Years", timings: "09:00 AM – 12:30 PM", ratio: "1 : 8" },
    { program: "LKG", age: "4.5 – 5.5 Years", timings: "09:00 AM – 01:00 PM", ratio: "1 : 10" },
    { program: "UKG", age: "5.5 – 6.5 Years", timings: "09:00 AM – 01:30 PM", ratio: "1 : 10" },
    { program: "Day Care & Evening Care", age: "2.0 – 10.0 Years", timings: "12:30 PM – 07:00 PM", ratio: "1 : 8" },
  ];

  const requiredDocuments = [
    { title: "Child's Birth Certificate", desc: "Attested photocopy of municipal birth certificate" },
    { title: "Passport Photographs", desc: "4 recent color photographs of the child & 2 of each parent" },
    { title: "Proof of Residence", desc: "Photocopy of Aadhaar Card, Passport, or Electricity bill" },
    { title: "Immunization Card", desc: "Record of up-to-date pediatric vaccinations & blood group" },
    { title: "Previous School Records", desc: "Report card / transfer certificate (for LKG / UKG, if applicable)" },
    { title: "Emergency Contact Details", desc: "Contact numbers of family physician and local authorized guardians" },
  ];

  const faqs = [
    {
      q: "What is the age cut-off date for admissions?",
      a: "Our typical academic year cut-off is calculated as of March 31st of the enrolling year. However, because early development is unique, our academic counselor will personally evaluate your child's social and physical readiness to ensure the best placement.",
    },
    {
      q: "Can parents accompany the child during initial days?",
      a: "Yes, absolutely! We follow a gentle, heart-centered settling-in policy. Parents or a trusted caregiver are welcomed to stay in our parent lounge or attend the first few sessions until your child feels happy, secure, and familiar with the environment.",
    },
    {
      q: "What if my toddler is not fully potty-trained?",
      a: "No worries at all! For Play Group and Pre-Nursery, our female support caregivers are trained to assist toddlers with loving patience and help instill regular hygiene and washroom habits without any pressure.",
    },
    {
      q: "Do you offer transportation or van facilities?",
      a: "Yes, GPS-tracked, air-conditioned school cabs with female attendants are available on major routes in the surrounding neighborhood. Inquire during your campus tour for route details and pickup timings.",
    },
    {
      q: "Can we visit the campus on a Saturday?",
      a: "Yes! Our campus is open for parent walkthroughs and admissions counseling Monday through Saturday from 9:00 AM to 4:00 PM. We recommend scheduling an appointment in advance so our counselor can give you uninterrupted personal attention.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Sticky Header */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-brand-violet-soft/50 via-brand-cream/30 to-white overflow-hidden">
          <FloatingBlob color="lilac" size="xl" className="-top-16 -left-20 opacity-70" speed="slow" />
          <FloatingBlob color="yellow" size="lg" className="top-10 -right-20 opacity-60" speed="normal" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-text-muted mb-6">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">Admissions</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Introduction */}
              <div className="lg:col-span-7 text-left space-y-5">
                <Reveal delay={0.05}>
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm">
                    <span>ADMISSIONS OPEN FOR ACADEMIC YEAR 2026 – 2027</span>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight tracking-tight">
                    Where Every Child&apos;s{" "}
                    <span className="text-brand-violet block sm:inline">Bright Story Begins</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                    Choosing the right preschool is one of the most meaningful decisions you will make. At <strong>WEE SPRITES</strong>, our admissions process is simple, warm, and zero-stress — focused entirely on helping your child feel cherished, secure, and ready to soar.
                  </p>
                </Reveal>

                <Reveal delay={0.35}>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a href="#apply-form">
                      <CtaButton variant="primary" size="lg">
                        Apply Online Now ↓
                      </CtaButton>
                    </a>
                    <CtaButton
                      variant="yellow"
                      size="lg"
                      onClick={() => handleOpenEnquiry("admissions")}
                    >
                      Book a Campus Tour
                    </CtaButton>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Hero Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <Reveal delay={0.2}>
                  <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
                    <CurvedPhoto
                      src="/images/admissions-child.jpg"
                      alt="Excited child ready for joyful learning at WEE SPRITES"
                      variant="blob2"
                      offsetBg="yellow"
                      aspectRatio="4/3"
                      className="w-full"
                      badge={
                        <div className="absolute top-1 right-1 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 pointer-events-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-brand-violet text-white p-2.5 shadow-floating flex flex-col items-center justify-center text-center border-2 border-brand-yellow transform rotate-6 hover:rotate-0 transition-transform shrink-0">
                          <span className="text-[11px] sm:text-xs font-black leading-tight text-brand-yellow whitespace-nowrap">
                            Limited Seats
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-white mt-0.5 whitespace-nowrap">
                            Play Group to UKG
                          </span>
                        </div>
                      }
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 4-Step Admission Journey */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  HOW TO ENROLL
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  4 Simple Steps to Join Our Family
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  No complex assessments or stressful interviews. Just an affectionate, transparent journey designed for your peace of mind.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((step, idx) => (
                <Reveal key={step.step} delay={0.08 + idx * 0.08}>
                  <div className={`p-6 rounded-3xl border flex flex-col h-full text-left relative transition-all duration-300 hover:shadow-floating hover:-translate-y-1.5 ${step.accent}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-border-soft">
                        {step.icon}
                      </div>
                      <span className="text-2xl font-black text-brand-violet/40">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed flex-1">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Age Eligibility Matrix */}
        <section className="py-16 md:py-24 bg-brand-violet-soft/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  ELIGIBILITY CRITERIA
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  Age Guidelines & Class Timings
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  Programs tailored by developmental readiness to ensure every child learns alongside peers of compatible milestones.
                </p>
              </Reveal>
            </div>

            {/* Mobile horizontal scroll hint */}
            <div className="flex items-center justify-end md:hidden mb-3 text-xs text-text-body">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet-soft border border-border-soft font-bold text-brand-violet">
                <span>⇄</span> Swipe horizontally to view all criteria
              </span>
            </div>

            <div className="w-full max-w-full overflow-x-auto rounded-3xl border border-border-soft shadow-card block">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-brand-violet text-white">
                    <th className="p-4 font-black">Program</th>
                    <th className="p-4 font-black">Age Requirement</th>
                    <th className="p-4 font-black">Batch Timings</th>
                    <th className="p-4 font-black">Mentor-to-Child Ratio</th>
                    <th className="p-4 font-black text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-soft bg-white">
                  {eligibilityCriteria.map((item, idx) => (
                    <tr
                      key={item.program}
                      className={idx % 2 === 0 ? "bg-white" : "bg-brand-cream/30 hover:bg-brand-violet-soft/40 transition-colors"}
                    >
                      <td className="p-4 font-extrabold text-brand-violet">{item.program}</td>
                      <td className="p-4 font-semibold text-text-primary">{item.age}</td>
                      <td className="p-4 text-text-body">{item.timings}</td>
                      <td className="p-4 text-text-body font-bold">{item.ratio}</td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                          ● Open
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. Online Application Form & Documents Checklist */}
        <section id="apply-form" className="py-16 md:py-24 bg-white relative scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Direct Interactive Form */}
              <div className="lg:col-span-7 text-left">
                <Reveal delay={0.1}>
                  <div className="p-6 sm:p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-brand-cream/40 border border-border-soft shadow-card">
                    <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                      DIRECT ADMISSION ENQUIRY
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-text-primary mt-1.5 mb-2">
                      Submit Your Child&apos;s Application
                    </h2>
                    <p className="text-xs sm:text-sm text-text-body mb-6">
                      Our admissions counselor will contact you within 24 business hours to answer questions and schedule your campus tour.
                    </p>

                    {isSubmitted ? (
                      <div className="p-8 text-center bg-white rounded-3xl border-2 border-emerald-500 shadow-floating space-y-4 animate-scaleUp">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-9 h-9" />
                        </div>
                        <h3 className="text-2xl font-black text-text-primary">
                          Application Received!
                        </h3>
                        <p className="text-sm text-text-body max-w-md mx-auto leading-relaxed">
                          Thank you for choosing WEE SPRITES. Our admissions counselor will call you shortly to confirm your campus walkthrough.
                        </p>
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className="px-6 py-2.5 rounded-full bg-brand-violet text-white font-bold text-xs hover:bg-brand-violet-dark transition-colors"
                          >
                            Submit Another Application
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Parent Name */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Parent / Guardian Name *
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Ananya Sharma"
                              {...register("parentName")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.parentName ? "border-rose-500" : "border-border-soft"
                              }`}
                            />
                            {errors.parentName && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.parentName.message}
                              </p>
                            )}
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Phone Number (WhatsApp) *
                            </label>
                            <input
                              type="tel"
                              placeholder="e.g. +91 98765 43210"
                              {...register("phone")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.phone ? "border-rose-500" : "border-border-soft"
                              }`}
                            />
                            {errors.phone && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Email */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="e.g. parent@example.com"
                              {...register("email")}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border-soft bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet"
                            />
                          </div>

                          {/* Child Name */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Child&apos;s Full Name *
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Kabir Sharma"
                              {...register("childName")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.childName ? "border-rose-500" : "border-border-soft"
                              }`}
                            />
                            {errors.childName && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.childName.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Program Selection */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Program of Interest *
                            </label>
                            <select
                              {...register("program")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.program ? "border-rose-500" : "border-border-soft"
                              }`}
                            >
                              <option value="">Select a Program</option>
                              <option value="Play Group">Play Group (1.5 – 2.5 yrs)</option>
                              <option value="Pre-Nursery">Pre-Nursery (2.5 – 3.5 yrs)</option>
                              <option value="Nursery">Nursery (3.5 – 4.5 yrs)</option>
                              <option value="LKG">LKG (4.5 – 5.5 yrs)</option>
                              <option value="UKG">UKG (5.5 – 6.5 yrs)</option>
                              <option value="Day Care">Day Care & Evening Care</option>
                            </select>
                            {errors.program && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.program.message}
                              </p>
                            )}
                          </div>

                          {/* Child Age */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Child&apos;s Age / Date of Birth *
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. 2.5 years or 14/05/2023"
                              {...register("childAge")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.childAge ? "border-rose-500" : "border-border-soft"
                              }`}
                            />
                            {errors.childAge && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.childAge.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Preferred Campus Tour Date */}
                        <div>
                          <label className="block text-xs font-extrabold text-text-primary mb-1">
                            Preferred Tour Slot / Date
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Saturday Morning or Upcoming Wednesday 11 AM"
                            {...register("preferredTourDate")}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border-soft bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet"
                          />
                        </div>

                        {/* Message / Questions */}
                        <div>
                          <label className="block text-xs font-extrabold text-text-primary mb-1">
                            Additional Notes / Dietary or Care Preferences
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Any questions or specific needs your child has..."
                            {...register("message")}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border-soft bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 px-6 rounded-full bg-brand-violet hover:bg-brand-violet-dark text-white font-extrabold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01]"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting Application...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Admissions Application</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Required Documents Checklist & Reassurance */}
              <div className="lg:col-span-5 text-left space-y-6">
                <Reveal delay={0.15}>
                  <div className="p-6 sm:p-8 rounded-[32px] md:rounded-[40px] bg-white border border-border-soft shadow-card space-y-4">
                    <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                      DOCUMENTATION CHECKLIST
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-text-primary">
                      Simple Documents Required
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Please carry photocopies of these documents during your campus walkthrough.
                    </p>

                    <ul className="space-y-3 pt-2">
                      {requiredDocuments.map((doc) => (
                        <li key={doc.title} className="flex items-start gap-3 p-2.5 rounded-2xl bg-brand-cream/50 border border-border-soft/60">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs sm:text-sm font-extrabold text-text-primary">
                              {doc.title}
                            </div>
                            <div className="text-[11px] text-text-body mt-0.5">
                              {doc.desc}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {/* Direct Counselor Helpline Card */}
                <Reveal delay={0.25}>
                  <div className="p-6 rounded-3xl bg-brand-yellow-light/60 border border-brand-yellow/40 text-left space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
                      <Phone className="w-4 h-4 text-brand-yellow-dark" />
                      <span>Prefer to Speak Directly?</span>
                    </div>
                    <p className="text-xs text-text-body leading-relaxed">
                      Our admissions coordinators are available Mon–Sat from 9:00 AM to 4:00 PM to help you with immediate seat availability and fee structures.
                    </p>
                    <div className="pt-1 flex flex-wrap gap-2 text-xs">
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="px-4 py-2 rounded-full bg-brand-violet text-white font-bold hover:bg-brand-violet-dark transition-colors inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {siteConfig.phone}</span>
                      </a>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="px-4 py-2 rounded-full bg-white text-text-primary border border-border-soft font-bold hover:bg-brand-cream transition-colors inline-flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email Admissions</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Settling-in Policy: Transition with Love */}
        <section className="py-16 md:py-20 bg-brand-cream/40 border-y border-border-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-violet">
                  HEART-CENTERED TRANSITION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-text-primary">
                  Our Gentle 1-Week Settling-in Policy
                </h2>
                <p className="text-sm text-text-body leading-relaxed max-w-3xl">
                  We understand that starting preschool is a sensitive emotional milestone for both parent and child. We never rush a toddler into unfamiliar spaces. During the first week, we offer shortened flexible hours (1 hr $\to$ 2 hrs $\to$ full session), and encourage mothers or fathers to accompany their little ones until they feel completely at ease with their teacher.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <CtaButton
                  variant="yellow"
                  size="md"
                  onClick={() => handleOpenEnquiry("admissions")}
                >
                  Schedule an Intro Visit
                </CtaButton>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Frequently Asked Questions */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  ADMISSIONS FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-2">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-sm text-text-body">
                  Everything you need to know about joining WEE SPRITES Preschool & Day Care.
                </p>
              </Reveal>
            </div>

            <div className="space-y-3.5 text-left">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <Reveal key={faq.q} delay={0.08 + idx * 0.05}>
                    <div className="rounded-2xl border border-border-soft overflow-hidden transition-all duration-200 bg-brand-cream/30 hover:border-brand-violet/40">
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-black text-sm sm:text-base text-text-primary"
                      >
                        <span>{faq.q}</span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-brand-violet transition-transform duration-300 ${
                            isOpen ? "rotate-180 bg-brand-violet text-white" : "bg-white border border-border-soft"
                          }`}
                        >
                          ↓
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-body leading-relaxed border-t border-border-soft/60 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Call to Action Banner */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-brand-violet via-brand-violet-dark to-brand-violet text-white relative overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-bottom-20 -left-16 opacity-30" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="-top-12 -right-12 opacity-30" speed="normal" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 text-brand-yellow text-xs font-black tracking-wide uppercase border border-white/20">
                <span>LIMITED SEATS PER BATCH • ENROLL EARLY</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Secure Your Child&apos;s Place Today
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
                Experience our loving environment and see why hundreds of parents trust WEE SPRITES for their child&apos;s early foundational years.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <CtaButton
                  variant="yellow"
                  size="lg"
                  onClick={() => handleOpenEnquiry("admissions")}
                >
                  Book Campus Walkthrough
                </CtaButton>
                <Link href="/programs">
                  <CtaButton
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-violet"
                  >
                    View Programs & Age Groups
                  </CtaButton>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <SiteFooter />

      {/* 10. Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

