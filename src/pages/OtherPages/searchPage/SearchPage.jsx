import React, { useContext } from 'react'
import Main from './items/main/Main'
import { Helmet } from 'react-helmet-async'
import { LanguageContext } from '@/context/LanguageContext';
import { useSearchParams } from 'react-router-dom';

export default function SearchPage() {

  const { language } = useContext(LanguageContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className='search-page'>

      <Helmet>
        <title>
          {query
            ? (language === 'uz' ? `Qidiruv: ${query}` : `Search: ${query}`)
            : (language === 'uz' ? 'Qidiruv' : 'Search')}
        </title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Main />
    </div>
  )
}
