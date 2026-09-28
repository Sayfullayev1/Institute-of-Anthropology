import React from 'react';

// Иконка "пользователь" — подставляется вместо фото сотрудника, если фото не загружено.
// Цвет берётся из currentColor, размер — из className родителя.
export default function UserPlaceholder({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="8" r="4.2" fill="currentColor" />
      <path d="M3.5 21.5c0-4.9 3.8-8 8.5-8s8.5 3.1 8.5 8z" fill="currentColor" />
    </svg>
  );
}
