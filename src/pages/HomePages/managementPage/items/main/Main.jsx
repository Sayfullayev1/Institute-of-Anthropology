import React, { useContext, useEffect, useState } from 'react';
import './main.scss';
import axios from 'axios';
import Category from '@/components/category/Category';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';
import { Link } from 'react-router-dom';

export default function Main() {
  const { language } = useContext(LanguageContext);
  const [managementData, setManagementData] = useState([]);

  const menuData = [
    {
      text: {
        uz: 'Bosh sahifa',
        ru: 'Главная',
        en: 'Main',
      },
      link: `/`,
    },
    {
      text: {
        uz: 'Rahbariyat',
        ru: 'Руководство',
        en: 'Management',
      },
      link: '/',
    },
  ];

  useEffect(() => {
    axios.get(`${getApiUrl()}/api/management`)
      .then((response) => {
        setManagementData(response.data.data || []);
      })
      .catch((error) => {
        console.error('Xodimlar ro‘yxatini olishda xatolik:', error);
      });
  }, []);

  return (
    <main className="management-page__main">
      <Category data={menuData} />

      <section className="management-page__main__section">
        <ul>
          {managementData.map((item) => (
            <li key={item.id} className="management-page__main__section__item">
              <div className="management-page__main__section__item__img">
                <img src={item.photo} alt={item.name?.[language]} />
              </div>
              <div className="management-page__main__section__item__text">
                <h3>{item.jobTitle?.[language]}</h3>
                <p className="job-title">{item.name?.[language]}</p>
                <div className="contact-info">
                  {item.workTime?.[language] && (
                    <p>{language === 'en' ? 'Work time: ' : 'Ish vaqti: '}{item.workTime[language]}</p>
                  )}
                  {item.contact?.[language] && (
                    <p>{language === 'en' ? 'Phone: ' : 'Telefon: '}{item.contact[language]}</p>
                  )}
                  <p>
                    {language === 'en' ? 'Email: ' : 'Email: '}
                    <Link to={`mailto:${item.email}`}>{item.email}</Link>
                  </p>
                </div>
                {item.slug && (item.bio?.uz?.trim() || item.bio?.en?.trim()) && (
                  <Link
                    to={language === 'en' ? `/management/${item.slug}` : `/${language}/management/${item.slug}`}
                    className="management-page__main__section__item__more"
                  >
                    {language === 'en' ? 'Learn more' : 'Batafsil'}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
