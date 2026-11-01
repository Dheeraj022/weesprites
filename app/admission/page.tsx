import type { Metadata } from "next";
import { AdmissionsView } from "@/components/admissions/admissions-view";

export const metadata: Metadata = {
  title: "Admissions & Enrolment Information",
  description:
    "Admissions guidelines and enrolment criteria for WEE SPRITES Preschool.",
  alternates: {
    canonical: "/admissions",
  },
};

export default function AdmissionPage() {
  return <AdmissionsView />;
}
