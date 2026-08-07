import React, { useContext, useEffect, useState } from 'react'
import style from './uzbekistanHistoryOfMaterialCulturePage.module.scss';

import Category from '@/components/category/Category';
import { LanguageContext } from '@/context/LanguageContext';

import axios from 'axios';

import getApiUrl from '@/api/api';



export default function UzbekistanHistoryOfMaterialCulturePage() {

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
                uz: "O‘zbekiston tarixi va madaniyati",
                ru: "История и культура Узбекистана",
                en: "History and culture of Uzbekistan",
            },
            link: "/uzbekistan-history-and-culture",
        },
    ];


    // const listOfDocuments = [
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 28", 
    //             ru: "История материальной культуры Узбекистана - 28",
    //             en: "History of material culture of Uzbekistan - 28",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2028.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 30", 
    //             ru: "История материальной культуры Узбекистана - 30",
    //             en: "History of material culture of Uzbekistan - 30",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2030.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 31", 
    //             ru: "История материальной культуры Узбекистана - 31",
    //             en: "History of material culture of Uzbekistan - 31",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2031.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 32", 
    //             ru: "История материальной культуры Узбекистана - 32",
    //             en: "History of material culture of Uzbekistan - 32",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2032.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 34", 
    //             ru: "История материальной культуры Узбекистана - 34",
    //             en: "History of material culture of Uzbekistan - 34",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2034.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 35", 
    //             ru: "История материальной культуры Узбекистана - 35",
    //             en: "History of material culture of Uzbekistan - 35",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2035.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 36", 
    //             ru: "История материальной культуры Узбекистана - 36",
    //             en: "History of material culture of Uzbekistan - 36",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2036.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 37", 
    //             ru: "История материальной культуры Узбекистана - 37",
    //             en: "History of material culture of Uzbekistan - 37",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2037.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 38", 
    //             ru: "История материальной культуры Узбекистана - 38",
    //             en: "History of material culture of Uzbekistan - 38",
    //         },
    //         link: "https://n.ziyouz.com/books/jurnallar/uzbekiston_moddiy_madaniyati_tarixi/O'zbekiston%20moddiy%20madaniyati%20tarixi%20-%2038.pdf",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 43 (I)", 
    //             ru: "История материальной культуры Узбекистана - 43 (I)",
    //             en: "History of material culture of Uzbekistan - 43 (I)",
    //         },
    //         link: "",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 43 (II)", 
    //             ru: "История материальной культуры Узбекистана - 43 (II)",
    //             en: "History of material culture of Uzbekistan - 43 (II)",
    //         },
    //         link: "",
    //     },
    //     {
    //         text: {
    //             uz: "O'zbekiston moddiy madaniyati tarixi - 43 (III)", 
    //             ru: "История материальной культуры Узбекистана - 43 (III)",
    //             en: "History of material culture of Uzbekistan - 43 (III)",
    //         },
    //         link: "",
    //     },
    // ];


    const [listOfDocuments, setListOfDocuments] = useState([])

    const api = getApiUrl()

    useEffect(() => {
        axios.get(`${api}/api/publications-pages/uzbekistan-history-of-material-culture-data`)
            .then(response => {
                // Handle the response data
                console.log(response.data);
                setListOfDocuments(response.data.data)
            })
            .catch(error => {
                // Handle the error
                console.error('There was an error fetching the documents!', error);
            });
    }, [api]) 
    
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
