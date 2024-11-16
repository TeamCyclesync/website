'use client'
import DesktopNavlinks from "./DesktopNavlinks"
import SideNavigation from "./SideNavigation"
import { motion } from "framer-motion"
import { RiHourglassLine } from "react-icons/ri"

const Navigation = () => {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25}}
            className="md:px-8 px-4 py-3 flex justify-between items-center w-full"
        >
            <div className="logo">
                <span className="text-white text-[20px] flex gap-1 items-center">
                    <span className="p-2 rounded-full">
                        <RiHourglassLine className="text-white text-shadow-100" size={28}/>
                    </span>
                    <span className="tracking-tighter text-[25px] font-semibold max-md:hidden">Cyclesync</span>
                </span>
            </div>

            {/* Desktop navigation links */}
            <DesktopNavlinks />
            
            <SideNavigation />
        </motion.div>
    )
}

export default Navigation