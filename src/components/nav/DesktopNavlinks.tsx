'use client';

import { NavLinkList } from '@/constants';
import { Button } from '../ui/button';
import DesktopNavlink from './DesktopNavlink';
import Link from 'next/link';
import { useState } from 'react';
import SignupForm from '@/components/SignupForm';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveHoverButton } from '@/components/InteractiveHoverButton';

const DesktopNavlinks = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);

  return (
    <nav className="hidden md:flex items-center gap-8 text-sm text-white">
      {NavLinkList.map((link, index) =>
        link.title === 'Get Started' ? (
          <Link href={'#get-started'} key={index}>
            <InteractiveHoverButton
              key={index}
              text={link.title}
              className=" text-black relative justify-center"
            />
          </Link>
        ) : link.title === 'Signup' ? (
          <button
            key={index}
            onClick={() => setShowSignupForm(true)}
            className="hover:scale-105 text-white transition-all ease-out"
          >
            {link.title}
          </button>
        ) : (
          <DesktopNavlink href={link.link} key={index}>
            {link.title}
          </DesktopNavlink>
        ),
      )}
      <AnimatePresence>
        {showSignupForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="gradient-bg p-4 rounded-lg w-full max-w-md"
            >
              <SignupForm />
              <button
                onClick={() => setShowSignupForm(false)}
                className="mt-4 text-sm text-white hover:text-gray-900"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default DesktopNavlinks;