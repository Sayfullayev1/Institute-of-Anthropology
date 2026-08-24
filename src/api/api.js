// Раньше ходили напрямую на порт 3100, в обход nginx-прокси (location /api/
// -> localhost:3100) — для этого пришлось бы отдельно открывать порт 3100
// наружу в файрволе, да и запрос получался кросс-доменным (другой порт —
// другой origin), а в CORS на бэкенде разрешён только anthropology.uz.
// Сайт теперь на HTTPS — через nginx (порт 443, тот же адрес, что и у
// самого сайта) — same-origin, CORS вообще не участвует.
const api = 'https://anthropology.uz';

// const api = 'http://localhost:3100'; // для локальной разработки — напрямую на локальный бэкенд
// const api = 'http://185.196.219.24'; // старый адрес по IP, без HTTPS


// const api = 'https://milliy-arxeologiya-markazi-admin-api-1.onrender.com';

export default function getApiUrl() {
  return (
    api
  )
}