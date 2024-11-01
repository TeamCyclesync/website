import { NavLinkList } from "@/constants"
import { Button } from "../ui/button"
import DesktopNavlink from "./DesktopNavlink"

const DesktopNavlinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-4 text-sm text-white">
        {
            NavLinkList.map((link, index) => (
                link.title === 'Get Started' ? 
                <Button variant={'custom'} size={'custom'} key={index}>
                    {link.title}
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