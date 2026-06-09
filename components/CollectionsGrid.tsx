'use client'
import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'

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

/*
 * Tape geometry (desktop):
 *   Each card  = 34 vw wide
 *   Gap        = 8  vw
 *   Step       = 42 vw per collection
 *   Card 0 center at 50vw → left edge at 50 - 17 = 33vw (initial offset)
 *   Total travel = (COUNT-1) × 42vw = 168vw
 */
const CARD_VW   = 34
const GAP_VW    = 8
const STEP_VW   = CARD_VW + GAP_VW
const OFFSET_VW = 50 - CARD_VW / 2  // 33

export default function CollectionsGrid() {
  const [active, setActive]           = useState(0)
  const [mobileActive, setMobileActive] = useState(0)
  const ref        = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  /* Horizontal tape translation */
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `${-(COUNT - 1) * STEP_VW}vw`]
  )
  const tapeX = useSpring(rawX, { stiffness: 52, damping: 22 })

  /* Active collection index */
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(COUNT - 1, Math.floor(v * COUNT)))
  })

  /* Mobile carousel scroll tracker */
  const handleCarouselScroll = useCallback(() => {
    const el = carouselRef.current
    if (!el) return
    const step = el.clientWidth * 0.82 + 12
    setMobileActive(Math.min(COUNT - 1, Math.max(0, Math.round(el.scrollLeft / step))))
  }, [])

  return (
    <>

      {/* ── Mobile: horizontal snap carousel (dark bg, parchment text) ── */}
      <section id="collections" className="md:hidden bg-midnight rounded-t-[40px] overflow-hidden pt-14 pb-8">
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
            <div key={col.name} className="snap-start shrink-0 w-[82vw] aspect-3/4 relative overflow-hidden">
              <Image src={col.image} alt={col.name} fill quality={88} sizes="85vw" className="object-cover" />
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
            <div key={i} className={`h-px transition-all duration-500 ${i === mobileActive ? 'bg-gold w-10' : 'bg-gold/20 w-4'}`} />
          ))}
        </div>
      </section>

      {/* ── Desktop: Horizontal Film-Tape on ivory ── */}
      <section ref={ref} className="hidden md:block bg-ivory rounded-t-[40px]" style={{ height: `${COUNT * 120}vh`, overflow: 'clip' }}>
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* ── Ambient warm glow behind active card ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 52%, rgba(201,142,56,0.06) 0%, transparent 60%)' }}
          />

          {/* ── Ghost collection number ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            {collections.map((_, i) => (
              <motion.span
                key={i}
                className="absolute font-display font-normal leading-none text-midnight/4"
                style={{ fontSize: '22vw' }}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 0.93 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>
            ))}
          </div>

          {/* ── Top meta bar ── */}
          <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-12 xl:px-20 pt-8 pointer-events-none">
            <div className="flex items-center gap-5">
              <div className="w-6 h-px bg-gold/50" />
              <p className="font-body text-[8px] tracking-[0.5em] uppercase text-stone/50">Our Collections</p>
            </div>
            <p className="font-body text-[8px] tracking-ultra uppercase text-stone/25">
              {String(active + 1).padStart(2, '0')} &mdash; {String(COUNT).padStart(2, '0')}
            </p>
          </div>

          {/* ── Horizontal image tape ── */}
          <motion.div
            className="absolute top-16 bottom-36 flex items-center"
            style={{ left: `${OFFSET_VW}vw`, x: tapeX, gap: `${GAP_VW}vw` }}
          >
            {collections.map((col, i) => {
              const isActive = i === active
              return (
                <motion.div
                  key={col.name}
                  className="relative shrink-0 overflow-hidden"
                  style={{ width: `${CARD_VW}vw` }}
                  animate={{
                    height: isActive ? '68vh' : '50vh',
                    opacity: isActive ? 1 : 0.36,
                  }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Image with subtle Ken Burns on active */}
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    quality={92}
                    sizes="38vw"
                    className="object-cover"
                    style={{
                      transition: 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isActive ? 'scale(1.04)' : 'scale(1.10)',
                    }}
                  />

                  {/* Gold top accent — draws in */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gold origin-left z-10"
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.75, delay: isActive ? 0.22 : 0, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Thin gold bottom line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gold/40 origin-left z-10"
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.75, delay: isActive ? 0.3 : 0 }}
                  />

                  {/* Ivory fog over inactive cards */}
                  <motion.div
                    className="absolute inset-0 bg-ivory z-1"
                    animate={{ opacity: isActive ? 0 : 0.22 }}
                    transition={{ duration: 0.55 }}
                  />

                  {/* Tag label on inactive — bottom left */}
                  <motion.div
                    className="absolute bottom-4 left-4 z-2"
                    animate={{ opacity: isActive ? 0 : 0.55 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span
                      className="font-body text-[7px] tracking-[0.4em] uppercase text-midnight/60"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {col.tag}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* ── Bottom content strip ── */}
          <div className="absolute bottom-0 left-0 right-0 z-20">

            {/* Per-collection detail */}
            <div className="relative h-36">
              {collections.map((col, i) => (
                <motion.div
                  key={col.name}
                  className="absolute inset-0 px-12 xl:px-20 flex items-center justify-between gap-10"
                  animate={{
                    opacity: i === active ? 1 : 0,
                    y: i === active ? 0 : 16,
                    pointerEvents: i === active ? 'auto' : 'none',
                  }}
                  transition={{
                    opacity: { duration: 0.55, delay: i === active ? 0.28 : 0 },
                    y: { duration: 0.65, delay: i === active ? 0.24 : 0, ease: [0.22, 1, 0.36, 1] },
                  }}
                >
                  {/* Left: tag + name + desc */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="h-px bg-gold origin-left"
                        animate={{ scaleX: i === active ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: i === active ? 0.4 : 0 }}
                        style={{ width: 28 }}
                      />
                      <span className="font-body text-[8px] tracking-[0.45em] uppercase text-gold">{col.tag}</span>
                    </div>
                    <div className="flex items-baseline gap-8 flex-wrap">
                      <h3
                        className="font-display font-normal text-midnight leading-none shrink-0"
                        style={{ fontSize: 'clamp(24px, 2.8vw, 44px)' }}
                      >
                        {col.name}
                      </h3>
                      <p className="font-body text-[12px] leading-[1.85] text-stone/55 max-w-75 hidden lg:block">
                        {col.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right: stat + CTA */}
                  <div className="shrink-0 flex items-center gap-8">
                    <div className="hidden xl:flex items-center gap-3 border border-stone/15 px-4 py-2">
                      <div className="w-0.75 h-0.75 rounded-full bg-gold" />
                      <span className="font-body text-[7px] tracking-[0.35em] uppercase text-stone/50">{col.stat}</span>
                    </div>
                    <div className="flex items-center gap-2 group/link cursor-pointer">
                      <span className="font-body text-[8px] tracking-[0.38em] uppercase text-midnight/28 group-hover/link:text-gold transition-colors duration-300">
                        View Collection
                      </span>
                      <motion.span
                        className="text-midnight/22 group-hover/link:text-gold transition-colors duration-300 text-xs"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider line */}
            <div className="h-px bg-stone/10 mx-12 xl:mx-20" />

            {/* Gold progress bar — full width */}
            <div className="h-0.5 bg-stone/8">
              <motion.div
                className="h-full bg-gold origin-left"
                animate={{ scaleX: (active + 1) / COUNT }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* ── Right-side step navigator ── */}
          <div className="absolute right-10 xl:right-16 top-1/2 -translate-y-1/2 z-30 flex flex-col items-end gap-5 pointer-events-none">
            {collections.map((col, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5"
                animate={{ opacity: i === active ? 1 : 0.2 }}
                transition={{ duration: 0.35 }}
              >
                <motion.span
                  className="font-body text-[6px] tracking-[0.35em] uppercase text-midnight"
                  animate={{ opacity: i === active ? 1 : 0, x: i === active ? 0 : 8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {col.tag}
                </motion.span>
                <motion.div
                  className="rounded-full bg-midnight"
                  animate={{ width: i === active ? 7 : 3, height: i === active ? 7 : 3 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            ))}
          </div>

          {/* ── Scroll hint ── */}
          <motion.div
            className="absolute bottom-14 left-12 xl:left-20 z-30 flex items-center gap-2.5 pointer-events-none"
            animate={{ opacity: active === COUNT - 1 ? 0 : 0.38 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-5 h-px bg-stone"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-body text-[7px] tracking-[0.38em] uppercase text-stone/60">Scroll</span>
          </motion.div>

        </div>
      </section>

    </>
  )
}
