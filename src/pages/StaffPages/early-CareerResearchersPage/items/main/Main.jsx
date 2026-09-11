import React from 'react'
import './main.scss'

import Category from '@/components/category/Category'
import Container from '@/components/container/Container'
import Section from '@/pages/StaffPages/early-CareerResearchersPage/items/section/Section'


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
        uz: "Yosh olimlar",
        en: "Early-Career Researchers",
      },
      link: "/",
    },
  ];


  return (
    <main className='early-career-researchers-page__main'>

        <Category data={menuData}/>

        <Container>
          <Section />
        </Container>

    </main>
  )
}
