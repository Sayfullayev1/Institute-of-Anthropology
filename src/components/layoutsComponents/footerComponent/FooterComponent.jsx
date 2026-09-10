import React, { useContext } from 'react';
import './footerComponent.scss';
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/context/LanguageContext';

import imge from '@/public/images/footerImage/photo_2026-05-25_19-15-05.jpg';
import StatCounterWidget from '@/components/statCounterWidget/StatCounterWidget';

// Xuddi Category.jsx'dagi kabi — en'da prefiks yo'q, uz'da /uz qo'shiladi.
function localizeLink(path, language) {
  if (!path || language !== 'uz') return path;
  return path.startsWith('/uz') ? path : `/uz${path}`;
}

// HAVOLALAR — saytning o'zidagi haqiqiy, qiziqarli sahifalarga havolalar
// (vaqtincha tanlov, keyinchalik yangilanishi mumkin).
const FOOTER_LINKS = [
  { link: '/council-for-conferral-of-academic-degrees', text: { uz: 'Ixtisoslashgan kengash', en: 'Specialized Council' } },
  { link: '/journal', text: { uz: 'Jurnal', en: 'Journal' } },
  { link: '/monographs', text: { uz: 'Monografiyalar', en: 'Monographs' } },
  { link: '/orcid', text: { uz: 'ORCID', en: 'ORCID' } },
  { link: '/international-projects', text: { uz: 'Xalqaro loyihalar', en: 'International Projects' } },
  { link: '/achievements', text: { uz: 'Yutuqlar', en: 'Achievements' } },
];

export default function FooterComponent() {

  const { language } = useContext(LanguageContext);

  
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4 className="footer__title">{language === "uz" ? "MA’LUMOTLAR" : "INFORMATION"}</h4>
          <p> 
            {
            language === "uz" ? "O‘zbekiston Respublikasi Fanlar akademiyasi Antropologiya instituti" 
            : "Institute of Anthropology of the Academy of Sciences of the Republic of Uzbekistan"
            } 
          </p>
          <p>
            {
            language === "uz" ? "O‘zbekiston Respublikasi Prezidentining “O‘zbekiston Respublikasi Fanlar akademiyasi faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida”gi 390-sonli Qaroriga ko‘ra Fanlar akademiyasi huzuridagi Milliy arxeologiya markazi Antropologiya instituti deb qayta nomlangan." 
            : "According to the Decree No. 390 of the President of the Republic of Uzbekistan “On measures to improve the activities of the Academy of Sciences of the Republic of Uzbekistan”, the National Archaeological Center under the Academy of Sciences was renamed as the Institute of Anthropology."
            }
          </p>
          <div className="footer__social">
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">HAVOLALAR</h4>
          <ul className="footer__links">
            {FOOTER_LINKS.map((item) => (
              <li key={item.link}>
                <Link to={localizeLink(item.link, language)}>{'> '}{item.text[language]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          {/* <h4 className="footer__title">SAYTDAN IZLASH</h4>
          <input type="text" className="footer__search" placeholder="Search..." /> */}
          <img src={imge} alt="Bino" className="footer__image" />
        </div>

        <div className="footer__section">
          <h4 className="footer__title">MANZIL</h4>
          <p>100170, Toshkent shahar, Mirzo Ulug`bek ko`chasi, 81</p>
          <p>Telefonlar: +998 71 262-64-62</p>
          <p>E-mail:  anthropology@academy.uz,  antropologiya-instituti@exat.uz</p>

          <StatCounterWidget />
        </div>

       
      </div>
    </footer>
  );
}
