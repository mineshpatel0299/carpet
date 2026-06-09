import { ReactNode } from 'react'

const collections  = ['Handmade Carpets & Rugs', 'Custom Tufted & Knotted', 'Silk Carpets', 'Handloom Products', 'Bamboo Products']
const company      = ['Our Heritage', 'The Artisans', 'Sustainability', 'Quality Standards', 'Press & Media']
const exportTrade  = ['Export Services', 'Trade Programme', 'Hotel & Hospitality', 'Interior Designers', 'Wholesale']
const socials      = ['Instagram', 'LinkedIn', 'Pinterest']

function Column({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">
        {title}
      </div>
      <ul className="space-y-3.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="font-body text-[13px] text-navy/70 hover:text-gold transition-colors duration-200"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DiamondMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-80 mx-auto">
      <path d="M12 2L15 12L12 22L9 12L12 2Z" fill="#B88645" />
      <path d="M2 12L12 9L22 12L12 15L2 12Z" fill="#B88645" />
      <circle cx="12" cy="12" r="3" fill="#0E1B2D" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-linen border-t border-navy/10 relative">
      <div className="carpet-texture" />
      {/* ── Main content ── */}
      <div className="px-6 sm:px-8 md:px-20 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-16">
        {/* Brand column */}
        <div>
          <div className="mb-6">
            <img 
              src="https://res.cloudinary.com/djicxkd9u/image/upload/v1781000444/hh_bkwaij.png" 
              alt="Creaticabud Logo" 
              className="w-20 h-20 object-contain rounded-full" 
            />
          </div>
          <p className="font-body font-light text-[14px] leading-relaxed text-navy/70 max-w-[280px] mb-8">
            Bringing heritage to modern homes with handcrafted carpets, rugs and sustainable handloom products made to last.
          </p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-[10px] tracking-[0.15em] uppercase text-navy/50 hover:text-gold transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:contents gap-10 md:gap-0">
          <Column title="Collections" links={collections} />
          <Column title="Company"     links={company} />
          <Column title="Export"      links={exportTrade} />
        </div>
      </div>

      {/* ── Tagline strip from poster ── */}
      <div className="border-t border-navy/10 px-6 sm:px-8 md:px-20 py-12 flex flex-col items-center justify-center text-center relative z-10">
        <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-navy/70 mb-3">
          Rooted in Tradition.
        </p>
        <p className="font-display text-[26px] md:text-[36px] tracking-widest text-navy mb-6 uppercase">
          Crafted for Generations.
        </p>
        <DiamondMark />
        <a
          href="https://www.creaticabudcarpets.com"
          className="mt-6 font-body text-xs md:text-sm tracking-[0.2em] text-gold hover:text-navy transition-colors border border-navy/10 rounded-full px-6 py-2 bg-parchment/50 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          www.creaticabudcarpets.com
        </a>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-parchment border-t border-navy/10 px-6 sm:px-8 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <span className="font-body font-light text-[11px] text-navy/40">
          © {new Date().getFullYear()} Creaticabud Carpets. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Use', 'Export Policy'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-body font-light text-[11px] text-navy/40 hover:text-navy/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
