'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

const pillars = [
  {
    num: '01',
    title: 'Premium Quality',
    desc: 'ISO-certified production. 47-point inspection on every carpet before it leaves the loom.',
  },
  {
    num: '02',
    title: 'Ethical Production',
    desc: 'Fair wages, safe conditions, and community investment in Agra\'s weaving families since 1998.',
  },
  {
    num: '03',
    title: 'Global Reach',
    desc: 'Supplying hotels, designers, and collectors across 48 countries. Full customs documentation.',
  },
  {
    num: '04',
    title: 'Sustainable Living',
    desc: 'Natural fibres. Mineral-based dyes. Carbon-offset shipping on every international order.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0.1, 0.7], ['5%', '-5%'])
  const img2Y = useTransform(scrollYProgress, [0.1, 0.7], ['-3%', '5%'])

  return (
    <section ref={ref} id="about" className="bg-linen overflow-hidden relative">
      <div className="carpet-texture" />

      {/* Warm sienna bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 78% 40%, rgba(168,64,48,0.08) 0%, transparent 55%)' }}
      />

      {/* ── Top: heading + image ── */}
      <div className="px-6 sm:px-10 md:px-16 pt-20 md:pt-36 pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-[46%_54%] gap-10 md:gap-16 items-start">

        {/* Left: text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/50 mb-10"
          >
            Why Creaticabud
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-navy leading-[1.02] mb-2"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
          >
            Premium quality.
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-gold leading-[1.02] mb-12"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
          >
            Ethical roots.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-[14px] leading-[2] text-navy/70 max-w-96 mb-14"
          >
            A family-owned manufacturer based in Agra, India. For over 25 years we have supplied
            handmade rugs and carpets to hotels, designers, and collectors who refuse to compromise
            on quality or conscience.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-flex items-center gap-3 group/link"
          >
            <span className="block w-8 h-px bg-gold group-hover/link:w-12 transition-all duration-500" />
            <span className="font-body font-semibold text-[9px] tracking-[0.38em] uppercase text-navy/60 group-hover/link:text-gold transition-colors duration-300">
              Start a conversation
            </span>
            <span className="text-navy/40 group-hover/link:text-gold transition-colors text-xs">→</span>
          </motion.a>
        </motion.div>

        {/* Right: image stack */}
        <div className="relative hidden md:flex flex-col items-end mt-2">
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1 }}
            className="relative w-[75%] aspect-[4/5] max-h-[55vh] overflow-hidden rounded-[24px]"
          >
            <Image
              src="/images/why_us_red_rug.png"
              alt="Red rug with intricate designs"
              fill
              quality={90}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/5" />
            <div className="grain-layer" />
            <div className="absolute top-5 right-5 w-9 h-9 border-t border-r border-gold/30 pointer-events-none" />
          </motion.div>

          <motion.div
            style={{ y: img2Y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="absolute bottom-0 left-0 w-[42%] aspect-square overflow-hidden border-[3px] border-linen shadow-lg rounded-[20px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1744062969392-771751cebeb9?auto=format&fit=crop&w=600&q=90"
              alt="Luxury carpet texture close-up"
              fill
              quality={90}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* ── 4 brand pillars ── */}
      <div className="border-t border-navy/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/5 relative z-10">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="bg-linen px-8 md:px-10 py-10 md:py-12 group cursor-default hover:bg-parchment transition-colors duration-500"
          >
            <span className="font-body font-semibold text-[8px] tracking-[0.42em] uppercase text-gold/60 block mb-5 tabular-nums">
              {p.num}
            </span>
            <h4 className="font-display font-normal text-[17px] text-navy mb-3 group-hover:text-gold transition-colors duration-400">
              {p.title}
            </h4>
            <p className="font-body font-light text-[12.5px] leading-[1.88] text-navy/60">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
