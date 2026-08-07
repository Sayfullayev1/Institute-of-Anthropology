import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';
import axios from 'axios';

export default function Section() {
  const { language } = useContext(LanguageContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';

  const [inputValue, setInputValue] = useState(query);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setInputValue(query);

    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const api = getApiUrl();
    setIsLoading(true);
    axios
      .get(`${api}/api/search`, { params: { q: query } })
      .then((response) => {
        setResults(response.data.results || []);
      })
      .catch(() => setResults([]))
      .finally(() => {
        setIsLoading(false);
        setHasSearched(true);
      });
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const basePath = language === 'uz' ? '/search' : `/${language}/search`;
    navigate(`${basePath}?q=${encodeURIComponent(trimmed)}`);
  };

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  function buildLink(link) {
    return language === 'uz' ? link : `/${language}${link}`;
  }

  return (
    <section className={styles.container}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={language === 'uz' ? 'Qidiruv...' : 'Search...'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      {query.trim() && !isLoading && (
        <p className={styles.resultsInfo}>
          {language === 'uz'
            ? `«${query}» bo'yicha ${results.length} ta natija topildi`
            : `${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`}
        </p>
      )}

      {isLoading ? (
        <div className={styles.loading}>
          {language === 'uz' ? 'Yuklanmoqda...' : 'Loading...'}
        </div>
      ) : hasSearched && results.length === 0 ? (
        <div className={styles.empty}>
          {language === 'uz' ? 'Hech narsa topilmadi.' : 'Nothing found.'}
        </div>
      ) : (
        <div className={styles.cardContainer}>
          {results.map((item, index) => (
            <Link key={index} to={buildLink(item.link)} className={styles.card}>
              {item.image && (
                <div className={styles.card__imageWrapper}>
                  <img src={item.image} alt="" className={styles.card__image} />
                </div>
              )}
              <p className={styles.card__date}>
                <i className="fa-regular fa-calendar-days"></i> {formatDate(item.date)}
              </p>
              <h2 className={styles.card__title}>{item.title?.[language]}</h2>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
