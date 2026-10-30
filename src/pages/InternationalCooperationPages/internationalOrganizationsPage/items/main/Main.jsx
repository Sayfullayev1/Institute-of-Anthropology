import React from 'react'
import './main.scss'

import Category from '@/components/category/Category'
import Container from '@/components/container/Container'
import Section from '../section/Section'


export default function Main() {

  const menuData = [
    {
      text: {
        uz: "Negiz bet",
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

        <Container>
          <Section/>
        </Container>

    </main>
  )
}
