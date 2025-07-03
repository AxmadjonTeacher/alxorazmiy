
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, BookOpen, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatItem = ({ icon: Icon, value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < value) {
            return Math.min(prev + Math.ceil(value / 50), value);
          }
          return value;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={elementRef} className="text-center group">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {typeof value === 'string' ? value : count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: BookOpen, value: t('diverse'), label: t('academicSubjects'), suffix: '' },
    { icon: Users, value: t('expertEducators').split(' ')[0], label: t('teachingStaff'), suffix: '' },
    { icon: Trophy, value: t('modern'), label: t('facilities'), suffix: '' },
    { icon: TrendingUp, value: t('innovativeLearningEnvironment').split(' ')[0], label: t('approach'), suffix: '' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('excellenceInEducation')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('statsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
