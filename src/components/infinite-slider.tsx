// 'use client';
// import { cn } from '@/lib/utils';
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect, useRef } from 'react';

// type InfiniteSliderProps = {
//   children: React.ReactNode;
//   gap?: number;
//   speed?: number; // Speed of animation
//   direction?: 'horizontal' | 'vertical';
//   reverse?: boolean;
//   className?: string;
// };

// export function InfiniteSlider({
//   children,
//   gap = 16,
//   speed = 1, // Adjust speed (higher = faster)
//   direction = 'horizontal',
//   reverse = false,
//   className,
// }: InfiniteSliderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const animationControls = useAnimation();

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const scrollSize =
//       direction === 'horizontal'
//         ? container.scrollWidth / 2
//         : container.scrollHeight / 2;

//     const from = reverse ? 0 : -scrollSize;
//     const to = reverse ? -scrollSize : 0;

//     // Animate infinitely without resetting
//     animationControls.start({
//       [direction === 'horizontal' ? 'x' : 'y']: [from, to],
//       transition: {
//         ease: 'linear',
//         duration: speed,
//         repeat: Infinity,
//       },
//     });
//   }, [animationControls, speed, direction, reverse]);

//   return (
//     <div ref={containerRef} className={cn('overflow-hidden', className)}>
//       <motion.div
//         animate={animationControls}
//         className="flex"
//         style={{
//           display: 'flex',
//           flexDirection: direction === 'horizontal' ? 'row' : 'column',
//           gap: `${gap}px`,
//           minWidth: '100%', // Ensures it fits properly in layout
//         }}
//       >
//         {/* Duplicate elements to create an infinite effect */}
//         {[...Array(3)].map((_, i) => (
//           <div key={i} className="flex">
//             {children}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
