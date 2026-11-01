"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  BookOpen,
  ArrowRight,
  Heart,
  Smile,
  ShieldCheck,
  Award,
  Layers,
  HelpCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";

export interface DetailedProgram {
  id: string;
  name: string;
  tagline: string;
  ageRange: string;
  timings: string;
  ratio: string;
  image: string;
  accentBg: "lilac" | "yellow";
  overview: string;
  milestones: string[];
  activities: string[];
  specialHighlights: string[];
}

export function ProgramsView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const programsData: DetailedProgram[] = [
    {
      id: "play-group",
      name: "Play Group",
      tagline: "Tender Beginnings & Sensory Discovery",
      ageRange: "1.5 – 2.5 Years",
      timings: "09:00 AM – 11:30 AM",
      ratio: "1 : 6 (Low Ratio)",
      image: "/images/program-playgroup.jpg",
      accentBg: "lilac",
      overview:
        "The Play Group program marks a toddler's gentle transition from home to the wider world. We focus on separation comfort, sensory stimulation, and joyful socialization in an environment filled with warm affection and tender care.",
      milestones: [
        "Sensory exploration through textured surfaces, finger paints, and water play",
        "Gentle socialization, sharing awareness, and building separation ease",
        "Gross motor control through baby gym foam ramps, crawling tunnels, and rockers",
        "Early receptive language through musical rhymes, finger-plays, and story chats",
      ],
      activities: [
        "Sensory tactile bins (sand, lentils, soft dough)",
        "Nursery rhyme movement and action songs",
        "Baby gym climbing and soft ball pool play",
        "Autonomous toy discovery and cozy story listening",
      ],
      specialHighlights: [
        "Potty training guidance with loving caregivers",
        "Comforting nap and rest zone facilities",
        "Flexible settling-in period for parents",
      ],
    },
    {
      id: "pre-nursery",
      name: "Pre-Nursery",
      tagline: "Curiosity, Language & Social Play",
      ageRange: "2.5 – 3.5 Years",
      timings: "09:00 AM – 12:00 PM",
      ratio: "1 : 8 (Intimate Mentorship)",
      image: "/images/program-prenursery.jpg",
      accentBg: "yellow",
      overview:
        "At Pre-Nursery, natural curiosity turns into structured discovery. Children expand their vocabulary, explore tactile Montessori tools, and learn the joy of cooperative play alongside their peers.",
      milestones: [
        "Vocabulary expansion, multi-word expressions, and clear self-expression",
        "Fine motor preparation: pencil grasp, wooden pegboards, and lacing shapes",
        "Understanding primary colors, basic geometric shapes, and sorting logic",
        "Social turn-taking, sharing circle time, and emotional vocabulary",
      ],
      activities: [
        "Daily morning circle time and feeling check-ins",
        "Montessori cylinder blocks and tactile sorting",
        "Creative paper-tearing and clay sculpting",
        "Pretend play corner: kitchen, doctor, grocery market",
      ],
      specialHighlights: [
        "Theme-based learning weeks (Animals, Transport, Colors)",
        "Puppet theatre and interactive story enactments",
        "Guided handwashing and dining self-help routines",
      ],
    },
    {
      id: "nursery",
      name: "Nursery",
      tagline: "Foundations of Phonics & Creative Inquiry",
      ageRange: "3.5 – 4.5 Years",
      timings: "09:00 AM – 12:30 PM",
      ratio: "1 : 8 (Intimate Mentorship)",
      image: "/images/program-nursery.jpg",
      accentBg: "lilac",
      overview:
        "Our Nursery program introduces early literacy and numeracy through play-based immersion. Children develop phonetic awareness, number logic, and inquisitive scientific habits that lay the bedrock for lifelong learning.",
      milestones: [
        "Jolly Phonics sound recognition and letter-sound associations",
        "Number sense (1 to 20), counting objects, and quantitative comparisons",
        "Scientific curiosity: seasons, animals, plants, and community helpers",
        "Fine motor scissor control, tracing patterns, and painting",
      ],
      activities: [
        "Phonics sound bags and letter-hunt treasure trails",
        "Math manipulatives: counting beads and number rods",
        "STEM discovery: sink-or-float and seed germination",
        "Weekly show-and-tell stage presentations",
      ],
      specialHighlights: [
        "Curated picture book lending library",
        "Creative dramatics and festival celebrations",
        "Comprehensive milestone tracking portfolios",
      ],
    },
    {
      id: "lkg",
      name: "LKG (Lower Kindergarten)",
      tagline: "Early Literacy, STEM & Structured Discovery",
      ageRange: "4.5 – 5.5 Years",
      timings: "09:00 AM – 01:00 PM",
      ratio: "1 : 10 (Focused Guidance)",
      image: "/images/program-lkg.jpg",
      accentBg: "yellow",
      overview:
        "LKG balances play-way joy with structured cognitive building blocks. Children progress from letter sounds to reading two- and three-letter words, writing sentences, and understanding everyday mathematics.",
      milestones: [
        "Blending CVC words, recognizing sight words, and reading simple passages",
        "Writing letters and numbers with proper stroke order and spacing",
        "Math concepts: simple addition/subtraction foundations, patterns, time sense",
        "Analytical thinking: sorting by dual attributes, classifying, and sequencing",
      ],
      activities: [
        "Reading corners and sight-word bingo games",
        "Math puzzle stations and block building challenges",
        "Nature walks and environmental journaling",
        "Collaborative art projects and cultural dance routines",
      ],
      specialHighlights: [
        "Confidence-building stage speaking opportunities",
        "Introduction to foundational digital interactive stories",
        "Parent-child collaborative open-house projects",
      ],
    },
    {
      id: "ukg",
      name: "UKG (Upper Kindergarten)",
      tagline: "Primary Readiness, Confidence & Leadership",
      ageRange: "5.5 – 6.5 Years",
      timings: "09:00 AM – 01:30 PM",
      ratio: "1 : 10 (Focused Guidance)",
      image: "/images/program-ukg.jpg",
      accentBg: "lilac",
      overview:
        "UKG is the culmination of preschool education. We equip graduates with high academic readiness, emotional poise, and leadership confidence to excel in formal primary schools across CBSE, ICSE, and IB curriculums.",
      milestones: [
        "Independent story reading, expressive paragraph writing, and spelling mastery",
        "Mathematical proficiency: word problems, mental math, greater/less than",
        "Scientific and social reasoning about the world, geography, and healthy habits",
        "Confidence, team leadership, conflict resolution, and self-discipline",
      ],
      activities: [
        "Creative writing prompts and illustrated storytelling",
        "Math lab activities and practical currency simulations",
        "Science lab experiments and robotics starter kits",
        "Sports agility circuits, yoga, and gymnastics",
      ],
      specialHighlights: [
        "Formal school admission interview preparation & mock sessions",
        "Graduation ceremony and annual theatrical production",
        "Comprehensive formal evaluation and recommendation dossiers",
      ],
    },
    {
      id: "evening-program",
      name: "Day Care & Evening Enrichment",
      tagline: "Warm After-School Sanctuary & Hobby Exploration",
      ageRange: "2.0 – 10.0 Years",
      timings: "12:30 PM – 07:00 PM (Flexible Slots)",
      ratio: "1 : 8 (Dedicated Caregivers)",
      image: "/images/program-evening.jpg",
      accentBg: "yellow",
      overview:
        "A peaceful, stimulating after-school sanctuary tailored for working parents. We offer nutritious meals, supervised rest, homework support, and an array of creative hobby activities under caring supervision.",
      milestones: [
        "Consistent daily rest and wellness routines for refreshed evenings",
        "Completion of school assignments with patient educator guidance",
        "Exploration of extracurricular hobbies: dance, music, yoga, and martial arts",
        "Social bonding across mixed age groups fostering mentorship and empathy",
      ],
      activities: [
        "Nutritious warm snacks and hygienic rest routines",
        "Supervised homework and reading assistance",
        "Art, craft, pottery, and origami workshops",
        "Active play in air-conditioned indoor play areas",
      ],
      specialHighlights: [
        "Flexible hourly, half-day, and full-day subscription packages",
        "Live attendance and meal updates for parents",
        "Emergency pediatric caregiver on campus until 7:00 PM",
      ],
    },
  ];

  const dailySchedule = [
    { time: "09:00 AM", title: "Warm Arrival & Morning Circle", desc: "Joyful greetings, action rhymes, daily calendar, and feelings check-in." },
    { time: "09:40 AM", title: "Montessori Hands-On Learning", desc: "Autonomous workstation selection: phonics, math manipulatives, and sensory kits." },
    { time: "10:30 AM", title: "Nutritious Snack & Table Etiquette", desc: "Healthy dining, hand hygiene, and courteous conversation practice." },
    { time: "11:00 AM", title: "Active Indoor/Outdoor Motor Play", desc: "Climbing modules, obstacle courses, ball pools, dance, and yoga balance." },
    { time: "11:45 AM", title: "Sensory Arts & Creative Dramatics", desc: "Painting, clay sculpting, storytelling, puppet theatre, and role-play." },
    { time: "12:30 PM", title: "Reflection Circle & Departure / Day Care", desc: "Milestone recap, tidy-up song, and gentle transition for afternoon learners." },
  ];

  const filteredPrograms =
    activeFilter === "all"
      ? programsData
      : programsData.filter((p) => p.id === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Header */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-brand-yellow-light/40 via-brand-cream/30 to-white overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-top-16 -left-20 opacity-60" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="top-10 -right-20 opacity-60" speed="normal" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-text-muted mb-6">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">Programs</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <Reveal delay={0.05}>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm">
                  <span>AGE-ALIGNED CURRICULUM • FOUNDATIONS FOR LIFE</span>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight tracking-tight">
                  Inspiring Programs for{" "}
                  <span className="text-brand-violet block sm:inline">Every Stage of Growth</span>
                </h1>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                  From gentle first discoveries in Play Group to confident primary readiness in UKG, our Montessori-inspired, play-based curriculum adapts to your child&apos;s natural developmental milestones.
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <CtaButton
                    variant="yellow"
                    size="lg"
                    onClick={() => handleOpenEnquiry("admissions")}
                  >
                    Enquire for Any Program
                  </CtaButton>
                  <Link href="/about">
                    <CtaButton variant="outline" size="lg">
                      Learn About Our Pedagogy →
                    </CtaButton>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Quick Navigation Filter Pills */}
            <div className="pt-10 flex flex-wrap gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeFilter === "all"
                    ? "bg-brand-violet text-white shadow-md scale-105"
                    : "bg-white text-text-body border border-border-soft hover:bg-brand-violet-soft/60 hover:text-brand-violet"
                }`}
              >
                All Programs (6)
              </button>
              {programsData.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveFilter(p.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeFilter === p.id
                      ? "bg-brand-violet text-white shadow-md scale-105"
                      : "bg-white text-text-body border border-border-soft hover:bg-brand-violet-soft/60 hover:text-brand-violet"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Detailed Programs List */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
            {filteredPrograms.map((prog, idx) => {
              const isEven = idx % 2 === 0;
              const isLilac = prog.accentBg === "lilac";

              return (
                <div
                  key={prog.id}
                  id={prog.id}
                  className="scroll-mt-28"
                >
                  <Reveal delay={0.1}>
                    <div
                      className={`p-6 sm:p-8 md:p-10 lg:p-12 rounded-[32px] md:rounded-[40px] border border-border-soft transition-all duration-500 ${
                        isLilac
                          ? "bg-brand-violet-soft/30 hover:shadow-floating"
                          : "bg-brand-yellow-light/35 hover:shadow-floating"
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Image Column */}
                        <div
                          className={`lg:col-span-5 ${
                            isEven ? "order-1" : "order-1 lg:order-2"
                          }`}
                        >
                          <div className="relative aspect-[4/3] w-full rounded-[28px] md:rounded-[36px] overflow-hidden bg-white shadow-floating border-3 border-white">
                            <Image
                              src={prog.image}
                              alt={prog.name}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-brand-violet font-extrabold text-xs shadow-sm">
                              {prog.ageRange}
                            </div>
                          </div>

                          {/* Quick Badges Strip */}
                          <div className="grid grid-cols-2 gap-3 mt-4 text-left">
                            <div className="p-3 rounded-2xl bg-white/90 border border-border-soft shadow-xs">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted">
                                <Clock className="w-3.5 h-3.5 text-brand-violet" />
                                <span>Timings</span>
                              </div>
                              <div className="text-xs sm:text-sm font-extrabold text-text-primary mt-1">
                                {prog.timings}
                              </div>
                            </div>

                            <div className="p-3 rounded-2xl bg-white/90 border border-border-soft shadow-xs">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted">
                                <Users className="w-3.5 h-3.5 text-brand-yellow-dark" />
                                <span>Student Ratio</span>
                              </div>
                              <div className="text-xs sm:text-sm font-extrabold text-text-primary mt-1">
                                {prog.ratio}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Column */}
                        <div
                          className={`lg:col-span-7 text-left space-y-6 ${
                            isEven ? "order-2" : "order-2 lg:order-1"
                          }`}
                        >
                          <div>
                            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-violet">
                              {prog.tagline}
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary mt-1">
                              {prog.name}
                            </h2>
                          </div>

                          <p className="text-sm sm:text-base text-text-body leading-relaxed">
                            {prog.overview}
                          </p>

                          {/* 2-column Milestones & Activities */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                            {/* Key Milestones */}
                            <div className="space-y-3 bg-white/90 p-4 rounded-2xl border border-border-soft shadow-xs">
                              <h3 className="text-xs font-black uppercase tracking-wider text-brand-violet flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                Core Developmental Milestones
                              </h3>
                              <ul className="space-y-2 text-xs text-text-body">
                                {prog.milestones.map((m) => (
                                  <li key={m} className="flex items-start gap-2">
                                    <span className="text-brand-violet font-bold">•</span>
                                    <span>{m}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Activities & Highlights */}
                            <div className="space-y-3 bg-white/90 p-4 rounded-2xl border border-border-soft shadow-xs">
                              <h3 className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                                <Smile className="w-4 h-4 text-brand-yellow-dark" />
                                Interactive Play & Stations
                              </h3>
                              <ul className="space-y-2 text-xs text-text-body">
                                {prog.activities.map((a) => (
                                  <li key={a} className="flex items-start gap-2">
                                    <span className="text-brand-yellow-dark font-bold">•</span>
                                    <span>{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Special Highlights Bar */}
                          <div className="p-3.5 rounded-2xl bg-white/95 border border-border-soft flex flex-wrap items-center gap-2 text-xs">
                            <span className="font-extrabold text-brand-violet">Key Features:</span>
                            {prog.specialHighlights.map((feat) => (
                              <span
                                key={feat}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-cream text-text-primary font-semibold text-[11px] border border-border-soft/60"
                              >
                                ✓ {feat}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="pt-2 flex flex-wrap items-center gap-3">
                            <CtaButton
                              variant="primary"
                              size="md"
                              onClick={() => handleOpenEnquiry("admissions")}
                            >
                              Enquire for {prog.name}
                            </CtaButton>
                            <CtaButton
                              variant="outline"
                              size="md"
                              onClick={() => handleOpenEnquiry("admissions")}
                            >
                              Schedule Campus Visit
                            </CtaButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. A Day in the Life (Daily Schedule Timeline) */}
        <section className="py-16 md:py-24 bg-brand-violet-soft/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  DAILY ROUTINE
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  A Joyful Day at WEE SPRITES
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  Structured predictability blended with autonomous play gives young children the emotional security they need to thrive.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {dailySchedule.map((item, idx) => (
                <Reveal key={item.time} delay={0.08 + idx * 0.06}>
                  <div className="p-6 rounded-3xl bg-white border border-border-soft shadow-card hover:shadow-floating hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet text-brand-yellow font-extrabold text-xs self-start mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>
                    <h3 className="text-base font-black text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed flex-1">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Program Comparison Matrix */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  PROGRAM MATRIX
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  At-A-Glance Curriculum Comparison
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  Find the ideal match for your child&apos;s age and developmental stage.
                </p>
              </Reveal>
            </div>

            {/* Mobile horizontal scroll hint */}
            <div className="flex items-center justify-end md:hidden mb-3 text-xs text-text-body">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet-soft border border-border-soft font-bold text-brand-violet">
                <span>⇄</span> Swipe horizontally to compare all programs
              </span>
            </div>

            <div className="w-full max-w-full overflow-x-auto rounded-3xl border border-border-soft shadow-card block">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-brand-violet text-white">
                    <th className="p-4 font-black">Program</th>
                    <th className="p-4 font-black">Age Range</th>
                    <th className="p-4 font-black">Timings</th>
                    <th className="p-4 font-black">Ratio</th>
                    <th className="p-4 font-black">Core Pedagogy Focus</th>
                    <th className="p-4 font-black text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-soft bg-white">
                  {programsData.map((p, idx) => (
                    <tr
                      key={p.id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-brand-cream/30 hover:bg-brand-violet-soft/40 transition-colors"}
                    >
                      <td className="p-4 font-extrabold text-brand-violet">{p.name}</td>
                      <td className="p-4 font-semibold text-text-primary">{p.ageRange}</td>
                      <td className="p-4 text-text-body">{p.timings}</td>
                      <td className="p-4 text-text-body font-bold">{p.ratio}</td>
                      <td className="p-4 text-text-body max-w-xs">{p.tagline}</td>
                      <td className="p-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleOpenEnquiry("admissions")}
                          className="px-3.5 py-1.5 rounded-full bg-brand-yellow text-text-primary font-bold text-xs hover:bg-brand-yellow-dark transition-colors shadow-xs"
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. Call to Action Banner */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-brand-violet via-brand-violet-dark to-brand-violet text-white relative overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-bottom-20 -left-16 opacity-30" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="-top-12 -right-12 opacity-30" speed="normal" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 text-brand-yellow text-xs font-black tracking-wide uppercase border border-white/20">
                <span>BEGIN YOUR CHILD&apos;S JOURNEY WITH US</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Ready to Choose the Perfect Program?
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
                Connect with our early education counselors to discuss age cut-offs, program suitability, or schedule a warm campus visit.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <CtaButton
                  variant="yellow"
                  size="lg"
                  onClick={() => handleOpenEnquiry("admissions")}
                >
                  Apply for Admission
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

