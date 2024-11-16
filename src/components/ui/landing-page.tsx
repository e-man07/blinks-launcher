import Header from './header'
import HeroSection from './hero-section'
import FeaturedTokens from './featured-token'
import HowItWorks from './how-it-works'
import ReadyToLaunch from './ready-to-launch'
import Footer from './footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTokens />
        <HowItWorks />
        <ReadyToLaunch />
      </main>
      <Footer />
    </div>
  )
}