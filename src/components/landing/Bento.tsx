'use client'

import Image from 'next/image'
import { FaHandFist } from "react-icons/fa6";
import { GiDna2 } from "react-icons/gi";
import { IoHourglassOutline } from "react-icons/io5";
import { Button } from '../ui/button';
import { FiDownload } from "react-icons/fi";
import { FaCalendarCheck } from "react-icons/fa6";
import {
    motion,
    useInView
} from 'framer-motion'
import { useRef } from 'react';


const Bento = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {
        amount: 0.5,
        once: true
    });
    return (
        <motion.div className='p-[1rem] -mt-4 sm:mt-10 xsm:max-sm:px-[3rem]'
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

            <div className="flex flex-col gap-1 max-md:w-full max-w-[850px] mx-auto text-center mb-10">
                <h1 className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-tighter font-semibold text-white text-shadow-200">Why Choose Us</h1>
                <p className="md:text-[1rem] mx-auto text-[0.875rem] leading-5 sm:max-md:w-[600px] md:max-w-[650px] text-shadow-200 text-white">
                Track, manage, and understand your menstrual health with ease and confidence.
                </p>
            </div>

            <div className='max-w-[850px] mx-auto grid max-sm:grid-cols-2 max-sm:grid-rows-4 grid-cols-3 grid-rows-3 gap-x-4 gap-y-4'>

                {/* Hero Section */}
                <div className='bg-purple-400 sm:bg-gradient-to-b from-pink-300 via-yellow-300 to-amber-300 max-sm:col-span-2 max-sm:row-start-1 max-sm:max-h-[160px] sm:row-span-3 sm:h-[480px] p-4 fully-centered rounded-xl relative overflow-hidden group hover:scale-[1.02] shadow-xl hover:shadow-2xl transition-all duration-300 ease'>
                    {/* Card Icon */}
                    <div className='absolute left-[2%] sm:left-[6%] top-[10%] sm:top-[4%] rounded-full border-[3px] border-white z-[13] p-2 max-xsm:hidden'>
                        <FaHandFist size={20} className='text-white' />
                    </div>

                    {/* Overlay */}
                    <div className='max-sm:hidden image-overlay group-hover:image-overlay-dark top-[25rem] group-hover:top-[12rem] transition-all duration-300 ease delay-250' />

                    {/* Image Background */}
                    <div className='absolute h-[200px] w-[100px] sm:w-full sm:h-full content-none z-[13] max-sm:bottom-[-40%] sm:left-[20%] group-hover:scale-[1.03] sm:group-hover:left-[15%] transition-all duration-300 ease sm:grayscale sm:group-hover:grayscale-0'>
                        <Image 
                            src={"/assets/bento-hero.png"} 
                            alt='Bento Hero Image' 
                            fill 
                            className='object-cover rounded-lg' 
                            sizes='(max-width: 640px) 100px, 100%'
                        />
                    </div>

                    <div className='max-sm:text-center max-sm:px-4 z-[13] text-white absolute sm:bottom-[-12%] sm:left-6 sm:group-hover:bottom-[5%] transition-all duration-500 ease-in-out'>
                        <div className='flex flex-col sm:gap-2 sm:max-w-[200px] max-sm:w-full'>
                            <span className='text-amber-300 sm:text-purple-500 font-bold tracking-tighter uppercase text-shadow-200 text-[1rem]'>Feel</span>
                            <h3 className='text-[1.8rem] md:text-[2.25rem] max-sm:mb-4 text-white text-shadow-200 tracking-tighter font-semibold leading-6 mb-2'>
                                Empowered
                            </h3>
                            <p className='text-sm text-shadow-200 max-sm:hidden'>
                                Your life changes when you discharge at the right time, faxx
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sub section - 1 */}
                <div className='max-sm:col-span-1 fully-centered rounded-xl p-4 hover:scale-[1.03] duration-300 transition-scale ease-in-out bg-amber-300 group relative overflow-hidden'>
                    <IoHourglassOutline className='absolute text-white/30' size={200} />

                    <div className='flex flex-col text-center z-[13]'>
                        <span className='tracking-tighter text-[2rem] md:text-[3rem] font-extrabold text-white text-shadow-200 leading-[50px] group-hover:scale-[1.1] duration-300 transition-all'>20%</span>
                        <span className='text-white font-bold tracking-tight uppercase leading-[18px] text-[0.875rem] md:text-[1rem] text-shadow-200'><span className='text-violet-'>Increase</span> in Productivity</span>
                    </div>
                </div>

                {/* Sub Section 2 */}
                <div className='max-sm:col-span-1 fully-centered rounded-xl hover:scale-[1.03] duration-300 transition-scale ease-in-out bg-emerald-100 relative overflow-hidden group'>

                    <div className='absolute h-[160px] w-[150px] left-[8%] grayscale group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:left-[5%] transition-all duration-300 ease'>
                        <Image priority src={"/assets/smiling.png"} alt='Happy Independant Woman' width={500} height={800} />
                    </div>
                </div>

                {/* section - 1 */}
                <div className='max-sm:col-span-2 col-span-2 sm:row-start-1 fully-centered rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all dutation-300 ease bg-pink-400 relative group overflow-hidden group'>
                    {/* Icon */}
                    <GiDna2 className='absolute text-white/20 -right-[5%] group-hover:scale-[1.08] transition-all duration-300 ease' size={260} />

                    {/* Image */}
                    <div className='absolute md:h-[250px] h-[200px] w-[200px] md:w-[250px] left-[-8%] bottom-[-35%] group-hover:left-[-5%] transition-all dutation-300 ease grayscale group-hover:grayscale-0 group-hover:scale-[1.03]'>
                        <Image priority src={"/assets/running.png"} alt='Women running' height={500} width={600} className='object-cover h-full w-full' />
                    </div>

                    <h3 className='text-[1.5rem] md:text-[2rem] text-white font-bold tracking-tighter text-right text-shadow-200 absolute right-[5%] bottom-[35%] leading-[15px]'>
                        Work with your Biology
                    </h3>
                    <p className='absolute bottom-[10%] right-[5%] text-violet-700 tracking-tight font-bold text-[0.875rem] md:text-[1rem] uppercase'>
                        Not against it
                    </p>
                </div>

                {/* section - 2 */}
                <div className='max-sm:col-span-2 col-span-2 fully-centered rounded-xl bg-purple-300 relative overflow-hidden group hover:scale-[1.03] transition-all duration-300 ease'>

                    <div className='absolute max-sm:w-[100px] max-sm:h-[150px] w-[150px] h-[200px] bottom-[-15%] left-[-2%] xsm:left-[3%] group-hover:left-[5%] transition-all duration-300 ease grayscale group-hover:grayscale-0 group-hover:scale-[1.03]'>
                        <Image priority src={"/assets/track.png"} alt='Tracking Cycle' width={150} height={200} className='object-contain' />
                    </div>

                    <div className='flex flex-col gap-1 absolute right-[5%] top-[15%] text-right'>
                        <h3 className='text-white text-shadow-200 font-semibold md:leading-8 text-[1.5rem] leading-[25px] md:text-[2rem] tracking-tighter'>Track Your Cycles <br className='xsm:max-sm:hidden' />with Ease</h3>
                    </div>

                    <div className='gap-2 items-center absolute bottom-[10%] right-[5%] flex'>
                        <Button className='hover:scale-[1.03] hover:bg-purple-700 hover:shadow-lg transition-all  bg-purple-600 duration-300 ease' size={'sm'}><FiDownload /> Download the App</Button>

                        <Button size={'sm'} className='flex gap-2 items-center hover:scale-[1.03] transition-all duration-300 ease'>
                            <FaCalendarCheck />
                            Take a Demo
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Bento