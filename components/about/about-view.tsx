"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  GraduationCap,
  Smile,
  Users,
  Compass,
  Award,
  BookOpen,
  Sun,
  Palette,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  CalendarCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { CtaButton } from "@/components/ui/cta-button";
import { CurvedPhoto } from "@/components/ui/curved-photo";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";

export function AboutView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Uncompromising Safety",
      description:
        "Child-proof fixtures, 24/7 CCTV surveillance, biometric entry, and strict hygiene protocols guarantee complete peace of mind.",
      accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-violet" />,
      title: "Caring & Compassionate Nurture",
      description:
        "Every child is heard, cherished, and guided with warm empathy, building strong emotional security and confidence from day one.",
      accent: "bg-brand-violet-soft text-brand-violet border-brand-violet/20",
    },
    {
      icon: <Sun className="w-6 h-6 text-brand-yellow-dark" />,
      title: "Joyful Experiential Play",
      description:
        "Learning through tactile Montessori materials, dramatic role-play, sensory exploration, and creative expression.",
      accent: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      icon: <Users className="w-6 h-6 text-sky-600" />,
      title: "Low Teacher-Child Ratio",
      description:
        "Intimate classroom sizes ensure every learner receives individual attention tailored to their learning pace and unique talents.",
      accent: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-brand-violet" />,
      title: "Certified Early Educators",
      description:
        "Passionate, background-verified educators undergo continuous training in modern pedagogy, pediatric first aid, and child psychology.",
      accent: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      icon: <Smile className="w-6 h-6 text-rose-600" />,
      title: "Transparent Parent Partnership",
      description:
        "Open communication, regular milestone reports, collaborative celebrations, and real-time updates keep parents closely connected.",
      accent: "bg-rose-50 text-rose-700 border-rose-200",
    },
  ];

  const milestones = [
    { number: "500+", label: "Happy Little Graduates", detail: "Thriving in top primary schools" },
    { number: "1 : 8", label: "Mentor to Child Ratio", detail: "Personalized care and mentoring" },
    { number: "100%", label: "Certified ECE Educators", detail: "Trained in Montessori & play-way" },
    { number: "4,000+", label: "Sq. Ft. Safe Campus", detail: "Indoor soft play & sensory zones" },
  ];

  const developmentalPillars = [
    {
      icon: <BookOpen className="w-6 h-6 text-brand-violet" />,
      title: "Cognitive & Language Skills",
      points: [
        "Phonetic awareness and early vocabulary",
        "Number concepts and spatial understanding",
        "Interactive storytelling and questioning",
      ],
      bg: "bg-brand-cream",
    },
    {
      icon: <Palette className="w-6 h-6 text-brand-yellow-dark" />,
      title: "Creative & Sensory Expression",
      points: [
        "Tactile arts, clay modeling, and finger painting",
        "Rhythm, music, and dramatic role-play",
        "Sensory sand, water, and texture discovery",
      ],
      bg: "bg-brand-yellow-light/40",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Social & Emotional Literacy",
      points: [
        "Collaborative group play and turn-taking",
        "Recognizing, naming, and handling emotions",
        "Empathy, kindness, and peer sharing",
      ],
      bg: "bg-rose-50/70",
    },
    {
      icon: <Sun className="w-6 h-6 text-emerald-600" />,
      title: "Physical & Motor Agility",
      points: [
        "Fine motor pincer grasp and puzzle play",
        "Gross motor climbing, balancing, and dance",
        "Healthy dining habits and self-help skills",
      ],
      bg: "bg-emerald-50/70",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Sticky Navigation Header */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Page Hero Banner with Breadcrumbs & Ambient Blobs */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-brand-violet-soft/50 via-brand-cream/30 to-white overflow-hidden">
          <FloatingBlob color="lilac" size="xl" className="-top-16 -left-20 opacity-70" speed="slow" />
          <FloatingBlob color="yellow" size="lg" className="top-10 -right-20 opacity-60" speed="normal" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-text-muted mb-6">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">About Us</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Introduction */}
              <div className="lg:col-span-7 text-left space-y-5">
                <Reveal delay={0.05}>
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm">
                    <span>WHO WE ARE • OUR STORY & PHILOSOPHY</span>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight tracking-tight">
                    Nurturing Little Minds,{" "}
                    <span className="text-brand-violet block sm:inline">Inspiring Big Dreams</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                    At <strong>WEE SPRITES Preschool & Day Care</strong>, we believe early childhood is not a race to adulthood — it is a magical, foundational chapter of exploration, wonder, and joy. We build safe, caring spaces where children learn through play and grow with authentic confidence.
                  </p>
                </Reveal>

                <Reveal delay={0.35}>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <CtaButton
                      variant="primary"
                      size="lg"
                      onClick={() => handleOpenEnquiry("admissions")}
                    >
                      Enquire for Admissions
                    </CtaButton>
                    <CtaButton
                      variant="yellow"
                      size="lg"
                      onClick={() => handleOpenEnquiry("franchise")}
                    >
                      Franchise Opportunities
                    </CtaButton>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Hero Visual with Organic Shape */}
              <div className="lg:col-span-5 flex justify-center">
                <Reveal delay={0.2}>
                  <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
                    <CurvedPhoto
                      src="/images/about-child.jpg"
                      alt="Happy children exploring and laughing at WEE SPRITES Preschool"
                      variant="blob2"
                      offsetBg="yellow"
                      aspectRatio="4/3"
                      className="w-full"
                      badge={
                        <div className="absolute top-1 right-1 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 pointer-events-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-brand-violet text-white p-2.5 sm:p-3 shadow-floating flex flex-col items-center justify-center text-center border-2 border-brand-yellow transform rotate-6 hover:rotate-0 transition-transform shrink-0">
                          <span className="text-[11px] sm:text-xs font-black leading-tight text-brand-yellow whitespace-nowrap">
                            Child-Centric
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-white mt-0.5 whitespace-nowrap">
                            Play & Growth
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

        {/* 3. Key Milestones & Trust Metrics */}
        <section className="py-12 bg-white border-y border-border-soft/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {milestones.map((item, idx) => (
                <Reveal key={item.label} delay={0.1 + idx * 0.08}>
                  <div className="text-center p-4 sm:p-6 rounded-3xl bg-brand-cream/50 border border-border-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-violet tracking-tight">
                      {item.number}
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-text-primary mt-1.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      {item.detail}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Story & Educational Mission */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <FloatingBlob color="lilac" size="md" className="top-1/3 -right-12 opacity-40" speed="slow" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Visual Story Card */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <Reveal delay={0.1}>
                  <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
                    <CurvedPhoto
                      src="/images/about-boy.jpg"
                      alt="Curious boy learning with Montessori wooden blocks"
                      variant="blob1"
                      offsetBg="lilac"
                      aspectRatio="4/3"
                      className="w-full"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
                <Reveal delay={0.1}>
                  <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                    OUR GENESIS & PHILOSOPHY
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-2 leading-tight">
                    Every Child Deserves a Gentle, Joyful Beginning
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-base text-text-body leading-relaxed">
                    WEE SPRITES was founded on a simple yet profound truth: children are natural learners driven by instinctive curiosity. When provided with a rich, responsive environment, affectionate caregivers, and open-ended play materials, they thrive emotionally, socially, and intellectually.
                  </p>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="text-base text-text-body leading-relaxed">
                    Rather than forcing rigid rote routines, our dual pedagogy combines the best of <strong>Montessori hands-on discovery</strong> and the <strong>Play-Way methodology</strong>. We empower toddlers and preschoolers to choose activities that captivate their interest, solve problems collaboratively, and build genuine pride in their discoveries.
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-brand-violet-soft/60 border border-brand-violet/20">
                      <div className="font-extrabold text-brand-violet text-base flex items-center gap-2">
                        <Compass className="w-5 h-5 text-brand-violet" />
                        Our Vision
                      </div>
                      <p className="text-xs sm:text-sm text-text-body mt-1.5 leading-relaxed">
                        To be India&apos;s most beloved early education brand, recognized for nurturing happy, confident, and compassionate young leaders.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-brand-yellow-light/50 border border-brand-yellow/40">
                      <div className="font-extrabold text-amber-900 text-base flex items-center gap-2">
                        <Award className="w-5 h-5 text-brand-yellow-dark" />
                        Our Mission
                      </div>
                      <p className="text-xs sm:text-sm text-text-body mt-1.5 leading-relaxed">
                        To create safe, child-safe sanctuaries where curiosity is celebrated and foundational academic and life skills blossom through joyful play.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Core Values Grid */}
        <section className="py-16 md:py-24 bg-brand-violet-soft/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  OUR GUIDING VALUES
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  The Principles That Guide Every Day
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  From our morning greetings to our classroom arrangements, every detail is anchored in our commitment to your child&apos;s happiness and well-being.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, idx) => (
                <Reveal key={value.title} delay={0.08 + idx * 0.06}>
                  <div className="bg-white p-6 rounded-3xl border border-border-soft shadow-card hover:shadow-floating hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full text-left">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${value.accent}`}>
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-black text-text-primary">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-body mt-2 leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Four Pillars of Holistic Child Development */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  OUR HOLISTIC PEDAGOGY
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  Four Pillars of Early Childhood Growth
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  A balanced learning spectrum ensuring our learners develop across all intellectual, physical, and emotional milestones.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentalPillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={0.08 + idx * 0.08}>
                  <div className={`p-6 rounded-3xl border border-border-soft flex flex-col h-full text-left ${pillar.bg}`}>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 border border-border-soft">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-black text-text-primary mb-3">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-text-body flex-1">
                      {pillar.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-violet shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Dedicated Educators Showcase with Enlarged Frame */}
        <section className="py-16 md:py-24 bg-brand-violet-soft/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Enlarged Team Frame */}
              <div className="lg:col-span-7 flex justify-center">
                <Reveal delay={0.1} className="w-full flex justify-center">
                  <div className="relative w-full max-w-2xl lg:max-w-none rounded-[32px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden bg-white p-3 sm:p-4 shadow-floating border-2 md:border-[3px] border-brand-violet hover:border-brand-violet hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-[24px] md:rounded-[28px] overflow-hidden bg-brand-violet-soft/40">
                      <Image
                        src="/images/teachers-team.jpg"
                        alt="Dedicated educators and leadership team of WEE SPRITES Preschool"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-3.5 sm:p-4 text-center">
                      <p className="text-sm sm:text-base md:text-lg font-extrabold text-brand-violet">
                        Dedicated Educators & Leadership Team
                      </p>
                      <p className="text-xs sm:text-sm text-text-body mt-1">
                        WEE SPRITES Preschool & Day Care Annual Celebration
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Educators Details */}
              <div className="lg:col-span-5 text-left space-y-5 relative">
                <Reveal delay={0.1}>
                  <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                    MEET OUR TEAM
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-2 leading-tight">
                    Passionate Mentors Who Lead with Love
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-sm sm:text-base text-text-body leading-relaxed">
                    Great preschools are built by great teachers. At WEE SPRITES, our faculty members are certified early childhood educators with deep understanding of child development, sensory integration, and gentle encouragement.
                  </p>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="space-y-3 pt-1">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-violet text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-text-primary">Continuous Professional Mentorship</div>
                        <div className="text-xs text-text-body">Regular workshops on innovative pedagogical trends and positive reinforcement.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-violet text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-text-primary">Safety & Pediatric First-Aid Certified</div>
                        <div className="text-xs text-text-body">Every staff member is trained in pediatric first aid, CPR, and child safety protocols.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-violet text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-text-primary">Warm Support Staff & Caregivers</div>
                        <div className="text-xs text-text-body">Tender, dedicated day care assistance for feeding, potty training, and resting routines.</div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.35}>
                  <div className="pt-2">
                    <CtaButton
                      variant="yellow"
                      size="md"
                      onClick={() => handleOpenEnquiry("admissions")}
                    >
                      Connect with Our Team
                    </CtaButton>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Campus & Facilities Snapshot */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl text-left">
                <Reveal delay={0.05}>
                  <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                    OUR CAMPUS
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                    Purpose-Built Spaces for Active Wonder
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-text-body">
                    Sunlit classrooms, soft-landing play zones, and sensory discovery corners designed specifically for children aged 1.5 to 6.5.
                  </p>
                </Reveal>
              </div>

              <div className="mt-4 md:mt-0">
                <Link href="/#facilities">
                  <CtaButton variant="outline" size="sm">
                    View Facilities on Home
                  </CtaButton>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  img: "/images/facility-classrooms.jpg",
                  title: "Naturally Lit Classrooms",
                  desc: "Air-conditioned, ergonomically proportioned child furniture and low shelves for autonomous choice.",
                },
                {
                  img: "/images/facility-indoor-play.jpg",
                  title: "Indoor Play & Ball Pools",
                  desc: "Soft foam flooring, climbing modules, and active motor exploration in all weather.",
                },
                {
                  img: "/images/facility-learning-resources.jpg",
                  title: "Montessori & STEM Kits",
                  desc: "Curated picture book library, tactile wooden puzzles, and early scientific curiosity kits.",
                },
                {
                  img: "/images/facility-safe-campus.jpg",
                  title: "Secure & Monitored Campus",
                  desc: "24/7 CCTV surveillance, biometric access, child-safe rounded corner fixtures, and sanitized rooms.",
                },
              ].map((f, i) => (
                <Reveal key={f.title} delay={0.08 + i * 0.08}>
                  <div className="group rounded-3xl overflow-hidden bg-brand-cream/40 border border-border-soft hover:shadow-floating hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                      <Image
                        src={f.img}
                        alt={f.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </div>
                    <div className="p-4 flex-1 text-left">
                      <h3 className="text-base font-extrabold text-text-primary group-hover:text-brand-violet transition-colors">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-text-body leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Inspiring Call to Action Banner */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-brand-violet via-brand-violet-dark to-brand-violet text-white relative overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-bottom-20 -left-16 opacity-30" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="-top-12 -right-12 opacity-30" speed="normal" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-yellow text-xs font-black tracking-wide uppercase border border-white/20">
                <CalendarCheck className="w-4 h-4" />
                <span>EXPERIENCE WEE SPRITES IN PERSON</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Give Your Child the Best Start in Life
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
                Schedule a personalized campus tour, meet our joyful educators, and see firsthand how WEE SPRITES nurtures young minds with love and curiosity.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <CtaButton
                  variant="yellow"
                  size="lg"
                  onClick={() => handleOpenEnquiry("admissions")}
                >
                  Schedule Campus Tour
                </CtaButton>
                <CtaButton
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-violet"
                  onClick={() => handleOpenEnquiry("franchise")}
                >
                  Explore Franchise Partnership
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 10. Site Footer */}
      <SiteFooter />

      {/* 11. Interactive Admissions & Franchise Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

