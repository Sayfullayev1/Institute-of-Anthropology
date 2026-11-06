import React from 'react';
import './newsPage.scss';
import Main from './items/main/Main';
import { POST_SECTIONS } from '@/pages/NewsPages/postSections';

// Список записей раздела (новости, достижения — см. postSections.js).
export default function NewsPage({ section = POST_SECTIONS.news }) {
  return (
    <div className="news-page">
      <Main section={section} />
    </div>
  );
}
