import React from 'react'
import Category from '@/components/category/Category'
import Section from '../section/Section';

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
        uz: "Sahifa topilmadi",
        en: "Page not found",
      },
      link: "/",
    },
  ];


  return (
    <main className='not-found-page__main'>


        <Category data={menuData}/>

        <Section/>

    </main>
  )
}
