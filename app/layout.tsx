import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEE SPRITES Preschool | Learn, Play & Grow",
  description:
    "Discover WEE SPRITES Preschool, a joyful environment where children learn, play and grow. Explore programs, admissions and franchise opportunities.",
  keywords: [
    "WEE SPRITES",
    "Preschool",
    "Day Care",
    "Play Group",
    "Nursery",
    "Kindergarten",
    "Preschool Franchise",
    "Early Childhood Education",
  ],
  authors: [{ name: "WEE SPRITES Preschool" }],
  openGraph: {
    title: "WEE SPRITES Preschool | Learn, Play & Grow",
    description:
      "A joyful environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
    url: "https://weesprites.com",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEE SPRITES Preschool | Learn, Play & Grow",
    description:
      "A joyful environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
  },
};

export const viewport: Viewport = {
  themeColor: "#6127B8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-text-body font-sans selection:bg-brand-lilac selection:text-brand-violet-dark antialiased overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
