import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Проект — чистый CSR (Create React App) без единого корневого App.jsx
// (рендер собран прямо в src/index.js), поэтому инициализация вынесена
// сюда, на уровень модуля — выполняется один раз при первой загрузке
// бандла, как и просили сделать в корневом компоненте.
ReactGA.initialize('G-DYFRTY6964');

// gtag.js в public/index.html сам считает только первую загрузку страницы —
// это SPA, дальнейшие переходы между "страницами" происходят без
// перезагрузки браузера, поэтому просмотр каждой новой страницы нужно
// отправлять вручную при каждой смене маршрута.
export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null;
}
