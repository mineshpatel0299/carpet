'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd1?auto=format&fit=crop&w=1920&q=90'

const stats = [
  { number: 25, suffix: '+', label: 'Years of Craft' },
  { number: 48, suffix: '', label: 'Countries' },
  { number: 12000, suffix: '+', label: 'Carpets Woven' },
  { number: 100, suffix: '%', label: 'Handmade' },
]

/* ── Word-by-word animated reveal ── */
function WordReveal({
  text,
  delay = 0,
  className,
}: {
  text: string
  delay?: number
  className?: string
}) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${className ?? ''}`}
            initial={{ y: '115%' }}
            animate={{ y: 0 }}
            transition={{
              delay: delay + i * 0.09,
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </>
  )
}

/* ── Animated counter ── */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let frame: number
    const start = performance.now()
    const duration = 2400
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.floor(eased * target))
      if (t < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  /* Parallax: image drifts up at 30% of scroll speed */
  const rawImageY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const imageY = useSpring(rawImageY, { stiffness: 40, damping: 18 })

  /* Text lifts and fades as you scroll away */
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[740px] overflow-hidden bg-midnight"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-[1.12]"
        style={{ y: imageY }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Luxury carpet in a grand interior"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>

      {/* Grain texture */}
      <div className="grain-layer" />

      {/* Cinematic gradient stack */}
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/92 via-midnight/55 to-midnight/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-midnight/25" />

      {/* Left border accent */}
      <motion.div
        className="absolute left-6 md:left-10 top-28 bottom-[100px] w-px bg-gold/20"
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Scroll indicator */}
      <div className="absolute left-[17px] md:left-[29px] bottom-32 flex flex-col items-center gap-2 z-10">
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
          className="w-px h-10 bg-gold/35 origin-top"
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute bottom-[96px] left-0 right-0 px-12 md:px-24"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          className="block font-body text-[8px] tracking-[0.55em] uppercase text-gold mb-7"
        >
          Agra, India &nbsp;·&nbsp; Est. 1998 &nbsp;·&nbsp; Manufacturer &amp; Exporter
        </motion.span>

        {/* Line 1 */}
        <h1 className="font-display font-normal leading-[0.9] text-[54px] md:text-[82px] xl:text-[104px] text-parchment">
          <WordReveal text="India's Finest" delay={0.45} />
        </h1>

        {/* Line 2 — italic gold */}
        <h1 className="font-display font-normal italic leading-[0.9] text-[54px] md:text-[82px] xl:text-[104px] text-gold mb-10">
          <WordReveal text="Hand-Knotted" delay={0.65} />
        </h1>

        {/* Line 3 — muted */}
        <h1 className="font-display font-normal leading-[0.9] text-[54px] md:text-[82px] xl:text-[104px] text-parchment/70 mb-12">
          <WordReveal text="Carpets." delay={0.82} />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9 }}
          className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14"
        >
          <p className="font-body font-light text-[14px] leading-[2] text-stone-light/65 max-w-[280px]">
            Woven knot by knot by master artisans in the Mughal tradition —
            for spaces that deserve the extraordinary.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#collections"
              className="font-body font-normal text-[10px] tracking-[0.28em] uppercase text-midnight bg-gold px-9 py-4 hover:bg-gold-bright transition-colors duration-300"
            >
              View Collections
            </a>
            <a
              href="#bespoke"
              className="font-body text-[10px] tracking-[0.28em] uppercase text-stone-light/50 hover:text-gold transition-colors duration-300"
            >
              Bespoke Order →
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Stat strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-parchment/5 bg-midnight/70 backdrop-blur-sm">
        <div className="grid grid-cols-4 divide-x divide-parchment/5">
          {stats.map((s) => (
            <div key={s.label} className="py-[13px] text-center cursor-default">
              <div className="font-display font-normal text-[22px] md:text-[26px] text-gold leading-none">
                <CountUp target={s.number} suffix={s.suffix} />
              </div>
              <div className="font-body font-light text-[7px] tracking-[0.35em] uppercase text-stone-light/38 mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
