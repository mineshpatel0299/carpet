'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const moments = [
  {
    chapter: '01',
    label: 'The Foundation',
    title: 'Vertical looms standing eight feet tall',
    body: 'Each carpet begins on a hand-built wooden loom strung with warp threads. Our weavers learn to read the pattern map as fluently as a musician reads sheet music.',
    image: 'https://images.unsplash.com/photo-1740168254713-1e8695f89ffe?auto=format&fit=crop&w=1400&q=90',
    stat: { figure: '6', label: 'Months per carpet' },
    reverse: false
  },
  {
    chapter: '02',
    label: 'The Technique',
    title: 'A million knots, tied individually by hand',
    body: 'The Persian knot — tied, cut, and compacted row by row. A master weaver works with rhythmic precision. A 9×12 carpet represents six months of a single life.',
    image: '/images/luxury_red_floral_carpet.png',
    stat: { figure: '10k', label: 'Knots tied per day' },
    reverse: true
  },
  {
    chapter: '03',
    label: 'The Refinement',
    title: 'Washed, stretched and perfected',
    body: 'After weaving: a 47-point inspection, hand-washing in mountain water, and stretching over wooden frames under the Agra sun. The carpet breathes before it ever enters your home.',
    image: 'https://plus.unsplash.com/premium_photo-1664303678793-057408171526?auto=format&fit=crop&w=1400&q=90',
    stat: { figure: '47', label: 'Quality checkpoints' },
    reverse: false
  },
]

export default function CraftStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Slow parallax for the line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="heritage" ref={containerRef} className="bg-gradient-to-br from-ivory via-parchment to-stone-light py-24 md:py-32 overflow-hidden relative">
      <div className="carpet-texture opacity-20" />

      {/* Subtle moody vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-light/10 to-stone-light/30 pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">

        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-navy/20" />
            <span className="font-body text-[8.5px] tracking-[0.4em] uppercase text-navy/70 font-semibold">
              The Making
            </span>
            <div className="w-12 h-px bg-navy/20" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display font-normal text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-navy mb-8"
          >
            The Genesis of an <span className="text-gold italic">Heirloom</span>
          </motion.h2>
        </div>

        {/* Editorial Sequence */}
        <div className="flex flex-col gap-32 md:gap-48 relative">

          {/* Animated central thread (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gold/60 origin-top"
            />
          </div>

          {moments.map((moment, idx) => (
            <div
              key={moment.chapter}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center relative ${moment.reverse ? 'md:grid-flow-col-dense' : ''}`}
            >

              {/* Image Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={`${moment.reverse ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:pr-16'} relative z-20`}
              >
                <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[4px] overflow-hidden shadow-2xl border border-gold/20 group">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-gold/10 pointer-events-none mix-blend-overlay" />
                </div>
              </motion.div>

              {/* Typography Block */}
              <motion.div
                initial={{ opacity: 0, x: moment.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col justify-center relative z-10 ${moment.reverse ? 'md:pr-12 lg:pr-24' : 'md:pl-12 lg:pl-24'}`}
              >
                {/* Huge Watermark Chapter Number */}
                <div className={`absolute top-0 transform -translate-y-1/3 ${moment.reverse ? 'right-0 md:right-auto md:left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} font-display text-[140px] md:text-[200px] leading-none text-navy/5 pointer-events-none z-[-1]`}>
                  {moment.chapter}
                </div>

                <div className="backdrop-blur-sm bg-ivory/50 p-8 rounded-lg border border-gold/20 shadow-2xl">
                  <span className="font-body text-[9px] tracking-[0.4em] uppercase text-navy/70 font-semibold mb-6 block">
                    {moment.label}
                  </span>

                  <h3 className="font-display text-[28px] lg:text-[38px] leading-[1.15] text-navy mb-6">
                    {moment.title}
                  </h3>

                  <p className="font-body text-[13px] sm:text-[14px] leading-[2.1] text-navy/80 mb-10">
                    {moment.body}
                  </p>

                  <div className="pt-8 border-t border-navy/10 inline-flex flex-col">
                    <span className="font-display text-[36px] text-gold leading-none mb-2">
                      {moment.stat.figure}
                    </span>
                    <span className="font-body text-[9px] tracking-[0.3em] uppercase text-navy/50 font-semibold">
                      {moment.stat.label}
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
