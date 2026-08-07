import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';



export default function Section() {
  const { language } = useContext(LanguageContext);

  const listArray = [
    {
      uz: "Yosh olimlarni muhim tadqiqot yo‘nalishlarida va doktorlik ilmiy ishini tayyorlashda ilmiy-metodik va tashkiliy jihatdan qo‘llab quvvatlash, bundan tashqari Arxeologiya institutida mustahkam o‘rnashishi va professional darajaga yetishishiga ko‘maklashish;",
      ru: "Содействие профессиональному росту молодых ученых и закреплению их в Институте Археологии, в том числе научно-методическая и организационная поддержка при выборе ими актуальных направлений исследований и подготовке докторских работ.",
      en: "Promoting the professional growth of young scientists and securing them at the National Center of Archeology, including scientific, methodological and organizational support in their choice of relevant areas of research and preparation of doctoral theses.",
    },
    {
      uz: "Yosh olimlar ilmiy tadqiqot natijalarini joriy qilishiga, shu jumladan, ilmiy natijalarni nufuzli ilmiy konferensiya va ilmiy jurnallarda, Scopus i Web of Science indeksli veb saytlarga chiqarishga yordamlashishi;",
      ru: "Содействие распространению результатов научных исследований молодых ученых, в том числе продвижению их научных результатов на авторитетных научных конференциях и в рецензируемых научных журналах, индексируемых в Scopus и Web of Science.",
      en: "",
    },
    {
      uz: "Ilmiy konferensiyalarda yosh olimlar ishtirokini rejalashtirish;",
      ru: "Планирование участия молодых ученых в научных конференциях;",
      en: "Promoting the dissemination of research results of young scientists, including the promotion of their scientific results at reputable scientific conferences and in peer-reviewed scientific journals indexed in Scopus and Web of Science.",
    },
    {
      uz: "Innovatsion tadqiqot ishlarini o‘tkazishga amaliy yordam ko‘rsatish;",
      ru: "Оказать практическую помощь в проведении инновационных исследовательских работ;",
      en: "Planning the participation of young scientists in scientific conferences;",
    },
    {
      uz: "Yosh olimlar ilmiy ishini qo‘llab quvvatlash uchun grant ajratuvchi va pullik vositalarni to‘g‘ri taqsimlashda yordamlashuvchi tashkilotlar haqida ma’lumotlar to‘plash; Ilmiy tadqiqot va ilmiy-metodik ishlarga yosh olimlarni jalb qilish;",
      ru: "Сбор информации об организациях, которые выделяют грант для поддержки научных работ молодых ученых, и правильное распределение денежных средств.",
      en: "Provide practical assistance in conducting innovative research work;",
    },
    {
      uz: "Yosh olimlar mutaxassislik, ilmiy, ijtimoiy, yashash sharoiti va boshqa muammolar, shu jumladan yoshlarning ilmiy mutaxassisligi bo‘yicha o‘sish jarayonidagi qobilyat va qarorlarini Arxeologiya instituti boshchiligida tashkillashtirish;",
      ru: "Консолидация усилий молодых ученых в решении приоритетных для научных и научно-методических задач.",
      en: "Collecting information about organizations that provide grants to support scientific work of young scientists, and the correct distribution of funds.",
    },
    {
      uz: "Zamonaviy fan muammolarini yechishda turli fan mutaxassisliklari va yosh olimlar tashkilotlari o‘rtasida sohalararo va kompleks fan tadqiqotlarini olib borish ishlarida o‘zaro hamkorlik aloqasini rivojlantirish;",
      ru: "Привлечение молодых ученых к научным исследованиям и научно-методической работе.",
      en: "Consolidation of efforts of young scientists in solving priority scientific and scientific-methodological problems.",
    },
    {
      uz: "Yosh kadrlarni fan sohalariga moslashtirish yuzasidan turli ilmiy konferensiyalar, seminarlar, tadbirlar tashkil etish, ularning tadqiqot ishlari natijalarini keng ommaga tarqatish, milliy va xorijiy tashkilotlar o‘rtasida yoshlarning malaka almashishlarini tashkil etish;",
      ru: "Содействие руководству Института Археологии в выявлении и решении профессиональных, научных, социальных, жилищных и других проблем молодых ученых, в том числе проблем профессионального роста научной молодежи.",
      en: "Attracting young scientists to scientific research and scientific and methodological work.",
    },
    {
      uz: "Yoshlar ilmiy tashabbuskorligi rivojini tashkillashtirish;",
      ru: "Содействие развитию контактов между молодыми учеными различных научных специальностей для организации силами молодых ученых междисциплинарных комплексных научных исследований, направленных на решение актуальных и практически значимых задач современной науки.",
      en: "Assisting the leadership of the National Center of Archeology in identifying and solving professional, scientific, social, housing and other problems of young scientists, including the problems of professional growth of scientific youth.",
    },
    {
      uz: "Yosh olimlar ilmiy ishlarini amaliyotga tadbiq etishda: turli ma’lumot resurslar bazasini tashkil etish va ularga erkin kirishni tashkil etish.",
      ru: "Содействие распространению результатов исследований молодых ученых, организации и проведению научных конференций, семинаров, выездных школ и других мероприятий, в которых могут принимать участие молодые ученые, налаживанию и развитию контактов с национальными и зарубежными организациями, ориентированными на привлечение в науку молодых кадров.",
      en: "Promoting the development of contacts between young scientists of various scientific specialties for the organization by the forces of young scientists of interdisciplinary complex scientific research aimed at solving urgent and practically significant problems of modern science.",
    },
    {
      uz: "Yosh olimlar kengashi bilan turli ta’lim va fan muassasalari, akademik muassasalar va ilmiy tadqiqot institutlari o‘rtasidagi hamkorlik aloqalarini tashkil etish.",
      ru: "Содействие развитию молодежных научных инициатив.",
      en: "Promotion of dissemination of research results of young scientists, organization and holding of scientific conferences, seminars, field schools and other events in which young scientists can take part, establishment and development of contacts with national and foreign organizations focused on attracting young personnel to science.",
    },
    {
      uz: "",
      ru: "Поиск и внедрение в практику новых форм работы молодых ученых; создание базы данных и других информационных ресурсов, в том числе с удаленным доступом.",
      en: "Promoting the development of youth scientific initiatives.",
    },
    {
      uz: "",
      ru: "Сотрудничество с научными организациями, советами молодых ученых других образовательных организаций, академических учреждений и научно-исследовательских институтов.",
      en: " Search and introduction into practice of new forms of work of young scientists; creation of a database and other information resources, including those with remote access.",
    },
    {
      uz: "",
      ru: "",
      en: "Cooperation with scientific organizations, councils of young scientists of other educational organizations, academic institutions and research institutes.",
    },
    {
      uz: "Yosh olimlar kenshgashi raisi: A. Sandiboyev.",
      ru: "Председатель Совета Молодых ученых  А. Сандибаев",
      en: "Chairman of the Council of Young Scientists A. Sandibaev",
    }
  ]

  return (
    <section className={styles.container}>

      <p className={styles.text}>
        {
          language === "uz" 
          ? "O‘zRFA Arxeologiya instituti yosh olimlar kengashi yosh xodimlar va ko‘ngilli a’zolardan iborat ilmiy jamiyat hisoblanadi. Kengash 2010 yilda yosh olimlar tashabbusi va ma’muriyat homiyligi ostida iste’dodli yosh ilmiy xodimlar, katta ilmiy tadqiqotchilar va institut magistrantlaridan tashkil etilgan." :
          language === "ru"
          ? "Совет молодых учёных Института Археологии АН РУз является научным обществом (далее Совет), основанным на добровольном членстве и сотрудничестве. Совет был создан в 2010 г. по инициативе молодых ученых и при поддержке администрации института и призван представлять интересы молодых научных сотрудников, старших научных исследователей и магистрантов института." 
          : "The Council of Young Scientists of the National Center of Archeology of the Academy of Sciences of the Republic of Uzbekistan is a scientific society (hereinafter the Council) based on voluntary membership and cooperation. The Council was established in 2010 on the initiative of young scientists and with the support of the administration of the institute and is intended to represent the interests of young researchers, senior scientific researchers and undergraduates of the institute."
        }
      </p>

      <br />

      <p>
        <span className={styles.title}>
          {
            language === "uz" 
            ? "Yosh olimlar kengashi faoliyatining asosiy maqsadi - " :
            language === "ru"
            ? "Основная цель работы - " 
            : "The main goal of the Council of - "
          }
        </span>
        {
          language === "uz" 
          ? "yoshlarni asosiy ilmiy tadqiqot sistemasi bilan tanishtirish, yangi ilmiy maktab yaratish va amaldagi ilmiy maktab dasturini davom ettirish, jamoat ishlari va tajriba sohasida yosh olimlar ijodiy ishini himoya qilish. Yoshlarni birlashtirish, qaysiki shug‘ullanayotgan ilmi va ishini rivojlantirish, asosiy ilmiy tadqiqotlarida, tajriba va ijtimoiy yo‘nalishlarda qiziquvchan yoshlarni qo‘llab quvvatlash, hamda yuqori mansabda barqaror kadr bo‘lib o‘sishga yordam berishdir." :
          language === "ru"
          ? "Совета молодых ученых - ознакомление молодежи с основной системой научных исследований, продолжение действующих программ научных школ и создание новых научных школ, поддержка творческих работ молодых ученых в области профессиональных и общественных работ. Объединение молодежи, которое занимается образованием и выработкой интеграции, на основе научных исследований, поддерживает интересы молодежи в профессиональном и социальном направлении, а также, оказывает помощь в стабильном росте кадров на высокие должности." 
          : "Young Scientists is to familiarize young people with the main system of scientific research, continue the existing programs of scientific schools and create new scientific schools, support the creative work of young scientists in the field of professional and public works. The youth association, which is engaged in education and development of integration, on the basis of scientific research, supports the interests of young people in the professional and social direction, and also assists in the stable growth of personnel to high positions."
        }
      </p>

      <br />

      <p>
        <span className={styles.title}>
          {
            language === "uz" 
            ? "Yosh olimlar kengashining asosiy vazifasi:" :
            language === "ru"
            ? "Основные задачи совета молодых ученых:" 
            : "The main tasks of the Council of Young Scientists:"
          }
        </span>
      </p>

      {
        listArray.map((item, index) => {
          return(
            <p className={styles.text}>
              {
                item[language]
              }
            </p>
          )
        })
      }

    </section>
  );
}
