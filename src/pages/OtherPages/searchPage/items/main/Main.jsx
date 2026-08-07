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
        uz: "Qidiruv natijalari",
        en: "Search results",
      },
      link: "/search",
    },
  ];

  return (
    <main className='search-page__main'>

      <Category data={menuData}/>

      <Section/>

    </main>
  )
}
