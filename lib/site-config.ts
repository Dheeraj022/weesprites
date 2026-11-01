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
  tagline: "A Bright Beginning for a Brighter Tomorrow",
  phone: "+91 98765 43210", // Marked as draft placeholder for client confirmation
  email: "admissions@weesprites.com", // Marked as draft placeholder for client confirmation
  address: {
    line1: "Plot No. 42, Sector 5",
    line2: "Green Park Avenue",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110016",
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
    { label: "Admissions", href: "/admissions" },
    { label: "Franchise Opportunity", href: "/franchise" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
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

