'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FaAppStore } from 'react-icons/fa'
import { RiMap2Line } from 'react-icons/ri'
import Link from 'next/link'
import {motion} from "framer-motion"

const HeroText = () => {
    return (
        <motion.div 
            initial={{opacity: 0, translateY: "20px"}}
            animate={{opacity: 1, translateY: 0}}
            transition={{duration: 0.8,  ease: 'easeOut', delay: 0.25}}
            className='md:max-w-[1200px] md:mx-auto max-sm:px-[1rem] sm:px-[3rem] text-center flex flex-col gap-8'
        >
            <div className='flex flex-col gap-5'>
                <h1 className='max-sm:leading-[35px] max-sm:text-[30px] sm:max-w-[450px] sm:leading-[50px] sm:text-[40px] md:text-[60px] tracking-tighter font-bold text-white drop-shadow-2xl md:leading-[60px] md:max-w-[700px] mx-auto'>Lydia isn't just Freedom, its Liberation</h1>
                <p className='text-white max-md:max-w-[500px] max-w-[620px] mx-auto leading-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptate voluptas repellendus, commodi tenetur molestiae rerum quisquam quis culpa hic.</p>
            </div>

            <div className='flex max-sm:flex-col max-sm:flex-col max-sm:w-full max-md:max-w-[370px] gap-4 mx-auto'>
                <Link href={"/"}>
                    <Button className='w-[100%] hover:scale-105 transition-all duration-300 ease-out' size={'lg'} variant={'outline'}>
                        <RiMap2Line size={30}/>
                        Explore Lydia
                    </Button>
                </Link>
                <Link href={"/"}>
                    <Button className='w-[100%] hover:scale-105 transition-all duration-300 ease-out' size={'lg'}>
                        <FaAppStore size={30}/>
                        Download the App
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}

export default HeroText