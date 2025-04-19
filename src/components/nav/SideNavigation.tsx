'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RiAppsLine } from 'react-icons/ri';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import SignupForm from '@/components/SignupForm';

export const NavLinkList = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Team',
    link: '/team',
  },
  {
    title: 'Blogs',
    link: '/blog',
  },
  {
    title: 'Journey',
    link: '/journey',
  },
  {
    title: 'Get Started',
    link: '#get-started',
  },
  {
    title: 'Signup',
    link: '#signup',
  },
];

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [fade, setFade] = useState('opacity-0 scale-90');

  const handleLinkClick = (link: string) => {
    if (link === '#signup') {
      setIsOpen(false);
      setTimeout(() => {
        setFade('opacity-100 scale-100');
        setShowSignupForm(true);
      }, 300);
    } else {
      setIsOpen(false);
    }
  };

  const closeSignupForm = () => {
    setFade('opacity-0 scale-90');
    setTimeout(() => setShowSignupForm(false), 300);
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="focus:outline-none" aria-label="Open navigation menu">
            <RiAppsLine size={25} className="text-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col justify-between z-[101]">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            This menu contains links to various sections of our website.
          </SheetDescription>
          <nav>
            <ul className="space-y-1 pt-8 px-2">
              {NavLinkList.map((item) => (
                <li key={item.title} className="w-full">
                  {item.title === 'Signup' ? (
                    <button
                      onClick={() => handleLinkClick(item.link)}
                      className="text-lg tracking-tighter font-medium w-full block py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-purple-500/10 hover:scale-[1.02]"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      href={item.link}
                      className="text-lg tracking-tighter font-medium w-full block py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-purple-500/10 hover:scale-[1.02]"
                      onClick={() => handleLinkClick(item.link)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col space-y-4 pb-8">
            <span className="flex items-center space-x-4">
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="Cyclesync Logo"
                  width={50}
                  height={50}
                  className="text-shadow-100"
                />
              </div>
              <span className="text-3xl text-neutral-800 tracking-tighter font-[800]">Cyclesync</span>
            </span>
            <span className="tracking-tighter text-muted-foreground text-[0.725rem]">
              &copy; 2025 Cyclesync India, All rights reserved
            </span>
          </div>
        </SheetContent>
      </Sheet>
      {showSignupForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-all duration-300">
          <div className={`bg-black bg-opacity-80 p-6 rounded-lg w-5/6 mx-16 transform transition-all duration-300 ${fade}`}>
            <SignupForm />
            <button
              onClick={closeSignupForm}
              className="mt-4 text-sm text-white font-poppins"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavigation;