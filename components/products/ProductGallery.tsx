'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ProductModal from '@/components/ui/ProductModal'

interface Props {
  images: string[]
  catName: string
}

export default function ProductGallery({ images, catName }: Props) {
  const [active, setActive] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:flex-row gap-3"
      >
        {/* ── Large featured viewer ── */}
        <div className="flex flex-col w-full lg:w-[68%] gap-4">
          <div
            className="relative w-full bg-navy/[0.03] overflow-hidden"
            style={{ minHeight: '480px', maxHeight: '70vh' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={images[active]}
                  alt={`${catName} hand-knotted carpet — image ${String(active + 1).padStart(2, '0')}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 68vw"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile Enquire Overlay Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="lg:hidden absolute bottom-3 right-3 z-10 flex items-center gap-2 bg-navy/80 backdrop-blur-sm text-linen font-body text-[8px] tracking-[0.35em] uppercase font-semibold px-4 py-2 hover:bg-gold transition-colors duration-300"
            >
              Enquire Now
              <span className="block w-2.5 h-px bg-current" />
            </button>
          </div>

          {/* ── Action bar below image ── */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-5 h-px bg-gold/50" />
              <span className="font-body text-[9px] tracking-[0.45em] text-navy/50 font-semibold tabular-nums">
                {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </div>

            {/* Desktop Enquire button */}
            <button
              onClick={() => setModalOpen(true)}
              className="hidden lg:flex group items-center gap-3 text-navy font-body text-[9px] tracking-[0.35em] uppercase font-semibold hover:text-gold transition-colors duration-300"
            >
              Enquire About This Piece
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >→</motion.span>
            </button>
          </div>
        </div>

        {/* ── Thumbnail grid ── */}
        <div
          className="w-full lg:w-[32%] overflow-y-auto custom-scrollbar pr-2"
          style={{ maxHeight: '70vh' }}
          data-lenis-prevent
        >
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View ${catName} carpet image ${i + 1}`}
                className={`relative aspect-square overflow-hidden transition-all duration-300 focus:outline-none ${
                  active === i
                    ? 'ring-1 ring-gold ring-offset-2 ring-offset-parchment'
                    : 'opacity-55 hover:opacity-85'
                }`}
              >
                <Image
                  src={src}
                  alt={`${catName} hand-knotted carpet thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 16vw"
                />
                {active === i && (
                  <div className="absolute inset-0 bg-gold/8 pointer-events-none" />
                )}
                <div className="absolute bottom-1.5 left-2 z-10">
                  <span className="font-body text-[7px] tracking-[0.3em] text-linen/60 font-semibold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productCategory={catName}
      />
    </>
  )
}
