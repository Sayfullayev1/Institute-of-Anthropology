import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// PDF загружен через POST /api/documents/:category (project2/routes/documentsRoute) —
// хранится в R2 по пути documents/HigherAttestationCommissionDocument/... Это состав
// DSc.05/2025.27.12.Tar.04.01 — Ilmiy Kengash, присуждающий научные степени.
const HIGHER_ATTESTATION_COMMISSION_PDF_URL =
  "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/HigherAttestationCommissionDocument/1787668168351-701326332-oak.pdf";

const CONTENT = {
    uz: {
        title: 'Ilmiy darajalar beruvchi Ilmiy Kengash',
        intro:
            "Institut huzurida O'zbekiston Respublikasi Oliy attestatsiya komissiyasi tomonidan tasdiqlangan DSc.05/2025.27.12.Tar.04.01 raqamli ilmiy darajalar beruvchi Ilmiy kengash faoliyat yuritadi. Kengash 07.00.06 — arxeologiya va 07.00.07 — etnografiya, etnologiya va antropologiya ixtisosliklari bo'yicha falsafa doktori (PhD) va fan doktori (DSc) ilmiy darajalarini berish bo'yicha dissertatsiyalarni qabul qiladi va himoyasini tashkil etadi.",
        pdfLinkText: 'Ilmiy kengash tarkibi (PDF)',
    },
    en: {
        title: 'Council for the Conferral of Academic Degrees',
        intro:
            "The Institute hosts the Scientific Council DSc.05/2025.27.12.Tar.04.01, approved by the Higher Attestation Commission of the Republic of Uzbekistan, authorized to confer academic degrees. The Council accepts and organizes the defense of dissertations for the degrees of Doctor of Philosophy (PhD) and Doctor of Science (DSc) in the specialties 07.00.06 — Archaeology and 07.00.07 — Ethnography, Ethnology and Anthropology.",
        pdfLinkText: 'Scientific Council Composition (PDF)',
    },
};

export default function Section() {
    const { language } = useContext(LanguageContext);
    const c = CONTENT[language] || CONTENT.uz;

    return (
        <section className="council-for-conferral-of-academic-degrees-page__section">
            <h2 className="council-for-conferral-of-academic-degrees-page__title">{c.title}</h2>
            <p className="council-for-conferral-of-academic-degrees-page__paragraph">{c.intro}</p>

            <a
                className="council-for-conferral-of-academic-degrees-page__pdfLink"
                href={HIGHER_ATTESTATION_COMMISSION_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {c.pdfLinkText}
            </a>

        </section>
    );
}
