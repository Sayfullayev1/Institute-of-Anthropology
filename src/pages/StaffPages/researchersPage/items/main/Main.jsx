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
        uz: "Xodimlar",
        en: "Researchers",
      },
      link: "/",
    },
  ];


  return (
    <main className='researchers-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
