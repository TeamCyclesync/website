'use client'
import { useState } from 'react'
import Link from 'next/link'
import { RiAppsLine, RiHourglassLine } from 'react-icons/ri'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'

export const NavLinkList = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: "Services",
    link: "#services"
  },
  {
    title: 'Get Started',
    link: "#get-started"
  },
]

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Use setTimeout to ensure the sheet is closed before scrolling
    setTimeout(() => {
      if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // Update the URL without causing a page reload
      window.history.pushState({}, '', href);
    }, 300);
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
                <li key={item.title} className='w-full'>
                  <Link
                    href={item.link}
                    className="text-lg tracking-tighter font-medium w-full block py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-purple-500/10 hover:scale-[1.02]"
                    onClick={(e) => handleLinkClick(e, item.link)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col space-y-4 pb-8">
            <span className='flex items-center space-x-4'>
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
            <span className='tracking-tighter text-muted-foreground text-[0.725rem]'>
              &copy; 2024 Cyclesync India, All rights reserved
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default SideNavigation