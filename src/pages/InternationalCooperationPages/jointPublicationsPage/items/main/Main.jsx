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
        uz: "Qo‘shma nashrlar",
        en: "Joint Publications",
      },
      link: "/",
    },
  ];


  return (
    <main className='joint-publications-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
