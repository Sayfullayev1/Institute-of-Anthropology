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
            icon: <i className="fa-brands fa-envira"></i>,
            number: 10000,
            label: {
                uz: "GERBARIY KOLLEKSIYASI",
                ru: "ГЕРБАРИЙ КОЛЛЕКЦИЯСИ",
                en: "HERBARIUM COLLECTION",
            },
        },
        {
            icon: <i className="fa fa-users"></i>,
            number: 41,
            label: {
                uz: "ILMIY XODIMLAR",
                ru: "УЧЕНЫЕ",
                en: "SCIENTISTS",
            },
        },
        {
            icon: <i className="fa-solid fa-signal"></i>,
            number: 15,
            label: {
                uz: "AKTIV LOYIHALAR",
                ru: "АКТИВНЫЕ ПРОЕКТЫ",
                en: "ACTIVE PROJECTS",
            },
        },
        {
            icon: <i className="fa-solid fa-pen-to-square"></i>,
            number: 700,
            label: {
                uz: "ILMIY MAQOLALAR",
                ru: "НАУЧНЫЕ СТАТЬИ",
                en: "SCIENTIFIC ARTICLES",
            },
        },
    ];


    const resources = [
        
        {
            icon: <img src="https://www.academy.uz/dist/img/logo.png" alt="Icon 1" />,
            title: "O‘zbekiston Respublikasi Fanlar akademiyasi",
            link: "academy.uz",
        },
        {
            icon: <img src="https://www.scimagojr.com/multisitebar/sjr-sitebar-128.png" alt="Icon 2" />,
            title: "SCImago Journal & Country Rank",
            link: "scimagojr.com/",
        },
        {
            icon: <img src="https://my.academy.uz/img/logo.png" alt="Icon 2" />,
            title: "Ўзбекистон Республикаси Фанлар академияси",
            link: "my.academy.uz",
        },
        {
            icon: <img src="https://botany.uz/wp-content/uploads/2018/04/1473339456usefull2.png" alt="Icon 3" />,
            title: "Interaktiv davlat xizmatlarining Yagona portali",
            link: "my.gov.uz",
        },
        {
            icon: <img src="https://oak.uz/images/gerb.png"  alt="OAK Logo" />,
            title: "O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi huzuridagi Oliy attestatsiya komissiyasi",
            link: "oak.uz",
        },
        {
            icon: <img src="https://academy.uz/favicon.ico"  alt="Icon 3" />,
            title: "Oliy taʼlimdan keyingi taʼlimni muvofiqlashtirishning yagona elektron tizimi",
            link: "daraja.ilmiy.uz",
        },
        {
            icon: <img src="https://academy.uz/favicon.ico"  alt="OAK Logo" />,
            title: "Davlat ilmiy dasturlarining yagona intellektual elektron platformasi",
            link: "academy.uz/ilmiy_axborot_markazi",
        }
    ];

    return (
        <section className="home-page__section">
            
            <div className="home-page__section__stats-section">

                <div className="home-page__section__stats-section__wrapper">
                    {
                        data.map((item, index) => (
                            <div className="home-page__section__stat-item" key={index}>
                                {item.icon}
                                <div className="home-page__section__number">
                                    {isVisible ? (
                                        <CountUp start={0} end={item.number} duration={3} separator="" /> // Animate number when visible
                                    ) : (
                                        <span>0</span>
                                    )}
                                </div>
                                <div className="home-page__section__label">{item.label[language]}</div>
                            </div>
                        ))
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
                <div className="home-page__section__resources-grid">
                    {resources.map((item, index) => (
                        <div className="home-page__section__resources-item" key={index}>
                            <div className="home-page__section__resources-icon">{item.icon}</div>
                            <div>
                                <p className="home-page__section__resources-text">{item.title}</p>
                                <Link
                                    to={`https://${item.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="home-page__section__resources-link"
                                >
                                    {item.link}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
