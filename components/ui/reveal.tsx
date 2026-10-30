"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  direction = "up",
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: yOffset, x: 0 };
      case "down":
        return { opacity: 0, y: -yOffset, x: 0 };
      case "left":
        return { opacity: 0, x: yOffset, y: 0 };
      case "right":
        return { opacity: 0, x: -yOffset, y: 0 };
      case "none":
        return { opacity: 0, x: 0, y: 0 };
      default:
        return { opacity: 0, y: yOffset, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
