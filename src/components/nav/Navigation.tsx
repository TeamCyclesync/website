"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NavLinkList } from '@/constants';
import { InteractiveHoverButton } from '@/components/InteractiveHoverButton';
import SideNavigation from './SideNavigation';
import { useIsMobile } from '@/lib/useIsMobile';

interface ScrollState {
  scrollY: number;
  isScrollingDown: boolean;
  isCompressed: boolean;
}

const AnimatedNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="group relative inline-block h-5 overflow-hidden text-sm"
    >
      <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
        <span className="block text-gray-300">{children}</span>
        <span className="block text-white">{children}</span>
      </span>
    </Link>
  );
};

// GlassEffect component for liquid glass UI
const GlassEffect = ({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  const glassStyle = {
    boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)',
    transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 2.2)',
    ...style,
  };
  return (
    <div className={`relative flex font-semibold overflow-hidden transition-all duration-700 ${className}`} style={glassStyle}>
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl"
        style={{
          backdropFilter: 'blur(3px)',
          filter: 'url(#glass-distortion)',
          isolation: 'isolate',
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: 'rgba(255, 255, 255, 0.25)' }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)',
        }}
      />
      {/* Content */}
      <div className="relative z-30 w-full">{children}</div>
      {/* SVG Filter for glass distortion */}
      <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
};


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrollingDown: false,
    isCompressed: false
  });
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const scrollThreshold = 100;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const shouldCompress = currentScrollY > scrollThreshold && isScrollingDown;
      setScrollState({
        scrollY: currentScrollY,
        isScrollingDown,
        isCompressed: shouldCompress
      });
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }
    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = window.setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }
    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <Image src="/assets/logo.png" alt="Cyclesync Logo" width={40} height={40} />
    </div>
  );

  // Filter out Get Started for nav links, use it as button
  const navLinksData = NavLinkList.filter(link => link.title !== 'Get Started');
  const getStartedLink = NavLinkList.find(link => link.title === 'Get Started');

  const isMobile = useIsMobile();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  if (!hydrated) return null;

  return (
    <GlassEffect>
      <header
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] flex flex-col items-center backdrop-blur-2px border border-[#3636360b] bg-[#1f1f1f1f] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobile
            ? 'pl-6 pr-6 py-2 min-h-[60px] rounded-full'
            : headerShapeClass + (scrollState.isCompressed
                ? ' pl-3 pr-3 py-1 min-h-[44px] rounded-2xl'
                : ' pl-6 pr-6 py-2 min-h-[60px] rounded-full')
        }`}
        style={{
          transitionProperty: 'min-height, padding, border-radius, background-color',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className={`flex items-center justify-between w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobile
            ? 'gap-x-6'
            : scrollState.isCompressed ? 'gap-x-2 p-1' : 'gap-x-6 sm:gap-x-8'
        }`}>
          <div className="flex items-center">
            <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
              <Image src="/assets/logo.png" alt="Cyclesync Logo" width={40} height={40} />
            </div>
            {/* Desktop: show CycleSync text only when not compressed; Mobile: always show */}
            <span
              className={`ml-2 text-white text-lg font-bold font-poppins transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isMobile
                  ? 'opacity-100 w-auto'
                  : scrollState.isCompressed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
              }`}
              style={{
                maxWidth: isMobile ? 200 : scrollState.isCompressed ? 0 : 200,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transition: 'all 500ms cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              CycleSync
            </span>
          </div>
          {/* Desktop nav links only when not compressed */}
          <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm justify-center w-full">
            {!scrollState.isCompressed && navLinksData.map((link) => (
              <AnimatedNavLink key={link.link} href={link.link}>
                {link.title}
              </AnimatedNavLink>
            ))}
          </nav>
          {/* Desktop: Always show Get Started button, even when compressed; Mobile: never show in navbar */}
          <div className={`hidden sm:flex items-center gap-2 sm:gap-3`}>
            {getStartedLink && (
              <Link href={getStartedLink.link}>
                <InteractiveHoverButton text="Get Started" className="text-black relative justify-center px-4 py-1 text-xs min-w-[100px] h-8" style={{fontSize:'0.95rem'}} />
              </Link>
            )}
          </div>
          {/* Mobile: show burger icon and use SideNavigation for sidebar */}
          <div className="sm:hidden flex items-center">
            <SideNavigation />
          </div>
        </div>
      </header>
    </GlassEffect>
  );
};

export default Navigation;
