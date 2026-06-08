'use client'
import { motion } from 'framer-motion'
interface GoldRuleProps {
  width?: string
  className?: string
}

export default function GoldRule({ width = '40px', className = '' }: GoldRuleProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px bg-gold origin-left flex-shrink-0 ${className}`}
      style={{ width }}
    />
  )
}
