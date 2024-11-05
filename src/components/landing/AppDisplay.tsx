'use client'
import Image from "next/image"
import {
    motion,
    useScroll,
    useInView
} from 'framer-motion'
import { useEffect, useRef } from "react";

const AppDisplay = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {
        amount: 0.7,
    });

    useEffect(() => {
        console.log(`The element ${isInView ? "is" : "is not"} in view`);
    }, [isInView])

    return (
        <motion.div 
            className="max-w-[900px] px-[1rem] mx-auto text-center md:mt-[3rem] flex flex-col"
            ref={containerRef}

            initial={{
                opacity: 0,
                translateY: "20px"
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                translateY: isInView ? 0 : "20px"
            }}
        >
            <div className="flex flex-col gap-2">
                <h1 className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-tighter font-semibold text-white text-shadow-100">Feel the Advantage</h1>
                <p className="md:text-[1rem] text-[0.875rem] leading-5 md:max-w-[650px] text-shadow-100 text-white">
                    Manage your cycles with ease using our intuitive interface. Track your symptoms, set reminders, and gain valuable insights into your menstrual health.
                </p>
            </div>

            <div>
                <Image
                    src={"/assets/mockup1.png"}
                    width={300}
                    height={300}
                    alt="mockup"
                    className="mx-auto md:mt-[3rem] mt-[2rem]"
                />
            </div>
        </motion.div>
    )
}

export default AppDisplay