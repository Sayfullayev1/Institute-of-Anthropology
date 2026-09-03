import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

const ETHICS_REGULATION_PDF_URL =
    "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/EthicsCommitteeDocument/1788354106640-339684046-Etika%20Nizomi.pdf";

const ETHICS_POLICY_PDF_URL =
    "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/EthicsCommitteeDocument/1788354110891-899298690-Etika%20siyosati.pdf";

// Etika Nizomi (regulation) belgilagan tarkib: rais + kotib + 3 a'zo — 5 kishi.
const COMMISSION_MEMBERS = [
    { name: 'Z.O. Raxmanov', role: { uz: 'Rais', en: 'Chairperson' } },
    { name: 'D.A. Alimova', role: { uz: "A'zo", en: 'Member' } },
    { name: 'B.M. Bobodjonov', role: { uz: "A'zo", en: 'Member' } },
    { name: 'E.E. Asanov', role: { uz: "A'zo", en: 'Member' } },
    { name: 'L.V. Pak', role: { uz: 'Kotib', en: 'Secretary' } },
];

export default function Section() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="ethics-committee-page__section">
            <a
                className="ethics-committee-page__pdfLink"
                href={ETHICS_REGULATION_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'en'
                    ? 'Ethics Regulation (PDF)'
                    : "Etika nizomi (PDF)"}
            </a>

            <a
                className="ethics-committee-page__pdfLink"
                href={ETHICS_POLICY_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'en'
                    ? 'Ethics Policy (PDF)'
                    : "Etika siyosati (PDF)"}
            </a>

            <div className="ethics-committee-page__composition">
                <h3 className="ethics-committee-page__compositionTitle">
                    {language === 'en'
                        ? 'Composition of the Ethics Commission of the Institute of Anthropology:'
                        : 'Antropologiya institutida Etika komissiyasi tarkibi:'}
                </h3>

                <ol className="ethics-committee-page__memberList">
                    {COMMISSION_MEMBERS.map((member) => (
                        <li key={member.name} className="ethics-committee-page__memberItem">
                            <span className="ethics-committee-page__memberName">{member.name}</span>
                            <span className="ethics-committee-page__memberRole">{member.role[language] || member.role.uz}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
