import React from 'react';
import styles from './pagination.module.scss';
import { getPaginationRange } from '@/utils/paginationRange';

// Универсальный компонент пагинации: квадратные кнопки-номера страниц,
// с многоточиями, когда страниц становится слишком много.
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const range = getPaginationRange(currentPage, totalPages);

  const goTo = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        type="button"
        className={styles.pagination__arrow}
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {range.map((item) =>
        typeof item === 'number' ? (
          <button
            key={item}
            type="button"
            className={
              item === currentPage
                ? `${styles.pagination__page} ${styles.pagination__pageActive}`
                : styles.pagination__page
            }
            onClick={() => goTo(item)}
            aria-current={item === currentPage ? 'page' : undefined}
          >
            {item}
          </button>
        ) : (
          <span key={item} className={styles.pagination__ellipsis}>…</span>
        )
      )}

      <button
        type="button"
        className={styles.pagination__arrow}
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
