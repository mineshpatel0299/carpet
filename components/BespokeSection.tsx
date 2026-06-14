'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BespokeSection() {
  return (
    <section
      id="heritage-bespoke"
      className="relative bg-linen text-navy py-16 sm:py-32 lg:py-48 overflow-hidden"
    >
      <div className="carpet-texture opacity-60" />

      <div className="max-w-[1500px] mx-auto px-5 sm:px-12 lg:px-20 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* LEFT COLUMN: Narrative & Aesthetic Specs */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1 space-y-8 lg:space-y-12">

            {/* Header */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-body text-[7px] md:text-[8.5px] tracking-[0.35em] md:tracking-[0.5em] uppercase text-gold block mb-3 md:mb-4 font-semibold"
              >
                The Creaticabud
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-normal text-[30px] sm:text-[50px] lg:text-[56px] leading-[1.05] text-navy"
              >
                Without <br />
                <span className="text-gold">Compromise.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-body font-light text-[13px] sm:text-[15px] leading-[1.9] sm:leading-[2.1] text-navy/70 mt-5 sm:mt-8 max-w-md"
              >
                True luxury is defined by absolute choice. From the hand-carded Himalayan wool to the exact dimensions of your space, every element is curated by you and woven by our master artisans in Badohi.
              </motion.p>
            </div>

            {/* Minimalist Spec List - Desktop Only */}
            <div className="hidden lg:block space-y-4 md:space-y-6 pt-2 md:pt-4 max-w-sm">
              {[
                { label: 'Custom Proportions', value: 'Up to 18×24 ft' },
                { label: 'Material Library', value: 'Silk, Wool, Bamboo' },
                { label: 'Color Matching', value: 'Organic Pigments' },
                { label: 'Motif Translation', value: 'Bespoke Patterns' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1) }}
                  className="border-b border-navy/10 pb-3 md:pb-4 flex justify-between items-end group cursor-default"
                >
                  <span className="font-display text-[15px] md:text-[18px] text-navy group-hover:text-gold transition-colors duration-500">
                    {item.label}
                  </span>
                  <span className="font-body text-[8px] md:text-[9px] tracking-[0.15em] md:tracking-[0.2em] text-navy/40 uppercase font-semibold">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Luxury Spec Grid - Mobile Only */}
            <div className="grid lg:hidden grid-cols-2 gap-x-6 gap-y-4 pt-2">
              {[
                { label: 'Custom Proportions', value: 'Up to 18×24 ft' },
                { label: 'Material Library', value: 'Silk, Wool, Bamboo' },
                { label: 'Color Matching', value: 'Organic Pigments' },
                { label: 'Motif Translation', value: 'Bespoke Patterns' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + (idx * 0.08) }}
                  className="border-l border-gold/40 pl-3 py-1 cursor-default"
                >
                  <p className="font-body text-[8px] tracking-[0.15em] uppercase text-navy/40 mb-1 font-semibold">{item.label}</p>
                  <p className="font-display text-[14px] text-navy font-semibold leading-tight">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-3 md:pt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-4 group/cta"
              >
                <span className="block w-7 h-px bg-gold transition-all duration-500 group-hover/cta:w-14" />
                <span className="font-body font-semibold text-[9.5px] tracking-[0.35em] uppercase text-navy transition-colors duration-300 group-hover/cta:text-gold">
                  Initiate Commission
                </span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Asymmetric Collage & Stats */}
          <div className="w-full lg:w-[50%] relative order-1 lg:order-2 flex lg:justify-end justify-center">

            {/* ── MOBILE IMAGE BLOCK ── */}
            <div className="block lg:hidden w-full relative mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[1.3] z-10"
              >
                {/* Corner ornament lines */}
                <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-gold/60 z-20 pointer-events-none" />
                <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-gold/60 z-20 pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-gold/60 z-20 pointer-events-none" />
                <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-gold/60 z-20 pointer-events-none" />

                {/* Arch image */}
                <div className="w-full h-full overflow-hidden rounded-[20px] shadow-[0_12px_36px_rgba(14,27,45,0.08)] border border-gold/10">
                  <Image
                    src="https://res.cloudinary.com/djicxkd9u/image/upload/v1781251228/Gemini_Generated_Image_w3z2eiw3z2eiw3z2_bsxtos.png"
                    alt="Bespoke luxury carpet"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/30 pointer-events-none" />
                </div>

                {/* Floating gold stat badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -right-2 top-4 bg-linen/95 border border-gold/25 rounded-[8px] px-3 py-2 shadow-lg z-30"
                >
                  <p className="font-display text-[18px] leading-none text-navy">30<span className="text-gold text-[12px]">+</span></p>
                  <p className="font-body text-[6.5px] tracking-[0.2em] uppercase text-navy/50 mt-0.5 font-semibold">Yrs Craft</p>
                </motion.div>

                {/* Floating label bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-3 left-6 bg-navy text-linen px-4 py-1.5 rounded-full shadow-md z-30 whitespace-nowrap"
                >
                  <span className="font-body text-[7px] tracking-[0.25em] uppercase font-semibold">Master Artisans · Delhi</span>
                </motion.div>
              </motion.div>
            </div>

            {/* ── DESKTOP IMAGE BLOCK (unchanged) ── */}
            <div className="hidden lg:block w-full relative flex justify-end">

              {/* Primary Image: Luxury Arch */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="w-[85%] aspect-[2/3] relative overflow-hidden rounded-t-[1000px] rounded-b-[24px] shadow-[0_20px_60px_rgba(14,27,45,0.08)] ml-auto"
              >
                <Image
                  src="https://res.cloudinary.com/djicxkd9u/image/upload/v1781251228/Gemini_Generated_Image_w3z2eiw3z2eiw3z2_bsxtos.png"
                  alt="Bespoke luxury carpet"
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-[3s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/5 mix-blend-multiply pointer-events-none" />
              </motion.div>

              {/* Overlapping Circle Image */}
              <motion.div
                initial={{ opacity: 0, y: 40, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute -left-12 bottom-24 w-[45%] aspect-square rounded-full border-[8px] border-linen shadow-2xl overflow-hidden z-20"
              >
                <Image
                  src="/images/luxury_bespoke_carpet_detail.png"
                  alt="Artisan detail texture"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Gold Ring Decor */}
              <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ opacity: 1, rotate: 180 }}
                viewport={{ once: true }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute top-[15%] left-[5%] w-48 h-48 rounded-full border border-gold/30 z-0 pointer-events-none"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
