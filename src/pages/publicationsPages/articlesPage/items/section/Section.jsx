import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './section.module.scss'; // Убедитесь, что файл section.module.scss существует

import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';
import { Link, useLocation } from 'react-router-dom';

export default function Section() {
  const { language } = useContext(LanguageContext);
  const [newsListDataLength, setNewsListDataLength] = useState();
  const [newsListData, setNewsListData] = useState([]);
  const [numOfTheData, setNumOfTheData] = useState(1);

  const api = getApiUrl();


  const location = useLocation();
  const lastSegment = location.pathname.split('/').filter(Boolean).pop();

  console.log(`${api}/api/${lastSegment}/get-published-count`);
  

  useEffect(() => {
    axios.get(`${api}/api/${lastSegment}/get-published-count`)
      .then((response) => {
        console.log('Общее количество опубликованных данных:', response.data.total);
        setNewsListDataLength(response.data.total);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
      });
  }, [lastSegment, api]);

  
  // console.log(`${api}/api/${lastSegment}/get-item`);
    

  useEffect(() => {
    const fetchGalleryItems = async () => {
      axios.post(`${api}/api/${lastSegment}/get-item`, { page: numOfTheData })
        .then(response => {
          if (response.data.success) {
            console.log('Полученные элементы галереи:', response.data.data);
            setNewsListData(response.data.data);
          } else {
            console.error('Ошибка при получении элементов галереи:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Ошибка при запросе элементов галереи:', error);
        });
    };

    fetchGalleryItems();
  }, [newsListDataLength, numOfTheData, lastSegment, api]);

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  const totalPages = Math.ceil((newsListDataLength || 0) / 16);

  const handlePageChange = (pageNum) => {
    setNumOfTheData(pageNum);
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.cardContainer}>
        {newsListData?.map((item, index) => {
          return (
            <div className={styles.newsCard} key={index}>
              <Link className={styles.newsCard_link} to={item.link}>
                <div className={styles.newsCard_imageWrapper}>
                  <img src={item.image} alt="" className={styles.newsCard_image}/>
                </div>
              </Link>
              <div className={styles.newsCard_content}>
                <div className={styles.newsCard_data}>
                  <i className="fa-regular fa-calendar-days"></i>
                  {formatDate(item.date)}
                </div>
                <Link className={styles.newsCard_link} to={item.link}>
                  <div className={styles.newsCard_title}>{item.title[language]}</div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

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

    </div>
  );
}
