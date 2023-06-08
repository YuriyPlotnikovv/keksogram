import { commentField, hashTagsField } from "./addFormValidation.js";

const isFieldFocused = () =>
document.activeElement === hashTagsField ||
  document.activeElement === commentField;

export { isFieldFocused };

// Проверка нажатой клавиши

const isKeyEscape = (evt) => {
  return evt.key === 'Escape';
};

export { isKeyEscape };

const closeMessageHandler = (evt) => {
  if (isKeyEscape(evt)) {
    evt.preventDefault();
    document.removeEventListener('keydown', closeMessageHandler);
    document.querySelector('.status-message').remove();
  };
};

// Сообщение об ошибке загрузки данных с сервера

const ALERT_SHOW_TIME = 4000;

const errorAlertMessage = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.style.position = 'absolute';
  errorContainer.style.zIndex = '100';
  errorContainer.style.top = '0';
  errorContainer.style.left = '0';
  errorContainer.style.right = '0';
  errorContainer.style.padding = '20px';
  errorContainer.style.fontSize = '30px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.background = 'purple';

  errorContainer.textContent = message;
  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { errorAlertMessage };

// Закрытие сообщения при клике вне окна

const closeUploadModalOverlay = (evt) => {
  if (evt.target === document.querySelector('.status-message')) {
    document.removeEventListener('keydown', closeMessageHandler);
    document.removeEventListener('click', closeUploadModalOverlay);
    document.querySelector('.status-message').remove();
  };
};

// Сообщения об отправке данных на сервер

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const messageFragment = document.createDocumentFragment();

const showErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  errorElement.classList.add('status-message');
  errorElement.querySelector('.error__button').addEventListener('click', () => {
    document.removeEventListener('keydown', closeMessageHandler);
    document.querySelector('.status-message').remove();
  });
  document.addEventListener('keydown', closeMessageHandler);
  document.addEventListener('click', closeUploadModalOverlay);
  messageFragment.appendChild(errorElement);
  document.body.append(messageFragment);
}

const showSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  successElement.classList.add('status-message');
  successElement.querySelector('.success__button').addEventListener('click', () => {
    document.removeEventListener('keydown', closeMessageHandler);
    document.querySelector('.status-message').remove();
  });
  document.addEventListener('keydown', closeMessageHandler);
  document.addEventListener('click', closeUploadModalOverlay);
  messageFragment.appendChild(successElement);
  document.body.append(messageFragment);
}

export { showErrorMessage, showSuccessMessage };

/* // Получение рандомного числа

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

export { getLength }; */

// Проверка активного поля

/* // Генерация рандомных элементов

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
 */
