import AppDisplay from "@/components/landing/AppDisplay"
import HeroSection from "@/components/landing/HeroSection"
import Navigation from "@/components/nav/Navigation"

const LandingPage = () => {
  return (
    <div className='gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Navigation />
      <main className="flex flex-col gap-[2rem]">
        <HeroSection />

        <AppDisplay />
      </main>
    </div>
  )
}

export default LandingPage
