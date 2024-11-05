import HeroText from "./HeroText"

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-2 max-sm:pt-12 max-lg:pt-[4rem] md:pt-[6rem] md:pb-[4rem]">
        <HeroText />
    </div>
  )
}

export default HeroSection