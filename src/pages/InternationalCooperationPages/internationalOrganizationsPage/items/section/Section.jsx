import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';
import turkicAcademyLogo from '@/public/images/internationalOrganizations/turkic-academy-logo.png';

// ВРЕМЕННО: захардкожено, как и на /international-meetings и
// /joint-publications — отдельного API/админки для этого раздела пока нет.
const ORGANIZATIONS = [
  {
    logo: turkicAcademyLogo,
    name: { uz: 'Xalqaro Turk Akademiyasi', en: 'International Turkic Academy' },
    country: { uz: 'Qozog‘iston', en: 'Kazakhstan' },
    agreement: { uz: 'Ilmiy hamkorlik bo‘yicha memorandum', en: 'Memorandum on Scientific Cooperation' },
    years: 3,
  },
];

export default function Section() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="international-organizations-page__section">
      <ul className="international-organizations-page__list">
        {ORGANIZATIONS.map((org) => (
          <li className="international-organizations-page__item" key={org.name.en}>
            <div className="international-organizations-page__logo">
              <img src={org.logo} alt={org.name[language]} />
            </div>

            <div className="international-organizations-page__body">
              <h3 className="international-organizations-page__name">{org.name[language]}</h3>
              <p className="international-organizations-page__meta">
                {org.country[language]}
                {' · '}
                {org.agreement[language]}
                {' · '}
                {language === 'en' ? `${org.years} years` : `${org.years} yilga tuzilgan`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
