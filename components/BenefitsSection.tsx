'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

// Icon 1: Unique Design (Minimalist Crest with Rotating Star)
function UniqueDesignIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      <motion.rect
        x="12" y="12" width="24" height="24" rx="2"
        stroke="#B88645" strokeWidth="0.8" strokeOpacity="0.5"
        animate={{ rotate: 45 }}
        transition={{ duration: 0 }}
      />
      <motion.rect
        x="14" y="14" width="20" height="20" rx="1"
        stroke="#B88645" strokeWidth="0.5" strokeOpacity="0.8"
        animate={{ rotate: 45 }}
        transition={{ duration: 0 }}
      />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "24px 24px" }}
      >
        <path d="M24 16 L25 23 L32 24 L25 25 L24 32 L23 25 L16 24 L23 23 Z" fill="#B88645" opacity="0.9" />
      </motion.g>
    </svg>
  )
}

// Icon 2: Durability (Elegant Hourglass / Infinity Knot)
function DurabilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      <motion.path
        d="M16 12 H32 L26 24 L32 36 H16 L22 24 Z"
        stroke="#B88645" strokeWidth="0.8" strokeOpacity="0.7"
      />
      <motion.path
        d="M20 12 L24 24 L20 36"
        stroke="#B88645" strokeWidth="0.5" strokeOpacity="0.5"
      />
      <motion.path
        d="M28 12 L24 24 L28 36"
        stroke="#B88645" strokeWidth="0.5" strokeOpacity="0.5"
      />
      <motion.circle
        cx="24" cy="24" r="2" fill="#B88645"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  )
}

// Icon 3: Comfort (Layered Arches / Lotus)
function ComfortIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      <motion.path
        d="M12 32 C 12 24, 20 18, 24 14 C 28 18, 36 24, 36 32"
        stroke="#B88645" strokeWidth="0.8" strokeOpacity="0.8"
        fill="none"
      />
      <motion.path
        d="M16 32 C 16 26, 20 22, 24 18 C 28 22, 32 26, 32 32"
        stroke="#B88645" strokeWidth="0.5" strokeOpacity="0.5"
        fill="none"
      />
      <motion.path
        d="M20 32 C 20 28, 22 26, 24 22 C 26 26, 28 28, 28 32"
        stroke="#B88645" strokeWidth="0.5" strokeOpacity="0.3"
        fill="none"
      />
      <motion.circle cx="24" cy="32" r="1.5" fill="#B88645" />
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="24" cy="10" r="1" fill="#B88645" opacity="0.6" />
      </motion.g>
    </svg>
  )
}

// Icon 4: Versatility (Interlocking Armillary Spheres)
function VersatilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      <motion.ellipse
        cx="24" cy="24" rx="14" ry="6"
        stroke="#B88645" strokeWidth="0.8" strokeOpacity="0.7"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "24px 24px" }}
      />
      <motion.ellipse
        cx="24" cy="24" rx="6" ry="14"
        stroke="#B88645" strokeWidth="0.8" strokeOpacity="0.7"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "24px 24px" }}
      />
      <circle cx="24" cy="24" r="14" stroke="#B88645" strokeWidth="0.4" strokeOpacity="0.3" strokeDasharray="2 2" />
      <circle cx="24" cy="24" r="2" fill="#B88645" />
    </svg>
  )
}

// Icon 5: Sustainability (Minimalist Leaf in Circle)
function SustainabilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      <circle cx="24" cy="24" r="16" stroke="#B88645" strokeWidth="0.5" strokeOpacity="0.5" />
      <motion.path
        d="M24 34 V16"
        stroke="#B88645" strokeWidth="1" strokeLinecap="round"
      />
      <motion.path
        d="M24 28 C 18 26, 16 22, 18 18 C 20 18, 24 22, 24 24"
        fill="#B88645" fillOpacity="0.2" stroke="#B88645" strokeWidth="0.8"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "24px 28px" }}
      />
      <motion.path
        d="M24 22 C 30 20, 32 16, 30 12 C 28 12, 24 16, 24 18"
        fill="#B88645" fillOpacity="0.2" stroke="#B88645" strokeWidth="0.8"
        animate={{ rotate: [2, -2, 2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "24px 22px" }}
      />
    </svg>
  )
}

const benefits = [
  {
    num: '01',
    roman: 'I',
    title: 'Unique Design',
    desc: 'Created by skilled artisans pouring creativity into each piece. This results in a unique, machine-unreplicable design, ensuring you receive a one-of-a-kind conversation starter.',
    icon: UniqueDesignIcon,
    image: '/images/benefits/masterpiece.png',
    color: '#B88645'
  },
  {
    num: '02',
    roman: 'II',
    title: 'Durability',
    desc: 'Crafted with high-quality materials and traditional techniques to ensure lasting durability. They withstand heavy foot traffic for decades, making them a true long-term investment.',
    icon: DurabilityIcon,
    image: '/images/benefits/heirloom.png',
    color: '#B88645'
  },
  {
    num: '03',
    roman: 'III',
    title: 'Comfort',
    desc: 'Made using natural materials like pure wool, silk, and cotton for a comfortable, plush feel underfoot, alongside insulating properties to retain warmth.',
    icon: ComfortIcon,
    image: '/images/benefits/sensory.png',
    color: '#B88645'
  },
  {
    num: '04',
    roman: 'IV',
    title: 'Versatility',
    desc: 'Available in a variety of styles, colors, and sizes. Perfect as a focal point in a living room, or to add rich texture and warmth to an entryway or master suite.',
    icon: VersatilityIcon,
    image: '/images/benefits/architecture.png',
    color: '#B88645'
  },
  {
    num: '05',
    roman: 'V',
    title: 'Sustainability',
    desc: 'Woven using traditional, generational techniques. Crafted with natural materials and sustainable processes to minimize environmental impact and support an eco-friendly future.',
    icon: SustainabilityIcon,
    image: '/images/benefits/eco.png',
    color: '#B88645'
  }
]

import { StackedCards } from './ui/glass-cards'

export default function BenefitsSection() {
  const cardsData = benefits.map((b, idx) => ({
    id: b.num,
    title: b.title,
    description: b.desc,
    color: b.color,
    icon: b.icon,
    roman: b.roman,
    image: b.image
  }));

  return (
    <section id="benefits" className="bg-linen relative">
      {/* Background texture layers fixed to viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <div className="carpet-texture opacity-80" />
        <div className="grain-layer opacity-15" />
        {/* Subtle gold bloom ambient light */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(184, 134, 69, 0.04) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 relative z-10 -mt-[100vh]">
        <StackedCards 
            cards={cardsData} 
            subtitle="The Intrinsic Value"
            title={
                <>The Virtues of <span className="text-gold italic">Hand-Knotted</span> Artistry</>
            }
        />
      </div>
    </section>
  )
}
