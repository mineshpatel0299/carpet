'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Available Stock', href: '/available Stock' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar({ assembling = false }: { assembling?: boolean }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(!isHome)
  const [open, setOpen] = useState(false)

  // Once assembling fires (or if not on home), latch it — elements never go back to invisible
  const latched = useRef(!isHome)
  if (assembling) latched.current = true
  const show = latched.current

  useEffect(() => {
    if (!isHome) return
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [isHome])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? 'bg-linen/95 backdrop-blur-md border-b border-navy/10 shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="h-22.5 md:h-25 flex items-center justify-between px-6 md:px-14 lg:px-20">

        {/* ── Logo — crossfades with the intro logo ── */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group"
          style={{
            opacity: show ? 1 : 0,
            transition: 'opacity 0.45s ease',
            pointerEvents: show ? 'auto' : 'none',
          }}
        >
          <img
            src="https://res.cloudinary.com/djicxkd9u/image/upload/v1781000444/hh_bkwaij.png"
            alt="Creaticabud Logo"
            data-nav-logo
            className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* ── Centre nav — staggered slide-up ── */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {links.map(({ label, href }, i) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={label}
                href={href}
                className="relative font-body text-[10px] tracking-[0.2em] uppercase text-navy/70 hover:text-navy transition-colors duration-300 group/link font-semibold"
                style={{
                  opacity: show ? 1 : 0,
                  transform: show ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.55s ease ${100 + i * 85}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${100 + i * 85}ms`,
                  pointerEvents: show ? 'auto' : 'none',
                }}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
              </Link>
            )
          })}
        </nav>

        {/* ── Right actions — fade in last ── */}
        <div
          className="hidden md:flex items-center gap-7"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.55s ease 460ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) 460ms',
            pointerEvents: show ? 'auto' : 'none',
          }}
        >
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

          <Link
            href="/contact"
            className="relative font-body text-[10px] tracking-[0.25em] uppercase text-navy font-semibold hover:text-gold transition-colors duration-300 group/enquire"
          >
            Enquire
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover/enquire:w-full transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.25 w-6 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            opacity: show ? 1 : 0,
            transition: 'opacity 0.5s ease 300ms',
            pointerEvents: show ? 'auto' : 'none',
          }}
        >
          {/* use navy during assembly so it reads on the ivory/gold intro bg */}
          <span className={`block h-px w-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-1.5 bg-navy' : scrolled ? 'bg-navy' : show ? 'bg-navy' : 'bg-linen'}`} />
          <span className={`block h-px w-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0 bg-navy/50' : scrolled ? 'bg-navy/50' : show ? 'bg-navy/50' : 'bg-linen/50'}`} />
          <span className={`block h-px w-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-1.5 bg-navy' : scrolled ? 'bg-navy' : show ? 'bg-navy' : 'bg-linen'}`} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="md:hidden bg-linen/98 backdrop-blur-md border-b border-navy/10 px-6 pt-4 pb-8 flex flex-col gap-6 shadow-md">
          {links.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-body text-[12px] tracking-[0.2em] uppercase font-semibold transition-colors ${isActive ? 'text-gold' : 'text-navy/80 hover:text-gold'}`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
