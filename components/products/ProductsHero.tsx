'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { ProductCategory } from '@/lib/products-data'

interface Props {
  categories: Pick<ProductCategory, 'id' | 'num' | 'name'>[]
}

export default function ProductsHero({ categories }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[85vh] bg-parchment flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="carpet-texture opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,69,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center justify-center text-center px-8 sm:px-14 pt-32 pb-24">
        <motion.div style={{ y: textY }} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="origin-right w-10 h-px bg-gold/50"
            />
            <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">The Atelier</span>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left w-10 h-px bg-gold/50"
            />
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '108%' }} animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display font-normal text-navy"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 1.0 }}
            >
              Material
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '108%' }} animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
              className="font-display italic text-gold"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 1.0 }}
            >
              Collections.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="font-body font-light text-[15px] text-navy/60 leading-[2.1] max-w-lg mb-14"
          >
            Three distinct material expressions — each woven by hand in the carpet ateliers of Bhadohi, Mirzapur, and Delhi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="group flex flex-col items-center gap-2">
                <span className="font-body text-[8px] tracking-[0.4em] text-gold/60 tabular-nums font-semibold group-hover:text-gold transition-colors duration-300">{cat.num}</span>
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-navy/50 group-hover:text-navy transition-colors duration-300 font-semibold">{cat.name}</span>
                <span className="block w-0 h-px bg-gold group-hover:w-8 transition-all duration-400" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gold/20 origin-center z-20"
      />
    </section>
  )
}
