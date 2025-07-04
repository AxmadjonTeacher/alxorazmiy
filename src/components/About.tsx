
import React, { useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const schoolImages = [
    '/lovable-uploads/a6930999-7f9a-4348-88f6-53ce61f177aa.png',
    '/lovable-uploads/bc9e402f-a892-4616-b433-6288585f8f0d.png',
    '/lovable-uploads/0e3603ae-cf05-4ac5-9fc6-aa75fb63ede5.png',
    '/lovable-uploads/3dff10ba-a599-446c-b627-23d041f5221d.png'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleImageHover = () => {
    const randomIndex = Math.floor(Math.random() * schoolImages.length);
    setCurrentImageIndex(randomIndex);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  {t('aboutUs')}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  {t('shapingTomorrowsLeaders')}
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('aboutDescription1')}
                </p>
                <p>
                  {t('aboutDescription2')}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={schoolImages[currentImageIndex]}
                  alt="Al-Xorazmiy School"
                  className="w-full h-[500px] object-cover transition-all duration-500 hover:scale-105 cursor-pointer"
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageHover}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
