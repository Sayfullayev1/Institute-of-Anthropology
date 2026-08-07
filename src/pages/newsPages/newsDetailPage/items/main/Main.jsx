import React, { useContext, useEffect, useState } from 'react';
import './main.scss';

import Category from '@/components/category/Category';
import Section from '@/pages/newsPages/newsDetailPage/items/section/Section';

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
  

  // Получить последнюю цифру после дефиса из строки id
  function getLastNumberFromId(id) {
    if (!id) return null;
    const parts = id.split('-');
    const last = parts[parts.length - 1];
    return /^\d+$/.test(last) ? last : null;
  }

  useEffect(() => {
    let apiId = id;
    const lastNum = getLastNumberFromId(id);
    if (lastNum) {
      apiId = lastNum;
    }
    if (!apiId) return;

    const api = getApiUrl();

    axios.get(`${api}/api/news/get-item/${apiId}`)
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

    // Передаем excludeIndex для исключения текущей новости из списка
    axios.post(`${api}/api/news/get-item-list`, { excludeIndex: Number(apiId) })
      .then(res => {
        setNewsDataList(res.data.data);
        // console.log("News list data fetched successfully:", res.data.data);
        
      })
      .catch(err => {
        console.error("Error fetching news list data:", err);
      });
  }, [id, location], );

  


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
  