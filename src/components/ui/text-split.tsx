
import { useSprings, animated, easings, type EasingFunction } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: object; 
  animationTo?: object; 
  easing?: EasingFunction; 
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  onLetterAnimationComplete?: () => void;
}

export const SplitText = ({ 
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = easings.easeOutCubic,
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null); 
  const animatedCount = useRef(0);
  const paragraphs = text.split('\n'); // Split by new lines

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(currentRef); 
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
        if (currentRef) { 
            observer.unobserve(currentRef);
        }
        observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: (arg0: object) => any) => {
          await next(animationTo);
          animatedCount.current += 1;
          if (animatedCount.current === letters.length && onLetterAnimationComplete) {
            
            onLetterAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: { easing }, 
    }))
  );


  const textStyle: React.CSSProperties = { // Добавил тип
    textAlign,
    whiteSpace: 'normal',
    wordWrap: 'break-word',

  };

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block ${className}`}
      style={textStyle}
    >
      {paragraphs.map((paragraph, pIndex) => {
        const words = paragraph.split(' ').map(word => word.split(''));
        const letters = words.flat();
  
        return (
          <span key={pIndex} style={{ display: 'block', marginBottom: '0em' }}>
            {words.map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {word.map((letter, letterIndex) => {
                  const globalIndex =
                    paragraphs
                      .slice(0, pIndex)
                      .reduce(
                        (acc, para) => acc + para.split(' ').join('').length,
                        0
                      ) +
                    words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
                    letterIndex;
  
                  return (
                    <animated.span
                      key={globalIndex}
                      style={springs[globalIndex]}
                      className="inline-block transform transition-opacity will-change-transform"
                    >
                      {letter}
                    </animated.span>
                  );
                })}
                {wordIndex < words.length - 1 && (
                  <span style={{ display: 'inline-block', width: '0.3em' }}> </span>
                )}
              </span>
            ))}
          </span>
        );
      })}
    </p>
  );
};