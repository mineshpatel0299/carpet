import type { Metadata } from 'next'
import HomeWrapper from '@/components/HomeWrapper'

const BASE = 'https://www.creaticabudcarpets.com'

export const metadata: Metadata = {
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    url: BASE,
  },
}

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Creaticabud Carpets — India's Finest Hand-Knotted Carpets",
  url: BASE,
  description:
    'Manufacturer & exporter of premium handmade carpets, silk rugs, and handloom textiles. Supplying to hotels, designers, and trade buyers across 48 countries since 2010.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    ],
  },
  specialty: 'Hand-Knotted & Handmade Luxury Carpets',
  provider: {
    '@type': 'Organization',
    name: 'Creaticabud Exports Pvt. Ltd.',
    url: BASE,
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomeWrapper />
    </>
  )
}
