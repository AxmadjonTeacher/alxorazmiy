
import React from 'react';
import { Globe, Star, Lightbulb, Users, BookOpen, Monitor } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Future-Focused Curriculum',
      description: 'Specialized programs in English, Math, IT, and Robotics to prepare students for tomorrow\'s challenges.'
    },
    {
      icon: Users,
      title: 'Expert Educators',
      description: 'Passionate teachers with deep subject knowledge and a commitment to student success.'
    },
    {
      icon: Monitor,
      title: 'Innovative Learning Environment',
      description: 'Modern classrooms, computer labs, and robotics facilities designed to support active and project-based learning.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Shaping Tomorrow's
                <span className="block text-teal-600">Leaders Today</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Al-Xorazmiy School is a forward-thinking private institution dedicated to nurturing young learners through a strong foundation in English, Mathematics, Information Technology, and Robotics. Our mission is to equip students with the skills and mindset needed to thrive in a rapidly changing, technology-driven world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine academic excellence with hands-on learning to spark curiosity, boost confidence, and foster a lifelong love of learning. At Al-Xorazmiy, we don't just teach — we empower students to lead, innovate, and succeed.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Al-Xorazmiy?</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
