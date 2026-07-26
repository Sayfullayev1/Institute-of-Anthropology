import React  from 'react';
import styles from './section.module.scss';

import PagePlaceholder from '../../../../../components/pagePlaceholder/PagePlaceholder';

export default function Section() {
  // const { language } = useContext(LanguageContext);

  
  return (
    <section className={styles.container}>
      <PagePlaceholder />
    </section>
  );
}
