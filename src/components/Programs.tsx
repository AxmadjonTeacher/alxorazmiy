
import React from 'react';
import { BookOpen, Calculator, Monitor, Globe, Bot, Award, PenTool, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Languages,
      title: t('english'),
      description: t('englishDescription'),
      features: [t('speakingPractice'), t('grammarWriting'), t('literatureStudy')]
    },
    {
      icon: Calculator,
      title: t('mathematics'),
      description: t('mathematicsDescription'),
      features: [t('algebraGeometry'), t('calculus'), t('problemSolving')]
    },
    {
      icon: Monitor,
      title: t('informationTechnology'),
      description: t('itDescription'),
      features: [t('programming'), t('digitalSkills'), t('computerScience')]
    },
    {
      icon: Globe,
      title: t('russian'),
      description: t('russianDescription'),
      features: [t('languageSkills'), t('culturalStudies'), t('communication')]
    },
    {
      icon: Bot,
      title: t('robotics'),
      description: t('roboticsDescription'),
      features: [t('robotBuilding'), t('programming'), t('engineeringDesign')]
    },
    {
      icon: Award,
      title: t('ieltsPreparation'),
      description: t('ieltsDescription'),
      features: [t('testStrategies'), t('practiceTests'), t('scoreImprovement')]
    },
    {
      icon: PenTool,
      title: t('satPreparation'),
      description: t('satDescription'),
      features: [t('testPrep'), t('practiceExams'), t('scoreEnhancement')]
    },
    {
      icon: BookOpen,
      title: t('arabic'),
      description: t('arabicDescription'),
      features: [t('languageBasics'), t('readingWriting'), t('culturalContext')]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('ourAcademicPrograms')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('programsDescription')}
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
