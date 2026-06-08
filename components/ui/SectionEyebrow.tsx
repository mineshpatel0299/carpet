'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import GoldRule from './GoldRule'

interface SectionEyebrowProps {
  children: React.ReactNode
  light?: boolean
  centered?: boolean
}

export default function SectionEyebrow({
  children,
  light = false,
  centered = false,
}: SectionEyebrowProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, margin: '-80px' }}
      className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : ''}`}
    >
      {!centered && <GoldRule width="32px" />}
      <span
        className={`font-body font-light text-[9px] tracking-ultra uppercase ${
          light ? 'text-gold' : 'text-gold'
        }`}
      >
        {children}
      </span>
      {centered && (
        <>
          <span className="text-gold/40 text-[7px]">◆</span>
        </>
      )}
    </motion.div>
  )
}
