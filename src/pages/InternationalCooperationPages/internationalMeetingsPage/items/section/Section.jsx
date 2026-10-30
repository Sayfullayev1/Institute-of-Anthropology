import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// Хардкод одной конкретной новости — то же решение, что и для PDF-ссылок на
// mission/national-events: отдельного API для "международных встреч" пока
// нет, просто анонсируем конкретную новость карточкой со ссылкой на неё.
const EVENT = {
    slug: 'markaziy-osiyo-otmishdan-bugungacha-tabiat-va-madaniyat-mavzusida-xalqaro-anjuman-bolib-otadi',
    image: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/news/images/1791194277726-890775398-image.png',
    date: '2026-10-04',
    title: {
        uz: '“Markaziy Osiyo o‘tmishdan bugungacha: tabiat va madaniyat” mavzusida xalqaro anjuman bo‘lib o‘tadi',
        en: 'International scientific conference "Central Asia from Past to Present: Nature and Culture" to be held',
    },
};

function formatDate(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

export default function Section() {
    const { language } = useContext(LanguageContext);
    const newsLink = language === 'en' ? `/news/${EVENT.slug}` : `/${language}/news/${EVENT.slug}`;

    return (
        <section className="international-meetings-page__section">
            <Link to={newsLink} className="international-meetings-page__card">
                <div className="international-meetings-page__cardImageWrap">
                    <img src={EVENT.image} alt={EVENT.title[language]} className="international-meetings-page__cardImage" />
                </div>
                <div className="international-meetings-page__cardBody">
                    <p className="international-meetings-page__cardDate">
                        <i className="fa-regular fa-calendar-days" /> {formatDate(EVENT.date)}
                    </p>
                    <h3 className="international-meetings-page__cardTitle">{EVENT.title[language]}</h3>
                    <span className="international-meetings-page__cardMore">
                        {language === 'en' ? 'Read more' : 'Batafsil'}
                        <i className="fa-solid fa-arrow-right" />
                    </span>
                </div>
            </Link>
        </section>
    );
}
