# WEE SPRITES Preschool --- Homepage Build Specification

## Next.js + React + Tailwind CSS

**Purpose:** Build a responsive, production-quality homepage for WEE
SPRITES Preschool that closely follows the approved long-page visual
reference supplied by the client. Treat the approved reference image as
the source of truth for layout, section order, color balance, curved
photo frames, dotted paths, typography hierarchy, and overall visual
rhythm.

> **Important implementation rule:** Reproduce the reference layout as
> closely as practical, but do not invent missing business facts. Use
> the supplied WEE SPRITES photos and logo. For contact details,
> testimonials, facility claims, teacher credentials, and age ranges,
> use client-approved content only. If details are not confirmed, put
> them in a clearly marked content configuration file for later
> replacement.

------------------------------------------------------------------------

## 1. Project Requirements

### Required stack

-   **Framework:** Next.js with App Router
-   **UI:** React
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **Animation:** Framer Motion (`motion`) for scroll reveals and
    subtle interactions
-   **Icons:** Lucide React
-   **Optional smooth scrolling:** Native CSS scrolling first; use a
    smooth-scroll library only if there is a clear need
-   **Image handling:** Next.js `next/image`
-   **Forms:** React Hook Form + Zod are recommended if form validation
    is needed
-   **Package manager:** Use the package manager already present in the
    repository; do not replace an existing setup without reason

### Primary goal

Create the **homepage only** as the first deliverable. The page should
feel like a real, carefully designed preschool website---not an
AI-generated poster or a generic template.

### Brand spelling

Use **WEE SPRITES** everywhere in visible copy. The preschool descriptor
may be shown as **Preschool & Day Care** where appropriate. Do not
accidentally write "Wee Sprite," "Wisprites," "WEE SPIRITES," or "WEE
SPRITES SCHOOL" unless the client specifically approves that variation.

### Main business goal

Franchise enquiries are the primary conversion goal. Admissions are the
secondary conversion goal.

### Visual direction

-   Child-friendly, warm, cheerful and playful
-   White/off-white base with **violet**, **light yellow**, and **dark
    yellow** accents
-   Organic curved image masks and wavy section boundaries
-   A few hand-drawn-style details (small stars, hearts, sun, flower)
-   Thin dotted paths that guide the eye between selected areas
-   Real client photography, used naturally
-   Plenty of spacing and clear hierarchy
-   No copying of another preschool brand's exact layout or assets

------------------------------------------------------------------------

## 2. Approved Reference and Design Fidelity

Use the approved long homepage reference image as the layout guide.
Match these characteristics:

1.  A compact white header with logo on the left, navigation in the
    center, and a yellow franchise CTA on the right.
2.  A two-column hero: copy and CTAs on the left; large child photograph
    in an organic curved frame on the right.
3.  A soft lavender/cream transition into the About section.
4.  A short row of key trust points beside or below the About content.
5.  A Programs section with six compact cards.
6.  A photo-led Learning Approach section.
7.  A full-width violet "Why Choose WEE SPRITES" feature band.
8.  A facilities strip with small photo cards.
9.  A Teachers section with a real school/classroom photo.
10. An events and gallery preview.
11. Parent testimonials and admissions CTA arranged as two adjacent
    panels on desktop.
12. A prominent violet franchise opportunity band.
13. A rich violet footer with brand, quick links, programs, contact
    information and social links.

The page should be a **long, scrollable homepage**, not a short landing
page. Preserve the order and overall visual rhythm above. Do not remove
sections just to make the page shorter.

### Important note about generated visual references

A generated visual can contain imperfect text, placeholder details, or
photos that do not exactly match the originals. Use it to guide
composition, not as a flat screenshot background. Rebuild the layout as
real HTML/CSS components, and use the actual supplied photos. Do not put
the entire reference image into the page as one background image.

------------------------------------------------------------------------

## 3. Brand Design System

### Color tokens

Use these as starting values, then tune them to visually match the
approved reference. Keep them centralized in CSS variables or Tailwind
theme tokens.

``` css
:root {
  --brand-violet: #6127B8;
  --brand-violet-dark: #3F167D;
  --brand-violet-soft: #F2E9FF;
  --brand-lilac: #E8D7FF;
  --brand-yellow-light: #FFF5BD;
  --brand-yellow: #FFD83D;
  --brand-yellow-dark: #F4B900;
  --brand-cream: #FFFCF2;
  --brand-white: #FFFFFF;
  --text-primary: #32145F;
  --text-body: #4C4260;
  --border-soft: #E8DDF5;
}
```

### Color usage

-   **Violet:** headings, primary buttons, major CTA bands, footer,
    icons and selected card backgrounds.
-   **Light yellow:** soft section backgrounds, highlighted words,
    offset photo-frame layers and light decorative accents.
-   **Dark yellow:** primary yellow CTA buttons, small icon accents,
    underlines and highlighted details.
-   **White/off-white:** main page background and text-heavy sections.
-   Avoid introducing many unrelated accent colors. If real photographs
    contain other colors, keep the surrounding UI restrained.

### Typography

Use a friendly, highly readable sans-serif. Suggested options:
**Nunito** or **Nunito Sans** via `next/font/google`. Use one family
with a small number of weights rather than mixing many fonts. -
Headings: rounded, bold, violet - Highlighted heading words: yellow with
enough contrast and a violet outline/underline only if needed - Body:
regular weight, comfortable line-height - Navigation and buttons:
medium/semi-bold, readable at small sizes - Avoid extremely decorative
fonts that reduce readability.

### Shape language

-   Rounded cards: `rounded-2xl` to `rounded-3xl`
-   Photo frames: organic curved masks built with CSS `clip-path`,
    border-radius combinations, or a decorative SVG shape behind the
    image
-   Wavy transitions: simple custom SVG dividers or CSS shapes, not
    giant complex illustrations
-   Dotted paths: SVG path with `stroke-dasharray`, thin violet stroke
    and a small number of dark-yellow dots
-   Hand-drawn accents: use small SVG/CSS illustrations; do not generate
    dozens of random icons
-   Shadows: very soft, subtle shadows only
-   Borders: thin pale-lilac borders where needed

------------------------------------------------------------------------

## 4. Homepage Section-by-Section Specification

### Section 1 --- Header / Navigation

**Desktop layout** - White header, approximately 76--88 px high -
Logo/wordmark aligned left - Navigation aligned across the
middle/right - Yellow rounded CTA at far right: **Explore Franchise
Opportunities** - Subtle bottom border or soft shadow - Header remains
sticky after scrolling, with a slight background/height transition

**Navigation labels** - Home - About Us - Programs - Admissions -
Franchise Opportunity - Gallery - Contact Us

For this first deliverable, navigation items may scroll to homepage
sections or point to placeholder routes. Do not create multiple pages
unless explicitly requested.

**Interactions** - Active/hover nav underline animates in violet - CTA
slightly lifts on hover - Mobile menu opens and closes accessibly, with
`aria-expanded` and focus handling - Avoid layout shift when the mobile
menu opens

### Section 2 --- Hero

**Composition** - Two columns on desktop: left copy and CTAs; right
large child photo - On mobile, headline and CTAs appear before the
image, unless a small viewport layout requires a different balance -
Background: white to very light lilac - Curved/wavy lower boundary into
the next section - One main organic image mask with a light-yellow
offset shape and a violet outline - One dotted path and only a few
doodle accents

**Suggested copy** Eyebrow: `A BRIGHT BEGINNING FOR A BRIGHTER TOMORROW`

Headline: `Happy Learners` `Brighter Futures`

Supporting text:
`At WEE SPRITES, we create a safe, caring and joyful environment where children learn, play and grow with confidence.`

Buttons: - Primary violet: **Enquire for Admissions** - Yellow:
**Explore Franchise Opportunities**

**Photo** Use the client-provided single-child photograph for the main
hero if it crops well. Prioritize authentic client imagery. Do not
replace it with a generated child.

**Responsive behavior** - Desktop: hero has generous whitespace and
balanced text/photo proportions - Tablet: reduce heading size and
decorative accents - Mobile: stack columns, keep buttons comfortably
tappable, avoid cropping the child's face

### Section 3 --- About WEE SPRITES

**Layout** - A curved photo on the left and copy on the right, with a
light-yellow/lilac background transition - Include a compact list of
four values on the far right or below the copy at smaller breakpoints

**Suggested copy** Eyebrow: `ABOUT WEE SPRITES` Heading:
`A Nurturing Space for Every Child` Body:
`We believe every child is unique and full of potential. Our play-based approach encourages curiosity, creativity and confidence in a caring environment.`

Button: **Know More About Us**

**Value points** - Child-Centric Approach - Safe & Caring Environment -
Play-Based Learning - Experienced Educators

Only present claims such as "experienced educators" if confirmed by the
client.

### Section 4 --- Programs

Heading: `Programs for Every Stage of Growth`

Short supporting text:
`Age-appropriate learning experiences help children build confidence, curiosity and a strong foundation for the future.`

Show six cards in this order: 1. Play Group 2. Pre-Nursery 3. Nursery 4.
LKG 5. UKG 6. Evening Program

**Card design** - Small rounded child/activity photo at the top -
Program name - Age range only after client confirmation - Small circular
arrow button - Alternate very light lilac and light-yellow card
backgrounds - Subtle hover lift and image zoom - Equal heights and
consistent spacing

**Important content accuracy** The reference visual may show example age
ranges, but do not assume those are correct. Put program labels and age
ranges in a configuration/data file so the client can confirm them. Do
not invent duration, curriculum or learning outcomes.

### Section 5 --- Learning Approach

Heading: `Learning Through Play and Exploration`

Supporting copy:
`Play, discovery and meaningful activities help children develop confidence, creativity and early learning skills.`

Use three photo-led features: - Creative Activities - Hands-on
Learning - Social Development

**Layout** - Text block on the left - Three image cards/crops on the
right - Organic curved edges and a thin dotted path around the
composition - Keep decorative SVGs behind the content, never over faces
or important text

### Section 6 --- Why Choose WEE SPRITES

**Presentation** - Full-width violet band with wavy top and bottom
edges - White heading and text - A child photo on the right inside a
curved frame - Yellow check icons for benefit bullets

Heading: `The Right Start for a Brighter Tomorrow`

Suggested benefit points: - Safe and Stimulating Environment - Caring
Educators - Play-Based Learning - Fun-Filled Activities - Focus on
Overall Development - Parent Engagement

Use these as draft copy only; remove or revise anything the client
cannot substantiate.

### Section 7 --- Facilities

Heading: `A Safe, Happy and Engaging Environment`

Show four small facility cards, each with a real image: - Bright
Classrooms - Indoor Play Area - Learning Resources - Safe Campus

Use actual images supplied by the school. If a facility photo is not
available, use a neutral placeholder card and mark the asset request in
the README/content notes. Do not show facilities that do not exist.

### Section 8 --- Our Teachers

**Layout** - Large classroom/teacher photo on the left - Copy and CTA on
the right - Background: soft lilac or white, separated with a gentle
wave

Heading: `Guiding with Care and Experience`

Body:
`Our educators and support team help create a warm, encouraging environment where every child can explore, learn and grow.`

CTA: **Meet Our Team**

Do not invent teacher names, qualifications or credentials.

### Section 9 --- Events and Gallery

Heading: `Moments of Learning, Joy and Celebration`

Use a horizontal gallery preview of 4--5 photos: - Classroom
activities - Gandhi Jayanti activity - Festival/event activity - Group
activity - Other approved school moments

**Behavior** - On desktop, use a neat image grid or horizontal
carousel - On mobile, use a swipeable row or 2-column grid - Click/tap
may open a lightbox with close button and keyboard support - Images
should have descriptive alt text - Use the original school photos, not
generated event photos

CTA: **View Full Gallery**

### Section 10 --- Parent Testimonials

Heading: `Happy Parents, Happier Children`

Use a simple testimonial card on a pale-lilac background. If approved
testimonials are not yet supplied, keep the component data-driven and
use clearly marked draft placeholders in development only. Do not
publish fabricated testimonials or invented parent identities.

**Interaction** - Optional carousel with manual arrows and accessible
labels - Avoid fast auto-rotation; manual interaction is preferred -
Respect reduced-motion preferences

### Section 11 --- Admissions CTA

**Layout** - Light-yellow panel with a child photo on the right -
Heading and copy on the left - Violet button

Heading: `Give Your Child a Bright Start` Body:
`Get in touch with WEE SPRITES to learn more about admissions and our programs.`
Button: **Enquire for Admissions**

The button should open the admissions enquiry modal or navigate to the
agreed enquiry destination. If a backend is not ready, create a
front-end form with validation and a clear demo success state; do not
claim enquiries are actually sent.

### Section 12 --- Franchise Opportunity

This is the primary business CTA.

**Layout** - Wide violet band - White/yellow headline - Supporting
copy - Yellow CTA button - One supporting school/child photo in a curved
frame - Wavy yellow accents, used sparingly

Heading: `Bring WEE SPRITES to Your City`

Body:
`Be part of a preschool journey focused on joyful learning and meaningful early experiences.`

Button: **Enquire for Franchise**

Make this section visually prominent without overwhelming the rest of
the homepage.

### Section 13 --- FAQ

Add a compact accordion with a few questions only if the client
supplies/approves the answers. Otherwise, build the component but
populate it later.

Possible topics to confirm: - Which programs are offered? - How can
parents enquire about admission? - What is the franchise process? - How
can someone contact the school?

Accordion requirements: - Keyboard accessible - `aria-expanded` and
proper heading/button semantics - Smooth height animation that respects
reduced motion - Do not invent policy answers or franchise terms

### Section 14 --- Contact / Location

Show: - School name - Confirmed address - Confirmed phone number -
Confirmed email - Optional map link/embed only after location is
verified - Admission enquiry link - Franchise enquiry link

Do not invent address, phone, email, or social handles. Store confirmed
values in a central config file.

### Section 15 --- Footer

**Appearance** - Rich violet background - White logo/wordmark and short
description - Quick Links column - Programs column - Contact Us column -
Social icons only for confirmed social profiles - Thin bottom line with
copyright and policy links

Suggested description:
`A nurturing place where children learn, play and grow with confidence.`

Keep footer content readable on mobile; stack columns in a logical
order.

------------------------------------------------------------------------

## 5. Animation and Interaction System

Use Framer Motion for restrained, polished animation. Motion should add
delight without distracting from the children's photos or making the
website feel artificial.

### Required animations

1.  **Hero entrance:** eyebrow, headline, copy and CTAs fade up with a
    small stagger.
2.  **Hero photo:** subtle fade/scale entrance; no large bouncing
    movement.
3.  **Curved dotted path:** animate SVG `pathLength` or dash offset once
    as it enters view.
4.  **Section reveals:** use fade + 16--24 px vertical movement when
    sections enter the viewport.
5.  **Program cards:** staggered reveal; hover lifts by 3--5 px and
    image scales very slightly.
6.  **CTA buttons:** gentle color transition and 1--2 px lift on hover;
    clear focus ring.
7.  **Gallery:** smooth image hover zoom; lightbox fades in/out.
8.  **Header:** slight background/shadow transition after scrolling,
    without layout jumping.
9.  **Wavy section separators:** static SVG/CSS shapes by default; do
    not continuously animate the whole page.
10. **Optional tiny doodle motion:** one or two slow, subtle movements
    (e.g., a small sun rotation or floating star) only if it remains
    tasteful.

### Motion values

-   Short interactions: 160--240 ms
-   Section reveals: 400--650 ms
-   Stagger: 60--100 ms
-   Easing: ease-out or a soft cubic-bezier
-   Avoid overshooting springs for text and photos

### Accessibility

-   Respect `prefers-reduced-motion`
-   Disable or reduce scroll reveals and decorative movement when
    reduced motion is enabled
-   Animations must not hide content from keyboard users or screen
    readers
-   Do not rely on motion to communicate meaning
-   Keep hover effects usable on touch devices

------------------------------------------------------------------------

## 6. Photography and Asset Handling

### Use supplied assets

Use the original uploaded WEE SPRITES images: - Single baby girl in
lilac outfit --- hero candidate - Child playing with soft toys ---
activity/program candidate - Gandhi Jayanti activity and children ---
gallery candidate - School staff/group photos --- About or Teachers
candidate - Child dressed for a festival --- gallery/event candidate -
Other child portraits and activity photos --- program/activity/gallery
candidates

Use the best-fit photo for each section based on subject, orientation
and quality. Do not place every photo just to use all of them.

### Asset rules

-   Store assets in `/public/images/`
-   Use descriptive filenames, for example:
    -   `hero-child.jpg`
    -   `child-play-activity.jpg`
    -   `gandhi-jayanti-activity.jpg`
    -   `school-team-event.jpg`
    -   `festival-child.jpg`
-   Keep originals untouched in a separate source folder if needed
-   Export optimized web copies in WebP/AVIF when practical
-   Avoid enlarging low-resolution images
-   Use `next/image` with correct `sizes`, `width`, and `height` or
    `fill`
-   Set `object-position` deliberately so faces are not cropped
-   Use `priority` only for the main hero image; lazy-load images below
    the fold
-   Add meaningful alt text (e.g. "Children taking part in a classroom
    activity")
-   Do not use generated children's images in place of the client's real
    children

### Photo shape technique

Prefer a reusable wrapper that uses: - a light-yellow offset shape
behind the image, - a violet outline or border, - an organic
`border-radius` or SVG `clipPath`, - `overflow-hidden` on the image
container, - responsive dimensions and a safe mobile fallback.

Do not use the same blob shape for every photo. Vary the curves slightly
while keeping the design system consistent.

------------------------------------------------------------------------

## 7. Responsive Design Requirements

Build mobile-first and test at these approximate widths: - Small mobile:
320--375 px - Large mobile: 390--430 px - Tablet: 768 px - Laptop:
1024--1280 px - Wide desktop: 1440 px and above

### Desktop

-   Full horizontal navigation
-   Two-column hero and split content sections
-   Six program cards across a row only if they remain legible;
    otherwise use a 3x2 grid
-   Rich long-page composition with wavy transitions and dotted paths

### Tablet

-   Reduce heading sizes and image heights
-   Allow program cards to become 3 columns x 2 rows
-   Simplify decorative paths
-   Keep CTA buttons visible and aligned

### Mobile

-   Hamburger navigation
-   Stack hero text, buttons and image
-   Use full-width buttons when appropriate
-   Programs: 1 or 2 columns depending on available width
-   Stack About and Teachers sections
-   Gallery: 2 columns or a horizontal swipe row
-   Testimonials and CTA panels stack vertically
-   Hide non-essential decorative SVGs that cause clutter or horizontal
    overflow
-   Ensure no text overlaps the photo masks
-   No horizontal scrolling

------------------------------------------------------------------------

## 8. Component and Folder Architecture

Suggested App Router structure:

``` text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  site-header.tsx
  mobile-nav.tsx
  site-footer.tsx
  sections/
    hero-section.tsx
    trust-strip.tsx
    about-section.tsx
    programs-section.tsx
    program-card.tsx
    learning-approach-section.tsx
    why-choose-us-section.tsx
    facilities-section.tsx
    teachers-section.tsx
    gallery-section.tsx
    testimonials-section.tsx
    admissions-cta-section.tsx
    franchise-section.tsx
    faq-section.tsx
    contact-section.tsx
  ui/
    curved-photo.tsx
    dotted-path.tsx
    wave-divider.tsx
    section-heading.tsx
    cta-button.tsx
    reveal.tsx
    enquiry-modal.tsx
lib/
  site-config.ts
  content.ts
  utils.ts
public/
  images/
  logo/
```

Keep components small and reusable. Use a single source of truth for
navigation, program cards, footer links, contact information and CTA
destinations.

### Content configuration

Create `lib/site-config.ts` for: - brand name - confirmed contact
details - social links - CTA destinations - navigation items

Create `lib/content.ts` for: - program labels and confirmed age groups -
feature points - gallery image paths and alt text - testimonials
(approved only) - FAQs (approved only)

Do not hardcode uncertain business information throughout multiple
components.

------------------------------------------------------------------------

## 9. Technical Implementation Guidelines

### Next.js

-   Use App Router
-   Use server components by default
-   Add `"use client"` only to components requiring state, event
    handlers, animations or browser interactions
-   Use `next/image` for local assets
-   Use `next/font/google` for typography
-   Add metadata in `app/layout.tsx` or page metadata
-   Add favicon and brand assets only if supplied

### Tailwind CSS

-   Use design tokens via CSS variables and Tailwind theme configuration
-   Avoid large amounts of arbitrary one-off values
-   Prefer reusable component classes for repeated patterns
-   Ensure focus-visible styles and color contrast
-   Keep the page layout fluid, with a sensible max-width and consistent
    gutters

### Enquiry forms

Create separate forms for: 1. Admissions enquiry 2. Franchise enquiry

Suggested fields (confirm with client): - Admissions: parent name,
phone, child age/program, message - Franchise: name, phone, email, city,
message

Validation: - Required fields clearly identified - Indian phone
validation should be reasonable but not unnecessarily restrictive -
Helpful inline errors - Accessible labels - Loading and success states -
No fake submission success if no backend is connected; make demo-only
behavior explicit

### Performance

-   Use optimized images and lazy loading below the fold
-   Avoid large animation libraries beyond Framer Motion unless
    justified
-   Avoid layout shift by defining image dimensions/aspect ratios
-   Keep decorative SVGs lightweight
-   Use `transform` and `opacity` for animations where possible
-   Check Lighthouse performance and accessibility after implementation

### SEO basics

-   Title: `WEE SPRITES Preschool | Learn, Play & Grow`
-   Description:
    `Discover WEE SPRITES Preschool, a joyful environment where children learn, play and grow. Explore programs, admissions and franchise opportunities.`
-   Use one H1 only
-   Use a logical H2/H3 hierarchy
-   Add descriptive image alt text
-   Add Open Graph metadata
-   Add canonical URL only after the final domain is confirmed
-   Do not publish unverified address or LocalBusiness structured data

------------------------------------------------------------------------

## 10. Acceptance Checklist

The homepage is ready for review only when:

-   [ ] Brand name is consistently spelled **WEE SPRITES**
-   [ ] All sections from the reference are present in the agreed order
-   [ ] Violet, light yellow and dark yellow are the dominant brand
    colors
-   [ ] The page is long and section-rich, not reduced to a short
    landing page
-   [ ] Curved photo frames are used in hero and selected sections
-   [ ] Wavy section dividers appear at selected transitions
-   [ ] Dotted paths are used sparingly and do not obstruct content
-   [ ] Original client photos are used, with faces cropped
    appropriately
-   [ ] Programs include Play Group, Pre-Nursery, Nursery, LKG, UKG and
    Evening Program
-   [ ] Franchise CTA is prominent in the header, hero and dedicated
    section
-   [ ] Admissions CTA and franchise CTA remain distinct
-   [ ] All sections are responsive across mobile, tablet and desktop
-   [ ] Mobile navigation works and is keyboard accessible
-   [ ] Animations are smooth and respect reduced-motion preferences
-   [ ] There is no horizontal overflow on mobile
-   [ ] No fabricated testimonials, phone numbers, emails, statistics or
    claims are published
-   [ ] Images are optimized and below-the-fold images lazy-load
-   [ ] Forms show accessible validation and clear status
-   [ ] SEO metadata and heading hierarchy are present
-   [ ] The implementation is real HTML/CSS/React, not a screenshot used
    as the page background

------------------------------------------------------------------------

## 11. Build Order

1.  Set up or inspect the existing Next.js + Tailwind project.
2.  Add the font, brand tokens and global styles.
3.  Prepare and map the real photo assets.
4.  Build header and hero first; compare against the approved reference.
5.  Implement the remaining sections in the exact agreed order.
6.  Add curved image wrappers, wavy dividers and dotted SVG paths.
7.  Add motion only after the static layout is correct.
8.  Build mobile navigation and responsive behavior.
9.  Connect or stub the two separate enquiry forms.
10. Test mobile, tablet and desktop layouts.
11. Optimize images and validate accessibility/performance.
12. Review the complete page side-by-side with the approved reference
    and adjust spacing, image crops, colors and section heights.

### Final instruction to the developer

**Prioritize visual fidelity to the approved WEE SPRITES homepage
reference.** Match its long-page composition, alternating
white/lilac/light-yellow sections, violet feature band, rounded program
cards, curved photo frames, dotted paths, CTA hierarchy and rich footer.
Keep the design playful and warm, but use the client's actual
photographs and a restrained, human-designed layout. Do not simplify
away sections or substitute a generic preschool template.
