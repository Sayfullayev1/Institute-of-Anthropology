import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';

import imgUz from '@/public/images/HomePagesImages/sectionImages/structure-uz.png';
import imgEn from '@/public/images/HomePagesImages/sectionImages/structure-en.png';

export default function Section() {
  const { language } = useContext(LanguageContext);
  // Раньше картинка была только на узбекском — теперь есть и настоящий
  // переведённый вариант (не мой перевод, дали готовым), выбираем по языку.
  // На 'ru' (если такой есть в LanguageContext) переведённой версии нет —
  // используем узбекскую как более полный фолбэк, чем ничего.
  const img = language === 'en' ? imgEn : imgUz;

  return (
    <section className={styles.container}>
      <img src={img} alt={language === 'en' ? 'Structure' : 'Tuzilma'} />
    </section>
  );
}
