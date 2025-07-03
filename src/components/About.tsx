
import React from 'react';
import { Globe, Star, Lightbulb, Users, BookOpen, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('futureFocusedCurriculum'),
      description: t('futureFocusedDescription')
    },
    {
      icon: Users,
      title: t('expertEducators'),
      description: t('expertEducatorsDescription')
    },
    {
      icon: Monitor,
      title: t('innovativeLearningEnvironment'),
      description: t('innovativeLearningDescription')
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
                {t('aboutUs')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('shapingTomorrowsLeaders').split(' Tomorrow\'s')[0]}
                <span className="block text-teal-600">{t('shapingTomorrowsLeaders').split(' Tomorrow\'s')[1] ? 'Tomorrow\'s' + t('shapingTomorrowsLeaders').split(' Tomorrow\'s')[1] : t('shapingTomorrowsLeaders').includes('сегодня') ? t('shapingTomorrowsLeaders').split('лидеров ')[1] : t('shapingTomorrowsLeaders').includes('bugun') ? t('shapingTomorrowsLeaders').split('yetakchilarni ')[1] : 'Leaders Today'}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('aboutDescription1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('aboutDescription2')}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('whyChooseAlXorazmiy')}</h3>
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
