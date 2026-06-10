'use client'
import { useState } from 'react'
import IntroScreen from '@/components/IntroScreen'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BespokeSection from '@/components/BespokeSection'
import CollectionsGrid from '@/components/CollectionsGrid'
import FeaturesBar from '@/components/FeaturesBar'
import ProcessSteps from '@/components/ProcessSteps'
import CraftStory from '@/components/CraftStory'
import BenefitsSection from '@/components/BenefitsSection'
import WhyUs from '@/components/WhyUs'
import MaterialsSection from '@/components/MaterialsSection'
// import RugGuideSection  from '@/components/RugGuideSection'
import Testimonial from '@/components/Testimonial'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomeWrapper() {
  const [navAssembling, setNavAssembling] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <>
      <IntroScreen
        onLogoLanded={() => setNavAssembling(true)}
        onComplete={() => setReady(true)}
      />

      {/* Navbar lives outside the content opacity wrapper so it can
          animate in independently while the intro overlay is still fading */}
      <Navbar assembling={navAssembling} />

      <main
        style={{
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.85s ease',
          pointerEvents: ready ? 'auto' : 'none',
        }}
      >
        <HeroSection />
        <BespokeSection />
        <CollectionsGrid />
        <FeaturesBar />
        <ProcessSteps />
        <CraftStory />
        <BenefitsSection />
        <WhyUs />
        <MaterialsSection />
        {/* <RugGuideSection /> */}
        <Testimonial />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
