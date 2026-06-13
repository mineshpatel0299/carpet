'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

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

/* ── Desktop row: scroll-parallax ghost text ── */
function MaterialRow({ mat }: { mat: (typeof materials)[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 20%'],
  })
  const ghostX       = useTransform(scrollYProgress, [0, 1], ['6%', '0%'])
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.4, 0.85, 1], [0, 0.07, 0.07, 0])
  const contentX     = useTransform(scrollYProgress, [0, 0.5], ['-2%', '0%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <div ref={ref} className="relative group border-t border-navy/10 overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center pointer-events-none"
        style={{ x: ghostX, opacity: ghostOpacity }}
      >
        <span className="font-display font-normal text-[80px] md:text-[120px] xl:text-[150px] leading-none text-navy whitespace-nowrap select-none pl-4">
          {mat.ghost}
        </span>
      </motion.div>

      <motion.div
        style={{ x: contentX, opacity: contentOpacity }}
        className="relative z-10 grid grid-cols-[1fr_2fr] gap-10 md:gap-16 py-6 md:py-8 cursor-default"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-body font-semibold text-[9px] tracking-[0.35em] text-gold/60 tabular-nums">
            {mat.num}
          </span>
          <h3 className="font-display font-normal text-[20px] md:text-[30px] text-navy leading-none group-hover:text-gold transition-colors duration-500">
            {mat.name}
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-body font-semibold text-[8px] tracking-[0.4em] uppercase text-gold/80 mb-2">
            {mat.origin}
          </p>
          <p className="font-body font-light text-[13px] leading-[1.85] text-navy/65">
            {mat.desc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Mobile accordion row ── */
function AccordionRow({ mat, isOpen, onToggle }: {
  mat: (typeof materials)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-t border-navy/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-body text-[9px] tracking-[0.35em] text-gold/60 font-semibold tabular-nums">
            {mat.num}
          </span>
          <span className="font-display font-normal text-[20px] text-navy group-hover:text-gold transition-colors duration-300 leading-none">
            {mat.name}
          </span>
        </div>
        {/* Plus / minus icon */}
        <span className="relative w-5 h-5 shrink-0 ml-3">
          <span className="absolute top-1/2 left-0 right-0 h-px bg-gold/60 -translate-y-1/2" />
          <motion.span
            animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 bottom-0 left-1/2 w-px bg-gold/60 -translate-x-1/2"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <p className="font-body font-semibold text-[8px] tracking-[0.4em] uppercase text-gold/70 mb-2">
                {mat.origin}
              </p>
              <p className="font-body font-light text-[13px] leading-[1.85] text-navy/65">
                {mat.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function MaterialsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-ivory overflow-hidden px-6 sm:px-8 md:px-20 py-10 md:py-18" id="materials">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-navy/10 gap-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[28px] md:text-[44px] leading-[1.05] text-navy"
        >
          Materials of{' '}
          <span className="text-gold">distinction.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body font-light text-[12px] text-navy/55 max-w-48 leading-[1.8]"
        >
          Every fibre chosen for longevity, beauty, and conscience.
        </motion.p>
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden">
        {materials.map((m, i) => (
          <AccordionRow
            key={m.num}
            mat={m}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
        <div className="border-t border-navy/10" />
      </div>

      {/* Desktop: scroll-parallax rows */}
      <div className="hidden md:block">
        {materials.map((m) => (
          <MaterialRow key={m.num} mat={m} />
        ))}
      </div>

    </section>
  )
}
