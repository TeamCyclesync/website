'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FaAppStore } from 'react-icons/fa'
import { BiLogoPlayStore } from "react-icons/bi";
// import { RiMap2Line } from 'react-icons/ri'
import { VscMapVertical } from "react-icons/vsc";
import Link from 'next/link'
import {motion} from "framer-motion"

const HeroText = () => {
    return (
        <motion.div 
            initial={{opacity: 0, translateY: "20px"}}
            animate={{opacity: 1, translateY: 0}}
            transition={{duration: 0.8,  ease: 'easeOut', delay: 0.25}}
            className='md:max-w-[1200px] md:mx-auto max-sm:px-[1rem] sm:px-[3rem] text-center flex flex-col gap-8 z-[10]'
        >
            <div className='flex flex-col gap-8'>
                <h1 className='leading-tight max-sm:text-[30px] max-sm:max-w-[450px] sm:max-w-[500px] sm:text-[40px] md:text-[65px] font-bold text-white drop-shadow-2xl md:max-w-[800px] mx-auto [text-shadow:_0_1px_8px_rgb(0_0_0_/_30%)] '>Ditch your pms rollercoaster and ride your cycle smoothly</h1>
                <p className='[text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)] text-xs md:text-lg text-white max-md:max-w-[500px] max-w-[620px] mx-auto leading-5 font-play'>Track your menstrual cycle, sync wellness tips, and unlock personalized insights that align with your body’s natural rhythm.</p>
            </div>

            <div className='flex max-sm:flex-col max-sm:w-full max-md:max-w-[370px] gap-4 mx-auto'>
                <Link href={"/"} className='hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out'>
                    <Button variant={'outline'} className='font-[500] w-[100%] hover:scale-105 transition-all duration-300 ease-out' size={'lg'}>
                        Explore
                        <VscMapVertical size={32} />
                    </Button>
                </Link>
                <Link href={"/"} className='hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out'>
                    <Button className='text-fuchsia-100 w-100% hover:scale-105 transition-all duration-300 ease-out border border-white/20' size={'lg'}>
                        Download the App
                        <BiLogoPlayStore/><FaAppStore/>
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}

export default HeroText