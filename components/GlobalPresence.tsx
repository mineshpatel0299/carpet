'use client'
import { motion, type Variants } from 'framer-motion'

const stats = [
  { figure: '25',  suffix: '+', label: 'Years of\nExcellence'    },
  { figure: '48',  suffix: '',  label: 'Countries\nServed'       },
  { figure: '500', suffix: '+', label: 'Bespoke\nDesigns'        },
  { figure: '10k', suffix: '+', label: 'Pieces\nDelivered'       },
]

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const statItem: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: easing } },
}

export default function GlobalPresence() {
  return (
    <section className="relative bg-midnight overflow-hidden py-28 md:py-40">
      {/* Dark carpet corner texture */}
      <div className="dark-carpet-texture" />

      {/* Faint gold bloom, centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,69,0.07) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">

        {/* ── Header ── */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-5 mb-8"
          >
            <div className="w-12 h-px bg-gold/35" />
            <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold/70 font-semibold">
              Our Footprint
            </span>
            <div className="w-12 h-px bg-gold/35" />
          </motion.div>

          <div className="overflow-hidden mb-1">
            <motion.h2
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-normal text-linen leading-[1.05]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 62px)' }}
            >
              Woven into the World's
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic text-gold leading-[1.05]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 62px)' }}
            >
              Finest Interiors.
            </motion.h2>
          </div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map(({ figure, suffix, label }, i) => (
            <motion.div
              key={label}
              variants={statItem}
              className={`
                relative flex flex-col items-center justify-center
                py-14 md:py-20 px-6 text-center
                ${i % 2 !== 0 ? 'border-l border-gold/12' : ''}
                lg:border-l lg:first:border-l-0 lg:border-gold/12
              `}
            >
              {/* Thin gold horizontal accent line above */}
              <div className="w-8 h-px bg-gold/30 mb-8" />

              {/* Number */}
              <div className="flex items-start leading-none mb-5">
                <span
                  className="font-display text-linen"
                  style={{ fontSize: 'clamp(64px, 8vw, 110px)', lineHeight: 1 }}
                >
                  {figure}
                </span>
                {suffix && (
                  <span
                    className="font-display text-gold mt-2"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                  >
                    {suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className="font-body text-[9px] tracking-[0.35em] uppercase text-gold/55 font-semibold whitespace-pre-line leading-[1.9]">
                {label}
              </span>

              {/* Bottom accent */}
              <div className="w-8 h-px bg-gold/20 mt-8" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom rule + tagline ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="mt-20 md:mt-28 flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-5 w-full max-w-xl">
            <div className="flex-1 h-px bg-gold/18" />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0L10 5L5 10L0 5Z" fill="#B88645" opacity="0.5" />
            </svg>
            <div className="flex-1 h-px bg-gold/18" />
          </div>
          <p className="font-display italic text-[15px] md:text-[17px] text-linen/30 tracking-wide">
            Every knot a testament. Every carpet a journey.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
