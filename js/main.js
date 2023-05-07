// Константы

const SOME_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const SOME_NAME = [
  'Мария',
  'Иван',
  'Тимофей',
  'Юрий',
  'Софья',
  'Андрей',
  'Анна'
];

const SOME_DESCRIPTION = [
  'Отличное фото отличного дня',
  'Зацените!',
  'Ставьте лайки, пишите комментарии',
  'Крутое фото для Кекстаграма',
  'Люблю фотографировать',
  'Нужно больше фотографий!!!',
  'Люблю эту фотографию)',
  'Как вам моя фотография?'
]

// Получение рандомного числа

const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Проверка длины строки

const getLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false
};

// Количество объектов

const SOME_PEOPLE_COUNT = 25;

// Массив неповторяющихся чисел

const someSet = function (min, max, length) {
  let set = new Set();
  while (set.size < length) set.add(getRandom(min, max));
  return set;
}

const uniqueCommentId = Array.from(someSet(1, 25, 25))
const uniquePhotoId = Array.from(someSet(1, 25, 25))

// Генерация рандомных элементов

const getRandomArrayElement = (elements) => {
  return elements[getRandom(0, elements.length - 1)];
};

// Создание комментария

const createComment = () => {
  return {
    id: getRandomArrayElement(uniqueCommentId),
    avatar: 'img/avatar-' + getRandom(1, 6) + '.svg',
    message: getRandomArrayElement(SOME_MESSAGE),
    name: getRandomArrayElement(SOME_NAME)
  };
};

// Создание объекта

const createObject = () => {
  return {
    id: getRandomArrayElement(uniquePhotoId),
    url: 'photos/' + getRandom(1, SOME_PEOPLE_COUNT) + '.jpg',
    description: getRandomArrayElement(SOME_DESCRIPTION),
    likes: getRandom(15, 200),
    comments: Array.from({ length: getRandom(1, 15) }, createComment)
  };
};

const someObjects = Array.from({ length: 25 }, createObject);

// Выведение в консоль итога

console.log(someObjects);
