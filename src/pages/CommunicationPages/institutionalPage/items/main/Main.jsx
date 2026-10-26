import React from 'react'
import './main.scss'

import Category from '@/components/category/Category'


export default function Main() {

  const menuData = [
    {
      text: {
        uz: "Negiz bet",
        en: "Home",
      },
      link: "/",
    },
    {
      text: {
        uz: "Korporativ",
        en: "Institutional",
      },
      link: "/",
    },
  ];


  return (
    <main className='institutional-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
