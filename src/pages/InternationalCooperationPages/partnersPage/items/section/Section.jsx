import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';

// Флаги — тот же источник и формат, что уже используется в LanguageSwitcher
// (flagpedia.net, ISO-коды стран).
const flagUrl = (code) => `https://flagpedia.net/data/flags/w580/${code}.webp`;

const AGREEMENT_TYPE = {
  mou: { uz: 'Kelishuv memorandumi', en: 'Memorandum of Understanding' },
  cooperation: { uz: 'Hamkorlik shartnomasi', en: 'Cooperation Agreement' },
  scientificMou: { uz: 'Ilmiy hamkorlik bo‘yicha memorandum', en: 'Memorandum on Scientific Cooperation' },
};

// Список хранится плоским списком на бэкенде (управляется из админки,
// Xalqaro hamkorlik → Hamkorlar) — группировка по году делается здесь же,
// на фронтенде, из поля item.year.
function groupByYear(items) {
  const byYear = new Map();
  items.forEach((item) => {
    if (!byYear.has(item.year)) byYear.set(item.year, []);
    byYear.get(item.year).push(item);
  });
  return Array.from(byYear.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([year, groupItems]) => ({ year, items: groupItems }));
}

export default function Section() {
  const { language } = useContext(LanguageContext);
  const [partners, setPartners] = useState(null); // null = ещё грузится
  const [error, setError] = useState(false);
  let counter = 0;

  useEffect(() => {
    let cancelled = false;
    axios.get(`${getApiUrl()}/api/partners`)
      .then((res) => {
        if (!cancelled) setPartners(res.data.data || []);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => { cancelled = true; };
  }, []);

  const intro = language === 'en'
    ? 'International agreements and memoranda of understanding signed by the Institute of Anthropology with foreign scientific and academic organizations.'
    : 'Antropologiya institutining xorijiy ilmiy-ta’lim tashkilotlari bilan tuzgan xalqaro shartnoma va memorandumlari.';

  if (error) {
    return (
      <section className="partners-page__section">
        <p className="partners-page__section__intro">{intro}</p>
        <p className="partners-page__section__placeholder">
          {language === 'uz' ? "Ma'lumotlarni yuklashda xatolik yuz berdi." : 'Failed to load data.'}
        </p>
      </section>
    );
  }

  if (partners === null) {
    return (
      <section className="partners-page__section">
        <p className="partners-page__section__intro">{intro}</p>
        <p className="partners-page__section__placeholder">
          {language === 'uz' ? 'Yuklanmoqda...' : 'Loading...'}
        </p>
      </section>
    );
  }

  const groups = groupByYear(partners);

  return (
    <section className="partners-page__section">
      <p className="partners-page__section__intro">{intro}</p>

      {groups.length === 0 && (
        <p className="partners-page__section__placeholder">
          {language === 'uz'
            ? 'Bu bo‘limda institutning xalqaro hamkorlari haqida ma’lumot joylashtiriladi.'
            : "This section will host information about the Institute's international partners."}
        </p>
      )}

      {groups.map((group) => (
        <div className="partners-page__section__year-group" key={group.year}>
          <h2 className="partners-page__section__year">{group.year} {language === 'en' ? '' : 'yil'}</h2>

          <ul className="partners-page__section__list">
            {group.items.map((item) => {
              counter += 1;
              const type = AGREEMENT_TYPE[item.type];
              return (
                <li className="partners-page__section__item" key={item.id}>
                  <span className="partners-page__section__item-number">{counter}</span>

                  <div className="partners-page__section__item-flag">
                    <img src={flagUrl(item.countryCode)} alt={language === 'en' ? item.countryEn : item.countryUz} />
                  </div>

                  <div className="partners-page__section__item-body">
                    <p className="partners-page__section__item-name">
                      {language === 'en' ? item.nameEn : item.nameUz}
                    </p>
                    <p className="partners-page__section__item-meta">
                      {language === 'en' ? item.countryEn : item.countryUz}
                      {' · '}
                      {type ? type[language === 'en' ? 'en' : 'uz'] : item.type}
                      {' · '}
                      {language === 'en'
                        ? `${item.years} years`
                        : `${item.years} yilga tuzilgan`}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
