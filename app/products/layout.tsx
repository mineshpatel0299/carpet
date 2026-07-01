import type { Metadata } from 'next'

const BASE = 'https://www.creaticabudcarpets.com'

export const metadata: Metadata = {
  title: 'Material Collections — Hand-Knotted Carpets & Silk Rugs',
  description:
    'Explore our material collections — Wool/Silk, Wool/Bamboo, and Semi-Viscose hand-knotted carpets. Crafted in Bhadohi, Mirzapur & Delhi for hotels, designers, and trade buyers worldwide.',
  keywords: [
    'hand-knotted wool silk carpet',
    'bamboo silk rug India',
    'semi viscose carpet',
    'luxury carpet collections',
    'bespoke handmade rugs',
    'carpet atelier India',
    'wool carpet manufacturer',
    'silk rug exporter',
  ],
  alternates: {
    canonical: `${BASE}/products`,
  },
  openGraph: {
    type: 'website',
    url: `${BASE}/products`,
    title: 'Material Collections — Creaticabud Hand-Knotted Carpets',
    description:
      'Wool/Silk, Wool/Bamboo & Semi-Viscose hand-knotted carpet collections from the ateliers of Bhadohi, Mirzapur & Delhi.',
    images: [
      {
        url: 'https://res.cloudinary.com/de4pazo51/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781598331/WhatsApp_Image_2026-06-16_at_13.36.10_pv11zu.jpg',
        width: 1200,
        height: 630,
        alt: 'Creaticabud — Wool & Bamboo Silk Hand-Knotted Carpet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Material Collections — Creaticabud Carpets',
    description: 'Wool/Silk, Bamboo Silk & Semi-Viscose hand-knotted carpet collections from India.',
    images: [
      'https://res.cloudinary.com/de4pazo51/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781598331/WhatsApp_Image_2026-06-16_at_13.36.10_pv11zu.jpg',
    ],
  },
}

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Material Collections — Creaticabud Carpets',
  url: `${BASE}/products`,
  description:
    'Three distinct material expressions hand-knotted by master artisans in Bhadohi, Mirzapur, and Delhi.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Material Collections', item: `${BASE}/products` },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Handmade Carpet Collections',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'Wool / Silk Hand-Knotted Carpet',
          description:
            'A timeless union of hand-spun wool and pure silk, each knot placed by a master artisan. Origin: Bhadohi, India.',
          brand: { '@type': 'Brand', name: 'Creaticabud' },
          manufacturer: { '@type': 'Organization', name: 'Creaticabud Exports Pvt. Ltd.' },
          material: ['Pure Wool', 'Silk'],
          countryOfOrigin: 'IN',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            seller: { '@type': 'Organization', name: 'Creaticabud Exports Pvt. Ltd.' },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'Wool / Bamboo Silk Hand-Knotted Carpet',
          description:
            'Bamboo silk interwoven with premium wool — an eco-conscious carpet of remarkable softness. Origin: Mirzapur, India.',
          brand: { '@type': 'Brand', name: 'Creaticabud' },
          manufacturer: { '@type': 'Organization', name: 'Creaticabud Exports Pvt. Ltd.' },
          material: ['Bamboo Silk', 'Wool'],
          countryOfOrigin: 'IN',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            seller: { '@type': 'Organization', name: 'Creaticabud Exports Pvt. Ltd.' },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: 'Semi-Viscose Hand-Knotted Carpet',
          description:
            'High-gloss viscose and wool blend creating a lustrous, shifting sheen. Origin: Delhi, India.',
          brand: { '@type': 'Brand', name: 'Creaticabud' },
          manufacturer: { '@type': 'Organization', name: 'Creaticabud Exports Pvt. Ltd.' },
          material: ['Viscose', 'Wool Blend'],
          countryOfOrigin: 'IN',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            seller: { '@type': 'Organization', name: 'Creaticabud Exports Pvt. Ltd.' },
          },
        },
      },
    ],
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      {children}
    </>
  )
}
