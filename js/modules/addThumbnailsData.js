// Добавление данных миниатюр на страницу

const addThumbnailsData = (element, url, comments, likes, description) => {
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__img').alt = description;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.querySelector('.picture__likes').textContent = likes;
};
export { addThumbnailsData };
