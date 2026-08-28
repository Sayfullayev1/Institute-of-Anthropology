import { useEffect } from "react";

// Оригинальный код StatCounter использует document.write(), что несовместимо
// с React (перезаписывает весь документ при вызове после начальной загрузки) —
// поэтому вместо этого создаём тег <script> вручную через useEffect, как и в
// остальных счётчиках (Yandex.Metrika/GA4) в этом проекте.
export default function StatCounterWidget() {
  useEffect(() => {
    window.sc_project = 13352411;
    window.sc_invisible = 0;
    window.sc_security = "effa21bf";

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
        View My Stats
      </a>
    </div>
  );
}
