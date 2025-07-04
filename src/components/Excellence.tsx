
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
            methods and innovative approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/06f96def-e1db-44c2-bc33-8ce73fbf58b4.png"
                alt="Students in classroom"
                className="w-full h-[400px] object-cover"
              />
              {/* Decorative border with teal accent */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl opacity-30 -z-10"></div>
            </div>
          </div>

          {/* Right side - Feature Cards in vertical layout */}
          <div className="space-y-6">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Diverse</h3>
              <p className="text-gray-600">Academic Subjects</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Modern</h3>
              <p className="text-gray-600">Facilities</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Expert</h3>
              <p className="text-gray-600">Teaching Staff</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl border border-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Innovative</h3>
              <p className="text-gray-600">Approach</p>
            </div>
          </div>
        </div>

        {/* Community Section - Full Width */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Join a Vibrant Community
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed text-center max-w-4xl mx-auto text-lg">
            Beyond academics, we foster a supportive and inclusive community where every student feels valued. 
            We encourage collaboration, creativity, and critical thinking, building a foundation for lifelong 
            friendships and success. Our diverse student body brings unique perspectives, enriching the learning 
            experience for everyone.
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
