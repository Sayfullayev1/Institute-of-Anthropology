import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import style from './main.module.scss';
import Category from '@/components/category/Category';
import Container from '@/components/container/Container';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';
import Section, { JOURNAL_TITLE } from '../section/Section';

export default function Main() {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);

  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setItem(null);
    setNotFound(false);

    axios.get(`${getApiUrl()}/api/publications-pages/uzbekistan-history-of-material-culture/item/${id}`)
      .then((response) => setItem(response.data.data))
      .catch(() => setNotFound(true));
  }, [id]);

  const menuData = [
    { text: { uz: 'Bosh sahifa', en: 'Home' }, link: '/' },
    { text: JOURNAL_TITLE, link: '/journal' },
    { text: { uz: item ? item.title[language] : '...', en: item ? item.title[language] : '...' }, link: '#' },
  ];

  return (
    <main className={style.container}>
      <Category data={menuData} />

      <Container>
        <Section item={item} notFound={notFound} language={language} />
      </Container>
    </main>
  );
}
