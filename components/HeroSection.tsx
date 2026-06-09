'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const yArch = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const yDetail = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const opacityBgText = useTransform(scrollYProgress, [0, 0.5], [0.03, 0])

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-linen overflow-hidden flex flex-col justify-center pt-24 pb-12 lg:pt-0 lg:pb-0">
      
      {/* ─── Massive Background Typography ─── */}
      <motion.div 
        style={{ opacity: opacityBgText }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <h1 className="font-display text-[22vw] text-navy/20 whitespace-nowrap font-bold tracking-tighter select-none">
          HERITAGE
        </h1>
      </motion.div>

      <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col lg:flex-row items-center justify-between z-10">
        
        {/* ─── LEFT: Intricate Typography & Content ─── */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center mt-10 lg:mt-0 relative z-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gold"></div>
            <span className="font-body text-[9px] md:text-[11px] tracking-[0.3em] uppercase text-navy font-semibold">
              Est. 1990 — Agra, India
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[4rem] md:text-[5.5rem] xl:text-[7rem] leading-[0.9] text-navy mb-8 relative"
          >
            Woven with <br />
            <span className="relative inline-block">
              <span className="font-light text-sienna relative z-10">Heritage.</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                className="absolute bottom-2 md:bottom-4 left-0 w-full h-[3px] md:h-[5px] bg-gold/40 origin-left -z-10"
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-body text-navy/70 text-[14px] md:text-[16px] leading-[1.9] max-w-md mb-12 font-medium"
          >
            We don't just weave carpets; we craft legacies. Every knot is a testament to centuries of timeless artistry, designed for the world’s most exquisite spaces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap items-center gap-8"
          >
            <a
              href="#collections"
              className="relative group overflow-hidden bg-navy text-linen px-8 py-4 flex items-center gap-4 border border-navy hover:bg-transparent hover:text-navy transition-colors duration-500"
            >
              <span className="font-body text-[11px] tracking-[0.2em] uppercase font-bold relative z-10">
                Explore Collections
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute inset-0 bg-linen transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </a>

            <a
              href="#process"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-navy font-bold hover:text-gold transition-colors duration-300 link-underline pb-1"
            >
              Our Process
            </a>
          </motion.div>
        </div>

        {/* ─── RIGHT: Architectural Image Composition ─── */}
        <div className="w-full lg:w-[55%] h-[60vh] lg:h-[85vh] mt-16 lg:mt-0 relative flex items-center justify-end">
          
          {/* Main Arch Image */}
          <motion.div 
            style={{ y: yArch }}
            initial={{ opacity: 0, scale: 0.95, clipPath: 'inset(100% 0 0 0 rounded-t-full)' }}
            animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0 0 0 rounded-t-full)' }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[90%] md:w-[75%] h-full rounded-t-full rounded-b-[20px] overflow-hidden shadow-2xl border-[8px] border-linen bg-navy z-10"
          >
            <Image
              src="/hero_carpet_main.png"
              alt="Luxury Carpet"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/40 pointer-events-none" />
          </motion.div>

          {/* Foreground Detail Image (Overlapping) */}
          <motion.div 
            style={{ y: yDetail }}
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 bottom-10 lg:bottom-20 w-[45%] md:w-[40%] aspect-[3/4] p-2 bg-linen shadow-2xl z-20"
          >
            <div className="relative w-full h-full overflow-hidden border border-gold/30">
              <Image
                src="/hero_carpet_detail.png"
                alt="Carpet Detail"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center scale-[1.5] origin-bottom-left"
              />
              <div className="absolute inset-0 bg-navy/10 pointer-events-none mix-blend-multiply" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}


