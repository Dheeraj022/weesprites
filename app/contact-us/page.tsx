import type { Metadata } from "next";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact Us & Campus Directions",
  description:
    "Get in touch with WEE SPRITES Preschool & Day Care in New Delhi. Direct phone helpline, admissions email, and visiting hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactUsPage() {
  return <ContactView />;
}
