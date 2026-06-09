'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const collections = [
  {
    name: 'Handmade Carpets',
    desc: 'Exquisite craftsmanship in every knot, timeless beauty for every space.',
    image: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <rect x="12" y="12" width="16" height="16" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
        <path d="M16 16L24 24M24 16L16 24" stroke="#0E1B2D" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Bespoke Tufted',
    desc: 'Custom designs. Precision crafted. Made entirely for your space.',
    image: 'https://images.unsplash.com/photo-1608724552908-e1c141f631ac?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <path d="M20 10L23 17L30 20L23 23L20 30L17 23L10 20L17 17L20 10Z" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    name: 'Pure Silk Rugs',
    desc: 'Luxurious silk, intricate details, and unmatched elegant sheen.',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <path d="M20 12C22 15 25 18 28 20C25 22 22 25 20 28C18 25 15 22 12 20C15 18 18 15 20 12Z" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="2" fill="#0E1B2D" />
      </svg>
    )
  },
  {
    name: 'Handloom Textures',
    desc: 'Woven with care, crafted by artisans, made for modern living.',
    image: 'https://images.unsplash.com/photo-1619444978283-cccfb92c357d?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#B88645" strokeWidth="1.5" />
        <rect x="14" y="10" width="12" height="20" stroke="#0E1B2D" strokeWidth="1.5" fill="none" />
        <path d="M14 15H26M14 20H26M14 25H26" stroke="#0E1B2D" strokeWidth="1" />
      </svg>
    )
  },
  {
    name: 'Bamboo Fibers',
    desc: 'Sustainable. Stylish. Sourced from nature, made to last.',
    image: 'https://plus.unsplash.com/premium_photo-1725295198378-d286934e2735?auto=format&fit=crop&w=600&q=80',
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
    <section id="collections" className="py-24 px-4 md:px-8 lg:px-12 bg-ivory relative border-t border-navy/5">
      
      <div className="max-w-7xl mx-auto mb-20 text-center flex flex-col items-center">
         <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-gold text-[8.5px] tracking-[0.5em] font-semibold uppercase mb-4 block"
          >
            The Archives
          </motion.span>
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="font-display font-normal text-[38px] md:text-[48px] lg:text-[54px] text-navy leading-[1.05]"
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

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8">
        {collections.map((col, i) => (
          <motion.div
            key={col.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col group cursor-pointer"
          >
            {/* Gallery Image Container */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[24px] mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5 bg-linen/50">
              <Image
                src={col.image}
                alt={col.name}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
              />
              {/* Subtle tint that fades on hover */}
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              
              {/* Subtle hover overlay badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <span className="bg-linen/95 backdrop-blur-sm text-navy px-5 py-2.5 rounded-full font-body text-[8.5px] uppercase tracking-[0.3em] font-semibold shadow-xl whitespace-nowrap">
                  Explore Gallery
                </span>
              </div>
            </div>

            {/* Typography Content */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="flex justify-center mb-5 opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-1 ease-out text-navy">
                {col.icon}
              </div>
              <h3 className="font-body text-navy font-semibold text-[10.5px] leading-snug tracking-[0.25em] uppercase mb-3 min-h-[30px] flex items-center justify-center transition-colors duration-300 group-hover:text-gold">
                {col.name}
              </h3>
              <p className="font-body text-navy/60 text-[12.5px] leading-[1.8] font-light max-w-[95%] transition-colors duration-300 group-hover:text-navy/80">
                {col.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative view all button at bottom */}
      <div className="flex justify-center mt-20">
         <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#process"
            className="group/btn inline-flex items-center gap-4 border border-gold/30 rounded-full px-8 py-3.5 hover:bg-gold hover:border-gold transition-all duration-500"
          >
            <span className="font-body text-[9.5px] tracking-[0.3em] uppercase text-navy font-semibold transition-colors duration-500 group-hover/btn:text-linen">
              View All Archives
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold group-hover/btn:text-linen transition-colors duration-500">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </motion.a>
      </div>

    </section>
  )
}
