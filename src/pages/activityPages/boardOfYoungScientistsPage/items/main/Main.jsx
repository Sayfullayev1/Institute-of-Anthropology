import React from 'react';
import style from './main.module.scss';
import Category from '@/components/category/Category';
import Section from '@/pages/activityPages/boardOfYoungScientistsPage/items/section/Section';

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
        uz: "Yosh olimlar kengashi",
        ru: "Совет молодых ученых",
        en: "Board of young scientists",
      },
      link: "/",
    },
  ];

  return (
    <main className={style.main}>

      <Category data={menuData} />

      <Section />

    </main>
  );
}
