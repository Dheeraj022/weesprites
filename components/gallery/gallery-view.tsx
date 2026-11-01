"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  X,
  ZoomIn,
  ChevronLeft,
  Calendar,
  Heart,
  Palette,
  Award,
  BookOpen,
  Smile,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryModal } from "@/components/ui/enquiry-modal";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { FloatingBlob } from "@/components/ui/floating-blob";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Festivals" | "Creative Arts" | "Stage & Events" | "Classroom" | "Toddler & Play";
  image: string;
  alt: string;
  description: string;
}

export function GalleryView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryTab, setEnquiryTab] = useState<"admissions" | "franchise">("admissions");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const handleOpenEnquiry = (tab: "admissions" | "franchise") => {
    setEnquiryTab(tab);
    setModalOpen(true);
  };

  const galleryPhotos: GalleryPhoto[] = [
    {
      id: "p-1",
      title: "Gandhi Jayanti Celebrations",
      category: "Festivals",
      image: "/images/gallery/gallery-gandhi-jayanti.jpg",
      alt: "Preschoolers celebrating Gandhi Jayanti in festive attire with handmade spectacle artwork",
      description: "Students learn universal values of truth, peace, and harmony through celebratory dress-up and artwork.",
    },
    {
      id: "p-2",
      title: "Dussehra & Cultural Enactment",
      category: "Festivals",
      image: "/images/gallery/gallery-dussehra.jpg",
      alt: "Children dressed in royal traditional costumes celebrating Dussehra",
      description: "Immersive traditional enactments bringing Indian cultural heritage and storytelling to life.",
    },
    {
      id: "p-3",
      title: "Tiger Mask & Animal Craft Day",
      category: "Creative Arts",
      image: "/images/gallery/gallery-tiger-craft.jpg",
      alt: "Young learner proudly showcasing handmade paper tiger masks",
      description: "Tactile paper-folding, color blending, and wildlife curiosity training fine motor coordination.",
    },
    {
      id: "p-4",
      title: "Annual Day 2025–26 Onstage Dance",
      category: "Stage & Events",
      image: "/images/gallery/gallery-annual-day-stage.jpg",
      alt: "Preschoolers performing energetic themed group dance on Annual Day stage",
      description: "Building unshakeable stage poise, rhythm, and collaborative teamwork before a cheering audience.",
    },
    {
      id: "p-5",
      title: "Janmashtami Little Krishna",
      category: "Festivals",
      image: "/images/gallery/gallery-krishna.jpg",
      alt: "Toddler dressed as Little Krishna with peacock feather flute",
      description: "Joyful festive traditions celebrated with traditional attire, folk melodies, and sweet makhan delicacies.",
    },
    {
      id: "p-6",
      title: "Pink Day & Lotus Flower Art",
      category: "Creative Arts",
      image: "/images/gallery/gallery-pink-lotus.jpg",
      alt: "Child framed inside a handmade giant pink lotus flower celebrating school color day",
      description: "Color recognition immersion where learners explore chromatic spectrums through vibrant floral crafts.",
    },
    {
      id: "p-7",
      title: "Festive Pottery & Clay Modeling",
      category: "Creative Arts",
      image: "/images/gallery/gallery-pottery-craft.jpg",
      alt: "Student displaying hand-decorated festival clay pots with cotton makhan",
      description: "Hands-on clay sculpting and tactile sensory engagement developing pincer grasp and 3D perception.",
    },
    {
      id: "p-8",
      title: "Toddler Sensory Exploration",
      category: "Toddler & Play",
      image: "/images/gallery/gallery-toddler-play.jpg",
      alt: "Gentle sensory and motor play on clean, colorful mats at Day Care",
      description: "Safe climbing modules, tactile textures, and soft-landing mats for confident early locomotion.",
    },
    {
      id: "p-9",
      title: "Orange Day Autumn Projects",
      category: "Creative Arts",
      image: "/images/gallery/gallery-orange-craft.jpg",
      alt: "Smiling preschool girl with origami carrots and paper animal crafts",
      description: "Interactive themed craft days integrating botanical awareness, harvest celebration, and scissor play.",
    },
    {
      id: "p-10",
      title: "Ramayana Role-Play Dramatics",
      category: "Stage & Events",
      image: "/images/gallery/gallery-ramayana-play.jpg",
      alt: "Young students acting out epic storytelling with handmade props",
      description: "Dramatic play and character role-play fostering verbal expression and empathy.",
    },
    {
      id: "p-11",
      title: "Festive Group Ensemble",
      category: "Festivals",
      image: "/images/gallery/gallery-1.jpg",
      alt: "Children in cultural festive attire participating in celebrations",
      description: "A celebration of diversity and shared joy across all cultural holidays.",
    },
    {
      id: "p-12",
      title: "Folk Dance & Rhythm Circle",
      category: "Stage & Events",
      image: "/images/gallery/gallery-2.jpg",
      alt: "Preschoolers practicing traditional group dance routines",
      description: "Developing gross motor agility, physical stamina, and spatial awareness through music.",
    },
    {
      id: "p-13",
      title: "Easel Painting & Color Blending",
      category: "Creative Arts",
      image: "/images/gallery/gallery-3.jpg",
      alt: "Child painting vibrant strokes on an art easel",
      description: "Encouraging spontaneous self-expression with non-toxic washable acrylics and wide brushes.",
    },
    {
      id: "p-14",
      title: "Origami & Paper Sculpting",
      category: "Creative Arts",
      image: "/images/gallery/gallery-4.jpg",
      alt: "Learners cutting, pasting and folding paper craft objects",
      description: "Fine motor precision, bilateral hand coordination, and geometric appreciation through craft.",
    },
    {
      id: "p-15",
      title: "Theatrical Skit & Rhyme enactment",
      category: "Stage & Events",
      image: "/images/gallery/gallery-5.jpg",
      alt: "Stage performance with vibrant backdrop and costumed children",
      description: "Costumed stage productions where every child has an opportunity to shine with dialogue and dance.",
    },
    {
      id: "p-16",
      title: "Graduation Day Felicitations",
      category: "Stage & Events",
      image: "/images/gallery/gallery-6.jpg",
      alt: "Graduation ceremony celebrating primary school readiness",
      description: "Honoring our UKG graduates as they transition confidently to premier formal primary schools.",
    },
    {
      id: "p-17",
      title: "Award & Achievement Day",
      category: "Stage & Events",
      image: "/images/gallery/gallery-7.jpg",
      alt: "Students holding achievement certificates on stage",
      description: "Celebrating kindness, participation, and individual milestones with pride.",
    },
    {
      id: "p-18",
      title: "Confidence in Public Speaking",
      category: "Stage & Events",
      image: "/images/gallery/gallery-8.jpg",
      alt: "Young learner holding a stage microphone with a bright smile",
      description: "Regular show-and-tell assemblies banish stage fright from an early age.",
    },
    {
      id: "p-19",
      title: "Montessori Wooden Blocks & Puzzles",
      category: "Classroom",
      image: "/images/gallery/gallery-9.jpg",
      alt: "Child building intricate towers with Montessori wooden blocks",
      description: "Autonomous spatial problem-solving using tactile, eco-friendly wooden materials.",
    },
    {
      id: "p-20",
      title: "Phonics Sound Basket Discovery",
      category: "Classroom",
      image: "/images/gallery/gallery-10.jpg",
      alt: "Children matching letter flashcards with tangible objects",
      description: "Multi-sensory Jolly Phonics associations connecting phoneme sounds to everyday items.",
    },
    {
      id: "p-21",
      title: "Interactive Storytelling Circle",
      category: "Classroom",
      image: "/images/gallery/gallery-11.jpg",
      alt: "Teacher reading an illustrated picture book in circle time",
      description: "Fostering language comprehension, listening stamina, and imaginative visualization.",
    },
    {
      id: "p-22",
      title: "Math Manipulatives & Bead Counting",
      category: "Classroom",
      image: "/images/gallery/gallery-12.jpg",
      alt: "Learner arranging colorful counting beads on number pegs",
      description: "Hands-on quantification, one-to-one correspondence, and pattern sequencing.",
    },
    {
      id: "p-23",
      title: "Indoor Soft Play Ball Pool",
      category: "Toddler & Play",
      image: "/images/gallery/gallery-14.jpg",
      alt: "Toddlers diving and laughing inside a sanitized ball pool",
      description: "Safe, cushioned physical stimulation that inspires laughter and carefree motor movement.",
    },
    {
      id: "p-24",
      title: "Outdoor Lawn Obstacle Fun",
      category: "Toddler & Play",
      image: "/images/gallery/gallery-15.jpg",
      alt: "Children running and balancing on outdoor obstacle ramp modules",
      description: "Sunlit gross motor games that build strong posture, stamina, and cardiovascular fitness.",
    },
  ];

  const currentIndex = activePhoto
    ? galleryPhotos.findIndex((p) => p.id === activePhoto.id)
    : 0;

  const showPrev = () => {
    const newIdx = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    setActivePhoto(galleryPhotos[newIdx]);
  };

  const showNext = () => {
    const newIdx = (currentIndex + 1) % galleryPhotos.length;
    setActivePhoto(galleryPhotos[newIdx]);
  };

  useEffect(() => {
    if (!activePhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePhoto(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, currentIndex]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-body selection:bg-brand-lilac selection:text-brand-violet-dark overflow-x-clip">
      {/* 1. Sticky Navigation Header */}
      <SiteHeader onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 overflow-x-clip">
        {/* 2. Page Hero Banner */}
        <section className="relative pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-brand-violet-soft/50 via-brand-cream/30 to-white overflow-hidden">
          <FloatingBlob color="lilac" size="xl" className="-top-16 -left-20 opacity-70" speed="slow" />
          <FloatingBlob color="yellow" size="lg" className="top-10 -right-20 opacity-60" speed="normal" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-text-muted mb-6">
              <Link href="/" className="hover:text-brand-violet transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted/60" />
              <span className="text-brand-violet font-extrabold">Events & Gallery</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <Reveal delay={0.05}>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-violet text-brand-yellow text-xs font-black tracking-wide uppercase shadow-sm">
                  <span>LIFE AT WEE SPRITES • PHOTO SHOWCASE</span>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight tracking-tight">
                  Moments of Learning,{" "}
                  <span className="text-brand-violet block sm:inline">Joy & Celebration</span>
                </h1>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                  A glimpse into the daily celebrations, creative discoveries, festive milestones, and cheerful stage performances that make childhood at WEE SPRITES so unforgettable.
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <CtaButton
                    variant="yellow"
                    size="lg"
                    onClick={() => handleOpenEnquiry("admissions")}
                  >
                    Schedule a Campus Visit
                  </CtaButton>
                  <CtaButton
                    variant="outline"
                    size="lg"
                    onClick={() => handleOpenEnquiry("franchise")}
                  >
                    Franchise Opportunities
                  </CtaButton>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Photo Grid (Responsive Masonry Style) */}
        <section className="py-12 md:py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
              {galleryPhotos.map((photo, idx) => (
                <Reveal key={photo.id} delay={0.05 + (idx % 8) * 0.04}>
                  <div
                    onClick={() => setActivePhoto(photo)}
                    className="group relative aspect-square rounded-[24px] sm:rounded-[30px] overflow-hidden bg-brand-cream/60 border border-border-soft shadow-card hover:shadow-floating hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-violet-dark/90 via-brand-violet-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white text-left">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-brand-yellow px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                          {photo.category}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                        {photo.title}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Event Celebrations Narrative Spotlights */}
        <section className="py-16 md:py-24 bg-brand-violet-soft/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal delay={0.05}>
                <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-brand-violet">
                  CELEBRATION CULTURE
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mt-2">
                  Why We Celebrate Every Milestone
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-body">
                  Festivals, color days, and stage performances at WEE SPRITES are thoughtfully curated learning opportunities.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: <Palette className="w-6 h-6 text-brand-yellow-dark" />,
                  title: "Color & Theme Weeks",
                  desc: "Pink Day, Orange Day, and Autumn Harvest weeks turn basic chromatic identification into tactile multi-sensory sensory art festivals.",
                },
                {
                  icon: <Heart className="w-6 h-6 text-rose-500" />,
                  title: "Festivals of Harmony",
                  desc: "Dussehra, Gandhi Jayanti, Janmashtami, and Diwali teach children deep values of unity, friendship, honesty, and mutual respect.",
                },
                {
                  icon: <Award className="w-6 h-6 text-brand-violet" />,
                  title: "Annual Day & Theatrical Arts",
                  desc: "Every single child is spotlighted on stage in safe, encouraging environments that banish fear and nurture charismatic leadership.",
                },
              ].map((card, idx) => (
                <Reveal key={card.title} delay={0.08 + idx * 0.08}>
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border-soft shadow-card hover:shadow-floating hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center mb-4 border border-border-soft">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-black text-text-primary mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed flex-1">
                      {card.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Call to Action Banner */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-brand-violet via-brand-violet-dark to-brand-violet text-white relative overflow-hidden">
          <FloatingBlob color="yellow" size="xl" className="-bottom-20 -left-16 opacity-30" speed="slow" />
          <FloatingBlob color="lilac" size="lg" className="-top-12 -right-12 opacity-30" speed="normal" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 text-brand-yellow text-xs font-black tracking-wide uppercase border border-white/20">
                <span>COME VISIT OUR CAMPUS</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Experience These Joyful Moments in Person
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
                Step inside our vibrant campus, watch our happy learners discover and laugh, and see why WEE SPRITES is the benchmark in early childhood nurture.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <CtaButton
                  variant="yellow"
                  size="lg"
                  onClick={() => handleOpenEnquiry("admissions")}
                >
                  Book Campus Walkthrough
                </CtaButton>
                <Link href="/programs">
                  <CtaButton
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-violet"
                  >
                    Explore Programs & Age Groups
                  </CtaButton>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 6. Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors z-20"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-text-primary flex items-center justify-center transition-colors z-20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Card */}
          <div
            className="relative max-w-2xl w-full bg-brand-violet-dark rounded-3xl overflow-hidden shadow-2xl border border-white/20 text-white max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square sm:aspect-[4/3] w-full bg-black">
              <Image
                src={activePhoto.image}
                alt={activePhoto.alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 text-left space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-brand-yellow tracking-wider">
                  {activePhoto.category}
                </span>
                <span className="text-xs text-white/60">
                  {currentIndex + 1} of {galleryPhotos.length}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 7. Footer */}
      <SiteFooter />

      {/* 8. Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={enquiryTab}
      />
    </div>
  );
}

