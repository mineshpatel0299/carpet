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

export const metadata: Metadata = {
  title: 'About Us — Creaticabud Carpets',
  description:
    'Discover the story behind Creaticabud — a family-owned atelier in Bhadohi, Mirzapur & Delhi weaving handmade carpets with artisan craftsmanship and ethical roots since 2010.',
}

export default function AboutPage() {
  return (
    <>
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
