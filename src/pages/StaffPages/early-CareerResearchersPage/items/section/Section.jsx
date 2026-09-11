import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

const MEMBER = { uz: "A'zo", en: 'Member' };

// F.I.O. tarjima qilinmaydi — bu ism, lavozimi har bir til uchun alohida.
const MEMBERS = [
    { name: "Qulboyev Nishonboy Sobur o'g'li", position: { uz: 'Yosh olimlar kengashi raisi', en: 'Chairman of the Early-Career Researchers Council' } },
    { name: "Askarov Ollabergan Ikrom o'g'li", position: { uz: "Rais o'rinbosari", en: 'Deputy Chairman' } },
    { name: 'Oynazarov Xoliyor Gaimnazarovich', position: MEMBER },
    { name: 'Asanov Eldar Enverivich', position: MEMBER },
    { name: "Adilov Jamshid Xasan o'g'li", position: MEMBER },
    { name: "Badirdinov Doston Rustam o'g'li", position: MEMBER },
    { name: "Najmiddinov Abdulbositxon Ne'matjon o'g'li", position: MEMBER },
    { name: "Artikov Ulug'bek Latifjon o'g'li", position: MEMBER },
    { name: "Choriyev Shohrux Xoltura o'g'li", position: MEMBER },
    { name: "Bekmirzayev Islomjon Ibroxim o'g'li", position: MEMBER },
    { name: 'Yakubov Davlat Farruxovich', position: MEMBER },
    { name: "Uralov Abror Abdulla o'g'li", position: MEMBER },
    { name: 'Priniyazov Jetkerbay Adilbayevich', position: MEMBER },
    { name: "Murodaliyev Raxmonali Xaydarali o'g'li", position: MEMBER },
    { name: "Abduraimov Ro'ziboy Qobul o'g'li", position: MEMBER },
    { name: "Jumag'ulov Anvar Baxtiyor o'g'li", position: MEMBER },
    { name: 'Adilova Madina Farxod qizi', position: MEMBER },
    { name: "Maxmudova Mahliyo Ma'rufjon qizi", position: MEMBER },
    { name: 'Pozilova Xumoraxon Oqilbek qizi', position: MEMBER },
    { name: "Ergashev Orifjon Turg'unboy o'g'li", position: MEMBER },
    { name: "Bolliyev Safarali Almurat o'g'li", position: MEMBER },
    { name: 'Gulbayev Shohrux Mirzo Shuxratovich', position: MEMBER },
    { name: "Abdullayev Jahongir Shuhrat o'g'li", position: MEMBER },
    { name: "Abdujabborov Kamoliddin Nabijon o'g'li", position: MEMBER },
    { name: "Boboyev Mirodillo Qosimjon o'g'li", position: MEMBER },
    { name: 'Primova Sitora Orif qizi', position: MEMBER },
    { name: 'Xomidjonova Maftunaxon Azimjon qizi', position: MEMBER },
    { name: 'Sodiqova Dilnoza Odiljon qizi', position: MEMBER },
    { name: "Tojiboyev Ravshanbek Isaqjon o'g'li", position: MEMBER },
    { name: 'Azatov Allayor Erkinovna', position: MEMBER },
    { name: 'Baymuratova Xurliman Kuatbayevna', position: MEMBER },
    { name: "Bolliyev Isoq Almurat o'g'li", position: MEMBER },
    { name: 'Akbarova Kamilla Shuxrat qizi', position: MEMBER },
    { name: "Mirzoxidova E'zoza", position: MEMBER },
];

const CONTENT = {
    uz: {
        title: 'Yosh olimlar tarkibi',
    },
    en: {
        title: 'Composition of Early-Career Researchers',
    },
};

export default function Section() {
    const { language } = useContext(LanguageContext);
    const { title } = CONTENT[language] || CONTENT.uz;

    return (
        <section className="early-career-researchers-page__section">
            <h2 className="early-career-researchers-page__title">{title}</h2>

            <ul className="early-career-researchers-page__membersList">
                {MEMBERS.map((m, i) => (
                    <li key={m.name} className="early-career-researchers-page__membersList__item">
                        <span className="early-career-researchers-page__membersList__num">{i + 1}.</span>
                        <span className="early-career-researchers-page__membersList__name">{m.name}</span>
                        <span className="early-career-researchers-page__membersList__position">{m.position[language]}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
