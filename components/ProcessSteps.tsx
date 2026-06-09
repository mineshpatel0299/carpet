'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

/*
 * Curated Bestsellers — three featured carpet types shown as edge-to-edge
 * borderless cards. Hover reveals material details, colour swatches, and a CTA.
 */

const featured = [
  {
    tag:      'Heritage Bestseller',
    name:     'Persian Garden\nMedallion',
    material: 'Pure Silk · 300 KPSI',
    origin:   'Agra, India',
    sizes:    ['6×9 ft', '9×12 ft', 'Custom'],
    swatches: ['#6B3A24', '#1B3060', '#C9932A', '#4A3728'],
    image:    'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=90',
  },
  {
    tag:      'Signature Craft',
    name:     'Agra Floral\nHand-Knotted',
    material: 'New Zealand Wool · 180 KPSI',
    origin:   'Agra, India',
    sizes:    ['5×8 ft', '8×10 ft', 'Custom'],
    swatches: ['#3D2B1F', '#8C7C6C', '#D4B896', '#A84030'],
    image:    'https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=800&q=90',
  },
  {
    tag:      'Modern Minimalist',
    name:     'Geometric\nPassage Runner',
    material: 'Kashmiri Pashmina · Hand-knotted',
    origin:   'Agra, India',
    sizes:    ['3×10 ft', '3×14 ft', 'Custom'],
    swatches: ['#1C1C1C', '#8C7C6C', '#F5E8D2', '#C98E38'],
    image:    'https://images.unsplash.com/photo-1608724552908-e1c141f631ac?auto=format&fit=crop&w=800&q=90',
  },
]

function ProductCard({
  p,
  index,
}: {
  p: (typeof featured)[0]
  index: number
}) {
  const [hov, setHov] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.14, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-default"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Edge-to-edge image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] mb-5 shadow-sm border border-linen/5">
        <Image
          src={p.image}
          alt={p.name.replace('\n', ' ')}
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out"
          style={{ transform: hov ? 'scale(1.05)' : 'scale(1.0)' }}
        />

        {/* Tag — top left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-body font-semibold text-[7px] tracking-[0.42em] uppercase text-linen bg-navy/80 backdrop-blur-[2px] px-3 py-1.5 rounded-sm">
            {p.tag}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-navy/85 z-10"
          animate={{ opacity: hov ? 1 : 0 }}
          transition={{ duration: 0.38 }}
        />

        {/* Hover details */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-end p-6"
          animate={{ opacity: hov ? 1 : 0, y: hov ? 0 : 10 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Sizes */}
          <div className="mb-4">
            <span className="font-body text-[7.5px] tracking-[0.38em] uppercase text-gold/55 block mb-2">
              Standard Sizes
            </span>
            <div className="flex gap-2 flex-wrap">
              {p.sizes.map((s) => (
                <span
                  key={s}
                  className="font-body text-[10px] text-linen border border-linen/15 px-2.5 py-1 hover:border-gold transition-colors duration-200 cursor-pointer rounded-sm bg-navy-mid/50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Colour swatches */}
          <div className="mb-6">
            <span className="font-body text-[7.5px] tracking-[0.38em] uppercase text-gold/55 block mb-2">
              Colour Palette
            </span>
            <div className="flex gap-2">
              {p.swatches.map((c) => (
                <div
                  key={c}
                  className="w-5 h-5 rounded-full border border-linen/15 hover:scale-125 transition-transform duration-200 cursor-pointer shadow-sm"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 group/btn"
          >
            <span className="block w-5 h-px bg-gold transition-all duration-400 group-hover/btn:w-9" />
            <span className="font-body text-[9px] tracking-[0.32em] uppercase text-gold">
              Request Sample
            </span>
          </a>
        </motion.div>
      </div>

      {/* Below-image micro-copy */}
      <div>
        <h3 className="font-display font-normal text-[19px] text-linen leading-[1.2] mb-1.5">
          {p.name.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h3>
        <p className="font-body text-[11px] tracking-[0.08em] text-linen/60">{p.material}</p>
      </div>
    </motion.div>
  )
}

export default function ProcessSteps() {
  return (
    <section
      className="bg-navy py-20 md:py-28 overflow-hidden"
      id="process"
    >
      {/* Header */}
      <div className="px-8 md:px-20 mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/50 mb-4"
          >
            Curated Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-normal text-[34px] md:text-[50px] leading-[1.02] text-linen"
          >
            Crafted for the{' '}
            <span className="text-gold">discerning eye.</span>
          </motion.h2>
        </div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href="#collections"
          className="hidden md:inline-flex items-center gap-3 group/all"
        >
          <span className="font-body font-semibold text-[9px] tracking-[0.35em] uppercase text-linen/50 group-hover/all:text-gold transition-colors duration-300">
            View All Collections
          </span>
          <span className="block w-5 h-px bg-linen/20 group-hover/all:w-8 group-hover/all:bg-gold transition-all duration-400" />
        </motion.a>
      </div>

      {/* 3-column product grid */}
      <div className="px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-14">
        {featured.map((p, i) => (
          <ProductCard key={p.name} p={p} index={i} />
        ))}
      </div>

      {/* Bottom strip */}
      <div className="mt-16 md:mt-20 px-8 md:px-20 border-t border-linen/10 pt-10 flex items-center justify-between gap-8">
        <p className="font-body font-light text-[12px] text-linen/60 leading-[1.9] max-w-xs">
          All pieces available in custom dimensions and colour palettes. Minimum order for wholesale enquiries.
        </p>
        <a
          href="#contact"
          className="shrink-0 inline-flex items-center gap-4 group/enquire"
        >
          <span className="font-body text-[9px] tracking-[0.38em] uppercase text-gold/60 group-hover/enquire:text-gold transition-colors duration-300">
            Start an Enquiry
          </span>
          <motion.span
            className="text-gold/40 group-hover/enquire:text-gold transition-colors text-xs"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </a>
      </div>
    </section>
  )
}
