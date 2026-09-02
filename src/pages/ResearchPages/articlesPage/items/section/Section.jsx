import React, { useContext, useState } from 'react';
import './section.scss';
import { LanguageContext } from '@/context/LanguageContext';

const YEARS = ['2024', '2025', '2026'];

// Заглушка для года, у которого пока нет ни одной реальной публикации.
// Сам список цитат (см. PUBLICATIONS) — реальные библиографические записи,
// они не переводятся между uz/en (это цитаты как есть, часть на русском,
// часть на английском и т.д.) и показываются одинаково независимо от языка
// интерфейса; на язык реагируют только служебные подписи вокруг них.
const PLACEHOLDER_TEXT = {
    uz: (year) =>
        `Ushbu bo‘limda Antropologiya institutining ${year}-yilda nashr etilgan ilmiy maqolalari to‘liq ro‘yxati joylashtiriladi — taqrizlanadigan milliy va xalqaro jurnallarda, konferensiya materiallari to‘plamlarida hamda jamoaviy nashrlarda chop etilgan maqolalar, muallif(lar), jurnal nomi, son va (mavjud bo‘lsa) DOI kabi bibliografik ma’lumotlar bilan birga, imkon qadar to‘liq matn yoki annotatsiyaga havola qo‘shilgan holda. ${year}-yil uchun arxiv hozircha tayyorlanmoqda va yakunlangach shu yerda e’lon qilinadi.`,
    en: (year) =>
        `This section will host the full list of scientific articles published by the Institute of Anthropology's researchers in ${year} — papers appearing in peer-reviewed national and international journals, conference proceedings, and collective volumes, together with bibliographic details (author(s), journal, issue and, where available, DOI), and a link to the full text or abstract wherever possible. The archive for ${year} is currently being compiled and will be published here once it is ready.`,
};

// Реальные публикации по годам — каждая запись это цитата целиком одной
// строкой (как в реальном библиографическом списке), ссылки внутри неё
// находятся и подсвечиваются автоматически (см. renderCitation ниже).
// Год без публикаций показывает общий текст-заглушку вместо пустого списка.
const PUBLICATIONS = {
    '2024': [
        'New Data for Asymmetric Core Reduction in Western Tian Shan Piedmonts: The Ertash Sai 2 Open-Air Site // Lithic Technology. https://www.tandfonline.com/journals/ylit20',
    ],
    '2025': [
        'Алимджанов Б.А., Замонов А.Т. Не Тимуром единым: Игнорирование Шибанидов в рамках концепции централизованного государства // Золотоардынское обозрение. 2025. Т.13, №1. С. 207-223. https://goldhorde.ru/RU/stati2025-1-16/ (Scopus)',
        'Alimdjanov, B., & Akbarova, K. Female images in Uzbek cinema (1920-1990s): modernised or orientalised, post-colonial or pre-colonial? Studies in Russian and Soviet Cinema. 2025. №3. Pp. 1–17. https://doi.org/10.1080/17503132.2025.2547426 (Scopus)',
        'Anarbayev, A.A. Traces of Seismic Impacts in the Walls of the Ulugbek Madrassa (Samarkand, Uzbekistan). Izv. Atmos. Ocean. Phys. 60, 1393–1407 (2024). https://doi.org/10.1134/S0001433825700574 (A. M. Korzhenkov, M. M. Saidov, A. A. Nazarov, L. A. Korzhenkova, A. A. Sentsov)',
        'Анарбаев А. Индийская куркума в древнем некрополе ферганцев // Қазақстан археологиясы, № 3 (29), 2025, с. 171–181. DOI: 10.52967/akz2025.3.29.171.181 (Соавторы: Кораева З.А.) https://www.archeokz.com/index.php/archeokz/article/view/502/423 (Scopus)',
        'Бабаджанов Б.М., Медерова Д.Е. «В мир иной со своими припасами». Визуальные символы на намогильных сооружениях мусульманских святынь Евразии и Кавказа // История, археология и этнография Кавказа. 2025. Т. 21. No 3. С. 228-245. https://doi.org/10.32653/CH202228-245 (Scopus)',
        'Бабаджанов Б.М., Нурманова А.Ш. Мемориалы казахских зодчих и камнетёсов в контексте социальной антропологии святых мест // Kazakhstan Archeology, 1(27), 270–292.',
        'Бабаяров Г. Отражение этапов формирования Западно-Тюркского Каганата в нумизматических материалах // Археология Евразийских степей, №6. – Казань, 2025.',
        'Omanov Sh. От степи к городам: Роль среднеазиатской средневековой керамики типа «псевдотриполье» в адаптации кочевников к городской жизни // Поволжская археология № 4 (54) 2025 c. 28-42. (hammualliflar: Kubaev S., Artikov U., Pardayev M., Xatamova M.)',
        'Мухтаров Г. А., Павленок К.К., Когай С.А., Сосин П.М., Деревнина А.С., Эргашев О.Т. Сохранность открытых стоянок среднего палеолита в низкогорных ландшафтах: исследование стоянки Куксарай-2 (Западный Тянь-Шань) // Вестник НГУ. Серия: История, филология. 2025. Т. 24, № 7: Археология и этнография. С. 18-30.',
        'Narimanov, A. Azimov, A. Shadmanova, G. Umarova, A. Hakimov, Z. Ziyaev, A. Elmurodov, D. Musirmanov, T. Makhmudov, J. Shavkiev. Multivariate Analysis In Exotic Mung Bean (Vigna Radiata L.) Genotypes For Yield Attributes // SABRAO Journal of Breeding and Genetics, 57 (5) 0-0, 2025, http://doi.org/10.54910/sabrao2025.57.5. http://sabraojournal.org/ pISSN 1029-7073; eISSN 2224-8978',
        'Уралов А.А., Шайдуллаев А.Ш. Экспериментальные Исследования Технологии Изготовления Каменных Ступок (По Материалам Памятников Эпохи Бронзы Сурхандарьинской Области Узбекистана) // Археология Евразийских Степей №2, 2025 УДК 902/904 https://doi.org/10.24852/2587-6112.2025.2.134.144.',
        'Пуговкина О. Г. Два взгляда на будущность Средней Азии: В. В. Бартольд и Н. С. Лыкошин как эксперты в решение вопроса нациестроительства в 20-е гг ХХ в. // ЭНОЖ «История» – 2025. – Том 16. – Выпуск 5 (151) [Электронный ресурс]. URL: https://history.jes.su/S207987840035672-8-1 (дата обращения: 16.11.2025). http://doi.org/10.18254/S207987840035672-8 (Scopus Q1)',
        'X. Zhou, R.N. Spengler, B. Sayfullaev, K. Mutalibjon, J. Ma, J. Liu, H. Shen, K. Zhao, G. Chen, J. Wang, T.A. Stidham, H. Xu, G. Zhang, Q. Yang, Y. Hou, J. Ma, N. Kambarov, H. Jiang, F. Maksudov, [...] & X. Li, 9,000-year-old barley consumption in the foothills of central Asia // Proc. Natl. Acad. Sci. U.S.A. 122 (36) e2424093122, https://doi.org/10.1073/pnas.2424093122 (2025).',
        'Guanhan Chen, Xinying Zhou, Mutalibjon Khasanov, Nasibillo Kambarov, Hui Shen, Jingyi Wang, Jian Ma, Jianxin Wang, Farhod Maksudov, Akhmadali Askarov, Xiaoqiang Li, Morphological diversity of the Russian olive (Elaeagnus angustifolia) from Oxus civilization 4000 BP, Central Asia // Journal of Archaeological Science, Volume 181, 2025. https://doi.org/10.1016/j.jas.2025.106299',
        'Plisson H, Kharevich AV, Kharevich VM, Chistiakov PV, Zotkina LV, Baumann M, Maksudov FA, et al. (2025) Arrow heads at Obi-Rakhmat (Uzbekistan) 80 ka ago? // PLoS One 20(8): e0328390. https://doi.org/10.1371/journal.pone.0328390',
        'Tombuloğlu Tuba, Muradaliyev Rahmanali. Religious Attitudes of Chach Oasis Nomads During the Period Turkic Khaganate // Türk Kültürü ve Hacı Bektaş Veli Araştırma Dergisi, 114 (Haziran 2025), s. 497-504. https://doi.org/10.60163/tkhcbva.1582773',
    ],
    '2026': [],
};

// Находит http(s)-ссылки внутри цитаты и рендерит их как настоящие
// кликабельные <a>, остальной текст — как есть. В цитате может быть 0, 1
// или несколько ссылок (DOI + сайт журнала и т.п.) — один универсальный
// разбор вместо ручного разбиения каждой записи на текст/ссылку/текст.
const URL_REGEX = /(https?:\/\/[^\s)]+)/g;
const TRAILING_PUNCTUATION = /[.,;)]+$/;

function renderCitation(text) {
    return text.split(URL_REGEX).map((part, i) => {
        if (!/^https?:\/\//.test(part)) {
            return <React.Fragment key={i}>{part}</React.Fragment>;
        }
        const trailingMatch = part.match(TRAILING_PUNCTUATION);
        const trailing = trailingMatch ? trailingMatch[0] : '';
        const url = trailing ? part.slice(0, -trailing.length) : part;
        return (
            <React.Fragment key={i}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="articles-page__citationLink">
                    {url}
                </a>
                {trailing}
            </React.Fragment>
        );
    });
}

export default function Section() {
    const { language } = useContext(LanguageContext);

    // Открыт максимум один год одновременно — клик по другому закрывает
    // текущий и открывает новый (классическое поведение аккордеона).
    const [openYear, setOpenYear] = useState(null);

    const toggleYear = (year) => {
        setOpenYear((prev) => (prev === year ? null : year));
    };

    return (
        <section className="articles-page__section">
            <ul className="articles-page__yearList">
                {YEARS.map((year) => {
                    const isOpen = openYear === year;
                    const publications = PUBLICATIONS[year] || [];
                    return (
                        <li key={year} className="articles-page__yearItem">
                            <button
                                type="button"
                                className={`articles-page__yearHeader${isOpen ? ' articles-page__yearHeader--open' : ''}`}
                                onClick={() => toggleYear(year)}
                                aria-expanded={isOpen}
                            >
                                <span>{year}</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                            <div className={`articles-page__yearPanel${isOpen ? ' articles-page__yearPanel--open' : ''}`}>
                                {publications.length > 0 ? (
                                    <ol className="articles-page__citationList">
                                        {publications.map((text, idx) => (
                                            <li key={idx} className="articles-page__citationItem">
                                                {renderCitation(text)}
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p className="articles-page__yearPlaceholder">
                                        {PLACEHOLDER_TEXT[language](year)}
                                    </p>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
