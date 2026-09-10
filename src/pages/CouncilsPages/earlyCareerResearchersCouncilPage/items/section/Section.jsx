import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

const YOK_ACTION_PLAN_PDF_URL =
    "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/EarlyCareerResearchersCouncilDocument/1788527582260-792714367-YOK%20DASTUR.pdf";

// F.I.O. tarjima qilinmaydi — bu ism, lavozimi har bir til uchun alohida.
const MEMBERS = [
    { name: "Qulboyev Nishonboy Sobur o'g'li", position: { uz: 'Yosh olimlar kengashi raisi', en: 'Chairman of the Early-Career Researchers Council' } },
    { name: "Askarov Ollabergan Ikrom o'g'li", position: { uz: "Rais o'rinbosari", en: 'Deputy Chairman' } },
    { name: 'Oynazarov Xoliyor Gaimnazarovich', position: { uz: "A'zo", en: 'Member' } },
    { name: 'Asanov Eldar Enverivich', position: { uz: "A'zo", en: 'Member' } },
    { name: "Adilov Jamshid Xasan o'g'li", position: { uz: "A'zo", en: 'Member' } },
    { name: "Badirdinov Doston Rustam o'g'li", position: { uz: "A'zo", en: 'Member' } },
    { name: "Najmiddinov Abdulbositxon Ne'matjon o'g'li", position: { uz: "A'zo", en: 'Member' } },
    { name: "Artikov Ulug'bek Latifjon o'g'li", position: { uz: "A'zo", en: 'Member' } },
    { name: "Choriyev Shohrux Xoltura o'g'li", position: { uz: "A'zo", en: 'Member' } },
    { name: "Bekmirzayev Islomjon Ibroxim o'g'li", position: { uz: "A'zo", en: 'Member' } },
    { name: 'Yakubov Davlat Farruxovich', position: { uz: "A'zo", en: 'Member' } },
    { name: 'Uralov Abror', position: { uz: "A'zo", en: 'Member' } },
];

const CONTENT = {
    uz: {
        title: 'Kengash haqida',
        membersTitle: "Kengash a'zolari",
        paragraphs: [
            "O'zbekiston Fanlar akademiyasi Antropologiya instituti huzuridagi Yosh olimlar kengashi – institut qoshidagi doimiy faoliyat yurituvchi jamoat tuzilmasi.",
              "Kengash tarkibiga rais, uning o'rinbosari va a'zolar kiradi.",
            "Kengash tarkibida 40 yoshgacha bo'lgan doktorantlar, tayanch doktorantlar, stajyor-tadqiqotchilar, mustaqil izlanuvchilar, yosh olimlar hamda mutaxassislar mavjud.",
            "Kengash tomonidan muntazam ravishda ilmiy seminarlar yo'lga qo'yilgan bo'lib, ularda antropologiya fanining turli yo'nalishlarini qamrab olinadi.",
        ],
    },
    en: {
        title: 'About the Council',
        membersTitle: 'Council Members',
        paragraphs: [
            "The Early-Career Researchers Council under the Institute of Anthropology of the Academy of Sciences of the Republic of Uzbekistan is a permanent public body operating alongside the Institute.",
            "The Council consists of a Chairperson, a Deputy Chairperson, and members.",
            "The Council includes Doctor of Science candidates, PhD candidates, trainee researchers, independent researchers, early-career scientists and specialists under the age of 40.",
            "The Council regularly holds scientific seminars covering various fields of anthropological science.",
        ],
    },
};

export default function Section() {
    const { language } = useContext(LanguageContext);
    const { title, membersTitle, paragraphs } = CONTENT[language] || CONTENT.uz;

    return (
        <section className="early-career-researchers-council-page__section">
            <h2 className="early-career-researchers-council-page__title">{title}</h2>

            {paragraphs.map((text, i) => (
                <p key={i} className="early-career-researchers-council-page__paragraph">
                    {text}
                </p>
            ))}

            <a
                className="early-career-researchers-council-page__pdfLink"
                href={YOK_ACTION_PLAN_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'en'
                    ? 'Early-Career Researchers Council Action Plan (PDF)'
                    : "Yosh olimlar kengashi (PDF)"}
            </a>

            <h2 className="early-career-researchers-council-page__title early-career-researchers-council-page__title--members">
                {membersTitle}
            </h2>

            <ul className="early-career-researchers-council-page__membersList">
                {MEMBERS.map((m, i) => (
                    <li key={m.name} className="early-career-researchers-council-page__membersList__item">
                        <span className="early-career-researchers-council-page__membersList__num">{i + 1}.</span>
                        <span className="early-career-researchers-council-page__membersList__name">{m.name}</span>
                        <span className="early-career-researchers-council-page__membersList__position">{m.position[language]}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
