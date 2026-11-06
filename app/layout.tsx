import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://weesprites.com"),
  title: {
    default: "WEE SPRITES Preschool | We Care, We Share",
    template: "%s | WEE SPRITES Preschool",
  },
  description:
    "Discover WEE SPRITES Preschool & Day Care. We care, we share, for the future, we prepare. Explore programs, admissions and franchise opportunities.",
  keywords: [
    "WEE SPRITES",
    "Preschool",
    "Day Care",
    "Toddler Group",
    "Pre-Nursery",
    "Nursery",
    "Kindergarten",
    "Preschool Franchise",
    "Early Childhood Education",
  ],
  authors: [{ name: "WEE SPRITES Preschool" }],
  openGraph: {
    title: "WEE SPRITES Preschool | We Care, We Share",
    description:
      "We care, we share, for the future, we prepare. A joyful environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
    url: "https://weesprites.com",
    siteName: "WEE SPRITES Preschool",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEE SPRITES Preschool | We Care, We Share",
    description:
      "We care, we share, for the future, we prepare. A joyful environment where children learn, play and grow with confidence. Explore programs, admissions and franchise opportunities.",
  },
  icons: {
    icon: [
      { url: "/logo/weespriteslogo.png", sizes: "any" },
    ],
    apple: "/logo/weespriteslogo.png",
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
