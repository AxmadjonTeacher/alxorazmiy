
import React from 'react';
import { BookOpen, Trophy, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Excellence = () => {
  const { t } = useLanguage();

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/06f96def-e1db-44c2-bc33-8ce73fbf58b4.png"
                alt="Students in classroom"
                className="w-full h-[400px] object-cover"
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl opacity-20 -z-10"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Diverse</h3>
                <p className="text-gray-600 text-sm">Academic Subjects</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Modern</h3>
                <p className="text-gray-600 text-sm">Facilities</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert</h3>
                <p className="text-gray-600 text-sm">Teaching Staff</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovative</h3>
                <p className="text-gray-600 text-sm">Approach</p>
              </div>
            </div>

            {/* Community Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join a Vibrant Community
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We foster a supportive and inclusive community where every student feels valued. 
                Our diverse student body brings unique perspectives, enriching the learning experience for everyone.
              </p>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold"
              >
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
