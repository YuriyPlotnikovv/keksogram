import { isKeyEscape, isFieldFocused } from "./util.js";

const body = document.querySelector('body');
const fileField = document.querySelector('.img-upload__form');
const uploadButton = fileField.querySelector('#upload-file');
const uploadModal = fileField.querySelector('.img-upload__overlay');
const closeImgModalButton = fileField.querySelector('.img-upload__cancel');
const imgPreview = uploadModal.querySelector('.img-upload__preview').children;

export { uploadModal };
// Обработчик Esc

const closeEscImg = (evt) => {
  if (isKeyEscape(evt) && !isFieldFocused()) {
    evt.preventDefault();
    closeImgModal();
  }
}

// Добавление обработчика открытия окна

const openImgModal = () => {
  body.classList.add('modal-open');
  uploadModal.classList.remove('hidden');

  document.addEventListener('keydown', closeEscImg);
}

const openImgClickHandler = () => {
  uploadButton.addEventListener('click', () => {
    openImgModal();
  })
}
openImgClickHandler();

// Добавление обработчика закрытия окна

const closeImgModal = () => {
  fileField.reset();
  body.classList.remove('modal-open');
  uploadModal.classList.add('hidden');
  imgPreview[0].removeAttribute('style');
  imgPreview[0].removeAttribute('class');

  document.removeEventListener('keydown', closeEscImg);
}

const closeImgClickHandler = () => {
  closeImgModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeImgModal();
  })
}
closeImgClickHandler();
