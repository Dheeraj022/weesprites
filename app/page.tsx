import type { Metadata } from "next";
import { HomeView } from "@/components/home/home-view";

export const metadata: Metadata = {
  title: "WEE SPRITES Preschool & Day Care | Learn, Play & Grow",
  description:
    "Welcome to WEE SPRITES Preschool & Day Care. A joyful, child-centric learning sanctuary blending Montessori & play-based education in Delhi. Enquire for admissions or preschool franchise.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WEE SPRITES Preschool & Day Care | Learn, Play & Grow",
    description:
      "A joyful, caring environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
    url: "https://weesprites.com",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-child.jpg",
        width: 1200,
        height: 630,
        alt: "Happy preschool girl in lilac dress learning and smiling at WEE SPRITES Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEE SPRITES Preschool & Day Care | Learn, Play & Grow",
    description:
      "A joyful environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
    images: ["/images/hero-child.jpg"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
