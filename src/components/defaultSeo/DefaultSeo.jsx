import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '@/context/LanguageContext';

// Общий fallback-заголовок/описание — применяется ко ВСЕМ страницам, у
// которых нет своего <Helmet> (a их пока большинство). Без этого react-helmet
// ничего не переопределяет, и в вкладке/выдаче Google виснет статический
// <title>Project</title> из public/index.html. titleTemplate/defaultTitle
// работают только когда НИЖЕ по дереву нет своего <title> — если у страницы
// есть собственный <Helmet><title>...</title></Helmet>, он побеждает.
//
// canonical + hreflang — сайт живёт на двух путях одного домена (без
// префикса = en, /uz = uz), без этого Google видит два счёта дублирующегося
// контента вместо одной страницы с языковыми вариантами.
export default function DefaultSeo() {
    const { language } = useContext(LanguageContext);
    const location = useLocation();

    const pathWithoutLang = location.pathname.replace(/^\/uz(\/|$)/, '/').replace(/\/+/g, '/');
    const cleanPath = pathWithoutLang === '/' ? '' : pathWithoutLang.replace(/\/$/, '');
    const enUrl = `https://anthropology.uz${cleanPath}`;
    const uzUrl = `https://anthropology.uz/uz${cleanPath}`;
    const canonicalUrl = language === 'uz' ? uzUrl : enUrl;

    return (
        <Helmet
            defaultTitle="Institute of Anthropology — Antropologiya instituti"
            titleTemplate="%s | Institute of Anthropology"
        >
            <html lang={language === 'uz' ? 'uz' : 'en'} />
            <meta
                name="description"
                content={
                    language === 'uz'
                        ? "O'zbekiston Respublikasi Fanlar akademiyasi Antropologiya instituti — ilmiy tadqiqotlar, nashrlar, kengashlar va institut faoliyati haqida rasmiy sayt."
                        : "Institute of Anthropology of the Academy of Sciences of the Republic of Uzbekistan — official website: research, publications, councils and the Institute's activities."
                }
            />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="alternate" hrefLang="en" href={enUrl} />
            <link rel="alternate" hrefLang="uz" href={uzUrl} />
            <link rel="alternate" hrefLang="x-default" href={enUrl} />
        </Helmet>
    );
}
