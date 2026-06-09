'use client'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'PREMIUM QUALITY',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#B88645" strokeWidth="1.5"/>
        <path d="M16 8L18 13H24L19 16L21 21L16 18L11 21L13 16L8 13H14L16 8Z" stroke="#B88645" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: 'ETHICAL PRODUCTION',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M9 16C9 16 11 20 16 20C21 20 23 16 23 16C23 16 21 12 16 12C11 12 9 16 9 16Z" stroke="#B88645" strokeWidth="1.5" />
        <path d="M16 10V22M10 16H22" stroke="#B88645" strokeWidth="1.5" />
        <path d="M6 24C9 26 13 26 16 26C19 26 23 26 26 24M6 8C9 6 13 6 16 6C19 6 23 6 26 8" stroke="#B88645" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'GLOBAL REACH',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#B88645" strokeWidth="1.5"/>
        <ellipse cx="16" cy="16" rx="6" ry="12" stroke="#B88645" strokeWidth="1.5"/>
        <path d="M4 16H28" stroke="#B88645" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    name: 'SUSTAINABLE LIVING',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 26V14" stroke="#B88645" strokeWidth="1.5"/>
        <path d="M16 20C16 20 12 20 10 18C8 16 10 12 10 12C10 12 14 12 16 14C18 16 16 20 16 20Z" stroke="#B88645" strokeWidth="1.5"/>
        <path d="M16 16C16 16 20 16 22 14C24 12 22 8 22 8C22 8 18 8 16 10C14 12 16 16 16 16Z" stroke="#B88645" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="14" stroke="#B88645" strokeWidth="1.5" strokeDasharray="4 2"/>
      </svg>
    )
  }
]

export default function FeaturesBar() {
  return (
    <section className="bg-linen py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="bg-navy rounded-md py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 shadow-lg border border-navy-mid">
          {features.map((feat, i) => (
            <motion.div
              key={feat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <span className="font-body text-linen text-xs md:text-sm tracking-[0.15em] font-medium uppercase">
                {feat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
