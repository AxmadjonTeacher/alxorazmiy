
import React from 'react';
import { ChevronRight, Clock, Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramCard = ({ program, index }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500"></div>
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <program.icon className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {program.level}
          </span>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
            {program.students}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center">
            <Award className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Accredited</span>
          </div>
          <Button variant="ghost" className="text-blue-600 hover:text-white hover:bg-blue-600 group p-2">
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
      icon: BookOpen,
      title: 'Computer Science',
      level: 'Bachelor',
      description: 'Comprehensive program covering software development, algorithms, and emerging technologies.',
      duration: '4 years',
      students: '2,500+'
    },
    {
      icon: TrendingUp,
      title: 'Business Administration',
      level: 'Master',
      description: 'Advanced business education focusing on leadership, strategy, and innovation.',
      duration: '2 years',
      students: '1,800+'
    },
    {
      icon: Users,
      title: 'International Relations',
      level: 'Bachelor',
      description: 'Study global politics, diplomacy, and international economic systems.',
      duration: '4 years',
      students: '1,200+'
    },
    {
      icon: Award,
      title: 'Engineering',
      level: 'Bachelor',
      description: 'Cutting-edge engineering programs with hands-on laboratory experience.',
      duration: '4 years',
      students: '3,000+'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Academic Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class education programs designed to prepare you for success in the global marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold group">
            View All Programs
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
