'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const options = [
  {
    num: '01',
    label: 'Any Dimension',
    desc: 'From a 2×3 ft bedside runner to a 20-metre grand hall installation — woven to the exact centimetre.',
    accentColor: 'text-gold',
    image: 'https://images.unsplash.com/photo-1671576518293-113ca5c64648?auto=format&fit=crop&w=1800&q=90',
  },
  {
    num: '02',
    label: 'Any Fibre',
    desc: 'Pure silk, New Zealand wool, hand-spun jute — or a blend designed specifically for your space.',
    accentColor: 'text-gold-bright',
    image: 'https://images.unsplash.com/photo-1638368888223-4efbc65b1153?auto=format&fit=crop&w=1800&q=90',
  },
  {
    num: '03',
    label: 'Any Design',
    desc: 'Mood boards, swatches, architectural drawings. Our weavers realise any visual brief with absolute precision.',
    accentColor: 'text-gold',
    image: 'https://images.unsplash.com/photo-1770545290939-254e52e58ca9?auto=format&fit=crop&w=1800&q=90',
  },
];

const CardGrid = ({ color }: { color: string }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        `repeating-linear-gradient(0deg,${color} 0,${color} 1px,transparent 1px,transparent 60px),` +
        `repeating-linear-gradient(90deg,${color} 0,${color} 1px,transparent 1px,transparent 60px)`,
    }}
  />
);

export default function BespokeSection() {
  return (
    <section id="bespoke" className="relative bg-midnight rounded-t-[40px]" style={{ overflow: 'clip' }}>
      {/* Section header — sits above the sticky stack */}
      <div className="bg-ivory px-6 sm:px-8 md:px-20 pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16 relative overflow-hidden">
        <CardGrid color="rgba(201,151,60,0.04)" />
        <div className="relative z-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-[8px] tracking-[0.5em] uppercase text-navy mb-6"
          >
            Bespoke Commissions
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-navy pb-14">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display font-normal text-[38px] md:text-[60px] xl:text-[72px] leading-[0.98] text-navy"
            >
              A carpet made
              <br />
              <span className="italic text-gold">for you alone.</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:max-w-[320px]"
            >
              <p className="font-body font-light text-[14px] leading-[1.95] text-navy mb-8">
                Every carpet we weave is inherently unique — but our bespoke service takes this further. Bring us a vision and we will translate it into a one-of-one piece.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#contact"
                  className="font-body text-[10px] tracking-[0.28em] uppercase text-midnight bg-gold px-8 py-3.5 hover:bg-gold-bright transition-colors duration-300"
                >
                  Start Your Brief
                </a>
                <a
                  href="#process"
                  className="font-body text-[10px] tracking-[0.28em] uppercase text-stone-light/45 hover:text-gold transition-colors duration-300"
                >
                  How it works →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sticky scroll stack — each option card stacks on the previous */}
      <article>
        {options.map((option, i) => (
          <section
            key={option.num}
            className={`sticky top-0 h-screen w-full grid place-content-center overflow-hidden bg-midnight ${i > 0 ? 'rounded-tr-2xl rounded-tl-2xl' : ''}`}
          >
            {/* Background image */}
            <Image
              src={option.image}
              alt={option.label}
              fill
              quality={90}
              sizes="100vw"
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-midnight/72" />

            {/* Subtle grid texture on top */}
            <CardGrid color="rgba(201,151,60,0.04)" />

            {/* Gold horizontal rule */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

            <div className="relative z-10 px-6 sm:px-8 md:px-20 max-w-5xl mx-auto w-full">
              {/* Number */}
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-120px' }}
                className={`font-body text-[9px] tracking-[0.5em] uppercase block mb-8 ${option.accentColor}/60`}
              >
                {option.num} — Bespoke
              </motion.span>

              {/* Heading */}
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-120px' }}
                className="font-display font-normal text-[52px] md:text-[80px] xl:text-[100px] leading-[0.95] text-parchment mb-10"
              >
                {option.label}
              </motion.h3>

              {/* Divider */}
              <div className="w-16 h-px mb-10 bg-gold/50" />

              {/* Description */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-120px' }}
                className="font-body text-[15px] md:text-[17px] leading-[1.9] text-parchment/85 max-w-120"
              >
                {option.desc}
              </motion.p>
            </div>

            {/* Ghost watermark number */}
            <div className="absolute bottom-6 right-8 md:right-20 font-display text-[160px] md:text-[220px] font-normal leading-none text-parchment/4 select-none pointer-events-none">
              {option.num}
            </div>
          </section>
        ))}
      </article>
    </section>
  );
}
