const thumbnails = document.querySelectorAll('.picture');
const modal = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel')
const modalOpened = document.querySelector('body');
const commentCount = modal.querySelector('.social__comment-count');
const commentLoader = modal.querySelector('.comments-loader');

const addThumbnailClickHandler = function (thumbnail) {
  thumbnail.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('hidden');
    commentCount.classList.add('hidden');
    commentLoader.classList.add('hidden');
    modalOpened.classList.add('modal-open');
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i]);
}

const addModalClickHandler = function () {
  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('hidden');
    modalOpened.classList.remove('modal-open');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modal.classList.add('hidden');
      modalOpened.classList.remove('modal-open');
    }
  });
}
addModalClickHandler();
