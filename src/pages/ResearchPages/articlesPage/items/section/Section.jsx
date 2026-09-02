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
                                <p className="articles-page__yearPlaceholder">
                                    {PLACEHOLDER_TEXT[language](year)}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
