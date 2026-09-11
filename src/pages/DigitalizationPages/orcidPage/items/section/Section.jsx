import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// Ism har bir a'zo uchun bitta qator — ORCID sahifasining o'zida (orcid.org/<id>)
// qanday ko'rsatilsa, shundayligicha (agar ORCIDda "credit name" bo'lsa — aynan o'sha,
// bo'lmasa "given-names family-name" tartibida). Til bo'yicha tarjima qilinmaydi —
// bu ism, tarjima kerak emas.
const DEPARTMENTS = [
    {
        title: { uz: 'Rahbariyat', en: 'Management' },
        members: [
            { name: 'Farhod Maksudov', orcid: '0000-0002-8492-0634' },
            { name: 'Zafar Rakhmanov', orcid: '0000-0001-9083-791X' },
            { name: 'Jamshid Adilov', orcid: '0009-0008-3067-0415' },
        ],
    },
    {
        title: { uz: "Geoantropologiya bo'limi", en: 'Geoanthropology Department' },
        members: [
            { name: 'Akmal Mukhammadiev', orcid: '0009-0008-7183-9125' },
            { name: 'Gayratkhon Mukhtarov', orcid: '0000-0002-5405-0041' },
            { name: 'Елена Гордеева', orcid: '0009-0008-5093-254X' },
            { name: 'Xoliyor Oynazarov', orcid: '0009-0001-7906-7106' },
            { name: 'Durdonakhon Murodova', orcid: '0000-0003-3895-4080' },
            { name: 'Bexzod Isabekov', orcid: '0009-0006-3659-2521' },
            { name: 'Doston Badirdinov', orcid: '0009-0002-4406-9870' },
            { name: 'Anna Rustamovna Shadmanova', orcid: '0009-0001-9697-4824' },
        ],
    },
    {
        title: { uz: "Arxeologik antropologiya bo'limi", en: 'Archaeological Anthropology Department' },
        members: [
            { name: 'S.R. Baratov', orcid: '0000-0002-0269-7978' },
            { name: 'Abdulkhamidjon Anarbaev', orcid: '0009-0009-9309-3050' },
            { name: 'Saida Ilyasova', orcid: '0009-0004-6716-6029' },
            { name: 'Islomjon Bekmirzayev', orcid: '0009-0000-4400-4896' },
            { name: 'Sherbek Omanov', orcid: '0009-0000-0037-3315' },
            { name: 'Bahodir', orcid: '0009-0000-9046-317X' },
            { name: 'Абдулбоситхон Нажмиддинов', orcid: '0009-0006-9145-2310' },
            { name: 'Ulugbek Artikov', orcid: '0009-0007-6451-072X' },
            { name: 'Богомолов Геннадий', orcid: '0000-0002-7951-4746' },
        ],
    },
    {
        title: { uz: "Tarixiy antropologiya bo'limi", en: 'Historical Anthropology Department' },
        members: [
            { name: 'Bakhtiyor Alimdjanov', orcid: '0000-0002-8251-0201' },
            { name: 'Oksana Pugovkina', orcid: '0000-0002-7420-8897' },
            { name: 'Azizbek Tursunmetov', orcid: '0009-0005-1391-9416' },
            { name: 'Malika Tukhtayeva', orcid: '0000-0003-1456-1573' },
            { name: 'Шохрух Чориев', orcid: '0000-0001-6431-9836' },
            { name: 'Dilorom Alimova', orcid: '0009-0000-1660-3023' },
        ],
    },
    {
        title: { uz: "Ijtimoiy-madaniy antropologiya bo'limi", en: 'Socio-Cultural Anthropology Department' },
        members: [
            { name: 'Normurodova Nozliya', orcid: '0000-0002-4400-2310' },
            { name: 'Babajanov', orcid: '0009-0001-6718-9819' },
            { name: 'Gaybulla Babayarov', orcid: '0000-0003-3405-4325' },
            { name: 'Ollabegan Ikrom ugli', orcid: '0009-0009-0404-4493' },
            { name: 'Abror Uralov', orcid: '0000-0002-8447-3918' },
            { name: 'Jetkerbay Priniyazov', orcid: '0009-0008-5362-4294' },
            { name: 'Davlat Yakubov', orcid: '0009-0008-5640-1184' },
            { name: 'Lyudmila Pak', orcid: '0009-0007-7836-9149' },
        ],
    },
    {
        title: { uz: "Arxeologik geofizika bo'limi", en: 'Archaeological Geophysics Department' },
        members: [
            { name: 'Azamat Zakirov', orcid: '0000-0002-9245-6747' },
            { name: 'Ilyas Yanbukhtin', orcid: '0000-0003-0019-9702' },
            { name: 'Ulugbek Musaev', orcid: '0009-0001-0151-8683' },
            { name: 'Nishonboy Kulboev', orcid: '0009-0002-7741-102X' },
        ],
    },
];

function DepartmentBlock({ dept, language }) {
    return (
        <div className="orcid-page__section__dept">
            <h2 className="orcid-page__section__dept__title">{dept.title[language]}</h2>

            {dept.members.length > 0 && (
                <ul className="orcid-page__section__dept__list">
                    {dept.members.map((m) => (
                        <li key={m.orcid} className="orcid-page__section__dept__member">
                            <span className="orcid-page__section__dept__member__name">{m.name}</span>
                            <a
                                className="orcid-page__section__dept__member__orcid"
                                href={`https://orcid.org/${m.orcid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-orcid" />
                                <span>{m.orcid}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function Section() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="orcid-page__section">
            {DEPARTMENTS.map((dept) => (
                <DepartmentBlock key={dept.title.en} dept={dept} language={language} />
            ))}
        </section>
    );
}
