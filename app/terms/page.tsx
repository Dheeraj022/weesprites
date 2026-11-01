import type { Metadata } from "next";
import { PolicyView } from "@/components/policy/policy-view";

export const metadata: Metadata = {
  title: "School Terms & Conditions",
  description: "Official terms, enrolment guidelines, and policies for WEE SPRITES Preschool.",
  alternates: {
    canonical: "/policy",
  },
};

export default function TermsAliasPage() {
  return <PolicyView />;
}

