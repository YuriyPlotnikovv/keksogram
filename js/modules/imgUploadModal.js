import { isKeyEscape } from "./util.js";

const uploadButton = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const closeImgModalButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const fileField = document.querySelector('.img-upload__form');
  
// Обработчик Esc

const closeEscImg = (evt) => {
  if (isKeyEscape(evt)) {
    evt.preventDefault;
    closeImgModal();
  }
}

// Добавление обработчика открытия окна

const openImgModal = () => {
  body.classList.add('modal-open');
  uploadModal.classList.remove('hidden');

  document.addEventListener('keydown', closeEscImg);
}

uploadButton.addEventListener('change', function () {
  openImgModal();
})

// Добавление обработчика закрытия окна

const closeImgModal = () => {
  fileField.reset();
  body.classList.remove('modal-open');
  uploadModal.classList.add('hidden');

  document.removeEventListener('keydown', closeEscImg);
}

closeImgModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeImgModal();
})
