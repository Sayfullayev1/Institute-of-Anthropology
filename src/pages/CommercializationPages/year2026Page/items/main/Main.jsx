import React from 'react'
import './main.scss'

import Category from '@/components/category/Category'


export default function Main() {

  const menuData = [
    {
      text: {
        uz: "Bosh sahifa",
        en: "Home",
      },
      link: "/",
    },
    {
      text: {
        uz: "2026",
        en: "2026",
      },
      link: "/",
    },
  ];


  return (
    <main className='year-2026-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
