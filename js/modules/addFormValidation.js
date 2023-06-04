const formField = document.querySelector('.img-upload__form');
const hashTagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

export { commentField, hashTagsField };

// Проверка валидности хэштегов

const PATTERN = /^#[A-Za-zА-Яа-яЁё0-9]{2,19}$/;
const MAX_TAGS_COUNT = 5;

const hasValidTag = (string) => PATTERN.test(string.slice());
const hasValidCountTags = (tags) => tags.length <= MAX_TAGS_COUNT;
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
}

const isValidTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCountTags(tags) && hasUniqueTags(tags) && tags.every(hasValidTag);
};

// Добавление дополнительной проверки Pristine

const pristine = new Pristine(formField, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error',
});

pristine.addValidator(hashTagsField, isValidTags, 'Ошибка ввода хэштегов');

formField.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValidForm = pristine.validate();
  if (isValidForm == true) {
    formField.submit();
  }
});
