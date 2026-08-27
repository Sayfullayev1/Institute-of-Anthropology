import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';

function ConferenceCard({ item, language }) {
  const title = item.title?.[language] || item.title?.uz;
  const description = item.description?.[language];

  return (
    <article className={styles.card}>
      <div className={styles.card__image}>
        {item.image ? (
          <img src={item.image} alt={title} />
        ) : (
          <div className={styles.card__imagePlaceholder}>
            <i className="fa-solid fa-file-pdf" />
          </div>
        )}
      </div>

      <div className={styles.card__body}>
        {item.date && (
          <span className={styles.card__date}>
            {new Date(item.date).toLocaleDateString(language === 'en' ? 'en-GB' : 'uz-UZ')}
          </span>
        )}
        <h3 className={styles.card__title}>{title}</h3>
        {description && <p className={styles.card__desc}>{description}</p>}

        {item.pdf && (
          <a
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card__link}
          >
            {language === 'en' ? 'Download PDF' : 'PDF yuklab olish'}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Section() {
  const { language } = useContext(LanguageContext);
  const [list, setList] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setList(null);
    setError(false);

    axios.get(`${getApiUrl()}/api/conferences/list`)
      .then((response) => {
        if (!cancelled) setList(response.data.data || []);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => { cancelled = true; };
  }, []);

  return (
    <section className={styles.container}>
      {error && (
        <p className={styles.emptyHint}>
          {language === 'en' ? 'Failed to load conferences' : 'Konferensiyalarni yuklashda xatolik'}
        </p>
      )}

      {!error && list === null && (
        <p className={styles.emptyHint}>
          {language === 'en' ? 'Loading...' : 'Yuklanmoqda...'}
        </p>
      )}

      {!error && list !== null && list.length === 0 && (
        <p className={styles.emptyHint}>
          {language === 'en' ? 'No conferences published yet' : 'Hozircha konferensiyalar e’lon qilinmagan'}
        </p>
      )}

      {!error && list !== null && list.length > 0 && (
        <div className={styles.grid}>
          {list.map((item) => (
            <ConferenceCard key={item.slug} item={item} language={language} />
          ))}
        </div>
      )}
    </section>
  );
}
