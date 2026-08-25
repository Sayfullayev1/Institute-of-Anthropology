import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import style from './departmentDetailPage.module.scss';
import Category from '@/components/category/Category';
import Container from '@/components/container/Container';
import PagePlaceholder from '@/components/pagePlaceholder/PagePlaceholder';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';

const PUBLICATION_TYPE_LABEL = {
  monograph: { uz: 'Monografiya', en: 'Monograph' },
  article: { uz: 'Maqola', en: 'Article' },
  catalog: { uz: 'Katalog', en: 'Catalog' },
};

// Пока в админке ещё нет содержимого отдела (info === null), брать название
// неоткуда, кроме info.name — без этого хлебная крошка показывала «...»
// вместо, например, «Arxeologik antropologiya bo‘limi». Те же 6 отделов,
// что в Bo'limlar (SiteMapeData.json) и в сайдбаре админки.
const DEPT_NAMES = {
  'philosophy-department': { uz: 'Falsafa bo‘limi', en: 'Department of Philosophy' },
  'archaeological-anthropology-department': { uz: 'Arxeologik antropologiya bo‘limi', en: 'Archaeological Anthropology Department' },
  'geoanthropology-department': { uz: 'Geoantropologiya bo‘limi', en: 'Geoanthropology Department' },
  'historical-anthropology-department': { uz: 'Tarixiy antropologiya bo‘limi', en: 'Historical Anthropology Department' },
  'socio-cultural-anthropology-department': { uz: 'Ijtimoiy-madaniy antropologiya bo‘limi', en: 'Socio-Cultural Anthropology Department' },
  'archaeological-geophysics-department': { uz: 'Arxeologik geofizika bo‘limi', en: 'Archaeological Geophysics Department' },
};

export default function DepartmentDetailPage({ deptSlug }) {
  const { language } = useContext(LanguageContext);

  const [info, setInfo] = useState(undefined); // undefined = loading, null = not seeded yet
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    setInfo(undefined);
    setStaff([]);

    const api = getApiUrl();
    Promise.all([
      axios.get(`${api}/api/departments/${deptSlug}`),
      axios.get(`${api}/api/departments/${deptSlug}/staff`),
    ])
      .then(([infoRes, staffRes]) => {
        setInfo(infoRes.data.data);
        setStaff(staffRes.data.data || []);
      })
      .catch(() => setInfo(null));
  }, [deptSlug]);

  const fallbackName = DEPT_NAMES[deptSlug] || { uz: deptSlug, en: deptSlug };
  const nameUz = info?.name?.uz || fallbackName.uz;
  const nameEn = info?.name?.en || fallbackName.en;
  const menuData = [
    { text: { uz: 'Bosh sahifa', en: 'Home' }, link: '/' },
    { text: { uz: nameUz, en: nameEn }, link: `/${deptSlug}` },
  ];

  if (info === undefined) {
    return (
      <div className={style.container}>
        <Category data={menuData} />
        <Container>
          <p className={style.loading}>{language === 'en' ? 'Loading...' : 'Yuklanmoqda...'}</p>
        </Container>
      </div>
    );
  }

  if (info === null) {
    return (
      <div className={style.container}>
        <Category data={menuData} />
        <Container>
          <PagePlaceholder />
        </Container>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <Category data={menuData} />

      <Container>
        <div className={style.department}>
          <h1 className={style.department__title}>
            {language === 'en' ? nameEn : nameUz}
            {info.tagline?.[language] && (
              // Тире — часть оформления, не данных: админ заполняет Nomi и
              // Tavsif как два отдельных поля, дефис между ними ставится
              // только здесь, во фронтенде.
              <span className={style.department__title__desc}> – {info.tagline[language]}</span>
            )}
          </h1>

          {info.mission?.[language] && (
            <section className={style.department__section}>
              <h2 className={style.department__subheading}>
                {language === 'en' ? 'Mission' : 'Missiya'}
              </h2>
              <p className={style.department__text}>{info.mission[language]}</p>
            </section>
          )}

          {info.researchDirections?.length > 0 && (
            <section className={style.department__section}>
              <h2 className={style.department__subheading}>
                {language === 'en' ? 'Research directions' : 'Tadqiqot yo‘nalishlari'}
              </h2>
              <ul className={style.department__list}>
                {info.researchDirections.map((item, i) => (
                  <li key={i}>{item[language]}</li>
                ))}
              </ul>
            </section>
          )}

          {info.history?.[language] && (
            <section className={style.department__section}>
              <h2 className={style.department__subheading}>
                {language === 'en' ? 'History' : 'Tarixi'}
              </h2>
              <p className={style.department__text}>{info.history[language]}</p>
            </section>
          )}

          {info.internationalPartners?.length > 0 && (
            <section className={style.department__section}>
              <h2 className={style.department__subheading}>
                {language === 'en' ? 'International and national partners' : 'Xalqaro va respublika hamkorlari'}
              </h2>
              <ul className={style.department__list}>
                {info.internationalPartners.map((item, i) => (
                  <li key={i}>{item[language]}</li>
                ))}
              </ul>
            </section>
          )}

          {info.projects?.length > 0 && (
            <section className={style.department__section}>
              <h2 className={style.department__subheading}>
                {language === 'en' ? 'Projects' : 'Loyihalar'}
              </h2>
              <ul className={style.department__list}>
                {info.projects.map((item, i) => (
                  <li key={i}>{item[language]}</li>
                ))}
              </ul>
            </section>
          )}

          {info.publications?.length > 0 && (
            <section className={style.department__section}>
              <h2 className={style.department__subheading}>
                {language === 'en' ? 'Publications' : 'Nashrlar'}
              </h2>
              <ul className={style.department__publications}>
                {info.publications.map((pub, i) => (
                  <li key={i}>
                    {pub.type && (
                      <span className={style.department__pubType}>
                        {PUBLICATION_TYPE_LABEL[pub.type]?.[language] || pub.type}
                      </span>
                    )}
                    {pub.link ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        {pub.title?.[language]}
                      </a>
                    ) : (
                      <span>{pub.title?.[language]}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {staff.length > 0 && (
            <section className={style.department__section}>
              <h2 className={style.department__subheading}>
                {language === 'en' ? 'Staff' : 'Bo‘lim xodimlari'} ({staff.length})
              </h2>
              <ul className={style.staffGrid}>
                {staff.map((member) => (
                  <li key={member.id} className={style.staffGrid__item}>
                    <Link
                      to={language === 'uz' ? `/${deptSlug}/staff/${member.slug}` : `/${language}/${deptSlug}/staff/${member.slug}`}
                      className={style.staffGrid__link}
                    >
                      <div className={style.staffGrid__photo}>
                        {member.photo ? (
                          <img src={member.photo} alt={member.fullName?.[language]} />
                        ) : (
                          <div className={style.staffGrid__photoPlaceholder} />
                        )}
                      </div>
                      <span className={style.staffGrid__name}>{member.fullName?.[language]}</span>
                      <span className={style.staffGrid__position}>{member.position?.[language]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </Container>
    </div>
  );
}
