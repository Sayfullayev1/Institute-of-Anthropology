import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarComponent.scss';
import { LanguageContext } from '@/context/LanguageContext';

import menuData from '@/pages/PagesData/siteMapeData/SiteMapeData.json'; // Предполагаемый путь к вашему JSON-файлу

const isExternalLink = (link) => /^https?:\/\//.test(link || '');

// react-router <Link to="https://..."> не открывает внешние ссылки — он
// трактует to как внутренний путь SPA (для не-uz языков вообще склеил бы
// "/en" + "https://..." в мусор). Внешние ссылки (например, WoS/Scopus →
// t.me/anthropubhub) должны рендериться обычным <a target="_blank">.
function SmartLink({ to, language, className, onClick, children }) {
  if (isExternalLink(to)) {
    return (
      <a href={to} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link
      className={className}
      to={language === 'en' ? to : `/${language}${to}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function NavbarComponent() {
  const { language } = useContext(LanguageContext);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null); // Состояние для управления открытием подменю

 

 
  let data = menuData
    

    const handleSubmenuClick = (index) => {
      setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index)); // Переключаем состояние
    };
    
    

  return (
    <nav className="navbar">

      <div className='navbar__container'>
      
        <div className='navbar_wrap'>
          <ul className='navbar__list'>
            {
              data?.map((item, index) => {
                return (
                  <li
                    className={`navbar__item ${openSubmenuIndex === index ? 'navbar__item--open' : ''}`}
                    key={index}
                    onMouseEnter={() => setOpenSubmenuIndex(index)} // Для hover
                    onMouseLeave={() => setOpenSubmenuIndex(null)} // Закрытие при уходе мыши
                  >
                    <SmartLink
                      className='navbar__item__link'
                      to={item.link}
                      language={language}
                      onClick={(e) => {
                        if (item.items && item.items.length > 0) {
                          e.preventDefault(); // Предотвращаем переход только если есть подменю
                          handleSubmenuClick(index); // Для клика
                        }
                      }}
                    >
                      {item.Name[language].split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < item.Name[language].split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </SmartLink>
                    
                    {item?.items && item.items.length > 0 && (
                      <ul className={`navbar__submenu ${openSubmenuIndex === index ? 'navbar__submenu--visible' : ''}`}>
                        {item?.items.map((subItem, subIndex) => {

                          const hasChildren = subItem.items && subItem.items.length > 0;

                          if (hasChildren) {
                            return (
                              <li className='navbar__submenu__item navbar__submenu__extended-item' key={subIndex}>
                                <SmartLink
                                  className='navbar__submenu__link'
                                  to={subItem.link}
                                  language={language}
                                  onClick={(e) => {
                                    if (!subItem.link) e.preventDefault();
                                  }}
                                >
                                  {subItem.Name[language]}
                                </SmartLink>
                                <span className='navbar__submenu__extended-item__arrow'>
                                  <i className="fa-solid fa-chevron-right"></i>
                                </span>

                                <ul className='navbar__extendedItem__list'>
                                  {subItem.items.map((childItem, childIndex) => (
                                    <li className='navbar__extendedItem__list__item' key={childIndex}>
                                      <SmartLink
                                        className='navbar__submenu__link'
                                        to={childItem.link}
                                        language={language}
                                      >
                                        {childItem.Name[language]}
                                      </SmartLink>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            )
                          }

                          return(
                            <li className={`navbar__submenu__item`} key={subIndex}>
                              <SmartLink
                                className='navbar__submenu__link'
                                to={subItem.link}
                                language={language}
                              >
                                {subItem.Name[language]}
                              </SmartLink>
                            </li>

                          )

                        })}

                      </ul>
                    )}
                  </li>
                )
              })
            }
          </ul>
        </div>
        

      </div>

    </nav>
  );
}
