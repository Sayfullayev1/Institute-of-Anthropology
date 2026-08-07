import React from 'react';
import style from './main.module.scss';
import Category from '@/components/category/Category';
import Section from '@/pages/HomePages/announcementsNewsPage/items/section/Section';
import Container from '@/components/container/Container';

export default function Main() {
  
  const menuData = [
    {
      text: {
        uz: "Bosh sahifa",
        en: "Home",
      },
      link: "/",
    },
    {
      text: {
        uz: "E’lonlar/Yangiliklar",
        en: "Announcements/News",
      },
      link: "/announcements-news",
    },
  ];

  return (
    <main className={style.main}>

      <Category data={menuData} />

      <Container>
        <Section />
      </Container>

    </main>
  );
}
