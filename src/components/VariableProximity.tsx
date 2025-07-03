
import React, { useEffect, useRef, useState } from 'react';

interface VariableProximityProps {
  label: string;
  className?: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: React.RefObject<HTMLElement>;
  radius: number;
  falloff: 'linear' | 'exponential';
}

const VariableProximity: React.FC<VariableProximityProps> = ({
  label,
  className = '',
  fromFontVariationSettings,
  toFontVariationSettings,
  containerRef,
  radius,
  falloff = 'linear'
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontVariationSettings, setFontVariationSettings] = useState(fromFontVariationSettings);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!textRef.current || !containerRef.current) return;

      const textRect = textRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const textCenterX = textRect.left + textRect.width / 2;
      const textCenterY = textRect.top + textRect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(event.clientX - textCenterX, 2) + 
        Math.pow(event.clientY - textCenterY, 2)
      );

      let intensity = 0;
      if (distance <= radius) {
        if (falloff === 'linear') {
          intensity = 1 - (distance / radius);
        } else {
          intensity = Math.pow(1 - (distance / radius), 2);
        }
      }

      // Interpolate between font variation settings
      const fromWeight = parseInt(fromFontVariationSettings.match(/'wght'\s*(\d+)/)?.[1] || '400');
      const toWeight = parseInt(toFontVariationSettings.match(/'wght'\s*(\d+)/)?.[1] || '1000');
      const fromOpSz = parseInt(fromFontVariationSettings.match(/'opsz'\s*(\d+)/)?.[1] || '9');
      const toOpSz = parseInt(toFontVariationSettings.match(/'opsz'\s*(\d+)/)?.[1] || '40');

      const currentWeight = fromWeight + (toWeight - fromWeight) * intensity;
      const currentOpSz = fromOpSz + (toOpSz - fromOpSz) * intensity;

      setFontVariationSettings(`'wght' ${Math.round(currentWeight)}, 'opsz' ${Math.round(currentOpSz)}`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [fromFontVariationSettings, toFontVariationSettings, radius, falloff, containerRef]);

  return (
    <span
      ref={textRef}
      className={`inline-block transition-all duration-100 ${className}`}
      style={{
        fontVariationSettings,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontFeatureSettings: '"kern" 1',
      }}
    >
      {label}
    </span>
  );
};

export default VariableProximity;
