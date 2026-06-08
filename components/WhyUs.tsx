'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'


export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0.1, 0.7], ['5%', '-5%'])
  const img2Y = useTransform(scrollYProgress, [0.1, 0.7], ['-3%', '5%'])

  return (
    <section ref={ref} id="about" className="bg-midnight overflow-hidden border-t border-gold/8 relative">

      {/* Warm sienna radial bloom — depth behind the image side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 78% 40%, rgba(139,58,42,0.07) 0%, transparent 55%)' }}
      />

      {/* ── Top: heading + image ── */}
      <div className="px-6 sm:px-10 md:px-16 pt-20 md:pt-36 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-[46%_54%] gap-10 md:gap-16 items-start">

        {/* Left: text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/55 mb-10"
          >
            Why Creaticabud
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-parchment leading-[1.02] mb-2"
            style={{ fontSize: 'clamp(38px, 5vw, 72px)' }}
          >
            Premium quality.
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal italic text-gold leading-[1.02] mb-12"
            style={{ fontSize: 'clamp(38px, 5vw, 72px)' }}
          >
            Ethical roots.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-[14px] leading-[1.95] text-parchment/70 max-w-100 mb-14"
          >
            A family-owned manufacturer based in Agra, India. For over 25 years
            we have supplied handmade rugs and carpets to hotels, designers, and
            collectors who refuse to compromise on quality or conscience.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-flex items-center gap-3 group/link"
          >
            <motion.span
              className="block w-8 h-px bg-gold origin-left group-hover/link:w-12 transition-all duration-500"
            />
            <span className="font-body text-[9px] tracking-[0.38em] uppercase text-parchment/40 group-hover/link:text-gold transition-colors duration-300">
              Start a conversation
            </span>
            <span className="text-parchment/25 group-hover/link:text-gold transition-colors duration-300 text-xs">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Right: image stack */}
        <div className="relative hidden md:flex flex-col items-end gap-0 mt-2">
          {/* Main image */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1 }}
            className="relative w-[75%] aspect-4/5 max-h-[55vh] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1736002624916-7b49c97e8593?auto=format&fit=crop&w=900&q=90"
              alt="Customers viewing rugs"
              fill
              quality={90}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-midnight/10" />
            <div className="grain-layer" />
            {/* Corner bracket */}
            <div className="absolute top-5 right-5 w-9 h-9 border-t border-r border-gold/35 pointer-events-none" />
          </motion.div>

          {/* Floating inset image */}
          <motion.div
            style={{ y: img2Y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="absolute bottom-0 left-0 w-[42%] aspect-square overflow-hidden border-4 border-midnight"
          >
            <Image
              src="https://images.unsplash.com/photo-1744062969392-771751cebeb9?auto=format&fit=crop&w=600&q=90"
              alt="Red rug on wooden stools"
              fill
              quality={90}
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>

    </section>
  )
}
