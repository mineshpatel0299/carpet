'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

function LogoMark() {
  return (
    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10L75 25L60 40L45 25L60 10Z" fill="#0E1B2D"/>
      <path d="M110 60L95 45L80 60L95 75L110 60Z" fill="#0E1B2D"/>
      <path d="M60 110L45 95L60 80L75 95L60 110Z" fill="#0E1B2D"/>
      <path d="M10 60L25 75L40 60L25 45L10 60Z" fill="#0E1B2D"/>
      <path d="M60 45L65 55L75 60L65 65L60 75L55 65L45 60L55 55L60 45Z" fill="#B88645"/>
      <rect x="42" y="42" width="10" height="10" fill="#A84030"/>
      <rect x="68" y="42" width="10" height="10" fill="#A84030"/>
      <rect x="42" y="68" width="10" height="10" fill="#A84030"/>
      <rect x="68" y="68" width="10" height="10" fill="#A84030"/>
      <path d="M60 0L80 20L60 20L60 0Z" fill="#A84030"/>
      <path d="M60 0L40 20L60 20L60 0Z" fill="#A84030"/>
      <path d="M60 120L80 100L60 100L60 120Z" fill="#A84030"/>
      <path d="M60 120L40 100L60 100L60 120Z" fill="#A84030"/>
    </svg>
  )
}

function DiamondCluster({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-[4px] w-fit ${className}`}>
      <div className="w-[6px] h-[6px] bg-gold rotate-45"></div>
      <div className="w-[6px] h-[6px] bg-gold rotate-45"></div>
      <div className="w-[6px] h-[6px] bg-gold rotate-45"></div>
      <div className="w-[6px] h-[6px] bg-gold rotate-45"></div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F9F6F0] overflow-hidden flex flex-col md:flex-row">
      
      {/* ─── Background SVG S-Curve ─── */}
      <div className="absolute inset-y-0 left-0 w-[150vw] md:w-[65vw] lg:w-[60vw] h-full z-0 pointer-events-none drop-shadow-2xl">
        <svg className="w-full h-full" preserveAspectRatio="xMinYMid slice" viewBox="0 0 800 1000">
          <path d="M0,0 L480,0 C220,350 700,650 350,1000 L0,1000 Z" fill="#0E1B2D" />
          <path d="M480,0 C220,350 700,650 350,1000" fill="none" stroke="#B88645" strokeWidth="6" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto min-h-screen flex flex-col md:flex-row pt-20 md:pt-0">
        
        {/* ─── LEFT NAVY SECTION (Text Content) ─── */}
        <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:pl-12 lg:pl-20 md:pr-12 py-16 md:py-0">
          
          <DiamondCluster className="mb-10" />

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] text-linen mb-8"
          >
            Woven with <br />
            <span className="text-gold">Heritage.</span>
          </motion.h1>

          <DiamondCluster className="mb-8 opacity-50" />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-body text-linen/90 text-[14px] md:text-[15px] leading-[1.9] max-w-[340px] font-light mb-12"
          >
            <span className="font-semibold text-gold tracking-widest uppercase text-[11px] block mb-4">
              Est. 1990 — Agra, India
            </span>
            We don't just weave carpets; we craft legacies. Every knot is a testament to centuries of timeless artistry, designed for the world’s most exquisite spaces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a href="#collections" className="bg-gold text-navy px-8 py-4 font-body text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-linen transition-colors w-full sm:w-auto text-center">
              Explore Collections
            </a>
            <a href="#process" className="px-8 py-4 font-body text-[11px] tracking-[0.2em] uppercase font-bold text-gold border border-gold hover:bg-gold hover:text-navy transition-colors w-full sm:w-auto text-center">
              Our Process
            </a>
          </motion.div>
        </div>

        {/* ─── RIGHT LINEN SECTION (Image) ─── */}
        <div className="w-full md:w-[55%] flex flex-col justify-center items-center relative min-h-[50vh] md:min-h-screen py-16 md:py-0 px-6 md:px-12 lg:px-20">
          
          {/* Main Carpet Image beautifully fitted */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[65vh] md:h-[75vh] rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl z-10"
          >
            {/* Inner Gold Border */}
            <div className="absolute inset-0 border-[6px] border-gold rounded-[30px] md:rounded-[60px] z-20 pointer-events-none opacity-80 mix-blend-overlay"></div>
            
            <Image
              src="/hero_carpet_main.png"
              alt="Luxury Carpet"
              fill
              priority
              className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
            />
          </motion.div>

          {/* Floating detail accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring", stiffness: 60 }}
            className="absolute left-0 lg:left-4 bottom-[15%] w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full border-[6px] border-linen overflow-hidden shadow-2xl z-30 hidden md:block"
          >
            <Image
              src="/hero_carpet_detail.png"
              alt="Carpet Detail"
              fill
              className="object-cover scale-[1.3]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}



