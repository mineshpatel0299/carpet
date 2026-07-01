import type { Metadata } from 'next'
import { Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/ui/smooth-scroll'

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const raleway = Raleway({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const BASE = 'https://www.creaticabudcarpets.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Creaticabud Carpets — India\'s Finest Hand-Knotted Carpets',
    template: '%s | Creaticabud Carpets',
  },
  description:
    'Manufacturer & exporter of premium handmade carpets, silk rugs, and handloom textiles from Bhadohi, Mirzapur & Delhi, India. Supplying to hotels, designers, and trade buyers across 48 countries since 2010.',
  keywords: [
    'handmade carpets India',
    'hand-knotted carpets manufacturer',
    'carpet exporter India',
    'silk rugs India',
    'wool carpets India',
    'Bhadohi carpets',
    'Mirzapur rugs',
    'luxury carpets wholesale',
    'hotel carpet supplier',
    'Indian handloom textiles',
    'bespoke carpets',
    'custom rugs India',
    'Creaticabud carpets',
    'ethical carpet manufacturer',
    'handcrafted rugs export',
  ],
  authors: [{ name: 'Creaticabud Exports Pvt. Ltd.', url: BASE }],
  creator: 'Creaticabud Exports Pvt. Ltd.',
  publisher: 'Creaticabud Exports Pvt. Ltd.',
  category: 'Luxury Handmade Carpets & Rugs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    type: 'website',
    url: BASE,
    siteName: 'Creaticabud Carpets',
    locale: 'en_US',
    title: 'Creaticabud Carpets — India\'s Finest Hand-Knotted Carpets',
    description:
      'Manufacturer & exporter of premium handmade carpets, silk rugs, and handloom textiles from Bhadohi, Mirzapur & Delhi, India. Supplying to 48 countries since 2010.',
    images: [
      {
        url: 'https://res.cloudinary.com/de4pazo51/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781597799/WhatsApp_Image_2026-06-16_at_13.32.54_5_wypabq.jpg',
        width: 1200,
        height: 630,
        alt: 'Creaticabud — Hand-Knotted Wool & Silk Carpet from India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creaticabud Carpets — India\'s Finest Hand-Knotted Carpets',
    description:
      'Premium handmade carpets, silk rugs & handloom textiles. Exported to 48 countries. Bhadohi · Mirzapur · Delhi, India.',
    images: [
      'https://res.cloudinary.com/de4pazo51/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781597799/WhatsApp_Image_2026-06-16_at_13.32.54_5_wypabq.jpg',
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: '',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Creaticabud Exports Pvt. Ltd.',
  alternateName: 'Creaticabud Carpets',
  url: BASE,
  logo: `${BASE}/favicon.ico`,
  description:
    'Manufacturer and exporter of premium handmade carpets, silk rugs, and handloom textiles from India. Serving 48 countries since 2010 with ethical artisan craftsmanship.',
  foundingDate: '2010',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '50+' },
  areaServed: { '@type': 'GeoShape', description: '48 countries worldwide' },
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Bhadohi',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Mirzapur',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98105-25135',
    contactType: 'sales',
    email: 'Creaticabudcarpets@gmail.com',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [],
  knowsAbout: [
    'Hand-Knotted Carpets',
    'Silk Rugs',
    'Wool Carpets',
    'Handloom Textiles',
    'Bespoke Carpet Design',
    'Carpet Export',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Creaticabud Carpets',
  url: BASE,
  description: 'India\'s finest handmade carpets — manufactured and exported globally.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/products` },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
