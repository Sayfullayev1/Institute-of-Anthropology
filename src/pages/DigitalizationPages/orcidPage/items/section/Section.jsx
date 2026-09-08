import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

const POSITIONS = {
    headPhd: { uz: "Bo'lim boshlig'i, PhD", en: 'Head of Department, PhD' },
    seniorPhd: { uz: 'Katta ilmiy xodim, PhD', en: 'Senior Researcher, PhD' },
    junior: { uz: 'Kichik ilmiy xodim', en: 'Junior Researcher' },
};

const DEPARTMENTS = [
    {
        title: { uz: "Geoantropologiya bo'limi", en: 'Geoanthropology Department' },
        members: [
            { name: 'Muxammadiyev A.', orcid: '0009-0008-7183-9125' },
            { name: 'Muxtarov G. A.', orcid: '0000-0002-5405-0041' },
            { name: 'Gordeeva E. A.', orcid: '0009-0008-5093-254X' },
            { name: 'Oynazarov X.', orcid: '0009-0001-7906-7106' },
            { name: 'Murodova D.', orcid: '0000-0003-3895-4080' },
            { name: 'Isabekov B.', orcid: '0009-0006-3659-2521' },
            { name: 'Badriddinov D.', orcid: '0009-0002-4406-9870' },
            { name: 'Shadmanova A.', orcid: '0009-0001-9697-4824' },
        ],
    },
    {
        title: { uz: "Arxeologik antropologiya bo'limi", en: 'Archaeological Anthropology Department' },
        members: [],
    },
    {
        title: { uz: "Tarixiy antropologiya bo'limi", en: 'Historical Anthropology Department' },
        members: [],
    },
    {
        title: { uz: "Ijtimoiy-madaniy antropologiya bo'limi", en: 'Socio-Cultural Anthropology Department' },
        members: [
            { name: 'Eldar Asanov', orcid: '0000-0002-4400-2310' },
            { name: 'Baxtiyor Bobojonov', orcid: '0009-0001-6718-9819' },
            { name: "G'aybulla Boboyorov", orcid: '0000-0003-3405-4325' },
            { name: 'Ollobergan Asqarov', orcid: '0009-0009-0404-4493' },
            { name: 'Abror Uralov', orcid: '0000-0002-8447-3918' },
            { name: 'Jetker Pirniyazov', orcid: '0009-0008-5362-4294' },
            { name: 'Davlat Yakubov', orcid: '0009-0008-5640-1184' },
            { name: 'Lyudmila Kim', orcid: '0009-0007-7836-9149' },
        ],
    },
    {
        title: { uz: "Arxeologik geofizika bo'limi", en: 'Archaeological Geophysics Department' },
        members: [
            { name: 'Zakirov Azamat Shuxratovich', position: POSITIONS.headPhd, orcid: '0000-0002-9245-6747' },
            { name: 'Yanbukhtin Ilyas Rustamovich', position: POSITIONS.seniorPhd, orcid: '0000-0003-0019-9702' },
            { name: "Musaev Ulug'bek", position: POSITIONS.junior, orcid: '0009-0001-0151-8683' },
            { name: 'Qulboyev Nishonboy', position: POSITIONS.junior, orcid: '0009-0002-7741-102X' },
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
                            <div className="orcid-page__section__dept__member__info">
                                <span className="orcid-page__section__dept__member__name">{m.name}</span>
                                {m.position && (
                                    <span className="orcid-page__section__dept__member__position">
                                        {m.position[language]}
                                    </span>
                                )}
                            </div>
                            <a
                                className="orcid-page__section__dept__member__orcid"
                                href={`https://orcid.org/${m.orcid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-orcid" />
                                {m.orcid}
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
