'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductModal from '@/components/ui/ProductModal'

export default function BespokeEnquireButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden shrink-0 inline-flex items-center gap-5 bg-navy text-linen font-body text-[9px] tracking-[0.35em] uppercase font-semibold px-12 py-5"
      >
        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
        <span className="relative z-10 group-hover:text-navy transition-colors duration-300">Let's Connect</span>
        <motion.span
          className="relative z-10"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >→</motion.span>
      </button>

      <ProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
        productCategory="Bespoke Commission"
      />
    </>
  )
}
