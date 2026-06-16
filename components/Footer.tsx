import Link from 'next/link'

const navLinks = [
  { label: 'Home',       href: '/'        },
  { label: 'About Us',   href: '/about'   },
  { label: 'Products',   href: '/products'},
  { label: 'Contact Us', href: '/contact' },
]

const contactDetails = [
  { label: 'Email',    value: 'Creaticabudcarpets@gmail.com', href: 'mailto:Creaticabudcarpets@gmail.com' },
  { label: 'WhatsApp', value: '+91 98105 25135',              href: 'tel:+919810525135'                   },
]



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
      <div className="relative z-10 px-6 sm:px-8 md:px-20 py-12 md:py-14">

        {/* Brand row — full width */}
        <div className="mb-10 md:mb-0 md:grid md:grid-cols-[2fr_1fr_1fr] md:gap-16 md:items-start">
          <div>
            <div className="mb-5">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/djicxkd9u/image/upload/v1781000444/hh_bkwaij.png"
                  alt="Creaticabud Logo"
                  className="w-14 h-14 object-contain rounded-full"
                />
              </Link>
            </div>
            <p className="font-body font-light text-[13px] leading-relaxed text-navy/55 max-w-xs mb-7">
              Bringing heritage to modern homes with handcrafted carpets, rugs and sustainable handloom products made to last.
            </p>
            
          </div>

          {/* Navigate + Contact — hidden on mobile, shown inside grid on desktop */}
          <div className="hidden md:block">
            <div className="font-body text-[9px] tracking-[0.28em] uppercase text-gold mb-6 font-semibold">
              Navigate
            </div>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[13px] text-navy/65 hover:text-gold transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="font-body text-[9px] tracking-[0.28em] uppercase text-gold mb-6 font-semibold">
              Contact
            </div>
            <ul className="space-y-4">
              {contactDetails.map(({ label, value, href }) => (
                <li key={label}>
                  <p className="font-body text-[8px] tracking-[0.25em] uppercase text-navy/30 font-semibold mb-0.5">{label}</p>
                  <a href={href} className="font-body text-[13px] text-navy/65 hover:text-gold transition-colors duration-200">
                    {value}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <p className="font-body text-[8px] tracking-[0.25em] uppercase text-navy/30 font-semibold mb-0.5">Address</p>
                <p className="font-body text-[13px] text-navy/55 leading-relaxed">
                  U-112,Vidhata House,Vikas Marg,<br />Delhi-110092(INDIA)
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile-only: Navigate + Contact side by side */}
        <div className="md:hidden border-t border-navy/8 pt-8 grid grid-cols-2 gap-6">
          <div>
            <p className="font-body text-[9px] tracking-[0.28em] uppercase text-gold mb-5 font-semibold">
              Navigate
            </p>
            <ul className="space-y-3.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[13px] text-navy/65 hover:text-gold transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[9px] tracking-[0.28em] uppercase text-gold mb-5 font-semibold">
              Contact
            </p>
            <ul className="space-y-4">
              {contactDetails.map(({ label, value, href }) => (
                <li key={label}>
                  <p className="font-body text-[8px] tracking-[0.22em] uppercase text-navy/30 font-semibold mb-0.5">{label}</p>
                  <a href={href} className="font-body text-[12px] text-navy/65 hover:text-gold transition-colors duration-200 truncate block">
                    {value}
                  </a>
                </li>
              ))}
              <li>
                <p className="font-body text-[8px] tracking-[0.22em] uppercase text-navy/30 font-semibold mb-0.5">Address</p>
                <p className="font-body text-[12px] text-navy/55 leading-relaxed">
                  U-112,Vidhata House,Vikas Marg,<br />Delhi-110092(INDIA)
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* ── Tagline strip ── */}
      <div className="border-t border-navy/10 px-6 sm:px-8 md:px-20 py-10 flex flex-col items-center justify-center text-center relative z-10">
        <p className="font-body text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-navy/50 mb-2">
          Rooted in Tradition.
        </p>
        <p className="font-display text-[22px] md:text-[30px] tracking-widest text-navy mb-5 uppercase">
          Crafted for Generations.
        </p>
        <DiamondMark />
        <a
          href="https://www.creaticabudcarpets.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 font-body text-[11px] tracking-[0.2em] text-gold hover:text-navy transition-colors border border-navy/10 rounded-full px-5 py-2 bg-parchment/50 flex items-center gap-2"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          www.creaticabudcarpets.com
        </a>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-parchment border-t border-navy/10 px-6 sm:px-8 md:px-20 py-4 flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
        <span className="font-body text-[11px] text-navy/35">
          © {new Date().getFullYear()} Creaticabud Carpets. All rights reserved.
        </span>
        <Link
          href="/privacy-policy"
          className="font-body text-[11px] text-navy/35 hover:text-navy/70 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
