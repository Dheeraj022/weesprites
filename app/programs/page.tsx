import type { Metadata } from "next";
import { ProgramsView } from "@/components/programs/programs-view";

export const metadata: Metadata = {
  title: "Preschool Programs & Age-Wise Curriculum",
  description:
    "Explore our 6 comprehensive early childhood programs at WEE SPRITES: Play Group (1.5–2.5 yrs), Pre-Nursery (2.5–3.5 yrs), Nursery (3.5–4.5 yrs), LKG, UKG, and Evening Activity Care.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Preschool & Day Care Programs | WEE SPRITES",
    description:
      "Comprehensive, developmental milestones-aligned curriculum spanning Play Group to Kindergarten and extended Day Care. Review batch timings and curriculum comparison matrix.",
    url: "https://weesprites.com/programs",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/program-playgroup.jpg",
        width: 1200,
        height: 630,
        alt: "Preschool children engaged in sensory playgroup learning at WEE SPRITES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Programs & Age-Wise Curriculum | WEE SPRITES",
    description:
      "Play Group, Pre-Nursery, Nursery, LKG, UKG, and Evening Care programs tailored for curious little learners.",
    images: ["/images/program-playgroup.jpg"],
  },
};

export default function ProgramsPage() {
  return <ProgramsView />;
}
