'use client'
import { cn } from "@/lib/utils";
import { FC } from "react";
import { motion } from "framer-motion";

interface HeroFloatingImageProps {
  className?: string;
  slideFrom?: "left" | "right";
  children: React.ReactNode;
}

const HeroFloatingImage: FC<HeroFloatingImageProps> = ({
  className,
  children,
  slideFrom = "left"
}) => {
  const variants = {
    hidden: {
      left: slideFrom === "left" ? '-100%' : '120%',
      width: "400px",
      // rotateX: "180deg"
    },
    visible: {
      left : slideFrom === "left" ? '1%' : '73%',
      opacity: 1,
      width: "400px",
      // rotateX: '0deg',
      transition: {
        duration: 2,
        ease: [0.9, 0, 0.1, 1]
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={cn(
        "absolute bg-white rounded-lg w-[240px] h-[240px] flex justify-center items-center shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default HeroFloatingImage;