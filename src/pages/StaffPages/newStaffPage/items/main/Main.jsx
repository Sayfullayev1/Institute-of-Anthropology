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
        uz: "Yangi xodimlar",
        en: "New Staff",
      },
      link: "/",
    },
  ];


  return (
    <main className='new-staff-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
