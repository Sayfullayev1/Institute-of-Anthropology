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
            ? "Antropologiya instituti — O'zbekiston Respublikasi Fanlar akademiyasi"
            : "Institute of Anthropology — Academy of Sciences of the Republic of Uzbekistan | Институт антропологии Узбекистана"}
        </title>
        <meta
          name="description"
          content={
            language === 'uz'
              ? "Antropologiya instituti — O'zbekiston Respublikasi Fanlar akademiyasi huzuridagi ilmiy-tadqiqot muassasasi. Ilmiy yo'nalishlar, nashrlar, kengashlar, xodimlar va yangiliklar."
              : "Institute of Anthropology (Институт антропологии Узбекистана) — a research institution of the Academy of Sciences of the Republic of Uzbekistan. Research, publications, councils, staff and news."
          }
        />
        <meta property="og:title" content={language === 'uz' ? "Antropologiya instituti" : "Institute of Anthropology"} />
        <meta
          property="og:description"
          content={
            language === 'uz'
              ? "O'zbekiston Respublikasi Fanlar akademiyasi huzuridagi Antropologiya instituti — rasmiy sayt."
              : "Institute of Anthropology of the Academy of Sciences of the Republic of Uzbekistan — official website."
          }
        />
        <meta property="og:url" content={language === 'uz' ? "https://anthropology.uz/uz" : "https://anthropology.uz/"} />
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
