'use client'
import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const collections = [
  {
    tag: 'Signature',
    name: 'Handmade Carpets & Rugs',
    desc: 'The foundation of our craft. Every knot placed by hand over months of devotion.',
    stat: '12,000 knots / sq ft',
    image: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=1400&q=90',
  },
  {
    tag: 'Luxury Line',
    name: 'Silk Carpets',
    desc: 'Bangalore silk — unmatched lustre, impossible depth of colour.',
    stat: '100% pure silk pile',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1400&q=90',
  },
  {
    tag: 'Bespoke',
    name: 'Custom Knotted',
    desc: 'Precision-crafted to your brief. From dimensions to dye lots — one of one.',
    stat: 'Any size · Any design',
    image: 'https://images.unsplash.com/photo-1608724552908-e1c141f631ac?auto=format&fit=crop&w=1400&q=90',
  },
  {
    tag: 'Heritage Weave',
    name: 'Handloom Products',
    desc: 'Woven by artisans on traditional vertical looms passed down through generations.',
    stat: '400-year-old technique',
    image: 'https://images.unsplash.com/photo-1619444978283-cccfb92c357d?auto=format&fit=crop&w=1400&q=90',
  },
  {
    tag: 'Eco Range',
    name: 'Bamboo Collection',
    desc: 'Sustainable, silky, and kind to the planet without compromise on quality.',
    stat: 'Carbon-neutral process',
    image: 'https://plus.unsplash.com/premium_photo-1725295198378-d286934e2735?auto=format&fit=crop&w=1400&q=90',
  },
]

const COUNT = collections.length
const ACTIVE_W = 54
const INACTIVE_W = (100 - ACTIVE_W) / (COUNT - 1)

export default function CollectionsGrid() {
  const [active, setActive] = useState(0)
  const [mobileActive, setMobileActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(COUNT - 1, Math.floor(v * (COUNT + 0.4)))
    setActive(idx)
  })

  const handleCarouselScroll = useCallback(() => {
    const el = carouselRef.current
    if (!el) return
    const cardWidth = el.clientWidth * 0.82 + 12
    const idx = Math.round(el.scrollLeft / cardWidth)
    setMobileActive(Math.min(COUNT - 1, Math.max(0, idx)))
  }, [])

  return (
    <>
      {/* ── Mobile: horizontal snap-scroll carousel ── */}
      <section id="collections" className="md:hidden bg-midnight pt-14 pb-8">
        <div className="flex items-center justify-between px-5 mb-5">
          <p className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/55">Our Collections</p>
          <p className="font-body text-[8px] tracking-[0.3em] uppercase text-stone-light/20">
            {String(mobileActive + 1).padStart(2, '0')} &mdash; {String(COUNT).padStart(2, '0')}
          </p>
        </div>

        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto snap-x snap-mandatory overflow-y-hidden scrollbar-none gap-3 px-5 pb-1"
        >
          {collections.map((col, i) => (
            <div
              key={col.name}
              className="snap-start shrink-0 w-[82vw] aspect-3/4 relative overflow-hidden"
            >
              <Image
                src={col.image}
                alt={col.name}
                fill
                quality={88}
                sizes="85vw"
                className="object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
              <div className="absolute inset-0 bg-linear-to-t from-midnight/92 via-midnight/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="h-px bg-gold mb-4 w-8" />
                <p className="font-body text-[7px] tracking-[0.45em] uppercase text-gold/75 mb-2">{col.tag}</p>
                <h3 className="font-display font-normal text-parchment text-[24px] leading-[1.1] mb-2">{col.name}</h3>
                <p className="font-body text-[12px] text-parchment/75 leading-[1.8] mb-4">{col.desc}</p>
                <div className="inline-flex items-center gap-2 border border-gold/20 px-3 py-1.5">
                  <div className="w-0.75 h-0.75 rounded-full bg-gold shrink-0" />
                  <span className="font-body text-[7px] tracking-ultra uppercase text-gold/60">{col.stat}</span>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 font-display text-[80px] font-normal leading-none text-parchment/4 select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-5 px-5">
          {collections.map((_, i) => (
            <div
              key={i}
              className={`h-px transition-all duration-500 ${
                i === mobileActive ? 'bg-gold w-10' : 'bg-gold/20 w-4'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Desktop: iris-strip scroll layout ── */}
    <section ref={ref} className="hidden md:block" style={{ height: `${(COUNT + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-midnight">

        {/* Top meta bar */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-10 md:px-14 pt-7 pointer-events-none">
          <p className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/55">
            Our Collections
          </p>
          <p className="font-body text-[8px] tracking-[0.3em] uppercase text-stone-light/20">
            {String(active + 1).padStart(2, '0')} &mdash; {String(COUNT).padStart(2, '0')}
          </p>
        </div>

        {/* Iris strips */}
        <div className="h-full flex">
          {collections.map((col, i) => {
            const isActive = i === active
            return (
              <motion.div
                key={col.name}
                className="relative h-full overflow-hidden flex-shrink-0 cursor-pointer"
                animate={{ width: `${isActive ? ACTIVE_W : INACTIVE_W}%` }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActive(i)}
              >
                {/* Image */}
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  quality={92}
                  sizes="60vw"
                  className="object-cover"
                  style={{
                    transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isActive ? 'scale(1.03)' : 'scale(1.09)',
                  }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.18) 55%, transparent 100%)'
                      : 'rgba(10,15,30,0.78)',
                  }}
                  transition={{ duration: 0.75 }}
                />

                {/* Gold top edge — draws in when active */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gold origin-left"
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.95, delay: isActive ? 0.15 : 0, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Inactive: rotated labels */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span
                      className="font-body text-[7px] tracking-[0.4em] uppercase text-gold/35"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {col.tag}
                    </span>
                    <div className="w-px h-5 bg-parchment/12" />
                    <span
                      className="font-display text-parchment/40 whitespace-nowrap"
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        fontSize: 'clamp(10px, 0.85vw, 13px)',
                        letterSpacing: '0.14em',
                      }}
                    >
                      {col.name}
                    </span>
                    <div className="w-px h-3 bg-parchment/8" />
                    <span
                      className="font-body text-[7px] text-parchment/15"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>

                {/* Active: full content */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-10 md:p-14 pointer-events-none"
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 18 }}
                  transition={{
                    opacity: { duration: 0.55, delay: isActive ? 0.3 : 0 },
                    y: { duration: 0.7, delay: isActive ? 0.25 : 0, ease: [0.22, 1, 0.36, 1] },
                  }}
                >
                  {/* Ghost number */}
                  <div className="absolute -top-2 right-8 font-display text-[10vw] font-normal text-parchment/[0.04] leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Gold accent line */}
                  <motion.div
                    className="h-px bg-gold mb-6 origin-left"
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.7, delay: isActive ? 0.4 : 0 }}
                    style={{ width: 44 }}
                  />

                  <p className="font-body text-[8px] tracking-[0.45em] uppercase text-gold/75 mb-3">
                    {col.tag}
                  </p>

                  <h3
                    className="font-display font-normal text-parchment leading-[1.06] mb-5"
                    style={{ fontSize: 'clamp(26px, 3.4vw, 54px)' }}
                  >
                    {col.name}
                  </h3>

                  <p className="font-body text-[13px] text-parchment/85 leading-[1.95] max-w-sm mb-8">
                    {col.desc}
                  </p>

                  {/* Stat pill */}
                  <div className="inline-flex items-center gap-3 border border-gold/18 px-4 py-2 mb-9">
                    <div className="w-[3px] h-[3px] rounded-full bg-gold" />
                    <span className="font-body text-[8px] tracking-[0.35em] uppercase text-gold/60">
                      {col.stat}
                    </span>
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center gap-3 pointer-events-auto group/link cursor-pointer">
                    <span className="font-body text-[8px] tracking-[0.38em] uppercase text-parchment/35 group-hover/link:text-gold transition-colors duration-300">
                      View Collection
                    </span>
                    <motion.span
                      className="text-parchment/30 group-hover/link:text-gold transition-colors duration-300 text-xs"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>

                {/* Thin vertical separator */}
                {i < COUNT - 1 && (
                  <div className="absolute top-0 right-0 bottom-0 w-px bg-parchment/[0.04] pointer-events-none" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-parchment/5 pointer-events-none">
          <motion.div
            className="h-full bg-gold origin-left"
            animate={{ scaleX: (active + 1) / COUNT }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Scroll hint — fades when on last panel */}
        <motion.div
          className="absolute bottom-6 left-10 z-20 flex items-center gap-2.5 pointer-events-none"
          animate={{ opacity: active === COUNT - 1 ? 0 : 0.35 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="w-5 h-px bg-stone-light"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="font-body text-[7px] tracking-[0.38em] uppercase text-stone-light">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
    </>
  )
}
