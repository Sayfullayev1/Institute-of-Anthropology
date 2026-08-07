import React, { useContext } from 'react';
import styles from './section.module.scss';
import { LanguageContext } from '@/context/LanguageContext';


import ImagesCard from '@/pages/activityPages/theMostImportantResearchResultsPage/items/imagesCard/ImagesCard';


import list1Image1 from '@/public/images/TheMostImportantResearchResultsPageImages/image.png';  
import list1Image2 from '@/public/images/TheMostImportantResearchResultsPageImages/image copy.png';  
import list4Image1 from '@/public/images/TheMostImportantResearchResultsPageImages/image copy 2.png'; 

export default function Section() {
  const { language } = useContext(LanguageContext);

  const data = [
    {
      title: {
        uz: "O‘zbekistonning tosh davri madaniyati",
        ru: "Культура каменного века Узбекистана",
        en: "Stone Age Culture of Uzbekistan",
      },
      text: [
        {
          uz: "Markaziy Osiyo jumladan, O‘zbekistonning qadimgi xalqlari tarixiga oid yangi arxeologik va paleoantropologik materiallar qo‘lga kiritildi.",
          ru: "Получены новые археологические и палеоантропологические материалы, раскрывающие древнейшую историю народов Узбекистана и Центральной Азии в целом.",
          en: "New archaeological and paleoanthropological materials have been obtained that reveal the ancient history of the peoples of Uzbekistan and Central Asia as a whole.",
        },
        {
          uz: "Fergantrop odami qoldiqlarining topilishi va tadqiq etilishi natijasida Markaziy Osiyoning odamzod tomonidan o‘zlashtirilishi tarixi 1,5 million yilga qadimiylashdi. Obi-rahmat odami qoldiqlarining topilishi natijasida O‘zbekiston hozirgi vaqtda ilk zamonaviy odamlar (Homo sapienes sapienes) shakllangan hudud sifatida e’tirof etilmoqda. Obi-rahmat g‘orida olib borilgan tadqiqotlar madaniy qatlamlarning aniq ketma-ketligini qayd etdi. Bu yerda aniqlangan gominid qoldiqlari O‘zbekiston hududida neandertallarning Homo sapiens tomon evolutsiyasini kuzatishda muhim topilma bo‘lib xizmat qiladi.",
          ru: "С открытием и исследованием ферганотропов история заселения Центральной Азии была удревнена на 1,5 млн. лет...",
          en: "With the discovery and study of Fergantrop the history of settlement in Central Asia was dated back to 1.5 million years. The discovery of the Obirakhmat man leads Uzbekistan to the only known territory in the world of the formation of early modern humans (Homo sapienes sapienes). Unique studies of the Obirahmat grotto revealed a clear sequence of culture-bearing horizons. The hominid remains found here are unique for such finds on the territory of Uzbekistan, shedding light on the evolution of ancient man from Neanderthal to Homo sapiens.",
        },
        {
          uz: <ImagesCard imagesData={[list1Image1, list1Image2]}/>,
          ru: <ImagesCard imagesData={[list1Image1, list1Image2]}/>,
          en: <ImagesCard imagesData={[list1Image1, list1Image2]}/>,
        },
        {
          uz: "Ko‘lbuloq, Qutirbuloq, Zirabuloq paleolit manzilgohlarini o‘rganilishi jarayonida zamonaviy usullar yordamida topilmalarning aniq texnik-tipologik klassifikatsiyasi ishlab chiqildi, toshga ishlov berishning texnologik va tipologik indekslari qayd etildi. Tosh qurollarning yangi turlari aniqlandi. Ilk marotaba O‘zbekiston paleolitshunosligida xom ashyoning toshga ishlov berish texnikasi rivojidagi o‘rni aniqlandi. Farg‘ona vodiysi, Qizilqum va Zarafshon vohasida so‘nggi paleolit davriga oid yangi yodgorliklarini aniqlanishi bu hududlarda qadimgi davr tarixidagi “oq dog‘larni” yo‘qolishiga olib keldi. Qizilqum neolit otryadi tomonidan amalga oshirilgan tadqiqotlar natijasida paleolit va neolit davriga oid yangi yodgorliklar aniqlandi. Xususan, Oyoqagetma neolit davri yodgorligida olib borilgan arxeologik tadqiqotlarda Kaltaminor madaniyatida yovvoyi hayvonlarni xonakilashtirilishi borasidagi yangi ma’lumotlar qo‘lga kiritildi. Bu esa Qizilqum neolit jamoalari nafaqat ovchilik va baliqchilik bilan shug‘ullanganliklarini, balkim chorvador ham bo‘lganliklarini ko‘rsatadi. Shu bilan birga Kaltaminor madaniyatini 3 ming yilga qadimiylashtiruvchi ma’lumotlar ham qo‘lga kiritildi.",
          ru: "В области изучения палеолитических стоянок Кульбулак, Кутурбулак, Зирабулак проведена четкая технико-типологическая классификация технокомплексов...",
          en: "In the study of Paleolithic sites in Kulbulak, Kuturbulak, Zirabulak clearly techno-typological classification of technocomplexes on the basis of modern techniques created by type-lists the considered industries and identified significant technological and typological indices. A number of new types of stone products have been identified. For the first time in the paleolithic studies of Uzbekistan, the role of raw materials in the development of stone processing techniques is determined. New Late Paleolithic monuments have been discovered and explored in the Ferghana Valley, Kyzylkum and Zarafshan valley, eliminating the \"white spots\" in the ancient history of these territories. An important result of the work of the Kyzylkum Neolithic group is the discovery of new Paleolithic and Neolithic monuments. The archaeological work carried out at the Neolithic site of Ayakagitma presented materials on the domestication of wild animals in the Kelteminarian culture. The latter suggests that the Neolithic tribes of the Kyzylkum were not only hunters and fishermen, but also skilled pastoralists. There are also data that extend the age of the Kelteminar culture by 3 thousand years.",
        },
      ],
    },
    {
      title: {
        uz: "Ilk metall va antik davri (mil avv. III ming y. – milodiy I ming y.)",
        ru: "Эпоха раннего металла и античности (III тыс. до н.э. - I тыс. н.э.)",
        en: "The era of early metal and antiquity (III thousand BC - I thousand AD)",
      },
      text: [
        {
          uz: "Dehqonchilik, hunarmandchilik va madaniyatning rivojlanishi hamda ilk shahar va davlat birlashmalarining paydo bo‘lishi asosida Turon sivilizatsiyasining eneolit-ilk temir davrida shakllanishi va yuksalishi jarayonlari o‘rganildi.",
          ru: "Изучены процессы становления и развития цивилизации Турана в эпоху энеолита - раннего железа, в свете развития земледелия, ремесла, культуры, а также появления ранних городов и первых государственных образований.",
          en: "The processes of formation and development of the Turanian civilization in the Eneolithic - Early Iron Age, in the light of the development of agriculture, crafts, culture, as well as the appearance of early cities and the first state formations, are studied.",
        },
        {
          uz: "Bronza davrining ilk bosqichlari borasidagi asosiy materiallar O‘zbekiston janubida – Jarqo‘ton, Bo‘ston yodgorliklaridan olindi. Xususan, Jarqo‘ton protoshahar va ilk davlat birlashmalarinining paydo bo‘lishi va rivojlanishini o‘zida aks ettiruvchi yodgorlik hisoblanadi.",
          ru: "Для ранних периодов эпохи бронзы основные материалы получены из памятников юга Узбекистана – Джаркутан, группы памятников Бустан. Джаркутан представляет собой пример зарождения и развития протогорода и первых государственных образований со всеми атрибутами раннегородской культуры.",
          en: "For the early periods of the Bronze Age, the main materials were obtained from the monuments of the south of Uzbekistan-Jarkutan, Bustan group of monuments. Jarkutan is an example of the origin and development of proto-cities and the first state formations with all the attributes of early urban culture.",
        },
        {
          uz: "Samarqand Sug‘dida, Chelak shahri yaqinidagi Ko‘ktepa yodgorligida zardo‘shtiylik ibodatxonasi, saroy va mudofaa tizimlarining qisman ochilishi qadimgi shaharning ichki tuzilishi borasidagi malumotlarni qo‘lga kiritish imkonini berdi. Afrosiyob yodgorligida olib borilgan qazishmalar jarayonida esa shaharning tarixini 2750 yilga qadimiylashtiruvchi ma’lumotlar qo‘lga kiritildi va bu sana halqaro miqyosda nishonlandi.",
          ru: "В Самаркандском Согде, на городище Коктепа близ г. Челек, впервые получена наиболее полная информация о внутренней структуре древнего города, где вскрыты части зороастрийского храма, дворец и система фортификации. На городище Афрасиаб получены новые археологические материалы, позволившие удревнить возраст Самарканда до 2750 лет.",
          en: "For the first time, the most complete information about the internal structure of the ancient city, where parts of the Zoroastrian temple, the palace and the fortification system were uncovered, was obtained in the Koktepe settlement near Chelek, Samarkand. New archaeological materials have been obtained at the Afrasiab settlement, which allowed us to increase the age of Samarkand to 2750 years.",
        },
        {
          uz: "Janubiy Sug‘dda aniqlangan yangi arxeologik materiallar asosida Qarshi va Shahrisabz shaharlari yoshi 2700 yilga teng ekanligi aniqlandi va halqaro miqyosda nishonlandi.",
          ru: "В Южном Согде по новым археологическим материалам возраст городов Карши и Шахрисабза установлен 2700 лет.",
          en: "In Southern Sughd, according to new archaeological materials, the age of the cities of Karshi and Shakhrisabz is set at 2700 years.",
        },
        {
          uz: "Arxeologik qazishmalar Eski Termizdagi buddaviylik markazi Qoratepada ham davom ettirildi. Malum bo‘lishicha, Termita-Termiz Kushonlar davrida O‘rta Osiyoda buddaviylikning yirik markazi bo‘lgan. Bu yerdan topilgan badiiy madaniyat va yozuv namunalari Baqtriya buddaviylik madaniyatini o‘ziga xos xususiyatga ega ekanligini ko‘rsatdi.",
          ru: "Археологические раскопки продолжались и в буддийском центре Каратепа в Старом Термезе (2500 лет). Термита-Термез являлся крупным центром буддизма  Средней Азии в эпоху Кушан. Найденные здесь предметы художественной культуры указывают на самобытность буддийской культуры Бактрии.",
          en: "Archaeological excavations continued at the Karatepe Buddhist center in Old Termez (2500 years old). Termita-Termez was a major center of Central Asian Buddhism during the Kushan era. The objects of artistic culture found here indicate the identity of the Buddhist culture of Bactria.",
        },
        {
          uz: "O‘zbekistonning qadimgi to‘qimachilik tarixiga doir yangi malumotlar qo‘lga kiritildi. Farg‘ona vodiysidagi Munchoqtepadan topilgan ipak qoldiqlari bu yerda ipak ishlab chiqarish eramiz boshlariga to‘g‘ri kelishini, III-IV asrlarda esa ipakchilik markazi sifatida shakllanganligini ko‘rsatmoqda.",
          ru: "Получены новые данные по истории ткачества в Узбекистане. Образцы шелка из Ферганской долины свидетельствуют об освоении его производства здесь с начала нашей эры, а его формирования как центра шелкоткачества может относиться к III-IV вв.",
          en: "New data on the history of weaving in Uzbekistan have been obtained. Samples of silk from the Ferghana Valley indicate the development of its production here since the beginning of our era, and its formation as a center of silk weaving can relate to the III-IV centuries.",
        },
        {
          uz: "Mingtepa yodgorligida (Andijon viloyati) olib borilgan tadqiqotlar esa bu yerda ilk temir davriga oid madaniy qatlamlar mavjudligini ko‘rsatmoqda. Shu bilan birga bu yerda 150-160 ga maydonni o‘rab olgan tashqi mudofaa devori qoldiqlari ham aniqlandi. Mudofaa devorlari to‘rtburchak ko‘rinishdagi shinaklar bilan ta’minlangan minoralar orqali mustahkamlangan. Qo‘lga kiritilgan materiallar asosida ichki shaharni burchaklaridagi minoralar ikki qavatli qilib qurilganligi asoslandi. Shu bilan birga bu yerda ilk bor antromorf va zoomorf elementlari tushirilgan qizil angob berilgan sopol idishlar qoldiqlari topildi. Ushbu ma’lumotlar Mingtepani poytaxt maqomiga ega shahar ekanligini (Xitoy manbalarida Ershi) ko‘rsatmoqda.",
          ru: "На городище Мингтепа (Андижанский вил.) выявлены ранние слои, относящие к эпохе раннежелезного века Центральной Азии. Выявлены остатки оборонительной стены внешнего города, охватывающей 150-160 га. площади. Вскрыты башни с прямоугольными бойницами.  Получило подтверждение о двухступенчатом возведении башен, по крайней мере угловых башен внутреннего городища. Также впервые обнаружены фрагменты красноангобированной керамики с антропоморфными и зооморфными орнаментами. Таким образом, полученные данные позволяют говорить о столичном статусе городища Мингтепа (Эрши по китайским источникам).",
          en: "On the hillfort of Mingtepe (Andijan fork.) The early layers belonging to the epoch of the Early Iron Age of Central Asia are revealed. The remains of the defensive wall of the outer city, covering 150-160 hectares, are revealed. squares. Towers with rectangular loopholes were opened. The two-stage construction of the towers, at least the corner towers of the inner settlement, was confirmed. Fragments of red-angled ceramics with anthropomorphic and zoomorphic ornaments were also discovered for the first time. Thus, the data obtained allow us to speak about the metropolitan status of the Mingtepe settlement (Ershi according to Chinese sources).",
        },
      ],
    },
    {
      title: {
        uz: "V- XIII asr boshlarida Markaziy va Shimoli-sharqiy O‘zbekistonning tarixiy topografiyasi",
        ru: "Историческая топография Центрального и Северо-восточного Узбекистана в V - нач. XIII вв.",
        en: "Historical topography of Central and North-Eastern Uzbekistan in the V-beginning of the XIII centuries.",
      },
      text: [
        {
          uz: "O‘zbekiston hududida keng miqyosda olib borilgan arxeologik tadqiqotlar ko‘plab qadimgi va o‘rta asrlarga oid shahar va qishloqlarni o‘rganilishiga imkon yaratdi. Jumladan, shaharlarning funksiyasi, ularning morfologiyasi va atrofdagi qishloqlar hamda dasht aholisi bilan aloqalari har tomonlama o‘rganildi. Natijada O‘zbekistonning barcha hududlarida V- XIII asr boshlariga oid shahar madaniyatining shakllanishi va rivojlanishi kuzatildi. Choch (Toshkent), Farg‘ona, Ustrushona, Sug‘d va Tohariston o‘rta asr shaharlarining tarixiy topografiyasi va rivojlanish bosqichlariga doir ma’lumotlar to‘ldirildi. O‘zbekistonning qadimgi me’morlarining shaharsozlik borasidagi yechimlari, qadimgi va o‘rta asr shaharlaridagi rivojlanish strukturasi an’anaviyligi aniqlandi. Bularning barchasi o‘rta asr shaharlarining ichki hayoti, hunarmandchilik, savdo-sotiq, ijtimoiy munosobatlar borasidagi umuman yangi ma’lumotlarni qo‘lga kiritish va shu orqali alohida hududlarning iqtisodiy rivojlanish jarayonlarini kuzatish imkonini berdi.",
          ru: "Широкомасштабные археологические исследования, развернувшиеся в Узбекистане, привели к изучению ряда древних и средневековых городов и поселений. Проводилось всесторонне обследование функций городов, их морфологии и связи, как с окружающей сельской округой, так и кочевой степью. В результате удалось проследить становление и развитие городской культуры во всех регионах Узбекистана с V - по нач. XIII в. Внесены существенные дополнения по исторической топографии и периодизации развития средневековых городов Чача (Ташкент), Ферганы, Уструшаны, Согда и Тохаристана. Определены особенности градостроительных решений древних зодчиков Узбекистана и преемственность развития структуры древнего и средневекового города. Это позволило получить совершенно новые дополнительные данные о внутренней жизни средневекового города, организации ремесла и торговли, социальных отношений и тем самым выявить уровень их экономического развития по отдельным регионам.",
          en: "Large-scale archaeological research in Uzbekistan has led to the study of a number of ancient and medieval cities and settlements. A comprehensive survey was conducted of the functions of cities, their morphology, and their connection with both the surrounding countryside and the nomadic steppe. As a result, it was possible to trace the formation and development of urban culture in all regions of Uzbekistan from the V - to the beginning of the XIII century. Significant additions have been made to the historical topography and periodization of the development of the medieval cities of Chacha (Tashkent), Ferghana, Ustrushana, Sogda and Tokharistan. The features of the urban planning decisions of the ancient architects of Uzbekistan and the continuity of the development of the structure of the ancient and medieval city are determined. This allowed us to obtain completely new additional data on the inner life of the medieval city, the organization of crafts and trade, social relations, and thus to reveal the level of their economic development in individual regions.",
        },
        {
          uz: "Kofirqalada olib borilgan arxeologik tadqiqotlar jarayonida Sug‘dning ilk o‘rta asrlar siyosiy tarixi, ma’muriy boshqaruvi, huquqiy amaliyoti va tashqi aloqalari borasida muhim tarixiy manba-ko‘p sonli bullalar qo‘lga kitildi. Bullalar- muhr izi yoki yozuv tushirilgan, silindr yoki aylana ko‘rinishda bo‘lib, loydan yasalgan. Bullalar orqali hujjatlari (shartnoma, xat, bildirishnomalar) huquqiy jihatdan tasdiqlangan yoki muhrlangan. Tovuslar ushlab turgan holatda taxtda o‘tirgan Budda (Amitabxi yoki Avalokiteshvar) tasviri, Rim xudosi Yanusga o‘xshash ikki yuzli xudo tasviri aks ettirilgan bullalar o‘ziga xos, o‘ta noyob hisoblanadi. Ayrim bullalardagi tasvirlarning ildizi ellin madaniyatiga borib taqalsa, ayrimlarida esa afsonaviy qahramonlar tasviri aks ettirilgan.",
          ru: "Широкомасштабные археологические исследования, развернувшиеся в Узбекистане, привели к изучению ряда древних и средневековых городов и поселений. Проводилось всесторонне обследование функций городов, их морфологии и связи, как с окружающей сельской округой, так и кочевой степью. В результате удалось проследить становление и развитие городской культуры во всех регионах Узбекистана с V - по нач. XIII в. Внесены существенные дополнения по исторической топографии и периодизации развития средневековых городов Чача (Ташкент), Ферганы, Уструшаны, Согда и Тохаристана. Определены особенности градостроительных решений древних зодчиков Узбекистана и преемственность развития структуры древнего и средневекового города. Это позволило получить совершенно новые дополнительные данные о внутренней жизни средневекового города, организации ремесла и торговли, социальных отношений и тем самым выявить уровень их экономического развития по отдельным регионам.",
          en: "During the archaeological excavations at Kafirkala, numerous bulls were discovered - the most valuable historical source for the study of the political history, administrative management, legal practice and external relations of the early medieval Sogd. Bullae are clay impressions of a cylindrical or rounded shape with imprints of seals applied to them. They, like modern sealing wax or seal, were the guarantor of safety, sealing or legally certifying the authenticity of a document (contract, letter, report). Most interesting is the bull with the image of the Buddha (Amitabha or more precisely his incarnation Avalokiteshvara) sitting on a throne, which is supported by figures of peacocks and an inscription on the sides of the deity. Unique is the bull with the image of a two-faced god under the arch, like the Roman god Janus. A number of images on the bulls clearly go back to Hellenistic traditions. Some of the stories contain mythological heroes’ episodes.",
        },
        {
          uz: "Iqtisodiy o‘sish talablari, madaniy rivojlanish va irrigatsiya tarmoqlarining xususiyatidan kelib chiqqan holda turli davrlarda aholi turar-joylarining paydo bo‘lishi, halqlarning ko‘chishi jarayoni bosqichlari kuzatildi. Shu bilan birga, Toshkentdagi Xarashkent, Buxoro vohasidagi Poykent va Markaziy Farg‘onaning yirik poytaxt shaharlarining inqirozi sabablari aniqlandi.",
          ru: "Удалось проследить территориальные перемещения народов и поселений на разных этапах истории, исходя из требований экономического роста и культурного развития, и характера ирригационной сети. Вместе с тем, выяснены причины исчезновения цветущих оазисов с городскими центрами Центральной Ферганы и отдельных городов Ташкента (Харашкет) и Бухары (Пайкенд).",
          en: "It was possible to trace the territorial movements of peoples and settlements at different stages of history, based on the requirements of economic growth and cultural development, and the nature of the irrigation network. At the same time, the reasons for the disappearance of flowering oases with urban centers of Central Ferghana and individual cities of Tashkent (Harashket) and Bukhara (Paykend) have been clarified.",
        },
        {
          uz: "Hozirgi Marg‘ilon shahri hududida olib borilgan qazishmalar natijasida 20 ga qamrab olgan qadimgi shahar o‘rni aniqlandi. Qo‘lga kiritilgan natijalar asosida YUNЕSKO homiyligida Marg‘ilon shahrining 2000 yilligi halqaro miqyosda nishonlandi.",
          ru: "Завершились раскопки на территории нынешнего г. Маргилана, где выявлен ранее неизвестный урбанизированный центр площадью более 20 га. Полученные результаты позволили провести празднование 2000-летия Маргилана под эгидой ЮНЕСКО.",
          en: "Excavations have been completed on the territory of the current city of Margilan, where a previously unknown urbanized center with an area of more than 20 hectares has been identified. The results obtained made it possible to celebrate the 2000th anniversary of Margilan under the auspices of UNESCO.",
        },
        {
          uz: "Shimoliy Farg‘ona hududida olib borilgan tadqiqotlar jarayonida qo‘lga kiritilgan arxeologik materiallar va yozma manbalar tahlili asosida qadimgi Farg‘onaning poytaxti -“Fargana” (“Yuan”) Eski Axsi (Axsiket) yodgorligi o‘rnida bo‘lgan degan xulosaga kelindi.",
          ru: " Анализ археологических материалов и сведений письменных источников дает возможность локализовать главную столицу древней Ферганы \"Фаргана\" (\"Юань\") на территории городища Эски Ахси (Ахсикет).",
          en: "The analysis of archaeological materials and information from written sources makes it possible to localize the main capital of ancient Ferghana \"Fargana\" (\"Yuan\") on the territory of the settlement of Eski Ahsi (Ahsiket).",
        },
        {
          uz: "Buxoro Sug‘dida joylashgan yirik yodgorliklaridan biri Poykentda arxeologik qazishmalar davom ettirilmoqda. Buyuk ipak yo‘lida joylashgan va sharqda Xitoy bilan savdo aloqalarini olib borgan, Qora dengizda dengiz faktoriyalariga egalik qilgan Poykent yozma manbalarda Bi knyazligi, “savdogarlar shahri” sifatida qayd etilgan. Arxeologik qazishmalar jarayonida arkda zardo‘shtiylik ibodatxonasi, jome masjidi va minorasi, hukmdor saroyi, xazina, qurol aslaha saqlanadigan joy va mudofaa devori bo‘ylab joylashgan kazarmalar qoldiqlari ochildi. Birinchi va ikkinchi shahristonda monumental fortifikatsiya tizimi, turar joylar majmuasi, temirchilar ustaxonalari, novvoyxonalar, tabiblar qabulxonalari joylashgan ko‘chalar hamda 4500 ga yaqin noyob Sug‘d mis tangalari qo‘lga kiritildi.",
          ru: "В Бухарском Согде продолжаются исследования на одном из крупнейших городских центров оазиса Пайкенд. Пайкенд также хорошо известен по  письменным источникам как отдельное княжество Би, «Город купцов» расположенный на трассе Великого Шёлкового пути и торговавший с Китаем на Востоке и владевший морскими факториями на Чёрном море. Археологическими исследованиями вскрыта цитадель с зороастрийским храмом огня, соборной мечетью и минаретом, дворцом правителя, казнохранилищем, военным арсеналом и расположенными вдоль стен казармами. На Шахристанах I-II выявлена монументальная фортификация, жилые кварталы, уличные артерии с лавками металлистов, керамистов, пекарей, приёмные табибов, а также уникальный клад медных согдийских монет, превышающий 4500 экземпляров.",
          en: "In Bukhara Sughd, research continues on one of the largest urban centers of the Paikend oasis. Paikend is also well known from written sources as a separate principality of Bi, a \"City of Merchants \" located on the route of the Great Silk Road and traded with China in the East and owned sea trading posts on the Black Sea. Archaeological research revealed the citadel with the Zoroastrian temple of fire, the cathedral mosque and minaret, the ruler's palace, the treasury, the military arsenal and the barracks located along the walls. In Shahristan I-II, a monumental fortification, residential quarters, street arteries with shops of metalworkers, ceramists, bakers, reception rooms of tabibs, as well as a unique treasure of Sogdian copper coins exceeding 4,500 copies were revealed.",
        },
        {
          uz: "Buxoro vohasida olib borilgan keng miqyosdagi tadqiqotlardan yana biri Kampirdevor nomi bilan mashhur voha devorini tadqiq etish hisoblanadi. Tadqiqotlar natijasida devorning 300 km ga cho‘zilganligi va 15 rustoq-tumanni qamrab olganligi aniqlandi. Devor har 8-10 km masofada minora, qalalar, darvozalar va ularning yonida karvonlarni nazorat qiladigan bojxonalar bilan mustahkamlangan. Voha devorining ilk qurilishi V asrga oid bo‘lib, u vohani ko‘chmanchilardan himoya qilish uchun xizmat qilgan.",
          ru: "Вторым по значению широким направлением работ является изучение известной оазисной стены Бухары Кампырдувала. Исследования показали, что стена охватывала 15 рустаков Бухары, растянувшись на более чем 300 км. На видимом расстоянии 8-10 км они были укреплены башнями, крепостями, воротами и располагавшимися рядом таможнями, контролировавшими проезд караванов. Его первоначальное строительство приходится на V в., и было связано не только с защитой оазиса от кочевой стены, но и в неспокойные времена разграничением этих групп населения от совместной борьбы с завоевателями.",
          en: "The second most important broad area of work is the study of the famous oasis wall of Bukhara, Kampyrduval. Studies have shown that the wall covered 15 rustaks of Bukhara, stretching for more than 300 km. At a visible distance of 8-10 km, they were fortified with towers, fortresses, gates and customs offices located nearby, which controlled the passage of caravans. Its initial construction dates back to the fifth century, and was associated not only with the protection of the oasis from the nomadic wall, but also in turbulent times, the separation of these groups of the population from the joint struggle with the conquerors.",
        },
        {
          uz: "Buxoro vohasida olib borilgan keng miqyosdagi tadqiqotlardan yana biri Kampirdevor nomi bilan mashhur voha devorini tadqiq etish hisoblanadi. Tadqiqotlar natijasida devorning 300 km ga cho‘zilganligi va 15 rustoq-tumanni qamrab olganligi aniqlandi. Devor har 8-10 km masofada minora, qalalar, darvozalar va ularning yonida karvonlarni nazorat qiladigan bojxonalar bilan mustahkamlangan. Voha devorining ilk qurilishi V asrga oid bo‘lib, u vohani ko‘chmanchilardan himoya qilish uchun xizmat qilgan.",
          ru: "На основе анализа нумизматических данных подтверждено ранее существовавшее положение о наличии в Средней Азии в IX - X вв. локальных экономических областей со своими специфическими денежными единицами.",
          en: "Based on the analysis of numismatic data, the previously existing position about the presence of local economic regions with their own specific monetary units in Central Asia in the IX - X centuries are confirmed.",
        },
        {
          uz: "IX – X asrlarda Markaziy Osiyoda o‘ziga xos pul muomalalari yo‘lga qo‘yilgan alohida iqtisodiy hududlar mavjud bo‘lganligi borasidagi fikrlar yangi numizmatik materiallar asosida o‘z tasdig‘ini topdi.",
          ru: "",
          en: "",
        },
        {
          uz: "Shoshtepada aniqlangan eramizdan avvalgi II asrlarga oid xochsimon shakldagi arxitektura qoldiqlari – qadimgi Toshkent hududida shaharsozlik madaniyatining paydo bo‘lishini namoyon etadi. Keyingi yillarda olib borilgan tadqiqotlar davomida IX-XI va XIII-XVI asrlarga oid Toshkent-Binkat o‘rta asr shahrining ko‘rinishi tiklandi.",
          ru: "",
          en: "",
        },
      ],
    },
    {
      title: {
        uz: "Qadimgi ishlab chiqarish jarayonlarini kimyoviy-texnologik o‘rganish va O‘zbekiston moddiy-madaniy merosini saqlash",
        ru: "Химико-технологическое изучение древних ремесленных производств и сохранение культурного наследия Узбекистана",
        en: "Chemical and technological study of ancient handicrafts and preservation of the cultural heritage of Uzbekistan",
      },
      text: [
        {
          uz: "Kimyoviy, spektral va boshqa turdagi tahlillar asosida Shimoliy Baqtriyadagi qadimgi mettallurgiya va metallga ishlov berish sohasida xom ashyo manbalari xarakteri, kimyoviy va tipologik o‘zgarishlar aniqlandi.",
          ru: "В области изучения древней металлургии и металлообработки Северной Бактрии, на основе химических, спектральных и других видов анализов определены типологические и химико-металлургические перемены, разная ориентация связей и изменения в характере источников сырья.",
          en: "In the field of the study of ancient metallurgy and metalworking in Northern Bactria, on the basis of chemical, spectral and other types of analyses, typological and chemical-metallurgical changes, different orientations of connections and changes in the nature of raw materials sources are determined.",
        },
        {
          uz: "Afrosiyobdan topilgan XII asrga oid monumental tasviriy surat bo‘laklari, Qoratepa buddaviylik markazidagi loy-ganchdan qilingan haykallar, Zartepa, Ko‘ktepa, Poykent, Xorazmdan topilgan numizmatik materiallar va metall buyumlarni saqlab qolish borasida konservatsiya va restavratsiya ishlari amalga oshirildi.",
          ru: "В области консервации и реставрации выполнена работа по сохранению многих уникальных фрагментов монументальной живописи XII в. Афрасиаба, глиняно-ганчевой скульптуры буддийского центра Каратепа, металлических изделий и нумизматического материала из Зартепа, Коктепа, Пайкенда, Хорезма.",
          en: "",
        },
        {
          uz: "Qoyatosh suratlarining noyob galeriyasi hisoblangan Sarmishsoyda o‘ziga xos konservatsiya ishlari olib borilib, yangi petrogliflar aniqlandi, qoyatosh suratlari joylashgan sathlarning yemirilishi to‘xtatilib, asli holiga keltirildi.",
          ru: "Оригинальные консервационные работы начаты на памятнике наскального искусства Сармишсай, выявлены новые петроглифы, приостановлено разрушение и восстановлен естественный вид плоскостей с наскальными рисунками.",
          en: "",
        },
        {
          uz: "5 ta mualliflik guvohnomalari (A.A. Abdurazzoqov, Sh.I. Ilhomov, M.A. Reutova, A. Qambarlarning) qadimiy porli materiallarni mustahkamlashning yangi usullari bo‘yicha topilgan ixtirolariga oid bo‘lib, ular XX asrning 70–80-yillarida Afrosiyob, Kanka, Shashtepa, Sapallitepa, Yunusobod Aktepa, Nisa va boshqa hovlilardagi xom ganch me’moriy yodgorliklarini konservatsiya qilishda qo‘llanilgan.",
          ru: "Получены 5 авторских свидетельств на изобретения сотрудников института по новым способам закрепления древних пористых материалов, которые были внедрены в 70-х-80-х годах XX в. При консервации памятников сырцовой архитектуры на городищах Афрасиаба, Канка, Шаштепа, Сапаллитепа, Актепа Юнусабадское, Ниса и др. (Авторы: А.А. Абдураззаков, Ш.И. Илхамов, М.А. Реутова, А. Камбаров)",
          en: "5 author's certificates were obtained for the inventions of the institute's employees on new methods of fixing ancient porous materials, which were introduced in the 70s-80s of the XX century. In conservation of monuments raw architecture at the ancient city of Afrasiab, Kanka, Shashtepe, Sapallitepe, Aktepe Yunusabad, Nisa, etc. (Authors: A. A. Abdurazzakov, Sh. I. Ilkhamov, M. A. Reutova, A. Kambarov).",
        },
        {
          uz: <ImagesCard imagesData={[list4Image1]}/>,
          ru: <ImagesCard imagesData={[list4Image1]}/>,
          en: <ImagesCard imagesData={[list4Image1]}/>
        },
      ],
    },
    {
      title: {
        uz: "Amaliy ishlanmalar:",
        ru: "Практические разработки:",
        en: "Practical developments:",
      },
      text: [
        {
          uz: "Sug‘d hududida ilk bor turli tarixiy davrlarda faoliyat yuritgan mis va bronzaga ishlov berish hunarmandchilik (kandakorlik) markazlari aniqlanib, metallarning kimyoviy tarkibi, qorishmalardagi metallar nisbati, ularni quyish usullarining dinamik rivojlanish aniqlandi. Shu bilan birgalikda Sug‘dda metallga ishlov berishini rivojlanishiga asos bo‘lgan xom-ashyo bazalarining manbalari aniqlandi.",
          ru: "Впервые выявлены ремесленные центры металлообработки меди и бронз, функционировавшие в разные исторические эпохи на территории Согда, прослежена динамика технологии употребления рецептуры сплавов, определен химический состав металла новых серий изделий, установлены источники сырья, на которых базировались очаги металлургии и металлообработки Согда.",
          en: "First identified handicraft centers metals of copper and bronze, which functioned in different historical periods on the territory of Sogdiana, the dynamics of technology for the use of the formulation of alloys, the chemical composition of the metal of a new series of articles, the sources of raw materials, which were based on the centers of metallurgy and Metalworking of Sogd.",
        },
        {
          uz: "2012 yilda Janubiy Orolbo‘yining bronza davriga oid Amirobod va Tozabog‘yob madaniyatlarining metalsozligini o‘rganish bo‘yicha ilmiy ishlar olib borildi. Shu bilan birga metal buyumlarning kimyoviy metalurgik xossalari o‘rganildi, metallarni aniq xom-ashyo markazlariga bog‘lashga harakat qilindi, kimyoviy guruhlar namunalarining tarqalishi kartografiyasi ishlab chiqildi, metall buyumlarni tipologik tahlili amalga oshirildi, topilgan metall namunalarini ma’lum hududlar madaniyatlaridagi metall buyumlari bilan taqqoslandi, shuningdek Xorazm hududida bronza davri metalsozligi rivojlanishining tarixiy ta’rifi berildi.",
          ru: "В 2012 г. проведены работы по изучению металлургии тазабагъябской, амирабадской культур Южного Приаралья эпохи бронзы и горнорудной базе Кызылкумских гор. Были изучены такие вопросы как химико-металлургическая характеристика изделий, сделаны попытки привязки металла к рудным источникам сырья, проведена картография распространения образцов химических групп и типологический анализ металлического инвентаря, определена взаимосвязь исследованного металла с металлом синхронных памятников и культур сопредельных областей, дан исторический обзор развития металлургии эпохи бронзы на территории Хорезма.",
          en: "In 2012, work was carried out to study the metallurgy of the Tazabagyab and Amirabad cultures of the Southern Aral Sea region of the Bronze Age and the mining base of the Kyzylkum Mountains. Studied issues such as chemical and metallurgical characteristics of products made attempts to bind metal to the ore sources of raw materials, conducted mapping of distribution of samples of the chemical groups and typological analysis of metal gear, defined the relationship of the investigated metal to metal synchronous monuments and cultures of the neighboring areas, providing a historical overview of the development of metallurgy in the bronze age on the territory of Khorezm.",
        },
        {
          uz: "Mavjud manbalardan kelib chiqqan holda aytish mumkinki, Qizilqum tog‘lari hududida ham qadimiy metallsozlik madaniyati mavjud bo‘lgan va rivojlangan.",
          ru: "На основе анализа имеющихся данных есть основание утверждать, что на территории Кызылкумских гор существовал древний горный промысел.",
          en: "Based on the analysis of the available data, there is reason to assert that there was an ancient mining industry on the territory of the Kyzylkum Mountains.",
        },
        {
          uz: "Arxeologik topilmalarni kimyoviy-texnologik jihatdan o‘rganish sohasida ilk o‘rta asr Afrosiyob devoriy suratlaridagi mineral bo‘yoqlarning organik tarkibi tadqiq etildi. Xromatogramlarni o‘rganish asosida yelim sifatida mevali daraxtlarning qorishmalari ishlatilganligi aniqlandi. Respublika hududida olib borilgan arxeologik qazishmalar davomida aniqlangan turli qadimiy topilmalarni restavratsiya va dalada konservatsiya qilish borasida ham katta ishlar bajarildi. Ilk o‘rta asr Sug‘d tasviriy san’ati rivojlanishiga doir qimmatli ma’lumotlar beruvchi, Afrosiyob yodgorligida arablargacha bo‘lgan davrga oid devoriy suratlarni ajratib olish bo‘yicha konservatsiya ishlari olib olib borildi. Afrosiyobning qoraxoniylar davriga oid noyob devoriy sur’atlarini restavratsiya qilish ishlari davom ettirilishi natijasida turli parchalarni alohida syujetlarga bog‘lash imkoni paydo bo‘ldi.",
          ru: "В области химико-технологического исследования археологических материалов проведено изучение органических связующих минеральных красок росписей Афрасиаба эпохи раннего средневековья. С помощью изучения хроматограмм выявлено, что в качестве клея использовались камеди фруктовых деревьев. Большие работы были проведены в области полевой консервации и практической реставрации разнообразных древних материалов, обнаруженных на памятниках республики в процессе археологических раскопок. Проведены консервационные работы на городище Афрасиаб по снятию настенных росписей доарабского периода, которые несут в себе новый информационный материал по изобразительному искусству Согда эпохи раннего средневековья. Продолжена реставрация уникальных росписей Афрасиаба караханидского периода, в результате чего появилась возможность соединить разрозненные фрагменты в сюжетные сцены. В ходе реставрационных работ к экспозиции были подготовлены четыре крупные сюжетные композиции и отреставрировано 47 фрагментов, относящихся к различным композиционным сценам. Шесть подготовленных фрагментов переданы на экспозицию в музей основания города Самарканда на Афрасиабе. Проведены работы по реставрации глиняно-ганчевой скульптуры из Каратепа, резной глины и ганча из Пайкенда, металлических предметов и керамики из различных археологических объектов республики. Продолжены работы по консервации и документированию наскальных рисунков из Сармишсая. Частично была восстановлена водяная мельница, относящаяся к XIX в.",
          en: "In the field of chemical and technological research of archaeological materials, the study of organic binding mineral paints of Afrasiab paintings of the Early Middle Ages was carried out. By studying the chromatograms, it was revealed that the gum of fruit trees was used as an adhesive. Extensive work was carried out in the field of conservation and practical restoration of various ancient materials found on the monuments of the republic in the course of archaeological excavations. Conservation works were carried out at the Afrasiab settlement to remove the wall paintings of the pre-Arab period, which contain new information material on the fine art of Sogd of the early Middle Ages. The restoration of the unique murals of Afrasiab of the Karakhanid period continued, as a result of which it became possible to combine the scattered fragments into plot scenes. During the restoration work, four major story compositions were prepared for the exhibition and 47 fragments related to various composition scenes were restored. Six prepared fragments were transferred to the museum of the foundation of the city of Samarkand on Afrasiab. Restoration works were carried out on clay-ganch sculptures made of Karatepe, carved clay and ganch from Paykend, metal objects and ceramics from various archaeological sites of the republic. The conservation and documentation of the Sarmishsay rock carvings continued. A water mill dating back to the 19th century was partially restored.",
        },
        {
          uz: "Markaziy Osiyo va, xususan, Oʻzbekistonning dehqon va koʻchmanchi qabilalarining urbanizatsiya yoʻllari va moddiy madaniyati tarkibi boʻyicha sifatli yangi materiallar olingan. Jez davrining dastlabki davrlari uchun asosiy materiallar Oʻzbekiston janubidagi Jarqoʻton va Bustan yodgorliklar guruhidan olingan. Jarqoʻton protoshaharlarning kelib chiqishi va rivojlanishi, shuningdek, erta shahar madaniyatining barcha atributlariga ega boʻlgan birinchi davlat shakllanishlarining namunasidir.",
          ru: "Получены качественно новые материалы о путях урбанизации и составе материальной культуры земледельческих и кочевых племен Центральной Азии и, в частности, Узбекистана. Для ранних периодов бронзового века основные материалы получены из памятников юга Узбекистана - Джаркутана и группы памятников Бустан. Джаркутан является примером возникновения и развития протогородов и первых государственных образований со всеми атрибутами ранней городской культуры.",
          en: "Qualitatively new materials on the ways of urbanization and the composition of the material culture of agricultural and nomadic tribes of Central Asia and, in particular, Uzbekistan were obtained. For the early periods of the Bronze Age, the main materials were obtained from the monuments of the south of Uzbekistan-Jarkutan and the Bustan group of monuments. Jarkutan is an example of the origin and development of proto-cities and the first state formations with all the attributes of early urban culture."
        },
        {
          uz: "Oʻzbekistonning janubiy hududlarida shahar madaniyatining shakllanishi va rivojlanish jarayonlari qishloq xoʻjaligi, hunarmandchilik va madaniyatning rivojlanishi nuqtai nazaridan oʻrganilgan. Karatepe buddaviylik markazida olib borilgan arxeologik qazishmalar Termiz-Termezning Kushonlar davrida Markaziy Osiyo buddaviyligining yirik markazi boʻlganligini koʻrsatdi. Bu yerda topilgan badiiy madaniyat obʼyektlari Baktriyaning buddaviylik madaniyatining oʻziga xosligini koʻrsatadi.",
          ru: "Изучены процессы формирования и развития городской культуры в южных регионах Узбекистана в свете развития земледелия, ремесел и культуры. Археологические раскопки в буддийском центре Каратепе показали, что Термита-Термез был крупным центром центральноазиатского буддизма в кушанскую эпоху. Найденные здесь объекты художественной культуры свидетельствуют о самобытности буддийской культуры Бактрии.",
          en: "The processes of formation and development of urban culture in the southern regions of Uzbekistan, in the light of the development of agriculture, crafts, and culture, are studied. Archaeological excavations in the Buddhist center of Karatepe have shown that Termita-Termez was a major center of Central Asian Buddhism in the Kushan era. The objects of artistic culture found here indicate the identity of the Buddhist culture of Bactria."
        },
        {
          uz: "Miloddan avvalgi davrga oid Shashtepe II ning xoch shaklidagi meʼmorchiligi qadimgi Toshkent hududida urbanizatsiyalashgan madaniyatning namoyoni boʻlishi mumkin. IX-XI va XIII-XVI asrlar oxiridagi Binkat-Toshkent oʻrta asr shahar markazining konturlari tiklandi.",
          ru: "Архитектура крестообразного сооружения Шаштепе II до н.э. может быть проявлением урбанизированной культуры на территории древнего Ташкента. Восстановлены контуры средневекового городского центра Бинкат-Ташкента IX-XI и конца XIII-XVI веков.",
          en: "The architecture of the cross-shaped structure of Shashtepe II in BC-may be a manifestation of urbanized culture on the territory of ancient Tashkent. The outlines of the medieval city center of Binkat-Tashkent of the IX-XI and the end of the XIII-XVI centuries have been restored."
        },
      ],
    },
  ];

  return (
    <section className={styles.container}>
      {data.map((item, index) => (
        <div key={index}>
          <h1 className={styles.sectionTitle}>{item.title[language]}</h1>
          <ul className={styles.sectionList}>
            {item.text.map((textItem, i) => (
              <li key={i} className={styles.sectionListItem}>
                {textItem[language]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
