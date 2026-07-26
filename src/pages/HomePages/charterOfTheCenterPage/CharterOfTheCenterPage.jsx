import React, { useContext } from 'react'
import style from './charterOfTheCenterPage.module.scss'

import Container from '../../../components/container/Container'
import Category from '../../../components/category/Category'
import Convert from './localComponents/Convert/Convert'


import { LanguageContext } from '../../../context/LanguageContext';

export default function CharterOfTheCenterPage() {

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
          uz: "Institut nizomi",
          ru: "Устав Института",
          en: "Charter of the Institute",
        },
        link: "/",
      },
    ];



  return (
    <div className={style.container}>

      <Category data={menuData}/>
    
      <div  className={style.container__main}>
        <Container>

          <Convert language={language}/>

        </Container>
      </div>
      
    </div>
  )
}
