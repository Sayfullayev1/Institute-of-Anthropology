import React, { useContext } from 'react';
import './category.scss';   

import { LanguageContext } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

// Все страницы отдают сюда "голые" пути (link: '/', link: '/journal' и т.д.),
// без учёта текущего языка — Link ставил их буквально, поэтому клик по
// хлебной крошке на узбекской версии страницы сбрасывал на английскую (её
// URL без префикса), теряя выбранный язык. Английский — без префикса,
// узбекский — с "/uz" (см. ту же логику в LanguageContext.jsx).
function localizeLink(path, language) {
  if (!path || path === '#' || language !== 'uz') return path;
  if (path.startsWith('/uz')) return path;
  return path === '/' ? '/uz' : `/uz${path}`;
}

export default function Category({ data }) {
  const { language } = useContext(LanguageContext); // Получаем язык из контекста

//   const data = [
//     {
//       text: {
//         uz: "Bosh sahifa",
//         ru: "Главная",
//         en: "Main",
//       },
//       link: "/",
//     },
//     {
//       text: {
//         uz: "Aloqa",
//         ru: "Контакты",
//         en: "Contacts",
//       },
//       link: "/",
//     },
//   ];

  return (
    <div className="category">

        <div className='category__container'>

            <h1 className="category__title">{data[data.length - 1].text[language]}</h1>

            <ul className="category__list">
              {data.map((item, index) => {
                if (index !== data.length - 1) {
                  return (
                    <li className='category__list__item'  key={index}>

                      <Link className='category__list__item__link' to={localizeLink(item.link, language)}>{item.text[language]}</Link>

                      <span className='category__list__item__arrowWrapper'>
                          <i className="fa fa-chevron-right"></i>  
                      </span> 

                    </li>
                  );
                } else {
                  return (
                      <li className='category__list__item'  key={index}>
                        <h1 className='category__list__item__text'>
                          {item.text[language]}
                        </h1>
                      </li>
                  );
                }
              })}
            </ul>
          
        </div>

    </div>
  );
}
