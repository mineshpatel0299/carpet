'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Materials', href: '#materials' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-midnight/96 backdrop-blur-md border-b border-parchment/5' : ''
      }`}
    >
      <div className="h-[68px] flex items-center justify-between px-8 md:px-16">
        <a href="#" className="flex items-center gap-3">
          <span className="font-display font-light text-[15px] tracking-[0.3em] uppercase text-parchment">
            Creaticabud
          </span>
          <span className="hidden sm:block w-px h-3 bg-gold/30" />
          <span className="hidden sm:block font-body text-[8px] tracking-[0.4em] uppercase text-gold/50 pt-0.5">
            Carpets
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-light/55 hover:text-parchment transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-7">
          <span className="font-body text-[9px] tracking-[0.28em] text-stone/35 uppercase">India · EN</span>
          <a
            href="#contact"
            className="font-body text-[10px] tracking-[0.22em] uppercase text-gold hover:text-gold-bright transition-colors duration-300"
          >
            Enquire
          </a>
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-full bg-parchment transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-px w-full bg-parchment/50 transition-all duration-300 ${
              open ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px w-full bg-parchment transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-midnight/98 backdrop-blur-md border-b border-parchment/5 px-8 pt-4 pb-8 flex flex-col gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="font-body text-[11px] tracking-[0.22em] uppercase text-stone-light/70 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-body text-[11px] tracking-[0.22em] uppercase text-gold mt-2"
          >
            Enquire
          </a>
        </div>
      )}
    </header>
  )
}
