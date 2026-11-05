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
  objectPosition?: string;
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
  eyebrow: "WE CARE, WE SHARE, FOR THE FUTURE, WE PREPARE",
  headlineFirst: "We Care, We Share",
  headlineSecond: "For the Future We Prepare",
  supportingText:
    "At WEE SPRITES, we create a safe, caring and joyful environment where children learn, play and grow with confidence.",
  primaryCta: "Enquire for Admissions",
  secondaryCta: "Explore Franchise Opportunities",
  heroImage: "/schoolimages/hero-toddler-ball-pit.jpg",
  heroAlt: "Happy preschool toddler laughing with joy in ball pit at WEE SPRITES",
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
    eyebrow: "WE CARE, WE SHARE, FOR THE FUTURE, WE PREPARE",
    headlineFirst: "We Care, We Share",
    headlineSecond: "For the Future We Prepare",
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
    heroImage: "/schoolimages/hero-toddler-ball-pit.jpg",
    heroAlt: "Happy preschool toddler laughing with joy in colorful ball pit at WEE SPRITES",
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
      "Partner with WEE SPRITES to build a highly rewarding, profitable early education center. Proven child-centric curriculum, 360° operational setup, complete educator training, and rapid return on investment.",
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
    heroImage: "/schoolimages/weesprites-boat-tagline-boys.jpg",
    heroAlt: "Two cheerful students in playful boat cutout in front of WEE SPRITES We Care We Share banner",
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
  image: "/schoolimages/toddler-girl-backpack.jpg",
  imageAlt: "Happy preschool learner exploring the play zone at WEE SPRITES",
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
      id: "toddler-group",
      name: "Toddler Group",
      ageRange: "18 Months+",
      description: "Gentle socialization, sensory play, and motor skill stimulation.",
      image: "/schoolimages/two-sisters-ball-pool.jpg",
      accentBg: "lilac",
    },
    {
      id: "pre-nursery",
      name: "Pre-Nursery",
      ageRange: "2+ Years",
      description: "Language foundations, interactive routines, and rhythm exploration.",
      image: "/schoolimages/girl-heart-craft.jpg",
      accentBg: "yellow",
    },
    {
      id: "nursery",
      name: "Nursery",
      ageRange: "3–4 Years",
      description: "Early phonics, number sense, tactile crafting, and creative curiosity.",
      image: "/schoolimages/boy-phonics-aeroplane-craft.jpg",
      accentBg: "lilac",
    },
    {
      id: "lkg",
      name: "LKG",
      ageRange: "4–5 Years",
      description: "Structured discovery, early literacy, cognitive games, and friendship building.",
      image: "/schoolimages/toddler-lilac-owl-craft.jpg",
      accentBg: "yellow",
    },
    {
      id: "ukg",
      name: "UKG",
      ageRange: "5–6 Years",
      description: "Preparatory foundation for formal schooling with confidence and leadership.",
      image: "/schoolimages/curly-toddler-puppet-craft.jpg",
      accentBg: "lilac",
    },
    {
      id: "evening-program",
      name: "Evening Program",
      ageRange: "2.5–12 Years",
      description: "Enrichment activities, creative arts, physical play, and guided after-school care.",
      image: "/schoolimages/classroom-roundtable-crafts.jpg",
      accentBg: "yellow",
    },
    {
      id: "day-care",
      name: "Day Care",
      ageRange: "12 Months+",
      description: "Safe, caring and joyful daylong sanctuary with nutritious meals and guided play.",
      image: "/schoolimages/daycare-baby-ballpool.jpg",
      accentBg: "lilac",
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
      image: "/schoolimages/playground-lawn-slide-activity.jpg",
    },
    {
      title: "Hands-on Learning",
      description: "Tactile wooden toys, puzzle play, and sensory experiments that train fine motor skills.",
      image: "/schoolimages/hands-on-origami-craft.jpg",
    },
    {
      title: "Social Development",
      description: "Collaborative circle time, group games, and sharing circles fostering kindness and emotional maturity.",
      image: "/schoolimages/boy-slide-play.jpg",
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
  image: "/schoolimages/commando-student-puppet.jpg",
  imageAlt: "Young preschooler smiling in commando uniform exploring role-play learning at WEE SPRITES",
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
      image: "/schoolimages/classroom-activity-table.jpg",
      objectPosition: "object-center",
    },
    {
      id: "indoor-play-area",
      title: "Indoor Play Area",
      description: "Soft flooring, safe climbing modules, ball pools, and active exploration zones.",
      image: "/schoolimages/toddler-swing-car.jpg",
      objectPosition: "object-top",
    },
    {
      id: "learning-resources",
      title: "Learning Resources",
      description: "Curated library of picture books, STEM building blocks, and sensory learning kits.",
      image: "/schoolimages/pattern-writing-workbook.jpg",
      objectPosition: "object-top",
    },
    {
      id: "safe-campus",
      title: "Safe Campus",
      description: "24/7 CCTV surveillance, biometric entry, child-proof fixtures, and sanitized spaces.",
      image: "/schoolimages/outdoor-play-zone.jpg",
      objectPosition: "object-center",
    },
  ],
};

export const teachersContent = {
  heading: "Guiding with Care and Experience",
  body: "Our educators and support team help create a warm, encouraging environment where every child can explore, learn and grow.",
  ctaLabel: "Meet Our Team",
  image: "/schoolimages/teachers-team-sarees-wide.jpg",
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
      title: "Baisakhi Festive Celebrations",
      category: "Cultural Milestones",
      image: "/schoolimages/baisakhi-celebration.jpg",
      alt: "WEE SPRITES students celebrating Baisakhi with festive props and cultural photobooth",
    },
    {
      id: "g-2",
      title: "Gandhi Jayanti Celebrations",
      category: "Cultural Milestones",
      image: "/images/gallery/gallery-gandhi-jayanti.jpg",
      alt: "WEE SPRITES students celebrating Gandhi Jayanti in festive attire with handmade spectacle artwork and peace boards",
    },
    {
      id: "g-3",
      title: "Janmashtami Radha & Krishna",
      category: "Festivals",
      image: "/schoolimages/janmashtami-radha-krishna.jpg",
      alt: "Children lovingly dressed as Radha and Krishna with flute and peacock feather mukut",
    },
    {
      id: "g-4",
      title: "Dussehra & Cultural Play",
      category: "Festivals",
      image: "/images/gallery/gallery-dussehra.jpg",
      alt: "Children dressed in royal traditional costumes celebrating Dussehra at WEE SPRITES Preschool",
    },
    {
      id: "g-5",
      title: "Sports Day Prize Distribution",
      category: "School Events",
      image: "/schoolimages/sports-day-wee-sprites-uniform.jpg",
      alt: "Student in official WEE SPRITES lilac uniform receiving prize on Sports Day from the principal",
    },
    {
      id: "g-6",
      title: "Crafts & Color Discovery",
      category: "Creative Arts",
      image: "/images/gallery/gallery-tiger-craft.jpg",
      alt: "Young learner proudly showcasing handmade paper tiger masks and autumn art projects",
    },
    {
      id: "g-7",
      title: "Community Helpers Day",
      category: "Creative Arts",
      image: "/schoolimages/community-helpers-firefighter-chef.jpg",
      alt: "Preschoolers dressed as Firefighter and Executive Chef with educator in front of Community Helpers mural",
    },
    {
      id: "g-8",
      title: "Annual Day 2025-26 Stage",
      category: "School Events",
      image: "/images/gallery/gallery-annual-day-stage.jpg",
      alt: "Preschoolers joyfully performing an energetic themed group dance on the Annual Day stage",
    },
    {
      id: "g-9",
      title: "Pink Day & Lotus Art",
      category: "Themed Learning",
      image: "/images/gallery/gallery-pink-lotus.jpg",
      alt: "Child framed inside a handmade giant pink lotus flower celebrating school color day",
    },
    {
      id: "g-10",
      title: "Pattern Writing Workbook Discovery",
      category: "Hands-on Learning",
      image: "/schoolimages/pattern-writing-workbook.jpg",
      alt: "Proud preschool student displaying official WEE SPRITES Pattern Writing curriculum book",
    },
    {
      id: "g-11",
      title: "Festive Pottery & Clay Craft",
      category: "Hands-on Craft",
      image: "/images/gallery/gallery-pottery-craft.jpg",
      alt: "Proud preschool student displaying hand-decorated festival clay pots with cotton makhan",
    },
    {
      id: "g-12",
      title: "Outdoor Turf & Play Zone",
      category: "School Life",
      image: "/schoolimages/outdoor-play-zone.jpg",
      alt: "Gentle outdoor turf and motor play with slide and rockers in safe playground",
    },
    {
      id: "g-13",
      title: "Classroom Activity Table & Art",
      category: "Creative Arts",
      image: "/schoolimages/classroom-activity-table.jpg",
      alt: "Students happily drawing and coloring around the red activity table",
    },
    {
      id: "g-14",
      title: "Orange Day Autumn Projects",
      category: "Creative Arts",
      image: "/images/gallery/gallery-orange-craft.jpg",
      alt: "Smiling preschool girl in orange outfit with origami carrots and paper animal crafts",
    },
    {
      id: "g-15",
      title: "Ramayana Role-Play Dramatics",
      category: "Stage & Drama",
      image: "/images/gallery/gallery-ramayana-play.jpg",
      alt: "Young students acting out epic storytelling with handmade props and colorful costumes",
    },
    {
      id: "g-16",
      title: "Christmas Reindeer Photobooth",
      category: "Cultural Celebrations",
      image: "/schoolimages/christmas-reindeer-photobooth.jpg",
      alt: "Toddler in festive Santa tracksuit inside WEE SPRITES handcrafted Christmas photobooth",
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
      childProgram: "Toddler Group",
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
  image: "/schoolimages/little-doctor-police-puppet.jpg",
  imageAlt: "Joyful young learner at WEE SPRITES Preschool",
};

export const franchiseContent = {
  heading: "Bring WEE SPRITES to Your City",
  body: "Be part of a preschool journey focused on joyful learning and meaningful early experiences.",
  buttonLabel: "Enquire for Franchise",
  image: "/schoolimages/weesprites-students-backdrop.jpg",
  imageAlt: "WEE SPRITES modern learning environment and franchise expansion model",
  highlights: [
    "Comprehensive Early Years Curriculum Support",
    "Complete Setup & Interior Design Guidance",
    "Educator Training & Continuous Mentorship",
    "Strategic Marketing Advisory & Brand Assets",
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
        "We offer comprehensive age-aligned programs including Toddler Group (18 Months+), Pre-Nursery (2+ Years), Nursery (3–4 Years), LKG (4–5 Years), UKG (5–6 Years), Evening Program (2.5–12 Years), and Day Care (12 Months+).",
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
        "We maintain an approved teacher-to-child ratio of 1:10 (4 Teachers for 40 Children) alongside dedicated support caregivers to guarantee personalized attention and safety.",
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
