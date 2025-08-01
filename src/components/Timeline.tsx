'use client';

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useAnimation,
} from 'framer-motion';
import { HandWrittenTitle } from '@/components/HandWrittenTitle';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.8 } },
  };

  return (
    <div
      className="dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-2 px-4 md:px-8 lg:px-10">
        <HandWrittenTitle title="CycleSync’s Journey" subtitle='From an Idea to a Game-Changer in Women’s Health' />
        <p className="text-gray-200 text-sm md:text-xl max-w-full font-poppins">
          At CycleSync, we’re on a mission to revolutionize menstrual health and empower women with AI-driven insights to track their cycles, manage PCOS, and optimize their overall well-being. Over the past 4 months, we have been making steady progress, gaining validation from top incubators, presenting at prestigious summits, and building a strong foundation for our vision.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const controls = useAnimation();
          const [entryRef, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          useEffect(() => {
            if (inView) {
              controls.start('visible');
            }
          }, [controls, inView]);

          return (
            <motion.div
              key={index}
              ref={entryRef}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white dark:text-white ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white dark:text-white">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </motion.div>
          );
        })}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-red-500 via-orange-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};