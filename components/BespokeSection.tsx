'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BespokeSection() {
  return (
    <section
      id="heritage-bespoke"
      className="relative bg-linen text-navy py-24 sm:py-32 lg:py-48 overflow-hidden"
    >
      <div className="carpet-texture opacity-60" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-12">

          {/* LEFT COLUMN: Narrative & Aesthetic Specs */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1 space-y-12">

            {/* Header */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-body text-[8.5px] tracking-[0.5em] uppercase text-gold block mb-4 font-semibold"
              >
                The Creaticabud
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-normal text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.05] text-navy"
              >
                Without <br />
                <span className="text-gold">Compromise.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-body font-light text-[14px] sm:text-[15px] leading-[2.1] text-navy/70 mt-8 max-w-md"
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
                  className="border-b border-navy/10 pb-4 flex justify-between items-end group cursor-default"
                >
                  <span className="font-display text-[18px] text-navy group-hover:text-gold transition-colors duration-500">
                    {item.label}
                  </span>
                  <span className="font-body text-[9px] tracking-[0.2em] text-navy/40 uppercase font-semibold">
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
                <span className="font-body font-semibold text-[9.5px] tracking-[0.35em] uppercase text-navy transition-colors duration-300 group-hover/cta:text-gold">
                  Initiate Commission
                </span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Asymmetric Collage & Stats */}
          <div className="w-full lg:w-[50%] relative order-1 lg:order-2 flex justify-end">
            
            {/* Primary Image: Luxury Arch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="w-[85%] sm:w-[75%] lg:w-[85%] aspect-[2/3] relative overflow-hidden rounded-t-[1000px] rounded-b-[24px] shadow-[0_20px_60px_rgba(14,27,45,0.08)]"
            >
              <Image
                src="/images/luxury_bespoke_carpet_main.png"
                alt="Bespoke luxury carpet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
              className="absolute left-0 sm:left-[10%] lg:-left-12 bottom-12 sm:bottom-24 w-[50%] sm:w-[40%] lg:w-[45%] aspect-square rounded-full border-[8px] border-linen shadow-2xl overflow-hidden z-20"
            >
              <Image
                src="/images/luxury_bespoke_carpet_detail.png"
                alt="Artisan detail texture"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>

            {/* Floating Gold Ring Decor */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 180 }}
              viewport={{ once: true }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              className="absolute top-[15%] left-[5%] w-32 h-32 md:w-48 md:h-48 rounded-full border border-gold/30 z-0 pointer-events-none"
            />
            
          </div>

        </div>

      </div>
    </section>
  )
}
