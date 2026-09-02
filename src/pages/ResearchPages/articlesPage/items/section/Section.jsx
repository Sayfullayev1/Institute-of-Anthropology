import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';

// Заглушка для года, у которого пока нет ни одной публикации. Сами цитаты
// приходят с бекенда как есть (см. /api/articles-publications) — они не
// переводятся между uz/en (это реальные библиографические ссылки на языке
// оригинала), на язык реагируют только служебные подписи вокруг них.
const PLACEHOLDER_TEXT = {
    uz: (year) =>
        `Ushbu bo‘limda Antropologiya institutining ${year}-yilda nashr etilgan ilmiy maqolalari to‘liq ro‘yxati joylashtiriladi — taqrizlanadigan milliy va xalqaro jurnallarda, konferensiya materiallari to‘plamlarida hamda jamoaviy nashrlarda chop etilgan maqolalar, muallif(lar), jurnal nomi, son va (mavjud bo‘lsa) DOI kabi bibliografik ma’lumotlar bilan birga, imkon qadar to‘liq matn yoki annotatsiyaga havola qo‘shilgan holda. ${year}-yil uchun arxiv hozircha tayyorlanmoqda va yakunlangach shu yerda e’lon qilinadi.`,
    en: (year) =>
        `This section will host the full list of scientific articles published by the Institute of Anthropology's researchers in ${year} — papers appearing in peer-reviewed national and international journals, conference proceedings, and collective volumes, together with bibliographic details (author(s), journal, issue and, where available, DOI), and a link to the full text or abstract wherever possible. The archive for ${year} is currently being compiled and will be published here once it is ready.`,
};

// Находит http(s)-ссылки внутри куска текста и рендерит их как настоящие
// кликабельные <a>, остальной текст — как есть. Кусков может быть 0, 1
// или несколько ссылок (DOI + сайт журнала и т.п.) — один универсальный
// разбор вместо ручного разбиения каждой записи на текст/ссылку/текст.
const URL_REGEX = /(https?:\/\/[^\s)]+)/g;
const TRAILING_PUNCTUATION = /[.,;)]+$/;

function renderLinks(text, keyPrefix) {
    return text.split(URL_REGEX).map((part, i) => {
        if (!/^https?:\/\//.test(part)) {
            return <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>;
        }
        const trailingMatch = part.match(TRAILING_PUNCTUATION);
        const trailing = trailingMatch ? trailingMatch[0] : '';
        const url = trailing ? part.slice(0, -trailing.length) : part;
        return (
            <React.Fragment key={`${keyPrefix}-${i}`}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="articles-page__citationLink">
                    {url}
                </a>
                {trailing}
            </React.Fragment>
        );
    });
}

// Часть цитаты, выделенная в админке кнопкой "B", приходит обёрнутой в
// **две звёздочки** (как в Markdown) — здесь она рендерится жирным. Ссылки
// внутри такого выделения (и вне него) по-прежнему находятся через renderLinks.
const BOLD_REGEX = /\*\*(.+?)\*\*/g;

function renderCitation(text) {
    return text.split(BOLD_REGEX).map((segment, i) => {
        const isBold = i % 2 === 1; // нечётные элементы — то, что было внутри **...**
        const content = renderLinks(segment, i);
        return isBold ? <strong key={i}>{content}</strong> : <React.Fragment key={i}>{content}</React.Fragment>;
    });
}

export default function Section() {
    const { language } = useContext(LanguageContext);

    // Открыт максимум один год одновременно — клик по другому закрывает
    // текущий и открывает новый (классическое поведение аккордеона).
    const [openYear, setOpenYear] = useState(null);
    const [years, setYears] = useState(null); // null = ещё грузится
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        axios.get(`${getApiUrl()}/api/articles-publications`)
            .then((res) => {
                if (!cancelled) setYears(res.data.years || []);
            })
            .catch(() => {
                if (!cancelled) setError(true);
            });
        return () => { cancelled = true; };
    }, []);

    const toggleYear = (year) => {
        setOpenYear((prev) => (prev === year ? null : year));
    };

    if (error) {
        return (
            <section className="articles-page__section">
                <p className="articles-page__yearPlaceholder">
                    {language === 'uz' ? 'Ma’lumotlarni yuklashda xatolik yuz berdi.' : 'Failed to load data.'}
                </p>
            </section>
        );
    }

    if (years === null) {
        return (
            <section className="articles-page__section">
                <p className="articles-page__yearPlaceholder">
                    {language === 'uz' ? 'Yuklanmoqda...' : 'Loading...'}
                </p>
            </section>
        );
    }

    return (
        <section className="articles-page__section">
            <ul className="articles-page__yearList">
                {years.map(({ year, publications }) => {
                    const isOpen = openYear === year;
                    return (
                        <li key={year} className="articles-page__yearItem">
                            <button
                                type="button"
                                className={`articles-page__yearHeader${isOpen ? ' articles-page__yearHeader--open' : ''}`}
                                onClick={() => toggleYear(year)}
                                aria-expanded={isOpen}
                            >
                                <span>{year}</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                            <div className={`articles-page__yearPanel${isOpen ? ' articles-page__yearPanel--open' : ''}`}>
                                <div className="articles-page__yearPanelInner">
                                    {publications.length > 0 ? (
                                        <ol className="articles-page__citationList">
                                            {publications.map((pub) => (
                                                <li key={pub.id} className="articles-page__citationItem">
                                                    {renderCitation(pub.text)}
                                                </li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <p className="articles-page__yearPlaceholder">
                                            {PLACEHOLDER_TEXT[language](year)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
