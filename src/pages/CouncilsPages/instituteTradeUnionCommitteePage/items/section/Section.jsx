import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

import askarovImg from '@/public/images/tradeUnionImages/ollabergan-askarov.jpg';
import pugovkinaImg from '@/public/images/tradeUnionImages/oksana-pugovkina.jpg';
import badriddinovImg from '@/public/images/tradeUnionImages/doston-badriddinov.jpg';
import bekmirzayevImg from '@/public/images/tradeUnionImages/islomjon-bekmirzayev.jpg';
import nishonboyImg from '@/public/images/tradeUnionImages/qulboyev-nishonboy.jpg';

// PDF загружен через POST /api/documents/:category (project2/routes/documentsRoute),
// хранится в R2 по пути documents/TradeUnionCommitteeDocument/...
const WORK_PLAN_2026_PDF_URL =
    "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/TradeUnionCommitteeDocument/1789049350325-335349959-Kasaba_uyushmasi_qomitasi_2026_ish_rejasi.pdf";

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

            <a
                className="institute-trade-union-committee-page__pdfLink"
                href={WORK_PLAN_2026_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'en'
                    ? 'Trade Union Committee Work Plan for 2026 (PDF)'
                    : "Kasaba uyushmasi qo'mitasining 2026 yilgi ish rejasi (PDF)"}
            </a>
        </section>
    );
}
