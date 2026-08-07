import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';



export default function Section() {
  const { language } = useContext(LanguageContext);


  // Пример данных для таблицы
  // const tableData = [
  //   {
  //     number: 1,
  //     name: 'Участие в государственной научно-технической экспертизе местного научного потенциала в проведении независимого научного аудита приоритетов развития науки.',
  //     mechanism: 'Участвовать в формировании технического задания и заявки на научный аудит.',
  //     period: '2020-2022',
  //     responsible: 'Директор центра, заместитель директора по научной работе, учёный секретарь, заведующие отделами'
  //   },
  //   {
  //     number: 2,
  //     name: 'Формирование рейтинговой системы подразделений научной организации',
  //     mechanism: '1. Утверждение методики расчёта рейтинга кафедр.\n2. Составить и опубликовать рейтинг кафедр.',
  //     period: 'Ноябрь 2020\nКаждый год в декабре',
  //     responsible: 'Заместитель директора по научной работе, учёный секретарь, заведующие отделами'
  //   },
  // ];

  const tableData = {
    title: {
      number: "№",
      name: {
        uz: "Чора тадбирлар номи",
        ru: "Название мероприятия",
        en: "Action name"
      },
      mechanism: {
        uz: "Амалга ошириш механизми",
        ru: "Механизм реализации",
        en: "Mechanism of realisation"
      },
      period: {
        uz: "Ижро муддати",
        ru: "Срок реализации",
        en: "Duration"
      },
      responsible: {
        uz: "Ижрочилар ва масъуллар",
        ru: "Исполнители и ответственные лица",
        en: "Executors and responsible persons"
      },
    },
    list: [
      {
        title: {
          uz: "I. Илм-фан соҳасида бошқарув тизимини такомиллаштириш",
          ru: "I. Совершенствование системы управления в сфере науки",
          en: "I. Improving the management system in the field of science"
        }
      },
      {
        number: 1,
        name: {
          uz: "Маҳаллий илмий салоҳиятнинг давлат илмий-техник экспертизасини илм-фанни ривожлантиришнинг устивор йўналишларини мустақил илм-фан аудитини ўтказишда иштирок этиш",
          ru: "Участие в государственной научно-технической экспертизе местного научного потенциала в проведении независимого научного аудита приоритетов развития науки",
          en: "Participation in the state scientific and technical expertise of the local scientific potential in conducting an independent scientific audit of the priorities for the development of science"
        },
        mechanism: {
          uz: "Илм-фан аудити учун техник вазифа ва талабномани шакллантиришда иштирок этиш",
          ru: "Участвовать в формировании технического задания и заявки на научный аудит.",
          en: "Participate in the formation of technical specifications and an application for a scientific audit."
        },
        period: {
          uz: "2020-2022 йиллар",
          ru: "2020-2022",
          en: "2020-2022"
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        number: 2,
        name: {
          uz: "Илмий ташкилот бўлимлари рейтинг тизимини шакллантириш",
          ru: "Формирование рейтинговой системы подразделений научной организации",
          en: "Formation of the rating system of divisions of a scientific organization"
        },
        mechanism: {
          uz: "1. Бўлимлар рейтингини ҳисоблаш методикасини тасдиқлаш.\n 2. Бўлимлар рейтингини тузиш ва эълон қилиш.",
          ru: "1. Утверждение методики расчета рейтинга кафедр.\n 2. Составить и опубликовать рейтинг кафедр.",
          en: "1. Approval of the methodology for calculating the rating of departments.\n 2. Compile and publish the rating of the departments."
        },
        period: {
          uz: "2020 йил ноябрь Хар йили декабрь ойида",
          ru: "Ноябрь 2020 Каждый год в декабре",
          en: "November 2020 Every December"
        },
        responsible: {
          uz: "Илмий ишлар бўйича директор ўринбосари, илмий котиб, бўлим бошлиқлари",
          ru: "Заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        number: 3,
        name: {
          uz: "Марказ бошқарув тизимини ислоҳ қилиш",
          ru: "Реформирование системы управления Центром.",
          en: "Reforming the management system of the Center."
        },
        mechanism: {
          uz: "1. Илмий бўлимлар мудирлигига соҳада етакчи бўлган ёш мутахассисни тайинлаш ҳамда Илмий кенгаш бошқарувига бош илмий маслаҳатчи лавозимини киритиш.\n 2. Янги раҳбарларни тайинлаш ва уларни Ўзбекистон Республикаси Президенти ҳузуридаги Давлат бошқаруви академиясида ўқитиш.\n 3. Раҳбарлар малакасини мунтазам равишда ошириб бориш.",
          ru: "1.Назначение ведущего молодого специалиста в руководящие научные подразделения и введение должности главного научного консультанта в аппарате Ученого совета\n 2.Назначение новых руководителей и их обучение в Академии государственного управления при Президенте Республики Узбекистан.\n 3. Регулярное обучение лидеров.",
          en: "1. Appointment of a leading young specialist in leading scientific departments and the introduction of the position of chief scientific consultant in the apparatus of the Academic Council\n 2. Appointment of new leaders and their training at the Academy of Public Administration under the President of the Republic of Uzbekistan.\n 3. Regular training of leaders."
        },
        period: {
          uz: "2020 йил декабрь 2021 йил январь — март, мунтазам Ҳар йили бир марта",
          ru: "Декабрь 2020 г. Январь-март 2021 г., регулярный Раз в год",
          en: "December 2020 January-March 2021 Regular Once a year"
        },
        responsible: {
          uz: "",
          ru: "",
          en: ""
        }
      },
      {
        number: 4,
        name: {
          uz: "Археология йўналиши бўйича нодавлат нотижорат ташкилот сифатида “Ўзбекистон археологлари жамияти”ни ташкил қилиш ва фаолиятини йўлга қўйиш",
          ru: "Создание и функционирование «Общества археологов Узбекистана» как негосударственной некоммерческой организации в области археологии.",
          en: "Creation and functioning of the \"Society of Archaeologists of Uzbekistan\" as a non-governmental non-profit organization in the field of archeology."
        },
        mechanism: {
          uz: "1.Археологиянинг муҳим тадқиқот йўналишлари ва илмий мактабларни таҳлил қилишда ва рўйхатини шакллантириш;\n 2. “Ўзбекистон археологлари жамияти”ни тузиш",
          ru: "1. Формирование списка важных направлений исследований и научных школ археологии;\n 2. Создание Общества археологов Узбекистана, декабрь",
          en: "1. Formation of a list of important areas of research and scientific schools of archeology;\n 2. Creation of the Society of Archaeologists of Uzbekistan, December"
        },
        period: {
          uz: "2020 йил декабрь 2021 йил февраль",
          ru: "декабрь 2020 г. Февраль 2021 г",
          en: "December 2020 February 2021"
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        title: {
          uz: "II. Илм фан ва илмий фаолиятни молиялаштириш тизимини такомиллаштириш ҳамда молиялаштириш манбаларини диверсификациялаш",
          ru: "II. Совершенствование системы финансирования науки и исследовательской деятельности и диверсификация источников финансирования",
          en: "II. Improvement of the system of financing science and research activities and diversification of funding sources"
        }
      },
      {
        number: 5,
        name: {
          uz: "Бўлимлар кўламида илмий лойиҳаларни хусусий сектор ва тармоқ ташкилотлари билан тенг шерикликда молиялаштириш кўламини кенгайтириш",
          ru: "Расширить объем финансирования исследовательских проектов на кафедрах наравне с частным сектором и отраслевыми организациями.",
          en: "To expand the volume of funding for research projects in departments on a par with the private sector and industry organizations."
        },
        mechanism: {
          uz: "Хусусий сектор ва тармоқ ташкилотлари билан давлат буюртмаси доирасида корхоналар муаммолари ечимига қаратилагн тематик лойиҳалар танловларида иштирок этиш",
          ru: "Участие в конкурсах с тематическими проектами, направленными на решение проблем предприятий в рамках государственного заказа с частным сектором и отраслевыми организациями.",
          en: "Participation in competitions with thematic projects aimed at solving the problems of enterprises within the framework of state orders with the private sector and industry organizations."
        },
        period: {
          uz: "2020-2022 йиллар",
          ru: "2020-2022",
          en: "2020-2022"
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        number: 6,
        name: {
          uz: "Илм-фан ва илмий фаолиятга хорижий давлатлар донор ташкилотларнинг грантлари, техник кўмак маблағларини жалб қилинишини йўлга қўйиш",
          ru: "Налаживание привлечения грантов и технической помощи зарубежных доноров на научно-исследовательскую деятельность",
          en: "Establishment of attracting grants and technical assistance from foreign donors for research activities"
        },
        mechanism: {
          uz: "1. Хорижий ҳамкор ташкилотлар билан ўзаро алоқаларни ривожлантириш;\n 2. Ҳар бир бўлим ўз йўналишида тадқиқотлар олиб борувчи илмий марказлар билан ҳамкорликни йўлга қўйиши тизимини амалга ошириш",
          ru: "1. Развитие взаимодействия с зарубежными партнерскими организациями;\n 2. Внедрить систему, в которой каждый отдел сотрудничает с исследовательскими центрами, которые проводят исследования в своей области.",
          en: "1. Development of interaction with foreign partner organizations;\n 2. Introduce a system in which each department collaborates with research centers that conduct research in their field."
        },
        period: {
          uz: "2020-2022 йиллар 2022 йил",
          ru: "2020-2022 2022",
          en: "2020-2022 2022"
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        number: 7,
        name: {
          uz: "Илғор хорижий тажриба ва миллий амалиётни ўрганиш натижалари асосида қуйидагилар тасдиқланишини назарда тутувчи Ҳукумат қарори лойиҳасига муносабат билдириш: Давлат бюджети маблағлари ҳисобидан бажариладиган давлат илмий-техникавий дастурлари доирасида лойиҳаларни амалга оширишни режалаштириш, молиялаштириш ва харажатларни ҳисобга олиш тартиби тўғрисидаги низом; Давлат бюджети маблағлари ҳисобидан давлат илмий ташкилотларини базавий молиялаштириш тартиби тўғрисидаги низом.",
          ru: "Комментарий к проекту Постановления Правительства, которым по результатам изучения передового международного и отечественного опыта предусмотрено утверждение: Положение о порядке планирования, финансирования и учета затрат на проекты в рамках государственных научно-технических программ, реализуемых за счет государственного бюджета; Положение о порядке основного финансирования государственных научных организаций за счет средств государственного бюджета",
          en: "Commentary on the draft Government Decree, which, based on the results of studying the best international and domestic experience, provides for the approval: Regulation on the procedure for planning, financing and accounting for projects within the framework of state scientific and technical programs implemented at the expense of the state budget; Regulation on the procedure for the main financing of state scientific organizations at the expense of the state budget"
        },
        mechanism: {
          uz: "1. Ишчи гуруҳга малакали мутахассислар номзодини тавсия қилиш.\n 1. Қарор лойиҳасига муносабат билдириш",
          ru: "1. Рекомендовать рабочей группе квалифицированного специалиста.\n 2. Участвовать в разработке постановления проекта",
          en: "1. Recommend a qualified specialist to the working group.\n 2. Participate in the development of the draft resolution"
        },
        period: {
          uz: "2020 йил декабрь",
          ru: "Декабрь 2020 г.",
          en: "December 2020"
        },
        responsible: {
          uz: "",
          ru: "",
          en: ""
        }
      },
      {
        title: {
          uz: "III. Юқори малакали илмий ва муҳандис кадрлар тайёрлаш ҳамда уларни илмий фаолиятга йўналтириш",
          ru: "III. Подготовка высококвалифицированных научных и инженерных кадров и их ориентация на научную деятельность.",
          en: "III. Training of highly qualified scientific and engineering personnel and their orientation towards scientific activity."
        }
      },
      {
        number: 8,
        name: {
          uz: "Устивор илмий йўналишлар бўйича илмий кадрларни мақсадли тайёрлаш механизмини жорий этилишида иштирок этиш.",
          ru: "Участвовать во внедрении механизма целевой подготовки научных кадров по приоритетным научным направлениям.",
          en: "Participate in the implementation of a mechanism for targeted training of scientific personnel in priority scientific areas."
        },
        mechanism: {
          uz: "1. Фан докторларини тайёрлаш доирасида устувор илмий йўналишларни белгиланишида, мазкур йўналишларда илмий кадрларга бўлган эҳтиёж ҳамда уларни тайёрлашда олий таълим муассасалари ва илмий ташкилотларнинг салоҳиятларини ўрганилишида иштирок этиш.\n 2. Ўрганиш натижаларига кўра устивор илмий йўналишлар бўйича илмий кадрларни мақсадли тайёрлашда иштирок этиш.",
          ru: "1. Участвовать в определении приоритетных научных направлений в подготовке докторов наук, изучении потребности в научных кадрах по этим направлениям и потенциала вузов и научных организаций в их подготовке.\n 2. Участвовать в целевой подготовке научных кадров по приоритетным научным направлениям по результатам исследования.",
          en: "1. To participate in the definition of priority research areas in the training of doctors of science, in the study of the need for scientific personnel in these areas and the potential of universities and scientific organizations in their training.\n 2. Participate in targeted training of scientific personnel in priority scientific areas based on the research results."
        },
        period: {
          uz: "2021 йил январь",
          ru: "Январь 2021 г.",
          en: "January 2021"
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        number: 9,
        name: {
          uz: "Олимларни ижодий ва моддий рағбатлантириш тизимини жорий этилишида, илмий ходимларнинг мақомини оширишни назарда тутувчи ижтимоий пакет ишлаб чиқилишида иштирок этиш.",
          ru: "Участвовать во внедрении системы творческого и материального стимулирования ученых, разработке социального пакета, направленного на повышение статуса исследователей.",
          en: "Participate in the implementation of a system of creative and material incentives for scientists, the development of a social package aimed at increasing the status of researchers."
        },
        mechanism: {
          uz: "1. Олимларни ижодий ва моддий рағбатлантириш бўйича илғор халқаро тажрибаларни ўрганилишида иштирок этиш. \n  2. Хорижий тажрибалар асосида олимларни ижодий ва моддий рағбатлантириш тизимини жорий этиш, илмий ходимларнинг мақомини ошириш юзасидан таклифлар ишлаб чиқилишида иштирок этиш. \n 3. Илм-фанни ривожлантиришда маҳаллий, хорижий илмий ва мухандис кадрлар иштирокини таъминланишида иштирок этиш.",
          ru: "1. Участвовать в изучении лучших мировых практик творческого и финансового стимулирования ученых.\n 2. Участвовать в разработке предложений по внедрению системы творческого и материального стимулирования ученых на основе зарубежного опыта, повышения статуса исследователей.\n 3. Участвовать в обеспечении участия отечественных, зарубежных научных и инженерных кадров в развитии науки.",
          en: "1. Participate in the study of the best world practices of creative and financial incentives for scientists.\n 2. Participate in the development of proposals for the implementation of a system of creative and material incentives for scientists based on foreign experience, raising the status of researchers.\n 3. To participate in ensuring the participation of domestic, foreign scientific and engineering personnel in the development of science."
        },
        period: {
          uz: "2020 йил декабрь 2021 йил февраль 2021-2022 йиллар",
          ru: "Декабрь 2020 г. Февраль 2021 г. 2021-2022 гг.",
          en: "Decedmber 2020 February 2021 2021-2022"
        },
        responsible: {
          uz: "",
          ru: "",
          en: ""
        }
      },
      {
        number: 10,
        name: {
          uz: "Далат илмий ташкилотларида юқори малакали янги илмий кадрлар тайёрлаш амалиётини жорий этилишида иштирок этиш.",
          ru: "Участие во внедрении практики подготовки новых высококвалифицированных научных кадров в государственных научных организациях.",
          en: "Participation in the implementation of the practice of training new highly qualified scientific personnel in state scientific organizations."
        },
        mechanism: {
          uz: "Доцент ва профессор унвонини олишда докторантурадан кейинги орттирилган тажриба мавжудлигига оид қуйидагиларни назарда тутувчи норматив-ҳуқуқий ҳужжат лойиҳасига муносабат билдириш: кадарлар билан ишлашнинг стратегик бошқарувини жорий этиш; лавозимларнинг янги жадвалини тузиш; рақобатбардош иш хақи тўланишини таъминлаш.",
          ru: "Прокомментировать проект нормативно-правового документа о наличии пост докторского опыта при получении званий доцента и профессора: внедрение стратегического управления персоналом; составление нового расписания позиций; обеспечение конкурентоспособной заработной платы.",
          en: "Comment on the draft regulatory document on the availability of post-doctoral experience in obtaining the titles of associate professor and professor: the introduction of strategic personnel management; drawing up a new schedule of positions; ensuring competitive wages."
        },
        period: {
          uz: "2021 йил март",
          ru: "Март 2021 г.",
          en: "March 2021"
        },
        responsible: {
          uz: "",
          ru: "",
          en: ""
        }
      },
      {
        number: 11,
        name: {
          uz: "Мутахассиларни қайта тайёрлаш ва доимий равишда малакасини оширилишида иштирок этиш.",
          ru: "Участвуйте в переподготовке и непрерывном повышении квалификации специалистов",
          en: "Participate in retraining and continuous professional development of specialists"
        },
        mechanism: {
          uz: "1. Инглиз тилини ўрганаётган олимлар учун турли ўқув курсларида иштирокини таъминлаш.\n 2. Инновацион ривожланиш ва новаторлик ғояларини қўллаб қувватлаш жамғармаси ва “Эл-юрт умиди” жамғармаси маблағлари ҳисобига иқтидорли ёш олимларни етакчи хорижий илмий марказларда ўқитиш ва малака оширишда иштирокини таъминлаш, уларнинг халқаро илмий-техник конференцияларда ва илмий лойиҳаларда иштирок этишларига, илмий ишларининг нашр этилишига кўмаклашиш.\n 3. Тадқиқотчилар ва олимлар учун ташкил этиладиган профессионал тренингларда иштирок этиш.  ",
          ru: "1. Обеспечение участия в различных учебных курсах для ученых, изучающих английский язык.\n 2. Обеспечение участия талантливых молодых ученых в стажировке и повышении квалификации в ведущих зарубежных исследовательских центрах, их участие в международных научно-технических конференциях и исследовательских проектах, публикация научных работ за счет средств Фонда поддержки инновационного развития и инновационных идей. и Фонд «Эль-Юрт Умиди» оказывают помощь\n 3. Участвовать в профессиональных тренингах для исследователей и ученых.",
          en: "1. Ensuring participation in various training courses for English language learners.\n 2. Ensuring the participation of talented young scientists in internships and advanced training in leading foreign research centers, their participation in international scientific and technical conferences and research projects, the publication of scientific papers at the expense of the Fund for Support of Innovative Development and Innovative Ideas. and the El-Yurt Umidi Foundation provide assistance\n 3. Participate in professional trainings for researchers and scientists."
        },
        period: {
          uz: "2020-2022 йиллар",
          ru: "2020-2022",
          en: "2020-2022"
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        number: 12,
        name: {
          uz: "Илмий даражали кадрлар тайёрлаш (докторантура) институтини мониторинг қилиш тизимини такомиллаштириш",
          ru: "Совершенствование системы мониторинга института подготовки научных кадров (докторантура)",
          en: "Improving the monitoring system of the institute for the training of scientific personnel (doctoral studies)"
        },
        mechanism: {
          uz: "Илмий даражали кадрлар тайёрлаш (докторантура) институти мониторингини амалга ошириш ва уни электрон тизимга ўтказиш",
          ru: "Мониторинг института научной подготовки (докторантуры) и перевод его в электронную систему",
          en: "Monitoring of the institute of scientific training (doctoral studies) and its transfer to the electronic system"
        },
        period: {
          uz: "2021 йил январь",
          ru: "2021",
          en: "2021"
        },
        responsible: {
          uz: "",
          ru: "",
          en: ""
        }
      },
      {
        number: 13,
        name: {
          uz: "Илмий ташкилотлар салоҳияти ва моддий-техника базасидан фойдаланган ҳолда юқори малакали илмий даражали кадрларни тайёрлаш",
          ru: "Подготовка высококвалифицированных научных кадров с использованием потенциала и материально-технической базы научных организаций.",
          en: "Training of highly qualified scientific personnel using the potential and material and technical base of scientific organizations."
        },
        mechanism: {
          uz: "1. Илмий ташкилотлар олимларини таълим жараёнларига жалб этиш ва рағбатлантиришнинг ҳуқуқий механизмларини янада такомиллаштириш.\n 2. Тегишли йўналишдаги бакалавр ва магистрларнинг дарс жараёнидаги лаборатория амалиётини ташкил этиш учун олий таълим муассасалари билан келишув имзолаш. ",
          ru: "1. Дальнейшее совершенствование правовых механизмов вовлечения и поощрения ученых из научных организаций в образовательном процессе.\n 2. Заключение договоров с высшими учебными заведениями на организацию лабораторной практики в учебном процессе бакалавров и магистров соответствующей специальности.",
          en: "1. Further improvement of legal mechanisms for the involvement and encouragement of scientists from scientific organizations in the educational process.\n 2. Conclusion of contracts with higher educational institutions for the organization of laboratory practice in the educational process of bachelors and masters of the relevant specialty."
        },
        period: {
          uz: "2020 йил декабрь",
          ru: "2020",
          en: "2020"
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments"
        }
      },
      {
        title: {
          uz: "IV. Илм-фанни ривожлантиришнинг замонавий инфратузилмасини яратиш",
          ru: "IV. Создание современной инфраструктуры для развития науки",
          en: "IV. Creation of modern infrastructure for the development of science"
        }
      },
      {
        number: 14,
        name: {
          uz: "Илмий ташкилотлар ва олий таълим муассасаларининг илмий лабораториясини замонавий асбоб-ускуналар билан жиҳозлниши ҳамда бутловчи қисмлар билан таъминлаш",
          ru: "Оснащение научных лабораторий научных организаций и вузов современным оборудованием.",
          en: "Equipping scientific laboratories of scientific organizations and universities with modern equipment.",
        },
        mechanism: {
          uz: "1. Давлат буюртмаси асосида тасдиқланган илмий лойиҳаларга ажратилган маблағларнинг камида 40 фоизини моддий-техника базага йўналтириш.\n 2. Замонавий илмий асбоб-ускуналардан иборат лабораториялар ташкил этиш юзасидан талабномаларни шакллантириш ва Инновацион ривожланиш вазирлигига тақдим этиб бориш ",
          ru: "1. Не менее 40% средств, выделяемых на утвержденные на основании государственного заказа научные проекты, направлять на материально-техническую базу.\n 2. Формирование и подача заявок в Мин. инновационного развития на создание лабораторий с современным научным оборудованием.",
          en: "1. At least 40% of the funds allocated for scientific projects approved on the basis of the state order should be directed to the material and technical base.\n 2. Formation and submission of applications to the Min. innovative development to create laboratories with modern scientific equipment.",
        },
        period: {
          uz: "2020-2022 йиллар",
          ru: "2020-2022",
          en: "2020-2022",
          
        },
        responsible: {
          uz: "Марказ директори, илмий ишлар бўйича директор ўринсбоари, илмий котиб, бўлим бошлиқлари",
          ru: "Директор центра, заместитель директора по научной работе, ученый секретарь, заведующие отделами",
          en: "Director of the Center, Deputy Director for Research, Scientific Secretary, Heads of Departments",
        }
      },
    ]
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        {
          language === 'uz'
          ? 'Илм-фанни 2030 йилгача ривожлантириш концепциясини Ўзбекистон Республикаси Фанлар академияси Миллий археология марказида 2020-2022 йилларда амалга оширилувчи ишлар бўйича чора-тадбирлар'
          : language === 'ru'
          ? 'Концепция развития науки до 2030 г. Меры, которые необходимо принять в Национальном центре археологии Академии наук Республики Узбекистан в 2020-2022 гг.'
          : 'Concept for the development of science until 2030. Measures to be taken at the National Center of Archeology of the Academy of Sciences of the Republic of Uzbekistan in 2020-2022.'
        }
      </h3>

      <h2 className={styles.planTitle}>
        {
          language === 'uz'
          ? 'РЕЖАСИ'
          : language === 'ru'
          ? 'ПЛАН'
          : 'PROGRAMM'
        }
      </h2>

      <div className={styles.tableWrapper}>
        <table className={styles.planTable}>
          <thead>
            <tr>
              <th>{tableData.title.number}</th>
              <th>{tableData.title.name[language]}</th>
              <th>{tableData.title.mechanism[language]}</th>
              <th>{tableData.title.period[language]}</th>
              <th>{tableData.title.responsible[language]}</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData?.list.map((row, index) => {
                if (row.title) {  
                  return(
                    <tr key={index} className={styles.titleRow}>
                      <td  colSpan={5}>{row.title[language]}</td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={index}>
                      <td>{row.number}</td>
                      <td>{row.name[language]}</td>
                      <td>
                        {row.mechanism[language].split('\n').map((line, i, arr) => (
                          <React.Fragment key={i}>
                            {line.trim()}
                            <br />
                            {i < arr.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </td>
                      <td>{row.period[language]}</td>
                      <td>{row.responsible[language]}</td>
                    </tr>
                  )
                }
                
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}
