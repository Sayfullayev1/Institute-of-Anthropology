import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const COUNTER_ID = 112038790;

// Проект — чистый CSR (Create React App) без единого корневого App.jsx
// (рендер собран прямо в src/index.js), поэтому компонент рендерится
// там же, внутри <BrowserRouter> — только там доступен useLocation.
//
// Счётчик tag.js (см. public/index.html) сам считает только первую
// загрузку страницы — переходы между "страницами" в SPA происходят без
// перезагрузки браузера, поэтому каждый переход нужно отправлять вручную.
export default function YandexMetrika() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.ym === 'function') {
      window.ym(COUNTER_ID, 'hit', location.pathname);
    }
  }, [location]);

  return null;
}
