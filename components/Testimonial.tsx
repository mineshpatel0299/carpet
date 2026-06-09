'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const quotes = [
  {
    text: 'The hand-knotted silk carpet Creaticabud created for our presidential suite is without question the finest piece in our entire property. Guests ask about it every single day.',
    name: 'James Harrington',
    role: 'Director of Design',
    company: 'Mayfair Collection, London',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=85',
  },
  {
    text: 'Working with Creaticabud on our villa project in Dubai was a revelation. Their ability to translate a mood board into a custom carpet — perfectly sized, perfectly coloured — is remarkable.',
    name: 'Layla Al-Mansouri',
    role: 'Principal Designer',
    company: 'Studio Mansouri, Dubai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=85',
  },
  {
    text: 'We have sourced carpets from India for thirty years. No other manufacturer combines the artisan quality of Creaticabud with such reliable logistics and export handling.',
    name: 'Henrik Sørensen',
    role: 'Head of Procurement',
    company: 'Nordisk Interiors, Copenhagen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85',
  },
]

export default function Testimonial() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0])

  const start = () => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % quotes.length)
    }, 5500)
  }

  useEffect(() => {
    start()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  const resume = () => start()

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-32 rounded-t-[40px]" style={{ background: '#0A0618' }} id="testimonials">

      {/* Jewel-dark parallax brocade pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ scale: bgScale }}
      >
        <div
          className="absolute inset-0 opacity-[0.038]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,#C98E38 0,#C98E38 1px,transparent 1px,transparent 16px),' +
              'repeating-linear-gradient(-45deg,#C98E38 0,#C98E38 1px,transparent 1px,transparent 16px)',
          }}
        />
      </motion.div>

      {/* Warm sienna bloom — bottom-left depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 15% 90%, rgba(168,64,48,0.11) 0%, transparent 50%)' }}
      />
      {/* Cool indigo bloom — top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(38,24,64,0.22) 0%, transparent 50%)' }}
      />

      {/* Large decorative quote mark */}
      <div className="absolute top-12 left-10 md:left-20 font-display text-[180px] font-normal text-gold/8 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="relative z-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/60 mb-5">
            Client Words
          </p>
          <h2 className="font-display font-normal text-[32px] md:text-[40px] text-parchment leading-[1.2] mb-8">
            What our clients say
          </h2>
          <div className="h-px bg-gold/15 mb-6 w-12" />
          <p className="font-body text-[12px] text-stone-light/40 leading-[1.9]">
            Supplied to 5-star properties in Dubai, London & New York. Trusted across 48 countries.
          </p>
        </motion.div>

        {/* Right */}
        <div
          onMouseEnter={pause}
          onMouseLeave={resume}
          className="cursor-default"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display italic font-normal text-[20px] md:text-[26px] xl:text-[30px] text-parchment leading-[1.6] mb-10">
                <span className="text-gold">"</span>
                {quotes[active].text}
                <span className="text-gold">"</span>
              </blockquote>

              <div className="flex items-center gap-5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/20 flex-shrink-0">
                  <Image
                    src={quotes[active].avatar}
                    alt={quotes[active].name}
                    fill
                    quality={90}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-body font-medium text-[13px] text-gold tracking-[0.06em]">
                    {quotes[active].name}
                  </div>
                  <div className="font-body font-light text-[11px] text-stone-light/45 mt-0.5">
                    {quotes[active].role} — {quotes[active].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-10">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-px transition-all duration-500 ${
                  i === active ? 'bg-gold w-10' : 'bg-gold/20 w-4 hover:bg-gold/40'
                }`}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
