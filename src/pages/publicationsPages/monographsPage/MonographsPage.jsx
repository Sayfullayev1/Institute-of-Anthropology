import React, { useContext, useState } from 'react'
import style from './monographspage.module.scss';

import Category from '@/components/category/Category';
import { LanguageContext } from '@/context/LanguageContext';







export default function MonographsPage() {

    const { language } = useContext(LanguageContext);

    const menuData = [
        {
            text: {
                uz: "Bosh sahifa",
                ru: "Главная",
                en: "Main",
            },
            link: "/",
        },
        {
            text: {
                uz: "O'quv qo'llanmalar",
                ru: "Учебные пособия",
                en: "Teaching aids",
            },
            link: "/uzbekistan-history-and-culture",
        },
    ];



    const [listOfDocuments] = useState([])

    

    
  return (
    <div className={style.container}>

        <Category data={menuData}/>


        <main className={style.main}>

            <ul className={style.list}>
                {listOfDocuments.map((item, index) => (
                    <li key={index} className={style.item}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="your-link-class">
                            {item.text[language]}
                        </a>
                    </li>
                ))}
            </ul>

        </main>
      
    </div>
  )
}
