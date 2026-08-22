import React, { useContext, useState } from 'react';
import './headerComponent.scss';
import { LanguageContext } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import logoImage from '@/public/images/logoImage/BLACK-SQUARE-uncircled-squared.jpg';
import Menu from './items/menu/Menu';
import LanguageSwitcher from './items/languageSwitcher/LanguageSwitcher';
import SearchComponent from './items/searchComponent/SearchComponent';

export default function HeaderComponent() {
    const { language } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        const nextState = !menuOpen;
        setMenuOpen(nextState);

        // Управление скроллом
        const overflowStyle = nextState ? 'hidden' : 'auto';
        document.body.style.overflow = overflowStyle;
        document.documentElement.style.overflow = overflowStyle;
    };

    const LogoTitle = {
        uz: { 
            title: "Antropologiya instituti", 
            subtitle: "O'zbekiston Respublikasi Fanlar akademiyasi" 
        },
        en: { 
            title: "Institute of Anthropology", 
            subtitle: "Academy of Sciences of the Republic of Uzbekistan", 
        },
    };

    return (
        <header className='header'>
            <div className='header_wrapper'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <Link to={`/${language === "uz" ? "" : language}`}>
                            <img src={logoImage} alt="Logo" />
                        </Link>
                    </div>
                    <h1 className='header__title'>
                        <span className='header__subtitle'>{LogoTitle[language].subtitle}</span>
                        {LogoTitle[language].title}
                    </h1>
                </div>

                <div className='menu-button_wrapper'>
                    <button 
                        className={`menu-button ${menuOpen ? 'is-open' : ''}`} 
                        onClick={toggleMenu} 
                        aria-label="Menu"
                    >
                        <span className="menu-button__line"></span>
                        <span className="menu-button__line"></span>
                        <span className="menu-button__line"></span>
                    </button>
                </div>

                <div className='header__info-wrapper'>
                    <SearchComponent />
                    <LanguageSwitcher />
                </div>

                {/* Передаем функцию закрытия в меню */}
                <Menu Bedeutung={menuOpen} closeMenu={() => {
                    setMenuOpen(false);
                    document.body.style.overflow = 'auto';
                }} />
            </div>
        </header>
    );
}
