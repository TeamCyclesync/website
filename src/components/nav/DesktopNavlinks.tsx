'use client';

import { NavLinkList } from '@/constants';
import { Button } from '../ui/button';
import DesktopNavlink from './DesktopNavlink';
import Link from 'next/link';
import { useState } from 'react';
import SignupForm from '@/components/SignupForm';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveHoverButton } from '@/components/InteractiveHoverButton';
import { ExpandableTabs } from '@/components/expandable-tabs';
import { Home, Users, BookOpen, UserPlus, Map } from 'lucide-react';

const DesktopNavlinks = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const tabs = [
    { title: 'Home', icon: Home },
    { title: 'Team', icon: Users },
    { title: 'Blogs', icon: BookOpen },
    { title: 'Signup', icon: UserPlus },
    { title: 'Journey', icon: Map },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8 text-sm text-white">
      <ExpandableTabs
        tabs={tabs}
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800"
        onChange={(index) => {
          if (index !== null) {
            const selectedTab = tabs[index];
            if (selectedTab.title === 'Signup') {
              setShowSignupForm(true);
            } else {
              const link = NavLinkList.find((nav) => nav.title === selectedTab.title)?.link;
              if (link) {
                window.location.href = link;
              }
            }
          }
        }}
      />
      <Link href={'#get-started'}>
        <InteractiveHoverButton
          text="Get Started"
          className="text-black relative justify-center"
        />
      </Link>
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