import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';

// PDF загружен через POST /api/documents/:category (project2/routes/documentsRoute/documentsRoute.js),
// хранится в R2 по пути documents/HigherAttestationCommissionDocument/... — тот же
// подход, что и на странице Ilmiy kengash (scientificCouncilPage).
const HIGHER_ATTESTATION_COMMISSION_PDF_URL =
  "https://pub-d3fea7e1325a4d3884872459c74a4426.r2.dev/documents/HigherAttestationCommissionDocument/1787668168351-701326332-oak.pdf";

export default function Section() {
  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.container}>
      <a
        className={styles.pdfLink}
        href={HIGHER_ATTESTATION_COMMISSION_PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {language === 'en' ? 'Higher Attestation Commission (PDF)' 
        : 'OAK Ilmiy Kengashi (PDF)'}
      </a>
    </section>
  );
}
