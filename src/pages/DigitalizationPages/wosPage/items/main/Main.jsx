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
        uz: "WoS",
        en: "WoS",
      },
      link: "/",
    },
  ];


  return (
    <main className='wos-page__main'>


        <Category data={menuData}/>


    </main>
  )
}
