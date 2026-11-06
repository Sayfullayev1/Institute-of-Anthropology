import React from 'react';
import styles from './newsDetailPage.module.scss';
import Main from './items/main/Main';
import { POST_SECTIONS } from '@/pages/NewsPages/postSections';

// Страница одной записи раздела (новость, достижение — см. postSections.js).
export default function NewsDetailPage({ section = POST_SECTIONS.news }) {
  return (
    <div className={styles.wrapper}>
      <Main section={section} />
    </div>
  );
}
