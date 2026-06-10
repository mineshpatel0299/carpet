'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const moments = [
  {
    chapter: '01',
    label: 'The Foundation',
    title: 'Vertical looms standing eight feet tall',
    body: 'Each carpet begins on a hand-built wooden loom strung with warp threads. Our weavers learn to read the pattern map as fluently as a musician reads sheet music.',
    image: '/images/collections/handloom.png',
    stat: { figure: '6', label: 'Months per carpet' },
    reverse: false
  },
  {
    chapter: '02',
    label: 'The Technique',
    title: 'A million knots, tied individually by hand',
    body: 'The Persian knot — tied, cut, and compacted row by row. A master weaver works with rhythmic precision. A 9×12 carpet represents six months of a single life.',
    image: '/images/benefits/sensory.png',
    stat: { figure: '10k', label: 'Knots tied per day' },
    reverse: true
  },
  {
    chapter: '03',
    label: 'The Refinement',
    title: 'Washed, stretched and perfected',
    body: 'After weaving: a 47-point inspection, hand-washing in mountain water, and stretching over wooden frames under the Agra sun. The carpet breathes before it ever enters your home.',
    image: '/images/collections/silk.png',
    stat: { figure: '47', label: 'Quality checkpoints' },
    reverse: false
  },
]

export default function CraftStory() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="heritage" ref={containerRef} className="bg-ivory py-24 md:py-36 overflow-hidden relative">
      <div className="carpet-texture opacity-60" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">

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
            <span className="font-body text-[8.5px] tracking-[0.4em] uppercase text-navy font-semibold">
              The Process
            </span>
            <div className="w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display font-normal text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] text-navy mb-8"
          >
            The Making of a <span className="text-gold italic">Masterpiece</span>
          </motion.h2>
        </div>

        {/* Broken Grid Sequence */}
        <div className="flex flex-col gap-24 md:gap-40 lg:gap-48 relative">
          {moments.map((moment, idx) => {
            const isReverse = moment.reverse;
            
            return (
              <div
                key={moment.chapter}
                className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center relative`}
              >
                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full md:w-[65%] relative z-0"
                >
                  <div className="relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden group border border-navy/5 shadow-[0_10px_40px_rgba(14,27,45,0.04)]">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Overlapping Text Block */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`w-[90%] md:w-[45%] bg-ivory relative z-10 -mt-16 md:mt-0 ${isReverse ? 'md:-mr-32' : 'md:-ml-32'} p-8 md:p-14 lg:p-20 shadow-[0_20px_50px_rgba(14,27,45,0.06)] border border-navy/5`}
                >
                  {/* Huge Watermark Chapter Number */}
                  <div className="absolute top-4 right-8 font-display text-[120px] md:text-[180px] leading-none text-navy/[0.03] pointer-events-none z-0">
                    {moment.chapter}
                  </div>

                  <div className="relative z-10">
                    <span className="font-display text-gold text-4xl md:text-5xl block mb-6 leading-none">
                      {moment.chapter}.
                    </span>
                    
                    <h3 className="font-display text-[28px] md:text-[34px] lg:text-[40px] leading-[1.15] text-navy mb-6">
                      {moment.title}
                    </h3>
                    
                    <div className="w-12 h-px bg-gold/30 mb-8" />
                    
                    <p className="font-body text-[14px] md:text-[15px] leading-[2] text-navy/70 mb-10 font-light">
                      {moment.body}
                    </p>
                    
                    <div className="flex flex-col">
                      <span className="font-display text-[36px] md:text-[42px] text-navy leading-none mb-2">
                        {moment.stat.figure}
                      </span>
                      <span className="font-body text-[9.5px] tracking-[0.3em] uppercase text-gold font-semibold">
                        {moment.stat.label}
                      </span>
                    </div>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
