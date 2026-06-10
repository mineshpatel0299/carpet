'use client'
import { useEffect, useRef, useState } from 'react'

const LOGO      = 'https://res.cloudinary.com/djicxkd9u/image/upload/v1781000444/hh_bkwaij.png'
const VIDEO_SRC = '/CVV.mp4'

type Phase = 'video' | 'logo-reveal' | 'logo-transit' | 'fading' | 'done'
type Rect  = { top: number; left: number; width: number; height: number }

export default function IntroScreen({
  onLogoLanded,
  onComplete,
}: {
  onLogoLanded?: () => void
  onComplete: () => void
}) {
  const [phase,    setPhase]    = useState<Phase>('video')
  const [navRect,  setNavRect]  = useState<Rect | null>(null)
  const [progress, setProgress] = useState(0) // 0-1 for the scroll hint bar

  const videoRef   = useRef<HTMLVideoElement>(null)
  const triggered  = useRef(false)
  const scrollAcc  = useRef(0)           // accumulated raw scroll delta
  const rafId      = useRef<number>(0)
  const velocity   = useRef(0)           // smooth velocity for butter feel
  const lastRaf    = useRef<number>(0)

  // ── trigger the logo sequence once video is "done" ──────────────────────
  function triggerLogoReveal() {
    if (triggered.current) return
    triggered.current = true

    // Re-enable native scroll immediately so the site doesn't feel frozen
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''

    setPhase('logo-reveal')

    setTimeout(() => {
      const el = document.querySelector('[data-nav-logo]') as HTMLElement | null
      if (el) {
        const r = el.getBoundingClientRect()
        setNavRect({ top: r.top, left: r.left, width: r.width, height: r.height })
      }
      setPhase('logo-transit')
    }, 1300)

    setTimeout(() => onLogoLanded?.(), 2150)
    setTimeout(() => { setPhase('fading'); onComplete() }, 2550)
    setTimeout(() => setPhase('done'), 3200)
  }

  // ── scroll-scrub logic ───────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Lock native scroll while intro is active
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    // Target currentTime, updated smoothly via rAF
    let targetTime = 0

    const SENSITIVITY = 0.006   // pixels-of-delta → seconds scrubbed
    const LERP        = 0.10    // interpolation factor (lower = smoother)

    function tick(now: number) {
      const video = videoRef.current
      if (!video || triggered.current) return

      const dt = lastRaf.current ? Math.min((now - lastRaf.current) / 1000, 0.1) : 0
      lastRaf.current = now

      // Apply momentum decay
      velocity.current *= Math.pow(0.88, dt * 60)

      // Absorb accumulated raw scroll into velocity
      if (scrollAcc.current !== 0) {
        velocity.current += scrollAcc.current * SENSITIVITY
        scrollAcc.current = 0
      }

      // Advance target time
      const dur = video.duration || 1
      targetTime = Math.min(Math.max(targetTime + velocity.current, 0), dur)

      // Smoothly interpolate video.currentTime toward target
      const current = video.currentTime
      const next    = current + (targetTime - current) * LERP

      // Only write when change is meaningful (avoids seek thrashing)
      if (Math.abs(next - current) > 0.001) {
        video.currentTime = next
      }

      // Update progress bar
      setProgress(targetTime / dur)

      // Check completion
      if (targetTime >= dur - 0.05) {
        video.currentTime = dur
        triggerLogoReveal()
        return
      }

      rafId.current = requestAnimationFrame(tick)
    }

    // Wheel handler — accumulate raw delta
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollAcc.current += e.deltaY + e.deltaX
    }

    // Touch handler
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const dy = touchStartY - e.touches[0].clientY
      scrollAcc.current += dy * 2
      touchStartY = e.touches[0].clientY
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })

    // Start the rAF loop once video metadata is ready
    const startLoop = () => {
      lastRaf.current = 0
      rafId.current = requestAnimationFrame(tick)
    }

    if (video.readyState >= 1) {
      startLoop()
    } else {
      video.addEventListener('loadedmetadata', startLoop, { once: true })
    }

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase === 'done') return null

  const logoShown = phase === 'logo-reveal' || phase === 'logo-transit'
  const logoAtNav = phase === 'logo-transit'
  const nav       = navRect ?? { top: 5, left: 24, width: 80, height: 80 }

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden"
      style={{
        background: '#0a0806',
        opacity:    phase === 'fading' ? 0 : 1,
        transition: phase === 'fading' ? 'opacity 0.65s ease' : undefined,
      }}
    >
      {/* ── Video ── */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        muted
        playsInline
        preload="auto"
        draggable={false}
      />

      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)' }}
      />

      {/* ── Scroll hint ── */}
      {phase === 'video' && (
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
          style={{ opacity: progress < 0.05 ? 1 : 0, transition: 'opacity 0.6s ease' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.65rem',
              letterSpacing: '0.28em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </span>
          {/* Animated chevron */}
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ animation: 'scrollBounce 1.6s ease-in-out infinite' }}>
            <path d="M1 8l7 7 7-7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 14l7 7 7-7" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      {/* ── Progress bar ── */}
      {phase === 'video' && (
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{ height: '2px', background: 'rgba(255,255,255,0.08)' }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress * 100}%`,
              background: 'linear-gradient(90deg, rgba(184,134,69,0.7), rgba(217,160,91,1))',
              transition: 'width 0.05s linear',
              boxShadow: '0 0 8px rgba(217,160,91,0.6)',
            }}
          />
        </div>
      )}

      {/* ── Logo: reveal → transit to navbar ── */}
      <div
        className="pointer-events-none"
        style={{
          position:   'fixed',
          zIndex:     300,
          top:    logoAtNav ? `${nav.top}px`    : 'calc(50vh - 130px)',
          left:   logoAtNav ? `${nav.left}px`   : 'calc(50vw - 130px)',
          width:  logoAtNav ? `${nav.width}px`  : '260px',
          height: logoAtNav ? `${nav.height}px` : '260px',
          transition: logoAtNav
            ? 'top 0.85s cubic-bezier(0.76,0,0.24,1), left 0.85s cubic-bezier(0.76,0,0.24,1), width 0.85s cubic-bezier(0.76,0,0.24,1), height 0.85s cubic-bezier(0.76,0,0.24,1)'
            : undefined,
        }}
      >
        <div
          style={{
            width:      '100%',
            height:     '100%',
            opacity:    logoShown ? 1 : 0,
            transform:  logoShown ? 'scale(1)' : 'scale(0.78)',
            transition: 'opacity 0.65s ease, transform 0.65s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <img
            src={LOGO}
            alt="Creaticabud"
            className="w-full h-full object-contain rounded-full"
            draggable={false}
          />
        </div>
      </div>

      {/* bounce keyframe injected inline */}
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
