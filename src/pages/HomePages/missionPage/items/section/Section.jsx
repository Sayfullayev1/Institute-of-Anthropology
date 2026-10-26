import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';
import StructureChart from '../structureChart/StructureChart';

// Institut nizomi (устав) — PDF, сконвертированный из
// infoFolder/charterOfTheCenterPageDocuments/NIZOM_ANTROPOLOGIYA_INSTITUT_*.docx
// и загруженный в R2 через /api/documents/InstituteCharterDocument (тот же
// паттерн, что и Etika nizomi/siyosati на странице Etika Komissiyasi —
// см. ethicsCommitteePage/items/section/Section.jsx). Старая страница
// /charter с клиентским docx->html (mammoth) этим блоком заменяется.
const CHARTER_PDF_UZ =
  'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/InstituteCharterDocument/1793030950362-464364649-NIZOM_ANTROPOLOGIYA_INSTITUT_UZ.pdf';
const CHARTER_PDF_EN =
  'https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/InstituteCharterDocument/1793030951276-704757830-NIZOM_ANTROPOLOGIYA_INSTITUT_EN.pdf';

// Фото-версия схемы (structure-uz.png/en.png) временно отключена — ниже
// теперь HTML/CSS-копия (StructureChart). Картинку не удаляли, просто
// закомментировали импорт — чтобы вернуть, раскомментировать здесь и в
// JSX ниже.
// import structureImgUz from '@/public/images/HomePagesImages/sectionImages/structure-uz.png';
// import structureImgEn from '@/public/images/HomePagesImages/sectionImages/structure-en.png';

const CONTENT = {
  mission: {
    uz: "Institut missiyasi — geoantropologiya, arxeologik va tarixiy antropologiya, ijtimoiy-madaniy antropologiya hamda arxeologik geofizika sohalarida kompleks tadqiqotlar olib borish orqali inson va tevarak-muhit o‘rtasidagi o‘zaro munosabatlar, madaniy landshaftlar, ijtimoiy tuzilmalar va sivilizasion jarayonlarni ilmiy asosda o‘rganish, ilmiy merosni saqlash va zamonaviy bilimlar yaratishdan iborat.",
    en: "The Institute's mission is to conduct comprehensive research in geoanthropology, archaeological and historical anthropology, socio-cultural anthropology, and archaeological geophysics — studying, on a scientific basis, the interaction between humans and their environment, cultural landscapes, social structures, and civilizational processes, while preserving scientific heritage and generating new knowledge.",
  },
  goal: {
    uz: "Institut strategik maqsadi — zamonaviy arxeologik, antropologik va geofizik usullar asosida Markaziy Osiyoda inson jamiyatlari rivojlanishi, madaniy transformasiyalar, urbanizasiya va tevarak-muhitga moslashuv jarayonlarini chuqur tadqiq etish, xalqaro ilmiy hamkorlikni kengaytirish, raqamli texnologiyalar asosida ilmiy natijalarni integrasiya qilish va fundamental ilm-fanni rivojlantirishdir.",
    en: "The Institute's strategic goal is to conduct in-depth research — using modern archaeological, anthropological, and geophysical methods — into the development of human societies in Central Asia, cultural transformations, urbanization, and processes of adaptation to the environment; to expand international scientific cooperation; to integrate research findings through digital technologies; and to advance fundamental science.",
  },
};

export default function Section() {
  const { language } = useContext(LanguageContext);
  // const structureImg = language === 'en' ? structureImgEn : structureImgUz;

  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.heading}>
          {language === 'en' ? "Our Mission" : 'Missiyamiz'}
        </h2>
        <p className={styles.text}>{CONTENT.mission[language]}</p>
      </div>

      <div className={styles.block}>
        <h2 className={styles.heading}>
          {language === 'en' ? "Our Vision" : "Biz ko'zlagan kelajak"}
        </h2>
        <p className={styles.text}>{CONTENT.goal[language]}</p>
      </div>

      <div className={styles.block}>
        <h2 className={styles.heading}>
          {language === 'en' ? "Organizational Structure" 
          : 'Tashkilot tuzilmasi'}
        </h2>
        {/* Фото временно скрыто (не удалено) — пользователь тестирует
            HTML/CSS-версию ниже. Чтобы вернуть картинку: раскомментировать
            этот <img> и оба импорта/переменную structureImg выше. */}
        {/* <img
          className={styles.structureImg}
          src={structureImg}
          alt={language === 'en' ? 'Structure' : 'Tuzilma'}
        /> */}

        <StructureChart language={language} />
      </div>

      <div className={styles.block}>
        <h2 className={styles.heading}>
          {language === 'en' ? "Institute's Charter" : 'Institut nizomi'}
        </h2>
        <a
          className={styles.pdfLink}
          href={language === 'en' ? CHARTER_PDF_EN : CHARTER_PDF_UZ}
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === 'en' ? "Institute's Charter (PDF)" : 'Institut nizomi (PDF)'}
        </a>
      </div>
    </section>
  );
}
