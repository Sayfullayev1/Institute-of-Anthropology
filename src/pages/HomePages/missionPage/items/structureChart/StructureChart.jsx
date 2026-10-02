import React from 'react';
import styles from './structureChart.module.scss';

// HTML/CSS-реплика structure-uz.png / structure-en.png.
//
// Три раскладки из одних данных, переключаются @media-запросами
// по ширине экрана (пороги — вверху scss):
//  • desktop — точная копия PNG (абсолютные боксы + линии, всё в cqw);
//  • tablet  — верхний ряд как на схеме, под шиной две ветки-дерева;
//  • phone   — советы, директор и одно вертикальное дерево.
//
// Координаты desktop — ПИКСЕЛИ ИСХОДНОЙ PNG (≈2576px шириной).
// rect()/line() сами вычитают поля картинки и переводят в проценты холста.
const X0 = 30; // левый край схемы на PNG
const Y0 = 180; // верхний край схемы на PNG (под заголовком)
const CANVAS_W = 2520;
const CANVAS_H = 1185;

const pct = (value, total) => `${((value / total) * 100).toFixed(3)}%`;

function rect(x1, y1, x2, y2) {
  return {
    left: pct(x1 - X0, CANVAS_W),
    top: pct(y1 - Y0, CANVAS_H),
    width: pct(x2 - x1, CANVAS_W),
    height: pct(y2 - y1, CANVAS_H),
  };
}

// Горизонтальная (y1===y2) или вертикальная (x1===x2) линия.
// Координата задаёт ОСЬ линии, толщина центрируется через transform.
function line(x1, y1, x2, y2) {
  const horizontal = y1 === y2;
  return {
    left: pct(Math.min(x1, x2) - X0, CANVAS_W),
    top: pct(Math.min(y1, y2) - Y0, CANVAS_H),
    width: horizontal ? pct(Math.abs(x2 - x1), CANVAS_W) : undefined,
    height: horizontal ? undefined : pct(Math.abs(y2 - y1), CANVAS_H),
    transform: horizontal ? 'translateY(-50%)' : 'translateX(-50%)',
  };
}

// Сетка нижней части: 4 колонки × 3 ряда (по PNG).
const COL_A = [32, 590];
const COL_B = [682, 1240];
const COL_C = [1328, 1886];
const COL_D = [1985, 2542];
const ROW_1 = [678, 866];
const ROW_2 = [925, 1112];
const ROW_3 = [1172, 1360];
const cell = (col, row) => rect(col[0], row[0], col[1], row[1]);
const mid = ([a, b]) => Math.round((a + b) / 2);

const SPINE_L = 636; // зазор A|B (590…682)
const SPINE_R = 1935; // зазор C|D (1886…1985)
const BUS_Y = 415; // шина под Direktor
const DIR_X = 1299; // ось Direktor / Ilmiy kotib
const ADMIN_X = 2256; // ось Ma’muriy xo‘jalik / Yordamchi xodimlar

// Все боксы схемы. rect — позиция в desktop-раскладке.
const NODES = {
  // верхний ряд
  council: { rect: rect(342, 185, 898, 372), variant: 'dashed', text: { uz: 'Ilmiy kengash', en: 'Scientific Council' } },
  director: { rect: rect(1020, 185, 1578, 372), variant: 'bold', text: { uz: 'Direktor', en: 'Director' } },
  youngCouncil: { rect: rect(1697, 185, 2255, 372), variant: 'dashed', text: { uz: 'Yosh olimlar kengashi', en: 'Young Scientists Council' } },

  // второй ряд
  deputy: { rect: rect(357, 452, 915, 640), text: { uz: 'Ilmiy ishlar bo‘yicha direktor o‘rinbosari', en: 'Deputy Director for Scientific Affairs' } },
  secretary: { rect: rect(1020, 452, 1578, 640), text: { uz: 'Ilmiy kotib', en: 'Scientific Secretary' } },
  admin: { rect: rect(1978, 452, 2535, 640), text: { uz: 'Ma’muriy xo‘jalik bo‘limi', en: 'Administrative and Economic Department' } },
  support: { rect: rect(1978, 673, 2535, 812), valign: 'top', sup: '*', text: { uz: 'Yordamchi xodimlar', en: 'Support Staff' } },

  // колонка A
  archAnthro: { rect: cell(COL_A, ROW_1), count: 10, text: { uz: 'Arxeologik antropologiya bo‘limi', en: 'Department of Archaeological Anthropology' } },
  histAnthro: { rect: cell(COL_A, ROW_2), count: 8, text: { uz: 'Tarixiy antropologiya bo‘limi', en: 'Department of Historical Anthropology' } },
  archGeophys: { rect: cell(COL_A, ROW_3), count: 4, text: { uz: 'Arxeologik geofizika bo‘limi', en: 'Department of Archaeological Geophysics' } },

  // колонка B
  geoAnthro: { rect: cell(COL_B, ROW_1), count: 10, text: { uz: 'Geoantropologiya bo‘limi', en: 'Department of Geoanthropology' } },
  socioAnthro: { rect: cell(COL_B, ROW_2), count: 8, text: { uz: 'Ijtimoiy-madaniy antropologiya bo‘limi', en: 'Department of Socio-Cultural Anthropology' } },
  journal: { rect: cell(COL_B, ROW_3), sup: '**', text: { uz: '“Uzbek anthropological journal”', en: '“Uzbek Anthropological Journal”' } },

  // колонка C
  hr: { rect: cell(COL_C, ROW_1), count: 1, text: { uz: 'Xodimlar bilan ishlash bo‘yicha mutaxassis', en: 'HR Specialist' } },
  ict: { rect: cell(COL_C, ROW_2), count: 1, text: { uz: 'AKT bo‘yicha mutaxassis', en: 'ICT Specialist' } },
  intl: { rect: cell(COL_C, ROW_3), count: 1, text: { uz: 'Xalqaro aloqalar bo‘yicha mutaxassis', en: 'International Relations Specialist' } },

  // колонка D (ряды 2–3)
  legal: { rect: cell(COL_D, ROW_2), count: 1, text: { uz: 'Bosh yuriskonsult', en: 'Chief Legal Counsel' } },
  accounting: { rect: cell(COL_D, ROW_3), count: 2, text: { uz: 'Buxgalteriya', en: 'Accounting Department' } },
};

const LINES = [
  // верх
  line(898, 279, 1020, 279), // Ilmiy kengash — Direktor
  line(1578, 279, 1697, 279), // Direktor — Yosh olimlar kengashi
  line(DIR_X, 372, DIR_X, 452), // Direktor -> шина -> Ilmiy kotib
  line(SPINE_L, BUS_Y, 2255, BUS_Y), // шина
  line(ADMIN_X, BUS_Y, ADMIN_X, 452), // шина -> Ma’muriy xo‘jalik bo‘limi
  line(SPINE_L, BUS_Y, SPINE_L, 452), // шина -> замдиректора

  // левая спица: замдиректора -> отделы A и B
  line(SPINE_L, 640, SPINE_L, mid(ROW_3)),
  line(COL_A[1], mid(ROW_1), COL_B[0], mid(ROW_1)),
  line(COL_A[1], mid(ROW_2), COL_B[0], mid(ROW_2)),
  line(COL_A[1], mid(ROW_3), COL_B[0], mid(ROW_3)),

  // правая спица: от шины вниз между C и D
  line(SPINE_R, BUS_Y, SPINE_R, mid(ROW_3)),
  line(COL_C[1], mid(ROW_1), SPINE_R, mid(ROW_1)),
  line(COL_C[1], mid(ROW_2), COL_D[0], mid(ROW_2)),
  line(COL_C[1], mid(ROW_3), COL_D[0], mid(ROW_3)),

  // Ma’muriy xo‘jalik -> Yordamchi xodimlar
  line(ADMIN_X, 640, ADMIN_X, 673),
];

// ───────── иерархия для планшета и телефона ─────────

// Отделы под замдиректора — в порядке схемы (A1, B1, A2, B2, A3, B3).
const DEPARTMENTS = ['archAnthro', 'geoAnthro', 'histAnthro', 'socioAnthro', 'archGeophys', 'journal'].map(id => ({ id }));

// Всё, что висит на шине справа от замдиректора.
const STAFF = [
  { id: 'secretary' },
  { id: 'hr' },
  { id: 'ict' },
  { id: 'intl' },
  { id: 'legal' },
  { id: 'accounting' },
  { id: 'admin', children: [{ id: 'support' }] },
];

// Телефон: одно дерево под директором.
const PHONE_TREE = [{ id: 'deputy', children: DEPARTMENTS }, ...STAFF];

const cx = (...names) => names.filter(Boolean).join(' ');

function Box({ node, language, compact, className }) {
  const classes = compact
    ? cx(
        styles.cBox,
        node.variant === 'dashed' && styles.cBoxDashed,
        node.variant === 'bold' && styles.cBoxBold,
        node.count !== undefined && styles.cHasCount,
        className,
      )
    : cx(
        styles.box,
        node.variant === 'dashed' && styles.boxDashed,
        node.variant === 'bold' && styles.boxBold,
        node.valign === 'top' && styles.boxTop,
        node.count !== undefined && styles.hasCount,
        className,
      );

  return (
    <div className={classes} style={compact ? undefined : node.rect}>
      <span>
        {node.text[language] || node.text.uz}
        {node.sup && <sup className={styles.sup}>{node.sup}</sup>}
      </span>
      {node.count !== undefined && (
        <span className={compact ? styles.cCount : styles.count}>{node.count}</span>
      )}
    </div>
  );
}

function Tree({ items, language, className }) {
  return (
    <ul className={cx(styles.tree, className)}>
      {items.map(item => (
        <li key={item.id}>
          <Box node={NODES[item.id]} language={language} compact />
          {item.children && <Tree items={item.children} language={language} />}
        </li>
      ))}
    </ul>
  );
}

export default function StructureChart({ language }) {
  const box = (id, className) => <Box node={NODES[id]} language={language} compact className={className} />;

  return (
    <div className={cx(styles.wrap, language === 'en' && styles.wrapEn)}>
      <p className={styles.title}>
        {language === 'en' ? 'Academy of Sciences of the Republic of Uzbekistan' : 'O‘zbekiston Respublikasi Fanlar akademiyasi'}
        <br />
        {language === 'en' ? 'Structure of the Institute of Anthropology' : 'Antropologiya instituti tuzilmasi'}
      </p>

      {/* десктоп: копия PNG */}
      <div className={styles.canvas}>
        {LINES.map((l, i) => (
          <span key={i} className={styles.line} style={l} />
        ))}
        {Object.entries(NODES).map(([id, node]) => (
          <Box key={id} node={node} language={language} />
        ))}
      </div>

      {/* планшет: верхний ряд как на схеме, под шиной две ветки */}
      <div className={styles.tablet}>
        <div className={styles.tTop}>
          {box('council')}
          {box('director', styles.tDirector)}
          {box('youngCouncil')}
        </div>
        <div className={styles.tBranches}>
          <div className={styles.tLeft}>
            {box('deputy', styles.tHead)}
            <Tree items={DEPARTMENTS} language={language} />
          </div>
          <div className={styles.tRight}>
            <Tree items={STAFF} language={language} />
          </div>
        </div>
      </div>

      {/* телефон: советы, директор, одно дерево */}
      <div className={styles.phone}>
        <div className={styles.pCouncils}>
          {box('council', styles.pCouncil)}
          {box('youngCouncil', styles.pCouncil)}
        </div>
        {box('director')}
        <Tree items={PHONE_TREE} language={language} />
      </div>
    </div>
  );
}