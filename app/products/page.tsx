'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ui/ProductModal';

// ─── Category Data ───────────────────────────────────────────────────────────

const categories = [
  {
    id: 'wool-silk',
    num: '01',
    name: 'Wool / Silk',
    subtitle: 'The Radiant Weave',
    tagline: '"Where resilience meets luminous grace."',
    description:
      'A timeless union of hand-spun wool and pure silk, these carpets catch light like fine jewellery. Each knot is placed by a master artisan — creating surfaces that shift in depth, colour, and sheen as the light moves through your space.',
    specs: [
      { k: 'Construction', v: 'Hand-Knotted' },
      { k: 'Pile Material', v: 'Pure Wool & Silk' },
      { k: 'Warp & Weft', v: 'Cotton Foundation' },
      { k: 'Pile Height', v: '8 – 12 mm' },
      { k: 'Origin', v: 'Bhadohi, India' },
    ],
    images: [
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781597799/WhatsApp_Image_2026-06-16_at_13.32.54_5_wypabq.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781597798/WhatsApp_Image_2026-06-16_at_13.32.54_4_fhzu0c.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781597798/WhatsApp_Image_2026-06-16_at_13.32.54_3_mlkmnx.jpg',
    ],
    bg: 'bg-parchment',
  },
  {
    id: 'wool-bamboo',
    num: '02',
    name: 'Wool / Bamboo',
    subtitle: 'Earthen Opulence',
    tagline: '"Sustainable beauty, woven into legacy."',
    description:
      'Bamboo silk — drawn from organically grown bamboo — is interwoven with premium wool to create a surface of remarkable softness. An eco-conscious choice that sacrifices nothing in beauty, texture, or longevity.',
    specs: [
      { k: 'Construction', v: 'Hand-Knotted & Tufted' },
      { k: 'Pile Material', v: 'Bamboo Silk & Wool' },
      { k: 'Warp & Weft', v: 'Cotton Foundation' },
      { k: 'Pile Height', v: '10 – 14 mm' },
      { k: 'Origin', v: 'Mirzapur, India' },
    ],
    images: [
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598331/WhatsApp_Image_2026-06-16_at_13.36.10_pv11zu.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598330/WhatsApp_Image_2026-06-16_at_13.36.10_1_j7uzsu.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598329/WhatsApp_Image_2026-06-16_at_13.36.09_wnl4rd.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598328/WhatsApp_Image_2026-06-16_at_13.36.09_2_hqt6kj.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598315/WhatsApp_Image_2026-06-16_at_13.36.09_1_ilpvrt.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598315/WhatsApp_Image_2026-06-16_at_13.36.08_tjpcze.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598314/WhatsApp_Image_2026-06-16_at_13.36.08_2_sc3men.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598314/WhatsApp_Image_2026-06-16_at_13.36.08_1_b3ongt.jpg',
    ],
    bg: 'bg-linen',
  },
  {
    id: 'semi-viscose',
    num: '03',
    name: 'Semi Viscose',
    subtitle: '',
    tagline: '"Contemporary sheen. Unmistakable presence."',
    description:
      'Semi-viscose creates a high-gloss sheen that shifts from deep charcoal to lustrous silver depending on the angle of light. Bold, artistic, and modern — designed for spaces that demand a statement piece.',
    specs: [
      { k: 'Construction', v: 'Hand-Knotted' },
      { k: 'Pile Material', v: 'Viscose & Wool Blend' },
      { k: 'Warp & Weft', v: 'Cotton Foundation' },
      { k: 'Pile Height', v: '7 – 10 mm' },
      { k: 'Origin', v: 'Delhi, India' },
    ],
    images: [
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781599149/WhatsApp_Image_2026-06-16_at_13.42.16_i8yyug.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781599148/WhatsApp_Image_2026-06-16_at_13.42.16_2_aojuab.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781599146/WhatsApp_Image_2026-06-16_at_13.42.16_1_qptw1i.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781599146/WhatsApp_Image_2026-06-16_at_13.42.15_ddsotl.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781599145/WhatsApp_Image_2026-06-16_at_13.42.15_2_zzmmj0.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598533/WhatsApp_Image_2026-06-16_at_13.42.15_1_auskeg.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598532/WhatsApp_Image_2026-06-16_at_13.42.14_q2vqbb.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598393/WhatsApp_Image_2026-06-16_at_13.42.14_2_koqren.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598391/WhatsApp_Image_2026-06-16_at_13.42.14_1_pcuxr8.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598389/WhatsApp_Image_2026-06-16_at_13.42.13_vqjgrg.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598389/WhatsApp_Image_2026-06-16_at_13.42.13_3_od5ovy.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598387/WhatsApp_Image_2026-06-16_at_13.42.13_2_hz4umj.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598386/WhatsApp_Image_2026-06-16_at_13.42.13_1_feocxr.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598385/WhatsApp_Image_2026-06-16_at_13.42.12_xg2pjn.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598384/WhatsApp_Image_2026-06-16_at_13.42.12_2_x1vuhk.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598383/WhatsApp_Image_2026-06-16_at_13.42.12_1_iqjs4o.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598381/WhatsApp_Image_2026-06-16_at_13.42.11_usmyk6.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598380/WhatsApp_Image_2026-06-16_at_13.42.11_2_kvca1j.jpg',
      'https://res.cloudinary.com/de4pazo51/image/upload/v1781598379/WhatsApp_Image_2026-06-16_at_13.42.11_1_kx7zsm.jpg',
    ],
    bg: 'bg-ivory',
  },
];

// ─── Shared ornament ─────────────────────────────────────────────────────────

function GoldRule() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-px bg-gold/40" />
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
        <path d="M3 0L6 3L3 6L0 3Z" fill="#B88645" fillOpacity="0.7" />
      </svg>
      <div className="w-8 h-px bg-gold/40" />
    </div>
  );
}

// ─── Featured Gallery ─────────────────────────────────────────────────────────
// Large selected image on left (object-contain, fully visible).
// Scrollable thumbnail grid on right — click to swap with crossfade.

interface FeaturedGalleryProps {
  images: string[];
  catName: string;
  onEnquire: () => void;
}

function FeaturedGallery({ images, catName, onEnquire }: FeaturedGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col lg:flex-row gap-3"
    >
      {/* ── Large featured viewer ── */}
      <div className="flex flex-col w-full lg:w-[68%] gap-4">
        <div className="relative w-full bg-navy/[0.03] overflow-hidden"
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
                alt={`${catName} — ${String(active + 1).padStart(2, '0')}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 68vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Enquire Overlay Button */}
          <button
            onClick={onEnquire}
            className="lg:hidden absolute bottom-3 right-3 z-10 flex items-center gap-2 bg-navy/80 backdrop-blur-sm text-linen font-body text-[8px] tracking-[0.35em] uppercase font-semibold px-4 py-2 hover:bg-gold transition-colors duration-300"
          >
            Enquire Now
            <span className="block w-2.5 h-px bg-current" />
          </button>
        </div>

        {/* ── Action bar below image ── */}
        <div className="flex items-center justify-between px-2">
          {/* Index badge */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-px bg-gold/50" />
            <span className="font-body text-[9px] tracking-[0.45em] text-navy/50 font-semibold tabular-nums">
              {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </div>

          {/* Desktop Enquire button */}
          <button
            onClick={onEnquire}
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
              className={`relative aspect-square overflow-hidden transition-all duration-300 focus:outline-none ${active === i
                ? 'ring-1 ring-gold ring-offset-2 ring-offset-parchment'
                : 'opacity-55 hover:opacity-85'
                }`}
            >
              <Image
                src={src}
                alt={`${catName} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 16vw"
              />
              {/* Active indicator */}
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
  );
}


// ─── Category Section ────────────────────────────────────────────────────────

interface CatSectionProps {
  cat: (typeof categories)[0];
  index: number;
  onEnquire: (name: string) => void;
}

function CategorySection({ cat, index, onEnquire }: CatSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={sectionRef} id={cat.id} className={`relative ${cat.bg} overflow-hidden`}>
      <div className="carpet-texture opacity-45" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-10" />

      {/* Ghost category number */}
      <motion.div
        style={{ y: ghostY }}
        className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden pb-0"
        aria-hidden
      >
        <span
          className="font-display font-normal text-navy/[0.025] leading-[0.85] whitespace-nowrap pl-4"
          style={{ fontSize: 'clamp(180px, 32vw, 420px)' }}
        >
          {cat.num}
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-14 py-20 md:py-28 lg:py-32">

        {/* ── Section header ─────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">
                {cat.num}
              </span>
              <div className="w-6 h-px bg-gold/40" />
              <span className="font-body text-[8px] tracking-[0.4em] uppercase text-navy/35 font-semibold">
                Material Collection
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="font-display font-normal"
              style={{ fontSize: 'clamp(48px, 6.5vw, 88px)', lineHeight: 1.0, color: '#0E1B2D' }}
            >
              {cat.name.split('/')[0].trim()}{' '}
              <span className="italic">
                {cat.name.includes('/') ? `/ ${cat.name.split('/')[1].trim()}` : cat.subtitle}
              </span>
            </motion.h2>
          </motion.div>

          {/* Right: description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[400px]"
          >
            <p className="font-body font-light text-[13.5px] leading-[2.1] text-navy/55 mb-8">
              {cat.description}
            </p>
            {/* <button
              id={`enquire-${cat.id}`}
              onClick={() => onEnquire(cat.name)}
              className="group relative inline-flex items-center gap-4 overflow-hidden bg-navy text-linen font-body text-[9px] tracking-[0.35em] uppercase font-semibold px-9 py-4"
            >
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10 group-hover:text-navy transition-colors duration-300">Enquire Now</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >→</motion.span>
            </button> */}
          </motion.div>
        </div>

        {/* ── Featured gallery ─────────────────────────── */}
        <FeaturedGallery
          images={cat.images}
          catName={cat.name}
          onEnquire={() => onEnquire(cat.name)}
        />


      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function ProductsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[85vh] bg-parchment flex flex-col items-center justify-center overflow-hidden">
      <div className="carpet-texture opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,69,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-20 w-full max-w-4xl flex flex-col items-center justify-center text-center px-8 sm:px-14 pt-32 pb-24">
        <motion.div style={{ y: textY }} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="origin-right w-10 h-px bg-gold/50"
            />
            <span className="font-body text-[8px] tracking-[0.55em] uppercase text-gold font-semibold">The Atelier</span>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left w-10 h-px bg-gold/50"
            />
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '108%' }} animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display font-normal text-navy"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 1.0 }}
            >Material</motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '108%' }} animate={{ y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
              className="font-display italic text-gold"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 1.0 }}
            >Collections.</motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="font-body font-light text-[15px] text-navy/60 leading-[2.1] max-w-lg mb-14"
          >
            Three distinct material expressions — each woven by hand in the carpet ateliers of Bhadohi, Mirzapur, and Delhi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="group flex flex-col items-center gap-2">
                <span className="font-body text-[8px] tracking-[0.4em] text-gold/60 tabular-nums font-semibold group-hover:text-gold transition-colors duration-300">{cat.num}</span>
                <span className="font-body text-[11px] tracking-[0.2em] uppercase text-navy/50 group-hover:text-navy transition-colors duration-300 font-semibold">{cat.name}</span>
                <span className="block w-0 h-px bg-gold group-hover:w-8 transition-all duration-400" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gold/20 origin-center z-20"
      />

    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const openModal = (cat: string) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-parchment">
      <Navbar />
      <ProductsHero />

      {categories.map((cat, i) => (
        <CategorySection key={cat.id} cat={cat} index={i} onEnquire={openModal} />
      ))}

      {/* Bespoke commission strip */}
      <section className="bg-parchment border-t border-navy/8 py-20 px-8 sm:px-14 md:px-20 relative">
        <div className="carpet-texture opacity-30" />
        <div className="relative z-10 max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-md">
            <p className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/60 mb-3 font-semibold">Bespoke Service</p>
            <h3 className="font-display font-normal text-navy text-[28px] md:text-[36px] leading-tight mb-4">
              Every piece, <span className="italic text-gold">uniquely yours.</span>
            </h3>
            <p className="font-body font-light text-[13px] text-navy/50 leading-[1.9]">
              All collections are available in custom dimensions, colour palettes, and weave densities. Contact our atelier to begin a commission.
            </p>
          </div>
          <button
            onClick={() => openModal('Bespoke Commission')}
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
        </div>
      </section>

      <Footer />

      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productCategory={selectedCategory}
      />
    </main>
  );
}
