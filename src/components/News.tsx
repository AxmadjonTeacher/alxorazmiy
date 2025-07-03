import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Trophy, Plane, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const NewsModal = ({ article, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{article.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="aspect-video mb-6 rounded-lg overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose max-w-none">
            <div className="mb-4">
              <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            
            <div className="text-gray-700 space-y-4">
              {article.detailedContent.split('\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {article.gallery && article.gallery.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Event Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {article.gallery.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
              <p className="text-teal-800 font-medium">
                AL-XORAZMIY - Zamonaviy ta'lim va cheksiz imkoniyatlar!
              </p>
              {article.contact && (
                <div className="mt-2 text-teal-700">
                  {article.contact.map((phone, index) => (
                    <p key={index}>📞 {phone}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ article, index, onReadMore }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white border-0 shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden h-48">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-700 font-medium">{article.author}</span>
          </div>
          <Button 
            variant="ghost" 
            className="text-teal-600 hover:text-white hover:bg-teal-600 group p-2"
            onClick={() => onReadMore(article)}
          >
            Read More
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      category: 'School Election',
      title: 'Presidential Election - First Step Towards Youth Leadership',
      excerpt: 'A historic Presidential Election was held at our school yesterday! This initiative was organized to improve education and upbringing quality, and to educate our youth as active, initiative-taking, responsible leaders.',
      author: 'Al-Xorazmiy Staff',
      image: '/lovable-uploads/afaefccf-8ec8-4373-af5d-1749cb22647e.png',
      detailedContent: `Prezident saylovi — yosh avlodni liderlik sari ilk qadamidir!

Kuni kecha maktabimizda muhim va tarixiy voqelik — Prezident saylovi bo'lib o'tdi! Bu tashabbus ta'lim va tarbiya sifatini yana-da yaxshilash, yoshlarimizni faol, tashabbuskor, mas'uliyatli rahbarlar sifatida tarbiyalash maqsadida tashkil etildi.

Saylov jarayoni ochiq, oshkora va adolatli tarzda o'tkazildi. O'quvchilar o'z nomzodlarini ilgari surish, debatlarda ishtirok etish va saylovoldi dasturlarini taqdim etish orqali o'z fikri va pozitsiyasini erkin ifoda etdilar.

Bu nafaqat bilim, balki demokratiya va fuqorolik jamiyati saboqlarini o'rgatadigan, har bir o'quvchini faol fuqaro sifatida shakllantiradigan ulkan qadamdir.`,
      gallery: [
        '/lovable-uploads/688d8a79-3021-43b5-a8ac-bafea3f0d2e1.png',
        '/lovable-uploads/b81dc21e-b3d4-4ce6-a773-c8a307b95e33.png',
        '/lovable-uploads/ae047107-9b95-4530-af17-8ab12dac5830.png'
      ]
    },
    {
      category: 'Educational Trip',
      title: 'Al-Xorazmiy Excursion: Visit to Sultan Uvays Qaroniy Mausoleum',
      excerpt: 'Students from Al-Xorazmiy school visited the Sultan Uvays Qaroniy Mausoleum as part of their educational and cultural development program.',
      author: 'Al-Xorazmiy Staff',
      image: '/lovable-uploads/ba6225f4-5243-4ff3-93fd-a2c5b838645c.png',
      detailedContent: `Al-Xorazmiyde ekskursiya: Sulton Uvays Qaroniy maqbarasiga ziyoratga borishdi.

Maktabimiz o'quvchilari ta'lim va madaniy rivojlanish dasturi doirasida Sulton Uvays Qaroniy maqbarasiga tashrif buyurishdi. Bu ziyorat o'quvchilarimizning tarixiy va madaniy xotirasini boyitish, milliy qadriyatlarimiz bilan tanishish maqsadida tashkil etildi.

O'quvchilar bu ziyorat davomida tarixiy ma'lumotlar bilan tanishdilar va o'z milliy merosimizni chuqurroq tushunishga erishdilar.`,
      gallery: [
        '/lovable-uploads/c5d7f629-3604-469f-948c-c2fb48540b17.png',
        '/lovable-uploads/c140f20c-68dc-4a34-8af5-433423b47752.png'
      ]
    },
    {
      category: 'Academic Assessment',
      title: 'Weekly Tests at Al-Xorazmiy School',
      excerpt: 'Weekly knowledge assessment processes are taking place, where students take weekly exams to evaluate their learning progress.',
      author: 'Academic Team',
      image: '/lovable-uploads/dd633f08-2ee6-4b68-9c8e-45e03ea0c639.png',
      detailedContent: `Har haftada bir olingan bilimlarni tekshirish jarayonlari bo'lmoqda, ya'ni o'quvchilar haftalik imtihonni topshirishmoqda.

Bu imtihonlarda qanchalik baland ball to'plasalar keyingi GRANT uchun bo'lib o'tadigan imtihonda o'quvchilarning foydalariga ishlaydi.

Haftalik testlar o'quvchilarning bilim darajasini muntazam baholash va ularning kelajakdagi grant imtihonlariga tayyorgarlik ko'rish uchun muhim ahamiyatga ega.`,
      gallery: [
        '/lovable-uploads/a30fee03-262c-479c-b560-a952c02e2cb3.png'
      ]
    },
    {
      category: 'International Competition',
      title: 'Al-Xorazmiy Students Compete in Dubai Olympics',
      excerpt: 'Al-Xorazmiy international school students traveled to Dubai to participate in the Olympics organized by "THE WORLD MEMA ASSOCIATION" Dubai-2025.',
      author: 'Al-Xorazmiy Staff',
      image: '/lovable-uploads/b3cb1f3c-e2a9-4358-9c12-a3457f8e05d8.png',
      detailedContent: `AL-XORAZMIY xalqaro maktabi o'quvchilari 25-mart kuni bo'lib o'tadigan "DUBAI-2025" "THE WORLD MEMA ASSOCIATION" tomonidan o'tkazilayotgan olimpiadaga Dubay shahriga yetib borishdi. 🛬

O'quvchilarimiz quyidagi fanlari bo'yicha ishtirok etadilar:
• Matematika ➕
• Ingiliz tili 🇬🇧  
• Mental arifmetika 🧮

🤝O'quvchilarimizga ulkan muvaffaqqiyatlar tilab qolamiz!`,
      gallery: [
        '/lovable-uploads/9eef5cdd-fb8f-4120-9a39-841773e20f82.png',
        '/lovable-uploads/d098917c-d00a-45a8-aff5-195d4dbaa4c1.png',
        '/lovable-uploads/075db841-6392-4e41-94a6-76db1d3f78cf.png',
        '/lovable-uploads/4f6ddb2a-f13a-4c49-be5f-ee4c3eaec40a.png'
      ],
      contact: ['+998692100007', '+998943030707']
    },
    {
      category: 'Sports Competition',
      title: 'Internal Sports Olympics - First Stage Results',
      excerpt: 'Exciting first stage of internal Olympics among grades 5-6-7 in chess, checkers, and table tennis showcasing our students\' diverse talents.',
      author: 'Sports Department',
      image: '/lovable-uploads/2b0fa332-17ff-44c8-af07-bd28669f0fa6.png',
      detailedContent: `5-6-7 sinflar o'rtasida sportning shaxmat,♟ shashka va stol tennis🏓 turlari bo'yicha, ichki olimpiadamizning birinchi bosqich o'yinlari qizg'in tarzda olib borilmoqda.🚀

Barcha sportchi o'quvchilarimizga omad tilab qolamiz!🤝

Bu olimpiada o'quvchilarimizning sport sohasidagi iqtidorlarini namoyon etish va raqobatbardosh muhitda o'z kuchlarini sinab ko'rish imkonini beradi.`,
      gallery: [
        '/lovable-uploads/8355c927-3d54-4804-8330-ff4c6ccff7ce.png',
        '/lovable-uploads/c3acbd91-5b95-4af4-80df-be462ea339cf.png',
        '/lovable-uploads/bf12f802-322d-46ff-a52a-399933cbec86.png',
        '/lovable-uploads/34956b97-8b9c-4b29-9620-3403c9395ec2.png'
      ]
    },
    {
      category: 'Academic Achievement',
      title: 'TIMO Competition Success - Antalya Qualification',
      excerpt: 'Al-Xorazmiy school\'s talented students showed excellent results in the TIMO competition selection stage, won medals and qualified for the international stage in Antalya!',
      author: 'Academic Team',
      image: '/lovable-uploads/30a66c16-1e0c-4a4b-8921-68fe57a68f12.png',
      detailedContent: `TIMO 2025 | Turkic International Mathematical Olympiad 🇹🇷

🤩Yana bir yutuq!

AL-XORAZMIY maktabining iqtidorli o'quvchilari TIMO musobaqasining saralash bosqichida a'lo natijalar ko'rsatib, medallarni qo'lga kiritishdi va Antalya shahrida bo'lib o'tadigan xalqaro bosqichga yo'llanmani qo'lga kiritishdi!👏

Ularning bilimga bo'lgan ishtiyoqi, mehnati va sabr-toqati yuksak natijalarni taqdim etdi. Ustozlarga ham chuqur minnatdorchilik bildiramiz🤝

Bu matematika olimpiadasi Turkiy xalqlar o'rtasida o'tkaziladigan eng nufuzli musobaqalardan biri hisoblanadi.`
    }
  ];

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <section id="news" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Latest Updates
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              News & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, achievements, and events from Al-Xorazmiy School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <NewsCard 
                key={index} 
                article={article} 
                index={index} 
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsModal 
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={closeModal}
      />
    </>
  );
};
