import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import style from './journalIssueDetailPage.module.scss';
import Category from '../../../components/category/Category';
import Container from '../../../components/container/Container';
import { LanguageContext } from '../../../context/LanguageContext';
import getApiUrl from '../../../api/api';

const JOURNAL_TITLE = { uz: 'O‘ZBEKISTON MODDIY MADANIYATI TARIXI', en: 'THE HISTORY OF MATERIAL CULTURE OF UZBEKISTAN' };

export default function JournalIssueDetailPage() {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);

  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setItem(null);
    setNotFound(false);

    axios.get(`${getApiUrl()}/api/publications-pages/uzbekistan-history-of-material-culture/item/${id}`)
      .then((response) => setItem(response.data.data))
      .catch(() => setNotFound(true));
  }, [id]);

  const menuData = [
    { text: { uz: 'Bosh sahifa', en: 'Home' }, link: '/' },
    { text: JOURNAL_TITLE, link: '/journal' },
    { text: { uz: item ? item.title[language] : '...', en: item ? item.title[language] : '...' }, link: '#' },
  ];

  if (notFound) {
    return (
      <div className={style.container}>
        <Category data={menuData} />
        <Container>
          <p className={style.notFound}>
            {language === 'en' ? 'Issue not found' : 'Son topilmadi'}
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
          <div className={style.issue}>
            <div className={style.issue__cover}>
              {item.coverImage ? (
                <img src={item.coverImage} alt={item.title[language]} />
              ) : (
                <div className={style.issue__coverPlaceholder} />
              )}
            </div>

            <div className={style.issue__info}>
              <h1 className={style.issue__title}>{item.title[language]}</h1>

              <h2 className={style.issue__subheading}>
                {language === 'en' ? 'Files and links' : 'Fayllar va havolalar'}
              </h2>
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={style.issue__pdfLink}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path
                    d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M14 2v5h5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <text x="12" y="17" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor">PDF</text>
                </svg>
                {language === 'en' ? 'Open PDF' : "PDF ni ochish"}
              </a>

              <h2 className={style.issue__subheading}>
                {language === 'en' ? 'General information' : 'Asosiy maʼlumotlar'}
              </h2>
              <table className={style.issue__table}>
                <tbody>
                  <tr>
                    <td>{language === 'en' ? 'Authors' : 'Mualliflar'}</td>
                    <td>{item.authors?.[language] || ''}</td>
                  </tr>
                  <tr>
                    <td>{language === 'en' ? 'Title' : 'Nomi'}</td>
                    <td>{item.title[language]}</td>
                  </tr>
                  <tr>
                    <td>{language === 'en' ? 'Series/journal' : 'Seriya/jurnal'}</td>
                    <td>
                      <Link to={'/journal'} className={style.issue__seriesLink}>
                        {JOURNAL_TITLE[language]}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>{language === 'en' ? 'Issue' : 'Soni'}</td>
                    <td>{item.issueNumber ? `№${item.issueNumber}` : ''}</td>
                  </tr>
                  <tr>
                    <td>{language === 'en' ? 'Year' : 'Yili'}</td>
                    <td>{item.year || ''}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
