"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqContent } from "@/lib/content";
import { Reveal } from "../ui/reveal";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-cream/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <Reveal delay={0.05}>
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet/85">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary mt-2">
              {faqContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-sm md:text-base text-text-body">
              {faqContent.supportingText}
            </p>
          </Reveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqContent.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={faq.question} delay={0.1 + idx * 0.05}>
                <div className="rounded-2xl md:rounded-3xl border border-border-soft bg-white overflow-hidden shadow-sm transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet"
                  >
                    <span className="text-sm md:text-base font-extrabold text-text-primary pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-brand-violet text-white rotate-180"
                          : "bg-brand-violet-soft text-brand-violet"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-text-body leading-relaxed border-t border-border-soft/40">
                      <p>{faq.answer}</p>
                      {faq.isDraftPendingApproval && (
                        <p className="mt-2 text-[10px] text-brand-violet font-semibold">
                          * Information provided for initial guidance; confirm details during admissions counseling.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

