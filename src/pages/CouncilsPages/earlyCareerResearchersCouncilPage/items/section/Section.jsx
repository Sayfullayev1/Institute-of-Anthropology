import React, { useContext } from 'react'; // eslint-disable-line no-unused-vars
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

import PagePlaceholder from '@/components/pagePlaceholder/PagePlaceholder';

export default function Section() {
    // eslint-disable-next-line no-unused-vars
    const { language } = useContext(LanguageContext);

    return (
        <section className="early-career-researchers-council-page__section">

            <PagePlaceholder/>

        </section>
    );
}
