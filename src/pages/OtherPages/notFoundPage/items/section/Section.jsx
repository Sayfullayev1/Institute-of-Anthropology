import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';

export default function Section() {
  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.container}>
      <p className={styles.code}>404</p>

      <h1 className={styles.title}>
        {language === 'uz' ? 'Sahifa topilmadi' : 'Page not found'}
      </h1>

      <p className={styles.text}>
        {language === 'uz'
          ? 'Siz qidirayotgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.'
          : 'The page you are looking for does not exist or may have been removed.'}
      </p>

      <Link to="/" className={styles.button}>
        {language === 'uz' ? 'Bosh sahifaga qaytish' : 'Return to homepage'}
      </Link>
    </section>
  );
}
