// questionCategory
// 1 - Аудиал
// 2 - Визуал
// 3 - Кинестетик
const QUESTIONS = [
  {
    id: 0,
    questionCategory: 2,
    text: "Люблю наблюдать за облаками и звёздами",
  },
  {
    id: 1,
    questionCategory: 1,
    text: "Часто напеваю себе под нос",
  },
  {
    id: 2,
    questionCategory: 3,
    text: "Не признаю неудобную моду",
  },
  {
    id: 3,
    questionCategory: 3,
    text: "Обожаю ходить в сауну",
  },
  {
    id: 4,
    questionCategory: 2,
    text: "В автомобиле для меня важен его цвет",
  },
  {
    id: 5,
    questionCategory: 1,
    text: "Узнаю по шагам, кто вошёл в комнату",
  },
  {
    id: 6,
    questionCategory: 1,
    text: "Меня развлекает копировать чей-то диалект",
  },
  {
    id: 7,
    questionCategory: 2,
    text: "Много времени уделяю своей внешности",
  },
  {
    id: 8,
    questionCategory: 3,
    text: "Очень люблю массаж",
  },
  {
    id: 9,
    questionCategory: 2,
    text: "Когда есть время, люблю рассматривать людей",
  },
  {
    id: 10,
    questionCategory: 3,
    text: "Плохо себя чувствую, когда не наслаждаюсь ходьбой",
  },
  {
    id: 11,
    questionCategory: 2,
    text: "Рассматривая какую-то одежду в магазине, я убеждён, что мне в ней будет хорошо",
  },
  {
    id: 12,
    questionCategory: 1,
    text: "Когда слушаю старую мелодию, вспоминаю прошлое",
  },
  {
    id: 13,
    questionCategory: 2,
    text: "Часто читаю во время еды",
  },
  {
    id: 14,
    questionCategory: 1,
    text: "очень часто говорю по телефону",
  },
  {
    id: 15,
    questionCategory: 3,
    text: "Я считаю, что у меня есть склонность к полноте",
  },
  {
    id: 16,
    questionCategory: 1,
    text: "Отдаю предпочтение прослушиванию книги, чем самостоятельному прочтению",
  },
  {
    id: 17,
    questionCategory: 3,
    text: "После сложного дня моё тело находится в напряжении",
  },
  {
    id: 18,
    questionCategory: 2,
    text: "С удовольствием и очень много фотографирую",
  },
  {
    id: 19,
    questionCategory: 1,
    text: "Долго помню, что мне сказали друзья и знакомые",
  },
  {
    id: 20,
    questionCategory: 2,
    text: "С лёгкостью отдаю деньги за цветы, потому что они украшают жизнь",
  },
  {
    id: 21,
    questionCategory: 3,
    text: "Вечером люблю принимать горячую ванну",
  },
  {
    id: 22,
    questionCategory: 2,
    text: "Стараюсь записывать свои дела",
  },
  {
    id: 23,
    questionCategory: 1,
    text: "Часто разговариваю сам с собой",
  },
  {
    id: 24,
    questionCategory: 3,
    text: "После длительной поездки в машине долго прихожу в себя",
  },
  {
    id: 25,
    questionCategory: 1,
    text: "По тембру голоса я могу многое узнать о человеке",
  },
  {
    id: 26,
    questionCategory: 2,
    text: "Очень часто оцениваю людей по манере одеваться",
  },
  {
    id: 27,
    questionCategory: 3,
    text: "Люблю потянуться, расправить плечи, размяться во время работы",
  },
  {
    id: 28,
    questionCategory: 3,
    text: "Слишком жёсткая или мягкая кровать – мучение для меня",
  },
  {
    id: 29,
    questionCategory: 3,
    text: "Мне нелегко найти удобную обувь",
  },
  {
    id: 30,
    questionCategory: 2,
    text: "Очень люблю ходить в кино",
  },
  {
    id: 31,
    questionCategory: 2,
    text: "Могу узнать человека в лицо даже через много лет",
  },
  {
    id: 32,
    questionCategory: 1,
    text: "Люблю ходить под дождём, когда капли постукивают по зонтику",
  },
  {
    id: 33,
    questionCategory: 1,
    text: "Умею слушать то, что мне говорят",
  },
  {
    id: 34,
    questionCategory: 3,
    text: "Люблю танцевать, а в свободное время ещё и занимаюсь спортом",
  },
  {
    id: 35,
    questionCategory: 1,
    text: "Когда слышу стук часов, не могу заснуть",
  },
  {
    id: 36,
    questionCategory: 1,
    text: "У меня качественная стерео система",
  },
  {
    id: 37,
    questionCategory: 3,
    text: "Когда слышу музыку, начинаю отбивать такт ногой или пальцами",
  },
  {
    id: 38,
    questionCategory: 2,
    text: "На отдыхе не люблю осматривать памятки архитектуры",
  },
  {
    id: 39,
    questionCategory: 2,
    text: "Не выношу беспорядка",
  },
  {
    id: 40,
    questionCategory: 3,
    text: "Не люблю искусственных тканей",
  },
  {
    id: 41,
    questionCategory: 2,
    text: "Считаю, что атмосфера дома зависит от освещения",
  },
  {
    id: 42,
    questionCategory: 1,
    text: "Люблю ходить на концерты",
  },
  {
    id: 43,
    questionCategory: 3,
    text: "Рукопожатие многое может рассказать о человеке",
  },
  {
    id: 44,
    questionCategory: 2,
    text: "С удовольствием посещаю музеи и выставки",
  },
  {
    id: 45,
    questionCategory: 1,
    text: "Серьёзная дискуссия – это увлекательное занятие",
  },
  {
    id: 46,
    questionCategory: 3,
    text: "Прикосновение может рассказать гораздо больше слов",
  },
  {
    id: 47,
    questionCategory: 1,
    text: "В шуме не могу сосредоточиться",
  },
];

const form = document.querySelector('.questionnaire');

const resultsSection = document.querySelector('.results');
const channels = document.querySelectorAll('.channel');

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

function calculateCategorySum(answers, categoryToCalc) {
  const initialSum = 0;

  const sum = answers.reduce((accum, item) => {
    // console.log(accum);
    // console.log(item);

    // элемент не из той категории
    if (item.questionCategory !== categoryToCalc) {
      return accum;
    }

    if (item.answer === true) {
      // console.log('tytYES');
      return ++accum;
    } 

    return accum;
  }, initialSum);

  // console.log(sum);

  return sum;
}

// подсчет результатов
function calculateResults(answers) {
  const channelsSums = [];
  
  for (let index = 1; index < 4; index++) {
    channelsSums.push({
      // id: index, // TODO по моему это лишнее
      sum: calculateCategorySum(answers, index )
    });
  };

  return channelsSums;
}

// окно с результатами
function showResults(results) {
  // заполняем балы по каналам восприятия
  channels.forEach((channelElement, index) => {
    const channelScore = results[index].sum;
    channelElement.textContent = `${channelScore}`;
  });

  // показать секцию с результатами
  resultsSection.classList.add('results_show');

  // скролл до результатов
  const cords = resultsSection.getBoundingClientRect();
  console.log(cords);
  // прокрутка
  window.scroll(0, cords.top + window.scrollY);
}

// обработчик формы с вопросами
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const normalizedAnswers = prepareData(event.target);

  const resultsData = calculateResults(normalizedAnswers);

  console.log(resultsData);

  showResults(resultsData);
});

// рендеринг вопросов на старте
function createQuestionElement(questionData, index) {
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

  // TODO (only dev) временно проставляем ответы!
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