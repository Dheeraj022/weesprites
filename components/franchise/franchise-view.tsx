"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ChevronRight,
  TrendingUp,
  Building,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  Phone,
  Mail,
  Award,
  Layers,
  HelpCircle,
  Clock,
  DollarSign,
  Briefcase,
  Loader2,
  Target,
  Megaphone,
  BookOpen,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { CtaButton } from "@/components/ui/cta-button";
import { CurvedPhoto } from "@/components/ui/curved-photo";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { siteConfig } from "@/lib/site-config";

const franchisePageSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City and state are required"),
  propertyStatus: z.string().min(1, "Please select property status"),
  availableArea: z.string().optional(),
  investmentBudget: z.string().min(1, "Please select your planned investment budget"),
  background: z.string().optional(),
  message: z.string().optional(),
});

type FranchisePageFormData = z.infer<typeof franchisePageSchema>;

export function FranchiseView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("franchise");
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
  } = useForm<FranchisePageFormData>({
    resolver: zodResolver(franchisePageSchema),
  });

  const onSubmit = async (data: FranchisePageFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Direct Franchise Application Submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const keyMetrics = [
    { value: "35% – 45%+", label: "Projected Annual ROI", desc: "High margins with upfront tuition fee cash flow" },
    { value: "12 – 18 Mo.", label: "Anticipated Break-Even", desc: "Accelerated payback via dual morning & daycare models" },
    { value: "2,000+", label: "Sq. Ft. Space Required", desc: "Independent house, bungalow or commercial ground floor" },
    { value: "360°", label: "Turnkey Setup Engine", desc: "Architecture, recruitment, marketing & training covered" },
  ];

  const supportPillars = [
    {
      icon: <Building className="w-6 h-6 text-brand-violet" />,
      title: "Campus Design & 3D Interior Layouts",
      desc: "Complete architectural blueprints, Vaastu-compliant layouts, child-safe rubber flooring, non-toxic wall art, and indoor soft-play equipment design.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-brand-yellow-dark" />,
      title: "Proprietary Montessori Curriculum",
      desc: "Ready-to-teach daily lesson plans, student workbooks, audio-visual smart classroom assets, and continuous pedagogical upgrades.",
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Educator Recruitment & Certified Training",
      desc: "Comprehensive teacher hiring frameworks, background verification guidelines, and intensive educator workshops in early childhood methodology.",
    },
    {
      icon: <Megaphone className="w-6 h-6 text-rose-600" />,
      title: "360° Admission Marketing Engine",
      desc: "Hyperlocal digital ads (Meta & Google), automated lead generation, outdoor branding hoardings, print flyers, and high-impact launch event strategy.",
    },
    {
      icon: <Layers className="w-6 h-6 text-sky-600" />,
      title: "School ERP & Mobile Parent App",
      desc: "Integrated cloud software for student attendance, automated fee invoicing, real-time parent messaging, and live CCTV streaming integration.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Ongoing Quality Audits & Growth Mentorship",
      desc: "A dedicated Franchise Relationship Manager conducts quarterly academic audits and admission conversion coaching to keep your school thriving.",
    },
  ];

  const roadmapSteps = [
    { step: "01", title: "Discovery Call & Profile Review", desc: "Initial discussion on territory exclusivity, investor aspirations, and financial scope." },
    { step: "02", title: "Site Selection & Catchment Feasibility", desc: "Demographic study of catchment area, footfall analysis, and lease agreement guidance." },
    { step: "03", title: "Franchise Agreement & 3D Blueprints", desc: "Formal signing, territorial lock, and delivery of turnkey interior and exterior architectural designs." },
    { step: "04", title: "Turnkey Setup & Educator Training", desc: "Procurement of furniture, play materials, and intensive faculty certification workshops." },
    { step: "05", title: "Grand Opening & Admission Launch", desc: "High-impact opening campaign, digital ads activation, and welcoming your inaugural batch of learners." },
  ];

  const models = [
    {
      name: "Standard Center",
      space: "2,000 – 2,500 Sq. Ft.",
      capacity: "60 – 80 Students",
      desc: "Ideal for residential neighborhoods, colonies, and emerging suburban hubs.",
      highlights: ["Preschool programs (Play Group to UKG)", "Standard indoor play zone", "Estimated Break-Even: 12-14 Months"],
      tag: "Popular Choice",
    },
    {
      name: "Flagship / Model Campus",
      space: "3,000 – 5,000+ Sq. Ft.",
      capacity: "120 – 160+ Students",
      desc: "Prime standalone villa or commercial bungalow with extensive outdoor play and extended day care.",
      highlights: ["Full Preschool + Day Care & Evening Hobby Club", "Premium sensory discovery & ball pool arena", "High revenue density per square foot"],
      tag: "Highest Revenue",
    },
  ];

  const faqs = [
    {
      q: "Do I need a prior background in education to own a WEE SPRITES franchise?",
      a: "Not at all! Many of our most successful partners come from corporate, finance, IT, or business backgrounds. WEE SPRITES provides a complete 360° operational engine, including teacher recruitment blueprints, daily lesson plans, academic manuals, and ongoing educator training so you can focus on school management with confidence.",
    },
    {
      q: "What is the typical timeline to launch a center from signing?",
      a: "On average, a WEE SPRITES campus can be set up and made fully operational within 45 to 60 days from finalization of the property lease and design sign-off.",
    },
    {
      q: "Does WEE SPRITES assist with finding and vetting the property?",
      a: "Yes. Our real estate and franchise development team helps evaluate candidate properties based on catchment demographics, road visibility, safety standards, parking, and rental feasibility before finalizing any lease.",
    },
    {
      q: "Can we offer Day Care and Evening Care programs at our center?",
      a: "Yes, absolutely! In fact, we actively encourage it. Combining morning preschool (Play Group to UKG) with afternoon Day Care and evening enrichment clubs creates dual recurring revenue streams that dramatically boost your bottom-line profitability.",
    },
    {
      q: "What marketing support is provided for student admissions?",
      a: "We run centralized, hyper-local digital campaigns (Google Ads, Facebook, Instagram) targeting families with young children in your immediate 3–5 km radius. We also provide customized print collateral, banners, brochures, and launch event roadmaps.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Header */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-brand-violet-soft/60 via-brand-cream/30 to-white overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-top-16 -left-20 opacity-60" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="top-10 -right-20 opacity-60" speed="normal" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-text-muted mb-6">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">Franchise Opportunity</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Intro */}
              <div className="lg:col-span-7 text-left space-y-5">
                <Reveal delay={0.05}>
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm">
                    <span>PREMIUM BUSINESS OPPORTUNITY • GROW WITH WEE SPRITES</span>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight tracking-tight">
                    Own a High-Growth Preschool,{" "}
                    <span className="text-brand-violet block sm:inline">Shape Future Generations</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                    Partner with <strong>WEE SPRITES Preschool & Day Care</strong> to build a highly rewarding, socially impactful, and financially profitable early education business. Benefit from our proven Montessori curriculum, 360° turnkey setup, intensive educator training, and powerful student admission marketing engine.
                  </p>
                </Reveal>

                <Reveal delay={0.35}>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a href="#franchise-form">
                      <CtaButton variant="yellow" size="lg">
                        Apply for Franchise Online ↓
                      </CtaButton>
                    </a>
                    <CtaButton
                      variant="primary"
                      size="lg"
                      onClick={() => handleOpenEnquiry("franchise")}
                    >
                      Request Information Docket
                    </CtaButton>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Hero Visual with Badge */}
              <div className="lg:col-span-5 flex justify-center">
                <Reveal delay={0.2}>
                  <div className="relative w-full max-w-[380px] sm:max-w-[440px]">
                    <CurvedPhoto
                      src="/images/hero-franchise.jpg"
                      alt="Successful preschool leadership and happy child at WEE SPRITES"
                      variant="blob2"
                      offsetBg="yellow"
                      aspectRatio="4/3"
                      className="w-full"
                      badge={
                        <div className="absolute top-1 right-1 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 pointer-events-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-brand-violet text-white p-2.5 shadow-floating flex flex-col items-center justify-center text-center border-2 border-brand-yellow transform rotate-6 hover:rotate-0 transition-transform shrink-0">
                          <span className="text-[11px] sm:text-xs font-black leading-tight text-brand-yellow whitespace-nowrap">
                            High ROI
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-white mt-0.5 whitespace-nowrap">
                            360° Turnkey Setup
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

        {/* 3. Key Financial Metrics Strip */}
        <section className="py-12 bg-white border-y border-border-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {keyMetrics.map((item, idx) => (
                <Reveal key={item.label} delay={0.1 + idx * 0.08}>
                  <div className="text-center p-4 sm:p-6 rounded-3xl bg-brand-cream/50 border border-border-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-violet tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-text-primary mt-1.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-text-muted mt-1 leading-snug">
                      {item.desc}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Invest in WEE SPRITES (The Edupreneur Advantage) */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
              <div className="lg:col-span-5 flex justify-center">
                <Reveal delay={0.1}>
                  <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
                    <CurvedPhoto
                      src="/images/franchise-child.jpg"
                      alt="Confident young child with colorful paper airplane representing early growth"
                      variant="blob1"
                      offsetBg="lilac"
                      aspectRatio="square"
                      className="w-full"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <Reveal delay={0.1}>
                  <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                    THE EDUPRENEUR ADVANTAGE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-2 leading-tight">
                    Why Early Education is the Smartest Business to Build Today
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-base text-text-body leading-relaxed">
                    Early childhood education is among the most resilient and fastest-growing sectors in the world. Parents view foundational learning, cognitive stimulation, and safe socialization as essential investments in their child&apos;s future.
                  </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {[
                    {
                      title: "Recession-Resilient Demand",
                      desc: "Quality preschooling and day care are non-discretionary expenses for modern working parents.",
                    },
                    {
                      title: "Predictable Advance Cash Flow",
                      desc: "Tuition fees are collected quarterly or annually in advance, providing robust working capital.",
                    },
                    {
                      title: "Dual Revenue Streams",
                      desc: "Morning Preschool sessions paired with afternoon Day Care & Evening Hobby Clubs maximize utilization.",
                    },
                    {
                      title: "Deep Social Gratification",
                      desc: "Become a respected community pillar known for shaping young lives and empowering families.",
                    },
                  ].map((feat) => (
                    <Reveal key={feat.title} delay={0.25}>
                      <div className="p-4 rounded-2xl bg-brand-cream/60 border border-border-soft flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-violet shrink-0 mt-0.5" />
                        <div>
                          <div className="font-extrabold text-sm text-text-primary">{feat.title}</div>
                          <div className="text-xs text-text-body mt-1 leading-relaxed">{feat.desc}</div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 360° Partner Support Ecosystem */}
        <section className="py-16 md:py-24 bg-brand-violet-soft/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  OUR COMMITMENT TO YOUR SUCCESS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  Complete 360° Turnkey Support Engine
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  From your first property walk to your hundredth enrolled student, WEE SPRITES stands with you at every milestone.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {supportPillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={0.08 + idx * 0.06}>
                  <div className="p-6 rounded-3xl bg-white border border-border-soft shadow-card hover:shadow-floating hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center mb-4 border border-border-soft">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-black text-text-primary mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed flex-1">
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Investment Models & Space Requirements */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  FRANCHISE FORMATS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  Tailored Models for Every Market
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  Select the format that best fits your location, property footprint, and business goals.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
              {models.map((m, idx) => (
                <Reveal key={m.name} delay={0.1 + idx * 0.1}>
                  <div className="p-8 rounded-[36px] bg-brand-cream/40 border-2 border-border-soft hover:border-brand-violet hover:shadow-floating transition-all duration-300 flex flex-col h-full relative">
                    <div className="inline-block self-start px-3 py-1 rounded-full bg-brand-violet text-brand-yellow font-black text-xs uppercase mb-4">
                      {m.tag}
                    </div>
                    <h3 className="text-2xl font-black text-text-primary">{m.name}</h3>
                    <p className="text-xs sm:text-sm text-text-body mt-2 leading-relaxed">
                      {m.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3 my-6 pt-2 border-y border-border-soft">
                      <div className="py-2">
                        <div className="text-xs text-text-muted font-bold">Space Required</div>
                        <div className="text-sm font-extrabold text-brand-violet mt-0.5">{m.space}</div>
                      </div>
                      <div className="py-2">
                        <div className="text-xs text-text-muted font-bold">Student Capacity</div>
                        <div className="text-sm font-extrabold text-brand-violet mt-0.5">{m.capacity}</div>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-text-body flex-1 mb-6">
                      {m.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <CtaButton
                      variant="yellow"
                      size="md"
                      onClick={() => handleOpenEnquiry("franchise")}
                      className="w-full"
                    >
                      Enquire for {m.name}
                    </CtaButton>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Step-by-Step Onboarding Roadmap */}
        <section className="py-16 md:py-24 bg-brand-violet text-white relative overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-bottom-16 -left-16 opacity-20" speed="slow" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-yellow">
                  THE ONBOARDING JOURNEY
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2">
                  From Application to Grand Opening in 60 Days
                </h2>
                <p className="mt-3 text-sm text-white/85">
                  Our structured launch blueprint takes the guesswork out of launching your preschool.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
              {roadmapSteps.map((s, idx) => (
                <Reveal key={s.step} delay={0.08 + idx * 0.08}>
                  <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col h-full">
                    <div className="text-2xl font-black text-brand-yellow mb-2">
                      {s.step}
                    </div>
                    <h3 className="text-sm font-extrabold text-white mb-1.5 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed flex-1">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Direct Online Franchise Application Form */}
        <section id="franchise-form" className="py-16 md:py-24 bg-white relative scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <Reveal delay={0.1}>
              <div className="p-6 sm:p-10 md:p-12 rounded-[36px] md:rounded-[44px] bg-brand-cream/50 border border-border-soft shadow-card">
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  EXPRESSION OF INTEREST
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-1.5 mb-2">
                  Apply for a WEE SPRITES Franchise
                </h2>
                <p className="text-xs sm:text-sm text-text-body mb-8">
                  Fill out your preliminary business details below. Our Franchise Development Director will connect with you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="p-8 text-center bg-white rounded-3xl border-2 border-emerald-500 shadow-floating space-y-4 animate-scaleUp">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black text-text-primary">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-sm text-text-body max-w-md mx-auto leading-relaxed">
                      Thank you for your interest in partnering with WEE SPRITES. Our franchise development team will review your location and contact you with the complete prospectus docket.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-full bg-brand-violet text-white font-bold text-xs hover:bg-brand-violet-dark transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-extrabold text-text-primary mb-1">
                          Applicant Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rajesh Malhotra"
                          {...register("fullName")}
                          className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
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
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. partner@example.com"
                          {...register("email")}
                          className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                            errors.email ? "border-rose-500" : "border-border-soft"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-xs font-extrabold text-text-primary mb-1">
                          City & State of Proposed Center *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Gurugram, Haryana"
                          {...register("city")}
                          className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                            errors.city ? "border-rose-500" : "border-border-soft"
                          }`}
                        />
                        {errors.city && (
                          <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Property Status */}
                      <div>
                        <label className="block text-xs font-extrabold text-text-primary mb-1">
                          Property Status *
                        </label>
                        <select
                          {...register("propertyStatus")}
                          className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                            errors.propertyStatus ? "border-rose-500" : "border-border-soft"
                          }`}
                        >
                          <option value="">Select Property Status</option>
                          <option value="Owned Property Available">Owned Property Available</option>
                          <option value="Rented Property Identified">Rented Property Identified</option>
                          <option value="Currently Looking for Property">Currently Looking for Property</option>
                          <option value="Need WEE SPRITES Site Assistance">Need WEE SPRITES Site Assistance</option>
                        </select>
                        {errors.propertyStatus && (
                          <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                            {errors.propertyStatus.message}
                          </p>
                        )}
                      </div>

                      {/* Investment Budget */}
                      <div>
                        <label className="block text-xs font-extrabold text-text-primary mb-1">
                          Planned Investment Budget *
                        </label>
                        <select
                          {...register("investmentBudget")}
                          className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet ${
                            errors.investmentBudget ? "border-rose-500" : "border-border-soft"
                          }`}
                        >
                          <option value="">Select Investment Range</option>
                          <option value="₹15 Lakhs – ₹20 Lakhs">₹15 Lakhs – ₹20 Lakhs</option>
                          <option value="₹20 Lakhs – ₹30 Lakhs">₹20 Lakhs – ₹30 Lakhs</option>
                          <option value="₹30 Lakhs – ₹45 Lakhs">₹30 Lakhs – ₹45 Lakhs</option>
                          <option value="₹45 Lakhs+ (Multiple Centers)">₹45 Lakhs+ (Multiple Centers)</option>
                        </select>
                        {errors.investmentBudget && (
                          <p className="text-[11px] text-rose-500 mt-1 font-semibold">
                            {errors.investmentBudget.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Available Area */}
                      <div>
                        <label className="block text-xs font-extrabold text-text-primary mb-1">
                          Available / Planned Area (Sq. Ft.)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 2,500 sq. ft."
                          {...register("availableArea")}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border-soft bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet"
                        />
                      </div>

                      {/* Professional Background */}
                      <div>
                        <label className="block text-xs font-extrabold text-text-primary mb-1">
                          Your Professional Background
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Business Owner / Corporate / Educator"
                          {...register("background")}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border-soft bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet"
                        />
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label className="block text-xs font-extrabold text-text-primary mb-1">
                        Specific Questions or Target Catchment Area
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your preferred locality or target launch date..."
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
                          <span>Submit Franchise Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 9. Franchise FAQ Accordion */}
        <section className="py-16 md:py-24 bg-brand-cream/30 border-t border-border-soft relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="text-center mb-12">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  FRANCHISE FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-2">
                  Frequently Asked Partner Questions
                </h2>
                <p className="mt-3 text-sm text-text-body">
                  Clear answers about investment, operations, territory rights, and school profitability.
                </p>
              </Reveal>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <Reveal key={faq.q} delay={0.08 + idx * 0.05}>
                    <div className="rounded-2xl border border-border-soft overflow-hidden transition-all duration-200 bg-white hover:border-brand-violet/40">
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-black text-sm sm:text-base text-text-primary"
                      >
                        <span>{faq.q}</span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-brand-violet transition-transform duration-300 ${
                            isOpen ? "rotate-180 bg-brand-violet text-white" : "bg-brand-cream border border-border-soft"
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

        {/* 10. Direct Franchise Desk Helpline */}
        <section className="py-16 md:py-20 bg-brand-violet text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-yellow font-black text-xs uppercase border border-white/20">
              DIRECT INVESTOR HELPLINE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Speak with Our Franchise Development Team
            </h2>
            <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto">
              Our team is ready to provide territorial availability maps, sample financial pro-formas, and site selection guidelines.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-6 py-3 rounded-full bg-brand-yellow text-text-primary font-extrabold text-sm hover:bg-brand-yellow-dark transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Franchise Desk: {siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-6 py-3 rounded-full bg-white/15 text-white border border-white/30 font-extrabold text-sm hover:bg-white hover:text-brand-violet transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email: {siteConfig.email}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <SiteFooter />

      {/* 12. Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

