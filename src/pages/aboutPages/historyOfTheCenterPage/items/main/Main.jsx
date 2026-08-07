import React, { useContext } from 'react';
import './main.scss';
import Category from '@/components/category/Category';
import { LanguageContext } from '@/context/LanguageContext';


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
        uz: 'Markaz tarixi',
        ru: 'История центра',
        en: 'History of the center',
      },
      link: '/',
    },
  ];


  return (
    <main className="history-of-the-center-page__main">

      
      <Category data={menuData} />


      <section className="history-of-the-center-page__main__section">
        <h1 className="history-of-the-center-page__main__section__title">
          {
            language === "uz"
              ? "Milliy Arxeologiya markazi tarixi"
              : language === "ru"
              ? "История Национального археологического центра"
              : "Milliy Arxeologiya markazi tarixi"
          }
        </h1>
        <div className="history-of-the-center-page__main__section__content-wrapper">
          <p className="history-of-the-center-page__main__section__content">
            <img
              className="history-of-the-center-page__main__section__image"
              src="https://archaeology.uz/storage/images/11.jpg"
              alt="Milliy Arxeologiya markazi"
            />
            

            {
              language === 'uz'
                ? "O‘zbekiston – turli davrlarga oid arxeologik yodgorliklar saqlanib qolgan qadim Sharq mintaqalaridan biri sifatida, dastlab XIX asr oxirlaridan boshlab V. V. Bartold, N. I. Veselovskiy kabi yirik sharqshunos olimlar, Akram Polvon Asqarov, Mirzo Abdullo Buxoriy, Muxammada Vafo, V. L. Vyatkin kabi mahalliy ishtiyoqmandalar tomonidan tadqiq etilgan bo‘lib, bu o‘z navbatida O‘zbekistondagi yosh fanlardan biri arxeologiyani shakllanishiga va rivojlanishiga zamin yaratgan."
              : language === 'ru'
                ? "Узбекистан — одна из древних областей Востока, где сохранились археологические памятники различных эпох. В конце XIX века такие выдающиеся востоковеды, как В. В. Бартольд и Н. И. Веселовский, а также местные энтузиасты, такие как Акрам Полвон Асқаров, Мирзо Абдулло Бухорий, Мухаммада Вафо и В. Л. Вяткин, начали исследовать эти памятники. Это, в свою очередь, заложило основу для формирования и развития археологии как одной из молодых наук в Узбекистане."
              : language === 'en'
                ? "Uzbekistan is one of the ancient regions of the East where archaeological monuments from various periods have been preserved. In the late 19th century, prominent Orientalists such as V. V. Bartold and N. I. Veselovskiy, along with local enthusiasts like Akram Polvon Asqarov, Mirzo Abdullo Bukhariy, Muhammad Vafo, and V. L. Vyatkin, began studying these monuments. This, in turn, laid the foundation for the formation and development of archaeology as one of the young sciences in Uzbekistan."
              : ""
            }
            {/* <br />  */}

            {
              language === "uz"
                ? "O‘zbekiston arxeologiyasi fanida uzoq yillar mobaynida o‘tkazilgan fundamental tadqiqotlar natijalarini tom ma’noda o‘zbek xalqi tarixi bilan bog‘lash mamlakatimiz mustaqillikka erishgan dastlabki yillardan boshlandi."
              : language === "ru"
                ? "В археологии Узбекистана результаты фундаментальных исследований, проведенных на протяжении многих лет, начали связываться с историей узбекского народа с первых лет независимости страны."
              : language === "en"
                ? "In Uzbek archaeology, the results of fundamental research conducted over many years began to be linked to the history of the Uzbek people from the early years of the country's independence."
              : ""
            }
            {/* <br />
            <br /> */}
            {
              language === "uz"
                ? "Mustaqillik yillarida nihoyatda faollashgan tadqiqotlar ko‘lami va ularning ilmiy samarasi tufayli, O‘zbekiston arxeologiyasi dunyo ilm-fani darajasiga ko‘tarildi. Bu esa, o‘z navbatida, O‘zbekiston arxeologiyasi uchun dunyodagi yetakchi arxeologiya markazlari bilan ilmiy hamkorlik o‘rnatishga, teng asosda xalqaro kelishuvlar tuzishga zamin yaratdi. Ayni paytda, O‘zbekiston hududida Avstraliya, AQSH, Germaniya, Italiya, Ispaniya, Polsha, Rossiya, Fransiya, Yaponiya kabi davlatlarning arxeolog olimlari bilan hamkorlikda xalqaro miqyosda arxeologik tadqiqotlar olib borilmoqda."
              : language === "ru" ? "В годы независимости масштаб исследований и их научная значимость привели археологию Узбекистана на мировой уровень."
              : language === "en"
                ? "During the years of independence, the scale of research and its scientific significance elevated Uzbek archaeology to a global level."
              : ""
            }
            {/* <br />
            <br /> */}
            {
              language === "uz"
                ? "1959 yildan “O‘zbekiston moddiy madaniyati tarixi”, 2002 yildan “O‘zbekistonda arxeologik tadqiqotlar” yillik to‘plamlari nashr etilib, ularda Respublikamiz hududida olib borilayotgan arxeologik tadqiqotlarning umumlashma ilmiy xulosalari berib boriladi. 2010 yildan esa “O‘zbekiston Arxeologiyasi” ilmiy jurnali chop etila boshlandi."
              : language === "ru"
                ? "С 1959 года публикуются ежегодные сборники «История материальной культуры Узбекистана», а с 2002 года — «Археологические исследования в Узбекистане», в которых представлены обобщенные научные выводы по археологическим исследованиям, проводимым на территории нашей республики."
              : language === "en"
                ? "Since 1959, annual collections titled 'History of Material Culture of Uzbekistan' have been published, and since 2002, 'Archaeological Research in Uzbekistan' has been released, presenting generalized scientific conclusions on archaeological research conducted in our republic."
              : ""
            }
            <br />
            <br />
            {
              language === "uz"
                ? "O‘zbekiston arxeologiyasi hozirgi paytda millat manfaati, uning madaniy –ma’naviy hayoti, mustaqillik g‘oyalari talab va istaklaridan kelib chiqqan holda faoliyat yuritmoqda, fanga xizmat qilmoqda. Belgili tavallud yoshlari nishonlangan Ahmad al–Farg‘oniy, imom Moturudiy, imom al–Buxoriy, Burhoniddin Marg‘inoniy, sohibqiron Amir Temur, Mirzo Ulug‘bek kabi ulug‘ salaflarimizning ilmiy merosi, ular yashab o‘tgan davr madaniyati taraqqiyotini o‘rganishda, Samarqand, Buxoro, Qarshi, Shahrisabz, Xiva, Termiz, Toshkent, Marg‘ilon singari qadimiy shaharlarimizning muborak tarixiy sanalarini rasman aniqlashda, o‘zbek arxeologiyasining xizmatlari beqiyos bo‘ldi. Ushbu yubiley tantanalarini BMT ning maxsus bo‘limi YUNЕSKO shafeligi ostida o‘tkazilishi, so‘nggi deyarli 25 yil davomida mamlakatimizda olib borilgan arxeologiya fani izlanishlarining naqadar serqirra va sermahsul bo‘lganligidan dalolat berdi. Bunga qadim tariximizni har tomonlama, chuqur o‘rganish uchun davlatimiz tomonidan ko‘rsatilayotgan g‘amxo‘rlik, yaratilgan shart-sharoitlar asosiy tamal toshi bo‘lganligini va ana shu omillar sababli O‘zbekiston arxeologiyasi rivojlanib dunyoga tanilganligini alohida ta’kidlashga burchlimiz."
                :language === "ru" ? "Археология Узбекистана в настоящее время работает в интересах нации, ее культурной и духовной жизни, исходя из требований и устремлений идей независимости."
                : language === "en"
                  ? "Uzbekistan's archaeology currently operates in the interests of the nation, its cultural and spiritual life, and in line with the demands and aspirations of the ideas of independence."
                  : ""
            }
          </p>
        </div>

        <div className='history-of-the-center-page__main__section__info-wrapper'>
          <h2 className='history-of-the-center-page__main__section__info'>
            {
              language === "uz"
              ? "Tashkil topgan yili: O‘zSSR Ministrlar Kabinetining 1970-yil 19-avgustidagi №426-sonli qaroriga ko‘ra dastlab Samarqand shahrida O‘zR FA Arxeologiya instituti tashkil etilgan. Keyinchalik, O‘zbekiston Respublikasi Prezidentining 2017-yil 17-fevraldagi PP-2789-sonli “Fanlar akademiyasi faoliyati, ilmiy-tadqiqot ishlarini tashkil etish, boshqarish va moliyalashtirishni yanada takomillashtirish chora-tadbirlari to‘g‘risida”gi qaroriga binoan O‘zbekiston Respublikasi Fanlar akademiyasi Arxeologik tadqiqotlar instituti deb nomlandi. O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019-yil 21-sentabrdagi 792-sonli qarori bilan O‘zbekiston Respublikasi Fanlar академияси Arxeologik tadқиқotлар институти negizида O‘zR Fanlar академияси Milliy arxeologiya markazi tashkil этилди."
              : language === "ru"
                ? "Год основания: В соответствии с постановлением Кабинета Министров УзССР от 19 августа 1970 года №426 в городе Самарканд был создан Институт археологии АН УзССР. Позднее, согласно постановлению Президента Республики Узбекистан от 17 февраля 2017 года №PP-2789 «О мерах по дальнейшему совершенствованию деятельности Академии наук, организации, управления и финансирования научно-исследовательских работ», институт был переименован в Институт археологических исследований Академии наук Республики Узбекистан. Постановлением Кабинета Министров Республики Узбекистан от 21 сентября 2019 года №792 на базе Института археологических исследований был создан Национальный центр археологии Академии наук Республики Узбекистан."
              : language === "en"
                ? "Year of establishment: According to Resolution No. 426 of the Cabinet of Ministers of the Uzbek SSR dated August 19, 1970, the Archaeology Institute of the Academy of Sciences of the Uzbek SSR was initially established in the city of Samarkand. Later, by the Resolution of the President of the Republic of Uzbekistan dated February 17, 2017, No. PP-2789, 'On measures to further improve the activities of the Academy of Sciences, organize, manage, and finance scientific research,' the institute was renamed the Archaeological Research Institute of the Academy of Sciences of the Republic of Uzbekistan. By Resolution No. 792 of the Cabinet of Ministers of the Republic of Uzbekistan dated September 21, 2019, the National Archaeology Center of the Academy of Sciences of the Republic of Uzbekistan was established on the basis of the Archaeological Research Institute."
              : ""
            }
            </h2>
        </div>
      </section>


    </main>
  );
}
