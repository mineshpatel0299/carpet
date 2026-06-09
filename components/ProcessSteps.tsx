'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    tag: 'Consultation',
    title: 'Design Brief',
    body: 'Vision, space, colour palette, and intended use — residential, hospitality, or commercial.',
  },
  {
    num: '02',
    tag: 'Sourcing',
    title: 'Material Selection',
    body: 'Pure silk, New Zealand wool, hand-spun jute — chosen for quality and character.',
  },
  {
    num: '03',
    tag: 'Production',
    title: 'Artisan Weaving',
    body: 'Hand-knotted looms. Centuries-old technique. Six months per standard 9×12 carpet.',
  },
  {
    num: '04',
    tag: 'Delivery',
    title: 'Finishing & Export',
    body: 'Hand-washed, stretched, inspected. Global delivery with full customs documentation.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="bg-ivory  overflow-hidden px-6 sm:px-8 md:px-20 py-16 sm:py-20 md:py-28" id="process">
      <div className="mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/65 mb-5"
        >
          How We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[36px] md:text-[56px] leading-[1.05] text-navy"
        >
          From concept{' '}
          <span className="italic text-sienna">to creation.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative pt-10 pb-12 pr-8 cursor-default ${i > 0 ? 'pl-8 xl:pl-10' : ''}`}
          >
            {/* Large ghost number */}
            <span className="font-display text-[72px] font-normal text-navy/5 leading-none select-none block -mt-2 mb-3 group-hover:text-navy/9 transition-colors duration-500">
              {step.num}
            </span>
            <p className="font-body text-[8px] tracking-[0.42em] uppercase text-gold/65 mb-3">
              {step.tag}
            </p>
            <h3 className="font-display font-normal text-[20px] md:text-[22px] text-navy mb-4 leading-[1.2]">
              {step.title}
            </h3>
            <p className="font-body font-light text-[13px] leading-[1.85] text-stone">
              {step.body}
            </p>

            {/* Animated bottom accent on hover */}
            <div className="absolute bottom-0 left-0 right-8 h-px overflow-hidden">
              <motion.div
                className="h-full bg-gold/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-600"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
