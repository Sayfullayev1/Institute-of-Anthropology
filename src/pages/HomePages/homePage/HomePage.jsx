import React, { useContext } from 'react'; // 1. Добавили useContext
import './homePage.scss';
import Main from './items/main/Main';
import Section from './items/section/Section';
import { Helmet } from 'react-helmet-async';
import { LanguageContext } from '@/context/LanguageContext';

export default function HomePage() {
  // 2. Извлекаем значение языка из контекста
  const { language } = useContext(LanguageContext); 
  

  return (
    <div className="home-page">
      <Helmet>
        <title>
          {language === 'uz' 
            ? "Antropologiya instituti: O'zbekiston Respublikasi Fanlar akademiyasi" 
            : "Institute of Anthropology: Academy of Sciences of the Republic of Uzbekistan"}
        </title>
      </Helmet>
      
      <div className='home-page__main_wrapper'>
        <Main/>
      </div>
      <div className='home-page__section_wrapper'>
        <Section/>
      </div>
    </div>
  );
}
