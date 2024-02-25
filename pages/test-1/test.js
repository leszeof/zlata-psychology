const CATEGORIES_STATIC_TEXT = [
  // фаза 1
  '(Тенденция к воспоминаниям травмирующих ситуаций, нервозности, напряжённости)',
  '(Ощущение безвыходности, бесперспективности жизни)',
  '(Повышенная, часто беспочвенная тревога, подавленность, апатия отсутствие интереса к жизни)',

  // фаза 2
  '(Неадекватная экономия на эмоциях, ограниченная эмоциональная отдача за счёт выборочного реагирования. Сторонние наблюдатели при этом обычно фиксируют эмоциональную чёрствость, неучтивость и равнодушие)',
  '(Выражается в потребности в самооправдании, вытеснении из сознания неприятных фактов. Эмоции не пробуждают или недостаточно стимулируют нравственные чувства)',
  '(Эмоциональное истощение, которое заставляет уходить от общения, замыкаться с целью восстановления душевных сил и экономии эмоциональных ресурсов)',
  '(Утрата интереса к людям, формализация общения и отношений)',

  // фаза 3
  '(человек не в состоянии входить в положение других людей, соучаствовать, сопереживать, отзываться на ситуации, которые должны трогать, пробуждать, усиливать интеллектуальную, волевую и нравственную отдачу. При усилении симптома всё реже проявляются положительные эмоции и всё чаще - отрицательные. Резкость, грубость, раздражительность, обиды, капризы дополняют симптом «эмоционального дефицита»)',
  '(В результате эмоциональной защиты реагирование без чувств и эмоций. В некоторых сферах жизни человек становится похожим на робота)',
  '(Отмечается полная или частичная утрата интереса к людям. Люди тяготят своими потребностями и проблемами, неприятно их присутствие, сам факт их существования)',
  '(Эмоциональная защита уже не справляется с нагрузками, и энергия эмоций перераспределяется между другими подсистемами индивида, в том числе физиологическими. Возникают психосоматические расстройства)',
];

// questionCategory - к какой из 12 КАТЕГОРИЙ относится вопрос
// 1, 2 , 3, 4 - фаза 1
// 5, 6 , 7, 8 - фаза 2
// 9, 10 , 11, 12 - фаза 3

// questionPhase - к какой из 3 ФАЗ относится вопрос
// 1 Напряжение
// 2 Резисценция
// 3 Истощение
const QUESTIONS = [
  {
    id: 0,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 1,
    text: "Организационные недостатки на работе постоянно заставляют нервничать, переживать, напрягаться.",
  },
  {
    id: 1,
    costYes: 0,
    costNo: 3,
    questionPhase: 1,
    questionCategory: 2,
    text: "Сегодня я доволен своей профессией не меньше, чем в начале карьеры."
  },
  {
    id: 2,
    costYes: 10,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 3,
    text: 'Я ошибся в выборе профессии или профиля деятельности (занимаю не своё место).',
  },
  {
    id: 3,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 4,
    text: 'Меня беспокоит то, что я стал хуже работать (менее продуктивно, качественнее, медленно).',
  },
  {
    id: 4,
    costYes: 5,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 5,
    text: 'Теплота взаимодействия с коллегами очень зависит от моего настроения — хорошего или плохого.',
  },
  {
    id: 5,
    costYes: 10,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 6,
    text: 'От меня как профессионала мало зависит благополучие коллег.',
  },
  {
    id: 6,
    costYes: 2,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 7,
    text: 'Когда я прихожу с работы домой, то некоторое время (часа 2-3) мне хочется побыть наедине, чтобы со мной никто не общался.',
  },
  {
    id: 7,
    costYes: 5,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 8,
    text: 'Когда я чувствую усталость или напряжение, то стараюсь поскорее «свернуть» дело.',
  },
  {
    id: 8,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 9,
    text: 'Мне кажется, что эмоционально я не могу дать заказчикам того, что требует профессиональный долг.',
  },
  {
    id: 9,
    costYes: 2,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 10,
    text: 'Моя работа притупляет эмоции.',
  },
  {
    id: 10,
    costYes: 2,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 11,
    text: 'Я откровенно устал от проблем, с которыми приходится иметь дело на работе.',
  },
  {
    id: 11,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 12,
    text: 'Бывает, что я плохо засыпаю (сплю) из-за переживаний, связанных с работой.',
  },
  {
    id: 12,
    costYes: 3,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 1,
    text: 'Взаимодействие с заказчиками требует от меня большого напряжения.',
  },
  {
    id: 13,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 2,
    text: 'Работа приносит мне всё меньше удовлетворения.',
  },
  {
    id: 14,
    costYes: 5,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 3,
    text: 'Я бы сменил место работы, если бы представилась возможность.',
  },
  {
    id: 15,
    costYes: 3,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 4,
    text: 'Меня часто расстраивает то, что я не могу должным образом оказать заказчику профессиональную поддержку, услугу, помощь.',
  },
  {
    id: 16,
    costYes: 0,
    costNo: 3,
    questionPhase: 2,
    questionCategory: 5,
    text: 'Мне всегда удаётся предотвратить влияние плохого настроения на деловые контакты.',
  },
  {
    id: 17,
    costYes: 0,
    costNo: 3,
    questionPhase: 2,
    questionCategory: 6,
    text: 'Меня очень огорчает, если что-то не ладится в отношениях с коллегами.',
  },
  {
    id: 18,
    costYes: 10,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 7,
    text: 'Я настолько устаю на работе, что дома стараюсь общаться как можно меньше.',
  },
  {
    id: 19,
    costYes: 5,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 8,
    text: 'Из-за нехватки времени, усталости или напряжения часто уделяю внимание партнёру (дома) меньше, чем положено.',
  },
  {
    id: 20,
    costYes: 2,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 9,
    text: 'Иногда самые обычные ситуации общения на работе вызывают раздражение.',
  },
  {
    id: 21,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 10,
    text: 'Я спокойно воспринимаю обоснованные претензии коллег.',
  },
  {
    id: 22,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 11,
    text: 'Общение с заказчиками побудило меня сторониться людей.',
  },
  {
    id: 23,
    costYes: 2,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 12,
    text: 'При воспоминании о некоторых коллегах по работе или заказчиках у меня портится настроение.',
  },
  {
    id: 24,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 1,
    text: 'Конфликты или разногласия с коллегами (заказчиками) отнимают много сил и эмоций.',
  },
  {
    id: 25,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 2,
    text: 'Мне всё труднее устанавливать или поддерживать контакты с заказчиками (коллегами).',
  },
  {
    id: 26,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 3,
    text: 'Обстановка на работе мне кажется очень трудной, сложной.',
  },
  {
    id: 27,
    costYes: 5,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 4,
    text: 'У меня часто возникают тревожные ожидания, связанные с работой: что-то должно случиться, как бы не допустить ошибки, смогу ли сделать всё, как надо, не сократят ли и т. п.',
  },
  {
    id: 28,
    costYes: 10,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 5,
    text: 'Если заказчик мне неприятен, я стараюсь ограничить время общения с ним или меньше уделять ему внимания.',
  },
  {
    id: 29,
    costYes: 3,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 6,
    text: 'В общении на работе я придерживаюсь принципа: «не делай людям добра, не получишь зла».',
  },
  {
    id: 30,
    costYes: 0,
    costNo: 2,
    questionPhase: 2,
    questionCategory: 7,
    text: 'Я охотно рассказываю домашним о своей работе.',
  },
  {
    id: 31,
    costYes: 2,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 8,
    text: 'Бывают дни, когда моё эмоциональное состояние плохо сказывается на результатах работы (меньше делаю, снижается качество, случаются конфликты).',
  },
  {
    id: 32,
    costYes: 5,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 9,
    text: 'Порой я чувствую, что надо проявить к заказчику эмоциональную отзывчивость, но не могу.',
  },
  {
    id: 33,
    costYes: 0,
    costNo: 2,
    questionPhase: 3,
    questionCategory: 10,
    text: 'Я очень переживаю за свою работу.',
  },
  {
    id: 34,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 11,
    text: 'Коллегам по работе отдаёшь внимания и заботы больше, чем получаешь от них признательности.',
  },
  {
    id: 35,
    costYes: 5,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 12,
    text: 'При мысли о работе мне обычно становится не по себе: начинает колоть в области сердца, повышается давление, появляется головная боль.',
  },
  {
    id: 36,
    costYes: 0,
    costNo: 3,
    questionPhase: 1,
    questionCategory: 1,
    text: 'У меня хорошие (вполне удовлетворительные) отношения с непосредственным руководителем.',
  },
  {
    id: 37,
    costYes: 0,
    costNo: 10,
    questionPhase: 1,
    questionCategory: 2,
    text: 'Я часто радуюсь, видя, что моя работа приносит пользу людям.',
  },
  {
    id: 38,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 3,
    text: 'Последнее время (или как всегда) меня преследуют неудачи в работе.',
  },
  {
    id: 39,
    costYes: 5,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 4,
    text: 'Некоторые стороны (факты) моей работы вызывают глубокое разочарование, повергают в уныние.',
  },
  {
    id: 40,
    costYes: 2,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 5,
    text: 'Бывают дни, когда контакты с заказчиками складываются хуже, чем обычно.',
  },
  {
    id: 41,
    costYes: 5,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 6,
    text: 'Я разделяю заказчиков (субъектов деятельности) на «хороших» и «плохих».',
  },
  {
    id: 42,
    costYes: 5,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 7,
    text: 'Усталость от работы приводит к тому, что я стараюсь сократить общение с друзьями и знакомыми.',
  },
  {
    id: 43,
    costYes: 0,
    costNo: 2,
    questionPhase: 2,
    questionCategory: 8,
    text: 'Я обычно проявляю интерес к личности коллег помимо того, что касается дела.',
  },
  {
    id: 44,
    costYes: 0,
    costNo: 5,
    questionPhase: 3,
    questionCategory: 9,
    text: 'Обычно я прихожу на работу отдохнувшим, со свежими силами, в хорошем настроении.',
  },
  {
    id: 45,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 10,
    text: 'Я иногда ловлю себя на том, что работаю с заказчиками автоматически, без души.',
  },
  {
    id: 46,
    costYes: 5,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 11,
    text: 'По работе встречаются настолько неприятные люди, что невольно желаешь им чего-нибудь плохого.',
  },
  {
    id: 47,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 12,
    text: 'После общения с неприятными заказчиками у меня бывает ухудшение физического или психического самочувствия.',
  },
  {
    id: 48,
    costYes: 10,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 1,
    text: 'На работе я испытываю постоянные физические или психологические перегрузки.',
  },
  {
    id: 49,
    costYes: 0,
    costNo: 5,
    questionPhase: 1,
    questionCategory: 2,
    text: 'Успехи в работе вдохновляют меня.',
  },
  {
    id: 50,
    costYes: 5,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 3,
    text: 'Ситуация, в которой я оказался на работе, кажется безысходной (или почти безысходной).',
  },
  {
    id: 51,
    costYes: 10,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 4,
    text: 'Я потерял покой из-за работы.',
  },
  {
    id: 52,
    costYes: 2,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 5,
    text: 'На протяжении последнего года была жалоба (возможно, не одна) в мой адрес со стороны заказчиков.',
  },
  {
    id: 53,
    costYes: 2,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 6,
    text: 'Мне удаётся беречь нервы благодаря тому, что многое из происходящего с заказчиками я не принимаю близко к сердцу.',
  },
  {
    id: 54,
    costYes: 3,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 7,
    text: 'Я часто с работы приношу домой отрицательные эмоции.',
  },
  {
    id: 55,
    costYes: 3,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 8,
    text: 'Я часто работаю через силу.',
  },
  {
    id: 56,
    costYes: 3,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 9,
    text: 'Прежде я был более отзывчивым и внимательным к заказчикам, чем теперь.',
  },
  {
    id: 57,
    costYes: 5,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 10,
    text: 'В работе с людьми я руководствуюсь принципом: не трать нервы, береги здоровье.',
  },
  {
    id: 58,
    costYes: 5,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 11,
    text: 'Иногда иду на работу с тяжёлым чувством: как всё надоело, никого бы не видеть и не слышать.',
  },
  {
    id: 59,
    costYes: 2,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 12,
    text: 'После напряженного рабочего дня я чувствую недомогание.',
  },
  {
    id: 60,
    costYes: 5,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 1,
    text: 'Контингент заказчиков, с которым я работаю, очень трудный.',
  },
  {
    id: 61,
    costYes: 5,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 2,
    text: 'Иногда мне кажется, что результаты моей работы не стоят тех усилий, которые я затрачиваю.',
  },
  {
    id: 62,
    costYes: 1,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 3,
    text: 'Если бы мне повезло с работой, я был бы более счастлив.',
  },
  {
    id: 63,
    costYes: 2,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 4,
    text: 'Я в отчаянии из-за того, что на работе у меня серьёзные проблемы.',
  },
  {
    id: 64,
    costYes: 3,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 5,
    text: 'Иногда я поступаю со своими заказчиками так, как не хотел бы, чтобы поступали со мной.',
  },
  {
    id: 65,
    costYes: 2,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 6,
    text: 'Я осуждаю заказчиков, которые рассчитывают на особое снисхождение, внимание.',
  },
  {
    id: 66,
    costYes: 3,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 7,
    text: 'Чаще всего после рабочего дня у меня нет сил заниматься домашними делами.',
  },
  {
    id: 67,
    costYes: 3,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 8,
    text: 'Обычно я тороплю время: скорей бы рабочий день кончился.',
  },
  {
    id: 68,
    costYes: 0,
    costNo: 10,
    questionPhase: 3,
    questionCategory: 9,
    text: 'Состояния, просьбы, потребности коллег обычно меня искренне волнуют.',
  },
  {
    id: 69,
    costYes: 5,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 10,
    text: 'Работая с людьми, я обычно как бы ставлю экран, защищающий от чужих страданий и отрицательных эмоций.',
  },
  {
    id: 70,
    costYes: 2,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 11,
    text: 'Работа с людьми (заказчиками) очень разочаровала меня.',
  },
  {
    id: 71,
    costYes: 10,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 12,
    text: 'Чтобы восстановить силы, я часто принимаю лекарства.',
  },
  {
    id: 72,
    costYes: 0,
    costNo: 5,
    questionPhase: 1,
    questionCategory: 1,
    text: 'Как правило, мой рабочий день проходит спокойно и легко.',
  },
  {
    id: 73,
    costYes: 3,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 2,
    text: 'Мои требования к выполняемой работе выше, чем то, чего я достигаю в силу обстоятельств.',
  },
  {
    id: 74,
    costYes: 0,
    costNo: 5,
    questionPhase: 1,
    questionCategory: 3,
    text: 'Моя карьера сложилась удачно.',
  },
  {
    id: 75,
    costYes: 3,
    costNo: 0,
    questionPhase: 1,
    questionCategory: 4,
    text: 'Я очень нервничаю из-за всего, что связано с работой.',
  },
  {
    id: 76,
    costYes: 5,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 5,
    text: 'Некоторых из своих постоянных коллег я не хотел бы видеть и слышать.',
  },
  {
    id: 77,
    costYes: 0,
    costNo: 5,
    questionPhase: 2,
    questionCategory: 6,
    text: 'Я одобряю коллег, которые полностью посвящают себя людям (заказчикам), забывая о собственных интересах.',
  },
  {
    id: 78,
    costYes: 0,
    costNo: 5,
    questionPhase: 2,
    questionCategory: 7,
    text: 'Моя усталость на работе обычно мало сказывается (никак не сказывается) в общении с домашними и друзьями.',
  },
  {
    id: 79,
    costYes: 10,
    costNo: 0,
    questionPhase: 2,
    questionCategory: 8,
    text: 'Если предоставляется случай, я уделяю заказчику меньше внимания, но так, чтобы он этого не заметил.',
  },
  {
    id: 80,
    costYes: 2,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 9,
    text: 'Меня часто подводят нервы в общении с людьми на работе.',
  },
  {
    id: 81,
    costYes: 10,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 10,
    text: 'Ко всему (или почти ко всему), что происходит на работе, я утратил интерес, живое чувство.',
  },
  {
    id: 82,
    costYes: 10,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 11,
    text: 'Работа с людьми плохо повлияла на меня как профессионала — обозлила, сделала нервным, притупила эмоции.',
  },
  {
    id: 83,
    costYes: 5,
    costNo: 0,
    questionPhase: 3,
    questionCategory: 12,
    text: 'Работа с людьми явно подрывает моё здоровье.',
  },
];

const form = document.querySelector('.questionnaire');

const resultsSection = document.querySelector('.results');
const total = document.querySelector('.total');
// фазы
const phases = document.querySelectorAll('.phase');
// категории
const categories = document.querySelectorAll('.category');
const categoiesStaticText = document.querySelectorAll('.category-static-text');

// const staticInfoModal = document.querySelector('.static-info-modal');

// вспомогательная
function normalizeBoolean(value) {
  if (value === "true") {
      return true;
  }

  if (value === "false") {
      return false;
  }

  return value;
};

// нормализация данных формы
function prepareData(form) {
  const formData = new FormData(form);
  // console.log(formData);

  const normalizedAnswers = [];
  formData.forEach((inputAnswer, inputIndex) => {
    console.log(inputAnswer);
    console.log(inputIndex);

    normalizedAnswers.push({
      answer: normalizeBoolean(inputAnswer),
      ...QUESTIONS[inputIndex]
    });
  });
  console.log(normalizedAnswers);

  return normalizedAnswers;
}

// подсчет результатов
function calc(accum, question) {
  if (question.answer === true && question.costYes) {
    console.log('tytYES');
    return accum + question.costYes;
  } 
  
  // ответ НЕТ + есть вес ответа
  if (question.answer === false && question.costNo) {
    console.log('tytNO');
    return accum + question.costNo;
  }

  return accum;
}

function calculatePhaseSum(answers, categoryToCalc) {
  // console.log(answersList);
  // console.log(categoryToCalc);
  const initialSum = 0;

  const sum = answers.reduce((accum, item) => {
    // console.log(accum);
    // console.log(item);

    // элемент не из той фазы
    if (item.questionPhase !== categoryToCalc) {
      return accum;
    }

    return calc(accum, item);
  }, initialSum);

  console.log(sum);

  return sum;
}

function calculateCategorySum(answers, categoryToCalc) {
  // console.log(answersList);
  // console.log(categoryToCalc);
  const initialSum = 0;

  const sum = answers.reduce((accum, item) => {
    // console.log(accum);
    // console.log(item);

    // элемент не из той категории
    if (item.questionCategory !== categoryToCalc) {
      return accum;
    }

    return calc(accum, item);
  }, initialSum);

  console.log(sum);

  return sum;
}

function calculateResults(answers) {
  // считаем баллы для 12 категорий
  const categoriesSums = [];
  for (let index = 1; index < 13; index++) {
    categoriesSums.push({
      id: index, // TODO по моему это лишнее
      sum: calculateCategorySum(answers, index )
    });
  };

  // считаем баллы для 3 фаз
  const phasesSums = [];
  for (let index = 1; index < 4; index++) {
    phasesSums.push({
      id: index, // TODO по моему это лишнее
      sum: calculatePhaseSum(answers, index )
    });
  };

  // общая сумма баллов
  const totalSum = answers.reduce((accum, item) => {
    console.log(accum);
    console.log(item);

    return calc(accum, item);
  }, 0);

  console.log({
    categoriesSums,
    phasesSums,
    totalSum
  });

  return {
    categoriesSums,
    phasesSums,
    totalSum
  };
}

function getCategoryDescription(categoryPoints) {
  if (categoryPoints <= 9) {
    return 'несложившийся симптом';
  } else if (10 <= categoryPoints && categoryPoints <= 15) {
    return 'складывающийся симптом';
  } else if (categoryPoints >= 16) {
    return 'сложившийся симптом';
  }
}

function getPhaseDescription(phasePoints) {
  if (phasePoints <= 36) {
    return 'фаза не сформировалась';
  } else if (37 <= phasePoints && phasePoints <= 60) {
    return 'фаза в стадии формирования';
  } else if (phasePoints >= 61) {
    return 'сформировавшаяся фаза';
  }
}

function isDangerousCategory(points) {
  if (points >= 16) {
    return true;
  }

  return false;
}

function isDangerousPhase(points) {
  if (37 <= points && points <= 60) {
    return true;
  } else if (points >= 61) {
    return true;
  }

  return false;
}

function getTextForDangerousPhase(points) {
  if (37 <= points && points <= 60) {
    return '(фаза в стадии формирования)!!!';
  } else if (points >= 61) {
    return 'НЕЛЬЗЯ  ОСТАВЛЯТЬ  без  ВНИМАНИЯ!!!!';
  }
}

// окно с результатами
function showResults(results) {
  const {
    categoriesSums,
    phasesSums,
    totalSum
  } = results;

  // наполняем секцию результатами
  total.textContent = `${totalSum}`;

  // заполняем балы по фазам
  phases.forEach((phaseElement, index) => {
    const phaseScore = phasesSums[index].sum;
    phaseElement.textContent = `${phaseScore} (${getPhaseDescription(phaseScore)})`;

    if (isDangerousPhase(phaseScore)) {
      phaseElement.nextElementSibling.textContent = getTextForDangerousPhase(phaseScore);
    } 
  });

  // заполняем балы по категориям
  let hasDominantCategory;

  categories.forEach((categoryElement, index) => {
    const categoryScore = categoriesSums[index].sum;
    categoryElement.textContent = `${categoryScore} (${getCategoryDescription(categoryScore)})`;

    if (isDangerousCategory(categoryScore)) {
      categoryElement.nextElementSibling .textContent = 'ДОМИНИРУЕТ –> нужно задуматься над этим';

      if (hasDominantCategory) return; 
      hasDominantCategory = true;
      console.log(hasDominantCategory);
    }
  });

  // подстановка статичного текста в категории
  categoiesStaticText.forEach((paragraph, index) => {
    paragraph.textContent = CATEGORIES_STATIC_TEXT[index];
  });

  // показываем текст-предупреждение
  if (hasDominantCategory) {
    const dominantCategoryPS = document.querySelector('.dominant-category-ps');

    dominantCategoryPS.textContent = 'PS: Cамое простое, что Вы можете сделать – он-лайн консультации у психотерапевта. Пожалуйста, не оставляйте результаты данного теста без Вашего внимания. Берегите здоровье!';
  }

  // показать секцию с результатами
  resultsSection.classList.add('results_show');

  // скролл до результатов
  const coords = resultsSection.getBoundingClientRect();
  console.log(coords);
  // прокрутка
  window.scroll(0, coords.top + window.scrollY);
}

// обработчик формы с вопросами
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const normalizedAnswers = prepareData(event.target);

  const resultsData = calculateResults(normalizedAnswers);

  showResults(resultsData);
});

// рендеринг вопросов на старте
function createQuestionElement(questionData, index) {
  // console.log(questionData)
  const { text, id } = questionData;

  const questionElem = document
      .querySelector('.question-template')
      .content
      .querySelector('.question-item')
      .cloneNode(true);

  const questionText = questionElem.querySelector('.question-text');
  const questionLabels  = questionElem.querySelectorAll('.question-answer-label');
  const questionInputs = questionElem.querySelectorAll('.question-answer-input');

  questionText.textContent = `${id + 1}. ${text}`;
  
  questionLabels.forEach((label, index) => {
    label.htmlFor = `${id}_${index}`;
  });

  questionInputs.forEach((input, index) => {
    input.id = `${id}_${index}`;
    input.name = id;
  });

  // TODO временно проставляем ответы!
  // questionInputs[0].checked = true;

  return questionElem;
}

function renderInitialElements(questionsList) {
  const itemsToRender = questionsList.map((question) => {
    return createQuestionElement(question);
  });

  form.prepend(...itemsToRender)
};

renderInitialElements(QUESTIONS);
