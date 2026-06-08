import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

export const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export const staggerFast: Variants = {
  visible: { transition: { staggerChildren: 0.06 } },
}

export const clipReveal: Variants = {
  hidden:  { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
}

export const lineGrow: Variants = {
  hidden:  { scaleX: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export const riseUp: Variants = {
  hidden:  { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}
