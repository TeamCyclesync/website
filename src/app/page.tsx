import AboutUs from "@/components/landing/AboutUs"
import AppDisplay from "@/components/landing/AppDisplay"
import Footer from "@/components/landing/Footer"
import HeroSection from "@/components/landing/HeroSection"
import ScrollPrompt from "@/components/landing/ScrollPrompt"
import Navigation from "@/components/nav/Navigation"

const LandingPage = () => {
  return (
    <div className='gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden'>
      {/* Scroll Prompt */}
      {/* <ScrollPrompt /> */}

      <Navigation />
      <main className="flex flex-col max-sm:gap-[5rem] gap-[2rem]">
        {/* Hero Section */}
        <HeroSection />

        {/* Mobile app display */}
        <AppDisplay />

        {/* Team Intro / About us  */}
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
