import { isKeyEscape } from "./util.js";

const modal = document.querySelector('.big-picture');
const bigImage = modal.querySelector('.big-picture__img');
const imageCapture = modal.querySelector('.social__header');
const thumbnails = document.querySelectorAll('.picture');
const closeButton = document.querySelector('.big-picture__cancel')
const modalOpened = document.querySelector('body');
const commentsContainer = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.social__comments-loader');
const commentsCounter = document.querySelector('.social__comment-count');

const COMMENTS_QUANTITY = 5;
let commentsShown = 0;
let commentsArray = [];

// Добавление комментариев

const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');
  comment.innerHTML =
  `<img class="social__picture"
  src=""
  alt=""
  width="35" height="35">
  <p class="social__text"></p>`;

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
}

const renderComments = () => {
  commentsShown += COMMENTS_QUANTITY;

  if (commentsShown >= commentsArray.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = commentsArray.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(commentsArray[i]);
    fragment.append(commentElement);
  };

  commentsContainer.innerHTML = '';
  commentsContainer.append(fragment);
  commentsCounter.innerHTML = `${commentsShown} из <span class="comments-count">${commentsArray.length}</span> комментариев`;
}

// Обработчик Esc закрытия

const closePhotoHandler = (evt) => {
  if (isKeyEscape(evt)) {
    evt.preventDefault();
    closeModal();
  };
};

// Добаление обработчика на открытие

const openModal = () => {
  modal.classList.remove('hidden');
  modalOpened.classList.add('modal-open');

  document.addEventListener('keydown', closePhotoHandler);
  document.addEventListener('click', closePhotoModalOverlay);
}

// Добавление обработчика на закрытие

const closeModal = () => {
  modal.classList.add('hidden');
  modalOpened.classList.remove('modal-open');

  document.removeEventListener('keydown', closePhotoHandler);
  document.removeEventListener('click', closePhotoModalOverlay);
  commentsShown = 0;
}

const closeModalClickHandler = () => {
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeModal();
  });
}

closeModalClickHandler();

// Добавление данных для больших фото

const addBigPhotoData = (url, comments, likes, description) => {
  bigImage.querySelector('img').src = url;
  imageCapture.querySelector('.social__caption').textContent = description;
  imageCapture.querySelector('.likes-count').textContent = likes;
  commentsArray = comments;
  renderComments();

}

commentsLoader.addEventListener('click', () => {
  renderComments();
})

export { closeModal, openModal, addBigPhotoData };

// Закрытие фото при клике вне модального окна

const closePhotoModalOverlay = (evt) => {
  if (evt.target === document.querySelector('.big-picture')) {
    closeModal();
  };
};
