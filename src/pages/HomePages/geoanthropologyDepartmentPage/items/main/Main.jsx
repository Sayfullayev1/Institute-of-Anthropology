import React from 'react';
import style from './main.module.scss';
import Category from '@/components/category/Category';
import Section from '@/pages/HomePages/geoanthropologyDepartmentPage/items/section/Section';
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
        uz: "Geoantropologiya bo‘limi",
        en: "Geoanthropology Department",
      },
      link: "/geoanthropology-department",
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
