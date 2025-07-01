
import React from 'react';
import { ChevronRight, Clock, Users, Award, BookOpen, Calculator, Globe, Bot, FileText, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramCard = ({ program, index }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="h-2 bg-gradient-to-r from-[#06b6d4] to-[#10b981] group-hover:from-[#3b4cca] group-hover:to-[#06b6d4] transition-all duration-500"></div>
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <program.icon className="w-6 h-6 text-teal-600" />
          </div>
          <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            {program.level}
          </span>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
          {program.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          {program.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {program.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {program.level}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center">
            <Award className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Certified</span>
          </div>
          <Button variant="ghost" className="text-teal-600 hover:text-white hover:bg-teal-600 group p-2">
            Learn More
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const Programs = () => {
  const programs = [
    {
      icon: Languages,
      title: 'English Language',
      level: 'All Levels',
      description: 'Comprehensive English language program focusing on speaking, writing, reading, and listening skills.',
      duration: 'Year-round'
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      level: 'Core Subject',
      description: 'Advanced mathematics curriculum covering algebra, geometry, calculus, and applied mathematics.',
      duration: 'Year-round'
    },
    {
      icon: BookOpen,
      title: 'Information Technology',
      level: 'Modern Tech',
      description: 'Cutting-edge IT education including programming, digital literacy, and computer science fundamentals.',
      duration: 'Year-round'
    },
    {
      icon: Globe,
      title: 'Russian Language',
      level: 'Language',
      description: 'Russian language instruction for communication, literature, and cultural understanding.',
      duration: 'Year-round'
    },
    {
      icon: Bot,
      title: 'Robotics',
      level: 'STEM',
      description: 'Hands-on robotics and engineering program fostering creativity and technical problem-solving.',
      duration: 'Year-round'
    },
    {
      icon: FileText,
      title: 'IELTS Preparation',
      level: 'Test Prep',
      description: 'Specialized IELTS preparation course for international English language proficiency certification.',
      duration: 'Intensive'
    },
    {
      icon: FileText,
      title: 'SAT Preparation',
      level: 'Test Prep',
      description: 'Comprehensive SAT preparation program for university admission success.',
      duration: 'Intensive'
    },
    {
      icon: Languages,
      title: 'Arabic Language',
      level: 'Language',
      description: 'Arabic language and culture studies for linguistic diversity and cultural awareness.',
      duration: 'Year-round'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Academic Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Subjects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive curriculum designed to prepare students for success in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 py-4 text-lg font-semibold group">
            View All Subjects
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
