import { NavLinkList } from "@/constants"
import { Button } from "../ui/button"
import DesktopNavlink from "./DesktopNavlink"

const DesktopNavlinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm text-white">
        {
            NavLinkList.map((link, index) => (
                link.title === 'Get Started' ? 
                <Button key={index} className="text-fuchsia-200 hover:scale-105 transition-all duration-300 flex gap-2 items-center hover:drop-shadow-xl">
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