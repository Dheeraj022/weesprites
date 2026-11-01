export interface ProgramItem {
  id: string;
  name: string;
  ageRange: string; // client confirmation required
  description: string;
  image: string;
  accentBg: "lilac" | "yellow";
}

export interface LearningPillar {
  title: string;
  description: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  parentName: string;
  relation: string;
  childProgram: string;
  isDraftPendingApproval?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "admissions" | "programs" | "franchise" | "general";
  isDraftPendingApproval?: boolean;
}

export const heroContent = {
  eyebrow: "A BRIGHT BEGINNING FOR A BRIGHTER TOMORROW",
  headlineFirst: "Happy Learners",
  headlineSecond: "Brighter Futures",
  supportingText:
    "At WEE SPRITES, we create a safe, caring and joyful environment where children learn, play and grow with confidence.",
  primaryCta: "Enquire for Admissions",
  secondaryCta: "Explore Franchise Opportunities",
  heroImage: "/images/hero-child.jpg",
  heroAlt: "Happy preschool girl in lilac outfit at WEE SPRITES",
};

export interface HeroSlide {
  id: string;
  tabLabel: string;
  eyebrow: string;
  headlineFirst: string;
  headlineSecond: string;
  supportingText: string;
  primaryCta: {
    label: string;
    action: "admissions" | "franchise";
    variant: "primary" | "yellow";
  };
  secondaryCta: {
    label: string;
    action: "admissions" | "franchise";
    variant: "primary" | "yellow";
  };
  heroImage: string;
  heroAlt: string;
  variant: "hero" | "blob2";
  badge: {
    items: string[];
    icon?: "Heart" | "Smile";
  };
}

export const heroSlides: HeroSlide[] = [
  {
    id: "admissions",
    tabLabel: "For Parents & Admissions",
    eyebrow: "A BRIGHT BEGINNING FOR A BRIGHTER TOMORROW",
    headlineFirst: "Happy Learners",
    headlineSecond: "Brighter Futures",
    supportingText:
      "At WEE SPRITES, we create a safe, caring and joyful environment where children learn, play and grow with confidence.",
    primaryCta: {
      label: "Enquire for Admissions",
      action: "admissions",
      variant: "primary",
    },
    secondaryCta: {
      label: "Explore Franchise Opportunities",
      action: "franchise",
      variant: "yellow",
    },
    heroImage: "/images/hero-child.jpg",
    heroAlt: "Happy preschool girl in lilac outfit at WEE SPRITES",
    variant: "hero",
    badge: {
      items: ["Play", "Learn", "Grow"],
      icon: "Heart",
    },
  },
  {
    id: "franchise",
    tabLabel: "Franchise Opportunity",
    eyebrow: "PRIMARY BUSINESS OPPORTUNITY • GROW WITH WEE SPRITES",
    headlineFirst: "Own a Preschool",
    headlineSecond: "Shape the Future",
    supportingText:
      "Partner with WEE SPRITES to build a highly rewarding, profitable early education center. Proven Montessori curriculum, 360° operational setup, complete teacher training, and rapid return on investment.",
    primaryCta: {
      label: "Explore Franchise Opportunities",
      action: "franchise",
      variant: "yellow",
    },
    secondaryCta: {
      label: "Enquire for Admissions",
      action: "admissions",
      variant: "primary",
    },
    heroImage: "/images/hero-franchise.jpg",
    heroAlt: "Successful preschool leadership and happy child at WEE SPRITES",
    variant: "blob2",
    badge: {
      items: ["High ROI", "360° Setup", "Full Support"],
    },
  },
];

export const trustPoints = [
  {
    title: "Child-Centric Approach",
    description: "Every learning journey is tailored to respect individual curiosity and pace.",
    icon: "Heart",
  },
  {
    title: "Safe & Caring Environment",
    description: "Secure, hygienic, and comforting spaces where your child feels right at home.",
    icon: "ShieldCheck",
  },
  {
    title: "Play-Based Learning",
    description: "Joyful exploration sparking creativity, critical thinking, and motor skills.",
    icon: "Smile",
  },
  {
    title: "Experienced Educators",
    description: "Warm, compassionate mentors dedicated to early childhood nurture.",
    icon: "GraduationCap",
  },
];

export const aboutContent = {
  eyebrow: "ABOUT WEE SPRITES",
  heading: "A Nurturing Space for Every Child",
  body: "We believe every child is unique and full of potential. Our play-based approach encourages curiosity, creativity and confidence in a caring environment.",
  buttonLabel: "Know More About Us",
  image: "/images/about-child.jpg",
  imageAlt: "Children engaging in cheerful play at WEE SPRITES Preschool",
};

export const programsContent: {
  heading: string;
  supportingText: string;
  programs: ProgramItem[];
} = {
  heading: "Programs for Every Stage of Growth",
  supportingText:
    "Age-appropriate learning experiences help children build confidence, curiosity and a strong foundation for the future.",
  programs: [
    {
      id: "play-group",
      name: "Play Group",
      ageRange: "1.5 – 2.5 Years (To be confirmed by school)",
      description: "Gentle socialization, sensory play, and motor skill stimulation.",
      image: "/images/program-playgroup.jpg",
      accentBg: "lilac",
    },
    {
      id: "pre-nursery",
      name: "Pre-Nursery",
      ageRange: "2.5 – 3.5 Years (To be confirmed by school)",
      description: "Language foundations, interactive routines, and rhythm exploration.",
      image: "/images/program-prenursery.jpg",
      accentBg: "yellow",
    },
    {
      id: "nursery",
      name: "Nursery",
      ageRange: "3.5 – 4.5 Years (To be confirmed by school)",
      description: "Early phonics, number sense, tactile crafting, and creative curiosity.",
      image: "/images/program-nursery.jpg",
      accentBg: "lilac",
    },
    {
      id: "lkg",
      name: "LKG",
      ageRange: "4.5 – 5.5 Years (To be confirmed by school)",
      description: "Structured discovery, early literacy, cognitive games, and friendship building.",
      image: "/images/program-lkg.jpg",
      accentBg: "yellow",
    },
    {
      id: "ukg",
      name: "UKG",
      ageRange: "5.5 – 6.5 Years (To be confirmed by school)",
      description: "Preparatory foundation for formal schooling with confidence and leadership.",
      image: "/images/program-ukg.jpg",
      accentBg: "lilac",
    },
    {
      id: "evening-program",
      name: "Evening Program",
      ageRange: "2.0 – 10 Years (To be confirmed by school)",
      description: "Enrichment activities, creative arts, physical play, and guided after-school care.",
      image: "/images/program-evening.jpg",
      accentBg: "yellow",
    },
  ],
};

export const learningApproachContent = {
  heading: "Learning Through Play and Exploration",
  supportingText:
    "Play, discovery and meaningful activities help children develop confidence, creativity and early learning skills.",
  pillars: [
    {
      title: "Creative Activities",
      description: "Coloring, imaginative role-play, musical expression, and sensory arts that inspire self-expression.",
      image: "/images/learning-creative.jpg",
    },
    {
      title: "Hands-on Learning",
      description: "Montessori-inspired wooden toys, puzzle play, and tactile experiments that train fine motor skills.",
      image: "/images/learning-handson.jpg",
    },
    {
      title: "Social Development",
      description: "Collaborative circle time, group games, and sharing circles fostering kindness and emotional maturity.",
      image: "/images/learning-social.jpg",
    },
  ],
};

export const whyChooseContent = {
  heading: "The Right Start for a Brighter Tomorrow",
  supportingText:
    "At WEE SPRITES, every facet of the learning environment is intentionally designed to foster safety, belonging, and boundless wonder.",
  benefits: [
    "Safe and Stimulating Environment",
    "Caring Educators",
    "Play-Based Learning",
    "Fun-Filled Activities",
    "Focus on Overall Development",
    "Parent Engagement",
  ],
  image: "/images/why-choose-child.jpg",
  imageAlt: "Delighted child discovering new blocks at WEE SPRITES",
};

export const facilitiesContent = {
  heading: "A Safe, Happy and Engaging Environment",
  supportingText:
    "Designed from the ground up for curious little explorers, our campus balances child safety with vibrant stimulation.",
  facilities: [
    {
      id: "bright-classrooms",
      title: "Bright Classrooms",
      description: "Naturally lit, air-conditioned, and equipped with ergonomic child-safe furniture.",
      image: "/images/facility-classrooms.jpg",
    },
    {
      id: "indoor-play-area",
      title: "Indoor Play Area",
      description: "Soft flooring, safe climbing modules, ball pools, and active exploration zones.",
      image: "/images/facility-indoor-play.jpg",
    },
    {
      id: "learning-resources",
      title: "Learning Resources",
      description: "Curated library of picture books, STEM building blocks, and sensory learning kits.",
      image: "/images/facility-learning-resources.jpg",
    },
    {
      id: "safe-campus",
      title: "Safe Campus",
      description: "24/7 CCTV surveillance, biometric entry, child-proof fixtures, and sanitized spaces.",
      image: "/images/facility-safe-campus.jpg",
    },
  ],
};

export const teachersContent = {
  heading: "Guiding with Care and Experience",
  body: "Our educators and support team help create a warm, encouraging environment where every child can explore, learn and grow.",
  ctaLabel: "Meet Our Team",
  image: "/images/teachers-team.jpg",
  imageAlt: "Warm and dedicated preschool educators at WEE SPRITES",
};

export const galleryContent: {
  heading: string;
  supportingText: string;
  ctaLabel: string;
  items: GalleryItem[];
} = {
  heading: "Moments of Learning, Joy and Celebration",
  supportingText:
    "A glimpse into the daily celebrations, creative discoveries, and cheerful milestones at WEE SPRITES.",
  ctaLabel: "View Full Gallery",
  items: [
    {
      id: "g-1",
      title: "Gandhi Jayanti Celebrations",
      category: "Cultural Milestones",
      image: "/images/gallery/gallery-gandhi-jayanti.jpg",
      alt: "WEE SPRITES students celebrating Gandhi Jayanti in festive attire with handmade spectacle artwork and peace boards",
    },
    {
      id: "g-2",
      title: "Dussehra & Cultural Play",
      category: "Festivals",
      image: "/images/gallery/gallery-dussehra.jpg",
      alt: "Children dressed in royal traditional costumes celebrating Dussehra at WEE SPRITES Preschool",
    },
    {
      id: "g-3",
      title: "Crafts & Color Discovery",
      category: "Creative Arts",
      image: "/images/gallery/gallery-tiger-craft.jpg",
      alt: "Young learner proudly showcasing handmade paper tiger masks and autumn art projects",
    },
    {
      id: "g-4",
      title: "Annual Day 2025-26 Stage",
      category: "School Events",
      image: "/images/gallery/gallery-annual-day-stage.jpg",
      alt: "Preschoolers joyfully performing an energetic themed group dance on the Annual Day stage",
    },
    {
      id: "g-5",
      title: "Janmashtami Little Krishna",
      category: "Cultural Celebrations",
      image: "/images/gallery/gallery-krishna.jpg",
      alt: "Toddler joyfully dressed as Little Krishna with peacock feather flute at WEE SPRITES",
    },
    {
      id: "g-6",
      title: "Pink Day & Lotus Art",
      category: "Themed Learning",
      image: "/images/gallery/gallery-pink-lotus.jpg",
      alt: "Child framed inside a handmade giant pink lotus flower celebrating school color day",
    },
    {
      id: "g-7",
      title: "Festive Pottery & Clay Craft",
      category: "Hands-on Craft",
      image: "/images/gallery/gallery-pottery-craft.jpg",
      alt: "Proud preschool student displaying hand-decorated festival clay pots with cotton makhan",
    },
    {
      id: "g-8",
      title: "Toddler Sensory Exploration",
      category: "Early Years",
      image: "/images/gallery/gallery-toddler-play.jpg",
      alt: "Gentle sensory and motor play on clean, colorful mats at WEE SPRITES Day Care",
    },
    {
      id: "g-9",
      title: "Orange Day Autumn Projects",
      category: "Creative Arts",
      image: "/images/gallery/gallery-orange-craft.jpg",
      alt: "Smiling preschool girl in orange outfit with origami carrots and paper animal crafts",
    },
    {
      id: "g-10",
      title: "Ramayana Role-Play Dramatics",
      category: "Stage & Drama",
      image: "/images/gallery/gallery-ramayana-play.jpg",
      alt: "Young students acting out epic storytelling with handmade props and colorful costumes",
    },
  ],
};

export const testimonialsContent = {
  heading: "Happy Parents, Happier Children",
  supportingText:
    "Hear heartfelt reflections from families whose little ones flourish every day at WEE SPRITES.",
  testimonials: [
    {
      id: "t-1",
      quote:
        "WEE SPRITES has been a second home for our toddler. Her vocabulary blossomed within months, and she wakes up excited every morning to meet her friends and teachers!",
      parentName: "Priyanka & Rahul Sharma",
      relation: "Parents of Ananya",
      childProgram: "Nursery",
      isDraftPendingApproval: true,
    },
    {
      id: "t-2",
      quote:
        "The play-based methodology really works. The teachers pay attention to each child's individual needs and the warmth they show makes us completely stress-free.",
      parentName: "Dr. Vikram Sethi",
      relation: "Father of Kabir",
      childProgram: "Play Group",
      isDraftPendingApproval: true,
    },
    {
      id: "t-3",
      quote:
        "What impressed us most is the cleanliness and security. Plus the daily updates and photos keep us closely connected with our son's milestones.",
      parentName: "Meera & Amit Verma",
      relation: "Parents of Ayaan",
      childProgram: "LKG",
      isDraftPendingApproval: true,
    },
  ],
};

export const admissionsCtaContent = {
  heading: "Give Your Child a Bright Start",
  body: "Get in touch with WEE SPRITES to learn more about admissions and our programs.",
  buttonLabel: "Enquire for Admissions",
  image: "/images/admissions-child.jpg",
  imageAlt: "Excited young child ready for learning at WEE SPRITES",
};

export const franchiseContent = {
  heading: "Bring WEE SPRITES to Your City",
  body: "Be part of a preschool journey focused on joyful learning and meaningful early experiences.",
  buttonLabel: "Enquire for Franchise",
  image: "/images/franchise-child.jpg",
  imageAlt: "WEE SPRITES modern learning environment and franchise expansion model",
  highlights: [
    "Comprehensive Curriculum & Pedagogy Support",
    "Complete Setup & Interior Design Guidance",
    "Educator Training & Continuous Mentorship",
    "Marketing, Branding & Admission Campaigns",
  ],
};

export const faqContent = {
  heading: "Frequently Asked Questions",
  supportingText:
    "Find clear answers about admissions, our programs, safety measures, and franchise partnerships.",
  faqs: [
    {
      question: "Which programs are offered at WEE SPRITES?",
      answer:
        "We offer comprehensive age-aligned programs including Play Group (1.5–2.5 yrs), Pre-Nursery (2.5–3.5 yrs), Nursery (3.5–4.5 yrs), LKG (4.5–5.5 yrs), UKG (5.5–6.5 yrs), as well as a flexible Evening Care & Activity Program.",
      category: "programs",
      isDraftPendingApproval: true,
    },
    {
      question: "How can parents enquire about and register for admission?",
      answer:
        "You can click the 'Enquire for Admissions' button on this page to submit your details. Our admissions counselor will schedule a campus tour and walk you through the simple enrolment process.",
      category: "admissions",
      isDraftPendingApproval: true,
    },
    {
      question: "What is the teacher-to-child ratio?",
      answer:
        "We maintain low teacher-to-child ratios (typically 1:8 to 1:10 depending on age group) alongside dedicated support caregivers to guarantee personalized attention and safety.",
      category: "general",
      isDraftPendingApproval: true,
    },
    {
      question: "What is the process to start a WEE SPRITES franchise?",
      answer:
        "To explore a preschool franchise with WEE SPRITES, submit the Franchise Enquiry form. Our franchise development team will share the complete information docket, investment framework, and site selection guidelines.",
      category: "franchise",
      isDraftPendingApproval: true,
    },
  ],
};
