import DOMPurify from 'dompurify';

// Контент новостей/статей пишется в редакторе (RichTextNewsEditor, project3) админом,
// а сам HTML хранится и отдаётся как есть, без проверки на бэкенде. Значит если
// аккаунт админа скомпрометируют, можно один раз сохранить <script>/onerror=...
// и он будет выполняться у КАЖДОГО посетителя сайта, открывшего эту статью.
// Чистим перед рендером через dangerouslySetInnerHTML — это последний рубеж
// защиты обычных посетителей.
//
// iframe разрешаем отдельно (DOMPurify по умолчанию его вырезает) — сайт
// легитимно использует iframe для встроенного видео. Остальное, что использует
// редактор (table/mark/blockquote/data-* атрибуты и т.д.), уже входит
// в дефолтный allowlist DOMPurify — отдельно прописывать не нужно.
const SANITIZE_CONFIG = {
  ADD_TAGS: ['iframe'],
  ADD_ATTR: ['target', 'allowfullscreen', 'frameborder'],
};

export default function sanitizeHtml(html) {
  if (!html) return '';
  return DOMPurify.sanitize(html, SANITIZE_CONFIG);
}
