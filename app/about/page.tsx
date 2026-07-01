import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import AboutHero from '@/components/AboutHero'
import FoundingStory from '@/components/FoundingStory'
import WhyUs from '@/components/WhyUs'
import BenefitsSection from '@/components/BenefitsSection'
// import GlobalPresence from '@/components/GlobalPresence'
import CraftStory from '@/components/CraftStory'
import BrandManifesto from '@/components/BrandManifesto'
import Footer from '@/components/Footer'

const BASE = 'https://www.creaticabudcarpets.com'

export const metadata: Metadata = {
  title: 'Our Story — Artisan Carpet Makers Since 2010',
  description:
    'Discover Creaticabud — a family-owned carpet atelier rooted in Bhadohi, Mirzapur & Delhi. Master artisans weaving handmade carpets with ethical craftsmanship and a legacy spanning 48 countries since 2010.',
  keywords: [
    'Creaticabud story',
    'Indian carpet artisans',
    'ethical carpet manufacturer India',
    'family carpet weaver Bhadohi',
    'Mirzapur carpet heritage',
    'handmade carpet legacy India',
    'sustainable carpet production',
    'carpet export company India',
  ],
  alternates: {
    canonical: `${BASE}/about`,
  },
  openGraph: {
    type: 'website',
    url: `${BASE}/about`,
    title: 'Our Story — Creaticabud Carpets, Artisan Makers Since 2010',
    description:
      'A family-owned carpet atelier in Bhadohi, Mirzapur & Delhi weaving handmade carpets with artisan craftsmanship and ethical roots since 2010.',
    images: [
      {
        url: 'https://res.cloudinary.com/djicxkd9u/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781251228/Gemini_Generated_Image_w3z2eiw3z2eiw3z2_bsxtos.png',
        width: 1200,
        height: 630,
        alt: 'Creaticabud — Artisan Carpet Weavers, Our Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story — Creaticabud Carpets',
    description: 'Artisan carpet makers from Bhadohi, Mirzapur & Delhi — crafting handmade rugs since 2010.',
    images: [
      'https://res.cloudinary.com/djicxkd9u/image/upload/w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1781251228/Gemini_Generated_Image_w3z2eiw3z2eiw3z2_bsxtos.png',
    ],
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Creaticabud — Our Story',
  url: `${BASE}/about`,
  description:
    'The story of Creaticabud Exports Pvt. Ltd. — artisan carpet weavers from Bhadohi, Mirzapur & Delhi, crafting handmade rugs for a global clientele since 2010.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE}/about` },
    ],
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Creaticabud Exports Pvt. Ltd.',
    foundingDate: '2010',
    description:
      'Family-owned manufacturer and exporter of premium handmade carpets, silk rugs, and handloom textiles. Ethical artisan craftsmanship serving 48 countries.',
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Bhadohi', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
      { '@type': 'PostalAddress', addressLocality: 'Mirzapur', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
      { '@type': 'PostalAddress', addressLocality: 'Delhi', addressRegion: 'Delhi', addressCountry: 'IN' },
    ],
    slogan: 'Timeless Craftsmanship. Enduring Beauty.',
    areaServed: '48 countries worldwide',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Navbar assembling={true} />
      <main>
        <AboutHero />
        <FoundingStory />
        <WhyUs />
        <BenefitsSection />
        {/* <GlobalPresence /> */}
        <CraftStory />
        <BrandManifesto />
        <Footer />
      </main>
    </>
  )
}
