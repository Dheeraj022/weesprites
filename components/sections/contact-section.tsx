"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "../ui/cta-button";
import { Reveal } from "../ui/reveal";

export interface ContactSectionProps {
  onOpenEnquiry: (tab: "admissions" | "franchise") => void;
}

export function ContactSection({ onOpenEnquiry }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Contact details cards */}
          <div className="lg:col-span-6 text-left space-y-6">
            <Reveal delay={0.05}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary mt-2">
                We Love Meeting New Families
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm md:text-base text-text-body leading-relaxed max-w-lg">
                Have questions about our programs, campus tours, admissions, or franchise opportunities? Our friendly team is ready to assist you.
              </p>
            </Reveal>

            <div className="space-y-4 pt-2">
              <Reveal delay={0.2}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-cream/60 border border-border-soft">
                  <div className="w-10 h-10 rounded-xl bg-brand-violet-soft text-brand-violet flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-black text-text-primary">
                      Campus Location
                    </h3>
                    <p className="text-xs md:text-sm text-text-body mt-0.5">
                      {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-cream/60 border border-border-soft">
                  <div className="w-10 h-10 rounded-xl bg-brand-violet-soft text-brand-violet flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-black text-text-primary">
                      Admissions Desk
                    </h3>
                    <p className="text-xs md:text-sm text-text-body mt-0.5">
                      <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-violet transition-colors">
                        {siteConfig.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-cream/60 border border-border-soft">
                  <div className="w-10 h-10 rounded-xl bg-brand-violet-soft text-brand-violet flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-black text-text-primary">
                      General & Franchise Enquiries
                    </h3>
                    <p className="text-xs md:text-sm text-text-body mt-0.5">
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-violet transition-colors">
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Interactive Quick Action Box */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="rounded-3xl md:rounded-4xl bg-gradient-to-br from-brand-violet-soft via-white to-brand-yellow-light/40 p-6 md:p-10 border-2 border-brand-violet shadow-soft text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow text-text-primary font-black text-xs uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-brand-violet" />
                    Quick Enquiry Desk
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-violet">
                    Ready to Take the Next Step?
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                    Select your enquiry type below to open the dedicated form. We will connect with you within 24 hours.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div
                    onClick={() => onOpenEnquiry("admissions")}
                    className="p-4 rounded-2xl bg-white border border-border-soft hover:border-brand-violet hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-violet text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-text-primary group-hover:text-brand-violet transition-colors">
                          Preschool Admissions
                        </h4>
                        <p className="text-xs text-text-body">
                          Schedule campus tour & enrol child
                        </p>
                      </div>
                    </div>
                    <CtaButton variant="primary" size="sm" onClick={() => onOpenEnquiry("admissions")}>
                      Enquire
                    </CtaButton>
                  </div>

                  <div
                    onClick={() => onOpenEnquiry("franchise")}
                    className="p-4 rounded-2xl bg-white border border-border-soft hover:border-brand-yellow-dark hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-yellow-dark text-text-primary flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-text-primary group-hover:text-brand-yellow-dark transition-colors">
                          Franchise Partnership
                        </h4>
                        <p className="text-xs text-text-body">
                          Request business prospectus & city allocation
                        </p>
                      </div>
                    </div>
                    <CtaButton variant="yellow" size="sm" onClick={() => onOpenEnquiry("franchise")}>
                      Partner
                    </CtaButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

