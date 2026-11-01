import type { Metadata } from "next";
import { PrivacyView } from "@/components/privacy/privacy-view";

export const metadata: Metadata = {
  title: "Privacy Policy | Student & Parent Data Protection",
  description:
    "Official privacy policy for WEE SPRITES Preschool & Day Care. Learn how we safeguard student records, maintain 24/7 CCTV security, respect media consent, and protect family confidentiality.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | WEE SPRITES Preschool & Day Care",
    description:
      "Our comprehensive commitment to child safety, CCTV security protocols, and parent data privacy at WEE SPRITES Preschool.",
    url: "https://weesprites.com/privacy",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/facility-safe-campus.jpg",
        width: 1200,
        height: 630,
        alt: "Safe, monitored, child-friendly campus environment at WEE SPRITES Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | WEE SPRITES Preschool",
    description:
      "Read our strict data protection protocols, CCTV security, and parent privacy guidelines.",
    images: ["/images/facility-safe-campus.jpg"],
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}

