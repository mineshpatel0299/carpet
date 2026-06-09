'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

function LogoMark() {
  return (
    <div className="flex justify-start mb-10">
      <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 10L75 25L60 40L45 25L60 10Z" fill="#1A253A"/>
        <path d="M110 60L95 45L80 60L95 75L110 60Z" fill="#1A253A"/>
        <path d="M60 110L45 95L60 80L75 95L60 110Z" fill="#1A253A"/>
        <path d="M10 60L25 75L40 60L25 45L10 60Z" fill="#1A253A"/>
        <path d="M60 45L65 55L75 60L65 65L60 75L55 65L45 60L55 55L60 45Z" fill="#B88645"/>
        <rect x="42" y="42" width="10" height="10" fill="#A84030"/>
        <rect x="68" y="42" width="10" height="10" fill="#A84030"/>
        <rect x="42" y="68" width="10" height="10" fill="#A84030"/>
        <rect x="68" y="68" width="10" height="10" fill="#A84030"/>
        <path d="M60 0L80 20L60 20L60 0Z" fill="#A84030"/>
        <path d="M60 0L40 20L60 20L60 0Z" fill="#A84030"/>
        <path d="M60 120L80 100L60 100L60 120Z" fill="#A84030"/>
        <path d="M60 120L40 100L60 100L60 120Z" fill="#A84030"/>
        <path d="M120 60L100 80L100 60L120 60Z" fill="#1A253A"/>
        <path d="M120 60L100 40L100 60L120 60Z" fill="#1A253A"/>
        <path d="M0 60L20 80L20 60L0 60Z" fill="#1A253A"/>
        <path d="M0 60L20 40L20 60L0 60Z" fill="#1A253A"/>
      </svg>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-ivory flex flex-col lg:flex-row overflow-hidden">
      
      {/* ─── LEFT: Editorial Typography (Ivory Background) ─── */}
      <div className="relative w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center px-8 sm:px-16 lg:px-20 xl:px-28 py-24 lg:py-0 z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <LogoMark />

          <h3 className="font-body text-[10px] md:text-xs tracking-[0.4em] text-navy/60 uppercase font-semibold mb-6">
            Creaticabud Carpets
          </h3>

          <h1 className="font-display text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] text-navy mb-8">
            Woven with <br />
            <span className="text-sienna">Heritage.</span>
          </h1>

          <p className="font-body text-navy/70 text-[14px] md:text-[15px] leading-[2.1] font-light max-w-sm mb-12">
            A family-owned manufacturer based in Agra. We craft the world's finest hand-knotted carpets, bringing centuries of artistry into modern spaces.
          </p>
          
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            href="#collections"
            className="group/btn inline-flex items-center gap-5"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-navy/20 group-hover/btn:border-gold transition-colors duration-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-navy group-hover/btn:text-gold transition-colors duration-500">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="font-body text-[11px] tracking-[0.25em] uppercase text-navy font-semibold group-hover/btn:text-gold transition-colors duration-500">
              Discover Collections
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* ─── RIGHT: Full-Bleed Imagery ─── */}
      <div className="relative w-full lg:w-[55%] xl:w-[60%] min-h-[50vh] lg:min-h-screen overflow-hidden bg-navy">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
             src="/hero_carpet.png"
             alt="Luxury Hand-Knotted Carpet"
             fill
             priority
             sizes="(max-width: 1024px) 100vw, 60vw"
             className="object-cover object-center"
          />
        </motion.div>
        
        {/* Subtle overlay to ensure the image feels rich and luxurious */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-navy/10 pointer-events-none" />
      </div>

    </section>
  )
}
