'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const moments = [
  {
    chapter: '01',
    label: 'The Foundation',
    title: 'Vertical looms standing eight feet tall',
    body: 'Each carpet begins on a hand-built wooden loom strung with warp threads. Our weavers learn to read the pattern map as fluently as a musician reads sheet music.',
    image: 'https://images.unsplash.com/photo-1740168254713-1e8695f89ffe?auto=format&fit=crop&w=1400&q=90',
    stat: { figure: '6', label: 'Months per carpet' },
    reverse: false
  },
  {
    chapter: '02',
    label: 'The Technique',
    title: 'A million knots, tied individually by hand',
    body: 'The Persian knot — tied, cut, and compacted row by row. A master weaver works with rhythmic precision. A 9×12 carpet represents six months of a single life.',
    image: 'https://images.unsplash.com/photo-1669046638657-3fe7e9b0f9b9?auto=format&fit=crop&w=1400&q=90',
    stat: { figure: '10k', label: 'Knots tied per day' },
    reverse: true
  },
  {
    chapter: '03',
    label: 'The Refinement',
    title: 'Washed, stretched and perfected',
    body: 'After weaving: a 47-point inspection, hand-washing in mountain water, and stretching over wooden frames under the Agra sun. The carpet breathes before it ever enters your home.',
    image: 'https://plus.unsplash.com/premium_photo-1664303678793-057408171526?auto=format&fit=crop&w=1400&q=90',
    stat: { figure: '47', label: 'Quality checkpoints' },
    reverse: false
  },
]

export default function CraftStory() {
  return (
    <section id="heritage" className="bg-ivory py-24 md:py-32 overflow-hidden relative">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#B88645 1px, transparent 1px), linear-gradient(90deg, #B88645 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          backgroundPosition: 'center top'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gold/40" />
            <span className="font-body text-[8.5px] tracking-[0.4em] uppercase text-gold font-semibold">
              The Making
            </span>
            <div className="w-12 h-px bg-gold/40" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display font-normal text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-navy mb-8"
          >
            The Genesis of an Heirloom
          </motion.h2>
        </div>

        {/* Editorial Sequence */}
        <div className="flex flex-col gap-24 md:gap-36 relative">
          
          {/* Connecting central thread (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

          {moments.map((moment, idx) => (
            <div 
              key={moment.chapter} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative ${moment.reverse ? 'md:grid-flow-col-dense' : ''}`}
            >
              
              {/* Central Node Dot (Desktop only) */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-ivory border-2 border-gold rounded-full z-20 items-center justify-center">
                 <div className="w-1 h-1 bg-gold rounded-full" />
              </div>

              {/* Image Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: moment.reverse ? 20 : -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={moment.reverse ? 'md:col-start-2' : 'md:col-start-1'}
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] lg:aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl border border-navy/5 group">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Floating Chapter Badge */}
                  <div className="absolute top-6 left-6 bg-ivory/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/20 shadow-lg">
                    <span className="font-display text-navy text-[14px] leading-none block">
                      Chapter {moment.chapter}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Typography Block */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col justify-center ${moment.reverse ? 'md:pr-12 lg:pr-24' : 'md:pl-12 lg:pl-24'}`}
              >
                <span className="font-body text-[9px] tracking-[0.4em] uppercase text-gold font-semibold mb-6 block">
                  {moment.label}
                </span>
                
                <h3 className="font-display text-[28px] lg:text-[36px] leading-[1.15] text-navy mb-6">
                  {moment.title}
                </h3>
                
                <p className="font-body text-[13px] sm:text-[14px] leading-[2.1] text-navy/70 mb-10">
                  {moment.body}
                </p>
                
                <div className="pt-8 border-t border-navy/10 inline-flex flex-col">
                  <span className="font-display text-[32px] text-gold leading-none mb-2">
                    {moment.stat.figure}
                  </span>
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-navy/50 font-semibold">
                    {moment.stat.label}
                  </span>
                </div>
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
