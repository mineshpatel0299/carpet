'use client'
import { motion, type Variants } from 'framer-motion'

const pillars = [
  {
    roman: 'I',
    title: 'Authenticity',
    body: 'Every carpet is signed by the artisan who wove it. No two pieces are identical — authenticity is the nature of hand-knotted craft.',
  },
  {
    roman: 'II',
    title: 'Craftsmanship',
    body: 'Our weavers spend up to six months on a single piece. Machines make rugs. Our artisans make heirlooms.',
  },
  {
    roman: 'III',
    title: 'Legacy',
    body: 'Made from natural fibres with no chemical treatment, a Creaticabud carpet will outlast the room it adorns.',
  },
]

const rowVariants: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

export default function BrandManifesto() {
  return (
    <section className="relative overflow-hidden">

      {/* ════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
      ════════════════════════════════════════ */}
      <div className="block lg:hidden">

        {/* ── Hero block ── */}
        <div className="relative bg-parchment overflow-hidden px-6 py-14 flex flex-col items-center text-center">
          <div className="carpet-texture opacity-35" />
          {/* Gold bloom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(201,142,56,0.07) 0%, transparent 60%)' }}
          />
          {/* Top hairline */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

          <div className="relative z-10 flex flex-col items-center">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-6 h-px bg-gold/40" />
              <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">
                Our Promise
              </span>
              <div className="w-6 h-px bg-gold/40" />
            </motion.div>

            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-gold/30" />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4L5 0Z" fill="#B88645" opacity="0.6" />
              </svg>
              <div className="w-12 h-px bg-gold/30" />
            </motion.div>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-display italic text-[15px] leading-[1.9] text-navy/45"
            >
              "A carpet from Creaticabud<br />is not a purchase.<br />
              <span className="text-gold/70">It is an inheritance."</span>
            </motion.p>

          </div>

          {/* Bottom hairline */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
        </div>

        {/* ── Pillar cards ── */}
        <div className="bg-parchment relative">
          <div className="carpet-texture opacity-35" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="relative z-10 flex flex-col divide-y divide-navy/8 px-6"
          >
            {pillars.map(({ roman, title, body }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
                className="flex flex-col items-center text-center py-10"
              >
                <span
                  className="font-display text-gold/35 leading-none mb-4"
                  style={{ fontSize: 'clamp(36px, 10vw, 52px)' }}
                >
                  {roman}
                </span>
                <div className="w-6 h-px bg-gold/30 mb-4" />
                <h3 className="font-display font-normal text-[20px] text-navy mb-3 leading-snug">
                  {title}
                </h3>
                <p className="font-body font-light text-[13px] leading-loose text-navy/55 max-w-xs">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
        </div>

      </div>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg)
      ════════════════════════════════════════ */}
      <div className="hidden lg:block relative bg-parchment">
        <div className="carpet-texture opacity-35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

        <div className="relative z-10 max-w-350 mx-auto px-20">
          <div className="grid grid-cols-[38%_62%] min-h-0">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="flex flex-col justify-center py-20 pr-16 border-r border-navy/8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-gold/50" />
                <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">
                  Our Promise
                </span>
              </div>
              <h2
                className="font-display font-normal text-navy leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}
              >
                A Commitment<br />
                Woven Into<br />
                <span className="italic text-gold">Every Knot.</span>
              </h2>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-px bg-gold/35" />
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                  <path d="M3.5 0L7 3.5L3.5 7L0 3.5Z" fill="#B88645" opacity="0.6" />
                </svg>
              </div>
              <p className="font-display italic text-[14px] md:text-[15px] leading-[1.8] text-navy/45">
                "A carpet from Creaticabud<br />is not a purchase.<br />
                <span className="text-gold/70">It is an inheritance."</span>
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col divide-y divide-navy/8 pl-16"
            >
              {pillars.map(({ roman, title, body }) => (
                <motion.div
                  key={title}
                  variants={rowVariants}
                  className="group grid grid-cols-[48px_1fr] gap-6 items-start py-10 hover:bg-ivory/60 transition-colors duration-400"
                >
                  <div className="pt-0.5">
                    <span
                      className="font-display text-gold/40 leading-none group-hover:text-gold/70 transition-colors duration-400"
                      style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
                    >
                      {roman}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-normal text-[18px] md:text-[20px] text-navy mb-2.5 group-hover:text-gold transition-colors duration-400 leading-snug">
                      {title}
                    </h3>
                    <p className="font-body font-light text-[13px] md:text-[13.5px] leading-[1.9] text-navy/55">
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </div>

    </section>
  )
}
