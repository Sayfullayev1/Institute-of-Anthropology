import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// F.I.O. tarjima qilinmaydi — bu ism.
const GROUPS = [
    {
        groupTitle: { uz: 'Fan doktorlari, professorlar', en: 'Doctors of Science, Professors' },
        members: [
            'Maksudov Farxod Alijonovich',
            'Anarbayev Abdulxamid',
            'Alimova Dilorom Agzamovna',
            'Babadjanov Baxtiyor Miraimovich',
            "Boboyorov G'aybulla Boliyevich",
            'Pugovkina Oksana Gennadevna',
            'Asqarov Axmadali Asqarovich',
            'Suleymanov Rustam Xamidovich',
        ],
    },
    {
        groupTitle: {
            uz: 'Fan nomzodlari va falsafa doktorlari, katta ilmiy xodimlar',
            en: 'Candidates of Science and PhDs, Senior Researchers',
        },
        members: [
            'Raxmonov Zafar Odilovich',
            'Murodova Durdonaxon Xabibulloyevna',
            'Tuxtayeva Malika Saydiaxralovna',
            "Muxammadiyev Akmal G'aniyevich",
            'Baratov Sergey Ravshanovich',
            'Filanovich Margarita Ivanovna',
            'Bogomolov Gennadiy Igoryevich',
            'Adilov Shuxrat Teshaboyevich',
            'Ilyasova Saida Ravilyevna',
            'Alimdjanov Baxtiyor Abduxakimovich',
            'Asanov Eldar Enverovich',
            'Gritsina Aleksey Andreyevich',
            "Isabekov Bekzod Imomali O'g'li",
            'Gordeyeva Yelena Anatoliyevna',
            'Zakirov Azamat Shuxratovich',
            "Murodaliyev Raxmonali Xaydarali o'g'li",
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
