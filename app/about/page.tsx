import type { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About Us | Our Story, Vision & Mentors",
  description:
    "Discover the philosophy, founding story, child-centric early learning methodology, safe campus environment, and compassionate educators behind WEE SPRITES Preschool & Day Care.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | WEE SPRITES Preschool & Day Care",
    description:
      "A safe, nurturing space where every child explores, learns, and blossoms. Meet our leadership team and learn about our holistic early childhood approach.",
    url: "https://weesprites.com/about",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/schoolimages/parent-toddler-warmth.jpg",
        width: 1200,
        height: 630,
        alt: "Warm educator and happy child celebrating together at WEE SPRITES Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | WEE SPRITES Preschool & Day Care",
    description:
      "Learn about our child-centric philosophy, visionary leadership, and dedicated early educators.",
    images: ["/schoolimages/parent-toddler-warmth.jpg"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
