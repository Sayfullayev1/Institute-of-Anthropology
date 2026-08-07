import React from 'react';
import './main.scss';
import Category from '@/components/category/Category';
import Section from '@/pages/newsPages/newsPage/items/section/Section';
import Container from '@/components/container/Container';

export default function Main() {
  
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
        uz: "Yangiliklar",
        ru: "Новости",
        en: "News",
      },
      link: "/news",
    },
  ];

  return (
    <main className="contacts-page__main">
      <Category data={menuData} />
      <Container>
        <Section />
      </Container>
    </main>
  );
}
