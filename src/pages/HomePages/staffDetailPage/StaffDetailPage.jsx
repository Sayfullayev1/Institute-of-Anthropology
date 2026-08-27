import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import style from './staffDetailPage.module.scss';
import Category from '@/components/category/Category';
import Container from '@/components/container/Container';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';

// Те же 6 отделов, что в Bo'limlar (SiteMapeData.json) — нужны здесь только
// для подписи хлебной крошки (URL теперь /<deptSlug>/staff/<slug>), сама
// выборка сотрудника по-прежнему идёт по глобально уникальному slug.
const DEPT_NAMES = {
  'philosophy-department': { uz: 'Falsafa bo‘limi', en: 'Department of Philosophy' },
  'archaeological-anthropology-department': { uz: 'Arxeologik antropologiya bo‘limi', en: 'Archaeological Anthropology Department' },
  'geoanthropology-department': { uz: 'Geoantropologiya bo‘limi', en: 'Geoanthropology Department' },
  'historical-anthropology-department': { uz: 'Tarixiy antropologiya bo‘limi', en: 'Historical Anthropology Department' },
  'socio-cultural-anthropology-department': { uz: 'Ijtimoiy-madaniy antropologiya bo‘limi', en: 'Socio-Cultural Anthropology Department' },
  'archaeological-geophysics-department': { uz: 'Arxeologik geofizika bo‘limi', en: 'Archaeological Geophysics Department' },
};

export default function StaffDetailPage() {
  const { deptSlug, slug } = useParams();
  const { language } = useContext(LanguageContext);

  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setItem(null);
    setNotFound(false);

    axios.get(`${getApiUrl()}/api/departments/staff/by-slug/${slug}`)
      .then((response) => {
        const data = response.data.data;
        // URL вида /<deptSlug>/staff/<slug> — если slug существует, но
        // принадлежит другому отделу, считаем это "не найдено", а не молча
        // показываем человека под чужой хлебной крошкой.
        if (data.departmentSlug && data.departmentSlug !== deptSlug) {
          setNotFound(true);
        } else {
          setItem(data);
        }
      })
      .catch(() => setNotFound(true));
  }, [slug, deptSlug]);

  const deptName = DEPT_NAMES[deptSlug] || { uz: deptSlug, en: deptSlug };
  const deptLink = language === 'en' ? `/${deptSlug}` : `/${language}/${deptSlug}`;

  const menuData = [
    { text: { uz: 'Bosh sahifa', en: 'Home' }, link: '/' },
    { text: deptName, link: deptLink },
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
