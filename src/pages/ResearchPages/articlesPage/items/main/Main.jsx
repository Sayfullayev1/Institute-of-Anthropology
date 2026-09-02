import React from 'react'
import './main.scss'

import Category from '@/components/category/Category'
import Container from '@/components/container/Container'
import Section from '../section/Section'

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
        uz: "Maqolalar",
        en: "Articles",
      },
      link: "/",
    },
  ];


  return (
    <main className='articles-page__main'>

        <Category data={menuData}/>

        <Container>
          <Section/>
        </Container>

    </main>
  )
}
