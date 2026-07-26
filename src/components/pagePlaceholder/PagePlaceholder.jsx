import React, { useContext } from 'react';
import './pagePlaceholder.scss';
import { LanguageContext } from '../../context/LanguageContext';

export default function PagePlaceholder() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="pagePlaceholder">
      <i className="fa fa-wrench pagePlaceholder__icon"></i>

      <h2 className="pagePlaceholder__title">
        {language === 'uz' ? 'Sahifa ishlab chiqilmoqda' : 'Page is under development'}
      </h2>

      <p className="pagePlaceholder__text">
        {language === 'uz'
          ? 'Ushbu sahifa hozircha to‘ldirilmagan. Tez orada ma’lumotlar qo‘shiladi.'
          : 'This page has not been filled in yet. Content will be added soon.'}
      </p>
    </div>
  );
}
