import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

import askarovImg from '@/public/images/tradeUnionImages/ollabergan-askarov.jpg';
import pugovkinaImg from '@/public/images/tradeUnionImages/oksana-pugovkina.jpg';
import badriddinovImg from '@/public/images/tradeUnionImages/doston-badriddinov.jpg';
import bekmirzayevImg from '@/public/images/tradeUnionImages/islomjon-bekmirzayev.jpg';
import nishonboyImg from '@/public/images/tradeUnionImages/qulboyev-nishonboy.jpg';

const MEMBERS = [
    {
        photo: askarovImg,
        name: 'Ollabergan Askarov',
        position: {
            uz: "Kasaba uyushmasi raisi: Katta ilmiy xodim",
            en: 'Trade Union Chairman: Senior Researcher',
        },
    },
    {
        photo: pugovkinaImg,
        name: 'Oksana Pugovkina',
        position: {
            uz: "Kasaba uyushmasi a'zosi: Yetakchi ilmiy xodim. DSc.",
            en: 'Trade Union Member: Leading Researcher, DSc.',
        },
    },
    {
        photo: badriddinovImg,
        name: 'Doston Badriddinov',
        position: {
            uz: "Kasaba uyushmasi kotibi: Katta ilmiy xodim",
            en: 'Trade Union Secretary: Senior Researcher',
        },
    },
    {
        photo: bekmirzayevImg,
        name: 'Islomjon Bekmirzayev',
        position: {
            uz: "Kasaba uyushmasi a'zosi: Katta ilmiy xodim",
            en: 'Trade Union Member: Senior Researcher',
        },
    },
    {
        photo: nishonboyImg,
        name: 'Qulboyev Nishonboy',
        position: {
            uz: "Kasaba uyushmasi a'zosi: Katta ilmiy xodim",
            en: 'Trade Union Member: Senior Researcher',
        },
    },
];

export default function Section() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="institute-trade-union-committee-page__section">
            <ul className="institute-trade-union-committee-page__section__list">
                {MEMBERS.map((m) => (
                    <li key={m.name} className="institute-trade-union-committee-page__section__item">
                        <div className="institute-trade-union-committee-page__section__item__img">
                            <img src={m.photo} alt={m.name} />
                        </div>
                        <div className="institute-trade-union-committee-page__section__item__text">
                            <h3>{m.name}</h3>
                            <p className="job-title">{m.position[language]}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
