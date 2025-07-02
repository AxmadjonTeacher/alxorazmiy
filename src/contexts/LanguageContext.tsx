
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'EN' | 'UZ' | 'RU';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  EN: {
    home: 'Home',
    about: 'About',
    programs: 'Programs',
    news: 'News',
    contact: 'Contact',
    applyNow: 'Apply Now',
    empoweringFutureLeaders: 'Empowering Future Leaders',
    schoolDescription: 'Al-Xorazmiy School - Where innovation meets tradition, fostering excellence in modern education and personal development.',
    contactUs: 'Contact Us',
    diverse: 'Diverse',
    subjects: 'Subjects',
    modern: 'Modern',
    approach: 'Approach',
    getInTouch: 'Get in Touch',
    readyToStart: 'Ready to start your educational journey? Contact us today to learn more about Al-Xorazmiy School.',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    classTime: 'Class Time',
    contactNow: 'Contact Now',
    readyToJoin: 'Ready to Join Al-Xorazmiy School?',
    takeFirstStep: 'Take the first step towards excellence in education. Our admissions team is ready to help you begin your journey.',
    sendEmail: 'Send Email',
    callNow: 'Call Now'
  },
  UZ: {
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    programs: 'Dasturlar',
    news: 'Yangiliklar',
    contact: 'Aloqa',
    applyNow: 'Hoziroq murojaat qiling',
    empoweringFutureLeaders: 'Kelajak yetakchilarini tarbiyalash',
    schoolDescription: 'Al-Xorazmiy maktabi - Innovatsiya va an\'analarning uyg\'unligi, zamonaviy ta\'lim va shaxsiy rivojlanishda mukammallikni shakllantirish.',
    contactUs: 'Biz bilan bog\'laning',
    diverse: 'Turli xil',
    subjects: 'Fanlar',
    modern: 'Zamonaviy',
    approach: 'Yondashuv',
    getInTouch: 'Biz bilan bog\'laning',
    readyToStart: 'Ta\'lim sayohatingizni boshlashga tayyormisiz? Al-Xorazmiy maktabi haqida ko\'proq ma\'lumot olish uchun bugun biz bilan bog\'laning.',
    email: 'Elektron pochta',
    phone: 'Telefon',
    address: 'Manzil',
    classTime: 'Dars vaqti',
    contactNow: 'Hoziroq bog\'laning',
    readyToJoin: 'Al-Xorazmiy maktabiga qo\'shilishga tayyormisiz?',
    takeFirstStep: 'Ta\'limda mukammallik sari birinchi qadamni tashlang. Bizning qabul komissiyamiz sizning sayohatingizni boshlashga yordam berishga tayyor.',
    sendEmail: 'Email yuborish',
    callNow: 'Hoziroq qo\'ng\'iroq qiling'
  },
  RU: {
    home: 'Главная',
    about: 'О нас',
    programs: 'Программы',
    news: 'Новости',
    contact: 'Контакты',
    applyNow: 'Подать заявку',
    empoweringFutureLeaders: 'Воспитание будущих лидеров',
    schoolDescription: 'Школа Аль-Хорезми - Где инновации встречаются с традициями, способствуя совершенству в современном образовании и личном развитии.',
    contactUs: 'Свяжитесь с нами',
    diverse: 'Разнообразные',
    subjects: 'Предметы',
    modern: 'Современный',
    approach: 'Подход',
    getInTouch: 'Свяжитесь с нами',
    readyToStart: 'Готовы начать свое образовательное путешествие? Свяжитесь с нами сегодня, чтобы узнать больше о школе Аль-Хорезми.',
    email: 'Электронная почта',
    phone: 'Телефон',
    address: 'Адрес',
    classTime: 'Время занятий',
    contactNow: 'Связаться сейчас',
    readyToJoin: 'Готовы присоединиться к школе Аль-Хорезми?',
    takeFirstStep: 'Сделайте первый шаг к совершенству в образовании. Наша приемная комиссия готова помочь вам начать свое путешествие.',
    sendEmail: 'Отправить email',
    callNow: 'Позвонить сейчас'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
