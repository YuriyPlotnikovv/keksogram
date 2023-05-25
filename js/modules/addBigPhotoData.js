const bigImageContainer = document.querySelector('.big-picture');
const bigImage = bigImageContainer.querySelector('.big-picture__img');
const imageCapture = bigImageContainer.querySelector('.social__header');
const commentsContainer = bigImageContainer.querySelector('.social__comments');

// Добавление данных для больших фото

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

/*В модуле, который отвечает за отрисовку окна с полноразмерным изображением,
доработайте код по выводу списка комментариев таким образом, чтобы список показывался не полностью,
а по 5 элементов, и следующие 5 элементов добавлялись бы по нажатию на кнопку «Загрузить ещё».
Не забудьте реализовать обновление числа показанных комментариев в блоке .social__comment-count. */
