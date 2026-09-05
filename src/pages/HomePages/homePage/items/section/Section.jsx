import React, { useContext, useState, useEffect } from 'react';
import './section.scss';
import CountUp from 'react-countup'; // Import CountUp for number animation
import { Link } from 'react-router-dom';
import { LanguageContext } from '@/context/LanguageContext';



export default function Section() {
    const { language } = useContext(LanguageContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.home-page__section__stats-section');
            if (element && element.getBoundingClientRect().top < window.innerHeight) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const data = [
        {
            icon: <i className="fa-solid fa-building-user"></i>,
            number: 70,
            label: {
                uz: "UMUMIY XODIMLAR",
                ru: "ВСЕГО СОТРУДНИКОВ",
                en: "TOTAL STAFF",
            },
        },
        {
            icon: <i className="fa fa-users"></i>,
            number: 40,
            label: {
                uz: "ILMIY XODIMLAR",
                ru: "НАУЧНЫЕ СОТРУДНИКИ",
                en: "RESEARCHERS",
            },
        },
        {
            icon: <i className="fa-solid fa-signal"></i>,
            number: 1,
            label: {
                uz: "AKTIV LOYIHALAR",
                ru: "АКТИВНЫЕ ПРОЕКТЫ",
                en: "ACTIVE PROJECTS",
            },
        },
        {
            icon: <i className="fa-solid fa-pen-to-square"></i>,
            number: 32,
            label: {
                uz: "WoS/Scopus ",
                ru: "WoS/Scopus ",
                en: "WoS/Scopus ",
            },
            // Тот же канал, что и WoS/Scopus в меню Raqamlashtirish.
            link: "https://t.me/anthropubhub",
        },
    ];


    // Foydali manbalar — 3 колонки, один под-массив = одна колонка.
    const resources1 =[
        [
            {
                icon: <img src="https://api-portal.gov.uz/uploads/352/2025/09/08/5e2858a3-5fc0-d12a-e6c8-5d6e28333962_authority_352.png" alt="O'zbekiston Respublikasi Fanlar akademiyasi" />,
                title:  {
                            uz: "O‘zbekiston Respublikasi Fanlar akademiyasi",
                            en: "Academy of Sciences of the Republic of Uzbekistan"
                        },
                link: "academy.uz",
            },
            {
                icon: <img src="https://my.academy.uz/img/logo.png" alt="" />,
                title:  {
                            uz: "О‘zbekiston Respublikasi Fanlar akademiyasi",
                            en: "Academy of Sciences of the Republic of Uzbekistan",
                        },
                link: "my.academy.uz",
            },
            {
                icon: <img src="https://oak.uz/images/gerb.png"  alt="" />,
                title:  {
                            uz: "O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi huzuridagi Oliy attestatsiya komissiyasi",
                            en: "Higher Attestation Commission at the Academy of Sciences of the Republic of Uzbekistan"
                        },
                link: "oak.uz",
            },
        ],
        [
            {
                // Битый favicon (gov.uz/oz/edu/favicon.ico отдавал HTML вместо
                // иконки) — заменено на реальный favicon этого же портала,
                // взятый напрямую из <link rel="icon"> его собственной страницы.
                icon: <img src="https://api-portal.gov.uz/uploads/7/2025/06/20/62a99df6-a2f5-6531-77dd-f8d1e6adc293_authority_7.ico" alt="" />,
                title:  {
                            uz: "O‘zbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirligi",
                            en: "Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan"
                        },
                link: "https://gov.uz/oz/edu",
            },
            {
                icon: <img src="https://daraja.ilmiy.uz/favicon.ico" alt="" />,
                title:  {
                            uz: "Oliy taʼlimdan keyingi taʼlimni muvofiqlashtirishning yagona elektron tizimi",
                            en: "Unified electronic system of coordination of postgraduate education",
                        },
                link: "https://daraja.ilmiy.uz",
            },
            {
                // Тот же случай — loyiha.ilmiy.uz/favicon.ico отдавал HTML.
                // Реальный favicon сайта лежит по другому пути (см. его
                // собственный <link rel="icon">).
                icon: <img src="https://loyiha.ilmiy.uz/assets/media/logos/favicon.png" alt="" />,
                title:  {
                            uz: "Davlat ilmiy dasturlarini shakllantirish va monitoring qilish yagona intellektual elektron platformasi",
                            en: "Unified intellectual electronic platform for the formation and monitoring of state scientific programs",
                        },
                link: "https://loyiha.ilmiy.uz",
            }
        ],
        [
            {
                icon: <img src="https://www.arxeologiya.uz/wp-content/uploads/2024/04/newlogo.jpg" alt="" />,
                title:  {
                            uz: "Samarqand Arxeologiya Instituti",
                            en: "Samarkand Institute of Archaeology",
                        },
                link: "https://www.arxeologiya.uz",
            },
            {
                icon: <img src="https://uzarchaeology.uz/assets/logo-CqxLmTt7.png" alt="" />,
                title:  {
                            uz: "O'zbekiston arxeologik yodgorliklar xaritasi",
                            en: "Map of Archaeological Monuments of Uzbekistan",
                        },
                link: "https://uzarchaeology.uz/",
            },
        ],
    ];



    return (
        <section className="home-page__section">
            
            <div className="home-page__section__stats-section">

                <div className="home-page__section__stats-section__wrapper">
                    {
                        data.map((item, index) => {
                            const content = (
                                <>
                                    {item.icon}
                                    <div className="home-page__section__number">
                                        {isVisible ? (
                                            <CountUp start={0} end={item.number} duration={3} separator="" /> // Animate number when visible
                                        ) : (
                                            <span>0</span>
                                        )}
                                    </div>
                                    <div className="home-page__section__label">{item.label[language]}</div>
                                </>
                            );

                            // item.link — внешняя ссылка (напр. WoS/Scopus -> t.me/anthropubhub).
                            // react-router <Link to="https://..."> внешние URL не открывает как
                            // внешние, поэтому тут обычный <a target="_blank">, не <Link>.
                            return item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="home-page__section__stat-item home-page__section__stat-item--link"
                                    key={index}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div className="home-page__section__stat-item" key={index}>
                                    {content}
                                </div>
                            );
                        })
                    }
                </div>

            </div>

            <div className='home-page__section__cta__wrapper'>
                <div className="home-page__section__cta">
                    <p className="home-page__section__cta-text">
                        {
                            language === "uz" ? "Sizda savollar mavjudmi yoki Sizga yordam kerakmi?" : language === "ru" ? "У вас есть вопросы или вам нужна помощь?" : "Do you have any questions or need help?"
                        }
                    </p>
                    <button className="home-page__section__cta-button">
                        <Link to={`contacts`}>
                            {
                                language === "uz" ? "Biz bilan bog‘laning" : language === "ru" ? "Связаться с нами" : "Contact us"
                            }
                        </Link>
                    </button>
                </div>
            </div>

            <div className="home-page__section__resources">
                <h2 className="home-page__section__resources-title">Foydali manbalar</h2>
                <div className="home-page__section__resources-columns">
                    {resources1.map((column, colIndex) => (
                        <div className="home-page__section__resources-column" key={colIndex}>
                            {column.map((item, index) => {
                                const href = /^https?:\/\//.test(item.link) ? item.link : `https://${item.link}`;
                                const displayLink = href.replace(/^https?:\/\//, '');
                                return (
                                    <div className="home-page__section__resources-item" key={index}>
                                        <div className="home-page__section__resources-icon">{item.icon}</div>
                                        <div>
                                            <p className="home-page__section__resources-text">
                                                {item.title[language] || item.title.uz}
                                            </p>
                                            <Link
                                                to={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="home-page__section__resources-link"
                                            >
                                                {displayLink}
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
