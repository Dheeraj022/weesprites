"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProgramItem } from "@/lib/content";
import { cn } from "@/lib/utils";

export interface ProgramCardProps {
  program: ProgramItem;
  onSelect: (program: ProgramItem) => void;
}

export function ProgramCard({ program, onSelect }: ProgramCardProps) {
  const isLilac = program.accentBg === "lilac";

  return (
    <div
      onClick={() => onSelect(program)}
      className={cn(
        "group relative flex flex-col rounded-3xl p-4 transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 hover:shadow-floating border border-border-soft",
        isLilac
          ? "bg-brand-violet-soft/70 hover:bg-brand-violet-soft"
          : "bg-brand-yellow-light/60 hover:bg-brand-yellow-light"
      )}
    >
      {/* Top Rounded Photo */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white mb-4 shadow-sm">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      </div>

      {/* Program Details */}
      <div className="flex-1 flex flex-col text-left">
        <h3 className="text-base md:text-lg font-black text-text-primary group-hover:text-brand-violet transition-colors">
          {program.name}
        </h3>
        <p className="text-xs font-semibold text-text-body/80 mt-1">
          {program.ageRange}
        </p>
        <p className="text-xs text-text-body mt-2 leading-relaxed line-clamp-2">
          {program.description}
        </p>
      </div>

      {/* Bottom Circle Action Button */}
      <div className="mt-4 pt-2 flex items-center justify-between">
        <span className="text-[11px] font-bold text-brand-violet group-hover:underline">
          View details
        </span>
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110",
            isLilac
              ? "bg-brand-violet text-white shadow-sm"
              : "bg-brand-yellow-dark text-text-primary shadow-sm"
          )}
        >
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

