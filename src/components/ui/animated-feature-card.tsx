"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedFeatureCardProps {
  index: string;
  tag: string;
  title: React.ReactNode;
  imageSrc: string;
  color: "orange" | "purple" | "blue";
  className?: string;
}

const colorVariants = {
  orange: {
    "--feature-color": "hsl(156, 74%, 55%)",
    "--feature-color-light": "hsl(156, 100%, 85%)",
    "--feature-color-dark": "hsl(24, 98%, 98%)",
  },
  purple: {
    "--feature-color": "hsl(211, 100%, 60%)",
    "--feature-color-light": "hsl(210, 100%, 83%)",
    "--feature-color-dark": "hsl(216, 100%, 98%)",
  },
  blue: {
    "--feature-color": "hsl(12, 70%, 54%)",
    "--feature-color-light": "hsl(12, 100%, 83%)",
    "--feature-color-dark": "hsl(216, 100%, 98%)",
  },
} as const;

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  ({ className, index, tag, title, imageSrc, color }, ref) => {
    const cardStyle = colorVariants[color] as React.CSSProperties;
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkScreen = () => setIsMobile(window.innerWidth < 768);
      checkScreen();
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const variants = {
      initial: { y: 0 },
      hover: !isMobile
        ? {
            y: -10,
            shadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }
        : { y: 0 }, // no hover effect on mobile
    };

    const imageVariants = {
      initial: { scale: 1, y: 0 },
      hover: !isMobile
        ? { scale: 1.25, y: -20 }
        : { scale: 1, y: 0 }, // no hover effect on mobile
    };

    return (
      <motion.div
        ref={ref}
        style={cardStyle}
        className={cn(
          "relative flex h-[340px] md:h-[410px] w-full flex-col justify-end overflow-hidden rounded-2xl border bg-card p-4 md:p-6 shadow-sm",
          className
        )}
        whileHover={!isMobile ? "hover" : undefined}
        initial="initial"
        variants={variants}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div
          className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, var(--feature-color-light) 20%, transparent 70%)`,
          }}
        />

        <div className="absolute top-4 left-4 md:top-6 md:left-6 font-mono text-sm md:text-lg font-bold text-muted-foreground">
          {index}
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center z-30 md:top-1 md:bottom-0 bottom-16"
          variants={imageVariants}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <img
            src={imageSrc}
            alt={tag}
            className="w-48 h-48 md:w-48 md:h-48 object-contain"
          />
        </motion.div>

        <div className="relative h-28 z-20 rounded-lg border bg-background/80 p-3 md:p-4 backdrop-blur-sm dark:bg-background/60">
          <span
            className="mb-2 inline-block rounded-full px-2.5 py-1 text-sm md:text-xs md:font-semibold font-medium"
            style={{
              backgroundColor: "var(--feature-color-dark)",
              color: "var(--feature-color)",
            }}
          >
            {tag}
          </span>
          <p className="text-[10px] md:text-base">{title}</p>
        </div>
      </motion.div>
    );
  }
);

AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
