"use client";

import React from "react";
import Image from "next/image";
import { facilitiesContent } from "@/lib/content";
import { Reveal } from "../ui/reveal";

export function FacilitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <div className="max-w-2xl text-left">
            <Reveal delay={0.05}>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
                OUR FACILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mt-2">
                {facilitiesContent.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 text-sm md:text-base text-text-body">
                {facilitiesContent.supportingText}
              </p>
            </Reveal>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {facilitiesContent.facilities.map((facility, idx) => (
            <Reveal key={facility.id} delay={0.1 + idx * 0.08}>
              <div className="group rounded-3xl overflow-hidden bg-brand-cream/50 border border-border-soft hover:shadow-floating hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full cursor-pointer">
                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col text-left">
                  <h3 className="text-base font-extrabold text-text-primary group-hover:text-brand-violet transition-colors">
                    {facility.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-text-body leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

