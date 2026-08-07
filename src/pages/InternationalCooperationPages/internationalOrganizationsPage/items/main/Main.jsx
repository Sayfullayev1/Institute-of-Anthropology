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
        uz: "Xalqaro tashkilotlar",
        en: "International Organizations",
      },
      link: "/",
    },
  ];


  return (
    <main className='international-organizations-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
