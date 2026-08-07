import React from 'react';
import './main.scss';

import Category from '@/components/category/Category';
import Section from '@/pages/publicationsPages/articlesPage/items/section/Section';

import Container from '@/components/container/Container';


import { useLocation } from 'react-router-dom';

export default function Main() {

  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const sectionName = pathSegments[1]; // "articles" для /ru/articles/grgegrgr-1

  

   function getLanguageText() {
    const data = [
      {
        Name: {
          uz: "Maqolalar",
          ru: "Статьи",
          en: "Articles",
        },
        link: "articles",
      },
      {
        Name: {
          uz: "Tadbirlar",
          ru: "События",
          en: "Events",
        },
        link: "events",
      },
      {
        Name: {
          uz: "Chorshanba o'qishlari",
          ru: "Чтения по средам",
          en: "Wednesday-readings",
        },
        link: "wednesday-readings",
      },
    ];

    // Получаем sectionName из текущего пути
    return data.find(item => item.link === sectionName) || data[0];
  }
  

  const menuData = [
    {
      text: {
        uz: "Bosh sahifa",
        ru: "Главная",
        en: "Main",
      },
      link: "/",
    },
    {
      text: {
        uz: getLanguageText().Name['uz'],
        ru: getLanguageText().Name['ru'],
        en: getLanguageText().Name['en'],
      },
      link: ``,
    },
  ];


  

  return (
    <main className="contacts-page__main">
      <Category data={menuData} />

      <Container>
        <Section/>
      </Container>
      
    </main>
  );
}
