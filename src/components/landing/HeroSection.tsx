import HeroText from "./HeroText"

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-2 max-sm:pt-12 max-lg:pt-[4rem] pt-[6rem] sm:pb-[4rem] pb-[1rem]">
        <HeroText />
    </div>
  )
}

export default HeroSection