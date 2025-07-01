
import React from 'react';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const NewsCard = ({ article, index }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white border-0 shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {article.date}
          <Clock className="w-4 h-4 ml-4 mr-2" />
          {article.readTime}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-700 font-medium">{article.author}</span>
          </div>
          <Button variant="ghost" className="text-blue-600 hover:text-white hover:bg-blue-600 group p-2">
            Read More
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const News = () => {
  const articles = [
    {
      category: 'Research',
      title: 'Breakthrough in Artificial Intelligence Research',
      excerpt: 'Our computer science department has made significant advances in machine learning algorithms, contributing to the global AI research community.',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      author: 'Dr. Sarah Johnson'
    },
    {
      category: 'Achievement',
      title: 'Students Win International Competition',
      excerpt: 'Al-Xorazmiy University students secured first place in the Global Innovation Challenge, showcasing their exceptional problem-solving skills.',
      date: 'Dec 10, 2024',
      readTime: '3 min read',
      author: 'Prof. Michael Chen'
    },
    {
      category: 'Partnership',
      title: 'New Partnership with Leading Tech Company',
      excerpt: 'We are excited to announce a strategic partnership that will provide our students with unique internship and career opportunities.',
      date: 'Dec 5, 2024',
      readTime: '4 min read',
      author: 'Dr. Emily Davis'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Latest Updates
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and events from Al-Xorazmiy University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold group">
            View All News
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
