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
        uz: "Etika Komissiyasi",
        en: "Ethics Committee",
      },
      link: "/",
    },
  ];


  return (
    <main className='ethics-committee-page__main'>

        <Category data={menuData}/>

        <Container>
          <Section/>
        </Container>

    </main>
  )
}
