import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// Флаги — тот же источник и формат, что уже используется в LanguageSwitcher
// (flagpedia.net, ISO-коды стран).
const flagUrl = (code) => `https://flagpedia.net/data/flags/w580/${code}.webp`;

const AGREEMENT_TYPE = {
  mou: { uz: 'Kelishuv memorandumi', en: 'Memorandum of Understanding' },
  cooperation: { uz: 'Hamkorlik shartnomasi', en: 'Cooperation Agreement' },
  scientificMou: { uz: 'Ilmiy hamkorlik bo‘yicha memorandum', en: 'Memorandum on Scientific Cooperation' },
};

const PARTNERS = [
  {
    year: 2022,
    items: [
      {
        nameUz: 'Arxeologiya instituti, Xitoy Ijtimoiy Fanlar Akademiyasi',
        nameEn: 'Institute of Archaeology, Chinese Academy of Social Sciences',
        countryUz: 'Xitoy', countryEn: 'China', code: 'cn',
        type: 'mou', years: 5,
      },
      {
        nameUz: 'Arxeologiya va etnografiya instituti, Rossiya Fanlar akademiyasi Sibir bo‘limi',
        nameEn: 'Institute of Archaeology and Ethnography, Siberian Branch of the Russian Academy of Sciences',
        countryUz: 'Rossiya', countryEn: 'Russia', code: 'ru',
        type: 'cooperation', years: 5,
      },
      {
        nameUz: 'Milliy Ilmiy Tadqiqotlar Markazi (CNRS)',
        nameEn: 'National Centre for Scientific Research (CNRS)',
        countryUz: 'Fransiya', countryEn: 'France', code: 'fr',
        type: 'cooperation', years: 5,
      },
      {
        nameUz: 'O‘rta Yer Dengizi Biologik Xilma-xillik va Ekologiya Instituti',
        nameEn: 'Mediterranean Institute of Biodiversity and Ecology',
        countryUz: 'Fransiya', countryEn: 'France', code: 'fr',
        type: 'cooperation', years: 5,
      },
      {
        nameUz: 'Abu-Dabidagi Nyu-York Universiteti',
        nameEn: 'New York University Abu Dhabi',
        countryUz: 'BAA', countryEn: 'UAE', code: 'ae',
        type: 'mou', years: 5,
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        nameUz: 'Varshava universiteti',
        nameEn: 'University of Warsaw',
        countryUz: 'Polsha', countryEn: 'Poland', code: 'pl',
        type: 'cooperation', years: 5,
      },
      {
        nameUz: 'Marg‘ulan nomidagi arxeologiya instituti',
        nameEn: 'A.Kh. Margulan Institute of Archaeology',
        countryUz: 'Qozog‘iston', countryEn: 'Kazakhstan', code: 'kz',
        type: 'mou', years: 5,
      },
      {
        nameUz: 'Xalqaro Turk Akademiyasi',
        nameEn: 'International Turkic Academy',
        countryUz: 'Qozog‘iston', countryEn: 'Kazakhstan', code: 'kz',
        type: 'scientificMou', years: 3,
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        nameUz: 'Sent-Luisdagi Vashington Universiteti',
        nameEn: 'Washington University in St. Louis',
        countryUz: 'AQSh', countryEn: 'USA', code: 'us',
        type: 'mou', years: 5,
      },
      {
        nameUz: 'Anqara Yildirim Boyazid Universiteti',
        nameEn: 'Ankara Yıldırım Beyazıt University',
        countryUz: 'Turkiya', countryEn: 'Turkey', code: 'tr',
        type: 'mou', years: 5,
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        nameUz: 'Arxeologiya va Madaniyatda Fan va Texnologiya Ilmiy Tadqiqot Markazi (STARC)',
        nameEn: 'Science and Technology in Archaeology and Culture Research Center (STARC), The Cyprus Institute',
        countryUz: 'Kipr', countryEn: 'Cyprus', code: 'cy',
        type: 'mou', years: 5,
      },
      {
        nameUz: 'Xo‘ja Ahmad Yassaviy nomidagi xalqaro Qozoq-Turk Universiteti',
        nameEn: 'Khoja Akhmet Yassawi International Kazakh-Turkish University',
        countryUz: 'Qozog‘iston', countryEn: 'Kazakhstan', code: 'kz',
        type: 'mou', years: 5,
      },
      {
        nameUz: 'Turkiya Arxeologiya va madaniy meros instituti',
        nameEn: 'Turkish Institute of Archaeology and Cultural Heritage',
        countryUz: 'Turkiya', countryEn: 'Turkey', code: 'tr',
        type: 'cooperation', years: 5,
      },
    ],
  },
  {
    year: 2026,
    items: [
      {
        nameUz: 'YUNESKO homiyligidagi Madaniyatlarni yaqinlashtirish xalqaro markazi',
        nameEn: 'International Centre for the Rapprochement of Cultures under the auspices of UNESCO',
        countryUz: 'Qozog‘iston', countryEn: 'Kazakhstan', code: 'kz',
        type: 'cooperation', years: 5,
      },
      {
        nameUz: 'Mug‘la Sitki Koçman universiteti',
        nameEn: 'Muğla Sıtkı Koçman University',
        countryUz: 'Turkiya', countryEn: 'Turkey', code: 'tr',
        type: 'cooperation', years: 5,
      },
      {
        nameUz: 'Rossiya Fanlar akademiyasi Sibir bo‘limining Davlat ommaviy ilmiy-texnika kutubxonasi',
        nameEn: 'State Public Scientific and Technical Library, Siberian Branch of the Russian Academy of Sciences',
        countryUz: 'Rossiya', countryEn: 'Russia', code: 'ru',
        type: 'cooperation', years: 5,
      },
    ],
  },
];

export default function Section() {
  const { language } = useContext(LanguageContext);
  let counter = 0;

  return (
    <section className="partners-page__section">
      <p className="partners-page__section__intro">
        {language === 'en'
          ? 'International agreements and memoranda of understanding signed by the Institute of Anthropology with foreign scientific and academic organizations.'
          : 'Antropologiya institutining xorijiy ilmiy-ta’lim tashkilotlari bilan tuzgan xalqaro shartnoma va memorandumlari.'}
      </p>

      {PARTNERS.map((group) => (
        <div className="partners-page__section__year-group" key={group.year}>
          <h2 className="partners-page__section__year">{group.year} {language === 'en' ? '' : 'yil'}</h2>

          <ul className="partners-page__section__list">
            {group.items.map((item) => {
              counter += 1;
              const type = AGREEMENT_TYPE[item.type];
              return (
                <li className="partners-page__section__item" key={counter}>
                  <span className="partners-page__section__item-number">{counter}</span>

                  <div className="partners-page__section__item-flag">
                    <img src={flagUrl(item.code)} alt={language === 'en' ? item.countryEn : item.countryUz} />
                  </div>

                  <div className="partners-page__section__item-body">
                    <p className="partners-page__section__item-name">
                      {language === 'en' ? item.nameEn : item.nameUz}
                    </p>
                    <p className="partners-page__section__item-meta">
                      {language === 'en' ? item.countryEn : item.countryUz}
                      {' · '}
                      {type[language === 'en' ? 'en' : 'uz']}
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
