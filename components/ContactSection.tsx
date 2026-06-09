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
  'w-full bg-transparent border-b border-navy/15 focus:border-gold/60 pb-3 pt-1 font-body font-light text-[13px] text-navy placeholder:text-navy/40 outline-none transition-colors duration-300'

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 30%'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['30px', '0px'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ivory px-6 sm:px-8 md:px-20 py-16 sm:py-20 md:py-28 grid grid-cols-1 md:grid-cols-[42%_58%] gap-12 md:gap-20 items-start"
      id="contact"
    >
      {/* Loom-thread vertical grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg,#C98E38 0,#C98E38 1px,transparent 1px,transparent 80px)',
        }}
      />
      {/* Saffron glow — top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 18% 18%, rgba(201,142,56,0.07) 0%, transparent 52%)' }}
      />

      {/* ── Left: intro + contact details ── */}
      <motion.div
        variants={stagger}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10"
      >
        <motion.p variants={fadeUp} className="font-body text-[8px] tracking-[0.5em] uppercase text-gold mb-6">
          Get in Touch
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display font-normal text-[36px] md:text-[52px] leading-[1.05] text-navy"
        >
          Let's create{' '}
          <span className="text-gold">something remarkable.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-body font-light text-[14px] leading-[1.95] text-navy mt-8 max-w-85"
        >
          Whether you're furnishing a villa, specifying for a hotel, or sourcing for your boutique — we'd love to hear about your requirements.
        </motion.p>

        <motion.div variants={stagger} className="mt-10 flex flex-col gap-4">
          {details.map((d) => (
            <motion.div key={d.label} variants={fadeUp} className="flex items-center gap-5">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-gold/55 w-14">
                {d.label}
              </span>
              <a href={d.href} className="font-body font-light text-[13px] text-stone/60 hover:text-gold transition-colors duration-300">
                {d.value}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 pt-8 border-t border-navy/10">
          <p className="font-body font-light text-[12px] leading-[2] text-navy/45">
            Creaticabud Exports Pvt. Ltd.<br />
            Carpet Nagar, Fatehabad Road<br />
            Agra, Uttar Pradesh — 282 001, India
          </p>
        </motion.div>
      </motion.div>

      {/* ── Right: enquiry form ── */}
      <motion.div
        style={{ y, opacity, background: 'rgba(255,255,255,0.55)' }}
        className="relative z-10 border border-stone/12 p-6 sm:p-8 md:p-10"
      >
        <h3 className="font-display font-normal text-[20px] text-navy mb-2">
          Send an Enquiry
        </h3>
        <div className="h-px bg-navy/10 mb-8 mt-5" />

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-navy">Full Name</span>
              <input type="text" placeholder="Your name" className={inputCls} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-navy">Email</span>
              <input type="email" placeholder="you@example.com" className={inputCls} />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-navy">Country</span>
              <input type="text" placeholder="Country of delivery" className={inputCls} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-body text-[8px] tracking-[0.35em] uppercase text-navy">Enquiry Type</span>
              <select
                defaultValue=""
                className={`${inputCls} cursor-pointer appearance-none`}
                style={{ background: 'transparent' }}
              >
                <option value="" disabled className="bg-ivory text-stone">Select type</option>
                {types.map((t) => (
                  <option key={t} value={t} className="bg-ivory text-navy">{t}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-body text-[8px] tracking-[0.35em] uppercase text-navy">Message</span>
            <textarea
              rows={4}
              placeholder="Tell us about your project, dimensions, quantities, and requirements…"
              className={`${inputCls} resize-none`}
            />
          </label>

          <div>
            <button
              type="submit"
              className="w-full bg-gold text-navy font-body font-normal text-[10px] tracking-[0.2em] uppercase py-4 hover:bg-gold-bright transition-colors duration-300"
            >
              Send Enquiry
            </button>
            <p className="font-body font-light text-[11px] text-stone/40 text-center mt-4">
              We respond within 24 hours
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
