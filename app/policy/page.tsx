import type { Metadata } from "next";
import { PolicyView } from "@/components/policy/policy-view";

export const metadata: Metadata = {
  title: "School Policies & Terms of Enrolment",
  description:
    "Review official school policies, positive behaviour charter, child health & illness guidelines, pick-up security protocols, and fee schedules at WEE SPRITES Preschool.",
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    title: "School Policies & Terms of Enrolment | WEE SPRITES",
    description:
      "Operational guidelines, safety codes, positive child guidance charter, and transparent enrolment terms at WEE SPRITES Preschool & Day Care.",
    url: "https://weesprites.com/policy",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/why-choose-child.jpg",
        width: 1200,
        height: 630,
        alt: "Joyful, confident child exploring playful early education at WEE SPRITES Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "School Policies & Terms of Enrolment | WEE SPRITES",
    description:
      "Transparent governance, health regulations, safety protocols, and parent partnership guidelines.",
    images: ["/images/why-choose-child.jpg"],
  },
};

export default function PolicyPage() {
  return <PolicyView />;
}

