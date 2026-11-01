"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Home,
  Users,
  GraduationCap,
  FileCheck,
  Briefcase,
  Image as ImageIcon,
  Phone,
  ShieldCheck,
  FileText,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Calendar,
  Sparkles,
  Heart,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { siteConfig } from "@/lib/site-config";
import { programsContent } from "@/lib/content";

export function SitemapView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const sitemapGroups = [
    {
      title: "Core Pages & Exploration",
      description: "Primary navigational destinations across our digital campus.",
      icon: <Home className="w-5 h-5 text-brand-violet" />,
      links: [
        { name: "Home", href: "/", desc: "Homepage overview, trust pillars, curriculum snapshot, and parent reviews." },
        { name: "About Us", href: "/about", desc: "Our philosophy, founding story, Montessori vision, and educator team." },
        { name: "Programs", href: "/programs", desc: "Age-aligned curriculum breakdown from 1.5 to 6.5 years." },
        { name: "Admissions", href: "/admissions", desc: "Admissions criteria, 4-step registration, documents checklist, and form." },
        { name: "Franchise Opportunity", href: "/franchise", desc: "Comprehensive business opportunity, unit economics, and partnership enquiry." },
        { name: "Gallery & Events", href: "/gallery", desc: "24-photo interactive showcase of festivals, annual day dances, and arts." },
        { name: "Contact Us", href: "/contact", desc: "Direct campus coordinates, telephone helpline, transit guide, and Google Map." },
      ],
    },
    {
      title: "Academic Curriculum & Programs",
      description: "Montessori-inspired, developmental stages for toddlers & preschoolers.",
      icon: <GraduationCap className="w-5 h-5 text-brand-violet" />,
      links: [
        { name: "Play Group (1.5 – 2.5 yrs)", href: "/programs#playgroup", desc: "Sensory exploration, gentle separation confidence, and early vocabulary." },
        { name: "Pre-Nursery (2.5 – 3.5 yrs)", href: "/programs#prenursery", desc: "Fine-motor grasping, cooperative play, and language immersion." },
        { name: "Nursery (3.5 – 4.5 yrs)", href: "/programs#nursery", desc: "Phonetic sounds, foundational numeracy, and expressive arts." },
        { name: "Lower KG / LKG (4.5 – 5.5 yrs)", href: "/programs#lkg", desc: "Early reading, structured handwriting, and scientific inquiry." },
        { name: "Upper KG / UKG (5.5 – 6.5 yrs)", href: "/programs#ukg", desc: "Formal primary school transition readiness and leadership projects." },
        { name: "Evening Day Care (1.5 – 10 yrs)", href: "/programs#evening", desc: "Flexible after-school nurture, supervised homework, and hobby clubs." },
      ],
    },
    {
      title: "Admissions & Campus Visits",
      description: "Everything parents need to register their children.",
      icon: <FileCheck className="w-5 h-5 text-brand-violet" />,
      links: [
        { name: "Online Admissions Enquiry", href: "/admissions#enquiry-form", desc: "Submit your details for a guaranteed priority consultation." },
        { name: "Age Eligibility Table", href: "/admissions#eligibility-table", desc: "Official cutoff milestones across all programs." },
        { name: "Documentation Checklist", href: "/admissions#documents-checklist", desc: "Required birth certificates, medical forms, and photos." },
        { name: "Frequently Asked Questions", href: "/admissions#faq", desc: "Answers regarding student-teacher ratios, meals, and bus safety." },
      ],
    },
    {
      title: "Franchise & Investor Relations",
      description: "Partner with WEE SPRITES to expand quality early education.",
      icon: <Briefcase className="w-5 h-5 text-brand-violet" />,
      links: [
        { name: "Franchise Application Form", href: "/franchise#application-form", desc: "Submit your investment profile and location interest." },
        { name: "Investment & Financial Model", href: "/franchise#investment-model", desc: "Detailed capex, opex, break-even timeline, and projected ROI." },
        { name: "360° Partner Support System", href: "/franchise#turnkey-setup", desc: "Site selection, architectural blueprint, educator training, and marketing." },
        { name: "Franchise FAQs", href: "/franchise#faq", desc: "Common questions regarding space requirements and payback horizons." },
      ],
    },
    {
      title: "Campus Safety & Legal Policies",
      description: "Official governance charters, privacy rules, and terms.",
      icon: <ShieldCheck className="w-5 h-5 text-brand-violet" />,
      links: [
        { name: "Privacy Policy", href: "/privacy", desc: "Student record privacy, CCTV encryption, and parent confidentiality rights." },
        { name: "School Policies & Enrolment Terms", href: "/policy", desc: "Child handover, attendance, illness protocol, and positive behaviour pledge." },
        { name: "Search Engine XML Sitemap", href: "/sitemap.xml", desc: "Machine-readable XML directory for Googlebot, Bing, and crawlers." },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative bg-gradient-to-b from-brand-violet-soft/50 via-white to-white pt-8 pb-14 md:pt-12 md:pb-20 overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-top-20 -right-20 opacity-30" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="top-10 -left-16 opacity-35" speed="normal" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-body mb-5">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">Sitemap</span>
            </nav>

            <Reveal delay={0.05}>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm mb-3">
                <span>WEBSITE DIRECTORY & QUICK INDEX</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">
                HTML Website Sitemap
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed max-w-2xl">
                Find any section, curriculum detail, admissions form, franchise dossier, or campus resource across the entire WEE SPRITES digital ecosystem.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="py-8 md:py-16 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sitemapGroups.map((group, gIdx) => (
                <Reveal key={group.title} delay={0.05 + gIdx * 0.05}>
                  <div className="rounded-[32px] sm:rounded-[36px] bg-brand-cream/35 border border-border-soft p-6 sm:p-8 hover:border-brand-violet/30 transition-colors">
                    {/* Group Header */}
                    <div className="flex items-center gap-3 pb-6 border-b border-border-soft text-left">
                      <div className="w-11 h-11 rounded-2xl bg-white shadow-xs border border-border-soft flex items-center justify-center shrink-0">
                        {group.icon}
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-text-primary">
                          {group.title}
                        </h2>
                        <p className="text-xs text-text-body mt-0.5">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 text-left">
                      {group.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="group p-4 rounded-2xl bg-white border border-border-soft hover:border-brand-violet hover:shadow-floating hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-extrabold text-brand-violet group-hover:text-brand-violet-dark flex items-center gap-1.5">
                                <span>{link.name}</span>
                                {link.href.endsWith(".xml") && (
                                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                                )}
                              </h3>
                              <ArrowRight className="w-4 h-4 text-brand-violet/40 group-hover:text-brand-violet group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-xs text-text-body mt-1.5 leading-relaxed">
                              {link.desc}
                            </p>
                          </div>
                          <span className="text-[11px] font-mono text-text-muted mt-3 block">
                            {link.href}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Bottom Quick Campus Connect Box */}
              <Reveal delay={0.3}>
                <div className="p-8 sm:p-10 rounded-[36px] bg-brand-violet text-white text-center space-y-4">
                  <span className="text-xs font-black uppercase tracking-wider text-brand-yellow">
                    LOOKING FOR SOMETHING SPECIFIC?
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Our Admissions Team is Happy to Assist You
                  </h3>
                  <p className="text-sm text-white/85 max-w-xl mx-auto leading-relaxed">
                    Call our direct campus hotline or schedule a personalized campus tour to experience our Montessori learning zones in person.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenEnquiry("admissions")}
                      className="px-6 py-3 rounded-full bg-brand-yellow text-text-primary font-extrabold text-xs shadow-lg hover:bg-brand-yellow-dark transition-colors"
                    >
                      Enquire for Admissions
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenEnquiry("franchise")}
                      className="px-6 py-3 rounded-full bg-white/10 text-white font-extrabold text-xs border border-white/20 hover:bg-white hover:text-brand-violet transition-colors"
                    >
                      Explore Franchise Opportunities
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

