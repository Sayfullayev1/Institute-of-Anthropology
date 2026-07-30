import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './section.module.scss';
import { LanguageContext } from '../../../../../context/LanguageContext';
import menuData from '../../../../../pages/PagesData/siteMapeData/SiteMapeData.json';

export default function Section() {
  const { language } = useContext(LanguageContext);

  const getLocalizedLink = (link) => {
    if (!link) return null;
    // Если ссылка уже начинается с http или /, корректируем под язык
    const baseLink = link.startsWith('/') ? link : `/${link}`;
    return language === 'uz' ? baseLink : `/${language}${baseLink}`.replace(/\/+/g, '/');
  };

  return (
    <section className={styles.container}>
      <ul className={styles.sitemapList}>
        {menuData?.map((item, index) => (
          <li key={index} className={styles.sitemapItem}>
            {/* Если ссылки нет, выводим просто текст */}
            {item.link ? (
              <Link to={getLocalizedLink(item.link)} className={styles.mainLink}>
                {item.Name[language]}
              </Link>
            ) : (
              <span className={styles.mainLink}>{item.Name[language]}</span>
            )}

            {item.items && item.items.length > 0 && (
              <ul className={styles.subList}>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.subItem}>
                    {subItem.link ? (
                      <Link to={getLocalizedLink(subItem.link)}>
                        {subItem.Name[language]}
                      </Link>
                    ) : (
                      <span>{subItem.Name[language]}</span>
                    )}

                    {subItem.items && subItem.items.length > 0 && (
                      <ul className={styles.subList}>
                        {subItem.items.map((childItem, childIndex) => (
                          <li key={childIndex} className={styles.subItem}>
                            <Link to={getLocalizedLink(childItem.link)}>
                              {childItem.Name[language]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
