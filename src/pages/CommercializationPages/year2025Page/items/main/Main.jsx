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
        uz: "2025",
        en: "2025",
      },
      link: "/",
    },
  ];


  return (
    <main className='year-2025-page__main'>

        <Category data={menuData}/>

        <Container>
          <Section/>
        </Container>

    </main>
  )
}
