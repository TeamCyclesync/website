import Link from "next/link"
import {FC} from "react"

type DesktopNavlinkProps = {
  href: string
  children: React.ReactNode
}

const DesktopNavlink: FC<DesktopNavlinkProps> = ({href, children}) => {
  return (
    <Link href={href} className="hover:scale-105 text-white transition-all ease-out">
        {children}
    </Link>
  )
}

export default DesktopNavlink