'use client'
import { useEffect, useRef, useState } from 'react'

const LOGO      = 'https://res.cloudinary.com/djicxkd9u/image/upload/v1781000444/hh_bkwaij.png'
const VIDEO_SRC = '/CVV.mp4'

type Phase = 'video' | 'logo-reveal' | 'logo-transit' | 'fading' | 'done'
type Rect  = { top: number; left: number; width: number; height: number }

// ── Tuning ────────────────────────────────────────────────────────────────
// How many seconds of video one "page" of scroll covers.
// Lower = slower (requires more scrolling to finish the video).
const SECONDS_PER_100PX = 0.012  // ~1.2s per 100px of raw wheel delta
// Spring damping – how quickly scroll momentum bleeds off (0→1, lower = floatier)
const DAMPING = 0.92
// How aggressively video.currentTime chases the target (0→1, lower = silkier lag)
const FOLLOW  = 0.12

export default function IntroScreen({
  onLogoLanded,
  onComplete,
}: {
  onLogoLanded?: () => void
  onComplete: () => void
}) {
  const [phase,    setPhase]    = useState<Phase>('video')
  const [navRect,  setNavRect]  = useState<Rect | null>(null)
  const [progress, setProgress] = useState(0)

  const videoRef  = useRef<HTMLVideoElement>(null)
  const triggered = useRef(false)
  const rafId     = useRef<number>(0)

  // Physics state — all in plain refs so rAF never re-renders
  const vel       = useRef(0)   // velocity in seconds/frame
  const target    = useRef(0)   // where we WANT video.currentTime to be
  const displayed = useRef(0)   // where video.currentTime actually is (chasing target)
  const prevNow   = useRef(0)

  // ── trigger the logo sequence once video is "done" ──────────────────────
  function triggerLogoReveal() {
    if (triggered.current) return
    triggered.current = true
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

  // ── main scrub loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    // ── rAF tick ────────────────────────────────────────────────────────
    function tick(now: number) {
      const video = videoRef.current
      if (!video || triggered.current) return

      // Real elapsed time (seconds), clamped to avoid spiral of death
      const dt = prevNow.current ? Math.min((now - prevNow.current) / 1000, 0.05) : 0.016
      prevNow.current = now

      const dur = video.duration || 1

      // 1. Apply damping to velocity (frame-rate independent via dt)
      const dampPerFrame = Math.pow(DAMPING, dt * 60)
      vel.current *= dampPerFrame

      // 2. Advance the TARGET (where we want to be) by velocity
      target.current = Math.max(0, Math.min(dur, target.current + vel.current))

      // 3. Smoothly FOLLOW target with a lerp (makes each frame feel silky)
      const followPerFrame = 1 - Math.pow(1 - FOLLOW, dt * 60)
      const nextTime = displayed.current + (target.current - displayed.current) * followPerFrame
      displayed.current = nextTime

      // 4. Write to video — use fastSeek() when available (less decode lag)
      const gap = Math.abs(nextTime - video.currentTime)
      if (gap > 0.005) {
        if (typeof (video as any).fastSeek === 'function') {
          ;(video as any).fastSeek(nextTime)
        } else {
          video.currentTime = nextTime
        }
      }

      // 5. Drive progress bar from target (feels more responsive than displayed)
      setProgress(target.current / dur)

      // 6. Completion check
      if (target.current >= dur - 0.04) {
        if (typeof (video as any).fastSeek === 'function') {
          ;(video as any).fastSeek(dur)
        } else {
          video.currentTime = dur
        }
        triggerLogoReveal()
        return
      }

      rafId.current = requestAnimationFrame(tick)
    }

    // ── Wheel ────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      // Normalize delta — trackpads fire many small events, mice fire fewer large ones
      const raw = e.deltaY + e.deltaX
      // pixelMode = 0 (pixel), 1 (line), 2 (page)
      const normalised = e.deltaMode === 1 ? raw * 16 : e.deltaMode === 2 ? raw * 100 : raw
      // Convert pixels → seconds and add directly to velocity
      vel.current += normalised * SECONDS_PER_100PX * 0.01
    }

    // ── Touch ────────────────────────────────────────────────────────────
    let touchY = 0
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY }
    const onTouchMove  = (e: TouchEvent) => {
      e.preventDefault()
      const dy = touchY - e.touches[0].clientY
      vel.current += dy * SECONDS_PER_100PX * 0.01 * 3
      touchY = e.touches[0].clientY
    }

    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true  })
    window.addEventListener('touchmove',  onTouchMove,  { passive: false })

    const startLoop = () => {
      prevNow.current = 0
      rafId.current = requestAnimationFrame(tick)
    }

    if (video.readyState >= 1) {
      startLoop()
    } else {
      video.addEventListener('loadedmetadata', startLoop, { once: true })
    }

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove',  onTouchMove)
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
        style={{ willChange: 'auto' }}
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
              transition: 'width 0.08s linear',
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

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
