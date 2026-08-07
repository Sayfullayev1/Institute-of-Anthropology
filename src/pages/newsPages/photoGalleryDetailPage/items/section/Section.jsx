import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Section({ galleryData }) {
  const { language } = useContext(LanguageContext);

  // Форматировать дату
  function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  if (!galleryData) {
    return (
      <section className={styles.container}>
        <div className={styles.notFound}>Галерея не найдена</div>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.galleryTitle}>
        {galleryData.titles?.[language] || galleryData.titles?.ru || galleryData.titles?.uz || ''}
      </div>

      {/* Главное фото с просмотром */}
      {galleryData.mainImage && (
          <div className={styles.mainImageWrap}>
              <img
                src={galleryData.mainImage}
                alt="Главное фото"
                className={styles.mainImage}
              />
          </div>
      )}

      <div className={styles.galleryMeta}>
        <span>
          <i className="fa-regular fa-calendar-days" style={{ marginRight: 6 }}></i>
          {formatDate(galleryData.scheduledDate)}
        </span>
      </div>

      {/* Галерея других фото с просмотром */}
      {galleryData.galleryImages && galleryData.galleryImages.length > 0 && (
        <PhotoProvider>
          <div className={styles.galleryImagesList}>
            {galleryData.galleryImages.map((img, idx) => (
              <div className={styles.galleryImageItem} key={idx}>
                <PhotoView src={img}>
                  <img
                    src={img}
                    alt={`Фото ${idx + 1}`}
                    className={styles.galleryImage}
                    style={{ cursor: 'zoom-in' }}
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
      )}
    </section>
  );
}
