import { useEffect, useState } from "react";
import mammoth from "mammoth";
import "./convert.scss";

// Word хранит центрирование как прямое форматирование параграфа (w:jc val="center"),
// а не как именованный стиль — mammoth по умолчанию не переносит такое форматирование в HTML.
// Помечаем такие параграфы синтетическим styleName, чтобы styleMap ниже могла их поймать.
const markCenteredParagraphs = mammoth.transforms.paragraph((paragraph) => {
  if (paragraph.alignment === "center") {
    paragraph.styleName = "CenteredParagraph";
  }
  return paragraph;
});

const styleMap = ["p[style-name='CenteredParagraph'] => p.docCenter:fresh"];

// В Word подпись ("Direktor" ... "F.Maksudov") разведена по краям строки табуляцией
// на правый tab-stop. Mammoth переносит w:tab как обычный символ \t, а браузер схлопывает
// подряд идущие табы в один пробел — разводим такие строки вручную через flex.
function fixSignatureLines(html) {
  const container = document.createElement("div");
  container.innerHTML = html;

  container.querySelectorAll("p").forEach((p) => {
    if (p.children.length > 1) return;

    const wrapper = p.children[0] || null;
    const text = (wrapper || p).textContent;
    const tabRun = text.match(/\t{3,}/);
    if (!tabRun) return;

    const idx = text.indexOf(tabRun[0]);
    const left = text.slice(0, idx).trim();
    const right = text.slice(idx + tabRun[0].length).trim();
    if (!left || !right) return;

    const tagName = wrapper ? wrapper.tagName.toLowerCase() : "span";
    const makeSide = (value) => {
      const el = document.createElement(tagName);
      el.textContent = value;
      return el;
    };

    p.replaceChildren(makeSide(left), makeSide(right));
    p.classList.add("docSignature");
  });

  return container.innerHTML;
}

export default function Convert({ language }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    // 1. Сначала определяем путь к файлу в зависимости от языка
    let currentFayl = "";
    
    if (language === "uz") {
      currentFayl = "/infoFolder/charterOfTheCenterPageDocuments/NIZOM_ANTROPOLOGIYA_INSTITUT_UZ.docx";
    }  else {
      currentFayl = "/infoFolder/charterOfTheCenterPageDocuments/NIZOM_ANTROPOLOGIYA_INSTITUT_EN.docx";
    }

    // 2. Теперь загружаем этот файл
    setHtml(""); // Очищаем старый текст перед загрузкой нового
    
    fetch(currentFayl)
      .then((res) => {
        if (!res.ok) throw new Error(language === "uz" ? "Fayl topilmadi" : "File not found");
        return res.arrayBuffer();
      })
      .then((buffer) =>
        mammoth.convertToHtml(
          { arrayBuffer: buffer },
          { transformDocument: markCenteredParagraphs, styleMap }
        )
      )
      .then((result) => {
        setHtml(fixSignatureLines(result.value));
      })
      .catch((err) => {
        console.error(language === "uz" ? "Hujjatni yuklashda xatolik:" : "Error loading document:", err);
        setHtml(
          language === "uz"
            ? "<p>Hujjatni yuklashda xatolik yuz berdi</p>"
            : "<p>Error loading document</p>"
        );
      });
      
  }, [language]); // Массив зависимостей: перезапускать при смене языка

  return (
    <div className="doc-wrapper">
      {html ? (
        <div className="doc" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p>
          {
            language === "uz" ? "Hujjat yuklanmoqda..."
            : "Loading document..."
          }
        </p>
      )}
    </div>
  );
}
