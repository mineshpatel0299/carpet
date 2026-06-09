---
name: Creaticabud Carpets — Project Context
description: Luxury carpet website for Creaticabud Exports Pvt. Ltd., built with Next.js 16 + Tailwind v4 + Framer Motion
type: project
---

Full landing page, comprehensively redesigned to an editorial/immersive premium aesthetic in June 2026.

**Stack:** Next.js 16.2.7 (App Router, Turbopack), Tailwind CSS v4, Framer Motion, TypeScript
**Location:** `/Users/edigitify/Desktop/Edigitify Workspace/Carpet`
**Dev server:** `npm run dev` → usually runs on port 3001

**Why:** Manufacturer & exporter of handmade carpets (Agra, India) targeting international hotels, designers, and wholesale buyers.

**How to apply:** The design system is fully defined — extend by following existing token names (midnight, navy, gold, parchment, etc.) and font classes (font-display = Cormorant Garamond, font-body = Jost). All section animations use `whileInView="visible" initial="hidden" viewport={{ once: true, margin: '-80px' }}`.

**Brand identity:** Diamond/medallion SVG logo (navy+terracotta+gold quadrants), taglines "Timeless Craftsmanship. Enduring Beauty." / "Crafted with Passion. Made for Life." / "Rooted in Tradition. Crafted for Generations." Website: www.creaticabudcarpets.com

**Design system post-redesign:** Navbar = floating, transparent, diamond logo + underline-hover links. Hero CTA = animated text-link (not solid button). Heritage section = full-viewport asymmetric editorial with oversized stacked serif. Collections = CSS gridTemplateAreas asymmetric gallery (a/b/c/d/e layout). ProcessSteps repurposed as "Curated Excellence" featured products. WhyUs now ends with 4-pillar strip (Premium Quality, Ethical Production, Global Reach, Sustainable Living). Footer has "Rooted in Tradition / Crafted for Generations" strip.

**Key files:**
- `app/globals.css` — Tailwind v4 @theme tokens (colors, fonts, tracking) + scrollbar-hide, link-underline, animate-fade-up utilities
- `lib/animations.ts` — shared Framer Motion variants (fadeUp, fadeIn, stagger, etc.)
- `components/ui/` — GoldRule, SectionEyebrow, GoldDiamond reusables
- `components/` — 11 page sections + Navbar/Footer
