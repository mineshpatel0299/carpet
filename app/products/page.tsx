import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories } from '@/lib/products-data'
import ProductsHero from '@/components/products/ProductsHero'
import ProductGallery from '@/components/products/ProductGallery'
import BespokeEnquireButton from '@/components/products/BespokeEnquireButton'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-parchment">
      <Navbar />

      {/* ── Hero — client component (parallax scroll) ── */}
      <ProductsHero categories={categories} />

      {/* ── Category sections — static text server-rendered, gallery client ── */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className={`relative ${cat.bg} overflow-hidden`}>
          <div className="carpet-texture opacity-45" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-10" />

          {/* Decorative ghost number — static, no JS needed */}
          <div
            className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden pb-0"
            aria-hidden="true"
          >
            <span
              className="font-display font-normal text-navy/[0.025] leading-[0.85] whitespace-nowrap pl-4"
              style={{ fontSize: 'clamp(180px, 32vw, 420px)' }}
            >
              {cat.num}
            </span>
          </div>

          <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-14 py-20 md:py-28 lg:py-32">

            {/* ── Section header — fully server-rendered for SEO ── */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10 md:mb-14">

              {/* Left: number + heading */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">
                    {cat.num}
                  </span>
                  <div className="w-6 h-px bg-gold/40" />
                  <span className="font-body text-[8px] tracking-[0.4em] uppercase text-navy/35 font-semibold">
                    Material Collection
                  </span>
                </div>
                <h2
                  className="font-display font-normal"
                  style={{ fontSize: 'clamp(48px, 6.5vw, 88px)', lineHeight: 1.0, color: '#0E1B2D' }}
                >
                  {cat.name.split('/')[0].trim()}{' '}
                  <span className="italic">
                    {cat.name.includes('/') ? `/ ${cat.name.split('/')[1].trim()}` : cat.subtitle}
                  </span>
                </h2>
                <p className="font-display italic text-gold/60 mt-3 text-[15px] md:text-[17px]">
                  {cat.tagline}
                </p>
              </div>

              {/* Right: description */}
              <div className="max-w-[400px]">
                <p className="font-body font-light text-[13.5px] leading-[2.1] text-navy/55">
                  {cat.description}
                </p>
              </div>
            </div>

            {/* ── Specs — server-rendered as semantic dl for rich indexing ── */}
            <dl className="flex flex-wrap gap-x-8 gap-y-3 mb-14 border-t border-b border-navy/8 py-5">
              {cat.specs.map((spec) => (
                <div key={spec.k} className="flex items-baseline gap-2">
                  <dt className="font-body text-[7.5px] tracking-[0.45em] uppercase text-gold/60 font-semibold">
                    {spec.k}
                  </dt>
                  <dd className="font-body text-[12px] text-navy/65 font-light">
                    {spec.v}
                  </dd>
                </div>
              ))}
            </dl>

            {/* ── Gallery — client component (image switching + modal) ── */}
            <ProductGallery images={cat.images} catName={cat.name} />

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </section>
      ))}

      {/* ── Bespoke commission strip ── */}
      <section className="bg-parchment border-t border-navy/8 py-20 px-8 sm:px-14 md:px-20 relative">
        <div className="carpet-texture opacity-30" />
        <div className="relative z-10 max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Static text — server-rendered */}
          <div className="text-center md:text-left max-w-md">
            <p className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/60 mb-3 font-semibold">
              Bespoke Service
            </p>
            <h3 className="font-display font-normal text-navy text-[28px] md:text-[36px] leading-tight mb-4">
              Every piece, <span className="italic text-gold">uniquely yours.</span>
            </h3>
            <p className="font-body font-light text-[13px] text-navy/50 leading-[1.9]">
              All collections are available in custom dimensions, colour palettes, and weave densities.
              Contact our atelier to begin a commission.
            </p>
          </div>
          {/* CTA — client component (modal) */}
          <BespokeEnquireButton />
        </div>
      </section>

      <Footer />
    </main>
  )
}
