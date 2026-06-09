'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BespokeSection() {
  return (
    <section
      id="heritage-bespoke"
      className="relative bg-navy text-linen py-24 sm:py-28 lg:py-36 overflow-hidden border-t border-linen/5"
    >
      {/* Subtle background graphic line decoration */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-linen/5 pointer-events-none hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Asymmetric Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Narrative & Minimalist Specs */}
          <div className="space-y-12 pr-0 lg:pr-10">
            
            {/* Header */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-body text-[8.5px] tracking-[0.5em] uppercase text-gold block mb-4 font-semibold"
              >
                The Atelier
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-normal text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.05] text-linen"
              >
                Without <br />
                <span className="text-gold">Compromise.</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-body font-light text-[14px] sm:text-[15px] leading-[2.1] text-linen/70 mt-8 max-w-md"
              >
                True luxury is defined by absolute choice. From the hand-carded Himalayan wool to the exact dimensions of your space, every element is curated by you and woven by our master artisans in Agra.
              </motion.p>
            </div>

            {/* Minimalist Spec List (Replaces verbose paragraphs) */}
            <div className="space-y-6 pt-4 max-w-sm">
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
                  className="border-b border-linen/10 pb-4 flex justify-between items-end group cursor-default"
                >
                  <span className="font-display text-[18px] text-linen group-hover:text-gold transition-colors duration-500">
                    {item.label}
                  </span>
                  <span className="font-body text-[9px] tracking-[0.2em] text-linen/40 uppercase font-semibold">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-4 group/cta"
              >
                <span className="block w-7 h-px bg-gold transition-all duration-500 group-hover/cta:w-14" />
                <span className="font-body font-semibold text-[9.5px] tracking-[0.35em] uppercase text-gold transition-colors duration-300 group-hover/cta:text-linen">
                  Initiate Commission
                </span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Asymmetric Collage & Stats */}
          <div className="space-y-10">
            
            {/* Collage Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
              
              {/* Primary Image: Luxury Rug Scene */}
              <motion.div
                initial={{ opacity: 0, scale: 1.03 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="absolute right-0 top-0 w-[84%] h-[80%] overflow-hidden rounded-[24px] border border-linen/5 shadow-lg bg-linen"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1000&q=90"
                  alt="Bespoke hand-knotted carpet in a luxury interior salon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-102"
                />
              </motion.div>

              {/* Secondary Image: Detail Shot (Spun Wool/Threads) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute left-0 bottom-0 w-[46%] h-[40%] overflow-hidden rounded-[20px] border border-gold/15 shadow-xl bg-navy-mid p-2 z-10"
              >
                <div className="relative w-full h-full overflow-hidden rounded-[14px]">
                  <Image
                    src="https://images.unsplash.com/photo-1638368888223-4efbc65b1153?auto=format&fit=crop&w=600&q=90"
                    alt="Master artisan selecting raw silk threads for rug dye"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>

              {/* Overlay Atelier Label Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute right-8 bottom-[20%] bg-linen text-navy border border-gold/25 py-3 px-4.5 rounded-[12px] shadow-xl z-20 hidden sm:block pointer-events-none"
              >
                <span className="font-body text-[7px] tracking-[0.45em] uppercase text-gold block font-semibold text-center mb-1">
                  Agra Atelier
                </span>
                <span className="font-display text-xs font-normal text-navy block text-center">
                  100% Hand-Knotted
                </span>
              </motion.div>

              {/* Corner bracket decor */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/20 pointer-events-none z-20" />
            </div>

            {/* Gallery Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="border-t border-linen/10 pt-6"
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <span className="font-display text-[26px] text-gold font-normal leading-none block">25+</span>
                  <span className="font-body text-[7px] tracking-[0.3em] uppercase text-linen/50 font-bold block mt-1.5">
                    Years of Craft
                  </span>
                </div>
                <div>
                  <span className="font-display text-[26px] text-gold font-normal leading-none block">48</span>
                  <span className="font-body text-[7px] tracking-[0.3em] uppercase text-linen/50 font-bold block mt-1.5">
                    Countries Served
                  </span>
                </div>
                <div>
                  <span className="font-display text-[26px] text-gold font-normal leading-none block">100%</span>
                  <span className="font-body text-[7px] tracking-[0.3em] uppercase text-linen/50 font-bold block mt-1.5">
                    Made by Hand
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
