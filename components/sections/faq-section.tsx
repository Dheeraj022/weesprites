"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqContent } from "@/lib/content";
import { Reveal } from "../ui/reveal";

function renderFaqAnswer(answer: string) {
  const paragraphs = answer.split("\n\n");
  return (
    <div className="space-y-3">
      {paragraphs.map((p, pIdx) => {
        // If paragraph contains bullet points
        if (p.includes("\n• ") || p.startsWith("• ")) {
          const lines = p.split("\n");
          const intro = lines[0].startsWith("• ") ? null : lines[0];
          const bullets = lines.filter((l) => l.startsWith("• "));
          return (
            <div key={pIdx} className="space-y-2">
              {intro && <p className="font-semibold text-text-primary">{intro}</p>}
              <ul className="space-y-1.5 pl-1">
                {bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-brand-violet font-black mt-0.5">•</span>
                    <span>{b.replace(/^•\s*/, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        // Check for phone number and instagram
        let content: React.ReactNode = p;
        if (p.includes("9582019000")) {
          const parts = p.split("9582019000");
          content = (
            <>
              {parts[0]}
              <a
                href="tel:9582019000"
                className="font-bold text-brand-violet hover:underline inline-flex items-center gap-1"
              >
                9582019000
              </a>
              {parts[1]}
            </>
          );
        } else if (p.includes("@weespritesvikaspuri")) {
          const parts = p.split("@weespritesvikaspuri");
          content = (
            <>
              {parts[0]}
              <a
                href="https://instagram.com/weespritesvikaspuri"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-violet hover:underline inline-flex items-center gap-1"
              >
                @weespritesvikaspuri
              </a>
              {parts[1]}
            </>
          );
        }

        return <p key={pIdx}>{content}</p>;
      })}
    </div>
  );
}

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
            <p className="mt-3 text-sm md:text-base text-text-body font-semibold text-brand-violet/90">
              {faqContent.supportingText}
            </p>
          </Reveal>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqContent.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={faq.question} delay={0.08 + (idx % 6) * 0.04}>
                <div className="rounded-2xl md:rounded-3xl border border-border-soft bg-white overflow-hidden shadow-sm hover:border-brand-violet/30 transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet"
                  >
                    <span className="text-sm md:text-base font-extrabold text-text-primary pr-4 flex items-start gap-2.5">
                      <span className="text-brand-violet font-black shrink-0">{idx + 1}.</span>
                      <span>{faq.question}</span>
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
                    <div className="px-5 pb-5 pt-3 text-xs md:text-sm text-text-body leading-relaxed border-t border-border-soft/40">
                      {renderFaqAnswer(faq.answer)}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* School Motto Banner */}
        <Reveal delay={0.25}>
          <div className="mt-10 md:mt-14 text-center p-6 md:p-8 rounded-3xl bg-gradient-to-r from-brand-violet/10 via-brand-yellow/15 to-brand-lilac/30 border border-brand-violet/20 shadow-sm">
            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-brand-violet">
              {faqContent.mottoHeading}
            </span>
            <p className="mt-1 text-base sm:text-lg md:text-xl font-black text-text-primary tracking-wide">
              {faqContent.motto}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

