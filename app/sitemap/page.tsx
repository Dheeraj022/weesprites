import type { Metadata } from "next";
import { SitemapView } from "@/components/sitemap/sitemap-view";

export const metadata: Metadata = {
  title: "HTML Sitemap & Navigation Directory",
  description:
    "Complete directory of all pages, academic curriculum tiers, admissions checklists, franchise information, and legal policies on the WEE SPRITES Preschool official website.",
  alternates: {
    canonical: "/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap | WEE SPRITES Preschool & Day Care",
    description:
      "Easily navigate across all pages, programs, and parent resources on WEE SPRITES Preschool.",
    url: "https://weesprites.com/sitemap",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-child.jpg",
        width: 1200,
        height: 630,
        alt: "WEE SPRITES Preschool website directory and sitemap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Sitemap | WEE SPRITES Preschool",
    description:
      "Complete site index and navigation guide for WEE SPRITES Preschool.",
    images: ["/images/hero-child.jpg"],
  },
};

export default function SitemapPage() {
  return <SitemapView />;
}

