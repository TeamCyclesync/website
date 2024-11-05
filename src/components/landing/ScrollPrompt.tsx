'use client'
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { RiArrowDownLine } from "react-icons/ri";

const ScrollPrompt = () => {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 100], [1, 0])

    return (
        <motion.div
            className="flex flex-col gap-4 absolute top-[48%] left-[50%] translate-x-[-50%] z-[30] max-md:hidden"
            style={{ opacity }}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1.5,
                    duration: 0.5
                }
            }}
        >
            <div className="pointer-events-none shadow-3xl p-2 rounded-full bg-white animate-bounce text-purple-500">
                <RiArrowDownLine size={20} />
            </div>
        </motion.div>
    )
}

export default ScrollPrompt