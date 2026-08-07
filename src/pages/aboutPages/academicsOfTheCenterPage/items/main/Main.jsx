import React, { useContext } from 'react';
import './main.scss';
import Category from '@/components/category/Category';
import { LanguageContext } from '@/context/LanguageContext';

import cardsDataImg1 from '@/public/images/academicsOfTheCenterPageImages/image 1.svg';
import cardsDataImg2 from '@/public/images/academicsOfTheCenterPageImages/image 1 (1).svg';
import cardsDataImg3 from '@/public/images/academicsOfTheCenterPageImages/image 1 (2).svg';
import cardsDataImg4 from '@/public/images/academicsOfTheCenterPageImages/image 1 (3).svg';
import cardsDataImg5 from '@/public/images/academicsOfTheCenterPageImages/image 1 (4).svg';
import cardsDataImg6 from '@/public/images/academicsOfTheCenterPageImages/image 1 (5).svg';




export default function Main() {
  const { language } = useContext(LanguageContext);

  const menuData = [
    {
      text: {
        uz: 'Bosh sahifa',
        ru: 'Главная',
        en: 'Main',
      },
      link: '/',
    },
    {
      text: {
        uz: 'Markaz akademiklari',
        ru: 'Академики центра',
        en: 'Academics of the Center',
      },
      link: '/',
    },
  ];

  const cardsData = [
    {
      img: cardsDataImg1,
      Name: {
        uz: 'Yahyo G‘ulomovich G‘ulomov',
        ru: 'Гулямов Яхъя Гулямович',
        en: 'Gulamov Yakhya Gulamovich',
      },
      text: {
        uz: '(1908-1977 yy.). tarix fanlari doktori, professor, O‘zR FA akademigi (1966 y.). Tarixchi-arxeolog, sharqshunos. 1956-1959 yy. O‘zR FA Arxeologiya instituti qadimgi va o‘rta asrlar tarixi bo‘limi boshlig‘i, shu bilan bir qatorda O‘zR FA Tarix va arxeologiya instituti direktori v.b. sifatida ham faoliyat ko‘rsatgan. Iste’dodli tadqiqotchi va tashkilotchi, o‘zbek arxeologiya maktabi asoschisi. Ya. G‘ulomov tomonidan arxeologik yodgorliklarni o‘rta asrlar yozma manbalari bilan solishtirgan holda rejali tadqiq etish O‘rta Osiyo xalqlari ijtimoiy-iqtisodiy, siyosiy tarixining bir qancha dolzarb muammolarini yechishga imkon berdi. Ya.G‘. G‘ulomovning O‘zbekiston sug‘orilish tarixiga oid ilmiy ishlari ushbu yo‘nalishdagi tadqiqotlarning asosi bo‘lib xizmat qilib, xalq xo‘jaligi sohasida ham muhim ahamiyat kasb etdi. Ushbu tadqiqotlar natijasida bir nechta dehqonchilik vohalarining inqirozi faqatgina ijtimoiy-siyosiy sabablar bilan emas, balki aholi dehqonchilik xo‘jaliklarining faoliyati bilan bog‘liq bo‘lgan sabablari ham ochib berildi. Monografiyalar va uslubiy qo‘llanmalar bilan qo‘shib hisoblaganda olimning qalamiga mansub 100 dan ortiq ilmiy ishlar mavjud.',
        ru: '(1908-1977 гг.). Доктор исторических наук, профессор, академик АН Узбекистана (1966 г.). Историк, археолог, востоковед. С 1956-1959 гг. возглавлял отдел древней и средневековой истории, а также являлся исполняющим обязанности директора Института истории и археологии АН Узбекистана. Талантливый исследователь и организатор науки, создатель научной школы узбекских археологов и историков, изучавших многовековое прошлое народов Узбекистана и их богатое культурное наследие. Планомерное изучение археологических памятников, средневековых письменных источников позволило ему с принципиальных научных позиций решить ряд актуальных проблем политической, социально-экономической истории народов Средней Азии. Научные труды Я.Г. Гулямова по истории орошения Узбекистана, заложившие основы этого важного направления исследований, имеют и большое народнохозяйственное значение. В этих трудах раскрываются причины запустения целых земледельческих оазисов, связанные не только с социально-политическими событиями, но и с хозяйственной деятельностью земледельческого населения. Перу ученого принадлежит более 100 научных работ, включая монографии и учебные пособия.',
        en: "(1908-1977). Doctor of Historical Sciences, Professor, Academician of the Academy of Sciences of Uzbekistan (1966). Historian, archaeologist, orientalist. 1956-1959 headed the department of ancient and medieval history, and was also the acting director of the Institute of History and Archeology of the Academy of Sciences of Uzbekistan. A talented researcher and organizer of science, the founder of the scientific school of Uzbek archaeologists and historians who studied the centuries-old past of the peoples of Uzbekistan and their rich cultural heritage. The systematic study of archaeological monuments, medieval written sources allowed him to solve a number of urgent problems of the political, socio-economic history of the peoples of Central Asia from a fundamental scientific standpoint. Scientific works of Ya.G. Gulamov on the history of irrigation in Uzbekistan, which laid the foundations for this important area of ​​research, are also of great national economic importance. These works reveal the reasons for the desolation of entire agricultural oases, associated not only with socio-political events, but also with the economic activities of the agricultural population. The scientist's Peru owns more than 100 scientific works, including monographs and textbooks.",
      }
    },
    {
      img: cardsDataImg2,
      Name: {
        uz: 'Pugachenkova Galina Anatolyevna',
        ru: 'Пугаченкова Галина Анатольевна',
        en: 'Pugachenkova Galina Anatolyevna',
      },
      text: {
        uz: "(1915-2007 yy.). San’atshunoslik doktori, professor, O‘zR FA akademigi (1984 y.), san’atshunos, tarixchi. “Navoiy davrida O‘rta Osiyo me’morchiligi” mavzusida nomzodlik ishini yoqlagan. 1960 yildan San’atshunoslik instituti san’at va me’morchilik tarixi bo‘limi boshlig‘i vazifasida faoliyat olib bordi. Ushbu bo‘limning olib borgan katta miqyosdagi arxeologik tadqiqotlari natijasida Xolchayon, Dalvarzintepa kabi noyob yodgorliklar ochib o‘rganilib, fanga katta yangiliklar kiritildi. Uning kushonlar davri san’atshunosligi bo‘yicha g‘oyalari dunyo faniga keng tarqaldi. Tarixiy-madaniy jarayonlarning umumlashgan konsepsiyasi san’atshunoslik fani rivojiga katta hissa qo‘shdi. 1966 yildan diqqatga sazovor joylar va yodgorliklarni saqlash Xalqaro Kengashi a’zosi bo‘ldi. (International Council of Monuments and Sites. I CJMJS). G.A. Pugachenkova – Strasburg Universiteti faxriy doktori, Germaniya Arxeologiya instituti muxbir a’zosi, O‘rta va Uzoq Sharq Italiya instituti muxbir a’zosi, O‘zbekistonda xizmat ko‘rsatgan fan arbobi, “Akademik palma” fransuz ordeni kavaleri, Hamza va Beruniy nomidagi davlat mukofotining ikki karra laureati. 1994 y. G.A. Pugachenkova Arxeologiya instituti yetakchi ilmiy xodimi bo‘lib ishladi. Olimaning Sharq xalqlari me’morchilik tarixi, tasviriy va amaliy san’ati tarixi va arxeologiyasiga bag‘ishlangan 600 dan ortiq ilmiy ishlari nashr etilgan.",
        ru: "(1915-2007 гг.). Доктор искусствознания, профессор, академик АН Республики Узбекистан (1984 г.), искусствовед, историк. Защитила кандидатскую диссертацию на тему: \"Архитектура Средней Азии эпохи Навои\". С 1960 г. возглавляла сектор истории искусств и архитектуры в Институте искусствознания, где ею была создана и плодотворно работала Узбекистанская искусствоведческая экспедиция, которая обогатила науку выдающимися открытиями на городищах Халчаян, Дальверзинтепа и др. Ее идеи и выводы об искусстве кушан широко вошли в отечественную и мировую науку. Обобщающие концепции историко-культурных процессов оказали значительное влияние на развитие искусствоведческой науки. С 1966 г. - член Международного Совета по охране памятников и достопримечательных мест (International Council of Monuments and Sites. I CJMJS). Г.А. Пугаченкова - Почетный доктор Страсбургского Университета, член-корреспондент Германского археологического института и Итальянского института Среднего и Дальнего Востока, заслуженный деятель науки Республики Узбекистан, кавалер ордена французских \"Академи­чес­ких пальм\", дважды лауреат Государственных премий (Хамзы и Беруни). С 1994 г. Г.А. Пугаченкова работала ведущим научным сотрудником Института археологии. Перу ученого принадлежит более 600 научных трудов, посвященных истории архитектуры, археологии, изобразительному и прикладному искусству народов Востока. Г.А. Пугаченкова имела многочисленные правительственные награды.",
        en: "(1915-2007). Doctor of Art History, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan (1984), art critic, historian. She defended her Ph.D. thesis on the topic: \"Architecture of Central Asia of the Nawai epoch\". Since 1960, she headed the sector of the history of arts and architecture at the Institute of Art History, where she created and fruitfully worked the Uzbekistan Art Critic Expedition, which enriched science with outstanding discoveries at the settlements of Khalchayan, Dalverzintepe, etc. Her ideas and conclusions about the art of the Kushan were widely included in the national and world science. Generalizing concepts of historical and cultural processes have had a significant impact on the development of art history science. Since 1966 - Member of the International Council of Monuments and Sites. I CJMJS. G.A. Pugachenkova - Honorary Doctor of the University of Strasbourg, Corresponding Member of the German Archaeological Institute and the Italian Institute of the Middle and Far East, Honored Scientist of the Republic of Uzbekistan, Knight of the Order of the French \"Academic Palms\", twice laureate of State Prizes (Hamza and Beruni). Since 1994 G.A. Pugachenkova worked as a leading researcher at the Institute of Archeology. The scientist's Peru owns more than 600 scientific works devoted to the history of architecture, archeology, visual and applied arts of the peoples of the East. G.A. Pugachenkova had numerous government awards",
      }
    },
    {
      img: cardsDataImg3,
      Name: {
        uz: 'Asqarov Ahmadali',
        ru: 'Аскаров Ахмадали',
        en: 'Askarov Akhmadali',
      },
      text: {
        uz: "1935 yilda tug‘ilgan. Tarix fanlari doktori, professor, O‘zR FA akademigi (1987 y.) tarixchi, arxeolog. 1966 yildan O‘zR FA Tarix va arxeologiya instituti ilmiy xodimi, ilmiy ishlar bo‘yicha direktor o‘rinbosari bo‘lib ishladi. Shundan so‘ng 1970-1980 va 1983-1987 yillarda yangi tashkil etilgan Arxeologiya institutida direktor lavozimida ishladi. “Zarafshon quyi oqimi havzasi bronza davrida” mavzusidagi nomzodlik ishini, 1977 yilda esa Moskvada “Janubiy O‘zbekiston bronza davri madaniyati (qadimgi sharq tamaddunining mintaqaviy o‘choqlari rivoji muammolari)” mavzusida doktorlik dissertatsiyasini himoya qildi. 1984-1998 yy. O‘zR FA Prezidiumi Ijtimoiy-gumanitar fanlar bo‘limi raisi, 1991-1995 yy O‘zR FA tarix instituti direktori bo‘lib ishladi. Akademik A. Asqarovning ilmiy qiziqishlari ko‘lami juda keng: O‘rta Osiyo bronza va ilk temir davri ilk dehqonchilik va chorvachilik xo‘jaliklarining shakllanishi tarixi, O‘zbekiston xududida davlatchilik va shaharsozlikning paydo bo‘lishi, o‘zbek halqining etnogenezi va etnik tarixi, zardushtiylikning vujudga kelish manbalari va shakllanishi, arxeologik manbalar asosida milliy kurash sporti tarixini tiklash va b. U Old Osiyo tipidagi ilk dehqonchilik manzilgohlaridan bo‘lgan Sopolli madaniyatini va noyob Jarqo‘ton ibodatxonasini ochish sharafiga muyassar bo‘ldi. A. Asqarov – 450 dan ortiq ilmiy nashrlar muallifi. Ulardan 50 ga yaqini chet tillarda nashr etilgan, 16 monografiya, 1 darslik va 8 uslubiy qo‘llanma nashr etilgan. Beruniy nomidagi davlat mukofoti laureati (1985 y), O‘zbekistonda xizmat ko‘rsatgan fan arbobi (1995 y).",
        ru: "1935 г.р. Доктор исторических наук, профессор, академик АН РУз. (1987) Историк, археолог. Работал в Институте истории и археологии АН РУз, научным сотрудником, заместителем директора по научной работе (1966 г.). Затем директором Института археологии (1970-1980 гг. и 1983-1987 гг.). Защитил кандидатскую диссертацию по теме \"Низовья Зарафшана в эпоху бронзы\", а в 1977 г в Москве - докторскую диссертацию по теме \"Бронзовый век Южного Узбекистана (к проблеме развития локальных очагов древневосточных цивилизаций)\". Являлся председателем Отделения общественно-гуманитарных наук Президиума АН РУз (1984-1998 гг.) и одновременно директором Института истории АН РУз. (1991-1995 гг.). Диапазон научных интересов академика А. Аскарова необычайно широк: история сложения древнеземледельческих и скотоводческих культур эпохи бронзы и раннего железа Средней Азии, формирование ранней городской культуры и ранней государственности на территории Узбекистана, этногенез и этническая история узбекского народа, истоки и формирование зороастризма, история национального вида спорта кураш на основе археологических данных и т.д. Ему принадлежит честь открытия древнеземледельческого очага переднеазиатского типа и выделение своеобразной (протогородской) сапаллинской культуры, открытие уникального храма на городище Джаркутан. А. Аскаров - автор свыше 450 научных работ, из них более 50 на иностранных языках, 16 монографий, 1 учебника и 8 учебно-методических пособий. Лауреат Государственно премии им. Абу Райхана Беруни (1985 г.), Заслуженный деятель науки Республики Узбекистан (1995 г.).",
        en: "born in 1935 Doctor of Historical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan (1987) Historian, archaeologist. He worked at the Institute of History and Archeology of the Academy of Sciences of the Republic of Uzbekistan, a researcher, deputy director for scientific work (1966). Then director of the Institute of Archeology (1970-1980 and 1983-1987). He defended his Ph.D. thesis on the topic \"Lower Zarafshan in the Bronze Age\", and in 1977 in Moscow - his doctoral thesis on \"The Bronze Age of Southern Uzbekistan (to the problem of the development of local foci of ancient Eastern civilizations)\". He was the chairman of the Department of Social and Humanitarian Sciences of the Presidium of the Academy of Sciences of the Republic of Uzbekistan (1984-1998) and at the same time director of the Institute of History of the Academy of Sciences of the Republic of Uzbekistan. (1991-1995). The range of scientific interests of Academician A. Askarov is unusually wide: the history of the formation of ancient agricultural and pastoral cultures of the Bronze Age and early Iron Age in Central Asia, the formation of early urban culture and early statehood on the territory of Uzbekistan, ethnogenesis and ethnic history of the Uzbek people, the origins and formation of Zoroastrianism, the history of the national species kurash sports based on archaeological data, etc. He owns the honor of discovering an ancient agricultural center of the Near-Asian type and the identification of a peculiar (proto-city) Sapalli culture, the opening of a unique temple at the settlement of Zharkutan. A. Askarov is the author of over 450 scientific works, of which more than 50 are in foreign languages, 16 monographs, 1 textbook and 8 teaching aids. Laureate of the State Prize. Abu Raikhan Beruni (1985), Honored Scientist of the Republic of Uzbekistan (1995).",
      }
    },
    {
      img: cardsDataImg4,
      Name: {
        uz: 'Muxamadjanov Abdulahad  Raximjonovich',
        ru: 'Мухамеджанов Абдулахад Рахимджанович',
        en: 'Muxamadjanov Abdulahad Raximjonovich',
      },
      text: {
        uz: "(1931-2016 yy.) tarix fanlari doktori, professor, O‘zR FA akademigi, sharqshunos, arxeolog. 1956 yildan O‘zR FA Tarix va arxeologiya instituti ilmiy xodimi. 1980-1983 yy. O‘zR FA Arxeologiya instituti direktori. 1973 y. “Zarafshon vohasi sug‘orilishi tarixi (qadimgi davrlardan XX asr boshlariga qadar)” mavzusidagi doktorlik ishini himoya qildi. A.R. Muhamadjonovning ilmiy qiziqishlari doirasiga O‘zbekiston qadimgi va o‘rta asrlar davri sug‘orilishi tarixi hamda Buxoro vohasi arxeologiyasi kiradi. A.R. Muhamadjonov 540 dan ortiq ilmiy va ilmiy ommabop nashrlar chop ettirgan. Ular orasida maktab darsliklari, o‘quv-uslubiy qo‘llanmalar, OTM o‘quv qo‘llanmalari alohida o‘rin tutadi. Olimning Buxoro shahri va vohasi hududlaridagi yodgorliklarda olib borgan arxeologik tadqiqotlari fan rivoji uchun katta hissa qo‘shdi. Ushbu tadqiqotlar asosida mintaqaning yirik shaharsozlik markazi aniqlanib, Buxoro shahrining 2500 yillik yubileyi o‘tkazildi. A.R. Muhamadjanov O‘rta Osiyoda sug‘orma dehqonchilikning shakllanishi hamda Zarafshon va Buxoro vohalari sug‘orilishi tarixiga doir fundamental asarlar yozdi. A.R. Muxamadjonov Zarafshon vohasi suv resurslari muammolari, sug‘orma dehqonchilikning vujudga kelishi omillari, antik va o‘rta asrlardagi irrigatsiya, gidrotexnika rivoji muammolarini o‘rganib chiqdi.",
        ru: "(1931-2016 гг.) Доктор исторических наук, профессор, академик АН РУз, востоковед, археолог. С 1956 г. работал научным сотрудником Института истории и археологии АН РУз. В 1980-1983 гг. директор Института археологии АН Узбекистана. В 1973 г. защитил докторскую диссертацию по теме: \"История орошения низовьев Заравшана (с древнейших времен до начала ХХ в.)\". Областью научных интересов А.Р. Мухамеджанова является история древней и средневековой ирригации Узбекистана, а также археология Бухарского оазиса. А.Р. Мухамеджанов автор более 540 научных и научно-популярных работ, учебников и учебных пособий для школ и ВУЗов Республики. Значительным вкладом исследователя является проведение широких археологических работ на территории г. Бухары, городских и сельских поселениях оазиса. На их основе выявлены истоки, динамика и культура крупнейших городских центров региона, проведен 2500-летний юбилей г. Бухары. А.Р. Мухамеджановым выполнен ряд фундаментальных работ по проблемам истории возникновения и развития орошаемого земледелия в Средней Азии и, в частности, выявлены истоки древнего орошения низовий Зарафшана и Бухарского оазиса. А.Р. Мухамеджановым разработаны вопросы водных ресурсов Зарафшанской долины, освещены вопросы возникновения орошаемого земледелия, динамика развития ирригации и гидротехника в эпохи античности и средневековья.",
        en: "1931-2016), Doctor of Historical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan, orientalist, archaeologist. Since 1956 he worked as a researcher at the Institute of History and Archeology of the Academy of Sciences of the Republic of Uzbekistan. 1980-1983 Director of the Institute of Archeology of the Academy of Sciences of Uzbekistan. In 1973 he defended his doctoral dissertation on the topic: \"The history of irrigation in the lower reaches of the Zarafshan (from ancient times to the beginning of the twentieth century).\" The area of ​​scientific interests of A.R. Mukhamedzhanov is the history of ancient and medieval irrigation of Uzbekistan, as well as the archeology of the Bukhara oasis. A.R. Mukhamedzhanov is the author of more than 540 scientific and popular scientific works, textbooks and teaching aids for schools and universities of the Republic. A significant contribution of the researcher is the conduct of extensive archaeological work on the territory of Bukhara, urban and rural settlements of the oasis. On their basis, the origins, dynamics and culture of the largest urban centers of the region were revealed, the 2500th anniversary of the city of Bukhara was held. A.R. Mukhamedzhanov carried out a number of fundamental works on the history of the emergence and development of irrigated agriculture in Central Asia and, in particular, identified the origins of the ancient irrigation of the lower reaches of the Zarafshan and Bukhara oasis. A.R. Mukhamedzhanov developed the issues of water resources of the Zarafshan Valley, highlighted the issues of the emergence of irrigated agriculture, the dynamics of the development of irrigation and hydraulic engineering in the era of antiquity and the Middle Ages.",
      }
    },
    {
      img: cardsDataImg5,
      Name: {
        uz: 'Islomov O‘tkir Islomovich',
        ru: 'Исламов Уткур Исламович',
        en: 'Islomov O‘tkir Islomovich',
      },
      text: {
        uz: "(1932-2013 yy.) tarix fanlari doktori, professor, O‘zR FA akademigi (2000 y.). 1963 y. “Quyi Zarafshon neolit madaniyati” mavzusida nomzodlik ishini himoya qildi. 1963 yildan O‘zR FA tarix va arxeologiya instituti ilmiy xodimi. 1970 yilda Arxeologiya instituti tashkil etilish munosabati bilan dastlab “Antik davr arxeologiyasi” bo‘limini, so‘ngra “Tosh va bronza davri” bo‘limini boshqaradi. Zarafshon quyi oqimida qazuv ishlari bilan bir vaqtda O‘.I. Islomov Farg‘ona, Toshkent, Surxondaryo viloyatlaridagi mezolit davri yodgorliklarini o‘rganish bilan ham shug‘ullandi. Ushbu mezolit davri yodgorlikdarini o‘rganish ishlari natijasida O‘zbekiston qadimgi davr tarixining uzilib qolgan qismi to‘ldirildi. Obishir I, V, Machay kabi mezolit davri g‘or manzilgohlarini tizimli o‘rganish natijasida ular mezolit davri aholisi madaniyatining noyob namunasi ekanligi ma’lum bo‘ldi. Olingan ko‘plab materiallarni chuqur o‘rganish, tosh sanoati mintaqaviy xususiyatlarini tasniflash ishlari O‘. Islomovga ushbu manzilgohlar madaniyat ekanligini isbotlashga imkon berdi. Ko‘p yillik tadqiqotlar asosida “O‘rta Osiyo mezoliti” mavzusidagi doktorlik ishini muvaffaqiyatli himoya qildi (1977 y.). O‘zbekiston-Rossiya qo‘shma arxeologik ekspeditsiyasi rahbari bo‘lib, ushbu ekspeditsiya tomonidan Toshkent viloyatidagi Obi-Rahmat g‘oridan bundan 50 ming yil ilgari yashagan neandertal va zamonaviy qiyofadagi tiplar oralig‘idagi inson tipining bosh chanog‘i qoldiqlarini topib o‘rganildi. Selung‘ur manzilgohining quyi qatlamlaridan topilgan bundan qariyb 1 mln yil ilgari yashagan arxantrop qoldiqlarining topilishi juda katta ilmiy yangilik sifatida e’tirof etildi. Akademik O‘.I. Islomov 160 dan ortiq ilmiy nashrlar muallifidir, va ilmiy–ommabop nashrlar muallifidir. Beruniy nomidagi davlat mukofoti laureati (1985 y).",
        ru: "(1932-2013 гг.) Доктор исторических наук, профессор, академик АН РУз (2000 г.). В 1963 г. защитил кандидатскую диссертацию на тему \"Неолитическая культура в низовьях Зарафшана\". С 1963 г. работал научным сотрудником Института истории и археологии АН Узбекистана. С созданием Института археологии в 1970 г., он становится заведующим отделом \"Античной археологии\", а затем заведующим отделом \"Эпохи камня и бронзы\". С этого времени Уткур Исламович и его соратники активно создают научную \"школу самаркандской археологии\". Наряду с раскопками в низовьях Зарафшана, У.И. Исламов активно занимается изучением памятников эпохи мезолита (XII-VIII вв. до н.э.) на территории Ферганской, Ташкентской и Сурхандарьинской областей и не известных ранее. Результаты изучения археологических памятников эпохи мезолита впервые позволили заполнить обширную хронологическую лакуну в древнейшей истории Узбекистана. Систематические раскопки пещерных мезолитических памятников Обишир I, V, Мачай показали, что они являются уникальными объектами древнейшей истории, дав обильную и разнообразную информацию для детальной реконструкции хозяйства и быта обитателей эпохи мезолита. Им впервые была поставлена и решена задача этнокультурного развития и культурных связей населения Узбекистана в мезолитическую эпоху с племенами ряда историко-культурных областей Древнего Востока. Наиболее важным открытием в исследовании эпохи мезолита Узбекистана являются данные, свидетельствующие о производящем характере хозяйства мезолитических племен. Глубокий анализ обильного материала, детальная типологическая классификация каменной индустрии и ряда локальных особенностей, характерных для мезолитических памятников Узбекистана, позволили У.И. Исламову выделить обиширскую и мачайскую культуры. Многолетние исследовательские работы завершились защитой докторской диссертации по теме: \"Мезолит Средней Азии\" (1977 г.). В гроте Оби-Рахмат (Ташкентская область), в ходе работ совместной Узбекско-Российской экспедиции, обнаружены останки древнего человека, жившего 50 тыс. лет назад, сочетающего в себе смешанные характеристики неандертальца и человека современного типа, что до последнего времени считалось маловероятным. Сенсационными стали находки костных останков архантропа в культурных отложениях стоянки Сельунгур, нижние слои которой датируются временем более 1 млн. лет. Академик У.И. Исламов автор более 160 научных трудов, в том числе нескольких фундаментальных монографий.",
        en: "(1932-2013),  Doctor of Historical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan (2000). In 1963 he defended his Ph.D. thesis on the topic \"Neolithic culture in the lower reaches of Zarafshan\". Since 1963 he worked as a researcher at the Institute of History and Archeology of the Academy of Sciences of Uzbekistan. With the establishment of the Institute of Archeology in 1970, he became the head of the Department of Ancient Archeology, and then the head of the Department of the Age of Stone and Bronze. Since that time, Utkur Islamovich and his associates have been actively creating a scientific \"school of Samarkand archeology\". Along with excavations in the lower reaches of Zarafshan, U.I. Islamov is actively studying the monuments of the Mesolithic era (XII-VIII centuries BC) in the Fergana, Tashkent and Surkhandarya regions and previously unknown. The results of the study of archaeological sites of the Mesolithic era made it possible for the first time to fill in an extensive chronological gap in the ancient history of Uzbekistan. Systematic excavations of the Mesolithic cave monuments Obishir I, V, Machai have shown that they are unique objects of ancient history, giving abundant and varied information for a detailed reconstruction of the economy and life of the inhabitants of the Mesolithic era. He was the first to pose and solve the problem of ethnocultural development and cultural ties of the population of Uzbekistan in the Mesolithic era with the tribes of a number of historical and cultural regions of the Ancient East. The most important discovery in the study of the Mesolithic era of Uzbekistan is the evidence of the productive nature of the economy of the Mesolithic tribes. A deep analysis of the abundant material, a detailed typological classification of the stone industry and a number of local features characteristic of the Mesolithic monuments of Uzbekistan allowed U.I. Islamov to highlight the Obishir and Machay cultures. Long-term research work ended with the defense of a doctoral dissertation on the topic: \"Mesolithic of Central Asia\" (1977). In the Obi-Rakhmat cave (Tashkent region), during the work of the joint Uzbek-Russian expedition, the remains of an ancient man who lived 50 thousand years ago, combining the mixed characteristics of a Neanderthal and a modern man, were discovered, which until recently was considered unlikely. The finds of the bone remain of the Archanthropus in the cultural deposits of the Selungur site, the lower layers of which date back more than 1 million years, became sensational. Academician U. I. Islamov is the author of over 160 scientific works, including several fundamental monographs.",
      }
    },
    {
      img: cardsDataImg6,
      Name: {
        uz: 'Buryakov Yuriy Fedorovich',
        ru: 'Буряков Юрий Федорович',
        en: 'Buryakov Yuri Fedorovich',
      },
      text: {
        uz: "(1934-2015 yy.). tarix fanlari doktori, professor, O‘zR FA akademigi (1995 y.) tarixchi, arxeolog. Asosiy ilmiy yo‘nalishi: tog‘ ishi va metallurgiya tarixi muammolari, O‘rta Osiyo,Toshkent va Sug‘d vohasi axoli manzilgohlari topografiyasi va urbanizatsiyasi. Yu.F. Buryakovning asosiy faoliyati tarixiy yodgorliklarni ro‘yxatga olish va saqlab qolish ishlari bilan bog‘liq bo‘ldi. Bu ishlarni u Tarix va arxeologiya institutida 1967-1970 yillarda katta ilmiy xodim, 1970-1973 yillarda O‘zR FA arxeologiya institutida ilmiy kotib, 1979 yillarda ilmiy ishlar bo‘yicha direktor o‘rinbosari bo‘lib ishlab yurgan vaqtlarda amalga oshirdi. Yu.F. Buryakov dastlab Choch-Iloq, so‘ngra Choch-Ustrushona kabi yirik arxeologik ekspeditsiyalarga rahbarlik qildi. Arxeologiya institutida uzoq yillar mobaynida YUNЕSKO tomonidan tashkil etilgan “Buyuk Ipak yo‘li-xalqlarning aloqa yo‘li” dasturida faol ishladi. Yu.F. Buryakov 550 dan ortiq ilmiy",
        ru: "(1934-2015 гг.). Доктор исторических наук, профессор, академик АН РУз. (1995) г., историк, археолог. Основные научные направления: проблемы истории горного дела и металлургии, исторической топографии населенных пунктов и урбанизации Ташкентского региона, Согда и Средней Азии в целом, история шахмат. Важный аспект деятельности Ю.Ф. Бурякова связан с выявлением и сохранением археологических памятников. Эта работа продолжалась в Институте истории и археологии где он трудился в должности старшего научного сотрудника (1967-1970 гг.) и в Институте археологии АН РУз (1970-1973 гг. - ученый секретарь, 1973-1979 гг. - зав. отделом работ на новостройках, с 1979 г. - заместитель директора по науке). Ю.Ф. Буряков руководит крупной Чач-Илакской, позднее - Чач-Уструшанской археологической экспедицией. Долгое время в Институте археологии возглавлял программу ЮНЕСКО \"Великий шелковый путь - путь диалога народов\", принимая непосредственное участие во всех мероприятиях, проводимых как под эгидой международных организаций, так и в Узбекистане. Автор более 550 научных и научно-популярных работ, в том числе более 10 монографий.  Лауреат Государственной премии им. Беруни (1985 г.).",
        en: "(1934-2015). Doctor of Historical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan. (1995), historian, archaeologist. The main scientific directions: problems of the history of mining and metallurgy, the historical topography of settlements and urbanization of the Tashkent region, Sogd and Central Asia in general, the history of chess. An important aspect of Yu.F. Buryakov is associated with the identification and preservation of archaeological sites. This work continued at the Institute of History and Archeology, where he worked as a senior researcher (1967-1970) and at the Institute of Archeology of the Academy of Sciences of the Republic of Uzbekistan (1970-1973 - scientific secretary, 1973-1979 - head of the department of work on new buildings, since 1979 - deputy director for science). Yu.F. Buryakov leads a large Chach-Ilak, later - Chach-Ustrushana archaeological expedition. For a long time at the Institute of Archeology, he headed the UNESCO program \"The Great Silk Road - the path of dialogue between peoples\", taking direct part in all events held both under the auspices of international organizations and in Uzbekistan. Author of over 550 scientific and popular scientific works, including over 10 monographs. Laureate of the State Prize, Beruni (1985).",
      }
    },
  ];

  return (
    <main className="academics-of-the-center-page__main">


      <Category data={menuData} />


      <section className='academics-of-the-center-page__main__section'>
        <ul>
          {cardsData.map((item, index) => (
            <li key={index} className="academics-of-the-center-page__main__card">
              <div className="academics-of-the-center-page__main__section__content-wrapper">
                <p className="academics-of-the-center-page__main__section__content">
                  <img
                    className="academics-of-the-center-page__main__section__image"
                    src={item.img}
                    alt="Milliy Arxeologiya markazi"
                  />

                  <span className="academics-of-the-center-page__main__section__text">
                    <span className="academics-of-the-center-page__main__section__text__name">
                      {`${item.Name[language]} `}
                    </span>
                    {item.text[language]}
                  </span>
                
                </p>
              </div>



              {/* {(index + 1 === cardsData.length) ? null : ( */}
                <div className="academics-of-the-center-page__main__section__custom-hr">
                 <hr />
                </div>
              {/* )} */}

            </li>

          ))}
        </ul>
      </section>

      
    </main>
  );
}
