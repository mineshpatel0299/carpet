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
      <MarqueeBanner />
      <CollectionsGrid />
      <BespokeSection />
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
