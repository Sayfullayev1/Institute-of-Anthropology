import React, { useContext } from 'react'
import Main from './items/main/Main'
import { Helmet } from 'react-helmet-async'
import { LanguageContext } from '@/context/LanguageContext';

export default function NotFoundPage() {

  const { language } = useContext(LanguageContext);

  return (
    <div className='not-found-page'>

      <Helmet>
        <title>
          {language === 'uz'
            ? '404 — Sahifa topilmadi'
            : '404 — Page not found'}
        </title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Main />
    </div>
  )
}
