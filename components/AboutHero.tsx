'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // Image drifts up slowly as you scroll past — parallax depth
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col lg:flex-row bg-linen overflow-hidden"
    >
      {/* Carpet corner texture — very subtle on light bg */}
      <div className="carpet-texture opacity-30" />

      {/* ─── LEFT: minimal editorial text ─── */}
      <div className="relative z-10 w-full lg:w-[44%] flex flex-col justify-center px-8 sm:px-14 lg:px-20 xl:px-28 pt-40 pb-16 lg:py-0">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="flex items-center gap-4 mb-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-10 h-px bg-gold/55"
          />
          <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">
            Est. 2010 · Bhadohi, Mirzapur & Delhi
          </span>
        </motion.div>

        {/* Headline — each line clip-reveals from behind its own mask */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-normal text-navy leading-[1.05]"
            style={{ fontSize: 'clamp(40px, 5vw, 74px)' }}
          >
            The Art of
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
            Enduring Beauty.
          </motion.h1>
        </div>

        {/* Gold ornamental rule — draws left to right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: 1.28 }}
          className="flex items-center gap-3 mt-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.28, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-14 h-px bg-gold/45"
          />
          <motion.svg
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.65, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.55 }}
            width="7" height="7" viewBox="0 0 7 7" fill="none"
          >
            <path d="M3.5 0L7 3.5L3.5 7L0 3.5Z" fill="#B88645" />
          </motion.svg>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-8 h-px bg-gold/25"
          />
        </motion.div>

      </div>

      {/* ─── RIGHT: Carpet image with cinematic curtain reveal ─── */}
      <div className="relative z-10 w-full lg:w-[56%] h-[62vw] min-h-[460px] lg:h-auto overflow-hidden">

        {/* Ken Burns: image zooms slowly out as curtain lifts */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0"
          initial={{ scale: 1.07 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        >
          <Image
            src="/images/luxury_bespoke_carpet_main.png"
            alt="Handcrafted luxury carpet by Creaticabud"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover"
          />
          {/* Very soft shadow on the left edge — merges into linen bg */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-linen via-linen/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* ──────────────────────────────────────────────────────
            THE CURTAIN — linen panel slides upward, unveiling
            the carpet. A gold shimmer line rides the bottom edge
            like a blade of light.
        ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 1.15, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-30 bg-linen pointer-events-none"
        >
          {/* Gold shimmer edge at the bottom of the curtain */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        </motion.div>

        {/* SVG corner brackets — draw in after curtain clears */}
        {/* Top-left */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute top-6 left-6 z-10 pointer-events-none">
          <motion.path
            d="M36 0 L0 0 L0 36"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        {/* Top-right */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute top-6 right-6 z-10 pointer-events-none">
          <motion.path
            d="M0 0 L36 0 L36 36"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        {/* Bottom-right */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute bottom-6 right-6 z-10 pointer-events-none">
          <motion.path
            d="M36 0 L36 36 L0 36"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        {/* Bottom-left */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
          className="absolute bottom-6 left-6 z-10 pointer-events-none">
          <motion.path
            d="M36 36 L0 36 L0 0"
            stroke="#B88645" strokeWidth="0.9" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {/* Vertical "Since 1998" edge label — fades in last */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3 pointer-events-none"
        >
          <div className="w-px h-12 bg-navy/15" />
          <span
            className="font-body text-[7px] tracking-[0.4em] uppercase text-navy/30 font-semibold"
            style={{ writingMode: 'vertical-rl' }}
          >
            Since 2010
          </span>
          <div className="w-px h-12 bg-navy/15" />
        </motion.div>

      </div>

      {/* Bottom gold hairline — draws across the full section */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gold/20 origin-left z-20"
      />

    </section>
  )
}
