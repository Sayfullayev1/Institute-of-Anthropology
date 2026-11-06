// Разделы одного формата (обложка + заголовок + текст): список NewsPage и
// страница записи NewsDetailPage обслуживают их все — отличаются только адрес
// API (/api/<api>/...), путь на сайте и подписи. Записи и копирование между
// разделами ведутся в админке (там такой же postSections.js).
export const POST_SECTIONS = {
  news: {
    api: 'news',
    path: '/news',
    title: { uz: 'Yangiliklar', en: 'News' },
    empty: { uz: 'Hozircha yangiliklar yo‘q', en: 'No news yet' },
  },
  achievements: {
    api: 'achievements',
    path: '/achievements',
    title: { uz: 'Yutuqlar', en: 'Achievements' },
    empty: { uz: 'Hozircha yutuqlar yo‘q', en: 'No achievements yet' },
  },
};

// Английская версия сайта — без префикса, узбекская — с /uz.
export function localizedPath(path, language) {
  return language === 'uz' ? `/uz${path}` : path;
}
