'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

const details = [
  { label: 'Email',     value: 'Creaticabudcarpets@gmail.com', href: 'Creaticabudcarpets@gmail.com' },
  { label: 'WhatsApp', value: '+919810525135',          href: 'tel:+919810525135' },
  { label: 'Web',      value: 'www.creaticabud.com',      href: '#' },
]

const types = [
  'Wholesale / Bulk Order', 'Custom Design Brief',
  'Hotel & Hospitality',    'Interior Designer',
  'Retail / Reseller',      'General Enquiry',
]

const inputCls =
  'w-full bg-white/50 border border-navy/10 rounded-[20px] px-6 py-4 font-body font-light text-[14px] text-navy placeholder:text-navy/30 focus:border-gold/40 focus:bg-white focus:outline-none focus:ring-[4px] focus:ring-gold/10 transition-all duration-400'

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 30%'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['60px', '0px'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ivory px-6 sm:px-12 md:px-20 xl:px-32 py-24 sm:py-32 md:py-40 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 lg:gap-24 items-center w-full"
      id="contact"
    >
      {/* Loom-thread vertical grid lines - Edge to Edge */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg,#C98E38 0,#C98E38 1px,transparent 1px,transparent 100px)',
        }}
      />
      {/* Saffron glow — top-left */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at 10% 20%, rgba(201,142,56,0.08) 0%, transparent 60%)' }}
      />
      
      {/* Massive Decorative Watermark */}
      <div className="absolute -left-20 top-0 font-display text-[400px] leading-none text-navy/[0.015] pointer-events-none select-none">
        C
      </div>

      {/* ── Left: intro + contact details ── */}
      <motion.div
        variants={stagger}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 lg:pr-10"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px bg-gold/50" />
          <p className="font-body text-[9px] tracking-[0.5em] uppercase text-gold font-semibold">
            Get in Touch
          </p>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-display font-normal text-[42px] md:text-[64px] lg:text-[72px] leading-[1.05] text-navy mb-8"
        >
          Let's create <br />
          <span className="text-gold">something <br className="hidden lg:block"/> remarkable.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-body font-medium text-[17px] md:text-[18px] leading-[2.1] text-navy/85 max-w-lg"
        >
          Whether you're furnishing a villa, specifying for a hotel, or sourcing for your boutique — our atelier is ready to bring your vision to life.
        </motion.p>

        <motion.div variants={stagger} className="mt-16 flex flex-col gap-6">
          {details.map((d) => (
            <motion.div key={d.label} variants={fadeUp} className="flex items-center gap-8 group">
              <span className="font-body font-bold text-[10px] tracking-[0.35em] uppercase text-gold w-20 shrink-0">
                {d.label}
              </span>
              <a href={d.href} className="font-body font-semibold text-[17px] text-navy/85 group-hover:text-gold transition-colors duration-300">
                {d.value}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 pt-12 border-t border-navy/10 max-w-sm">
          <p className="font-body font-medium text-[15px] leading-[2.1] text-navy/70">
            Creaticabud Exports Pvt. Ltd.<br />
            Carpet Nagar, Fatehabad Road<br />
            Agra, Uttar Pradesh — 282 001, India
          </p>
        </motion.div>
      </motion.div>

      {/* ── Right: enquiry form ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 bg-white/60 backdrop-blur-2xl border border-white shadow-[0_30px_80px_-20px_rgba(14,27,45,0.08)] p-8 sm:p-12 md:p-16 lg:p-20 rounded-[40px] w-full"
      >
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-display font-normal text-[26px] md:text-[32px] text-navy">
            Send an Enquiry
          </h3>
          <div className="hidden sm:block w-24 h-px bg-gold/30" />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <label className="flex flex-col gap-3">
              <span className="font-body font-black text-[13px] tracking-ultra uppercase text-navy pl-2">Full Name</span>
              <input type="text" placeholder="Your name" className={inputCls} />
            </label>
            <label className="flex flex-col gap-3">
              <span className="font-body font-black text-[13px] tracking-ultra uppercase text-navy pl-2">Email</span>
              <input type="email" placeholder="you@example.com" className={inputCls} />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <label className="flex flex-col gap-3">
              <span className="font-body font-black text-[13px] tracking-ultra uppercase text-navy pl-2">Country</span>
              <input type="text" placeholder="Country of delivery" className={inputCls} />
            </label>
            <label className="flex flex-col gap-3">
              <span className="font-body font-black text-[13px] tracking-ultra uppercase text-navy pl-2">Enquiry Type</span>
              <select
                defaultValue=""
                className={`${inputCls} cursor-pointer appearance-none text-navy/80`}
              >
                <option value="" disabled>Select type</option>
                {types.map((t) => (
                  <option key={t} value={t} className="text-navy">{t}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-3">
            <span className="font-body font-black text-[13px] tracking-ultra uppercase text-navy pl-2">Message</span>
            <textarea
              rows={4}
              placeholder="Tell us about your project, dimensions, quantities, and timeline…"
              className={`${inputCls} resize-none py-6`}
            />
          </label>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-navy text-linen rounded-full font-body font-normal text-[12px] tracking-ultra uppercase py-6 hover:bg-gold hover:text-navy transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Submit Request
            </button>
            <p className="font-body font-light text-[11px] tracking-[0.05em] text-navy/40 text-center mt-6">
              We respond to all bespoke enquiries within 24 hours.
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
