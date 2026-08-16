import React, { useContext, useEffect, useState } from 'react';
import './main.scss';

import Category from '@/components/category/Category';
import Section from '@/pages/publicationsPages/articlesDetailPage/items/section/Section';

import { LanguageContext } from '@/context/LanguageContext';
import axios from 'axios';
import getApiUrl from '@/api/api';
import { useLocation, useParams } from 'react-router-dom';
import Container from '@/components/container/Container';

export default function Main() {

 const { language } = useContext(LanguageContext);
  // Получаем параметры из URL
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;
  const [newsData, setNewsData] = useState(null);

  // Название раздела ("articles"/"events"/"wednesday-readings") ищем по
  // известному списку, а не по фиксированному индексу сегмента пути —
  // индекс сдвигается в зависимости от того, есть ли языковой префикс
  // (/en/events/foo — раздел на индексе 1, но /events/foo, без префикса
  // для узбекского по умолчанию, — раздел уже на индексе 0).
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const KNOWN_SECTIONS = ['articles', 'events', 'wednesday-readings'];
  const sectionName = pathSegments.find((seg) => KNOWN_SECTIONS.includes(seg)) || pathSegments[0];

  useEffect(() => {
    if (!id) return;

    const api = getApiUrl();

    // id из URL — стабильный slug записи, передаём как есть.
    axios.get(`${api}/api/${sectionName}/get-item/${id}`)
      .then(res => {
        if (res.data && res.data.success && res.data.data) {
          setNewsData(res.data.data);
        } else {
          setNewsData(null);
        }
      })
      .catch(err => {
        console.error("Error fetching gallery data:", err);
      });

    // Передаём excludeSlug, чтобы исключить текущую запись из списка похожих
    axios.post(`${api}/api/${sectionName}/get-item-list`, { excludeSlug: id })
      .then(res => {
        // console.log("News list data fetched successfully:", res.data.data);

      })
      .catch(err => {
        console.error("Error fetching news list data:", err);
      });
  }, [id, sectionName]);



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
      link: `/${language}/${getLanguageText().link}`,
    },
    {
      text: {
        uz: newsData?.title.uz || getLanguageText().Name['uz'],
        ru: newsData?.title.ru || getLanguageText().Name['ru'],
        en: newsData?.title.en || getLanguageText().Name['en'],
      },
      link: currentPath,
    },
  ];


  return (
    <main className="contacts-page__main">
      <Category data={menuData} />
      <Container>
        <Section newsData={newsData}/>
      </Container>
    </main>
  );
}
