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
        uz: "OAV chiqishlari",
        en: "Media Coverage",
      },
      link: "/",
    },
  ];


  return (
    <main className='media-coverage-page__main'>

        <Category data={menuData}/>

        <Container>
          <Section/>
        </Container>

    </main>
  )
}
