import React, { useState, useContext, useRef, useEffect } from 'react';
import styles from './languageSwitcher.module.scss';
import { LanguageContext } from '../../../../../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Ссылки на круглые флаги (используем сервис flagpedia или аналоги)
  const languages = [
    { 
      code: 'uz', 
      name: 'O‘zbek', 
      flagUrl: 'https://flagpedia.net/data/flags/w1160/uz.webp' 
    },
    { 
      code: 'en', 
      name: 'English', 
      flagUrl: 'https://flagpedia.net/data/flags/w1160/gb.webp' 
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className={styles.langWrapper} ref={dropdownRef}>
      <button 
        className={`${styles.langBtn} ${isOpen ? styles.active : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.currentInfo}>
          <div className={styles.flagCircle}>
            <img src={currentLang.flagUrl} alt={currentLang.code} />
          </div>
          <span className={styles.code}>{currentLang.code.toUpperCase()}</span>
        </div>
        <span className={styles.arrowIcon}></span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {languages.map((item) => (
            <li 
              key={item.code} 
              className={`${styles.option} ${language === item.code ? styles.selected : ''}`}
              onClick={() => {
                changeLanguage(item.code);
                setIsOpen(false);
              }}
            >
              <div className={styles.itemFlagCircle}>
                <img src={item.flagUrl} alt={item.name} />
              </div>
              <span className={styles.itemName}>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
