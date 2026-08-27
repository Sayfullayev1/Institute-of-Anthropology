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
        uz: "Ilmiy darajalar beruvchi Ilmiy Kengash",
        en: "Council for the Conferral of Academic Degrees",
      },
      link: "/",
    },
  ];


  return (
    <main className='council-for-conferral-of-academic-degrees-page__main'>


        <Category data={menuData}/>

        <Container>
          <Section/>
        </Container>


    </main>
  )
}
