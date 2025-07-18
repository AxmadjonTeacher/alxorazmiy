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
    callNow: 'Call Now',
    viewOnMap: 'View on Map',
    telegram: 'Telegram',
    footerDescription: 'Empowering students to achieve excellence through innovative education and hands-on learning experiences.',
    // Hero section translations
    excellenceInEducation: 'Excellence in Education',
    shapingTomorrowsLeadersToday: 'Shaping Tomorrow\'s Leaders Today',
    // Stats section translations
    statsDescription: 'Our commitment to providing high-quality education with modern teaching methods and innovative approaches.',
    academicSubjects: 'Academic Subjects',
    teachingStaff: 'Teaching Staff',
    facilities: 'Facilities',
    // About section translations
    aboutUs: 'About Us',
    shapingTomorrowsLeaders: 'Shaping Tomorrow\'s Leaders Today',
    aboutDescription1: 'Al-Xorazmiy School is a forward-thinking private institution dedicated to nurturing young learners through a strong foundation in English, Mathematics, Information Technology, and Robotics. Our mission is to equip students with the skills and mindset needed to thrive in a rapidly changing, technology-driven world.',
    aboutDescription2: 'We combine academic excellence with hands-on learning to spark curiosity, boost confidence, and foster a lifelong love of learning. At Al-Xorazmiy, we don\'t just teach — we empower students to lead, innovate, and succeed.',
    whyChooseAlXorazmiy: 'Why Choose Al-Xorazmiy?',
    futureFocusedCurriculum: 'Future-Focused Curriculum',
    futureFocusedDescription: 'Specialized programs in English, Math, IT, and Robotics to prepare students for tomorrow\'s challenges.',
    expertEducators: 'Expert Educators',
    expertEducatorsDescription: 'Passionate teachers with deep subject knowledge and a commitment to student success.',
    innovativeLearningEnvironment: 'Innovative Learning Environment',
    innovativeLearningDescription: 'Modern classrooms, computer labs, and robotics facilities designed to support active and project-based learning.',
    ourAcademicPrograms: 'Our Academic Programs',
    programsDescription: 'Discover our comprehensive range of subjects designed to prepare students for success in their academic and professional journeys.',
    english: 'English',
    englishDescription: 'Comprehensive English language learning with focus on speaking, writing, and communication skills.',
    speakingPractice: 'Speaking Practice',
    grammarWriting: 'Grammar & Writing',
    literatureStudy: 'Literature Study',
    mathematics: 'Mathematics',
    mathematicsDescription: 'Advanced mathematical concepts and problem-solving techniques for academic excellence.',
    algebraGeometry: 'Algebra & Geometry',
    calculus: 'Calculus',
    problemSolving: 'Problem Solving',
    informationTechnology: 'Information Technology',
    itDescription: 'Modern IT skills including programming, digital literacy, and computer science fundamentals.',
    programming: 'Programming',
    digitalSkills: 'Digital Skills',
    computerScience: 'Computer Science',
    russian: 'Russian',
    russianDescription: 'Russian language proficiency with emphasis on practical communication and cultural understanding.',
    languageSkills: 'Language Skills',
    culturalStudies: 'Cultural Studies',
    communication: 'Communication',
    robotics: 'Robotics',
    roboticsDescription: 'Hands-on robotics and engineering projects to develop technical and creative thinking.',
    robotBuilding: 'Robot Building',
    engineeringDesign: 'Engineering Design',
    ieltsPreparation: 'IELTS Preparation',
    ieltsDescription: 'Intensive IELTS preparation course for international education opportunities.',
    testStrategies: 'Test Strategies',
    practiceTests: 'Practice Tests',
    scoreImprovement: 'Score Improvement',
    satPreparation: 'SAT Preparation',
    satDescription: 'Comprehensive SAT preparation for university admission success.',
    testPrep: 'Test Prep',
    practiceExams: 'Practice Exams',
    scoreEnhancement: 'Score Enhancement',
    arabic: 'Arabic',
    arabicDescription: 'Arabic language studies with focus on reading, writing, and cultural appreciation.',
    languageBasics: 'Language Basics',
    readingWriting: 'Reading & Writing',
    culturalContext: 'Cultural Context',
    schoolName: 'Al Xorazmiy School',
    innovationInLearning: 'Innovation In Learning'
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
    callNow: 'Hoziroq qo\'ng\'iroq qiling',
    viewOnMap: 'Xaritada ko\'rish',
    telegram: 'Telegram',
    footerDescription: 'Al Xorazmiy maktabi o\'quvchilarni innovatsion ta\'lim va amaliy tajriba orqali yuksak natijalarga erishishga ilhomlantiradi',
    // Hero section translations
    excellenceInEducation: 'Ta\'limda mukammallik',
    shapingTomorrowsLeadersToday: 'Ertangi yetakchilar uchun bugun harakatdamiz',
    // Stats section translations
    statsDescription: 'Zamonaviy o\'qitish usullari va innovatsion yondashuvlar bilan yuqori sifatli ta\'lim berishga majburiyatimiz.',
    academicSubjects: 'Akademik fanlar',
    teachingStaff: 'O\'qituvchilar',
    facilities: 'Zamonaviy qurilmalar',
    // About section translations
    aboutUs: 'Biz haqimizda',
    shapingTomorrowsLeaders: 'Ertangi Yetakchilarni Bugun Shakllantiramiz',
    aboutDescription1: 'Al-Xorazmiy Maktabi – bu zamonaviy fikrlovchi xususiy ta\'lim muassasasi bo\'lib, ingliz tili, matematika, axborot texnologiyalari va robototexnika fanlari asosida yosh o\'quvchilarni rivojlantirishga bag\'ishlangan. Bizning maqsadimiz – o\'quvchilarga tez o\'zgarayotgan, texnologiyalarga asoslangan dunyoda muvaffaqiyatga erishish uchun zarur bo\'lgan ko\'nikmalar va fikrlash tarzini shakllantirishdir.',
    aboutDescription2: 'Biz nazariy bilimni amaliy mashg\'ulotlar bilan uyg\'unlashtirib, o\'quvchilarda qiziquvchanlikni uyg\'otamiz, o\'ziga ishonchni oshiramiz va umr bo\'yi davom etadigan o\'rganish muhabbatini shakllantiramiz. Al-Xorazmiyda biz faqat o\'qitmaymiz — biz o\'quvchilarni yetakchilik qilishga, yangilik yaratishga va muvaffaqiyat sari intilishga ilhomlantiramiz.',
    whyChooseAlXorazmiy: 'Nima uchun Al-Xorazmiyni tanlash kerak?',
    futureFocusedCurriculum: 'Kelajakka yo\'naltirilgan o\'quv dasturi',
    futureFocusedDescription: 'Talabalarni ertangi qiyinchiliklarga tayyorlash uchun ingliz tili, matematika, AT va robotika bo\'yicha maxsus dasturlar.',
    expertEducators: 'Mutaxassis o\'qituvchilar',
    expertEducatorsDescription: 'Chuqur fan bilimi va talaba muvaffaqiyatiga sodiqlik bilan ajralib turadigan ishtiyoqli o\'qituvchilar.',
    innovativeLearningEnvironment: 'Innovatsion ta\'lim muhiti',
    innovativeLearningDescription: 'Faol va loyiha asosidagi ta\'limni qo\'llab-quvvatlash uchun mo\'ljallangan zamonaviy sinflar, kompyuter laboratoriyalari va robotika qurilmalari.',
    ourAcademicPrograms: 'Bizning Ta\'lim Dasturlarimiz',
    programsDescription: 'Talabalarni akademik va kasbiy muvaffaqiyatga tayyorlash uchun mo\'ljallangan keng qamrovli fanlar bilan tanishing.',
    english: 'Ingliz tili',
    englishDescription: 'Gapirish, yozish va muloqot ko\'nikmalariga e\'tibor qaratgan holda ingliz tilini keng qamrovli o\'rganish.',
    speakingPractice: 'Gapirish Amaliyoti',
    grammarWriting: 'Grammatika va Yozish',
    literatureStudy: 'Adabiyot O\'rganish',
    mathematics: 'Matematika',
    mathematicsDescription: 'Akademik mukammallik uchun ilg\'or matematik tushunchalar va masala yechish usullari.',
    algebraGeometry: 'Algebra va Geometriya',
    calculus: 'Hisoblash',
    problemSolving: 'Masala Yechish',
    informationTechnology: 'Axborot Texnologiyalari',
    itDescription: 'Dasturlash, raqamli savodxonlik va kompyuter fanlari asoslarini o\'z ichiga olgan zamonaviy AT ko\'nikmalar.',
    programming: 'Dasturlash',
    digitalSkills: 'Raqamli Ko\'nikmalar',
    computerScience: 'Kompyuter Fanlari',
    russian: 'Rus tili',
    russianDescription: 'Amaliy muloqot va madaniy tushunchaga urg\'u berilgan rus tili malakasi.',
    languageSkills: 'Til Ko\'nikmalari',
    culturalStudies: 'Madaniy Tadqiqotlar',
    communication: 'Muloqot',
    robotics: 'Robotika',
    roboticsDescription: 'Texnik va ijodiy fikrlashni rivojlantirish uchun amaliy robotika va muhandislik loyihalari.',
    robotBuilding: 'Robot Qurish',
    engineeringDesign: 'Muhandislik Dizayni',
    ieltsPreparation: 'IELTS Tayyorlash',
    ieltsDescription: 'Xalqaro ta\'lim imkoniyatlari uchun intensiv IELTS tayyorlov kursi.',
    testStrategies: 'Test Strategiyalari',
    practiceTests: 'Amaliyot Testlari',
    scoreImprovement: 'Ball Yaxshilash',
    satPreparation: 'SAT Tayyorlash',
    satDescription: 'Universitetga qabul muvaffaqiyati uchun keng qamrovli SAT tayyorlash.',
    testPrep: 'Test Tayyorlash',
    practiceExams: 'Amaliyot Imtihonlari',
    scoreEnhancement: 'Ball Oshirish',
    arabic: 'Arab tili',
    arabicDescription: 'O\'qish, yozish va madaniy qadriyatlarga e\'tibor qaratgan holda arab tili o\'rganish.',
    languageBasics: 'Til Asoslari',
    readingWriting: 'O\'qish va Yozish',
    culturalContext: 'Madaniy Kontekst',
    schoolName: 'Al Xorazmiy Maktabi',
    innovationInLearning: 'Ta\'limda Innovatsiya'
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
    callNow: 'Позвонить сейчас',
    viewOnMap: 'Посмотреть на карте',
    telegram: 'Telegram',
    footerDescription: 'Школа Al Xorazmiy вдохновляет учеников достигать высоких результатов через инновационное образование и практический опыт',
    // Hero section translations
    excellenceInEducation: 'Совершенство в образовании',
    shapingTomorrowsLeadersToday: 'Формируем лидеров будущего уже сегодня',
    // Stats section translations
    statsDescription: 'Наша приверженность предоставлению высококачественного образования с современными методами обучения и инновационными подходами.',
    academicSubjects: 'Академические предметы',
    teachingStaff: 'Преподавательский состав',
    facilities: 'Современные объекты',
    // About section translations
    aboutUs: 'О нас',
    shapingTomorrowsLeaders: 'Формируем Лидеров Завтрашнего Дня Уже Сегодня',
    aboutDescription1: 'Школа Аль-Хоразмий — это прогрессивное частное учебное заведение, которое стремится развивать молодых учеников, опираясь на прочную базу в области английского языка, математики, информационных технологий и робототехники. Наша миссия — дать учащимся навыки и мышление, необходимые для успеха в быстро меняющемся мире технологий.',
    aboutDescription2: 'Мы сочетаем академическое превосходство с практическим обучением, чтобы пробудить любознательность, повысить уверенность в себе и привить любовь к обучению на всю жизнь. В Аль-Хоразмий мы не просто обучаем — мы вдохновляем учеников быть лидерами, новаторами и добиваться успеха.',
    whyChooseAlXorazmiy: 'Почему выбрать Аль-Хорезми?',
    futureFocusedCurriculum: 'Учебная программа, ориентированная на будущее',
    futureFocusedDescription: 'Специализированные программы по английскому языку, математике, ИТ и робототехнике для подготовки студентов к завтрашним вызовам.',
    expertEducators: 'Опытные педагоги',
    expertEducatorsDescription: 'Увлеченные учителя с глубокими знаниями предмета и приверженностью успеху студентов.',
    innovativeLearningEnvironment: 'Инновационная учебная среда',
    innovativeLearningDescription: 'Современные классы, компьютерные лаборатории и робототехнические объекты, предназначенные для поддержки активного и проектного обучения.',
    ourAcademicPrograms: 'Наши Учебные Программы',
    programsDescription: 'Ознакомьтесь с нашим широким спектром предметов, предназначенных для подготовки студентов к успеху в их академическом и профессиональном пути.',
    english: 'Английский язык',
    englishDescription: 'Комплексное изучение английского языка с акцентом на говорение, письмо и коммуникативные навыки.',
    speakingPractice: 'Практика Говорения',
    grammarWriting: 'Грамматика и Письмо',
    literatureStudy: 'Изучение Литературы',
    mathematics: 'Математика',
    mathematicsDescription: 'Продвинутые математические концепции и методы решения задач для академического совершенства.',
    algebraGeometry: 'Алгебра и Геометрия',
    calculus: 'Математический Анализ',
    problemSolving: 'Решение Задач',
    informationTechnology: 'Информационные Технологии',
    itDescription: 'Современные IT-навыки, включая программирование, цифровую грамотность и основы информатики.',
    programming: 'Программирование',
    digitalSkills: 'Цифровые Навыки',
    computerScience: 'Информатика',
    russian: 'Русский язык',
    russianDescription: 'Владение русским языком с акцентом на практическое общение и культурное понимание.',
    languageSkills: 'Языковые Навыки',
    culturalStudies: 'Культурология',
    communication: 'Коммуникация',
    robotics: 'Робототехника',
    roboticsDescription: 'Практические проекты по робототехнике и инженерии для развития технического и творческого мышления.',
    robotBuilding: 'Сборка Роботов',
    engineeringDesign: 'Инженерный Дизайн',
    ieltsPreparation: 'Подготовка к IELTS',
    ieltsDescription: 'Интенсивный курс подготовки к IELTS для международных образовательных возможностей.',
    testStrategies: 'Стратегии Тестирования',
    practiceTests: 'Практические Тесты',
    scoreImprovement: 'Улучшение Результатов',
    satPreparation: 'Подготовка к SAT',
    satDescription: 'Комплексная подготовка к SAT для успешного поступления в университет.',
    testPrep: 'Подготовка к Тестам',
    practiceExams: 'Практические Экзамены',
    scoreEnhancement: 'Повышение Баллов',
    arabic: 'Арабский язык',
    arabicDescription: 'Изучение арабского языка с акцентом на чтение, письмо и культурное понимание.',
    languageBasics: 'Основы Языка',
    readingWriting: 'Чтение и Письмо',
    culturalContext: 'Культурный Контекст',
    schoolName: 'Школа Al Xorazmiy',
    innovationInLearning: 'Инновации В Обучении'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('UZ');

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
