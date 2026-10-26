import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// F.I.O. tarjima qilinmaydi — bu ism.
const GROUPS = [
    {
        groupTitle: { uz: 'Fan doktorlari, professorlar', en: 'Doctors of Science and Professors' },
        members: [
            "Abdulhamid Anarbayev",
            "Ahmadali Asqarov",
            "Baxtiyor Babadjanov",
            "Dilorom Alimova",
            "Farhod Maksud",
            "Feruza Shamukaramova",
            "G'aybulla Boboyorov",
            "Oksana Pugovkina",
            "Rustam Suleymanov"
        ]
    },
    {
        groupTitle: {
            uz: 'Fan nomzodlari va falsafa doktorlari, katta ilmiy xodimlar',
            en: 'PhDs and Senior Researchers',
        },
        members: [
            "Akmal Muxammadiyev",
            "Aleksey Gritsina",
            "Azamat Zakirov",
            "Baxtiyor Alimdjanov",
            "Bekzod Isabekov",
            "Durdonaxon Murodova",
            "Eldar Asanov",
            "Gennadiy Bogomolov",
            "Malika To'xtayeva",
            "Margarita Filanovich",
            "Rahmonali Murodaliyev",
            "Sergey Baratov",
            "Shuhrat Adilov",
            "Saida Ilyasova",
            "Yelena Gordeyeva",
            "Zafar Rahmonov",
        ],
    },
];

const CONTENT = {
    uz: { title: 'Ilmiy rahbarlar' },
    en: { title: 'Research Advisors' },
};

export default function Section() {
    const { language } = useContext(LanguageContext);
    const { title } = CONTENT[language] || CONTENT.uz;

    return (
        <section className="research-advisors-page__section">
            <h2 className="research-advisors-page__title">{title}</h2>

            <div className="research-advisors-page__columns">
                {GROUPS.map((group) => (
                    <div className="research-advisors-page__column" key={group.groupTitle.uz}>
                        <h3 className="research-advisors-page__groupTitle">
                            {group.groupTitle[language] || group.groupTitle.uz}
                        </h3>

                        <ul className="research-advisors-page__list">
                            {group.members.map((name, i) => (
                                <li key={name} className="research-advisors-page__list__item">
                                    <span className="research-advisors-page__list__num">{i + 1}.</span>
                                    <span className="research-advisors-page__list__name">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
