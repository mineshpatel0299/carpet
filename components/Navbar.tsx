'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Heritage',    href: '#heritage' },
  { label: 'Materials',   href: '#materials' },
  { label: 'Process',     href: '#process' },
]

function DiamondLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M60 3 L117 60 L60 117 L3 60 Z" stroke="#0E1B2D" strokeWidth="2.5" fill="none" />
      <path d="M60 22 L98 60 L60 98 L22 60 Z" stroke="#B88645" strokeWidth="2" fill="none" />
      <path d="M60 52 L68 60 L60 68 L52 60 Z" fill="#A84030" />
      <circle cx="60" cy="3"   r="4" fill="#0E1B2D" />
      <circle cx="117" cy="60" r="4" fill="#0E1B2D" />
      <circle cx="60" cy="117" r="4" fill="#0E1B2D" />
      <circle cx="3"  cy="60"  r="4" fill="#0E1B2D" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-linen/95 backdrop-blur-md border-b border-navy/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="h-[76px] flex items-center justify-between px-6 md:px-14 lg:px-20">

        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-3.5 group">
          <DiamondLogo />
          <div className="flex flex-col leading-none">
            <span className="font-body font-semibold text-[15px] tracking-[0.3em] uppercase text-navy">
              Creaticabud
            </span>
            <span className="font-body text-[8px] tracking-[0.4em] uppercase text-navy/70 mt-[3px]">
              Carpets
            </span>
          </div>
        </a>

        {/* ── Centre nav ── */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative font-body text-[10px] tracking-[0.2em] uppercase text-navy/70 hover:text-navy transition-colors duration-300 group/link font-semibold"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover/link:w-full transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
          ))}
        </nav>

        {/* ── Right actions ── */}
        <div className="hidden md:flex items-center gap-7">
          <button
            aria-label="Search"
            className="text-navy/50 hover:text-navy transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <div className="w-px h-4 bg-navy/20" />

          <a
            href="#contact"
            className="relative font-body text-[10px] tracking-[0.25em] uppercase text-navy font-semibold hover:text-gold transition-colors duration-300 group/enquire"
          >
            Enquire
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover/enquire:w-full transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-full bg-navy transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-px w-full bg-navy/50 transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-px w-full bg-navy transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="md:hidden bg-linen/98 backdrop-blur-md border-b border-navy/10 px-6 pt-4 pb-8 flex flex-col gap-6 shadow-md">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="font-body text-[12px] tracking-[0.2em] uppercase text-navy/80 font-semibold hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-body text-[12px] tracking-[0.2em] uppercase text-gold font-semibold mt-2"
          >
            Enquire
          </a>
        </div>
      )}
    </header>
  )
}
