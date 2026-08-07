import React, { useContext, useEffect, useState } from 'react';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует
import { LanguageContext } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

import axios from 'axios';
import getApiUrl from '@/api/api';




export default function Section() {
  const { language } = useContext(LanguageContext);
  const [photoGaleryLength, setPhotoGaleryLength] = useState();
  const [galleryItems, setGalleryItems] = useState([]);
  const [numOfTheData, setNumOfTheData] = useState(1);


  const API_BASE_URL = getApiUrl();

  

  useEffect(() => {
    const fetchPhotoGalleryLength = async () => {
 
      axios.get(`${API_BASE_URL}/api/photo-gallery/get-published-count`)
        .then(response => {
          if (response.data.success) {
            setPhotoGaleryLength(response.data.total);
            // console.log('Общее количество опубликованных галерей:', response.data.total);
            
            // console.log('Метаданные галереи:', photoGaleryLength);
          } else {
            console.error('Ошибка при получении метаданных:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Ошибка при запросе метаданных галереи:', error);
      });
    };

    fetchPhotoGalleryLength();
  }, [API_BASE_URL]);
  


  useEffect(() => {

    const fetchGalleryItems = async () => {
      axios.post(`${API_BASE_URL}/api/photo-gallery/get-item`, { page: numOfTheData })
        .then(response => {
          if (response.data.success) {
            // console.log('Полученные элементы галереи:', response.data.data);
            setGalleryItems(response.data.data);
          } else {
            console.error('Ошибка при получении элементов галереи:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Ошибка при запросе элементов галереи:', error);
      });
    };

    fetchGalleryItems();
  }, [photoGaleryLength, numOfTheData, API_BASE_URL]);
  

  // Функция для форматирования даты в формат "дд-мм-гггг"
  function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  // Количество страниц
  const totalPages = Math.ceil((photoGaleryLength || 0) / 15);

  // Обработчик смены страницы
  const handlePageChange = (pageNum) => {
    setNumOfTheData(pageNum);
  };


  return (
    <section className={styles.container}>
      <div className={styles.galleryCardsList}>
        {galleryItems?.map((item, index) => (
          <Link
            to={`/${language}/photo-gallery/${item.link}`}
            className={styles.galleryCard}
            key={item.metaKey || index}
          >
            <div className={styles.galleryCardImgWrap}>
              <img src={item.mainImage} alt={item.mainImage[language] } className={styles.galleryCardImg} />
            </div>
            <div className={styles.galleryCardBody}>
              <div className={styles.galleryCardDate}>
                <i className='fa-regular fa-calendar-days'></i>
                {item.scheduledDate ? formatDate(item.scheduledDate) : ""}
              </div>
              <div className={styles.galleryCardCaption}>
                {item.titles[language] || item.titles.uz}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className={styles.galleryPagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${styles.galleryPageBtn} ${numOfTheData === i + 1 ? styles.active : ''}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

    </section>
  );
}
