import type { Metadata } from "next";
import { FranchiseView } from "@/components/franchise/franchise-view";

export const metadata: Metadata = {
  title: "Preschool Franchise Opportunity | Partner with WEE SPRITES",
  description:
    "Partner with WEE SPRITES to build a highly rewarding, profitable early childhood center. 360° setup support, Montessori pedagogy, teacher recruitment, and fast return on investment.",
  alternates: {
    canonical: "/franchise",
  },
  openGraph: {
    title: "Preschool Franchise Opportunities | WEE SPRITES",
    description:
      "Proven business model with robust unit economics, dedicated regional mentorship, curriculum licensing, and rapid ROI in early childhood education.",
    url: "https://weesprites.com/franchise",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-franchise.jpg",
        width: 1200,
        height: 630,
        alt: "Successful preschool franchise leadership and smiling preschool child at WEE SPRITES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Franchise Opportunity | WEE SPRITES",
    description:
      "Build a world-class preschool in your city with complete setup guidance and pedagogical mentorship.",
    images: ["/images/hero-franchise.jpg"],
  },
};

export default function FranchisePage() {
  return <FranchiseView />;
}
