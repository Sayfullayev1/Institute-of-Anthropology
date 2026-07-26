import React, { useContext } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует
import { LanguageContext } from '../../../../../context/LanguageContext';

// content хранится как строка (articles/events/wednesday-readings, старые записи ads)
// либо как {uz, en} (новые записи ads из обновлённого редактора) — поддерживаем оба варианта.
function getLocalizedContent(content, language) {
  if (!content) return '';
  if (typeof content === 'object') return content[language] || content.uz || content.en || '';
  return content;
}

export default function Section(news) {
  const { language } = useContext(LanguageContext);

  const contentHtml = getLocalizedContent(news.newsData?.content, language);

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        {contentHtml && (
          <div
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        )}
      </div>
    </section>
  );
}
