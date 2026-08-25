import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';

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

  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.heading}>
          {language === 'en' ? "Institute's Mission" : 'Institut missiyasi'}
        </h2>
        <p className={styles.text}>{CONTENT.mission[language]}</p>
      </div>

      <div className={styles.block}>
        <h2 className={styles.heading}>
          {language === 'en' ? "Institute's Strategic Goal" : 'Institut strategik maqsadi'}
        </h2>
        <p className={styles.text}>{CONTENT.goal[language]}</p>
      </div>
    </section>
  );
}
