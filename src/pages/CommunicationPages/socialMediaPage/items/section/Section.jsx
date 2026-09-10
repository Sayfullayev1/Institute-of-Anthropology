import React from 'react';
import './section.scss';

export default function Section() {
    return (
        <section className="social-media-page__section">
            <a
                className="social-media-page__section__website"
                href="https://anthropology.uz"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-solid fa-globe" />
                <span>anthropology.uz</span>
            </a>

            <a
                className="social-media-page__section__telegram"
                href="https://t.me/Antro_uz"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-telegram" />
                <span>ANTRO.UZ</span>
            </a>
        </section>
    );
}
