import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

const ANJUMAN_PDF_URL =
    'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/NationalEventsDocument/1793342964500-996080824-Anjuman_DASTURI_Fitrat140.pdf';

const ANJUMAN_DESCRIPTION = {
    uz: (
        <>
            O‘zbekiston Fanlar akademiyasi Antropologiya institutida taniqli jadid, antropolog olim va professor{' '}
            <strong className="national-events-page__highlight">Abdurauf Fitrat tavalludining 140 yilligiga</strong> bag‘ishlangan{' '}
            <strong className="national-events-page__highlight">“O‘zbekistonda arxeologik va antropologik tadqiqotlar”</strong> mavzusidagi Respublika ilmiy anjumani.
        </>
    ),
    en: (
        <>
            The Institute of Anthropology of the Academy of Sciences of the Republic of Uzbekistan held a Republican scientific conference on{' '}
            <strong className="national-events-page__highlight">“Archaeological and Anthropological Research in Uzbekistan”</strong>, dedicated to the{' '}
            <strong className="national-events-page__highlight">140th anniversary of the birth of Abdurauf Fitrat</strong>, a renowned Jadid, anthropologist and professor.
        </>
    ),
};

const RELATED_LINKS = [
    { url: 'https://oyina.uz/uz/posts/33072', label: 'Oyina.uz' },
    { url: 'https://uza.uz/cn/posts/abdurauf-fitrat-ilmiy-merosi-muloqot-markazida_839776', label: 'UzA' },
];

export default function Section() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="national-events-page__section">
            <p className="national-events-page__desc">{ANJUMAN_DESCRIPTION[language]}</p>

            <a
                className="national-events-page__pdfLink"
                href={ANJUMAN_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'en' ? 'Conference program (PDF)' : 'Anjuman dasturi (PDF)'}
            </a>

            <div className="national-events-page__about">
                <h3 className="national-events-page__aboutTitle">
                    {language === 'en' ? 'About the conference' : 'Anjuman haqida'}
                </h3>

                <ul className="national-events-page__linkList">
                    {RELATED_LINKS.map((item) => (
                        <li key={item.url}>
                            <a
                                className="national-events-page__link"
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
