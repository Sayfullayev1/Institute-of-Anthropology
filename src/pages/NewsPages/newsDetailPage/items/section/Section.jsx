import React, { useContext } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует
import { LanguageContext } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import sanitizeHtml from '@/utils/sanitizeHtml';
import { localizedPath } from '@/pages/NewsPages/postSections';

// content хранится как строка (старые записи) либо как {uz, en} (новые записи из
// обновлённого редактора) — поддерживаем оба варианта, чтобы не сломать уже опубликованное.
function getLocalizedContent(content, language) {
  if (!content) return '';
  if (typeof content === 'object') return content[language] || content.uz || content.en || '';
  return content;
}

export default function Section(props) {
  const { language } = useContext(LanguageContext);

  const contentHtml = getLocalizedContent(props.newsData?.content, language);

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        {contentHtml && (
          <div
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(contentHtml) }}
          />
        )}
      </div>

      <div className={styles.cardListWrapper}>
        {Array.isArray(props.newsDataList) && props.newsDataList.length > 0 && (
          props.newsDataList.map((news, index) => (
            <div key={index} className={styles.card}>

              <Link to={localizedPath(`${props.section.path}/${news.link}`, language)} className={styles.cardLink}>
                <div>
                  <img src={news.image} alt={news.title?.[language] || ''} className={styles.cardImage} />
                </div>
              </Link>


              <div className={styles.cardContent}>
                <p className={styles.cardDate}>
                  <i className="fa-regular fa-calendar-days"></i> {new Date(news.date).toLocaleDateString()}
                </p>
                <Link to={localizedPath(`${props.section.path}/${news.link}`, language)} className={styles.cardLink}>
                  <h3 className={styles.cardTitle}>{news.title?.[language] || ''}</h3>
                </Link>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
