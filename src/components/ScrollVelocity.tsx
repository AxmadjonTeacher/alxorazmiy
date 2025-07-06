
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

    let animationId1: number;
    let animationId2: number;
    let position1 = 0;
    let position2 = 0;

    const animate = () => {
      position1 -= 0.5;
      position2 += 0.3;

      scroller1.style.transform = `translateX(${position1}px)`;
      scroller2.style.transform = `translateX(${position2}px)`;

      if (position1 <= -scroller1.scrollWidth / 2) {
        position1 = 0;
      }
      if (position2 >= 0) {
        position2 = -scroller2.scrollWidth / 2;
      }

      animationId1 = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId1) cancelAnimationFrame(animationId1);
      if (animationId2) cancelAnimationFrame(animationId2);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
      <div className="scroll-velocity-parallax">
        {/* First scrolling layer */}
        <div className="scroll-velocity-scroller text-teal-600/30 mb-4" ref={scrollerRef1}>
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="mr-8">
              {t('schoolName')}
            </span>
          ))}
        </div>
        
        {/* Second scrolling layer */}
        <div className="scroll-velocity-scroller text-blue-600/30" ref={scrollerRef2}>
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="mr-8">
              {t('innovationInLearning')}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
