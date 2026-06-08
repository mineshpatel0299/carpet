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
  'https://images.unsplash.com/photo-1683743116580-f7d6d978ec62?auto=format&fit=crop&w=1920&q=90'

const stats = [
  { number: 25, suffix: '+', label: 'Years of Craft' },
  { number: 48, suffix: '', label: 'Countries' },
  { number: 12000, suffix: '+', label: 'Carpets Woven' },
  { number: 100, suffix: '%', label: 'Handmade' },
]

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

const r2 = (n: number) => Math.round(n * 100) / 100

/* ── Large background medallion — traditional carpet centrepiece ── */
function MedallionGhost() {
  const spokes = Array.from({ length: 16 })
  const starPoints = Array.from({ length: 8 })
  return (
    <div className="absolute inset-0 flex items-center justify-end pr-[8%] pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        className="w-[min(88vh,56vw)] h-[min(88vh,56vw)] text-gold"
        fill="none"
        opacity="0.038"
      >
        {/* Concentric rings */}
        <circle cx="200" cy="200" r="196" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="174" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="116" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="80"  stroke="currentColor" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="44"  stroke="currentColor" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="18"  stroke="currentColor" strokeWidth="0.8" />
        {/* 16 radiating spokes from inner to outer ring */}
        {spokes.map((_, i) => {
          const a = ((i * 360) / 16) * (Math.PI / 180)
          return (
            <line
              key={i}
              x1={r2(200 + Math.cos(a) * 44)}
              y1={r2(200 + Math.sin(a) * 44)}
              x2={r2(200 + Math.cos(a) * 196)}
              y2={r2(200 + Math.sin(a) * 196)}
              stroke="currentColor"
              strokeWidth="0.45"
            />
          )
        })}
        {/* 8-pointed star at r=80 → r=116 */}
        {starPoints.map((_, i) => {
          const a0 = ((i * 360) / 8) * (Math.PI / 180)
          const a1 = (((i + 0.5) * 360) / 8) * (Math.PI / 180)
          const a2 = (((i + 1) * 360) / 8) * (Math.PI / 180)
          const p = (a: number, r: number) => `${r2(200 + Math.cos(a) * r)} ${r2(200 + Math.sin(a) * r)}`
          return (
            <path
              key={i}
              d={`M ${p(a0, 116)} L ${p(a1, 80)} L ${p(a2, 116)}`}
              stroke="currentColor"
              strokeWidth="0.8"
            />
          )
        })}
        {/* Outer decorative ring: repeating diamonds at r=174 */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = ((i * 360) / 24) * (Math.PI / 180)
          const cx = r2(200 + Math.cos(a) * 174)
          const cy = r2(200 + Math.sin(a) * 174)
          return (
            <rect
              key={i}
              x={r2(cx - 3)}
              y={r2(cy - 3)}
              width="6"
              height="6"
              transform={`rotate(45 ${r2(cx)} ${r2(cy)})`}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          )
        })}
      </svg>
    </div>
  )
}


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const rawImageY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const imageY = useSpring(rawImageY, { stiffness: 40, damping: 18 })

  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-185 overflow-hidden bg-midnight"
    >
      {/* Parallax carpet image */}
      <motion.div className="absolute inset-0 scale-[1.12]" style={{ y: imageY }}>
        <Image
          src={HERO_IMAGE}
          alt="Indian hand-knotted carpet — intricate medallion pattern"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>

      {/* Grain texture */}
      <div className="grain-layer" />

      {/* Layered cinematic overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-midnight/96 via-midnight/70 to-midnight/18" />
      <div className="absolute inset-0 bg-linear-to-t from-midnight/88 via-transparent to-midnight/45" />
      {/* Warm sienna undertone — echoes Indian carpet reds */}
      <div className="absolute inset-0 bg-linear-to-br from-sienna/15 via-transparent to-transparent" />

      {/* Large medallion ghost — right-side, behind carpet image reveal */}
      <MedallionGhost />

      {/* Left border accent */}
      <motion.div
        className="absolute left-6 md:left-10 top-28 bottom-25 w-px bg-gold/20"
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Scroll indicator */}
      <div className="absolute left-4.25 md:left-7.25 bottom-32 flex flex-col items-center gap-2 z-10">
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
          className="w-px h-10 bg-gold/35 origin-top"
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute bottom-36 sm:bottom-28 md:bottom-24 left-0 right-0 px-6 sm:px-12 md:px-24"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          className="block font-body text-[8px] tracking-[0.55em] uppercase text-gold mb-8"
        >
          Est. 1998 &nbsp;·&nbsp; Agra, India
        </motion.span>

        <h1 className="font-display font-normal leading-[0.92] text-[54px] md:text-[82px] xl:text-[104px] text-parchment">
          <WordReveal text="India's Finest" delay={0.45} />
        </h1>
        <h1 className="font-display font-normal italic leading-[0.92] text-[54px] md:text-[82px] xl:text-[104px] text-gold mb-12">
          <WordReveal text="Hand-Knotted Carpets." delay={0.62} />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-4"
        >
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
        </motion.div>

      </motion.div>

      {/* Stat strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-parchment/5 bg-midnight/70 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-parchment/8">
          {stats.map((s) => (
            <div key={s.label} className="py-3 md:py-3.25 text-center cursor-default bg-midnight/90">
              <div className="font-display font-normal text-[20px] md:text-[26px] text-gold leading-none">
                <CountUp target={s.number} suffix={s.suffix} />
              </div>
              <div className="font-body font-light text-[7px] tracking-[0.25em] md:tracking-[0.35em] uppercase text-stone-light/38 mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
