
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ScrollVelocity = () => {
  const { t } = useLanguage();
  const scrollerRef1 = useRef<HTMLDivElement>(null);
  const scrollerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller1 = scrollerRef1.current;
    const scroller2 = scrollerRef2.current;

    if (!scroller1 || !scroller2) return;

    let animationId: number;
    let position1 = 0;
    let position2 = 0;

    const animate = () => {
      // Use whole pixel increments only to avoid blur
      position1 -= 2;
      position2 += 2;

      // Round positions to whole pixels to ensure crisp rendering
      const roundedPos1 = Math.round(position1);
      const roundedPos2 = Math.round(position2);

      // Use simple translateX without hardware acceleration
      scroller1.style.transform = `translateX(${roundedPos1}px)`;
      scroller2.style.transform = `translateX(${roundedPos2}px)`;

      // Reset positions for seamless looping
      if (roundedPos1 <= -scroller1.scrollWidth / 2) {
        position1 = 0;
      }
      if (roundedPos2 >= 0) {
        position2 = -scroller2.scrollWidth / 2;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
      <div className="scroll-velocity-parallax">
        {/* First scrolling layer */}
        <div className="scroll-velocity-scroller text-teal-600/40 mb-6" ref={scrollerRef1}>
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className="mr-12">
              {t('schoolName')}
            </span>
          ))}
        </div>
        
        {/* Second scrolling layer */}
        <div className="scroll-velocity-scroller text-blue-600/40" ref={scrollerRef2}>
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className="mr-12">
              {t('innovationInLearning')}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
