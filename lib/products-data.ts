export type ProductSpec = { k: string; v: string }

export type ProductCategory = {
  id: string
  num: string
  name: string
  subtitle: string
  tagline: string
  description: string
  specs: ProductSpec[]
  images: string[]
  bg: string
}

export const categories: ProductCategory[] = [
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
    subtitle: 'Contemporary Sheen',
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
]
