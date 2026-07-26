import React, { useContext, useState } from 'react';
import './section.scss';
import { LanguageContext } from '../../../../context/LanguageContext';
import getApiUrl from '../../../../api/api';
import axios from 'axios';

export default function Section() {
    const { language } = useContext(LanguageContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        theme: "",
        message: ""
    });
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState({});

    // eslint-disable-next-line no-unused-vars
    function handleChange(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        setErrors(prev => ({
            ...prev,
            [e.target.id]: false
        }));
    }

    // eslint-disable-next-line no-unused-vars
    function handleSubmit(e) {
        e.preventDefault();
        // Проверка на пустые поля
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key].trim()) {
                newErrors[key] = true;
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        const data = {
            ...formData,
            date: new Date().toISOString()
        };
        const api = getApiUrl();

        setFormData({
            name: "",
            email: "",
            theme: "",
            message: ""
        });

        axios.post(`${api}/api/contacts/push`, data)
            .then(response => {
                if (response.data.success) {
                    alert(language === "uz" ? "Xabar yuborildi!" : language === "ru" ? "Сообщение отправлено!" : "Message sent!");
                } else {
                    alert(language === "uz" ? "Xabar yuborishda xatolik!" : language === "ru" ? "Ошибка при отправке сообщения!" : "Error sending message!");
                }
            })
            .catch(error => {
                // console.error("Error sending message:", error);
                alert(language === "uz" ? "Xabar yuborishda xatolik!" : language === "ru" ? "Ошибка при отправке сообщения!" : "Error sending message!");
            });
    }

    return (
        <section className="contacts-page__section">
            {/* <div className="contacts-page__section__formWrapper">
                <h2 className="contacts-page__section__formWrapper__title">
                    {language === "uz" ? "Xabar yuborish" : language === "ru" ? "Отправить сообщение" : "Send a message"}
                </h2>
                <form className="contacts-page__section__form" onSubmit={handleSubmit}>
                    <div className="contacts-page__section__form-group">
                        <input
                            type="text"
                            id="name"
                            className={`contacts-page__section__form__input${errors.name ? " input-error" : ""}`}
                            placeholder={
                                language === "uz"
                                    ? "Ismingiz *"
                                    : language === "ru"
                                    ? "Ваше имя *"
                                    : "Your name *"
                            }
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts-page__section__form-group">
                        <input
                            type="email"
                            id="email"
                            className={`contacts-page__section__form__input${errors.email ? " input-error" : ""}`}
                            placeholder={
                                language === "uz"
                                    ? "E-mailingiz *"
                                    : language === "ru"
                                    ? "Ваш e-mail *"
                                    : "Your e-mail *"
                            }
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts-page__section__form-group">
                        <input
                            type="text"
                            id="theme"
                            className={`contacts-page__section__form__input${errors.theme ? " input-error" : ""}`}
                            placeholder={
                                language === "uz"
                                    ? "Mavzu *"
                                    : language === "ru"
                                    ? "Tема *"
                                    : "Theme *"
                            }
                            value={formData.theme}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contacts-page__section__form-group">
                        <textarea
                            id="message"
                            className={`contacts-page__section__form__textarea${errors.message ? " input-error" : ""}`}
                            placeholder={
                                language === "uz"
                                    ? "Matn *"
                                    : language === "ru"
                                    ? "Текст *"
                                    : "Text *"
                            }
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="contacts-page__section__form__button">
                            {language === "uz"
                                ? "Xabar yuborish"
                                : language === "ru"
                                ? "Отправить сообщение"
                                : "Send a message"}
                        </button>
                    </div>
                </form>
            </div> */}

            <div className="contacts-page__section____info">
                <h2 className="contacts-page__section____info__title">
                    {
                        language === "uz"
                            ? "Manzil"
                            : language === "ru"
                            ? "Наши контакты"
                            : "Our contacts"
                    }
                </h2>
                <p className="contacts-page__section____info__address">
                    {
                        language === "uz"
                            ? "O'zbekiston, 100170, Toshkent shahar, Mirzo Ulug'bek tumani, Mirzo Ulug'bek ko'chasi, 81"
                            : "100170, Uzbekistan, Tashkent, Mirzo Ulugbek district, M. Ulugbek street, 81."
                    }
                </p>
                <p className="contacts-page__section____info__contact__phone">
                    {
                        language === "uz"
                            ? "Telefonlar:"
                            : language === "ru"
                            ? "Телефоны:"
                            : "Phones:"
                    }
                    <br />
                    +998 71 262-64-62;
                    <br />
                    +998 71 233-95-31
                </p>
                <p className="contacts-page__section____info__contact__fax">
                    {
                        language === "uz"
                            ? "Faks :"
                            : language === "ru"
                            ? "Факс: "
                            : "Fax: "
                    }
                    +998 71 262-64-62
                </p>
                <p className="contacts-page__section____info__contact__email">
                    E-mail: anthropology@academy.uz  
                </p>
                <p className="contacts-page__section____info__contact__email">
                    E-xat: antropologiya-instituti@exat.uz 
                </p>
            </div>

        </section>
    );
}
