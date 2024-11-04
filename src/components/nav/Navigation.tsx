'use client'
import DesktopNavlinks from "./DesktopNavlinks"
import MobileNavlinks from "./MobileNavlinks"
import { motion } from "framer-motion"

const Navigation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: "15px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-transparent z-[100] backdrop-blur-sm md:px-8 px-4 py-3 sticky top-0 left-0 flex justify-between items-center w-full"
        >
            <div className="logo">
                <span className="text-white tracking-tighter font-semibold text-2xl font-serif">
                    LYDIA
                </span>

            </div>
            {/* Desktop navigation links */}
            <DesktopNavlinks />

            <MobileNavlinks />
        </motion.div>
    )
}

export default Navigation