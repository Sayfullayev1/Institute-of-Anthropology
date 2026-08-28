import React, { useContext } from 'react';
import './footerComponent.scss';
import { LanguageContext } from '@/context/LanguageContext';

import imge from '@/public/images/footerImage/photo_2026-05-25_19-15-05.jpg';


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
            <li>{language === "uz" ? "> Ixtisoslashgan kengash" : "> Specialized Council"}</li>
            <li>{language === "uz" ? "> Disertatsiya va avtoreferatlar" : "> Dissertations and Abstracts"}</li>
            <li>{language === "uz" ? "> Laboratoriyalar" : "> Laboratories"}</li>
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
          <p className="footer__analyticsNote">
            {language === "uz"
              ? "Ushbu sayt Google Analytics xizmatidan foydalanadi."
              : "This site uses Google Analytics."}
          </p>
        </div>
      </div>
    </footer>
  );
}
