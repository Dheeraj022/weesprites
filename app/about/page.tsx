import type { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About Us | Our Story, Vision & Mentors",
  description:
    "Discover the philosophy, founding story, child-centric Montessori methodology, safe campus design, and compassionate educators behind WEE SPRITES Preschool & Day Care.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | WEE SPRITES Preschool & Day Care",
    description:
      "A safe, nurturing space where every child explores, learns, and blossoms. Meet our leadership team and learn about our holistic early childhood pedagogy.",
    url: "https://weesprites.com/about",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/about-child.jpg",
        width: 1200,
        height: 630,
        alt: "Happy children exploring and laughing together at WEE SPRITES Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | WEE SPRITES Preschool & Day Care",
    description:
      "Learn about our Montessori-inspired philosophy, visionary leadership, and dedicated educators.",
    images: ["/images/about-child.jpg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
