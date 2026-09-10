import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// PDF'lar POST /api/documents/:category (project2/routes/documentsRoute) orqali
// yuklangan, R2'da documents/ExpertiseDocument/... yo'lida saqlanadi.
const DOCUMENTS = [
    {
        url: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/ExpertiseDocument/1789073633569-381098913-Buyruq_348-son_2024-09-20_Ilmiy-texnik_kengashlar.pdf',
        date: '2024-yil 20-sentabr, №348-son',
        title: {
            uz: "Vazirlik huzuridagi fan yo'nalishlari bo'yicha Ilmiy-texnik kengashlar tarkibini tasdiqlash to'g'risida (PDF)",
            en: 'On approving the composition of the Scientific-Technical Councils by fields of science under the Ministry (PDF)',
        },
    },
    {
        url: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/ExpertiseDocument/1789073635069-79055682-Buyruq_163-son_9-ilova_2025-05-07_Tarix_va_arxeologiya_ITK_tarkibi.pdf',
        date: '2025-yil 7-may, №163-son, 9-ilova',
        title: {
            uz: "«Tarix va arxeologiya fanlari» bo'yicha Ilmiy-texnik kengash tarkibi (PDF)",
            en: 'Composition of the Scientific-Technical Council for "History and Archaeology Sciences (PDF)"',
        },
    },
    {
        url: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/ExpertiseDocument/1789073635946-876028608-Buyruq_446-son_2025-11-11_Tarix_va_arxeologiya_ITK_tarkibi_yangilangan.pdf',
        date: '2025-yil 11-noyabr, №446-son',
        title: {
            uz: "Vazirlik huzuridagi fan yo'nalishi bo'yicha Ilmiy-texnik kengash tarkibini tasdiqlash to'g'risida (yangilangan tarkib) (PDF)",
            en: "On approving the (updated) composition of the Scientific-Technical Council by field of science under the Ministry (PDF)",
        },
    },
];

const CONTENT = {
    uz: {
        title: 'Ekspertlik',
        intro:
            "Institut O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi huzuridagi «Tarix va arxeologiya fanlari» bo'yicha Ilmiy-texnik kengash faoliyatida ishtirok etadi. Ushbu kengash ilmiy va ilmiy-texnik ekspertiza, shuningdek, ilmiy darajalar va unvonlar berish jarayonida ekspert vazifasini bajaradi.",
        documentsTitle: 'Tegishli hujjatlar',
    },
    en: {
        title: 'Expertise',
        intro:
            'The Institute participates in the work of the Scientific-Technical Council for "History and Archaeology Sciences" under the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan. This Council performs scientific and scientific-technical expert review, as well as expert functions in the process of conferring academic degrees and titles.',
        documentsTitle: 'Related documents',
    },
};

export default function Section() {
    const { language } = useContext(LanguageContext);
    const c = CONTENT[language] || CONTENT.uz;

    return (
        <section className="expertise-page__section">
            <h2 className="expertise-page__section__title">{c.title}</h2>
            <p className="expertise-page__section__paragraph">{c.intro}</p>

            <h3 className="expertise-page__section__subtitle">{c.documentsTitle}</h3>
            <ul className="expertise-page__section__docList">
                {DOCUMENTS.map((doc) => (
                    <li key={doc.url} className="expertise-page__section__docList__item">
                        <a href={doc.url} target="_blank" rel="noopener noreferrer">
                            {doc.title[language]}
                        </a>
                        <span className="expertise-page__section__docList__date">{doc.date}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
