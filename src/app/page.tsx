import AboutUs from "@/components/landing/AboutUs"
import AppDisplay from "@/components/landing/AppDisplay"
import BackToTop from "@/components/landing/BackToTop"
import Bento from "@/components/landing/Bento"
import DownloadCTA from "@/components/landing/DownloadCTA"
import Footer from "@/components/landing/Footer"
import HeroSection from "@/components/landing/HeroSection"
import Navigation from "@/components/nav/Navigation"

const LandingPage = () => {
  return (
    <div className='gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden'>
      <BackToTop />

      <Navigation />
      <main className="flex flex-col max-sm:gap-[5rem] gap-[1rem]">
        {/* Hero Section */}
        <HeroSection />

        {/* Mobile app display */}
        <AppDisplay />

        <Bento />

        {/* Team Intro / About us  */}
        {/* <AboutUs /> */}

        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
