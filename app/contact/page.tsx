import type { Metadata } from "next";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact Us & Campus Directions | Visit WEE SPRITES",
  description:
    "Get in touch with WEE SPRITES Preschool & Day Care in New Delhi. Direct phone helpline, admissions email, visiting hours, public transit access, and Google Maps directions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us & Campus Directions | WEE SPRITES Preschool",
    description:
      "Plan your visit to our safe, bright campus. Speak with our admissions counselors and schedule a walkthrough.",
    url: "https://weesprites.com/contact",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/facility-classrooms.jpg",
        width: 1200,
        height: 630,
        alt: "Bright modern Montessori classroom at WEE SPRITES Preschool New Delhi campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Campus Directions | WEE SPRITES",
    description:
      "Reach out to our admissions desk or schedule a visit to our New Delhi campus.",
    images: ["/images/facility-classrooms.jpg"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
