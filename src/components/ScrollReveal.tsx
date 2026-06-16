import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when out of view (so it animates nicely when scrolling back up)
          // Keep it true if you only want the animation to run once:
          // For a premium feeling, letting it re-reveal on scroll is gorgeous
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '-30px 0px -30px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 filter-none' 
          : 'opacity-0 translate-y-16 scale-95 blur-[2px]'
      } ${className}`}
      style={{ 
        transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};
