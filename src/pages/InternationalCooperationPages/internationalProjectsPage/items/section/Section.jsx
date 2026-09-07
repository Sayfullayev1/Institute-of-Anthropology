import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

export default function Section() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="international-projects-page__section">
            <p className="international-projects-page__section__link-row">
                {language === 'en' ? 'Farhod Maksudov — profile at the University of Bologna: ' : 'Farhod Maksudov — Boloniya universiteti profili: '}
                <a
                    href="https://site.unibo.it/kalam/en/pi/farhod-maksudov"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://site.unibo.it/kalam/en/pi/farhod-maksudov
                </a>
            </p>
        </section>
    );
}
