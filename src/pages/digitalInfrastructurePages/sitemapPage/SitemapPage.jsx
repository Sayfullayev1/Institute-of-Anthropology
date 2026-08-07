import React, { useContext } from 'react'
import Main from './items/main/Main'
import { Helmet } from 'react-helmet-async'
import { LanguageContext } from '@/context/LanguageContext';

export default function SitemapPage() {

  const { language } = useContext(LanguageContext);
    
  return (
    <div>

    <Helmet>
      <title>
        {language === 'uz' 
          ? "Sayt xaritasi — Antropologiya instituti" 
          : "Sitemap — Institute of Anthropology"}
      </title>
    </Helmet>
      
      <Main />
    </div>
  )
}
