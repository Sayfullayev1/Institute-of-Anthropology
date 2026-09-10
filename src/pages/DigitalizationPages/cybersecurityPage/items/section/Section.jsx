import React, { useContext } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

// Sayt orqali xavfsizlik zaifligi haqida xabar berish uchun — footer'dagi
// bilan bir xil, real, monitoring qilinadigan pochta manzili (o'ylab
// topilgan "security@..." emas, chunki hech kim o'qimaydigan manzilga
// zaiflik haqida xabar berishni so'rash foydasiz va noto'g'ri).
const SECURITY_CONTACT_EMAIL = 'anthropology@academy.uz';

const CONTENT = {
    uz: {
        title: 'Axborot xavfsizligi',
        intro:
            "O'zbekiston Respublikasi Fanlar akademiyasi Antropologiya instituti veb-sayti va undagi ma'lumotlar xavfsizligini ta'minlash institut faoliyatining ustuvor yo'nalishlaridan biri hisoblanadi. Ushbu sohada institut O'zbekiston Respublikasining «Kiberxavfsizlik to'g'risida»gi, «Axborotlashtirish to'g'risida»gi hamda «Shaxsga doir ma'lumotlar to'g'risida»gi qonunlari talablariga amal qiladi.",
        measuresTitle: "Ko'riladigan chora-tadbirlar",
        measures: [
            "Tizim va ma'lumotlarga kirish huquqlari xodimlarning lavozim vazifalariga mos ravishda cheklangan tartibda taqsimlanadi",
            'Tizimlar xavfsizligi muntazam ravishda monitoring qilinadi, aniqlangan zaifliklar o‘z vaqtida bartaraf etiladi',
            "Ma'lumotlarning zaxira nusxalari muntazam ravishda yaratib boriladi",
            "Foydalanuvchilar tomonidan taqdim etilgan shaxsiy ma'lumotlar faqat qonunda belgilangan maqsadlarda qayta ishlanadi va uchinchi shaxslarga berilmaydi",
            'Institut xodimlari orasida axborot xavfsizligi bo‘yicha davriy tushuntirish ishlari olib boriladi',
        ],
        reportTitle: 'Zaiflik haqida xabar berish',
        reportText:
            "Agar sayt yoki uning tizimlarida xavfsizlik zaifligini aniqlagan bo'lsangiz, iltimos, buni ommaga oshkor qilishdan avval quyidagi manzilga xabar bering — muammoni imkon qadar tezroq bartaraf etamiz:",
        tipsTitle: 'Foydalanuvchilar uchun tavsiyalar',
        tips: [
            'Parollaringizni uchinchi shaxslarga bermang va turli xizmatlar uchun bir xil paroldan foydalanmang',
            "Shubhali havolalar va noma'lum manbalardan kelgan xabarlarga ehtiyot bo'ling (fishing)",
            "Institut nomidan shaxsiy ma'lumot yoki to'lov talab qiluvchi xabarlarga ishonmang",
        ],
        moreInfo:
            "Kiberxavfsizlik bo'yicha qo'shimcha ma'lumot va tavsiyalar uchun O'zbekiston Respublikasi Kiberxavfsizlik markazining rasmiy saytiga murojaat qilishingiz mumkin:",
        moreInfoLinkText: 'cybersecurity.uz',
        moreInfoLinkHref: 'https://cybersecurity.uz',
    },
    en: {
        title: 'Information Security',
        intro:
            "Ensuring the security of the website and data of the Institute of Anthropology of the Academy of Sciences of the Republic of Uzbekistan is one of the Institute's priority areas of activity. In this regard, the Institute complies with the requirements of the Laws of the Republic of Uzbekistan \"On Cybersecurity\", \"On Informatization\" and \"On Personal Data\".",
        measuresTitle: 'Measures in place',
        measures: [
            'Access rights to systems and data are granted to staff on a limited, role-based basis',
            'System security is monitored on an ongoing basis, and identified vulnerabilities are addressed promptly',
            'Regular data backups are performed',
            'Personal data submitted by users is processed only for the purposes established by law and is not shared with third parties',
            'Periodic information-security awareness activities are held for Institute staff',
        ],
        reportTitle: 'Reporting a vulnerability',
        reportText:
            "If you have discovered a security vulnerability on the website or in its systems, please report it to us before disclosing it publicly, so we can address it as quickly as possible:",
        tipsTitle: 'Recommendations for visitors',
        tips: [
            'Do not share your passwords with third parties, and avoid reusing the same password across different services',
            'Be cautious of suspicious links and messages from unknown sources (phishing)',
            'Do not trust messages claiming to be from the Institute that request personal data or payment',
        ],
        moreInfo:
            'For further information and recommendations on cybersecurity, you may visit the official website of the Cybersecurity Center of the Republic of Uzbekistan:',
        moreInfoLinkText: 'cybersecurity.uz',
        moreInfoLinkHref: 'https://cybersecurity.uz',
    },
};

export default function Section() {
    const { language } = useContext(LanguageContext);
    const c = CONTENT[language] || CONTENT.uz;

    return (
        <section className="cybersecurity-page__section">
            <h2 className="cybersecurity-page__section__title">{c.title}</h2>
            <p className="cybersecurity-page__section__paragraph">{c.intro}</p>

            <h3 className="cybersecurity-page__section__subtitle">{c.measuresTitle}</h3>
            <ul className="cybersecurity-page__section__list">
                {c.measures.map((text, i) => (
                    <li key={i}>{text}</li>
                ))}
            </ul>

            <h3 className="cybersecurity-page__section__subtitle">{c.reportTitle}</h3>
            <p className="cybersecurity-page__section__paragraph">
                {c.reportText}{' '}
                <a className="cybersecurity-page__section__link" href={`mailto:${SECURITY_CONTACT_EMAIL}`}>
                    {SECURITY_CONTACT_EMAIL}
                </a>
            </p>

            <h3 className="cybersecurity-page__section__subtitle">{c.tipsTitle}</h3>
            <ul className="cybersecurity-page__section__list">
                {c.tips.map((text, i) => (
                    <li key={i}>{text}</li>
                ))}
            </ul>

            <p className="cybersecurity-page__section__paragraph">
                {c.moreInfo}{' '}
                <a
                    className="cybersecurity-page__section__link"
                    href={c.moreInfoLinkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {c.moreInfoLinkText}
                </a>
            </p>
        </section>
    );
}
