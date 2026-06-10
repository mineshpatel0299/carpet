'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

// Icon 1: Unique Design (Rotating sacred geometry / mandala)
function UniqueDesignIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      {/* Outer rotating ring */}
      <motion.circle
        cx="24"
        cy="24"
        r="20"
        stroke="#B88645"
        strokeWidth="1"
        strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      />
      {/* Inner counter-rotating octagon */}
      <motion.polygon
        points="24,8 35.3,12.7 40,24 35.3,35.3 24,40 12.7,35.3 8,24 12.7,12.7"
        stroke="#B88645"
        strokeWidth="1.2"
        variants={{
          initial: { rotate: 0, scale: 0.9 },
          hover: { rotate: -45, scale: 1.05 }
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      {/* Central diamond star */}
      <motion.path
        d="M24 14 L27 21 L34 24 L27 27 L24 34 L21 27 L14 24 L21 21 Z"
        fill="#B88645"
        variants={{
          initial: { scale: 1, opacity: 0.8 },
          hover: { scale: [1, 1.25, 1], opacity: 1 }
        }}
        transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
      {/* Micro-sparkle */}
      <motion.circle
        cx="24"
        cy="24"
        r="2"
        fill="#0E1B2D"
      />
    </svg>
  )
}

// Icon 2: Durability (Endless weaver's knot with flowing thread)
function DurabilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      {/* Outer shield boundary */}
      <motion.path
        d="M12 8 L24 4 L36 8 V22 C36 31 24 40 24 40 C24 40 12 31 12 22 Z"
        stroke="#B88645"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      {/* Endless knot loop with animated dash */}
      <motion.path
        d="M24 12 C18 18 14 22 24 32 C34 22 30 18 24 12 Z M24 12 C30 18 34 22 24 32 C14 22 18 18 24 12 Z"
        stroke="#B88645"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          strokeDashoffset: [0, -32],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        }}
        style={{ strokeDasharray: '8 4' }}
      />
      {/* Pulsing center knot intersection */}
      <motion.circle
        cx="24"
        cy="22"
        r="3"
        fill="#B88645"
        variants={{
          initial: { scale: 0.9 },
          hover: { scale: 1.3 }
        }}
        transition={{ duration: 0.4 }}
      />
    </svg>
  )
}

// Icon 3: Comfort (Floating feather with gentle wind ripples)
function ComfortIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      {/* Wind ripples behind the feather */}
      <motion.path
        d="M8 32 C 16 30, 20 34, 40 32"
        stroke="#B88645"
        strokeWidth="0.8"
        strokeOpacity="0.25"
        strokeLinecap="round"
        animate={{ x: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />
      <motion.path
        d="M12 38 C 20 36, 24 40, 36 38"
        stroke="#B88645"
        strokeWidth="0.8"
        strokeOpacity="0.15"
        strokeLinecap="round"
        animate={{ x: [2, -2, 2] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      />
      {/* Floating Feather */}
      <motion.g
        animate={{
          y: [0, -4, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
        }}
      >
        {/* Main Shaft */}
        <motion.path
          d="M14 36 C 20 28, 28 16, 36 12"
          stroke="#B88645"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Feather Vanes (Detailed Paths) */}
        <motion.path
          d="M36 12 C 30 14, 26 18, 22 24 C 20 27, 18 31, 16 34"
          stroke="#B88645"
          strokeWidth="1"
          strokeLinecap="round"
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: 2 }
          }}
        />
        <motion.path
          d="M36 12 C 34 16, 32 20, 28 26 C 26 29, 23 32, 20 35"
          stroke="#B88645"
          strokeWidth="1"
          strokeLinecap="round"
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: -2 }
          }}
        />
        {/* Soft fluff at base */}
        <circle cx="16" cy="33" r="1.5" fill="#B88645" opacity="0.6" />
        <circle cx="18" cy="31" r="1" fill="#B88645" opacity="0.4" />
      </motion.g>
    </svg>
  )
}

// Icon 4: Versatility (Expanding layered prisms)
function VersatilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      {/* Rotating outer frame */}
      <motion.rect
        x="10"
        y="10"
        width="28"
        height="28"
        rx="2"
        stroke="#B88645"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: 90 }
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      {/* Interactive geometric prisms */}
      <motion.g
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Central diamond */}
        <motion.path
          d="M24 12 L33 24 L24 36 L15 24 Z"
          stroke="#B88645"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Orbiting diamonds that expand and contract */}
        <motion.path
          d="M24 4 L27 9 L24 14 L21 9 Z"
          stroke="#B88645"
          strokeWidth="1"
          fill="#B88645"
          fillOpacity="0.2"
          variants={{
            initial: { y: 0, opacity: 0.5 },
            hover: { y: -3, opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M24 34 L27 39 L24 44 L21 39 Z"
          stroke="#B88645"
          strokeWidth="1"
          fill="#B88645"
          fillOpacity="0.2"
          variants={{
            initial: { y: 0, opacity: 0.5 },
            hover: { y: 3, opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M14 24 L9 27 L4 24 L9 21 Z"
          stroke="#B88645"
          strokeWidth="1"
          fill="#B88645"
          fillOpacity="0.2"
          variants={{
            initial: { x: 0, opacity: 0.5 },
            hover: { x: -3, opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M34 24 L39 27 L44 24 L39 21 Z"
          stroke="#B88645"
          strokeWidth="1"
          fill="#B88645"
          fillOpacity="0.2"
          variants={{
            initial: { x: 0, opacity: 0.5 },
            hover: { x: 3, opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.g>
    </svg>
  )
}

// Icon 5: Sustainability (Growing organic branch & rising energy loop)
function SustainabilityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="relative z-10">
      {/* Energy aura rings */}
      <motion.circle
        cx="24"
        cy="26"
        r="14"
        stroke="#B88645"
        strokeWidth="0.8"
        strokeDasharray="3 6"
        strokeOpacity="0.3"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      />
      {/* Branch Group with slow sway */}
      <motion.g
        animate={{
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: '24px 38px' }}
      >
        {/* Stem */}
        <motion.path
          d="M24 38 V14"
          stroke="#B88645"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Left Leaf */}
        <motion.path
          d="M24 28 C 18 26, 14 20, 16 16 C 18 16, 22 22, 24 24"
          stroke="#B88645"
          strokeWidth="1.2"
          fill="#B88645"
          fillOpacity="0.1"
          variants={{
            initial: { scale: 0.95 },
            hover: { scale: 1.15 }
          }}
          transition={{ duration: 0.4 }}
        />
        {/* Right Leaf */}
        <motion.path
          d="M24 22 C 30 20, 34 14, 32 10 C 30 10, 26 16, 24 18"
          stroke="#B88645"
          strokeWidth="1.2"
          fill="#B88645"
          fillOpacity="0.1"
          variants={{
            initial: { scale: 0.95 },
            hover: { scale: 1.15 }
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.g>
    </svg>
  )
}

const benefits = [
  {
    num: '01',
    roman: 'I',
    title: 'Individual Masterpiece',
    desc: 'Each rug is an original creation born from an artisan’s hand, possessing subtle, organic variations in design and pattern that mechanical looms can never replicate.',
    icon: UniqueDesignIcon
  },
  {
    num: '02',
    roman: 'II',
    title: 'Generational Heirloom',
    desc: 'Hand-knotted with double-weft tension and high-density weaves, these carpets are built to endure heavy footfall and mature gracefully over decades of family life.',
    icon: DurabilityIcon
  },
  {
    num: '03',
    roman: 'III',
    title: 'Sensory Indulgence',
    desc: 'Crafted with pure Himalayan wool and raw mulberry silk, providing unmatched plushness underfoot while offering natural thermal and acoustic insulation.',
    icon: ComfortIcon
  },
  {
    num: '04',
    roman: 'IV',
    title: 'Architectural Harmony',
    desc: 'From anchoring a formal salon to softening a modernist gallery, our rugs adapt effortlessly to diverse spatial aesthetics, lighting conditions, and structural scales.',
    icon: VersatilityIcon
  },
  {
    num: '05',
    roman: 'V',
    title: 'Eco-Conscious Heritage',
    desc: 'Made using biodegradable organic fibers, natural plant-based dyes, and zero-carbon hand weaving techniques that preserve both local communities and the Earth.',
    icon: SustainabilityIcon
  }
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-linen py-24 md:py-36 overflow-hidden relative">
      {/* Background texture layers */}
      <div className="carpet-texture opacity-30 pointer-events-none" />
      <div className="grain-layer opacity-15" />

      {/* Subtle gold bloom ambient light */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(184, 134, 69, 0.04) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">

        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold/30" />
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-gold font-semibold">
              The Intrinsic Value
            </span>
            <div className="w-10 h-px bg-gold/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display font-normal text-[32px] md:text-[48px] lg:text-[56px] leading-[1.1] text-navy mb-6"
          >
            The Virtues of <span className="text-gold italic">Hand-Knotted</span> Artistry
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-body text-[14px] leading-[1.9] text-navy/70 max-w-2xl mx-auto"
          >
            Unlike mechanical duplicates, a handmade rug represents a preservation of cultural history,
            natural materials, and individual dedication. Explore the benefits of acquiring a true living heirloom.
          </motion.p>
        </div>

        {/* Cards Layout using flex-wrap to automatically center the bottom row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover="hover"
                className="group relative bg-white/50 backdrop-blur-md border border-gold/15 p-8 md:p-10 rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-700 hover:border-gold/45 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(184,134,69,0.06)] cursor-default w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] flex flex-col justify-between"
              >
                {/* Expanding Top Accent Gold Line */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                  variants={{
                    initial: { width: 0 },
                    hover: { width: '100%' }
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />

                {/* Luxury Corner Brackets */}
                <div className="absolute inset-4 pointer-events-none border border-transparent transition-all duration-700">
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-gold/0 group-hover:border-gold/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-gold/0 group-hover:border-gold/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-gold/0 group-hover:border-gold/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-gold/0 group-hover:border-gold/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                </div>

                <div>
                  {/* Card Header (Icon & Roman Numeral Serial) */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="relative">
                      {/* Ambient light pool behind icon */}
                      <div className="absolute -inset-4 rounded-full bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-gold/10 flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-500">
                        <Icon />
                      </div>
                    </div>

                    <span className="font-display text-gold/20 group-hover:text-gold/45 transition-colors duration-500 text-3xl font-light select-none tracking-widest">
                      {benefit.roman}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display text-xl md:text-2xl text-navy mb-4 group-hover:text-gold transition-colors duration-400 relative z-10">
                    {benefit.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-body text-[13px] md:text-[14.5px] leading-[1.8] text-navy/70 group-hover:text-navy/90 transition-colors duration-400 relative z-10">
                    {benefit.desc}
                  </p>
                </div>

                {/* Subtle Luxury Learn More / Weaving Detail Indicator at bottom */}
                <div className="mt-8 pt-6 border-t border-gold/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-body text-[8px] tracking-[0.3em] uppercase text-gold/60">
                    Heritage Craft
                  </span>
                  <span className="text-gold text-xs group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
