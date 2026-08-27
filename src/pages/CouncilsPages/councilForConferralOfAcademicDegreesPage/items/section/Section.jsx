import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// PDF загружен через POST /api/documents/:category (project2/routes/documentsRoute) —
// хранится в R2 по пути documents/HigherAttestationCommissionDocument/... Это состав
// DSc.05/2025.27.12.Tar.04.01 — Ilmiy Kengash, присуждающий научные степени.
const HIGHER_ATTESTATION_COMMISSION_PDF_URL =
  "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/HigherAttestationCommissionDocument/1787668168351-701326332-oak.pdf";

export default function Section() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="council-for-conferral-of-academic-degrees-page__section">

            <a
                className="council-for-conferral-of-academic-degrees-page__pdfLink"
                href={HIGHER_ATTESTATION_COMMISSION_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'en' ? 'Higher Attestation Commission (PDF)' : 'OAK Ilmiy Kengashi (PDF)'}
            </a>

        </section>
    );
}
