'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const moments = [
  {
    chapter: '01',
    label: 'The Loom',
    title: 'Vertical looms\nstanding eight feet tall',
    body: 'Each carpet begins on a hand-built wooden loom strung with warp threads. Our weavers learn to read the pattern map as fluently as a musician reads sheet music.',
    image: 'https://images.unsplash.com/photo-1740168254713-1e8695f89ffe?auto=format&fit=crop&w=1800&q=90',
    stat: { figure: '6 months', label: 'per carpet, by hand' },
  },
  {
    chapter: '02',
    label: 'The Knot',
    title: 'A million knots,\ntied by hand',
    body: 'The Persian knot — tied, cut, and compacted row by row. A master weaver ties 10,000 knots a day. A 9×12 carpet represents six months of a single life.',
    image: 'https://images.unsplash.com/photo-1669046638657-3fe7e9b0f9b9?auto=format&fit=crop&w=1800&q=90',
    stat: { figure: '10,000', label: 'knots tied per day' },
  },
  {
    chapter: '03',
    label: 'The Finish',
    title: 'Hand-washed,\nstretched & finished',
    body: 'After weaving: a 47-point inspection, hand-washing in mountain water, stretching over wooden frames under the Agra sun. The carpet is alive before it ever enters your home.',
    image: 'https://plus.unsplash.com/premium_photo-1664303678793-057408171526?auto=format&fit=crop&w=1800&q=90',
    stat: { figure: '47', label: 'quality checkpoints' },
  },
]

export default function CraftStory() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  /* Image crossfade opacities */
  const img0Opacity = useTransform(scrollYProgress, [0, 0, 0.28, 0.42], [1, 1, 1, 0])
  const img1Opacity = useTransform(scrollYProgress, [0.28, 0.42, 0.62, 0.76], [0, 1, 1, 0])
  const img2Opacity = useTransform(scrollYProgress, [0.62, 0.76, 1, 1], [0, 1, 1, 1])
  const imgOpacities = [img0Opacity, img1Opacity, img2Opacity]

  /* Subtle Ken Burns scale per image */
  const img0Scale = useTransform(scrollYProgress, [0, 0.42], [1.08, 1.0])
  const img1Scale = useTransform(scrollYProgress, [0.28, 0.76], [1.08, 1.0])
  const img2Scale = useTransform(scrollYProgress, [0.62, 1.0], [1.08, 1.0])
  const imgScales = [img0Scale, img1Scale, img2Scale]

  /* Text panel fade + rise */
  const txt0Opacity = useTransform(scrollYProgress, [0, 0.05, 0.26, 0.38], [0, 1, 1, 0])
  const txt0Y = useTransform(scrollYProgress, [0, 0.07], ['36px', '0px'])
  const txt1Opacity = useTransform(scrollYProgress, [0.3, 0.42, 0.6, 0.72], [0, 1, 1, 0])
  const txt1Y = useTransform(scrollYProgress, [0.3, 0.42], ['36px', '0px'])
  const txt2Opacity = useTransform(scrollYProgress, [0.64, 0.76, 1, 1], [0, 1, 1, 1])
  const txt2Y = useTransform(scrollYProgress, [0.64, 0.76], ['36px', '0px'])
  const txtOpacities = [txt0Opacity, txt1Opacity, txt2Opacity]
  const txtYs = [txt0Y, txt1Y, txt2Y]

  /* Bottom progress strip */
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="heritage">
      <div ref={containerRef} style={{ height: '310vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-midnight">

          {/* ── Full-bleed crossfading images with Ken Burns ── */}
          {moments.map((m, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{ opacity: imgOpacities[i] }}
            >
              <motion.div className="absolute inset-0" style={{ scale: imgScales[i] }}>
                <Image
                  src={m.image}
                  alt={m.label}
                  fill
                  quality={92}
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* ── Atmospheric gradients ── */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/15 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-midnight/50 via-transparent to-transparent pointer-events-none" />

          {/* ── Top meta bar ── */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-10 md:px-16 pt-6 md:pt-8 pointer-events-none">
            <p className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/55">
              The Making
            </p>
            <div className="flex items-center gap-3">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-parchment/20">
                Est. 1998 · Agra, India
              </span>
            </div>
          </div>

          {/* ── Ghost chapter number ── */}
          {moments.map((m, i) => (
            <motion.div
              key={i}
              className="absolute top-12 right-10 md:right-16 z-20 font-display font-normal leading-none select-none pointer-events-none text-parchment/[0.05]"
              style={{ opacity: imgOpacities[i], fontSize: 'clamp(100px, 18vw, 260px)' }}
            >
              {m.chapter}
            </motion.div>
          ))}

          {/* ── Bottom content panels ── */}
          {moments.map((m, i) => (
            <motion.div
              key={i}
              className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 px-5 sm:px-10 md:px-16 pb-4 md:pb-6"
              style={{ opacity: txtOpacities[i], y: txtYs[i] }}
            >
              {/* Label row */}
              <div className="flex items-center gap-4 mb-5">
                <motion.div
                  className="h-px bg-gold origin-left"
                  style={{ width: 40 }}
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <p className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/70">
                  {m.chapter} / {m.label}
                </p>
              </div>

              {/* Title + Stat grid */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
                <div className="flex-1">
                  <h2
                    className="font-display font-normal text-parchment leading-[1.04] mb-6"
                    style={{ fontSize: 'clamp(30px, 4.8vw, 74px)' }}
                  >
                    {m.title.split('\n').map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </h2>
                  <p className="font-body text-[13px] leading-[1.95] text-parchment/75 max-w-[420px]">
                    {m.body}
                  </p>
                </div>

                {/* Stat */}
                <div className="shrink-0 border-l border-gold/25 pl-6 pb-1 md:text-right md:border-l-0 md:border-r md:border-gold/25 md:pr-8 md:pl-0">
                  <div
                    className="font-display font-normal text-gold leading-none mb-1.5"
                    style={{ fontSize: 'clamp(28px, 3.2vw, 50px)' }}
                  >
                    {m.stat.figure}
                  </div>
                  <div className="font-body text-[8px] tracking-[0.32em] uppercase text-parchment/35">
                    {m.stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* ── Right-side step indicators ── */}
          <div className="absolute right-10 md:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5 pointer-events-none">
            {moments.map((_, i) => (
              <motion.div
                key={i}
                className="w-[5px] h-[5px] rounded-full border border-gold/50"
                style={{ opacity: imgOpacities[i], backgroundColor: 'transparent' }}
              />
            ))}
          </div>

          {/* ── Bottom progress strip ── */}
          <div className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-parchment/8 pointer-events-none">
            <motion.div className="h-full bg-gold origin-left" style={{ width: progressWidth }} />
          </div>

        </div>
      </div>
    </section>
  )
}
