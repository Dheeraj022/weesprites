"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck,
  Clock,
  HeartPulse,
  ShieldCheck,
  Smile,
  CreditCard,
  AlertTriangle,
  MessageCircle,
  ChevronRight,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { siteConfig } from "@/lib/site-config";

export function PolicyView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const policies = [
    {
      id: "admissions-policy",
      title: "1. Admissions & Enrolment Policy",
      icon: <FileCheck className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            Admissions at WEE SPRITES are granted on a first-come, first-served basis following age verification and a friendly interaction session:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Children are admitted strictly according to age cut-offs defined for each academic tier (Play Group through UKG).</li>
            <li>Enrolment is confirmed only upon submission of completed registration documents, birth certificate, vaccination record, and admission fee receipt.</li>
            <li>We do not conduct formal written testing or high-pressure entrance interviews for toddlers. Interactions are designed solely to observe developmental readiness.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "timing-policy",
      title: "2. Campus Hours & Attendance Guidelines",
      icon: <Clock className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            Consistent routines help young children thrive and foster self-discipline:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Morning Preschool:</strong> 9:00 AM – 12:30 PM (Monday through Friday).</li>
            <li><strong>Evening Day Care:</strong> 1:00 PM – 6:30 PM (Flexible pickup windows).</li>
            <li>Parents are requested to ensure children arrive between 8:45 AM and 9:00 AM to participate in morning circle time and musical welcome rhymes.</li>
            <li>In the event of an unavoidable late arrival or early pickup, advance notification to the administration desk via SMS or phone call is mandatory.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "health-policy",
      title: "3. Child Health, Sanitization & Illness Policy",
      icon: <HeartPulse className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            Maintaining a hygienic, germ-free environment is a shared responsibility between parents and educators:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Children with contagious symptoms (fever exceeding 100°F, vomiting, diarrhea, conjunctivitis, or communicable rashes) must remain at home.</li>
            <li>A child must be fever-free for at least 24 hours without medication before returning to campus.</li>
            <li>Any medication to be administered during school hours must be accompanied by written parent authorization and prescription directions handed directly to the school nurse/coordinator.</li>
            <li>All classroom toys, sensory equipment, and high-touch furniture undergo daily non-toxic medical-grade sanitization.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "pickup-policy",
      title: "4. Child Escort & Handover Security",
      icon: <ShieldCheck className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            No child will ever be released to an unrecognized person under any circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Every enrolled family is issued two official <strong>Authorized Guardian Pickup Badges</strong> with photographs.</li>
            <li>Staff will only release a child to designated badge-holders. If an emergency substitute is dispatched, parents must inform the school in writing with photo ID confirmation beforehand.</li>
            <li>Children are handed over directly from educators to guardians at the designated security gate after verification.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "behavior-guidance",
      title: "5. Positive Behaviour Guidance & No-Punishment Pledge",
      icon: <Smile className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            WEE SPRITES operates under an uncompromising child dignity and positive mentorship charter:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Zero Tolerance for Corporal Punishment:</strong> Physical reprimands, verbal shouting, shaming, or isolating time-outs are strictly prohibited across all branches.</li>
            <li>Educators employ positive redirection, active listening, restorative conversations, and emotional self-regulation techniques.</li>
            <li>We partner proactively with parents if a child exhibits persistent social anxiety or emotional distress to craft supportive, gentle individual transition plans.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "fee-policy",
      title: "6. Fee Structure, Schedules & Cancellation Policy",
      icon: <CreditCard className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            We maintain total financial transparency with no hidden costs:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Tuition fees are payable quarterly in advance by the 10th day of the relevant calendar quarter.</li>
            <li>Fees include all curriculum books, daily sensory materials, craft supplies, celebration souvenirs, and routine first-aid support.</li>
            <li>The one-time registration and admission processing fee is non-refundable upon seat confirmation.</li>
            <li>For voluntary withdrawal mid-session, a written notice of 30 days prior to the start of the subsequent quarter is required.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "weather-policy",
      title: "7. Inclement Weather & Emergency Closure Protocol",
      icon: <AlertTriangle className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            The safety of young commuters is evaluated during extreme climatic conditions:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>In the event of heavy monsoon flooding, heatwaves, or governmental air quality directives, school closure notifications are transmitted via SMS and email before 7:00 AM.</li>
            <li>Classrooms are fully equipped with medical-grade HEPA air purifiers, centralized climate control, fire safety hydrants, and backup generators.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "grievance-policy",
      title: "8. Parent Grievance & Open-Door Communication",
      icon: <MessageCircle className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            We welcome constructive feedback and provide direct access to campus coordinators:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Parent-Teacher Meetings (PTMs) are scheduled at the conclusion of each learning theme to share portfolio assessments.</li>
            <li>Parents may schedule one-on-one appointments with the Center Head by emailing or telephoning the front desk.</li>
            <li>Any concern raised is formally logged and resolved with written follow-up within 48 business hours.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative bg-gradient-to-b from-brand-violet-soft/50 via-white to-white pt-8 pb-14 md:pt-12 md:pb-20 overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-top-20 -left-20 opacity-30" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="top-10 -right-16 opacity-35" speed="normal" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-body mb-5">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">School Policies</span>
            </nav>

            <Reveal delay={0.05}>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm mb-3">
                <span>CAMPUS GOVERNANCE & ENROLMENT GUIDELINES</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">
                School Policies & Terms of Enrolment
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed max-w-2xl">
                Clear, transparent operational principles designed to ensure child safety, health, positive mentorship, and harmonious partnerships with families.
              </p>
              <p className="mt-2 text-xs text-text-muted">
                Applicable to All Branches • Updated for Academic Session 2026–2027
              </p>
            </Reveal>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-8 md:py-14 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-left">
              {policies.map((policy, idx) => (
                <Reveal key={policy.id} delay={0.05 + idx * 0.04}>
                  <div className="p-6 sm:p-8 rounded-3xl bg-brand-cream/40 border border-border-soft hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-border-soft flex items-center justify-center shrink-0">
                        {policy.icon}
                      </div>
                      <h2 className="text-lg sm:text-xl font-black text-text-primary">
                        {policy.title}
                      </h2>
                    </div>
                    {policy.content}
                  </div>
                </Reveal>
              ))}

              {/* Administrative Assistance Box */}
              <Reveal delay={0.35}>
                <div className="p-6 sm:p-8 rounded-3xl bg-brand-violet text-white text-left space-y-4">
                  <span className="text-xs font-black uppercase tracking-wider text-brand-yellow">
                    ACADEMIC & ADMINISTRATIVE SUPPORT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Need Clarification on Any Policy?
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Our admissions counselors and center head are available to answer queries regarding transport, food preferences, medical allowances, or custom day care schedules.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenEnquiry("admissions")}
                      className="px-5 py-2.5 rounded-full bg-brand-yellow text-text-primary font-bold text-xs shadow-md hover:bg-brand-yellow-dark transition-colors"
                    >
                      Connect with Admissions Desk
                    </button>
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs border border-white/20 hover:bg-white hover:text-brand-violet transition-colors"
                    >
                      Visit Our Campus
                    </Link>
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

