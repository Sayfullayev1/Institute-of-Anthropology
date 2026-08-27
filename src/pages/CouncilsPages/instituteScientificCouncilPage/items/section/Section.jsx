import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';
import Convert from '../../localComponents/Convert/Convert';

// Данные (Nizom-документ + PDF состава) перенесены с страницы Ilmiy kengash
// (scientificCouncilPage) — это тот же самый реальный контент, только на
// отдельной странице "Institut ilmiy kengashi" (Kengashlar/Expansions).
// PDF загружен через POST /api/documents/:category (project2/routes/documentsRoute),
// хранится в R2 по пути documents/ScientificCouncilDocument/...
const SCIENTIFIC_COUNCIL_COMPOSITION_PDF_URL =
  "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/ScientificCouncilDocument/1787664349577-427483581-Imiy_Kengashi_tarkibi.pdf";

export default function Section() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="institute-scientific-council-page__section">

            <Convert language={language} />

            <a
                className="institute-scientific-council-page__pdfLink"
                href={SCIENTIFIC_COUNCIL_COMPOSITION_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'uz' ? 'Imiy Kengashi tarkibi (PDF)' : 'Scientific Council Composition (PDF)'}
            </a>

        </section>
    );
}
