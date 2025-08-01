'use client'
import Image from "next/image"
import {
    motion,
    useInView
} from 'framer-motion'
import { useRef } from "react";
import { cn } from "@/lib/utils";
import PopupDisplay from "./PopupDisplay";
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
            className={cn("max-w-[900px] px-[1rem] mx-auto text-center  flex flex-col relative", isInView ? "pointer-events-none" : '')}
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
                <h2 className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-tighter font-semibold text-white text-shadow-200 tracking-wide">Feel the Advantage</h2>
                <p className="md:text-[1rem] mx-auto text-[0.875rem] leading-5 sm:max-md:w-[600px] md:max-w-[650px] text-shadow-200 text-white md:tracking-widest">
                    Easily manage your cycle with our intuitive interface. Track symptoms, set reminders, and gain insights into your menstrual health.
                </p>
            </div>

            <div>
                <img
                    src="assets/mockup1.png"
                    width={300}
                    height={300}
                    alt="mockup"
                    className="mx-auto md:mt-[3rem] mt-[2rem]"
                />
            </div>

            {/* Popup displays for devices above md */}
            <div className="hidden md:block">
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
                    className="top-[70%] xsm:top-[60%] lg:left-[-0%] shadow-2xl tracking-tighter mt-4"
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
                    className="top-[60%] right-[4.5%] lg:right-[-0%] shadow-2xl tracking-tighter mt-4"
                />
            </div>

            {/* Popup displays for devices below md */}
            <div className="block md:hidden mt-4 mb-72">
                <PopupDisplay
                    icon={RiHourglassFill}
                    label={'Cycle Tracking'}
                    popFrom={'left'}
                    delayAmount={0.5}
                    triggerView={isInView}
                    className="shadow-2xl tracking-tighter mt-4 left-[18%]"
                />
                <PopupDisplay 
                    icon={BiBrain}
                    label={'AI Insights'}
                    popFrom={'left'}
                    delayAmount={0.75}
                    triggerView={isInView}
                    className="shadow-2xl tracking-tighter mt-40 left-[18%]"
                />
                <PopupDisplay 
                    icon={MdConnectWithoutContact}
                    label={'Partner Connect'}
                    popFrom={'right'}
                    delayAmount={0.5}
                    triggerView={isInView}
                    className="shadow-2xl tracking-tighter mt-20 right-[18%]"
                />
                <PopupDisplay 
                    icon={FaNutritionix}
                    label={'Nutrition Plans'}
                    popFrom={'right'}
                    delayAmount={0.75}
                    triggerView={isInView}
                    className="shadow-2xl tracking-tighter mt-56 right-[18%]"
                />
            </div>
        </motion.div>
    )
}

export default AppDisplay;