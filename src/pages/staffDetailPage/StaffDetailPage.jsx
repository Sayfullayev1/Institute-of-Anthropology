import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import style from './staffDetailPage.module.scss';
import Category from '@/components/category/Category';
import Container from '@/components/container/Container';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';

export default function StaffDetailPage() {
  const { slug } = useParams();
  const { language } = useContext(LanguageContext);

  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setItem(null);
    setNotFound(false);

    axios.get(`${getApiUrl()}/api/departments/staff/by-slug/${slug}`)
      .then((response) => setItem(response.data.data))
      .catch(() => setNotFound(true));
  }, [slug]);

  const menuData = [
    { text: { uz: 'Bosh sahifa', en: 'Home' }, link: '/' },
    { text: { uz: item ? item.fullName.uz : '...', en: item ? item.fullName.en : '...' }, link: '#' },
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
                <img src={item.photo} alt={item.fullName[language]} />
              ) : (
                <div className={style.staff__photoPlaceholder} />
              )}
            </div>

            <div className={style.staff__info}>
              <h1 className={style.staff__name}>{item.fullName[language]}</h1>
              <p className={style.staff__position}>{item.position?.[language]}</p>
              {item.academicDegree?.[language] && (
                <p className={style.staff__degree}>{item.academicDegree[language]}</p>
              )}

              {item.researchInterests?.[language] && (
                <>
                  <h2 className={style.staff__subheading}>
                    {language === 'en' ? 'Research interests' : 'Ilmiy qiziqishlari'}
                  </h2>
                  <p className={style.staff__text}>{item.researchInterests[language]}</p>
                </>
              )}

              {item.currentResearch?.[language] && (
                <>
                  <h2 className={style.staff__subheading}>
                    {language === 'en' ? 'Current research' : 'Joriy tadqiqot mavzusi'}
                  </h2>
                  <p className={style.staff__text}>{item.currentResearch[language]}</p>
                </>
              )}

              {item.cvSummary?.[language] && (
                <>
                  <h2 className={style.staff__subheading}>
                    {language === 'en' ? 'CV' : 'Qisqacha tarjimai holi'}
                  </h2>
                  <p className={style.staff__bio}>{item.cvSummary[language]}</p>
                </>
              )}

              {item.mainPublications?.length > 0 && (
                <>
                  <h2 className={style.staff__subheading}>
                    {language === 'en' ? 'Main publications' : 'Asosiy ishlari'}
                  </h2>
                  <ul className={style.staff__publications}>
                    {item.mainPublications.map((pub, i) => (
                      <li key={i}>
                        {pub.link ? (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            {pub.title?.[language]}
                          </a>
                        ) : (
                          <span>{pub.title?.[language]}</span>
                        )}
                        {pub.year && <span className={style.staff__pubYear}> ({pub.year})</span>}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
