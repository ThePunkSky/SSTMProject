# 2 The Sky Motorsports - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from leading automotive performance brands including Hoonigan, StanceWorks, APR Performance, and Cobb Tuning. The design will embody the raw energy and precision of high-performance motorsports culture.

**Core Design Principles**:
- Aggressive Performance Aesthetic: Bold, angular, speed-focused
- Visual Dominance: Let the builds speak through powerful imagery
- Technical Precision: Clean, sharp interfaces that reflect engineering excellence
- Community-Driven: Showcase real customer stories and builds

---

## Color Palette

**Dark Mode Foundation** (Primary Interface):
- Background Base: 15 8% 8% (deep charcoal)
- Surface Elevated: 15 8% 12% (slightly lighter panels)
- Surface Accent: 15 10% 18% (cards, modals)

**Brand Colors**:
- Primary Red: 0 85% 55% (performance red - use for CTAs, highlights)
- Racing Orange: 15 90% 60% (accent for speed/power moments)
- Steel Gray: 210 15% 65% (technical elements, secondary text)
- Pure White: 0 0% 100% (headlines, key text)

**Accent & UI States**:
- Success Green: 140 70% 45% (dyno results, positive metrics)
- Warning Amber: 35 95% 60% (caution states)
- Dark Muted: 15 5% 25% (borders, dividers)

---

## Typography

**Font Families** (via Google Fonts CDN):
- **Primary Display**: "Rajdhani" - Bold, angular, motorsports-inspired (weights: 600, 700)
- **Body/UI**: "Inter" - Clean, highly readable (weights: 400, 500, 600)
- **Technical/Data**: "JetBrains Mono" - For dyno stats, horsepower numbers (weight: 500)

**Type Scale**:
- Hero Headlines: text-6xl to text-7xl, font-bold, tracking-tight
- Section Titles: text-4xl to text-5xl, font-semibold
- Card Titles: text-2xl, font-semibold
- Body Text: text-base to text-lg, leading-relaxed
- Captions/Stats: text-sm, font-medium, uppercase tracking-wider

---

## Layout System

**Tailwind Spacing Primitives**: Use 4, 6, 8, 12, 16, 20, 24, 32 units consistently.

**Container Strategy**:
- Full-width hero sections with inner max-w-7xl containers
- Content sections: max-w-6xl centered
- Text-heavy content: max-w-4xl for readability
- Grid layouts: 3-column on desktop (lg:grid-cols-3), 2-col tablet (md:grid-cols-2), single mobile

**Vertical Rhythm**:
- Section padding: py-20 on desktop, py-12 on mobile
- Component spacing: gap-8 for grids, space-y-6 for stacked content

---

## Component Library

### Navigation
- Fixed dark header with blur backdrop (backdrop-blur-md bg-black/80)
- Logo left, navigation center, "Book Consultation" CTA right
- Mobile: Slide-in menu with overlay

### Hero Section
- Full-viewport height (min-h-screen) with dramatic car imagery
- Overlay gradient: from-black/70 via-black/50 to-transparent
- Centered headline + subheadline + dual CTAs ("Build Your Legend" primary, "View Builds" secondary outline)
- Subtle parallax scroll effect on background

### Service Cards
- Dark surface cards (bg-surface-accent) with red left border accent
- Icon at top (use Heroicons), title, description, "Learn More" link with arrow
- Hover: Slight lift (hover:translate-y-[-4px]) and red glow shadow

### Build Portfolio Grid
- Masonry-style gallery (3 columns desktop, 2 tablet, 1 mobile)
- Each card: Large image, car name/model overlay, horsepower stat badge, before/after indicator
- Click to expand: Full-screen modal with carousel, dyno charts, project details

### Horsepower Calculator
- Dark panel with red accent border
- Dropdown selects for: Car Model, Current State, Upgrade Package
- Real-time result display: Large numbers in JetBrains Mono, animated counter
- Visual gauge/meter showing power increase

### Customer Spotlight
- 2-column layout: Left = large customer car image, Right = owner photo (small) + testimonial + build specs
- Alternating layout direction for multiple spotlights
- Stats callouts: "250HP Gain" badges with icons

### Forms (Contact/Quote)
- Dark input fields with red focus rings
- Floating labels
- Prominent red submit button: "Request Build Quote"

### Footer
- 4-column grid: About, Services, Follow Us, Contact
- Social media icons (Instagram, YouTube, TikTok prominent)
- Newsletter signup: "Join the Crew" with email input
- Bottom copyright bar with "2 The Sky Motorsports" branding

---

## Interactive Features

### Horsepower Calculator Logic
- JavaScript function calculating estimated gains based on upgrade packages
- Display: Base HP → Modified HP with animated arrow between
- Show cost estimate range below results

### Virtual Garage (Future Phase)
- iframe embed or custom configurator
- Preview canvas showing selected modifications
- Save/share configuration via URL

---

## Animations

**Minimal & Purpose-Driven**:
- Hero text: Fade-in stagger on load (0.2s delay between elements)
- Scroll reveals: Elements fade + slide up as they enter viewport (Intersection Observer)
- Number counters: Animate HP stats when visible
- Button hovers: Scale 1.02, red glow shadow
- Image hovers in gallery: Zoom 1.05 with smooth transition

**NO**: Excessive spinning, bouncing, or distracting page-load animations

---

## Images

**Hero Section**: 
- Large, dramatic full-width image of a high-performance car (preferably a tuned muscle car or import on a track/dark background)
- Image should be dark/moody to support white text overlay
- Suggested style: Low angle shot emphasizing power and speed

**Build Portfolio**:
- 8-12 professional photos of completed builds
- Mix of: Close-ups of engine bays, full car profiles, action shots, interior details
- Include dyno chart graphics overlaid on some cards

**Customer Spotlight**:
- 3-4 customer cars (before/after pairs)
- Owner headshots (circular crops) next to testimonials

**Services Section**:
- Consider using icon illustrations or small accent images (engine parts, tools) rather than full photos
- Focus on iconography from Heroicons for clean, modern look

**About/Backstory**:
- Founder/team photo in the shop working on a car
- Gritty, authentic workshop aesthetic

---

## Responsive Behavior

- Mobile: Single column, larger touch targets, simplified navigation
- Tablet: 2-column grids, maintain visual hierarchy
- Desktop: Full 3-column layouts, expanded hero imagery
- All breakpoints: Ensure calculator and forms remain functional and clear

---

## Accessibility

- High contrast maintained throughout (white on dark, red on dark passes WCAG AA)
- Focus indicators on all interactive elements (red outline)
- Semantic HTML structure
- Alt text for all build images: "2024 Nissan GT-R Twin Turbo Build - 800HP"
- Keyboard navigation support for calculator and gallery

---

**Final Note**: This design should feel like walking into a high-end tuning shop—professional, powerful, and thrilling. Every element should reinforce the message: "We build legends."