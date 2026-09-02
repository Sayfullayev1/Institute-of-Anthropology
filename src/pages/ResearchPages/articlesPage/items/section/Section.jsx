import React, { useContext, useState } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// Реального контента по годам пока нет — раскрывающийся текст временно
// заглушка (по запросу — развёрнутый вариант вместо однострочника). Когда
// появятся данные, здесь достаточно заменить содержимое
// articles-page__yearPlaceholder на реальный список статей.
const YEARS = ['2024', '2025', '2026'];

const PLACEHOLDER_TEXT = {
    uz: (year) =>
        `Ushbu bo‘limda Antropologiya institutining ${year}-yilda nashr etilgan ilmiy maqolalari to‘liq ro‘yxati joylashtiriladi — taqrizlanadigan milliy va xalqaro jurnallarda, konferensiya materiallari to‘plamlarida hamda jamoaviy nashrlarda chop etilgan maqolalar, muallif(lar), jurnal nomi, son va (mavjud bo‘lsa) DOI kabi bibliografik ma’lumotlar bilan birga, imkon qadar to‘liq matn yoki annotatsiyaga havola qo‘shilgan holda. ${year}-yil uchun arxiv hozircha tayyorlanmoqda va yakunlangach shu yerda e’lon qilinadi.`,
    en: (year) =>
        `This section will host the full list of scientific articles published by the Institute of Anthropology's researchers in ${year} — papers appearing in peer-reviewed national and international journals, conference proceedings, and collective volumes, together with bibliographic details (author(s), journal, issue and, where available, DOI), and a link to the full text or abstract wherever possible. The archive for ${year} is currently being compiled and will be published here once it is ready.`,
};

// Реальные публикации по годам — по мере появления новых просто добавляем
// элементы в соответствующий массив. Год без публикаций показывает общий
// текст-заглушку (PLACEHOLDER_TEXT) вместо пустого списка.
const PUBLICATIONS = {
    '2024': [
        {
            title: 'New Data for Asymmetric Core Reduction in Western Tian Shan Piedmonts: The Ertash Sai 2 Open-Air Site',
            link: 'https://www.tandfonline.com/journals/ylit20',
        },
        {
            title: 'New Data for Asymmetric Core Reduction in Western Tian Shan Piedmonts: The Ertash Sai 2 Open-Air Site',
            link: 'https://www.tandfonline.com/journals/ylit20',
        },
        {
            title: 'New Data for Asymmetric Core Reduction in Western Tian Shan Piedmonts: The Ertash Sai 2 Open-Air Site',
            link: 'https://www.tandfonline.com/journals/ylit20',
        },
        {
            title: 'New Data for Asymmetric Core Reduction in Western Tian Shan Piedmonts: The Ertash Sai 2 Open-Air Site',
            link: 'https://www.tandfonline.com/journals/ylit20',
        },
    ],
    '2025': [],
    '2026': [],
};

export default function Section() {
    const { language } = useContext(LanguageContext);

    // Открыт максимум один год одновременно — клик по другому закрывает
    // текущий и открывает новый (классическое поведение аккордеона).
    const [openYear, setOpenYear] = useState(null);

    const toggleYear = (year) => {
        setOpenYear((prev) => (prev === year ? null : year));
    };

    return (
        <section className="articles-page__section">
            <ul className="articles-page__yearList">
                {YEARS.map((year) => {
                    const isOpen = openYear === year;
                    const publications = PUBLICATIONS[year] || [];
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
                                {publications.length > 0 ? (
                                    <ul className="articles-page__publicationList">
                                        {publications.map((pub, idx) => (
                                            <li key={idx} className="articles-page__publicationItem">
                                                <p className="articles-page__publicationTitle">{pub.title}</p>
                                                <a
                                                    className="articles-page__publicationLink"
                                                    href={pub.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {pub.link.replace(/^https?:\/\//, '')}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="articles-page__yearPlaceholder">
                                        {PLACEHOLDER_TEXT[language](year)}
                                    </p>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
