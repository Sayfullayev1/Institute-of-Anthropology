import React, { useEffect, useState, useContext, useRef } from 'react';
import './menu.scss';
import { Link, useNavigate } from 'react-router-dom'; // Добавил useNavigate для перехода к результатам
import axios from 'axios';
import { LanguageContext } from '../../../../../context/LanguageContext';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import getApiUrl from '../../../../../api/api'; // Импортируем твой API url
import menuData from '../../../../../pages/PagesData/siteMapeData/SiteMapeData.json';

function Menu({ Bedeutung }) {
    const [statusClass, setStatusClass] = useState("");
    const isFirstRender = useRef(true);
    const { language } = useContext(LanguageContext);
    const [openIndex, setOpenIndex] = useState(null);
    const [localSearch, setLocalSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]); // Для хранения результатов
    const [isSearching, setIsSearching] = useState(false);

    const navigate = useNavigate();
    const searchTimeout = useRef(null);

    useEffect(() => {
        if (!isFirstRender.current) {
            setStatusClass(Bedeutung ? "menu-item__active" : "menu-item__inactive");
        }
        isFirstRender.current = false;
    }, [Bedeutung]);

    // Функция поиска через Axios
    const handleSearchRequest = (query) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        const api = getApiUrl();
        setIsSearching(true);

        axios
            .get(`${api}/api/search/${language}?q=${encodeURIComponent(query)}`)
            .then((res) => {
                setSearchResults((res.data.results || []).slice(0, 5));
            })
            .catch((err) => console.error("Search Error:", err))
            .finally(() => setIsSearching(false));
    };

    // Поиск при вводе (Debounce)
    useEffect(() => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => {
            handleSearchRequest(localSearch);
        }, 500); // Задержка 0.5 сек

        return () => clearTimeout(searchTimeout.current);
    }, [localSearch]);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <nav className={`menu-item ${statusClass}`}>
            <div className="menu-item__top-row">
                <LanguageSwitcher />
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

                {/* Выпадающий список результатов прямо в меню */}
                {localSearch && (
                    <div className="menu-item__search-results">
                        {isSearching ? (
                            <div className="search-status">...</div>
                        ) : searchResults.length > 0 ? (
                            <ul>
                                {searchResults.map((result, i) => (
                                    <li key={i}>
                                        <Link to={result.pageUrl} onClick={() => setLocalSearch("")}>
                                            {result.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
                                    {section.items.map((item, sIdx) => (
                                        <li key={sIdx}>
                                            <Link to={item.link} className="menu-item__link">
                                                {item.Name[language]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
