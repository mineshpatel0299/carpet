import { motion } from 'framer-motion'

const collections = ['Handmade Carpets & Rugs', 'Silk Carpets', 'Custom Knotted', 'Handloom Products', 'Bamboo Products']
const company     = ['Our Heritage', 'The Artisans', 'Sustainability', 'Quality Standards', 'Press & Media']
const exportTrade = ['Export Services', 'Trade Programme', 'Hotel & Hospitality', 'Interior Designers', 'Wholesale']

function Column({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-body text-[8px] tracking-[0.45em] uppercase text-stone-light/30 mb-6">{title}</div>
      <ul className="space-y-3.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="font-body font-light text-[13px] text-stone-light/45 hover:text-parchment transition-colors duration-200">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#07040F] rounded-t-[40px] overflow-hidden">
      <div className="px-6 sm:px-8 md:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr_1fr] gap-10 md:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-normal text-[15px] tracking-[0.28em] uppercase text-parchment">
              Creaticabud
            </span>
            <span className="w-px h-3 bg-gold/25" />
            <span className="font-body text-[8px] tracking-[0.4em] uppercase text-gold/40 pt-0.5">
              Carpets
            </span>
          </div>
          <p className="font-body font-light text-[13px] leading-[1.9] text-stone-light/40 max-w-[210px] mb-8">
            Handmade carpets by master artisans in Agra, India. Supplying hotels, designers, and collectors worldwide since 1998.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'LinkedIn', 'Pinterest'].map((s) => (
              <a key={s} href="#" className="font-body text-[8px] tracking-[0.2em] uppercase text-stone/30 hover:text-gold transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:contents gap-10 md:gap-0">
          <Column title="Collections" links={collections} />
          <Column title="Company"     links={company} />
          <Column title="Export"      links={exportTrade} />
        </div>
      </div>

      <div className="border-t border-parchment/5 px-6 sm:px-8 md:px-20 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-body font-light text-[11px] text-stone/25">
          © {new Date().getFullYear()} Creaticabud Exports Pvt. Ltd. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Use', 'Export Policy'].map((item) => (
            <a key={item} href="#" className="font-body font-light text-[11px] text-stone/25 hover:text-stone/50 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
