import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import HowItWorks from '@/components/HowItWorks'
import OutcomeSection from '@/components/OutcomeSection'
import PricingSection from '@/components/PricingSection'
import CertPaths from '@/components/CertPaths'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <HowItWorks />
      <OutcomeSection />
      <PricingSection />
      <CertPaths />
      <FinalCTA />
      <Footer />
    </main>
  )
}
