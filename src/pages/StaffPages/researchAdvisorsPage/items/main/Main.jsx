import React from 'react'
import './main.scss'

import Category from '@/components/category/Category'
import Container from '@/components/container/Container'
import Section from '@/pages/StaffPages/researchAdvisorsPage/items/section/Section'


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
        uz: "Ilmiy rahbarlar",
        en: "Research Advisors",
      },
      link: "/",
    },
  ];


  return (
    <main className='research-advisors-page__main'>

        <Category data={menuData}/>

        <Container>
          <Section />
        </Container>

    </main>
  )
}
