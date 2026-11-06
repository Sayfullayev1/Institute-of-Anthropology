import React from 'react';
import './main.scss';
import Category from '@/components/category/Category';
import Section from '@/pages/NewsPages/newsPage/items/section/Section';
import Container from '@/components/container/Container';

export default function Main({ section }) {

  const menuData = [
    {
      text: {
        uz: "Negiz bet",
        en: "Home",
      },
      link: "/",
    },
    {
      text: section.title,
      link: section.path,
    },
  ];

  return (
    <main className="contacts-page__main">
      <Category data={menuData} />
      <Container>
        <Section section={section} />
      </Container>
    </main>
  );
}
