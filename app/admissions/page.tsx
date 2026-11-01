import type { Metadata } from "next";
import { AdmissionsView } from "@/components/admissions/admissions-view";

export const metadata: Metadata = {
  title: "Admissions 2026–2027 | Eligibility & Registration",
  description:
    "Admissions open for Academic Year 2026–2027 at WEE SPRITES Preschool. Review entry criteria, documentation checklist, simple 4-step registration process, and book a campus tour.",
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: "Admissions 2026–2027 | WEE SPRITES Preschool & Day Care",
    description:
      "Give your child a bright start. Review age requirements, transparent fees, campus walkthrough slots, and submit your enrolment enquiry online.",
    url: "https://weesprites.com/admissions",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/admissions-child.jpg",
        width: 1200,
        height: 630,
        alt: "Excited young child ready for playful learning at WEE SPRITES Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions 2026–2027 | WEE SPRITES Preschool",
    description:
      "Join the WEE SPRITES family. Enrolment criteria, application checklist, and schedule a personalized campus tour.",
    images: ["/images/admissions-child.jpg"],
  },
};

export default function AdmissionsPage() {
  return <AdmissionsView />;
}
