import React, { useContext, useEffect, useRef, useState } from 'react';
import './searchComponent.scss';
import { LanguageContext } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';

export default function SearchComponent() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    const inputRef = useRef(null);
    const containerRef = useRef(null);

    // Закрытие при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const goToSearchPage = () => {
        const query = searchQuery.trim();
        if (!query) return;
        const basePath = language === 'en' ? '/search' : `/${language}/search`;
        navigate(`${basePath}?q=${encodeURIComponent(query)}`);
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    const handleButtonClick = () => {
        if (!isSearchOpen) {
            setIsSearchOpen(true);
            setTimeout(() => inputRef.current?.focus(), 300);
            return;
        }
        goToSearchPage();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        goToSearchPage();
    };

    return (
        <div className={`search-component ${isSearchOpen ? 'is-open' : ''}`} ref={containerRef}>
            <form className="search-component__inner" onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    className="search-component__input"
                    placeholder={language === 'uz' ? 'Qidiruv...' : 'Search...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" className="search-component__button" onClick={handleButtonClick}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
}
