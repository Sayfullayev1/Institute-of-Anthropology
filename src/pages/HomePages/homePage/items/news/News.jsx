import React, { useContext, useEffect, useState } from 'react'
import './news.scss'

import { LanguageContext } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

import axios from 'axios';
import getApiUrl from '@/api/api';



export default function News() {
    const [newsListData, setNewsListData] = useState([]);

    const [news, setNews] = useState([]);



    const { language } = useContext(LanguageContext);


    useEffect(() => {
        const api = getApiUrl();

        const newsTitle = { uz: "Yangiliklar", ru: "Новости", en: "News" };

        async function fetchNews() {
            try {
                const response = await axios.post(`${api}/api/news/get-item`, { page: 0 });
                if (response.data.success) {
                    const formattedData = response.data.data.map(item => ({
                        ...item,
                        tupe: newsTitle,
                        typeof: 'news',
                    }));
                    setNews(formattedData);
                } else {
                    console.error('Ошибка при получении элементов :', response.data.message);
                }
            } catch (error) {
                console.error('Ошибка при запросе элементов :', error);
            }
        }
        fetchNews();
    }, []);


    useEffect(() => {
        const maxItems = 12;
        setNewsListData(news.slice(0, maxItems));
    }, [news]);


    function formatDate(dateStr) {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        if (isNaN(date)) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

  return (
    <div className='home-page__news'>
        {
            newsListData?.map((item, index) => (
                <div className='home-page__news__item' key={index}>
                    <Link className='home-page__news__item__link' to={`${item.typeof}/${item.link}`}>
                        <div className='home-page__news__item__img-wrapper'>
                            <img src={item.image} alt="" className='home-page__news__item__img' />
                        </div>
                    </Link>

                    <div className='home-page__news__item__content'>

                        <div className='home-page__news__item__type_link'>
                            <Link to={item.typeof}>
                                {
                                    item.tupe[language]
                                }
                            </Link>
                        </div>

                        <p className='home-page__news__item__data'> <i className="fa-regular fa-calendar-days"></i>  {formatDate(item.date)}</p>
                            
                        <Link className='home-page__news__item__link' to={`${item.typeof}/${item.link}`}>
                            <h1 className='home-page__news__item__title'>{item.title[language]}</h1>
                        </Link>

                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}
