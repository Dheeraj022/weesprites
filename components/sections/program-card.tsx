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
        "group relative flex flex-col rounded-3xl p-3 sm:p-3.5 xl:p-4 transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 hover:shadow-floating border border-border-soft h-full justify-between",
        isLilac
          ? "bg-brand-violet-soft/70 hover:bg-brand-violet-soft"
          : "bg-brand-yellow-light/60 hover:bg-brand-yellow-light"
      )}
    >
      {/* Top Rounded Photo */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white mb-3 shadow-sm shrink-0">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      </div>

      {/* Program Details */}
      <div className="flex-1 flex flex-col text-left">
        <div className="min-h-[2.75rem] flex items-center">
          <h3 className="text-sm sm:text-base xl:text-[15px] font-black text-text-primary group-hover:text-brand-violet transition-colors leading-tight line-clamp-2">
            {program.name}
          </h3>
        </div>
        <p className="text-[11px] sm:text-xs font-bold text-text-body/75 mt-1 shrink-0">
          {program.ageRange}
        </p>
        <p className="text-[11px] sm:text-xs text-text-body/90 mt-2 leading-relaxed line-clamp-2 min-h-[2.25rem]">
          {program.description}
        </p>
      </div>

      {/* Bottom Circle Action Button */}
      <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between shrink-0">
        <span className="text-[11px] font-bold text-brand-violet group-hover:underline">
          View details
        </span>
        <div
          className={cn(
            "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 shrink-0",
            isLilac
              ? "bg-brand-violet text-white shadow-sm"
              : "bg-brand-yellow-dark text-text-primary shadow-sm"
          )}
        >
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

