
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Map from './Map';

export const Contact = () => {
  const { t } = useLanguage();
  const [isMapOpen, setIsMapOpen] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: t('email'),
      details: 'alkhorazmiynamangan@gmail.com',
      action: 'mailto:alkhorazmiynamangan@gmail.com'
    },
    {
      icon: Phone,
      title: t('phone'),
      details: '+998 94 303 07 07',
      action: 'tel:+998943030707'
    },
    {
      icon: MapPin,
      title: t('address'),
      details: 'Namangan sh., Lola dahasi, Janubiy aylanma yo\'li, 17A',
      action: 'map'
    },
    {
      icon: Clock,
      title: t('classTime'),
      details: '08:30 - 17:00',
      action: '#'
    }
  ];

  const handleContactAction = (action: string) => {
    if (action === 'map') {
      setIsMapOpen(true);
    } else if (action.startsWith('mailto:') || action.startsWith('tel:')) {
      window.location.href = action;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('getInTouch')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('readyToStart')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 cursor-pointer"
              onClick={() => handleContactAction(item.action)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                {(item.action.startsWith('mailto:') || item.action.startsWith('tel:') || item.action === 'map') && (
                  <span className="mt-3 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors">
                    {item.action === 'map' ? t('viewOnMap') : t('contactNow')}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('readyToJoin')}
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('takeFirstStep')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'mailto:alkhorazmiynamangan@gmail.com'}
              >
                <Mail className="mr-2 w-5 h-5" />
                {t('sendEmail')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+998943030707'}
              >
                <Phone className="mr-2 w-5 h-5" />
                {t('callNow')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Map isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </section>
  );
};
