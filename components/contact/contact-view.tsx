"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Send,
  Loader2,
  Car,
  Compass,
  Train,
  ShieldCheck,
  Heart,
  ArrowRight,
  Briefcase,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  inquiryType: z.string().min(1, "Please select what you are inquiring about"),
  preferredTime: z.string().optional(),
  message: z.string().min(5, "Please write a brief message or question"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Contact Message Submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const contactCards = [
    {
      icon: <MapPin className="w-6 h-6 text-brand-violet" />,
      title: "Campus Location",
      primary: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      secondary: `${siteConfig.address.city}, ${siteConfig.address.state} - ${siteConfig.address.pincode}`,
      actionText: "Get Directions",
      actionHref: "https://maps.google.com/?q=WEE+SPRITES+Preschool+New+Delhi",
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-yellow-dark" />,
      title: "Admissions Desk",
      primary: siteConfig.phone,
      secondary: "Mon – Sat: 9:00 AM – 4:00 PM",
      actionText: "Call Admissions",
      actionHref: `tel:${siteConfig.phone}`,
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-600" />,
      title: "Email Helplines",
      primary: siteConfig.email,
      secondary: "franchise@weesprites.com",
      actionText: "Send an Email",
      actionHref: `mailto:${siteConfig.email}`,
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: "Campus Visiting Hours",
      primary: "Mon – Sat: 9:00 AM – 4:00 PM",
      secondary: "Sundays & Public Holidays: By appointment",
      actionText: "Book Walkthrough",
      actionHref: "#contact-form",
    },
  ];

  const departments = [
    {
      dept: "Admissions & Counseling",
      desc: "For enrollment queries, fee structures, age cut-offs, and trial classes.",
      contact: siteConfig.phone,
      email: "admissions@weesprites.com",
    },
    {
      dept: "Franchise Development",
      desc: "For edupreneurs interested in opening a WEE SPRITES preschool in their city.",
      contact: siteConfig.phone,
      email: "franchise@weesprites.com",
    },
    {
      dept: "Day Care & After-School Club",
      desc: "For toddler evening care, working parent schedules, and holiday camps.",
      contact: siteConfig.phone,
      email: "daycare@weesprites.com",
    },
    {
      dept: "Careers & Faculty Recruitment",
      desc: "For passionate certified early childhood educators and care assistants.",
      contact: siteConfig.phone,
      email: "careers@weesprites.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Header */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-brand-violet-soft/50 via-brand-cream/30 to-white overflow-hidden">
          <FloatingBlob color="lilac" size="xl" className="-top-16 -left-20 opacity-70" speed="slow" />
          <FloatingBlob color="yellow" size="lg" className="top-10 -right-20 opacity-60" speed="normal" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-text-muted mb-6">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">Contact Us</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <Reveal delay={0.05}>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm">
                  <span>WE&apos;D LOVE TO HEAR FROM YOU • GET IN TOUCH</span>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight tracking-tight">
                  Let&apos;s Connect & Welcome{" "}
                  <span className="text-brand-violet block sm:inline">Your Family</span>
                </h1>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                  Have questions about admissions, age criteria, curriculum walkthroughs, or preschool franchise partnerships? We are delighted to assist you every step of the way.
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="#contact-form">
                    <CtaButton variant="primary" size="lg">
                      Send a Message ↓
                    </CtaButton>
                  </a>
                  <a href={`tel:${siteConfig.phone}`}>
                    <CtaButton variant="yellow" size="lg">
                      Call Admissions Desk: {siteConfig.phone}
                    </CtaButton>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Contact Info Cards Grid */}
        <section className="py-12 md:py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {contactCards.map((card, idx) => (
                <Reveal key={card.title} delay={0.08 + idx * 0.08}>
                  <div className="p-6 rounded-3xl bg-brand-cream/50 border border-border-soft hover:shadow-floating hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 border border-border-soft">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-black text-text-primary mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-brand-violet mb-0.5">
                      {card.primary}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed flex-1 mb-4">
                      {card.secondary}
                    </p>
                    <a
                      href={card.actionHref}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-brand-violet hover:text-brand-violet-dark transition-colors"
                    >
                      <span>{card.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Interactive Contact Form & Campus Directions */}
        <section id="contact-form" className="py-16 md:py-24 bg-brand-violet-soft/30 relative scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Direct Message Form */}
              <div className="lg:col-span-7 text-left">
                <Reveal delay={0.1}>
                  <div className="p-6 sm:p-10 rounded-[36px] md:rounded-[44px] bg-white border border-border-soft shadow-card">
                    <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                      SEND US A MESSAGE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-text-primary mt-1.5 mb-2">
                      How Can We Help You Today?
                    </h2>
                    <p className="text-xs sm:text-sm text-text-body mb-6">
                      Leave your details below and our team will get back to you within 24 business hours.
                    </p>

                    {isSubmitted ? (
                      <div className="p-8 text-center bg-brand-cream/60 rounded-3xl border-2 border-emerald-500 shadow-floating space-y-4 animate-scaleUp">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-9 h-9" />
                        </div>
                        <h3 className="text-2xl font-black text-text-primary">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-sm text-text-body max-w-md mx-auto leading-relaxed">
                          Thank you for reaching out to WEE SPRITES. Our admissions and community desk will contact you shortly.
                        </p>
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className="px-6 py-2.5 rounded-full bg-brand-violet text-white font-bold text-xs hover:bg-brand-violet-dark transition-colors"
                          >
                            Send Another Message
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Full Name */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Your Full Name *
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Shalini Roy"
                              {...register("fullName")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-brand-cream/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.fullName ? "border-rose-500" : "border-border-soft"
                              }`}
                            />
                            {errors.fullName && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.fullName.message}
                              </p>
                            )}
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              Phone Number (WhatsApp) *
                            </label>
                            <input
                              type="tel"
                              placeholder="e.g. +91 98765 43210"
                              {...register("phone")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-brand-cream/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
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
                              Email Address *
                            </label>
                            <input
                              type="email"
                              placeholder="e.g. shalini@example.com"
                              {...register("email")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-brand-cream/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.email ? "border-rose-500" : "border-border-soft"
                              }`}
                            />
                            {errors.email && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.email.message}
                              </p>
                            )}
                          </div>

                          {/* Inquiring For */}
                          <div>
                            <label className="block text-xs font-extrabold text-text-primary mb-1">
                              What are you inquiring about? *
                            </label>
                            <select
                              {...register("inquiryType")}
                              className={`w-full px-3.5 py-2.5 rounded-xl border bg-brand-cream/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                                errors.inquiryType ? "border-rose-500" : "border-border-soft"
                              }`}
                            >
                              <option value="">Select an Inquiry Type</option>
                              <option value="Admissions & Enrolment">Child Admissions & Enrolment</option>
                              <option value="Campus Tour Booking">Book a Campus Tour</option>
                              <option value="Day Care & After-School">Day Care & Evening Activity Care</option>
                              <option value="Franchise Partnership">Franchise Partnership Inquiry</option>
                              <option value="Careers & Educator Jobs">Teaching Careers & Job Vacancy</option>
                              <option value="General Query">General Question</option>
                            </select>
                            {errors.inquiryType && (
                              <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                                {errors.inquiryType.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Preferred Time for Call */}
                        <div>
                          <label className="block text-xs font-extrabold text-text-primary mb-1">
                            Preferred Time for Callback
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Morning 10 AM to 1 PM or Saturday afternoon"
                            {...register("preferredTime")}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-border-soft bg-brand-cream/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-xs font-extrabold text-text-primary mb-1">
                            Your Message or Specific Questions *
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Please share any questions regarding age cut-off, programs, or your proposed campus visit date..."
                            {...register("message")}
                            className={`w-full px-3.5 py-2.5 rounded-xl border bg-brand-cream/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet resize-none ${
                              errors.message ? "border-rose-500" : "border-border-soft"
                            }`}
                          />
                          {errors.message && (
                            <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                              {errors.message.message}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 px-6 rounded-full bg-brand-violet hover:bg-brand-violet-dark text-white font-extrabold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01]"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending Your Message...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message to WEE SPRITES</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Stylized Campus Map & Visiting Directions */}
              <div className="lg:col-span-5 text-left space-y-6">
                <Reveal delay={0.15}>
                  <div className="p-6 sm:p-8 rounded-[36px] md:rounded-[44px] bg-white border border-border-soft shadow-card space-y-5">
                    <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                      CAMPUS DIRECTIONS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-text-primary">
                      Visiting Our Campus
                    </h3>

                    {/* Stylized Map Container */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-brand-violet-soft/60 border border-brand-violet/20 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-brand-violet text-brand-yellow flex items-center justify-center shadow-md mb-2">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-brand-violet text-sm">
                        WEE SPRITES Preschool Campus
                      </h4>
                      <p className="text-xs text-text-body mt-1 max-w-xs">
                        Plot No. 42, Sector 5, Green Park Avenue, New Delhi, Delhi - 110016
                      </p>
                      <a
                        href="https://maps.google.com/?q=WEE+SPRITES+Preschool+New+Delhi"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 px-4 py-1.5 rounded-full bg-white text-brand-violet font-bold text-xs shadow-xs hover:bg-brand-yellow hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Open in Google Maps</span>
                      </a>
                    </div>

                    {/* Transit & Parking Details */}
                    <div className="space-y-3 pt-1 text-xs">
                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-brand-cream/50 border border-border-soft">
                        <Car className="w-5 h-5 text-brand-violet shrink-0 mt-0.5" />
                        <div>
                          <div className="font-extrabold text-text-primary text-sm">Dedicated Visitor Parking</div>
                          <div className="text-text-body mt-0.5">Ample sanitized visitor parking available directly in front of the campus entrance gate.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-brand-cream/50 border border-border-soft">
                        <Train className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-extrabold text-text-primary text-sm">Nearest Metro Station</div>
                          <div className="text-text-body mt-0.5">Green Park Metro Station (Yellow Line), approximately 5 minutes by auto or cab.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-brand-cream/50 border border-border-soft">
                        <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-extrabold text-text-primary text-sm">Child-Safe Visitor Security</div>
                          <div className="text-text-body mt-0.5">All visiting parents are greeted at the security desk; visiting toddlers are welcomed to explore our soft-play reception lounge.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Departmental Helplines Directory */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  DEPARTMENT DIRECTORY
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  Connect with the Right Team
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  Direct lines and emails to help you reach the appropriate department without delays.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {departments.map((dept, idx) => (
                <Reveal key={dept.dept} delay={0.08 + idx * 0.08}>
                  <div className="p-6 rounded-3xl bg-brand-cream/40 border border-border-soft hover:shadow-floating hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                    <h3 className="text-base font-black text-text-primary mb-2">
                      {dept.dept}
                    </h3>
                    <p className="text-xs text-text-body leading-relaxed flex-1 mb-4">
                      {dept.desc}
                    </p>
                    <div className="pt-2 border-t border-border-soft space-y-1 text-xs">
                      <div className="font-bold text-brand-violet">{dept.contact}</div>
                      <a href={`mailto:${dept.email}`} className="text-text-muted hover:text-brand-violet transition-colors block truncate">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Call to Action Banner */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-brand-violet via-brand-violet-dark to-brand-violet text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-yellow font-black text-xs uppercase border border-white/20">
              CAMPUS WALKTHROUGHS OPEN
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Come Experience the Joyful Energy of WEE SPRITES
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto">
              Our campus tour is a wonderful, zero-obligation opportunity for your toddler to experience our play zones and for you to meet our passionate mentors.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <CtaButton
                variant="yellow"
                size="lg"
                onClick={() => handleOpenEnquiry("admissions")}
              >
                Book a Campus Tour
              </CtaButton>
              <Link href="/admissions">
                <CtaButton
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-violet"
                >
                  View Admissions Guidelines
                </CtaButton>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <SiteFooter />

      {/* 8. Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

