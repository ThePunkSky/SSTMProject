# 2 The Sky Motorsports - Design Guidelines

## Design Approach

**American Muscle Heritage**: A modern dark horse muscle shop paying homage to the legendary American speed shops of the 60s-80s. Raw power meets precision engineering with a focus on American V8s, classic muscle, and modern muscle trucks.

**Core Design Principles**:
- Dark & Gritty: Deep blacks, charcoal grays, with bold orange/red muscle car accents
- American Pride: Stars, stripes, horsepower, torque - celebrating American automotive culture
- Heritage Meets Modern: Classic muscle shop vibes with contemporary web design
- Power-Focused: Every element reinforces American V8 dominance

---

## Color Palette

**Dark Foundation** (Default Theme):
- Background Base: 0 0% 5% (deep black, like a shop floor at night)
- Surface Elevated: 0 0% 8% (darker panels)
- Surface Accent: 15 5% 12% (cards, modals)

**Muscle Car Accent Colors**:
- Hemi Orange: 15 95% 55% (classic Mopar orange - primary CTA color)
- Fire Red: 0 85% 50% (hot rod red - secondary accent)
- Steel Gray: 210 8% 60% (brushed metal look for technical elements)
- Bright White: 0 0% 98% (clean headlines, high contrast)
- Chrome Silver: 210 10% 75% (metallic accents)

**Accent & UI States**:
- Success Green: 140 60% 45% (dyno wins, performance gains)
- Warning Amber: 35 100% 50% (caution states, racing yellow)
- Dark Border: 0 0% 15% (subtle borders, dividers)

---

## Typography

**Font Families** (via Google Fonts CDN):
- **Primary Display**: "Rajdhani" - Bold, angular, race-inspired (weights: 600, 700)
- **Body/UI**: "Inter" - Clean, highly readable (weights: 400, 500, 600)
- **Technical/Data**: "JetBrains Mono" - For dyno stats, horsepower numbers (weight: 500)

**Type Scale**:
- Hero Headlines: text-6xl to text-8xl, font-bold, tracking-tight, UPPERCASE
- Section Titles: text-4xl to text-5xl, font-semibold
- Card Titles: text-2xl, font-semibold
- Body Text: text-base to text-lg, leading-relaxed
- Stats/Numbers: text-sm to text-xl, font-mono, font-bold

---

## American Muscle Focus

**Vehicle Types**:
- Classic Muscle: Mustangs, Camaros, Challengers, Chargers
- Modern Muscle: Hellcats, GT500s, ZL1s, Corvettes
- American Trucks: F-150s, Silverados, Rams, Raptors
- V8 Swaps: LS swaps, Coyote swaps, Hemi swaps

**Language & Tone**:
- "Cubic inches" over "liters"
- "American V8 power" emphasis
- "Horsepower and torque" (not just HP)
- References to legendary American engines: LS, Coyote, Hemi, Big Block

---

## Layout System

**Tailwind Spacing**: Use 4, 6, 8, 12, 16, 20, 24, 32 units consistently.

**Container Strategy**:
- Full-width hero sections with dark overlays
- Content sections: max-w-7xl centered
- Grid layouts: 3-column on desktop, responsive down

**Vertical Rhythm**:
- Section padding: py-20 on desktop, py-12 on mobile
- Component spacing: gap-8 for grids

---

## Component Library

### Navigation
- Fixed dark header with blur backdrop
- Orange accent on hover states
- "Book Consultation" in Hemi Orange

### Hero Section
- Full-viewport with dramatic muscle car imagery
- Dark gradient overlay
- Bold uppercase headlines
- Dual CTAs: Orange primary, outlined secondary

### Service Cards
- Dark cards with orange left border accent
- Muscle-focused icons
- Emphasis on V8 power, torque, displacement

### Build Portfolio Grid
- Dark cards with bright orange HP badges
- American muscle car focus
- Before/after dyno numbers prominent

### Horsepower Calculator
- Dark panel with orange accent border
- Focus on American muscle models
- Display both HP and torque gains
- Cubic inch displacement references

### Customer Spotlight
- Real American muscle builds
- Orange accent badges
- Testimonials from muscle car owners

### Forms
- Dark input fields with orange focus rings
- Orange submit button

### Footer
- Dark background
- Orange social media hover states
- Classic American muscle references

---

## Interactive Features

### Horsepower Calculator Logic
- American muscle car models (Mustang, Camaro, Challenger, Corvette, F-150)
- Show HP and Torque gains
- Reference to cubic inches where applicable

---

## Animations

**Minimal & Purpose-Driven**:
- Hero text: Fade-in on load
- Scroll reveals: Elements fade + slide up
- Number counters: Animate HP/torque stats
- Orange glow on hover
- Smooth transitions

---

## Images

**Focus**: American muscle cars, classic and modern. V8 engines. American trucks.

**Style**: Dark, moody, dramatic lighting emphasizing power and aggression.

---

## Accessibility

- High contrast dark theme (orange on black passes WCAG AA)
- Orange focus indicators
- Semantic HTML
- Keyboard navigation

---

**Final Note**: This design celebrates American automotive heritage - the rumble of V8s, the smell of burning rubber, and the legacy of legendary American speed shops. Every pixel reinforces American muscle dominance.
