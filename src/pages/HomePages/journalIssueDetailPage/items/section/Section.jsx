import React from 'react';
import { Link } from 'react-router-dom';
import style from './section.module.scss';

const JOURNAL_TITLE = { uz: 'O‘ZBEKISTON MODDIY MADANIYATI TARIXI', en: 'THE HISTORY OF MATERIAL CULTURE OF UZBEKISTAN' };

function PdfIcon() {
  return (
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
  );
}

export default function Section({ item, notFound, language }) {
  if (notFound) {
    return (
      <p className={style.notFound}>
        {language === 'en' ? 'Issue not found' : 'Son topilmadi'}
      </p>
    );
  }

  if (!item) {
    return (
      <p className={style.loading}>
        {language === 'en' ? 'Loading...' : 'Yuklanmoqda...'}
      </p>
    );
  }

  return (
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
          <PdfIcon />
          {language === 'en' ? 'Open PDF' : 'PDF ni ochish'}
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
                <Link
                  to={language === 'en' ? '/journal' : `/${language}/journal`}
                  className={style.issue__seriesLink}
                >
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
  );
}

export { JOURNAL_TITLE };
