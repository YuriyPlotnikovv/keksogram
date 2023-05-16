import { someObjects } from "./util.js";

const bigImageContainer = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const bigImage = bigImageContainer.querySelector('.big-picture__img');
const imageCapture = bigImageContainer.querySelector('.social__header');
const commentsContainer = bigImageContainer.querySelector('.social__comments');

const BigImageFragment = document.createDocumentFragment();
const samePictures = someObjects();

samePictures.forEach(({ url, comments, likes, description }) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigImage.querySelector('img').src = url;
    imageCapture.querySelector('.social__caption').textContent = description;
    imageCapture.querySelector('.likes-count').textContent = likes;
    bigImageContainer.querySelector('.comments-count').textContent = comments.length;
    commentsContainer.innerHTML = '';
    comments.forEach((comment) => {
      const commentElement = document.createElement('li');
      commentElement.classList.add('social__comment');
      commentElement.innerHTML =
        `<img class="social__picture"
          src="${comment.avatar}"
          alt="${comment.name}"
          width="35" height="35">
        <p class="social__text">${comment.message}</p>`;
      commentsContainer.appendChild(commentElement);
    });
  });
  BigImageFragment.appendChild(pictureElement);
});
picturesContainer.appendChild(BigImageFragment);
