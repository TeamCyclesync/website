'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroFloatingImageProps {
  className?: string;
  slideFrom?: "left" | "right";
  children: React.ReactNode;
}

const HeroFloatingImage: React.FC<HeroFloatingImageProps> = ({
  className,
  slideFrom = 'left',
  children
}) => {
  const variants: Variants = {
    hidden: {
      x: slideFrom === 'left' ? '-100%' : '100%',
      opacity: 0
    },
    visible: {
      x: slideFrom === 'left' ? '3%' : '-3%',
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.9, 0, 0.1, 1]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={`absolute ${slideFrom === 'left' ? 'left-0' : 'right-0'} bg-white rounded-lg max-lg:hidden lg:w-[300px] xl:w-[400px] h-60 flex justify-center items-center shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default HeroFloatingImage;