import React, { useContext, useEffect } from 'react';
import './main.scss';
import Category from '@/components/category/Category';
import Section from '@/pages/newsPages/photoGalleryDetailPage/items/section/Section';
import Container from '@/components/container/Container';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import getApiUrl from '@/api/api';

import { LanguageContext } from '@/context/LanguageContext';

export default function Main() {
  const { language } = useContext(LanguageContext);
  // Получаем параметры из URL
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;
  const [galleryData, setGalleryData] = React.useState(null);
  const api = getApiUrl();

  useEffect(() => {
    if (!id) return;
    // id из URL — стабильный slug галереи, передаём как есть.
    axios.get(`${api}/api/photo-gallery/get-item/${id}`)
      .then(res => {
        if (res.data && res.data.success && res.data.data) {
          // console.log("Gallery data fetched successfully:", res.data.data);
          
          setGalleryData(res.data.data);
        } else {
          setGalleryData(null);
          // Можно показать сообщение "Галерея не найдена"
        }
      })
      .catch(err => {
        console.error("Error fetching gallery data:", err);
      });
  }, [id, api]);

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
        uz: "Fotogalereya",
        ru: "Фотогалерея",
        en: "Photo Gallery",
      },
      link: `/${language}/photo-gallery`,
    },
    {
      text: {
        uz: galleryData?.titles.uz || "Fotogalereya",
        ru: galleryData?.titles.ru || "Фотогалерея",
        en: galleryData?.titles.en || "Photo Gallery",
      },
      link: currentPath,
    },
  ];

  return (
    <main className="photo-gallery-page__main">
      <Category data={menuData} />

      <Container>
        <Section galleryData={galleryData} />
      </Container>
    </main>
  );
}
