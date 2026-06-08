import Navbar           from '@/components/Navbar'
import HeroSection      from '@/components/HeroSection'
import MarqueeBanner    from '@/components/MarqueeBanner'
import CollectionsGrid  from '@/components/CollectionsGrid'
import BespokeSection   from '@/components/BespokeSection'
import CraftStory       from '@/components/CraftStory'
import WhyUs            from '@/components/WhyUs'
import MaterialsSection from '@/components/MaterialsSection'
import ProcessSteps     from '@/components/ProcessSteps'
import Testimonial      from '@/components/Testimonial'
import ContactSection   from '@/components/ContactSection'
import Footer           from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <MarqueeBanner /> */}
      <BespokeSection />

      {/* ── Ornamental section divider ── */}
      <div className="bg-midnight border-y border-gold/8 py-5">
        <div className="flex items-center gap-4 sm:gap-6 px-6 sm:px-10 md:px-20">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-gold/25" />
          <div className="flex items-center gap-4 shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-gold/45">
              <path d="M9 1 L17 9 L9 17 L1 9 Z" stroke="currentColor" strokeWidth="0.7"/>
              <path d="M9 5 L13 9 L9 13 L5 9 Z" stroke="currentColor" strokeWidth="0.7"/>
              <circle cx="9" cy="9" r="1.2" fill="currentColor"/>
            </svg>
            <span className="font-body text-[7px] tracking-[0.6em] uppercase text-gold/40">
              Our Collections
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-gold/45">
              <path d="M9 1 L17 9 L9 17 L1 9 Z" stroke="currentColor" strokeWidth="0.7"/>
              <path d="M9 5 L13 9 L9 13 L5 9 Z" stroke="currentColor" strokeWidth="0.7"/>
              <circle cx="9" cy="9" r="1.2" fill="currentColor"/>
            </svg>
          </div>
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-gold/25" />
        </div>
      </div>

      <CollectionsGrid />
      <ProcessSteps />
      <CraftStory />
      <WhyUs />
      <MaterialsSection />
      <Testimonial />
      <ContactSection />
      <Footer />
    </main>
  )
}
