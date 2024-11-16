'use client'
import Image from "next/image"
import {
    motion,
    useInView
} from 'framer-motion'
import { useRef } from "react";
import { cn } from "@/lib/utils";
import PopupDisplay from "./PopupDisplay";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiHourglassFill } from "react-icons/ri";
import { BiBrain } from "react-icons/bi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaNutritionix } from "react-icons/fa6";


const AppDisplay = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {
        amount: 0.5,
        once: true
    });

    return (
        <motion.div
            className={cn("max-w-[900px] px-[1rem] mx-auto text-center md:mt-[3rem] flex flex-col relative", isInView ? "pointer-events-none" : '')}
            id={"services"}
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
            <div className="flex flex-col gap-2 max-md:w-full">
                <h1 className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-tighter font-semibold text-white text-shadow-100">Feel the Advantage</h1>
                <p className="md:text-[1rem] text-[0.875rem] leading-5 sm:max-md:w-[600px] md:max-w-[650px] text-shadow-100 text-white">
                    Easily manage your cycle with our intuitive interface. Track symptoms, set reminders, and gain insights into your menstrual health.
                </p>
            </div>

            <div>
                <Image
                    src={"/assets/mockup1.png"}
                    width={300}
                    height={300}
                    alt="mockup"
                    className="mx-auto md:mt-[3rem] mt-[2rem] h-auto w-auto"
                    priority
                />
            </div>

            <PopupDisplay 
                icon={RiHourglassFill}
                label={'Cycle Tracking'}
                popFrom={'left'}
                delayAmount={0.5}
                triggerView={isInView}
                className="top-[35%] lg:left-[-10%] shadow-2xl tracking-tighter"
            />
            <PopupDisplay 
                icon={BiBrain}
                label={'AI Insights'}
                popFrom={'left'}
                delayAmount={0.75}
                triggerView={isInView}
                className="top-[70%] xsm:top-[60%] lg:left-[-10%] shadow-2xl tracking-tighter mt-4"
            />
            <PopupDisplay 
                icon={MdConnectWithoutContact}
                label={'Partner Connect'}
                popFrom={'right'}
                delayAmount={0.5}
                triggerView={isInView}
                className="top-[30%] xsm:top-[35%] right-[2.5%] lg:right-[-10%] shadow-2xl tracking-tighter"
            />
            <PopupDisplay 
                icon={FaNutritionix}
                label={'Nutrition Plans'}
                popFrom={'right'}
                delayAmount={0.75}
                triggerView={isInView}
                className="top-[60%] right-[2.5%] lg:right-[-10%] shadow-2xl tracking-tighter mt-4"
            />

        </motion.div>
    )
}

export default AppDisplay