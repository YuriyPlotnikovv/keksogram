import { SOME_MESSAGE, SOME_NAME, SOME_DESCRIPTION, SOME_PEOPLE_COUNT } from "./data.js"
import { commentField, hashTagsField } from "./addFormValidation.js";
// Получение рандомного числа

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Проверка длины строки

const getLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false
};

export { getLength };

// Проверка нажатой клавиши

const isKeyEscape = (evt) => {
  return evt.key === 'Escape';
}
export { isKeyEscape };

// Проверка активного поля

const isFieldFocused = () =>
document.activeElement === hashTagsField ||
document.activeElement === commentField;
export { isFieldFocused };

// Генерация рандомных элементов

const getRandomArrayElement = (elements) => {
  return elements[getRandom(0, elements.length - 1)];
};

// Генерация рандомного массива

const someSet = (min, max, length) => {
    let set = new Set();
    while (set.size < length) set.add(getRandom(min, max));
    return set;
}
const someArray = Array.from(someSet(1, 25, 25))

// Создание комментария

const createComment = (index) => {
  return {
    id: someArray[index],
    avatar: 'img/avatar-' + getRandom(1, 6) + '.svg',
    message: getRandomArrayElement(SOME_MESSAGE),
    name: getRandomArrayElement(SOME_NAME)
  };
};
const sameComments = () => Array.from({ length: getRandom(1, 15) }, (_, index) => createComment(index++));

// Создание объекта

const createObject = (index) => {
  return {
    id: someArray[index],
    url: 'photos/' + someArray[index] + '.jpg',
    description: getRandomArrayElement(SOME_DESCRIPTION),
    likes: getRandom(15, 200),
    comments: sameComments()
  };
};
const someObjects = () => Array.from({ length: SOME_PEOPLE_COUNT }, (_, index) => createObject(index++));

export { someObjects };
