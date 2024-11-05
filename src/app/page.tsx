import HeroSection from "@/components/landing/HeroSection"
import Navigation from "@/components/nav/Navigation"

const LandingPage = () => {
  return (
    <div className='gradient-bg min-h-screen grid grid-rows-[auto_1fr_auto] relative'>
      <Navigation />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default LandingPage
