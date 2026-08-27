import React, { useContext, useEffect, useRef } from 'react';
import './card.scss';
import { LanguageContext } from '@/context/LanguageContext';



const loadYandexMaps = (onLoad, language) => {
//   if (window.ymaps && window.ymaps.Map) {
//     // Если API уже загружен
//     onLoad();
//   } else {
    // Загружаем API
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=${language}_RU`; // Динамический язык
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(onLoad);
      }
    };
    document.body.appendChild(script);
//   }
}


export default function Card() {
  const { language } = useContext(LanguageContext); // Получаем язык из контекста
  const mapRef = useRef(null); // Реф для хранения карты

  useEffect(() => {
    const initMap = () => {
      if (!window.ymaps || !window.ymaps.Map) {
        console.error('Yandex Maps API не загружен.');
        return;
      }

      // Уничтожаем предыдущую карту, если она существует
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }

      // Создаём новую карту
      const map = new window.ymaps.Map('contacts-page__map', {
        center: [41.337893, 69.337639], // Координаты для Milliy arxeologiya markazi
        zoom: 17,
        controls: ['zoomControl', 'fullscreenControl'], // Указываем только нужные элементы управления
      });

      map.behaviors.disable('scrollZoom'); // Отключаем масштабирование колесом мыши

      // Добавление метки
      const placemark = new window.ymaps.Placemark(
        [41.337893, 69.337639], // Координаты метки
        {
          hintContent: language === 'ru' ? 'Национальный археологический центр' : 'Milliy arxeologiya markazi',
          balloonContent: language === 'ru' ? 'Национальный археологический центр' : 'Milliy arxeologiya markazi',
        },
        {
          iconColor: 'red',
        }
      );

      map.geoObjects.add(placemark);
      mapRef.current = map; // Сохраняем ссылку на карту
    };

    loadYandexMaps(initMap, language);
  }, [language]); // Перезапуск при изменении языка

  return (
    <div className="contacts-page__card">
      <div id="contacts-page__map" className="contacts-page__card__map"></div>
    </div>
  );
}
