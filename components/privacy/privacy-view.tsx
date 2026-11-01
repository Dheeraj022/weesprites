"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Camera,
  Heart,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";
import { siteConfig } from "@/lib/site-config";

export function PrivacyView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const sections = [
    {
      id: "collection",
      title: "1. Information We Collect",
      icon: <FileText className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            To provide safe, personalized care and meet statutory educational requirements, WEE SPRITES Preschool & Day Care collects the following categories of information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Child Information:</strong> Full name, date of birth, gender, blood group, medical and immunization records, dietary preferences, and developmental milestones.</li>
            <li><strong>Parent/Guardian Information:</strong> Full names, residential addresses, primary phone numbers, verified email addresses, occupations, and official photo IDs.</li>
            <li><strong>Emergency & Pick-up Authorizations:</strong> Names, photographs, and contact numbers of authorized guardians permitted to pick up the child from campus.</li>
            <li><strong>Digital Inquiries:</strong> Contact information, queries, and feedback submitted through our website forms or telephone desk.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "usage",
      title: "2. How We Use Collected Information",
      icon: <UserCheck className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            All collected data is utilized exclusively for educational, safety, and administrative purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Ensuring immediate medical preparedness, dietary compliance, and first-aid response tailored to individual children.</li>
            <li>Tracking educational milestones and compiling regular developmental progress portfolios.</li>
            <li>Communicating daily routines, activity logs, event invitations, attendance notifications, and emergency alerts.</li>
            <li>Processing official admission applications, fee receipts, and franchise partnership documentation.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "cctv",
      title: "3. CCTV Surveillance & Campus Security",
      icon: <Lock className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            Campus safety is paramount at WEE SPRITES. In alignment with child protection standards:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>All classroom learning zones, activity spaces, corridors, playgrounds, and entry points are monitored 24/7 by closed-circuit television (CCTV).</li>
            <li>Restrooms and private changing areas are strictly unmonitored to safeguard child modesty and privacy.</li>
            <li>Footage is securely archived on encrypted, password-protected servers with access restricted exclusively to school leadership and authorized security officers.</li>
            <li>Recordings are retained for a designated 30-day security cycle unless required for specific safety reviews or regulatory audits.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "media-consent",
      title: "4. Photography, Video & Social Media Policy",
      icon: <Camera className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            We celebrate student milestones and school life through carefully managed photography:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Photographs taken during Annual Day, festivals, sports events, and daily crafts may be included in parent circulars, newsletters, or our official school website gallery.</li>
            <li>Parents may elect to grant or withhold photo consent during the enrolment process via the Media Consent Form.</li>
            <li>We never disclose a child&apos;s full name, residential address, or private contact details alongside publicly visible photographs or promotional materials.</li>
            <li>Parents retain the right to request the prompt removal of any image featuring their child from digital platforms at any time.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "protection",
      title: "5. Data Security & Storage Standards",
      icon: <ShieldCheck className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            WEE SPRITES implements physical, administrative, and technological defenses to prevent unauthorized access, loss, or alteration of student records:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Physical records are stored in locked administrative filing cabinets accessible only by authorized admissions staff.</li>
            <li>Digital records and inquiry submissions are encrypted using industry-standard SSL/TLS protocols and stored on secure cloud databases with role-based authentication.</li>
            <li>Staff members undergo mandatory data privacy and confidentiality training prior to handling student records.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "third-parties",
      title: "6. Non-Disclosure & Third-Party Sharing",
      icon: <Eye className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            We adhere to a strict non-commercialization principle regarding personal information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>We <strong>never</strong> sell, rent, trade, or monetize student or parent data to third-party commercial marketing entities or data brokers.</li>
            <li>Information is shared only with verified service partners directly involved in school operations (e.g., student accident insurance providers, SMS alert gateways) under strict non-disclosure obligations.</li>
            <li>Disclosure will only occur if mandated by applicable law, judicial order, or official governmental directive.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "rights",
      title: "7. Parent Rights & Access Requests",
      icon: <UserCheck className="w-5 h-5 text-brand-violet" />,
      content: (
        <div className="space-y-3 text-sm text-text-body leading-relaxed">
          <p>
            Parents and legal guardians hold full authority over their family&apos;s data:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Right to Review:</strong> Request an overview of all documented personal and medical details on file.</li>
            <li><strong>Right to Rectify:</strong> Update emergency contacts, phone numbers, addresses, or medical directives at any time.</li>
            <li><strong>Right to Erasure:</strong> Upon withdrawal from the school, non-statutory records will be safely archived or deleted in accordance with regulatory record-keeping laws.</li>
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
          <FloatingBlob color="lilac" size="xl" className="-top-20 -right-20 opacity-30" speed="slow" />
          <FloatingBlob color="yellow" size="lg" className="top-10 -left-16 opacity-35" speed="normal" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-body mb-5">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">Privacy Policy</span>
            </nav>

            <Reveal delay={0.05}>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm mb-3">
                <span>CHILD SAFETY & DATA TRANSPARENCY</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">
                Privacy Policy & Student Safeguards
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed max-w-2xl">
                At WEE SPRITES Preschool & Day Care, the privacy, confidentiality, and safety of our children, parents, and community are central to our trust.
              </p>
              <p className="mt-2 text-xs text-text-muted">
                Effective Date: January 1, 2026 • Last Reviewed: Academic Year 2026–2027
              </p>
            </Reveal>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-8 md:py-14 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-left">
              {sections.map((sec, idx) => (
                <Reveal key={sec.id} delay={0.05 + idx * 0.04}>
                  <div className="p-6 sm:p-8 rounded-3xl bg-brand-cream/40 border border-border-soft hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-border-soft flex items-center justify-center shrink-0">
                        {sec.icon}
                      </div>
                      <h2 className="text-lg sm:text-xl font-black text-text-primary">
                        {sec.title}
                      </h2>
                    </div>
                    {sec.content}
                  </div>
                </Reveal>
              ))}

              {/* Data Protection Contact Box */}
              <Reveal delay={0.35}>
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-violet-soft/80 to-brand-cream/60 border-2 border-brand-violet/20 text-left space-y-4">
                  <div className="flex items-center gap-2 text-brand-violet font-black text-sm uppercase tracking-wide">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Data Protection & Privacy Desk</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-text-primary">
                    Questions Regarding Your Family&apos;s Privacy?
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed">
                    If you have questions regarding student record confidentiality, media preferences, or wish to review your registered information, please reach out directly to our administrative office:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-text-body font-semibold">
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border-soft">
                      <Mail className="w-4 h-4 text-brand-violet shrink-0" />
                      <span>{siteConfig.email}</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-border-soft">
                      <Phone className="w-4 h-4 text-brand-violet shrink-0" />
                      <span>{siteConfig.phone}</span>
                    </div>
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

