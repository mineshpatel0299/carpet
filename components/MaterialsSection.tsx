'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const materials = [
  {
    num: '01',
    name: 'Pure Silk',
    origin: 'Bengaluru Origin',
    desc: 'Harvested from the finest silkworms, Bangalore silk gives our carpets their characteristic sheen and brings colours to unmatched vibrancy.',
    ghost: 'Silk',
  },
  {
    num: '02',
    name: 'Kashmiri Pashmina',
    origin: 'Himalayan Origin',
    desc: 'Sourced from the high-altitude pastures of Kashmir, this ultra-fine wool is hand-combed from Changthangi goats — renowned for its unmatched softness and insulating warmth.',
    ghost: 'Wool',
  },
  {
    num: '03',
    name: 'Hand-spun Jute',
    origin: 'Natural & Earthy',
    desc: 'Sourced from the Gangetic plains and spun by village artisans, jute gives our natural rugs an organic warmth that only improves with age.',
    ghost: 'Jute',
  },
  {
    num: '04',
    name: 'Bamboo Fibre',
    origin: 'Sustainable Choice',
    desc: 'Processed from organically grown bamboo, our bamboo-silk blend creates a luxurious surface as kind to the environment as it is to your feet.',
    ghost: 'Bamboo',
  },
]

function MaterialRow({
  mat,
  index,
}: {
  mat: (typeof materials)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 20%'],
  })

  /* Ghost text slides from right and fades */
  const ghostX = useTransform(scrollYProgress, [0, 1], ['8%', '0%'])
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.4, 0.85, 1], [0, 0.09, 0.09, 0])

  /* Content clips in from left */
  const contentX = useTransform(scrollYProgress, [0, 0.5], ['-3%', '0%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <div ref={ref} className="relative group border-t border-navy/10 overflow-hidden">
      {/* Ghost word behind */}
      <motion.div
        className="absolute inset-0 flex items-center pointer-events-none"
        style={{ x: ghostX, opacity: ghostOpacity }}
      >
        <span className="font-display font-normal text-[80px] sm:text-[120px] md:text-[160px] xl:text-[200px] leading-none text-navy whitespace-nowrap select-none pl-4">
          {mat.ghost}
        </span>
      </motion.div>

      {/* Actual row content */}
      <motion.div
        style={{ x: contentX, opacity: contentOpacity }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-20 py-10 cursor-default"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-body font-semibold text-[10px] tracking-[0.35em] text-gold/60 tabular-nums">
            {mat.num}
          </span>
          <h3 className="font-display font-normal text-[22px] sm:text-[28px] md:text-[38px] text-navy leading-none group-hover:text-gold transition-colors duration-500">
            {mat.name}
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-body font-semibold text-[8px] tracking-[0.42em] uppercase text-gold/80 mb-3">
            {mat.origin}
          </p>
          <p className="font-body font-light text-[14px] leading-[1.9] text-navy/70">
            {mat.desc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function MaterialsSection() {
  return (
    <section className="bg-ivory overflow-hidden px-6 sm:px-8 md:px-20 py-16 md:py-24" id="materials">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-12 border-b border-navy/10 mb-0 gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[38px] md:text-[56px] leading-[1.05] text-navy"
        >
          Materials of{' '}
          <span className="text-gold">distinction.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body font-light text-[13px] text-navy/60 max-w-55 leading-[1.8]"
        >
          Every fibre chosen for longevity, beauty, and conscience.
        </motion.p>
      </div>

      <div>
        {materials.map((m, i) => (
          <MaterialRow key={m.num} mat={m} index={i} />
        ))}
      </div>
    </section>
  )
}
