import type { Metadata } from "next";
import { PrivacyView } from "@/components/privacy/privacy-view";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Official privacy policy for WEE SPRITES Preschool & Day Care.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyAliasPage() {
  return <PrivacyView />;
}

