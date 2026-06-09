import Navbar           from '@/components/Navbar'
import HeroSection      from '@/components/HeroSection'
import BespokeSection   from '@/components/BespokeSection'
import CollectionsGrid  from '@/components/CollectionsGrid'
import FeaturesBar      from '@/components/FeaturesBar'
import ProcessSteps     from '@/components/ProcessSteps'
import CraftStory       from '@/components/CraftStory'
import WhyUs            from '@/components/WhyUs'
import MaterialsSection from '@/components/MaterialsSection'
import RugGuideSection  from '@/components/RugGuideSection'
import Testimonial      from '@/components/Testimonial'
import ContactSection   from '@/components/ContactSection'
import Footer           from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BespokeSection />
      <CollectionsGrid />
      <FeaturesBar />
      <ProcessSteps />
      <CraftStory />
      <WhyUs />
      <MaterialsSection />
      <RugGuideSection />
      <Testimonial />
      <ContactSection />
      <Footer />
    </main>
  )
}
