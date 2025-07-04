
import React, { useRef } from 'react';
import { Globe, Star, Lightbulb, Users, BookOpen, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import VariableProximity from './VariableProximity';

export const About = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef(null);

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
    <section id="about" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                {t('aboutUs')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                <span className="block">{t('shapingTomorrowsLeaders').split(' ').slice(0, -1).join(' ')}</span>
                <span className="block text-teal-600">
                  <VariableProximity
                    label={t('shapingTomorrowsLeaders').split(' ').slice(-1)[0]}
                    className="variable-proximity-demo"
                    fromFontVariationSettings="'wght' 700, 'opsz' 20"
                    toFontVariationSettings="'wght' 900, 'opsz' 40"
                    containerRef={containerRef}
                    radius={150}
                    falloff="linear"
                  />
                </span>
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed mb-6">
                <VariableProximity
                  label={t('aboutDescription1')}
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 400, 'opsz' 12"
                  toFontVariationSettings="'wght' 600, 'opsz' 20"
                  containerRef={containerRef}
                  radius={120}
                  falloff="exponential"
                />
              </div>
              <div className="text-lg text-gray-600 leading-relaxed">
                <VariableProximity
                  label={t('aboutDescription2')}
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 400, 'opsz' 12"
                  toFontVariationSettings="'wght' 600, 'opsz' 20"
                  containerRef={containerRef}
                  radius={120}
                  falloff="exponential"
                />
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <VariableProximity
                  label={t('whyChooseAlXorazmiy')}
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 700, 'opsz' 18"
                  toFontVariationSettings="'wght' 800, 'opsz' 30"
                  containerRef={containerRef}
                  radius={130}
                  falloff="linear"
                />
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <VariableProximity
                          label={feature.title}
                          className="variable-proximity-demo"
                          fromFontVariationSettings="'wght' 600, 'opsz' 14"
                          toFontVariationSettings="'wght' 700, 'opsz' 24"
                          containerRef={containerRef}
                          radius={100}
                          falloff="exponential"
                        />
                      </h4>
                      <div className="text-gray-600">
                        <VariableProximity
                          label={feature.description}
                          className="variable-proximity-demo"
                          fromFontVariationSettings="'wght' 400, 'opsz' 12"
                          toFontVariationSettings="'wght' 500, 'opsz' 18"
                          containerRef={containerRef}
                          radius={90}
                          falloff="exponential"
                        />
                      </div>
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
