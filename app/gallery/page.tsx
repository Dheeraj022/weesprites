import type { Metadata } from "next";
import { GalleryView } from "@/components/gallery/gallery-view";

export const metadata: Metadata = {
  title: "Photo Gallery & Events | Life at WEE SPRITES",
  description:
    "Explore our 24-photo interactive gallery capturing Annual Day stage performances, Gandhi Jayanti, Dussehra, clay art, sports day, and daily classroom discoveries at WEE SPRITES Preschool.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Life at WEE SPRITES | Photo Gallery & Celebrations",
    description:
      "A vibrant showcase of student laughter, colorful artwork, festive enactments, and cheerful milestones at WEE SPRITES Preschool & Day Care.",
    url: "https://weesprites.com/gallery",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/gallery/gallery-annual-day-stage.jpg",
        width: 1200,
        height: 630,
        alt: "Preschool students performing festive group dance on Annual Day stage at WEE SPRITES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery & Events | Life at WEE SPRITES",
    description:
      "Explore unforgettable childhood milestones, cultural events, and sensory learning at WEE SPRITES.",
    images: ["/images/gallery/gallery-annual-day-stage.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
