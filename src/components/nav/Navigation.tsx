'use client'
import DesktopNavlinks from "./DesktopNavlinks"
import MobileNavlinks from "./MobileNavlinks"
import { motion } from "framer-motion"
import { RiHourglass2Line } from "react-icons/ri"

const Navigation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: "15px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="z-[100] md:px-8 px-4 py-3 sticky top-0 left-0 flex justify-between items-center w-full"
        >
            <div className="logo">
                <span className="text-white text-[20px] flex gap-2 items-center">
                    <span className="p-1 rounded-full border-2">
                        <RiHourglass2Line className="text-White"/>
                    </span>
                    <span className="tracking-tighter font-semibold max-md:hidden">Cyclesync</span>
                </span>

            </div>
            {/* Desktop navigation links */}
            <DesktopNavlinks />
            
            <MobileNavlinks />
        </motion.div>
    )
}

export default Navigation