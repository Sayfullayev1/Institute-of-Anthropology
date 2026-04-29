import React, { useContext, useState } from 'react';
import './headerComponent.scss';

import { LanguageContext } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

import logoImage from '../../../public/images/logoImage/BLACK-SQUARE-uncircled-squared.jpg';

import Menu from './items/menu/Menu';

import LanguageSwitcher from './items/languageSwitcher/LanguageSwitcher';
import SearchComponent from './items/searchComponent/SearchComponent';
// import Topbar from './items/topbar/Topbar';
// import Info from './items/info/Info';


export default function HeaderComponent() {
  const { language } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);


  const toggleMenu = () => {
    setIsDisabled(true);
    setMenuOpen(!menuOpen);

    const element = document.querySelector('.container'); // Найти элемент
    if (element) {
      element.style.overflow = 'hidden';
    }

    // Удаление скролла страницы
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    document.documentElement.style.overflow = menuOpen ? 'auto' : 'hidden';

    setTimeout(() => {
      setIsDisabled(false); // Включаем кнопку через 1 секунду
    }, 1000);
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

      {/* <div className='header__topbar_wrapper'>
        <Topbar/>
      </div> */}

      <div className='header_wrapper'>

        <div className='header__container'>
          <div className='header__logo'>
            <Link to={`/${language === "uz" ? "" : language}`}>
              <img src={logoImage} alt="Логотип" />
            </Link>
          </div>

          <h1 className='header__title'>
            {LogoTitle[language].title}
            <span className='header__subtitle'>{LogoTitle[language].subtitle}</span>
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
          {/* <div> */}
            <SearchComponent/>
          {/* </div>
          <div> */}
            <LanguageSwitcher/>
          {/* </div> */}
        </div> 

        {/* <div className='header__menu-wrapper'> */}
          {<Menu Bedeutung={ menuOpen } />}
        {/* </div> */}

        

      </div>
      
    </header>
  );
}