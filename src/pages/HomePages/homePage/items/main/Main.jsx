import React, { useContext } from 'react'
import './main.scss'

import Carousel from '@/pages/HomePages/homePage/items/carousel/Carousel';


import { LanguageContext } from '@/context/LanguageContext';

import News from '@/pages/HomePages/homePage/items/news/News';



export default function Main() {
    const { language } = useContext(LanguageContext);


  return (
    <div className='home-page__main'>

        <div className='home-page__main__carousel_wrapper'>
            <Carousel/>
        </div>

       
       <div className='home-page__main__content'>

            <div className='home-page__main__news__wrapper'>

                <h1 className='home-page__main__content__title'>
                    {
                        language === "uz"
                            ? "Yahdiliklar"
                            : language === "ru"
                            ? "Новости"
                            : "News"
                    }
                </h1>

                <News/>
            </div>

        </div>
            
    </div>
  )
}
