'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "../ui/button"
import Link from "next/link"
import { RiArrowUpLine } from "react-icons/ri"

const BackToTop = () => {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 100], [0, 1])
    return (
        <motion.div
            style={{ opacity }}
            className="fixed right-[0.5rem] sm:right-[1rem] md:right-[2rem] text-sm rounded-lg z-[80] bottom-[2rem] hover:scale-[1.05] transition-all duration-200 group"
        >
            <Link
                href={"#top"}
            >
                <Button className="shadow-xl rounded-lg text-black font-semibold bg-teal-100 group-hover:bg-yellow-100 flex items-center" size={'sm'}>
                    <RiArrowUpLine />
                    <span>Back to top</span>
                </Button>
            </Link>
        </motion.div>
    )
}

export default BackToTop