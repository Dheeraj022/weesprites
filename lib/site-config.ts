export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  descriptor: string;
  phone: string;
  email: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
  navigation: NavItem[];
  cta: {
    admissions: {
      label: string;
      href: string;
    };
    franchise: {
      label: string;
      href: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "WEE SPRITES",
  descriptor: "Preschool & Day Care",
  tagline: "We care, we share, for the future, we prepare",
  phone: "+91 95409 27000",
  email: "weesprites.vaspuri@gmail.com",
  address: {
    line1: "A-98 Shankar Garden",
    line2: "Vikaspuri",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110018",
    country: "India",
  },
  socials: {
    instagram: "https://instagram.com/weespritespreschool",
    facebook: "https://facebook.com/weespritespreschool",
    youtube: "https://youtube.com/@weespritespreschool",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Admission", href: "/admissions" },
    { label: "Franchise", href: "/franchise" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    admissions: {
      label: "Enquire for Admissions",
      href: "/admissions",
    },
    franchise: {
      label: "Explore Franchise Opportunities",
      href: "/franchise",
    },
  },
};

