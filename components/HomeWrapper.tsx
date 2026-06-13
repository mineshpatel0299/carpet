'use client'
import { useState } from 'react'
import IntroScreen from '@/components/IntroScreen'

// Persists in JS memory across client navigations; resets on hard refresh.
let introPlayed = false
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BespokeSection from '@/components/BespokeSection'
import CollectionsGrid from '@/components/CollectionsGrid'
import FeaturesBar from '@/components/FeaturesBar'
import ProcessSteps from '@/components/ProcessSteps'
import MaterialsSection from '@/components/MaterialsSection'
// import RugGuideSection  from '@/components/RugGuideSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomeWrapper() {
  const [navAssembling, setNavAssembling] = useState(introPlayed)
  const [ready, setReady]                 = useState(introPlayed)

  return (
    <>
      {!introPlayed && (
        <IntroScreen
          onLogoLanded={() => setNavAssembling(true)}
          onComplete={() => {
            introPlayed = true
            setReady(true)
          }}
        />
      )}

      {/* Navbar lives outside the content opacity wrapper so it can
          animate in independently while the intro overlay is still fading */}
      <Navbar assembling={navAssembling} />

      <main
        style={{
          opacity: 1, // Temporarily forced to 1 to ensure changes are visible
          transition: 'opacity 0.85s ease',
          pointerEvents: 'auto',
        }}
      >
        <HeroSection />
        <BespokeSection />
        <CollectionsGrid />
        <FeaturesBar />
        <ProcessSteps />
        <MaterialsSection />
        {/* <RugGuideSection /> */}
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
