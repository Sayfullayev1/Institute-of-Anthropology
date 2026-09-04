import React from 'react';
import { useParams } from 'react-router-dom';
import HomePage from '../../pages/HomePages/homePage/HomePage';
import NotFoundPage from '../../pages/OtherPages/notFoundPage/NotFoundPage';

// Единственный роут сайта, где "/:lang?" ничем не ограничен —
// сюда попадёт любой одиночный сегмент URL (например /asdf),
// react-router примет его за lang. Проверяем: lang либо не задан
// (en по умолчанию, без префикса), либо входит в список реально
// поддерживаемых языков — иначе это битая ссылка, а не язык,
// и нужно показать 404, а не Bosh sahifa/Home.
const SUPPORTED_LANGS = ['uz', 'en'];

export default function HomeRouteGuard() {
  const { lang } = useParams();

  if (lang && !SUPPORTED_LANGS.includes(lang)) {
    return <NotFoundPage />;
  }

  return <HomePage />;
}
