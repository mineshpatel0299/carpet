import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'

const BASE = 'https://www.creaticabudcarpets.com'

export const metadata: Metadata = {
  title: 'Contact & Enquiries — Carpet Wholesale & Bespoke Orders',
  description:
    'Get in touch with Creaticabud for bespoke carpet commissions, hotel supply, wholesale trade enquiries, or custom design briefs. Based in Bhadohi, Mirzapur & Delhi, India — serving 48 countries.',
  keywords: [
    'carpet enquiry India',
    'handmade carpet wholesale contact',
    'bespoke rug commission India',
    'hotel carpet supplier contact',
    'Bhadohi carpet exporter contact',
    'custom carpet order India',
    'Indian rug trade enquiry',
  ],
  alternates: {
    canonical: `${BASE}/contact`,
  },
  openGraph: {
    type: 'website',
    url: `${BASE}/contact`,
    title: 'Contact Creaticabud — Carpet Enquiries & Trade Orders',
    description:
      'Reach us for bespoke carpet commissions, hotel supply, and wholesale enquiries. Bhadohi · Mirzapur · Delhi, India. Serving 48 countries.',
    images: [
      {
        url: 'https://res.cloudinary.com/de4pazo51/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781599149/WhatsApp_Image_2026-06-16_at_13.42.16_i8yyug.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Creaticabud Carpets — Enquiries & Trade Orders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Creaticabud Carpets',
    description: 'Wholesale, bespoke commissions & hotel supply enquiries. India — serving 48 countries.',
    images: [
      'https://res.cloudinary.com/de4pazo51/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781599149/WhatsApp_Image_2026-06-16_at_13.42.16_i8yyug.jpg',
    ],
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Creaticabud Carpets',
  url: `${BASE}/contact`,
  description:
    'Contact Creaticabud Exports Pvt. Ltd. for handmade carpet enquiries, wholesale trade orders, hotel supply, and bespoke commissions.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE}/contact` },
    ],
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Creaticabud Exports Pvt. Ltd.',
    telephone: '+91-98105-25135',
    email: 'Creaticabudcarpets@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98105-25135',
      contactType: 'sales',
      email: 'Creaticabudcarpets@gmail.com',
      availableLanguage: ['English', 'Hindi'],
      contactOption: 'TollFree',
    },
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Bhadohi', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
      { '@type': 'PostalAddress', addressLocality: 'Mirzapur', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
      { '@type': 'PostalAddress', addressLocality: 'Delhi', addressRegion: 'Delhi', addressCountry: 'IN' },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar assembling={true} />
      <main>
        <ContactHero />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
