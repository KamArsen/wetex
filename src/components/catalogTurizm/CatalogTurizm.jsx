import React, { useState } from 'react';
import './CatalogTurizm.css'


const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  
  padding: '10px',
  margin: 'auto'
};

const imageStyle = {
  width: '800px',
  height: '650px',
  marginRight: '20px'
};

const CatalogTurizm = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      id: 1,
      image: 'https://asiamountains.net/assets/cache_image/assets/lib/resized/368/1600x1200_0x0_d0b.jpg',
      title: 'О Чуйе',
      description: 'Чуйская область занимает сев. часть Кыргыз ской Республики. С сев. и зап. сторон область граничит с Казахстаном, на юго-западе — с Та ласской, на юге — с Жалал-Абадской и Нарынс кой, на востоке — с Ысык-Кёлской областя ми. В составе области 8 адм. р-нов (Аламедин ский, Жайылский, Кеминский, Московский, Панфиловский, Сокулукский, Чуйский, Исык- Атинский). В областном подчинении находятся г. Токмок, в р-нах 3 города (Кант, Кара-Бал- та, Шопоков), 6 посёлков городского типа (Ак- Тюз, Кайынды, Кашка, Кемин, Орловка), 105 айыл окмётю, 327 сёл. На территории области расположена столица республики г. Бишкек. Численность населения области —770,8 тыс. чел. (по данным переписи, проведённой в 1999, за исключением жителей г. Бишкек), занимаемая площадь равна 20,2 км2. Областной центр — г. Бишкек. До 1939 на нынешней территории области создавались различные административ но-территориальные образования (округ, кантон, волость и др.). 1939—1959 — Фрунзенская об ласть; 1959—90 — р-ны республиканского под чинения; с 14 декабря 1990 образована Чуйская область.Юж. часть области занимает одна из крупных жайлоо — Суусамырская долина. Она располо жена на высоте 2000—3200 м. По направлению к западу подножье долины постепенно повыша ется. Зап. часть долины называется Дубан-Ке- чуу, центральная — Суусамыр, вост.— Зап. Ка ракол.Из полезных ископаемых имеются: золото (Талды-Булак, Далпран, Каматор), железо, ти тан, хром, никель, свинец, цинк, редкоземель ные элементы (Ак-Тюз). Много также месторож дений неметаллического происхождения: песок, глина, мергель, соль, тальк, гранит-сиенит, из весть, мрамор, гранит, кварцит. В местах, рас положенных ближе к тектоническим трещинам расположены минеральные и горячие источники (в ущельях Ысык-Ата, Аламюдюн, Ак-Суу).'
    },
    {
      id: 2,
      image: 'https://asiamountains.net/assets/cache_image/assets/lib/resized/370/1600x1063_0x0_d0b.jpg',
      title: 'Чем заняться в Оше – туры и достопримечательности',
      description: 'Город Ош – второй по величине город в Кыргызстане и один из самых древних городов Средней Азии. Точная дата его возникновения неизвестна. Письменная история его насчитывает свыше тысячелетия, а археологические находки ведут вообще в трехтысячелетнюю давность.Легенды связывают основание города с такими персонажами мировой истории, как древнеизраильский царь Соломон (Сулейман) и греческий правитель Александр Македонский. Впервые Ош упоминается в арабских источниках IXв.. Ученые до сих пор не могут прийти к единому мнению в вопросе этимологии названия города. Служители религиозных культов пытаются связать происхождение города с легендами, но ни одна из легенд не объясняет ни факта возникновения города, ни этимологии его названия.Главная достопримечательность города — гора Тахти-Сулейман («Трон Соломона»), которая с древности считается одной из самых важных святынь местных мусульман - второй Меккой. На южном склоне Сулейман - горы хранятся свидетельства древних культов исламского периода, и обнаружены древние земледельческие поселения эпохи бронзы. Именно с ними связывают возникновение города Ош.Ошский базар, который тянется около километра вдоль реки, описан во многих путеводителях, как наиболее красочный во всей Центральной Азии. Возле базара располагается самая большая мечеть в Кыргызстане – Мечеть Шаид Тепа.Первоначальное, деревянное здание мечети было построено в 1908-1910 годы, но позже было закрыто по указу советской власти и служило стойлом и кузницей. Мечеть была вновь открыта лишь в 1943 году, в знак религиозной толерантности советского правительства. В недавние годы мечеть претерпела ремонт, сделанный на средства Саудовской Аравии и сегодня она может вместить до 5000 верующих.'
    },
    {
      id: 3,
      image: 'https://st-1.akipress.org/cdn-st-0/qWl/8/690674.44078acc9800360444d2b9c128395fbe.jpg',
      title: 'Чем заняться в Баткене – туры и достопримечательности',
      description: 'Баткен расположен на крайнем юго-западе республики и состоит из четырех горных районов, расположенных на высоте от 400 до 5621 метров над уровнем моря. Область была образована в 1999 году.Административным центром области является город Баткен. Область включает в себя ряд анклавов принадлежащих Таджикистану и Узбекистану, образованных еще в сталинские времена, когда границы республик были определены правительством Советского Союза. Всего здесь семь анклавов - очень маленьких, по размеру не больше фермы. Самый крупный анклав Сох принадлежит Узбекистану.Регион не очень хорошо известен даже в самой республике. Большинство туристов, как правило, приезжают сюда из Кыргызстана или соседних республик. Вокруг области расположено несколько туристических баз («Пирамида-Долина» в Баткенской области, «Ак-Суу» и «Озгоруш» в регионе Ляйляк и «Дугаба» в Кадамжайском регионе), где в свое время останавливались участники международных альпинистских экспедиций.На территории региона расположено несколько древних городищ, представляющих интерес для исследователей.'
    },
    {
      id: 4,
      image: 'https://aquarida-tour.kz/userfiles/item/2558/fullimage1.jpg',
      title: 'Туризм в Кыргызстане. Иссык-кульская область',
      description: 'Иссык-Куль является самым знаменитым высокогорным озером Кыргызстана. Иссык-Куль или Ысык-Көл (горячее озеро) расположено на северо-востоке страны, на высоте 1608 метров над уровнем моря.Его площадь составляет 6236 кв. км, а максимальная глубина — 702 метра. Впервые это озеро было упомянуто в китайских летописях конца II века до новой эры. В них оно было названо Же-Хай (теплое море).Непосредственно к озеру примыкает неширокая приозерная равнина, которая рассечена руслами множества рек. Озеро находится в окружении гор, поэтому климат здесь довольно мягкий. Иссык-Куль является одним из крупнейших курортов Средней Азии.Летом температура воды здесь достигает +24 С, зимой — +4 С.Вода в озере имеет густой синий цвет, она никогда не замерзает и является соленой. Это озеро поражает своей красотой. Здесь развит курортный отдых с грязевым и термальным лечением.Вокруг озера тянутся курортные городки и поселки. Большой популярностью пользуются курорты Чолпон-Ата на северном берегу. Каракол интересен своей деревянной православной церковью Святой Троицы, деревянной дунганской мечетью и Музеем Пржевальского.Живописное ущелье Алтын-Арашан, которое расположено в 30 км к востоку от Каракола на высоте 3000 метров. Интересны золотые шахты Кумтора на южном берегу озера, Боомское ущелье с его красными скалами и водопад в Барскаунском ущелье, высота которого составляет около 100 метров.На территории Прииссыкулья насчитывается около 1500 исторических памятников, 320 из них охраняются государством. Сакский «Царский курган» расположен у села Курменты и датируется VII в до н. э. — II в н. э. Заслуживают внимания могильники Кок-Булак и Карашар. Камень Тамга-Таш исписан тибетскими письменами религиозного характера, которые относятся к VI-I вв. до н. э.Мыс Святой Нос на северо-восточной оконечности озера является местом расположения легендарного монастыря Армянской христианской церкви (IV-V вв.). Согласно преданиям, здесь находится могила святого апостола Матфея. '


    },
    {
      id: 5,
      image: 'https://img-fotki.yandex.ru/get/9932/50083820.38a/0_ee653_806ce210_XL.jpg',
      title: 'Чем заняться в Нарыне – туры и достопримечательности',
      description: 'Нарын – один из городов Кыргызстана. Он расположен в 186 км от границы с Китаем, на пересечении автомагистрали Бишкек-Торугарт. Нарын является административным центром Нарынской области. Здесь расположены музеи, институты, различные здания административного и государственного значения.Как и многие другие среднеазиатские города, Нарын возник как небольшое укрепление на торговых путях, которые вели из Восточного Туркестана (г. Кашгар) в Среднюю Азию. До XIX века как такового города в этой местности не было. Но с колонизацией Средней Азии Царской Россией в 1868 году здесь был размещен русский гарнизон и с этого момента начинается возведение города. После революции в России 1917 года Нарын попал под контроль Красной армии, но в 1920 году здесь произошло столкновение между советскими войсками и белогвардейцами. После кровопролитных боёв город был отбит и окончательно попал под контроль Красной армии. В 1927 году Нарын стал административным центром, созданной на тот момент Нарынской области.Численность населения современного города приблизительно 38-40 тыс. человек. Здесь расположены различные организации и государственные структуры. Так же здесь находится консульский отдел МИД Республики Кыргызстан. Таким образом, и сегодня Нарын является важным торговым пунктом из-за близости границы с Китаем, а сам город является свободной экономической зоной.'
    },
    {
      id: 6,
      image: 'https://sayakat.kg/wp-content/uploads/2019/06/152395691696115.jpg',
      title: 'Чем заняться в Таласе и Таласской долине – туры и достопримечательности',
      description: 'Талас - маленький, но известный город, расположенный в долине с одноименным названием. Таласская долина отрезана от остальных областей Кыргызстана цепью гор. Самый удобный маршрут проходит через Казахстан, но при этом необходимо получить визу. Однако достичь долины можно и через перевал Тео-Ашуу, свернув на север с главной дороги Бишкек - Ош, после пересечения Суусамырской долины.Талас известен как Земля Манаса. Считается, что именно здесь находится место рождения легендарного героя. В нескольких километрах от города расположен мавзолей Манаса. Там же есть музей, посвященный истории создания эпоса «Манас», который был построен к празднованию 1000-летия эпоса в 1995 году. Музей находится за холмом, который использовался как смотровая площадка часовыми, охранявшими долину. Археологи сделали здесь несколько довольно интересных открытий. Существует мнение, что холм имеет рукотворное происхождение и был создан людьми. Существуют и другие признаки древнего укрепления и защиты территории. В Таласской долине есть несколько мавзолеев, и очень похоже, что многие из них построены по образцу именно этого мавзолея.Сам гумбез, состоящий из одной комнаты, построен в типичном азиатском стиле на квадратном основании с восьмиугольной пирамидальной крышей. Комплекс украшает кирпичная кладка. Гумбез Манаса изображен на обратной стороне 20 сомовой купюры.',
   description2:''
    },
    {
      id: 7,
      image: 'https://cdn.tripster.ru/photos/0d4e5849-314e-41ab-958e-28bd8512133c.jpg',
      title: 'Чем заняться в Джалал-Абаде – туры и достопримечательности',
      description: 'Джалал-Абад – административный, экономический и культурный центр Джалал-Абадской области. Город расположен на юге долины Кугарт, у подножья горы Бабаш Ата на севере страны.Климат – сухой, с жарким летом, теплой, солнечной осенью с редкими ливневыми дождями, и теплой зимой с повышенной влажностью. Регион славится богатыми урожаями фруктов и овощей.Один из главных путей Великого Шелкового пути проходил через Джалал-Абад, который гостеприимно принимал путешественников в течение многих столетий. Об этом свидетельствуют результаты археологических раскопок, проведенных в отдаленных областях Саймалуу-Таш и Чаткальской долины. Джалал-Абад знаменит курортами с минеральными источниками. Путешественники, торговцы, туристы, паломники и немощные приезжали в Джалал-Абадскую область чтобы принять оздоровительные ванны с минеральными источниками, расположенным на горе Аюб Тау на высоте 700 метров над уровнем моря в трех километрах от города.  Легенда гласит, что водой из источника Хозрет-Аюб-Пайгамбар излечивали даже лепру. Рядом с источником некогда была могила, затем мечеть и после ханский дворец. Курорт Джалал-Абад расположен на одном из холмов, возвышающихся над городом. Несмотря на то, что минеральная вода на курорте солоноватого вкуса, она пользуется огромной популярностью у населения.У въезда на курорт на высоте 1000 метров расположено кафе "Икрам Аю", с площадки которого открывается прекрасный вид на город. Кафе представляет собой небольшой комплекс, включающий в себя сувенирный магазин, лавку с ремесленными изделиями и площадку для отдыха, с которой открывается панорамный вид на город, укрытый зелеными кронами деревьев. Курорт предлагает гостям несколько видов минеральной воды.'
    },
 
  ];

  const handleClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className='catalog'>
        <h1>Области</h1>
      <button onClick={() => handleClick(1)}>Чуй</button>
      <button onClick={() => handleClick(2)}>Ош</button>
      <button onClick={() => handleClick(3)}>Баткен</button>
      <button onClick={() => handleClick(4)}>Ыссык-кол</button>
      <button onClick={() => handleClick(5)}>Нарын</button>
      <button onClick={() => handleClick(6)}>Талас</button>
      <button onClick={() => handleClick(7)}>Жалал-абад</button>
 

      {selectedCard && (
        <div style={cardStyle} className='cardStyle'>
          <img
            src={cardData.find(card => card.id === selectedCard).image}
            alt={cardData.find(card => card.id === selectedCard).title}
            style={imageStyle}
          />
          <div>
            <h2>{cardData.find(card => card.id === selectedCard).title}</h2>
            <p>{cardData.find(card => card.id === selectedCard).description}</p>
            <p>{cardData.find(card => card.id === selectedCard).description2}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogTurizm;
