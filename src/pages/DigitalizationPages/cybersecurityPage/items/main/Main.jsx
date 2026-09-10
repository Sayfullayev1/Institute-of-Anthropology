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
        uz: "Kiberxavfsizlik",
        en: "Cybersecurity",
      },
      link: "/",
    },
  ];


  return (
    <main className='cybersecurity-page__main'>

        <Category data={menuData}/>

        <Container>
          <Section/>
        </Container>

    </main>
  )
}
