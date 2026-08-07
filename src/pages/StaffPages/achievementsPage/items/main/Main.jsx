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
        uz: "Yutuqlar",
        en: "Achievements",
      },
      link: "/",
    },
  ];


  return (
    <main className='achievements-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
