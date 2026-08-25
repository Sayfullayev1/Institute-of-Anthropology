import React, { useEffect, useState, useContext, useRef, useCallback } from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LanguageContext } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/layoutsComponents/headerComponent/items/languageSwitcher/LanguageSwitcher';
import getApiUrl from '@/api/api';
import menuData from '@/pages/PagesData/siteMapeData/SiteMapeData.json';

const isExternalLink = (link) => /^https?:\/\//.test(link || '');

// react-router <Link to="https://..."> не открывает внешние ссылки как
// внешние — трактует to как внутренний путь SPA. Для внешних (например,
// WoS/Scopus → t.me/anthropubhub) рендерим обычный <a target="_blank">.
function SmartLink({ to, className, onClick, children }) {
  if (isExternalLink(to)) {
    return (
      <a href={to} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function Menu({ Bedeutung, closeMenu }) {
  const [statusClass, setStatusClass] = useState("");
  const isFirstRender = useRef(true);
  const { language } = useContext(LanguageContext);
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const [localSearch, setLocalSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeout = useRef(null);

  useEffect(() => {
    if (!isFirstRender.current) {
      setStatusClass(Bedeutung ? "menu-item__active" : "menu-item__inactive");
    }
    isFirstRender.current = false;
  }, [Bedeutung]);

  const handleSearchRequest = useCallback((query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const api = getApiUrl();
    setIsSearching(true);
    // Бэкенд отдаёт только /api/search?q=... (без языка в пути — ищет по
    // uz и en заголовкам сразу). /api/search/${language} — несуществующий
    // роут, из-за него мобильный поиск всегда получал 404 и пустой список,
    // хотя десктопный (SearchPage) всегда ходил на правильный путь.
    axios
      .get(`${api}/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => {
        setSearchResults((res.data.results || []).slice(0, 3));
      })
      .catch((err) => console.error("Search Error:", err))
      .finally(() => setIsSearching(false));
  }, []);

  // Эффект для Debounce поиска
  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    
    searchTimeout.current = setTimeout(() => {
      handleSearchRequest(localSearch);
    }, 500);

    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };
  }, [localSearch, handleSearchRequest]); // Добавили handleSearchRequest сюда

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSubAccordion = (key) => {
    setOpenSubIndex((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Клик по размытой/затемнённой области слева от меню закрывает его.
          Элемент всегда в DOM (не условный рендер) — иначе не на чем было
          бы анимировать прозрачность при закрытии, только резкое исчезновение. */}
      <div
        className={`menu-backdrop ${Bedeutung ? 'menu-backdrop--show' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    <nav className={`menu-item ${statusClass}`}>
      <div className="menu-item__top-row">
        <LanguageSwitcher />
        {/* Отдельная кнопка закрытия — не гамбургер (тот при открытом меню
            скрыт, см. .menu-button.is-open), а своя, выезжающая вместе с
            панелью, т.к. она часть той же <nav>. */}
        <button
          type="button"
          className="menu-item__close"
          onClick={closeMenu}
          aria-label={language === 'uz' ? 'Menyuni yopish' : 'Close menu'}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="menu-item__search-row">
        <div className="menu-item__search-field">
          <input
            type="text"
            placeholder={language === 'uz' ? 'Qidiruv...' : 'Search...'}
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <button onClick={() => handleSearchRequest(localSearch)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        
        {localSearch && (
          <div className="menu-item__search-results">
            {isSearching ? (
              <div className="search-status">...</div>
            ) : searchResults.length > 0 ? (
              <>
                <ul>
                  {searchResults.map((result, i) => (
                    <li key={i}>
                      {/* API отдаёт link/title, а не pageUrl/text — из-за неверного
                          URL запроса (см. выше) это никогда не доходило до рендера
                          с непустым списком, поэтому несовпадение имён полей
                          оставалось незамеченным. */}
                      <Link
                        to={language === 'uz' ? result.link : `/${language}${result.link}`}
                        onClick={() => { setLocalSearch(""); closeMenu(); }}
                      >
                        {result.title?.[language]}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Показываем только топ-3 в самом меню (не длинный список) — за
                    полным результатом ведём на /search с тем же текстом, уже
                    набитым в поисковую строку той страницы. */}
                <Link
                  className="menu-item__search-more"
                  to={
                    language === 'uz'
                      ? `/search?q=${encodeURIComponent(localSearch)}`
                      : `/${language}/search?q=${encodeURIComponent(localSearch)}`
                  }
                  onClick={() => { setLocalSearch(""); closeMenu(); }}
                >
                  {language === 'uz' ? 'Batafsil ko‘rish' : 'See more results'}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </>
            ) : (
              <div className="search-status">
                {language === 'uz' ? 'Hech narsa topilmadi' : 'No results found'}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="menu-item__content">
        <ul className="menu-item__list">
          {menuData.map((section, idx) => (
            <li key={idx} className="menu-item__section">
              <div
                className={`menu-item__title ${openIndex === idx ? 'is-open' : ''}`}
                onClick={() => toggleAccordion(idx)}
              >
                <span>{section.Name[language]}</span>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div className={`menu-item__sublist-wrapper ${openIndex === idx ? 'show' : ''}`}>
                <ul className="menu-item__sublist">
                  {section.items.map((item, sIdx) => {
                    const hasChildren = item.items && item.items.length > 0;
                    const subKey = `${idx}-${sIdx}`;

                    if (hasChildren) {
                      return (
                        <li key={sIdx} className="menu-item__subsection">
                          <div
                            className={`menu-item__subtitle ${openSubIndex === subKey ? 'is-open' : ''}`}
                            onClick={() => toggleSubAccordion(subKey)}
                          >
                            <span>{item.Name[language]}</span>
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                          <div className={`menu-item__subsublist-wrapper ${openSubIndex === subKey ? 'show' : ''}`}>
                            <ul className="menu-item__subsublist">
                              {item.items.map((child, cIdx) => (
                                <li key={cIdx}>
                                  <SmartLink to={child.link} className="menu-item__link" onClick={closeMenu}>
                                    {child.Name[language]}
                                  </SmartLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      );
                    }

                    return (
                      <li key={sIdx}>
                        <SmartLink to={item.link} className="menu-item__link" onClick={closeMenu}>
                          {item.Name[language]}
                        </SmartLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Menu;
