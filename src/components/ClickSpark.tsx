
import React, { useCallback, useEffect, useRef } from 'react';

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = '#14b8a6',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createSpark = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;

    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      const angle = (i * 360) / sparkCount;
      const distance = sparkRadius + Math.random() * sparkRadius;
      
      spark.style.position = 'fixed';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = `${sparkSize}px`;
      spark.style.height = `${sparkSize}px`;
      spark.style.backgroundColor = sparkColor;
      spark.style.borderRadius = '50%';
      spark.style.pointerEvents = 'none';
      spark.style.zIndex = '9999';
      spark.style.transform = 'translate(-50%, -50%)';
      spark.style.transition = `all ${duration}ms ease-out`;
      
      document.body.appendChild(spark);
      
      requestAnimationFrame(() => {
        const radian = (angle * Math.PI) / 180;
        const dx = Math.cos(radian) * distance;
        const dy = Math.sin(radian) * distance;
        
        spark.style.transform = `translate(${dx - sparkSize/2}px, ${dy - sparkSize/2}px) scale(0)`;
        spark.style.opacity = '0';
      });
      
      setTimeout(() => {
        if (spark.parentNode) {
          spark.parentNode.removeChild(spark);
        }
      }, duration);
    }
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  const handleClick = useCallback((event: React.MouseEvent) => {
    createSpark(event.clientX, event.clientY);
  }, [createSpark]);

  return (
    <div ref={containerRef} onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default ClickSpark;
