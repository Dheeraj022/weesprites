import type { Metadata } from "next";
import { HomeView } from "@/components/home/home-view";

export const metadata: Metadata = {
  title: "WEE SPRITES Preschool & Day Care | We Care, We Share",
  description:
    "Welcome to WEE SPRITES Preschool & Day Care. We care, we share, for the future, we prepare. A joyful, child-centric learning sanctuary offering early years and play-based education. Enquire for admissions or preschool franchise.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WEE SPRITES Preschool & Day Care | We Care, We Share",
    description:
      "We care, we share, for the future, we prepare. A joyful, caring environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
    url: "https://weesprites.com",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/schoolimages/hero-toddler-ball-pit.jpg",
        width: 1200,
        height: 630,
        alt: "Happy preschool toddler smiling in colorful ball pit at WEE SPRITES Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEE SPRITES Preschool & Day Care | Learn, Play & Grow",
    description:
      "A joyful environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
    images: ["/schoolimages/hero-toddler-ball-pit.jpg"],
  },
};

export default function HomePage() {
  return <HomeView />;
}
