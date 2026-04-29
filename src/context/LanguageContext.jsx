import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getLangFromPath = (path) => {
    return /^\/en(\/|$)/.test(path) ? 'en' : 'uz';
  };

  const [language, setLanguage] = useState(() => {
    const langFromUrl = getLangFromPath(window.location.pathname);
    const savedLang = localStorage.getItem('app_lang');
    return langFromUrl || savedLang || 'uz';
  });

  useEffect(() => {
    const currentLang = getLangFromPath(location.pathname);
    const savedLang = localStorage.getItem('app_lang');

    // ЛОГИКА РЕДИРЕКТА:
    // Если пользователь зашел на главную (/) и у него сохранен 'en'
    if (location.pathname === '/' && savedLang === 'en') {
      navigate('/en' + location.search, { replace: true });
      return;
    }

    // Если пользователь зашел на /en, но у него сохранен 'uz' (и он пришел не по ссылке смены языка)
    // Мы доверяем URL, но обновляем состояние
    if (currentLang !== language) {
      setLanguage(currentLang);
      localStorage.setItem('app_lang', currentLang);
    }
  }, [location.pathname]);

  const changeLanguage = (newLang) => {
    if (newLang === language) return;

    localStorage.setItem('app_lang', newLang);

    const currentPath = location.pathname;
    let newPath;

    if (newLang === 'en') {
      newPath = currentPath.startsWith('/en') ? currentPath : `/en${currentPath}`;
    } else {
      newPath = currentPath.replace(/^\/en(\/|$)/, '/');
    }

    const cleanPath = newPath.replace(/\/+/g, '/').replace(/(.)\/$/, '$1') || '/';
    navigate(cleanPath + location.search);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
