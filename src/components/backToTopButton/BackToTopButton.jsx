import { useEffect, useState, useCallback } from 'react';
import styles from './backToTopButton.module.scss';

const SCROLL_THRESHOLD = 400;

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback((event) => {
    // Кнопка получает фокус по клику; если она ещё в фокусе, когда scroll
    // опустится ниже порога и React скроет её (aria-hidden/tabIndex=-1),
    // браузер снимет фокус с уже скрытого элемента и оборвёт анимацию
    // плавного скролла на середине пути. Снимаем фокус заранее, до старта скролла.
    event.currentTarget.blur();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      type="button"
      className={visible ? `${styles.button} ${styles.visible}` : styles.button}
      onClick={scrollToTop}
      aria-label="Yuqoriga qaytish"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          d="M6.7 14.3a1 1 0 0 1 0-1.4l4.6-4.6a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1-1.4 1.4L12 10.4l-3.9 3.9a1 1 0 0 1-1.4 0Z"
          fill="currentColor"
        />
        <path
          d="M6.7 19.3a1 1 0 0 1 0-1.4l4.6-4.6a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1-1.4 1.4L12 15.4l-3.9 3.9a1 1 0 0 1-1.4 0Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    </button>
  );
}
