import React from 'react';
import style from './main.module.scss';
import Category from '@/components/category/Category';
import Section from '@/pages/HomePages/archaeologicalGeophysicsDepartmentPage/items/section/Section';
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
        uz: "Arxeologik geofizika bo‘limi",
        en: "Archaeological Geophysics Department",
      },
      link: "/archaeological-geophysics-department",
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
