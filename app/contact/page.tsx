import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'

export const metadata: Metadata = {
  title: 'Contact Us — Creaticabud Carpets',
  description:
    'Get in touch with Creaticabud for bespoke carpet enquiries, wholesale orders, hotel supply, or custom design briefs. Based in Bhadohi, Mirzapur & Delhi, India — serving 48 countries.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar assembling={true} />
      <main>
        <ContactHero />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
