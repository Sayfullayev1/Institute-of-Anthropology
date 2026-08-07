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
        uz: "2024",
        en: "2024",
      },
      link: "/",
    },
  ];


  return (
    <main className='year-2024-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
