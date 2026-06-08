'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

const details = [
  { label: 'Email',     value: 'export@creaticabud.com', href: 'mailto:export@creaticabud.com' },
  { label: 'WhatsApp', value: '+91 98765 43210',          href: 'tel:+919876543210' },
  { label: 'Web',      value: 'www.creaticabud.com',      href: '#' },
]

const types = [
  'Wholesale / Bulk Order', 'Custom Design Brief',
  'Hotel & Hospitality',    'Interior Designer',
  'Retail / Reseller',      'General Enquiry',
]

const inputCls =
  'w-full bg-transparent border-b border-parchment/10 focus:border-gold/50 pb-3 pt-1 font-body font-light text-[13px] text-parchment placeholder:text-stone/25 outline-none transition-colors duration-300'

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 30%'] })
  const y = useTransform(scrollYProgress, [0, 1], ['30px', '0px'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={ref}
      className="relative bg-midnight overflow-hidden px-8 md:px-20 py-24 md:py-28 grid grid-cols-1 md:grid-cols-[42%_58%] gap-16 md:gap-20 items-start"
      id="contact"
    >
      {/* Subtle bg grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg,#C9973C 0,#C9973C 1px,transparent 1px,transparent 80px)',
        }}
      />

      {/* Left */}
      <motion.div
        variants={stagger}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10"
      >
        <motion.p variants={fadeUp} className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/65 mb-6">
          Get in Touch
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display font-normal text-[36px] md:text-[52px] leading-[1.05] text-parchment"
        >
          Let's create{' '}
          <span className="italic text-gold">something remarkable.</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="font-body font-light text-[14px] leading-[1.95] text-stone-light/60 mt-8 max-w-[340px]">
          Whether you're furnishing a villa, specifying for a hotel, or sourcing for your boutique — we'd love to hear about your requirements.
        </motion.p>

        <motion.div variants={stagger} className="mt-10 flex flex-col gap-4">
          {details.map((d) => (
            <motion.div key={d.label} variants={fadeUp} className="flex items-center gap-5">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-gold/35 w-14">
                {d.label}
              </span>
              <a href={d.href} className="font-body font-light text-[13px] text-stone-light/60 hover:text-gold transition-colors">
                {d.value}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 pt-8 border-t border-parchment/8">
          <p className="font-body font-light text-[12px] leading-[2] text-stone/40">
            Creaticabud Exports Pvt. Ltd.<br />
            Carpet Nagar, Fatehabad Road<br />
            Agra, Uttar Pradesh — 282 001, India
          </p>
        </motion.div>
      </motion.div>

      {/* Right: form */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 border border-parchment/8 p-8 md:p-10"
      >
        <h3 className="font-display font-normal text-[20px] text-parchment mb-2">
          Send an Enquiry
        </h3>
        <div className="h-px bg-parchment/8 mb-8 mt-5" />

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-stone/40">Full Name</span>
              <input type="text" placeholder="Your name" className={inputCls} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-stone/40">Email</span>
              <input type="email" placeholder="you@example.com" className={inputCls} />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-stone/40">Country</span>
              <input type="text" placeholder="Country of delivery" className={inputCls} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-stone/40">Enquiry Type</span>
              <select defaultValue="" className={`${inputCls} cursor-pointer appearance-none`} style={{ background: 'transparent' }}>
                <option value="" disabled className="bg-midnight text-stone">Select type</option>
                {types.map((t) => (
                  <option key={t} value={t} className="bg-midnight text-parchment">{t}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-body text-[8px] tracking-[0.35em] uppercase text-stone/40">Message</span>
            <textarea
              rows={4}
              placeholder="Tell us about your project, dimensions, quantities, and requirements…"
              className={`${inputCls} resize-none`}
            />
          </label>

          <div>
            <button
              type="submit"
              className="w-full bg-gold text-midnight font-body font-normal text-[10px] tracking-[0.3em] uppercase py-4 hover:bg-gold-bright transition-colors duration-300"
            >
              Send Enquiry
            </button>
            <p className="font-body font-light text-[11px] text-stone/30 text-center mt-4">
              We respond within 24 hours
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
