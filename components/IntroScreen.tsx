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
  const [phase,   setPhase]   = useState<Phase>('video')
  const [navRect, setNavRect] = useState<Rect | null>(null)

  const videoRef  = useRef<HTMLVideoElement>(null)
  const triggered = useRef(false)

  // ── trigger the logo sequence once video ends ────────────────────────────
  function triggerLogoReveal() {
    if (triggered.current) return
    triggered.current = true

    // Unlock scroll so the rest of the page is accessible
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
    }, 3800)

    setTimeout(() => onLogoLanded?.(), 4650)
    setTimeout(() => { setPhase('fading'); onComplete() }, 5100)
    setTimeout(() => setPhase('done'), 5750)
  }

  // ── autoplay + onEnded ───────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Lock scroll during intro
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    // Kick off playback (must be muted for autoplay policy on mobile)
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked (very rare since we are muted) — skip straight to logo
        triggerLogoReveal()
      })
    }

    const onEnded = () => triggerLogoReveal()
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('ended', onEnded)
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
      {/* ── Video ─────────────────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        muted
        autoPlay
        playsInline          // required for iOS inline playback
        preload="auto"
        draggable={false}
        webkit-playsinline="true"  // older iOS WebKit
      />

      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)' }}
      />

      {/* ── Scroll hint (shown at start) ───────────────────────────────────── */}
      {phase === 'video' && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ animation: 'scrollBounce 1.6s ease-in-out infinite' }}
          >
            <path d="M1 8l7 7 7-7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 14l7 7 7-7" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      {/* ── Logo: reveal → transit to navbar ─────────────────────────────── */}
      <div
        className="pointer-events-none intro-logo-container"
        style={{
          position: 'fixed',
          zIndex:   300,
          top:    logoAtNav ? `${nav.top}px`    : 'calc(50vh - var(--logo-size) / 2)',
          left:   logoAtNav ? `${nav.left}px`   : 'calc(50vw - var(--logo-size) / 2)',
          width:  logoAtNav ? `${nav.width}px`  : 'var(--logo-size)',
          height: logoAtNav ? `${nav.height}px` : 'var(--logo-size)',
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
        .intro-logo-container {
          --logo-size: 280px;
        }
        @media (min-width: 768px) {
          .intro-logo-container {
            --logo-size: 380px;
          }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
