
import React from 'react';
import { BookOpen, Trophy, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Excellence = () => {
  const handleExplorePrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Education
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our commitment to providing high-quality education with modern teaching 
            methods and innovative approaches ensures every student reaches their full potential.
          </p>
        </div>

        {/* 4 Feature Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 hover-lift">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse</h3>
            <p className="text-gray-600 text-sm">Academic Subjects</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 hover-lift">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert</h3>
            <p className="text-gray-600 text-sm">Teaching Staff</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 hover-lift">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Modern</h3>
            <p className="text-gray-600 text-sm">Facilities</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 hover-lift">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative</h3>
            <p className="text-gray-600 text-sm">Approach</p>
          </div>
        </div>

        {/* Community Section - Full Width */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Join a Vibrant Community
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto text-lg">
            Beyond academics, we foster a supportive community where every student feels valued. 
            We encourage collaboration and creativity, building foundations for lifelong success.
          </p>
          <div className="text-center">
            <Button 
              onClick={handleExplorePrograms}
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg"
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
