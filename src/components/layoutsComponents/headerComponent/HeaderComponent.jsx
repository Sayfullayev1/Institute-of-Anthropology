import React, { useContext, useEffect, useRef, useState } from 'react';
import './headerComponent.scss';
import { LanguageContext } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import logoImage from '@/public/images/logoImage/BLACK-SQUARE-uncircled-squared.jpg';
import Menu from './items/menu/Menu';
import LanguageSwitcher from './items/languageSwitcher/LanguageSwitcher';
import SearchComponent from './items/searchComponent/SearchComponent';

export default function HeaderComponent() {
    const { language } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    // Растягиваем подзаголовок до ширины заголовка через letter-spacing —
    // равномерно раздвигаем ВСЕ буквы (а не пробелы между словами), пока
    // строка не займёт ровно ширину title. Пересчитываем при смене языка
    // (другой текст) и при ресайзе — у title/subtitle свой font-size на
    // каждый брейкпоинт, без пересчёта величина "залипала" бы от
    // предыдущего брейкпоинта.
    useEffect(() => {
        const syncSubtitleWidth = () => {
            if (!titleRef.current || !subtitleRef.current) return;
            const subtitleEl = subtitleRef.current;
            const titleWidth = titleRef.current.offsetWidth;

            // Сбрасываем letter-spacing перед замером «естественной» ширины —
            // иначе к уже растянутому значению добавится ещё одна добавка.
            // display временно переключаем на inline-block: у block-элемента
            // внутри <h1> ширина бокса всегда растягивается на всю доступную
            // ширину контейнера (это и держит subtitle на отдельной строке) —
            // offsetWidth в этом состоянии вернул бы ширину РАСТЯНУТОГО бокса,
            // а не реальную ширину самого текста. inline-block сжимается по
            // контенту, поэтому даёт настоящий "естественный" замер.
            subtitleEl.style.letterSpacing = '0px';
            subtitleEl.style.display = 'inline-block';
            const naturalWidth = subtitleEl.offsetWidth;
            subtitleEl.style.display = 'block';

            // letter-spacing добавляет отступ ПОСЛЕ КАЖДОГО символа, включая
            // последний — то есть при N символах прибавка применяется N раз,
            // а не (N-1) раз "между буквами", как можно было бы подумать.
            // Раньше здесь делили на (length - 1) — из-за этого при
            // применении letter-spacing строка систематически становилась
            // на один "шаг" шире цели (заметнее на коротких subtitle, где
            // сам шаг крупнее).
            const charCount = subtitleEl.textContent.length;
            if (charCount <= 1) return;

            // Только растягиваем (положительный letter-spacing), никогда не
            // сжимаем: на узких экранах title иногда переносится на 2 строки
            // (например "Institute of" / "Anthropology"), и offsetWidth тогда
            // отдаёт ширину этой короткой обёрнутой строки — если бы под неё
            // сжимался subtitle, буквы слипались бы в нечитаемое пятно.
            // Без запаса сверху subtitle в этом случае просто остаётся
            // естественной (нерастянутой) ширины — читаемо, пусть и не равно
            // title один-в-один.
            const extraPerGap = Math.max(0, (titleWidth - naturalWidth) / charCount);
            subtitleEl.style.letterSpacing = `${extraPerGap}px`;
        };
        syncSubtitleWidth();
        // Roboto грузится удалённо (index.css, display=swap) — первый замер
        // может успеть пройти ещё на шрифте-заглушке (у него другая метрика),
        // и ширина заголовка потом чуть меняется при подмене на настоящий
        // Roboto. document.fonts.ready ждёт именно этот момент и пересчитывает.
        document.fonts?.ready?.then(syncSubtitleWidth);
        window.addEventListener('resize', syncSubtitleWidth);
        return () => window.removeEventListener('resize', syncSubtitleWidth);
    }, [language]);

    // Общая функция вкл/выкл скролла страницы — раньше closeMenu (клик по
    // крестику/фону/ссылке) сбрасывал только body.style.overflow, а
    // document.documentElement (html) оставался залипшим на 'hidden'.
    // На мобильных именно html — та вкладка, что реально блокирует скролл
    // всей страницы, так что после перехода по ссылке из меню скролл
    // пропадал насовсем, даже когда сама страница уже успела прогрузиться.
    const setBodyScrollLocked = (locked) => {
        const overflowStyle = locked ? 'hidden' : 'auto';
        document.body.style.overflow = overflowStyle;
        document.documentElement.style.overflow = overflowStyle;
    };

    const toggleMenu = () => {
        const nextState = !menuOpen;
        setMenuOpen(nextState);
        setBodyScrollLocked(nextState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setBodyScrollLocked(false);
    };

    const LogoTitle = {
        uz: {
            title: "Antropologiya instituti",
            subtitle: "O'zbekiston Respublikasi Fanlar akademiyasi"
        },
        en: {
            title: "Institute of Anthropology",
            subtitle: "Uzbekistan Academy of Sciences",
        },
    };

    return (
        <header className='header'>
            <div className='header_wrapper'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <Link to={`/${language === "en" ? "" : language}`}>
                            <img src={logoImage} alt="Logo" />
                        </Link>
                    </div>
                    {/* titleRef/subtitleRef: подзаголовок растягивается через
                        letter-spacing до ширины заголовка — см. эффект выше.
                        Заголовок раньше был голым текстовым узлом внутри <h1> —
                        не за что было зацепить ref, поэтому обёрнут в свой <span>. */}
                    <h1 className='header__title'>
                        <span ref={titleRef} className="header__title__text">{LogoTitle[language].title}</span>
                        <span ref={subtitleRef} className={`header__subtitle header__subtitle--${language}`}>{LogoTitle[language].subtitle}</span>
                    </h1>
                </div>

                <div className='menu-button_wrapper'>
                    <button 
                        className={`menu-button ${menuOpen ? 'is-open' : ''}`} 
                        onClick={toggleMenu} 
                        aria-label="Menu"
                    >
                        <span className="menu-button__line"></span>
                        <span className="menu-button__line"></span>
                        <span className="menu-button__line"></span>
                    </button>
                </div>

                <div className='header__info-wrapper'>
                    <SearchComponent />
                    <LanguageSwitcher />
                </div>

                {/* Передаем функцию закрытия в меню */}
                <Menu Bedeutung={menuOpen} closeMenu={closeMenu} />
            </div>
        </header>
    );
}
