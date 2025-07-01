
import React from 'react';
import { CheckCircle, Globe, Star, Lightbulb } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Internationally accredited programs with partnerships worldwide'
    },
    {
      icon: Star,
      title: 'Expert Faculty',
      description: 'Learn from renowned professors and industry experts'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'State-of-the-art facilities and cutting-edge research opportunities'
    }
  ];

  const achievements = [
    'Top 100 Universities Globally',
    'Over 30 Years of Excellence',
    '95% Graduate Employment Rate',
    'International Student Exchange Programs'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Shaping Tomorrow's
                <span className="block text-blue-600">Leaders Today</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Al-Xorazmiy University stands as a beacon of academic excellence, fostering innovation and critical thinking. 
                Our commitment to quality education has made us a leading institution in the region.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1991</div>
                  <div className="text-blue-100">Established</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-blue-100 text-sm">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">100+</div>
                    <div className="text-blue-100 text-sm">Partnerships</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15,000+</div>
                  <div className="text-blue-100">Students Worldwide</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
