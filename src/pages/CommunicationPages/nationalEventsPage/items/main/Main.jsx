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
        uz: "Mahalliy yig‘ilishlar",
        en: "National Events",
      },
      link: "/",
    },
  ];


  return (
    <main className='national-events-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
