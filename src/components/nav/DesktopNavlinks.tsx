import { NavLinkList } from "@/constants"
import Link from "next/link"
import { Button } from "../ui/button"

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
                <Link href={link.link} key={index}>
                    {link.title}
                </Link>
            ))
        }
    </nav>
  )
}

export default DesktopNavlinks