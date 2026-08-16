import React from 'react';
import styles from './newsDetailPage.module.scss';


import Main from './items/main/Main';




export default function NewsDetailPage() {

  return (
    <div className={styles.wrapper}>
      <Main/>
    </div>
  );
}
