import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';
import getApiUrl from '@/api/api';

const PAGE_SIZE = 12;

export default function Section() {
    const { language } = useContext(LanguageContext);
    const [videos, setVideos] = useState(null); // null = ещё грузится
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1); // 1-based, чтобы совпадало с номерами кнопок

    useEffect(() => {
        let cancelled = false;
        axios.get(`${getApiUrl()}/api/media-coverage`)
            .then((res) => {
                if (!cancelled) setVideos(res.data.data || []);
            })
            .catch(() => {
                if (!cancelled) setError(true);
            });
        return () => { cancelled = true; };
    }, []);

    if (error) {
        return (
            <section className="media-coverage-page__section">
                <p className="media-coverage-page__placeholder">
                    {language === 'uz' ? "Ma'lumotlarni yuklashda xatolik yuz berdi." : 'Failed to load data.'}
                </p>
            </section>
        );
    }

    if (videos === null) {
        return (
            <section className="media-coverage-page__section">
                <p className="media-coverage-page__placeholder">
                    {language === 'uz' ? 'Yuklanmoqda...' : 'Loading...'}
                </p>
            </section>
        );
    }

    if (videos.length === 0) {
        return (
            <section className="media-coverage-page__section">
                <p className="media-coverage-page__placeholder">
                    {language === 'uz'
                        ? "Bu bo'limda institut xodimlarining OAVdagi chiqishlari joylashtiriladi."
                        : "This section will host the Institute staff's media appearances."}
                </p>
            </section>
        );
    }

    // Сколько бы видео ни накопилось (хоть 100) — страница не растягивается
    // бесконечно вниз: показываем по PAGE_SIZE штук, переключение — кнопками
    // номеров страниц снизу (1-я = первые 12, 2-я = следующие 12 и т.д.).
    const totalPages = Math.max(1, Math.ceil(videos.length / PAGE_SIZE));
    const currentPage = Math.min(page, totalPages);
    const pageVideos = videos.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const goToPage = (p) => {
        setPage(p);
        document.querySelector('.media-coverage-page__title')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="media-coverage-page__section">
            <h2 className="media-coverage-page__title">
                {language === 'uz' ? 'Video chiqishlar' : 'Video appearances'}
            </h2>

            <div className="media-coverage-page__grid">
                {pageVideos.map((video) => (
                    <a
                        key={video.id}
                        className="media-coverage-page__card"
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="media-coverage-page__thumbWrapper">
                            <img
                                className="media-coverage-page__thumb"
                                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                alt={language === 'uz' ? video.titleUz : video.titleEn}
                                loading="lazy"
                            />
                            <span className="media-coverage-page__playIcon">
                                <i className="fa-solid fa-play"></i>
                            </span>
                        </div>
                        <p className="media-coverage-page__cardTitle">
                            {language === 'uz' ? video.titleUz : video.titleEn}
                        </p>
                    </a>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="media-coverage-page__pagination">
                    <button
                        type="button"
                        className="media-coverage-page__pageBtn media-coverage-page__pageBtn--arrow"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label={language === 'uz' ? 'Oldingi sahifa' : 'Previous page'}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            type="button"
                            className={`media-coverage-page__pageBtn${p === currentPage ? ' media-coverage-page__pageBtn--active' : ''}`}
                            onClick={() => goToPage(p)}
                        >
                            {p}
                        </button>
                    ))}

                    <button
                        type="button"
                        className="media-coverage-page__pageBtn media-coverage-page__pageBtn--arrow"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label={language === 'uz' ? 'Keyingi sahifa' : 'Next page'}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}
        </section>
    );
}
