import { useEffect, useContext } from "react";

// Оригинальный код StatCounter использует document.write(), что несовместимо
// с React (перезаписывает весь документ при вызове после начальной загрузки) —
// поэтому вместо этого создаём тег <script> вручную через useEffect, как и в
// остальных счётчиках (Yandex.Metrika/GA4) в этом проекте.

import { LanguageContext } from "@/context/LanguageContext";


export default function StatCounterWidget() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    window.sc_project = 13352411;
    // 0 = "не невидимый" — просит скрипт самому вставить в страницу свой
    // визуальный виджет (в конец document.body, где мы его вешаем ниже).
    // Мы уже рисуем собственный бейдж (логотип + скрытый пиксель-счётчик)
    // через JSX ниже — второй, "родной" виджет от скрипта не нужен и как
    // раз вызывал дублирование/съезжание вниз страницы.
    window.sc_invisible = 1;
    window.sc_security = "effa21bf";

    // На случай, если эффект отработает больше одного раза (hot-reload в
    // dev-режиме при правке этого файла) — не плодим второй <script>.
    const existing = document.querySelector('script[src="https://statcounter.com/counter/counter.js"]');
    if (existing) return undefined;

    const script = document.createElement("script");
    script.src = "https://statcounter.com/counter/counter.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="footer__statCounter">
      <a
        title="Web Analytics"
        href="https://statcounter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="statcounter"
          src="https://c.statcounter.com/13352411/0/effa21bf/0/"
          alt="Web Analytics"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </a>
      <a
        href="https://statcounter.com/p13352411/?guest=1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: 8, fontSize: 12 }}
      >
        {
          language === "uz"
            ? "Web Sayt statistikasi"
            : "Web Site statistics"
        }
      </a>
    </div>
  );
}
