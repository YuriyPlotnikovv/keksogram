import { getLength, getRandom, getRandomArrayElement, shuffleArray, someArray } from "./util.js";
import { SOME_MESSAGE, SOME_NAME, SOME_DESCRIPTION, SOME_PEOPLE_COUNT } from "./data.js";

// Создание комментария

const createComment = (index) => {
  return {
    id: someArray[index],
    avatar: 'img/avatar-' + getRandom(1, 6) + '.svg',
    message: getRandomArrayElement(SOME_MESSAGE),
    name: getRandomArrayElement(SOME_NAME)
  };
};

// Создание объекта

const createObject = (index) => {
  return {
    id: someArray[index],
    url: 'photos/' + someArray[index] + '.jpg',
    description: getRandomArrayElement(SOME_DESCRIPTION),
    likes: getRandom(15, 200),
    comments: Array.from({ length: getRandom(1, 15) }, (_, index) => createComment(index++))
  };
};
const someObjects = Array.from({ length: SOME_PEOPLE_COUNT }, (_, index) => createObject(index++));

export { someObjects };
