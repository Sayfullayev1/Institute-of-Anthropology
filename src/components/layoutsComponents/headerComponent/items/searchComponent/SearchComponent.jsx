import React, { useContext, useEffect, useState, useRef } from 'react';
import './searchComponent.scss';
// Исправленные пути (3 уровня вверх до src)
import { LanguageContext } from '../../../../../context/LanguageContext';
import getApiUrl from '../../../../../api/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SearchComponent() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { language } = useContext(LanguageContext);
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const inputRef = useRef(null);
    const searchTimeout = useRef(null);

    const handleSearchToggle = () => {
        setIsSearchOpen((prev) => {
            const newState = !prev;
            if (newState) {
                // Фокус на инпут при открытии
                setTimeout(() => inputRef.current?.focus(), 300);
            } else {
                setSearchQuery('');
                setResults([]);
            }
            return newState;
        });
    };

    // Закрытие при клике вне компонента
    const containerRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }
        const api = getApiUrl();
        if (searchTimeout.current) clearTimeout(searchTimeout.current);

        searchTimeout.current = setTimeout(() => {
            setIsLoading(true);
            axios
                .get(`${api}/api/search/${language}?q=${encodeURIComponent(searchQuery)}`)
                .then((response) => {
                    setResults((response.data.results || []).slice(0, 5));
                })
                .catch(() => setResults([]))
                .finally(() => setIsLoading(false));
        }, 300); // Оптимальный debounce

        return () => clearTimeout(searchTimeout.current);
    }, [searchQuery, language]);

    return (
        <div className={`search-component ${isSearchOpen ? 'is-open' : ''}`} ref={containerRef}>
            <div className="search-component__inner">
                <input
                    ref={inputRef}
                    type="text"
                    className="search-component__input"
                    placeholder={language === 'uz' ? 'Qidiruv...' : 'Search...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-component__button" onClick={handleSearchToggle}>
                    <i className={`fa-solid ${isSearchOpen ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
                </button>
            </div>

            {isSearchOpen && searchQuery && (
                <div className="search-component__results">
                    {isLoading ? (
                        <div className="search-component__loading">...</div>
                    ) : results.length > 0 ? (
                        <ul>
                            {results.map((item, idx) => (
                                <li key={idx}>
                                    <Link to={item.pageUrl} onClick={() => setIsSearchOpen(false)}>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="search-component__no-results">
                             {language === 'uz' ? 'Topilmadi' : 'Nothing found'}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
