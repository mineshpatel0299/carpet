---
name: Creaticabud Carpets — Project Context
description: Luxury carpet website for Creaticabud Exports Pvt. Ltd., built with Next.js 16 + Tailwind v4 + Framer Motion
type: project
---

Full landing page built from a detailed design spec.

**Stack:** Next.js 16.2.7 (App Router, Turbopack), Tailwind CSS v4, Framer Motion, TypeScript
**Location:** `/Users/edigitify/Desktop/Edigitify Workspace/Carpet`
**Dev server:** `npm run dev` → usually runs on port 3001

**Why:** Manufacturer & exporter of handmade carpets (Agra, India) targeting international hotels, designers, and wholesale buyers.

**How to apply:** The design system is fully defined — extend by following existing token names (midnight, navy, gold, parchment, etc.) and font classes (font-display = Cormorant Garamond, font-body = Jost). All section animations use `whileInView="visible" initial="hidden" viewport={{ once: true, margin: '-80px' }}`.

**Key files:**
- `app/globals.css` — Tailwind v4 @theme tokens (colors, fonts, tracking)
- `lib/animations.ts` — shared Framer Motion variants (fadeUp, fadeIn, stagger, goldLineExpand)
- `components/ui/` — GoldRule, SectionEyebrow, GoldDiamond reusables
- `components/` — 11 page sections + Navbar/Footer
