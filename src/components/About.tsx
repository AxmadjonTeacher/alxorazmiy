
import React, { useEffect, useRef, useState } from 'react';
import { Book, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import VariableProximity from './VariableProximity';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: Book,
      title: t('diverse') || 'Diverse',
      subtitle: t('subjects') || 'Academic Subjects',
      description: 'Comprehensive curriculum covering all essential subjects with modern teaching methodologies.',
      delay: 0
    },
    {
      icon: Users,
      title: 'Expert',
      subtitle: 'Teaching Staff',
      description: 'Highly qualified and experienced educators dedicated to student success.',
      delay: 0.1
    },
    {
      icon: Award,
      title: t('modern') || 'Modern',
      subtitle: 'Facilities',
      description: 'State-of-the-art classrooms and laboratories equipped with latest technology.',
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: 'Innovative',
      subtitle: t('approach') || 'Approach',
      description: 'Progressive teaching methods that prepare students for the future.',
      delay: 0.3
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Variable Proximity Text */}
        <div className="text-center mb-16">
          <div ref={containerRef} className="relative inline-block mb-6">
            <VariableProximity
              label="Excellence in Education"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#3b4cca] to-[#0d9488] bg-clip-text text-transparent"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={150}
              falloff="exponential"
            />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to providing high-quality education with modern teaching methods and innovative approaches.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${feature.delay}s`
                }}
              >
                {/* Card Background with Glassmorphism */}
                <div className="relative p-8 bg-white/70 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-white/80">
                  {/* Animated Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3b4cca] to-[#0d9488] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 w-16 h-16 border-2 border-[#3b4cca]/20 rounded-2xl group-hover:scale-125 group-hover:border-[#3b4cca]/40 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#3b4cca] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-lg font-semibold text-[#0d9488]">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b4cca]/5 to-[#0d9488]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating Animation Dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#0d9488] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3b4cca] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-white/30">
            <div className="w-2 h-2 bg-[#3b4cca] rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">Building Tomorrow's Leaders Today</span>
            <div className="w-2 h-2 bg-[#0d9488] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
