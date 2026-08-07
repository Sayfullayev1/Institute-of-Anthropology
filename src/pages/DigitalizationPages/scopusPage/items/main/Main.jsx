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
        uz: "Scopus",
        en: "Scopus",
      },
      link: "/",
    },
  ];


  return (
    <main className='scopus-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
