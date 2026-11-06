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
      title: "Baisakhi Festive Celebrations",
      category: "Festivals",
      image: "/schoolimages/baisakhi-celebration.jpg",
      alt: "WEE SPRITES family and students celebrating Baisakhi with traditional photobooth props and folk decor",
      description: "Students and families celebrate cultural festivals with joyful folk photobooths, dance, and traditional decorations.",
    },
    {
      id: "p-2",
      title: "Janmashtami Radha & Krishna",
      category: "Festivals",
      image: "/schoolimages/janmashtami-radha-krishna.jpg",
      alt: "Preschoolers lovingly dressed as Radha and Krishna with flute and peacock feather mukut",
      description: "Children immersed in traditional cultural storytelling and dress-up celebrations.",
    },
    {
      id: "p-3",
      title: "Sports Day Pride & Uniform",
      category: "Stage & Events",
      image: "/schoolimages/sports-day-wee-sprites-uniform.jpg",
      alt: "Student in official WEE SPRITES lilac uniform receiving prize on Sports Day from the principal",
      description: "Celebrating athletic participation, motor coordination, and sportsmanship in our lilac uniform.",
    },
    {
      id: "p-4",
      title: "Community Helpers Day",
      category: "Stage & Events",
      image: "/schoolimages/community-helpers-firefighter-chef.jpg",
      alt: "Preschoolers dressed as Firefighter and Executive Chef with educator in front of Community Helpers mural",
      description: "Role-play and career day dress-up teaching young children about civic heroes and helpers.",
    },
    {
      id: "p-5",
      title: "Christmas Reindeer Photobooth",
      category: "Festivals",
      image: "/schoolimages/christmas-reindeer-photobooth.jpg",
      alt: "Toddler in festive Santa tracksuit inside WEE SPRITES handcrafted Christmas photobooth",
      description: "Winter holiday joy with handcrafted reindeer, Christmas tree, and snowman installations.",
    },
    {
      id: "p-6",
      title: "Santa Claus Festive Visit",
      category: "Festivals",
      image: "/schoolimages/santa-claus-celebration.jpg",
      alt: "Santa Claus celebrating Christmas joyfully with young toddlers at WEE SPRITES",
      description: "Holiday cheer and gift-sharing with Santa Claus bringing smiles to every little learner.",
    },
    {
      id: "p-7",
      title: "Christmas Tree & Santa Crafts",
      category: "Creative Arts",
      image: "/schoolimages/christmas-craft-tree.jpg",
      alt: "Young boy in winter jacket proudly holding handmade Christmas tree craft",
      description: "Developing fine motor coordination and decorative creativity through festive holiday crafting.",
    },
    {
      id: "p-8",
      title: "Little Doctor & Police Puppet",
      category: "Classroom",
      image: "/schoolimages/little-doctor-police-puppet.jpg",
      alt: "Preschool girl in white coat with stethoscope holding handcrafted police puppet",
      description: "Early childhood imaginative role-play sparking curiosity about healthcare and community service.",
    },
    {
      id: "p-9",
      title: "Pattern Writing Workbook Discovery",
      category: "Classroom",
      image: "/schoolimages/pattern-writing-workbook.jpg",
      alt: "Proud preschool student displaying official WEE SPRITES Pattern Writing curriculum book",
      description: "Foundational pre-writing skills, pencil grip development, and pattern tracing in official school workbooks.",
    },
    {
      id: "p-10",
      title: "Classroom Activity Table & Art",
      category: "Creative Arts",
      image: "/schoolimages/classroom-activity-table.jpg",
      alt: "Students happily drawing and coloring around the red activity table",
      description: "Cooperative group artwork, crayon blending, and tactile creativity in our cheerful classrooms.",
    },
    {
      id: "p-11",
      title: "Hands-on Origami Paper Fans",
      category: "Creative Arts",
      image: "/schoolimages/hands-on-origami-craft.jpg",
      alt: "Two boys folding colorful paper fans at the activity table",
      description: "Fine motor precision, bilateral coordination, and spatial folding through paper craft.",
    },
    {
      id: "p-12",
      title: "Outdoor Turf & Play Zone",
      category: "Toddler & Play",
      image: "/schoolimages/outdoor-play-zone.jpg",
      alt: "Children playing on safe green turf slide and rocking animals in WEE SPRITES playground",
      description: "Gross motor agility, healthy climbing, and joyful active recess on cushioned artificial grass.",
    },
    {
      id: "p-13",
      title: "Teacher & Children Play Activities",
      category: "Toddler & Play",
      image: "/schoolimages/teacher-outdoor-activities.jpg",
      alt: "Dedicated educator interacting warmly with students on the play turf",
      description: "Warm educator guidance fostering social bonding, cooperative turn-taking, and confidence.",
    },
    {
      id: "p-14",
      title: "Ball Pool Sensory Discoveries",
      category: "Toddler & Play",
      image: "/schoolimages/hero-toddler-ball-pit.jpg",
      alt: "Smiling toddler laughing in colorful sensory ball pit",
      description: "Multi-sensory color recognition and joyful motor exploration in sanitized indoor ball pools.",
    },
    {
      id: "p-15",
      title: "Play Zone Swing Car Riding",
      category: "Toddler & Play",
      image: "/schoolimages/toddler-swing-car.jpg",
      alt: "Toddler boy navigating twist swing car across educational play mat",
      description: "Balance, directionality, and gross motor strength through safe self-propelled ride-ons.",
    },
    {
      id: "p-16",
      title: "Valentine Heart Wand Craft",
      category: "Creative Arts",
      image: "/schoolimages/girl-heart-craft.jpg",
      alt: "Preschooler proudly showcasing handmade red heart wand with message pocket",
      description: "Expressing family love and gratitude through heartfelt scissor cutting and paper assembly.",
    },
    {
      id: "p-17",
      title: "Independence Day Patriotic Attire",
      category: "Festivals",
      image: "/schoolimages/independence-day-patriot.jpg",
      alt: "Young girl in tricolor traditional dress sitting warmly with educator",
      description: "Instilling national pride, cultural respect, and unity through celebratory assemblies.",
    },
    {
      id: "p-18",
      title: "Traditional Festive Celebrations",
      category: "Festivals",
      image: "/schoolimages/festival-traditional-dress.jpg",
      alt: "Preschool girl in festive ethnic lehenga with maang tikka and bangles",
      description: "Joyful celebration of Indian festivals embracing rich cultural traditions and heritage.",
    },
    {
      id: "p-19",
      title: "Animal Safari Presentation",
      category: "Stage & Events",
      image: "/schoolimages/animal-safari-presentation.jpg",
      alt: "Student in dalmatian costume in safari-themed class presentation frame",
      description: "Public speaking poise and wildlife knowledge through costumed classroom presentations.",
    },
    {
      id: "p-20",
      title: "Little Lamb Cotton Craft",
      category: "Creative Arts",
      image: "/schoolimages/lamb-cotton-costume.jpg",
      alt: "Toddler dressed in handmade cotton ball lamb costume",
      description: "Tactile texture exploration using soft cotton balls, puppet ears, and imaginative dress-up.",
    },
    {
      id: "p-21",
      title: "Halloween Friendly Witches",
      category: "Stage & Events",
      image: "/schoolimages/halloween-witch-photobooth.jpg",
      alt: "Preschool girl dressed as friendly witch with broomstick at Halloween backdrop",
      description: "Imaginative costume fun, drama, and festive storytelling celebrating global holidays.",
    },
    {
      id: "p-22",
      title: "Halloween Black Cat Costume",
      category: "Stage & Events",
      image: "/schoolimages/halloween-cat-costume.jpg",
      alt: "Toddler girl in black dress with painted cat whiskers and space buns",
      description: "Whimsical dress-up days nurturing uninhibited self-expression and creative joy.",
    },
    {
      id: "p-23",
      title: "Halloween Pumpkin Quest",
      category: "Stage & Events",
      image: "/schoolimages/halloween-pumpkin-boy.jpg",
      alt: "Young boy with witch hat and pumpkin candy bucket in spooky photobooth",
      description: "Exciting sensory games and trick-or-treat excitement in a caring, festive atmosphere.",
    },
    {
      id: "p-24",
      title: "Janmashtami Laddu Gopal Puja",
      category: "Festivals",
      image: "/schoolimages/janmashtami-laddu-gopal-puja.jpg",
      alt: "Traditional festive puja setup with decorated swing and floral thali",
      description: "Cultural values and spiritual traditions honored with devotion, sweet treats, and floral decorations.",
    },
    {
      id: "p-25",
      title: "Dussehra & Ramleela Celebration",
      category: "Festivals",
      image: "/images/gallery/gallery-dussehra.jpg",
      alt: "Children dressed in royal traditional costumes celebrating Dussehra at WEE SPRITES Preschool",
      description: "Joyful celebration of victory of good over evil with dramatic storytelling and vibrant traditional costumes.",
    },
    {
      id: "p-26",
      title: "Ramayana Role-Play Dramatics",
      category: "Stage & Events",
      image: "/images/gallery/gallery-ramayana-play.jpg",
      alt: "Children in elaborate royal traditional costumes reenacting epics",
      description: "Developing public speaking, memory, and cultural reverence through interactive theatrics.",
    },
    {
      id: "p-27",
      title: "Easel Painting & Color Blending",
      category: "Creative Arts",
      image: "/images/gallery/gallery-3.jpg",
      alt: "Children painting with finger paints and brushes at outdoor wooden easels",
      description: "Freeform self-expression and chromatic exploration on outdoor easels.",
    },
    {
      id: "p-28",
      title: "Origami & Paper Sculpting",
      category: "Creative Arts",
      image: "/images/gallery/gallery-4.jpg",
      alt: "Child carefully folding colorful paper sheets during fine motor activity",
      description: "Patience, geometric discovery, and dexterity trained through folding crafts.",
    },
    {
      id: "p-29",
      title: "Theatrical Skit & Rhyme Enactment",
      category: "Stage & Events",
      image: "/images/gallery/gallery-5.jpg",
      alt: "Preschoolers performing nursery rhyme role play with animal hand puppets",
      description: "Expressive language development and stage presence through dramatic rhymes.",
    },
    {
      id: "p-30",
      title: "Graduation Day Felicitations",
      category: "Stage & Events",
      image: "/images/gallery/gallery-6.jpg",
      alt: "Proud UKG graduates wearing graduation caps and holding diplomas",
      description: "Celebrating our little graduates as they take their confident next steps toward formal school.",
    },
    {
      id: "p-31",
      title: "Award & Achievement Day",
      category: "Stage & Events",
      image: "/images/gallery/gallery-7.jpg",
      alt: "Students receiving medals and certificates of merit with proud smiles",
      description: "Recognizing effort, kindness, sportsmanship, and creativity across all age groups.",
    },
    {
      id: "p-32",
      title: "Confidence in Public Speaking",
      category: "Stage & Events",
      image: "/images/gallery/gallery-8.jpg",
      alt: "Little student speaking into a microphone with confidence during morning assembly",
      description: "Fostering fearless self-expression from the very earliest stages of preschool.",
    },
    {
      id: "p-33",
      title: "Wooden Blocks & Sensory Puzzles",
      category: "Classroom",
      image: "/images/gallery/gallery-9.jpg",
      alt: "Preschoolers collaborating to build architectural structures with wooden blocks",
      description: "Spatial reasoning, architectural balance, and collaborative problem-solving.",
    },
    {
      id: "p-34",
      title: "Phonics Sound Basket Discovery",
      category: "Classroom",
      image: "/images/gallery/gallery-10.jpg",
      alt: "Children identifying phonetic objects and sound baskets with their teacher",
      description: "Multi-sensory phonics foundational practice building fluent phonetic awareness.",
    },
    {
      id: "p-35",
      title: "Interactive Storytelling Circle",
      category: "Classroom",
      image: "/images/gallery/gallery-11.jpg",
      alt: "Teacher sharing illustrated big book story with engaged children sitting on floor mat",
      description: "Sparking imagination, vocabulary expansion, and attentive listening habits.",
    },
    {
      id: "p-36",
      title: "Outdoor Lawn Obstacle Fun",
      category: "Toddler & Play",
      image: "/images/gallery/gallery-15.jpg",
      alt: "Toddlers navigating soft hurdles and balance beams on outdoor turf",
      description: "Gross motor coordination, balance, and energetic outdoor physical fitness.",
    },
    {
      id: "p-37",
      title: "Colorful Building Blocks Tower",
      category: "Classroom",
      image: "/images/gallery/gallery-16.jpg",
      alt: "Young learners balancing vibrant blocks and geometry towers together",
      description: "Constructive play, color matching, and cooperative teamwork in early childhood.",
    },
    {
      id: "p-38",
      title: "Clay Sculpting & Sensory Modeling",
      category: "Creative Arts",
      image: "/images/gallery/gallery-17.jpg",
      alt: "Student molding colorful dough into animals and organic forms",
      description: "Tactile pressure, hand strength, and imaginative expression through modeling clay.",
    },
    {
      id: "p-39",
      title: "Rhyme Time & Group Singalong",
      category: "Stage & Events",
      image: "/images/gallery/gallery-19.jpg",
      alt: "Children singing classic action rhymes with joyful hand movements",
      description: "Musical ear training, auditory memory, and enthusiastic community singing.",
    },
    {
      id: "p-40",
      title: "Puzzle Solving & Pattern Matching",
      category: "Classroom",
      image: "/images/gallery/gallery-22.jpg",
      alt: "Toddler placing interlocking jigsaw pieces into wooden frame",
      description: "Critical thinking, shape recognition, and cognitive persistence through puzzles.",
    },
    {
      id: "p-41",
      title: "Finger Painting & Brushwork",
      category: "Creative Arts",
      image: "/images/gallery/gallery-23.jpg",
      alt: "Child exploring vibrant washable paints with finger prints and brush strokes",
      description: "Sensory release, emotional regulation, and joyful chromatic experiments.",
    },
    {
      id: "p-42",
      title: "Friendship Day Handprint Tree",
      category: "Creative Arts",
      image: "/images/gallery/gallery-24.jpg",
      alt: "Collaborative mural made with colorful student handprints forming a flourishing tree",
      description: "Celebrating kindness, unity, and friendship through collaborative mural art.",
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

                    {/* Hover overlay with zoom icon only (no text overlay) */}
                    <div className="absolute inset-0 bg-brand-violet-dark/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/95 text-brand-violet shadow-lg backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </div>
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
                We care, we share, for the future, we prepare. Step inside our vibrant campus, watch children discover and laugh, and see why WEE SPRITES is the benchmark in early childhood nurture.
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
            className="relative max-w-4xl w-full max-h-[92vh] flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[16/10] max-h-[88vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/95 flex items-center justify-center">
              <Image
                src={activePhoto.image}
                alt={activePhoto.alt}
                fill
                className="object-contain"
              />
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

