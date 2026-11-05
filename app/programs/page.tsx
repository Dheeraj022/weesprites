import type { Metadata } from "next";
import { ProgramsView } from "@/components/programs/programs-view";

export const metadata: Metadata = {
  title: "Preschool Programs & Age-Wise Curriculum",
  description:
    "Explore our 7 comprehensive early childhood programs at WEE SPRITES: Toddler Group (18 Months+), Pre-Nursery (2+ Years), Nursery (3–4 Years), LKG, UKG, Evening Program, and Day Care.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Preschool & Day Care Programs | WEE SPRITES",
    description:
      "Comprehensive, developmental milestones-aligned curriculum spanning Toddler Group to Kindergarten and extended Day Care. Review batch timings and curriculum comparison matrix.",
    url: "https://weesprites.com/programs",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/schoolimages/two-sisters-ball-pool.jpg",
        width: 1200,
        height: 630,
        alt: "Preschool children engaged in sensory toddler group learning at WEE SPRITES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Programs & Age-Wise Curriculum | WEE SPRITES",
    description:
      "Toddler Group, Pre-Nursery, Nursery, LKG, UKG, Evening Program, and Day Care tailored for curious little learners.",
    images: ["/schoolimages/two-sisters-ball-pool.jpg"],
  },
};

export default function ProgramsPage() {
  return <ProgramsView />;
}
