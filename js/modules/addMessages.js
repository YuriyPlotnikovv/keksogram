import { closeMessageHandler } from './util.js';
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
  }
};

// Сообщения об отправке данных на сервер

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
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
};

const showSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  successElement.classList.add('status-message');
  successElement
    .querySelector('.success__button')
    .addEventListener('click', () => {
      document.removeEventListener('keydown', closeMessageHandler);
      document.querySelector('.status-message').remove();
    });
  document.addEventListener('keydown', closeMessageHandler);
  document.addEventListener('click', closeUploadModalOverlay);
  messageFragment.appendChild(successElement);
  document.body.append(messageFragment);
};

export { showErrorMessage, showSuccessMessage };
