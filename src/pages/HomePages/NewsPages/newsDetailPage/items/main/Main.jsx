import React, { useContext, useEffect, useState } from 'react';
import './main.scss';

import Category from '@/components/category/Category';
import Section from '@/pages/HomePages/NewsPages/newsDetailPage/items/section/Section';

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
  const [newsDataList, setNewsDataList] = useState(null);


  useEffect(() => {
    if (!id) return;

    const api = getApiUrl();

    // id из URL — это уже стабильный slug записи (не позиция в списке),
    // так что просто передаём его как есть.
    axios.get(`${api}/api/news/get-item/${id}`)
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

    // Передаём excludeSlug, чтобы исключить текущую новость из списка похожих
    axios.post(`${api}/api/news/get-item-list`, { excludeSlug: id })
      .then(res => {
        setNewsDataList(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching news list data:", err);
      });
  }, [id, location]);




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
      link: `/${language}/news`,
    },
    {
      text: {
        uz: newsData?.title.uz || "Yangiliklar",
        ru: newsData?.title.ru || "Новости",
        en: newsData?.title.en || "News",
      },
      link: currentPath,
    },
  ];


  return (
    <main className="contacts-page__main">
      <Category data={menuData} />
      <Container>
        <Section newsData={newsData} newsDataList={newsDataList} />
      </Container>
    </main>
  );
}
