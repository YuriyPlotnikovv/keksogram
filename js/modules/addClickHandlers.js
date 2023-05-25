import { isKeyEscape } from "./util.js";

const thumbnailsContainer = document.querySelector('.pictures');
const modal = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel')
const modalOpened = document.querySelector('body');

// Обработчик на Esc

const closeEscModal = (evt) => {
  if (isKeyEscape(evt)) {
    evt.preventDefault();
    closeModal();
  };
}

// Добаление обработчика на открытие

const openModal = () => {
  modal.classList.remove('hidden');
  modalOpened.classList.add('modal-open');

  document.addEventListener('keydown', closeEscModal);
}

const openModalClickHandler = function () {
  thumbnailsContainer.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
  });
}

openModalClickHandler();

// Добавление обработчика на закрытие

const closeModal = () => {
  modal.classList.add('hidden');
  modalOpened.classList.remove('modal-open');

  document.removeEventListener('keydown', closeEscModal);
}

const addModalClickHandler = function () {
  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });
}

addModalClickHandler();
