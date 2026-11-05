import type { Metadata } from "next";
import { ProgramsView } from "@/components/programs/programs-view";

export const metadata: Metadata = {
  title: "Preschool Programme & Curriculum",
  description:
    "Explore our age-aligned programmes from Toddler Group to Kindergarten, Evening Program, and Day Care at WEE SPRITES Preschool.",
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgrammePage() {
  return <ProgramsView />;
}
