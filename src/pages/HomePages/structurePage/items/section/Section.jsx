import React  from 'react';
import styles from './section.module.scss';

import img from '@/public/images/HomePagesImages/sectionImages/image.png';

export default function Section() {
  // const { language } = useContext(LanguageContext);

  
  return (
    <section className={styles.container}>
      <img src={img} alt="Structure" />
    </section>
  );
}
