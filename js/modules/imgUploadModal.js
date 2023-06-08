import { isFieldFocused, isKeyEscape } from "./util.js";

const body = document.querySelector('body');
const fileField = document.querySelector('.img-upload__form');
const uploadButton = fileField.querySelector('#upload-file');
const uploadModal = fileField.querySelector('.img-upload__overlay');
const closeImgModalButton = fileField.querySelector('.img-upload__cancel');
const imgPreview = uploadModal.querySelector('.img-upload__preview').children;

// Подмена изображения в превью

const changeImgPreview = () => {
  const fileReader = new FileReader()
fileReader.onload = () => {
  imgPreview[0].setAttribute('src', fileReader.result);
}
  fileReader.readAsDataURL(uploadButton.files[0]);
}

//

const closeUploadHandler = (evt) => {
  if (isKeyEscape(evt) && !isFieldFocused()) {
    evt.preventDefault();
    closeImgModal();
  };
};

// Добавление обработчика открытия окна

const openImgModal = () => {
  body.classList.add('modal-open');
  uploadModal.classList.remove('hidden');

  document.addEventListener('keydown', closeUploadHandler);
  document.addEventListener('click', closeUploadModalOverlay);
}

const openImgClickHandler = () => {
  uploadButton.addEventListener('change', () => {
    changeImgPreview();
    openImgModal();
  })
}

openImgClickHandler();

// Сброс слайдера

const sliderContainer = document.querySelector('.effect-level')
const sliderElement = sliderContainer.querySelector('.effect-level__slider');

const removeSlider = () => {
  sliderElement.noUiSlider.set(0);
  sliderElement.setAttribute('disabled', true);
  sliderContainer.setAttribute('hidden', true);
  imgPreview[0].removeAttribute('style');
  imgPreview[0].removeAttribute('class');
}

// Добавление обработчика закрытия окна

const closeImgModal = () => {
  fileField.reset();
  body.classList.remove('modal-open');
  uploadModal.classList.add('hidden');
  removeSlider();

  document.removeEventListener('keydown', closeUploadHandler);
  document.removeEventListener('click', closeUploadModalOverlay);
}

const closeImgClickHandler = () => {
  closeImgModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeImgModal();
  })
}
closeImgClickHandler();

export { closeImgModal };

// Закрытие окна при клике вне него

const closeUploadModalOverlay = (evt) => {
  if (evt.target === document.querySelector('.img-upload__overlay')) {
    closeImgModal();
  };
};
