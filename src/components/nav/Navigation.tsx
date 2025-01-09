'use client';
import DesktopNavlinks from "./DesktopNavlinks";
import SideNavigation from "./SideNavigation";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component

const Navigation = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
            className="md:px-8 px-4 py-3 flex justify-between items-center w-full"
        >
            <div className="logo">
                <span className="text-white text-[20px] flex flex-col items-center">
                    <span className="p-2 rounded-full">                        <Image 
                            src="/assets/logo.png" 
                            alt="Cyclesync Logo"
                            width={44} 
                            height={40} 
                            className="text-shadow-100" 
                        />
                    </span>
                    <span className="tracking-wide text-md font-medium max-md:hidden">Cyclesync</span>
                </span>
            </div>

            {/* Desktop navigation links */}
            <DesktopNavlinks />

            <SideNavigation />
        </motion.div>
    );
};

export default Navigation;
