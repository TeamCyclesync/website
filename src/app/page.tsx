import AboutUs from "@/components/landing/AboutUs"
import AppDisplay from "@/components/landing/AppDisplay"
import BackToTop from "@/components/landing/BackToTop"
import Bento from "@/components/landing/Bento"
import DownloadCTA from "@/components/landing/DownloadCTA"
import Footer from "@/components/landing/Footer"
import HeroSection from "@/components/landing/HeroSection"
import Navigation from "@/components/nav/Navigation"
import { Button } from "@/components/ui/button"
import { SquareArrowOutUpRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
// import Faqs from '@/components/Faqs'
// import Avatar from '@/components/Avatar'
// import AuroraBackground from '@/components/AuroraBackground'
import { Logos3 } from "@/components/Logos3"
const LandingPage = () => {
  return (

    <div className='gradient-bg  dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden'>
      <BackToTop />

      <Navigation />
    
      <main className="md:mt-0 mt-20 flex flex-col max-sm:gap-[5rem] gap-[1rem]">
        {/* Hero Section */}
        <HeroSection />

        

        {/* Mobile app display */}
        <AppDisplay />
        <Logos3 className="mx-auto"/>;
       
        
        <Bento />

        {/* Team Intro / About us  */}
        {/* <AboutUs /> */}

        <DownloadCTA />
      </main>
      {/* <Faqs/> */}
      <Footer />
    </div>
  )
}

export default LandingPage
