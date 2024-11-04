import { NavLinkList } from "@/constants"
import { Button } from "../ui/button"
import DesktopNavlink from "./DesktopNavlink"
import { RiHourglass2Line } from "react-icons/ri"

const DesktopNavlinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm text-white">
        {
            NavLinkList.map((link, index) => (
                link.title === 'Get Started' ? 
                <Button key={index} className="text-fuchsia-200 hover:scale-105 transition-all duration-300 flex gap-2 items-center hover:drop-shadow-xl">
                    <RiHourglass2Line size={25}/>
                    <span>{link.title}</span>
                </Button>
                :
                <DesktopNavlink href={link.link} key={index}>
                    {link.title}
                </DesktopNavlink>
            ))
        }
    </nav>
  )
}

export default DesktopNavlinks