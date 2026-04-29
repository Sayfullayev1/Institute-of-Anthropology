import React, { useContext, useEffect, useState } from 'react'
import "./topbar.scss"

import { LanguageContext } from '../../../../../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';


export default function Topbar() {

    const { language, changeLanguage } = useContext(LanguageContext); // Убедитесь, что эта функция доступна в контексте
    const navigate = useNavigate();
    const location = useLocation();

    const [locationText, setLocationText] = useState();


    useEffect(() => {
        if (language === "uz") { 
          setLocationText("100170, Toshkent shahar, Mirzo Ulug`bek ko`chasi, 81");
        } else if (language === "en") {
          setLocationText("100170, Tashkent city, Mirzo Ulug`bek street, 81");
        }
    }, [language])




    const handleLanguageChange = (lang, item) => {
        changeLanguage(lang);

        item.target.style.color = '#2e2e2e';
        item.target.style.textDecoration = 'none';
        
      };



  return (
    <div className='header__topbar' >

      <div className='header__topbar__container'>

        <div className='header__topbar__text'>

            <h1 onClick={(e) => handleLanguageChange("uz",e) } >O`zbekcha</h1>

            <h1 onClick={(e) => handleLanguageChange("en",e) } >English</h1>

        </div>

        <div className='header__topbar__socials'>
            <p className='header__topbar__socials__text'>
            <i className="fa fa-home"></i>  {locationText}
            </p>
        </div>

      </div>

    </div>
  )
}
