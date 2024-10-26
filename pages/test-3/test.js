const QUESTIONS = [
  {
    id: 0,
    text: "Вы считаете, что мимика и жесты – это:",
    answerOptions: [
      {
        text: "а) спонтанное выражение состояния человека в данный момент;",
        score: 2,
      },
      {
        text: "б) дополнение к речи;",
        score: 4,
      },
      {
        text: "в) предательское проявление нашего подсознания.",
        score: 3,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 1,
    text: "Считаете ли вы, что у женщин язык мимики и жестов более выразителен, чем у мужчин?",
    answerOptions: [
      {
        text: "а) да;",
        score: 1,
      },
      {
        text: "б) нет;",
        score: 3,
      },
      {
        text: "в) не знаю.",
        score: 0,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 2,
    text: "Как вы здороваетесь с очень хорошими друзьями?",
    answerOptions: [
      {
        text: "а) радостно кричите: «Привет!»;",
        score: 4,
      },
      {
        text: "б) сердечным рукопожатием;",
        score: 4,
      },
      {
        text: "в) вы слегка обнимаете друг друга;",
        score: 3,
      },
      {
        text: "г) приветствуете их сдержанным движением руки;",
        score: 2,
      },
      {
        text: "д) целуете друг друга в щеку.",
        score: 4,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 3,
    text: "Какая мимика и какие жесты, по вашему мнению, означают во всем мире одно и то же? (дайте три ответа)",
    answerOptions: [
      {
        text: "а) когда качают головой;",
        score: 0,
      },
      {
        text: "б) когда кивают головой;",
        score: 0,
      },
      {
        text: "в) когда морщат нос;",
        score: 1,
      },
      {
        text: "г) когда морщат лоб;",
        score: 1,
      },
      {
        text: "д) когда подмигивают;",
        score: 0,
      },
      {
        text: "е) когда улыбаются.",
        score: 1,
      },
    ],
    isMultiplyAnswers: true,
  },
  {
    id: 4,
    text: "Какая часть тела «выразительнее» всего?",
    answerOptions: [
      {
        text: "а) ступни;",
        score: 1,
      },
      {
        text: "б) ноги;",
        score: 2,
      },
      {
        text: "в) руки;",
        score: 3,
      },
      {
        text: "г) кисти рук;",
        score: 4,
      },
      {
        text: "д) плечи.",
        score: 2,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 5,
    text: "Какая часть вашего лица наиболее выразительна, по вашему мнению? (дайте два ответа)",
    answerOptions: [
      {
        text: "а) лоб;",
        score: 2,
      },
      {
        text: "б) брови;",
        score: 1,
      },
      {
        text: "в) глаза;",
        score: 3,
      },
      {
        text: "г) нос;",
        score: 2,
      },
      {
        text: "д) губы;",
        score: 3,
      },
      {
        text: "е) уголки рта.",
        score: 2,
      },
    ],
    isMultiplyAnswers: true,
  },
  {
    id: 6,
    text: "Когда вы проходите мимо витрины, в которой видно ваше отражение, на что вы в себе обращаете внимание в первую очередь?",
    answerOptions: [
      {
        text: "а) на то, как сидит одежда;",
        score: 1,
      },
      {
        text: "б) на прическу;",
        score: 3,
      },
      {
        text: "в) на походку;",
        score: 3,
      },
      {
        text: "г) на осанку;",
        score: 2,
      },
      {
        text: "д) ни на что.",
        score: 0,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 7,
    text: "Если кто-то, разговаривая или смеясь, часто прикрывает рот рукой, в вашем представлении это означает, что:",
    answerOptions: [
      {
        text: "а) ему есть что скрывать;",
        score: 3,
      },
      {
        text: "б) у него некрасивые зубы;",
        score: 1,
      },
      {
        text: "в) он чего-то стыдится.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 8,
    text: "На что вы прежде всего обращаете внимание у вашего собеседника?",
    answerOptions: [
      {
        text: "а) на глаза;",
        score: 3,
      },
      {
        text: "б) на рот;",
        score: 2,
      },
      {
        text: "в) на руки;",
        score: 2,
      },
      {
        text: "г) на позу.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 9,
    text: "Если ваш собеседник, разговаривая с вами, отводит глаза, это для вас признак…",
    answerOptions: [
      {
        text: "а) нечестности;",
        score: 3,
      },
      {
        text: "б) неуверенности в себе;",
        score: 2,
      },
      {
        text: "в) собранности.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 10,
    text: "Можно ли по внешнему виду узнать типичного преступника?",
    answerOptions: [
      {
        text: "а) да;",
        score: 0,
      },
      {
        text: "б) нет;",
        score: 3,
      },
      {
        text: "в) не знаю.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 11,
    text: "Мужчина заговаривает с женщиной. Он это делает потому, что…",
    answerOptions: [
      {
        text: "а) первый шаг всегда делает именно мужчина;",
        score: 1,
      },
      {
        text: "б) женщина неосознанно дала понять, что хотела бы, чтобы с ней заговорили;",
        score: 4,
      },
      {
        text: "в) он достаточно мужествен для того, чтобы рискнуть получить от ворот поворот.",
        score: 2,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 12,
    text: "У вас создалось впечатление, что слова человека не соответствуют тем «сигналам», которые можно уловить из его мимики и жестов. Чему вы больше поверите?",
    answerOptions: [
      {
        text: "а) словам;",
        score: 0,
      },
      {
        text: "б) «сигналам»;",
        score: 4,
      },
      {
        text: "в) он вообще вызовет у вас подозрение.",
        score: 3,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 13,
    text: "Поп-звезды вроде Мадонны или Принца представляют публике жесты, имеющие однозначно эротический характер. Что, по-вашему, за этим кроется?",
    answerOptions: [
      {
        text: "а) просто фиглярство;",
        score: 4,
      },
      {
        text: "б) они «заводят» публику;",
        score: 2,
      },
      {
        text: "в) это искреннее выражение их собственного настроения.",
        score: 0,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 14,
    text: "Вы в одиночестве смотрите фильм ужасов. Что с вами происходит?",
    answerOptions: [
      {
        text: "а) я смотрю совершенно спокойно;",
        score: 4,
      },
      {
        text: "б) я реагирую на происходящее каждой клеточкой своего существа;",
        score: 0,
      },
      {
        text: "в) закрываю глаза при особо страшных сценах.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 15,
    text: "Можно ли контролировать свою мимику?",
    answerOptions: [
      {
        text: "а) да;",
        score: 0,
      },
      {
        text: "б) нет;",
        score: 2,
      },
      {
        text: "в) только отдельные ее элементы.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 16,
    text: "При интенсивном флирте вы «изъясняетесь» преимущественно…",
    answerOptions: [
      {
        text: "а) глазами;",
        score: 3,
      },
      {
        text: "б) руками;",
        score: 4,
      },
      {
        text: "в) словами.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 17,
    text: "Считаете ли вы, что большинство наших жестов…",
    answerOptions: [
      {
        text: "а) «подсмотрены» у кого-то и заучены;",
        score: 2,
      },
      {
        text: "б) передаются из поколения в поколение;",
        score: 4,
      },
      {
        text: "в) заложены в нас от природы.",
        score: 0,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 18,
    text: "Если у человека борода, для вас это признак…",
    answerOptions: [
      {
        text: "а) мужественности;",
        score: 3,
      },
      {
        text: "б) того, что человек хочет скрыть черты своего лица;",
        score: 2,
      },
      {
        text: "в) того, что этот тип слишком ленив, чтобы регулярно бриться.",
        score: 1,
      },
    ],
    isMultiplyAnswers: false,
  },
  {
    id: 19,
    text: "Многие люди утверждают, что правая и левая стороны лица у них отличаются друг от друга. Вы согласны с этим?",
    answerOptions: [
      {
        text: "а) да;",
        score: 4,
      },
      {
        text: "б) нет;",
        score: 0,
      },
      {
        text: "в) только у пожилых людей.",
        score: 2,
      },
    ],
    isMultiplyAnswers: false,
  },
];

const form = document.querySelector('.questionnaire');

const resultsSection = document.querySelector('.results');
const totalScoreElement = document.querySelector('.total');

// вспомогательная
// function normalizeBoolean(value) {
//   if (value === "true") {
//       return true;
//   }

//   if (value === "false") {
//       return false;
//   }

//   return value;
// };

// нормализация данных формы
function prepareData(form) {
  console.log(form)
  const questionFieldsets = form.querySelectorAll('.question-item');
  
  // матрица 20х3 из инпутов
  const inputsMatrix = Array.from(questionFieldsets).map((fieldset) => {
    return Array.from(fieldset.querySelectorAll('.answer-input'));
  });


  // todo нужно найти индекс элемента с ответом
  // если мы имеем дело с checkbox, то это будет массив ответов
  const answerIndexes = [];
  inputsMatrix.forEach((inputGroup, matrixIndex) => {
    inputGroup.forEach((input, inputIndex) => {
      if (input.checked && input.type === 'checkbox') {
        if (Array.isArray(answerIndexes[matrixIndex])) {
          answerIndexes[matrixIndex].push(inputIndex);
        } else {
          answerIndexes[matrixIndex] = [inputIndex];
        }
      }

      if (input.checked && input.type === 'radio') {
        answerIndexes[matrixIndex] = inputIndex;
      }
    });
  });
  

  return answerIndexes;
}

function calculateResults(indexesList) {
  let scoreSum = 0;

  indexesList.forEach((answer, questionIndex) => {
    if (Array.isArray(answer)) {
      answer.forEach((answerIndex) => {
        scoreSum = scoreSum + QUESTIONS[questionIndex].answerOptions[answerIndex].score;
      })
    } else {
      scoreSum = scoreSum + QUESTIONS[questionIndex].answerOptions[answer].score;
    }
  });

  return scoreSum;
}

function showResults(finalScore) {
  // наполняем секцию результатами
  totalScoreElement.textContent = `${finalScore}`;

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

  const answerIndexesList = prepareData(event.target);

  const sum = calculateResults(answerIndexesList);

  // console.log(resultsData);

  showResults(sum);
});

function getCloneElement({ templateSelector, itemSelector }) {
  return document.querySelector(templateSelector).content
    .querySelector(itemSelector).cloneNode(true);
}

function generateAnswersForQuestion({ answerOptions, parentId, isMultiplyAnswers }) {
  return answerOptions.map((answer, index) => {
    const answerItem = getCloneElement({ templateSelector: '.answer-template', itemSelector: '.answer-item' });
    
    const answerText = answerItem.querySelector('.answer-text');
    answerText.textContent = answer.text;

    const label  = answerItem.querySelector('.answer-label');
    label.htmlFor = `${parentId}_${index}`;

    const input = answerItem.querySelector('.answer-input');
    input.id = `${parentId}_${index}`;
    input.name = parentId;
    
    if (isMultiplyAnswers) {
      input.type = 'checkbox';
      input.required = false;
    } else {
      input.type = 'radio';
    }
    
    return answerItem;
  })
}

// рендеринг вопросов на старте
function createQuestionElement(questionData, index) {
  const { text, id, answerOptions, isMultiplyAnswers } = questionData;

  const questionElem = getCloneElement({ templateSelector: '.question-template', itemSelector: '.question-item' });

  const questionText = questionElem.querySelector('.question-text');
  questionText.textContent = `${id + 1}. ${text}`;

  const answersContainer = questionElem.querySelector('.question-variants');
  const answerVariants = generateAnswersForQuestion({ answerOptions, parentId: id, isMultiplyAnswers });

  // TODO (only dev) временно проставляем ответы!
  // answerVariants[0].querySelector('.answer-input').checked = true;

  answersContainer.prepend(...answerVariants);

  return questionElem;
}

function renderInitialElements(questionsList) {
  const itemsToRender = questionsList.map((question) => {
    return createQuestionElement(question);
  });

  form.prepend(...itemsToRender);
};

renderInitialElements(QUESTIONS);
