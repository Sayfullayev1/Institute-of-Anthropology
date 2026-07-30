import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import style from './managementDetailPage.module.scss';
import Category from '../../../components/category/Category';
import Container from '../../../components/container/Container';
import { LanguageContext } from '../../../context/LanguageContext';
import getApiUrl from '../../../api/api';

export default function ManagementDetailPage() {
  const { slug } = useParams();
  const { language } = useContext(LanguageContext);

  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setItem(null);
    setNotFound(false);

    axios.get(`${getApiUrl()}/api/management/by-slug/${slug}`)
      .then((response) => setItem(response.data.data))
      .catch(() => setNotFound(true));
  }, [slug]);

  const menuData = [
    { text: { uz: 'Bosh sahifa', en: 'Home' }, link: '/' },
    { text: { uz: 'Rahbariyat', en: 'Management' }, link: '/management' },
    { text: { uz: item ? item.name[language] : '...', en: item ? item.name[language] : '...' }, link: '#' },
  ];

  if (notFound) {
    return (
      <div className={style.container}>
        <Category data={menuData} />
        <Container>
          <p className={style.notFound}>
            {language === 'en' ? 'Staff member not found' : 'Xodim topilmadi'}
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <Category data={menuData} />

      <Container>
        {!item ? (
          <p className={style.loading}>{language === 'en' ? 'Loading...' : 'Yuklanmoqda...'}</p>
        ) : (
          <div className={style.staff}>
            <div className={style.staff__photo}>
              {item.photo ? (
                <img src={item.photo} alt={item.name[language]} />
              ) : (
                <div className={style.staff__photoPlaceholder} />
              )}
            </div>

            <div className={style.staff__info}>
              <h1 className={style.staff__name}>{item.name[language]}</h1>
              <p className={style.staff__jobTitle}>{item.jobTitle?.[language]}</p>

              <ul className={style.staff__meta}>
                {item.workTime?.[language] && (
                  <li>{language === 'en' ? 'Work time: ' : 'Ish vaqti: '}{item.workTime[language]}</li>
                )}
                {item.contact?.[language] && (
                  <li>{language === 'en' ? 'Phone: ' : 'Telefon: '}{item.contact[language]}</li>
                )}
                {item.email && (
                  <li>
                    Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                  </li>
                )}
              </ul>

              <h2 className={style.staff__subheading}>
                {language === 'en' ? 'About' : 'Batafsil ma’lumot'}
              </h2>
              {item.bio?.[language] ? (
                <p className={style.staff__bio}>{item.bio[language]}</p>
              ) : (
                <p className={style.staff__bioEmpty}>
                  {language === 'en' ? 'No additional information yet' : 'Hozircha qo‘shimcha ma’lumot yo‘q'}
                </p>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
