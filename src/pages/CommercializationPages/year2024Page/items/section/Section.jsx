import React, { useContext, useState } from 'react'; // eslint-disable-line no-unused-vars
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api'; // eslint-disable-line no-unused-vars
import axios from 'axios'; // eslint-disable-line no-unused-vars

import PagePlaceholder from '@/components/pagePlaceholder/PagePlaceholder';

export default function Section() {
    // eslint-disable-next-line no-unused-vars
    const { language } = useContext(LanguageContext);


    return (
        <section className="year-2024-page__section">

            <PagePlaceholder/>

        </section>
    );
}
