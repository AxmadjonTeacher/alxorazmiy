
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('programs'), href: '#programs' },
    { name: t('news'), href: '#news' },
    { name: t('contact'), href: '#contact' }
  ];

  const languages = [
    { code: 'EN' as const, name: 'English', flag: '🇺🇸' },
    { code: 'UZ' as const, name: 'O\'zbekcha', flag: '🇺🇿' },
    { code: 'RU' as const, name: 'Русский', flag: '🇷🇺' }
  ];

  const handleApplyNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ff9eb7ca-e3e6-47ed-bb86-bed42fe06a21.png" 
                alt="Al-Xorazmiy School Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Al-Xorazmiy
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium relative group transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Language Selector and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`flex items-center space-x-2 transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center space-x-3 px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin-slow">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-sm opacity-75 animate-spin-slow"></div>
              <Button 
                onClick={handleApplyNow}
                className="relative bg-white text-blue-600 hover:bg-gray-50 px-6 py-2 rounded-[6px] font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('applyNow')}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                : 'text-white hover:text-white/80 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-fade-in">
            <nav className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-100">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 w-full py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin-slow">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-sm opacity-75 animate-spin-slow"></div>
                  <Button 
                    onClick={() => {
                      handleApplyNow();
                      setIsMenuOpen(false);
                    }}
                    className="relative w-full bg-white text-blue-600 py-3 rounded-[6px] font-medium"
                  >
                    {t('applyNow')}
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
