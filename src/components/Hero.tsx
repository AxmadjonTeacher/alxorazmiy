
import React, { useEffect, useState } from 'react';
import { ChevronRight, Play, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            Excellence in Education - Newly Established
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-fade-in">Empowering</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '200ms' }}>
              Future Leaders
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
            Al-Xorazmiy School - Where innovation meets tradition, fostering excellence in modern education and personal development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105">
              Explore Programs
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105">
              <Play className="mr-2 w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Quick Stats - Updated for a new school */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-white/70">Programs</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">Modern</div>
              <div className="text-white/70">Approach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
