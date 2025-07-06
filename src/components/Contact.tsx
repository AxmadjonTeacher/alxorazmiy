
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export const Contact = () => {
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    window.open('https://t.me/Xorazmiyschool', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+998943030707', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Namangan,Lola+dahasi,Janubiy+aylanma+yo\'li,17A', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('getInTouch')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('readyToStart')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('email')}</h3>
                  <p className="text-gray-600">alkhorazmiynamangan@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('phone')}</h3>
                  <p className="text-gray-600">+998 94 303 07 07</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('address')}</h3>
                  <p className="text-gray-600">
                    Namangan sh., Lola dahasi,<br />
                    Janubiy aylanma yo'li, 17A<br />
                    Uzbekistan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('classTime')}</h3>
                  <p className="text-gray-600">08:30 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('readyToJoin')}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {t('takeFirstStep')}
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  onClick={handleTelegramClick}
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <TelegramIcon />
                  {t('telegram')}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleCallClick}
                  className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {t('callNow')}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleMapClick}
                  className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <MapPin className="mr-2 w-5 h-5" />
                  {t('viewOnMap')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
