'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

/*
 * Curated Bestsellers — three featured carpet types shown as edge-to-edge
 * borderless cards. Hover reveals material details, colour swatches, and a CTA.
 */

const featured = [
  {
    tag: 'Heritage Bestseller',
    name: 'Persian Garden\nMedallion',
    material: 'Pure Silk · 300 KPSI',
    origin: 'Agra, India',
    sizes: ['6×9 ft', '9×12 ft', 'Custom'],
    swatches: ['#6B3A24', '#1B3060', '#C9932A', '#4A3728'],
    image: '/images/benefits/heirloom.png',
  },
  {
    tag: 'Signature Craft',
    name: 'Agra Floral\nHand-Knotted',
    material: 'New Zealand Wool · 180 KPSI',
    origin: 'Agra, India',
    sizes: ['5×8 ft', '8×10 ft', 'Custom'],
    swatches: ['#3D2B1F', '#8C7C6C', '#D4B896', '#A84030'],
    image: '/images/collections/handmade.png',
  },
  {
    tag: 'Modern Minimalist',
    name: 'Geometric\nPassage Runner',
    material: 'Kashmiri Pashmina · Hand-knotted',
    origin: 'Agra, India',
    sizes: ['3×10 ft', '3×14 ft', 'Custom'],
    swatches: ['#1C1C1C', '#8C7C6C', '#F5E8D2', '#C98E38'],
    image: '/images/benefits/architecture.png',
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
          <span className="font-body font-semibold text-[7px] tracking-[0.42em] uppercase text-navy bg-parchment/90 backdrop-blur-[2px] px-3 py-1.5 rounded-sm">
            {p.tag}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-linen/85 z-10"
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
                  className="font-body text-[10px] text-navy border border-navy/15 px-2.5 py-1 hover:border-gold transition-colors duration-200 cursor-pointer rounded-sm bg-parchment/50"
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
                  className="w-5 h-5 rounded-full border border-navy/15 hover:scale-125 transition-transform duration-200 cursor-pointer shadow-sm"
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
      <div className="relative z-10">
        <h3 className="font-display font-normal text-[19px] text-navy leading-[1.2] mb-1.5">
          {p.name.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h3>
        <p className="font-body text-[11px] tracking-[0.08em] text-navy/60">{p.material}</p>
      </div>
    </motion.div>
  )
}

function MobileProductCard({
  p,
  index,
}: {
  p: (typeof featured)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="flex-none w-[78vw] max-w-[310px] snap-start"
    >
      {/* Edge-to-edge image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] mb-4 shadow-sm border border-linen/5">
        <Image
          src={p.image}
          alt={p.name.replace('\n', ' ')}
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />

        {/* Tag — top left */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="font-body font-semibold text-[6.5px] tracking-[0.4em] uppercase text-navy bg-parchment/95 backdrop-blur-[2px] px-2.5 py-1.5 rounded-sm">
            {p.tag}
          </span>
        </div>
      </div>

      {/* Details (always visible on mobile for premium readability) */}
      <div className="px-1">
        <h3 className="font-display font-normal text-[20px] text-navy leading-[1.2] mb-1">
          {p.name.replace('\n', ' ')}
        </h3>
        
        <p className="font-body text-[10px] tracking-[0.08em] text-navy/50 mb-3">
          {p.origin} · {p.material.split(' · ')[0]}
        </p>

        {/* Thin divider */}
        <div className="h-[1px] bg-navy/10 w-full mb-3" />

        {/* Specs and Enquiry */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <span className="font-body text-[7px] tracking-[0.3em] uppercase text-gold/60 block mb-1">
              Palette
            </span>
            <div className="flex gap-1.5">
              {p.swatches.map((c) => (
                <div
                  key={c}
                  className="w-3.5 h-3.5 rounded-full border border-navy/10 shadow-sm"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 group/mobbtn border border-gold/20 px-3.5 py-1.5 rounded-sm bg-parchment/20 active:bg-parchment/40 transition-colors"
          >
            <span className="font-body text-[8px] tracking-[0.25em] uppercase text-gold">
              Request Sample
            </span>
            <span className="text-[9px] text-gold">→</span>
          </a>
        </div>

        {/* Sizes */}
        <div className="flex gap-1.5 flex-wrap items-center">
          <span className="font-body text-[7px] tracking-[0.3em] uppercase text-navy/40 mr-1">
            Sizes:
          </span>
          {p.sizes.map((s) => (
            <span
              key={s}
              className="font-body text-[8.5px] text-navy/80 border border-navy/5 bg-parchment/40 px-2 py-0.5 rounded-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProcessSteps() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const maxScroll = scrollWidth - clientWidth
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll)
      }
    }
  }

  return (
    <section
      className="bg-linen py-20 md:py-28 overflow-hidden relative"
      id="process"
    >
      <div className="carpet-texture" />
      {/* Header */}
      <div className="px-8 md:px-20 mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 relative z-10">
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
            className="font-display font-normal text-[34px] md:text-[50px] leading-[1.02] text-navy"
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
          className="hidden md:inline-flex items-center gap-3 group/all relative z-10"
        >
          <span className="font-body font-semibold text-[9px] tracking-[0.35em] uppercase text-navy/50 group-hover/all:text-gold transition-colors duration-300">
            View All Collections
          </span>
          <span className="block w-5 h-px bg-navy/20 group-hover/all:w-8 group-hover/all:bg-gold transition-all duration-400" />
        </motion.a>
      </div>

      {/* Mobile-only horizontal slider */}
      <div className="relative z-10 block md:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-8 pb-4 -mx-8 scroll-pl-8"
        >
          {featured.map((p, i) => (
            <MobileProductCard key={p.name} p={p} index={i} />
          ))}
          {/* Right margin buffer to match scroll-pl-8 snap-start alignment on the last card */}
          <div className="flex-none w-2 shrink-0" />
        </div>

        {/* Elegant Gold Progress Indicator */}
        <div className="mt-8 flex justify-center items-center">
          <div className="w-24 h-[1.5px] bg-navy/10 relative rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 bg-gold rounded-full transition-transform duration-75 ease-out"
              style={{
                width: '33.33%',
                transform: `translateX(${scrollProgress * 200}%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Desktop-only 3-column product grid */}
      <div className="hidden md:grid px-8 md:px-20 grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-14 relative z-10">
        {featured.map((p, i) => (
          <ProductCard key={p.name} p={p} index={i} />
        ))}
      </div>

      {/* Bottom strip */}
      <div className="mt-16 md:mt-20 px-8 md:px-20 border-t border-navy/10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 relative z-10">
        <p className="font-body font-light text-[12px] text-navy/60 leading-[1.9] max-w-xs">
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
