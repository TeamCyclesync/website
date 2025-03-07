'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from '../ui/button'
import { FaAppStore } from 'react-icons/fa'
import { BiLogoPlayStore } from "react-icons/bi";
import { VscMapVertical } from "react-icons/vsc";
import Link from 'next/link'
import { motion } from "framer-motion"
import { SparklesText } from '../SparklesText'
import Avatar from '@/components/Avatar'
const HeroText = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["smoothly", "easily", "confidently", "happily", "healthily"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <>
        <motion.div 
            initial={{opacity: 0, translateY: "20px"}}
            animate={{opacity: 1, translateY: 0}}
            transition={{duration: 0.8,  ease: 'easeOut', delay: 0.25}}
            className='md:max-w-[1200px] md:mx-auto max-sm:px-[1rem] sm:px-[3rem] text-center flex flex-col gap-8 z-[10]'
        >
            <div className='flex flex-col'>
            <SparklesText 
                    text="Ditch your PMS rollercoaster and ride your cycle"
                    className=' tracking-wide leading-tight max-sm:text-[30px] max-sm:max-w-[450px] sm:max-w-[500px] sm:text-[40px] md:text-[65px] text-white drop-shadow-2xl md:max-w-[800px] mx-auto [text-shadow:_0_1px_8px_rgb(0_0_0_/_30%)] '
                    />
                   
                   <h2
                    className=" flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-0 md:mb-24 mt-2 mb-16">
                        {titles.map((title, index) => (
                            <motion.span
                                key={index}
                                className=" font-anton tracking-wide leading-tight absolute max-sm:text-[35px] max-sm:max-w-[450px] sm:max-w-[500px] sm:text-[40px] md:text-[75px] text-white drop-shadow-2xl md:max-w-[800px] mx-auto [text-shadow:_0_1px_8px_rgb(0_0_0_/_30%)]  "
                                initial={{ opacity: 0, y: "-100" }}
                                transition={{ type: "spring", stiffness: 50 }}
                                animate={
                                    titleNumber === index
                                        ? {
                                            y: 0,
                                            opacity: 1,
                                        }
                                        : {
                                            y: titleNumber > index ? -150 : 150,
                                            opacity: 0,
                                        }
                                }
                            >
                                {title}
                            </motion.span>
                        ))}

                    </h2>
                
                <p className='[text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)] text-xs md:text-lg text-white max-md:max-w-[500px] max-w-[620px] mx-auto leading-5 font-poppins'>Track your menstrual cycle, sync wellness tips, and unlock personalized insights that align with your body’s natural rhythm.</p>
            </div>

            <div className='flex max-sm:flex-col max-sm:w-full max-md:max-w-[370px] gap-4 mx-auto'>
                <Link href={"/"} className='hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out'>
                    <Button variant={'outline'} className='font-[500] w-3/4 md:w-max hover:scale-105 transition-all duration-300 ease-out' size={'lg'}>
                        Explore
                        <VscMapVertical size={32} />
                    </Button>
                </Link>
                <Link href={"/"} className='hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out'>
                    <Button className='text-fuchsia-100 md:w-max w-3/5 hover:scale-105 transition-all duration-300 ease-out border border-white/20' size={'lg'}>
                        Download the App
                        <BiLogoPlayStore/><FaAppStore/>
                    </Button>
                </Link>
            </div>
            <Avatar />
        </motion.div>
        </>
    )
}

export default HeroText