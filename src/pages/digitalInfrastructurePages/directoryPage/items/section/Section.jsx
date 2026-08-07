import React, { useContext, useState, useEffect } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';
import axios from 'axios';
import getApi  from '@/api/api'; // Путь к вашей функции получения URL API

export default function Section() {
    const { language } = useContext(LanguageContext);
    const [activeIndex, setActiveIndex] = useState(null);
    const [data, setData] = useState([]); // Состояние для данных с сервера
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = getApi();
                // Путь должен совпадать с роутом на бэкенде (например, /api/directory)
                const response = await axios.get(`${api}/api/directory`); 
                setData(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const labels = {
        bio: language === 'en' ? 'Biography' : 'Biografiya',
        phone: language === 'en' ? 'Phone' : 'Telefon',
        email: 'Email',
        loading: language === 'en' ? 'Loading...' : 'Yuklanmoqda...'
    };

    if (loading) return <div className={styles.container}>{labels.loading}</div>;

    return (
        <section className={styles.container}>
            <div className={styles.userList}>
                {data.map((user, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div key={user.id || index} className={`${styles.userCard} ${isActive ? styles.active : ''}`}>
                            <div className={styles.userHeader} onClick={() => setActiveIndex(isActive ? null : index)}>
                                <div className={styles.mainInfo}>
                                    {/* Важно: на сервере мы сохраняли name, а в статике было Name (с большой буквы) */}
                                    <h3 className={styles.userName}>{user.name?.[language] || user.Name?.[language]}</h3>
                                    <span className={styles.userBadge}>{user.role?.[language]}</span>
                                </div>
                                <div className={styles.arrowIcon}>
                                    <span></span>
                                </div>
                            </div>
                            
                            <div className={styles.userContent}>
                                <div className={styles.inner}>
                                    <div className={styles.grid}>
                                        <div className={styles.item}>
                                            <label>{labels.email}</label>
                                            <a href={`mailto:${user.email}`}>{user.email}</a>
                                        </div>
                                        <div className={styles.item}>
                                            <label>{labels.phone}</label>
                                            <span>{user.contacts}</span>
                                        </div>
                                        <div className={`${styles.item} ${styles.full}`}>
                                            <label>{labels.bio}</label>
                                            <p>{user.info?.[language]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
