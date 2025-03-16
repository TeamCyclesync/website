'use client';

import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/landing/Footer';
import { Timeline } from '@/components/Timeline';
import { HandWrittenTitle } from '@/components/HandWrittenTitle';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const JourneyPage: React.FC = () => {
  const data = [
    {
      title: "February 2024 - Presenting CycleSync on Big Stages",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins mb-8">
            BioAsia 2024 – Out of 1,500+ startups, we were among the 80 selected to present at India’s largest biotechnology and healthcare summit, hosted by the Government of Telangana. This opportunity allowed us to showcase CycleSync’s AI-powered menstrual health solutions in front of top healthcare leaders, investors, and policymakers.
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins mb-8">
            IIT Bombay E-Summit 2024 – We presented CycleSync at the IIT Bombay Entrepreneurship Summit, one of India’s most prestigious startup events. This gave us the platform to network with industry experts, VCs, and startup leaders, further refining our strategy.
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins mb-8">
            NSRCEL - IIM Bangalore – We were selected for NSRCEL’s Women Startup Program, under IIM Bangalore, one of India’s most reputed startup incubators. We are currently going through the “Foundations of Entrepreneurship” stage, fine-tuning our business model, product-market fit, and go-to-market strategy.
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins mb-8">
            T-Hub Rubrix Program – We secured a spot in T-Hub’s Rubrix Program, which supports early-stage startups in moving from idea to MVP. With technical mentorship, product development support, and investor connections, we are now building a robust MVP to bring our solution to real users.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/trusted/bioasia.png"
              alt="BioAsia 2024 presentation"
              className="md:w-1/2"
            />
            <img
              src="/assets/trusted/ecelliit.png"
              alt="IIT Bombay E-Summit 2024 presentation"
              className="md:w-1/4 w-1/2"
            />
            <img
              src="/assets/trusted/nsr.png"
              alt="NSRCEL - IIM Bangalore"
              className="md:w-1/2 "
            />
            <img
              src="/assets/trusted/thub.png"
              alt="T-Hub Rubrix Program"
              className="md:w-1/3 w-1/2"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 2024 - Strengthening Our AI Capabilities",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins mb-8">
            AIWOS Start-a-Thon – We participated in AIWOS (AI Women in Startups), a program designed to support women-led AI innovations. This helped us refine our AI models for cycle tracking, PCOS detection, and hormonal imbalance insights.
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins mb-8">
            HerStart - Gujarat University Startup Council – Selected for HerStart 4.0, an incubation program that provides mentorship, resources, and funding support for women entrepreneurs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/trusted/shooting_stars_foundation.png"
              alt="AIWOS Start-a-Thon"
              className="md:w-full"
            />
            <img
              src="/assets/trusted/herstart.png"
              alt="HerStart - Gujarat University Startup Council"
              className="md:w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "December 2023 - Joining the 18Startup Community",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins">
            We became part of 18Startup, an exclusive startup community where we connected with founders, mentors, and investors to validate our business model and refine our vision.
          </p>
          <div className='flex justify-start'>
          <img
            src="/assets/trusted/18startup.png"
            alt="18Startup Community"
            className="md:w-1/2 w-60"
          />
          </div>
        </div>
      ),
    },
    {
      title: "November 2023 - Accepted into We Hub’s Flint Program",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins">
            We joined We Hub’s Flint Program, an initiative by the Government of Telangana to support women-led businesses. This program gave us mentorship, networking opportunities, and early-stage guidance, helping us solidify our foundation.
          </p>
          <img
            src="/assets/trusted/wehub.png"
            alt="We Hub’s Flint Program"
            className="md:w-1/3 w-1/2"
          />
        </div>
      ),
    },
    {
      title: "October 2023 - Microsoft for Startups",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-lg font-poppins">
            CycleSync became a part of Microsoft for Startups - Founders Hub, giving us access to Azure credits, AI tools, and world-class mentorship to help us build a scalable and data-driven menstrual health platform.
          </p>
          <img
            src="/assets/trusted/microsoftforstartups.png"
            alt="Microsoft for Startups"
            className="md:w-1/6 w-1/3"
          />
        </div>
      ),
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
      <Navigation />
      <main className="flex flex-col max-sm:gap-[5rem] gap-[1rem]">
        <div className="min-h-screen">
          <div className="top-0 left-0">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <Timeline data={data} />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JourneyPage;