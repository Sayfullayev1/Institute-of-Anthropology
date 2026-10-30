import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// ВРЕМЕННО: закреплённый снимок данных двух монографий (взяты с
// /monographs на момент публикации этой страницы), а не живой список по
// /api/monographs. Сделано намеренно — если кто-то отредактирует или
// удалит другую монографию в админке, порядковые места сместятся, и сюда
// случайно попадёт не та запись. Когда появится отдельный критерий отбора
// "совместных изданий", заменить на реальный API-источник.
const JOINT_PUBLICATIONS = [
  {
    title: {
      uz: "Markaziy Osiyo asrlar osha: jamiyat, madaniyat, matnlar. Prof. Dilorom Alimova sharafiga bag'ishlangan maqolalar to'plami",
      en: 'Central Asia Through the Centuries: Society, Culture, Texts. Essays in Honor of Prof. Dilorom Alimova',
    },
    year: '2025',
    citation: {
      uz: 'Ed. by Marianne Kamp and Florian Schwarz. Tashkent & Vienna: Akademnashr, 2025. 400 p.',
      en: 'Ed. by Marianne Kamp and Florian Schwarz. Tashkent & Vienna: Akademnashr, 2025. 400 p.',
    },
    pdf: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/monographs/pdfs/1788782649976-244203543-_yangi_nashr_Central_Asia_Through_the_Centuries_Society_Culture.pdf',
    image: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/monographs/images/1788783038616-877545948-cover.jpg',
  },
  {
    title: {
      uz: "Mo'l-ko'l qurg'oqchil landshaftlar? O'zbek–Amirlik ekspeditsiyasining Qizilqumdagi natijalari",
      en: 'Abundant Arid Landscapes? Results of the Uzbek–Emirates Expedition to the Qyzylqum (Kyzyl-kum)',
    },
    year: '2026',
    citation: {
      uz: "Kidd F., Muminov O., Askarov O., Brite E., Kulbaev N. // Mobility and Archaeogenetics in Central Asia: People – Goods – Ideas (Schriften zur Vorderasiatischen Archäologie, 24-jild) / Ed. by Ch. Baumer, M. Novák, S. Rutishauser. Wiesbaden: Harrassowitz Verlag, 2026. 515–533-betlar.",
      en: 'Kidd F., Muminov O., Askarov O., Brite E., Kulbaev N. // Mobility and Archaeogenetics in Central Asia: People – Goods – Ideas (Schriften zur Vorderasiatischen Archäologie, Vol. 24) / Ed. by Ch. Baumer, M. Novák, S. Rutishauser. Wiesbaden: Harrassowitz Verlag, 2026. Pp. 515–533.',
    },
    pdf: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/monographs/pdfs/1789145483698-921552525-Abundant_Arid_Landscapes_SVA_24_Teil_35.pdf',
    image: 'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/monographs/images/1789145485450-195824980-cover.jpg',
  },
];

function PublicationCard({ item, language }) {
  const title = item.title[language] || item.title.uz;
  const citation = item.citation[language] || item.citation.uz;

  return (
    <article className="joint-publications-page__card">
      <div className="joint-publications-page__cardImage">
        <img src={item.image} alt={title} />
      </div>

      <div className="joint-publications-page__cardBody">
        <span className="joint-publications-page__cardYear">{item.year}</span>
        <h3 className="joint-publications-page__cardTitle">{title}</h3>
        <p className="joint-publications-page__cardCitation">{citation}</p>

        <a
          href={item.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="joint-publications-page__cardLink"
        >
          {language === 'en' ? 'Download PDF' : 'PDF yuklab olish'}
        </a>
      </div>
    </article>
  );
}

export default function Section() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="joint-publications-page__section">
      <div className="joint-publications-page__grid">
        {JOINT_PUBLICATIONS.map((item) => (
          <PublicationCard key={item.pdf} item={item} language={language} />
        ))}
      </div>
    </section>
  );
}
