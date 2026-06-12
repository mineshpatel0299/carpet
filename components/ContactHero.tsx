'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col lg:flex-row bg-linen overflow-hidden"
    >
      <div className="carpet-texture opacity-30" />

      {/* ─── LEFT: Living-room image with curtain dropping downward ─── */}
      <div className="relative z-10 w-full lg:w-[56%] h-[62vw] min-h-[460px] lg:h-auto overflow-hidden order-2 lg:order-1">

        {/* Ken Burns — same slow pull-back as About */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0"
          initial={{ scale: 1.07 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        >
          <Image
            src="/hero-living-room.png"
            alt="Luxury interior furnished with a Creaticabud carpet"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover object-center"
          />
          {/* Right-edge blend into text panel */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-linen via-linen/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* ──────────────────────────────────────────────────────────
            THE CURTAIN — linen panel drops downward, revealing
            the room from the top. Gold shimmer rides the leading
            (top) edge as it descends.
        ────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '100%' }}
          transition={{ duration: 1.15, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-30 bg-linen pointer-events-none"
        >
          {/* Gold shimmer at the top — leading edge as curtain falls */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        </motion.div>

        {/* SVG corner brackets — draw in after curtain clears */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute top-6 left-6 z-10 pointer-events-none">
          <motion.path d="M36 0 L0 0 L0 36"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.25, ease: [0.22, 1, 0.36, 1] }} />
        </svg>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute top-6 right-6 z-10 pointer-events-none">
          <motion.path d="M0 0 L36 0 L36 36"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.35, ease: [0.22, 1, 0.36, 1] }} />
        </svg>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute bottom-6 left-6 z-10 pointer-events-none">
          <motion.path d="M0 0 L0 36 L36 36"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }} />
        </svg>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute bottom-6 right-6 z-10 pointer-events-none">
          <motion.path d="M36 36 L36 0 L0 0"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] }} />
        </svg>

        {/* Vertical "Agra · India" edge label — fades in last */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3 pointer-events-none"
        >
          <div className="w-px h-12 bg-navy/15" />
          <span
            className="font-body text-[7px] tracking-[0.4em] uppercase text-navy/30 font-semibold"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
          >
            Bhadohi · Mirzapur · Delhi
          </span>
          <div className="w-px h-12 bg-navy/15" />
        </motion.div>

      </div>

      {/* ─── RIGHT: Minimal editorial text ─── */}
      <div className="relative z-10 w-full lg:w-[44%] flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 pt-40 pb-16 lg:py-0 order-1 lg:order-2">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">
            The Atelier
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-10 h-px bg-gold/55"
          />
        </motion.div>

        {/* Headline — clip reveals, text enters from right panel */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-normal text-navy leading-[1.05]"
            style={{ fontSize: 'clamp(40px, 5vw, 74px)' }}
          >
            Let's Create
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 1.04, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-gold leading-[1.05]"
            style={{ fontSize: 'clamp(40px, 5vw, 74px)' }}
          >
            Something
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 1.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-gold leading-[1.05]"
            style={{ fontSize: 'clamp(40px, 5vw, 74px)' }}
          >
            Remarkable.
          </motion.h1>
        </div>

        {/* Gold ornamental rule — draws right to left (origin-right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: 1.38 }}
          className="flex items-center gap-3 mt-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.38, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-8 h-px bg-gold/25"
          />
          <motion.svg
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.65, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.62 }}
            width="7" height="7" viewBox="0 0 7 7" fill="none"
          >
            <path d="M3.5 0L7 3.5L3.5 7L0 3.5Z" fill="#B88645" />
          </motion.svg>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.42, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-14 h-px bg-gold/45"
          />
        </motion.div>

      </div>

      {/* Bottom gold hairline across full section */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gold/20 origin-left z-20"
      />

    </section>
  )
}
