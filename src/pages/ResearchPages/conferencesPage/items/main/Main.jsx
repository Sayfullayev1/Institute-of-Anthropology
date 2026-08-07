import React from 'react'
import './main.scss'

import Category from '@/components/category/Category'


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
        uz: "Konferensiyalar",
        en: "Conferences",
      },
      link: "/",
    },
  ];


  return (
    <main className='contacts-page__main'>
        

        <Category data={menuData}/>

        
    </main>
  )
}



// {/*

//  Home

//  drob daun  Home >>>  1  миссия  или позиция 2 хайлайтс последние поиски последние экспедиции  янги элонлар  3  тезкор уланиш болимлар публикациялар лоихалар 

//  About US >>>> 1  история института 2 рахбарият  3  тузилма 4  халкаро алокалар


//  илмий болимлар >>> гео антрополгия антро антрополог 3  тарихий 4 иштиомий 5 архио  геофизик


//  5 йиллик стратегия , ходимлар,  лоихалар  ососий публикациялар


//  4 ресёрч энд прожект изланишлар) хозирги лоихалар тугаланган лоиихалар экспедициялар лабораториялар 

//  грантлар


//  инфро структура (фонд ) 

//  5 публикациялар  (монографиялар журнал сборниклар) 


//  6 изланувчилар (барча)  индивидуал профеллар  
 
 
//  7талим (пжд программа стажор)  воркшоплар    хамкорлик   хафта семинари  конференциялар


// 8 халкоро   >>>  хамкорлар кошма экспедициялар) ва лоихалар  академик икстендж   ташабуслар   


// 9 сми >>>  матн аудио видео 




//    контакт




//   1 Home about   2  resorch out put (поиски)   3    projects  4  Human capital  5 international colabaration  6 autrij and endagement  7 digital infrastructure and data  




//  */}



