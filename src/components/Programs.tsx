
import React from 'react';
import { BookOpen, Calculator, Monitor, Globe, Bot, Award, PenTool, Languages } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      icon: Languages,
      title: 'English',
      description: 'Comprehensive English language learning with focus on speaking, writing, and communication skills.',
      features: ['Speaking Practice', 'Grammar & Writing', 'Literature Study']
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Advanced mathematical concepts and problem-solving techniques for academic excellence.',
      features: ['Algebra & Geometry', 'Calculus', 'Problem Solving']
    },
    {
      icon: Monitor,
      title: 'Information Technology',
      description: 'Modern IT skills including programming, digital literacy, and computer science fundamentals.',
      features: ['Programming', 'Digital Skills', 'Computer Science']
    },
    {
      icon: Globe,
      title: 'Russian',
      description: 'Russian language proficiency with emphasis on practical communication and cultural understanding.',
      features: ['Language Skills', 'Cultural Studies', 'Communication']
    },
    {
      icon: Bot,
      title: 'Robotics',
      description: 'Hands-on robotics and engineering projects to develop technical and creative thinking.',
      features: ['Robot Building', 'Programming', 'Engineering Design']
    },
    {
      icon: Award,
      title: 'IELTS Preparation',
      description: 'Intensive IELTS preparation course for international education opportunities.',
      features: ['Test Strategies', 'Practice Tests', 'Score Improvement']
    },
    {
      icon: PenTool,
      title: 'SAT Preparation',
      description: 'Comprehensive SAT preparation for university admission success.',
      features: ['Test Prep', 'Practice Exams', 'Score Enhancement']
    },
    {
      icon: BookOpen,
      title: 'Arabic',
      description: 'Arabic language studies with focus on reading, writing, and cultural appreciation.',
      features: ['Language Basics', 'Reading & Writing', 'Cultural Context']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of subjects designed to prepare students for success in their academic and professional journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <program.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
              
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
