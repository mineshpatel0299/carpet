'use client'
import { useState } from 'react'

const LOGO = 'https://res.cloudinary.com/djicxkd9u/image/upload/v1781000444/hh_bkwaij.png'

type Phase = 'idle' | 'splitting' | 'logo-reveal' | 'logo-transit' | 'fading' | 'done'
type Rect  = { top: number; left: number; width: number; height: number }

export default function IntroScreen({
  onLogoLanded,
  onComplete,
}: {
  onLogoLanded?: () => void
  onComplete: () => void
}) {
  const [phase,    setPhase]    = useState<Phase>('idle')
  const [navRect,  setNavRect]  = useState<Rect | null>(null)

  function enter() {
    setPhase('splitting')
    setTimeout(() => setPhase('logo-reveal'), 1150)
    setTimeout(() => {
      // Measure the real navbar logo pixel-perfectly before transit begins
      const el = document.querySelector('[data-nav-logo]') as HTMLElement | null
      if (el) {
        const r = el.getBoundingClientRect()
        setNavRect({ top: r.top, left: r.left, width: r.width, height: r.height })
      }
      setPhase('logo-transit')
    }, 2500)
    // logo arrives after 850 ms transit → trigger navbar assembly
    setTimeout(() => onLogoLanded?.(), 3350)
    setTimeout(() => { setPhase('fading'); onComplete() }, 3750)
    setTimeout(() => setPhase('done'), 4400)
  }

  if (phase === 'done') return null

  const split      = phase !== 'idle'
  const logoShown  = phase === 'logo-reveal' || phase === 'logo-transit'
  const logoAtNav  = phase === 'logo-transit'

  // Fallback coords if measurement fails (mobile defaults)
  const nav = navRect ?? { top: 5, left: 24, width: 80, height: 80 }

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #F9F6F0 0%, #EDD9A3 45%, #C9973A 100%)',
        opacity: phase === 'fading' ? 0 : 1,
        transition: phase === 'fading' ? 'opacity 0.6s ease' : undefined,
      }}
    >
      {/* ── Top carpet half ── */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 overflow-hidden"
        style={{
          transform: split ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 1.15s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        <img
          src="/images/luxury_red_floral_carpet.png"
          alt=""
          className="w-full h-full object-cover object-top select-none pointer-events-none"
          draggable={false}
        />
        {/* gradient toward center divider */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(249,246,240,0.05) 40%, rgba(205,163,72,0.45) 100%)' }}
        />
      </div>

      {/* ── Bottom carpet half ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden"
        style={{
          transform: split ? 'translateY(100%)' : 'translateY(0)',
          transition: 'transform 1.15s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        <img
          src="/images/luxury_red_floral_carpet.png"
          alt=""
          className="w-full h-full object-cover object-bottom select-none pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(249,246,240,0.05) 40%, rgba(205,163,72,0.45) 100%)' }}
        />
      </div>

      {/* ── Centre divider line ── */}
      <div
        className="absolute inset-x-0 pointer-events-none z-10"
        style={{
          top: 'calc(50% - 0.5px)',
          height: '1px',
          background: 'linear-gradient(to right, transparent 0%, rgba(184,134,69,0.8) 30%, rgba(184,134,69,0.8) 70%, transparent 100%)',
          opacity: split ? 0 : 1,
          transition: 'opacity 0.25s',
        }}
      />

      {/* ── Enter button (idle only) ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-0"
        style={{
          opacity: phase === 'idle' ? 1 : 0,
          transition: 'opacity 0.45s ease',
          pointerEvents: phase === 'idle' ? 'auto' : 'none',
        }}
      >
        {/* square button */}
        <button
          onClick={enter}
          aria-label="Enter the collection"
          className="group relative flex items-center justify-center focus:outline-none transition-all duration-400"
          style={{
            width: '188px',
            height: '52px',
            background: '#B88645',
          }}
        >
          {/* shimmer on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          />
          <span
            className="relative font-body text-[9px] tracking-[0.38em] uppercase select-none"
            style={{ color: '#FDFBF7' }}
          >
            Enter The Collection
          </span>
        </button>
      </div>

      {/* ── Logo: reveal in centre, then transit to navbar ── */}
      <div
        className="pointer-events-none"
        style={{
          position: 'fixed',
          zIndex: 300,
          /* position + size transition for nav transit */
          top:    logoAtNav ? `${nav.top}px`    : 'calc(50vh - 130px)',
          left:   logoAtNav ? `${nav.left}px`   : 'calc(50vw - 130px)',
          width:  logoAtNav ? `${nav.width}px`  : '260px',
          height: logoAtNav ? `${nav.height}px` : '260px',
          transition: logoAtNav
            ? 'top 0.85s cubic-bezier(0.76,0,0.24,1), left 0.85s cubic-bezier(0.76,0,0.24,1), width 0.85s cubic-bezier(0.76,0,0.24,1), height 0.85s cubic-bezier(0.76,0,0.24,1)'
            : undefined,
        }}
      >
        {/* inner wrapper for fade+scale entrance */}
        <div
          style={{
            width: '100%',
            height: '100%',
            opacity:   logoShown ? 1 : 0,
            transform: logoShown ? 'scale(1)' : 'scale(0.78)',
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

    </div>
  )
}
