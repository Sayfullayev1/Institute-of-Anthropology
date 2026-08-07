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
        uz: "Xalqaro yig‘ilishlar",
        en: "International Meetings",
      },
      link: "/",
    },
  ];


  return (
    <main className='international-meetings-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
