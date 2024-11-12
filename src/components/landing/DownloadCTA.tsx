'use client'
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const DownloadCTA = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {
        amount: 0.5,
        once: true
    });
    return (
        <motion.div className="max-w-[800px] mx-auto px-[1rem] relative mt-12" ref={containerRef}
            initial={{
                opacity: 0,
                translateY: "20px"
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                translateY: isInView ? 0 : "20px"
            }}
            id="get-started"
        >
            <div className="flex gap-2">
                <Image
                    src={"/assets/mockup.png"}
                    alt="Application Mockup"
                    width={300}
                    height={300}
                />

                <div className="flex flex-col gap-6">
                    <h3 className="text-[2.5rem] tracking-tighter font-semibold text-white leading-[40px]">Coming Soon on Playstore and App Store</h3>
                    <div className="flex gap-2">
                        <div className="relative h-[50px] w-[150px]">
                            <Image
                                src={"/assets/google-play.png"}
                                alt="Google Play Store Image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="relative h-[50px] w-[150px]">
                            <Image
                                src={"/assets/app-store.png"}
                                alt="Google Play Store Image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default DownloadCTA