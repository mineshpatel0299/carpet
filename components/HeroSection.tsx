'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[800px] bg-ivory overflow-hidden flex flex-col lg:flex-row">

      {/* ─── Left Side: Editorial Typography ─── */}
      <div className="relative z-20 w-full lg:w-[45%] h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-28 bg-gradient-to-br from-ivory to-parchment shadow-[20px_0_50px_rgba(14,27,45,0.05)]">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10"
        >
          {/* ── Luxury Brand Crest & Eyebrow ── */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-gold/50 via-gold/15 to-gold/60 shadow-[0_10px_30px_rgba(197,160,89,0.2)] transition-all duration-700 hover:scale-105 hover:rotate-6">
              <div className="w-full h-full rounded-full bg-ivory p-2 flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/djicxkd9u/image/upload/v1781000366/gg_djnpjf.png"
                  alt="Creaticabud Logo"
                  className="w-full h-full object-contain rounded-full"
                  draggable={false}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-body text-[11px] sm:text-[12px] tracking-[0.45em] uppercase text-gold font-bold leading-none">
                Creaticabud
              </span>
              <span className="font-body text-[9.5px] sm:text-[10px] tracking-[0.25em] uppercase text-navy/55 font-semibold leading-none mt-0.5">
                Heritage Hand-Knotted
              </span>
            </div>
          </div>

          <h1 className="font-display font-normal text-[56px] sm:text-[74px] lg:text-[84px] leading-[1.05] text-navy mb-8 tracking-[-0.02em]">
            Woven with <br />
            <span className="font-semibold text-gold block transition-colors duration-500 hover:text-navy">
              Creaticabud.
            </span>
          </h1>

          <p className="font-body text-navy/70 text-[15px] sm:text-[16px] leading-[2.1] font-light mb-12 max-w-md">
            We do not simply manufacture carpets; we craft legacies. Every knot is a testament to centuries of timeless artistry, designed exclusively for the world’s most spectacular spaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#collections"
              className="group relative inline-flex items-center justify-center bg-navy text-linen px-10 py-5 font-body text-[10px] tracking-[0.3em] uppercase font-semibold overflow-hidden transition-all duration-500 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
              <span className="relative z-10 group-hover:text-navy transition-colors duration-500">Explore Collections</span>
            </a>

            <a
              href="#process"
              className="inline-flex items-center gap-4 group/cta"
            >
              <span className="block w-6 h-px bg-navy/40 transition-all duration-500 group-hover/cta:w-12 group-hover/cta:bg-gold" />
              <span className="font-body font-semibold text-[10px] tracking-[0.3em] uppercase text-navy transition-colors duration-300 group-hover/cta:text-gold">
                Discover the Craft
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ─── Right Side: Cinematic Image ─── */}
      <div className="relative z-10 w-full lg:w-[55%] h-full hidden lg:block overflow-hidden bg-stone">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/hero-living-room.png"
            alt="Ultra Luxury Living Room with Center Carpet"
            fill
            priority
            className="object-cover object-left"
          />
        </motion.div>

        {/* Subtle inner shadow to blend the edge */}
        <div className="absolute inset-0 shadow-[inset_40px_0_60px_-20px_rgba(243,239,230,1)] pointer-events-none" />
      </div>

    </section>
  )
}
