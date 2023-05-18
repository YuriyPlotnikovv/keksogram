const bigImageContainer = document.querySelector('.big-picture');
const bigImage = bigImageContainer.querySelector('.big-picture__img');
const imageCapture = bigImageContainer.querySelector('.social__header');
const commentsContainer = bigImageContainer.querySelector('.social__comments');

const addBigPhotoData = (url, comments, likes, description) => {
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
}

export { addBigPhotoData };
