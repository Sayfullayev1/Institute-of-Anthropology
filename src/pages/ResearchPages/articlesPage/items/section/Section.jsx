import React, { useContext, useState } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// Реального контента по годам пока нет — раскрывающийся текст временно
// заглушка (по запросу). Когда появятся данные, здесь достаточно заменить
// содержимое articles-page__yearPlaceholder на реальный список статей.
const YEARS = ['2024', '2025', '2026'];

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
                                    {language === 'uz'
                                        ? `${year}-yil uchun maqolalar tez orada qo‘shiladi.`
                                        : `Articles for ${year} will be added soon.`}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
