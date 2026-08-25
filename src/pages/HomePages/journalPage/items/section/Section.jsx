import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';
import Pagination from '@/components/pagination/Pagination';


import journalCover from '@/public/images/journal/Uzbek_Anthropological_Journal_Cover_Vector-преобразовано-из-svg.png';
import materialCultureCover from '@/public/images/journal/material-culture-cover.jpg';

const ARCHIVE_PAGE_SIZE = 20;

// TODO: имитационный (заглушечный) текст для первого журнала — заменить на реальные данные, когда будут готовы.
const journals = [
  {
    title: { uz: "Uzbek Anthropological Journal", en: 'Uzbek Anthropological Journal' },
    image: journalCover,
    issn: '2181-0000',
    since: '1998',
    periodicity: { uz: 'Yiliga 4 marta', en: '4 issues per year' },
    description: {
      uz: 'Jurnal fizik antropologiya, etnologiya va madaniy meros muammolari bilan shug‘ullanuvchi olimlar uchun mo‘ljallangan. Nashr 1998-yilda O‘zbekiston Respublikasi Fanlar akademiyasi qoshida ilmiy toʻplam sifatida tashkil etilgan boʻlib, keyinchalik davriy jurnalga aylantirilgan. Jurnalda O‘rta Osiyo xalqlarining antropologik tarkibi, demografik jarayonlar va etnogenez masalalariga bag‘ishlangan original tadqiqotlar, sharhlar va arxiv materiallari chop etiladi.',
      en: 'The journal is intended for scholars working on physical anthropology, ethnology and cultural heritage. Founded in 1998 as a scientific compilation under the Academy of Sciences of the Republic of Uzbekistan, it later became a periodical publication. It features original research, reviews and archival material on the anthropological composition, demographic processes and ethnogenesis of the peoples of Central Asia.',
    },
    indexes: {
      uz: ['OAK ilmiy nashrlar roʻyxati', 'Milliy iqtibos indeksi', 'CentralAsia Research Base'],
      en: ['National list of peer-reviewed journals', 'National citation index', 'CentralAsia Research Base'],
    },
    link: '#',
    linkLabel: { uz: 'Jurnal sahifasiga oʻtish', en: 'Go to journal page' },
    reference: {
      uz: [
        'Mualliflar uchun qoidalar',
        'Taqrizlash (retsenziyalash) tartibi',
        'Nashriyot etikasi qoidalari',
        'Plagiatga qarshi siyosat',
        'Maqola andozasi (shablon fayl)',
      ],
      en: [
        'Guidelines for authors',
        'Peer-review procedure',
        'Publication ethics policy',
        'Anti-plagiarism policy',
        'Article template file',
      ],
    },
  },
  {
    title: { uz: 'O‘ZBEKISTON MODDIY MADANIYATI TARIXI', en: 'THE HISTORY OF MATERIAL CULTURE OF UZBEKISTAN' },
    image: materialCultureCover,
    issn: '2181-0001',
    since: '2005',
    periodicity: { uz: 'Yiliga 2 marta', en: '2 issues per year' },
    description: {
      uz: 'Jurnal O‘zbekiston va butun Markaziy Osiyo hududidagi arxeologik qazishmalar, moddiy madaniyat topilmalari va tarixiy-madaniy meros obyektlarini ilmiy o‘rganishga bag‘ishlangan. 2005-yildan buyon nashr etilib kelinadi va mintaqadagi qadimiy va o‘rta asrlar davri yodgorliklariga oid dala tadqiqotlari natijalarini, shuningdek xalqaro ekspeditsiyalar hisobotlarini e’lon qiladi.',
      en: 'The journal is dedicated to the scholarly study of archaeological excavations, material culture finds and historical-cultural heritage sites across Uzbekistan and wider Central Asia. Published since 2005, it presents field research results on ancient and medieval monuments in the region, as well as reports from international expeditions.',
    },
    indexes: {
      uz: ['OAK ilmiy nashrlar roʻyxati', 'Milliy iqtibos indeksi', 'Eurasian Archaeology Index'],
      en: ['National list of peer-reviewed journals', 'National citation index', 'Eurasian Archaeology Index'],
    },
    // Реальные данные — выпуски журнала, загруженные админом и хранящиеся в R2.
    archiveApiPath: '/api/publications-pages/uzbekistan-history-of-material-culture/list',
    reference: {
      uz: [
        'Mualliflar uchun qoidalar',
        'Taqrizlash (retsenziyalash) tartibi',
        'Nashriyot etikasi qoidalari',
        'Plagiatga qarshi siyosat',
        'Maqola andozasi (shablon fayl)',
      ],
      en: [
        'Guidelines for authors',
        'Peer-review procedure',
        'Publication ethics policy',
        'Anti-plagiarism policy',
        'Article template file',
      ],
    },
  },
];

const TABS = [
  { key: 'main', uz: 'Asosiy maʼlumotlar', en: 'General information' },
  { key: 'archive', uz: 'Nashrlar arxivi', en: 'Issues archive' },
  { key: 'reference', uz: 'Maʼlumot materiallari', en: 'Reference materials' },
];

function ApiArchiveList({ archiveApiPath, language }) {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setResult(null);
    setError(false);

    axios.get(`${getApiUrl()}${archiveApiPath}`, { params: { page, pageSize: ARCHIVE_PAGE_SIZE } })
      .then((response) => {
        if (!cancelled) setResult(response.data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => { cancelled = true; };
  }, [archiveApiPath, page]);

  if (error) {
    return (
      <p className={styles.journalCard__archiveEmpty}>
        {language === 'en' ? 'Failed to load issues' : 'Sonlarni yuklashda xatolik'}
      </p>
    );
  }

  if (result === null) {
    return (
      <p className={styles.journalCard__archiveEmpty}>
        {language === 'en' ? 'Loading...' : 'Yuklanmoqda...'}
      </p>
    );
  }

  if (result.data.length === 0) {
    return (
      <p className={styles.journalCard__archiveEmpty}>
        {language === 'en' ? 'No issues yet' : 'Hozircha sonlar yoʻq'}
      </p>
    );
  }

  return (
    <>
      <ul className={styles.journalCard__apiArchiveList}>
        {result.data.map((item) => (
          <li key={item.id} className={styles.journalCard__apiArchiveItem}>
            <Link to={`/journal/${item.id}`} className={styles.journalCard__apiArchiveLink}>
              <div className={styles.journalCard__apiArchiveCover}>
                {item.coverImage ? (
                  <img src={item.coverImage} alt={item.title[language]} />
                ) : (
                  <div className={styles.journalCard__apiArchiveCoverPlaceholder} />
                )}
              </div>
              <span className={styles.journalCard__apiArchiveTitle}>{item.title[language]}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={result.page}
        totalPages={result.totalPages}
        onPageChange={setPage}
      />
    </>
  );
}

function JournalCard({ data, language }) {
  const [activeTab, setActiveTab] = useState('main');

  // "Nashrlar arxivi" показываем только у журналов, у которых реально есть
  // архив (API-данные или заполненный список) — не рисуем пустую/фейковую кнопку.
  const hasArchive = Boolean(data.archiveApiPath || (data.archive && data.archive.length));
  const tabs = TABS.filter((tab) => tab.key !== 'archive' || hasArchive);

  return (
    <article className={styles.journalCard}>
      <div className={styles.journalCard__titleWrap}>
        <span className={styles.journalCard__titleLine} />
        <h3 className={styles.journalCard__title}>{data.title[language]}</h3>
        <span className={styles.journalCard__titleLine} />
      </div>

      <div className={styles.journalCard__body}>
        <div className={styles.journalCard__side}>
          <div className={styles.journalCard__image}>
            {data.image ? (
              <img src={data.image} alt={data.title[language]} />
            ) : (
              <div className={styles.journalCard__imagePlaceholder} />
            )}
          </div>

          <div className={styles.journalCard__tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={
                  activeTab === tab.key
                    ? `${styles.journalCard__tab} ${styles.journalCard__tabActive}`
                    : styles.journalCard__tab
                }
                onClick={() => setActiveTab(tab.key)}
              >
                {tab[language]}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.journalCard__content}>
          {activeTab === 'main' && (
            <>
              <p className={styles.journalCard__desc}>{data.description[language]}</p>

              <ul className={styles.journalCard__meta}>
                <li><strong>ISSN</strong> {data.issn}</li>
                <li>{language === 'en' ? 'Published since' : 'Nashr etilgan yili'}: {data.since}</li>
                <li>{language === 'en' ? 'Frequency' : 'Davriyligi'}: {data.periodicity[language]}</li>
              </ul>

              <p className={styles.journalCard__indexesLabel}>
                {language === 'en' ? 'The journal is included in the following indexes and databases:' : 'Jurnal quyidagi indeks va bazalarga kiritilgan:'}
              </p>
              <ul className={styles.journalCard__indexes}>
                {data.indexes[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.journalCard__link}
                >
                  {data.linkLabel[language]}
                </a>
              )}
            </>
          )}

          {activeTab === 'archive' && data.archiveApiPath && (
            <ApiArchiveList archiveApiPath={data.archiveApiPath} language={language} />
          )}

          {activeTab === 'archive' && data.archive && (
            <ul className={styles.journalCard__archiveList}>
              {data.archive.map((row) => (
                <li key={row.year}>
                  <span className={styles.journalCard__archiveYear}>{row.year}</span>
                  <span className={styles.journalCard__archiveIssues}>
                    {row.issues.map((issue, i) => (
                      <React.Fragment key={issue}>
                        {i > 0 && <span className={styles.journalCard__archiveSep}>·</span>}
                        <button type="button" className={styles.journalCard__archiveIssue}>{issue}</button>
                      </React.Fragment>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'reference' && (
            <ul className={styles.journalCard__indexes}>
              {data.reference[language].map((item) => (
                <li key={item}>
                  <button type="button" className={styles.journalCard__referenceLink}>{item}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Section() {
  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.container}>
      <div className={styles.journalsGrid}>
        <JournalCard data={journals[0]} language={language} />
        <div className={styles.divider} />
        <JournalCard data={journals[1]} language={language} />
      </div>
    </section>
  );
}
