import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarComponent.scss';
import { LanguageContext } from '../../../context/LanguageContext';

import menuData from '../../../pages/PagesData/siteMapeData/SiteMapeData.json'; // Предполагаемый путь к вашему JSON-файлу

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
                    <Link
                      className='navbar__item__link'
                      to={language === 'uz' ? item.link : `/${language}${item.link}`}
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
                    </Link>
                    
                    {item?.items && item.items.length > 0 && (
                      <ul className={`navbar__submenu ${openSubmenuIndex === index ? 'navbar__submenu--visible' : ''}`}>
                        {item?.items.map((subItem, subIndex) => {

                          return(
                            <li className={`navbar__submenu__item`} key={subIndex}>
                              <Link
                                className='navbar__submenu__link'
                                to={language === 'uz' ? subItem.link : `/${language}${subItem.link}`}
                              >
                                {subItem.Name[language]}
                              </Link>
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
