'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const collections = [
  {
    name: 'Handmade Carpets and Rugs',
    desc: 'Exquisite craftsmanship in every knot, timeless beauty for every space.',
    image: '/images/collections/handmade.png',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <rect x="12" y="12" width="16" height="16" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
        <path d="M16 16L24 24M24 16L16 24" stroke="#0E1B2D" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Customised tufted and hand knotted carpets and rugs',
    desc: 'Custom designs. Precision crafted. Made entirely for your space.',
    image: '/images/collections/tufted.png',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <path d="M20 10L23 17L30 20L23 23L20 30L17 23L10 20L17 17L20 10Z" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    name: 'silk carpet and rugs',
    desc: 'Luxurious silk, intricate details, and unmatched elegant sheen.',
    image: '/images/collections/silk.png',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <path d="M20 12C22 15 25 18 28 20C25 22 22 25 20 28C18 25 15 22 12 20C15 18 18 15 20 12Z" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="2" fill="#0E1B2D" />
      </svg>
    )
  },
  {
    name: 'Handloom products',
    desc: 'Woven with care, crafted by artisans, made for modern living.',
    image: '/images/collections/handloom_new.png',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <rect x="14" y="10" width="12" height="20" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
        <path d="M14 15H26M14 20H26M14 25H26" stroke="#0E1B2D" strokeWidth="1" />
      </svg>
    )
  },
  {
    name: 'Bamboo products',
    desc: 'Sustainable. Stylish. Sourced from nature, made to last.',
    image: '/images/collections/bamboo_new.png',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <path d="M16 10V30M24 10V30" stroke="#0E1B2D" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 16H18M14 24H18M22 16H26M22 24H26" stroke="#0E1B2D" strokeWidth="1.5" />
      </svg>
    )
  }
]

export default function CollectionsGrid() {
  return (
    <section id="collections" className="py-12 md:py-24 px-4 md:px-8 lg:px-12 bg-ivory relative border-t border-navy/5">
      <div className="carpet-texture" />
      <div className="max-w-7xl mx-auto mb-10 md:mb-20 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-body text-gold text-[7px] md:text-[8.5px] tracking-[0.35em] md:tracking-[0.5em] font-semibold uppercase mb-3 md:mb-4 block"
        >
          The Archives
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-normal text-[28px] md:text-[48px] lg:text-[54px] text-navy leading-[1.05]"
        >
          Curated <span className="text-gold">Collections.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex justify-center items-center opacity-70"
        >
          <div className="w-10 h-[1px] bg-gold/40" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold/60 mx-3" />
          <div className="w-10 h-[1px] bg-gold/40" />
        </motion.div>
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8 lg:gap-10 px-2 md:px-8">
        {collections.map((col, i) => {
          // Stagger alternate items down slightly for an editorial look
          const isStaggered = i % 2 !== 0;

          return (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className={`flex flex-col group cursor-pointer ${isStaggered ? 'lg:translate-y-16' : ''}`}
            >
              {/* Gallery Arch Container */}
              <div className="relative w-full aspect-[3/4] md:aspect-[3/5] lg:aspect-[4/7] overflow-hidden rounded-t-[1000px] rounded-b-[12px] md:rounded-b-[24px] mb-4 md:mb-8 shadow-[0_8px_24px_rgb(184,134,69,0.08)] md:shadow-[0_15px_40px_rgb(184,134,69,0.06)] border border-navy/5 bg-linen/50 transition-transform duration-700 ease-out group-hover:-translate-y-2 md:group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgb(184,134,69,0.15)]">
                
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
                
                {/* Subtle tint that fades on hover */}
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />

                {/* Subtle hover overlay badge */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none z-10">
                  <span className="bg-linen/95 backdrop-blur-md text-navy px-3 py-1.5 md:px-6 md:py-3 rounded-full font-body text-[7px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold shadow-2xl whitespace-nowrap">
                    Explore
                  </span>
                </div>
              </div>

              {/* Typography Content */}
              <div className="flex flex-col items-center text-center px-1 md:px-2">
                {/* Icon: hidden on mobile for cleaner look */}
                <div className="hidden md:flex justify-center mb-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform group-hover:-translate-y-1 ease-out text-navy group-hover:text-gold">
                  {col.icon}
                </div>
                <h3 className="font-body text-navy font-semibold text-[8px] md:text-[11px] leading-snug tracking-[0.12em] md:tracking-[0.2em] uppercase mb-1.5 md:mb-4 min-h-[24px] md:min-h-[30px] flex items-center justify-center transition-colors duration-300 group-hover:text-gold">
                  {col.name}
                </h3>
                
                {/* Expanding Gold Line */}
                <div className="w-4 md:w-6 h-px bg-gold/40 mb-1.5 md:mb-4 group-hover:w-8 md:group-hover:w-12 transition-all duration-500" />

                {/* Desc: hidden on mobile for clean minimal look */}
                <p className="hidden md:block font-body text-navy/60 text-[12.5px] leading-[1.8] font-light max-w-[95%] transition-colors duration-300 group-hover:text-navy/80">
                  {col.desc}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Decorative view all button at bottom */}
     

    </section>
  )
}
