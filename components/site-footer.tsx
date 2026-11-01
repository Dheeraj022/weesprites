"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { programsContent } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-brand-violet-dark text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-brand-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/15">
          {/* Col 1: Brand Info & Tagline */}
          <div className="lg:col-span-4 text-left space-y-4">
            <div className="inline-block p-2 bg-white rounded-2xl shadow-sm">
              <div className="relative h-9 w-44">
                <Image
                  src="/logo/logo.png"
                  alt="WEE SPRITES Preschool"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              A nurturing place where children learn, play and grow with confidence. Built with child safety, joy, and holistic development at heart.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-text-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-text-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-text-primary flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-yellow">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-white/75">
              {siteConfig.navigation.map((nav) => (
                <li key={nav.label}>
                  <Link
                    href={nav.href}
                    className="hover:text-brand-yellow transition-colors block py-0.5"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3 text-left space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-yellow">
              Our Programs
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-white/75">
              {programsContent.programs.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/programs#${p.id}`}
                    className="hover:text-brand-yellow transition-colors block py-0.5"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 text-left space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-yellow">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs md:text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-yellow transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-yellow transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>
            &copy; 2026 {siteConfig.name} Preschool. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/privacy" className="hover:text-brand-yellow transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/policy" className="hover:text-brand-yellow transition-colors">
              School Policies & Terms
            </Link>
            <span>•</span>
            <Link href="/sitemap" className="hover:text-brand-yellow transition-colors">
              HTML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

