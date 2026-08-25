import React, { useContext } from 'react'
import style from './scientificCouncilPage.module.scss'

import Container from '@/components/container/Container'
import Category from '@/components/category/Category'
import Convert from './localComponents/Convert/Convert'


import { LanguageContext } from '@/context/LanguageContext';
import { Link } from 'react-router-dom'

// PDF загружен через новый бекенд-эндпоинт POST /api/documents/:category
// (см. project2/routes/documentsRoute/documentsRoute.js), хранится в R2 по
// пути documents/ScientificCouncilDocument/... — отдельно от .docx-файлов
// Nizom'а, которые лежат статикой в public/infoFolder.
const SCIENTIFIC_COUNCIL_COMPOSITION_PDF_URL =
  "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/ScientificCouncilDocument/1787664349577-427483581-Imiy_Kengashi_tarkibi.pdf";

export default function ScientificCouncilPage() {

  const { language } = useContext(LanguageContext);

  const menuData = [
      {
        text: {
          uz: "Bosh sahifa",
          ru: "Главная",
          en: "Main",
        },
        link: "/",
      },
      {
        text: {
          uz: "Ilmiy kengash",
          ru: "Учёный совет",
          en: "Scientific Council",
        },
        link: "/",
      },
    ];



  return (
    <div className={style.container}>

      <Category data={menuData}/>

      <div  className={style.container__main}>
        <Container>

          <Convert language={language}/>

          <Link
            className={style.pdfLink}
            to={SCIENTIFIC_COUNCIL_COMPOSITION_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
          >

            {
              language === 'uz' ? 'Imiy Kengashi tarkibi (PDF)' :
              'Scientific Council Composition (PDF)'
            }
          </Link>

        </Container>
      </div>

    </div>
  )
}
