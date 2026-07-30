import React from 'react';
import style from './main.module.scss';
import Category from '../../../../../components/category/Category';
import Section from '../section/Section';
import Container from '../../../../../components/container/Container';

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
        uz: "Ijtimoiy-madaniy antropologiya bo‘limi",
        en: "Socio-Cultural Anthropology Department",
      },
      link: "/socio-cultural-anthropology-department",
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
