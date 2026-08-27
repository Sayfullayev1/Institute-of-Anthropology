import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Английский теперь язык по умолчанию (без префикса, "/"),
    // узбекский — с префиксом "/uz".
    const getLangFromPath = (path) => {
        return /^\/uz(\/|$)/.test(path) ? 'uz' : 'en';
    };

    const [language, setLanguage] = useState(() => {
        const langFromUrl = getLangFromPath(window.location.pathname);
        const savedLang = localStorage.getItem('app_lang');
        return langFromUrl || savedLang || 'en';
    });

    useEffect(() => {
        const currentLang = getLangFromPath(location.pathname);
        const savedLang = localStorage.getItem('app_lang');

        // ЛОГИКА РЕДИРЕКТА:
        if (location.pathname === '/' && savedLang === 'uz') {
            navigate('/uz' + location.search, { replace: true });
            return;
        }

        if (currentLang !== language) {
            setLanguage(currentLang);
            localStorage.setItem('app_lang', currentLang);
        }

        // ESLint ругался на отсутствие этих зависимостей.
        // Добавляем их, чтобы билд на Vercel прошел успешно.
    }, [location.pathname, location.search, navigate, language]);

    const changeLanguage = (newLang) => {
        if (newLang === language) return;

        localStorage.setItem('app_lang', newLang);
        const currentPath = location.pathname;
        let newPath;

        if (newLang === 'uz') {
            newPath = currentPath.startsWith('/uz') ? currentPath : `/uz${currentPath}`;
        } else {
            newPath = currentPath.replace(/^\/uz(\/|$)/, '/');
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
