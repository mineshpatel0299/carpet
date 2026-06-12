'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '2010', label: 'Est.' },
  { value: '48+',  label: 'Countries' },
  { value: '4',    label: 'Generations' },
]

export default function FoundingStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={sectionRef} className="relative bg-linen overflow-hidden">
      <div className="carpet-texture opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 55% 50%, rgba(201,142,56,0.06) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_280px]">

        {/* ── COL 1: Image (desktop only) ── */}
        <div className="relative hidden lg:block overflow-hidden min-h-[520px]">

          <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
            <Image
              src="/artisan-detail.png"
              alt="Creaticabud artisan at the loom"
              fill
              sizes="400px"
              className="object-cover object-center"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-linen pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-linen/30 to-transparent pointer-events-none" />

          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: '-100%' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-10 bg-linen pointer-events-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
          </motion.div>

          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute top-5 left-5 z-20 pointer-events-none">
            <motion.path d="M22 0 L0 0 L0 22" stroke="#B88645" strokeWidth="0.9" fill="none"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 1.2 }} />
          </svg>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute bottom-5 right-5 z-20 pointer-events-none">
            <motion.path d="M0 22 L22 22 L22 0" stroke="#B88645" strokeWidth="0.9" fill="none"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 1.3 }} />
          </svg>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-body text-[7px] tracking-[0.4em] uppercase text-navy/35 font-semibold"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateX(50%)' }}
          >
            Master Artisan · Bhadohi
          </motion.span>
        </div>

        {/* ── COL 2: Content ── */}
        <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-16 py-12 lg:py-20 border-x border-navy/8">

          <div className="relative z-10">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-8 h-px bg-gold/50" />
              <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">
                Our Heritage
              </span>
            </motion.div>

            {/* Headline */}
            <div className="hidden lg:block overflow-hidden mb-0.5">
              <motion.h2
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-normal text-navy leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
              >
                Born in the Heart
              </motion.h2>
            </div>
            <div className="hidden lg:block overflow-hidden mb-4">
              <motion.h2
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display italic text-gold leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
              >
                of Bhadohi, Mirzapur & Delhi.
              </motion.h2>
            </div>

            {/* Pull-quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-2 border-gold/35 pl-5 mb-6"
            >
              <p className="font-display italic text-[15px] md:text-[16px] leading-[1.75] text-navy/60">
                "We do not manufacture carpets. We preserve a living heritage."
              </p>
            </motion.blockquote>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body font-light text-[13.5px] leading-[2.05] text-navy/55 mb-8"
            >
              Founded in 2010, Creaticabud grew from a family whose roots in Bhadohi and
              Mirzapur's carpet trade span four generations — master artisans whose craft
              and the region's centuries-old tradition of Persian knotwork is woven into
              every piece we produce.
            </motion.p>

            {/* Bottom rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="origin-left flex items-center gap-4"
            >
              <div className="w-8 h-px bg-gold/35" />
              <span className="font-body text-[7.5px] tracking-[0.45em] uppercase text-navy/30 font-semibold">
                Bhadohi · Mirzapur · Delhi — Since 2010
              </span>
            </motion.div>

          </div>
        </div>

        {/* ── COL 3: Stats (desktop) ── */}
        <div className="hidden lg:flex flex-col justify-center items-center py-16 px-6">

          <motion.svg
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            width="18" height="18" viewBox="0 0 18 18" fill="none"
            className="mb-8"
          >
            <path d="M9 0L10.6 7.4L18 9L10.6 10.6L9 18L7.4 10.6L0 9L7.4 7.4L9 0Z" fill="#B88645" />
          </motion.svg>

          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.13 }}
              className={`flex flex-col items-center text-center w-full py-7 ${i < stats.length - 1 ? 'border-b border-navy/8' : ''}`}
            >
              <span className="font-display text-[40px] text-gold leading-none mb-1.5">{s.value}</span>
              <span className="font-body text-[8.5px] tracking-[0.4em] uppercase text-navy/40 font-semibold">{s.label}</span>
            </motion.div>
          ))}

          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="origin-top mt-8 flex flex-col items-center gap-2"
          >
            <div className="w-px h-10 bg-gold/20" />
            <span className="font-body text-[7px] tracking-[0.35em] uppercase text-navy/25 font-semibold">Creaticabud</span>
          </motion.div>

        </div>

        {/* ── MOBILE STATS STRIP (bottom, hidden on desktop) ── */}
        <div className="block lg:hidden bg-navy relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg,#C98E38 0,#C98E38 1px,transparent 1px,transparent 60px)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,69,0.10) 0%, transparent 60%)' }}
          />

          <div className="relative z-10 flex items-center justify-center py-8 px-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="flex-1 flex flex-col items-center text-center relative"
              >
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                      <path d="M3 0L3.6 2.4L6 3L3.6 3.6L3 6L2.4 3.6L0 3L2.4 2.4L3 0Z" fill="#B88645" opacity="0.4" />
                    </svg>
                  </div>
                )}
                <span className="font-display text-[32px] text-gold leading-none mb-1">{s.value}</span>
                <span className="font-body text-[8px] tracking-[0.4em] uppercase text-linen/40 font-semibold">{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Top gold hairline */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
        </div>

      </div>
    </section>
  )
}
