const formField = document.querySelector('.img-upload__form');
const hashTagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description')
const submitButton = document.querySelector('.img-upload__submit');

// Проверка валидности хэштегов

const isValidTags = (value) => {
  const hashTagsArray = value.trim().split(' ');
  const pattern = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  function isTrue(element) {
    return pattern.test(element);
  }
  if (hashTagsArray.length > 5) {
    alert('Не более 5 хэштегов')
  }
  return hashTagsArray.every(isTrue);
};

// Отключение ESC при фокусе

const escStopPropagation = (evt) => {
  if (evt.key === "Escape") {
    evt.stopPropagation()
  }
}

const addFocusHandler = (element) => {
  element.onfocus = () => {
    element.addEventListener('keydown', escStopPropagation)
  }
  element.onblur = () => {
    element.removeEventListener('keydown', escStopPropagation)
  }
}
addFocusHandler(hashTagsField);
addFocusHandler(commentField);

// Добавление дополнительной проверки Pristine

const pristine = new Pristine(formField, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error',
});

pristine.addValidator(hashTagsField, isValidTags, 'Ошибка ввода хэштегов');

formField.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate() === true) {
    formField.submit();
  } else {
    alert('Ошибка ввода хэштегов')
  }
})
